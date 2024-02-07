"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88096],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>g});var i=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(t),p=r,g=c["".concat(s,".").concat(p)]||c[p]||h[p]||a;return t?i.createElement(g,l(l({ref:n},u),{},{components:t})):i.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<a;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},46960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(45072),r=(t(11504),t(95788));const a={id:"scheduler_plugin",title:"K8s Scheduler Plugin"},l=void 0,o={unversionedId:"design/scheduler_plugin",id:"version-1.3.0/design/scheduler_plugin",title:"K8s Scheduler Plugin",description:"\x3c!--",source:"@site/versioned_docs/version-1.3.0/design/scheduler_plugin.md",sourceDirName:"design",slug:"/design/scheduler_plugin",permalink:"/zh-cn/docs/1.3.0/design/scheduler_plugin",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"scheduler_plugin",title:"K8s Scheduler Plugin"},sidebar:"docs",previous:{title:"Architecture",permalink:"/zh-cn/docs/1.3.0/design/architecture"},next:{title:"Gang scheduling design",permalink:"/zh-cn/docs/1.3.0/design/gang_scheduling"}},s={},d=[{value:"Background",id:"background",level:2},{value:"Design",id:"design",level:2},{value:"Entrypoints",id:"entrypoints",level:2},{value:"Shim Scheduler Changes",id:"shim-scheduler-changes",level:2},{value:"Plugin Implementation",id:"plugin-implementation",level:2},{value:"PreFilter",id:"prefilter",level:3},{value:"Filter",id:"filter",level:3},{value:"PostBind",id:"postbind",level:3}],u={toc:d},c="wrapper";function h(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,i.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"background"},"Background"),(0,r.yg)("p",null,"YuniKorn (on Kubernetes) is traditionally implemented as a ground-up implementation of a Kubernetes scheduler.\nThis has allowed us to innovate rapidly, but is not without its problems; we currently have numerous places\nwhere we call into non-public K8S source code APIs with varying levels of (code) stability, requiring\nsometimes very disruptive code changes when we switch to new Kubernetes releases."),(0,r.yg)("p",null,"Ideally, we should be able to take advantage of enhancements to new Kubernetes releases automatically.\nUsing the plugin model enables us to enhance the Kubernetes scheduling logic with YuniKorn features.\nThis also helps keep YuniKorn compatible with new Kubernetes releases with minimal effort."),(0,r.yg)("p",null,"Additionally, it is desirable in many cases to allow non-batch workloads to bypass the YuniKorn scheduling\nfunctionality and use default scheduling logic. However, we have no way to do that today as the default\nscheduling functionality is not present in the YuniKorn scheduler binary."),(0,r.yg)("p",null,"Since Kubernetes 1.19, the Kubernetes project has created a stable API for the\n",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/"},"Scheduling Framework"),",\nwhich allows plugins to be created which implement various extension points. Plugins implement one or more\nof these extension points, and are then compiled into a scheduler binary which contains the default\nscheduler and plugin code, configured to call into the plugins during normal scheduling flow."),(0,r.yg)("h2",{id:"design"},"Design"),(0,r.yg)("p",null,"We have added a scheduler plugin to the k8s-shim codebase which can be used to build a Kubernetes\nscheduler binary that includes YuniKorn functionality as well as the default scheduler functionality,\nsignificantly improving the compatibility of YuniKorn with upstream Kubernetes and allowing deployment of\nYuniKorn as the sole scheduler in a cluster with much greater confidence."),(0,r.yg)("p",null,"Separate docker images are created for the scheduler. The traditional YuniKorn scheduler is built as\n",(0,r.yg)("inlineCode",{parentName:"p"},"scheduler-{version}")," while the new plugin version is built as ",(0,r.yg)("inlineCode",{parentName:"p"},"scheduler-plugin-{version}"),". Either can be\ndeployed interchangeably into a Kubernetes cluster with the same helm charts by customizing the scheduler\nimage to deploy."),(0,r.yg)("h2",{id:"entrypoints"},"Entrypoints"),(0,r.yg)("p",null,"The existing shim ",(0,r.yg)("inlineCode",{parentName:"p"},"main()")," method has been relocated to ",(0,r.yg)("inlineCode",{parentName:"p"},"pkg/cmd/shim/main.go"),", and a new ",(0,r.yg)("inlineCode",{parentName:"p"},"main()")," method\nunder ",(0,r.yg)("inlineCode",{parentName:"p"},"pkg/cmd/schedulerplugin/main.go")," has be created. This method instantiates the default Kubernetes\nscheduler and adds YuniKorn to it as a set of plugins. It also modifies the default scheduler CLI argument\nparsing to add YuniKorn-specific options. When the YuniKorn plugin is created, it will launch an instance\nof the existing shim / core schedulers in the background, sync all informers, and start the normal YuniKorn\nscheduling loop."),(0,r.yg)("h2",{id:"shim-scheduler-changes"},"Shim Scheduler Changes"),(0,r.yg)("p",null,"In order to cooperate with the default scheduler, the shim needs to operate slightly differently when in\nplugin mode. These differences include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In ",(0,r.yg)("inlineCode",{parentName:"li"},"postTaskAllocated()"),", we don\u2019t actually bind the Pod or Volumes, as this is the responsibility of\nthe default scheduler framework. Instead, we track the Node that YK allocated for the Node in an\ninternal map, dispatch a new BindTaskEvent, and record a ",(0,r.yg)("inlineCode",{parentName:"li"},"QuotaApproved")," event on the Pod."),(0,r.yg)("li",{parentName:"ul"},"In ",(0,r.yg)("inlineCode",{parentName:"li"},"postTaskBound()"),", we update the Pod\u2019s state to ",(0,r.yg)("inlineCode",{parentName:"li"},"QuotaApproved")," as this will cause the default scheduler\nto re-evaluate the pod for scheduling (more on this below)."),(0,r.yg)("li",{parentName:"ul"},"In the scheduler cache, we track pending and in-progress pod allocations, and remove them if a pod is\nremoved from the cache.")),(0,r.yg)("h2",{id:"plugin-implementation"},"Plugin Implementation"),(0,r.yg)("p",null,"To expose the entirety of YuniKorn functionality, we implement three of the Scheduling Framework Plugins:"),(0,r.yg)("h3",{id:"prefilter"},"PreFilter"),(0,r.yg)("p",null,"PreFilter plugins are passed a reference to a Pod and return either ",(0,r.yg)("inlineCode",{parentName:"p"},"Success")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Unschedulable"),", depending\non whether that pod should be considered for scheduling."),(0,r.yg)("p",null,"For the YuniKorn implementation, we first check the Pod to see if we have an associated ",(0,r.yg)("inlineCode",{parentName:"p"},"applicationId"),"\ndefined. If not, we immediately return ",(0,r.yg)("inlineCode",{parentName:"p"},"Success"),", which allows us to delegate to the default scheduler for\nnon-batch workloads."),(0,r.yg)("p",null,"If an ",(0,r.yg)("inlineCode",{parentName:"p"},"applicationId")," is present, then we determine if there is a pending pod allocation (meaning the\nYuniKorn core has already decided to allocate the pod). If so, we return ",(0,r.yg)("inlineCode",{parentName:"p"},"Success"),", otherwise ",(0,r.yg)("inlineCode",{parentName:"p"},"Unschedulable"),".\nAdditionally, if an in-progress allocation is detected (indicating that we have previously attempted to\nschedule this pod), we trigger a ",(0,r.yg)("inlineCode",{parentName:"p"},"RejectTask")," event for the YuniKorn core so that the pod will be sent back\nfor scheduling later."),(0,r.yg)("h3",{id:"filter"},"Filter"),(0,r.yg)("p",null,"Filter plugins are used to filter out nodes that cannot run a Pod. Only Pods which pass the PreFilter stage\nare evaluated. "),(0,r.yg)("p",null,"For the YuniKorn plugin, we follow similar logic to PreFilter, except that we also validate that the pending\npod allocation matches the node YuniKorn chose for the pod. If the node matches, we transition the pending\nallocation to an in-progress allocation. This helps ensure that we stay in sync with the default scheduler,\nas it is possible that we allow an allocation to proceed but the bind fails for some reason."),(0,r.yg)("h3",{id:"postbind"},"PostBind"),(0,r.yg)("p",null,"The PostBind extension point is used informationally to notify the plugin that a pod was successfully bound."),(0,r.yg)("p",null,"The YuniKorn implementation uses this to clean up the outstanding in-progress pod allocations."))}h.isMDXComponent=!0}}]);