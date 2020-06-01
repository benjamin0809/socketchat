webpackJsonp([113],{

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySegmentPageModule", function() { return MySegmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_segment__ = __webpack_require__(1187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MySegmentPageModule = (function () {
    function MySegmentPageModule() {
    }
    MySegmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_segment__["a" /* MySegmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_segment__["a" /* MySegmentPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], MySegmentPageModule);
    return MySegmentPageModule;
}());

//# sourceMappingURL=my-segment.module.js.map

/***/ }),

/***/ 1187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySegmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session__ = __webpack_require__(19);
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
 * Generated class for the MySegmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MySegmentPage = (function () {
    function MySegmentPage(navCtrl, platform, session, navParams) {
        this.navCtrl = navCtrl;
        this.session = session;
        this.navParams = navParams;
        this.socialcontact = " ";
        this.isAndroid = false;
        this.isLogin = false;
        this.isEmployee = false;
        this.socialcontact = this.navParams.data.socialcontact;
        // this.isAndroid = platform.is('android');
        this.isEmployee = this.session.isEmployee;
        if (this.session.user != null) {
            this.currentUser = this.session.user;
            this.isLogin = true;
        }
        if (this.currentUser && this.currentUser.employeeInfo) {
            this.currentUser.pictureUrl = this.currentUser.pictureUrl;
            this.currentUser.signature = "try and fail,but not afraid to fail";
        }
    }
    MySegmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MySegmentPage');
    };
    MySegmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-segment',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\achievement\my-segment\my-segment.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>我的动态</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n    <div padding >\n\n        <ion-segment [(ngModel)]="socialcontact" color="medium">\n\n          <ion-segment-button  value="fabiao">\n\n            {{\'MY_LIST_FABIAO\' | translate}}\n\n          </ion-segment-button>\n\n          <ion-segment-button value="guanzhu">\n\n            {{\'MY_LIST_GUANZHU\' | translate}}\n\n          </ion-segment-button>\n\n          <ion-segment-button value="fans">\n\n            {{\'MY_LIST_FENSI\' | translate}}\n\n          </ion-segment-button>\n\n          <ion-segment-button value="huozan">\n\n            {{\'MY_LIST_HUOZAN\' | translate}}\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n      \n\n      <div [ngSwitch]="socialcontact">\n\n        <ion-list *ngSwitchCase="\'fabiao\'">\n\n          <h4 class="year">2018年</h4>\n\n          <ion-item>\n\n              <h2 item-start>12.09</h2>\n\n              <button ion-item color="grayy">\n\n                  <ion-thumbnail item-start>\n\n                      <img src="assets/imgs/logo.png">\n\n                  </ion-thumbnail>\n\n                  <h2 item-end>员宝，有温度的共享平台</h2>\n\n              </button>\n\n          </ion-item>  \n\n          <ion-item>\n\n              <h2 item-start>12.01</h2>\n\n              <button ion-item color="grayy">\n\n                  <ion-thumbnail item-start>\n\n                      <img src="assets/img/splashbg.png">\n\n                  </ion-thumbnail>\n\n                  <h2 item-end>员宝，有温度的共享平台</h2>\n\n              </button>\n\n          </ion-item>          \n\n        </ion-list>\n\n      \n\n        <ion-list *ngSwitchCase="\'guanzhu\'">\n\n          <ion-item>\n\n            <ion-thumbnail item-start>\n\n                <img [src]="currentUser?.pictureUrl">\n\n            </ion-thumbnail>\n\n            <h2>{{currentUser?.nickName}}</h2>\n\n            <p>{{currentUser?.signature}}</p>\n\n            <ion-note item-end>\n\n                <button small outline ion-button color="medium">取消关注</button>\n\n            </ion-note>        \n\n          </ion-item>\n\n          \n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'fans\'">\n\n            <ion-item>\n\n                <ion-thumbnail item-start>\n\n                    <img [src]="currentUser?.pictureUrl">\n\n                </ion-thumbnail>\n\n                <h2>{{currentUser?.nickName}}</h2>\n\n                <p>{{currentUser?.signature}}</p>\n\n                <ion-note item-end>\n\n                    <button small outline ion-button color="medium">互相关注</button>\n\n                </ion-note>        \n\n              </ion-item>\n\n           \n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'huozan\'">\n\n            <ion-item>\n\n              \n\n            </ion-item>\n\n              \n\n        </ion-list>\n\n      </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\achievement\my-segment\my-segment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], MySegmentPage);
    return MySegmentPage;
}());

//# sourceMappingURL=my-segment.js.map

/***/ })

});
//# sourceMappingURL=113.js.map