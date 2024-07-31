"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22819],{67932:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=i(13274),r=i(1780);const o={id:"build",title:"Build and Run"},s=void 0,d={id:"developer_guide/build",title:"Build and Run",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/developer_guide/build.md",sourceDirName:"developer_guide",slug:"/developer_guide/build",permalink:"/docs/1.0.0/developer_guide/build",draft:!1,unlisted:!1,tags:[],version:"1.0.0",frontMatter:{id:"build",title:"Build and Run"},sidebar:"docs",previous:{title:"Dev Environment Setup",permalink:"/docs/1.0.0/developer_guide/env_setup"},next:{title:"Go module updates",permalink:"/docs/1.0.0/developer_guide/dependencies"}},l={},c=[{value:"Development Environment setup",id:"development-environment-setup",level:2},{value:"Build YuniKorn for Kubernetes",id:"build-yunikorn-for-kubernetes",level:2},{value:"A note on Go modules and git version",id:"a-note-on-go-modules-and-git-version",level:3},{value:"Build Docker image",id:"build-docker-image",level:3},{value:"Inspect the docker image",id:"inspect-the-docker-image",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Affected repositories",id:"affected-repositories",level:4},{value:"Making local changes",id:"making-local-changes",level:4},{value:"Updating dependencies",id:"updating-dependencies",level:4},{value:"Build the web UI",id:"build-the-web-ui",level:2},{value:"Locally run the integrated scheduler",id:"locally-run-the-integrated-scheduler",level:2},{value:"Verify external interface changes with e2e tests",id:"verify-external-interface-changes-with-e2e-tests",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["YuniKorn always works with a container orchestrator system. Currently, a Kubernetes shim ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim",children:"yunikorn-k8shim"}),"\nis provided in our repositories, you can leverage it to develop YuniKorn scheduling features and integrate with Kubernetes.\nThis document describes resources how to setup dev environment and how to do the development."]}),"\n",(0,t.jsx)(n.h2,{id:"development-environment-setup",children:"Development Environment setup"}),"\n",(0,t.jsxs)(n.p,{children:["Read the ",(0,t.jsx)(n.a,{href:"/docs/1.0.0/developer_guide/env_setup",children:"environment setup guide"})," first to setup Docker and Kubernetes development environment."]}),"\n",(0,t.jsx)(n.h2,{id:"build-yunikorn-for-kubernetes",children:"Build YuniKorn for Kubernetes"}),"\n",(0,t.jsx)(n.p,{children:"Prerequisite:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Go 1.16+"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can build the scheduler for Kubernetes from ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim",children:"yunikorn-k8shim"})," project.\nThe build procedure will build all components into a single executable that can be deployed and running on Kubernetes."]}),"\n",(0,t.jsxs)(n.p,{children:["Start the integrated build process by pulling the ",(0,t.jsx)(n.code,{children:"yunikorn-k8shim"})," repository:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir $HOME/yunikorn/\ncd $HOME/yunikorn/\ngit clone https://github.com/apache/yunikorn-k8shim.git\n"})}),"\n",(0,t.jsx)(n.p,{children:"At this point you have an environment that will allow you to build an integrated image for the YuniKorn scheduler."}),"\n",(0,t.jsx)(n.h3,{id:"a-note-on-go-modules-and-git-version",children:"A note on Go modules and git version"}),"\n",(0,t.jsx)(n.p,{children:"Go use git to fetch module information.\nCertain modules cannot be retrieved if the git version installed on the machine used to build is old.\nA message similar to the one below will be logged when trying to build for the first time."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"go: finding modernc.org/mathutil@v1.0.0\ngo: modernc.org/golex@v1.0.0: git fetch -f origin refs/heads/*:refs/heads/* refs/tags/*:refs/tags/* in <location>: exit status 128:\n\terror: RPC failed; result=22, HTTP code = 404\n\tfatal: The remote end hung up unexpectedly\n"})}),"\n",(0,t.jsx)(n.p,{children:"Update git to a recent version to fix this issue.\nGit releases later than 1.22 are known to work."}),"\n",(0,t.jsx)(n.h3,{id:"build-docker-image",children:"Build Docker image"}),"\n",(0,t.jsx)(n.p,{children:"Building a docker image can be triggered by following command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"make image\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The image with the build in configuration can be deployed directly on kubernetes.\nSome sample deployments that can be used are found under ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/tree/master/deployments/scheduler",children:"deployments"})," directory.\nFor the deployment that uses a config map you need to set up the ConfigMap in kubernetes.\nHow to deploy the scheduler with a ConfigMap is explained in the ",(0,t.jsx)(n.a,{href:"/docs/1.0.0/developer_guide/deployment",children:"scheduler configuration deployment"})," document."]}),"\n",(0,t.jsxs)(n.p,{children:["The image build command will first build the integrated executable and then create the docker image.\nCurrently, there are some published docker images under ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/apache/yunikorn",children:"this docker hub repo"}),", you are free to fetch and use.\nThe default image tags are not suitable for deployments to an accessible repository as it uses a hardcoded user and would push to Docker Hub with proper credentials.\nYou ",(0,t.jsx)(n.em,{children:"must"})," update the ",(0,t.jsx)(n.code,{children:"TAG"})," variable in the ",(0,t.jsx)(n.code,{children:"Makefile"})," to push to an accessible repository.\nWhen you update the image tag be aware that the deployment examples given will also need to be updated to reflect the same change."]}),"\n",(0,t.jsx)(n.h3,{id:"inspect-the-docker-image",children:"Inspect the docker image"}),"\n",(0,t.jsxs)(n.p,{children:["The docker image built from previous step has embedded some important build info in image's metadata. You can retrieve\nthese info with docker ",(0,t.jsx)(n.code,{children:"inspect"})," command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker inspect apache/yunikorn:scheduler-latest\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This info includes git revisions (last commit SHA) for each component, to help you understand which version of the source code\nwas shipped by this image. They are listed as docker image ",(0,t.jsx)(n.code,{children:"labels"}),", such as"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"Labels": {\n    "BuildTimeStamp": "2019-07-16T23:08:06+0800",\n    "Version": "0.1",\n    "yunikorn-core-revision": "dca66c7e5a9e",\n    "yunikorn-k8shim-revision": "bed60f720b28",\n    "yunikorn-scheduler-interface-revision": "3df392eded1f"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["The dependencies in the projects are managed using ",(0,t.jsx)(n.a,{href:"https://blog.golang.org/using-go-modules",children:"go modules"}),".\nGo Modules require at least Go version 1.11 to be installed on the development system."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to modify one of the projects locally and build with your local dependencies you will need to change the module file.\nChanging dependencies uses mod ",(0,t.jsx)(n.code,{children:"replace"})," directives as explained in the [Update dependencies](#Updating dependencies)."]}),"\n",(0,t.jsx)(n.p,{children:"The YuniKorn project has four repositories three of those repositories have a dependency at the go level.\nThese dependencies are part of the go modules and point to the github repositories.\nDuring the development cycle it can be required to break the dependency on the committed version from github.\nThis requires making changes in the module file to allow loading a local copy or a forked copy from a different repository."}),"\n",(0,t.jsx)(n.h4,{id:"affected-repositories",children:"Affected repositories"}),"\n",(0,t.jsx)(n.p,{children:"The following dependencies exist between the repositories:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"repository"}),(0,t.jsx)(n.th,{children:"depends on"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"yunikorn-core"}),(0,t.jsx)(n.td,{children:"yunikorn-scheduler-interface"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"yunikorn-k8shim"}),(0,t.jsx)(n.td,{children:"yunikorn-scheduler-interface, yunikorn-core"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"yunikorn-scheduler-interface"}),(0,t.jsx)(n.td,{children:"none"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"yunikorn-web"}),(0,t.jsx)(n.td,{children:"yunikorn-core"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"yunikorn-web"})," repository has no direct go dependency on the other repositories. However any change to the ",(0,t.jsx)(n.code,{children:"yunikorn-core"})," webservices can affect the web interface."]}),"\n",(0,t.jsx)(n.h4,{id:"making-local-changes",children:"Making local changes"}),"\n",(0,t.jsx)(n.p,{children:"To make sure that the local changes will not break other parts of the build you should run:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A full build ",(0,t.jsx)(n.code,{children:"make"})," (build target depends on the repository)"]}),"\n",(0,t.jsxs)(n.li,{children:["A full unit test run ",(0,t.jsx)(n.code,{children:"make test"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Any test failures should be fixed before proceeding."}),"\n",(0,t.jsx)(n.h4,{id:"updating-dependencies",children:"Updating dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["The simplest way is to use the ",(0,t.jsx)(n.code,{children:"replace"})," directive in the module file. The ",(0,t.jsx)(n.code,{children:"replace"})," directive allows you to override the import path with a new (local) path.\nThere is no need to change any of the imports in the source code. The change must be made in the ",(0,t.jsx)(n.code,{children:"go.mod"})," file of the repository that has the dependency."]}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"replace"})," to use of a forked dependency, such as:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"replace github.com/apache/yunikorn-core => example.com/some/forked-yunikorn\n"})}),"\n",(0,t.jsxs)(n.p,{children:["There is no requirement to fork and create a new repository. If you do not have a repository you can use a local checked out copy too.\nUsing ",(0,t.jsx)(n.code,{children:"replace"})," to use of a local directory as a dependency:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"replace github.com/apache/yunikorn-core => /User/example/local/checked-out-yunikorn\n"})}),"\n",(0,t.jsx)(n.p,{children:"and for the same dependency using a relative path:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"replace github.com/apache/yunikorn-core => ../checked-out-yunikorn\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note: if the ",(0,t.jsx)(n.code,{children:"replace"})," directive is using a local filesystem path, then the target must have the ",(0,t.jsx)(n.code,{children:"go.mod"})," file at that location."]}),"\n",(0,t.jsxs)(n.p,{children:["Further details on the modules' wiki: ",(0,t.jsx)(n.a,{href:"https://github.com/golang/go/wiki/Modules#when-should-i-use-the-replace-directive",children:"When should I use the 'replace' directive?"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"build-the-web-ui",children:"Build the web UI"}),"\n",(0,t.jsxs)(n.p,{children:["Example deployments reference the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-web",children:"YuniKorn web UI"}),".\nThe YuniKorn web UI has its own specific requirements for the build. The project has specific requirements for the build follow the steps in the README to prepare a development environment and build how to build the projects.\nThe scheduler is fully functional without the web UI."]}),"\n",(0,t.jsx)(n.h2,{id:"locally-run-the-integrated-scheduler",children:"Locally run the integrated scheduler"}),"\n",(0,t.jsxs)(n.p,{children:["When you have a local development environment setup you can run the scheduler in your local kubernetes environment.\nThis has been tested in a Docker desktop with 'Docker for desktop' and Minikube. See the ",(0,t.jsx)(n.a,{href:"/docs/1.0.0/developer_guide/env_setup",children:"environment setup guide"})," for further details."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"make run\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It will connect with the kubernetes cluster using the users configured configuration located in ",(0,t.jsx)(n.code,{children:"$HOME/.kube/config"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To run YuniKorn in Kubernetes scheduler plugin mode instead, execute:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"make run_plugin\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also use the same approach to run the scheduler locally but connecting to a remote kubernetes cluster,\nas long as the ",(0,t.jsx)(n.code,{children:"$HOME/.kube/config"})," file is pointing to that remote cluster."]}),"\n",(0,t.jsx)(n.h2,{id:"verify-external-interface-changes-with-e2e-tests",children:"Verify external interface changes with e2e tests"}),"\n",(0,t.jsx)(n.p,{children:"Yunikorn has an external REST interface which is validated by end-to-end tests. However, the tests exist in the k8shim repository.\nWhenever a change is made to the external interface, make sure that it is validated by running e2e tests or adjust the test cases accordingly."}),"\n",(0,t.jsxs)(n.p,{children:["How to run the tests locally is described ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/master/test/e2e/README.md",children:"here"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1780:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var t=i(79474);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);