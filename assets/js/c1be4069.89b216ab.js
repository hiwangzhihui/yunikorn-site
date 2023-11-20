"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=l(n),d=a,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(k,u(u({ref:t},c),{},{components:n})):r.createElement(k,u({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,u[1]=i;for(var l=2;l<o;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"queue",title:"Queue"},u=void 0,i={unversionedId:"metrics/queue",id:"metrics/queue",title:"Queue",description:"\x3c!--",source:"@site/docs/metrics/queue.md",sourceDirName:"metrics",slug:"/metrics/queue",permalink:"/docs/next/metrics/queue",draft:!1,tags:[],version:"current",frontMatter:{id:"queue",title:"Queue"},sidebar:"docs",previous:{title:"Runtime",permalink:"/docs/next/metrics/runtime"},next:{title:"Troubleshooting",permalink:"/docs/next/user_guide/troubleshooting"}},p={},l=[{value:"Queue",id:"queue",level:2},{value:"Application",id:"application",level:3},{value:"Resource",id:"resource",level:3}],c={toc:l},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"queue"},"Queue"),(0,a.kt)("h3",{id:"application"},"Application"),(0,a.kt)("p",null,"Eech queue has a ",(0,a.kt)("inlineCode",{parentName:"p"},"<queue_name> queue_app")," metric to trace the applications in the queue.\n",(0,a.kt)("inlineCode",{parentName:"p"},"<queue_name> queue_app")," metrics records the number of applications in different states.\nThese application states include ",(0,a.kt)("inlineCode",{parentName:"p"},"running"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"accepted"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rejected"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"failed")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"completed"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"<queue_name> queue_app")," metrics record container states including ",(0,a.kt)("inlineCode",{parentName:"p"},"released"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"allocated"),".\n",(0,a.kt)("strong",{parentName:"p"},"Metric Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"guage")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Namespace"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Subsystem"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"<queue name>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TYPE"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn_<queue name>_queue_app")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'yunikorn_root_default_queue_app{state="accepted"} 3\nyunikorn_root_default_queue_app{state="running"} 3\n')),(0,a.kt)("h3",{id:"resource"},"Resource"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<queue_name> queue_resource")," metric to trace the resource in the queue.\nThese resource states include ",(0,a.kt)("inlineCode",{parentName:"p"},"guaranteed"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"max"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"allocated"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pending"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"preempting"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Metric Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"guage")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Namespace"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Subsystem"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"<queue name>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TYPE"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn_<queue name>_queue_resource")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'yunikorn_root_queue_resource{resource="ephemeral-storage",state="max"} 9.41009558e+10\nyunikorn_root_queue_resource{resource="hugepages-1Gi",state="max"} 0\nyunikorn_root_queue_resource{resource="hugepages-2Mi",state="max"} 0\nyunikorn_root_queue_resource{resource="memory",state="max"} 1.6223076352e+10\nyunikorn_root_queue_resource{resource="pods",state="max"} 110\nyunikorn_root_queue_resource{resource="vcore",state="max"} 8000\n')))}m.isMDXComponent=!0}}]);