"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43904],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>y});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),g=o,y=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},50708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(45072),o=(t(11504),t(95788));const a={id:"cluster",title:"Cluster"},s=void 0,i={unversionedId:"api/cluster",id:"version-0.9.0/api/cluster",title:"Cluster",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/docs/0.9.0/api/cluster",draft:!1,tags:[],version:"0.9.0",frontMatter:{id:"cluster",title:"Cluster"},sidebar:"version-0.9.0/docs",previous:{title:"Run Tensorflow Jobs",permalink:"/docs/0.9.0/user_guide/workloads/run_tf"},next:{title:"Scheduler",permalink:"/docs/0.9.0/api/scheduler"}},l={},p=[{value:"Clusters",id:"clusters",level:2},{value:"Success response",id:"success-response",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"clusters"},"Clusters"),(0,o.yg)("p",null,"Returns general information about the clusters managed by the YuniKorn Scheduler. Information includes number of (total, failed, pending, running, completed) applications and containers.  "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"URL")," : ",(0,o.yg)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Method")," : ",(0,o.yg)("inlineCode",{parentName:"p"},"GET")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Auth required")," : NO"),(0,o.yg)("h3",{id:"success-response"},"Success response"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Code")," : ",(0,o.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Content examples")),(0,o.yg)("p",null,"As an example, here is a response from a 2-node cluster with 3 applications and 4 running containers."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "clusterName": "kubernetes",\n        "totalApplications": "3",\n        "failedApplications": "1",\n        "pendingApplications": "",\n        "runningApplications": "3",\n        "completedApplications": "",\n        "totalContainers": "4",\n        "failedContainers": "",\n        "pendingContainers": "",\n        "runningContainers": "4",\n        "activeNodes": "2",\n        "totalNodes": "2",\n        "failedNodes": ""\n    }\n]\n')))}d.isMDXComponent=!0}}]);