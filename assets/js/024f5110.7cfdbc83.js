"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96692],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>y});var t=r(11504);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=t.createContext({}),p=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=s,y=c["".concat(i,".").concat(d)]||c[d]||g[d]||a;return r?t.createElement(y,o(o({ref:n},u),{},{components:r})):t.createElement(y,o({ref:n},u))}));function y(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:s,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47356:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=r(45072),s=(r(11504),r(95788));const a={id:"cluster",title:"Cluster"},o=void 0,l={unversionedId:"api/cluster",id:"version-0.11.0/api/cluster",title:"Cluster",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/docs/0.11.0/api/cluster",draft:!1,tags:[],version:"0.11.0",frontMatter:{id:"cluster",title:"Cluster"},sidebar:"version-0.11.0/docs",previous:{title:"Run Tensorflow Jobs",permalink:"/docs/0.11.0/user_guide/workloads/run_tf"},next:{title:"Scheduler",permalink:"/docs/0.11.0/api/scheduler"}},i={},p=[{value:"Clusters",id:"clusters",level:2},{value:"Success response",id:"success-response",level:3},{value:"Error response",id:"error-response",level:3},{value:"Clusters utilization",id:"clusters-utilization",level:2},{value:"Success response",id:"success-response-1",level:3},{value:"Error response",id:"error-response-1",level:3}],u={toc:p},c="wrapper";function g(e){let{components:n,...r}=e;return(0,s.yg)(c,(0,t.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"clusters"},"Clusters"),(0,s.yg)("p",null,"Returns general information about the clusters managed by the YuniKorn Scheduler. Information includes number of (total, failed, pending, running, completed) applications and containers.  "),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"URL")," : ",(0,s.yg)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Method")," : ",(0,s.yg)("inlineCode",{parentName:"p"},"GET")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Auth required")," : NO"),(0,s.yg)("h3",{id:"success-response"},"Success response"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Code")," : ",(0,s.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Content examples")),(0,s.yg)("p",null,"As an example, here is a response from a 2-node cluster with 3 applications and 4 running containers."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "clusterName": "kubernetes",\n        "totalApplications": "3",\n        "failedApplications": "1",\n        "pendingApplications": "",\n        "runningApplications": "3",\n        "completedApplications": "",\n        "totalContainers": "4",\n        "failedContainers": "",\n        "pendingContainers": "",\n        "runningContainers": "4",\n        "activeNodes": "2",\n        "totalNodes": "2",\n        "failedNodes": ""\n    }\n]\n')),(0,s.yg)("h3",{id:"error-response"},"Error response"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Code")," : ",(0,s.yg)("inlineCode",{parentName:"p"},"500 Internal Server Error")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Content examples")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n')),(0,s.yg)("h2",{id:"clusters-utilization"},"Clusters utilization"),(0,s.yg)("p",null,"Returns statistical data related the cluster resource utilization"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"URL")," : ",(0,s.yg)("inlineCode",{parentName:"p"},"/ws/v1/clusters/utilization")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Method")," : ",(0,s.yg)("inlineCode",{parentName:"p"},"GET")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Auth required")," : NO"),(0,s.yg)("h3",{id:"success-response-1"},"Success response"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Code")," : ",(0,s.yg)("inlineCode",{parentName:"p"},"200 OK")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Content examples")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "partition": "[mycluster]default",\n        "utilization": [\n            {\n                "type": "memory",\n                "total": 5076,\n                "used": 1500,\n                "usage": "29%"\n            },\n            {\n                "type": "vcore",\n                "total": 4000,\n                "used": 300,\n                "usage": "7%"\n            }\n        ]\n    }\n]\n')),(0,s.yg)("h3",{id:"error-response-1"},"Error response"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Code")," : ",(0,s.yg)("inlineCode",{parentName:"p"},"500 Internal Server Error")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Content examples")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n')))}g.isMDXComponent=!0}}]);