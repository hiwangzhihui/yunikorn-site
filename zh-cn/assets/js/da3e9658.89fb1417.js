"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82896],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>g});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39888:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(45072),a=(t(11504),t(95788));const o={id:"design",title:"Design"},i=void 0,l={unversionedId:"design/design",id:"version-0.8.0/design/design",title:"Design",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/design/design.md",sourceDirName:"design",slug:"/design/",permalink:"/zh-cn/docs/0.8.0/design/",draft:!1,tags:[],version:"0.8.0",frontMatter:{id:"design",title:"Design"},sidebar:"version-0.8.0/docs",previous:{title:"Profiling",permalink:"/zh-cn/docs/0.8.0/performance/profiling"},next:{title:"Cross Queue Preemption",permalink:"/zh-cn/docs/0.8.0/design/cross_queue_preemption"}},c={},s=[{value:"Overall",id:"overall",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Components:",id:"components",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Configurations &amp; Semantics",id:"configurations--semantics",level:2},{value:"Flow of events",id:"flow-of-events",level:2}],p={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"design-of-yunikorn-scheduler"},"Design of YuniKorn scheduler"),(0,a.yg)("h2",{id:"overall"},"Overall"),(0,a.yg)("h2",{id:"architecture"},"Architecture"),(0,a.yg)("h3",{id:"components"},"Components:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Scheduler API Server"),":"),(0,a.yg)("p",null,"Responsible for communication between RM and Scheduler, which implements scheduler-interface GRPC protocol, or just APIs. (For intra-process communication w/o Serde)."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Scheduler Cache"),":"),(0,a.yg)("p",null,"Caches all data related to scheduler state, such as used resources of each queues, nodes, allocations. Relationship between allocations and nodes, etc.\nShould not include temporary data helps with scheduler. For example to-be-preempted allocation candidates. Fair share resource of queues, etc."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Scheduler Cache Event Handler"),":"),(0,a.yg)("p",null,"Handles all events which needs to update scheduler internal state. So all the write operations will be carefully handled."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Admin Service")),(0,a.yg)("p",null,"Handles request from Admin, which can also load configurations from storage and update scheduler policies."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Scheduler and Preemptor")),(0,a.yg)("p",null,"Handles Scheduler's internal state. (Which is not belong to scheduelr cache), such as internal reservations, etc. Scheduler and preemptor will work together, make scheduling or preemption decisions."),(0,a.yg)("p",null,"All allocate/preempt request will be handled by event handler."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"                      GRPC Protocol\n+---------------------------------------------------------------------------+\n                     +--------------------+\n                     |Scheduler API Server|\n +-------------+     +---------+----------+\n |AdminService |               |\n +-------------+               |Write Ops                    +----------------+\n +-------------+               V                            ++Scheduler       |\n |Configurator |      +-------------------+  Allocate       ||   And          |\n +-------------+      |Cache Event Handler+<-----------------|                |\n         +----------\x3e +-------------------+  Preempt        ++Preemptor       |\n          Update Cfg   Handled by policies                   +----------------+\n                               +  (Stateless)\n                        +------v--------+\n                        |Scheduler Cache|\n                        +---------------+\n                +---------------------------------------------+\n                |--------+ +------+ +----------+ +----------+ |\n                ||Node   | |Queue | |Allocation| |Requests  | |\n                |--------+ +------+ +----------+ +----------+ |\n                +---------------------------------------------+\n\n")),(0,a.yg)("h2",{id:"implementation"},"Implementation"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Scheduler needs to do following responsibilities")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"According to resource usages between queues, sort queues, applications, and figure out order of application allocation. (This will be used by preemption as well)."),(0,a.yg)("li",{parentName:"ul"},"It is possible that we cannot satisfy some of the allocation request, we need to skip them and find next request."),(0,a.yg)("li",{parentName:"ul"},"It is possible that some allocation request cannot be satisfied because of resource fragmentation. We need to reserve room for such requests."),(0,a.yg)("li",{parentName:"ul"},"Different nodes may belong to different disjoint partitions, we can make independent scheduler runs"),(0,a.yg)("li",{parentName:"ul"},"Locality is still important for many scenarios, especially for on-prem cases."),(0,a.yg)("li",{parentName:"ul"},"Be able to config and change ordering policies for apps, queues."),(0,a.yg)("li",{parentName:"ul"},"Application can choose their own way to manage sort of nodes.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Preemption:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'It is important to know "who wanna the resource", so we can do preemption based on allocation orders.'),(0,a.yg)("li",{parentName:"ul"},"When do preemption, it is also efficient to trigger allocation op. Think about how to do it."),(0,a.yg)("li",{parentName:"ul"},"Preemption needs to take care about queue resource balancing.")),(0,a.yg)("h2",{id:"configurations--semantics"},"Configurations & Semantics"),(0,a.yg)("p",null,"Example of configuration:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Partition is name space.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Same queues can under different partitions, but enforced to have same hierarchy."),(0,a.yg)("p",{parentName:"li"},"  Good:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"}," partition=x    partition=y\n     a           a\n   /   \\        / \\\n  b     c      b   c\n")),(0,a.yg)("p",{parentName:"li"},'  Good (c in partition y acl=""):'),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"}," partition=x    partition=y\n     a           a\n   /   \\        /\n  b     c      b\n")),(0,a.yg)("p",{parentName:"li"},"  Bad (c in different hierarchy)"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"}," partition=x    partition=y\n     a           a\n   /   \\        /  \\\n  b     c      b    d\n              /\n             c\n")),(0,a.yg)("p",{parentName:"li"},"  Bad (Duplicated c)"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"}," partition=x\n     a\n   /   \\\n  b     c\n /\nc\n\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Different hierarchies can be added"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-scheduler-conf.yaml"},"partitions:\n  - name:  default\n    queues:\n        root:\n          configs:\n            acls:\n          childrens:\n            - a\n            - b\n            - c\n            - ...\n        a:\n          configs:\n            acls:\n            capacity: (capacity is not allowed to set for root)\n            max-capacity: ...\n      mapping-policies:\n        ...\n  - name: partition_a:\n    queues:\n        root:...\n")))),(0,a.yg)("h2",{id:"flow-of-events"},"Flow of events"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"Job Add:\n--------\nRM -> Cache -> Scheduler (Implemented)\n\nJob Remove:\n-----------\nRM -> Scheduler -> Cache (Implemented)\nReleased allocations: (Same as normal release) (Implemented)\nNote: Make sure remove from scheduler first to avoid new allocated created. \n\nScheduling Request Add:\n-----------------------\nRM -> Cache -> Scheduler (Implemented)\nNote: Will check if requested job exists, queue exists, etc.\nWhen any request invalid:\n   Cache -> RM (Implemented)\n   Scheduler -> RM (Implemented)\n\nScheduling Request remove:\n------------------------- \nRM -> Scheduler -> Cache (Implemented)\nNote: Make sure removed from scheduler first to avoid new container allocated\n\nAllocation remove (Preemption) \n-----------------\nScheduler -> Cache -> RM (TODO)\n              (confirmation)\n\nAllocation remove (RM voluntarilly ask)\n---------------------------------------\nRM -> Scheduler -> Cache -> RM. (Implemented)\n                      (confirmation)\n\nNode Add: \n---------\nRM -> Cache -> Scheduler (Implemented)\nNote: Inside Cache, update allocated resources.\nError handling: Reject Node to RM (Implemented)\n\nNode Remove: \n------------\nImplemented in cache side\nRM -> Scheduler -> Cache (TODO)\n\nAllocation Proposal:\n--------------------\nScheduler -> Cache -> RM\nWhen rejected/accepted:\n    Cache -> Scheduler\n    \nInitial: (TODO)\n--------\n1. Admin configured partitions\n2. Cache initializes\n3. Scheduler copies configurations\n\nRelations between Entities \n-------------------------\n1. RM includes one or multiple:\n   - Partitions \n   - Jobs\n   - Nodes \n   - Queues\n   \n2. One queue: \n   - Under one partition\n   - Under one RM.\n   \n3. One job: \n   - Under one queue (Job with same name can under different partitions)\n   - Under one partition\n\nRM registration: (TODO)\n----------------\n1. RM send registration\n2. If RM already registered, remove old one, including everything belong to RM.\n\nRM termination (TODO) \n--------------\nJust remove the old one.\n\nUpdate of queues (TODO) \n------------------------\nAdmin Service -> Cache\n\nAbout partition (TODO) \n-----------------------\nInternal partition need to be normalized, for example, RM specify node with partition = xyz. \nScheduler internally need to normalize it to <rm-id>_xyz\nThis need to be done by RMProxy\n\n")))}u.isMDXComponent=!0}}]);