"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89921],{56595:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(13274),i=s(1780);const r={id:"user_guide",title:"Get Started",slug:"/"},o=void 0,l={id:"get_started/user_guide",title:"Get Started",description:"\x3c!--",source:"@site/versioned_docs/version-1.6.0/get_started/get_started.md",sourceDirName:"get_started",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,tags:[],version:"1.6.0",frontMatter:{id:"user_guide",title:"Get Started",slug:"/"},sidebar:"docs",next:{title:"Features",permalink:"/docs/get_started/core_features"}},a={},c=[{value:"Install",id:"install",level:2},{value:"Uninstall",id:"uninstall",level:2},{value:"Access the Web UI",id:"access-the-web-ui",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Before reading this guide, we assume you either have a Kubernetes cluster, or a local Kubernetes dev environment, e.g MiniKube.\nIt is also assumed that ",(0,t.jsx)(n.code,{children:"kubectl"})," is on your path and properly configured.\nFollow this ",(0,t.jsx)(n.a,{href:"/docs/developer_guide/env_setup",children:"guide"})," on how to setup a local Kubernetes cluster using docker-desktop."]}),"\n",(0,t.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,t.jsx)(n.p,{children:"The easiest way to get started is to use our Helm Charts to deploy YuniKorn on an existing Kubernetes cluster.\nIt is recommended to use Helm 3 or later versions."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:"script",children:"helm repo add yunikorn https://apache.github.io/yunikorn-release\nhelm repo update\nkubectl create namespace yunikorn\nhelm install yunikorn yunikorn/yunikorn --namespace yunikorn\n"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, the helm chart will install the scheduler, web-server and the admission-controller in the cluster.\nWhen ",(0,t.jsx)(n.code,{children:"admission-controller"})," is installed, it simply routes all traffic to YuniKorn. That means the resource scheduling\nis delegated to YuniKorn. You can disable it by setting ",(0,t.jsx)(n.code,{children:"embedAdmissionController"})," flag to ",(0,t.jsx)(n.code,{children:"false"})," during the helm install."]}),"\n",(0,t.jsxs)(n.p,{children:["The YuniKorn scheduler can also be deployed as a Kubernetes scheduler plugin by setting the Helm ",(0,t.jsx)(n.code,{children:"enableSchedulerPlugin"}),"\nflag to ",(0,t.jsx)(n.code,{children:"true"}),". This will deploy an alternate Docker image which contains YuniKorn compiled together with the default\nscheduler. This new mode offers better compatibility with the default Kubernetes scheduler and is suitable for use with the\nadmission controller delegating all scheduling to YuniKorn. Because this mode is still very new, it is not enabled by default."]}),"\n",(0,t.jsxs)(n.p,{children:["If you are unsure which deployment mode you should use, refer to our ",(0,t.jsx)(n.a,{href:"user_guide/deployment_modes",children:"side-by-side comparison"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to use a specific version of YuniKorn, you can add the ",(0,t.jsx)(n.code,{children:"--version"})," flag to the ",(0,t.jsx)(n.code,{children:"helm install"})," command as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:"script",children:"helm install yunikorn yunikorn/yunikorn --namespace yunikorn --version {version}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can check ",(0,t.jsx)(n.a,{href:"https://artifacthub.io/packages/helm/yunikorn/yunikorn",children:"YuniKorn Helm hub page"})," to see the available versions and further configuration options for YuniKorn Helm chart."]}),"\n",(0,t.jsxs)(n.p,{children:["If you don't want to use helm charts, you can find our step-by-step\ntutorial ",(0,t.jsx)(n.a,{href:"/docs/developer_guide/deployment",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"uninstall",children:"Uninstall"}),"\n",(0,t.jsx)(n.p,{children:"Run the following command to uninstall YuniKorn:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:"script",children:"helm uninstall yunikorn --namespace yunikorn\n"})}),"\n",(0,t.jsx)(n.h2,{id:"access-the-web-ui",children:"Access the Web UI"}),"\n",(0,t.jsx)(n.p,{children:"When the scheduler is deployed, the web UI is also deployed in a container.\nPort forwarding for the web interface on the standard port can be turned on via:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl port-forward svc/yunikorn-service 9889:9889 -n yunikorn\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"9889"})," is the default port for web UI.\nOnce this is done, web UI will be available at: ",(0,t.jsx)(n.code,{children:"http://localhost:9889"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UI Screenshots",src:s(54188).A+"",width:"1268",height:"720"})}),"\n",(0,t.jsx)(n.p,{children:"YuniKorn UI provides a centralised view for cluster resource capacity, utilization, and all application info."}),"\n",(0,t.jsx)(n.p,{children:"Besides, YuniKorn also exposes its scheduling metrics via Prometheus."}),"\n",(0,t.jsxs)(n.p,{children:["If you want to monitor the YuniKorn core services by using Prometheus and Grafana, you can find our step-by-step tutorial ",(0,t.jsx)(n.a,{href:"/docs/user_guide/observability/prometheus",children:"here"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},54188:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/yk-ui-screenshots-81352c3abcea41af48f5e23236d667f5.gif"},1780:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(79474);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);