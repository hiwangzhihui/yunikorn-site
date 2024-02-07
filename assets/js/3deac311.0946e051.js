"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{95788:(e,n,r)=>{r.d(n,{Iu:()=>c,yg:()=>g});var t=r(11504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=l(r),y=a,g=s["".concat(p,".").concat(y)]||s[y]||m[y]||o;return r?t.createElement(g,u(u({ref:n},c),{},{components:r})):t.createElement(g,u({ref:n},c))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=y;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:a,u[1]=i;for(var l=2;l<o;l++)u[l]=r[l];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},78308:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(45072),a=(r(11504),r(95788));const o={id:"queue",title:"Queue"},u=void 0,i={unversionedId:"metrics/queue",id:"version-1.4.0/metrics/queue",title:"Queue",description:"\x3c!--",source:"@site/versioned_docs/version-1.4.0/metrics/queue.md",sourceDirName:"metrics",slug:"/metrics/queue",permalink:"/docs/metrics/queue",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"queue",title:"Queue"},sidebar:"docs",previous:{title:"Runtime",permalink:"/docs/metrics/runtime"},next:{title:"Troubleshooting",permalink:"/docs/user_guide/troubleshooting"}},p={},l=[{value:"Queue",id:"queue",level:2},{value:"Application",id:"application",level:3},{value:"Resource",id:"resource",level:3}],c={toc:l},s="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(s,(0,t.c)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"queue"},"Queue"),(0,a.yg)("h3",{id:"application"},"Application"),(0,a.yg)("p",null,"Eech queue has a ",(0,a.yg)("inlineCode",{parentName:"p"},"<queue_name> queue_app")," metric to trace the applications in the queue.\n",(0,a.yg)("inlineCode",{parentName:"p"},"<queue_name> queue_app")," metrics records the number of applications in different states.\nThese application states include ",(0,a.yg)("inlineCode",{parentName:"p"},"running"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"accepted"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"rejected"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"failed")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"completed"),".\n",(0,a.yg)("inlineCode",{parentName:"p"},"<queue_name> queue_app")," metrics record container states including ",(0,a.yg)("inlineCode",{parentName:"p"},"released"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"allocated"),".\n",(0,a.yg)("strong",{parentName:"p"},"Metric Type"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"guage")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Namespace"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Subsystem"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"<queue name>")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"TYPE"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn_<queue name>_queue_app")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_root_default_queue_app{state="accepted"} 3\nyunikorn_root_default_queue_app{state="running"} 3\n')),(0,a.yg)("h3",{id:"resource"},"Resource"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"<queue_name> queue_resource")," metric to trace the resource in the queue.\nThese resource states include ",(0,a.yg)("inlineCode",{parentName:"p"},"guaranteed"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"max"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"allocated"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"pending"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"preempting"),"."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Metric Type"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"guage")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Namespace"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Subsystem"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"<queue name>")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"TYPE"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn_<queue name>_queue_resource")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn_root_queue_resource{resource="ephemeral-storage",state="max"} 9.41009558e+10\nyunikorn_root_queue_resource{resource="hugepages-1Gi",state="max"} 0\nyunikorn_root_queue_resource{resource="hugepages-2Mi",state="max"} 0\nyunikorn_root_queue_resource{resource="memory",state="max"} 1.6223076352e+10\nyunikorn_root_queue_resource{resource="pods",state="max"} 110\nyunikorn_root_queue_resource{resource="vcore",state="max"} 8000\n')))}m.isMDXComponent=!0}}]);