/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include <glog/logging.h>
#include <chrono>

#include <net/mpi/mpi_communicator.hpp>
#include <ctx/cylon_context.hpp>
#include <table.hpp>
#include <ops/dis_join_op.hpp>

int main(int argc, char *argv[]) {
  if (argc < 3) {
    LOG(ERROR) << "There should be two arguments with paths to csv files";
    return 1;
  }

  auto start_start = std::chrono::steady_clock::now();
  auto mpi_config = new cylon::net::MPIConfig();
  auto ctx = cylon::CylonContext::InitDistributed(mpi_config);

  std::shared_ptr<cylon::Table> first_table, second_table, joined;
  auto read_options = cylon::io::config::CSVReadOptions().UseThreads(false).BlockSize(1 << 30);
  auto status = cylon::Table::FromCSV(ctx, argv[1], first_table, read_options);
  if (!status.is_ok()) {
    LOG(INFO) << "Table reading failed " << argv[1];
    ctx->Finalize();
    return 1;
  }

  status = cylon::Table::FromCSV(ctx, argv[2], second_table, read_options);
  if (!status.is_ok()) {
    LOG(INFO) << "Table reading failed " << argv[2];
    ctx->Finalize();
    return 1;
  }
  auto read_end_time = std::chrono::steady_clock::now();

  LOG(INFO) << "Read tables in "
            << std::chrono::duration_cast<std::chrono::milliseconds>(
                read_end_time - start_start).count() << "[ms]";
  class Cb : public cylon::ResultsCallback {
   public:
    virtual void OnResult(int tag, std::shared_ptr<cylon::Table> table) {
      LOG(INFO) << "Result received " << table->Rows();
    }
  };
  auto cb = std::make_shared<Cb>();
  std::shared_ptr<std::vector<int>> hash_cols = std::make_shared<std::vector<int>>();
  hash_cols->push_back(0);
  auto jc = cylon::join::config::JoinConfig::InnerJoin(0, 0);
  cylon::PartitionOpConfig *kP = new cylon::PartitionOpConfig(ctx->GetWorldSize(), hash_cols);
  auto cfg = std::make_shared<cylon::DisJoinOpConfig>(std::shared_ptr<cylon::PartitionOpConfig>(kP),
      std::shared_ptr<cylon::join::config::JoinConfig>(&jc));
  auto op = cylon::DisJoinOP(std::shared_ptr<cylon::CylonContext>(ctx), 
      first_table->get_table()->schema(), 0, cb, cfg);

  op.InsertTable(100, first_table);
  op.InsertTable(200, second_table);
  auto execution = op.GetExecution();
  execution->WaitForCompletion();
  auto join_end_time = std::chrono::steady_clock::now();

  LOG(INFO) << "First table had : " << first_table->Rows() << " and Second table had : "
            << second_table->Rows() << ", Joined has : " << joined->Rows();
  LOG(INFO) << "Join done in "
            << std::chrono::duration_cast<std::chrono::milliseconds>(
                join_end_time - read_end_time).count() << "[ms]";
  ctx->Finalize();
  return 0;
}
