"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68e3],{95788:(e,t,a)=>{a.d(t,{Iu:()=>d,yg:()=>g});var n=a(11504);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=i,g=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(45072),i=(a(11504),a(95788));const r={id:"scheduler_object_states",title:"Scheduler Object States"},o=void 0,s={unversionedId:"design/scheduler_object_states",id:"version-0.9.0/design/scheduler_object_states",title:"Scheduler Object States",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/design/scheduler_object_states.md",sourceDirName:"design",slug:"/design/scheduler_object_states",permalink:"/docs/0.9.0/design/scheduler_object_states",draft:!1,tags:[],version:"0.9.0",frontMatter:{id:"scheduler_object_states",title:"Scheduler Object States"},sidebar:"version-0.9.0/docs",previous:{title:"Batch Workloads Ordering with StateAware Policy",permalink:"/docs/0.9.0/design/state_aware_scheduling"},next:{title:"Evaluate YuniKorn function & performance with Kubemark",permalink:"/docs/0.9.0/performance/evaluate_perf_function_with_kubemark"}},l={},c=[{value:"Core Scheduler",id:"core-scheduler",level:2},{value:"Application State",id:"application-state",level:3},{value:"Object State",id:"object-state",level:3},{value:"Node",id:"node",level:3},{value:"K8Shim Resource Manager",id:"k8shim-resource-manager",level:2},{value:"Application",id:"application",level:3},{value:"Task",id:"task",level:3},{value:"Node",id:"node-1",level:3},{value:"Scheduler",id:"scheduler",level:3}],d={toc:c},h="wrapper";function p(e){let{components:t,...r}=e;return(0,i.yg)(h,(0,n.c)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The YuniKorn project uses state machines to track the states of different objects.\nThis ranges from applications in the core to nodes in the k8shim.\nThe state machines are independent and not shared between the resource managers and core.\nA resource manager shim, and the core can thus have an independent idea of the state of a similar object."),(0,i.yg)("h2",{id:"core-scheduler"},"Core Scheduler"),(0,i.yg)("p",null,"State change are triggered by events that get processed.\nOne event can cause a change for multiple states or no change at all."),(0,i.yg)("h3",{id:"application-state"},"Application State"),(0,i.yg)("p",null,"Applications have a complex state model.\nAn application when created starts ain the new state."),(0,i.yg)("p",null,"An application can have the following states:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"New: A new application that is being submitted or created, from here the application transitions into the accepted state when it is ready for scheduling.\nThe first ask to be added will trigger the transition."),(0,i.yg)("li",{parentName:"ul"},"Accepted: The application is ready and part of the scheduling cycle.\nOn allocation of the first ask the application moves into a starting state.\nThis state is part of the normal scheduling cycle."),(0,i.yg)("li",{parentName:"ul"},"Starting: The application has exactly one allocation confirmed this corresponds to one running container/pod.\nThe application transitions to running if and when more allocations are added to the application.\nThis state times out automatically to prevent applications that consist of just one allocation from getting stuck in this state.\nThe current time out is set to 5 minutes, and cannot be changed.\nIf after the timeout expires the application will auto transition to running.\nThe state change on time out is independent of the number of allocations added.\nThis state is part of the normal scheduling cycle."),(0,i.yg)("li",{parentName:"ul"},"Running: The state in which the application will spend most of its time.\nContainers/pods can be added to and removed from the application.\nThis state is part of the normal scheduling cycle."),(0,i.yg)("li",{parentName:"ul"},"Waiting: An application that has no pending requests or running containers/pod will be waiting.\nThis state shows that the application has not been marked completed yet but currently is not actively being scheduled."),(0,i.yg)("li",{parentName:"ul"},"Completed: The resource manager has signalled that the application is done.\nThis is a final state. The application cannot change state after entering."),(0,i.yg)("li",{parentName:"ul"},"Killed: Removed by the resource manager at the request of an administrator or the user running the application.\nThis is a final state. The application cannot change state after entering."),(0,i.yg)("li",{parentName:"ul"},"Rejected: The application was rejected when it was added to the scheduler.\nThis only happens when a resource manager tries to add a new application, when it gets created in a New state, and the scheduler rejects the creation.\nApplications can be rejected due ACLs denying access to a queue the application has specified, or a placement via placement rules has failed.\nThis is a final state. The application cannot change state after entering.")),(0,i.yg)("p",null,"The events that can trigger a state change:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Reject: rejecting the application by the scheduler (source: core scheduler)"),(0,i.yg)("li",{parentName:"ul"},"Run: progress an application to the next active state (source: core scheduler)"),(0,i.yg)("li",{parentName:"ul"},"Wait: mark an application as idle (source: core scheduler)"),(0,i.yg)("li",{parentName:"ul"},"Complete: mark an application as complete (source: resource manager)"),(0,i.yg)("li",{parentName:"ul"},"Kill: kill an application (source: resource manager)")),(0,i.yg)("p",null,"Here is a diagram that shows the states with the event that causes the state to change:",(0,i.yg)("br",{parentName:"p"}),"\n",(0,i.yg)("img",{alt:"application state diagram",src:a(80716).c,width:"810",height:"488"})),(0,i.yg)("h3",{id:"object-state"},"Object State"),(0,i.yg)("p",null,"The object state is used by the following objects:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"queues"),(0,i.yg)("li",{parentName:"ul"},"partitions")),(0,i.yg)("p",null,"The object states are as follows: "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Active: The object is active and used during the scheduling cycle.\nThis is the starting and normal state of an object.\nAn active object transitions to draining when it is removed.  "),(0,i.yg)("li",{parentName:"ul"},"Stopped: The object is stopped and no longer actively scheduled.\nThe object if empty is ready to be removed from the scheduler.\nThe object can transition back into active state if it gets re-started."),(0,i.yg)("li",{parentName:"ul"},"Draining: Before an object can be removed it needs to be cleaned up.\nThe cleanup starts with placing the object in the draining state.\nIn this state it does not accept additions or changes but is still actively being scheduled.\nThis allows for a graceful shutdown, cleanup and removal of the object.\nThis is the final state.")),(0,i.yg)("p",null,"The events that can trigger a state change:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Start: make the object active (source: core scheduler)"),(0,i.yg)("li",{parentName:"ul"},"Stop: make the object inactive (source: core scheduler)"),(0,i.yg)("li",{parentName:"ul"},"Remove: mark an object for removal (source: core scheduler)")),(0,i.yg)("p",null,"Here is a diagram that shows the states with the event that causes the state to change:",(0,i.yg)("br",{parentName:"p"}),"\n",(0,i.yg)("img",{alt:"object state diagram",src:a(51804).c,width:"620",height:"266"})),(0,i.yg)("h3",{id:"node"},"Node"),(0,i.yg)("p",null,"Node objects in the core are not using a state machine but do have a state.\nA node can have one of two states: ",(0,i.yg)("inlineCode",{parentName:"p"},"schedulable")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"not schedulable"),".\nThere is no complex state model or complex transition logic.\nThe scheduler can either use the node or not."),(0,i.yg)("p",null,"The node status changes based on the status provided by the resource manager (shim) that owns the node. "),(0,i.yg)("h2",{id:"k8shim-resource-manager"},"K8Shim Resource Manager"),(0,i.yg)("h3",{id:"application"},"Application"),(0,i.yg)("p",null,"To be added"),(0,i.yg)("h3",{id:"task"},"Task"),(0,i.yg)("p",null,"To be added"),(0,i.yg)("h3",{id:"node-1"},"Node"),(0,i.yg)("p",null,"To be added"),(0,i.yg)("h3",{id:"scheduler"},"Scheduler"),(0,i.yg)("p",null,"To be added"))}p.isMDXComponent=!0},80716:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/application-state-9fece547976633347194f9fc2abc1413.png"},51804:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/object-state-ce78c19f65c895bbbddd0e48b4c22d8f.png"}}]);