"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38888],{95788:(e,n,a)=>{a.d(n,{Iu:()=>u,yg:()=>h});var t=a(11504);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(s,".").concat(c)]||d[c]||g[c]||i;return a?t.createElement(h,o(o({ref:n},u),{},{components:a})):t.createElement(h,o({ref:n},u))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},884:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=a(45072),r=(a(11504),a(95788));const i={id:"gang_scheduling",title:"Gang Scheduling"},o=void 0,l={unversionedId:"user_guide/gang_scheduling",id:"version-1.1.0/user_guide/gang_scheduling",title:"Gang Scheduling",description:"\x3c!--",source:"@site/versioned_docs/version-1.1.0/user_guide/gang_scheduling.md",sourceDirName:"user_guide",slug:"/user_guide/gang_scheduling",permalink:"/docs/1.1.0/user_guide/gang_scheduling",draft:!1,tags:[],version:"1.1.0",frontMatter:{id:"gang_scheduling",title:"Gang Scheduling"},sidebar:"docs",previous:{title:"Resource Quota Management",permalink:"/docs/1.1.0/user_guide/resource_quota_management"},next:{title:"Labels and Annotations in YuniKorn",permalink:"/docs/1.1.0/user_guide/labels_and_annotations_in_yunikorn"}},s={},p=[{value:"What is Gang Scheduling",id:"what-is-gang-scheduling",level:2},{value:"Enable Gang Scheduling",id:"enable-gang-scheduling",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"App Configuration",id:"app-configuration",level:3},{value:"How many task groups needed?",id:"how-many-task-groups-needed",level:4},{value:"How to define task groups?",id:"how-to-define-task-groups",level:4},{value:"Scheduling Policy Parameters",id:"scheduling-policy-parameters",level:4},{value:"Example",id:"example",level:4},{value:"Enable Gang scheduling for Spark jobs",id:"enable-gang-scheduling-for-spark-jobs",level:3},{value:"Gang scheduling Styles",id:"gang-scheduling-styles",level:2},{value:"Example",id:"example-1",level:4},{value:"Verify Configuration",id:"verify-configuration",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:p},d="wrapper";function g(e){let{components:n,...i}=e;return(0,r.yg)(d,(0,t.c)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"what-is-gang-scheduling"},"What is Gang Scheduling"),(0,r.yg)("p",null,"When Gang Scheduling is enabled, YuniKorn schedules the app only when\nthe app\u2019s minimal resource request can be satisfied. Otherwise, apps\nwill be waiting in the queue. Apps are queued in hierarchy queues,\nwith gang scheduling enabled, each resource queue is assigned with the\nmaximum number of applications running concurrently with min resource guaranteed."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Gang Scheduling",src:a(27380).c,width:"1186",height:"444"})),(0,r.yg)("h2",{id:"enable-gang-scheduling"},"Enable Gang Scheduling"),(0,r.yg)("p",null,"There is no cluster-wide configuration needed to enable Gang Scheduling.\nThe scheduler actively monitors the metadata of each app, if the app has included\na valid taskGroups definition, it will be considered as gang scheduling desired."),(0,r.yg)("admonition",{title:"Task Group",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"A task group is a \u201cgang\u201d of tasks in an app, these tasks are having the same resource profile\nand the same placement constraints. They are considered as homogeneous requests that can be\ntreated as the same kind in the scheduler.")),(0,r.yg)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.yg)("p",null,"For the queues which runs gang scheduling enabled applications, the queue sorting policy needs to be set either\n",(0,r.yg)("inlineCode",{parentName:"p"},"FIFO")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"StateAware"),". To configure queue sorting policy, please refer to doc: ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.1.0/user_guide/sorting_policies#Application_sorting"},"app sorting policies"),"."),(0,r.yg)("admonition",{title:"Why FIFO based sorting policy?",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"When Gang Scheduling is enabled, the scheduler proactively reserves resources\nfor each application. If the queue sorting policy is not FIFO based (StateAware is FIFO based sorting policy),\nthe scheduler might reserve partial resources for each app and causing resource segmentation issues.")),(0,r.yg)("h3",{id:"app-configuration"},"App Configuration"),(0,r.yg)("p",null,"On Kubernetes, YuniKorn discovers apps by loading metadata from individual pod, the first pod of the app\nis required to enclosed with a full copy of app metadata. If the app doesn\u2019t have any notion about the first or second pod,\nthen all pods are required to carry the same taskGroups info. Gang scheduling requires taskGroups definition,\nwhich can be specified via pod annotations. The required fields are:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Annotation"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"yunikorn.apache.org/task-group-name"),(0,r.yg)("td",{parentName:"tr",align:null},"Task group name, it must be unique within the application")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"yunikorn.apache.org/task-groups"),(0,r.yg)("td",{parentName:"tr",align:null},"A list of task groups, each item contains all the info defined for the certain task group")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"yunikorn.apache.org/schedulingPolicyParameters"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional. A arbitrary key value pairs to define scheduling policy parameters. Please read ",(0,r.yg)("a",{parentName:"td",href:"#scheduling-policy-parameters"},"schedulingPolicyParameters section"))))),(0,r.yg)("h4",{id:"how-many-task-groups-needed"},"How many task groups needed?"),(0,r.yg)("p",null,"This depends on how many different types of pods this app requests from K8s. A task group is a \u201cgang\u201d of tasks in an app,\nthese tasks are having the same resource profile and the same placement constraints. They are considered as homogeneous\nrequests that can be treated as the same kind in the scheduler. Use Spark as an example, each job will need to have 2 task groups,\none for the driver pod and the other one for the executor pods."),(0,r.yg)("h4",{id:"how-to-define-task-groups"},"How to define task groups?"),(0,r.yg)("p",null,"The task group definition is a copy of the app\u2019s real pod definition, values for fields like resources, node-selector, toleration\nand affinity should be the same as the real pods. This is to ensure the scheduler can reserve resources with the\nexact correct pod specification."),(0,r.yg)("h4",{id:"scheduling-policy-parameters"},"Scheduling Policy Parameters"),(0,r.yg)("p",null,"Scheduling policy related configurable parameters. Apply the parameters in the following format in pod's annotation:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'annotations:\n   yunikorn.apache.org/schedulingPolicyParameters: "PARAM1=VALUE1 PARAM2=VALUE2 ..."\n')),(0,r.yg)("p",null,"Currently, the following parameters are supported:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"placeholderTimeoutInSeconds")),(0,r.yg)("p",null,"Default value: ",(0,r.yg)("em",{parentName:"p"},"15 minutes"),".\nThis parameter defines the reservation timeout for how long the scheduler should wait until giving up allocating all the placeholders.\nThe timeout timer starts to tick when the scheduler ",(0,r.yg)("em",{parentName:"p"},"allocates the first placeholder pod"),". This ensures if the scheduler\ncould not schedule all the placeholder pods, it will eventually give up after a certain amount of time. So that the resources can be\nfreed up and used by other apps. If non of the placeholders can be allocated, this timeout won't kick-in. To avoid the placeholder\npods stuck forever, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.1.0/user_guide/trouble_shooting#gang-scheduling"},"troubleshooting")," for solutions."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"}," gangSchedulingStyle")),(0,r.yg)("p",null,"Valid values: ",(0,r.yg)("em",{parentName:"p"},"Soft"),", ",(0,r.yg)("em",{parentName:"p"},"Hard")),(0,r.yg)("p",null,"Default value: ",(0,r.yg)("em",{parentName:"p"},"Soft"),".\nThis parameter defines the fallback mechanism if the app encounters gang issues due to placeholder pod allocation.\nSee more details in ",(0,r.yg)("a",{parentName:"p",href:"#gang-scheduling-styles"},"Gang Scheduling styles")," section"),(0,r.yg)("p",null,"More scheduling parameters will added in order to provide more flexibility while scheduling apps."),(0,r.yg)("h4",{id:"example"},"Example"),(0,r.yg)("p",null,"The following example is a yaml file for a job. This job launches 2 pods and each pod sleeps 30 seconds.\nThe notable change in the pod spec is ",(0,r.yg)("em",{parentName:"p"},"spec.template.metadata.annotations"),", where we defined ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/task-group-name"),"\nand ",(0,r.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/task-groups"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: gang-scheduling-job-example\nspec:\n  completions: 2\n  parallelism: 2\n  template:\n    metadata:\n      labels:\n        app: sleep\n        applicationId: "gang-scheduling-job-example"\n        queue: root.sandbox\n      annotations:\n        yunikorn.apache.org/task-group-name: task-group-example\n        yunikorn.apache.org/task-groups: |-\n          [{\n              "name": "task-group-example",\n              "minMember": 2,\n              "minResource": {\n                "cpu": "100m",\n                "memory": "50M"\n              },\n              "nodeSelector": {},\n              "tolerations": [],\n              "affinity": {}\n          }]\n    spec:\n      schedulerName: yunikorn\n      restartPolicy: Never\n      containers:\n        - name: sleep30\n          image: "alpine:latest"\n          command: ["sleep", "30"]\n          resources:\n            requests:\n              cpu: "100m"\n              memory: "50M"\n')),(0,r.yg)("p",null,"When this job is submitted to Kubernetes, 2 pods will be created using the same template, and they all belong to one taskGroup:\n",(0,r.yg)("em",{parentName:"p"},"\u201ctask-group-example\u201d"),". YuniKorn will create 2 placeholder pods, each uses the resources specified in the taskGroup definition.\nWhen all 2 placeholders are allocated, the scheduler will bind the the real 2 sleep pods using the spot reserved by the placeholders."),(0,r.yg)("p",null,"You can add more than one taskGroups if necessary, each taskGroup is identified by the taskGroup name,\nit is required to map each real pod with a pre-defined taskGroup by setting the taskGroup name. Note,\nthe task group name is only required to be unique within an application."),(0,r.yg)("h3",{id:"enable-gang-scheduling-for-spark-jobs"},"Enable Gang scheduling for Spark jobs"),(0,r.yg)("p",null,"Each Spark job runs 2 types of pods, driver and executor. Hence, we need to define 2 task groups for each job.\nThe annotations for the driver pod looks like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"Annotations:\n  yunikorn.apache.org/schedulingPolicyParameters: \u201cplaceholderTimeoutSeconds=30\u201d\n  yunikorn.apache.org/taskGroupName: \u201cspark-driver\u201d\n  yunikorn.apache.org/taskGroup: \u201c\n    TaskGroups: [\n     {\n       Name: \u201cspark-driver\u201d,\n       minMember: 1,\n       minResource: {\n         Cpu: 1,\n         Memory: 2Gi\n       },\n       Node-selector: ...,\n       Tolerations: ...,\n       Affinity: ...\n     },\n      {\n        Name: \u201cspark-executor\u201d,\n        minMember: 10, \n        minResource: {\n          Cpu: 1,\n          Memory: 2Gi\n        }\n      }\n  ]\n  \u201d\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Spark driver and executor pod has memory overhead, that needs to be considered in the taskGroup resources. ")),(0,r.yg)("p",null,"For all the executor pods,"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"Annotations:\n  # the taskGroup name should match to the names\n  # defined in the taskGroups field\n  yunikorn.apache.org/taskGroupName: \u201cspark-executor\u201d\n")),(0,r.yg)("p",null,"Once the job is submitted to the scheduler, the job won\u2019t be scheduled immediately.\nInstead, the scheduler will ensure it gets its minimal resources before actually starting the driver/executors. "),(0,r.yg)("h2",{id:"gang-scheduling-styles"},"Gang scheduling Styles"),(0,r.yg)("p",null,"There are 2 gang scheduling styles supported, Soft and Hard respectively. It can be configured per app-level to define how the app will behave in case the gang scheduling fails."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Hard style"),": when this style is used, we will have the initial behavior, more precisely if the application cannot be scheduled according to gang scheduling rules, and it times out, it will be marked as failed, without retrying to schedule it."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Soft style"),": when the app cannot be gang scheduled, it will fall back to the normal scheduling, and the non-gang scheduling strategy will be used to achieve the best-effort scheduling. When this happens, the app transits to the Resuming state and all the remaining placeholder pods will be cleaned up.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default style used"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"Soft")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Enable a specific style"),": the style can be changed by setting in the application definition the \u2018gangSchedulingStyle\u2019 parameter to Soft or Hard."),(0,r.yg)("h4",{id:"example-1"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: gang-app-timeout\nspec:\n  completions: 4\n  parallelism: 4\n  template:\n    metadata:\n      labels:\n        app: sleep\n        applicationId: gang-app-timeout\n        queue: fifo\n      annotations:\n        yunikorn.apache.org/task-group-name: sched-style\n        yunikorn.apache.org/schedulingPolicyParameters: "placeholderTimeoutInSeconds=60 gangSchedulingStyle=Hard"\n        yunikorn.apache.org/task-groups: |-\n          [{\n              "name": "sched-style",\n              "minMember": 4,\n              "minResource": {\n                "cpu": "1",\n                "memory": "1000M"\n              },\n              "nodeSelector": {},\n              "tolerations": [],\n              "affinity": {}\n          }]\n    spec:\n      schedulerName: yunikorn\n      restartPolicy: Never\n      containers:\n        - name: sleep30\n          image: "alpine:latest"\n          imagePullPolicy: "IfNotPresent"\n          command: ["sleep", "30"]\n          resources:\n            requests:\n              cpu: "1"\n              memory: "1000M"\n\n')),(0,r.yg)("h2",{id:"verify-configuration"},"Verify Configuration"),(0,r.yg)("p",null,"To verify if the configuration has been done completely and correctly, check the following things:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"When an app is submitted, verify the expected number of placeholders are created by the scheduler.\nIf you define 2 task groups, 1 with minMember 1 and the other with minMember 5, that means we are expecting 6 placeholder\ngets created once the job is submitted."),(0,r.yg)("li",{parentName:"ol"},"Verify the placeholder spec is correct. Each placeholder needs to have the same info as the real pod in the same taskGroup.\nCheck field including: namespace, pod resources, node-selector, toleration and affinity."),(0,r.yg)("li",{parentName:"ol"},"Verify the placeholders can be allocated on correct type of nodes, and verify the real pods are started by replacing the placeholder pods.")),(0,r.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.yg)("p",null,"Please see the troubleshooting doc when gang scheduling is enabled ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.1.0/user_guide/trouble_shooting#gang-scheduling"},"here"),"."))}g.isMDXComponent=!0},27380:(e,n,a)=>{a.d(n,{c:()=>t});const t=a.p+"assets/images/gang_scheduling_iintro-7f458cff1f69a386818aedfbc0443a34.png"}}]);