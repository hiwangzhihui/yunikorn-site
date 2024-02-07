"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10160],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>h});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||g[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19424:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(45072),r=(a(11504),a(95788));const o={id:"pluggable_app_management",title:"Pluggable App Management"},i=void 0,p={unversionedId:"archived_design/pluggable_app_management",id:"archived_design/pluggable_app_management",title:"Pluggable App Management",description:"\x3c!--",source:"@site/docs/archived_design/pluggable_app_management.md",sourceDirName:"archived_design",slug:"/archived_design/pluggable_app_management",permalink:"/zh-cn/docs/next/archived_design/pluggable_app_management",draft:!1,tags:[],version:"current",frontMatter:{id:"pluggable_app_management",title:"Pluggable App Management"},sidebar:"docs",previous:{title:"Cross Queue Preemption",permalink:"/zh-cn/docs/next/archived_design/cross_queue_preemption"},next:{title:"\u4f7f\u7528 Kubemark \u8bc4\u4f30 YuniKorn \u7684\u6027\u80fd",permalink:"/zh-cn/docs/next/performance/evaluate_perf_function_with_kubemark"}},l={},s=[{value:"The Problem",id:"the-problem",level:2},{value:"K8s Operator Pattern",id:"k8s-operator-pattern",level:2},{value:"Design",id:"design",level:2}],c={toc:s},u="wrapper";function g(e){let{components:t,...o}=e;return(0,r.yg)(u,(0,n.c)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"the-problem"},"The Problem"),(0,r.yg)("p",null,"Currently, we schedule and group an application is based on a label on the pod.\nThis generic way works for any type of workload. It does however give us a limited information on the lifecycle\nand application. On the K8s side, operators have been introduced to provide more detail on the application\nand help scheduling. We cannot use them currently and want to add that functionality."),(0,r.yg)("h2",{id:"k8s-operator-pattern"},"K8s Operator Pattern"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"},"K8s operator"),"\nis a pattern in K8s to manage applications, it's a handy way to manage application's lifecycle out-of-box on K8s.\nYou define several CRDs and some controllers to monitor and mutate the state of the application based on the CRD definition."),(0,r.yg)("p",null,"For example in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator"},"spark-k8s-operator"),",\nit defines a CRD called ",(0,r.yg)("inlineCode",{parentName:"p"},"SparkApplication"),", the controller watches the events of add/update/delete of this CRD\nand trigger corresponding actions on event notifications. The ",(0,r.yg)("inlineCode",{parentName:"p"},"SparkApplication")," looks like\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator/blob/master/examples/spark-pi.yaml"},"this example"),". There\nare a lot more popular operators, such as ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/flink-on-k8s-operator"},"flink-k8s-operator"),",\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/kubeflow/tf-operator"},"tf-operator"),", ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/kubeflow/pytorch-operator"},"pytorch-operator"),", etc. "),(0,r.yg)("p",null,"Use Spark as an example. YuniKorn is able to schedule resources for all pods in K8s, that seamlessly supports Spark. It\nworks with ",(0,r.yg)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html"},"native Spark on K8s"),", or\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator/blob/master/docs/design.md#architecture"},"spark on K8s with operator"),",\nyou'll find the difference from the design architecture chart from the given link. To support native Spark on K8s,\nYuniKorn reads pods' spec and group Spark pods by a label-selector, based on ",(0,r.yg)("inlineCode",{parentName:"p"},"spark-app-selector"),".\nThe operator approach gives us more context about the Spark job, such as a better understanding about job state.\nBut all these info requires us to look at ",(0,r.yg)("inlineCode",{parentName:"p"},"SparkApplication")," CRD, currently, there is no neat way to\nadd such functionality. That's why we need to design a flexible approach to support 3rd party operators\n(retrieving info from their CRDs), so we can easily integrate with other operators with small effort."),(0,r.yg)("h2",{id:"design"},"Design"),(0,r.yg)("p",null,"The key issue here is we need a app-management interface, that can be easily extended.\nIt needs to be decoupled with existing scheduling logic. For each operator, we create a service to manage this type app's lifecycle,\nand communicate with the scheduling cache independently. The high-level design looks like below:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Pluggable App Management",src:a(7884).c,width:"1416",height:"705"})),(0,r.yg)("p",null,"Where"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"AppManagementService")," is a composite set of services that can be managed together."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"AppManager")," is a specific app management service for a particular type of application. In each service, it has\naccess to K8s clients, such as informers, listers, in order to monitor CRD events. And it collects necessary info\nand talk with scheduler cache through ",(0,r.yg)("inlineCode",{parentName:"li"},"AMProtocol"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"APIProvider")," encapsulate a set of useful APIs that can be shared, such as kube-client, pod/node/storage informers, etc.\nEach of such informers, it can be shared with multiple app managers, to avoid the overhead."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"AMProtocol")," defines the basic interaction contract between app manager and the scheduler cache, that helps the cache\nto performs app lifecycle management without understanding what type of the application it is.")),(0,r.yg)("p",null,"In the upon chart, the AppManagementService has 2 services, the ",(0,r.yg)("em",{parentName:"p"},"general")," one is managing normal applications, that\nrecognizes applications by pod labels; the ",(0,r.yg)("em",{parentName:"p"},"spark-k8s-operator")," one watches ",(0,r.yg)("inlineCode",{parentName:"p"},"SparkApplication")," CRD and manage jobs'\nlifecycle defined by this CRD."))}g.isMDXComponent=!0},7884:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/pluggable-app-mgmt-2bf575c7d0093bd5087763ea9de41a11.jpg"}}]);