"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38963],{46275:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(13274),i=s(1780);const r={id:"usergroup_resolution",title:"User & Group Resolution"},o=void 0,a={id:"user_guide/usergroup_resolution",title:"User & Group Resolution",description:"\x3c!--",source:"@site/versioned_docs/version-1.5.2/user_guide/usergroup_resolution.md",sourceDirName:"user_guide",slug:"/user_guide/usergroup_resolution",permalink:"/docs/1.5.2/user_guide/usergroup_resolution",draft:!1,unlisted:!1,tags:[],version:"1.5.2",frontMatter:{id:"usergroup_resolution",title:"User & Group Resolution"},sidebar:"docs",previous:{title:"App Placement Rules",permalink:"/docs/1.5.2/user_guide/placement_rules"},next:{title:"Sorting Policies",permalink:"/docs/1.5.2/user_guide/sorting_policies"}},l={},d=[{value:"User resolution",id:"user-resolution",level:2},{value:"Group resolution",id:"group-resolution",level:2},{value:"User handling",id:"user-handling",level:2},{value:"Configuring the admission controller",id:"configuring-the-admission-controller",level:3},{value:"Legacy user handling",id:"legacy-user-handling",level:2},{value:"Using the <code>yunikorn.apache.org/username</code> label",id:"using-the-yunikornapacheorgusername-label",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"user-resolution",children:"User resolution"}),"\n",(0,t.jsxs)(n.p,{children:["User information is an important aspect of the scheduling cycle. It is one of the key identifier that can be used to determine the queue to which a job should be submitted. The Yunikorn Scheduler relies on the K8s Shim to provide user information. In the world of Kubernetes, there is no object defined that identfies the actual user. This is by design and more information can be found ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#users-in-kubernetes",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In Yunikorn, there are two ways of handling users and groups. The first is the legacy way, which uses the label ",(0,t.jsx)(n.code,{children:"yunikorn.apache.org/username"}),". If this label is set on a pod, then the value is automatically extracted in the shim and will be used accordingly. Group resolution is also done in the shim and is disabled by default. The problem with this approach is twofold: user restrictions can be easily bypassed because the submitter is free to set this label to any value, therefore this only be used in a trusted environment. The second is that identifying the groups in the shim is too late: users can be assigned to multiple groups, but depending on the authentication mechanism (X509, tokens, LDAP, etc) it might be very difficult to look up which group a user belongs to. Since these limitations are significant, this method is kept for backward compatibility reasons and will likely be removed in the future."]}),"\n",(0,t.jsxs)(n.p,{children:["A more reliable and robust mechanism is using the ",(0,t.jsx)(n.code,{children:"yunikorn.apache.org/user.info"})," annotation, where the user information can be set externally by an allowed list of users or groups or the admission controller can attach this automatically to every workload."]}),"\n",(0,t.jsx)(n.h2,{id:"group-resolution",children:"Group resolution"}),"\n",(0,t.jsx)(n.p,{children:"Group membership resolution is pluggables and is defined here. Groups do not have to be part of provided user and group object. When the object is added to the cache the groups are automatically resolved based on the resolution that is configured.\nThe resolver which is linked to the cache can be set per partition."}),"\n",(0,t.jsx)(n.p,{children:'The default group resolver is "no resolver".\nThis resolver just echos the user name and a primary group with the same name as the user.'}),"\n",(0,t.jsx)(n.p,{children:"Other resolvers are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"OS resolver"}),"\n",(0,t.jsx)(n.li,{children:"test resolver"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"user-handling",children:"User handling"}),"\n",(0,t.jsx)(n.p,{children:"Since Yunikorn 1.2 a more sophisticated way of user/group resolution is available."}),"\n",(0,t.jsxs)(n.p,{children:["In this mode, Yunikorn no longer relies on the ",(0,t.jsx)(n.code,{children:"yunikorn.apache.org/username"})," label, instead, the annotation ",(0,t.jsx)(n.code,{children:"yunikorn.apache.org/user.info"})," is attached to the workload. The value is simple JSON, which defines the user name and groups:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'metadata:\n  annotations:\n    yunikorn.apache.org/user.info: "\n    {\n      \\"user\\": \\"yunikorn\\",\n      \\"groups\\": [\n        \\"developers\\",\n        \\"devops\\"\n      ]\n    }"\n'})}),"\n",(0,t.jsx)(n.p,{children:"However, to enhance security, the following is enforced in the admission controller:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"not every user in the cluster is allowed to attach this annotation, only those which are configured"}),"\n",(0,t.jsx)(n.li,{children:"if the annotation is missing, the admission controller will add this information automatically"}),"\n",(0,t.jsx)(n.li,{children:"attempts to change this annotation will be rejected"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We also no longer do this on pods only, but also on Deployments, ReplicaSets, DeamonSets, StatefulSets, Jobs and CronJobs."}),"\n",(0,t.jsx)(n.p,{children:"Group resolution is no longer necessary inside the shim."}),"\n",(0,t.jsx)(n.h3,{id:"configuring-the-admission-controller",children:"Configuring the admission controller"}),"\n",(0,t.jsxs)(n.p,{children:["The admission controller can be configured with the ",(0,t.jsx)(n.code,{children:"yunikorn-configs"})," configmap. All entries start with the prefix ",(0,t.jsx)(n.code,{children:"admissionController.accessControl."}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Default value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bypassAuth"})}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"Allow any external user to create pods with user information set"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"trustControllers"})}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"Allow Kubernetes controller users to create pods with user information set"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"systemUsers"})}),(0,t.jsx)(n.td,{children:'"^system:serviceaccount:kube-system:"'}),(0,t.jsx)(n.td,{children:"Regular expression for the allowed controller service account list"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"externalUsers"})}),(0,t.jsx)(n.td,{children:'""'}),(0,t.jsx)(n.td,{children:"Regular expression for the allowed external user list"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"externalGroups"})}),(0,t.jsx)(n.td,{children:'""'}),(0,t.jsx)(n.td,{children:"Regular expression for the allowed external group list"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"bypassAuth"})," is set to true the admission controller will not add the annotation to a pod if the annotation is not present and the deprecated user labell is set. If the annotation is not set and the user label is not set the new annotation will be added. In the case that ",(0,t.jsx)(n.code,{children:"bypassAuth"})," is false, the default, the admission controller will always add the new annotation, regardless of the existence of the deprecated label."]}),"\n",(0,t.jsxs)(n.p,{children:["In certain scenarios, users and groups must be provided to Yunikorn upon submission because the user and group management is provided by external systems and the lookup mechanism is not trivial. In these cases, the ",(0,t.jsx)(n.code,{children:"externalUsers"})," and ",(0,t.jsx)(n.code,{children:"externalGroups"})," can be configured which are treated as regular expressions. Matching users and groups are allowed to set the ",(0,t.jsx)(n.code,{children:"yunikorn.apache.org/user.info"})," annotation to any arbitrary value. Since this has implications which affects scheduling inside Yunikorn, these properties must be set carefully."]}),"\n",(0,t.jsx)(n.h2,{id:"legacy-user-handling",children:"Legacy user handling"}),"\n",(0,t.jsxs)(n.h3,{id:"using-the-yunikornapacheorgusername-label",children:["Using the ",(0,t.jsx)(n.code,{children:"yunikorn.apache.org/username"})," label"]}),"\n",(0,t.jsxs)(n.p,{children:["Since, Kubernetes has no pre-defined field or resource for user information and individual cluster deployments with unique user identification tools can vary, we have defined a standard way of identifying the user. Yunikorn requires a Kubernetes ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",children:"Label"})," added. Using the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/",children:"recommendation"})," provided here, the default label is defined as below:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"yunikorn.apache.org/username"}),(0,t.jsxs)(n.td,{children:["User name. It can have duplicate entries but only the first value will be used. The default user is ",(0,t.jsx)(n.code,{children:"nobody"})]})]})})]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'metadata:\n  labels:\n    yunikorn.apache.org/username: "john"\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"In order to make this field uniquiely identifiable to the authorized user, the suggestion is to add this label as an immutable field by the user identification tool used by the cluster administrators. The cluster administrators or users are free to use any method or tool to add this field and value. This includes adding it manually at the time of submission."})]}),"\n",(0,t.jsx)(n.admonition,{title:"Assumption",type:"note",children:(0,t.jsx)(n.p,{children:"Assumption:\nYunikorn assumes that all pods belonging to an application are owned by the same user. We recommend that the user label is added to every pod of an app. This is to ensure that there is no discrepency."})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1780:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(79474);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);