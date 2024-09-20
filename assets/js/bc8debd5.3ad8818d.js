"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1186],{1990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(13274),i=t(1780);const a={id:"user_group_resource_usage_enforcement",title:"User Based Quota Enforcement"},s=void 0,o={id:"design/user_group_resource_usage_enforcement",title:"User Based Quota Enforcement",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.2/design/user_group_enforcement.md",sourceDirName:"design",slug:"/design/user_group_resource_usage_enforcement",permalink:"/docs/1.5.2/design/user_group_resource_usage_enforcement",draft:!1,unlisted:!1,tags:[],version:"1.5.2",frontMatter:{id:"user_group_resource_usage_enforcement",title:"User Based Quota Enforcement"},sidebar:"docs",previous:{title:"User Based Resource Usage Tracking",permalink:"/docs/1.5.2/design/user_based_resource_usage_tracking"},next:{title:"Historical Usage Tracking",permalink:"/docs/1.5.2/design/historical_usage_tracking"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Goals",id:"goals",level:2},{value:"Non Goals",id:"non-goals",level:2},{value:"Configuration processing",id:"configuration-processing",level:2},{value:"Generic behaviour",id:"generic-behaviour",level:3},{value:"Wildcard interpretation",id:"wildcard-interpretation",level:3},{value:"User",id:"user",level:4},{value:"Group",id:"group",level:4},{value:"Example configuration",id:"example-configuration",level:3},{value:"Syntax checking",id:"syntax-checking",level:3},{value:"Quota checks",id:"quota-checks",level:3},{value:"Configuration updates and storage",id:"configuration-updates-and-storage",level:2},{value:"Processing changes existing objects",id:"processing-changes-existing-objects",level:3},{value:"Queue tracking",id:"queue-tracking",level:3},{value:"User tracking",id:"user-tracking",level:3},{value:"Group tracking",id:"group-tracking",level:3},{value:"New queue to track",id:"new-queue-to-track",level:2},{value:"Enforcement changes",id:"enforcement-changes",level:2},{value:"Tracker interface update",id:"tracker-interface-update",level:3},{value:"User tracking",id:"user-tracking-1",level:3},{value:"Group tracking",id:"group-tracking-1",level:3},{value:"Queue tracking",id:"queue-tracking-1",level:3},{value:"Hierarchy traversal",id:"hierarchy-traversal",level:3},{value:"Exposure of quota details",id:"exposure-of-quota-details",level:2}];function h(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["Enforcing resource allocation usage is currently limited to a queue.\nAs part of the allocation process for an application, which owns the allocation, triggers an update of the resource usage for users and groups.\nThe tracking for ",(0,r.jsx)(n.a,{href:"user_based_resource_usage_tracking",children:"user resource usage tracking in YuniKorn"})," is described and implemented independently of the enforcement."]}),"\n",(0,r.jsx)(n.p,{children:"This design builds on top of the tracking design as referenced above. Like a queue a user/group could have a limit set.\nA limit can specify a resource usage quota, and an application usage limit.\nEnforcing the limit which connects the usage to the limit settings is covered in this design."}),"\n",(0,r.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Implementation of the enforcement for user and group limits:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Resource usage quota"}),"\n",(0,r.jsx)(n.li,{children:"Running applications"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Configuration processing","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Process limit object values from the queue configuration"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Updates to the tracking interface to support enforcement as part of increases:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Increase a user/group running applications"}),"\n",(0,r.jsx)(n.li,{children:"Increase a user/group resource usage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"non-goals",children:"Non Goals"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"User and group retrieval is part of the k8shim which is out of scope"}),"\n",(0,r.jsx)(n.li,{children:"Exposing usage as a metric into prometheus"}),"\n",(0,r.jsx)(n.li,{children:"Enforcement of queue quotas or running applications."}),"\n",(0,r.jsxs)(n.li,{children:["Tracking of users and or groups, see ",(0,r.jsx)(n.a,{href:"user_based_resource_usage_tracking",children:"User and Group usage tracking design doc"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-processing",children:"Configuration processing"}),"\n",(0,r.jsxs)(n.p,{children:["The queue configuration definition has a limit object defined as ",(0,r.jsx)(n.a,{href:"../user_guide/queue_config#limits",children:"per the documentation"}),".\nUser and group limits are based on those objects.\nHowever the current configuration processing only performs a syntax check not a content check."]}),"\n",(0,r.jsx)(n.h3,{id:"generic-behaviour",children:"Generic behaviour"}),"\n",(0,r.jsx)(n.p,{children:"Limits can be configured for queues at any level. Limits are applied recursively in the case of a queue limit.\nThis means that a limit on the root queue is an overall limit in the cluster for the user or group.\nA root queue limit is thus also equivalent with the partition limit. While if both the root queue limit and the partition limit exist and are not equal, an error will be returned."}),"\n",(0,r.jsx)(n.p,{children:"A limit is per individual user or group. It is not a combined limit for all users or groups specified in the limit object.\nSee the below limit object as an example.\nIn this example both users sue and bob are allowed to run 2 applications and can each use 10 cpu and 250G of memory.\nUsers and or groups not defined are not affected by this limit object."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'- limit: "example entry"\n  maxapplications: 2\n  maxresources:\n  cpu: 10\n  memory: 250G\n  users:\n    - sue\n    - bob\n'})}),"\n",(0,r.jsx)(n.p,{children:"In the case that limits are configured at multiple levels in the hierarchy a fixed order of enforcement is used.\nLike with queue quotas, checks start at the leaf queue and work their way up the hierarchy finishing at the root level.\nFor the limit configuration processing the same needs to be implemented and the config should be rejected if it does not comply.\nAny limit set at any level below the root must always be smaller or equal to the root limit."}),"\n",(0,r.jsx)(n.p,{children:"The checks for the limit configuration must be part of the generic configuration checks currently performed as part of the loading of the configuration.\nWe cannot allow the configuration to be accepted at the queue level and later be denied at the limit level checks. A change is all or nothing, we cannot apply partial changes. Configuration checks must be made without impacting the scheduling cycles. After the change has passed the configuration check the changed configuration must then be applied in a single action."}),"\n",(0,r.jsx)(n.h3,{id:"wildcard-interpretation",children:"Wildcard interpretation"}),"\n",(0,r.jsx)(n.p,{children:"Wildcard can only be used as the only entry in the limit object according to the documentation.\nThere can be multiple limit objects in the overall limits for a queue.\nAs part of this design the interpretation of the wildcard needs to be defined.\nWildcards interpretation is related to the ordering of the limit objects in the overall limits object.\nThe usage and interpretation will be different for users and groups."}),"\n",(0,r.jsx)(n.p,{children:"In general terms: allowing a wildcard in the user or group list only as part of the last entry of the limits list.\nAfter the wildcard has been added for either the user or group list we do not allow a user or group list with a non wildcard entry.\nThis is especially important for the group resolution. It does allow specifying a user and group wildcard with different limits set.\nIn all cases, there will only be a match using the wildcard if none of the earlier limit entries match."}),"\n",(0,r.jsx)(n.h4,{id:"user",children:"User"}),"\n",(0,r.jsx)(n.p,{children:"Users that are specified as part of a limit will be assigned that specific limit.\nIf a limit with a wildcard is specified all users that are not already assigned a limit will be assigned the wildcard limit.\nFor the user entry the wildcard sets a default quota for every user on that queue. Overridden by the named user entries."}),"\n",(0,r.jsx)(n.p,{children:"Specifying a single limit for users using the wildcard is allowed. There is no requirement to have a wildcard entry."}),"\n",(0,r.jsx)(n.h4,{id:"group",children:"Group"}),"\n",(0,r.jsx)(n.p,{children:"For groups the interpretation is slightly more complex.\nAs explained as part of the tracking documentation the group that the usage is tracked against must match the membership of the user.\nA wildcard group matches any group."}),"\n",(0,r.jsx)(n.p,{children:"Specifying a wildcard for the group limit sets a cumulative limit for all users in that queue.\nIf there is no specific group mentioned the wildcard group limit would thus be the same as the queue limit.\nFor that reason we do not allow specifying only one group limit that is using the wildcard.\nThere must be at least one limit with a group name defined."}),"\n",(0,r.jsx)(n.p,{children:"The combination of one or more named group limits with a wildcard group limit is allowed.\nThere is no requirement to have a wildcard entry."}),"\n",(0,r.jsxs)(n.p,{children:["The hierarchy is considered bottom up, starting from the leaf up to the root.\nThe first group that is specified in the queue hierarchy for limiting usage that matches a group in the ",(0,r.jsx)(n.em,{children:"UserGroup"})," object is selected for that application.\nThat definition has an impact on the wildcard interpretation and the wildcard has an impact on the group selection.\nThe wildcard will indirectly affect group quotas set for a specific group higher up in the hierarchy.\nThis point needs clear documentation as part of the group selection algorithm and its side effects."]}),"\n",(0,r.jsx)(n.h3,{id:"example-configuration",children:"Example configuration"}),"\n",(0,r.jsx)(n.p,{children:"An example of a set of limits. A mixture of a user and multiple groups each with a limit.\nFollowed by the catch-all for both users and groups with separate resource limits."}),"\n",(0,r.jsx)(n.p,{children:"In the example below all users, except the user \u201csue\u201d have the same limit set. Members of the group \u201cdevelopment\u201d and the group \u201ctest\u201d both have the same limit set. All other users who are not a member of the group \u201cdevelopment\u201d or \u201ctest\u201d are counted towards the cumulative group limit."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'limits:\n- limit: "specific user"\n  users:\n  - "sue"\n  maxresources: {memory: 25G, vcore: 5}\n- limit: "specific groups"\n  groups:\n  - "development"\n  - "test"\n  maxresources: {memory: 100G, vcore: 10}\n- limit: "user catch all"\n  users:\n  - "*"\n  maxresources: {memory: 10G, vcore: 1}\n- limit: "group catch all"\n  groups:\n  - "*"\n  maxresources: {memory: 50G, vcore: 10}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"syntax-checking",children:"Syntax checking"}),"\n",(0,r.jsx)(n.p,{children:"As part of the already existing queue configuration processing the syntax for the configuration is checked.\nThis check is triggered also for a reload of the file, via the config map, or the REST interface.\nRudimentary limit object checking is implemented as part of the config check."}),"\n",(0,r.jsx)(n.p,{children:"The above described changes around the wildcards and what is allowed is not part of the configuration validation and must be added."}),"\n",(0,r.jsx)(n.h3,{id:"quota-checks",children:"Quota checks"}),"\n",(0,r.jsx)(n.p,{children:"No checks are performed for the limits against the queue quotas.\nThis means that as part of the current checks a limit can be set that is higher than the queue would allow.\nThere is also no hierarchical check in place. This means that a child could set higher limits than is possible based on the parent settings."}),"\n",(0,r.jsx)(n.p,{children:"The configuration validation processing must be extended to the limit objects.\nAt each level in the configuration the resource quota assigned in a limit must be smaller than the maximum allowed at that level for the queue.\nThe queue quota processing already has this builtin and the limit should be checked against the quota."}),"\n",(0,r.jsx)(n.p,{children:"The hierarchical check for limits contains a further complexity.\nA limit at one level might not apply to the same users or groups as the limit at the level below it.\nAn implementation decision will need to be made on how far we want to go with the checks.\nMost, if not all, of the configurations that we do not want to allow do not break the system.\nWe will not be able to check user and group interactions as we do not know the group memberships.\nThe only thing we can check is the same user or group at different levels in the hierarchy."}),"\n",(0,r.jsx)(n.h2,{id:"configuration-updates-and-storage",children:"Configuration updates and storage"}),"\n",(0,r.jsx)(n.p,{children:"The configuration is read as part of the queue configuration.\nThe queue configuration when processed creates, deletes or updates queues from the queue structure as appropriate.\nFor limits linked to users or groups we could pre-generate the named entries but we cannot do that for wildcards.\nTo support wildcards we need to at least store the configuration inside the user group manager code."}),"\n",(0,r.jsx)(n.p,{children:"The definition of the configuration store and the methods that need to be defined will be left as an implementation detail.\nIt must be internal to the user group manager and will be based on the existing configuration objects."}),"\n",(0,r.jsx)(n.p,{children:"The configuration for the limits should be maintained as a separate hierarchy from the scheduling queues and the tracked users and groups.\nThis is required to allow parallel processing of changes and scheduling.\nThis becomes more important with an increased number of users, groups and or queues."}),"\n",(0,r.jsx)(n.p,{children:"Proposal is to pass the full configuration after it has been accepted by the system to an independent update routine for updating the affected objects in the user group manager."}),"\n",(0,r.jsx)(n.h3,{id:"processing-changes-existing-objects",children:"Processing changes existing objects"}),"\n",(0,r.jsx)(n.p,{children:"As configuration changes are based on queue changes a single queue change could trigger multiple tracker object changes."}),"\n",(0,r.jsx)(n.p,{children:"Applying the change from the configuration to an existing object in the structure of the user group manager would be initiated from the queue configuration traversal.\nAll entries inside the limit are then processed.\nA comparison between the existing and new values is required to allow the correct removal of a limit via the updated configuration."}),"\n",(0,r.jsx)(n.p,{children:"If the user object does not exist the update will be a NOP, otherwise the user object will be updated by calling the setter method with the corresponding values."}),"\n",(0,r.jsx)(n.p,{children:"Wildcards will trigger an update of all objects of the specific type, user or group, for the queue they are linked to.\nThese kinds of updates could be expensive which also warrants the case for comparison of the existing values."}),"\n",(0,r.jsx)(n.h3,{id:"queue-tracking",children:"Queue tracking"}),"\n",(0,r.jsx)(n.p,{children:"The queueTracker object is the location where the limits are actually stored. The user and group objects do not contain the settings."}),"\n",(0,r.jsx)(n.p,{children:"The setter methods defined need to transparently handle the update.\nThere should be no difference in behaviour to an update of existing values or setting values that do not exist.\nAs an example: a leaf queue might have a value set for the maximum resources for the user.\nThe new configuration does not have a value set. The setter must clear the existing value.\nSecond example: a limit on a queue is not set for a group.\nThe new configuration does set a limit for the group.\nThis should not result in the queue(s) in the hierarchy to be created.\nIf the queue exists in the hierarchy it will be updated."}),"\n",(0,r.jsx)(n.p,{children:"The following change is made to the queueTracker object.\nNew fields are added to store the limit for the applications and the resources.\nNew methods are added to allow updating these new values from a configuration change."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"package user_group_manager\n\ntype queueTracker struct {\n\tqueueName           string\n\tresourceUsage       *Resource\n\trunningApplications map[string]boolean\n\tmaxResourceUsage    *Resource\n\tmaxRunningApps      unit64\n\n\tchildQueues   map[string]*queueTracker\n}\n\n(qt *queueTracker) setMaxApplications(count uint64, queuePath string)\n(qt *queueTracker) setMaxResources(resource *Resource, queuePath string)\n"})}),"\n",(0,r.jsx)(n.p,{children:"An empty queue path indicates that the change needs to be applied to the current queue object. The queuePath is a fully qualified queue path that starts with \u201croot\u2019."}),"\n",(0,r.jsx)(n.h3,{id:"user-tracking",children:"User tracking"}),"\n",(0,r.jsx)(n.p,{children:"The following change is made to the userTracker object. New methods to allow updating the new limit values stored in the queue objects."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"package user_group_manager\n\n(ut *userTracker) setMaxApplications(count uint64, queuePath string)\n(ut *userTracker) setMaxResources(resource *Resource, queuePath string)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"group-tracking",children:"Group tracking"}),"\n",(0,r.jsx)(n.p,{children:"The following change is made to the groupTracker object. New methods to allow updating the new limit values stored in the queue objects."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"package user_group_manager\n\n(ut *groupTracker) setMaxApplications(count uint64, queuePath string)\n(ut *groupTracker) setMaxResources(resource *Resource, queuePath string)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"new-queue-to-track",children:"New queue to track"}),"\n",(0,r.jsx)(n.p,{children:"As part of the usage tracking new objects are created for the users and or groups that are tracked.\nFor users there is a change required to make sure the correct limits are set.\nThis happens at two points while processing users.\nFirst is during the creation of a new user tracker object.\nSecond is while increasing the usage of a queue which does not exist yet in the hierarchy."}),"\n",(0,r.jsxs)(n.p,{children:["The logic to retrieve the configuration should be built into the creation of the queueTracker objects.\nThe objects are not pre-created. They are only created as part of the ",(0,r.jsx)(n.em,{children:"increaseResource"})," call.\nThe current call does not allow passing in the identity that the queue object is tracking for.\nThat detail is stored in the container object: the userTracker or groupTracker object."]}),"\n",(0,r.jsx)(n.p,{children:"To allow the automatic creation of the queueTracker objects the identity will need to be passed into the increaseResource call of the queueTracker object.\nThe identity and type are required to find the configuration setting and apply the proper limits during the creation of the queueTracker object."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"package user_group_manager\n\ntype trackingType int\n\nconst (\n    none trackingType = iota\n    user\n    group\n)\n\n(qt *queueTracker) increaseResource(queuePath, applicationID, identity string, type trackingType, usage *Resource)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"trackingType"})," specifies one of the two types we can track. An iota is preferred above the usage of a plain integer or boolean (user true or false) kind of setup."]}),"\n",(0,r.jsx)(n.h2,{id:"enforcement-changes",children:"Enforcement changes"}),"\n",(0,r.jsx)(n.h3,{id:"tracker-interface-update",children:"Tracker interface update"}),"\n",(0,r.jsx)(n.p,{children:"The current tracker does not support denying a change. For enforcement of quotas on the usage there has to be a possibility to deny a change.\nThis denial can only occur on an increase of tracked resources. A decrease of the usage, i.e. a removal of an allocation because a pod has finished, can never be denied."}),"\n",(0,r.jsxs)(n.p,{children:["This limits the change to support quota enforcement to a single change in the Tracker interface.\nThe ",(0,r.jsx)(n.em,{children:"IncreaseTrackedResource"})," call returns the state of the increase requested.\nThe return value can either be true or false. The call must only return true if the increase is allowed for both the user and the group tracked for the request.\nIf either of the userTracker or groupTracker quota would be exceeded no change is made to either object and false is returned."]}),"\n",(0,r.jsx)(n.p,{children:"The following change is made to the Tracker interface:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"package user_group_manager\n\ntype Tracker interface {\n    IncreaseTrackedResource(queuePath, applicationID string, usage *Resource, user *security.UserGroup) bool\n    DecreaseTrackedResource(queuePath, applicationID string, usage *Resource, removeApp bool, user *security.UserGroup)\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"The change must be applied to both userTracker and groupTracker.\nUntil the change is applied to both the userTracker and groupTracker, no other updates are allowed of either object.\nThe increase and decrease processing must still follow the same order. Both must update the userTracker and related groupTracker objects in the same order.\nThis was a requirement described in the tracking design and that has not changed."}),"\n",(0,r.jsxs)(n.p,{children:["If the call to ",(0,r.jsx)(n.em,{children:"IncreaseTrackedResource"})," returns false the allocation that triggered the change needs to be abandoned.\nAny change that was made to objects inside the scheduler, like an application, queue or node, must be reversed.\nThe scheduling cycle proceeds as if no allocation was made."]}),"\n",(0,r.jsxs)(n.p,{children:["The error return value for both the ",(0,r.jsx)(n.em,{children:"IncreaseTrackedResource"})," and the ",(0,r.jsx)(n.em,{children:"DecreaseTrackedResource"})," have been removed.\nThe reason is that there is nothing that could be done by the caller to change the outcome or fail any changes if an error was returned.\nBoth functions should still log the error case as it could point to a bug in the code.\nA caller should never have to pass in empty or nil parameters."]}),"\n",(0,r.jsx)(n.h3,{id:"user-tracking-1",children:"User tracking"}),"\n",(0,r.jsx)(n.p,{children:"The following change is made to the userTracker method. There is no change to the structure itself for the enforcement checks:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"package user_group_manager\n\n(ut *userTracker) increaseResource(queuePath, applicationID string, alloc *Resource) bool\n"})}),"\n",(0,r.jsx)(n.h3,{id:"group-tracking-1",children:"Group tracking"}),"\n",(0,r.jsx)(n.p,{children:"The following change is made to the groupTracker method. There is no change to the structure itself for the enforcement checks:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"package user_group_manager\n\n(gt *groupTracker) increaseResource(queuePath, applicationID string, alloc *Resource) bool\n"})}),"\n",(0,r.jsx)(n.h3,{id:"queue-tracking-1",children:"Queue tracking"}),"\n",(0,r.jsx)(n.p,{children:"The following change is made to the queueTracker method. There is no change to the structure itself for the enforcement checks:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"package user_group_manager\n\n(qt *queueTracker) increaseResource(queuePath, applicationID, identity string, type trackingType, usage *Resource) bool\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note that the above change includes the change described earlier which was made to support the automatic creation of the queue objects as part of the increaseResource call."}),"\n",(0,r.jsx)(n.h3,{id:"hierarchy-traversal",children:"Hierarchy traversal"}),"\n",(0,r.jsx)(n.p,{children:"The implementation of the hierarchical check should follow the same pattern as we currently do for the queues.\nThere is one major difference between the queue checks and the user and group checks.\nFor the queues we do not attempt to allocate unless there is unused quota available.\nThis starts at the top of the hierarchy and prevents recursing into the depth of the hierarchy towards the leaf queue."}),"\n",(0,r.jsx)(n.p,{children:"For the users and groups we have already ended up as the leaf of the structure.\nChecks will thus start at the leaf and work their way up to the root of the structure.\nA check will be performed while traversing up the hierarchy. The traversal up the tree will stop if the check fails.\nThe change is applied when unwinding the traversal. This will guarantee a change is only committed when the whole hierarchy can be updated."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"queue hierarchy traversal",src:t(80666).A+"",width:"796",height:"1255"})}),"\n",(0,r.jsx)(n.p,{children:"Diagram of the quota check traversal related to the queue hierarchy."}),"\n",(0,r.jsx)(n.h2,{id:"exposure-of-quota-details",children:"Exposure of quota details"}),"\n",(0,r.jsx)(n.p,{children:"The usage tracking information that is part of the user group manager is exposed for external consumption via REST.\nThe quotas set as part of the queue objects should be exposed in the REST output.\nExposing the quota independent of the usage makes interpretation difficult."}),"\n",(0,r.jsx)(n.p,{children:"The quota set in the queueTracker at the specific entry is the quota that is enforced on that entry.\nFrom a troubleshooting perspective this would be a requirement to allow an administrator to assess state."}),"\n",(0,r.jsxs)(n.p,{children:["Based on the current REST api definition the data exposed in the following two endpoints will be updated to expose the limits:",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"/ws/v1/partition/{partitionName}/usage/users"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"/ws/v1/partition/{partitionName}/usage/groups"})]}),"\n",(0,r.jsx)(n.p,{children:"For both endpoints we expose the full queue hierarchy. As an example below the approximate output for the users endpoint for one user:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "userName": "user1",\n    "groups": {\n      "app1": "tester"\n    },\n    "queues": {\n      "queuename": "root",\n      "resourceUsage": {\n        "memory": 12000000000,\n        "vcore": 12000\n      },\n      "runningApplications": ["app1", "app2"],\n      "children": [\n        {\n          "queuename": "root.default",\n          "resourceUsage": {\n            "memory": 6000000000,\n            "vcore": 6000\n          },\n          "runningApplications": ["app1"],\n          "children": [],\n          "maxApplications": 10,\n          "maxResources": {\n            "memory": 50000000000,\n            "vcore": 100000\n          }\n        },\n        {\n          "queuename": "root.test",\n          "resourceUsage": {\n            "memory": 6000000000,\n            "vcore": 6000\n          },\n          "runningApplications": ["app2"],\n          "children": [],\n          "maxApplications": 0,\n          "maxResources": {}\n        }\n      ],\n      "maxApplications": 10,\n      "maxResources": {}\n    }\n  }\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:"An example below the approximate output for the groups endpoint for one group:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "groupName" : "tester", \n    "users": ["user1"],\n    "queues":\n    {\n      "queuename": "root",\n      "resourceUsage": {\n        "memory": 6000000000,\n        "vcore": 6000\n      },\n      "runningApplications": ["app2"],\n      "children": [\n        {\n          "queuename": "root.test",\n          "resourceUsage": {\n            "memory": 6000000000,\n            "vcore": 6000\n          },\n          "runningApplications": ["app2"],\n          "children": [],\n          "maxApplications": 2,\n          "maxResources": {\n            "vcore": 10000\n          }\n        }\n      ],\n      "maxApplications": 0,\n      "maxResources": {}\n    }\n  }\n]\n'})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},80666:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/quota_check-87e525ada4251569f25f139c9879bf05.png"},1780:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(79474);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);