webpackJsonp([66],{

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactTagChooserPageModule", function() { return ContactTagChooserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_tag_chooser__ = __webpack_require__(1249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactTagChooserPageModule = (function () {
    function ContactTagChooserPageModule() {
    }
    ContactTagChooserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_tag_chooser__["a" /* ContactTagChooserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_tag_chooser__["a" /* ContactTagChooserPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], ContactTagChooserPageModule);
    return ContactTagChooserPageModule;
}());

//# sourceMappingURL=contact-tag-chooser.module.js.map

/***/ }),

/***/ 1249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactTagChooserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_view_controller__ = __webpack_require__(10);
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
 * Generated class for the ContactTagChooserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactTagChooserPage = (function () {
    function ContactTagChooserPage(navCtrl, contactProvider, viewCtrl, events, sqliteProvider, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.contactProvider = contactProvider;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.sqliteProvider = sqliteProvider;
        this.navParams = navParams;
        this.contact = this.navParams.data;
        this.choosenTag = this.contact.friendTagId;
        /**
        this.contactProvider.FriendTagList().subscribe(res=>{
          this.friendTagList = res.result;
        })*/
        //从sql表里获取
        this.sqliteProvider.queryFriendsGroups().subscribe(function (data) {
            _this.friendTagList = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var tag = data_1[_i];
                if (tag.GroupId != -1) {
                    var group = { id: tag.GroupId, name: tag.GroupName };
                    _this.friendTagList.push(group);
                }
            }
        });
    }
    ContactTagChooserPage.prototype.openContactGroupManage = function () {
        this.navCtrl.push('ContactGroupManagePage');
    };
    ContactTagChooserPage.prototype.doSubmit = function () {
        var _this = this;
        //console.log(this.choosenTag);
        for (var _i = 0, _a = this.friendTagList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this.choosenTag == item.id) {
                this.contact.friendTagId = item.id;
                this.contact.friendTagName = item.name;
            }
        }
        this.contactProvider.FriendSetting(this.contact.id, [{
                "Name": "FriendTagId",
                "value": this.choosenTag
            }]).subscribe(function (res) {
            _this.sqliteProvider.updateFriendInfo(_this.contact).subscribe(function () {
                _this.events.publish('contact: refresh-friendtag', _this.contact);
            });
        });
        this.viewCtrl.dismiss();
    };
    ContactTagChooserPage.prototype.ionViewDidLoad = function () {
    };
    ContactTagChooserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-contact-tag-chooser',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\contact\contact-tag-chooser\contact-tag-chooser.html"*/'<!--\n\n  Generated template for the ContactTagChooserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{\'CONTACT_TAG_CHOOSER_TITLE\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <ion-list radio-group [(ngModel)]="choosenTag" (ngModelChange)="doSubmit()">\n\n      <ion-item *ngFor="let tag of friendTagList">\n\n          <ion-label>{{tag.name}}</ion-label>\n\n          <ion-radio  value={{tag.id}}  [checked]="choosenTag==tag.id"> </ion-radio>\n\n      </ion-item>\n\n  </ion-list>\n\n  \n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar >\n\n    <button ion-button round block (click)="openContactGroupManage()" > {{\'CONTACT_MORE_GROUP_MANAGE\'|translate}}</button>\n\n  </ion-toolbar>  \n\n</ion-footer>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\contact\contact-tag-chooser\contact-tag-chooser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_contact_provider__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_provider__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */]])
    ], ContactTagChooserPage);
    return ContactTagChooserPage;
}());

//# sourceMappingURL=contact-tag-chooser.js.map

/***/ })

});
//# sourceMappingURL=66.js.map