(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{KZI5:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class t{}var o=e("pMnS"),i=e("oBZk"),a=e("ZZ/e"),s=e("s7LF"),r=e("SVse"),b=e("TSSN"),g=e("mrSG"),h=e("4DE5"),d=e("bl9C"),c=e("n90K"),C=e("ZwiA"),p=e("m6VD"),m=e("riPR"),v=e("VvKu"),D=e("hAUF"),k=(e("Q1LM"),e("OjQg")),S=e.n(k);class y{constructor(l,n,e,u,t,o,i){this.navCtrl=l,this.sqlite=n,this.eventsService=e,this.session=u,this.storage=t,this.hand=o,this.widgetProvider=i,this.MassFlag=!1,this.showSocial=!1,this.isShowScreenShot=!1,this.isOnlyRecordError=!0,this.enabledLocalSetting=!1,this.isLoaded=!1,this.browserCoreKey="browserCore",this.browserCore=!1,this.openWay=d.v.IFRAME,this.openWays=[],this.enableVCLG=!1,this.init(),this.pages=[],this.pages.push({url:"CommunityPage",name:"Community"}),this.pages.push({url:"LitteWidgetPage",name:"litte"}),this.pages.push({url:"ContactPage",name:"Contact"}),this.pages.push({url:"MessageChatPage",name:"MessageChat",params:{widgetName:"\u5c0f\u5b9d",widgetId:"iproud"}}),this.pages.push({url:"HandleHistoryPage",name:"HandleHistory"}),this.pages.push({url:"SqliteTestPage",name:"SqliteTest"}),this.pages.push({url:"TestBindempPage",name:"TestBindemp"}),this.pages.push({url:"SendMessagePage",name:"SendMessage"}),this.pages.push({url:"LoginByWechatPage",name:"Plugin's API"}),this.pages.push({url:"KeyboardPage",name:"KeyboardPage"}),this.pages.push({url:"VideoPage",name:"VideoPage"}),this.pages.push({url:"CommunityOptionPage",name:"CommunityOptionPage"}),this.pages.push({url:"FilePage",name:"FilePage"}),this.pages.push({url:"DownloadPage",name:"DownloadPage"})}initBrowserCore(){return g.b(this,void 0,void 0,(function*(){const l=yield this.storage.getItem(this.session.userId+"openWay"),n=yield this.storage.getItem(this.browserCoreKey);n&&(this.browserCore=n),l&&(this.openWay=l)}))}changeOpenWay(l){this.openWay=l,this.storage.setItem(this.session.userId+"openWay",this.openWay),this.eventsService.emit(v.p.ChangeBrowserOpenWay,this.browserCore,this.openWay)}init(){return g.b(this,void 0,void 0,(function*(){"enabled"===localStorage.getItem("vconsole-enabled")&&(this.enableVCLG=!0),this.initBrowserCore(),this.browserCoreKey=this.session.userId+this.browserCoreKey;for(const l of Object.keys(d.v))this.openWays.push({label:l,value:d.v[l]});this.enabledLocalSetting=yield this.storage.getItem(d.E.SETTING.ENABLE_LOCAL_SETTING_SOCIAL),this.MassFlag=yield this.storage.getItem(d.E.SETTING.SHOWMASS),this.showSocial=yield this.storage.getItem(d.E.SETTING.SHOWSOCIAL),this.isOnlyRecordError=this.hand.isOnlyRecordError,this.isLoaded=!0}))}changeCollectFlag(){this.isLoaded&&(this.hand.isOnlyRecordError=this.isOnlyRecordError,this.storage.setItem(d.E.SETTING.ONLY_COLLECT_ERROR_INFO,this.isOnlyRecordError))}setMassFlag(){this.isLoaded&&(this.session.user.showMass=this.MassFlag,this.storage.setItem(d.E.SETTING.SHOWMASS,this.MassFlag),this.eventsService.emit(v.c.MassFlagChange))}setshowSocialFlag(){this.isLoaded&&(this.session.user.showSocial=this.showSocial,this.storage.setItem(d.E.SETTING.SHOWSOCIAL,this.showSocial),this.eventsService.emit(v.c.MassFlagChange))}setEnableMassFlag(){this.isLoaded&&(this.storage.setItem(d.E.SETTING.ENABLE_LOCAL_SETTING_SOCIAL,this.enabledLocalSetting),this.eventsService.emit(v.c.MassFlagChange))}changeBrowser(){this.widgetProvider.innerBrowser=this.browserCore,this.storage.setItem(this.session.userId+"openWay",this.openWay),this.storage.setItem(this.browserCoreKey,this.browserCore),this.eventsService.emit(v.p.ChangeBrowserOpenWay,this.browserCore,this.openWay)}showButton(){this.eventsService.emit(v.c.ShowScreenShotButton,this.isShowScreenShot)}openPage(l){let n=l.url;Object.keys(D.a).some(n=>n===l.url)&&(n=D.a[l.url]),this.navCtrl.navigateForward([n],{state:l.params})}enabledvConsole(){this.enableVCLG?(window.vconsole=new S.a,localStorage.setItem("vconsole-enabled","enabled")):(window.vconsole&&window.vconsole.destroy(),localStorage.setItem("vconsole-enabled",""))}}var q=e("sj5I"),B=u.pb({encapsulation:0,styles:[[""]],data:{}});function w(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,5,"ion-item",[["detail",""]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.openPage(l.context.$implicit)&&u),u}),i.Fb,i.y)),u.qb(1,49152,null,0,a.J,[u.h,u.k,u.x],{detail:[0,"detail"]},null),(l()(),u.rb(2,0,null,0,3,"ion-label",[],null,null,null,i.Gb,i.C)),u.qb(3,49152,null,0,a.P,[u.h,u.k,u.x],null,null),(l()(),u.rb(4,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Jb(5,null,["",""]))],(function(l,n){l(n,1,0,"")}),(function(l,n){l(n,5,0,n.context.$implicit.name)}))}function f(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,11,"ion-item",[],null,null,null,i.Fb,i.y)),u.qb(1,49152,null,0,a.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,2,"ion-label",[],null,null,null,i.Gb,i.C)),u.qb(3,49152,null,0,a.P,[u.h,u.k,u.x],null,null),(l()(),u.Jb(-1,0,["\u542f\u7528\u79ef\u5206\u6210\u5c31"])),(l()(),u.rb(5,0,null,0,6,"ion-toggle",[["checked","MassFlag"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,7)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,7)._handleIonChange(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.MassFlag=e)&&t),"ionChange"===n&&(t=!1!==o.setMassFlag()&&t),t}),i.gc,i.cb)),u.qb(6,49152,null,0,a.Db,[u.h,u.k,u.x],{checked:[0,"checked"]},null),u.qb(7,16384,null,0,a.d,[u.k],null,null),u.Gb(1024,null,s.i,(function(l){return[l]}),[a.d]),u.qb(9,671744,null,0,s.n,[[8,null],[8,null],[8,null],[6,s.i]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,s.j,null,[s.n]),u.qb(11,16384,null,0,s.k,[[4,s.j]],null,null)],(function(l,n){var e=n.component;l(n,6,0,"MassFlag"),l(n,9,0,e.MassFlag)}),(function(l,n){l(n,5,0,u.Db(n,11).ngClassUntouched,u.Db(n,11).ngClassTouched,u.Db(n,11).ngClassPristine,u.Db(n,11).ngClassDirty,u.Db(n,11).ngClassValid,u.Db(n,11).ngClassInvalid,u.Db(n,11).ngClassPending)}))}function I(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,11,"ion-item",[],null,null,null,i.Fb,i.y)),u.qb(1,49152,null,0,a.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,2,"ion-label",[],null,null,null,i.Gb,i.C)),u.qb(3,49152,null,0,a.P,[u.h,u.k,u.x],null,null),(l()(),u.Jb(-1,0,["\u542f\u7528\u793e\u7fa4\u529f\u80fd"])),(l()(),u.rb(5,0,null,0,6,"ion-toggle",[["checked","showSocial"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,7)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,7)._handleIonChange(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.showSocial=e)&&t),"ionChange"===n&&(t=!1!==o.setshowSocialFlag()&&t),t}),i.gc,i.cb)),u.qb(6,49152,null,0,a.Db,[u.h,u.k,u.x],{checked:[0,"checked"]},null),u.qb(7,16384,null,0,a.d,[u.k],null,null),u.Gb(1024,null,s.i,(function(l){return[l]}),[a.d]),u.qb(9,671744,null,0,s.n,[[8,null],[8,null],[8,null],[6,s.i]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,s.j,null,[s.n]),u.qb(11,16384,null,0,s.k,[[4,s.j]],null,null)],(function(l,n){var e=n.component;l(n,6,0,"showSocial"),l(n,9,0,e.showSocial)}),(function(l,n){l(n,5,0,u.Db(n,11).ngClassUntouched,u.Db(n,11).ngClassTouched,u.Db(n,11).ngClassPristine,u.Db(n,11).ngClassDirty,u.Db(n,11).ngClassValid,u.Db(n,11).ngClassInvalid,u.Db(n,11).ngClassPending)}))}function M(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,8,"ion-item",[],null,null,null,i.Fb,i.y)),u.qb(1,49152,null,0,a.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,2,"ion-label",[],null,null,null,i.Gb,i.C)),u.qb(3,49152,null,0,a.P,[u.h,u.k,u.x],null,null),(l()(),u.Jb(4,0,["",""])),(l()(),u.rb(5,0,null,0,3,"ion-radio",[["slot","start"]],null,[[null,"ionSelect"],[null,"ionBlur"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,8)._handleBlurEvent(e.target)&&t),"ionSelect"===n&&(t=!1!==u.Db(l,8)._handleIonSelect(e.target)&&t),"ionSelect"===n&&(t=!1!==o.changeOpenWay(l.context.$implicit.value)&&t),t}),i.Lb,i.G)),u.Gb(5120,null,s.i,(function(l){return[l]}),[a.Pb]),u.qb(7,49152,null,0,a.cb,[u.h,u.k,u.x],{checked:[0,"checked"],value:[1,"value"]},null),u.qb(8,16384,null,0,a.Pb,[u.k],null,null)],(function(l,n){l(n,7,0,n.context.$implicit.value==n.component.openWay,n.context.$implicit.value)}),(function(l,n){l(n,4,0,n.context.$implicit.label)}))}function E(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,16,"ion-list",[["class","advance-options "],["ngDefaultControl",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==u.Db(l,2)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u.Db(l,2).onTouched()&&t),"compositionstart"===n&&(t=!1!==u.Db(l,2)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u.Db(l,2)._compositionEnd(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.openWay=e)&&t),t}),i.Ib,i.D)),u.qb(1,49152,null,0,a.Q,[u.h,u.k,u.x],null,null),u.qb(2,16384,null,0,s.c,[u.B,u.k,[2,s.a]],null,null),u.Gb(1024,null,s.i,(function(l){return[l]}),[s.c]),u.qb(4,671744,null,0,s.n,[[8,null],[8,null],[8,null],[6,s.i]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,s.j,null,[s.n]),u.qb(6,16384,null,0,s.k,[[4,s.j]],null,null),(l()(),u.rb(7,0,null,0,9,"ion-radio-group",[],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0;return"ionBlur"===n&&(t=!1!==u.Db(l,10)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,10)._handleChangeEvent(e.target)&&t),t}),i.Kb,i.H)),u.Gb(5120,null,s.i,(function(l){return[l]}),[a.Qb]),u.qb(9,49152,null,0,a.db,[u.h,u.k,u.x],null,null),u.qb(10,16384,null,0,a.Qb,[u.k],null,null),(l()(),u.rb(11,0,null,0,5,"div",[],null,null,null,null,null)),(l()(),u.rb(12,0,null,null,2,"ion-list-header",[],null,null,null,i.Hb,i.E)),u.qb(13,49152,null,0,a.R,[u.h,u.k,u.x],null,null),(l()(),u.Jb(-1,0,[" How to open an app "])),(l()(),u.gb(16777216,null,null,1,null,M)),u.qb(16,278528,null,0,r.i,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,4,0,e.openWay),l(n,16,0,e.openWays)}),(function(l,n){l(n,0,0,u.Db(n,6).ngClassUntouched,u.Db(n,6).ngClassTouched,u.Db(n,6).ngClassPristine,u.Db(n,6).ngClassDirty,u.Db(n,6).ngClassValid,u.Db(n,6).ngClassInvalid,u.Db(n,6).ngClassPending)}))}function P(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,11,"ion-header",[],null,null,null,i.wb,i.s)),u.qb(1,49152,null,0,a.D,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.hc,i.db)),u.qb(3,49152,null,0,a.Eb,[u.h,u.k,u.x],null,null),(l()(),u.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.jb,i.f)),u.qb(5,49152,null,0,a.n,[u.h,u.k,u.x],null,null),(l()(),u.rb(6,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Db(l,8).onClick(e)&&t),t}),i.gb,i.c)),u.qb(7,49152,null,0,a.i,[u.h,u.k,u.x],{text:[0,"text"]},null),u.qb(8,16384,null,0,a.j,[[2,a.kb],a.Lb],null,null),(l()(),u.rb(9,0,null,0,2,"ion-title",[],null,null,null,i.fc,i.bb)),u.qb(10,49152,null,0,a.Cb,[u.h,u.k,u.x],null,null),(l()(),u.Jb(-1,0,["Beta"])),(l()(),u.rb(12,0,null,null,72,"ion-content",[],null,null,null,i.rb,i.n)),u.qb(13,49152,null,0,a.w,[u.h,u.k,u.x],null,null),(l()(),u.rb(14,0,null,0,68,"ion-list",[],null,null,null,i.Ib,i.D)),u.qb(15,49152,null,0,a.Q,[u.h,u.k,u.x],null,null),(l()(),u.gb(16777216,null,0,1,null,w)),u.qb(17,278528,null,0,r.i,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.rb(18,0,null,0,11,"ion-item",[],null,null,null,i.Fb,i.y)),u.qb(19,49152,null,0,a.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(20,0,null,0,2,"ion-label",[],null,null,null,i.Gb,i.C)),u.qb(21,49152,null,0,a.P,[u.h,u.k,u.x],null,null),(l()(),u.Jb(-1,0,["ShowScreenShotButton"])),(l()(),u.rb(23,0,null,0,6,"ion-toggle",[["checked","isShowScreenShot"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,25)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,25)._handleIonChange(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.isShowScreenShot=e)&&t),"ionChange"===n&&(t=!1!==o.showButton()&&t),t}),i.gc,i.cb)),u.qb(24,49152,null,0,a.Db,[u.h,u.k,u.x],{checked:[0,"checked"]},null),u.qb(25,16384,null,0,a.d,[u.k],null,null),u.Gb(1024,null,s.i,(function(l){return[l]}),[a.d]),u.qb(27,671744,null,0,s.n,[[8,null],[8,null],[8,null],[6,s.i]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,s.j,null,[s.n]),u.qb(29,16384,null,0,s.k,[[4,s.j]],null,null),(l()(),u.rb(30,0,null,0,11,"ion-item",[],null,null,null,i.Fb,i.y)),u.qb(31,49152,null,0,a.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(32,0,null,0,2,"ion-label",[],null,null,null,i.Gb,i.C)),u.qb(33,49152,null,0,a.P,[u.h,u.k,u.x],null,null),(l()(),u.Jb(-1,0,["\u542f\u7528\u672c\u5730\u8bbe\u7f6e\uff08\u793e\u7fa4\uff09"])),(l()(),u.rb(35,0,null,0,6,"ion-toggle",[["checked","enabledLocalSetting"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,37)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,37)._handleIonChange(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.enabledLocalSetting=e)&&t),"ionChange"===n&&(t=!1!==o.setEnableMassFlag()&&t),t}),i.gc,i.cb)),u.qb(36,49152,null,0,a.Db,[u.h,u.k,u.x],{checked:[0,"checked"]},null),u.qb(37,16384,null,0,a.d,[u.k],null,null),u.Gb(1024,null,s.i,(function(l){return[l]}),[a.d]),u.qb(39,671744,null,0,s.n,[[8,null],[8,null],[8,null],[6,s.i]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,s.j,null,[s.n]),u.qb(41,16384,null,0,s.k,[[4,s.j]],null,null),(l()(),u.gb(16777216,null,0,1,null,f)),u.qb(43,16384,null,0,r.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,I)),u.qb(45,16384,null,0,r.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.rb(46,0,null,0,11,"ion-item",[],null,null,null,i.Fb,i.y)),u.qb(47,49152,null,0,a.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(48,0,null,0,2,"ion-label",[],null,null,null,i.Gb,i.C)),u.qb(49,49152,null,0,a.P,[u.h,u.k,u.x],null,null),(l()(),u.Jb(-1,0,["\u542f\u7528vConsole"])),(l()(),u.rb(51,0,null,0,6,"ion-toggle",[["checked","enableVCLG"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,53)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,53)._handleIonChange(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.enableVCLG=e)&&t),"ionChange"===n&&(t=!1!==o.enabledvConsole()&&t),t}),i.gc,i.cb)),u.qb(52,49152,null,0,a.Db,[u.h,u.k,u.x],{checked:[0,"checked"]},null),u.qb(53,16384,null,0,a.d,[u.k],null,null),u.Gb(1024,null,s.i,(function(l){return[l]}),[a.d]),u.qb(55,671744,null,0,s.n,[[8,null],[8,null],[8,null],[6,s.i]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,s.j,null,[s.n]),u.qb(57,16384,null,0,s.k,[[4,s.j]],null,null),(l()(),u.rb(58,0,null,0,11,"ion-item",[],null,null,null,i.Fb,i.y)),u.qb(59,49152,null,0,a.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(60,0,null,0,2,"ion-label",[],null,null,null,i.Gb,i.C)),u.qb(61,49152,null,0,a.P,[u.h,u.k,u.x],null,null),(l()(),u.Jb(-1,0,["CollectErrorOnly"])),(l()(),u.rb(63,0,null,0,6,"ion-toggle",[["checked","isOnlyRecordError"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,65)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,65)._handleIonChange(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.isOnlyRecordError=e)&&t),"ionChange"===n&&(t=!1!==o.changeCollectFlag()&&t),t}),i.gc,i.cb)),u.qb(64,49152,null,0,a.Db,[u.h,u.k,u.x],{checked:[0,"checked"]},null),u.qb(65,16384,null,0,a.d,[u.k],null,null),u.Gb(1024,null,s.i,(function(l){return[l]}),[a.d]),u.qb(67,671744,null,0,s.n,[[8,null],[8,null],[8,null],[6,s.i]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,s.j,null,[s.n]),u.qb(69,16384,null,0,s.k,[[4,s.j]],null,null),(l()(),u.rb(70,0,null,0,12,"ion-item",[],null,null,null,i.Fb,i.y)),u.qb(71,49152,null,0,a.J,[u.h,u.k,u.x],null,null),(l()(),u.rb(72,0,null,0,3,"ion-label",[],null,null,null,i.Gb,i.C)),u.qb(73,49152,null,0,a.P,[u.h,u.k,u.x],null,null),(l()(),u.Jb(74,0,["",""])),u.Eb(131072,b.j,[b.k,u.h]),(l()(),u.rb(76,0,null,0,6,"ion-toggle",[["checked","browserCore"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,78)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,78)._handleIonChange(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.browserCore=e)&&t),"ionChange"===n&&(t=!1!==o.changeBrowser()&&t),t}),i.gc,i.cb)),u.qb(77,49152,null,0,a.Db,[u.h,u.k,u.x],{checked:[0,"checked"]},null),u.qb(78,16384,null,0,a.d,[u.k],null,null),u.Gb(1024,null,s.i,(function(l){return[l]}),[a.d]),u.qb(80,671744,null,0,s.n,[[8,null],[8,null],[8,null],[6,s.i]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,s.j,null,[s.n]),u.qb(82,16384,null,0,s.k,[[4,s.j]],null,null),(l()(),u.gb(16777216,null,0,1,null,E)),u.qb(84,16384,null,0,r.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,7,0,""),l(n,17,0,e.pages),l(n,24,0,"isShowScreenShot"),l(n,27,0,e.isShowScreenShot),l(n,36,0,"enabledLocalSetting"),l(n,39,0,e.enabledLocalSetting),l(n,43,0,e.enabledLocalSetting),l(n,45,0,e.enabledLocalSetting),l(n,52,0,"enableVCLG"),l(n,55,0,e.enableVCLG),l(n,64,0,"isOnlyRecordError"),l(n,67,0,e.isOnlyRecordError),l(n,77,0,"browserCore"),l(n,80,0,e.browserCore),l(n,84,0,e.browserCore)}),(function(l,n){l(n,23,0,u.Db(n,29).ngClassUntouched,u.Db(n,29).ngClassTouched,u.Db(n,29).ngClassPristine,u.Db(n,29).ngClassDirty,u.Db(n,29).ngClassValid,u.Db(n,29).ngClassInvalid,u.Db(n,29).ngClassPending),l(n,35,0,u.Db(n,41).ngClassUntouched,u.Db(n,41).ngClassTouched,u.Db(n,41).ngClassPristine,u.Db(n,41).ngClassDirty,u.Db(n,41).ngClassValid,u.Db(n,41).ngClassInvalid,u.Db(n,41).ngClassPending),l(n,51,0,u.Db(n,57).ngClassUntouched,u.Db(n,57).ngClassTouched,u.Db(n,57).ngClassPristine,u.Db(n,57).ngClassDirty,u.Db(n,57).ngClassValid,u.Db(n,57).ngClassInvalid,u.Db(n,57).ngClassPending),l(n,63,0,u.Db(n,69).ngClassUntouched,u.Db(n,69).ngClassTouched,u.Db(n,69).ngClassPristine,u.Db(n,69).ngClassDirty,u.Db(n,69).ngClassValid,u.Db(n,69).ngClassInvalid,u.Db(n,69).ngClassPending),l(n,74,0,u.Kb(n,74,0,u.Db(n,75).transform("SETTINGS_BROWSER_CORE"))),l(n,76,0,u.Db(n,82).ngClassUntouched,u.Db(n,82).ngClassTouched,u.Db(n,82).ngClassPristine,u.Db(n,82).ngClassDirty,u.Db(n,82).ngClassValid,u.Db(n,82).ngClassInvalid,u.Db(n,82).ngClassPending)}))}function L(l){return u.Lb(0,[(l()(),u.rb(0,0,null,null,1,"page-beta",[],null,null,null,P,B)),u.qb(1,49152,null,0,y,[a.Lb,p.a,m.a,C.a,c.a,h.a,q.a],null,null)],null,null)}var G=u.nb("page-beta",y,L,{},{},[]),x=e("iInd"),O=e("j1ZV");e.d(n,"BetaPageModuleNgFactory",(function(){return F}));var F=u.ob(t,[],(function(l){return u.Ab([u.Bb(512,u.j,u.Z,[[8,[o.a,G]],[3,u.j],u.v]),u.Bb(4608,r.l,r.k,[u.s,[2,r.A]]),u.Bb(4608,a.c,a.c,[u.x,u.g]),u.Bb(4608,a.Kb,a.Kb,[a.c,u.j,u.p]),u.Bb(4608,a.Ob,a.Ob,[a.c,u.j,u.p]),u.Bb(4608,s.r,s.r,[]),u.Bb(4608,s.d,s.d,[]),u.Bb(4608,b.g,b.f,[]),u.Bb(4608,b.c,b.e,[]),u.Bb(4608,b.i,b.d,[]),u.Bb(4608,b.b,b.a,[]),u.Bb(4608,b.k,b.k,[b.l,b.g,b.c,b.i,b.b,b.m,b.n]),u.Bb(5120,u.d,(function(l,n,e){return[a.Ub(l,n,e)]}),[a.Tb,r.c,u.x]),u.Bb(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),u.Bb(1073742336,b.h,b.h,[]),u.Bb(1073742336,r.b,r.b,[]),u.Bb(1073742336,a.Gb,a.Gb,[]),u.Bb(1073742336,s.q,s.q,[]),u.Bb(1073742336,s.h,s.h,[]),u.Bb(1073742336,s.o,s.o,[]),u.Bb(1073742336,O.a,O.a,[]),u.Bb(1073742336,t,t,[]),u.Bb(256,b.n,void 0,[]),u.Bb(256,b.m,void 0,[]),u.Bb(256,a.Tb,void 0,[]),u.Bb(1024,x.k,(function(){return[[{path:"",component:y}]]}),[])])}))}}]);