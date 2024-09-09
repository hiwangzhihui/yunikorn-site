"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36814],{11772:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=s(13274),a=s(1780);const t={id:"run_spark",title:"Run Spark Jobs",description:"How to run Spark jobs with YuniKorn",keywords:["spark"]},o=void 0,i={id:"user_guide/workloads/run_spark",title:"Run Spark Jobs",description:"How to run Spark jobs with YuniKorn",source:"@site/docs/user_guide/workloads/run_spark.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_spark",permalink:"/docs/next/user_guide/workloads/run_spark",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"run_spark",title:"Run Spark Jobs",description:"How to run Spark jobs with YuniKorn",keywords:["spark"]},sidebar:"docs",previous:{title:"Run NVIDIA GPU Jobs",permalink:"/docs/next/user_guide/workloads/run_nvidia"},next:{title:"Run Flink Jobs",permalink:"/docs/next/user_guide/workloads/run_flink"}},c={},d=[{value:"Prepare the docker image for Spark",id:"prepare-the-docker-image-for-spark",level:2},{value:"Create a namespace for Spark jobs",id:"create-a-namespace-for-spark-jobs",level:2},{value:"Create service account and role binding",id:"create-service-account-and-role-binding",level:2},{value:"Submit a Spark job",id:"submit-a-spark-job",level:2},{value:"What happens behind the scenes?",id:"what-happens-behind-the-scenes",level:2},{value:"Using YuniKorn as a custom scheduler for Apache Spark on Amazon EMR on EKS",id:"using-yunikorn-as-a-custom-scheduler-for-apache-spark-on-amazon-emr-on-eks",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This document assumes you have YuniKorn and its admission-controller both installed. Please refer to\n",(0,r.jsx)(n.a,{href:"/docs/next/",children:"get started"})," to see how that is done."]})}),"\n",(0,r.jsx)(n.h2,{id:"prepare-the-docker-image-for-spark",children:"Prepare the docker image for Spark"}),"\n",(0,r.jsxs)(n.p,{children:["To run Spark on Kubernetes, you'll need the Spark docker images. You can 1) use the docker images provided by the Spark\nteam, or 2) build one from scratch.\nIf you want to build your own Spark docker image, you can find the ",(0,r.jsx)(n.a,{href:"https://spark.apache.org/docs/latest/building-spark.html",children:"full instructions"}),"\nin the Spark documentation. Simplified steps:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Download a Spark version that has Kubernetes support, URL: ",(0,r.jsx)(n.a,{href:"https://github.com/apache/spark",children:"https://github.com/apache/spark"})]}),"\n",(0,r.jsx)(n.li,{children:"Build spark with Kubernetes support:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"script",children:"./build/mvn -Pkubernetes -DskipTests clean package\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Recommendation is to use the official images with different spark versions in the ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/apache/spark/tags",children:"dockerhub"})]}),"\n",(0,r.jsx)(n.h2,{id:"create-a-namespace-for-spark-jobs",children:"Create a namespace for Spark jobs"}),"\n",(0,r.jsx)(n.p,{children:"Create a namespace:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"script",children:"cat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: spark-test\nEOF\n"})}),"\n",(0,r.jsx)(n.h2,{id:"create-service-account-and-role-binding",children:"Create service account and role binding"}),"\n",(0,r.jsxs)(n.p,{children:["Create service account and role bindings inside the ",(0,r.jsx)(n.code,{children:"spark-test"})," namespace:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"script",children:'cat <<EOF | kubectl apply -n spark-test -f -\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: spark\n  namespace: spark-test\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: spark-role\n  namespace: spark-test\nrules:\n- apiGroups: [""]\n  resources: ["pods"]\n  verbs: ["get", "watch", "list", "create", "delete"]\n- apiGroups: [""]\n  resources: ["configmaps"]\n  verbs: ["get", "create", "delete"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: spark-role-binding\n  namespace: spark-test\nsubjects:\n- kind: ServiceAccount\n  name: spark\n  namespace: spark-test\nroleRef:\n  kind: Role\n  name: spark-role\n  apiGroup: rbac.authorization.k8s.io\nEOF\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Do NOT use ",(0,r.jsx)(n.code,{children:"ClusterRole"})," and ",(0,r.jsx)(n.code,{children:"ClusterRoleBinding"})," to run Spark jobs in production, please configure a more fine-grained\nsecurity context for running Spark jobs. See more about how to configure proper RBAC rules ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",children:"here"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"submit-a-spark-job",children:"Submit a Spark job"}),"\n",(0,r.jsx)(n.p,{children:"If this is running from local machine, you will need to start the proxy in order to talk to the api-server."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"script",children:"kubectl proxy\n"})}),"\n",(0,r.jsxs)(n.p,{children:["There are official images with different spark versions in the ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/apache/spark/tags",children:"dockerhub"}),"\nRun a simple SparkPi job, this assumes that the Spark binaries are installed locally in the ",(0,r.jsx)(n.code,{children:"/usr/local"})," directory."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",metastring:"script",children:"export SPARK_HOME=/usr/local/spark/\n${SPARK_HOME}/bin/spark-submit --master k8s://http://localhost:8001 --deploy-mode cluster --name spark-pi \\\n   --master k8s://http://localhost:8001 --deploy-mode cluster --name spark-pi \\\n   --class org.apache.spark.examples.SparkPi \\\n   --conf spark.executor.instances=1 \\\n   --conf spark.kubernetes.namespace=spark-test \\\n   --conf spark.kubernetes.executor.request.cores=1 \\\n   --conf spark.kubernetes.container.image=docker.io/apache/spark:v3.3.0 \\\n   --conf spark.kubernetes.authenticate.driver.serviceAccountName=spark \\\n   local:///opt/spark/examples/jars/spark-examples_2.12-3.3.0.jar\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["There are more options for setting the driver and executor in the ",(0,r.jsx)(n.a,{href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html#configuration",children:"spark"}),".\nAssigning the applicationId and the queue path are possible."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"--conf spark.kubernetes.executor.label.applicationId=application-spark-0001\n--conf spark.kubernetes.driver.label.applicationId=application-spark-0001\n--conf spark.kubernetes.executor.label.queue=root.default.sandbox\n--conf spark.kubernetes.driver.label.queue=root.default.sandbox\n"})})]}),"\n",(0,r.jsx)(n.p,{children:"You'll see Spark driver and executors been created on Kubernetes:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"spark-pods",src:s(45728).A+"",width:"645",height:"97"})}),"\n",(0,r.jsx)(n.p,{children:"The spark-pi result is in the driver pod."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"spark-pods",src:s(49805).A+"",width:"1081",height:"99"})}),"\n",(0,r.jsx)(n.h2,{id:"what-happens-behind-the-scenes",children:"What happens behind the scenes?"}),"\n",(0,r.jsxs)(n.p,{children:["When the Spark job is submitted to the cluster, the job is submitted to ",(0,r.jsx)(n.code,{children:"spark-test"})," namespace. The Spark driver pod will\nbe firstly created under this namespace. Since this cluster has YuniKorn admission-controller enabled, when the driver pod\nget created, the admission-controller mutates the pod's spec and injects ",(0,r.jsx)(n.code,{children:"schedulerName=yunikorn"}),", by doing this, the\ndefault K8s scheduler will skip this pod and it will be scheduled by YuniKorn instead. See how this is done by ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/extend-kubernetes/configure-multiple-schedulers/",children:"configuring\nanother scheduler in Kubernetes"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The default configuration has placement rule enabled, which automatically maps the ",(0,r.jsx)(n.code,{children:"spark-test"})," namespace to a YuniKorn\nqueue ",(0,r.jsx)(n.code,{children:"root.spark-test"}),". All Spark jobs submitted to this namespace will be automatically submitted to the queue first.\nTo see more about how placement rule works, please see doc ",(0,r.jsx)(n.a,{href:"/docs/next/user_guide/placement_rules",children:"placement-rules"}),". By far,\nthe namespace defines the security context of the pods, and the queue determines how the job and pods will be scheduled\nwith considering of job ordering, queue resource fairness, etc. Note, this is the simplest setup, which doesn't enforce\nthe queue capacities. The queue is considered as having unlimited capacity."]}),"\n",(0,r.jsxs)(n.p,{children:["YuniKorn reuses the Spark application ID set in label ",(0,r.jsx)(n.code,{children:"spark-app-selector"}),", and this job is submitted\nto YuniKorn and being considered as a job. The job is scheduled and running as there is sufficient resources in the cluster.\nYuniKorn allocates the driver pod to a node, binds the pod and starts all the containers. Once the driver pod gets started,\nit requests for a bunch of executor pods to run its tasks. Those pods will be created in the same namespace as well and\nscheduled by YuniKorn as well."]}),"\n",(0,r.jsx)(n.h2,{id:"using-yunikorn-as-a-custom-scheduler-for-apache-spark-on-amazon-emr-on-eks",children:"Using YuniKorn as a custom scheduler for Apache Spark on Amazon EMR on EKS"}),"\n",(0,r.jsx)(n.p,{children:"YuniKorn can be configured as a custom scheduler for Apache Spark jobs on Amazon EMR on EKS. This setup allows our resource management and scheduling algorithms on Kubernetes clusters."}),"\n",(0,r.jsxs)(n.p,{children:["For a detailed guide on how to set up YuniKorn with Apache Spark on Amazon EMR on EKS, please refer to the ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/tutorial-yunikorn.html",children:"AWS EMR documentation"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},45728:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/RunningSparkOnK8s-81f17d64fb66e633e664e62d9fc26b3e.png"},49805:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/sparkResult-1100ddf2b4bcd8b3f0cce9af4e119508.png"},1780:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(79474);const a={},t=r.createContext(a);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);