"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[489],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14381:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"reporting_issues",title:"Reporting Issues"},u=void 0,s={unversionedId:"community/reporting_issues",id:"version-0.8.0/community/reporting_issues",title:"Reporting Issues",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/community/reporting_issues.md",sourceDirName:"community",slug:"/community/reporting_issues",permalink:"/zh-cn/docs/0.8.0/community/reporting_issues",tags:[],version:"0.8.0",frontMatter:{id:"reporting_issues",title:"Reporting Issues"},sidebar:"version-0.8.0/community",previous:{title:"Coding Guidelines",permalink:"/zh-cn/docs/0.8.0/community/coding_guidelines"},next:{title:"Community Sync Up",permalink:"/zh-cn/docs/0.8.0/community/community_sync_up"}},p={},c=[{value:"For YuniKorn Users",id:"for-yunikorn-users",level:2},{value:"For YuniKorn Developers",id:"for-yunikorn-developers",level:2},{value:"Filing a JIRA for YuniKorn issues",id:"filing-a-jira-for-yunikorn-issues",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"for-yunikorn-users"},"For YuniKorn Users"),(0,o.kt)("p",null,"If you have an issue with YuniKorn operation, please follow these guidelines:"),(0,o.kt)("p",null,"If you are having an issue with setup, configuration, or some other form of behavior not matching your expectation, join the user mailing list and ask your questions in that forum.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"https://yunikorn.apache.org"},"YuniKorn web page")," for information on mailing lists.\nYou can also ask the YuniKorn slack channel for help, check the web page for details on how to join.\nIf you have a bug that needs a fix in the code or in the documentation, please follow the procedure in ",(0,o.kt)("a",{parentName:"p",href:"#Filing-a-JIRA-for-YuniKorn-issues"},"Filing a JIRA")," below."),(0,o.kt)("h2",{id:"for-yunikorn-developers"},"For YuniKorn Developers"),(0,o.kt)("p",null,"JIRA is used by the Apache YuniKorn project to track all issues.\nThese include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add new features"),(0,o.kt)("li",{parentName:"ol"},"Improving existing features"),(0,o.kt)("li",{parentName:"ol"},"Report bugs that need to be fixed in the codebase")),(0,o.kt)("p",null,"If you are interested in tracking development issues in JIRA, you can browse\nthis ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/projects/YUNIKORN"},"link"),"."),(0,o.kt)("h2",{id:"filing-a-jira-for-yunikorn-issues"},"Filing a JIRA for YuniKorn issues"),(0,o.kt)("p",null,"Go to the Apache JIRA page to file your issue."),(0,o.kt)("p",null,"Make sure the Project is set to YuniKorn. Set the issue type field appropriately based on your analysis or request:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bug"),(0,o.kt)("li",{parentName:"ul"},"New Feature"),(0,o.kt)("li",{parentName:"ul"},"Improvement"),(0,o.kt)("li",{parentName:"ul"},"Test"),(0,o.kt)("li",{parentName:"ul"},"Wish"),(0,o.kt)("li",{parentName:"ul"},"Task")),(0,o.kt)("p",null,"For Summary, please provide a detailed title e.g. ",(0,o.kt)("em",{parentName:"p"},"K8 pod not scheduled in an empty cluster")," instead of just ",(0,o.kt)("em",{parentName:"p"},"YuniKorn scheduling failed"),"."),(0,o.kt)("p",null,"Please set the component field if you have isolated the issue to a particular component:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"build"),(0,o.kt)("td",{parentName:"tr",align:null},"Project build, build scripts, and git issues")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"core - cache"),(0,o.kt)("td",{parentName:"tr",align:null},"Core scheduler cache")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"core - common"),(0,o.kt)("td",{parentName:"tr",align:null},"Common code, like resources, for the core scheduler")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"core - scheduler"),(0,o.kt)("td",{parentName:"tr",align:null},"Core scheduling issues")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"documentation"),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation fixes and enhancements")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"scheduler-interface"),(0,o.kt)("td",{parentName:"tr",align:null},"Scheduler interface specification")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"security"),(0,o.kt)("td",{parentName:"tr",align:null},"Security related issues")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"shim - kubernetes"),(0,o.kt)("td",{parentName:"tr",align:null},"K8shim issues")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"shim - yarn"),(0,o.kt)("td",{parentName:"tr",align:null},"Hadoop YARN shim issues")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"test - smoke"),(0,o.kt)("td",{parentName:"tr",align:null},"Smoke test failures")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"test - unit"),(0,o.kt)("td",{parentName:"tr",align:null},"Unit test failures")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"webapp"),(0,o.kt)("td",{parentName:"tr",align:null},"Web UI for the scheduler")))),(0,o.kt)("p",null,"The Affects Versions/s field can be set to the earliest version of YuniKorn where you have seen the bug.\nIf you are not sure then just leave it empty."),(0,o.kt)("p",null,"If you are a developer intending to fix the bug, put your JIRA ID in the Assignee field.\nNote that you need to be in the contributors list of Apache YuniKorn in order to be able to be assign a JIRA ticket.\nIf you have not been added to the list, send an email to the ",(0,o.kt)("a",{parentName:"p",href:"mailto:dev@yunikorn.apache.org"},"dev@yunikorn.apache.org")," mailing list or ask in a comment of the jira to request for it."),(0,o.kt)("p",null,"Please put as much detail as possible in the Description field.\nInclude your configuration changes, cluster size, and YuniKorn version.\nAny related code or configuration that helps replicate the issue you should also add."),(0,o.kt)("p",null,"For bug reports: a short reproduction of the problem would be more than welcomed.\nIf you have logs, the specific part of the log with the error message or stack trace.\nAttaching the entire log can be useful.\nIf you have already tried to debug the issue describe the steps you have already done.\nEven if that result was that you were not able to reproduce the issue."),(0,o.kt)("p",null,"For new feature requests, it may include a design document.\nIf you do not have that or it is just a generic request work with us to design your feature and implement it."))}m.isMDXComponent=!0}}]);