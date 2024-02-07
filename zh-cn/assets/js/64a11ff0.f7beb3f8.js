"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99120],{95788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>f});var n=t(11504);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),l=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(o.Provider,{value:r},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(t),p=i,f=h["".concat(o,".").concat(p)]||h[p]||d[p]||c;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var c=t.length,a=new Array(c);a[0]=p;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s[h]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<c;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},24060:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=t(45072),i=(t(11504),t(95788));const c={id:"architecture",title:"Architecture"},a=void 0,s={unversionedId:"design/architecture",id:"design/architecture",title:"Architecture",description:"\x3c!--",source:"@site/docs/design/architecture.md",sourceDirName:"design",slug:"/design/architecture",permalink:"/zh-cn/docs/next/design/architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"docs",previous:{title:"Scheduler Object States",permalink:"/zh-cn/docs/next/developer_guide/scheduler_object_states"},next:{title:"K8s \u8c03\u5ea6\u5668\u63d2\u4ef6",permalink:"/zh-cn/docs/next/design/scheduler_plugin"}},o={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Components",id:"components",level:2},{value:"Scheduler interface",id:"scheduler-interface",level:3},{value:"Scheduler core",id:"scheduler-core",level:3},{value:"Kubernetes shim",id:"kubernetes-shim",level:3}],u={toc:l},h="wrapper";function d(e){let{components:r,...c}=e;return(0,i.yg)(h,(0,n.c)({},u,c,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Apache YuniKorn is a light-weight, universal resource scheduler for container orchestrator systems.\nIt is created to achieve fine-grained resource sharing for various workloads efficiently on a large scale, multi-tenant,\nand cloud-native environment. YuniKorn brings a unified, cross-platform, scheduling experience for mixed workloads that\nconsist of stateless batch workloads and stateful services."),(0,i.yg)("p",null,"YuniKorn now supports K8s and can be deployed as a custom K8s scheduler. YuniKorn's architecture design also allows\nadding different shim layer and adopt to different ResourceManager implementation including Apache Hadoop YARN,\nor any other systems."),(0,i.yg)("h2",{id:"architecture"},"Architecture"),(0,i.yg)("p",null,"Following chart illustrates the high-level architecture of YuniKorn."),(0,i.yg)("img",{src:t(15188).c}),(0,i.yg)("h2",{id:"components"},"Components"),(0,i.yg)("h3",{id:"scheduler-interface"},"Scheduler interface"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-scheduler-interface"},"Scheduler interface")," is an abstract layer\nwhich resource management platform (like YARN/K8s) will speak with, via API like GRPC/programing language bindings."),(0,i.yg)("h3",{id:"scheduler-core"},"Scheduler core"),(0,i.yg)("p",null,"Scheduler core encapsulates all scheduling algorithms, it collects resources from underneath resource management\nplatforms (like YARN/K8s), and is responsible for container allocation requests. It makes the decision where is the\nbest spot for each request and then sends response allocations to the resource management platform.\nScheduler core is agnostic about underneath platforms, all the communications are through the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of schedule core ",(0,i.yg)("a",{parentName:"p",href:"/zh-cn/docs/next/archived_design/scheduler_core_design"},"here"),"."),(0,i.yg)("h3",{id:"kubernetes-shim"},"Kubernetes shim"),(0,i.yg)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of the Kubernetes shim ",(0,i.yg)("a",{parentName:"p",href:"/zh-cn/docs/next/archived_design/k8shim"},"here"),"."))}d.isMDXComponent=!0},15188:(e,r,t)=>{t.d(r,{c:()=>n});const n=t.p+"assets/images/architecture-333225e01d82300eb9ee34e76cf34697.png"}}]);