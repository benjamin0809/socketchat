webpackJsonp([71],{

/***/ 1070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailModule", function() { return ContactDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_detail__ = __webpack_require__(1245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactDetailModule = (function () {
    function ContactDetailModule() {
    }
    ContactDetailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__contact_detail__["a" /* ContactDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__contact_detail__["a" /* ContactDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__contact_detail__["a" /* ContactDetailPage */]
            ],
            providers: []
        })
    ], ContactDetailModule);
    return ContactDetailModule;
}());

//# sourceMappingURL=contact-detail.module.js.map

/***/ }),

/***/ 1245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_provider__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_provider__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_contact_provider__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_preload_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_utility__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ContactDetailPage = (function () {
    function ContactDetailPage(navCtrl, navParams, preloadProvider, contactProvider, alertCtrl, translateService, events, sqlite, nativeService, session, messageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.preloadProvider = preloadProvider;
        this.contactProvider = contactProvider;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.events = events;
        this.sqlite = sqlite;
        this.nativeService = nativeService;
        this.session = session;
        this.messageProvider = messageProvider;
        this.isFriend = false;
        this.fromPage = '';
        this.isSelf = false;
        this.isDataLoading = false;
        this.fromPage = this.navParams.data.fromPage;
        this.FriendInfo(this.navParams.data.friendId);
        this.contact = {
            avator: __WEBPACK_IMPORTED_MODULE_5__services_constants__["i" /* DEFAULT_AVATAR */]
        };
        this.moments = [{
                publishTime: '2019-01-01',
                description: '今天天气真好！',
                imgs: ["assets/img/puppy-1.jpg", "assets/img/puppy-2.jpg", "assets/img/puppy-3.jpg"]
            },
            {
                publishTime: '2019-01-01',
                description: '棒极了！'
            },
            {
                publishTime: '2019-01-02',
                description: '棒极了！'
            },
            {
                publishTime: '2018-12-08',
                description: '棒极了！'
            },
            {
                publishTime: '2018-12-01',
                description: '棒极了！'
            },
            {
                publishTime: '2018-11-08',
                description: '棒极了！',
                imgs: ['assets/img/tutorial/Slide1.jpg', 'assets/img/tutorial/Slide2.jpg', 'assets/img/tutorial/Slide3.jpg', 'assets/img/tutorial/Slide4.jpg', 'assets/img/tutorial/Slide5.jpg', 'assets/img/tutorial/Slide6.jpg']
            }
        ];
    }
    ContactDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.events.subscribe('contact: refresh-friendinfo', function () {
            _this.getFriendInfoFromApi(_this.contactProvider.friendInfo);
        });
    };
    ContactDetailPage.prototype.ionViewWillUnload = function () {
        //console.log('界面销毁');
        this.events.unsubscribe('contact: refresh-friendinfo');
    };
    /**
     * 刷新好友信息
     * @param _event
     */
    ContactDetailPage.prototype.doRefresh = function (_event) {
        this.contactProvider.FriendInfo(this.navParams.data.friendId).subscribe(function (res) {
            _event && _event.complete();
        });
    };
    /**
     * 打开好友选项
     */
    ContactDetailPage.prototype.openContactOptions = function () {
        this.navCtrl.push('ContactOptionPage', this.contact);
    };
    /**
     * 打开聊天窗口
     */
    ContactDetailPage.prototype.openMessageChat = function () {
        var _this = this;
        var widget = {
            widgetIcon: this.contact.avator,
            widgetName: this.contact.nickName || this.contact.name,
            widgetId: this.contact.id,
        };
        this.messageProvider.setMessageIsReadByWidgetId(widget.widgetId); //设置该分组为已读
        this.messageProvider.setMessage([]);
        this.messageProvider.queryMessage(widget.widgetId.toString(), 10, 0).subscribe(function (res) {
            widget['messages'] = res;
            _this.navCtrl.push('MessageChatPage', widget);
        });
    };
    /**
     * 预览头像
     * @param item
     */
    ContactDetailPage.prototype.scaleAvatar = function (item) {
        this.preloadProvider.previewImage([{ pictureUrl: item.avator }], 0);
    };
    /** 获取好友信息，默认从本地获取，若没有数据则从API加载。 */
    ContactDetailPage.prototype.FriendInfo = function (friendId) {
        var _this = this;
        this.isDataLoading = true;
        this.sqlite.queryFriendInfo(friendId).subscribe(function (res) {
            if (res && res.length > 0) {
                _this.isDataLoading = false;
                _this.contact = JSON.parse(res[0].Extra);
                if (_this.fromPage == 'friendsList') {
                    _this.contact.isBlack = false;
                    _this.contact.isFriend = true;
                    _this.isSelf = _this.session.userId == _this.contact.id;
                    _this.contact.blurMobilePhone = __WEBPACK_IMPORTED_MODULE_10__services_utility__["a" /* Utility */].blurMobilePhone(_this.contact.mobilePhone);
                }
            }
            else {
                _this.contactProvider.FriendInfo(friendId).subscribe();
            }
        }, function (err) {
            _this.contactProvider.FriendInfo(friendId).subscribe();
        });
    };
    /**
     * 获取到API的结果并保存
     * @param result
     */
    ContactDetailPage.prototype.getFriendInfoFromApi = function (result) {
        var _this = this;
        this.isDataLoading = false;
        this.contact = result;
        this.isSelf = this.session.userId == this.contact.id;
        this.contact.avator = this.contact.avator || __WEBPACK_IMPORTED_MODULE_5__services_constants__["i" /* DEFAULT_AVATAR */];
        this.sqlite.saveFriendInfo(this.contact).subscribe();
        var friends = {
            GroupId: this.contact.friendTagId,
            FriendId: this.contact.id,
            IsStar: this.contact.isStar ? 1 : 0,
            Extra: this.contact
        };
        this.sqlite.saveContact(friends).subscribe(function (res) {
            _this.events.publish('contact: refresh-friendsFromSqlite');
        });
        this.contact.blurMobilePhone = __WEBPACK_IMPORTED_MODULE_10__services_utility__["a" /* Utility */].blurMobilePhone(this.contact.mobilePhone);
    };
    /**
     * 打开备注设定
     */
    ContactDetailPage.prototype.openSetRemarkPage = function () {
        this.navCtrl.push('ContactSetremarkPage', this.contact);
    };
    /**
     * 发送好友验证
     */
    ContactDetailPage.prototype.sendValidation = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.translateService.instant('CONTACT_DETAIL_VERIFY_INFO'),
            inputs: [
                {
                    name: 'description',
                    placeholder: this.translateService.instant('CONTACT_DETAIL_VERIFY_DESCRIPTION'),
                    type: 'textarea'
                }
            ],
            buttons: [
                {
                    text: this.translateService.instant('CONTACT_DETAIL_VERIFY_CANCEL'),
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: this.translateService.instant('CONTACT_DETAIL_VERIFY_SEND'),
                    handler: function (data) {
                        var before = _this.getContactFromFriendsRequest(_this.contact.name);
                        if (before.findResult) {
                            _this.contactProvider.AcceptAddRequest(before.item.id, true).subscribe(function (res) {
                                _this.nativeService.showToast(_this.translateService.instant('CONTACT_ADD_SEND_REQUEST_OK'));
                            });
                        }
                        else {
                            _this.contactProvider.SendAddRequest(_this.contact.id, data.description).subscribe(function (res) {
                                _this.nativeService.showToast(_this.translateService.instant('CONTACT_ADD_SEND_REQUEST_OK'));
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    /**
     * 从好友请求列表中查找
     * @param name
     */
    ContactDetailPage.prototype.getContactFromFriendsRequest = function (name) {
        var result = { findResult: false, item: {} };
        if (name) {
            for (var _i = 0, _a = this.contactProvider.newFriends; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.name == name && item.status == "waiting") {
                    result.findResult = true;
                    result.item = item;
                    return result;
                }
            }
        }
        return result;
    };
    ContactDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
            selector: 'page-contact-detail',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\contact\contact-detail\contact-detail.html"*/'<ion-header>\n\n  <ion-navbar> \n\n      <ion-title> </ion-title>\n\n      <ion-buttons end *ngIf="contact?.isFriend">\n\n          <button ion-button icon-only (click)="openContactOptions()">\n\n              <ion-icon name="ios-more"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-navbar> \n\n</ion-header>\n\n\n\n<ion-content  >\n\n    \n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown"  >\n\n        </ion-refresher-content>\n\n      </ion-refresher>\n\n      <ion-item no-lines="true">\n\n          <ion-thumbnail item-start (click)="scaleAvatar(contact)">\n\n            <img [src]="contact?.avator"  >\n\n          </ion-thumbnail>\n\n          <h2>{{contact?.aliasName||contact?.name}} \n\n            <!-- <ion-icon small item-end *ngIf="item.gender == \'female\'" name="female" class="theme-icon"  ></ion-icon>\n\n            <ion-icon small item-end *ngIf="item.gender == \'male\'" name="male" class="theme-icon"  ></ion-icon> -->\n\n\n\n            <img class="gender" *ngIf="contact?.gender == \'female\' || contact?.gender == \'男\' " src="assets/img/male.png">\n\n            <img class="gender" *ngIf="contact?.gender == \'male\' || contact?.gender == \'女\'" src="assets/img/female.png">\n\n          </h2>\n\n          <h4 *ngIf="contact?.nickname">{{\'CONTACT_DETAIL_NICKNAME\'|translate}}{{contact?.nickName}}</h4>\n\n          <h3 *ngIf="contact?.name">{{\'CONTACT_DETAIL_NAME\'|translate}}{{contact?.name}}</h3>\n\n          <h3 > {{contact?.blurMobilePhone}}</h3> \n\n          <ion-note item-end *ngIf="contact.isStar"><ion-icon name="star" color="yellow"></ion-icon></ion-note>\n\n          <!-- <ion-note *ngIf="isFollow"  color="primary" item-end (click)="isFollow = !isFollow">{{\'CONTACT_DETAIL_CONCERN\'|translate}}</ion-note>\n\n          <ion-note *ngIf="!isFollow" item-end (click)="isFollow = !isFollow">{{\'CONTACT_DETAIL_CONCERN_UNDO\'|translate}}</ion-note> -->\n\n        </ion-item>\n\n  <!-- <ion-list no-border >\n\n      <ion-list-header>\n\n          Her (His) moments \n\n        </ion-list-header>\n\n \n\n    <ion-grid>\n\n      <ion-row *ngFor="let item of moments" class="moment-container">\n\n        <ion-col col-3>\n\n          <p *ngIf="item.publishTime">{{item.publishTime}}</p>\n\n        </ion-col>\n\n\n\n        <ion-col col-9 class="moment">\n\n            <ion-row>\n\n                <ion-col  >\n\n                    <p  >{{item.description}}</p> \n\n                  </ion-col>\n\n              \n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-4 *ngFor="let img of item.imgs,let indx = index" >\n\n                <div class="preview-image" [style.background-image]="\'url(\'+ img +\')\'" (click)="openImages(indx,item.imgs)">\n\n\n\n                </div> \n\n              </ion-col>\n\n              \n\n            </ion-row>\n\n          </ion-col>\n\n      </ion-row>\n\n  \n\n    </ion-grid> \n\n  </ion-list> -->\n\n\n\n  <ion-list *ngIf="contact?.isFriend && !isSelf">\n\n      <div class="divider"> </div>\n\n    <button ion-item (click)="openSetRemarkPage()" no-lines > \n\n      <h2> {{\'CONTACT_OPTION_ALIASNAME\'|translate}}</h2>\n\n      <ion-note item-end>\n\n        {{contact?.aliasName}}\n\n      </ion-note>\n\n    </button>\n\n   \n\n    <div class="divider"> </div> \n\n     \n\n    \n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer *ngIf="!isSelf && !isDataLoading">\n\n   <ion-toolbar >\n\n      <P text-center class="isblackhint" *ngIf="contact?.isBlack">{{\'CONTACT_DETAIL_BLACK_HINT\'|translate}}</P>\n\n      <button ion-button block round (click)="openMessageChat()" *ngIf="!contact?.isBlack && contact?.isFriend "> {{\'CONTACT_DETAIL_SEND_MESSAGE\'|translate}}</button>\n\n      <button ion-button block round (click)="sendValidation()" *ngIf="!contact?.isFriend"> {{\'CONTACT_DETAIL_SEND_REQUEST\'|translate}}</button>\n\n  </ion-toolbar> \n\n</ion-footer>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\contact\contact-detail\contact-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_preload_provider__["a" /* PreloadProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_contact_provider__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_provider__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_2__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_0__providers_message_provider__["a" /* MessageProvider */]])
    ], ContactDetailPage);
    return ContactDetailPage;
}());

//# sourceMappingURL=contact-detail.js.map

/***/ })

});
//# sourceMappingURL=71.js.map