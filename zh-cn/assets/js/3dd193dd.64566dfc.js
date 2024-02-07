"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29352],{95788:(e,n,i)=>{i.d(n,{Iu:()=>g,yg:()=>d});var a=i(11504);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function t(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,a,l=function(e,n){if(null==e)return{};var i,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||(l[i]=e[i]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):t(t({},n),e)),i},g=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var i=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(i),y=l,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||r;return i?a.createElement(d,t(t({ref:n},g),{},{components:i})):a.createElement(d,t({ref:n},g))}));function d(e,n){var i=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=i.length,t=new Array(r);t[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:l,t[1]=o;for(var p=2;p<r;p++)t[p]=i[p];return a.createElement.apply(null,t)}return a.createElement.apply(null,i)}y.displayName="MDXCreateElement"},22448:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=i(45072),l=(i(11504),i(95788));const r={id:"config_v2",title:"Configuration V2"},t=void 0,o={unversionedId:"design/config_v2",id:"version-1.3.0/design/config_v2",title:"Configuration V2",description:"\x3c!--",source:"@site/versioned_docs/version-1.3.0/design/config_v2.md",sourceDirName:"design",slug:"/design/config_v2",permalink:"/zh-cn/docs/1.3.0/design/config_v2",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"config_v2",title:"Configuration V2"},sidebar:"docs",previous:{title:"Scheduler Object States",permalink:"/zh-cn/docs/1.3.0/design/scheduler_object_states"},next:{title:"Scheduler Configuration",permalink:"/zh-cn/docs/1.3.0/design/scheduler_configuration"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Goals",id:"goals",level:3},{value:"Non-Goals",id:"non-goals",level:3},{value:"References",id:"references",level:3},{value:"Implementation JIRA",id:"implementation-jira",level:4},{value:"Other relevant JIRAs",id:"other-relevant-jiras",level:4},{value:"Services to cover",id:"services-to-cover",level:3},{value:"Services excluded",id:"services-excluded",level:3},{value:"Configuration format",id:"configuration-format",level:2},{value:"Mutability of configuration values",id:"mutability-of-configuration-values",level:3},{value:"Update handling",id:"update-handling",level:3},{value:"Legacy configuration handling",id:"legacy-configuration-handling",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Helm considerations",id:"helm-considerations",level:3},{value:"Core Configuration",id:"core-configuration",level:3},{value:"Appendix",id:"appendix",level:2},{value:"Default ConfigMap",id:"default-configmap",level:3},{value:"Admission Controller Configuration",id:"admission-controller-configuration",level:3},{value:"Removed Environment Variables",id:"removed-environment-variables",level:4},{value:"Removed CLI Options",id:"removed-cli-options",level:4},{value:"Scheduler (Standard) Configuration",id:"scheduler-standard-configuration",level:3},{value:"Removed Environment Variables",id:"removed-environment-variables-1",level:4},{value:"Removed CLI Options",id:"removed-cli-options-1",level:4},{value:"Scheduler (Plugin) Configuration",id:"scheduler-plugin-configuration",level:3},{value:"Removed Environment Variables",id:"removed-environment-variables-2",level:4},{value:"Removed CLI Options",id:"removed-cli-options-2",level:4},{value:"Helm Configuration",id:"helm-configuration",level:3},{value:"Removed Options",id:"removed-options",level:4},{value:"Deprecated Options",id:"deprecated-options",level:4}],g={toc:p},u="wrapper";function m(e){let{components:n,...i}=e;return(0,l.yg)(u,(0,a.c)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"introduction"},"Introduction"),(0,l.yg)("p",null,"Over time the YuniKorn configuration has increased in complexity. The current\nconfiguration for YuniKorn is split over a number of different options, file\nand command line, and formats. There is a requirement now to define an overall\nconfiguration approach that can be used for all components."),(0,l.yg)("h3",{id:"goals"},"Goals"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Define a configuration format"),(0,l.yg)("li",{parentName:"ul"},"Define an update and modification strategy"),(0,l.yg)("li",{parentName:"ul"},"Provide consistency between configuration of YuniKorn components"),(0,l.yg)("li",{parentName:"ul"},"Legacy migration strategy")),(0,l.yg)("h3",{id:"non-goals"},"Non-Goals"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Redefine the queue configuration"),(0,l.yg)("li",{parentName:"ul"},"Migration timeline for the old configuration options")),(0,l.yg)("h3",{id:"references"},"References"),(0,l.yg)("h4",{id:"implementation-jira"},"Implementation JIRA"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1221"},"YUNIKORN-1221")," - ","[Umbrella]"," Configuration V2"),(0,l.yg)("h4",{id:"other-relevant-jiras"},"Other relevant JIRAs"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-455"},"YUNIKORN-455")," - Make the core configurable"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1213"},"YUNIKORN-1213")," - Background health checker needs to be configurable"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1335"},"YUNIKORN-1335")," - Write yunikorn-web error logs to stderr")),(0,l.yg)("h3",{id:"services-to-cover"},"Services to cover"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Scheduler (Standard) - K8Shim + Core"),(0,l.yg)("li",{parentName:"ul"},"Scheduler (Plugin) - K8Shim + Core"),(0,l.yg)("li",{parentName:"ul"},"Admission controller")),(0,l.yg)("h3",{id:"services-excluded"},"Services excluded"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Web UI (not needed after ",(0,l.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1335"},"YUNIKORN-1335"),")")),(0,l.yg)("h2",{id:"configuration-format"},"Configuration format"),(0,l.yg)("p",null,"Currently only Kubernetes is a supported deployment pattern. Future shims may\nneed an alternative configuration syntax. To enable this, we will update the\nscheduler interface to support passing the core configuration (the content of\nthe ",(0,l.yg)("inlineCode",{parentName:"p"},"queues.yaml")," ConfigMap entry) to the core on startup and refresh. The\nexisting config watcher functionality in the core will be removed and the shim\nwill gain the responsibility for watching for ConfigMap changes. The shim\nactually already has this ability now, it is just not used."),(0,l.yg)("p",null,"We will use two ConfigMaps to configure YuniKorn:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"yunikorn-defaults"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"This will be a new ConfigMap written by Helm; it will contain only values\nexplicitly configured by an administrator via Helm variables."))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"yunikorn-configs"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"This ConfigMap will contain overrides for yunikorn-defaults. It was\npreviously a Helm hook in previous YuniKorn releases; it will no longer\nbe managed by Helm and may be updated freely by third-party tools.")))),(0,l.yg)("p",null,"The effective configuration will be the combination of both ",(0,l.yg)("inlineCode",{parentName:"p"},"yunikorn-defaults"),"\nand ",(0,l.yg)("inlineCode",{parentName:"p"},"yunikorn-configs"),", with ",(0,l.yg)("inlineCode",{parentName:"p"},"yunikorn-configs")," taking precedence."),(0,l.yg)("p",null,"Neither ConfigMap (even the existing one) is required for proper functionality.\nIn the case where a ConfigMap does not exist, we will use compiled-in defaults\nfor all options. This enables bootstrapping in a variety of environments,\nincluding local development mode, as the ConfigMap need not exist to bring the\nscheduler components up. Future configuration options should be set via the\nConfigMap exclusively."),(0,l.yg)("h3",{id:"mutability-of-configuration-values"},"Mutability of configuration values"),(0,l.yg)("p",null,"We should strive for hot-reload of all configuration values where possible.\nWhere hot-reload is not implemented, this should be clearly documented. For the\ninitial release, the core config and admission controller will be\nhot-reloadable but many items in the shim will likely not be. The shim was not\ndesigned to hot-reload anything so this will be a large future task. Some items\nmay never be reloadable due to architectural limitations."),(0,l.yg)("h3",{id:"update-handling"},"Update handling"),(0,l.yg)("p",null,"Given the security issues involved with updates, the default Kubernetes access\ncontrol alone should be used for ConfigMap updates. We can still syntax-check\nthe core side of the configuration in the admission controller as before.\nPartial updates are allowed as Kubernetes supports patching of ConfigMaps."),(0,l.yg)("h3",{id:"legacy-configuration-handling"},"Legacy configuration handling"),(0,l.yg)("p",null,"Helm will be updated to render all existing legacy options into the\n",(0,l.yg)("inlineCode",{parentName:"p"},"yunikorn-defaults")," ConfigMap for easier transition to the new configuration\nformat. Consequently, it is not necessary for YuniKorn components to parse the\nold environment and command-line arguments."),(0,l.yg)("h3",{id:"environment-variables"},"Environment variables"),(0,l.yg)("p",null,"All environment variables for all services will be removed, with the exception\nof:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"NAMESPACE"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Default value: ",(0,l.yg)("inlineCode",{parentName:"li"},"default")),(0,l.yg)("li",{parentName:"ul"},"Will be auto-populated from Helm and resolve to the pod's running\nnamespace"),(0,l.yg)("li",{parentName:"ul"},"Needed so that YuniKorn can determine what namespace it was launched in"),(0,l.yg)("li",{parentName:"ul"},"Should only be provided explicitly at development time"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"KUBECONFIG"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Default value: ",(0,l.yg)("inlineCode",{parentName:"li"},"$HOME/.kube/config")),(0,l.yg)("li",{parentName:"ul"},"Will be ignored if running inside Kubernetes; in-cluster configuration\nwill be used in that case"),(0,l.yg)("li",{parentName:"ul"},"Needed so that we can bootstrap to K8s and load the YuniKorn ConfigMap at\nruntime"),(0,l.yg)("li",{parentName:"ul"},"Should only be provided explicitly at development time")))),(0,l.yg)("h3",{id:"helm-considerations"},"Helm considerations"),(0,l.yg)("p",null,"All configuration options which have moved into the ConfigMap will be marked as\ndeprecated in the Helm chart documentation. Their replacement is the more\ngeneric ",(0,l.yg)("inlineCode",{parentName:"p"},"yunikornDefaults")," dictionary. If the legacy values are present but\nthe associated ",(0,l.yg)("inlineCode",{parentName:"p"},"yunikornDefaults")," entry is missing, the legacy configuration\nvalue will be used. This will allow users some time to migrate to the new\nconfiguration style. The legacy attributes will be removed in a future release."),(0,l.yg)("h3",{id:"core-configuration"},"Core Configuration"),(0,l.yg)("p",null,"The core scheduler configuration is loaded from the ",(0,l.yg)("inlineCode",{parentName:"p"},"queues.yaml")," section of\nthe ConfigMap, assuming ",(0,l.yg)("inlineCode",{parentName:"p"},"service.policyGroup")," is set to the default value\n",(0,l.yg)("inlineCode",{parentName:"p"},"queues"),". If the policy group has been customized, core scheduler configuration\nwill be read from ",(0,l.yg)("inlineCode",{parentName:"p"},"{service.policyGroup}.yaml"),". This section is special as its\ncontents are passed directly to the core for evaluation and update and is not\nread directly by the shim. The content of this section is unchanged from prior\nreleases."),(0,l.yg)("h2",{id:"appendix"},"Appendix"),(0,l.yg)("h3",{id:"default-configmap"},"Default ConfigMap"),(0,l.yg)("p",null,"If not present, the default ConfigMap will resolve to these defaults.\nAdditionally, individual options will resolve to those listed here if not\nspecified. Note that these values are subject to change in future releases."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yunikorn-configs\ndata:\n  service.clusterId: "mycluster"\n  service.policyGroup: "queues"\n  service.schedulingInterval: "1s"\n  service.volumeBindTimeout: "10s"\n  service.eventChannelCapacity: "1048576"\n  service.dispatchTimeout: "5m"\n  service.operatorPlugins: "general"\n  service.disableGangScheduling: "false"\n  service.enableConfigHotRefresh: "true"\n  service.placeholderImage: "registry.k8s.io/pause:3.7"\n  service.instanceTypeNodeLabelKey: "node.kubernetes.io/instance-type"\n  health.checkInterval: "30s"\n  log.level: "0"\n  kubernetes.qps: "1000"\n  kubernetes.burst: "1000"\n  admissionController.webHook.amServiceName: "yunikorn-admission-controller-service"\n  admissionController.webHook.schedulerServiceAddress: "yunikorn-service:9080"\n  admissionController.filtering.processNamespaces: ""\n  admissionController.filtering.bypassNamespaces: "^kube-system$"\n  admissionController.filtering.labelNamespaces: ""\n  admissionController.filtering.noLabelNamespaces: ""\n  admissionController.accessControl.bypassAuth: "false"\n  admissionController.accessControl.trustControllers: "true"\n  admissionController.accessControl.systemUsers: "^system:serviceaccount:kube-system:"\n  admissionController.accessControl.externalUsers: ""\n  admissionController.accessControl.externalGroups: ""\n  queues.yaml: |\n    partitions:\n      - name: default\n        placementrules:\n          - name: tag\n            value: namespace\n            create: true\n        queues:\n          - name: root\n            submitacl: \'*\'`\n')),(0,l.yg)("h3",{id:"admission-controller-configuration"},"Admission Controller Configuration"),(0,l.yg)("h4",{id:"removed-environment-variables"},"Removed Environment Variables"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"POLICY_GROUP"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.policyGroup")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ENABLE_CONFIG_HOT_REFRESH"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.enableConfigHotRefresh")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"SCHEDULER_SERVICE_ADDRESS"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.webHook.schedulerServiceAddress")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_SERVICE"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.webHook.amServiceName")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_NAMESPACE"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use Environment variable: ",(0,l.yg)("inlineCode",{parentName:"li"},"NAMESPACE")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_PROCESS_NAMESPACES"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.filtering.processNamespaces")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_BYPASS_NAMESPACES"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.filtering.bypassNamespaces")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ADMISSON_CONTROLLER_LABEL_NAMESPACES"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.filtering.labelNamespaces")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"ADMISSION_CONTROLLER_NO_LABEL_NAMESPACES"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.filtering.noLabelNamespaces"))))),(0,l.yg)("h4",{id:"removed-cli-options"},"Removed CLI Options"),(0,l.yg)("p",null,"None"),(0,l.yg)("h3",{id:"scheduler-standard-configuration"},"Scheduler (Standard) Configuration"),(0,l.yg)("h4",{id:"removed-environment-variables-1"},"Removed Environment Variables"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"USER_LABEL_KEY"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"No replacement"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"OPERATOR_PLUGINS"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"PLACEHOLDER_IMAGE"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.placeholderImage"))))),(0,l.yg)("h4",{id:"removed-cli-options-1"},"Removed CLI Options"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-clusterId"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.clusterId")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-clusterVersion"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"No replacement"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-policyGroup"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.policyGroup")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-interval"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.schedulingInterval")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-logLevel"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"log.level")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-logEncoding"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"No replacement"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-logFile"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"No replacement"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-volumeBindTimeout"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.volumeBindTimeout")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-eventChannelCapacity"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.eventChannelCapacity")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-dispatchTimeout"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.dispatchTimeout")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-kubeQPS"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"kubernetes.qps")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-kubeBurst"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"kubernetes.burst")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-operatorPlugins"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-enableConfigHotRefresh"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.enableConfigHotRefresh")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-disableGangScheduling"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.disableGangScheduling")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-userLabelKey"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"No replacement"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-placeHolderImage"),"\nUse ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.placeholderImage"))),(0,l.yg)("h3",{id:"scheduler-plugin-configuration"},"Scheduler (Plugin) Configuration"),(0,l.yg)("h4",{id:"removed-environment-variables-2"},"Removed Environment Variables"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"USER_LABEL_KEY"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"No replacement"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"OPERATOR_PLUGINS"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"PLACEHOLDER_IMAGE"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.placeholderImage"))))),(0,l.yg)("h4",{id:"removed-cli-options-2"},"Removed CLI Options"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-scheduler-name"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"No replacement"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-cluster-id"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.clusterId")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-cluster-version"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"No replacement"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-policy-group"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.policyGroup")))),(0,l.yg)("li",{parentName:"ul"},"`--yk-scheduling-interval",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.schedulingInterval")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-kube-config"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use environment: ",(0,l.yg)("inlineCode",{parentName:"li"},"KUBECONFIG")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-log-level"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"log.level")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-log-encoding"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"No replacement"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-log-file"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"No replacement"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-event-channel-capacity"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.eventChannelCapacity")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-dispatcher-timeout"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.dispatchTimeout")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-kube-qps"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"kubernetes.qps")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-kube-burst"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"kubernetes.burst")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-operator-plugins"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-enable-config-hot-refresh"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.enableConfigHotRefresh")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-disable-gang-scheduling"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.disableGangScheduling")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-user-label-key"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"No replacement"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"--yk-placeholder-image"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.placeholderImage"))))),(0,l.yg)("h3",{id:"helm-configuration"},"Helm Configuration"),(0,l.yg)("h4",{id:"removed-options"},"Removed Options"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"userLabelKey"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"No replacement")))),(0,l.yg)("h4",{id:"deprecated-options"},"Deprecated Options"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"operatorPlugins"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.operatorPlugins")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"placeHolderImage"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"service.placeholderImage")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.processNamespaces"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.filtering.processNamespaces")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.bypassNamespaces"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.filtering.bypassNamespaces")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.labelNamespaces"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.filtering.labelNamespaces")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.noLabelNamespaces"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"admissionController.filtering.noLabelNamespaces")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"configuration"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Use ConfigMap: ",(0,l.yg)("inlineCode",{parentName:"li"},"queues.yaml"))))))}m.isMDXComponent=!0}}]);