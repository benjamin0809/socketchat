webpackJsonp([68],{

/***/ 1075:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactOptionPageModule", function() { return ContactOptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_option__ = __webpack_require__(1250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactOptionPageModule = (function () {
    function ContactOptionPageModule() {
    }
    ContactOptionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_option__["a" /* ContactOptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_option__["a" /* ContactOptionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], ContactOptionPageModule);
    return ContactOptionPageModule;
}());

//# sourceMappingURL=contact-option.module.js.map

/***/ }),

/***/ 1250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactOptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_provider__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_preload_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_contact_provider__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_sqlite_provider__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the ContactOptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactOptionPage = (function () {
    //private isBlock:boolean = false;
    function ContactOptionPage(navCtrl, navParams, alertCtrl, contactProvider, events, preload, session, sqliteProvider, storageService, translateService, messageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.contactProvider = contactProvider;
        this.events = events;
        this.preload = preload;
        this.session = session;
        this.sqliteProvider = sqliteProvider;
        this.storageService = storageService;
        this.translateService = translateService;
        this.messageProvider = messageProvider;
        this.contact = this.navParams.data;
    }
    ContactOptionPage.prototype.showRemoveFriendMessage = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "",
            message: this.translateService.instant('CONTACT_OPTION_DELETE_ALERT'),
            buttons: [
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CANCEL'),
                    role: 'cancel'
                },
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CONFIRM'),
                    handler: function () {
                        _this.RemoveFriend();
                    }
                }
            ]
        });
        confirm.present();
    };
    /**
     * 删除好友
     */
    ContactOptionPage.prototype.RemoveFriend = function () {
        var _this = this;
        this.contactProvider.RemoveFriend(this.contact.id).subscribe(function (res) {
            _this.messageProvider.deleteMessageBySessionId(_this.contact.id); //删除对话框，记录
            _this.sqliteProvider.deleteContact(_this.contact.id).subscribe(function (result) {
                if (result) {
                    _this.sqliteProvider.deletefriendInfo(_this.contact.id).subscribe(); //删除本地好友信息
                    _this.events.publish('contact: refresh-friendsFromSqlite'); //发布通知刷新好友 
                    _this.events.publish('contact:refresh-newFriends');
                    _this.popToContactPage();
                }
            });
        });
    };
    /**
     * 返回到好友列表
     */
    ContactOptionPage.prototype.popToContactPage = function () {
        for (var i = 0; i < this.navCtrl.length(); i++) {
            var view = this.navCtrl.getByIndex(i);
            if (view.name == 'ContactPage' || view.id == 'ContactPage') {
                this.navCtrl.popTo(view);
            }
        }
    };
    /**
     * 加入或取消黑名单前询问
     * @param contact
     */
    ContactOptionPage.prototype.showBlockFriendMessage = function (contact) {
        var _this = this;
        var message = contact.isBlack ? this.translateService.instant('CONTACT_OPTION_BLACKLIST_ALERT') : this.translateService.instant('CONTACT_OPTION_BLACKLIST_UNDO_ALERT');
        var confirm = this.alertCtrl.create({
            title: "",
            message: message,
            buttons: [
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CANCEL'),
                    handler: function () {
                        contact.isBlack = !contact.isBlack;
                    }
                },
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CONFIRM'),
                    handler: function () {
                        _this.blockMember(contact.id, contact.isBlack);
                    }
                }
            ]
        });
        confirm.present();
    };
    /**
     * 加入或取消黑名单
     * @param memberId
     * @param isBlock
     */
    ContactOptionPage.prototype.blockMember = function (memberId, isBlock) {
        var _this = this;
        this.blockTimer && clearTimeout(this.blockTimer);
        this.blockTimer = setTimeout(function () {
            if (isBlock) {
                _this.contactProvider.AddToBlackList(memberId).subscribe(function (res) {
                    _this.saveLocalData(isBlock);
                });
            }
            else {
                _this.contactProvider.RemoveFromBlackList(memberId).subscribe(function (res) {
                    _this.saveLocalData(isBlock);
                });
            }
        }, 2000);
    };
    /**
     * 写入到本地数据库
     * @param isBlack
     */
    ContactOptionPage.prototype.saveLocalData = function (isBlack) {
        var _this = this;
        var friends = {
            GroupId: this.contact.friendTagId,
            FriendId: this.contact.id,
            IsStar: this.contact.IsStar ? 1 : 0,
            Extra: this.contact
        };
        this.sqliteProvider.saveFriendInfo(this.contact).subscribe();
        this.sqliteProvider.saveContact(friends).subscribe(function (res) {
            _this.events.publish('contact: refresh-friendsFromSqlite');
        });
    };
    /**打开设置备注和标签 */
    ContactOptionPage.prototype.openSetRemarkPage = function () {
        this.navCtrl.push('ContactSetremarkPage', this.contact);
    };
    /** 设置为星标好友 或 取消星标好友 */
    ContactOptionPage.prototype.StarFriend = function () {
        var _this = this;
        this.starTimer && clearTimeout(this.starTimer);
        this.starTimer = setTimeout(function () {
            _this.contactProvider.FriendSetting(_this.contact.id, [{
                    "Name": "isstar",
                    "value": _this.contact.isStar
                }]).subscribe(function (res) {
                //更新sql表
                // this.sqliteProvider.updateFriendInfo(this.contact).subscribe(()=>{
                // });
            });
        }, 1500);
    };
    ContactOptionPage.prototype.shareContact = function () {
        var _this = this;
        this.preload.openContactChooserPage({
            callback: function (data) {
                console.log(data);
                var memberUrl = _this.contactProvider.generateMemberURL(_this.contact.id);
                __WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].generateQRCode(memberUrl).then(function (QRCode) {
                    if (data) {
                        var _loop_1 = function (item) {
                            var storageKey = 'private-Message:id=' + item.id + '&' + _this.session.userId;
                            _this.storageService.getItem(storageKey).then(function (res) {
                                var messageData = {
                                    toId: item.id,
                                    _id: 'id' + Date.now(),
                                    date: new Date(),
                                    receiveTime: new Date(),
                                    userId: _this.session.userId,
                                    username: _this.session.username,
                                    pic: item.avator,
                                    text: QRCode,
                                    image: QRCode,
                                    formatType: 'image'
                                };
                                if (!res)
                                    res = [];
                                res.push(messageData);
                                _this.storageService.setItem(storageKey, res);
                            });
                        };
                        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                            var item = data_1[_i];
                            _loop_1(item);
                        }
                    }
                });
            },
            title: 'sent to',
            type: 0
        });
    };
    ContactOptionPage.prototype.ShareCallback = function (data) {
        var _this = this;
        var memberUrl = this.contactProvider.generateMemberURL(this.contact.id);
        __WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].generateQRCode(memberUrl).then(function (res) {
            if (data) {
                var _loop_2 = function (item) {
                    var storageKey = 'private-Message:id=' + item.id + '&' + _this.session.userId;
                    _this.storageService.getItem(storageKey).then(function (res) {
                        var messageData = {
                            toId: item.id,
                            _id: 'id' + Date.now(),
                            date: new Date(),
                            receiveTime: new Date(),
                            userId: _this.session.userId,
                            username: _this.session.username,
                            pic: item.avator,
                            text: res,
                            image: res,
                            formatType: 'image'
                        };
                        if (!res)
                            res = [];
                        res.push(messageData);
                        _this.storageService.setItem(storageKey, res);
                    });
                };
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    _loop_2(item);
                }
            }
        });
    };
    ContactOptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'page-contact-option',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\contact\contact-option\contact-option.html"*/'<!--\n\n  Generated template for the ContactOptionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title >{{\'CONTACT_OPTION_TITLE\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item (click)="openSetRemarkPage()"> \n\n      <h2> {{\'CONTACT_OPTION_ALIASNAME\'|translate}}</h2>\n\n      <ion-note item-end>\n\n        {{contact.aliasName}}\n\n      </ion-note>\n\n    </button>\n\n\n\n    <ion-item no-lines >\n\n        <ion-label>{{\'CONTACT_OPTION_STARRED\'|translate}}</ion-label>\n\n        <ion-toggle [(ngModel)]="contact.isStar" (ngModelChange)="StarFriend()"></ion-toggle>\n\n      </ion-item>\n\n\n\n    <div class="divider"> </div>\n\n    <!-- <button ion-item (click)="openSettingsPage()"> \n\n      <h2> {{\'CONTACT_OPTION_PHONE_NUMBER\'|translate}}</h2>\n\n      <ion-note item-end>\n\n        {{contact.mobilePhone}}\n\n      </ion-note>\n\n    </button> -->\n\n\n\n    <!-- <button ion-item no-lines (click)="shareContact()"> \n\n        <h2> {{\'CONTACT_OPTION_SHARE\'|translate}}</h2> \n\n    </button>\n\n\n\n      <div class="divider"> </div> -->\n\n    <ion-item  >\n\n        <ion-label>{{\'CONTACT_OPTION_BLACKLIST\'|translate}}</ion-label>\n\n        <ion-toggle [(ngModel)]="contact.isBlack" (ngModelChange)="showBlockFriendMessage(contact)" ></ion-toggle>\n\n      </ion-item>\n\n\n\n      <div padding>\n\n          <button  ion-button round  block outline color="danger" (click)="showRemoveFriendMessage()">\n\n            {{\'CONTACT_OPTION_DELETE\'|translate}}\n\n          </button>\n\n      </div>\n\n    \n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\contact\contact-option\contact-option.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_contact_provider__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_preload_provider__["a" /* PreloadProvider */],
            __WEBPACK_IMPORTED_MODULE_3__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_9__providers_sqlite_provider__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_message_provider__["a" /* MessageProvider */]])
    ], ContactOptionPage);
    return ContactOptionPage;
}());

//# sourceMappingURL=contact-option.js.map

/***/ })

});
//# sourceMappingURL=68.js.map