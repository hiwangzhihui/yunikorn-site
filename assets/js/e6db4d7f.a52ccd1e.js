"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59747],{94833:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var t=s(13274),a=s(1780);const o={id:"interface_message_simplification",title:"Simplifying Interface Messages"},i="Simplifying Interface Messages and Breaking Shim build dependency on Core",l={id:"design/interface_message_simplification",title:"Simplifying Interface Messages",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.2/design/interface_message_simplification.md",sourceDirName:"design",slug:"/design/interface_message_simplification",permalink:"/docs/design/interface_message_simplification",draft:!1,unlisted:!1,tags:[],version:"1.5.2",frontMatter:{id:"interface_message_simplification",title:"Simplifying Interface Messages"},sidebar:"docs",previous:{title:"Historical Usage Tracking",permalink:"/docs/design/historical_usage_tracking"},next:{title:"Scheduler cache removal design",permalink:"/docs/design/cache_removal"}},d={},r=[{value:"Goals",id:"goals",level:2},{value:"Background",id:"background",level:2},{value:"Simplifying Interface Messages",id:"simplifying-interface-messages",level:2},{value:"API Interface Changes",id:"api-interface-changes",level:3},{value:"Interface Changes to replace UpdateRequest",id:"interface-changes-to-replace-updaterequest",level:3},{value:"AllocationRequest",id:"allocationrequest",level:4},{value:"ApplicationRequest",id:"applicationrequest",level:4},{value:"NodeRequest",id:"noderequest",level:4},{value:"Merging Create and Update NodeInfo into Single NodeInfo",id:"merging-create-and-update-nodeinfo-into-single-nodeinfo",level:3},{value:"Event Changes to replace UpdateRequest",id:"event-changes-to-replace-updaterequest",level:3},{value:"Interface Changes to replace UpdateResponse",id:"interface-changes-to-replace-updateresponse",level:3},{value:"AllocationResponse",id:"allocationresponse",level:4},{value:"ApplicationResponse",id:"applicationresponse",level:4},{value:"NodeResponse",id:"noderesponse",level:4},{value:"Event Changes for UpdateResponse",id:"event-changes-for-updateresponse",level:3},{value:"Detailed Flow Analysis",id:"detailed-flow-analysis",level:2},{value:"Add/Delete Allocations",id:"adddelete-allocations",level:3},{value:"Add/Delete Applications",id:"adddelete-applications",level:3},{value:"Add/Delete Nodes",id:"adddelete-nodes",level:3},{value:"Breaking the Shim build dependency on Core",id:"breaking-the-shim-build-dependency-on-core",level:2},{value:"Phase 1",id:"phase-1",level:3},{value:"Phase 2",id:"phase-2",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"simplifying-interface-messages-and-breaking-shim-build-dependency-on-core",children:"Simplifying Interface Messages and Breaking Shim build dependency on Core"}),"\n",(0,t.jsx)(n.h1,{id:"proposal",children:"Proposal"}),"\n",(0,t.jsx)(n.p,{children:"This document describes a) complexity hidden behind existing Interface messages and\nexplains the newly defined SI messages and its dependent changes on Core and Shim.\nb). Breaking Shim build dependency on Core."}),"\n",(0,t.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,t.jsx)(n.p,{children:"The goal is to provide the same functionality before and after the change."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"unit tests before and after the merge must all pass."}),"\n",(0,t.jsx)(n.li,{children:"Smoke tests defined in the core should all pass without major changes definition."}),"\n",(0,t.jsx)(n.li,{children:"End-to-end tests that are part of the shim code must all pass without changes."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsx)(n.p,{children:"The current interface allows us to only send one message between a shim and the core. This provides us with a really simple way of interactions definition."}),"\n",(0,t.jsx)(n.p,{children:"The complexity is however hidden in the message itself. Every message serves multiple purposes and when the message is received the core and shim need to unpack it and process each part separately and for certain parts in a real specific order.\nBecause the message serves a number of purposes it has a large overhead. This might not show up in the code directly as the heavy lifting is done in the generated code. It will show up in the amount of data as a message, even if it does not have all fields, still needs to be encoded in a way that it unpacks correctly on the other side."}),"\n",(0,t.jsx)(n.h2,{id:"simplifying-interface-messages",children:"Simplifying Interface Messages"}),"\n",(0,t.jsx)(n.p,{children:"Proposal is to split the one large message into 3 separate messages - one for each entity:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Allocations"}),"\n",(0,t.jsx)(n.li,{children:"Applications"}),"\n",(0,t.jsx)(n.li,{children:"Nodes"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"api-interface-changes",children:"API Interface Changes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'package api\n\nimport "github.com/apache/incubator-yunikorn-scheduler-interface/lib/go/si"\n\ntype SchedulerAPI interface {\n    // Register a new RM, if it is a reconnect from previous RM, cleanup \n    // all in-memory data and resync with RM. \n    RegisterResourceManager(request *si.RegisterResourceManagerRequest, callback ResourceManagerCallback) (*si.RegisterResourceManagerResponse, error)\n    \n    // Update Allocation status\n    UpdateAllocation(request *si.AllocationRequest) error\n    \n    // Update Application status\n    UpdateApplication(request *si.ApplicationRequest) error\n    \n    // Update Node status\n    UpdateNode(request *si.NodeRequest) error\n    \n    // Notify scheduler to reload configuration and hot-refresh in-memory state based on configuration changes \n    UpdateConfiguration(clusterID string) error\n}\n\n// RM side needs to implement this API\ntype ResourceManagerCallback interface {\n\t\n    //Receive Allocation Update Response\n    UpdateAllocation(response *si.AllocationResponse) error\n    \n    //Receive Application Update Response\n    UpdateApplication(response *si.ApplicationResponse) error\n    \n    //Receive Node update Response\n    UpdateNode(response *si.NodeResponse) error\n    \n    // Run a certain set of predicate functions to determine if a proposed allocation\n    // can be allocated onto a node.\n    Predicates(args *si.PredicatesArgs) error\n    \n    // RM side implements this API when it can provide plugin for reconciling\n    // Re-sync scheduler cache can sync some in-cache (yunikorn-core side) state changes\n    // to scheduler cache (shim-side), such as assumed allocations.\n    ReSyncSchedulerCache(args *si.ReSyncSchedulerCacheArgs) error\n    \n    // This plugin is responsible for transmitting events to the shim side.\n    // Events can be further exposed from the shim.\n    SendEvent(events []*si.EventRecord)\n    \n    // Scheduler core can update container scheduling state to the RM,\n    // the shim side can determine what to do incorporate with the scheduling state\n    // update container scheduling state to the shim side\n    // this might be called even the container scheduling state is unchanged\n    // the shim side cannot assume to only receive updates on state changes\n    // the shim side implementation must be thread safe\n    UpdateContainerSchedulingState(request *si.UpdateContainerSchedulingStateRequest)\n    \n    // Update configuration\n    UpdateConfiguration(args *si.UpdateConfigurationRequest) *si.UpdateConfigurationResponse\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"interface-changes-to-replace-updaterequest",children:"Interface Changes to replace UpdateRequest"}),"\n",(0,t.jsx)(n.p,{children:"UpdateRequest would be divided into below messages:"}),"\n",(0,t.jsx)(n.h4,{id:"allocationrequest",children:"AllocationRequest"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"message AllocationRequest {\n  repeated AllocationAsk asks = 1;\n  AllocationReleasesRequest releases = 2;\n  string rmID = 3;\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"applicationrequest",children:"ApplicationRequest"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"message ApplicationRequest {\n  repeated AddApplicationRequest new = 1;\n  repeated RemoveApplicationRequest remove = 2;\n  string rmID = 3;\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"noderequest",children:"NodeRequest"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"message NodeRequest {\n  repeated NodeInfo nodes = 1;\n  string rmID = 2;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"merging-create-and-update-nodeinfo-into-single-nodeinfo",children:"Merging Create and Update NodeInfo into Single NodeInfo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"message NodeInfo {\n  enum ActionFromRM {\n    CREATE = 0;\n    UPDATE = 1;\n    DRAIN = 2;\n    SCHEDULABLE = 3;\n    DECOMISSION = 4;\n  }\n\n  string nodeID = 1;\n  ActionFromRM action = 2;\n  map<string, string> attributes = 3;\n  Resource schedulableResource = 4;\n  Resource occupiedResource = 5;\n  repeated Allocation existingAllocations = 6;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"event-changes-to-replace-updaterequest",children:"Event Changes to replace UpdateRequest"}),"\n",(0,t.jsx)(n.p,{children:"RMUpdateRequestEvent would be replaced by following events:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"RMUpdateAllocationEvent"}),"\n",(0,t.jsx)(n.li,{children:"RMUpdateApplicationEvent"}),"\n",(0,t.jsx)(n.li,{children:"RMUpdateNodeEvent"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"interface-changes-to-replace-updateresponse",children:"Interface Changes to replace UpdateResponse"}),"\n",(0,t.jsx)(n.p,{children:"UpdateResponse would be divided into below messages:"}),"\n",(0,t.jsx)(n.h4,{id:"allocationresponse",children:"AllocationResponse"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"message AllocationResponse {\n  repeated Allocation new = 1;\n  repeated AllocationRelease released = 2;\n  repeated AllocationAskRelease releasedAsks =3;\n  repeated RejectedAllocationAsk rejected = 4;\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"applicationresponse",children:"ApplicationResponse"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"message ApplicationResponse {\n  repeated RejectedApplication rejected = 1;\n  repeated AcceptedApplication accepted = 2;\n  repeated UpdatedApplication updated = 3;\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"noderesponse",children:"NodeResponse"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"message NodeResponse {\n  repeated RejectedNode rejected = 1;\n  repeated AcceptedNode accepted = 2;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"event-changes-for-updateresponse",children:"Event Changes for UpdateResponse"}),"\n",(0,t.jsx)(n.p,{children:"Scheduler/Context.go from Core already triggers an event for each entity separately and rmproxy.go is the one which handles all these events and packs it under single *si.UpdateResponse and eventually sends to shim through scheduler_callback#RecvUpdateResponse. With the above API interface change, rmproxy.go would use appropriate callback method to send response to shim. With this separate callback approach, each entity response would be handled separately in shim."}),"\n",(0,t.jsx)(n.h2,{id:"detailed-flow-analysis",children:"Detailed Flow Analysis"}),"\n",(0,t.jsx)(n.h3,{id:"adddelete-allocations",children:"Add/Delete Allocations"}),"\n",(0,t.jsx)(n.p,{children:"The RM (shim) sends a simplified AllocationRequest as described above. This message is wrapped by the RM proxy and forwarded to the cache for processing. The RM can request an allocation to be added or removed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1. Shim sends a simplified AllocationRequest to core through SchedulerAPI.UpdateAllocation\n2. RMProxy sends rmevent.RMUpdateAllocationEvent to scheduler \n3. On receiving the above event, scheduler calls context.handleRMUpdateAllocationEvent to do the \n   following:\n   3.1: processAsks\n        2.1.2: Process each request.Asks ask of AllocationRequest request and adds to the application\n        2.1.2: In case of rejection, triggers RMRejectedAllocationAskEvent with \n        all asks which has been rejected\n        2.1.2: On receiving RMRejectedAllocationAskEvent, RMProxy.processUpdatePartitionConfigsEvent \n        process the event, creates a AllocationResponse using RMRejectedAllocationAskEvent \n        attributes and send to shim through UpdateAllocation callback method\n   3.2: processAskReleases\n        2.2.1: Process each request.Releases.AllocationAsksToRelease ask release of AllocationRequest request \n        and removes from the application\n   3.3: processAllocationReleases\n        3.3.1: Process each request.Releases.AllocationRelease allocation release of AllocationRequest \n        request and removes from the application\n        3.3.2: Collect all above exact released allocations and triggers RMReleaseAllocationEvent with all allocations needs to be released\n        3.3.3: On receiving RMReleaseAllocationEvent, RMProxy.processRMReleaseAllocationEvent\n        prcoess the event, creates a AllocationResponse using RMReleaseAllocationEvent\n        attributes and send to shim through UpdateAllocation callback method\n        3.3.4: Collect all above confirmed (placeholder swap & preemption) allocations \n        and send to shim through two ways \n            a). Wraps confirmed allocations as AssumedAllocation \n            and send to shim ReSyncSchedulerCache callback plugin \n            b). Wraps confirmed allocations as Allocation and triggers \n            RMNewAllocationsEvent. On receiving RMNewAllocationsEvent, \n            RMProxy.processAllocationUpdateEvent process the event, creates a \n            AllocationResponse using RMNewAllocationsEvent attributes and send to shim \n            through UpdateAllocation callback method\n"})}),"\n",(0,t.jsx)(n.h3,{id:"adddelete-applications",children:"Add/Delete Applications"}),"\n",(0,t.jsx)(n.p,{children:"The RM (shim) sends a simplified ApplicationRequest as described above. This message is wrapped by the RM proxy and forwarded to the cache for processing. The RM can request an application to be added or removed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1. Shim sends a simplified ApplicationRequest to core through SchedulerAPI.UpdateApplication\n2. RMProxy sends rmevent.RMUpdateApplicationEvent to scheduler\n3. On receiving the above event, scheduler calls context.handleRMUpdateApplicationEvent to do the \n   following:\n   3.1: Add new apps to the partition. \n        3.1.2: Wraps AcceptedApps and RejectedApps (if any) as part of RMApplicationUpdateEvent \n        and fires the same\n        3.1.2: On receiving RMApplicationUpdateEvent, RMProxy.processApplicationUpdateEvent \n        process the event, creates a ApplicationResponse using RMApplicationUpdateEvent \n        attributes and send to shim through UpdateApplication callback method\n   3.2 Remove apps from the partition.\n        3.2.1: Collect all allocations belongs to the removed app and triggers \n        RMReleaseAllocationEvent with all allocations needs to be released\n        3.2.2: On receiving RMReleaseAllocationEvent, RMProxy.processRMReleaseAllocationEvent\n        prcoess the event, creates a AllocationResponse using RMReleaseAllocationEvent\n        attributes and send to shim through UpdateAllocation callback method\n"})}),"\n",(0,t.jsx)(n.h3,{id:"adddelete-nodes",children:"Add/Delete Nodes"}),"\n",(0,t.jsx)(n.p,{children:"The RM (shim) sends a simplified NodeRequest as described above. This message is wrapped by the RM proxy and forwarded to the cache for processing. The RM can request an node to be added or removed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1. Shim sends a simplified NodeRequest to core through SchedulerAPI.UpdateNode\n2. RMProxy sends rmevent.RMUpdateNodeEvent to scheduler\n3. On receiving the above event, scheduler calls context.handleRMUpdateNodeEvent to do the \n   following:\n   3.1: Add new node to the partition. \n        3.1.2: Wraps AcceptedNodes and RejectedNodes (if any) as part of RMNodeUpdateEvent \n        and fires the same\n        3.1.2: On receiving RMNodeUpdateEvent, RMProxy.processRMNodeUpdateEvent \n        process the event, creates a NodeResponse using RMNodeUpdateEvent \n        attributes and send to shim through UpdateNode callback method\n   3.2: Update node\n        3.2.1 Update the partition resource\n   3.3: Drain node\n        3.3.1 Ensures node is not schedulable\n   3.4: Decommissioning (Remove) node from the partition.\n        3.4.1: Ensures node is not schedulable\n        3.4.2: Collect all above exact released allocations from that node and triggers \n        RMReleaseAllocationEvent with all allocations needs to be released\n        3.4.3: On receiving RMReleaseAllocationEvent, \n        RMProxy.processRMReleaseAllocationEvent process the event, creates a \n        AllocationResponse using RMReleaseAllocationEvent attributes and \n        send to shim through UpdateAllocation callback method\n        3.4.4: Collect all above confirmed (placeholder swap & preemption) from that node \n        allocations and send to shim through two ways \n            a). Wraps confirmed allocations as AssumedAllocation and send to shim \n            through ReSyncSchedulerCache callback plugin \n            b). Wraps confirmed allocations as Allocation and triggers RMNewAllocationsEvent. \n            On receiving RMNewAllocationsEvent, RMProxy.processAllocationUpdateEvent \n            process the event, creates a AllocationResponse using RMNewAllocationsEvent \n            attributes and send to shim through UpdateAllocation callback method\n"})}),"\n",(0,t.jsx)(n.h2,{id:"breaking-the-shim-build-dependency-on-core",children:"Breaking the Shim build dependency on Core"}),"\n",(0,t.jsx)(n.p,{children:"Planned for different phases."}),"\n",(0,t.jsx)(n.h3,{id:"phase-1",children:"Phase 1"}),"\n",(0,t.jsx)(n.p,{children:"Moved all plugins from core to appropriate place in SI under ResourceManagerCallback,\na single common interface."}),"\n",(0,t.jsx)(n.h3,{id:"phase-2",children:"Phase 2"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer ",(0,t.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-930",children:"https://issues.apache.org/jira/browse/YUNIKORN-930"})," for more details"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1780:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(79474);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);