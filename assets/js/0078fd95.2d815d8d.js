"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63078],{34410:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=s(13274),t=s(1780);const o={id:"cluster",title:"Cluster"},c=void 0,i={id:"api/cluster",title:"Cluster",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.2/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/docs/1.5.2/api/cluster",draft:!1,unlisted:!1,tags:[],version:"1.5.2",frontMatter:{id:"cluster",title:"Cluster"},sidebar:"docs",previous:{title:"Run RayService",permalink:"/docs/1.5.2/user_guide/workloads/run_ray_service"},next:{title:"Scheduler",permalink:"/docs/1.5.2/api/scheduler"}},l={},d=[{value:"Clusters",id:"clusters",level:2},{value:"Success response",id:"success-response",level:3},{value:"Error response",id:"error-response",level:3}];function u(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"clusters",children:"Clusters"}),"\n",(0,r.jsx)(n.p,{children:"Returns general information about the clusters managed by the YuniKorn Scheduler.\nThe response includes build information about resource managers."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"URL"})," : ",(0,r.jsx)(n.code,{children:"/ws/v1/clusters"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Method"})," : ",(0,r.jsx)(n.code,{children:"GET"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Auth required"})," : NO"]}),"\n",(0,r.jsx)(n.h3,{id:"success-response",children:"Success response"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Content examples"})}),"\n",(0,r.jsx)(n.p,{children:"As an example, here is a response from a cluster with 1 resource manager."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "startTime": 1697100824863892713,\n        "rmBuildInformation": [\n            {\n                "arch": "amd64",\n                "buildDate": "2023-09-04T18:11:43+0800",\n                "buildVersion": "latest",\n                "coreSHA": "0ecf24d2aad2",\n                "goVersion": "1.21",\n                "isPluginVersion": "false",\n                "rmId": "mycluster",\n                "shimSHA": "8b26c373b4b5",\n                "siSHA": "e7622cf54e95"\n            }\n        ],\n        "partition": "default",\n        "clusterName": "kubernetes"\n    }\n]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"error-response",children:"Error response"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Code"})," : ",(0,r.jsx)(n.code,{children:"500 Internal Server Error"})]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1780:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(79474);const t={},o=r.createContext(t);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);