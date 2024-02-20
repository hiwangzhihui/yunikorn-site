"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95016],{15680:(e,t,n)=>{n.d(t,{xA:()=>h,yg:()=>g});var o=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,g=d["".concat(l,".").concat(p)]||d[p]||c[p]||i;return n?o.createElement(g,r(r({ref:t},h),{},{components:n})):o.createElement(g,r({ref:t},h))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(58168),a=(n(96540),n(15680));const i={id:"user_group",title:"User/Group handling and lookup design"},r=void 0,s={unversionedId:"design/user_group",id:"design/user_group",title:"User/Group handling and lookup design",description:"\x3c!--",source:"@site/docs/design/user_group_handling.md",sourceDirName:"design",slug:"/design/user_group",permalink:"/docs/next/design/user_group",draft:!1,tags:[],version:"current",frontMatter:{id:"user_group",title:"User/Group handling and lookup design"},sidebar:"docs",previous:{title:"Gang scheduling design",permalink:"/docs/next/design/gang_scheduling"},next:{title:"User Based Resource Usage Tracking",permalink:"/docs/next/design/user_based_resource_usage_tracking"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Goals",id:"goals",level:2},{value:"Non Goals",id:"non-goals",level:2},{value:"Kubernetes user and group handling",id:"kubernetes-user-and-group-handling",level:2},{value:"User model",id:"user-model",level:3},{value:"User information as part of authentication",id:"user-information-as-part-of-authentication",level:3},{value:"Groups in authentication",id:"groups-in-authentication",level:3},{value:"Current findings and challenges",id:"current-findings-and-challenges",level:3},{value:"YuniKorn group retrieval",id:"yunikorn-group-retrieval",level:2},{value:"Proposed user information object",id:"proposed-user-information-object",level:2},{value:"Annotation name",id:"annotation-name",level:3},{value:"Annotation content",id:"annotation-content",level:3},{value:"Annotation mutation",id:"annotation-mutation",level:3},{value:"Backwards compatibility",id:"backwards-compatibility",level:3},{value:"Providing user and group externally",id:"providing-user-and-group-externally",level:2},{value:"Pods from controllers",id:"pods-from-controllers",level:3},{value:"External applications",id:"external-applications",level:3},{value:"Configuration",id:"configuration",level:2}],h={toc:u},d="wrapper";function c(e){let{components:t,...i}=e;return(0,a.yg)(d,(0,o.A)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Currently, user-handling in YuniKorn is handled in a relatively simple manner. If the submitted pod contains a user label the content will be set as the username. The label name is configurable and defaults to yunikorn.apache.org/username. The value is extracted in the shim code ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim/blob/v1.0.0/pkg/common/utils/utils.go#L220"},"GetUserFromPod")," and passed to the core. If the label is not present or no value is set the username will be set to default."),(0,a.yg)("p",null,"However, this makes it possible for every authenticated user to freely impersonate anyone. This allows a user to circumvent quotas and other user-based restrictions inside YuniKorn. Therefore, we need a robust, secure way to make sure that users are who they say they are. This impersonation should not be confused with ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#user-impersonation"},"Kubernetes impersonation"),"."),(0,a.yg)("p",null,"In the core part of YuniKorn, we also perform group resolution, similar to a unix based system or for instance Hadoop. The default implementation is a nil-lookup. It simply populates the group slice with a single entry which is the same as the username. This is not fit for purpose and was only added as a placeholder until proper user and group resolution could be added."),(0,a.yg)("h2",{id:"goals"},"Goals"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Define a stable way for user & group retrieval from Kubernetes"),(0,a.yg)("li",{parentName:"ul"},"Assess fit of the current group resolution in the shim "),(0,a.yg)("li",{parentName:"ul"},"Definition of user and group info on Kubernetes objects\n")),(0,a.yg)("h2",{id:"non-goals"},"Non Goals"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Authorisation or Authentication as part of:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"YuniKorn"),(0,a.yg)("li",{parentName:"ul"},"Kubernetes"))),(0,a.yg)("li",{parentName:"ul"},"Changes to the way users are propagated between the shim and the core\n")),(0,a.yg)("h2",{id:"kubernetes-user-and-group-handling"},"Kubernetes user and group handling"),(0,a.yg)("p",null,"Dealing with how users are actually managed in Kubernetes is out of scope. What is important is the definitions that are used by Kubernetes for users. In Kubernetes, there are two kinds of accounts defined: ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/"},"service and user accounts"),". User accounts are for humans. Service accounts are set up for processes which run inside a pod and want to access the API server."),(0,a.yg)("h3",{id:"user-model"},"User model"),(0,a.yg)("p",null,"Kubernetes, at this point in time, only manages service accounts, not users. Kubernetes does not have objects which represent user accounts. A user with valid credentials is considered authenticated."),(0,a.yg)("p",null,"During the authentication phase the user account is mapped to a service account. For authorisation Kubernertes uses a sophisticated role-based (RBAC) or a simpler attribute-based (ABAC) model. All authorisation is linked to the service accounts, not to the user accounts. Beside the authentication there is thus no need for the user accounts. This is reflected in Kubernetes as after the authentication phase the user account is no longer tracked or available."),(0,a.yg)("p",null,"The model used by Kubernetes thus limits what we can do to retrieve the user and or group details. All objects that are available inside the cluster to a scheduler, like YuniKorn, only have the service account information available. Getting access to the user account means that we need to intercept the information at an earlier stage."),(0,a.yg)("h3",{id:"user-information-as-part-of-authentication"},"User information as part of authentication"),(0,a.yg)("p",null,"User accounts are required during the authentication stage. Authentication in Kubernetes is configurable via plugins. For more details, see the official document on ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/"},"Kubernetes authentication"),". The list of supported authentication plugins, not all of these plugins will be configured and or active by default:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"X.509 certificate"),(0,a.yg)("li",{parentName:"ul"},"Static token file"),(0,a.yg)("li",{parentName:"ul"},"OpenID connect tokens"),(0,a.yg)("li",{parentName:"ul"},"Authentication proxy"),(0,a.yg)("li",{parentName:"ul"},"Authentication webhooks (",(0,a.yg)("a",{parentName:"li",href:"https://itnext.io/implementing-ldap-authentication-for-kubernetes-732178ec2155"},"LDAP example"),")"),(0,a.yg)("li",{parentName:"ul"},"Bootstrap token"),(0,a.yg)("li",{parentName:"ul"},"Service Account Tokens")),(0,a.yg)("p",null,"When using test clusters created by Minikube or KIND, X509 authentication is used by default and the current context is updated with the appropriate certificates and keys, making cluster access transparent."),(0,a.yg)("p",null,"Authentication, independent of which option is used, provides the following details:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Username"),(0,a.yg)("li",{parentName:"ul"},"userID"),(0,a.yg)("li",{parentName:"ul"},"Groups"),(0,a.yg)("li",{parentName:"ul"},"Extra information")),(0,a.yg)("p",null,"Where the details are stored or how they are retrieved depends on the authentication plugin used."),(0,a.yg)("p",null,"Kubernetes defines a special user for anonymous access, the ",(0,a.yg)("inlineCode",{parentName:"p"},"system:anonymous")," user belonging to the ",(0,a.yg)("inlineCode",{parentName:"p"},"system:unauthenticated")," group. Anonymous access is a security issue and should have been turned off in most clusters. This default mapping to a standardised user does provide the possibility to process authenticated and anonymous workloads in the same way."),(0,a.yg)("h3",{id:"groups-in-authentication"},"Groups in authentication"),(0,a.yg)("p",null,"Users may belong to zero or more groups. The authentication system of Kubernetes adds one of two default groups to each user. The ",(0,a.yg)("inlineCode",{parentName:"p"},"system:authenticated")," group is added to the list of groups for authenticated users, the ",(0,a.yg)("inlineCode",{parentName:"p"},"system:unauthenticated")," group is added for anonymous users."),(0,a.yg)("p",null,"For example, when generating an X509 certificate, we can define the username and organisation information like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'openssl req -new -key alice.key \\\n-out alice.csr \\\n-subj "/CN=alice/O=users/O=devops"\n')),(0,a.yg)("p",null,"This certificate, after being processed, provides an authenticated user with the username alice and sets the groups list to users, devops and system:authenticated. Other authentication methods allow specifying groups in their specific way. How groups are specified for each authentication option is not relevant to this design as it is encapsulated in the authentication layer and not in the exposed model."),(0,a.yg)("h3",{id:"current-findings-and-challenges"},"Current findings and challenges"),(0,a.yg)("p",null,"None of the objects in Kubernetes contain the authentication information and thus the user details. After the authentication has been processed the objects inside Kubernetes either use the service account that was specified as part of the object definition or the Default service account."),(0,a.yg)("p",null,"That means that the pod which is processed by YuniKorn, represented by the ",(0,a.yg)("inlineCode",{parentName:"p"},"k8s.io/api/core/v1/Pod")," object, only has the service account as a reference.This is similar to the details available to someone using the Kubernetes tools to describe the object."),(0,a.yg)("p",null,"The only way to retrieve the authentication information is during the admission phase of a new object into the Kubernetes system. This process is handled by the admission controllers which are part of the decision process to allow or disallow the new object to be created, modified or removed."),(0,a.yg)("p",null,"This finding does allow YuniKorn, via its admission controller, to retrieve the authentication information of objects."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"user group lookup",src:n(11110).A,width:"1375",height:"726"})),(0,a.yg)("p",null,"However there are some further complications to this process. Pods are the units that the scheduler works with. Objects like deployments or jobs do not get scheduled, they in turn create a pod to be scheduled. Pods could thus be created in a number of ways."),(0,a.yg)("p",null,"If a pod is created by a direct request, then the pod creation process contains the authentication information. This allows the YuniKorn admission controller to access and propagate the authenticated user information as part of the MutatingAdmissionWebhook."),(0,a.yg)("p",null,"An example of a review of a direct call to create a pod with the user information shown:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'INFO  webhook/admission_controller.go:180  AdmissionReview  {"Namespace": "default", "UID": "3f8c8df5-0272-4c85-874f-0aa1ece74fbc", "Operation": "CREATE", "UserInfo": {"username":"minikube-user","groups":["system:masters","system:authenticated"]}}\n')),(0,a.yg)("p",null,"On the other hand, if a deployment, job or replica set is submitted, then the pod is not directly created. This also means that the user is not identifiable. The pod that YuniKorn, via the admission controller, sees is created by a controller. The user in the authentication information is not the end user that created the original object but the controller service account."),(0,a.yg)("p",null,"An example review of a pod created as part of a Kubernetes job with the user information shown:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'INFO  webhook/admission_controller.go:177  AdmissionReview  {"Namespace": "default", "UID": "be94ea46-c1d2-442a-a46a-60589d582abd", "Operation": "CREATE", "UserInfo": {"username":"system:serviceaccount:kube-system:job-controller","uid":"32abc062-eb53-4dca-9669-55251d687939","groups":["system:serviceaccounts","system:serviceaccounts:kube-system","system:authenticated"]}}\n')),(0,a.yg)("p",null,"It is possible to create separate webhooks for the API objects that could result in the creation of pods. Other objects that we should watch and mutate if necessary:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Deployment"),(0,a.yg)("li",{parentName:"ul"},"ReplicaSet"),(0,a.yg)("li",{parentName:"ul"},"DaemonSet"),(0,a.yg)("li",{parentName:"ul"},"StatefulSet"),(0,a.yg)("li",{parentName:"ul"},"Job"),(0,a.yg)("li",{parentName:"ul"},"CronJob"),(0,a.yg)("li",{parentName:"ul"},"ReplicationController (deprecated)")),(0,a.yg)("p",null,"For example, adding a modification on the admission controller which instals a MutatingAdmissionWebhook for deployments, the username can be determined:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'INFO  webhook/admission_controller.go:483  Deployment validation - pass through  {"User": {"username":"minikube-user","groups":["system:masters","system:authenticated"]}}\n')),(0,a.yg)("p",null,"By intercepting the original object the submitting user information can be retrieved in the admission controller. The set of objects of interest, mentioned in the list above, all contain a pod template to specify the pod that will be created by the controller. As part of the mutating admission webhook the pod template can be updated with the user information."),(0,a.yg)("p",null,"To confirm that this approach is viable a simple proof of concept (POC) was created. The example POC code for the current admission controller adds the currently defined yunikorn.apache.org/username label to the pod template of a deployment: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/pbacsko/incubator-yunikorn-k8shim/commit/478d688675a1ca98afb895672295d61b47172d19"},"Github commit")),(0,a.yg)("p",null,"There is an interaction with the processing of a directly created pod. Pods that are created via a controller will have the user information already set via the pod template. The admission controller processing the request should allow for the user information to be present and not overwrite or replace it with the controller service account. This case will be further defined and detailed in the chapter on ",(0,a.yg)("a",{parentName:"p",href:"#providing-user-and-group-externally"},"Providing user and group externally")," due to the similarity in solution design."),(0,a.yg)("h2",{id:"yunikorn-group-retrieval"},"YuniKorn group retrieval"),(0,a.yg)("p",null,"As mentioned in the introduction, the YuniKorn core can retrieve a group for a given user by doing a lookup (see implementation in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-core/blob/161c38100317ec239965e21806ebb35c6583ddcd/pkg/common/security/usergroup.go"},"usergroup.go"),"). The lookup is pluggable and the current implementations provided are a simple OS-based and a dummy lookup."),(0,a.yg)("p",null,"The dummy lookup mimics the simple unix OS behaviour for new users. It sets the group to the same value as the username. The dummy lookup is enabled as the default lookup."),(0,a.yg)("p",null,"Resolving users using the OS-based resolver has limited functionality. The container that the scheduler runs in has only a base OS installed. There is no integration with an external identity provider. That means resolving groups for users running pods would normally fail as they do not exist on the OS layer that is accessible from the scheduler."),(0,a.yg)("p",null,"The YuniKorn core only performs a group lookup if the UserGroupInformation object passed from the shim to the core does not define a list of groups. This is independent of the resolver defined in the code. By default the shim in its current implementation only passes the user name to the core. That means it always triggers the group resolution."),(0,a.yg)("p",null,"For our purposes, both options are too simplistic. YuniKorn core should not perform any group retrieval but instead rely on the shim and the group and user information retrieved there. With the current functionality to only resolve if no group details are provided changes required should be minimal. The current default dummy resolver should be updated to not set any group and just leave the current groups. Even if that means the user is not part of any group. Based on the ",(0,a.yg)("a",{parentName:"p",href:"#groups-in-authentication"},"Groups in authentication")," details when using the Kubernetes shim we should always have at least one group set. All users are members of either system:authenticated or system:unauthenticated. Even without changes the current group retrieval code could be used as is."),(0,a.yg)("p",null,"The design does not require any code changes in the core code."),(0,a.yg)("h2",{id:"proposed-user-information-object"},"Proposed user information object"),(0,a.yg)("p",null,"The admission controller has access to more detailed user information than what is available on the objects that are available to the shim. See the ",(0,a.yg)("a",{parentName:"p",href:"#current-findings-and-challenges"},"Current findings and challenges")," for more details."),(0,a.yg)("p",null,"First change is that we need to use annotations instead of ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels"),". The value of labels is limited to 63 characters, which will not be flexible enough to hold group information. If a user is a member of multiple groups it could easily exceed the value limit. Spitting the groups over multiple labels or encoding is not a viable option as stability is not a guarantee."),(0,a.yg)("p",null,"Supporting a single label for the user\u2019s name and annotations for the groups is not a good user experience. We must provide a single object that can contain the user name as well as the group details."),(0,a.yg)("h3",{id:"annotation-name"},"Annotation name"),(0,a.yg)("p",null,"The new name for the annotation should clearly cover the content and not interfere with existing annotations. Beside that we are free to use any name that complies with the naming ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set"},"conventions for names"),"."),(0,a.yg)("p",null,"The proposal is to use one annotation:\n",(0,a.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/user.info")),(0,a.yg)("h3",{id:"annotation-content"},"Annotation content"),(0,a.yg)("p",null,"There is already a definition for the user information as part of the scheduler interface.The definition in the scheduler interface is:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"message UserGroupInformation {\n// the user name\nstring user = 1;\n// the list of groups of the user, can be empty\nrepeated string groups = 2;\n}\n")),(0,a.yg)("p",null,"The content of the ",(0,a.yg)("inlineCode",{parentName:"p"},"UserGroupInformation")," message as defined in the Scheduler Interface provides a stable Go object with defined group ordering. Since the content of an annotation must be a simple string we should use a simple json representation for the user info that contains the user name and a list of groups. This also guarantees the ordering of the groups to be stable and will not change when read from the pod."),(0,a.yg)("p",null,"An example of the annotation for a user called joe who is a member of the group developers. The system:authenticated group is added by the Kubernetes authentication layer:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'yunikorn.apache.org/user.info = "\n{\n  username: \\"joe\\",\n  groups: [\n    \\"developers\\",\n    \\"system:authenticated\\"\n  ]\n}"\n')),(0,a.yg)("h3",{id:"annotation-mutation"},"Annotation mutation"),(0,a.yg)("p",null,"In the current design a restriction on mutating the annotation is required to prevent users from updating the pod after creation. After YuniKorn is informed of the pod\u2019s existence and the application is created the user information will not change inside YuniKorn. Kubernetes however does not guarantee that the shim will be informed of the pod creation before any modifications are made to the pod. This would leave a short window for a user to create a pod and then update the pod. Allowing a user to overwrite the annotation must be prevented to make sure we have guaranteed and auditable user information."),(0,a.yg)("p",null,"The admission controller must therefore validate update requests that include changes to the annotation. It is the only way to guarantee that the user information in the annotations cannot be modified."),(0,a.yg)("p",null,"The YuniKorn admission controller is currently only registered as a mutating admission controller for pods with the operation type \u201ccreate\u201d. This can be extended to include operation type \u201cupdate\u201d for pods. A validating hook is registered for the configmap object, this one could be extended to include the pod object."),(0,a.yg)("p",null,"This means that there are two options for the update operation:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"mutating"),(0,a.yg)("li",{parentName:"ul"},"validating")),(0,a.yg)("p",null,"In the validating case we can simply reject the change if the annotation is changed as part of the update request. In the mutating case we can undo the change by overwriting the annotation with the original value. Both solutions will work, and will take about the same amount of processing time in the admission controller."),(0,a.yg)("p",null,"The proposal is to add the pod object to the validating webhook for update operations."),(0,a.yg)("h3",{id:"backwards-compatibility"},"Backwards compatibility"),(0,a.yg)("p",null,"The current label will remain supported for the 1.x minor releases. Deprecation will be announced with the first release that supports the new annotation. Messages mentioning the processing of the old label will also be logged at a WARN level in the logs. The existing behaviour might require changes to the default setting see ",(0,a.yg)("a",{parentName:"p",href:"#configuration"},"Configuration")," for more details."),(0,a.yg)("p",null,"Removal of processing of the currently supported label should be part of the next major release. The next major release is 2.0.0. This is based on the fact that we do not have a deprecation policy defined as yet."),(0,a.yg)("p",null,"Preference in processing will be with the new annotations. In the case that both the user label and new annotations are present on the namespace the new annotation will be used. Using both the user label and new annotations, i.e. merging of the two, will not be supported."),(0,a.yg)("h2",{id:"providing-user-and-group-externally"},"Providing user and group externally"),(0,a.yg)("p",null,"As with the current label for the username we could allow for providing user and group information via annotations on the submitted objects. Although this is not a secure solution, as is pointed out in the introduction, support for this option might be a requirement to support certain use cases."),(0,a.yg)("p",null,"We must build in an option to turn the functionality off and or mitigations to limit the possibility to bypass reading the authentication information. Based on the earlier diagram of the admission controller being used to intercept the authentication information a similar diagram for this use case. The admission controller will validate the annotation provided by the user, or system, and enforce compliance with the rules set by the administrator."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"external user info",src:n(714).A,width:"1375",height:"726"})),(0,a.yg)("h3",{id:"pods-from-controllers"},"Pods from controllers"),(0,a.yg)("p",null,"The first use case for allowing the user information to be provided on pods when they are created is linked to controller created pods."),(0,a.yg)("p",null,"To correctly account for these pods the admission controller should be able to not overwrite the user information if the submitting user is one of a specific group of users. Depending on the way the system is configured all controllers run as the same service account or each controller uses a specifically created service account. The ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#controller-roles"},"RBAC documentation")," describes the two options."),(0,a.yg)("p",null,"If the controller manager runs with the option ",(0,a.yg)("inlineCode",{parentName:"p"},"--use-service-account-credentials")," each controller uses a service account in the kube-system namespace. Running with the option set is recommended from an auditing point of view."),(0,a.yg)("p",null,"If the option is not enabled, which seems to be the default, the controller submits the pods as the user ",(0,a.yg)("inlineCode",{parentName:"p"},"system:kube-controller-manager"),"."),(0,a.yg)("p",null,"Both values of the option must be supported by the admission controller. That means the admission controller must have an allow list which contains at least the following users:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"system:serviceaccount:kube-system:*")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"system:kube-controller-manager"))),(0,a.yg)("p",null,"An option would be to further limit the service accounts to a subset of the service account from the kube-system namespace. The configuration should support this without changes, it would come down to a change of the default value for the allow list."),(0,a.yg)("p",null,"There is only a limited set of controllers that can create pods. The group information does, at this point in time, not look deterministic enough to warrant a group allow list."),(0,a.yg)("p",null,"Note that the user system:kube-controller-manager name is based on some older github issue references and needs to be confirmed in a test setup."),(0,a.yg)("h3",{id:"external-applications"},"External applications"),(0,a.yg)("p",null,"In a similar setup applications could be used to provide a frontend for pod creation. These front-ends might or might not use individual users to submit pods. They could even leverage jobs or other objects to indirectly create pods."),(0,a.yg)("p",null,"As an example an application might be used to provide a simple user interface to create a Spark application. Apache Airflow, Livy or similar tools come to mind."),(0,a.yg)("p",null,"The admission controller should allow the annotation to be provided as part of the pod creation. This follows the same code and configuration path as designed for the pods submitted by the controllers."),(0,a.yg)("p",null,"This functionality must be configurable separately from the pods created by the controllers. A similar allow list should be configurable to limit the user. For this use case we also should support an allow list for groups of users. This should allow administrators to specify one or more groups of users that are allowed to set the user information on the pods."),(0,a.yg)("p",null,"For the first design there are no plans to add deny lists for either groups or users."),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"As described in the previous sections, making the behaviour configurable is a requirement. The proposal is to add the following configuration values for the behaviour. All configuration options are prefixed by \u201cADMISSION",(0,a.yg)("em",{parentName:"p"},"CONTROLLER"),"\u201d."),(0,a.yg)("p",null,"The setting should be migrated to a configuration object or file when that is implemented for the admission controller. At this point the configuration uses environment settings as part of the deployment file."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"BYPASS_AUTH")),(0,a.yg)("td",{parentName:"tr",align:null},"Allow external users to create pods with user information set. Type: boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"false")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"BYPASS_CONTROLLERS")),(0,a.yg)("td",{parentName:"tr",align:null},"Allow controller users to create pods with user information set. Type: boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"true")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"SYSTEM_USERS")),(0,a.yg)("td",{parentName:"tr",align:null},"Regular expression for the allowed controller service account list. Type: string"),(0,a.yg)("td",{parentName:"tr",align:null},'"system:serviceaccount:kube-system:*"')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"EXTERNAL_USERS")),(0,a.yg)("td",{parentName:"tr",align:null},"Regular expression for the allowed external user list. Type: string"),(0,a.yg)("td",{parentName:"tr",align:null},'""')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"EXTERNAL_GROUPS")),(0,a.yg)("td",{parentName:"tr",align:null},"Regular expression for the allowed external group list. Type: string"),(0,a.yg)("td",{parentName:"tr",align:null},'""')))),(0,a.yg)("p",null,"The configuration will be read as part of the startup of the admission controller. Automatic refresh or reload of the settings to allow changes while the admission controller is running is not part of the design as it is not supported for any other settings at this moment."),(0,a.yg)("p",null,"If ",(0,a.yg)("inlineCode",{parentName:"p"},"BYPASS_AUTH")," is set to true the admission controller will not add the annotation to a pod if the annotation is not present and the deprecated user labell is set. If the annotation is not set and the user label is not set the new annotation will be added. In the case that ",(0,a.yg)("inlineCode",{parentName:"p"},"BYPASS_AUTH")," is false, the default, the admission controller will always add the new annotation, regardless of the existence of the deprecated label."),(0,a.yg)("p",null,"The behaviour will take into account the user and group filters as defined in ",(0,a.yg)("inlineCode",{parentName:"p"},"EXTERNAL_USERS")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"EXTERNAL_GROUPS"),". This means that retaining the existing behaviour and preferencing the existing label will require changing a default setting."))}c.isMDXComponent=!0},714:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/external_userinfo-13c7c6924fa7b8cd38e6af40687ac1e5.png"},11110:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/ug_lookup-e12ae5202bd46caf6e20837e09b28fef.png"}}]);