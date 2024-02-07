"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80838],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>m});var i=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return t?i.createElement(m,o(o({ref:n},c),{},{components:t})):i.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(45072),r=(t(11504),t(95788));const a={id:"k8shim",title:"Kubernetes Shim Design"},o=void 0,l={unversionedId:"design/k8shim",id:"version-0.11.0/design/k8shim",title:"Kubernetes Shim Design",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/design/k8shim.md",sourceDirName:"design",slug:"/design/k8shim",permalink:"/zh-cn/docs/0.11.0/design/k8shim",draft:!1,tags:[],version:"0.11.0",frontMatter:{id:"k8shim",title:"Kubernetes Shim Design"},sidebar:"version-0.11.0/docs",previous:{title:"Scheduler cache removal design",permalink:"/zh-cn/docs/0.11.0/design/cache_removal"},next:{title:"Cross Queue Preemption",permalink:"/zh-cn/docs/0.11.0/design/cross_queue_preemption"}},s={},u=[{value:"The Kubernetes shim",id:"the-kubernetes-shim",level:2},{value:"The admission controller",id:"the-admission-controller",level:2},{value:"Admission controller deployment",id:"admission-controller-deployment",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,i.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Github repo: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim"},"https://github.com/apache/incubator-yunikorn-k8shim")),(0,r.yg)("p",null,"Please read the ",(0,r.yg)("a",{parentName:"p",href:"/zh-cn/docs/0.11.0/design/architecture"},"architecture")," doc before reading this one, you will need to understand\nthe 3 layer design of YuniKorn before getting to understand what is the Kubernetes shim."),(0,r.yg)("h2",{id:"the-kubernetes-shim"},"The Kubernetes shim"),(0,r.yg)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the scheduler-interface."),(0,r.yg)("h2",{id:"the-admission-controller"},"The admission controller"),(0,r.yg)("p",null,"The admission controller runs in a separate pod, it runs a\n",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook"},"mutation webhook"),"\nand a ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"},"validation webhook"),", where:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"mutation webhook")," mutates pod spec by:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"adding ",(0,r.yg)("inlineCode",{parentName:"li"},"schedulerName: yunikorn"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"by explicitly specifying the scheduler name, the pod will be scheduled by YuniKorn scheduler"))),(0,r.yg)("li",{parentName:"ul"},"adding ",(0,r.yg)("inlineCode",{parentName:"li"},"applicationId")," label",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"when a label ",(0,r.yg)("inlineCode",{parentName:"li"},"applicationId")," exists, reuse the given applicationId"),(0,r.yg)("li",{parentName:"ul"},"when a label ",(0,r.yg)("inlineCode",{parentName:"li"},"spark-app-selector")," exists, reuse the given spark app ID"),(0,r.yg)("li",{parentName:"ul"},"otherwise, assign a generated application ID for this pod, using convention: ",(0,r.yg)("inlineCode",{parentName:"li"},"yunikorn-<namespace>-autogen"),". this is unique per namespace. "))),(0,r.yg)("li",{parentName:"ul"},"adding ",(0,r.yg)("inlineCode",{parentName:"li"},"queue")," label",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"when a label ",(0,r.yg)("inlineCode",{parentName:"li"},"queue")," exists, reuse the given queue name. Note, if placement rule is enabled, values set in the label is ignored"),(0,r.yg)("li",{parentName:"ul"},"otherwise, adds ",(0,r.yg)("inlineCode",{parentName:"li"},"queue: root.default")))))),(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"validation webhook")," validates the configuration set in the configmap",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"this is used to prevent writing malformed configuration into the configmap"),(0,r.yg)("li",{parentName:"ul"},"the validation webhook calls scheduler ",(0,r.yg)("a",{parentName:"li",href:"/zh-cn/docs/0.11.0/api/scheduler#configuration-validation"},"validation REST API")," to validate configmap updates")))),(0,r.yg)("h3",{id:"admission-controller-deployment"},"Admission controller deployment"),(0,r.yg)("p",null,"Currently, the deployment of the admission-controller is done as a ",(0,r.yg)("inlineCode",{parentName:"p"},"post-start")," hook in the scheduler deployment, similarly, the\nuninstall is done as a ",(0,r.yg)("inlineCode",{parentName:"p"},"pre-stop")," hook. See the related code ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-release/blob/56e580af24ed3433e7d73d9ea556b19ad7b74337/helm-charts/yunikorn/templates/deployment.yaml#L80-L85"},"here"),".\nDuring the installation, it is expected to always co-locate the admission controller with the scheduler pod, this is done\nby adding the pod-affinity in the admission-controller pod, like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'podAffinity:\n  requiredDuringSchedulingIgnoredDuringExecution:\n    - labelSelector:\n      matchExpressions:\n      - key: component\n        operator: In\n        values:\n        - yunikorn-scheduler\n      topologyKey: "kubernetes.io/hostname"\n')),(0,r.yg)("p",null,"it also tolerates all the taints in case the scheduler pod has some toleration set."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'tolerations:\n- operator: "Exists"\n')))}d.isMDXComponent=!0}}]);