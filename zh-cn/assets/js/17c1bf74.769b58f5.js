"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68224],{95788:(e,n,o)=>{o.d(n,{Iu:()=>c,yg:()=>f});var r=o(11504);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var p=r.createContext({}),s=function(e){var n=r.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(o),g=t,f=u["".concat(p,".").concat(g)]||u[g]||m[g]||a;return o?r.createElement(f,i(i({ref:n},c),{},{components:o})):r.createElement(f,i({ref:n},c))}));function f(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:t,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},97140:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(45072),t=(o(11504),o(95788));const a={id:"profiling",title:"Profiling"},i=void 0,l={unversionedId:"performance/profiling",id:"version-0.8.0/performance/profiling",title:"Profiling",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/performance/profiling.md",sourceDirName:"performance",slug:"/performance/profiling",permalink:"/zh-cn/docs/0.8.0/performance/profiling",draft:!1,tags:[],version:"0.8.0",frontMatter:{id:"profiling",title:"Profiling"},sidebar:"version-0.8.0/docs",previous:{title:"Metrics",permalink:"/zh-cn/docs/0.8.0/performance/metrics"},next:{title:"Design",permalink:"/zh-cn/docs/0.8.0/design/"}},p={},s=[{value:"CPU profiling",id:"cpu-profiling",level:2},{value:"Memory Profiling",id:"memory-profiling",level:2},{value:"Download profiling samples and analyze it locally",id:"download-profiling-samples-and-analyze-it-locally",level:2},{value:"Resources",id:"resources",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...a}=e;return(0,t.yg)(u,(0,r.c)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"profiling-scheduler"},"Profiling Scheduler"),(0,t.yg)("p",null,"Use ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/google/pprof"},"pprof")," to do CPU, Memory profiling can help you understand the runtime status of YuniKorn scheduler. Profiling instruments have been\nadded to YuniKorn rest service, we can easily retrieve and analyze them from HTTP\nendpoints."),(0,t.yg)("h2",{id:"cpu-profiling"},"CPU profiling"),(0,t.yg)("p",null,"At this step, ensure you already have YuniKorn running, it can be either running from\nlocal via a ",(0,t.yg)("inlineCode",{parentName:"p"},"make run")," command, or deployed as a pod running inside of K8s. Then run"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"go tool pprof http://localhost:9080/debug/pprof/profile\n")),(0,t.yg)("p",null,"The profile data will be saved on local file system, once that is done, it enters into\nthe interactive mode. Now you can run profiling commands, such as"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"(pprof) top\nShowing nodes accounting for 14380ms, 44.85% of 32060ms total\nDropped 145 nodes (cum <= 160.30ms)\nShowing top 10 nodes out of 106\n      flat  flat%   sum%        cum   cum%\n    2130ms  6.64%  6.64%     2130ms  6.64%  __tsan_read\n    1950ms  6.08% 12.73%     1950ms  6.08%  __tsan::MetaMap::FreeRange\n    1920ms  5.99% 18.71%     1920ms  5.99%  __tsan::MetaMap::GetAndLock\n    1900ms  5.93% 24.64%     1900ms  5.93%  racecall\n    1290ms  4.02% 28.67%     1290ms  4.02%  __tsan_write\n    1090ms  3.40% 32.06%     3270ms 10.20%  runtime.mallocgc\n    1080ms  3.37% 35.43%     1080ms  3.37%  __tsan_func_enter\n    1020ms  3.18% 38.62%     1120ms  3.49%  runtime.scanobject\n    1010ms  3.15% 41.77%     1010ms  3.15%  runtime.nanotime\n     990ms  3.09% 44.85%      990ms  3.09%  __tsan::DenseSlabAlloc::Refill\n")),(0,t.yg)("p",null,"you can type command such as ",(0,t.yg)("inlineCode",{parentName:"p"},"web")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"gif")," to get a graph that helps you better\nunderstand the overall performance on critical code paths. You can get something\nlike below:"),(0,t.yg)("p",null,(0,t.yg)("img",{alt:"CPU Profiling",src:o(50472).c,width:"1793",height:"938"})),(0,t.yg)("p",null,"Note, in order to use these\noptions, you need to install the virtualization tool ",(0,t.yg)("inlineCode",{parentName:"p"},"graphviz")," first, if you are using Mac, simply run ",(0,t.yg)("inlineCode",{parentName:"p"},"brew install graphviz"),", for more info please refer ",(0,t.yg)("a",{parentName:"p",href:"https://graphviz.gitlab.io/"},"here"),"."),(0,t.yg)("h2",{id:"memory-profiling"},"Memory Profiling"),(0,t.yg)("p",null,"Similarly, you can run"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"go tool pprof http://localhost:9080/debug/pprof/heap\n")),(0,t.yg)("p",null,"this will return a snapshot of current heap which allows us to check memory usage.\nOnce it enters the interactive mode, you can run some useful commands. Such as\ntop can list top memory consumption objects."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"(pprof) top\nShowing nodes accounting for 83.58MB, 98.82% of 84.58MB total\nShowing top 10 nodes out of 86\n      flat  flat%   sum%        cum   cum%\n      32MB 37.84% 37.84%       32MB 37.84%  github.com/apache/incubator-yunikorn-core/pkg/cache.NewClusterInfo\n      16MB 18.92% 56.75%       16MB 18.92%  github.com/apache/incubator-yunikorn-core/pkg/rmproxy.NewRMProxy\n      16MB 18.92% 75.67%       16MB 18.92%  github.com/apache/incubator-yunikorn-core/pkg/scheduler.NewScheduler\n      16MB 18.92% 94.59%       16MB 18.92%  github.com/apache/incubator-yunikorn-k8shim/pkg/dispatcher.init.0.func1\n    1.04MB  1.23% 95.81%     1.04MB  1.23%  k8s.io/apimachinery/pkg/runtime.(*Scheme).AddKnownTypeWithName\n    0.52MB  0.61% 96.43%     0.52MB  0.61%  github.com/gogo/protobuf/proto.RegisterType\n    0.51MB  0.61% 97.04%     0.51MB  0.61%  sync.(*Map).Store\n    0.50MB   0.6% 97.63%     0.50MB   0.6%  regexp.onePassCopy\n    0.50MB  0.59% 98.23%     0.50MB  0.59%  github.com/json-iterator/go.(*Iterator).ReadString\n    0.50MB  0.59% 98.82%     0.50MB  0.59%  text/template/parse.(*Tree).newText\n")),(0,t.yg)("p",null,"you can also run ",(0,t.yg)("inlineCode",{parentName:"p"},"web"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"pdf")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"gif")," command to get the graph for heap."),(0,t.yg)("h2",{id:"download-profiling-samples-and-analyze-it-locally"},"Download profiling samples and analyze it locally"),(0,t.yg)("p",null,"We have included essential go/go-tool binaries in scheduler docker image, you should be able to do some basic profiling\nanalysis inside of the docker container. However, if you want to dig into some issues, it might be better to do the analysis\nlocally. Then you need to copy the samples file to local environment first. The command to copy files is like following:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kubectl cp ${SCHEDULER_POD_NAME}:${SAMPLE_PATH_IN_DOCKER_CONTAINER} ${LOCAL_COPY_PATH}\n")),(0,t.yg)("p",null,"for example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"kubectl cp yunikorn-scheduler-cf8f8dd8-6szh5:/root/pprof/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz /Users/wyang/Downloads/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz\n")),(0,t.yg)("p",null,"once you get the file in your local environment, then you can run the ",(0,t.yg)("inlineCode",{parentName:"p"},"pprof")," command for analysis."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"go tool pprof /Users/wyang/Downloads/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz\n")),(0,t.yg)("h2",{id:"resources"},"Resources"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"pprof Document ",(0,t.yg)("a",{parentName:"li",href:"https://github.com/google/pprof/tree/master/doc"},"https://github.com/google/pprof/tree/master/doc"),".")))}m.isMDXComponent=!0},50472:(e,n,o)=>{o.d(n,{c:()=>r});const r=o.p+"assets/images/cpu_profile-9597863f861872384ae86daabd07f7f9.jpg"}}]);