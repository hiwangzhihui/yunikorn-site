"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90310],{38911:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(13274),a=r(1780);const o={id:"prometheus",title:"Prometheus and Grafana"},t=void 0,i={id:"user_guide/prometheus",title:"Prometheus and Grafana",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.1/user_guide/prometheus.md",sourceDirName:"user_guide",slug:"/user_guide/prometheus",permalink:"/docs/1.5.1/user_guide/prometheus",draft:!1,unlisted:!1,tags:[],version:"1.5.1",frontMatter:{id:"prometheus",title:"Prometheus and Grafana"},sidebar:"docs",previous:{title:"Labels and Annotations in YuniKorn",permalink:"/docs/1.5.1/user_guide/labels_and_annotations_in_yunikorn"},next:{title:"Use Cases",permalink:"/docs/1.5.1/user_guide/use_cases"}},l={},c=[{value:"Run Prometheus locally",id:"run-prometheus-locally",level:2},{value:"1. Download Prometheus release",id:"1-download-prometheus-release",level:3},{value:"2. Configure prometheus.yml",id:"2-configure-prometheusyml",level:3},{value:"3. Start port-forward",id:"3-start-port-forward",level:3},{value:"4. Execute prometheus",id:"4-execute-prometheus",level:3},{value:"5. Access the Prometheus UI",id:"5-access-the-prometheus-ui",level:3},{value:"Deploy Prometheus and Grafana in a cluster.",id:"deploy-prometheus-and-grafana-in-a-cluster",level:2},{value:"1. Add Prometheus repository to helm",id:"1-add-prometheus-repository-to-helm",level:3},{value:"2. Configuring yunikorn for prometheus",id:"2-configuring-yunikorn-for-prometheus",level:3},{value:"3. Use helm to create Prometheus",id:"3-use-helm-to-create-prometheus",level:3},{value:"4. Access the Prometheus Web UI",id:"4-access-the-prometheus-web-ui",level:3},{value:"Access Grafana Dashboard",id:"access-grafana-dashboard",level:2},{value:"Download JSON files for Yunikorn Dashboard",id:"download-json-files-for-yunikorn-dashboard",level:3},{value:"Import the JSON files in the Dashboard",id:"import-the-json-files-in-the-dashboard",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"YuniKorn exposes its scheduling metrics via Prometheus. Thus, we need to set up a Prometheus server to collect these metrics."}),"\n",(0,n.jsx)(s.p,{children:"We will provide two methods for building Prometheus: either running it locally or using Helm to deploy it in your cluster. Additionally, in the Helm version, we will explain how to integrate it with Grafana and provide generic Grafana Dashboards for monitoring Yunikorn's metrics and observing the changes over time."}),"\n",(0,n.jsxs)(s.p,{children:["If you don't know what metric can be used, you can use ",(0,n.jsx)(s.a,{href:"/docs/1.5.1/api/scheduler#metrics",children:"REST API"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"run-prometheus-locally",children:"Run Prometheus locally"}),"\n",(0,n.jsx)(s.h3,{id:"1-download-prometheus-release",children:"1. Download Prometheus release"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"wget https://github.com/prometheus/prometheus/releases/download/v2.30.3/prometheus-2.30.3.linux-amd64.tar.gz\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"tar xvfz prometheus-*.tar.gz\ncd prometheus-*\n"})}),"\n",(0,n.jsx)(s.h3,{id:"2-configure-prometheusyml",children:"2. Configure prometheus.yml"}),"\n",(0,n.jsxs)(s.p,{children:["Prometheus collects metrics from\xa0",(0,n.jsx)(s.em,{children:"targets"}),"\xa0by scraping metrics HTTP endpoints."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"global:\n  scrape_interval:     3s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'yunikorn'\n    scrape_interval: 1s\n    metrics_path: '/ws/v1/metrics'\n    static_configs:\n    - targets: ['localhost:9080'] \n    # 9080 is internal port, need port forward or modify 9080 to service's port\n"})}),"\n",(0,n.jsx)(s.h3,{id:"3-start-port-forward",children:"3. Start port-forward"}),"\n",(0,n.jsx)(s.p,{children:"Port forwarding for the core's web service on the standard port can be turned on via:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"kubectl port-forward svc/yunikorn-service 9080:9080 -n yunikorn\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"9080"}),"is the default port for core's web service."]}),"\n",(0,n.jsx)(s.h3,{id:"4-execute-prometheus",children:"4. Execute prometheus"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"./prometheus --config.file=prometheus.yml\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"prometheus-cmd",src:r(48291).A+"",width:"2560",height:"662"})}),"\n",(0,n.jsx)(s.h3,{id:"5-access-the-prometheus-ui",children:"5. Access the Prometheus UI"}),"\n",(0,n.jsxs)(s.p,{children:["You should be able to browse to a status page at\xa0",(0,n.jsx)(s.a,{href:"http://localhost:9090/",children:"localhost:9090"}),". Give it a couple of seconds to collect data about itself from its own HTTP metrics endpoint."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"prometheus-web-ui",src:r(81190).A+"",width:"2560",height:"1418"})}),"\n",(0,n.jsxs)(s.p,{children:["You can also verify that Prometheus is serving metrics by navigating to its metrics endpoint:",(0,n.jsx)(s.a,{href:"http://localhost:9090/metrics",children:"localhost:9090/metrics"})]}),"\n",(0,n.jsx)(s.h2,{id:"deploy-prometheus-and-grafana-in-a-cluster",children:"Deploy Prometheus and Grafana in a cluster."}),"\n",(0,n.jsx)(s.h3,{id:"1-add-prometheus-repository-to-helm",children:"1. Add Prometheus repository to helm"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"# add helm repo\nhelm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nhelm repo update\n"})}),"\n",(0,n.jsx)(s.h3,{id:"2-configuring-yunikorn-for-prometheus",children:"2. Configuring yunikorn for prometheus"}),"\n",(0,n.jsx)(s.p,{children:"Get the config from repository."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"helm show values prometheus-community/kube-prometheus-stack > /tmp/values.yaml\n"})}),"\n",(0,n.jsx)(s.p,{children:"Add a new job in Prometheus to collect metrics by scraping the metrics HTTP endpoints of the targets."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"vim /tmp/values.yaml\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'...\nadditionalScrapeConfigs:\n  - job_name: "yunikorn"\n    scrape_interval: 1s\n    metrics_path: \'/ws/v1/metrics\'\n    static_configs:\n      - targets: ["yunikorn-service.yunikorn.svc.cluster.local:9080"]\n...\n'})}),"\n",(0,n.jsx)(s.h3,{id:"3-use-helm-to-create-prometheus",children:"3. Use helm to create Prometheus"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"# create k8s namespace\nkubectl create namespace prometheus\n\n# deploy chart\nhelm install prometheus prometheus-community/kube-prometheus-stack -n prometheus -f /tmp/values.yaml\n"})}),"\n",(0,n.jsx)(s.h3,{id:"4-access-the-prometheus-web-ui",children:"4. Access the Prometheus Web UI"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"kubectl port-forward -n prometheus svc/prometheus-kube-prometheus-prometheus 9090:9090\n"})}),"\n",(0,n.jsxs)(s.p,{children:["After running port-forward, you can enter ",(0,n.jsx)(s.a,{href:"http://localhost:9090",children:"localhost:9090"})," to access Prometheus Web UI."]}),"\n",(0,n.jsx)(s.h2,{id:"access-grafana-dashboard",children:"Access Grafana Dashboard"}),"\n",(0,n.jsx)(s.p,{children:"Port forwarding for the Grafana web service on the standard port can be turned on via:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"kubectl port-forward -n prometheus svc/prometheus-grafana 7070:80\n"})}),"\n",(0,n.jsxs)(s.p,{children:["After running port-forward, you can enter ",(0,n.jsx)(s.a,{href:"http://localhost:7070",children:"localhost:7070"})," to access grafana, and in the login page, enter account:",(0,n.jsx)(s.code,{children:"admin"})," ,password:",(0,n.jsx)(s.code,{children:"prom-operator"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"grafana-login-page",src:r(82308).A+"",width:"2560",height:"1410"})}),"\n",(0,n.jsx)(s.h3,{id:"download-json-files-for-yunikorn-dashboard",children:"Download JSON files for Yunikorn Dashboard"}),"\n",(0,n.jsxs)(s.p,{children:["A dashboard consists of multiple panels that are organized and arranged in rows. Each panel has the ability to interact with data from any Grafana data source that has been configured. For more detailed information, please refer to the ",(0,n.jsx)(s.a,{href:"https://grafana.com/docs/grafana/latest/dashboards",children:"Grafana Dashboards"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["We provide a sample dashboard JSON file. To access it, you can navigate to the ",(0,n.jsx)(s.code,{children:"/deployments/grafana-dashboard"})," directory in the Yunikorn-k8shim repository."]}),"\n",(0,n.jsxs)(s.p,{children:["You can refer to the ",(0,n.jsx)(s.a,{href:"/docs/1.5.1/api/scheduler#metrics",children:"REST API"})," to build your own custom Dashboard."]}),"\n",(0,n.jsx)(s.h3,{id:"import-the-json-files-in-the-dashboard",children:"Import the JSON files in the Dashboard"}),"\n",(0,n.jsx)(s.p,{children:"Once you access the Dashboard page, you can proceed to import the provided JSON file."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"import_dashboard_01",src:r(60182).A+"",width:"2560",height:"1434"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"import_dashboard_02",src:r(74157).A+"",width:"2560",height:"1430"})}),"\n",(0,n.jsx)(s.p,{children:"Once the import is complete, you will be able to locate Yunikorn's Dashboard on the page. From there, you can regularly monitor the status of Yunikorn."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"grafana_dashboard",src:r(55943).A+"",width:"1079",height:"1376"})})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},55943:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/grafana_dashboard-0befb519dda1c73efbd3bf308106f722.png"},82308:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/grafana_login_page-a1ded769d7575fa17b6acfd61f45a6f8.png"},60182:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/import_dashboard_01-8387f9f2ecc21d01579de036884e8b37.png"},74157:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/import_dashboard_02-26d463a674a2604bcceaed5047fa0715.png"},48291:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/prometheus-cmd-e9648bf15688017326c8d89df9640099.png"},81190:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/prometheus-web-ui-19fc9b727de2706c897400faf4095815.png"},1780:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>i});var n=r(79474);const a={},o=n.createContext(a);function t(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);