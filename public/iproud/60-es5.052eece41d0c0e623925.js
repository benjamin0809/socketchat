(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{cFso:function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),i=function(){return function(){}}(),u=l("pMnS"),o=l("oBZk"),a=l("ZZ/e"),s=l("Ip0R"),b=(l("Q1LM"),l("o0su"),l("ZYCi")),c=l("VnD/"),r=l("mrSG"),h=l("FFOo"),d=function(){function n(){}return n.prototype.call=function(n,t){return t.subscribe(new f(n))},n}(),f=function(n){function t(t){var l=n.call(this,t)||this;return l.hasPrev=!1,l}return r.d(t,n),t.prototype._next=function(n){var t;this.hasPrev?t=[this.prev,n]:this.hasPrev=!0,this.prev=n,t&&this.destination.next(t)},t}(h.a),g=l("U7T7"),T=function(){function n(n,t,l,e,i,u,o){this.translateService=n,this.session=t,this.jpushService=l,this.cd=e,this.cacheProvider=i,this.eventsService=u,this.router=o,this.isSubPage=!1,this.tab1Title=" ",this.tab2Title=" ",this.tab3Title=" ",this.tab4Title=" ",this.tab5Title=" ",this.showSocial=!1,this.newMessageCount=0}return n.prototype.ngAfterContentChecked=function(){this.showSocial=this.session.showSocial,this.detectChanges()},n.prototype.selectTab=function(n){this.tabRef.select(n)},n.prototype.detectChanges=function(){this.cd.destroyed||this.cd.detectChanges()},n.prototype._setTabText=function(){var n=this;this.translateService.get(["TABS_TAB1_TITLE","TABS_TAB2_TITLE","TABS_TAB3_TITLE","TABS_TAB4_TITLE","TABS_TAB5_TITLE"]).subscribe((function(t){n.tab1Title=t.TABS_TAB1_TITLE,n.tab2Title=t.TABS_TAB2_TITLE,n.tab3Title=t.TABS_TAB3_TITLE,n.tab4Title=t.TABS_TAB4_TITLE,n.tab5Title=t.TABS_TAB5_TITLE}))},n.prototype.ngOnInit=function(){var n=this;this.init("ngOnInit"),this._setTabText(),this.eventsService.on("selected:message",(function(){n.tabRef.select("message")})),this.eventsService.on(g.r.Changed,(function(t){n._setTabText()})),this.eventsService.on(g.k.ToHomeMain,(function(t){n.selectTab(0)})),this.eventsService.on(g.y.InfoChanged,(function(){n.init("from userinfo change")})),this.eventsService.on(g.u.CountChanged,(function(t){n.newMessageCount=t>0?t:0,n.jpushService.setIosIconBadgeNumber(t),n.detectChanges()})),this.eventsService.on(g.l.MassFlagChange,(function(){n.init("from massFlagChange")})),this.translateService.onLangChange.subscribe((function(t){n._setTabText()})),this.router.events.pipe(Object(c.a)((function(n){return n instanceof b.q})),(function(n){return n.lift(new d)})).subscribe((function(t){n.session.previousUrl=t[0].urlAfterRedirects}))},n.prototype.init=function(n){var t=this;this.session.userId&&(this.session.showSocial&&(this.showSocial=this.session.showSocial),this.cacheProvider.getSocialSetting().then((function(n){n.enableLocalSettingSocial&&(t.showSocial=n.showSocial,t.session.showSocial=n.showSocial),t.showSocial&&t.detectChanges()})).catch((function(n){console.error(n)})))},n}(),p=l("A7o+"),m=l("ZwiA"),C=l("athu"),S=l("TY44"),v=l("riPR"),k=e.rb({encapsulation:0,styles:[[".hide[_ngcontent-%COMP%]{display:none}.screen-shot[_ngcontent-%COMP%]{width:50px;height:50px;background-color:gray;opacity:.5;position:absolute;right:20px;bottom:50px;border-radius:50%}.club[_ngcontent-%COMP%]{display:block}.club-disable[_ngcontent-%COMP%], .hide-tabs[_ngcontent-%COMP%]   .tabbar[_ngcontent-%COMP%]{display:none}"]],data:{}});function w(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,2,"ion-badge",[["color","danger"]],null,null,null,o.hb,o.d)),e.sb(1,49152,null,0,a.l,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.Lb(2,0,["",""]))],(function(n,t){n(t,1,0,"danger")}),(function(n,t){n(t,2,0,t.component.newMessageCount)}))}function y(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,6,"ion-tab-button",[["tab","community"]],null,null,null,o.ac,o.W)),e.sb(1,49152,null,0,a.xb,[e.h,e.k,e.z],{tab:[0,"tab"]},null),(n()(),e.tb(2,0,null,0,1,"ion-icon",[["class","tab"],["name","ios-link"]],null,null,null,o.xb,o.t)),e.sb(3,49152,null,0,a.E,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.tb(4,0,null,0,2,"ion-label",[],null,null,null,o.Gb,o.C)),e.sb(5,49152,null,0,a.P,[e.h,e.k,e.z],null,null),(n()(),e.Lb(6,0,["",""]))],(function(n,t){n(t,1,0,"community"),n(t,3,0,"ios-link")}),(function(n,t){n(t,6,0,t.component.tab4Title)}))}function _(n){return e.Nb(0,[e.Jb(671088640,1,{tabRef:0}),(n()(),e.tb(1,0,null,null,36,"ion-tabs",[["id","rootTabs"]],null,[[null,"ionTabButtonClick"]],(function(n,t,l){var i=!0;return"ionTabButtonClick"===t&&(i=!1!==e.Fb(n,2).select(l.detail.tab)&&i),i}),o.bc,o.X)),e.sb(2,49152,[[1,4],["mainTabs",4]],1,a.yb,[a.Lb],null,null),e.Jb(335544320,2,{tabBar:0}),(n()(),e.tb(4,0,null,1,33,"ion-tab-bar",[["slot","bottom"]],null,null,null,o.Zb,o.V)),e.sb(5,49152,[[2,4]],0,a.wb,[e.h,e.k,e.z],null,null),(n()(),e.tb(6,0,null,0,6,"ion-tab-button",[["tab","home"]],null,null,null,o.ac,o.W)),e.sb(7,49152,null,0,a.xb,[e.h,e.k,e.z],{tab:[0,"tab"]},null),(n()(),e.tb(8,0,null,0,1,"ion-icon",[["class","tab"],["name","home"]],null,null,null,o.xb,o.t)),e.sb(9,49152,null,0,a.E,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.tb(10,0,null,0,2,"ion-label",[],null,null,null,o.Gb,o.C)),e.sb(11,49152,null,0,a.P,[e.h,e.k,e.z],null,null),(n()(),e.Lb(12,0,["",""])),(n()(),e.tb(13,0,null,0,8,"ion-tab-button",[["tab","message"]],null,null,null,o.ac,o.W)),e.sb(14,49152,null,0,a.xb,[e.h,e.k,e.z],{tab:[0,"tab"]},null),(n()(),e.tb(15,0,null,0,1,"ion-icon",[["class","tab"],["name","ios-text"]],null,null,null,o.xb,o.t)),e.sb(16,49152,null,0,a.E,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.tb(17,0,null,0,2,"ion-label",[],null,null,null,o.Gb,o.C)),e.sb(18,49152,null,0,a.P,[e.h,e.k,e.z],null,null),(n()(),e.Lb(19,0,["",""])),(n()(),e.ib(16777216,null,0,1,null,w)),e.sb(21,16384,null,0,s.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(22,0,null,0,6,"ion-tab-button",[["tab","widget"]],null,null,null,o.ac,o.W)),e.sb(23,49152,null,0,a.xb,[e.h,e.k,e.z],{tab:[0,"tab"]},null),(n()(),e.tb(24,0,null,0,1,"ion-icon",[["class","tab"],["name","md-apps"]],null,null,null,o.xb,o.t)),e.sb(25,49152,null,0,a.E,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.tb(26,0,null,0,2,"ion-label",[],null,null,null,o.Gb,o.C)),e.sb(27,49152,null,0,a.P,[e.h,e.k,e.z],null,null),(n()(),e.Lb(28,0,["",""])),(n()(),e.ib(16777216,null,0,1,null,y)),e.sb(30,16384,null,0,s.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(31,0,null,0,6,"ion-tab-button",[["tab","my"]],null,null,null,o.ac,o.W)),e.sb(32,49152,null,0,a.xb,[e.h,e.k,e.z],{tab:[0,"tab"]},null),(n()(),e.tb(33,0,null,0,1,"ion-icon",[["class","tab"],["name","person"]],null,null,null,o.xb,o.t)),e.sb(34,49152,null,0,a.E,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.tb(35,0,null,0,2,"ion-label",[],null,null,null,o.Gb,o.C)),e.sb(36,49152,null,0,a.P,[e.h,e.k,e.z],null,null),(n()(),e.Lb(37,0,["",""]))],(function(n,t){var l=t.component;n(t,7,0,"home"),n(t,9,0,"home"),n(t,14,0,"message"),n(t,16,0,"ios-text"),n(t,21,0,l.newMessageCount>0),n(t,23,0,"widget"),n(t,25,0,"md-apps"),n(t,30,0,l.showSocial),n(t,32,0,"my"),n(t,34,0,"person")}),(function(n,t){var l=t.component;n(t,12,0,l.tab1Title),n(t,19,0,l.tab2Title),n(t,28,0,l.tab3Title),n(t,37,0,l.tab5Title)}))}function P(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,1,"page-tabs",[],null,null,null,_,k)),e.sb(1,2211840,null,0,T,[p.k,m.a,C.a,e.h,S.a,v.a,b.m],null,null)],(function(n,t){n(t,1,0)}),null)}var A=e.pb("page-tabs",T,P,{},{},[]),B=l("gIcY"),M=function(){return l.e(26).then(l.bind(null,"kYd/")).then((function(n){return n.HomePageModuleNgFactory}))},L=function(){return Promise.all([l.e(0),l.e(62)]).then(l.bind(null,"nLkt")).then((function(n){return n.MessageSessionPageModuleNgFactory}))},x=function(){return Promise.all([l.e(2),l.e(65)]).then(l.bind(null,"8OFU")).then((function(n){return n.WidgetListPageModuleNgFactory}))},D=function(){return l.e(6).then(l.bind(null,"E0C0")).then((function(n){return n.WorkflowPageModuleNgFactory}))},I=function(){return Promise.all([l.e(0),l.e(25)]).then(l.bind(null,"55Fb")).then((function(n){return n.CommunityPageModuleNgFactory}))},z=function(){return l.e(63).then(l.bind(null,"FVpA")).then((function(n){return n.MyPageModuleNgFactory}))},E=function(){return function(){}}();l.d(t,"TabsPageModuleNgFactory",(function(){return F}));var F=e.qb(i,[],(function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[u.a,A]],[3,e.j],e.x]),e.Db(4608,s.l,s.k,[e.u,[2,s.A]]),e.Db(4608,a.c,a.c,[e.z,e.g]),e.Db(4608,a.Kb,a.Kb,[a.c,e.j,e.q]),e.Db(4608,a.Ob,a.Ob,[a.c,e.j,e.q]),e.Db(4608,B.r,B.r,[]),e.Db(4608,p.g,p.f,[]),e.Db(4608,p.c,p.e,[]),e.Db(4608,p.i,p.d,[]),e.Db(4608,p.b,p.a,[]),e.Db(4608,p.k,p.k,[p.l,p.g,p.c,p.i,p.b,p.m,p.n]),e.Db(1073742336,s.b,s.b,[]),e.Db(1073742336,a.Gb,a.Gb,[]),e.Db(1073742336,B.q,B.q,[]),e.Db(1073742336,B.h,B.h,[]),e.Db(1073742336,p.h,p.h,[]),e.Db(1073742336,b.n,b.n,[[2,b.t],[2,b.m]]),e.Db(1073742336,E,E,[]),e.Db(1073742336,i,i,[]),e.Db(1024,b.k,(function(){return[[{path:"tabs",component:T,children:[{path:"home",children:[{path:"",loadChildren:M}]},{path:"message",children:[{path:"",loadChildren:L}]},{path:"widget",children:[{path:"",loadChildren:x},{path:"workflow",loadChildren:D}]},{path:"community",children:[{path:"",loadChildren:I}]},{path:"my",children:[{path:"",loadChildren:z}]},{path:"",redirectTo:"/tabs/home",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/home",pathMatch:"full"}]]}),[]),e.Db(256,p.n,void 0,[]),e.Db(256,p.m,void 0,[])])}))}}]);