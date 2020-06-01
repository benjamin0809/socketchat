webpackJsonp([56],{

/***/ 1099:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycodePageModule", function() { return MycodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mycode__ = __webpack_require__(1288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MycodePageModule = (function () {
    function MycodePageModule() {
    }
    MycodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mycode__["a" /* MycodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mycode__["a" /* MycodePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], MycodePageModule);
    return MycodePageModule;
}());

//# sourceMappingURL=mycode.module.js.map

/***/ }),

/***/ 1288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(56);
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
 * Generated class for the MycodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MycodePage = (function () {
    function MycodePage(navCtrl, session, navParams, cd) {
        this.navCtrl = navCtrl;
        this.session = session;
        this.navParams = navParams;
        this.cd = cd;
        this.isLogin = false;
        this.isEmployee = false;
        this.isEmployee = this.session.isEmployee;
        if (this.session.user != null) {
            this.currentUser = this.session.user;
            this.isLogin = true;
        }
        if (this.currentUser && this.currentUser.employeeInfo) {
            this.currentUser.pictureUrl = this.currentUser.pictureUrl || "assets/img/avatar-round.png";
            this.staffNumber = this.currentUser.employeeInfo.staffNumber;
            // this.currentUser.scanCode="assets/img/code.png";
        }
    }
    MycodePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var str = __WEBPACK_IMPORTED_MODULE_0__services_constants__["d" /* APPNAME_PAGE_PREFIX */].toLowerCase() + "AppPageId=ContactDetailPage?friendId=" + this.session.userId;
        __WEBPACK_IMPORTED_MODULE_3__services_services__["h" /* Utility */].generateQRCode(str).then(function (res) {
            _this.currentUser.scanCode = res;
            _this.cd.detectChanges();
            // this.openPage(str);
        });
    };
    MycodePage.prototype.openPage = function (str) {
        __WEBPACK_IMPORTED_MODULE_3__services_services__["h" /* Utility */].parsePageUrl(str);
    };
    MycodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-mycode',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\my\mycode\mycode.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{\'MY_INFO_CODE\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <ion-card>\n\n    <ion-card-header>\n\n        <tr>\n\n            <td class="avatar">\n\n              <ion-avatar >\n\n                <img [src]="currentUser?.pictureUrl">\n\n              </ion-avatar>\n\n            </td>\n\n            <td padding>  \n\n              <h5 *ngIf="isLogin">{{currentUser.employeeInfo.employeeName}}</h5>\n\n              <div *ngIf="isLogin" class="headernote">{{ currentUser.employeeInfo.bu }}</div>\n\n            </td>\n\n        </tr>\n\n\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <img [src]="currentUser?.scanCode">    \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\my\mycode\mycode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])
    ], MycodePage);
    return MycodePage;
}());

//# sourceMappingURL=mycode.js.map

/***/ })

});
//# sourceMappingURL=56.js.map