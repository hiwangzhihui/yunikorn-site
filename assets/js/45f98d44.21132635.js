"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46137],{5737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var o=t(13274),s=t(1780);const i={id:"cache_removal",title:"Scheduler cache removal design"},c="Proposal to combine Cache and Scheduler's implementation in the core",r={id:"design/cache_removal",title:"Scheduler cache removal design",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/design/cache_removal.md",sourceDirName:"design",slug:"/design/cache_removal",permalink:"/docs/0.11.0/design/cache_removal",draft:!1,unlisted:!1,tags:[],version:"0.11.0",frontMatter:{id:"cache_removal",title:"Scheduler cache removal design"},sidebar:"docs",previous:{title:"Scheduler Core Design",permalink:"/docs/0.11.0/design/scheduler_core_design"},next:{title:"Kubernetes Shim Design",permalink:"/docs/0.11.0/design/k8shim"}},d={},a=[{value:"Goals",id:"goals",level:2},{value:"Background",id:"background",level:2},{value:"A further point is the complexity that the two structure brings to the code.\nA distinct set of messages to communicate between the scheduler and the cache.\nA one on one mapping between the scheduler and cache objects shows that the distinction is probably more artificial than required.",id:"a-further-point-is-the-complexity-that-the-two-structure-brings-to-the-codea-distinct-set-of-messages-to-communicate-between-the-scheduler-and-the-cachea-one-on-one-mapping-between-the-scheduler-and-cache-objects-shows-that-the-distinction-is-probably-more-artificial-than-required",level:2},{value:"Structure analysis",id:"structure-analysis",level:2},{value:"Objects",id:"objects",level:3},{value:"Events",id:"events",level:3},{value:"Detailed flow analysis",id:"detailed-flow-analysis",level:2},{value:"Object existing in both cache and scheduler",id:"object-existing-in-both-cache-and-scheduler",level:3},{value:"Operations to add/remove app",id:"operations-to-addremove-app",level:3},{value:"Operations to remove allocations and add or remove asks",id:"operations-to-remove-allocations-and-add-or-remove-asks",level:3},{value:"Operations to add, update or remove nodes",id:"operations-to-add-update-or-remove-nodes",level:3},{value:"Operations to add, update or remove partitions",id:"operations-to-add-update-or-remove-partitions",level:3},{value:"Allocations",id:"allocations",level:3},{value:"Current locking",id:"current-locking",level:2},{value:"How to merge Cache and scheduler objects",id:"how-to-merge-cache-and-scheduler-objects",level:2},{value:"Code merges",id:"code-merges",level:2},{value:"Locking after merge",id:"locking-after-merge",level:2},{value:"Direction of lock",id:"direction-of-lock",level:3},{value:"Mitigations for deadlocks",id:"mitigations-for-deadlocks",level:3}];function l(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"proposal-to-combine-cache-and-schedulers-implementation-in-the-core",children:"Proposal to combine Cache and Scheduler's implementation in the core"}),"\n",(0,o.jsx)(n.p,{children:"This document describes the current state of the scheduler and cache implementation.\nIt describes the changes planned based on the analysis that was done of the current behaviour."}),"\n",(0,o.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,o.jsx)(n.p,{children:"The goal is to provide the same functionality before and after the change."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"unit tests before and after the merge must all pass."}),"\n",(0,o.jsxs)(n.li,{children:["Smoke tests defined in the core should all pass without major changes ",(0,o.jsx)("sup",{id:"s1",children:(0,o.jsx)(n.a,{href:"#f1",children:"definition"})}),"."]}),"\n",(0,o.jsx)(n.li,{children:"End-to-end tests that are part of the shim code must all pass without changes."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,o.jsx)(n.p,{children:"The current Scheduler Core is build up around two major components to store the data: the cache and scheduler objects.\nThe cache objects form the base for most data to be tracked.\nThe Scheduler objects track specific in flight details and are build on top of a cache object."}),"\n",(0,o.jsxs)(n.p,{children:['The communication between the two layers uses a-synchronous events and in some cases direct updates.\nA synchronous update between the scheduler and the cache does mean that there is a short period the scheduler is "out of sync" with the cache.\nThis short period can have an impact on the scheduling decisions.\nOne of which is logged as ',(0,o.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-169",children:"YUNIKORN-169"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"a-further-point-is-the-complexity-that-the-two-structure-brings-to-the-codea-distinct-set-of-messages-to-communicate-between-the-scheduler-and-the-cachea-one-on-one-mapping-between-the-scheduler-and-cache-objects-shows-that-the-distinction-is-probably-more-artificial-than-required",children:"A further point is the complexity that the two structure brings to the code.\nA distinct set of messages to communicate between the scheduler and the cache.\nA one on one mapping between the scheduler and cache objects shows that the distinction is probably more artificial than required."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)("b",{id:"f1"}),"definition: Major changes for smoke tests are defined as changes to the tests that alter use case and thus test flows. Some changes will be needed as checks made could rely on cache objects which have been removed. ",(0,o.jsx)(n.a,{href:"#s1",children:"\u21a9"})]}),"\n",(0,o.jsx)(n.h2,{id:"structure-analysis",children:"Structure analysis"}),"\n",(0,o.jsx)(n.h3,{id:"objects",children:"Objects"}),"\n",(0,o.jsx)(n.p,{children:"The existing objects as per the code analysis.\nThe overlap between the scheduler and the cache objects is shown by showing them at the same line.\nN/A means that there is no equivalent object in either the scheduler or cache."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Cache Object"}),(0,o.jsx)(n.th,{children:"Scheduler Object"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ClusterInfo"}),(0,o.jsx)(n.td,{children:"ClusterSchedulingContext"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"PartitionInfo"}),(0,o.jsx)(n.td,{children:"partitionSchedulingContext"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"AllocationInfo"}),(0,o.jsx)(n.td,{children:"schedulingAllocation"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N/A"}),(0,o.jsx)(n.td,{children:"schedulingAllocationAsk"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N/A"}),(0,o.jsx)(n.td,{children:"reservation"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ApplicationInfo"}),(0,o.jsx)(n.td,{children:"SchedulingApplication"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"applicationState"}),(0,o.jsx)(n.td,{children:"N/A"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"NodeInfo"}),(0,o.jsx)(n.td,{children:"SchedulingNode"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"QueueInfo"}),(0,o.jsx)(n.td,{children:"SchedulingQueue"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"SchedulingObjectState"}),(0,o.jsx)(n.td,{children:"N/A"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"initializer"})," code that is part of the cache does not define a specific object.\nIt contains a mixture of code defined at the package level and code that is part of the ",(0,o.jsx)(n.code,{children:"ClusterInfo"})," object."]}),"\n",(0,o.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,o.jsx)(n.p,{children:"Events defined in the core have multiple origins and destinations.\nSome events are only internal for the core between the cache and scheduler.\nThese events will be removed."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Event"}),(0,o.jsx)(n.th,{children:"Flow"}),(0,o.jsx)(n.th,{children:"Proposal"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"AllocationProposalBundleEvent"}),(0,o.jsx)(n.td,{children:"Scheduler -> Cache"}),(0,o.jsx)(n.td,{children:"Remove"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RejectedNewApplicationEvent"}),(0,o.jsx)(n.td,{children:"Scheduler -> Cache"}),(0,o.jsx)(n.td,{children:"Remove"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ReleaseAllocationsEvent"}),(0,o.jsx)(n.td,{children:"Scheduler -> Cache"}),(0,o.jsx)(n.td,{children:"Remove"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RemoveRMPartitionsEvent"}),(0,o.jsx)(n.td,{children:"Scheduler -> Cache"}),(0,o.jsx)(n.td,{children:"Remove"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RemovedApplicationEvent"}),(0,o.jsx)(n.td,{children:"Scheduler -> Cache"}),(0,o.jsx)(n.td,{children:"Remove"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"SchedulerNodeEvent"}),(0,o.jsx)(n.td,{children:"Cache -> Scheduler"}),(0,o.jsx)(n.td,{children:"Remove"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"SchedulerAllocationUpdatesEvent"}),(0,o.jsx)(n.td,{children:"Cache -> Scheduler"}),(0,o.jsx)(n.td,{children:"Remove"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"SchedulerApplicationsUpdateEvent"}),(0,o.jsx)(n.td,{children:"Cache -> Scheduler"}),(0,o.jsx)(n.td,{children:"Remove"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"SchedulerUpdatePartitionsConfigEvent"}),(0,o.jsx)(n.td,{children:"Cache -> Scheduler"}),(0,o.jsx)(n.td,{children:"Remove"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"SchedulerDeletePartitionsConfigEvent"}),(0,o.jsx)(n.td,{children:"Cache -> Scheduler"}),(0,o.jsx)(n.td,{children:"Remove"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RMApplicationUpdateEvent (add/remove app)"}),(0,o.jsx)(n.td,{children:"Cache/Scheduler -> RM"}),(0,o.jsx)(n.td,{children:"Modify"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RMRejectedAllocationAskEvent"}),(0,o.jsx)(n.td,{children:"Cache/Scheduler -> RM"}),(0,o.jsx)(n.td,{children:"Modify"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RemoveRMPartitionsEvent"}),(0,o.jsx)(n.td,{children:"RM -> Scheduler"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RMUpdateRequestEvent"}),(0,o.jsx)(n.td,{children:"RM -> Cache"}),(0,o.jsx)(n.td,{children:"Modify"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RegisterRMEvent"}),(0,o.jsx)(n.td,{children:"RM -> Cache"}),(0,o.jsx)(n.td,{children:"Modify"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ConfigUpdateRMEvent"}),(0,o.jsx)(n.td,{children:"RM -> Cache"}),(0,o.jsx)(n.td,{children:"Modify"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RMNewAllocationsEvent"}),(0,o.jsx)(n.td,{children:"Cache -> RM"}),(0,o.jsx)(n.td,{children:"Modify"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RMReleaseAllocationEvent"}),(0,o.jsx)(n.td,{children:"Cache -> RM"}),(0,o.jsx)(n.td,{children:"Modify"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RMNodeUpdateEvent"}),(0,o.jsx)(n.td,{children:"Cache -> RM"}),(0,o.jsx)(n.td,{children:"Modify"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Events that are handled by the cache will need to be handled by the core code after the removal of the cache.\nTwo events are handled by the cache and the scheduler."}),"\n",(0,o.jsx)(n.h2,{id:"detailed-flow-analysis",children:"Detailed flow analysis"}),"\n",(0,o.jsx)(n.h3,{id:"object-existing-in-both-cache-and-scheduler",children:"Object existing in both cache and scheduler"}),"\n",(0,o.jsxs)(n.p,{children:["The current design is based on the fact that the cache object is the basis for all data storage.\nEach cache object must have a corresponding scheduler object.\nThe contract in the core around the cache and scheduler objects was simple.\nIf the object exists in both scheduler and cache the object will be added to cache triggering the creation of the corresponding scheduler object.\nRemoving the object is always handled in reverse: first from the scheduler which will trigger the removal from the cache.\nAn example would be the creation of an application triggered by the ",(0,o.jsx)(n.code,{children:"RMUpdateRequestEvent"})," would be processed by the cache.\nCreating a ",(0,o.jsx)(n.code,{children:"SchedulerApplicationsUpdateEvent"})," to create the corresponding application in the scheduler."]}),"\n",(0,o.jsx)(n.p,{children:"When the application and object state were added they were added into the cache objects.\nThe cache objects were considered the data store and thus also contain the state.\nThere were no corresponding state objects in the scheduler.\nMaintaining two states for the same object is not possible."}),"\n",(0,o.jsxs)(n.p,{children:["The other exceptions to that rule are two objects that were considered volatile and scheduler only.\nThe ",(0,o.jsx)(n.code,{children:"schedulingAllocationAsk"})," tracks outstanding requests for an application in the scheduler.\nThe ",(0,o.jsx)(n.code,{children:"reservation"})," tracks a temporary reservation of a node for an application and ask combination."]}),"\n",(0,o.jsx)(n.h3,{id:"operations-to-addremove-app",children:"Operations to add/remove app"}),"\n",(0,o.jsxs)(n.p,{children:["The RM (shim) sends a complex ",(0,o.jsx)(n.code,{children:"UpdateRequest"})," as defined in the scheduler interface.\nThis message is wrapped by the RM proxy and forwarded to the cache for processing.\nThe RM can request an application to be added or removed."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"application add or delete"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"1. RMProxy sends cacheevent.RMUpdateRequestEvent to cache\n2. cluster_info.processApplicationUpdateFromRMUpdate\n   2.1: Add new apps to the partition.\n   2.2: Send removed apps to scheduler (but not remove anything from cache)\n3. scheduler.processApplicationUpdateEvent\n   3.1: Add new apps to scheduler \n        (when fails, send RejectedNewApplicationEvent to cache)\n        No matter if failed or not, send RMApplicationUpdateEvent to RM.\n   3.2: Remove app from scheduler\n        Send RemovedApplicationEvent to cache\n"})}),"\n",(0,o.jsx)(n.h3,{id:"operations-to-remove-allocations-and-add-or-remove-asks",children:"Operations to remove allocations and add or remove asks"}),"\n",(0,o.jsxs)(n.p,{children:["The RM (shim) sends a complex ",(0,o.jsx)(n.code,{children:"UpdateRequest"})," as defined in the scheduler interface.\nThis message is wrapped by the RM proxy and forwarded to the cache for processing.\nThe RM can request an allocation to be removed.\nThe RM can request an ask to be added or removed"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"allocation delete"}),"\nThis describes the allocation delete initiated by the RM only"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"1. RMProxy sends cacheevent.RMUpdateRequestEvent to cache\n2. cluster_info.processNewAndReleaseAllocationRequests\n   2.1: (by-pass): Send to scheduler via event SchedulerAllocationUpdatesEvent\n3. scheduler.processAllocationUpdateEvent \n   3.1: Update ReconcilePlugin\n   3.2: Send confirmation of the releases back to Cache via event ReleaseAllocationsEvent\n4. cluster_info.processAllocationReleases to process the confirmed release\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"ask add"}),"\nIf the ask already exists this add is automatically converted into an update."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"1. RMProxy sends cacheevent.RMUpdateRequestEvent to cache\n2. cluster_info.processNewAndReleaseAllocationRequests\n   2.1: Ask sanity check (such as existence of partition/app), rejections are send back to the RM via RMRejectedAllocationAskEvent\n   2.2: pass checked asks to scheduler via SchedulerAllocationUpdatesEvent\n3. scheduler.processAllocationUpdateEvent\n   3.1: Update scheduling application with the new or updated ask. \n   3.2: rejections are send back to the RM via RMRejectedAllocationAskEvent \n   3.3: accepted asks are not confirmed to RM or cache\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"ask delete"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"1. RMProxy sends cacheevent.RMUpdateRequestEvent to cache\n2. cluster_info.processNewAndReleaseAllocationRequests\n   2.1: (by-pass): Send to scheduler via event SchedulerAllocationUpdatesEvent\n3. scheduler.processAllocationReleaseByAllocationKey\n   3.1: Update scheduling application and remove the ask. \n"})}),"\n",(0,o.jsx)(n.h3,{id:"operations-to-add-update-or-remove-nodes",children:"Operations to add, update or remove nodes"}),"\n",(0,o.jsxs)(n.p,{children:["The RM (shim) sends a complex ",(0,o.jsx)(n.code,{children:"UpdateRequest"})," as defined in the scheduler interface.\nThis message is wrapped by the RM proxy and forwarded to the cache for processing.\nThe RM can request a node to be added, updated or removed."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"node add"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"1. RMProxy sends cacheevent.RMUpdateRequestEvent to cache\n2. cluster_info.processNewSchedulableNodes\n   2.1: node sanity check (such as existence of partition/node)\n   2.2: Add new nodes to the partition.\n   2.3: notify scheduler of new node via SchedulerNodeEvent\n3. notify RM of node additions and rejections via RMNodeUpdateEvent\n   3.1: notify the scheduler of allocations to recover via SchedulerAllocationUpdatesEvent\n4. scheduler.processAllocationUpdateEvent\n   4.1: scheduler creates a new ask based on the Allocation to recover \n   4.2: recover the allocation on the new node using a special process\n   4.3: confirm the allocation in the scheduler, on failure update the cache with a ReleaseAllocationsEvent\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"node update and removal"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"1. RMProxy sends cacheevent.RMUpdateRequestEvent to cache\n2. cluster_info.processNodeActions\n   2.1: node sanity check (such as existence of partition/node)\n   2.2: Node info update (resource change)\n        2.2.1: update node in cache\n        2.2.2: notify scheduler of the node update via SchedulerNodeEvent\n   2.3: Node status update (not removal), update node status in cache only\n   2.4: Node removal\n        2.4.1: update node status and remove node from the cache\n        2.4.2: remove alloations and inform RM via RMReleaseAllocationEvent\n        2.4.3: notify scheduler of the node removal via SchedulerNodeEvent\n3. scheduler.processNodeEvent add/remove/update the node  \n"})}),"\n",(0,o.jsx)(n.h3,{id:"operations-to-add-update-or-remove-partitions",children:"Operations to add, update or remove partitions"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Add RM"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"1. RMProxy sends commonevents.RemoveRMPartitionsEvent\n   if RM is already registered\n   1.1: scheduler.removePartitionsBelongToRM\n        1.1.1: scheduler cleans up\n        1.1.2: scheduler sends commonevents.RemoveRMPartitionsEvent\n   1.2: cluster_info.processRemoveRMPartitionsEvent\n        1.2.1: cache cleans up\n2. RMProxy sends commonevents.RegisterRMEvent\n3. cluster_info.processRMRegistrationEvent\n   2.1: cache update internal partitions/queues accordingly.\n   2.2: cache sends to scheduler SchedulerUpdatePartitionsConfigEvent.\n3. scheduler.processUpdatePartitionConfigsEvent\n   3.1: Scheduler update partition/queue info accordingly.\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Update and Remove partition"}),"\nTriggered by a configuration file update."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"1. RMProxy sends commonevents.ConfigUpdateRMEvent\n2. cluster_info.processRMConfigUpdateEvent\n   2.1: cache update internal partitions/queues accordingly.\n   2.2: cache sends to scheduler SchedulerUpdatePartitionsConfigEvent.\n   2.3: cache marks partitions for deletion (not removed yet).\n   2.4: cache sends to scheduler SchedulerDeletePartitionsConfigEvent\n3. scheduler.processUpdatePartitionConfigsEvent\n   3.1: scheduler updates internal partitions/queues accordingly.\n4. scheduler.processDeletePartitionConfigsEvent\n   4.1: Scheduler set partitionManager.stop = true.\n   4.2: PartitionManager removes queues, applications, nodes async.\n        This is the REAL CLEANUP including the cache\n"})}),"\n",(0,o.jsx)(n.h3,{id:"allocations",children:"Allocations"}),"\n",(0,o.jsx)(n.p,{children:"Allocations are initiated by the scheduling process.\nThe scheduler creates a SchedulingAllocation on the scheduler side which then gets wrapped in an AllocationProposal.\nThe scheduler has checked resources etc already and marked the allocation as inflight.\nThis description picks up at the point the allocation will be confirmed and finalised."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"New allocation"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"1. Scheduler wraps an SchedulingAllocation in an AllocationProposalBundleEvent \n2. cluster_info.processAllocationProposalEvent\n   preemption case: release preempted allocations\n   2.1: release the allocation in the cache\n   2.2: inform the scheduler the allocation is released via SchedulerNodeEvent\n   2.3: inform the RM the allocation is released via RMReleaseAllocationEvent\n   all cases: add the new allocation\n   2.4: add the new allocation to the cache\n   2.5: rejections are send back to the scheduler via SchedulerAllocationUpdatesEvent \n   2.6: inform the scheduler the allocation is added via SchedulerAllocationUpdatesEvent\n   2.7: inform the RM the allocation is added via RMNewAllocationsEvent\n3. scheduler.processAllocationUpdateEvent\n   3.1: confirmations are added to the scheduler and change from inflight to confirmed.\n        On failure of processing a ReleaseAllocationsEvent is send to the cache *again* to clean up.\n        This is part of the issue in [YUNIKORN-169]\n        cluster_info.processAllocationReleases\n   3.2: rejections remove the inflight allocation from the scheduler. \n"})}),"\n",(0,o.jsx)(n.h2,{id:"current-locking",children:"Current locking"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Cluster Lock:"}),(0,o.jsx)(n.br,{}),"\n","A cluster contains one or more Partition objects. A partition is a sub object of Cluster.",(0,o.jsx)(n.br,{}),"\n","Adding or Removing ANY Partition requires a write-lock of the cluster.\nRetrieving any object within the cluster will require iterating over the Partition list and thus a read-lock of the cluster"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Partition Lock:"}),(0,o.jsx)(n.br,{}),"\n","The partition object contains all links to Queue, Application or Node objects.\nAdding or Removing ANY Queue, Application or Node needs a write-lock of the partition.\nRetrieving any object within the partition will require a read-lock of the partition to prevent data races"]}),"\n",(0,o.jsx)(n.p,{children:"Examples of operation needing a write-lock"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Allocation processing after scheduling, will change application, queue and node objects.\nPartition lock is required due to possible updates to reservations."}),"\n",(0,o.jsx)(n.li,{children:"Update of Node Resource\nIt not only affect node's available resource, it also affects the Partition's total allocatable Resource"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example of operations that need a read-lock:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Retrieving any Queue, Application or Node needs a read-lock\nThe object itself is not locked as part of the retrieval"}),"\n",(0,o.jsx)(n.li,{children:"Confirming an allocation after processing in the cache\nThe partition is only locked for reading to allow retrieval of the objects that will be changed.\nThe changes are made on the underlying objects."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Example of operations that do not need any lock:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Scheduling",(0,o.jsx)(n.br,{}),"\n","Locks are taken on the specific objects when needed, no direct updates to the partition until the allocation is confirmed."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Queue lock:"}),(0,o.jsx)(n.br,{}),"\n","A queue can track either applications (leaf type) or other queues (parent type).\nResources are tracked for both types in the same way."]}),"\n",(0,o.jsxs)(n.p,{children:["Adding or removing an Application (leaf type), or a direct child queue (parent type) requires a write-lock of the queue.",(0,o.jsx)(n.br,{}),"\n","Updating tracked resources requires a write-lock.\nChanges are made recursively never locking more than 1 queue at a time.",(0,o.jsx)(n.br,{}),"\n","Updating any configuration property on the queue requires a write-lock.\nRetrieving any configuration value, or tracked resource, application or queue requires a read-lock."]}),"\n",(0,o.jsx)(n.p,{children:"Examples of operation needing a write-lock"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Adding an application to a leaf queue"}),"\n",(0,o.jsx)(n.li,{children:"Updating the reservations"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Examples of operation needing a read-lock"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Retrieving an application from a leaf type queue"}),"\n",(0,o.jsx)(n.li,{children:"Retrieving the pending resources"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Application lock:"}),(0,o.jsx)(n.br,{}),"\n","An application tracks resources of different types, the allocations and outstanding requests.",(0,o.jsx)(n.br,{}),"\n","Updating any tracked resources, allocations or requests requires a write-lock.\nRetrieving any of those values requires a read-lock."]}),"\n",(0,o.jsxs)(n.p,{children:["Scheduling also requires a write-lock of the application.\nDuring scheduling the write-lock is held for the application.\nLocks will be taken on the node or queue that need to be accessed or updated.",(0,o.jsx)(n.br,{}),"\n","Examples of the locks taken on other objects are:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"a read lock to access queue tracked resources"}),"\n",(0,o.jsx)(n.li,{children:"a write-lock to update the in progress allocations on the node"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Examples of operation needing a write-lock"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Adding a new ask"}),"\n",(0,o.jsx)(n.li,{children:"Trying to schedule a pending request"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Examples of operation needing a read-lock"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Retrieving the allocated resources"}),"\n",(0,o.jsx)(n.li,{children:"Retrieving the pending requests"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Node lock:"}),(0,o.jsx)(n.br,{}),"\n","An node tracks resources of different types and allocations.\nUpdating any tracked resources or allocations requires a write-lock.\nRetrieving any of those values requires a read-lock."]}),"\n",(0,o.jsx)(n.p,{children:"Checks run during the allocation phases take locks as required.\nRead-locks when checking write-locks when updating.\nA node is not locked for the whole allocation cycle."}),"\n",(0,o.jsx)(n.p,{children:"Examples of operation needing a write-lock"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Adding a new allocation"}),"\n",(0,o.jsx)(n.li,{children:"updating the node resources"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Examples of operation needing a read-lock"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Retrieving the allocated resources"}),"\n",(0,o.jsx)(n.li,{children:"Retrieving the reservation status"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-merge-cache-and-scheduler-objects",children:"How to merge Cache and scheduler objects"}),"\n",(0,o.jsxs)(n.p,{children:["Since there is no longer the requirement to distinguish the objects in the cache and scheduler the ",(0,o.jsx)(n.code,{children:"scheduling"})," and ",(0,o.jsx)(n.code,{children:"info"})," parts of the name will be dropped."]}),"\n",(0,o.jsx)(n.p,{children:"Overview of the main moves and merges:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"application_info"})," & ",(0,o.jsx)(n.code,{children:"scheduling_application"}),": ",(0,o.jsx)(n.strong,{children:"merge"})," to ",(0,o.jsx)(n.code,{children:"scheduler.object.application"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"allocation_info"})," & ",(0,o.jsx)(n.code,{children:"scheduling_allocation"}),": ",(0,o.jsx)(n.strong,{children:"merge"})," to ",(0,o.jsx)(n.code,{children:"scheduler.object.allocation"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"node_info"})," & ",(0,o.jsx)(n.code,{children:"scheduling_node"}),": ",(0,o.jsx)(n.strong,{children:"merge"})," to ",(0,o.jsx)(n.code,{children:"scheduler.object.node"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"queue_info"})," & ",(0,o.jsx)(n.code,{children:"scheduling_queue"}),": ",(0,o.jsx)(n.strong,{children:"merge"})," to ",(0,o.jsx)(n.code,{children:"scheduler.object.queue"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"partition_info"})," & ",(0,o.jsx)(n.code,{children:"scheduling_partition"}),": ",(0,o.jsx)(n.strong,{children:"merge"})," to ",(0,o.jsx)(n.code,{children:"scheduler.PartitionContext"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"cluster_info"})," & ",(0,o.jsx)(n.code,{children:"scheduling_context"}),": ",(0,o.jsx)(n.strong,{children:"merge"})," to ",(0,o.jsx)(n.code,{children:"scheduler.ClusterContext"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"application_state"}),": ",(0,o.jsx)(n.strong,{children:"move"})," to ",(0,o.jsx)(n.code,{children:"scheduler.object.applicationState"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"object_state"}),": ",(0,o.jsx)(n.strong,{children:"move"})," to ",(0,o.jsx)(n.code,{children:"scheduler.object.objectState"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"initializer"}),": ",(0,o.jsx)(n.strong,{children:"merge"})," into ",(0,o.jsx)(n.code,{children:"scheduler.ClusterContext"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This move and merge of code includes a refactor of the objects into their own package.\nThat thus affects the two scheduler only objects, reservations and schedulingAsk, that are already defined.\nBoth will be moved into the objects package."}),"\n",(0,o.jsx)(n.p,{children:"The top level scheduler package remains for the contexts and scheduling code."}),"\n",(0,o.jsx)(n.h2,{id:"code-merges",children:"Code merges"}),"\n",(0,o.jsx)(n.p,{children:"The first change is the event processing.\nAll RM events will now directly be handled in the scheduler.\nEvent handling will undergo a major change, far more than a simple merge.\nOnly the RM generated events will be left after the merge.\nAs described in the analysis above the scheduler is, in almost all cases, notified of changes from RM events."}),"\n",(0,o.jsx)(n.p,{children:"Broadly speaking there are only three types of changes triggered by the event removal:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"configuration changes: new scheduler code required as the cache handling is not transferable to the scheduler"}),"\n",(0,o.jsx)(n.li,{children:"node, ask and application changes: merge of the cache code into the scheduler"}),"\n",(0,o.jsx)(n.li,{children:"allocation changes: removal of confirmation cycle and simplification of the scheduler code"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Part of the event handling is the processing of the configuration changes.\nAll configuration changes will now update the scheduler objects directly.\nThe way the scheduler works is slightly different from the cache which means the code is not transferable."}),"\n",(0,o.jsx)(n.p,{children:"Nodes and applications are really split between the cache and scheduler.\nAnything that is tracked in the cache object that does not have an equivalent value in the scheduler object will be moved into the scheduler object.\nAll references to scheduler objects will be removed.\nWith the code merges existing scheduler code that calls out directly into the cache objects will return the newly tracked value in the scheduler object.\nThese calls will thus become locked calls in the scheduler."}),"\n",(0,o.jsx)(n.p,{children:"The concept of an in flight allocation will be removed.\nAllocation will be made in the same scheduling iteration without events or creation of a proposal.\nRemoving the need for tracking of allocating resources on the scheduler objects.\nIn flight resource tracking was required to make sure that an allocation while not confirmed by the cache would being taken into account while making scheduling decisions."}),"\n",(0,o.jsxs)(n.p,{children:["The application and object state will be an integrated part of the scheduler object.\nA state change is thus immediate and this should prevent an issue like ",(0,o.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-169",children:"YUNIKORN-169"})," from occuring."]}),"\n",(0,o.jsx)(n.h2,{id:"locking-after-merge",children:"Locking after merge"}),"\n",(0,o.jsx)(n.h3,{id:"direction-of-lock",children:"Direction of lock"}),"\n",(0,o.jsx)(n.p,{children:"It is possible to acquire another lock while holding a lock, but we need to make sure that we do not allow:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Holding A.lock and acquire B's lock."}),"\n",(0,o.jsx)(n.li,{children:"Holding B.lock and acquire B's lock."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The current code in the scheduler takes a lock as late as possible and only for the time period needed.\nSome actions are not locked on the scheduler side just on the cache side as each object has its own lock.\nThis means that a read of a value from the cache would not lock the scheduling object."}),"\n",(0,o.jsx)(n.p,{children:"With the integration of the cache into the scheduler the number of locks will decrease as the number of objects decreases.\nEach equivalent object, cache and scheduler, which used to have their own lock will now have just one.\nAfter the merge of the code is performed one lock will be left.\nLocking will occur more frequently as the number of fields in the scheduler objects has increased."}),"\n",(0,o.jsx)(n.p,{children:"Calls that did not lock the scheduler object before the merge will become locked.\nLock contention could lead to performance degradation.\nThe reduced overhead in objects and event handling can hopefully compensate for this.\nOne point to keep track of is the change in locking behaviour.\nNew behaviour could lead to new deadlock situations when code is simply merged without looking at the order."}),"\n",(0,o.jsx)(n.h3,{id:"mitigations-for-deadlocks",children:"Mitigations for deadlocks"}),"\n",(0,o.jsx)(n.p,{children:"The locking inside the scheduler will be left as is.\nThis means that the main scheduling logic will be taking and releasing locks as required on the objects.\nThere are no long held read-locks or write-locks until the application is locked to schedule it."}),"\n",(0,o.jsx)(n.p,{children:"A major point of attention will need to be that no iterations of objects should be performed while holding on to a lock.\nFor instance during scheduling while iterating over a queue's application we should not lock the queue."}),"\n",(0,o.jsx)(n.p,{children:"Another example would be that event processing in the partition should not lock the partition unneeded.\nThe partition should be locked while retrieving for instance the node that needs updating and release the lock before it tries to lock the node itself."}),"\n",(0,o.jsx)(n.p,{children:"This approach fits in with the current locking approach and will keep the locking changes to a minimum.\nTesting, specifically end-to-end testing, should catch these deadlocks.\nThere are no known tools that could be used to detect or describe lock order."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1780:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(79474);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);