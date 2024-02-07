"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64528],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>c});var a=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(t),y=r,c=s["".concat(p,".").concat(y)]||s[y]||g[y]||i;return t?a.createElement(c,l(l({ref:n},u),{},{components:t})):a.createElement(c,l({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},91880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(45072),r=(t(11504),t(95788));const i={id:"labels_and_annotations_in_yunikorn",title:"Labels and Annotations in YuniKorn"},l=void 0,o={unversionedId:"user_guide/labels_and_annotations_in_yunikorn",id:"version-1.2.0/user_guide/labels_and_annotations_in_yunikorn",title:"Labels and Annotations in YuniKorn",description:"\x3c!--",source:"@site/versioned_docs/version-1.2.0/user_guide/labels_and_annotations_in_yunikorn.md",sourceDirName:"user_guide",slug:"/user_guide/labels_and_annotations_in_yunikorn",permalink:"/zh-cn/docs/1.2.0/user_guide/labels_and_annotations_in_yunikorn",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"labels_and_annotations_in_yunikorn",title:"Labels and Annotations in YuniKorn"},sidebar:"docs",previous:{title:"Gang Scheduling",permalink:"/zh-cn/docs/1.2.0/user_guide/gang_scheduling"},next:{title:"\u6982\u8ff0",permalink:"/zh-cn/docs/1.2.0/user_guide/workloads/workload_overview"}},p={},d=[{value:"Labels and Annotations in YuniKorn",id:"labels-and-annotations-in-yunikorn",level:2},{value:"Labels in YuniKorn",id:"labels-in-yunikorn",level:3},{value:"Annotations in YuniKorn",id:"annotations-in-yunikorn",level:3}],u={toc:d},s="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"labels-and-annotations-in-yunikorn"},"Labels and Annotations in YuniKorn"),(0,r.yg)("p",null,"YuniKorn utilizes several Kubernetes labels and annotations to support various features:"),(0,r.yg)("h3",{id:"labels-in-yunikorn"},"Labels in YuniKorn"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"applicationId")),(0,r.yg)("td",{parentName:"tr",align:null},"Associates this pod with an application.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"queue")),(0,r.yg)("td",{parentName:"tr",align:null},"Selects the YuniKorn queue this application should be scheduled in. This may be ignored if a placement policy is in effect.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"SparkLabelAppID ")),(0,r.yg)("td",{parentName:"tr",align:null},"Alternative method of specifying ",(0,r.yg)("inlineCode",{parentName:"td"},"applicationId")," used by Spark Operator if the label ",(0,r.yg)("inlineCode",{parentName:"td"},"applicationId")," and annotation ",(0,r.yg)("inlineCode",{parentName:"td"},"yunikorn.apache.org/app-id")," unset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"disableStateAware")),(0,r.yg)("td",{parentName:"tr",align:null},"If present, disables the YuniKorn state-aware scheduling policy for this pod. Set internally by the YuniKorn admission controller.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"placeholder")),(0,r.yg)("td",{parentName:"tr",align:null},"Set if this pod represents a placeholder for gang scheduling. Set internally by YuniKorn.")))),(0,r.yg)("h3",{id:"annotations-in-yunikorn"},"Annotations in YuniKorn"),(0,r.yg)("p",null,"All annotations are under the namespace ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org"),". For example ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/app-id"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"app-id")),(0,r.yg)("td",{parentName:"tr",align:null},"Assoiates this pod with an application.",(0,r.yg)("br",null),"The priority of applicationID is determined by: annotation ",(0,r.yg)("inlineCode",{parentName:"td"},"yunikorn.apache.org/app-id")," > label ",(0,r.yg)("inlineCode",{parentName:"td"},"applicationId")," > label ",(0,r.yg)("inlineCode",{parentName:"td"},"SparkLabelAppID"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"queue")),(0,r.yg)("td",{parentName:"tr",align:null},"Selects the YuniKorn queue this application should be scheduled in.",(0,r.yg)("br",null),"The priority of queue is determined by: label ",(0,r.yg)("inlineCode",{parentName:"td"},"queue")," > annotation ",(0,r.yg)("inlineCode",{parentName:"td"},"yunikorn.apache.org/queue")," > default.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"task-group-name")),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the task group name this pod belongs to for the purposes of gang scheduling. It must be listed within ",(0,r.yg)("inlineCode",{parentName:"td"},"task-groups"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"task-groups")),(0,r.yg)("td",{parentName:"tr",align:null},"Defines the set of task groups for this application for gang scheduling. Each pod within an application must define all task groups.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"schedulingPolicyParameters")),(0,r.yg)("td",{parentName:"tr",align:null},"Arbitrary key-value pairs used to customize scheduling policies such as gang scheduling.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"placeholder")),(0,r.yg)("td",{parentName:"tr",align:null},"Set if this pod represents a placeholder for gang scheduling. Set internally by YuniKorn.")))),(0,r.yg)("p",null,"For more details surrounding gang-scheduling labels and annotations, please refer to the documentation on ",(0,r.yg)("a",{parentName:"p",href:"/zh-cn/docs/1.2.0/user_guide/gang_scheduling"},"gang scheduling"),"."))}g.isMDXComponent=!0}}]);