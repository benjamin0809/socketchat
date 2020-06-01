webpackJsonp([69],{

/***/ 1073:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMoreModalPageModule", function() { return ContactMoreModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_more_modal__ = __webpack_require__(1248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactMoreModalPageModule = (function () {
    function ContactMoreModalPageModule() {
    }
    ContactMoreModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_more_modal__["a" /* ContactMoreModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_more_modal__["a" /* ContactMoreModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], ContactMoreModalPageModule);
    return ContactMoreModalPageModule;
}());

//# sourceMappingURL=contact-more-modal.module.js.map

/***/ }),

/***/ 1248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactMoreModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_provider__ = __webpack_require__(213);
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
 * Generated class for the ContactMoreModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactMoreModalPage = (function () {
    function ContactMoreModalPage(navCtrl, contactProvider, viewCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.contactProvider = contactProvider;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.events = events;
        this.newFriendsRequest = 0;
        this.parentCallback = this.navParams.data.callback;
        // this.LatestFriendRequest();
    }
    ContactMoreModalPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ContactMoreModalPage');
    };
    ContactMoreModalPage.prototype.openContactAddPage = function () {
        this.parentCallback.openContactAddPage();
        this.viewCtrl.dismiss();
    };
    ContactMoreModalPage.prototype.LatestFriendRequest = function () {
        var _this = this;
        this.contactProvider.LatestFriendRequest().subscribe(function (res) {
            _this.latestFriends = res.result;
            for (var _i = 0, _a = _this.latestFriends; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.status == 'waiting') {
                    _this.newFriendsRequest++;
                }
            }
        });
    };
    ContactMoreModalPage.prototype.openContactGroupManage = function () {
        this.parentCallback.openContactGroupManage();
        this.viewCtrl.dismiss();
    };
    ContactMoreModalPage.prototype.openBlackListManage = function () {
        this.parentCallback.openBlackListManage();
        this.viewCtrl.dismiss();
    };
    ContactMoreModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-more-modal',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\contact\contact-more-modal\contact-more-modal.html"*/'  \n\n  <ion-list>\n\n    <ion-item (click)="openContactAddPage()">\n\n      <ion-label>{{\'CONTACT_MORE_ADD_FRIEND\'|translate}}</ion-label>\n\n    </ion-item>\n\n    <ion-item (click)="openContactGroupManage()">\n\n        <ion-label>{{\'CONTACT_MORE_GROUP_MANAGE\'|translate}}</ion-label>\n\n    </ion-item>\n\n    <ion-item (click)="openBlackListManage()">\n\n        <ion-label>{{\'CONTACT_MORE_BLACKLIST_MANAGE\'|translate}}</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n '/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\contact\contact-more-modal\contact-more-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_contact_provider__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], ContactMoreModalPage);
    return ContactMoreModalPage;
}());

//# sourceMappingURL=contact-more-modal.js.map

/***/ })

});
//# sourceMappingURL=69.js.map