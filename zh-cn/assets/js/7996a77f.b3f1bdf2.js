"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45144],{95788:(e,n,r)=>{r.d(n,{Iu:()=>s,yg:()=>d});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),p=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,d=g["".concat(u,".").concat(m)]||g[m]||y[m]||l;return r?t.createElement(d,o(o({ref:n},s),{},{components:r})):t.createElement(d,o({ref:n},s))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21832:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=r(45072),a=(r(11504),r(95788));const l={id:"usergroup_resolution",title:"\u89e3\u6790\u7528\u6237\u548c\u7fa4\u7ec4"},o=void 0,i={unversionedId:"user_guide/usergroup_resolution",id:"version-1.4.0/user_guide/usergroup_resolution",title:"\u89e3\u6790\u7528\u6237\u548c\u7fa4\u7ec4",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.4.0/user_guide/usergroup_resolution.md",sourceDirName:"user_guide",slug:"/user_guide/usergroup_resolution",permalink:"/zh-cn/docs/user_guide/usergroup_resolution",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"usergroup_resolution",title:"\u89e3\u6790\u7528\u6237\u548c\u7fa4\u7ec4"},sidebar:"docs",previous:{title:"App \u653e\u7f6e\u89c4\u5219",permalink:"/zh-cn/docs/user_guide/placement_rules"},next:{title:"\u6392\u5e8f\u7b56\u7565",permalink:"/zh-cn/docs/user_guide/sorting_policies"}},u={},p=[{value:"\u7528\u6237\u89e3\u6790 (User resolution)",id:"\u7528\u6237\u89e3\u6790-user-resolution",level:2},{value:"\u4f20\u7edf\u7684\u7528\u6237\u5904\u7406",id:"\u4f20\u7edf\u7684\u7528\u6237\u5904\u7406",level:2},{value:"\u4f7f\u7528<code>yunikorn.apache.org/username</code>\u6807\u7b7e",id:"\u4f7f\u7528yunikornapacheorgusername\u6807\u7b7e",level:3},{value:"\u7fa4\u7ec4\u89e3\u6790 (Group resolution)",id:"\u7fa4\u7ec4\u89e3\u6790-group-resolution",level:3},{value:"\u63a8\u8350\u7684\u5904\u7406\u7528\u6237\u7684\u65b0\u65b9\u5f0f",id:"\u63a8\u8350\u7684\u5904\u7406\u7528\u6237\u7684\u65b0\u65b9\u5f0f",level:2},{value:"\u914d\u7f6e\u51c6\u5165\u63a7\u5236\u5668",id:"\u914d\u7f6e\u51c6\u5165\u63a7\u5236\u5668",level:3}],s={toc:p},g="wrapper";function y(e){let{components:n,...r}=e;return(0,a.yg)(g,(0,t.c)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u7528\u6237\u89e3\u6790-user-resolution"},"\u7528\u6237\u89e3\u6790 (User resolution)"),(0,a.yg)("p",null,"\u7528\u6237\u4fe1\u606f\u662f\u8c03\u5ea6\u5468\u671f\u7684\u91cd\u8981\u6982\u5ff5\uff0c\u4ed6\u662f\u6c7a\u5b9a\u300c\u662f\u5426\u5c06\u4f5c\u4e1a\u63d0\u4ea4\u5230\u961f\u5217\u300d\u7684\u5173\u952e\u6307\u6807\u4e4b\u4e00\u3002Yunikorn\u8c03\u5ea6\u5668\u4f9d\u8d56k8s Shim\u6765\u63d0\u4f9b\u7528\u6237\u4fe1\u606f\uff0c\u4f46\u5728Kubernetes\u7684\u4e16\u754c\u4e2d\uff0c\u6ca1\u6709\u4efb\u4f55\u5bf9\u8c61\u53ef\u4ee5\u8bc6\u522b\u5b9e\u9645\u7528\u6237\uff0c\u8fd9\u662f\u57fa\u4e8e\u8bbe\u8ba1\u4f7f\u7136\uff0c\u53ef\u4ee5\u4ece\u8fd9\u4e2a",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#users-in-kubernetes"},"\u9875\u9762"),"\u4e2d\u5f97\u5230\u66f4\u591a\u8d44\u8baf\u3002"),(0,a.yg)("p",null,"\u5728Yunikorn\u4e2d\u6709\u4e24\u79cd\u5904\u7406\u7528\u6237\u548c\u7fa4\u7ec4\u7684\u65b9\u6cd5\u3002\u7b2c\u4e00\u79cd\u662f\u4f20\u7edf\u7684\u65b9\u5f0f\uff0c\u4f7f\u7528\u6807\u7b7e",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/usernname"),"\u3002\u5982\u679c\u6b64\u6807\u7b7e\u8bbe\u7f6e\u5728pod\u4e0a\uff0c\u5219\u8be5\u503c\u4f1a\u81ea\u52a8\u63d0\u53d6\u5230shim\u4e2d\u5e76\u88ab\u4f7f\u7528\u3002\u7fa4\u7ec4\u89e3\u6790\u4e5f\u5728shim\u4e2d\u5b8c\u6210\uff0c\u4f46\u9884\u8bbe\u662f\u4e0d\u542f\u7528\u7684\u3002\u8fd9\u79cd\u65b9\u6cd5\u7684\u95ee\u9898\u6709\u4e24\u4e2a\u65b9\u9762\uff1a\u9996\u5148\uff0c\u7528\u6237\u9650\u5236\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u88ab\u7ed5\u8fc7\uff0c\u56e0\u4e3a\u63d0\u4ea4\u8005\u53ef\u4ee5\u81ea\u7531\u5730\u5c06\u6807\u7b7e\u8bbe\u7f6e\u4e3a\u4efb\u4f55\u503c\uff0c\u56e0\u6b64\u8fd9\u53ea\u80fd\u5728\u53d7\u4fe1\u4efb\u7684\u73af\u5883\u4e2d\u4f7f\u7528\u3002\u5176\u6b21\uff0c\u5728shim\u4e2d\u8bc6\u522b\u7ec4\u522b\u592a\u6162\u4e86\u2500\u5c06\u7528\u6237\u5206\u914d\u5230\u591a\u4e2a\u7fa4\u7ec4\u200b\u662f\u4e0d\u53ef\u884c\u7684\uff0c\u56e0\u4e3a\u6839\u636e\u8eab\u4efd\u9a8c\u8bc1\u673a\u5236(\u5982X509\uff0ctokens\uff0cLDP\uff0cetc)\u53ef\u80fd\u5f88\u96be\u67e5\u627e\u7528\u6237\u5c5e\u4e8e\u54ea\u4e00\u4e2a\u7fa4\u7ec4\u3002"),(0,a.yg)("p",null,"\u7531\u4e8e\u8fd9\u4e9b\u9650\u5236\u5f88\u5927\uff0c\u4e3a\u4e86\u5411\u540e\u517c\u5bb9\u624d\u4fdd\u7559\u4e86\u6b64\u65b9\u6cd5\uff0c\u4e14\u5c06\u6765\u53ef\u80fd\u4f1a\u88ab\u5220\u9664\u3002"),(0,a.yg)("p",null,"\u4e00\u79cd\u66f4\u53ef\u9760\u548c\u5065\u5168\u7684\u673a\u5236\u662f\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/user.info"),"\uff0c\u5176\u4e2d\u7528\u6237\u4fe1\u606f\u4e2d\u7684\u300c\u5141\u8bb8\u7684\u7528\u6237\u6216\u7fa4\u7ec4\u5217\u8868\u300d\u53ef\u4ee5\u7531\u4ece\u5916\u90e8\u8bbe\u7f6e\uff0c\u6216\u8005\u51c6\u5165\u63a7\u5236(admission controller)\u53ef\u4ee5\u81ea\u52a8\u5c06\u5176\u9644\u52a0\u5230\u6bcf\u4e2a\u5de5\u4f5c\u8d1f\u8f7d(workflow)\u3002"),(0,a.yg)("h2",{id:"\u4f20\u7edf\u7684\u7528\u6237\u5904\u7406"},"\u4f20\u7edf\u7684\u7528\u6237\u5904\u7406"),(0,a.yg)("h3",{id:"\u4f7f\u7528yunikornapacheorgusername\u6807\u7b7e"},"\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"h3"},"yunikorn.apache.org/username"),"\u6807\u7b7e"),(0,a.yg)("p",null,"\u7531\u4e8ekubernetes\u6ca1\u6709\u9884\u5b9a\u4e49\u7684\u5b57\u6bb5\u548c\u8d44\u6e90\u80fd\u7528\u4e8e\u7528\u6237\u4fe1\u606f\uff0c\u4e14\u4e2a\u522b\u96c6\u7fa4\u4f7f\u7528\u7684\u7528\u6237\u8bc6\u522b\u5de5\u5177\u53ef\u80fd\u6709\u6240\u4e0d\u540c\uff0c\u4e8e\u662f\u6211\u4eec\u5b9a\u4e49\u4e86\u6807\u51c6\u7684\u65b9\u6cd5\u6765\u8bc6\u522b\u7528\u6237\u3002Yunikorn\u9700\u8981\u6dfb\u52a0\u4e00\u4e2akubernetes",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"\u6807\u7b7e"),"\u3002\u8fd9\u91cc\u63d0\u4f9b\u4e86",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/"},"\u63a8\u8350\u7684\u4f7f\u7528\u65b9\u6cd5"),"\uff0c\u9884\u8bbe\u7684\u6807\u7b7e\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u6807\u7b7e"),(0,a.yg)("th",{parentName:"tr",align:null},"\u503c"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"yunikorn.apache.org/username"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\u3002\u53ef\u4ee5\u91cd\u590d\u8be5\u6761\u76ee\uff0c\u4f46\u53ea\u4f1a\u4f7f\u7528\u7b2c\u4e00\u4e2a\u503c\u3002\u9ed8\u8ba4\u7684\u7528\u6237\u662f",(0,a.yg)("inlineCode",{parentName:"td"},"nobody"))))),(0,a.yg)("p",null,"\u4e3e\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n  labels:\n    yunikorn.apache.org/username:"john"\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u4e3a\u4e86\u8ba9\u8be5\u5b57\u6bb5(field)\u6210\u4e3a\u552f\u4e00\u8bc6\u522b\u7528\u6237\u7684\u6307\u6807\uff0c\u5efa\u8bae\u96c6\u7fa4\u7ba1\u7406\u5458\u4f7f\u7528\u7528\u6237\u8bc6\u522b\u5de5\u5177\uff0c\u5c06\u8fd9\u4e2a\u6807\u7b7e\u8bbe\u4e3a\u4e0d\u53ef\u53d8\u7684\u5b57\u6bb5\u3002\u96c6\u7fa4\u7ba1\u7406\u5458\u6216\u7528\u6237\u53ef\u4ee5\u81ea\u7531\u7684\u4f7f\u7528\u4efb\u4f55\u65b9\u6cd5\u6216\u5de5\u5177\u6765\u589e\u52a0\u8fd9\u4e2a\u5b57\u6bb5\u548c\u503c\u3002\u5176\u4e2d\u5305\u542b\u5728\u63d0\u4ea4\u65f6\u624b\u52a8\u6dfb\u52a0\u3002")),(0,a.yg)("admonition",{title:"\u5047\u8bbe",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"\u5047\u8bbe\uff1a\nYunikorn\u5047\u8bbe\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u6240\u6709pod\u90fd\u5c5e\u4e8e\u540c\u4e00\u4e2a\u7528\u6237\u3002\u6211\u4eec\u5efa\u8bae\u5c06\u7528\u6237\u6807\u7b7e\u6dfb\u52a0\u5230\u5e94\u7528\u7a0b\u5e8f\u7684\u6bcf\u4e2apod\u3002\u8fd9\u662f\u4e3a\u4e86\u786e\u4fdd\u6ca1\u6709\u4efb\u4f55\u610f\u5916\u3002")),(0,a.yg)("p",null,"\u5728",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release/blob/master/helm-charts/yunikorn/templates/deployment.yaml"},"K8s\u7684\u90e8\u7f72"),"\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8986\u76d6",(0,a.yg)("inlineCode",{parentName:"p"},"USER_LABEL_KEY"),"\u6765\u6539\u53d8\u6807\u7b7e",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/username"),"\u7684\u9ed8\u8ba4\u503c\uff0c\u8fd9\u5728\u5df2\u7ecf\u6dfb\u52a0\u7528\u6237\u6807\u7b7e\uff0c\u6216\u51fa\u4e8e\u67d0\u4e9b\u5b89\u5168\u56e0\u7d20\u4e0b\u5fc5\u987b\u4fee\u6539\u6807\u7b7e\u7684\u60c5\u51b5\u4e0b\u7279\u522b\u6709\u7528\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'  env:\n  - name: USER_LABEL_KEY\n    value:"custom_user_label"\n')),(0,a.yg)("h3",{id:"\u7fa4\u7ec4\u89e3\u6790-group-resolution"},"\u7fa4\u7ec4\u89e3\u6790 (Group resolution)"),(0,a.yg)("p",null,"\u8fd9\u91cc\u5305\u542b\u7fa4\u7ec4\u6210\u5458\u89e3\u6790\u7684\u5b9a\u4e49\uff0c\u6b64\u5916\u8be5\u529f\u80fd\u662f\u53ef\u4ee5\u9009\u62e9\u52a0\u5165\u6216\u79fb\u9664\u7684\u3002\u7fa4\u7ec4\u4e0d\u5fc5\u662f\u7528\u6237\u6216\u7fa4\u7ec4\u5bf9\u8c61\u6240\u63d0\u4f9b\u7684\u4e00\u90e8\u5206\u3002\u5f53\u5bf9\u8c61\u88ab\u52a0\u5230\u7f13\u5b58\u4e2d\u65f6\uff0c\u7fa4\u7ec4\u5c06\u81ea\u52a8\u6839\u636e\u914d\u7f6e\u6765\u89e3\u6790\u3002\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u5206\u533a(partition)\u8bbe\u7f6e\u8fde\u63a5\u5230\u7f13\u5b58\u7684\u89e3\u6790\u5668(resolver)\u3002"),(0,a.yg)("p",null,'\u9884\u8bbe\u7684\u7fa4\u7ec4\u89e3\u6790\u5668\u662f"no resolver"\u3002\u6b64\u89e3\u6790\u5668\u4ec5\u56de\u4f20\u7528\u6237\u660e\u548c\u4e0e\u7528\u6237\u540c\u540d\u7684\u4e3b\u8981\u7fa4\u7ec4\u3002'),(0,a.yg)("p",null,"\u5176\u4ed6\u89e3\u6790\u5668\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\u89e3\u6790\u5668"),(0,a.yg)("li",{parentName:"ul"},"\u6d4b\u8bd5\u89e3\u6790\u5668")),(0,a.yg)("h2",{id:"\u63a8\u8350\u7684\u5904\u7406\u7528\u6237\u7684\u65b0\u65b9\u5f0f"},"\u63a8\u8350\u7684\u5904\u7406\u7528\u6237\u7684\u65b0\u65b9\u5f0f"),(0,a.yg)("p",null,"\u4eceYunikorn 1.2\u5f00\u59cb\uff0c\u53ef\u4ee5\u4f7f\u7528\u66f4\u590d\u6742\u7684\u7528\u6237/\u7fa4\u7ec4\u89e3\u6790\u65b9\u5f0f\u3002"),(0,a.yg)("p",null,"\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0cYunikorn\u4e0d\u518d\u4f9d\u8d56\u6807\u7b7e",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/username"),"\uff0c\u800c\u662f\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/user.info"),"\u9644\u52a0\u5230\u5de5\u4f5c\u8d1f\u8f7d\u3002\u901a\u8fc7\u7b80\u5355\u7684JSON\u503c\uff0c\u5b9a\u4e49\u7528\u6237\u540d\u548c\u7fa4\u7ec4\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n  annotations:\n    yunikorn.apache.org/user.info:"\n    {\n      username: \\"yunikorn\\"\uff0c\n      groups: [\n        \\"developers\\"\uff0c\n        \\"devops\\"\n      ]\n    }"\n')),(0,a.yg)("p",null,"\u7136\u800c\uff0c\u4e3a\u4e86\u52a0\u5f3a\u5b89\u5168\u6027\uff0c\u5728\u51c6\u5165\u63a7\u5236\u5668\u4e2d\u5f3a\u5236\u6267\u884c\u4e86\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4e0d\u662f\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u7528\u6237\u90fd\u53ef\u4ee5\u9644\u52a0\u6b64\u6ce8\u89e3(annotation)\uff0c\u53ea\u6709\u5728\u914d\u7f6e\u5141\u8bb8\u65f6\u624d\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u5982\u679c\u7f3a\u5c11\u6ce8\u89e3\uff0c\u5219\u51c6\u5165\u63a7\u5236\u5668\u5c06\u81ea\u52a8\u6dfb\u52a0\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u82e5\u5c1d\u8bd5\u4fee\u6539\u6b64\u6ce8\u89e3\u5c06\u4f1a\u88ab\u62d2\u7edd\u3002")),(0,a.yg)("p",null,"\u6211\u4eec\u4e0d\u53ea\u5728pods\u4e0a\u8fd9\u6837\u505a\uff0c\u800c\u662f\u5728Deployments\uff0cReplicaSet\uff0cDeamonSet\uff0cStatefulSet\uff0cJobs\u548cCronJobs\u4e0a\u90fd\u8fd9\u6837\u505a\u3002"),(0,a.yg)("p",null,"\u6b64\u5916\uff0c\u7fa4\u7ec4\u89e3\u6790\u5668\u4e0d\u518d\u9700\u8981\u653e\u5728k8s-shim\u4e2d\u3002"),(0,a.yg)("h3",{id:"\u914d\u7f6e\u51c6\u5165\u63a7\u5236\u5668"},"\u914d\u7f6e\u51c6\u5165\u63a7\u5236\u5668"),(0,a.yg)("p",null,"\u51c6\u5165\u63a7\u5236\u53ef\u4ee5\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn-configs"),"\u7684configmap\u4e2d\u88ab\u914d\u7f6e\u3002\u6240\u6709\u6761\u76ee\u90fd\u4ee5\u524d\u7f00",(0,a.yg)("inlineCode",{parentName:"p"},"admissionController.accessControl."),"\u5f00\u5934\u3002"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u53d8\u91cf"),(0,a.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"bypassAuth")),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u4efb\u4f55\u5916\u90e8\u7528\u6237\u4f7f\u7528\u7528\u6237\u4fe1\u606f\u96c6\u521b\u5efapod")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"trustControllers")),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5141\u8bb8Kubernetes\u63a7\u5236\u5668\u7684\u7528\u6237\u521b\u5efa\u5e26\u6709\u7528\u6237\u4fe1\u606f\u96c6\u7684pod")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"systemUsers")),(0,a.yg)("td",{parentName:"tr",align:null},'"^system:serviceaccount:kube-system:"'),(0,a.yg)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u63a7\u5236\u5668\u7b26\u7269\u5e10\u53f7\u5217\u8868\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"externalUsers")),(0,a.yg)("td",{parentName:"tr",align:null},'""'),(0,a.yg)("td",{parentName:"tr",align:null},"\u5728\u300c\u5141\u8bb8\u7684\u5916\u90e8\u7528\u6237\u5217\u8868\u300d\u4e0a\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"externalGroups")),(0,a.yg)("td",{parentName:"tr",align:null},'""'),(0,a.yg)("td",{parentName:"tr",align:null},"\u5728\u300c\u5141\u8bb8\u7684\u5916\u90e8\u7fa4\u7ec4\u5217\u8868\u300d\u4e0a\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f")))),(0,a.yg)("p",null,"\u5982\u679c",(0,a.yg)("inlineCode",{parentName:"p"},"bypassAuth"),"\u8bbe\u7f6e\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u4f46\u6ce8\u89e3\u4e0d\u5b58\u5728\u4e14\u8bbe\u5b9a\u4e86\u5df2\u9057\u5f03\u7684\u7528\u6237\u6807\u7b7e\uff0c\u5219\u51c6\u5165\u63a7\u5236\u5668\u5c06\u4e0d\u4f1a\u628a\u6ce8\u89e3\u52a0\u5230pod\u4e2d\u3002\u5982\u679c\u672a\u8bbe\u7f6e\u6ce8\u89e3\u4e5f\u672a\u8bbe\u7f6e\u7528\u6237\u6807\u7b7e\uff0c\u5219\u65b0\u7684\u6ce8\u89e3\u5c06\u4f1a\u88ab\u52a0\u5165\u3002\n\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"bypassAuth"),"\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"(\u9ed8\u8ba4\u503c)\u7684\u60c5\u51b5\u4e0b\uff0c\u51c6\u5165\u63a7\u5236\u5668\u5c06\u59cb\u7ec8\u6dfb\u52a0\u65b0\u7684\u6ce8\u89e3\uff0c\u800c\u4e0d\u7ba1\u662f\u5426\u5b58\u5728\u5df2\u5f03\u7528\u7684\u6807\u7b7e\u3002"),(0,a.yg)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5fc5\u987b\u5c06\u7528\u6237\u548c\u7fa4\u7ec4\u5728\u63d0\u4ea4\u65f6\u63d0\u4f9b\u7ed9Yunikorn\uff0c\u56e0\u4e3a\u7528\u6237\u548c\u7fa4\u7ec4\u7ba1\u7406\u7531\u5916\u90e8\u7cfb\u7edf\u63d0\u4f9b\uff0c\u67e5\u627e\u673a\u5236\u5e76\u4e0d\u7b80\u5355\u3002\u56e0\u6b64\uff0c\u5728\u8fd9\u4e9b\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"externalUsers"),"\u548c",(0,a.yg)("inlineCode",{parentName:"p"},"externalGroups"),"\u914d\u7f6e\u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u5176\u4e2d\uff0c\u5339\u914d\u7684\u7528\u6237\u6216\u7fa4\u7ec4\u5c31\u53ef\u4ee5\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/user.info"),"\u8bbe\u7f6e\u4e3a\u4efb\u610f\u503c\u3002\u4f46\u8fd9\u4f1a\u5f71\u54cdYunikorn\u5185\u90e8\u7684\u8c03\u5ea6\uff0c\u56e0\u6b64\u5fc5\u987b\u4ed4\u7ec6\u8bbe\u7f6e\u8fd9\u4e9b\u5c5e\u6027\u3002"))}y.isMDXComponent=!0}}]);