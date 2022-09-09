"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8223],{30654:function(e,t,n){n.r(t);var a=n(67294),l=n(86010),r=n(6663),m=n(52263),c=n(99578),i=[{title:a.createElement(a.Fragment,null,"\u8c03\u5ea6\u80fd\u529b"),imageUrl:"./img/resource-scheduling.png",description:a.createElement(a.Fragment,null,"\u5185\u7f6e\u5168\u9762\u7684\u8c03\u5ea6\u529f\u80fd\uff0c\u5305\u62ec\u5c42\u6b21\u961f\u5217\u3001 \u8de8\u961f\u5217\u7684\u8d44\u6e90\u516c\u5e73\u6027\u3001\u4f5c\u4e1a\u6392\u5e8f (FIFO/FAIR)\u3001 \u53ef\u63d2\u62d4\u8282\u70b9\u6392\u5e8f\u7b56\u7565\u3001\u62a2\u5360\u7b49\u3002")},{title:a.createElement(a.Fragment,null,"K8s \u8d44\u6e90\u8c03\u5ea6\u5668"),imageUrl:"./img/support-k8s.png",description:a.createElement(a.Fragment,null,"\u5b8c\u5168\u517c\u5bb9 K8s\uff0c\u662f\u9ed8\u8ba4 K8s \u8c03\u5ea6\u7684\u66ff\u4ee3\u65b9\u6848\uff0c\u4f46\u529f\u80fd\u66f4\u5f3a\u5927\u3002 \u5bf9\u73b0\u6709\u7684 K8s \u5e94\u7528\u7a0b\u5e8f\u5b8c\u5168\u900f\u660e\u3002")},{title:a.createElement(a.Fragment,null,"\u4e91\u539f\u751f"),imageUrl:"./img/cloud-native.png",description:a.createElement(a.Fragment,null,"\u652f\u6301\u672c\u5730\u548c\u4e91\u7aef\u7528\u4f8b\u3002 \u5728\u4e91\u4e0a\u8fd0\u884c\u65f6\uff0c\u5b83\u4e0e\u5f39\u6027\u4f38\u7f29\u63a7\u5236\u5668\u5171\u540c\u534f\u4f5c\uff0c\u4ee5\u5e26\u6765\u6700\u5927\u7684\u8d44\u6e90\u5f39\u6027\u548c\u66f4\u597d\u7684\u541e\u5410\u91cf\u3002")}],s=[{title:a.createElement(a.Fragment,null,"\u5206\u5c42\u8d44\u6e90\u961f\u5217"),imageUrl:"./img/why-hierarchical-queue.svg",description:a.createElement(a.Fragment,null,"\u5bf9\u4e0d\u540c\u79df\u6237\u7684\u8d44\u6e90\u914d\u989d\u8fdb\u884c\u7ec6\u7c92\u5ea6\u63a7\u5236\uff0c\u8f7b\u677e\u6620\u5c04\u5230\u60a8\u7684\u7ec4\u7ec7\u7ed3\u6784\u3002 \u4e3a\u961f\u5217\u7684\u6700\u5c0f/\u6700\u5927\u8d44\u6e90\u63d0\u4f9b\u4e86\u8d85\u989d\u5206\u914d\u7684\u529f\u80fd\uff0c\u540c\u65f6\u786e\u4fdd\u4e86\u6709\u4fdd\u969c\u7684\u8d44\u6e90\u3002")},{title:a.createElement(a.Fragment,null,"\u5e94\u7528\u611f\u77e5\u8c03\u5ea6"),imageUrl:"./img/why-app.svg",description:a.createElement(a.Fragment,null,"\u8bc6\u522b\u7528\u6237\u3001\u5e94\u7528\u7a0b\u5e8f\u3001\u961f\u5217\u3002 \u5e94\u7528\u7a0b\u5e8f\u6309\u7279\u5b9a\u987a\u5e8f\u8fdb\u884c\u6392\u961f\u548c\u8c03\u5ea6\u3002 \u6839\u636e\u8d44\u6e90\u516c\u5e73\u6027\u3001\u63d0\u4ea4\u65f6\u95f4\u548c\u4f18\u5148\u7ea7\u5e94\u7528\u6392\u5e8f\u3002 \u60a8\u53ef\u4ee5\u83b7\u5f97\u66f4\u53ef\u9884\u6d4b\u7684\u8c03\u5ea6\u7ed3\u679c\u3002")},{title:a.createElement(a.Fragment,null,"\u6548\u7387\u548c\u6210\u672c\u8282\u7ea6"),imageUrl:"./img/why-save-cost.svg",description:a.createElement(a.Fragment,null,"\u9488\u5bf9\u4e91\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u5e76\u5c3d\u53ef\u80fd\u5730\u9002\u5e94\u5f39\u6027\u4f38\u7f29\u3002 Gang Scheduling \u51cf\u5c11\u4e86\u8d44\u6e90\u788e\u7247\uff0c\u5e76\u4e3b\u52a8\u89e6\u53d1\u6269\u5bb9\u3002 Bin-packing \u5728\u4e91\u4e0a\u8fd0\u884c\u65f6\u53ef\u4ee5\u6539\u53d8\u4f7f\u7528\u66f2\u7ebf\uff0c\u5e76\u964d\u4f4e\u6210\u672c\u3002")},{title:a.createElement(a.Fragment,null,"\u4e2d\u592e\u7ba1\u7406\u63a7\u5236\u53f0"),imageUrl:"./img/why-console.svg",description:a.createElement(a.Fragment,null,"\u4e0d\u518d\u4e22\u5931\u8ddf\u8e2a\u79df\u6237\u7684\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff01 YuniKorn \u63d0\u4f9b\u4e2d\u592e\u7ba1\u7406 UI \u548c\u4e00\u7ad9\u5f0f\u770b\u677f\u6765\u8ddf\u8e2a\u96c6\u7fa4\u3001\u961f\u5217\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u8d44\u6e90\u5229\u7528\u7387\u3002 \u8ba9\u6211\u4eec\u5f00\u59cb\u4e3a\u60a8\u7684\u56e2\u961f\u89c4\u5212\u548c\u76d1\u63a7\u8d44\u6e90\uff01")}];t.default=function(){var e=(0,m.Z)().siteConfig,t=void 0===e?{}:e;return a.createElement(r.Z,{title:"Welcome to "+t.title,description:"Apache YuniKorn \u7f51\u9875"},a.createElement("header",{className:(0,l.Z)("hero",c.Z.heroBanner)},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"hero_column_main"},a.createElement("h1",{className:"hero__title"},t.title),a.createElement("p",{className:"hero__subtitle"},"\u91ca\u653e\u5728 Kubernetes \u4e0a\u8fd0\u884c\u5927\u6570\u636e\u548c\u673a\u5668\u5b66\u4e60\u8d44\u6e90\u8c03\u5ea6\u7684\u529b\u91cf\uff01"),a.createElement("div",{className:"container"},a.createElement("div",{className:"buttons_src-pages-"},a.createElement("a",{className:"button button--primary button--lg",href:"./docs/"},"\u5f00\u59cb\u6587\u6863"),a.createElement("a",{className:"button button--primary button--lg",href:"./community/download"},"\u4e0b\u8f7d"),a.createElement("a",{className:"button button--primary button--lg",href:"./community/roadmap"},"\u8def\u7ebf\u56fe")))),a.createElement("div",{className:"hero_column_logo"},a.createElement("img",{className:c.Z.heroImg,src:"./img/logo/yunikorn_classic_logo.png",alt:"YuniKorn logo"}))))),a.createElement("main",null,i&&i.length&&a.createElement("section",{className:c.Z.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},i.map((function(e,t){var n=e.imageUrl,r=e.title,m=e.description;return a.createElement("div",{key:t,className:(0,l.Z)("col col--4")},n&&a.createElement("div",{className:"text--center"},a.createElement("img",{className:c.Z.featureImage,src:n,alt:r.toString()})),a.createElement("h3",null,r),a.createElement("p",null,m))}))))),a.createElement("div",{className:c.Z.postContainer},a.createElement("h1",{className:c.Z.whyText},"\u263a \u4e3a\u4ec0\u4e48\u9009YuniKorn?"),s.map((function(e){var t=e.imageUrl,n=e.title,l=e.description;return a.createElement("div",{className:c.Z.postContent},a.createElement("img",{src:t,alt:n.toString()}),a.createElement("h4",null,n),a.createElement("p",null,l))})),a.createElement("h3",{className:c.Z.learnMoreURL},a.createElement("a",{href:"./docs/get_started/core_features"},"\u4e86\u89e3\u66f4\u591a >>>")))))}},99578:function(e,t){t.Z={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",heroImg:"heroImg_wnHi",features:"features_keug",featureImage:"featureImage_yA8i",timelineImage:"timelineImage_A6U2",postContainer:"postContainer_QeqF",postContent:"postContent_ni6p",postTitle:"postTitle_BgnT",whyText:"whyText_JYIL",learnMoreURL:"learnMoreURL_P1Ax"}}}]);