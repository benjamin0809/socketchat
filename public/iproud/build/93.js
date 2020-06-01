webpackJsonp([93],{

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePageModule", function() { return SharePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share__ = __webpack_require__(1211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharePageModule = (function () {
    function SharePageModule() {
    }
    SharePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__share__["a" /* SharePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__share__["a" /* SharePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__share__["a" /* SharePage */]]
        })
    ], SharePageModule);
    return SharePageModule;
}());

//# sourceMappingURL=share.module.js.map

/***/ }),

/***/ 1211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_preload_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_share_provider__ = __webpack_require__(125);
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
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SharePage = (function () {
    function SharePage(navParams, 
        // private navCtrl: NavController,
        viewCtrl, translate, nativeService, shareProvider, preload, handle) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.nativeService = nativeService;
        this.shareProvider = shareProvider;
        this.preload = preload;
        this.handle = handle;
        this.navTargets = [];
        this.showTargets = [];
        this.navigationDockTargetMapIds = [];
        this.isShareImage = false;
        this.init();
        this.navigationDockTargetMapIds = this.navParams.data.navigationDockTargetMapIds || [];
        this.browser = this.navParams.data.browser;
        this.isShareImage = this.navParams.data.isShareImage;
        this.shareMessage = this.navParams.data.shareMessage;
        this.qrcode = this.navParams.data.qrcode;
        this.callback = this.navParams.data.callback;
        this.handle.generate('enter share page', 0, this.navParams.data);
        if (this.navigationDockTargetMapIds.length == 0) {
            this.showTargets = this.navTargets;
        }
        else {
            for (var _i = 0, _a = this.navTargets; _i < _a.length; _i++) {
                var target = _a[_i];
                if (this.navigationDockTargetMapIds.indexOf(target.navigationDockTargetMapId) > -1) {
                    this.showTargets.push(target);
                }
            }
        }
    }
    SharePage.prototype.init = function () {
        this.navTargets = [{
                'navigationDockTargetMapId': 1,
                'navigationDockId': 1,
                'navigationTargetId': 1,
                'navigationTargetName': this.translate.instant('BROWSER_POPOVER_WECHAT'),
                'navigationTargetImagePath': 'assets/svg/wechat.svg',
                'navigationTargetLink': 'device-livepoint',
                'navigationTargetParams': 'deviceId',
                'navigationTargetVisible': false,
                'navigationTargetDescription': this.translate.instant('BROWSER_POPOVER_WECHAT'),
            }, {
                'navigationDockTargetMapId': 2,
                'navigationDockId': 1,
                'navigationTargetId': 2,
                'navigationTargetName': this.translate.instant('BROWSER_POPOVER_WECHAT_MOMENT'),
                'navigationTargetImagePath': 'assets/svg/moment.svg',
                'navigationTargetLink': 'device-install-log',
                'navigationTargetParams': 'deviceId',
                'navigationTargetVisible': false,
                'navigationTargetDescription': this.translate.instant('BROWSER_POPOVER_WECHAT_MOMENT'),
            }, {
                'navigationDockTargetMapId': 3,
                'navigationDockId': 1,
                'navigationTargetId': 3,
                'navigationTargetName': this.translate.instant('BROWSER_POPOVER_WEBLOG'),
                'navigationTargetImagePath': 'assets/img/share/sinaweibo.png',
                'navigationTargetLink': 'maintenance-info',
                'navigationTargetParams': 'deviceId',
                'navigationTargetVisible': false,
                'navigationTargetDescription': this.translate.instant('BROWSER_POPOVER_WEBLOG'),
            }, {
                'navigationDockTargetMapId': 4,
                'navigationDockId': 1,
                'navigationTargetId': 4,
                'navigationTargetName': this.translate.instant('BROWSER_POPOVER_REFRESH'),
                'navigationTargetImagePath': 'assets/svg/refresh.svg',
                'navigationTargetLink': 'repair-record',
                'navigationTargetParams': 'deviceId',
                'navigationTargetVisible': false,
                'navigationTargetDescription': this.translate.instant('BROWSER_POPOVER_REFRESH'),
            }, {
                'navigationDockTargetMapId': 5,
                'navigationDockId': 1,
                'navigationTargetId': 5,
                'navigationTargetName': this.translate.instant('BROWSER_POPOVER_COPYURL'),
                'navigationTargetImagePath': 'assets/svg/copy.svg',
                'navigationTargetLink': 'repair-record',
                'navigationTargetParams': 'deviceId',
                'navigationTargetVisible': false,
                'navigationTargetDescription': this.translate.instant('BROWSER_POPOVER_COPYURL'),
            }, {
                'navigationDockTargetMapId': 6,
                'navigationDockId': 1,
                'navigationTargetId': 6,
                'navigationTargetName': this.translate.instant('BROWSER_POPOVER_COLLECT'),
                'navigationTargetImagePath': 'assets/img/shoucang.png',
                'navigationTargetLink': 'repair-record',
                'navigationTargetParams': 'deviceId',
                'navigationTargetVisible': false,
                'navigationTargetDescription': this.translate.instant('BROWSER_POPOVER_COLLECT'),
            }, {
                'navigationDockTargetMapId': 7,
                'navigationDockId': 1,
                'navigationTargetId': 7,
                'navigationTargetName': '好友',
                'navigationTargetImagePath': __WEBPACK_IMPORTED_MODULE_1__services_constants__["j" /* DEFAULT_LOGO */],
                'navigationTargetLink': 'repair-record',
                'navigationTargetParams': 'deviceId',
                'navigationTargetVisible': false,
                'navigationTargetDescription': '好友',
            }];
    };
    SharePage.prototype.do = function (navTarget) {
        var _this = this;
        switch (navTarget.navigationDockTargetMapId) {
            case 1:
                if (!this.isShareImage) {
                    this.shareProvider.shareWebPageWxSession(this.shareMessage).subscribe(function (res) {
                        _this.viewCtrl.dismiss({
                            result: true
                        });
                    }, function (err) {
                        _this.viewCtrl.dismiss({
                            result: false
                        });
                    });
                }
                else {
                    this.shareProvider.shareImageWxSession(this.shareMessage).subscribe(function (res) {
                        _this.viewCtrl.dismiss({
                            result: true
                        });
                    }, function (err) {
                        _this.viewCtrl.dismiss({
                            result: false
                        });
                    });
                }
                break;
            case 2:
                if (!this.isShareImage) {
                    this.shareProvider.shareWebPageWxTimeLine(this.shareMessage).subscribe(function (res) {
                        _this.viewCtrl.dismiss({
                            result: true
                        });
                    }, function (err) {
                        _this.viewCtrl.dismiss({
                            result: false
                        });
                    });
                }
                else {
                    this.shareProvider.shareImageWxTimeLine(this.shareMessage).subscribe(function (res) {
                        _this.viewCtrl.dismiss({
                            result: true
                        });
                    }, function (err) {
                        _this.viewCtrl.dismiss({
                            result: false
                        });
                    });
                }
                break;
            case 3:
                break;
            case 7:
                this.preload.openContactChooserPage({ callback: this.callback, type: 1 });
                break;
            default:
                break;
        }
    };
    SharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-share',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\common\share\share.html"*/'<!--<ion-header style="height: 48px;line-height:48px;text-align: center">\n\n  <ion-navbar>\n\n    <ion-title>分享到</ion-title>\n\n  </ion-navbar>\n\n</ion-header>-->\n\n<ion-content  no-bounce>\n\n  <p text-center>{{\'SHARE_MODAL_TITLE\' | translate}}</p>\n\n  <div text-center class="qrcode-container" *ngIf="qrcode" (click)="scaleImage()">\n\n    <img [src]="qrcode">\n\n  </div>\n\n  \n\n  <ion-row>\n\n    <ion-col class="col" *ngFor="let navTarget of showTargets" >\n\n      <button class="target" tappable (click)="do(navTarget)">\n\n        <img [src]="navTarget.navigationTargetImagePath" class="div-img">\n\n        <div class="div-name">{{navTarget.navigationTargetName}}</div>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\common\share\share.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_share_provider__["a" /* ShareProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_preload_provider__["a" /* PreloadProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__["a" /* HandleProvider */]])
    ], SharePage);
    return SharePage;
}());

//# sourceMappingURL=share.js.map

/***/ })

});
//# sourceMappingURL=93.js.map