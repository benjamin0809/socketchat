(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"0DNq":function(t,n,l){"use strict";l.r(n);var e=l("8Y7J");class i{}var s=l("pMnS"),r=l("1bmy"),a=l("liwm"),u=l("riPR"),o=l("ZwiA"),c=l("TSSN"),h=l("oBZk"),d=l("ZZ/e"),b=l("SVse"),g=l("h5Qc"),m=l("qIgY"),p=l("n90K"),f=l("6m4Z"),v=l("TY44"),S=l("4DE5"),C=l("cUpR"),E=l("mrSG"),x=l("mGGX"),M=l("U7T7"),I=l("w6Z3"),_=(l("Q1LM"),l("o0su")),T=l("hAUF");class w extends x.h{constructor(t,n,l,e,i,s,r,a,u,o,c,h,d,b,g,m,p){super(p,T.b.MessagePage,a),this.navCtrl=t,this.actionSheetCtrl=n,this.eventsService=l,this.messageProvider=e,this.alertCtrl=i,this.widgetProvider=s,this.translateService=r,this.session=a,this.sanitizer=u,this.clipboard=o,this.cacheProvider=c,this.element=h,this.clubProvider=d,this.storage=b,this.commonService=g,this.cdf=m,this.router=p,this.messages=[],this.messageTitle="",this.isDataLoading=!1,this.isDataEmpty=!1,this.pageCount=10,this.unreadCount=0}ngOnInit(){this.messageTitle=this.params.widgetName,this.session.messageWidgetId=this.params.widgetId,this.unreadCount=this.messageProvider.getUnreadCount(),this.getCurrentWidget(),this.params.messages?(this.messages.push.apply(this.messages,this.params.messages.reverse()),this.finiteScroll=this.messages.length>=this.pageCount,this.refreshDisplaytime(),this.transHtml()):this.createArray(),this.eventsService.on(M.r.Changed,()=>{this.refreshDisplaytime()}),this.eventsService.on(M.y.Logined,t=>{this.createArray()}),this.eventsService.on(M.u.AddMessage,t=>{this.refreshSingleMessageTime(t),this.transSingleHtml(t),this.messages.unshift(t),this.unreadCount=this.messageProvider.getUnreadCount(),this.detectChanges()})}ngAfterViewInit(){this.setMessageTimer()}ngOnDestroy(){clearTimeout(this.timer)}backButtonText(){return this.unreadCount>99?"99+":0===this.unreadCount?"":this.unreadCount}getCurrentWidget(){return E.b(this,void 0,void 0,(function*(){if(this.currentWidget=this.widgetProvider.getWidgetById(this.session.messageWidgetId),!this.currentWidget){let t="";null!=this.session.user&&(t=this.session.user.employeeInfo.siteCode);const n=yield this.storage.getItem("siteCode");n&&(t=n);const l=this.params.fromType;if(["board","video","club"].some(t=>_.a.containsStringIgnore(t,l))){const n={id:this.params.widgetId,widgetName:this.params.widgetName,appPageName:"",iconUrl:this.params.widgetIcon,homeUrl:this.clubProvider.BoardDetail(this.params.widgetId,l,t)};this.currentWidget=n}}}))}openWidget(t){const n={url:t.appPageName||t.homeUrl,title:t.widgetName,description:"",imageUrl:t.iconUrl,appId:t.id.toString(),options:{canShare:t.canShare,allowCopyLink:t.allowCopyLink,allowOpenInBrowser:t.allowOpenInBrowser,useNativeBrowser:t.useNativeBrowser}};this.widgetProvider.openWebpage(n,this.router)}doRefresh(t){this.messages=[],this.createArray(t)}doInfinite(t){this.createArray(t)}createArray(t){this.isDataLoading=!0,this.messageProvider.queryMessage(this.session.messageWidgetId,this.pageCount,this.messages?this.messages.length:0,!0).subscribe(t=>{t&&(this.finiteScroll=t.length===this.pageCount,this.isDataLoading=!1,this.messages.push.apply(this.messages,t),this.refreshDisplaytime(),this.transHtml())},t=>{this.isDataEmpty=!0,this.isDataLoading=!1}),t&&t.target.complete()}scrollTopByHandle(){this.topId&&this.element.nativeElement.querySelector(`#${this.topId}`)}options(){return E.b(this,void 0,void 0,(function*(){let t=null;const n=[];this.currentWidget&&n.push({text:this.translateService.instant("APP_COMMON_ENTER")+" "+this.currentWidget.widgetName,handler:()=>{this.openWidget(this.currentWidget)}}),n.push({text:this.translateService.instant("APP_COMMON_CLEAR_MESSAGES"),handler:()=>{this.clearMessage()}}),n.push({text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),role:"cancel"}),t=yield this.actionSheetCtrl.create({buttons:n}),yield t.present()}))}onHold(t,n){n.target.classList.add("img-scaling");let l=null;const e=[];e.push({text:this.translateService.instant("MESSAGE_DELETE"),handler:()=>{this.showDeleteMsg(t)}}),_.a.containsStringIgnore(t.formatType,"image")&&e.push({text:this.translateService.instant("APP_COMMON_RELOAD_IAMGE"),handler:()=>{this.cacheProvider.reloadImage(t.imageUrl).subscribe(),t.imageUrl=t.imageUrl+"#reload"}}),t.redirectUrl||_.a.containsStringIgnore(t.formatType,"image")?e.push({text:this.translateService.instant("SHARE_MODAL_TITLE"),handler:()=>{this.openSharePage(t)}}):e.push({text:this.translateService.instant("APP_COMMON_COPY_MESSAGE"),handler:()=>{this.clipboard.copy(t.abstract)}}),e.push({text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),role:"cancel"}),this.cacheProvider.decodeQRCode(t.imageUrl).subscribe(i=>E.b(this,void 0,void 0,(function*(){e.splice(e.length-1,1,{text:this.translateService.instant("APP_COMMON_EXTRACT_QRCODE"),handler:()=>{this.openQRCodeUrl(i,t)}}),e.push({text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),role:"cancel"});const s=yield this.actionSheetCtrl.create({buttons:e});yield s.present(),l&&l.dismiss(),s.onDidDismiss().then(()=>{n.target.classList.remove("img-scaling")})})),t=>E.b(this,void 0,void 0,(function*(){l=yield this.actionSheetCtrl.create({buttons:e}),yield l.present(),l.onDidDismiss().then(()=>{n.target.classList.remove("img-scaling")})})))}openSharePage(t){this.commonService.openShareModal({shareMessage:{title:t.title,description:t.abstract,thumb:t.imageUrl||M.f,resource:t.redirectUrl||t.imageUrl},callback:t=>{},isShareImage:!t.redirectUrl,navigationDockTargetMapIds:[1,2]})}openQRCodeUrl(t,n){const l={url:t,title:n.title,description:n.abstract,imageUrl:n.imageUrl,appId:n.widgetId.toString(),options:{canShare:!0}};this.widgetProvider.openWebpage(l,this.router,!0)}buildMessageForWechatShare(t){return{title:t.title||t.abstract||t.formatType,description:t.abstract,thumb:t.widgetIcon,resource:t.imageUrl}}goMessageDetail(t,n){if(t.isRead=!0,this.messageProvider.setMessageIsRead(t.id),!t.redirectUrl&&!n)return;const l={url:n||t.redirectUrl,title:null==t.title?t.widgetName:t.title,description:t.abstract,imageUrl:t.imageUrl,appId:null==t.widgetId?"":t.widgetId.toString(),options:{}};this.widgetProvider.openWebpage(l,this.router)}clearMessage(){return E.b(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({header:this.translateService.instant("APP_COMMON_HANDLE_TIPS"),message:this.translateService.instant("MESSAGE_CLEAR_MESSAGE"),buttons:[{text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),handler:()=>{}},{text:this.translateService.instant("MESSAGE_DELETE_CONFIRM"),handler:()=>{this.messages=[],this.isDataEmpty=!0,this.messageProvider.deleteMessageBySessionId(this.session.messageWidgetId)}}]})).present()}))}showDeleteMsg(t){return E.b(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({header:this.translateService.instant("MESSAGE_DELETE_TITLE"),message:this.translateService.instant("MESSAGE_DELETE_MESSAGE"),buttons:[{text:this.translateService.instant("MESSAGE_DELETE_CANCEL"),handler:()=>{}},{text:this.translateService.instant("MESSAGE_DELETE_CONFIRM"),handler:()=>{const n=this.messages.findIndex(n=>n.id===t.id);this.messages.splice(n,1),this.detectChanges(),this.messageProvider.deleteMessage(t.id)}}]});yield n.present()}))}setMessageTimer(){this.timer=setInterval(()=>{this.refreshDisplaytime()},6e4)}detectChanges(){this.cdf.destroyed||this.cdf.detectChanges()}refreshDisplaytime(){for(const t of this.messages)t.displayTime=_.a.formatMessageTime(this.session.language,t.receiveTime)}lowerCaseFormatType(t){return t?t.toLowerCase():""}refreshSingleMessageTime(t){t.displayTime=_.a.formatMessageTime(this.session.language,t.receiveTime)}transSingleHtml(t){t.abstract&&(t.displayAbstract=this.messageProvider.transformHtml(t.abstract),t.displayAbstract=this.sanitizer.bypassSecurityTrustHtml(t.displayAbstract))}transHtml(){for(const t of this.messages)t.abstract&&(t.displayAbstract=this.messageProvider.transformHtml(t.abstract),t.displayAbstract=this.sanitizer.bypassSecurityTrustHtml(t.displayAbstract))}abstractOnClick(t,n){t.stopPropagation();const l=(t=t||window.event).target||t.srcElement;this.goMessageDetail(n,"javascript:void(0)"===l.href?l.title||l.innerText:"")}scrollToBottom(){setTimeout(()=>{this.content.scrollToBottom()},10)}}var y=l("fg/S"),P=l("sj5I"),O=l("kkXu"),k=l("OlR4"),L=l("iInd"),A=e.pb({encapsulation:0,styles:[['@charset "UTF-8";ion-item[_ngcontent-%COMP%]{--border-width:0;--border-color:transparent}.item-options-ios.item-options-end[_ngcontent-%COMP%]{border-bottom-width:0}ion-card-title[_ngcontent-%COMP%]{padding:0 16px}.card-ios[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]{touch-action:inherit!important;box-shadow:0 0 0!important}.sc-ion-card-ios-h[_ngcontent-%COMP%]{margin-top:10px}.image[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.img-scaling[_ngcontent-%COMP%]{-webkit-transform:scale(.95)!important;transform:scale(.95)!important;box-shadow:0 0 10px 1px #ccc}.label-ios[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{white-space:normal}.image-container[_ngcontent-%COMP%]{width:100%;padding-bottom:56.25%;position:relative}.image-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{position:absolute;top:0;width:100%}.datetime[_ngcontent-%COMP%]{text-align:center;font-size:.8rem;margin-bottom:-5px;margin-top:20px}.titleInImage[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:var(--bg-primary-color);font-size:1.8rem;line-height:16px;margin-top:-33px;z-index:2;padding:8px 5px;opacity:.8;position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.no-message[_ngcontent-%COMP%]{color:#838383;height:60px;padding:15px;text-align:center;font-size:12px}.no-more[_ngcontent-%COMP%]{text-align:center;color:#838383;height:100px;padding:15px;font-size:12px;margin:50% auto}.red-point[_ngcontent-%COMP%]{position:relative}.red-point[_ngcontent-%COMP%]::after{content:"\u25cf";position:absolute;z-index:2;left:0;margin-left:-16px;margin-top:0;color:#1a83d4;opacity:.8;font-size:90%}.message-container[_ngcontent-%COMP%]{padding-bottom:30px}.item-ios[_ngcontent-%COMP%]{background:var(-bg-primary-color)!important}.datetime[_ngcontent-%COMP%]{color:#bbb}']],data:{}});function U(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,2,"nodata",[["translateKey","MESSAGE_EMPTY"]],null,null,null,r.b,r.a)),e.qb(1,114688,null,0,a.a,[u.a,o.a,e.h,c.k],{text:[0,"text"],translateKey:[1,"translateKey"]},null),e.Eb(131072,c.j,[c.k,e.h])],(function(t,n){t(n,1,0,e.vb(1,"",e.Kb(n,1,0,e.Db(n,2).transform("MESSAGE_EMPTY")),""),"MESSAGE_EMPTY")}),null)}function R(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,0,"span",[["class","red-point"]],null,null,null,null,null))],null,null)}function D(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,3,"ion-card-title",[],null,null,null,h.mb,h.j)),e.qb(1,49152,null,0,d.s,[e.h,e.k,e.x],null,null),(t()(),e.rb(2,0,null,0,1,"h2",[],null,null,null,null,null)),(t()(),e.Jb(3,null,["",""]))],null,(function(t,n){t(n,3,0,n.parent.parent.context.$implicit.title)}))}function q(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,5,"div",[],null,null,null,null,null)),(t()(),e.gb(16777216,null,null,1,null,D)),e.qb(2,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(t()(),e.rb(3,0,null,null,2,"ion-card-content",[],null,null,null,h.kb,h.h)),e.qb(4,49152,null,0,d.p,[e.h,e.k,e.x],null,null),(t()(),e.rb(5,0,null,0,0,"div",[],[[8,"innerHTML",1]],[[null,"click"]],(function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.abstractOnClick(l,t.parent.context.$implicit)&&e),e}),null,null))],(function(t,n){t(n,2,0,null!=n.parent.context.$implicit.title)}),(function(t,n){t(n,5,0,n.parent.context.$implicit.displayAbstract)}))}function N(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,2,"div",[],null,null,null,null,null)),(t()(),e.rb(1,0,null,null,1,"img-lazy-load",[["class","image"]],null,null,null,g.b,g.a)),e.qb(2,638976,null,0,m.a,[p.a,e.h,f.a,u.a,v.a,S.a,C.b],{src:[0,"src"]},null)],(function(t,n){t(n,2,0,n.parent.context.$implicit.imageUrl)}),null)}function B(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,3,"ion-card-title",[],null,null,null,h.mb,h.j)),e.qb(1,49152,null,0,d.s,[e.h,e.k,e.x],null,null),(t()(),e.rb(2,0,null,0,1,"h2",[],null,null,null,null,null)),(t()(),e.Jb(3,null,["",""]))],null,(function(t,n){t(n,3,0,n.parent.parent.context.$implicit.title)}))}function G(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,4,"div",[],null,null,null,null,null)),(t()(),e.gb(16777216,null,null,1,null,B)),e.qb(2,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(t()(),e.rb(3,0,null,null,1,"img-lazy-load",[["class","image"]],null,null,null,g.b,g.a)),e.qb(4,638976,null,0,m.a,[p.a,e.h,f.a,u.a,v.a,S.a,C.b],{src:[0,"src"]},null)],(function(t,n){t(n,2,0,null!=n.parent.context.$implicit.title),t(n,4,0,n.parent.context.$implicit.imageUrl)}),null)}function W(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(t()(),e.Jb(1,null,[" "," "]))],null,(function(t,n){t(n,1,0,n.parent.parent.context.$implicit.title)}))}function $(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,4,"div",[["class","titleInImage"]],null,null,null,null,null)),(t()(),e.rb(1,0,null,null,1,"img-lazy-load",[["class","image"]],null,null,null,g.b,g.a)),e.qb(2,638976,null,0,m.a,[p.a,e.h,f.a,u.a,v.a,S.a,C.b],{src:[0,"src"]},null),(t()(),e.gb(16777216,null,null,1,null,W)),e.qb(4,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(t,n){t(n,2,0,n.parent.context.$implicit.imageUrl),t(n,4,0,null!=n.parent.context.$implicit.title)}),null)}function j(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,3,"ion-card-title",[],null,null,null,h.mb,h.j)),e.qb(1,49152,null,0,d.s,[e.h,e.k,e.x],null,null),(t()(),e.rb(2,0,null,0,1,"h2",[],null,null,null,null,null)),(t()(),e.Jb(3,null,["",""]))],null,(function(t,n){t(n,3,0,n.parent.parent.context.$implicit.title)}))}function J(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,1,"img-lazy-load",[["class","image"]],null,null,null,g.b,g.a)),e.qb(1,638976,null,0,m.a,[p.a,e.h,f.a,u.a,v.a,S.a,C.b],{src:[0,"src"]},null)],(function(t,n){t(n,1,0,n.parent.parent.context.$implicit.imageUrl)}),null)}function H(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,7,"div",[],null,null,null,null,null)),(t()(),e.gb(16777216,null,null,1,null,j)),e.qb(2,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(t()(),e.gb(16777216,null,null,1,null,J)),e.qb(4,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(t()(),e.rb(5,0,null,null,2,"ion-card-content",[],null,null,null,h.kb,h.h)),e.qb(6,49152,null,0,d.p,[e.h,e.k,e.x],null,null),(t()(),e.rb(7,0,null,0,0,"div",[],[[8,"innerHTML",1]],[[null,"click"]],(function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.abstractOnClick(l,t.parent.context.$implicit)&&e),e}),null,null))],(function(t,n){t(n,2,0,null!=n.parent.context.$implicit.title),t(n,4,0,n.parent.context.$implicit.imageUrl)}),(function(t,n){t(n,7,0,n.parent.context.$implicit.displayAbstract)}))}function F(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,3,"ion-card-title",[],null,null,null,h.mb,h.j)),e.qb(1,49152,null,0,d.s,[e.h,e.k,e.x],null,null),(t()(),e.rb(2,0,null,0,1,"h2",[],null,null,null,null,null)),(t()(),e.Jb(3,null,["",""]))],null,(function(t,n){t(n,3,0,n.parent.parent.context.$implicit.title)}))}function z(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,1,"img-lazy-load",[["class","image"]],null,null,null,g.b,g.a)),e.qb(1,638976,null,0,m.a,[p.a,e.h,f.a,u.a,v.a,S.a,C.b],{src:[0,"src"]},null)],(function(t,n){t(n,1,0,n.parent.parent.context.$implicit.imageUrl)}),null)}function V(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,7,"div",[],null,null,null,null,null)),(t()(),e.gb(16777216,null,null,1,null,F)),e.qb(2,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(t()(),e.gb(16777216,null,null,1,null,z)),e.qb(4,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(t()(),e.rb(5,0,null,null,2,"ion-card-content",[],null,null,null,h.kb,h.h)),e.qb(6,49152,null,0,d.p,[e.h,e.k,e.x],null,null),(t()(),e.rb(7,0,null,0,0,"div",[],[[8,"innerHTML",1]],[[null,"click"]],(function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.abstractOnClick(l,t.parent.context.$implicit)&&e),e}),null,null))],(function(t,n){t(n,2,0,null!=n.parent.context.$implicit.title),t(n,4,0,n.parent.context.$implicit.imageUrl)}),(function(t,n){t(n,7,0,n.parent.context.$implicit.displayAbstract)}))}function X(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,23,"div",[],null,null,null,null,null)),e.qb(1,16384,null,0,b.n,[],{ngSwitch:[0,"ngSwitch"]},null),(t()(),e.rb(2,0,null,null,4,"div",[["class","datetime "]],null,null,null,null,null)),(t()(),e.gb(16777216,null,null,1,null,R)),e.qb(4,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(t()(),e.rb(5,0,null,null,1,"span",[["class","time-value"]],null,null,null,null,null)),(t()(),e.Jb(6,null,["",""])),(t()(),e.rb(7,0,null,null,16,"ion-card",[],[[8,"id",0]],[[null,"press"],[null,"click"]],(function(t,n,l){var e=!0,i=t.component;return"press"===n&&(e=!1!==i.onHold(t.context.$implicit,l)&&e),"click"===n&&(e=!1!==i.goMessageDetail(t.context.$implicit)&&e),e}),h.nb,h.g)),e.qb(8,49152,null,0,d.o,[e.h,e.k,e.x],null,null),e.Gb(512,null,b.v,b.w,[e.q,e.r,e.k,e.B]),e.qb(10,278528,null,0,b.h,[b.v],{ngClass:[0,"ngClass"]},null),e.Fb(11,{"card-ios-canClick":0}),(t()(),e.gb(16777216,null,0,1,null,q)),e.qb(13,278528,null,0,b.o,[e.M,e.J,b.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(t()(),e.gb(16777216,null,0,1,null,N)),e.qb(15,278528,null,0,b.o,[e.M,e.J,b.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(t()(),e.gb(16777216,null,0,1,null,G)),e.qb(17,278528,null,0,b.o,[e.M,e.J,b.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(t()(),e.gb(16777216,null,0,1,null,$)),e.qb(19,278528,null,0,b.o,[e.M,e.J,b.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(t()(),e.gb(16777216,null,0,1,null,H)),e.qb(21,278528,null,0,b.o,[e.M,e.J,b.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(t()(),e.gb(16777216,null,0,1,null,V)),e.qb(23,16384,null,0,b.p,[e.M,e.J,b.n],null,null)],(function(t,n){t(n,1,0,n.component.lowerCaseFormatType(n.context.$implicit.formatType)),t(n,4,0,!n.context.$implicit.isRead);var l=t(n,11,0,n.context.$implicit.redirectUrl);t(n,10,0,l),t(n,13,0,"text"),t(n,15,0,"image"),t(n,17,0,"headerimage"),t(n,19,0,"titleinimage"),t(n,21,0,"richtextimage")}),(function(t,n){t(n,6,0,n.context.$implicit.displayTime),t(n,7,0,n.context.$implicit.id)}))}function Y(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],(function(t,n,l){var e=!0;return"ionInfinite"===n&&(e=!1!==t.component.doInfinite(l)&&e),e}),h.Ab,h.v)),e.qb(1,49152,null,0,d.G,[e.h,e.k,e.x],null,null),(t()(),e.rb(2,0,null,0,1,"ion-infinite-scroll-content",[["aria-posinset","button"],["loadingSpinner","bubbles"]],null,null,null,h.zb,h.w)),e.qb(3,49152,null,0,d.H,[e.h,e.k,e.x],{loadingSpinner:[0,"loadingSpinner"]},null)],(function(t,n){t(n,3,0,"bubbles")}),null)}function K(t){return e.Lb(0,[e.Hb(671088640,1,{content:0}),(t()(),e.rb(1,0,null,null,17,"ion-header",[],null,null,null,h.wb,h.s)),e.qb(2,49152,null,0,d.D,[e.h,e.k,e.x],null,null),(t()(),e.rb(3,0,null,0,15,"ion-toolbar",[],null,null,null,h.hc,h.db)),e.qb(4,49152,null,0,d.Eb,[e.h,e.k,e.x],null,null),(t()(),e.rb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,h.jb,h.f)),e.qb(6,49152,null,0,d.n,[e.h,e.k,e.x],null,null),(t()(),e.rb(7,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(t,n,l){var i=!0;return"click"===n&&(i=!1!==e.Db(t,9).onClick(l)&&i),i}),h.gb,h.c)),e.qb(8,49152,null,0,d.i,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),e.qb(9,16384,null,0,d.j,[[2,d.kb],d.Lb],{defaultHref:[0,"defaultHref"]},null),(t()(),e.rb(10,0,null,0,2,"ion-title",[["class","title"]],null,null,null,h.fc,h.bb)),e.qb(11,49152,null,0,d.Cb,[e.h,e.k,e.x],null,null),(t()(),e.Jb(12,0,["",""])),(t()(),e.rb(13,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,h.jb,h.f)),e.qb(14,49152,null,0,d.n,[e.h,e.k,e.x],null,null),(t()(),e.rb(15,0,null,0,3,"ion-button",[["icon-only",""]],null,[[null,"click"]],(function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.options()&&e),e}),h.ib,h.e)),e.qb(16,49152,null,0,d.m,[e.h,e.k,e.x],null,null),(t()(),e.rb(17,0,null,0,1,"ion-icon",[["name","ios-more"]],null,null,null,h.xb,h.t)),e.qb(18,49152,null,0,d.E,[e.h,e.k,e.x],{name:[0,"name"]},null),(t()(),e.rb(19,0,null,null,12,"ion-content",[["class","cards-bg"]],null,null,null,h.rb,h.n)),e.qb(20,49152,[[1,4]],0,d.w,[e.h,e.k,e.x],null,null),(t()(),e.rb(21,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(t,n,l){var e=!0;return"ionRefresh"===n&&(e=!1!==t.component.doRefresh(l)&&e),e}),h.Nb,h.I)),e.qb(22,49152,null,0,d.fb,[e.h,e.k,e.x],null,null),(t()(),e.rb(23,0,null,0,1,"ion-refresher-content",[],null,null,null,h.Mb,h.J)),e.qb(24,49152,null,0,d.gb,[e.h,e.k,e.x],null,null),(t()(),e.gb(16777216,null,0,1,null,U)),e.qb(26,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(t()(),e.rb(27,0,null,0,2,"div",[["class","message-container"]],null,null,null,null,null)),(t()(),e.gb(16777216,null,null,1,null,X)),e.qb(29,278528,null,0,b.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(t()(),e.gb(16777216,null,0,1,null,Y)),e.qb(31,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(t,n){var l=n.component;t(n,8,0,l.defaultUrl,e.vb(1,"",l.backButtonText(),"")),t(n,9,0,l.defaultUrl),t(n,18,0,"ios-more"),t(n,26,0,l.isDataEmpty&&!l.isDataLoading),t(n,29,0,l.messages),t(n,31,0,l.finiteScroll)}),(function(t,n){t(n,12,0,n.component.messageTitle)}))}function Z(t){return e.Lb(0,[(t()(),e.rb(0,0,null,null,1,"page-message-list",[],null,null,null,K,A)),e.qb(1,4440064,null,0,w,[d.Lb,d.a,u.a,y.a,d.b,P.a,c.k,o.a,C.b,I.a,v.a,e.k,O.a,p.a,k.a,e.h,L.m],null,null)],(function(t,n){t(n,1,0)}),null)}var Q=e.nb("page-message-list",w,Z,{},{},[]),tt=l("s7LF"),nt=l("iTUp"),lt=l("j1ZV");l.d(n,"MessageListPageModuleNgFactory",(function(){return et}));var et=e.ob(i,[],(function(t){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[s.a,Q]],[3,e.j],e.v]),e.Bb(4608,b.l,b.k,[e.s,[2,b.A]]),e.Bb(4608,d.c,d.c,[e.x,e.g]),e.Bb(4608,d.Kb,d.Kb,[d.c,e.j,e.p]),e.Bb(4608,d.Ob,d.Ob,[d.c,e.j,e.p]),e.Bb(4608,tt.r,tt.r,[]),e.Bb(4608,tt.d,tt.d,[]),e.Bb(4608,c.g,c.f,[]),e.Bb(4608,c.c,c.e,[]),e.Bb(4608,c.i,c.d,[]),e.Bb(4608,c.b,c.a,[]),e.Bb(4608,c.k,c.k,[c.l,c.g,c.c,c.i,c.b,c.m,c.n]),e.Bb(5120,e.d,(function(t,n,l){return[d.Ub(t,n,l)]}),[d.Tb,b.c,e.x]),e.Bb(1073742336,nt.a,nt.a,[]),e.Bb(1073742336,b.b,b.b,[]),e.Bb(1073742336,d.Gb,d.Gb,[]),e.Bb(1073742336,c.h,c.h,[]),e.Bb(1073742336,tt.q,tt.q,[]),e.Bb(1073742336,tt.h,tt.h,[]),e.Bb(1073742336,tt.o,tt.o,[]),e.Bb(1073742336,lt.a,lt.a,[]),e.Bb(1073742336,L.n,L.n,[[2,L.t],[2,L.m]]),e.Bb(1073742336,i,i,[]),e.Bb(256,c.n,void 0,[]),e.Bb(256,c.m,void 0,[]),e.Bb(256,d.Tb,void 0,[]),e.Bb(1024,L.k,(function(){return[[{path:"",component:w}]]}),[])])}))},TDSW:function(t,n,l){"use strict";l.d(n,"a",(function(){return u}));var e=l("mrSG"),i=l("hAUF"),s=l("ZOGp"),r=l("YsCg"),a=l("93YN");class u{constructor(t,n,l,e,i,s){this.modalCtrl=t,this.authProvider=n,this.navCtrl=l,this.router=e,this.translateService=i,this.nativeService=s}doSelectCountry(){return new Promise((t,n)=>e.b(this,void 0,void 0,(function*(){const l=yield this.modalCtrl.create({component:a.a,componentProps:{isNeedAll:!0}});l.onDidDismiss().then(n=>{t(n.data)}).catch(t=>{n(t)}),yield l.present()})))}SendSecurityCode(t){return new Promise((n,l)=>e.b(this,void 0,void 0,(function*(){this.authProvider.SendSecurityCode2(t).subscribe(t=>{n("")},t=>{n(t)})})))}LoginByWFAccount(t){return new Promise((n,l)=>e.b(this,void 0,void 0,(function*(){this.authProvider.LoginByWFAccount2(t).subscribe(t=>{this.setTabsToRoot()},t=>{n(t)})})))}Login(t){return new Promise((n,l)=>e.b(this,void 0,void 0,(function*(){this.authProvider.Login2(t).subscribe(t=>{this.setTabsToRoot()},t=>{n(t)})})))}login(t,n,l,i){return new Promise((l,i)=>e.b(this,void 0,void 0,(function*(){switch(t){case r.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(n).subscribe(t=>{l("")},t=>{l(t)});break;case r.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(n).subscribe(t=>{this.setTabsToRoot()},t=>{l(t)});break;case r.j.LoginByMobileBefore:this.authProvider.Login2(n).subscribe(t=>{this.setTabsToRoot()},t=>{l(t)})}})))}setTabsToRoot(){this.router.navigate([i.b.HomePage],{replaceUrl:!0})}verificationErrorHandle(t,n){return t.errcode===s.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():t.errcode===s.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(t)}loginError(t){let n="";switch(t.errcode){case s.a.USER.INACTIVE_USER:n="ACCOUNT_LOCKED";break;case s.a.USER.USER_NOT_EXIST:n="LOGIN_ERROR_USER_NOT_EXIST";break;case s.a.USER.MOBILE_NOT_EXIST:n="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case s.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case s.a.USER.INCORRECT_PASSWORD:n="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:n="LOGIN_ERROR"}this.nativeService.alert(t.errcode+","+this.translateService.instant(n))}}},mGGX:function(t,n,l){"use strict";var e=l("TDSW");l("mrSG"),l("wqKC"),l("93YN");class i{constructor(t,n){this.session=t,this.nativeService=n}ionViewWillEnter(){this.session.isDarkMode||this.nativeService.setStyleLightContent()}ionViewWillLeave(){this.nativeService.statusBarStyle(this.session.isDarkMode)}}l.d(n,"i",(function(){return r})),l.d(n,"a",(function(){return a})),l.d(n,"e",(function(){return u})),l.d(n,"b",(function(){return o})),l.d(n,"f",(function(){return h})),l.d(n,"h",(function(){return d})),l.d(n,"g",(function(){return b})),l.d(n,"c",(function(){return m})),l.d(n,"d",(function(){return f}));const s=t=>{let n={};const l=t.getCurrentNavigation().extras;return l&&l.state&&(n=l.state),n},r=(t,n)=>{let l=t||n.previousUrl;return n&&(l=n.previousUrl),l};class a{constructor(t){this.events=t}scrollWidth(t,n){return{width:t||window.screen.availWidth-5+"px",height:(n||44)+"px"}}completeRefresh(t){t&&t.target.complete()}completedoInfinite(t){t&&t.target.complete()}}class u{constructor(t,n){this.paramUrl=t,this.session=n,this.defaultUrl="",this.defaultUrl=r(t,this.session)}}class o{constructor(t){this.router=t,this.params=s(t)}}class c extends a{constructor(t,n){super(n),this.router=t,this.events=n,this.params=s(t)}}class h extends a{constructor(t,n,l){super(n),this.paramUrl=t,this.events=n,this.session=l,this.defaultUrl="",this.defaultUrl=r(t,l)}}class d extends u{constructor(t,n,l){super(n,l),this.router=t,this.paramUrl=n,this.session=l,this.defaultUrl="",this.params=s(t)}}class b extends c{constructor(t,n,l,e){super(t,l),this.router=t,this.paramUrl=n,this.events=l,this.session=e,this.defaultUrl="",this.defaultUrl=r(n,this.session)}}class g extends i{constructor(t,n,l){super(n,l),this.router=t,this.session=n,this.nativeService=l,this.params=s(t)}}class m extends g{constructor(t,n,l,e){super(t,n,l),this.router=t,this.session=n,this.nativeService=l,this.paramUrl=e,this.defaultUrl=r(e,n)}}class p extends e.a{constructor(t,n,l,e,i,r){super(n,l,e,t,i,r),this.router=t,this.modalCtrl=n,this.authProvider=l,this.navCtrl=e,this.translateService=i,this.nativeService=r,this.params=s(t)}}class f extends p{constructor(t,n,l,e,i,a,u,o){super(t,n,l,e,i,a),this.router=t,this.modalCtrl=n,this.authProvider=l,this.navCtrl=e,this.translateService=i,this.nativeService=a,this.paramUrl=u,this.session=o,this.params=s(t),this.defaultUrl=r(u,o)}}}}]);