(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(138)),o={id:"compile",title:"Compiling",sidebar_label:"Compiling"},l={id:"compile",isDocsHomePage:!0,title:"Compiling",description:"Cylon has C++ core, Java and Python bindings. You can compile these in three steps.",source:"@site/docs/compile.md",permalink:"/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/compile.md",sidebar_label:"Compiling",sidebar:"someSidebar",next:{title:"Architecture",permalink:"/docs/arch"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Python Environment",id:"python-environment",children:[{value:"Create a virtual environment",id:"create-a-virtual-environment",children:[]}]},{value:"OpenMPI",id:"openmpi",children:[{value:"From source",id:"from-source",children:[]},{value:"Installing with package manager",id:"installing-with-package-manager",children:[]}]},{value:"Building C++",id:"building-c",children:[]},{value:"Build C++, Python Cylon APIs",id:"build-c-python-cylon-apis",children:[]},{value:"Python Support",id:"python-support",children:[{value:"Example",id:"example",children:[]}]}],p={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Cylon has C++ core, Java and Python bindings. You can compile these in three steps."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"Here are the prerequisites for compiling Cylon."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"CMake 3.16.5"),Object(i.b)("li",{parentName:"ol"},"OpenMPI 4.0.1 or higher"),Object(i.b)("li",{parentName:"ol"},"Python 3.6 or higher"),Object(i.b)("li",{parentName:"ol"},"C++ 14 or higher")),Object(i.b)("h2",{id:"python-environment"},"Python Environment"),Object(i.b)("p",null,"Because Cylon build Apache Arrow with it, we need to specify a Python environment to the build."),Object(i.b)("p",null,"If you're using a virtual environment, make sure to set the virtual environment path. Or you can specify /usr as\nthe path if you're installing in the system path."),Object(i.b)("h3",{id:"create-a-virtual-environment"},"Create a virtual environment"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"cd  /home/<username>/cylon\npython3 -m venv ENV\nsource ENV/bin/activate\n")),Object(i.b)("p",null,"Here after we assume your Python ENV path is,"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"})," /home/<username>/cylon/ENV\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-txt"}),"Note: User must install Pyarrow with the Cylon build to use Cylon APIs.\nDo not use a prior installed pyarrow in your python environment.\nUninstall it before running the setup.\n")),Object(i.b)("h2",{id:"openmpi"},"OpenMPI"),Object(i.b)("h3",{id:"from-source"},"From source"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We recommend using ",Object(i.b)("inlineCode",{parentName:"p"},"OpenMPI 4.0.1"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Download OpenMPI 4.0.1 from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://download.open-mpi.org/release/open-mpi/v4.0/openmpi-4.0.1.tar.gz"}),"https://download.open-mpi.org/release/open-mpi/v4.0/openmpi-4.0.1.tar.gz"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Extract the archive to a folder named ",Object(i.b)("inlineCode",{parentName:"p"},"openmpi-4.0.1"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Also create a directory named ",Object(i.b)("inlineCode",{parentName:"p"},"build")," in some location. We will use this to install OpenMPI")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set the following environment variables"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"BUILD=<path-to-build-directory>\nOMPI_401=<path-to-openmpi-4.0.1-directory>\nPATH=$BUILD/bin:$PATH\nLD_LIBRARY_PATH=$BUILD/lib:$LD_LIBRARY_PATH\nexport BUILD OMPI_401 PATH LD_LIBRARY_PATH\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The instructions to build OpenMPI depend on the platform. Therefore, we highly recommend looking into the ",Object(i.b)("inlineCode",{parentName:"p"},"$OMPI_401/INSTALL")," file. Platform specific build files are available in ",Object(i.b)("inlineCode",{parentName:"p"},"$OMPI_401/contrib/platform")," directory.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In general, please specify ",Object(i.b)("inlineCode",{parentName:"p"},"--prefix=$BUILD")," and ",Object(i.b)("inlineCode",{parentName:"p"},"--enable-mpi-java")," as arguments to ",Object(i.b)("inlineCode",{parentName:"p"},"configure")," script. If Infiniband is available ","(","highly recommended",")"," specify ",Object(i.b)("inlineCode",{parentName:"p"},"--with-verbs=<path-to-verbs-installation>"),". Usually, the path to verbs installation is ",Object(i.b)("inlineCode",{parentName:"p"},"/usr"),". In summary, the following commands will build OpenMPI for a Linux system."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"cd $OMPI_401\n./configure --prefix=$BUILD --enable-mpi-java\nmake -j 8;make install\n")))),Object(i.b)("h3",{id:"installing-with-package-manager"},"Installing with package manager"),Object(i.b)("p",null,"sudo apt install libopenmpi-dev"),Object(i.b)("h2",{id:"building-c"},"Building C++"),Object(i.b)("p",null,"We have provided a build script to make the build process easier. It is found in Cylon source root directory."),Object(i.b)("h2",{id:"build-c-python-cylon-apis"},"Build C++, Python Cylon APIs"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./build.sh -pyenv <path to your environment> -bpath <path to the cmake build directory> [--release | --debug]\n")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./build.sh -pyenv /home/<username>/cylon/ENV -bpath /home/<username>/cylon/build --cpp --release\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-txt"}),"Note: The default build mode is debug\n")),Object(i.b)("h2",{id:"python-support"},"Python Support"),Object(i.b)("p",null,"Cylon provides Python APIs with Cython."),Object(i.b)("p",null,"If you're building for the first time, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"--all")," option in build.\nIf you'have already built cpp and want to compile the your changes to the API,\ndo the following,"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./build.sh -pyenv /home/<username>/cylon/ENV -bpath /home/<username>/cylon/build --python\n")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"Before running the code in the base path of the cloned repo\nrun the following command. Or add this to your ",Object(i.b)("inlineCode",{parentName:"p"},"bashrc"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export LD_LIBRARY_PATH=/home/<username>/twisterx/build/arrow/install/lib:/home/<username>/twisterx/build/lib:$LD_LIBRARY_PATH\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Test Python API")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"python3 python/test/test_pytwisterx.py\n")))}b.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return n?r.a.createElement(d,l(l({ref:t},p),{},{components:n})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);