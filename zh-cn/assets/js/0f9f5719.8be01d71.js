"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92380],{95788:(e,n,r)=>{r.d(n,{Iu:()=>g,yg:()=>m});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},g=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=u(r),c=a,m=y["".concat(p,".").concat(c)]||y[c]||d[c]||l;return r?t.createElement(m,i(i({ref:n},g),{},{components:r})):t.createElement(m,i({ref:n},g))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},69776:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=r(45072),a=(r(11504),r(95788));const l={id:"build",title:"\u5efa\u6784\u548c\u8fd0\u884c"},i=void 0,o={unversionedId:"developer_guide/build",id:"developer_guide/build",title:"\u5efa\u6784\u548c\u8fd0\u884c",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/developer_guide/build.md",sourceDirName:"developer_guide",slug:"/developer_guide/build",permalink:"/zh-cn/docs/next/developer_guide/build",draft:!1,tags:[],version:"current",frontMatter:{id:"build",title:"\u5efa\u6784\u548c\u8fd0\u884c"},sidebar:"docs",previous:{title:"\u5f00\u53d1\u73af\u5883\u7684\u8bbe\u7f6e",permalink:"/zh-cn/docs/next/developer_guide/env_setup"},next:{title:"Go \u6a21\u5757\u66f4\u65b0",permalink:"/zh-cn/docs/next/developer_guide/dependencies"}},p={},u=[{value:"\u5f00\u53d1\u73af\u5883\u8bbe\u7f6e",id:"\u5f00\u53d1\u73af\u5883\u8bbe\u7f6e",level:2},{value:"\u4e3aKubernetes\u6784\u5efaYuniKorn",id:"\u4e3akubernetes\u6784\u5efayunikorn",level:2},{value:"\u5173\u4e8eGo\u6a21\u5757\u548cGit\u7248\u672c\u7684\u8bf4\u660e",id:"\u5173\u4e8ego\u6a21\u5757\u548cgit\u7248\u672c\u7684\u8bf4\u660e",level:3},{value:"\u6784\u5efaDocker\u955c\u50cf",id:"\u6784\u5efadocker\u955c\u50cf",level:3},{value:"\u68c0\u67e5 Docker \u955c\u50cf",id:"\u68c0\u67e5-docker-\u955c\u50cf",level:3},{value:"\u4f9d\u8d56\u5173\u7cfb",id:"\u4f9d\u8d56\u5173\u7cfb",level:3},{value:"\u53d7\u5f71\u54cd\u7684\u5b58\u50a8\u5e93",id:"\u53d7\u5f71\u54cd\u7684\u5b58\u50a8\u5e93",level:4},{value:"\u8fdb\u884c\u672c\u5730\u66f4\u6539",id:"\u8fdb\u884c\u672c\u5730\u66f4\u6539",level:4},{value:"\u66f4\u65b0\u4f9d\u8d56\u5173\u7cfb",id:"\u66f4\u65b0\u4f9d\u8d56\u5173\u7cfb",level:4},{value:"\u6784\u5efaWeb\u7528\u6237\u754c\u9762\uff08UI\uff09",id:"\u6784\u5efaweb\u7528\u6237\u754c\u9762ui",level:2},{value:"\u5728\u672c\u5730\u8fd0\u884c\u96c6\u6210\u8c03\u5ea6\u5668",id:"\u5728\u672c\u5730\u8fd0\u884c\u96c6\u6210\u8c03\u5ea6\u5668",level:2},{value:"\u901a\u8fc7\u7aef\u5230\u7aef\u6d4b\u8bd5\u9a8c\u8bc1\u5916\u90e8\u63a5\u53e3\u66f4\u6539",id:"\u901a\u8fc7\u7aef\u5230\u7aef\u6d4b\u8bd5\u9a8c\u8bc1\u5916\u90e8\u63a5\u53e3\u66f4\u6539",level:2}],g={toc:u},y="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.c)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"YuniKorn\u59cb\u7ec8\u4e0e\u5bb9\u5668\u7f16\u6392\u7cfb\u7edf\u4e00\u8d77\u4f7f\u7528\u3002\u76ee\u524d\uff0c\u5728\u6211\u4eec\u7684\u5b58\u50a8\u5e93\u4e2d\u63d0\u4f9b\u4e86\u4e00\u4e2aKubernetes\u9002\u914d\u5668",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim"},"yunikorn-k8shim"),"\uff0c\u60a8\u53ef\u4ee5\u5229\u7528\u5b83\u6765\u5f00\u53d1YuniKorn\u8c03\u5ea6\u529f\u80fd\u5e76\u4e0eKubernetes\u96c6\u6210\u3002\u672c\u6587\u6863\u63cf\u8ff0\u4e86\u5982\u4f55\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883\u4ee5\u53ca\u5982\u4f55\u8fdb\u884c\u5f00\u53d1\u3002"),(0,a.yg)("h2",{id:"\u5f00\u53d1\u73af\u5883\u8bbe\u7f6e"},"\u5f00\u53d1\u73af\u5883\u8bbe\u7f6e"),(0,a.yg)("p",null,"\u9996\u5148\u9605\u8bfb",(0,a.yg)("a",{parentName:"p",href:"/zh-cn/docs/next/developer_guide/env_setup"},"\u73af\u5883\u8bbe\u7f6e\u6307\u5357"),"\u4ee5\u8bbe\u7f6eDocker\u548cKubernetes\u5f00\u53d1\u73af\u5883\u3002"),(0,a.yg)("h2",{id:"\u4e3akubernetes\u6784\u5efayunikorn"},"\u4e3aKubernetes\u6784\u5efaYuniKorn"),(0,a.yg)("p",null,"\u5148\u51b3\u6761\u4ef6:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Golang: \u5728\u5b58\u50a8\u5e93\u7684\u6839\u76ee\u5f55\u4e2d\u68c0\u67e5 ",(0,a.yg)("inlineCode",{parentName:"li"},".go_version")," \u6587\u4ef6\u4ee5\u83b7\u53d6Yunikorn\u6240\u9700\u7684\u7248\u672c\u3002\u6700\u4f4e\u7248\u672c\u53ef\u80fd\u4f1a\u6839\u636e\u53d1\u5e03\u5206\u652f\u800c\u53d8\u5316\u3002\u8f83\u65e9\u7684Go\u7248\u672c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u95ee\u9898\u3002 ")),(0,a.yg)("p",null,"\u60a8\u53ef\u4ee5\u4ece ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim"},"yunikorn-k8shim")," \u9879\u76ee\u6784\u5efa\u7528\u4e8eKubernetes\u7684\u8c03\u5ea6\u5668\u3002\n\u6784\u5efa\u8fc7\u7a0b\u5c06\u6240\u6709\u7ec4\u4ef6\u6784\u5efa\u4e3a\u4e00\u4e2a\u53ef\u90e8\u7f72\u5e76\u5728Kubernetes\u4e0a\u8fd0\u884c\u7684\u5355\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\u3002"),(0,a.yg)("p",null,"\u901a\u8fc7\u62c9\u53d6 ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn-k8shim")," \u5b58\u50a8\u5e93\u6765\u542f\u52a8\u96c6\u6210\u6784\u5efa\u8fc7\u7a0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir $HOME/yunikorn/\ncd $HOME/yunikorn/\ngit clone https://github.com/apache/yunikorn-k8shim.git\n")),(0,a.yg)("p",null,"\u6b64\u65f6\uff0c\u60a8\u5df2\u7ecf\u62e5\u6709\u4e00\u4e2a\u5141\u8bb8\u60a8\u6784\u5efaYuniKorn\u8c03\u5ea6\u5668\u7684\u96c6\u6210\u6620\u50cf\u7684\u73af\u5883\u3002"),(0,a.yg)("h3",{id:"\u5173\u4e8ego\u6a21\u5757\u548cgit\u7248\u672c\u7684\u8bf4\u660e"},"\u5173\u4e8eGo\u6a21\u5757\u548cGit\u7248\u672c\u7684\u8bf4\u660e"),(0,a.yg)("p",null,"Go\u4f7f\u7528Git\u6765\u83b7\u53d6\u6a21\u5757\u4fe1\u606f\u3002\n\u5982\u679c\u7528\u4e8e\u6784\u5efa\u7684\u8ba1\u7b97\u673a\u4e0a\u5b89\u88c5\u7684Git\u7248\u672c\u8f83\u65e7\uff0c\u53ef\u80fd\u65e0\u6cd5\u68c0\u7d22\u67d0\u4e9b\u6a21\u5757\u3002\n\u5f53\u9996\u6b21\u5c1d\u8bd5\u6784\u5efa\u65f6\uff0c\u53ef\u80fd\u4f1a\u8bb0\u5f55\u7c7b\u4f3c\u4e8e\u4e0b\u9762\u7684\u6d88\u606f\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"go: finding modernc.org/mathutil@v1.0.0\ngo: modernc.org/golex@v1.0.0: git fetch -f origin refs/heads/*:refs/heads/* refs/tags/*:refs/tags/* in <location>: exit status 128:\n    error: RPC failed; result=22, HTTP code = 404\n    fatal: The remote end hung up unexpectedly\n")),(0,a.yg)("p",null,"\u8981\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u8bf7\u5c06Git\u66f4\u65b0\u5230\u8f83\u65b0\u7684\u7248\u672c\u3002\n\u5df2\u77e5Git\u7248\u672c1.22\u6216\u66f4\u9ad8\u7248\u672c\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,a.yg)("h3",{id:"\u6784\u5efadocker\u955c\u50cf"},"\u6784\u5efaDocker\u955c\u50cf"),(0,a.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u89e6\u53d1\u6784\u5efaDocker\u955c\u50cf\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"make image\n")),(0,a.yg)("p",null,"\u5e26\u6709\u5185\u7f6e\u914d\u7f6e\u7684\u955c\u50cf\u53ef\u4ee5\u76f4\u63a5\u90e8\u7f72\u5230Kubernetes\u4e0a\u3002\n\u53ef\u4ee5\u5728 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/scheduler"},"deployments")," \u76ee\u5f55\u4e0b\u627e\u5230\u4e00\u4e9b\u793a\u4f8b\u90e8\u7f72\u3002\n\u5bf9\u4e8e\u4f7f\u7528ConfigMap\u7684\u90e8\u7f72\uff0c\u60a8\u9700\u8981\u5728Kubernetes\u4e2d\u8bbe\u7f6eConfigMap\u3002\n\u5982\u4f55\u4f7f\u7528ConfigMap\u90e8\u7f72\u8c03\u5ea6\u5668\u5728 ",(0,a.yg)("a",{parentName:"p",href:"/zh-cn/docs/next/developer_guide/deployment"},"scheduler configuration deployment")," \u6587\u6863\u4e2d\u6709\u8be6\u7ec6\u8bf4\u660e\u3002"),(0,a.yg)("p",null,"\u955c\u50cf\u6784\u5efa\u547d\u4ee4\u9996\u5148\u4f1a\u6784\u5efa\u96c6\u6210\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u7136\u540e\u521b\u5efaDocker\u955c\u50cf\u3002\n\u5982\u679c\u60a8\u60f3\u4f7f\u7528\u57fa\u4e8e\u53d1\u5e03\u7684\u9884\u6784\u5efa\u955c\u50cf\uff0c\u8bf7\u68c0\u67e5 ",(0,a.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/yunikorn"},"Docker Hub repo"),"."),(0,a.yg)("p",null,"\u9ed8\u8ba4\u7684\u955c\u50cf\u6807\u7b7e\u4e0d\u9002\u7528\u4e8e\u90e8\u7f72\u5230\u53ef\u8bbf\u95ee\u5b58\u50a8\u5e93\uff0c\u56e0\u4e3a\u5b83\u4f7f\u7528\u4e86\u786c\u7f16\u7801\u7684\u7528\u6237\u5e76\u4e14\u4f1a\u4f7f\u7528\u6b63\u786e\u7684\u51ed\u636e\u63a8\u9001\u5230Docker Hub\u3002\n\u60a8\u5fc5\u987b\u66f4\u65b0",(0,a.yg)("inlineCode",{parentName:"p"},"Makefile"),"\u4e2d\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"TAG"),"\u53d8\u91cf\u4ee5\u63a8\u9001\u5230\u53ef\u8bbf\u95ee\u5b58\u50a8\u5e93\u3002\n\u5728\u66f4\u65b0\u955c\u50cf\u6807\u7b7e\u65f6\uff0c\u8bf7\u6ce8\u610f\uff0c\u6240\u63d0\u4f9b\u7684\u90e8\u7f72\u793a\u4f8b\u4e5f\u9700\u8981\u76f8\u5e94\u66f4\u65b0\u4ee5\u53cd\u6620\u76f8\u540c\u7684\u66f4\u6539"),(0,a.yg)("h3",{id:"\u68c0\u67e5-docker-\u955c\u50cf"},"\u68c0\u67e5 Docker \u955c\u50cf"),(0,a.yg)("p",null,"\u4e4b\u524d\u6784\u5efa\u7684Docker\u955c\u50cf\u5305\u542b\u4e86\u4e00\u4e9b\u91cd\u8981\u7684\u6784\u5efa\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528Docker\u7684inspect\u547d\u4ee4\u6765\u68c0\u7d22\u8fd9\u4e9b\u4fe1\u606f\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"docker inspect apache/yunikorn:scheduler-amd64-latest\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"amd64"),"\u6807\u7b7e\u53d6\u51b3\u4e8e\u60a8\u7684\u4e3b\u673a\u67b6\u6784\uff08\u4f8b\u5982\uff0c\u5bf9\u4e8e",(0,a.yg)("inlineCode",{parentName:"p"},"Intel"),"\uff0c\u5b83\u5c06\u662f",(0,a.yg)("inlineCode",{parentName:"p"},"amd64"),"\uff0c\u5bf9\u4e8e",(0,a.yg)("inlineCode",{parentName:"p"},"Mac M1"),"\uff0c\u5b83\u5c06\u662f",(0,a.yg)("inlineCode",{parentName:"p"},"arm64"),"\uff09\u3002"),(0,a.yg)("p",null,"\u8fd9\u4e9b\u4fe1\u606f\u5305\u62ec\u6bcf\u4e2a\u7ec4\u4ef6\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"git"),"\u4fee\u8ba2\u7248\uff08\u6700\u540e\u7684\u63d0\u4ea4",(0,a.yg)("inlineCode",{parentName:"p"},"SHA"),"\uff09\uff0c\u4ee5\u5e2e\u52a9\u60a8\u4e86\u89e3\u6b64\u955c\u50cf\u4e2d\u5305\u542b\u7684\u6e90\u4ee3\u7801\u7248\u672c\u3002\u5b83\u4eec\u4ee5 ",(0,a.yg)("inlineCode",{parentName:"p"},"Docker")," \u955c\u50cf\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"\u6807\u7b7e"),"\u5f62\u5f0f\u5217\u51fa\uff0c\u4f8b\u5982\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'"Labels": {\n    "BuildTimeStamp": "2019-07-16T23:08:06+0800",\n    "Version": "0.1",\n    "yunikorn-core-revision": "dca66c7e5a9e",\n    "yunikorn-k8shim-revision": "bed60f720b28",\n    "yunikorn-scheduler-interface-revision": "3df392eded1f"\n}\n')),(0,a.yg)("h3",{id:"\u4f9d\u8d56\u5173\u7cfb"},"\u4f9d\u8d56\u5173\u7cfb"),(0,a.yg)("p",null,"\u9879\u76ee\u4e2d\u7684\u4f9d\u8d56\u5173\u7cfb\u4f7f\u7528",(0,a.yg)("a",{parentName:"p",href:"https://blog.golang.org/using-go-modules"},"Go\u6a21\u5757"),"\u6765\u7ba1\u7406\u3002\nGo\u6a21\u5757\u8981\u6c42\u5728\u5f00\u53d1\u7cfb\u7edf\u4e0a\u81f3\u5c11\u5b89\u88c5Go\u7248\u672c1.11\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u5728\u672c\u5730\u4fee\u6539\u5176\u4e2d\u4e00\u4e2a\u9879\u76ee\u5e76\u4f7f\u7528\u672c\u5730\u4f9d\u8d56\u5173\u7cfb\u8fdb\u884c\u6784\u5efa\uff0c\u60a8\u9700\u8981\u66f4\u6539\u6a21\u5757\u6587\u4ef6\u3002\n\u66f4\u6539\u4f9d\u8d56\u5173\u7cfb\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"replace"),"\u6307\u4ee4\uff0c\u5982 ",(0,a.yg)("a",{parentName:"p",href:"#updating-dependencies"},"Update dependencies"),"\u4e2d\u6240\u8ff0\u3002"),(0,a.yg)("p",null,"YuniKorn\u9879\u76ee\u6709\u56db\u4e2a\u5b58\u50a8\u5e93\uff0c\u5176\u4e2d\u4e09\u4e2a\u5b58\u50a8\u5e93\u5728Go\u7ea7\u522b\u6709\u4f9d\u8d56\u5173\u7cfb\u3002\n\u8fd9\u4e9b\u4f9d\u8d56\u5173\u7cfb\u662fGo\u6a21\u5757\u7684\u4e00\u90e8\u5206\uff0c\u6307\u5411GitHub\u5b58\u50a8\u5e93\u3002\n\u5728\u5f00\u53d1\u5468\u671f\u4e2d\uff0c\u53ef\u80fd\u9700\u8981\u6253\u7834\u5bf9GitHub\u63d0\u4ea4\u7248\u672c\u7684\u4f9d\u8d56\u5173\u7cfb\u3002\n\u8fd9\u9700\u8981\u66f4\u6539\u6a21\u5757\u6587\u4ef6\uff0c\u4ee5\u5141\u8bb8\u52a0\u8f7d\u672c\u5730\u526f\u672c\u6216\u4ece\u4e0d\u540c\u5b58\u50a8\u5e93\u4e2d\u5206\u53c9\u7684\u526f\u672c\u3002  "),(0,a.yg)("h4",{id:"\u53d7\u5f71\u54cd\u7684\u5b58\u50a8\u5e93"},"\u53d7\u5f71\u54cd\u7684\u5b58\u50a8\u5e93"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u5b58\u50a8\u5e93\u4e4b\u95f4\u5b58\u5728\u4f9d\u8d56\u5173\u7cfb\uff1a"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"repository"),(0,a.yg)("th",{parentName:"tr",align:null},"depends on"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn-core"),(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn-k8shim"),(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface, yunikorn-core")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface"),(0,a.yg)("td",{parentName:"tr",align:null},"none")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn-web"),(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn-core")))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn-web")," \u5b58\u50a8\u5e93\u4e0d\u76f4\u63a5\u4f9d\u8d56\u4e8e\u5176\u4ed6\u5b58\u50a8\u5e93\u7684Go\u6a21\u5757\u3002\u4f46\u662f\uff0c\u5bf9 ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn-core")," \u7684webservices\u8fdb\u884c\u7684\u4efb\u4f55\u66f4\u6539\u90fd\u53ef\u80fd\u5f71\u54cdWeb\u754c\u9762\u3002 "),(0,a.yg)("h4",{id:"\u8fdb\u884c\u672c\u5730\u66f4\u6539"},"\u8fdb\u884c\u672c\u5730\u66f4\u6539"),(0,a.yg)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u672c\u5730\u66f4\u6539\u4e0d\u4f1a\u7834\u574f\u6784\u5efa\u7684\u5176\u4ed6\u90e8\u5206\uff0c\u60a8\u5e94\u8be5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u8fdb\u884c\u5b8c\u6574\u6784\u5efa ",(0,a.yg)("inlineCode",{parentName:"li"},"make"),"\uff08\u6784\u5efa\u76ee\u6807\u53d6\u51b3\u4e8e\u5b58\u50a8\u5e93\uff09"),(0,a.yg)("li",{parentName:"ul"},"\u8fd0\u884c\u5b8c\u6574\u7684\u5355\u5143\u6d4b\u8bd5 ",(0,a.yg)("inlineCode",{parentName:"li"},"make test"))),(0,a.yg)("p",null,"\u5e94\u8be5\u5728\u7ee7\u7eed\u4e4b\u524d\u4fee\u590d\u4efb\u4f55\u6d4b\u8bd5\u5931\u8d25\u3002"),(0,a.yg)("h4",{id:"\u66f4\u65b0\u4f9d\u8d56\u5173\u7cfb"},"\u66f4\u65b0\u4f9d\u8d56\u5173\u7cfb"),(0,a.yg)("p",null,"\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u5728\u6a21\u5757\u6587\u4ef6\u4e2d\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"replace"),"\u6307\u4ee4\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"replace"),"\u6307\u4ee4\u5141\u8bb8\u60a8\u4f7f\u7528\u65b0\u7684\uff08\u672c\u5730\uff09\u8def\u5f84\u8986\u76d6\u5bfc\u5165\u8def\u5f84\u3002\n\u4e0d\u9700\u8981\u66f4\u6539\u6e90\u4ee3\u7801\u4e2d\u7684\u4efb\u4f55\u5bfc\u5165\u3002\u66f4\u6539\u5fc5\u987b\u5728\u5177\u6709\u4f9d\u8d56\u5173\u7cfb\u7684\u5b58\u50a8\u5e93\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"go.mod"),"\u6587\u4ef6\u4e2d\u8fdb\u884c\u3002"),(0,a.yg)("p",null,"\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"replace"),"\u6765\u4f7f\u7528\u5206\u53c9\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u4f8b\u5982\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"replace github.com/apache/yunikorn-core => example.com/some/forked-yunikorn\n")),(0,a.yg)("p",null,"\u6ca1\u6709\u5fc5\u8981\u5206\u53c9\u5e76\u521b\u5efa\u65b0\u7684\u5b58\u50a8\u5e93\u3002\u5982\u679c\u60a8\u6ca1\u6709\u5b58\u50a8\u5e93\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u672c\u5730\u68c0\u51fa\u7684\u526f\u672c\u3002\n\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"replace"),"\u6765\u4f7f\u7528\u672c\u5730\u76ee\u5f55\u4f5c\u4e3a\u4f9d\u8d56\u5173\u7cfb\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"replace github.com/apache/yunikorn-core => /User/example/local/checked-out-yunikorn\n")),(0,a.yg)("p",null,"\u5bf9\u4e8e\u76f8\u540c\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"replace github.com/apache/yunikorn-core => ../checked-out-yunikorn\n")),(0,a.yg)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c",(0,a.yg)("inlineCode",{parentName:"p"},"replace"),"\u6307\u4ee4\u4f7f\u7528\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u8def\u5f84\uff0c\u90a3\u4e48\u76ee\u6807\u8def\u5f84\u5fc5\u987b\u5177\u6709\u8be5\u4f4d\u7f6e\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"go.mod"),"\u6587\u4ef6\u3002"),(0,a.yg)("p",null,"\u6709\u5173\u6a21\u5757\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6a21\u5757\u7684\u7ef4\u57fa\u9875\u9762\u3002: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules#when-should-i-use-the-replace-directive"},"When should I use the 'replace' directive?"),"."),(0,a.yg)("h2",{id:"\u6784\u5efaweb\u7528\u6237\u754c\u9762ui"},"\u6784\u5efaWeb\u7528\u6237\u754c\u9762\uff08UI\uff09"),(0,a.yg)("p",null,"\u793a\u4f8b\u90e8\u7f72\u5f15\u7528\u4e86",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-web"},"YuniKorn Web\u7528\u6237\u754c\u9762"),"\u3002\n",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn-web")," \u9879\u76ee\u5bf9\u6784\u5efa\u6709\u7279\u5b9a\u8981\u6c42\u3002\u8bf7\u6309\u7167",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-web/blob/master/README.md"},"README"),"\u4e2d\u7684\u6b65\u9aa4\u51c6\u5907\u5f00\u53d1\u73af\u5883\u5e76\u6784\u5efaWeb\u7528\u6237\u754c\u9762\uff08UI\uff09\u3002\u7136\u800c\uff0c\u8c03\u5ea6\u5668\u5728\u6ca1\u6709Web\u7528\u6237\u754c\u9762\u7684\u60c5\u51b5\u4e0b\u4ecd\u7136\u53ef\u4ee5\u5b8c\u5168\u6b63\u5e38\u8fd0\u4f5c\u3002"),(0,a.yg)("h2",{id:"\u5728\u672c\u5730\u8fd0\u884c\u96c6\u6210\u8c03\u5ea6\u5668"},"\u5728\u672c\u5730\u8fd0\u884c\u96c6\u6210\u8c03\u5ea6\u5668"),(0,a.yg)("p",null,"\u5728\u60a8\u8bbe\u7f6e\u597d\u672c\u5730\u5f00\u53d1\u73af\u5883\u540e\uff0c\u53ef\u4ee5\u5728\u672c\u5730\u7684Kubernetes\u73af\u5883\u4e2d\u8fd0\u884c\u96c6\u6210\u8c03\u5ea6\u5668\u3002\n\u8fd9\u5df2\u5728\u684c\u9762\u73af\u5883\u4e2d\u8fdb\u884c\u4e86\u6d4b\u8bd5\uff0c\u5305\u62ecDocker Desktop\u3001Minikube\u548cKind\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.yg)("a",{parentName:"p",href:"/zh-cn/docs/next/developer_guide/env_setup"},"\u73af\u5883\u8bbe\u7f6e\u6307\u5357"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"make run\n")),(0,a.yg)("p",null,"\u5b83\u5c06\u4f7f\u7528\u7528\u6237\u914d\u7f6e\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4f4d\u4e8e ",(0,a.yg)("inlineCode",{parentName:"p"},"$HOME/.kube/config")," \u4e2d\uff0c\u8fde\u63a5\u5230Kubernetes\u96c6\u7fa4\u3002"),(0,a.yg)("p",null,"\u8981\u4ee5Kubernetes\u8c03\u5ea6\u5668\u63d2\u4ef6\u6a21\u5f0f\u8fd0\u884cYuniKorn\uff0c\u6267\u884c\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"make run_plugin\n")),(0,a.yg)("p",null,"\u53ea\u8981",(0,a.yg)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"\u6587\u4ef6\u6307\u5411\u8fdc\u7a0b\u96c6\u7fa4\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684\u65b9\u6cd5\u5728\u672c\u5730\u8fd0\u884c\u8c03\u5ea6\u5668\u5e76\u8fde\u63a5\u5230\u8fdc\u7a0bKubernetes\u96c6\u7fa4\u3002"),(0,a.yg)("h2",{id:"\u901a\u8fc7\u7aef\u5230\u7aef\u6d4b\u8bd5\u9a8c\u8bc1\u5916\u90e8\u63a5\u53e3\u66f4\u6539"},"\u901a\u8fc7\u7aef\u5230\u7aef\u6d4b\u8bd5\u9a8c\u8bc1\u5916\u90e8\u63a5\u53e3\u66f4\u6539"),(0,a.yg)("p",null,"Yunikorn\u5177\u6709\u5916\u90e8REST\u63a5\u53e3\uff0c\u7531\u7aef\u5230\u7aef\u6d4b\u8bd5\u9a8c\u8bc1\u3002\u4f46\u662f\uff0c\u8fd9\u4e9b\u6d4b\u8bd5\u5b58\u5728\u4e8ek8shim\u5b58\u50a8\u5e93\u4e2d\u3002\n\u6bcf\u5f53\u5bf9\u5916\u90e8\u63a5\u53e3\u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u8bf7\u786e\u4fdd\u901a\u8fc7\u8fd0\u884c\u7aef\u5230\u7aef\u6d4b\u8bd5\u8fdb\u884c\u9a8c\u8bc1\uff0c\u6216\u8005\u76f8\u5e94\u5730\u8c03\u6574\u6d4b\u8bd5\u7528\u4f8b\u3002"),(0,a.yg)("p",null,"\u5982\u4f55\u5728\u672c\u5730\u8fd0\u884c\u6d4b\u8bd5\u7684\u8bf4\u660e\u5df2\u7ecf\u5728\u6587\u6863\u4e2d\u63cf\u8ff0\u3002",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/master/test/e2e/README.md"},"here"),"."))}d.isMDXComponent=!0}}]);