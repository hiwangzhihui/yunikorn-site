"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9332],{39455:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(13274),n=t(1780);const s={id:"simple_preemptor",title:"DaemonSet Scheduling using Simple Preemptor"},r="Design & Implementation of Preemption for DaemonSet Pods using Simple Preemptor",a={id:"design/simple_preemptor",title:"DaemonSet Scheduling using Simple Preemptor",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.2/design/simple_preemptor.md",sourceDirName:"design",slug:"/design/simple_preemptor",permalink:"/docs/1.5.2/design/simple_preemptor",draft:!1,unlisted:!1,tags:[],version:"1.5.2",frontMatter:{id:"simple_preemptor",title:"DaemonSet Scheduling using Simple Preemptor"},sidebar:"docs",previous:{title:"Preemption",permalink:"/docs/1.5.2/design/preemption"},next:{title:"Generic Resource Types in Namespace Quota",permalink:"/docs/1.5.2/design/generic_resource"}},d={},l=[{value:"When to start preemption?",id:"when-to-start-preemption",level:2},{value:"How to do preemption?",id:"how-to-do-preemption",level:2},{value:"Steps in trigger_preempt_workflow() go routine:",id:"steps-in-trigger_preempt_workflow-go-routine",level:3},{value:"Reservation age check (1)",id:"reservation-age-check-1",level:5},{value:"Get allocations from specific required Node (2)",id:"get-allocations-from-specific-required-node-2",level:5},{value:"Pre-filter pods to choose Victims/Candidates suited for Preemption (3)",id:"pre-filter-pods-to-choose-victimscandidates-suited-for-preemption-3",level:5},{value:"DaemonSet Pods",id:"daemonset-pods",level:6},{value:"Ordering Victim pods (4)",id:"ordering-victim-pods-4",level:5},{value:"Pods classification",id:"pods-classification",level:6},{value:"Sorting Pods",id:"sorting-pods",level:6},{value:"Victim pods selection strategy (5)",id:"victim-pods-selection-strategy-5",level:4},{value:"1. Single Victim Pod",id:"1-single-victim-pod",level:5},{value:"2. Multiple Victim Pods",id:"2-multiple-victim-pods",level:5},{value:"Communicate the Pod Preemption to Shim (6)",id:"communicate-the-pod-preemption-to-shim-6",level:4},{value:"What happens after Preemption?",id:"what-happens-after-preemption",level:3}];function p(e){const o={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",img:"img",li:"li",ol:"ol",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"design--implementation-of-preemption-for-daemonset-pods-using-simple-preemptor",children:"Design & Implementation of Preemption for DaemonSet Pods using Simple Preemptor"}),"\n",(0,i.jsx)(o.p,{children:"The simplistic approach to preempt or free up resources of running applications for DaemonSet pods. A good example of daemonset pod is fluentd logging pod which is very essential for any applicaton pod running in the node for logging."}),"\n",(0,i.jsx)(o.h2,{id:"when-to-start-preemption",children:"When to start preemption?"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-1184",children:"YUNIKORN-1184"})," ensures daemon set pods have been allocated properly if resources are available on the required node, otherwise, reserve the same required node so that it can be picked up to make reservation as reserved allocation (AllocatedReserved) in the next scheduling cycle. However, the whole process of modifying the reservation to reserved allocation depends on how much resources are freed up in the meantime. Duration for freeing up resources by natural course is non deterministic as it depends on the running pods execution on that particular node and it could take slightly longer time as well."]}),"\n",(0,i.jsx)(o.p,{children:"By any chance, before the next run of the regular scheduling cycle (context#schedule() ), resources become available and particularly on that specific required node, then nothing needs to be done. It just moves ahead with the next steps. In case of resource constraints, unlike the regular pod reservation, other nodes cannot be tried by calling application#tryNodesNoReserve() as this demonset pod needs to run only on the specific required node. Instead, we can fork a new go routine (trigger_preempt_workflow() ) to run the workflow steps described below."}),"\n",(0,i.jsx)(o.h2,{id:"how-to-do-preemption",children:"How to do preemption?"}),"\n",(0,i.jsx)(o.p,{children:"K8s does the preemption based on the pod priority. Pods with lower priority would be chosen first and so on. Proposal is not to depend on k8s for Preemption. Instead, Core should take the responsibility of finding out the list of pods that needs to be preempted, making communications to Shim and finally expecting the preempted resources to allocate to the corresponding daemonset automatically as part of the regular scheduling cycle."}),"\n",(0,i.jsx)(o.h3,{id:"steps-in-trigger_preempt_workflow-go-routine",children:"Steps in trigger_preempt_workflow() go routine:"}),"\n",(0,i.jsx)(o.h5,{id:"reservation-age-check-1",children:"Reservation age check (1)"}),"\n",(0,i.jsx)(o.p,{children:"We can introduce a new Reservation age \u201ccreatetime\u201d (can be added to the reservation object) to check against the configured value of preemption_start_delay, a property to define the minimal waiting time to start the preemption process. Once reservation age exceeds this waiting time, the next step would be carried out. Otherwise, the corresponding reservation has to wait and can be processed next time."}),"\n",(0,i.jsx)(o.h5,{id:"get-allocations-from-specific-required-node-2",children:"Get allocations from specific required Node (2)"}),"\n",(0,i.jsx)(o.p,{children:"Get all allocations from the required node of the daemonset pod and go through the below Pre-filter pods step to filter the pods not suited for a preemption."}),"\n",(0,i.jsx)(o.h5,{id:"pre-filter-pods-to-choose-victimscandidates-suited-for-preemption-3",children:"Pre-filter pods to choose Victims/Candidates suited for Preemption (3)"}),"\n",(0,i.jsx)(o.p,{children:"Core should filter the pods based on the following criteria:"}),"\n",(0,i.jsx)(o.h6,{id:"daemonset-pods",children:"DaemonSet Pods"}),"\n",(0,i.jsx)(o.p,{children:"All Daemonset pods should be filtered out completely irrespective of priority settings. Depending on the \u201crequiredNode\u201d value of pod spec, these pods can be filtered out and cannot be taken forward for the remaining process."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"simple_preemptor",src:t(94474).A+"",width:"1024",height:"768"})}),"\n",(0,i.jsx)(o.h5,{id:"ordering-victim-pods-4",children:"Ordering Victim pods (4)"}),"\n",(0,i.jsx)(o.h6,{id:"pods-classification",children:"Pods classification"}),"\n",(0,i.jsx)(o.p,{children:"Once pods has been filtered out, need to classify the pods based on its types:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"Regular/Normal Pods (RP)"}),"\n",(0,i.jsx)(o.li,{children:"Driver/Owner Pods (DP)"}),"\n",(0,i.jsx)(o.li,{children:"Preemption Opt out Pods (OP)"}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"This classification ensures different treatment for each type of pod so that victims can be chosen among these pods in the same order. Please refer to the above diagram. It shows the 2-Dimensional array (NOTE: \u201cArray\u201d has been used only for documentation purposes, need to finalize the appropriate data structure) with each sub array holding pods of the same type. 1st sub array has RP\u2019s, 2nd sub array has DP\u2019s, 3rd sub array has OP\u2019s and goes on."}),"\n",(0,i.jsx)(o.p,{children:"Regular/Normal Pods (RP)"}),"\n",(0,i.jsx)(o.p,{children:"The regular/normal pods should be gathered and placed in the 1st sub array as these pods are given first preference for choosing the victims. In general, preempting these pods have very little impact when compared to other types/classes of pods. Hence, keeping these pods in the first subarray is the right choice"}),"\n",(0,i.jsx)(o.p,{children:"Application Owner (DP)"}),"\n",(0,i.jsx)(o.p,{children:"Pod acting as owner/master for other pods in the same application should be placed in the 2nd sub array because preempting those kinds of pods has a major impact when compared to Regular pods. We can select these pods by checking whether any owner reference exists between this pod and other pods. This will help prevent scenarios such as a driver pod being evicted at a very early stage when other alternatives are available for choosing the victim."}),"\n",(0,i.jsx)(o.p,{children:"Preemption Opt out (OP)"}),"\n",(0,i.jsx)(o.p,{children:"Pods can be allowed to run with the Preempt opt out option. So, Pods marked with opt out should be placed in the 3rd sub array and can be used to choose victims as a last option. For now, we can use a label such as yunikorn.apache.org/allow-preemption: false for detecting those pods."}),"\n",(0,i.jsx)(o.p,{children:"As and when we want to introduce a new class/type of Pods, a new sub array would be created for the same and would be placed in the main array based on its significance."}),"\n",(0,i.jsx)(o.h6,{id:"sorting-pods",children:"Sorting Pods"}),"\n",(0,i.jsx)(o.p,{children:"Each sub array should be sorted based on the multiple criteria:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"Priority"}),"\n",(0,i.jsx)(o.li,{children:"Age"}),"\n",(0,i.jsx)(o.li,{children:"Resource"}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"Each sub array would be sorted priority wise, age wise and finally resource wise. The 1st sub array carrying Regular Pods has 4 pods of priority 1 and 2 pods of Priority 2. Among the 4 pods of the same priority, 3 pods are of the same age as well. Hence, again sorting resource wise really adds value and sorts them in the above shown order. Please refer to \u201czone\u201d."}),"\n",(0,i.jsx)(o.h4,{id:"victim-pods-selection-strategy-5",children:"Victim pods selection strategy (5)"}),"\n",(0,i.jsx)(o.p,{children:"Introduce a new configuration, preemption_victim_poselection_strategy with different options (single, multiple etc) but later options act as fallback to earlier one. Defining an order for these options should be possible and upto the Administrator to place the options in an order he/she desires. Depending on the values, the whole selection strategy mechanism can decide whether a \u201cfallback\u201d approach among these options should be followed or not. Depending on the value, the selection strategy process would continue with the next option only if no selection has been made with the earlier option or stop only with the first option even if no selection has been made."}),"\n",(0,i.jsx)(o.h5,{id:"1-single-victim-pod",children:"1. Single Victim Pod"}),"\n",(0,i.jsx)(o.p,{children:"Single Victim Pod, but resource deviation between victim pod and daemonset pod is not beyond configurable percentage. Configuring deviation with lower percentage (for example, 5% or 10%) helps prevent evicting victim pods already running with higher resource requirements. If there are many single victims found within the defined deviation %, then selection starts based on deviation % ascending order as intent is to choose the victim as close as possible to the daemonset pod resource requirements."}),"\n",(0,i.jsx)(o.h5,{id:"2-multiple-victim-pods",children:"2. Multiple Victim Pods"}),"\n",(0,i.jsx)(o.p,{children:"Multiple Victim Pods, but no. of victim pods not more than configured value. This selection strategy helps to choose more than one victim, starts with the victim (resource wise descending order) and goes upto to a stage where total resource of victims meets the daemonset resource requirements but ensuring total count of victim pods not exceeding configured value."}),"\n",(0,i.jsx)(o.p,{children:"New config: preemption_victim_pods_selection_strategy\nPossible values are single,multiple (default) or multiple,single or single or multiple"}),"\n",(0,i.jsx)(o.p,{children:"In case of more than one value (for ex. single,multiple), fallback would be followed as described above."}),"\n",(0,i.jsx)(o.h4,{id:"communicate-the-pod-preemption-to-shim-6",children:"Communicate the Pod Preemption to Shim (6)"}),"\n",(0,i.jsx)(o.p,{children:"Once the list of pods has been finalized for preemption, Core can make a call to Shim for termination using notifyRMAllocationReleased (with type as TerminationType_PREEMPTED_BY_SCHEDULER). Shim can process the request as usual by making a call to K8s to delete the pod and subsequently call failTaskPodWithReasonAndMsg to notify the pod with reasons."}),"\n",(0,i.jsx)(o.h3,{id:"what-happens-after-preemption",children:"What happens after Preemption?"}),"\n",(0,i.jsx)(o.p,{children:"Shim makes a call to K8s to delete the pod. Once k8s delete the pod, shim gets a notification from k8 and passes the information to core. This flow happens for any pod deletion and exists even today. So, even for preempted resources, we can leave it upto the regular scheduling cycle and Core-Shim communications to allocate these freed up preempted resources to the daemonset pod as node has been already reserved much earlier before the above described whole preemption workflow has begun."})]})}function c(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94474:(e,o,t)=>{t.d(o,{A:()=>i});const i=t.p+"assets/images/simple_preemptor-96e222cf57c1a7731592f0547e71eafd.png"},1780:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>a});var i=t(79474);const n={},s=i.createContext(n);function r(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);