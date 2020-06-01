webpackJsonp([104],{

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestBindempPageModule", function() { return TestBindempPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_bindemp__ = __webpack_require__(1200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestBindempPageModule = (function () {
    function TestBindempPageModule() {
    }
    TestBindempPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__test_bindemp__["a" /* TestBindempPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__test_bindemp__["a" /* TestBindempPage */]),
            ],
        })
    ], TestBindempPageModule);
    return TestBindempPageModule;
}());

//# sourceMappingURL=test-bindemp.module.js.map

/***/ }),

/***/ 1200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestBindempPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_provider__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the TestBindempPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestBindempPage = (function () {
    function TestBindempPage(navCtrl, navParams, configProvider, session) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configProvider = configProvider;
        this.session = session;
    }
    TestBindempPage.prototype.ionViewDidLoad = function () {
        this.InCompanyDate = __WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].formatTime(this.session.language, new Date(), 'YYYY-MM-DD');
    };
    TestBindempPage.prototype.Test = function () {
        var _this = this;
        console.log(this.InCompanyDate);
        this.configProvider.AfterNewEmployeeBind(this.InCompanyDate, this.siteCode).subscribe(function (res) {
            _this.result = res;
        });
    };
    TestBindempPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-test-bindemp',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\beta\test-bindemp\test-bindemp.html"*/'<!--\n\n  Generated template for the TestBindempPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>test-bindemp</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>InCompanyDate</ion-label>\n\n      <ion-input type="Date" [(ngModel)]="InCompanyDate"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label stacked>Site</ion-label>\n\n      <ion-input type="text" [(ngModel)]="siteCode" placeholder="廊坊: LF; 龙华: LH"></ion-input>\n\n    </ion-item>\n\n  \n\n    <span>{{result}}</span>\n\n     <button ion-button block  (click)="Test()">Test</button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\beta\test-bindemp\test-bindemp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_provider__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_0__services_session__["a" /* Session */]])
    ], TestBindempPage);
    return TestBindempPage;
}());

//# sourceMappingURL=test-bindemp.js.map

/***/ })

});
//# sourceMappingURL=104.js.map