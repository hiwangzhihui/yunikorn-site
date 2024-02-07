"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99864],{95788:(e,t,n)=>{n.d(t,{Iu:()=>g,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,y=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(y,l(l({ref:t},g),{},{components:n})):r.createElement(y,l({ref:t},g))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(45072),a=(n(11504),n(95788));const i={id:"runtime",title:"Runtime"},l=void 0,o={unversionedId:"metrics/runtime",id:"metrics/runtime",title:"Runtime",description:"\x3c!--",source:"@site/docs/metrics/runtime.md",sourceDirName:"metrics",slug:"/metrics/runtime",permalink:"/docs/next/metrics/runtime",draft:!1,tags:[],version:"current",frontMatter:{id:"runtime",title:"Runtime"},sidebar:"docs",previous:{title:"Scheduler",permalink:"/docs/next/metrics/scheduler"},next:{title:"Queue",permalink:"/docs/next/metrics/queue"}},p={},m=[{value:"MemStats",id:"memstats",level:2},{value:"Generic",id:"generic",level:2}],g={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"memstats"},"MemStats"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Yunikorn Metric"),(0,a.yg)("th",{parentName:"tr",align:null},"Runtime MemStats"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"go_mem_stats"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Alloc"),",",(0,a.yg)("inlineCode",{parentName:"td"},"TotalAlloc"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"Sys"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"HeapIdle")," and so on"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"guage"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"go_pause_ns"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"PauseNs")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"guage"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"go_pause_end"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"PauseEnd")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"guage"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"go_alloc_bysize_maxsize"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"BySize.Size")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"histogram"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"go_alloc_bysize_free"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"BySize.Frees")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"histogram"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"go_alloc_bysize_malloc"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"BySize.Mallocs")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"histogram"))))),(0,a.yg)("h2",{id:"generic"},"Generic"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"go_generic")," metric includes  descriptions of supported metrics\nin the ",(0,a.yg)("inlineCode",{parentName:"p"},"runtime/metrics")," package."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Metric Type"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"guage")))}c.isMDXComponent=!0}}]);