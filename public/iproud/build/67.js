webpackJsonp([67],{

/***/ 1076:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSetremarkPageModule", function() { return ContactSetremarkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_setremark__ = __webpack_require__(1251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactSetremarkPageModule = (function () {
    function ContactSetremarkPageModule() {
    }
    ContactSetremarkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_setremark__["a" /* ContactSetremarkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_setremark__["a" /* ContactSetremarkPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ContactSetremarkPageModule);
    return ContactSetremarkPageModule;
}());

//# sourceMappingURL=contact-setremark.module.js.map

/***/ }),

/***/ 1251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSetremarkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_view_controller__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_contact_provider__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the ContactSetremarkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactSetremarkPage = (function () {
    function ContactSetremarkPage(navCtrl, navParams, viewCtrl, events, contactProvider, sqliteProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.contactProvider = contactProvider;
        this.sqliteProvider = sqliteProvider;
        this.isReadyToSave = false;
        this.contact = this.navParams.data;
        this.aliasName = this.contact.aliasName;
        this.events.subscribe('contact: refresh-friendtag', function (data) {
            //console.log(data)
            _this.sqliteProvider.queryFriendInfo(data.id).subscribe();
        });
    }
    ContactSetremarkPage.prototype.ionViewDidLoad = function () {
    };
    ContactSetremarkPage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe('contact: refresh-friendtag');
    };
    ContactSetremarkPage.prototype.AliasNameChanged = function () {
        if (this.contact.aliasName != this.aliasName) {
            this.isReadyToSave = true;
        }
        else {
            this.isReadyToSave = false;
        }
    };
    ContactSetremarkPage.prototype.saveSetting = function () {
        var _this = this;
        this.contactProvider.FriendSetting(this.contact.id, [{
                "Name": "aliasname",
                "value": this.aliasName
            }]).subscribe(function (res) {
            //更新sql表
            _this.sqliteProvider.updateFriendInfo(_this.contact).subscribe();
        });
        this.viewCtrl.dismiss();
    };
    ContactSetremarkPage.prototype.openFriendTagList = function () {
        this.navCtrl.push("ContactTagChooserPage", this.contact);
    };
    ContactSetremarkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-contact-setremark',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\contact\contact-setremark\contact-setremark.html"*/'<!--\n\n  Generated template for the ContactSetremarkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{\'CONTACT_SET_REMARK_TITLE\'|translate}}</ion-title>\n\n  </ion-navbar> \n\n</ion-header>\n\n \n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n        <ion-label >{{\'CONTACT_ALIAS\'|translate}}</ion-label>\n\n      <ion-input text-right type="text" maxlength="10" placeholder="{{\'CONTACT_SET_ALIAS\'|translate}}" [(ngModel)]="aliasName" (ngModelChange)="AliasNameChanged()"></ion-input>\n\n    </ion-item>\n\n    <button ion-item (click)="openFriendTagList()">\n\n      <h2> {{\'CONTACT_SET_REMARK_TAG\'|translate}}</h2>\n\n      <ion-note item-end>\n\n        {{contact.friendTagName}}\n\n      </ion-note>\n\n    </button>\n\n  </ion-list>\n\n  <div padding>\n\n    <button (click)="saveSetting()" [disabled]="!isReadyToSave" ion-button color="primary" round block icon-left>\n\n      {{\'CHANGE_PASSWORD_SUBMIT\' | translate}}\n\n    </button>\n\n  </div> \n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\contact\contact-setremark\contact-setremark.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__providers_contact_provider__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_provider__["a" /* SqliteProvider */]])
    ], ContactSetremarkPage);
    return ContactSetremarkPage;
}());

//# sourceMappingURL=contact-setremark.js.map

/***/ })

});
//# sourceMappingURL=67.js.map