"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2352],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>h});var a=r(11504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),p=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=t,h=c["".concat(l,".").concat(d)]||c[d]||g[d]||i;return r?a.createElement(h,o(o({ref:n},u),{},{components:r})):a.createElement(h,o({ref:n},u))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:t,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16636:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(45072),t=(r(11504),r(95788));const i={id:"rn-1.2.0",title:"Release Announcement v1.2.0"},o=void 0,s={type:"mdx",permalink:"/release-announce/1.2.0",source:"@site/src/pages/release-announce/1.2.0.md",title:"Release Announcement v1.2.0",description:"\x3c!--",frontMatter:{id:"rn-1.2.0",title:"Release Announcement v1.2.0"}},l=[{value:"Overview",id:"overview",level:2},{value:"Highlights",id:"highlights",level:2},{value:"User Quota Tracking",id:"user-quota-tracking",level:3},{value:"Enhanced User &amp; Group handling",id:"enhanced-user--group-handling",level:3},{value:"Support app/task priority aware scheduling",id:"support-apptask-priority-aware-scheduling",level:3},{value:"Support arbitrary resources in namespace annotation",id:"support-arbitrary-resources-in-namespace-annotation",level:3},{value:"Build YuniKorn against Kubernetes 1.23",id:"build-yunikorn-against-kubernetes-123",level:3},{value:"Configuration V2",id:"configuration-v2",level:3},{value:"Revamping e2e testing",id:"revamping-e2e-testing",level:3},{value:"Community",id:"community",level:2}],p={toc:l},u="wrapper";function c(e){let{components:n,...r}=e;return(0,t.yg)(u,(0,a.c)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"release-announcement-v120"},"Release Announcement v1.2.0"),(0,t.yg)("p",null,"We are pleased to announce that the Apache YuniKorn community has voted to release 1.2.0. Apache YuniKorn is a standalone resource scheduler, designed for managing, and scheduling Big Data workloads on container orchestration frameworks like Kubernetes for on-prem and on-cloud use cases."),(0,t.yg)("h2",{id:"overview"},"Overview"),(0,t.yg)("p",null,"The Apache YuniKorn community has fixed 150 ",(0,t.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/issues/?filter=12352194"},"JIRAs")," in this release."),(0,t.yg)("p",null,"Release manager: Manikandan R"),(0,t.yg)("p",null,"Release date: 2023-02-02"),(0,t.yg)("h2",{id:"highlights"},"Highlights"),(0,t.yg)("h3",{id:"user-quota-tracking"},"User Quota Tracking"),(0,t.yg)("p",null,"User & Group resource usage are being tracked at queue level considering its hierarchical structure too for property overriding preference as well. Please see ",(0,t.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-984"},"YUNIKORN-984")," for details."),(0,t.yg)("h3",{id:"enhanced-user--group-handling"},"Enhanced User & Group handling"),(0,t.yg)("p",null,"User & Group handling mechanism has been enhanced, which in turn opened up various ways to detect the User and its associated group. Please see ",(0,t.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1306"},"YUNIKORN-1306")," for details."),(0,t.yg)("h3",{id:"support-apptask-priority-aware-scheduling"},"Support app/task priority aware scheduling"),(0,t.yg)("p",null,"In addition to Fair & FIFO based application sorting policies, Priority based sorting has been designed and implemented in such a way to be compatible with Kubernetes standard priority handling wherever possible. Please see ",(0,t.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1"},"YUNIKORN-1")," for details."),(0,t.yg)("h3",{id:"support-arbitrary-resources-in-namespace-annotation"},"Support arbitrary resources in namespace annotation"),(0,t.yg)("p",null,"Support for all resource types in namespace annotations is possible now. Earlier only cpu and memory resource type is allowed. Please see ",(0,t.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1275"},"YUNIKORN-1275")," for details."),(0,t.yg)("h3",{id:"build-yunikorn-against-kubernetes-123"},"Build YuniKorn against Kubernetes 1.23"),(0,t.yg)("p",null,"This will allow us to maintain support for running on 1.21 and later clusters, while also supporting newer scheduler features. Please see ",(0,t.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1348"},"YUNIKORN-1348")," for details."),(0,t.yg)("h3",{id:"configuration-v2"},"Configuration V2"),(0,t.yg)("p",null,"The configuration system has been overhauled ",(0,t.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1221"},"YUNIKORN-1221"),":"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"REST interface for config update has been removed"),(0,t.yg)("li",{parentName:"ul"},"New config map: yunikorn-defaults managed via helm"),(0,t.yg)("li",{parentName:"ul"},"Existing config map retained.")),(0,t.yg)("p",null,"Please read ",(0,t.yg)("a",{parentName:"p",href:"https://yunikorn.apache.org/docs/next/design/config_v2"},"https://yunikorn.apache.org/docs/next/design/config_v2")," for details"),(0,t.yg)("h3",{id:"revamping-e2e-testing"},"Revamping e2e testing"),(0,t.yg)("p",null,"Stabilization of various end-to-end tests has been covered as part of ",(0,t.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1491"},"YUNIKORN-1491"),"."),(0,t.yg)("h2",{id:"community"},"Community"),(0,t.yg)("p",null,"The Apache YuniKorn community is pleased to welcome new PMC member Tingyao Huang and committer Rainie Li."))}c.isMDXComponent=!0}}]);