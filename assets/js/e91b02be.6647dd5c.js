"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6978],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77450:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"labels_and_annotations_in_yunikorn",title:"Labels and Annotations in YuniKorn"},p=void 0,u={unversionedId:"user_guide/labels_and_annotations_in_yunikorn",id:"user_guide/labels_and_annotations_in_yunikorn",title:"Labels and Annotations in YuniKorn",description:"\x3c!--",source:"@site/docs/user_guide/labels_and_annotations_in_yunikorn.md",sourceDirName:"user_guide",slug:"/user_guide/labels_and_annotations_in_yunikorn",permalink:"/docs/next/user_guide/labels_and_annotations_in_yunikorn",draft:!1,tags:[],version:"current",frontMatter:{id:"labels_and_annotations_in_yunikorn",title:"Labels and Annotations in YuniKorn"},sidebar:"docs",previous:{title:"Gang Scheduling",permalink:"/docs/next/user_guide/gang_scheduling"},next:{title:"Setting Prometheus",permalink:"/docs/next/user_guide/prometheus"}},d={},s=[{value:"Labels and Annotations in YuniKorn",id:"labels-and-annotations-in-yunikorn",level:2},{value:"Labels in YuniKorn",id:"labels-in-yunikorn",level:3},{value:"Annotations in YuniKorn",id:"annotations-in-yunikorn",level:3}],m={toc:s},c="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"labels-and-annotations-in-yunikorn"},"Labels and Annotations in YuniKorn"),(0,i.kt)("p",null,"YuniKorn utilizes several Kubernetes labels and annotations to support various features:"),(0,i.kt)("h3",{id:"labels-in-yunikorn"},"Labels in YuniKorn"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"applicationId")),(0,i.kt)("td",{parentName:"tr",align:null},"Associates this pod with an application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"queue")),(0,i.kt)("td",{parentName:"tr",align:null},"Selects the YuniKorn queue this application should be scheduled in. This may be ignored if a placement policy is in effect.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SparkLabelAppID ")),(0,i.kt)("td",{parentName:"tr",align:null},"Alternative method of specifying ",(0,i.kt)("inlineCode",{parentName:"td"},"applicationId")," used by Spark Operator if the label ",(0,i.kt)("inlineCode",{parentName:"td"},"applicationId")," and annotation ",(0,i.kt)("inlineCode",{parentName:"td"},"yunikorn.apache.org/app-id")," unset.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"disableStateAware")),(0,i.kt)("td",{parentName:"tr",align:null},"If present, disables the YuniKorn state-aware scheduling policy for this pod. Set internally by the YuniKorn admission controller.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"placeholder")),(0,i.kt)("td",{parentName:"tr",align:null},"Set if this pod represents a placeholder for gang scheduling. Set internally by YuniKorn.")))),(0,i.kt)("h3",{id:"annotations-in-yunikorn"},"Annotations in YuniKorn"),(0,i.kt)("p",null,"All annotations are under the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org"),". For example ",(0,i.kt)("inlineCode",{parentName:"p"},"yunikorn.apache.org/app-id"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"app-id")),(0,i.kt)("td",{parentName:"tr",align:null},"Assoiates this pod with an application.",(0,i.kt)("br",null),"The priority of applicationID is determined by: annotation ",(0,i.kt)("inlineCode",{parentName:"td"},"yunikorn.apache.org/app-id")," > label ",(0,i.kt)("inlineCode",{parentName:"td"},"applicationId")," > label ",(0,i.kt)("inlineCode",{parentName:"td"},"SparkLabelAppID"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"queue")),(0,i.kt)("td",{parentName:"tr",align:null},"Selects the YuniKorn queue this application should be scheduled in.",(0,i.kt)("br",null),"The priority of queue is determined by: label ",(0,i.kt)("inlineCode",{parentName:"td"},"queue")," > annotation ",(0,i.kt)("inlineCode",{parentName:"td"},"yunikorn.apache.org/queue")," > default.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"task-group-name")),(0,i.kt)("td",{parentName:"tr",align:null},"Sets the task group name this pod belongs to for the purposes of gang scheduling. It must be listed within ",(0,i.kt)("inlineCode",{parentName:"td"},"task-groups"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"task-groups")),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the set of task groups for this application for gang scheduling. Each pod within an application must define all task groups.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"schedulingPolicyParameters")),(0,i.kt)("td",{parentName:"tr",align:null},"Arbitrary key-value pairs used to customize scheduling policies such as gang scheduling.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"placeholder")),(0,i.kt)("td",{parentName:"tr",align:null},"Set if this pod represents a placeholder for gang scheduling. Set internally by YuniKorn.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"allow-preemption")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"allow-preemption")," annotation can only be set on the PriorityClass object. It will trigger opt out of preemption for pods with that specific priority class. Further details can be found in the ",(0,i.kt)("a",{parentName:"td",href:"./../design/simple_preemptor"},"DaemonSet Scheduling using Simple Preemptor")," documentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"parentqueue")),(0,i.kt)("td",{parentName:"tr",align:null},"Define a parent queue for a set of K8s namespaces. Further details can be found in the ",(0,i.kt)("a",{parentName:"td",href:"resource_quota_management#parent-queue-mapping-for-namespaces"}," Resource Quota Management")," documentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"namespace.quota")),(0,i.kt)("td",{parentName:"tr",align:null},"Set the maximum capacity of the queue mapped to this namespace. Further details can be found in the ",(0,i.kt)("a",{parentName:"td",href:"resource_quota_management#namespace-quota"}," Resource Quota Management")," documentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[DEPRECATED]"," ",(0,i.kt)("inlineCode",{parentName:"td"},"namespace.max.cpu")),(0,i.kt)("td",{parentName:"tr",align:null},"Replaced with ",(0,i.kt)("inlineCode",{parentName:"td"},"namespace.quota")," since version 1.2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[DEPRECATED]"," ",(0,i.kt)("inlineCode",{parentName:"td"},"namespace.max.memory")),(0,i.kt)("td",{parentName:"tr",align:null},"Replaced with ",(0,i.kt)("inlineCode",{parentName:"td"},"namespace.quota")," since version 1.2.0")))),(0,i.kt)("p",null,"For more details surrounding gang-scheduling labels and annotations, please refer to the documentation on ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/user_guide/gang_scheduling"},"gang scheduling"),"."))}k.isMDXComponent=!0}}]);