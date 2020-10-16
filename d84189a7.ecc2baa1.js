(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(164)),i={id:"run_tf",title:"Run Tensorflow Jobs",keywords:["tensorflow"]},s={unversionedId:"user_guide/workloads/run_tf",id:"version-0.9.0/user_guide/workloads/run_tf",isDocsHomePage:!1,title:"Run Tensorflow Jobs",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/user_guide/workloads/run_tensorflow.md",slug:"/user_guide/workloads/run_tf",permalink:"/docs/user_guide/workloads/run_tf",version:"0.9.0",sidebar:"version-0.9.0/docs",previous:{title:"Run Flink Jobs",permalink:"/docs/user_guide/workloads/run_flink"},next:{title:"Cluster",permalink:"/docs/api/cluster"}},l=[],c={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Here is an example for Tensorflow job. You must install tf-operator first.\nYou can install tf-operator by applying all yaml from two website down below:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CRD: ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-crds/base"}),"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-crds/base")),Object(a.b)("li",{parentName:"ul"},"Deployment: ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-operator/base"}),"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-operator/base"),"\nAlso you can install kubeflow which can auto install tf-operator for you, URL: ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.kubeflow.org/docs/started/getting-started/"}),"https://www.kubeflow.org/docs/started/getting-started/"))),Object(a.b)("p",null,"A simple Tensorflow job example:"),Object(a.b)("p",null,"You need to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kubeflow/tf-operator/tree/master/examples/v1/dist-mnist"}),"build the image")," which used in example yaml."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f examples/tfjob/tf-job-mnist.yaml\n")),Object(a.b)("p",null,"The file for this example can be found in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#Tensorflow-job"}),"README Tensorflow job")," section."))}u.isMDXComponent=!0},164:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||a;return r?o.a.createElement(m,s(s({ref:t},c),{},{components:r})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);