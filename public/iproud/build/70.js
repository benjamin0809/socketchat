webpackJsonp([70],{

/***/ 1072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactGroupManagePageModule", function() { return ContactGroupManagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_group_manage__ = __webpack_require__(1247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactGroupManagePageModule = (function () {
    function ContactGroupManagePageModule() {
    }
    ContactGroupManagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_group_manage__["a" /* ContactGroupManagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_group_manage__["a" /* ContactGroupManagePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], ContactGroupManagePageModule);
    return ContactGroupManagePageModule;
}());

//# sourceMappingURL=contact-group-manage.module.js.map

/***/ }),

/***/ 1247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactGroupManagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_contact_provider__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_provider__ = __webpack_require__(90);
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
 * Generated class for the ContactGroupManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactGroupManagePage = (function () {
    function ContactGroupManagePage(navCtrl, contactProvider, popoverCtrl, translateService, alertCtrl, sqliteProvider, events, navParams) {
        this.navCtrl = navCtrl;
        this.contactProvider = contactProvider;
        this.popoverCtrl = popoverCtrl;
        this.translateService = translateService;
        this.alertCtrl = alertCtrl;
        this.sqliteProvider = sqliteProvider;
        this.events = events;
        this.navParams = navParams;
        this.getFriendTagListFromTable();
    }
    ContactGroupManagePage.prototype.ionViewDidLoad = function () {
    };
    ContactGroupManagePage.prototype.getFriendTagListFromApi = function () {
        this.contactProvider.FriendTagList().subscribe(function (res) {
        });
    };
    ContactGroupManagePage.prototype.getFriendTagListFromTable = function () {
        var _this = this;
        this.sqliteProvider.queryFriendsGroups().subscribe(function (data) {
            _this.friendGroups = [];
            //console.log(data)
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var tag = data_1[_i];
                if (tag.GroupId != -1 && tag.GroupId != 0) {
                    var group = { id: tag.GroupId, name: tag.GroupName };
                    _this.friendGroups.push(group);
                }
            }
        });
    };
    ContactGroupManagePage.prototype.createFriendGroupTag = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: this.translateService.instant('CONTACT_GROUP_ADD_ALERT'),
            message: this.translateService.instant('CONTACT_GROUP_ADD_MESSAGE'),
            inputs: [
                {
                    name: 'name',
                    placeholder: this.translateService.instant('CONTACT_GROUP_ADD_PLACEHOLDER'),
                },
            ],
            buttons: [
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CANCEL'),
                    role: 'cancel'
                },
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CONFIRM'),
                    handler: function (data) {
                        _this.contactProvider.CreateFriendTag(data.name, []).subscribe(function (result) {
                            var group = { GroupId: result.result.friendTagId, GroupName: data.name };
                            _this.sqliteProvider.insertFriendsGroup(group).subscribe(function (res) {
                                _this.getFriendTagListFromTable();
                                _this.events.publish('contact: refresh-friendsFromSqlite');
                            });
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    ContactGroupManagePage.prototype.removeFriendGroupTag = function (group) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: this.translateService.instant('CONTACT_GROUP_DELETE_ALERT'),
            message: this.translateService.instant('CONTACT_GROUP_DELETE_MESSAGE'),
            buttons: [
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CANCEL'),
                    role: 'cancel'
                },
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CONFIRM'),
                    handler: function () {
                        _this.contactProvider.DeleteFriendTag(group.id).subscribe(function (result) {
                            if (result.errcode == 0) {
                                _this.sqliteProvider.deleteGroup(group.id).subscribe(function () {
                                    _this.getFriendTagListFromTable();
                                });
                                //更新contact頁面的分組名
                                _this.contactProvider.MyFriends().subscribe();
                            }
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    ContactGroupManagePage.prototype.updateFriendGroupTag = function (group) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: this.translateService.instant('CONTACT_GROUP_EDIT_ALERT'),
            message: this.translateService.instant('CONTACT_GROUP_EDIT_MESSAGE'),
            inputs: [
                {
                    name: 'name',
                    placeholder: group.name
                },
            ],
            buttons: [
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CANCEL'),
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CONFIRM'),
                    handler: function (data) {
                        _this.contactProvider.UpdateFriendTag(group.id, data.name, [], []).subscribe(function (result) {
                            if (result.errcode == 0) {
                                var tag = { GroupId: group.id, GroupName: data.name };
                                _this.sqliteProvider.updateGroup(tag).subscribe(function () {
                                    _this.getFriendTagListFromTable();
                                    //更新contact頁面的分組名
                                    _this.events.publish('contact: refresh-friendsFromSqlite');
                                });
                            }
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    ContactGroupManagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-contact-group-manage',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\contact\contact-group-manage\contact-group-manage.html"*/'<!--\n\n  Generated template for the ContactGroupManagePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{\'CONTACT_GROUP_MANAGE_TITLE\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content  >\n\n  <ion-list>\n\n    <ion-item (click)="createFriendGroupTag()" >\n\n        <ion-note item-start>\n\n            <ion-icon name="add-circle-outline"></ion-icon> \n\n        </ion-note> \n\n        <ion-label >{{\'CONTACT_GROUP_MANAGE_ADD\'|translate}}</ion-label> \n\n        \n\n    </ion-item>\n\n\n\n    <ion-item *ngFor="let group of friendGroups">\n\n        <ion-note item-start>\n\n            <ion-icon name="remove-circle-outline" color="danger" (click)="removeFriendGroupTag(group)"></ion-icon>\n\n        </ion-note> \n\n        <ion-label >{{group.name}}</ion-label> \n\n        <ion-note item-end>\n\n          <ion-icon name="reorder" (click)="updateFriendGroupTag(group)"></ion-icon>\n\n        </ion-note>    \n\n    </ion-item>\n\n\n\n\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\contact\contact-group-manage\contact-group-manage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_contact_provider__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_provider__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */]])
    ], ContactGroupManagePage);
    return ContactGroupManagePage;
}());

//# sourceMappingURL=contact-group-manage.js.map

/***/ })

});
//# sourceMappingURL=70.js.map