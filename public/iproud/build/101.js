webpackJsonp([101],{

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPopoverPageModule", function() { return BrowserPopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser_popover__ = __webpack_require__(1203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BrowserPopoverPageModule = (function () {
    function BrowserPopoverPageModule() {
    }
    BrowserPopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__browser_popover__["a" /* BrowserPopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__browser_popover__["a" /* BrowserPopoverPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__browser_popover__["a" /* BrowserPopoverPage */]
            ]
        })
    ], BrowserPopoverPageModule);
    return BrowserPopoverPageModule;
}());

//# sourceMappingURL=browser-popover.module.js.map

/***/ }),

/***/ 1203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrowserPopoverPage = (function () {
    function BrowserPopoverPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.parentCallback = this.navParams.data.callback;
        this.isShare = this.navParams.data.isShare;
        this.options = this.navParams.data.options;
    }
    BrowserPopoverPage.prototype.openComplaint = function () {
        this.parentCallback.openComplaint();
        this.viewCtrl.dismiss();
    };
    BrowserPopoverPage.prototype.openInBrowser = function () {
        this.parentCallback.openInBrowser();
        this.viewCtrl.dismiss();
    };
    // 刷新
    BrowserPopoverPage.prototype.refresh = function () {
        this.parentCallback.refresh();
        this.viewCtrl.dismiss();
    };
    // 分享
    BrowserPopoverPage.prototype.share = function () {
        this.parentCallback.share();
        this.viewCtrl.dismiss();
    };
    // 分享到微信好友
    BrowserPopoverPage.prototype.shareWxSession = function () {
        this.parentCallback.shareWxSession();
        this.viewCtrl.dismiss();
    };
    // 分享到微信朋友圈
    BrowserPopoverPage.prototype.shareWxTimeLine = function () {
        this.parentCallback.shareWxTimeLine();
        this.viewCtrl.dismiss();
    };
    // 複製鏈接
    BrowserPopoverPage.prototype.copyurl = function () {
        this.parentCallback.copyurl();
        this.viewCtrl.dismiss();
    };
    // 关闭
    BrowserPopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
        this.parentCallback.close();
    };
    BrowserPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-browser-popover',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\common\browser-popover\browser-popover.html"*/' <ion-grid class="links" *ngIf="isShare">\n\n    <ion-row>\n\n           \n\n        <ion-col col-3 text-center>\n\n            <button block text-center (click)="shareWxSession()">\n\n                <img width="36" height="36" src="assets/svg/wechat.svg"/><br/>\n\n                <span class="title">{{\'BROWSER_POPOVER_WECHAT\' | translate}}</span>\n\n            </button>\n\n        </ion-col>\n\n        <ion-col col-3 text-center>\n\n            <button block text-center (click)="shareWxTimeLine()">\n\n                <img width="36" height="36" src="assets/svg/moment.svg"/><br/>\n\n                <span class="title">{{\'BROWSER_POPOVER_WECHAT_MOMENT\' | translate}}</span>\n\n            </button>\n\n        </ion-col>\n\n        <ion-col col-3 text-center></ion-col> \n\n        <ion-col col-3 text-center></ion-col>  \n\n    </ion-row>\n\n</ion-grid> \n\n<ion-grid class="actions">\n\n    <ion-row> \n\n        <ion-col col-3 text-center>\n\n            <button block text-center (click)="refresh()" color="secondary" outline>\n\n                <img width="36" height="36" src="assets/svg/refresh.svg"/><br/>\n\n                <span class="title">{{\'BROWSER_POPOVER_REFRESH\' | translate}}</span>\n\n            </button>\n\n        </ion-col>\n\n        <ion-col col-3 text-center *ngIf="options?.allowCopyLink">\n\n            <button block text-center (click)="copyurl()" color="dark" outline>\n\n                <img width="36" height="36" src="assets/svg/copy.svg"/><br/>\n\n                <span class="title">{{\'BROWSER_POPOVER_COPYURL\' | translate}}</span>\n\n            </button>\n\n        </ion-col>\n\n        <ion-col col-3 text-center *ngIf="options?.allowOpenInBrowser">\n\n            <button block text-center (click)="openInBrowser()" color="dark" outline>\n\n                <img width="36" height="36" src="assets/svg/browser.svg"/><br/>\n\n            <span class="title">{{\'BROWSER_POPOVER_OPENINBROWSER\' | translate}} </span>\n\n        </button>\n\n        </ion-col>\n\n        <ion-col col-3 text-center *ngIf="options?.isComplaint">\n\n            <button block text-center (click)="openComplaint()" color="dark" outline>\n\n                <img width="36" height="36" src="assets/svg/complaint.svg"/><br/>\n\n            <span class="title">{{\'BROWSER_POPOVER_COMPLAINT\' | translate}} </span>\n\n        </button>\n\n\n\n        </ion-col>\n\n         \n\n        <!-- <ion-col col-3 text-center>\n\n            <button block text-center (click)="close()" color="dark" outline>\n\n                <ion-icon name="close"></ion-icon><br/>\n\n                <span class="title">{{\'BROWSER_POPOVER_CLOSE\' | translate}}</span>\n\n            </button>\n\n        </ion-col> -->\n\n    </ion-row>\n\n</ion-grid>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\common\browser-popover\browser-popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], BrowserPopoverPage);
    return BrowserPopoverPage;
}());

//# sourceMappingURL=browser-popover.js.map

/***/ })

});
//# sourceMappingURL=101.js.map