"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89838],{13202:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=i(13274),s=i(1780);const t={id:"queue_config",title:"Partition and Queue Configuration"},o=void 0,a={id:"user_guide/queue_config",title:"Partition and Queue Configuration",description:"\x3c!--",source:"@site/docs/user_guide/queue_config.md",sourceDirName:"user_guide",slug:"/user_guide/queue_config",permalink:"/docs/next/user_guide/queue_config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"queue_config",title:"Partition and Queue Configuration"},sidebar:"docs",previous:{title:"Service Configuration",permalink:"/docs/next/user_guide/service_config"},next:{title:"App Placement Rules",permalink:"/docs/next/user_guide/placement_rules"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Partitions",id:"partitions",level:2},{value:"Queues",id:"queues",level:3},{value:"Recovery queue",id:"recovery-queue",level:3},{value:"Placement rules",id:"placement-rules",level:3},{value:"Limits",id:"limits",level:3},{value:"Properties",id:"properties",level:3},{value:"<code>application.sort.policy</code>",id:"applicationsortpolicy",level:4},{value:"<code>application.sort.priority</code>",id:"applicationsortpriority",level:4},{value:"<code>priority.policy</code>",id:"prioritypolicy",level:4},{value:"<code>priority.offset</code>",id:"priorityoffset",level:4},{value:"<code>preemption.policy</code>",id:"preemptionpolicy",level:4},{value:"<code>preemption.delay</code>",id:"preemptiondelay",level:4},{value:"Resources",id:"resources",level:3},{value:"Child Template",id:"child-template",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The basis for the queue configuration is given in the ",(0,r.jsx)(n.a,{href:"/docs/next/design/scheduler_configuration",children:"configuration design document"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["This document provides the generic queue configuration.\nIt references both the ",(0,r.jsx)(n.a,{href:"/docs/next/user_guide/acls",children:"Access Control Lists"})," and ",(0,r.jsx)(n.a,{href:"/docs/next/user_guide/placement_rules",children:"Placement rules"})," documentation."]}),"\n",(0,r.jsx)(n.p,{children:"This document explains how to create the partition and queue configuration for the scheduler with examples."}),"\n",(0,r.jsxs)(n.p,{children:["The scheduler relies on the shim to reliably provide user information as part of the application submission.\nThe current shim identifies the user and the groups the user belongs to using the methodology provided in ",(0,r.jsx)(n.a,{href:"usergroup_resolution",children:"User & Group Resolution"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The configuration file for the scheduler that is described here only provides the configuration for the partitions and queues."}),"\n",(0,r.jsxs)(n.p,{children:["By default the scheduler reads the ConfigMap section ",(0,r.jsx)(n.code,{children:"queues.yaml"})," for partition and queue configuration. The section name can\nbe changed by updating the ",(0,r.jsx)(n.code,{children:"service.policyGroup"})," ConfigMap entry to be something other than ",(0,r.jsx)(n.code,{children:"queues"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The example reference for the configuration is located in the scheduler core's ",(0,r.jsx)(n.a,{href:"https://github.com/apache/yunikorn-core/blob/master/config/queues.yaml",children:"queues.yaml"})," file."]}),"\n",(0,r.jsx)(n.h2,{id:"partitions",children:"Partitions"}),"\n",(0,r.jsx)(n.p,{children:"Partitions are the top level of the scheduler configuration.\nThere can be more than one partition defined in the configuration."}),"\n",(0,r.jsx)(n.p,{children:"Basic structure for the partition definition in the configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"partitions:\n  - name: <name of the 1st partition>\n  - name: <name of the 2nd partition>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The default name for the partition is ",(0,r.jsx)(n.code,{children:"default"}),".\nThe partition definition contains the full configuration for the scheduler for a particular shim.\nEach shim uses its own unique partition."]}),"\n",(0,r.jsx)(n.p,{children:"The partition must have at least the following keys defined:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"name"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#queues",children:"queues"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The queues configuration is explained below."}),"\n",(0,r.jsx)(n.p,{children:"Optionally the following keys can be defined for a partition:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#placement-rules",children:"placementrules"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#limits",children:"limits"})}),"\n",(0,r.jsx)(n.li,{children:"nodesortpolicy"}),"\n",(0,r.jsx)(n.li,{children:"preemption"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Placement rules and limits are explained in their own chapters"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"nodesortpolicy"})," key defines the way the nodes are sorted for the partition.\nDetails on the values that can be used are in the ",(0,r.jsx)(n.a,{href:"/docs/next/user_guide/sorting_policies#node-sorting",children:"sorting policy"})," documentation."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"preemption"})," key can have only one sub key: ",(0,r.jsx)(n.em,{children:"enabled"}),".\nThis boolean value defines the preemption behavior for the whole partition."]}),"\n",(0,r.jsxs)(n.p,{children:["The default value for ",(0,r.jsx)(n.em,{children:"enabled"})," is ",(0,r.jsx)(n.em,{children:"true"}),".\nAllowed values: ",(0,r.jsx)(n.em,{children:"true"})," or ",(0,r.jsx)(n.em,{children:"false"}),", any other value will cause a parse error."]}),"\n",(0,r.jsxs)(n.p,{children:["Example ",(0,r.jsx)(n.code,{children:"partition"})," yaml entry with a ",(0,r.jsx)(n.code,{children:"nodesortpolicy"})," of ",(0,r.jsx)(n.em,{children:"fair"})," and preemption disabled:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"partitions:\n  - name: <name of the partition>\n    nodesortpolicy: fair\n    preemption:\n      enabled: false\n"})}),"\n",(0,r.jsxs)(n.p,{children:["NOTE:\nCurrently the Kubernetes unique shim does not support any other partition than the ",(0,r.jsx)(n.code,{children:"default"})," partition..\nThis has been logged as an ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-22",children:"jira"})," for the shim."]}),"\n",(0,r.jsx)(n.h3,{id:"queues",children:"Queues"}),"\n",(0,r.jsx)(n.p,{children:"YuniKorn manages resources by leveraging resource queues. The resource queue has the following characters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["queues can have ",(0,r.jsx)(n.strong,{children:"hierarchical"})," structure"]}),"\n",(0,r.jsxs)(n.li,{children:["each queue can be preset with ",(0,r.jsx)(n.strong,{children:"min/max capacity"})," where min-capacity defines the guaranteed resource and the max-capacity defines the resource limit (aka resource quota)"]}),"\n",(0,r.jsx)(n.li,{children:"tasks must be running under a certain leaf queue"}),"\n",(0,r.jsxs)(n.li,{children:["queues can be ",(0,r.jsx)(n.strong,{children:"static"})," (loading from configuration file) or ",(0,r.jsx)(n.strong,{children:"dynamical"})," (internally managed by YuniKorn)"]}),"\n",(0,r.jsxs)(n.li,{children:["queue level ",(0,r.jsx)(n.strong,{children:"resource fairness is"})," enforced by the scheduler"]}),"\n",(0,r.jsx)(n.li,{children:"a job can only run under a specific queue"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The difference between YuniKorn queue and ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",children:"Kubernetes namespace"}),":\nKubernetes namespace provides the scope for the Kubernetes resources, including the security context (i.e who can access the objects), and resource\nboundary when ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/",children:"resource quota"})," is defined (i.e how many resources can be used by the objects).\nOn the other hand, YuniKorn queue is only used how many resources can be used by a group of jobs, and in which order. It provides\na more fine-grained control on resource sharing across multiple tenants with considering of resource fairness, job ordering, etc. In most of the cases,\nYuniKorn queue can be used to replace the namespace resource quota, in order to provide more scheduling features."]})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"queues"})," entry is the main configuration element.\nIt defines a hierarchical structure for the queues."]}),"\n",(0,r.jsxs)(n.p,{children:["It can have a ",(0,r.jsx)(n.code,{children:"root"})," queue defined but it is not a required element.\nIf the ",(0,r.jsx)(n.code,{children:"root"})," queue is not defined the configuration parsing will insert the root queue for consistency.\nThe insertion of the root queue is triggered by:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the configuration has more than one queue defined at the top level a root queue is inserted."}),"\n",(0,r.jsxs)(n.li,{children:["If there is only one queue defined at the top level and it is not called ",(0,r.jsx)(n.code,{children:"root"})," a root queue is inserted."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The defined queue or queues will become a child queue of the inserted ",(0,r.jsx)(n.code,{children:"root"})," queue."]}),"\n",(0,r.jsxs)(n.p,{children:["Basic ",(0,r.jsx)(n.code,{children:"queues"})," yaml entry with sub queue:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"queues:\n- name: <name of the queue>\n  queues:\n  - name: <name of the queue>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Supported parameters for the queues:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"name"}),"\n",(0,r.jsx)(n.li,{children:"parent"}),"\n",(0,r.jsx)(n.li,{children:"queues"}),"\n",(0,r.jsx)(n.li,{children:"maxapplications"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#properties",children:"properties"})}),"\n",(0,r.jsx)(n.li,{children:"adminacl"}),"\n",(0,r.jsx)(n.li,{children:"submitacl"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#resources",children:"resources"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#limits",children:"limits"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Each queue must have a ",(0,r.jsx)(n.em,{children:"name"}),".\nThe name of a queue must be unique at the level that the queue is defined.\nSince the queue structure is fully hierarchical queues at different points in the hierarchy may have the same name.\nAs an example: the queue structure ",(0,r.jsx)(n.code,{children:"root.testqueue"})," and ",(0,r.jsx)(n.code,{children:"root.parent.testqueue"}),' is a valid structure.\nA queue cannot contain a dot "." character as that character is used to separate the queues in the hierarchy.']}),"\n",(0,r.jsx)(n.p,{children:"Valid Queue name:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"must be 64 characters or less,"}),"\n",(0,r.jsx)(n.li,{children:"can contain alphanumeric character ([a-z0-9A-Z]), underscores (_), colons (:), hashes (#), slashes (/), at signs (@), and dashes (-)."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If the name is not unique for the queue in the configuration or contains a dot or does not follow the above rules, a parsing error is generated and the configuration is rejected."}),"\n",(0,r.jsx)(n.p,{children:"Queues in the structure will automatically get a type assigned.\nThe type of the queue is based on the fact that the queue has children or sub queues.\nThe two types of queues are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"parent"}),"\n",(0,r.jsx)(n.li,{children:"leaf"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Applications can only be assigned to a ",(0,r.jsx)(n.em,{children:"leaf"})," queue.\nA queue that has a child or sub queue in the configuration is automatically a ",(0,r.jsx)(n.em,{children:"parent"})," queue.\nIf a queue does not have a sub the queue in the configuration it is a ",(0,r.jsx)(n.em,{children:"leaf"})," queue, unless the ",(0,r.jsx)(n.code,{children:"parent"})," parameter is set to ",(0,r.jsx)(n.em,{children:"true"}),".\nTrying to override a ",(0,r.jsx)(n.em,{children:"parent"})," queue type in the configuration will cause a parsing error of the configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["Sub queues for a parent queue are defined under the ",(0,r.jsx)(n.code,{children:"queues"})," entry.\nThe ",(0,r.jsx)(n.code,{children:"queues"})," entry is a recursive entry for a queue level and uses the exact same set of parameters.",(0,r.jsx)(n.br,{}),"\n","The ",(0,r.jsx)(n.code,{children:"maxapplications"})," property is an integer value, larger than 1, which allows you to limit the number of running applications for the queue. Specifying a zero for ",(0,r.jsx)(n.code,{children:"maxapplications"})," is not allowed as it would block all allocations for applications in the queue. The ",(0,r.jsx)(n.code,{children:"maxapplications"})," value for a ",(0,r.jsx)(n.em,{children:"child"})," queue must be smaller or equal to the value for the ",(0,r.jsx)(n.em,{children:"parent"})," queue."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"#properties",children:"properties"})," section contains simple key/value pairs. This is\nused for further queue customization of features such as\n",(0,r.jsx)(n.a,{href:"/docs/next/user_guide/sorting_policies#application-sorting",children:"application sorting"})," and priority\nscheduling. Future features will use the exisitng ",(0,r.jsx)(n.code,{children:"properties"})," section as well\nto avoid the need to define a new structure for queue configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["Access to a queue is set via the ",(0,r.jsx)(n.code,{children:"adminacl"})," for administrative actions and for submitting an application via the ",(0,r.jsx)(n.code,{children:"submitacl"})," entry.\nACLs are documented in the ",(0,r.jsx)(n.a,{href:"/docs/next/user_guide/acls",children:"Access control lists"})," document."]}),"\n",(0,r.jsxs)(n.p,{children:["Queue resource limits are set via the ",(0,r.jsx)(n.code,{children:"resources"})," parameter.\nUser and group limits are set via the ",(0,r.jsx)(n.code,{children:"limits"})," parameter.\nAs both entries are complex configuration entries they are explained in ",(0,r.jsx)(n.a,{href:"#resources",children:"resources"})," and ",(0,r.jsx)(n.a,{href:"#limits",children:"limits"})," below."]}),"\n",(0,r.jsxs)(n.p,{children:["An example configuration of a queue ",(0,r.jsx)(n.code,{children:"root.namespaces"})," as a ",(0,r.jsx)(n.em,{children:"parent"})," queue with limits:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"partitions:\n  - name: default\n    queues:\n      - name: namespaces\n        parent: true\n        maxapplications: 12\n        resources:\n          guaranteed:\n            {memory: 1G, vcore: 10}\n          max:\n            {memory: 10G, vcore: 100}\n        queues:\n          - name: level1\n            maxapplications: 8\n            resources:\n              guaranteed:\n                {memory: 500M, vcore: 5}\n              max:\n                {memory: 5G, vcore: 50}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"recovery-queue",children:"Recovery queue"}),"\n",(0,r.jsxs)(n.p,{children:["The recovery queue, identified by the name ",(0,r.jsx)(n.code,{children:"root.@recovery@"}),", is a dynamic queue that is not directly queryable. It is used exclusively during the initialization phase for already running allocations that are part of applications failing placement. Its primary function is to handle tasks that need to be reassigned or recovered without user intervention."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The queue is created dynamically and will disappear when it is no longer in use."}),"\n",(0,r.jsx)(n.li,{children:"The queue does not have quotas or Access Control Lists (ACLs)."}),"\n",(0,r.jsx)(n.li,{children:"It cannot be submitted to directly by users. It is managed internally by YuniKorn for specific recovery operations."}),"\n",(0,r.jsxs)(n.li,{children:["While the queue is unqueryable directly, its existence and activities can be observed through the application RESTful API at ",(0,r.jsxs)(n.a,{href:"../api/scheduler#partition-applications",children:["/ws/v1/partition/",":partition","/applications/",":state"]}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"placement-rules",children:"Placement rules"}),"\n",(0,r.jsxs)(n.p,{children:["The placement rules are defined and documented in the ",(0,r.jsx)(n.a,{href:"/docs/next/user_guide/placement_rules",children:"placement rule"})," document."]}),"\n",(0,r.jsxs)(n.p,{children:["Each partition can have only one set of placement rules defined.\nIf no rules are defined, ",(0,r.jsx)(n.a,{href:"placement_rules#provided-rule",children:"provided rule"})," will be applied.\nEach application ",(0,r.jsx)(n.em,{children:"must"})," have a queue set on submit."]}),"\n",(0,r.jsx)(n.h3,{id:"limits",children:"Limits"}),"\n",(0,r.jsx)(n.p,{children:"Limits define a set of limit objects for a queue, and can be set on a queue at any level."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"limits:\n  - limit: <description>\n  - limit: <description>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A limit object is a complex configuration object.\nIt defines one limit for a set of users and or groups.\nMultiple independent limits can be set as part of one ",(0,r.jsx)(n.code,{children:"limits"})," entry on a queue.\nUsers and or groups that are not part of the limit setting will not be limited."]}),"\n",(0,r.jsx)(n.p,{children:"A sample limits entry:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'limits:\n  - limit: <description>\n    users:\n    - <user name or "*">\n    - <user name>\n    groups:\n    - <group name or "*">\n    - <group name>\n    maxapplications: <1..maxint>\n    maxresources:\n      <resource name 1>: <0..maxint>[suffix]\n      <resource name 2>: <0..maxint>[suffix]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Limits are applied recursively in the case of a queue limit.\nThis means that a limit on the ",(0,r.jsx)(n.code,{children:"root"})," queue is an overall limit in the cluster for the user or group.\nA ",(0,r.jsx)(n.code,{children:"root"})," queue limit is thus also equivalent with the ",(0,r.jsx)(n.code,{children:"partition"})," limit."]}),"\n",(0,r.jsx)(n.p,{children:"The limit object parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"limit"}),"\n",(0,r.jsx)(n.li,{children:"users"}),"\n",(0,r.jsx)(n.li,{children:"groups"}),"\n",(0,r.jsx)(n.li,{children:"maxapplications"}),"\n",(0,r.jsx)(n.li,{children:"maxresources"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"limit"})," parameter is an optional description of the limit entry.\nIt is not used for anything but making the configuration understandable and readable."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"users"})," and ",(0,r.jsx)(n.em,{children:"groups"})," that can be configured can be one of two types:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'a star "*"'}),"\n",(0,r.jsx)(n.li,{children:"a list of users or groups."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'If the entry for users or groups contains more than one (1) entry it is always considered a list of either users or groups.\nThe star "*" is the wildcard character and matches all users or groups.\nDuplicate entries in the lists are ignored and do not cause a parsing error.\nSpecifying a star beside other list elements is not allowed.\nWhen a wildcard group is configured, a limit must be configured with at least one named group.'}),"\n",(0,r.jsx)(n.p,{children:"Valid User name:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"must start with a letter (uppercase or lowercase) or an underscore (_),"}),"\n",(0,r.jsx)(n.li,{children:"followed by alphanumeric character ([a-z0-9A-Z]), underscores (_), colons (:), hashes (#), slashes (/), at signs (@), dots (.), and dashes (-)."}),"\n",(0,r.jsx)(n.li,{children:"can end with dollar ($)."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Valid Group name:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"must start with a letter (uppercase or lowercase) or an underscore (_),"}),"\n",(0,r.jsx)(n.li,{children:"followed by alphanumeric character ([a-z0-9A-Z]), underscores (_), colons (:), dots (.), and dashes (-)."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Parsing will reject the configuration with limits that do not follow the above rules."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"maxapplications"})," is an unsigned integer value, which allows you to limit the number of running applications for the configured user or group.\nSpecifying 0 for ",(0,r.jsx)(n.em,{children:"maxapplications"})," is not allowed."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"maxresources"})," parameter can be used to specify a limit for one or more resources.\nThe ",(0,r.jsx)(n.em,{children:"maxresources"})," uses the same syntax as the ",(0,r.jsx)(n.a,{href:"#resources",children:"resources"})," parameter for the queue.\nResources that are not specified in the list are not limited.\nA resource limit can be set to 0.\nThis prevents the user or group from requesting the specified resource even though the queue or partition has that specific resource available.",(0,r.jsx)(n.br,{}),"\n","Specifying an overall resource limit of zero is not allowed.\nThis means that at least one of the resources specified in the limit must be greater than zero."]}),"\n",(0,r.jsxs)(n.p,{children:["If a resource is not available on a queue the maximum resources on a queue definition should be used.\nSpecifying a limit that is effectively zero, ",(0,r.jsx)(n.em,{children:"maxapplications"})," is zero and all resource limits are zero, is not allowed and will cause a parsing error."]}),"\n",(0,r.jsxs)(n.p,{children:["A limit is per user or group.\nIt is ",(0,r.jsx)(n.em,{children:"not"})," a combined limit for all the users or groups together."]}),"\n",(0,r.jsx)(n.p,{children:"As an example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'limit: "example entry"\nmaxapplications: 10\nusers:\n- sue\n- bob\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this case both the users ",(0,r.jsx)(n.code,{children:"sue"})," and ",(0,r.jsx)(n.code,{children:"bob"})," are allowed to run 10 applications."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(n.p,{children:["Additional queue configuration can be added via the ",(0,r.jsx)(n.code,{children:"properties"})," section,\nspecified as simple key/value pairs. The following parameters are currently\nsupported:"]}),"\n",(0,r.jsx)(n.h4,{id:"applicationsortpolicy",children:(0,r.jsx)(n.code,{children:"application.sort.policy"})}),"\n",(0,r.jsxs)(n.p,{children:["Supported values: ",(0,r.jsx)(n.code,{children:"fifo"}),", ",(0,r.jsx)(n.code,{children:"fair"}),", ",(0,r.jsx)(n.code,{children:"stateaware"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default value: ",(0,r.jsx)(n.code,{children:"fifo"})]}),"\n",(0,r.jsxs)(n.p,{children:["Sets the policy to be used when sorting applications within a queue. This\nsetting has no effect on a ",(0,r.jsx)(n.em,{children:"parent"})," queue."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE:"})," The ",(0,r.jsx)(n.code,{children:"stateaware"})," policy is ",(0,r.jsx)(n.strong,{children:"deprecated"})," in YuniKorn 1.5.0 and will\nbe ",(0,r.jsx)(n.strong,{children:"removed"})," from YuniKorn 1.6.0, where it will be treated as an alias for\n",(0,r.jsx)(n.code,{children:"fifo"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["See the documentation on ",(0,r.jsx)(n.a,{href:"/docs/next/user_guide/sorting_policies#application-sorting",children:"application sorting"}),"\nfor more information."]}),"\n",(0,r.jsx)(n.h4,{id:"applicationsortpriority",children:(0,r.jsx)(n.code,{children:"application.sort.priority"})}),"\n",(0,r.jsxs)(n.p,{children:["Supported values: ",(0,r.jsx)(n.code,{children:"enabled"}),", ",(0,r.jsx)(n.code,{children:"disabled"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default value: ",(0,r.jsx)(n.code,{children:"enabled"})]}),"\n",(0,r.jsxs)(n.p,{children:["When this property is ",(0,r.jsx)(n.code,{children:"enabled"}),", priority will be considered when sorting\nqueues and applications. Setting this value to ",(0,r.jsx)(n.code,{children:"disabled"})," will ignore\npriorities when sorting. This setting can be specified on a ",(0,r.jsx)(n.em,{children:"parent"})," queue and\nwill be inherited by ",(0,r.jsx)(n.em,{children:"child"})," queues."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE:"})," YuniKorn releases prior to 1.2.0 did not support priorities when\nsorting. To keep the legacy behavior, set ",(0,r.jsx)(n.code,{children:"application.sort.priority"})," to\n",(0,r.jsx)(n.code,{children:"disabled"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"prioritypolicy",children:(0,r.jsx)(n.code,{children:"priority.policy"})}),"\n",(0,r.jsxs)(n.p,{children:["Supported values: ",(0,r.jsx)(n.code,{children:"default"}),", ",(0,r.jsx)(n.code,{children:"fence"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default value: ",(0,r.jsx)(n.code,{children:"default"})]}),"\n",(0,r.jsx)(n.p,{children:"Sets the inter-queue priority policy to use when scheduling requests."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": This value is not inherited by child queues."]}),"\n",(0,r.jsx)(n.p,{children:"By default, priority applies across queues globally. In other words,\nhigher-priority requests will be satisfied prior to lower-priority requests\nregardless of which queue they exist within."}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.code,{children:"fence"})," policy is in use on a queue, the priorities of ",(0,r.jsx)(n.em,{children:"child"})," queues\n(in the case of a ",(0,r.jsx)(n.em,{children:"parent"})," queue) or applications (in the case of a ",(0,r.jsx)(n.em,{children:"leaf"}),"\nqueue) will not be exposed outside the fence boundary."]}),"\n",(0,r.jsxs)(n.p,{children:["See the documentation on ",(0,r.jsx)(n.a,{href:"/docs/next/user_guide/priorities",children:"priority support"})," for more information."]}),"\n",(0,r.jsx)(n.h4,{id:"priorityoffset",children:(0,r.jsx)(n.code,{children:"priority.offset"})}),"\n",(0,r.jsx)(n.p,{children:"Supported values: any positive or negative 32-bit integer"}),"\n",(0,r.jsxs)(n.p,{children:["Default value: ",(0,r.jsx)(n.code,{children:"0"})]}),"\n",(0,r.jsx)(n.p,{children:"Adjusts the priority of the queue relative to it's siblings. This can be useful\nto create high or low-priority queues without needing to set every task's\npriority manually."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": This value is not inherited by child queues."]}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.code,{children:"default"})," priority policy, the queue's priority is adjusted up\nor down by this amount."]}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.code,{children:"fence"})," policy, the queue's priority is always set to the offset\nvalue (in other words, the priorities of tasks in the queue are ignored)."]}),"\n",(0,r.jsxs)(n.p,{children:["See the documentation on ",(0,r.jsx)(n.a,{href:"/docs/next/user_guide/priorities",children:"priority support"})," for more information."]}),"\n",(0,r.jsx)(n.h4,{id:"preemptionpolicy",children:(0,r.jsx)(n.code,{children:"preemption.policy"})}),"\n",(0,r.jsxs)(n.p,{children:["Supported values: ",(0,r.jsx)(n.code,{children:"default"}),", ",(0,r.jsx)(n.code,{children:"fence"}),", ",(0,r.jsx)(n.code,{children:"disabled"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default value: ",(0,r.jsx)(n.code,{children:"default"})]}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.code,{children:"default"})," preemption policy, preemption is enabled for the queue."]}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsxs)(n.a,{href:"/docs/next/design/preemption#preemption-fence",children:[(0,r.jsx)(n.code,{children:"fence"})," preemption policy"]}),", tasks running in or below the queue on which the property is set cannot preempt tasks outside the queue tree."]}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.code,{children:"disabled"})," preemption policy, tasks running within the queue can't be victims."]}),"\n",(0,r.jsx)(n.h4,{id:"preemptiondelay",children:(0,r.jsx)(n.code,{children:"preemption.delay"})}),"\n",(0,r.jsxs)(n.p,{children:["Supported values: any positive ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/time#ParseDuration",children:"Golang duration string"})]}),"\n",(0,r.jsxs)(n.p,{children:["Default value: ",(0,r.jsx)(n.code,{children:"30s"})]}),"\n",(0,r.jsx)(n.p,{children:"The property can only be set on a leaf queue. A queue with pending requests can only trigger preemption after it has been in the queue for at least this duration."}),"\n",(0,r.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.p,{children:["The resources entry for the queue can set the ",(0,r.jsx)(n.em,{children:"guaranteed"})," and or ",(0,r.jsx)(n.em,{children:"maximum"})," resources for a queue.\nResource limits are checked recursively.\nThe usage of a leaf queue is the sum of all assigned resources for that queue.\nThe usage of a parent queue is the sum of the usage of all queues, leafs and parents, below the parent queue."]}),"\n",(0,r.jsx)(n.p,{children:"The root queue, when defined, cannot have any resource limit set.\nIf the root queue has any limit set a parsing error will occur.\nThe maximum resource limit for the root queue is automatically equivalent to the cluster size.\nThere is no guaranteed resource setting for the root queue."}),"\n",(0,r.jsxs)(n.p,{children:["Maximum resources when configured place a hard limit on the size of all allocations that can be assigned to a queue at any point in time.\nA maximum resource can be set to 0 which makes the resource not available to the queue.\nGuaranteed resources are used in calculating the share of the queue and during allocation.\nIt is used as one of the inputs for deciding which queue to give the allocation to.\nPreemption uses the ",(0,r.jsx)(n.em,{children:"guaranteed"})," resource of a queue as a base which a queue cannot go below."]}),"\n",(0,r.jsxs)(n.p,{children:["Basic ",(0,r.jsx)(n.code,{children:"resources"})," yaml entry:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"resources:\n  guaranteed:\n    <resource name 1>: <0..maxint>[suffix]\n    <resource name 2>: <0..maxint>[suffix]\n  max:\n    <resource name 1>: <0..maxint>[suffix]\n    <resource name 2>: <0..maxint>[suffix]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Resources that are not specified in the list are not limited, for max resources, or guaranteed in the case of guaranteed resources."}),"\n",(0,r.jsxs)(n.p,{children:["An optional suffix may be specified for resource quantities. Valid suffixes are ",(0,r.jsx)(n.code,{children:"k"}),", ",(0,r.jsx)(n.code,{children:"M"}),", ",(0,r.jsx)(n.code,{children:"G"}),", ",(0,r.jsx)(n.code,{children:"T"}),", ",(0,r.jsx)(n.code,{children:"P"}),", and ",(0,r.jsx)(n.code,{children:"E"})," for SI powers of 10,\nand ",(0,r.jsx)(n.code,{children:"Ki"}),", ",(0,r.jsx)(n.code,{children:"Mi"}),", ",(0,r.jsx)(n.code,{children:"Gi"}),", ",(0,r.jsx)(n.code,{children:"Ti"}),", ",(0,r.jsx)(n.code,{children:"Pi"}),", and ",(0,r.jsx)(n.code,{children:"Ei"})," for SI powers of 2. Additionally, resources of type ",(0,r.jsx)(n.code,{children:"vcore"})," may have a suffix of ",(0,r.jsx)(n.code,{children:"m"})," to indicate millicores. For example, ",(0,r.jsx)(n.code,{children:"500m"})," is 50% of a vcore. Units of type ",(0,r.jsx)(n.code,{children:"memory"})," are interpreted in bytes by default. All other resource types have no designated base unit."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that this is a behavioral change as of YuniKorn 1.0. Prior versions interpreted ",(0,r.jsx)(n.code,{children:"memory"})," as units of 1000000 (1 million) bytes and ",(0,r.jsx)(n.code,{children:"vcore"})," as millicores."]}),"\n",(0,r.jsx)(n.h3,{id:"child-template",children:"Child Template"}),"\n",(0,r.jsx)(n.p,{children:"The parent queue can provide a template to define the behaviour of dynamic leaf queues below it. A parent queue having no child template inherits the child template\nfrom its parent if that parent has one defined. A child template can be defined at any level in the queue hierarchy on a queue that is of the type parent."}),"\n",(0,r.jsx)(n.p,{children:"The supported configuration in template are shown below."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"application sort policy"}),"\n",(0,r.jsx)(n.li,{children:"max resources"}),"\n",(0,r.jsx)(n.li,{children:"guaranteed resources"}),"\n",(0,r.jsx)(n.li,{children:"max applications"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"As an example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:" partitions:\n   - name: default\n     placementrules:\n       - name: provided\n         create: true\n     queues:\n       - name: root\n         submitacl: '*'\n         childtemplate:\n           maxapplications: 10\n           properties:\n             application.sort.policy: fifo\n           resources:\n             guaranteed:\n               vcore: 1\n               memory: 1G\n             max:\n               vcore: 20\n               memory: 600G\n         queues:\n           - name: parent\n             parent: true\n             childtemplate:\n               resources:\n                 max:\n                   vcore: 21\n                   memory: 610G\n           - name: notemplate\n             parent: true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this case, ",(0,r.jsx)(n.code,{children:"root.parent.sales"})," will directly use the child template of parent queue ",(0,r.jsx)(n.code,{children:"root.parent"}),". By contrast,\n",(0,r.jsx)(n.code,{children:"root.notemplate.sales"})," will use the child template set on the queue ",(0,r.jsx)(n.code,{children:"root"})," since its parent queue ",(0,r.jsx)(n.code,{children:"root.notemplate"})," inherits the child template from the queue ",(0,r.jsx)(n.code,{children:"root"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1780:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var r=i(79474);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);