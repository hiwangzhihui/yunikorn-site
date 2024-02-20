"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76120],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),y=a,g=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},83568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const i={id:"user_guide",title:"Get Started",slug:"/"},o=void 0,l={unversionedId:"get_started/user_guide",id:"version-0.10.0/get_started/user_guide",title:"Get Started",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/get_started/get_started.md",sourceDirName:"get_started",slug:"/",permalink:"/docs/0.10.0/",draft:!1,tags:[],version:"0.10.0",frontMatter:{id:"user_guide",title:"Get Started",slug:"/"},sidebar:"version-0.10.0/docs",next:{title:"Features",permalink:"/docs/0.10.0/get_started/core_features"}},s={},u=[{value:"Install",id:"install",level:2},{value:"Uninstall",id:"uninstall",level:2},{value:"Access the Web UI",id:"access-the-web-ui",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.yg)(p,(0,r.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Before reading this guide, we assume you either have a Kubernetes cluster, or a local Kubernetes dev environment, e.g MiniKube.\nIt is also assumed that ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl")," is on your path and properly configured.\nFollow this ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.10.0/developer_guide/env_setup"},"guide")," on how to setup a local Kubernetes cluster using docker-desktop."),(0,a.yg)("h2",{id:"install"},"Install"),(0,a.yg)("p",null,"The easiest way to get started is to use our Helm Charts to deploy YuniKorn on an existing Kubernetes cluster.\nIt is recommended to use Helm 3 or later versions."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add yunikorn  https://apache.github.io/incubator-yunikorn-release\nhelm repo update\nkubectl create namespace yunikorn\nhelm install yunikorn yunikorn/yunikorn --namespace yunikorn\n")),(0,a.yg)("p",null,"By default, the helm chart will install the scheduler, web-server and the admission-controller in the cluster.\nWhen ",(0,a.yg)("inlineCode",{parentName:"p"},"admission-controller")," is installed, it simply routes all traffic to YuniKorn. That means the resource scheduling\nis delegated to YuniKorn. You can disable it by setting ",(0,a.yg)("inlineCode",{parentName:"p"},"embedAdmissionController")," flag to false during the helm install.  "),(0,a.yg)("p",null,"Further configuration options for installing YuniKorn via Helm are available in the ",(0,a.yg)("a",{parentName:"p",href:"https://hub.helm.sh/charts/yunikorn/yunikorn"},"YuniKorn Helm hub page"),"."),(0,a.yg)("p",null,"If you don't want to use helm charts, you can find our step-by-step\ntutorial ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.10.0/developer_guide/deployment"},"here"),"."),(0,a.yg)("h2",{id:"uninstall"},"Uninstall"),(0,a.yg)("p",null,"Run the following command to uninstall YuniKorn:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm uninstall yunikorn --namespace yunikorn\n")),(0,a.yg)("h2",{id:"access-the-web-ui"},"Access the Web UI"),(0,a.yg)("p",null,"When the scheduler is deployed, the web UI is also deployed in a container.\nPort forwarding for the web interface on the standard port can be turned on via:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kubectl port-forward svc/yunikorn-service 9889:9889 -n yunikorn\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"9889")," is the default port for web UI.\nOnce this is done, web UI will be available at: ",(0,a.yg)("inlineCode",{parentName:"p"},"http://localhost:9889"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"UI Screenshots",src:n(88536).A,width:"1200",height:"617"})),(0,a.yg)("p",null,"YuniKorn UI provides a centralised view for cluster resource capacity, utilization, and all application info."))}d.isMDXComponent=!0},88536:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/yk-ui-screenshots-d24de16a6a2af41a4d5ac1f488ce04a1.gif"}}]);