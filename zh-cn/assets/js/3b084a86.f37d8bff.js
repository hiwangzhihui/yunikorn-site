"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67264],{95788:(e,n,a)=>{a.d(n,{Iu:()=>p,yg:()=>h});var t=a(11504);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),s=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(a),g=r,h=c["".concat(l,".").concat(g)]||c[g]||m[g]||i;return a?t.createElement(h,o(o({ref:n},p),{},{components:a})):t.createElement(h,o({ref:n},p))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[c]="string"==typeof e?e:r,o[1]=u;for(var s=2;s<i;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},98272:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var t=a(45072),r=(a(11504),a(95788));const i={id:"queue_config",title:"Partition and Queue Configuration"},o=void 0,u={unversionedId:"user_guide/queue_config",id:"version-0.12.2/user_guide/queue_config",title:"Partition and Queue Configuration",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/user_guide/queue_config.md",sourceDirName:"user_guide",slug:"/user_guide/queue_config",permalink:"/zh-cn/docs/0.12.2/user_guide/queue_config",draft:!1,tags:[],version:"0.12.2",frontMatter:{id:"queue_config",title:"Partition and Queue Configuration"},sidebar:"version-0.12.2/docs",previous:{title:"\u7279\u5f81",permalink:"/zh-cn/docs/0.12.2/get_started/core_features"},next:{title:"App Placement Rules",permalink:"/zh-cn/docs/0.12.2/user_guide/placement_rules"}},l={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Partitions",id:"partitions",level:2},{value:"Queues",id:"queues",level:3},{value:"Placement rules",id:"placement-rules",level:3},{value:"Limits",id:"limits",level:3},{value:"Resources",id:"resources",level:3},{value:"Child Template",id:"child-template",level:3}],p={toc:s},c="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(c,(0,t.c)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The basis for the queue configuration is given in the ",(0,r.yg)("a",{parentName:"p",href:"/zh-cn/docs/0.12.2/design/scheduler_configuration"},"configuration design document"),"."),(0,r.yg)("p",null,"This document provides the generic queue configuration.\nIt references both the ",(0,r.yg)("a",{parentName:"p",href:"/zh-cn/docs/0.12.2/user_guide/acls"},"Access Control Lists")," and ",(0,r.yg)("a",{parentName:"p",href:"/zh-cn/docs/0.12.2/user_guide/placement_rules"},"Placement rules")," documentation."),(0,r.yg)("p",null,"This document explains how to create the partition and queue configuration for the scheduler with examples."),(0,r.yg)("p",null,"The scheduler relies on the shim to reliably provide user information as part of the application submission.\nThe current shim identifies the user and the groups the user belongs to using the methodology provided in ",(0,r.yg)("a",{parentName:"p",href:"usergroup_resolution"},"User & Group Resolution")," "),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"The configuration file for the scheduler that is described here only provides the configuration for the partitions and queues."),(0,r.yg)("p",null,"By default we use the file called ",(0,r.yg)("inlineCode",{parentName:"p"},"queues.yaml")," in our deployments.\nThe filename can be changed via the command line flag ",(0,r.yg)("inlineCode",{parentName:"p"},"policyGroup")," of the scheduler.\nChanging the filename must be followed by corresponding changes in the deployment details, either the ",(0,r.yg)("inlineCode",{parentName:"p"},"configmap")," or the file included in the docker container."),(0,r.yg)("p",null,"The example file for the configuration is located in the scheduler core's ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-core/blob/master/config/queues.yaml"},"queues.yaml"),".  "),(0,r.yg)("h2",{id:"partitions"},"Partitions"),(0,r.yg)("p",null,"Partitions are the top level of the scheduler configuration.\nThere can be more than one partition defined in the configuration."),(0,r.yg)("p",null,"Basic structure for the partition definition in the configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: <name of the 1st partition>\n  - name: <name of the 2nd partition>\n")),(0,r.yg)("p",null,"The default name for the partition is ",(0,r.yg)("inlineCode",{parentName:"p"},"default"),".\nThe partition definition contains the full configuration for the scheduler for a particular shim.\nEach shim uses its own unique partition."),(0,r.yg)("p",null,"The partition must have at least the following keys defined:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"name"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#queues"},"queues"))),(0,r.yg)("p",null,"The queues configuration is explained below."),(0,r.yg)("p",null,"Optionally the following keys can be defined for a partition:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#placement-rules"},"placementrules")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#limits"},"limits")),(0,r.yg)("li",{parentName:"ul"},"nodesortpolicy"),(0,r.yg)("li",{parentName:"ul"},"preemption")),(0,r.yg)("p",null,"Placement rules and limits are explained in their own chapters"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"nodesortpolicy")," defines the way the nodes are sorted for the partition.\nDetails on the values that can be used are in the ",(0,r.yg)("a",{parentName:"p",href:"/zh-cn/docs/0.12.2/user_guide/sorting_policies#node-sorting"},"sorting policy")," documentation."),(0,r.yg)("p",null,"The preemption key can currently have only one sub key: ",(0,r.yg)("em",{parentName:"p"},"enabled"),".\nThis boolean value defines the preemption behaviour for the whole partition."),(0,r.yg)("p",null,"The default value for ",(0,r.yg)("em",{parentName:"p"},"enabled")," is ",(0,r.yg)("em",{parentName:"p"},"false"),".\nAllowed values: ",(0,r.yg)("em",{parentName:"p"},"true")," or ",(0,r.yg)("em",{parentName:"p"},"false"),", any other value will cause a parse error."),(0,r.yg)("p",null,"Example ",(0,r.yg)("inlineCode",{parentName:"p"},"partition")," yaml entry with ",(0,r.yg)("em",{parentName:"p"},"preemption")," flag set and a ",(0,r.yg)("inlineCode",{parentName:"p"},"nodesortpolicy")," of ",(0,r.yg)("em",{parentName:"p"},"fair"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: <name of the partition>\n    nodesortpolicy: fair\n    preemption:\n      enabled: true\n")),(0,r.yg)("p",null,"NOTE:\nCurrently the Kubernetes unique shim does not support any other partition than the ",(0,r.yg)("inlineCode",{parentName:"p"},"default")," partition..\nThis has been logged as an ",(0,r.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-22"},"jira")," for the shim."),(0,r.yg)("h3",{id:"queues"},"Queues"),(0,r.yg)("p",null,"YuniKorn manages resources by leveraging resource queues. The resource queue has the following characters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"queues can have ",(0,r.yg)("strong",{parentName:"li"},"hierarchical")," structure"),(0,r.yg)("li",{parentName:"ul"},"each queue can be preset with ",(0,r.yg)("strong",{parentName:"li"},"min/max capacity")," where min-capacity defines the guaranteed resource and the max-capacity defines the resource limit (aka resource quota)"),(0,r.yg)("li",{parentName:"ul"},"tasks must be running under a certain leaf queue"),(0,r.yg)("li",{parentName:"ul"},"queues can be ",(0,r.yg)("strong",{parentName:"li"},"static")," (loading from configuration file) or ",(0,r.yg)("strong",{parentName:"li"},"dynamical")," (internally managed by YuniKorn)"),(0,r.yg)("li",{parentName:"ul"},"queue level ",(0,r.yg)("strong",{parentName:"li"},"resource fairness is")," enforced by the scheduler"),(0,r.yg)("li",{parentName:"ul"},"a job can only run under a specific queue")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The difference between YuniKorn queue and ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Kubernetes namespace"),":\nKubernetes namespace provides the scope for the Kubernetes resources, including the security context (i.e who can access the objects), and resource\nboundary when ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"resource quota")," is defined (i.e how many resources can be used by the objects).\nOn the other hand, YuniKorn queue is only used how many resources can be used by a group of jobs, and in which order. It provides\na more fine-grained control on resource sharing across multiple tenants with considering of resource fairness, job ordering, etc. In most of the cases,\nYuniKorn queue can be used to replace the namespace resource quota, in order to provide more scheduling features.")),(0,r.yg)("p",null,"The ",(0,r.yg)("em",{parentName:"p"},"queues")," entry is the main configuration element.\nIt defines a hierarchical structure for the queues."),(0,r.yg)("p",null,"It can have a ",(0,r.yg)("inlineCode",{parentName:"p"},"root")," queue defined but it is not a required element.\nIf the ",(0,r.yg)("inlineCode",{parentName:"p"},"root")," queue is not defined the configuration parsing will insert the root queue for consistency.\nThe insertion of the root queue is triggered by:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the configuration has more than one queue defined at the top level a root queue is inserted."),(0,r.yg)("li",{parentName:"ul"},"If there is only one queue defined at the top level and it is not called ",(0,r.yg)("inlineCode",{parentName:"li"},"root")," a root queue is inserted.  ")),(0,r.yg)("p",null,"The defined queue or queues will become a child queue of the inserted ",(0,r.yg)("inlineCode",{parentName:"p"},"root")," queue."),(0,r.yg)("p",null,"Basic ",(0,r.yg)("inlineCode",{parentName:"p"},"queues")," yaml entry with sub queue:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"queues:\n- name: <name of the queue>\n  queues:\n  - name: <name of the queue>\n")),(0,r.yg)("p",null,"Supported parameters for the queues:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"name"),(0,r.yg)("li",{parentName:"ul"},"parent"),(0,r.yg)("li",{parentName:"ul"},"queues"),(0,r.yg)("li",{parentName:"ul"},"properties"),(0,r.yg)("li",{parentName:"ul"},"adminacl"),(0,r.yg)("li",{parentName:"ul"},"submitacl"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#resources"},"resources")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#limits"},"limits"))),(0,r.yg)("p",null,"Each queue must have a ",(0,r.yg)("em",{parentName:"p"},"name"),".\nThe name of a queue must be unique at the level that the queue is defined.\nSince the queue structure is fully hierarchical queues at different points in the hierarchy may have the same name.\nAs an example: the queue structure ",(0,r.yg)("inlineCode",{parentName:"p"},"root.testqueue")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"root.parent.testqueue"),' is a valid structure.\nA queue cannot contain a dot "." character as that character is used to separate the queues in the hierarchy.\nIf the name is not unique for the queue in the configuration or contains a dot a parsing error is generated and the configuration is rejected. '),(0,r.yg)("p",null,"Queues in the structure will automatically get a type assigned.\nThe type of the queue is based on the fact that the queue has children or sub queues.\nThe two types of queues are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"parent"),(0,r.yg)("li",{parentName:"ul"},"leaf")),(0,r.yg)("p",null,"Applications can only be assigned to a ",(0,r.yg)("em",{parentName:"p"},"leaf")," queue.\nA queue that has a child or sub queue in the configuration is automatically a ",(0,r.yg)("em",{parentName:"p"},"parent")," queue.\nIf a queue does not have a sub the queue in the configuration it is a ",(0,r.yg)("em",{parentName:"p"},"leaf")," queue, unless the ",(0,r.yg)("inlineCode",{parentName:"p"},"parent")," parameter is set to ",(0,r.yg)("em",{parentName:"p"},"true"),".\nTrying to override a ",(0,r.yg)("em",{parentName:"p"},"parent")," queue type in the configuration will cause a parsing error of the configuration.   "),(0,r.yg)("p",null,"Sub queues for a parent queue are defined under the ",(0,r.yg)("inlineCode",{parentName:"p"},"queues")," entry.\nThe ",(0,r.yg)("inlineCode",{parentName:"p"},"queues")," entry is a recursive entry for a queue level and uses the exact same set of parameters.  "),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"properties")," parameter is a simple key value pair list.\nThe list provides a simple set of properties for the queue.\nThere are no limitations on the key or value values, anything is allowed.\nCurrently, the property list is only used in the scheduler to define a ",(0,r.yg)("a",{parentName:"p",href:"/zh-cn/docs/0.12.2/user_guide/sorting_policies#application-sorting"},"sorting order")," for a leaf queue.\nFuture expansions, like the option to turn on or off preemption on a queue or other sorting policies, would use this same property construct without the need to change the configuration."),(0,r.yg)("p",null,"Access to a queue is set via the ",(0,r.yg)("inlineCode",{parentName:"p"},"adminacl")," for administrative actions and for submitting an application via the ",(0,r.yg)("inlineCode",{parentName:"p"},"submitacl")," entry.\nACLs are documented in the ",(0,r.yg)("a",{parentName:"p",href:"/zh-cn/docs/0.12.2/user_guide/acls"},"Access control lists")," document."),(0,r.yg)("p",null,"Queue resource limits are set via the ",(0,r.yg)("inlineCode",{parentName:"p"},"resources")," parameter.\nUser and group limits are set via the ",(0,r.yg)("inlineCode",{parentName:"p"},"limits")," parameter.\nAs both entries are complex configuration entries they are explained in ",(0,r.yg)("a",{parentName:"p",href:"#resources"},"resources")," and ",(0,r.yg)("a",{parentName:"p",href:"#limits"},"limits")," below."),(0,r.yg)("p",null,"An example configuration of a queue ",(0,r.yg)("inlineCode",{parentName:"p"},"root.namespaces")," as a ",(0,r.yg)("em",{parentName:"p"},"parent")," queue with limits:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    queues:\n      - name: namespaces\n        parent: true\n        resources:\n          guaranteed:\n            {memory: 1000, vcore: 10}\n          max:\n            {memory: 10000, vcore: 100}\n")),(0,r.yg)("h3",{id:"placement-rules"},"Placement rules"),(0,r.yg)("p",null,"The placement rules are defined and documented in the ",(0,r.yg)("a",{parentName:"p",href:"/zh-cn/docs/0.12.2/user_guide/placement_rules"},"placement rule")," document."),(0,r.yg)("p",null,"Each partition can have only one set of placement rules defined.\nIf no rules are defined the placement manager is not started and each application ",(0,r.yg)("em",{parentName:"p"},"must")," have a queue set on submit.  "),(0,r.yg)("h3",{id:"limits"},"Limits"),(0,r.yg)("p",null,"Limits define a set of limit objects for a partition or queue.\nIt can be set on either the partition or on a queue at any level."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"limits:\n  - limit: <description>\n  - limit: <description>\n")),(0,r.yg)("p",null,"A limit object is a complex configuration object.\nIt defines one limit for a set of users and or groups.\nMultiple independent limits can be set as part of one ",(0,r.yg)("inlineCode",{parentName:"p"},"limits")," entry on a queue or partition.\nUsers and or groups that are not part of the limit setting will not be limited."),(0,r.yg)("p",null,"A sample limits entry:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'limits:\n  - limit: <description>\n    users:\n    - <user name or "*"">\n    - <user name>\n    groups:\n    - <group name or "*"">\n    - <group name>\n    maxapplications: <1..maxint>\n    maxresources:\n      <resource name 1>: <0..maxint>\n      <resource name 2>: <0..maxint>\n')),(0,r.yg)("p",null,"Limits are applied recursively in the case of a queue limit.\nThis means that a limit on the ",(0,r.yg)("inlineCode",{parentName:"p"},"root")," queue is an overall limit in the cluster for the user or group.\nA ",(0,r.yg)("inlineCode",{parentName:"p"},"root")," queue limit is thus also equivalent with the ",(0,r.yg)("inlineCode",{parentName:"p"},"partition")," limit."),(0,r.yg)("p",null,"The limit object parameters:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"limit"),(0,r.yg)("li",{parentName:"ul"},"users"),(0,r.yg)("li",{parentName:"ul"},"groups"),(0,r.yg)("li",{parentName:"ul"},"maxapplications"),(0,r.yg)("li",{parentName:"ul"},"maxresources")),(0,r.yg)("p",null,"The ",(0,r.yg)("em",{parentName:"p"},"limit")," parameter is an optional description of the limit entry.\nIt is not used for anything but making the configuration understandable and readable. "),(0,r.yg)("p",null,"The ",(0,r.yg)("em",{parentName:"p"},"users")," and ",(0,r.yg)("em",{parentName:"p"},"groups")," that can be configured can be one of two types:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'a star "*" '),(0,r.yg)("li",{parentName:"ul"},"a list of users or groups.")),(0,r.yg)("p",null,'If the entry for users or groups contains more than one (1) entry it is always considered a list of either users or groups.\nThe star "*" is the wildcard character and matches all users or groups.\nDuplicate entries in the lists are ignored and do not cause a parsing error.\nSpecifying a star beside other list elements is not allowed.'),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"maxapplications")," is an unsigned integer value, larger than 1, which allows you to limit the number of running applications for the configured user or group.\nSpecifying a zero maximum applications limit is not allowed as it would implicitly deny access.\nDenying access must be handled via the ACL entries.  "),(0,r.yg)("p",null,"The ",(0,r.yg)("em",{parentName:"p"},"maxresources")," parameter can be used to specify a limit for one or more resources.\nThe ",(0,r.yg)("em",{parentName:"p"},"maxresources")," uses the same syntax as the ",(0,r.yg)("a",{parentName:"p",href:"#resources"},"resources")," parameter for the queue.\nResources that are not specified in the list are not limited.\nA resource limit can be set to 0.\nThis prevents the user or group from requesting the specified resource even though the queue or partition has that specific resource available.",(0,r.yg)("br",{parentName:"p"}),"\n","Specifying an overall resource limit of zero is not allowed.\nThis means that at least one of the resources specified in the limit must be greater than zero."),(0,r.yg)("p",null,"If a resource is not available on a queue the maximum resources on a queue definition should be used.\nSpecifying a limit that is effectively zero, ",(0,r.yg)("em",{parentName:"p"},"maxapplications")," is zero and all resource limits are zero, is not allowed and will cause a parsing error."),(0,r.yg)("p",null,"A limit is per user or group.\nIt is ",(0,r.yg)("em",{parentName:"p"},"not")," a combined limit for all the users or groups together."),(0,r.yg)("p",null,"As an example: "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'limit: "example entry"\nmaxapplications: 10\nusers:\n- sue\n- bob\n')),(0,r.yg)("p",null,"In this case both the users ",(0,r.yg)("inlineCode",{parentName:"p"},"sue")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"bob")," are allowed to run 10 applications."),(0,r.yg)("h3",{id:"resources"},"Resources"),(0,r.yg)("p",null,"The resources entry for the queue can set the ",(0,r.yg)("em",{parentName:"p"},"guaranteed")," and or ",(0,r.yg)("em",{parentName:"p"},"maximum")," resources for a queue.\nResource limits are checked recursively.\nThe usage of a leaf queue is the sum of all assigned resources for that queue.\nThe usage of a parent queue is the sum of the usage of all queues, leafs and parents, below the parent queue. "),(0,r.yg)("p",null,"The root queue, when defined, cannot have any resource limit set.\nIf the root queue has any limit set a parsing error will occur.\nThe maximum resource limit for the root queue is automatically equivalent to the cluster size.\nThere is no guaranteed resource setting for the root queue."),(0,r.yg)("p",null,"Maximum resources when configured place a hard limit on the size of all allocations that can be assigned to a queue at any point in time.\nA maximum resource can be set to 0 which makes the resource not available to the queue.\nGuaranteed resources are used in calculating the share of the queue and during allocation.\nIt is used as one of the inputs for deciding which queue to give the allocation to.\nPreemption uses the ",(0,r.yg)("em",{parentName:"p"},"guaranteed")," resource of a queue as a base which a queue cannot go below."),(0,r.yg)("p",null,"Basic ",(0,r.yg)("inlineCode",{parentName:"p"},"resources")," yaml entry:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"resources:\n  guaranteed:\n    <resource name 1>: <0..maxint>\n    <resource name 2>: <0..maxint>\n  max:\n    <resource name 1>: <0..maxint>\n    <resource name 2>: <0..maxint>\n")),(0,r.yg)("p",null,"Resources that are not specified in the list are not limited, for max resources, or guaranteed in the case of guaranteed resources. "),(0,r.yg)("h3",{id:"child-template"},"Child Template"),(0,r.yg)("p",null,"The parent queue can provide a template to define the behaviour of dynamic leaf queues below it. A parent queue having no child template inherits the child template\nfrom its parent if that parent has one defined. A child template can be defined at any level in the queue hierarchy on a queue that is of the type parent."),(0,r.yg)("p",null,"The supported configuration in template are shown below."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"application sort policy"),(0,r.yg)("li",{parentName:"ol"},"max resources"),(0,r.yg)("li",{parentName:"ol"},"guaranteed resources"),(0,r.yg)("li",{parentName:"ol"},"max applications")),(0,r.yg)("p",null,"As an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"}," partitions:\n   - name: default\n     placementrules:\n       - name: provided\n         create: true\n     queues:\n       - name: root\n         submitacl: '*'\n         childtemplate:\n           maxapplications: 10\n           properties:\n             application.sort.policy: stateaware\n           resources:\n             guaranteed:\n               vcore: 1000\n               memory: 1000\n             max:\n               vcore: 20000\n               memory: 600000\n         queues:\n           - name: parent\n             parent: true\n             childtemplate:\n               resources:\n                 max:\n                   vcore: 21000\n                   memory: 610000\n           - name: notemplate\n             parent: true\n")),(0,r.yg)("p",null,"In this case, ",(0,r.yg)("inlineCode",{parentName:"p"},"root.parent.sales")," will directly use the child template of parent queue ",(0,r.yg)("inlineCode",{parentName:"p"},"root.parent"),". By contrast,\n",(0,r.yg)("inlineCode",{parentName:"p"},"root.notemplate.sales")," will use the child template set on the queue ",(0,r.yg)("inlineCode",{parentName:"p"},"root")," since its parent queue ",(0,r.yg)("inlineCode",{parentName:"p"},"root.notemplate")," inherits the child template from the queue ",(0,r.yg)("inlineCode",{parentName:"p"},"root"),"."),(0,r.yg)("p",null,"[DEPRECATED]"," Please migrate to template if your cluster is relying on old behavior that dynamic leaf queue can inherit\n",(0,r.yg)("inlineCode",{parentName:"p"},"application.sort.policy")," from parent (introduced by ",(0,r.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-195"},"YUNIKORN-195"),"). The old behavior will get removed in the future release."))}m.isMDXComponent=!0}}]);