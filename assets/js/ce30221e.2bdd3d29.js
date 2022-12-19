"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5917],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||a;return n?i.createElement(k,l(l({ref:t},u),{},{components:n})):i.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],o={id:"priorities",title:"App & Queue Priorities"},p=void 0,s={unversionedId:"user_guide/priorities",id:"user_guide/priorities",title:"App & Queue Priorities",description:"\x3c!--",source:"@site/docs/user_guide/priorities.md",sourceDirName:"user_guide",slug:"/user_guide/priorities",permalink:"/docs/next/user_guide/priorities",draft:!1,tags:[],version:"current",frontMatter:{id:"priorities",title:"App & Queue Priorities"},sidebar:"docs",previous:{title:"Sorting Policies",permalink:"/docs/next/user_guide/sorting_policies"},next:{title:"ACLs",permalink:"/docs/next/user_guide/acls"}},u={},d=[{value:"Request Priority",id:"request-priority",level:2},{value:"Application Priority",id:"application-priority",level:2},{value:"Queue Priority",id:"queue-priority",level:2},{value:"Priority Fencing",id:"priority-fencing",level:2},{value:"Effective Priority",id:"effective-priority",level:2},{value:"Examples",id:"examples",level:2},{value:"Single queue",id:"single-queue",level:3},{value:"Multitenancy",id:"multitenancy",level:3}],m={toc:d};function c(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"YuniKorn has advanced support for priority scheduling. Priorities are\nspecified on a per-task basis, but how those priorities are used can be\ncustomized for each queue."),(0,a.kt)("h2",{id:"request-priority"},"Request Priority"),(0,a.kt)("p",null,"Every allocation request to the scheduler has a numeric priority associated\nwith it. Any 32-bit integer value (positive or negative) may be used. Larger\nvalues indicate higher relative priorities."),(0,a.kt)("p",null,"When using Kubernetes, priorities are defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"PriorityClass"),"\nobjects, which are referenced by ",(0,a.kt)("inlineCode",{parentName:"p"},"Pod")," objects via a ",(0,a.kt)("inlineCode",{parentName:"p"},"priorityClassName"),"\nproperty. If no priority class is referenced, a ",(0,a.kt)("inlineCode",{parentName:"p"},"Pod")," inherits the cluster\ndefault priority, typically ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("p",null,"See the Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/"},"Pod Priority and Preemption"),"\ndocumentation for more details."),(0,a.kt)("h2",{id:"application-priority"},"Application Priority"),(0,a.kt)("p",null,"During scheduling, applications have a dynamic priority value which resolves\nto the highest priority outstanding request in that application. This allows\nthe scheduler to dynamically reprioritize scheduling decisions."),(0,a.kt)("p",null,"For example, if an application has two requests, one with priority ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," and\nanother with priority ",(0,a.kt)("inlineCode",{parentName:"p"},"20"),", the application's dynamic priority will be ",(0,a.kt)("inlineCode",{parentName:"p"},"20"),".\nIf the higher-priority request is satisfied, the application's priority will\ndrop to ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),"."),(0,a.kt)("p",null,"When choosing between applications to schedule, the application sorting policy\nwill (by default) schedule requests from higher-priority applications first.\nPriority can be ignored when sorting applications by setting the queue\nproperty ",(0,a.kt)("inlineCode",{parentName:"p"},"application.sort.priority")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled")," on a ",(0,a.kt)("em",{parentName:"p"},"leaf")," queue."),(0,a.kt)("h2",{id:"queue-priority"},"Queue Priority"),(0,a.kt)("p",null,"As with applications, queue priorities are also dynamically computed. For\n",(0,a.kt)("em",{parentName:"p"},"parent")," queues, the queue's priority will be equal to the highest priority\nchild queue it contains. For ",(0,a.kt)("em",{parentName:"p"},"leaf")," queues, the queue's priority will be\nequal to the highest priority application it contains."),(0,a.kt)("p",null,"Queue priorities can also be adjusted automatically up or down by a fixed\namount, specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"priority.offset")," queue property. This can be useful\nin larger queue hierarchies to establish low or high priority queues."),(0,a.kt)("p",null,"For example, if a ",(0,a.kt)("em",{parentName:"p"},"leaf")," queue with an offset of ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," contains two\napplications, one with priority ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," and another with priority ",(0,a.kt)("inlineCode",{parentName:"p"},"20"),", the\nqueue's priority will evaluate to ",(0,a.kt)("inlineCode",{parentName:"p"},"25")," (",(0,a.kt)("inlineCode",{parentName:"p"},"20 + 5"),"). If the higher-priority\napplication no longer has requests, the queue's priority will drop to ",(0,a.kt)("inlineCode",{parentName:"p"},"15"),"\n(",(0,a.kt)("inlineCode",{parentName:"p"},"10 + 5"),")."),(0,a.kt)("p",null,"When choosing between child queues to schedule from, the queue sorting policy\nwill (by default) schedule requests from higher-priority queues first.\nPriority can be ignored when sorting queues by setting the queue\nproperty ",(0,a.kt)("inlineCode",{parentName:"p"},"application.sort.priority")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled")," on a ",(0,a.kt)("em",{parentName:"p"},"parent")," queue."),(0,a.kt)("h2",{id:"priority-fencing"},"Priority Fencing"),(0,a.kt)("p",null,"By default, priorities have global scope, meaning that higher-priority queues\nwill be serviced before lower-priority queues regardless of their location\nin the queue hierarchy."),(0,a.kt)("p",null,"However, it can be useful to limit prioritization to a subset of queues. This\ncan be accomplished by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"priority.policy")," queue property to\n",(0,a.kt)("inlineCode",{parentName:"p"},"fence"),". When a queue's priority is fenced, priorities are still evaluated\nwithin that queue (and subqueues), but the queue's priority itself will always\nevaluate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"priority.offset")," value or ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," if not specified."),(0,a.kt)("h2",{id:"effective-priority"},"Effective Priority"),(0,a.kt)("p",null,"Because of offsets and fencing, at any time a request may be thought of as\nhaving an ",(0,a.kt)("em",{parentName:"p"},"effective")," (or computed) priority based on its location within\nthe queue hierarchy. Requests with higher effective priorities will be\nscheduled before those with lower effective priorities."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"single-queue"},"Single queue"),(0,a.kt)("p",null,"This example demonstrates a single leaf queue with all properties specified:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'partitions:\n  - name: default\n    queues:\n    - name: root\n      queues:\n      - name: default\n        properties:\n          application.sort.policy: fifo\n          application.sort.priority: enabled\n          priority.policy: default\n          priority.offset: "0"\n')),(0,a.kt)("h3",{id:"multitenancy"},"Multitenancy"),(0,a.kt)("p",null,"This example demonstrates a complex queue tree containing multiple tenants\nwith subqueues along with a multiple system queues:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'partitions:\n  - name: default\n    queues:\n    - name: root\n      queues:\n      - name: system\n        queues:\n        - name: system-normal\n          properties:\n            priority.offset: "0"\n        - name: system-high\n          properties:\n            priority.offset: "1000"\n        - name: system-low\n          properties:\n            priority.offset: "-1000"\n      - name: tenants\n        properties:\n          priority.policy: "fence"\n        queues:\n          - name: tenant-a\n            properties:\n              priority.policy: "fence"\n              priority.offset: "10"\n            queues:\n              - name: child-a-1\n              - name: child-a-2\n          - name: tenant-b\n            properties:\n              priority.policy: "fence"\n              priority.offset: "0"\n            queues:\n              - name: child-b-1\n              - name: child-b-2\n\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"system-normal"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"system-high")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"system-low")," queues are unfenced, and\ncan therefore be prioritized above any other queue in the system. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"system-high")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"system-low")," queues have offsets of ",(0,a.kt)("inlineCode",{parentName:"p"},"1000")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"-1000"),"\nrespectively, so the priority of requests in those queues will be adjusted\naccordingly."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tenants")," ",(0,a.kt)("em",{parentName:"p"},"parent")," queue is priority-fenced, and has no ",(0,a.kt)("inlineCode",{parentName:"p"},"priority.offset"),"\ndefined, so this queue will always be treated as though it has priority ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),".\nThis ensures that normal and high-priority system tasks schedule ahead of\ntenant tasks, and low priority system tasks schedule after tenant tasks."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant-a")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant-b")," ",(0,a.kt)("em",{parentName:"p"},"parent")," queues are also priority-fenced,\npreventing tenants from adjusting their priority relative to one another.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant-a")," queue also has a priority offset to ensure that it always\nschedules before ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant-b"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"leaf")," queues of ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant-a")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant-b")," are not fenced, so tasks from\nthe entire ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant-a")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant-b")," subtree will prioritize relative to each\nother, but not outside their respective subtrees."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"priority tree",src:n(86350).Z,width:"1281",height:"931"})),(0,a.kt)("p",null,"In the figure above, multiple requests are shown with various priorities.\nBefore scheduling, the queue priorities will be as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"root",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"system: 1001",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"system-normal: 10"),(0,a.kt)("li",{parentName:"ul"},"system-high: 1001"),(0,a.kt)("li",{parentName:"ul"},"system-low: -997"))),(0,a.kt)("li",{parentName:"ul"},"tenants: 0 (fence)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"tenant-a: 10 (fence)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"child-a-1: 8"),(0,a.kt)("li",{parentName:"ul"},"child-a-2: 6"))),(0,a.kt)("li",{parentName:"ul"},"tenant-b: 0 (fence)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"child-b-1: 9"),(0,a.kt)("li",{parentName:"ul"},"child-b-2: 8")))))))),(0,a.kt)("p",null,"Queue traversal starts from the root, descending into each child queue in order\nstarting with the highest effective priority. Assuming sufficient scheduling\nresources, the order of schedulding and effective queue priority changes are\nas follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Step"),(0,a.kt)("th",{parentName:"tr",align:null},"Queue"),(0,a.kt)("th",{parentName:"tr",align:null},"Task"),(0,a.kt)("th",{parentName:"tr",align:null},"Result"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"root.system.system-high"),(0,a.kt)("td",{parentName:"tr",align:null},"P1"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"system-high"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"1001")," -> n/a ",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"system"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"1001")," -> ",(0,a.kt)("inlineCode",{parentName:"td"},"10"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"root.system.system-normal"),(0,a.kt)("td",{parentName:"tr",align:null},"P10"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"system-normal"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"10")," -> ",(0,a.kt)("inlineCode",{parentName:"td"},"2")," ",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"system"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"10")," -> ",(0,a.kt)("inlineCode",{parentName:"td"},"2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"root.system.system-normal"),(0,a.kt)("td",{parentName:"tr",align:null},"P2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"system-normal"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"2")," -> n/a ",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"system"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"2")," -> ",(0,a.kt)("inlineCode",{parentName:"td"},"-997"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"root.tenants.tenant-a.child-a-1"),(0,a.kt)("td",{parentName:"tr",align:null},"P8"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"child-a-1"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"8")," -> ",(0,a.kt)("inlineCode",{parentName:"td"},"5"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"root.tenants.tenant-a.child-a-2"),(0,a.kt)("td",{parentName:"tr",align:null},"P6"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"child-a-2"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"6")," -> ",(0,a.kt)("inlineCode",{parentName:"td"},"4"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"root.tenants.tenant-a.child-a-1"),(0,a.kt)("td",{parentName:"tr",align:null},"P5"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"child-a-1"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"5")," -> n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"root.tenants.tenant-a.child-a-2"),(0,a.kt)("td",{parentName:"tr",align:null},"P4"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"child-a-2"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"4")," -> n/a ",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"tenant-a"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"10")," -> n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"root.tenants.tenant-b.child-b-1"),(0,a.kt)("td",{parentName:"tr",align:null},"P9"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"child-b-1"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"9")," -> ",(0,a.kt)("inlineCode",{parentName:"td"},"7"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"root.tenants.tenant-b.child-b-2"),(0,a.kt)("td",{parentName:"tr",align:null},"P8"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"child-b-2"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"8")," -> n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"root.tenants.tenant-b.child-b-1"),(0,a.kt)("td",{parentName:"tr",align:null},"P7"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"child-b-1"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"7")," -> n/a ",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"tenant-b"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," -> n/a ",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"tenants"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," -> n/a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},"root.system.system-low"),(0,a.kt)("td",{parentName:"tr",align:null},"P3"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"system-low"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"-997")," -> n/a ",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"td"},"system"),": ",(0,a.kt)("inlineCode",{parentName:"td"},"-997")," -> n/a")))))}c.isMDXComponent=!0},86350:function(e,t,n){t.Z=n.p+"assets/images/priority-tree-22c71367f79a99792c40f6c557dfe2b8.png"}}]);