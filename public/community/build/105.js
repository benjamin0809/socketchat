webpackJsonp([105],{1066:function(a,n,t){"use strict";function i(a){return e["ɵvid"](2,[e["ɵqud"](402653184,1,{_fixedContent:0}),e["ɵqud"](402653184,2,{_scrollContent:0}),(a()(),e["ɵeld"](2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),e["ɵncd"](null,0),(a()(),e["ɵeld"](4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),e["ɵncd"](null,1),e["ɵncd"](null,2)],null,null)}t.d(n,"a",function(){return l}),n.b=i;var e=t(1),l=(t(4),t(7),t(14),t(70),t(8),t(44),e["ɵcrt"]({encapsulation:2,styles:[],data:{}}))},983:function(a,n,t){"use strict";function i(a){return s["ɵvid"](0,[(a()(),s["ɵeld"](0,0,null,null,3,"div",[["class","qrcode-container"],["text-center",""]],null,[[null,"click"]],function(a,n,t){var i=!0;if("click"===n){i=!1!==a.component.scaleImage()&&i}return i},null,null)),(a()(),s["ɵted"](-1,null,["\n    "])),(a()(),s["ɵeld"](2,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(a()(),s["ɵted"](-1,null,["\n  "]))],null,function(a,n){a(n,2,0,n.component.qrcode)})}function e(a){return s["ɵvid"](0,[(a()(),s["ɵeld"](0,0,null,null,10,"ion-col",[["class","col col"]],null,null,null,null,null)),s["ɵdid"](1,16384,null,0,O.a,[],null,null),(a()(),s["ɵted"](-1,null,["\n      "])),(a()(),s["ɵeld"](3,0,null,null,6,"button",[["class","target"],["tappable",""]],null,[[null,"click"]],function(a,n,t){var i=!0;if("click"===n){i=!1!==a.component.do(a.context.$implicit)&&i}return i},null,null)),(a()(),s["ɵted"](-1,null,["\n        "])),(a()(),s["ɵeld"](5,0,null,null,0,"img",[["class","div-img"]],[[8,"src",4]],null,null,null,null)),(a()(),s["ɵted"](-1,null,["\n        "])),(a()(),s["ɵeld"](7,0,null,null,1,"div",[["class","div-name"]],null,null,null,null,null)),(a()(),s["ɵted"](8,null,["",""])),(a()(),s["ɵted"](-1,null,["\n      "])),(a()(),s["ɵted"](-1,null,["\n    "]))],null,function(a,n){a(n,5,0,n.context.$implicit.navigationTargetImagePath);a(n,8,0,n.context.$implicit.navigationTargetName)})}function l(a){return s["ɵvid"](0,[(a()(),s["ɵted"](-1,null,["\n"])),(a()(),s["ɵeld"](1,0,null,null,16,"ion-content",[["no-bounce",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,E.b,E.a)),s["ɵdid"](2,4374528,null,0,k.a,[_.a,D.a,C.a,s.ElementRef,s.Renderer,M.a,S.a,s.NgZone,[2,W.a],[2,L.a]],null,null),(a()(),s["ɵted"](-1,1,["\n  "])),(a()(),s["ɵeld"](4,0,null,1,2,"p",[["text-center",""]],null,null,null,null,null)),(a()(),s["ɵted"](5,null,["",""])),s["ɵpid"](131072,V.a,[w.a,s.ChangeDetectorRef]),(a()(),s["ɵted"](-1,1,["\n  "])),(a()(),s["ɵand"](16777216,null,1,1,null,i)),s["ɵdid"](9,16384,null,0,B.i,[s.ViewContainerRef,s.TemplateRef],{ngIf:[0,"ngIf"]},null),(a()(),s["ɵted"](-1,1,["\n  \n  "])),(a()(),s["ɵeld"](11,0,null,1,5,"ion-row",[["class","row"]],null,null,null,null,null)),s["ɵdid"](12,16384,null,0,x.a,[],null,null),(a()(),s["ɵted"](-1,null,["\n    "])),(a()(),s["ɵand"](16777216,null,null,1,null,e)),s["ɵdid"](15,802816,null,0,B.h,[s.ViewContainerRef,s.TemplateRef,s.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(a()(),s["ɵted"](-1,null,["\n  "])),(a()(),s["ɵted"](-1,1,["\n"])),(a()(),s["ɵted"](-1,null,["\n"]))],function(a,n){var t=n.component;a(n,9,0,t.qrcode);a(n,15,0,t.showTargets)},function(a,n){a(n,1,0,s["ɵnov"](n,2).statusbarPadding,s["ɵnov"](n,2)._hasRefresher);a(n,5,0,s["ɵunv"](n,5,0,s["ɵnov"](n,6).transform("SHARE_MODAL_TITLE")))})}Object.defineProperty(n,"__esModule",{value:!0});var s=t(1),r=(t(0),t(17),t(41)),o=t(22),g=t(164),d=t(36),u=(t(62),t(122)),c=function(){function a(a,n,t,i,e,l,s){if(this.navParams=a,this.viewCtrl=n,this.translate=t,this.nativeService=i,this.shareProvider=e,this.preload=l,this.handle=s,this.navTargets=[],this.showTargets=[],this.navigationDockTargetMapIds=[],this.isShareImage=!1,this.init(),this.navigationDockTargetMapIds=this.navParams.data.navigationDockTargetMapIds||[],this.browser=this.navParams.data.browser,this.isShareImage=this.navParams.data.isShareImage,this.shareMessage=this.navParams.data.shareMessage,this.qrcode=this.navParams.data.qrcode,this.callback=this.navParams.data.callback,this.handle.generate("enter share page",0,this.navParams.data),0==this.navigationDockTargetMapIds.length)this.showTargets=this.navTargets;else for(var r=0,o=this.navTargets;r<o.length;r++){var g=o[r];this.navigationDockTargetMapIds.indexOf(g.navigationDockTargetMapId)>-1&&this.showTargets.push(g)}}return a.prototype.init=function(){this.navTargets=[{navigationDockTargetMapId:1,navigationDockId:1,navigationTargetId:1,navigationTargetName:this.translate.instant("BROWSER_POPOVER_WECHAT"),navigationTargetImagePath:"assets/svg/wechat.svg",navigationTargetLink:"device-livepoint",navigationTargetParams:"deviceId",navigationTargetVisible:!1,navigationTargetDescription:this.translate.instant("BROWSER_POPOVER_WECHAT")},{navigationDockTargetMapId:2,navigationDockId:1,navigationTargetId:2,navigationTargetName:this.translate.instant("BROWSER_POPOVER_WECHAT_MOMENT"),navigationTargetImagePath:"assets/svg/moment.svg",navigationTargetLink:"device-install-log",navigationTargetParams:"deviceId",navigationTargetVisible:!1,navigationTargetDescription:this.translate.instant("BROWSER_POPOVER_WECHAT_MOMENT")},{navigationDockTargetMapId:3,navigationDockId:1,navigationTargetId:3,navigationTargetName:this.translate.instant("BROWSER_POPOVER_WEBLOG"),navigationTargetImagePath:"assets/img/share/sinaweibo.png",navigationTargetLink:"maintenance-info",navigationTargetParams:"deviceId",navigationTargetVisible:!1,navigationTargetDescription:this.translate.instant("BROWSER_POPOVER_WEBLOG")},{navigationDockTargetMapId:4,navigationDockId:1,navigationTargetId:4,navigationTargetName:this.translate.instant("BROWSER_POPOVER_REFRESH"),navigationTargetImagePath:"assets/svg/refresh.svg",navigationTargetLink:"repair-record",navigationTargetParams:"deviceId",navigationTargetVisible:!1,navigationTargetDescription:this.translate.instant("BROWSER_POPOVER_REFRESH")},{navigationDockTargetMapId:5,navigationDockId:1,navigationTargetId:5,navigationTargetName:this.translate.instant("BROWSER_POPOVER_COPYURL"),navigationTargetImagePath:"assets/svg/copy.svg",navigationTargetLink:"repair-record",navigationTargetParams:"deviceId",navigationTargetVisible:!1,navigationTargetDescription:this.translate.instant("BROWSER_POPOVER_COPYURL")},{navigationDockTargetMapId:6,navigationDockId:1,navigationTargetId:6,navigationTargetName:this.translate.instant("BROWSER_POPOVER_COLLECT"),navigationTargetImagePath:"assets/img/shoucang.png",navigationTargetLink:"repair-record",navigationTargetParams:"deviceId",navigationTargetVisible:!1,navigationTargetDescription:this.translate.instant("BROWSER_POPOVER_COLLECT")},{navigationDockTargetMapId:7,navigationDockId:1,navigationTargetId:7,navigationTargetName:"好友",navigationTargetImagePath:o.h,navigationTargetLink:"repair-record",navigationTargetParams:"deviceId",navigationTargetVisible:!1,navigationTargetDescription:"好友"}]},a.prototype.do=function(a){var n=this;switch(a.navigationDockTargetMapId){case 1:this.isShareImage?this.shareProvider.shareImageWxSession(this.shareMessage).subscribe(function(a){n.viewCtrl.dismiss()}):this.shareProvider.shareWebPageWxSession(this.shareMessage).subscribe(function(a){n.viewCtrl.dismiss()});break;case 2:this.isShareImage?this.shareProvider.shareImageWxTimeLine(this.shareMessage).subscribe(function(a){n.viewCtrl.dismiss()}):this.shareProvider.shareWebPageWxTimeLine(this.shareMessage).subscribe(function(a){n.viewCtrl.dismiss()});break;case 3:break;case 7:this.preload.openContactChooserPage({callback:this.callback,type:1})}},a}(),v=function(){return function(){}}(),h=t(594),m=t(595),T=t(596),p=t(597),P=t(598),I=t(599),f=t(600),R=t(601),b=t(602),O=t(253),E=t(1066),k=t(46),_=t(4),D=t(7),C=t(14),M=t(13),S=t(70),W=t(8),L=t(44),V=t(250),w=t(52),B=t(25),x=t(254),N=t(19),y=t(21),q=s["ɵcrt"]({encapsulation:2,styles:[],data:{}}),F=s["ɵccf"]("page-share",c,function(a){return s["ɵvid"](0,[(a()(),s["ɵeld"](0,0,null,null,1,"page-share",[],null,null,null,l,q)),s["ɵdid"](1,49152,null,0,c,[N.a,W.a,w.a,y.a,u.a,g.a,r.a],null,null)],null,null)},{},{},[]),A=t(33),H=t(109),$=t(110),j=t(112),G=t(111),U=t(159),Y=t(248),J=t(71);t.d(n,"SharePageModuleNgFactory",function(){return Z});var Z=s["ɵcmf"](v,[],function(a){return s["ɵmod"]([s["ɵmpd"](512,s.ComponentFactoryResolver,s["ɵCodegenComponentFactoryResolver"],[[8,[h.a,m.a,T.a,p.a,P.a,I.a,f.a,R.a,b.a,F]],[3,s.ComponentFactoryResolver],s.NgModuleRef]),s["ɵmpd"](4608,B.k,B.j,[s.LOCALE_ID,[2,B.s]]),s["ɵmpd"](4608,A.u,A.u,[]),s["ɵmpd"](4608,A.d,A.d,[]),s["ɵmpd"](4608,H.b,H.a,[]),s["ɵmpd"](4608,$.a,$.b,[]),s["ɵmpd"](4608,j.b,j.a,[]),s["ɵmpd"](4608,G.b,G.a,[]),s["ɵmpd"](4608,w.a,w.a,[U.a,H.b,$.a,j.b,G.b,w.b,w.c]),s["ɵmpd"](512,B.b,B.b,[]),s["ɵmpd"](512,A.s,A.s,[]),s["ɵmpd"](512,A.h,A.h,[]),s["ɵmpd"](512,A.q,A.q,[]),s["ɵmpd"](512,Y.a,Y.a,[]),s["ɵmpd"](512,Y.b,Y.b,[]),s["ɵmpd"](512,d.a,d.a,[]),s["ɵmpd"](512,v,v,[]),s["ɵmpd"](256,J.a,c,[]),s["ɵmpd"](256,w.c,void 0,[]),s["ɵmpd"](256,w.b,void 0,[])])})}});