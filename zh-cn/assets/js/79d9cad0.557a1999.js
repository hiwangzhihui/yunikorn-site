"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76664],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},208:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"dependencies",title:"Go \u6a21\u5757\u66f4\u65b0"},p=void 0,u={unversionedId:"developer_guide/dependencies",id:"developer_guide/dependencies",title:"Go \u6a21\u5757\u66f4\u65b0",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/developer_guide/dependencies.md",sourceDirName:"developer_guide",slug:"/developer_guide/dependencies",permalink:"/zh-cn/docs/next/developer_guide/dependencies",draft:!1,tags:[],version:"current",frontMatter:{id:"dependencies",title:"Go \u6a21\u5757\u66f4\u65b0"},sidebar:"docs",previous:{title:"\u5efa\u6784\u548c\u8fd0\u884c",permalink:"/zh-cn/docs/next/developer_guide/build"},next:{title:"Deploy to Kubernetes",permalink:"/zh-cn/docs/next/developer_guide/deployment"}},c={},m=[{value:"\u4ec0\u4e48\u65f6\u5019\u66f4\u65b0",id:"\u4ec0\u4e48\u65f6\u5019\u66f4\u65b0",level:2},{value:"\u4e3a\u4ec0\u4e48\u662f\u4f2a\u7248\u672c",id:"\u4e3a\u4ec0\u4e48\u662f\u4f2a\u7248\u672c",level:2},{value:"\u4f2a\u7248\u672c\u7684\u6267\u884c",id:"\u4f2a\u7248\u672c\u7684\u6267\u884c",level:2},{value:"\u66f4\u65b0core\u4f9d\u8d56",id:"\u66f4\u65b0core\u4f9d\u8d56",level:2},{value:"\u66f4\u65b0shim\u4f9d\u8d56\u9879",id:"\u66f4\u65b0shim\u4f9d\u8d56\u9879",level:2},{value:"\u751f\u6210\u4f2a\u7248\u672c",id:"\u751f\u6210\u4f2a\u7248\u672c",level:2}],d={toc:m},s="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u65f6\u5019\u66f4\u65b0"},"\u4ec0\u4e48\u65f6\u5019\u66f4\u65b0"),(0,o.kt)("p",null,"\u5982\u679c\u8c03\u5ea6\u5668\u63a5\u53e3\u53d1\u751f\u66f4\u6539\uff0c\u5219\u5fc5\u987b\u66f4\u65b0",(0,o.kt)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\u4e2d\u7684\u5f15\u7528\u3002\n\u5373\u4f7f\u8c03\u5ea6\u5668\u63a5\u53e3\u6ca1\u6709\u6539\u53d8\uff0c\u4e5f\u53ef\u80fd\u9700\u8981\u66f4\u65b0shim\u7684\u5f15\u7528\u4e2d,\u5bf9core\u7684\u4f9d\u8d56\u5173\u7cfb\u3002\n\u53ef\u4ee5\u6dfb\u52a0\u4f9d\u8d56\u4e8e\u6d88\u606f\u7684\u66f4\u6539\u5b57\u6bb5\u5185\u5bb9\u800c\u4e0d\u662f\u6d88\u606f\u7684\u5b57\u6bb5\u5e03\u5c40\u7684\u65b0\u529f\u80fd\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ea\u9700\u8981\u66f4\u65b0shim\u4f9d\u8d56\u9879\u3002"),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u662f\u4f2a\u7248\u672c"},"\u4e3a\u4ec0\u4e48\u662f\u4f2a\u7248\u672c"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\u4e2d\uff0c\u6211\u4eec",(0,o.kt)("strong",{parentName:"p"},"\u5fc5\u987b"),"\u5bf9\u6211\u4eec\u4f7f\u7528\u7684\u6240\u6709 YuniKorn \u5b58\u50a8\u5e93\u5f15\u7528\u4f7f\u7528\u4f2a\u7248\u672c\u3002\n\u7531\u4e8e\u8be5\u5206\u652f\u6b63\u5728\u79ef\u6781\u5f00\u53d1\u4e2d\u5e76\u4e14\u5c1a\u672a\u53d1\u5e03\uff0c\u56e0\u6b64\u6211\u4eec\u6ca1\u6709\u771f\u6b63\u7684\u7248\u672c\u6807\u7b7e\u53ef\u4f9b\u5f15\u7528\u3002\n\u4f46\u662f\uff0c\u6211\u4eec\u4ecd\u7136\u9700\u8981\u80fd\u591f\u6307\u5411\u4f9d\u8d56\u9879\u7684\u6b63\u786e\u63d0\u4ea4\u3002\nGo \u5141\u8bb8\u5728\u8fd9\u4e9b\u7279\u5b9a\u60c5\u51b5\u4e0b\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://go.dev/ref/mod#pseudo-versions"},"\u4f2a\u7248\u672c"),"\u3002\n\u6211\u4eec\u5728 Kubernetes shim \u4e2d\u4f7f\u7528\u7684\u4f2a\u7248\u672c\u7684\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"module github.com/apache/yunikorn-k8shim\n\ngo 1.16\n\nrequire (\n    github.com/apache/yunikorn-core v0.0.0-20220325135453-73d55282f052\n    github.com/apache/yunikorn-scheduler-interface v0.0.0-20220325134135-4a644b388bc4\n    ...\n)\n")),(0,o.kt)("p",null,"\u53d1\u5e03\u5206\u652f",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u5f97"),"\u4f7f\u7528\u4f2a\u7248\u672c\u3002\n\u5728\u521b\u5efa\u7248\u672c\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5c06\u521b\u5efa",(0,o.kt)("a",{parentName:"p",href:"/community/release_procedure#tag-and-update-release-for-version"},"\u6807\u7b7e"),"\u3002\n\u8fd9\u4e9b\u6807\u7b7e\u5c06\u7528\u4f5c\u8be5\u7248\u672c\u7684 go.mod \u6587\u4ef6\u4e2d\u7684\u53c2\u8003\u3002    "),(0,o.kt)("h2",{id:"\u4f2a\u7248\u672c\u7684\u6267\u884c"},"\u4f2a\u7248\u672c\u7684\u6267\u884c"),(0,o.kt)("p",null,"\u5728\u62c9\u53d6\u8bf7\u6c42\u4e2d\uff0c\u68c0\u67e5 ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn-core")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn-k8shim")," \u5b58\u50a8\u5e93\u5f3a\u5236\u6267\u884c\u7248\u672c\u683c\u5f0f\u3002\n\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"master"),"\u5206\u652f\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn-core")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"yunikorn-scheduler-interface")," \u5b58\u50a8\u5e93\u7684\u7248\u672c\u5f15\u7528\u4e0d\u662f\u4f2a\u7248\u672c\uff0c\u5219\u4f1a\u89e6\u53d1\u6784\u5efa\u5931\u8d25\u3002"),(0,o.kt)("p",null,"\u8be5\u68c0\u67e5\u5f3a\u5236\u7248\u672c\u5f15\u7528\u7684\u5f00\u5934\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"v.0.0.0-")),(0,o.kt)("p",null,"\u6839\u636e\u4e0a\u9762\u7684",(0,o.kt)("a",{parentName:"p",href:"#why-a-pseudo-version"},"\u4e3a\u4ec0\u4e48\u662f\u4f2a\u7248\u672c"),"\u89e3\u91ca\uff0c\u4f2a\u7248\u672c\u4e0d\u4f1a\u5728\u53d1\u5e03\u5206\u652f\u4e2d\u5f3a\u5236\u6267\u884c\u3002"),(0,o.kt)("h2",{id:"\u66f4\u65b0core\u4f9d\u8d56"},"\u66f4\u65b0core\u4f9d\u8d56"),(0,o.kt)("p",null,"\u5728\u66f4\u65b0core\u4f9d\u8d56\u9879\u4e4b\u524d\uff0c\u5fc5\u987b\u786e\u4fdd\u8c03\u5ea6\u5668\u63a5\u53e3\u66f4\u6539\u5df2\u5b8c\u6210\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u8c03\u5ea6\u5668\u754c\u9762\u4e2d\u8fdb\u884c\u66f4\u6539\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u66f4\u6539\u63d0\u4ea4\u5230 GitHub \u4e0a\u7684 master \u5206\u652f\u5e76\u62c9\u53d6\u6700\u65b0\u7684 master \u5206\u652f\u63d0\u4ea4\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4e3a\u8c03\u5ea6\u5668\u63a5\u53e3",(0,o.kt)("a",{parentName:"li",href:"#generate-a-pseudo-version"},"\u751f\u6210\u65b0\u7684\u4f2a\u7248\u672c"),"\u3002")),(0,o.kt)("p",null,"\u66f4\u65b0core\u4f9d\u8d56"),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u4f9d\u8d56\u5b58\u50a8\u5e93\u7684go.mod\u6587\u4ef6\uff1acore\u5b58\u50a8\u5e93",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00go.mod\u6587\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u590d\u5236\u751f\u6210\u7684\u4f2a\u7248\u672c\u5f15\u7528"),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u8c03\u5ea6\u5668\u63a5\u53e3\u7248\u672c\u5f15\u7528\u66ff\u6362\u4e3a",(0,o.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 3"),"\u4e2d\u751f\u6210\u7684\u7248\u672c\u5f15\u7528"),(0,o.kt)("li",{parentName:"ul"},"\u4fdd\u5b58go.mod\u6587\u4ef6"))),(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"li"},"make test"),"\u4ee5\u786e\u4fdd\u66f4\u6539\u6709\u6548\u3002\u6784\u5efa\u5c06\u62c9\u53d6\u65b0\u7684\u4f9d\u8d56\u9879\uff0c\u5e76\u4e14\u5c06\u4f7f\u7528\u8c03\u5ea6\u5668\u63a5\u53e3\u4e2d\u7684\u66f4\u6539\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u66f4\u6539\u63d0\u4ea4\u5230 GitHub \u4e0a\u7684 master \u5206\u652f\u5e76\u62c9\u53d6\u6700\u65b0\u7684 master \u5206\u652f\u63d0\u4ea4\u3002")),(0,o.kt)("h2",{id:"\u66f4\u65b0shim\u4f9d\u8d56\u9879"},"\u66f4\u65b0shim\u4f9d\u8d56\u9879"),(0,o.kt)("p",null,"\u5728\u66f4\u65b0 shim \u4f9d\u8d56\u9879\u4e4b\u524d\uff0c\u60a8\u5fc5\u987b\u786e\u4fddcore\u4f9d\u8d56\u9879\u5df2\u66f4\u65b0\u5e76\u63d0\u4ea4\u3002\n\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u8c03\u5ea6\u5668\u63a5\u53e3\u7684\u5f15\u7528\u6ca1\u6709\u6539\u53d8\u3002\n\u8fd9\u4e0d\u662f\u95ee\u9898\uff0c\u8981\u4e48\u8df3\u8fc7\u66f4\u65b0\u6b65\u9aa4\uff0c\u8981\u4e48\u6309\u7167\u6b63\u5e38\u6267\u884c\u66f4\u65b0\u6b65\u9aa4\uff0c\u4ece\u800c\u5728\u63d0\u4ea4\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u53d1\u751f\u4efb\u4f55\u66f4\u6539\u3002"),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"\u4e3acore",(0,o.kt)("a",{parentName:"li",href:"#generate-a-pseudo-version"},"\u751f\u6210\u65b0\u7684\u4f2a\u7248\u672c")),(0,o.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u4f9d\u8d56\u5b58\u50a8\u5e93\u7684go.mod\u6587\u4ef6\uff1ak8shim\u5b58\u50a8\u5e93",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00go.mod\u6587\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u590d\u5236\u751f\u6210\u7684\u8c03\u5ea6\u5668\u63a5\u53e3\u7684\u4f2a\u7248\u672c\u5f15\u7528"),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u8c03\u5ea6\u5668\u63a5\u53e3\u7248\u672c\u5f15\u7528\u66ff\u6362\u4e3a",(0,o.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 3"),"\u4e2d\u751f\u6210\u7684\u7248\u672c\u5f15\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u590d\u5236\u751f\u6210\u7684core\u4f2a\u7248\u672c\u5f15\u7528"),(0,o.kt)("li",{parentName:"ul"},"\u5c06core\u7248\u672c\u5f15\u7528\u66ff\u6362\u4e3a",(0,o.kt)("strong",{parentName:"li"},"\u6b65\u9aa4 7"),"\u4e2d\u751f\u6210\u7684\u7248\u672c\u5f15\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4fdd\u5b58go.mod\u6587\u4ef6"))),(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"li"},"make test"),"\u4ee5\u786e\u4fdd\u66f4\u6539\u6709\u6548\u3002\u6784\u5efa\u5c06\u62c9\u4e0b\u65b0\u7684\u4f9d\u8d56\u9879\uff0c\u5e76\u5c06\u4f7f\u7528core\u548c\u8c03\u5ea6\u5668\u63a5\u53e3\u4e2d\u7684\u66f4\u6539\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u66f4\u6539\u63d0\u4ea4\u5230 GitHub \u4e0a\u7684 master \u5206\u652f")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u540c\u65f6\u5728\u8c03\u5ea6\u5668\u63a5\u53e3\u548c/\u6216core\u4e2d\u5904\u7406\u591a\u4e2a PR\uff0c\u5219\u4e0d\u540c\u7684 PR \u53ef\u80fd\u5df2\u7ecf\u5e94\u7528\u4e86\u66f4\u65b0\u3002\n\u8fd9\u5b8c\u5168\u53d6\u51b3\u4e8e\u63d0\u4ea4\u987a\u5e8f\u3002\n\u56e0\u6b64\uff0c\u6267\u884c",(0,o.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 5"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u6b65\u9aa4 8"),"\u4ee5\u786e\u4fdd\u4e0d\u5b58\u5728\u56de\u5f52\u3002")),(0,o.kt)("h2",{id:"\u751f\u6210\u4f2a\u7248\u672c"},"\u751f\u6210\u4f2a\u7248\u672c"),(0,o.kt)("p",null,"go.mod \u6587\u4ef6\u4e2d\u4f7f\u7528\u7684\u4f2a\u5f15\u7528\u57fa\u4e8e\u63d0\u4ea4hash\u548c\u65f6\u95f4\u6233\u3002\n\u4f7f\u7528\u4ee5\u4e0b\u6b65\u9aa4\u751f\u6210\u4e00\u4e2a\u5f88\u7b80\u5355\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u66f4\u6539\u4e3a\u9700\u8981\u751f\u6210\u65b0\u4f2a\u7248\u672c\u7684\u5b58\u50a8\u5e93\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u66f4\u65b0master\u5206\u652f\u7684\u672c\u5730\u68c0\u67e5\u4ee3\u7801\u4ee5\u83b7\u53d6\u6700\u65b0\u63d0\u4ea4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git pull; git status\n")),(0,o.kt)("p",null,"\u72b6\u6001\u5e94\u663e\u793a\u4e3a\u6700\u65b0\u7684\u514b\u9686\u4f4d\u7f6e\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"origin"),"\u3002"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6\u4f2a\u7248\u672c\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TZ=UTC git --no-pager show --quiet --abbrev=12 --date='format-local:%Y%m%d%H%M%S' --format='v0.0.0-%cd-%h'\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u8be5\u547d\u4ee4\u5c06\u6253\u5370\u5982\u4e0b\u4e00\u884c\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"v0.0.0-20220318052402-b3dfd0d2adaa\n")),(0,o.kt)("p",null,"\u8fd9\u662f\u53ef\u4ee5\u5728 go.mod \u6587\u4ef6\u4e2d\u4f7f\u7528\u7684\u4f2a\u7248\u672c\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u4f2a\u7248\u672c\u5fc5\u987b\u57fa\u4e8e vcs \u7cfb\u7edf\u4e2d\u7684\u63d0\u4ea4\uff0c\u5373\u6765\u81ea Github \u7684\u63d0\u4ea4\u3002\n\u65e0\u6cd5\u4f7f\u7528\u672c\u5730\u63d0\u4ea4\u6216\u5c1a\u672a\u5408\u5e76\u5230 PR \u4e2d\u7684\u63d0\u4ea4\u3002")))}k.isMDXComponent=!0}}]);