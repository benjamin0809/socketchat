webpackJsonp([109],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginByWechatPageModule", function() { return LoginByWechatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_by_wechat__ = __webpack_require__(1195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginByWechatPageModule = (function () {
    function LoginByWechatPageModule() {
    }
    LoginByWechatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_by_wechat__["a" /* LoginByWechatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_by_wechat__["a" /* LoginByWechatPage */]),
            ],
        })
    ], LoginByWechatPageModule);
    return LoginByWechatPageModule;
}());

//# sourceMappingURL=login-by-wechat.module.js.map

/***/ }),

/***/ 1195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginByWechatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_clipboard__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_provider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_native_service__ = __webpack_require__(21);
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
 * Generated class for the LoginByWechatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginByWechatPage = (function () {
    function LoginByWechatPage(navCtrl, navParams, nativeService, loadingCtrl, userProvider, clipboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.loadingCtrl = loadingCtrl;
        this.userProvider = userProvider;
        this.clipboard = clipboard;
        this.result = '';
        this.code = '';
    }
    LoginByWechatPage.prototype.ionViewDidLoad = function () {
    };
    LoginByWechatPage.prototype.getCode = function () {
        var _this = this;
        this.nativeService.isInstallWeChat();
        var loading = this.loadingCtrl.create({
            content: "跳转微信登录中...",
            dismissOnPageChange: true,
            showBackdrop: true //是否显示遮罩层
        });
        loading.present();
        try {
            var scope = "snsapi_userinfo", state = "com.fihmb.iproud";
            // 1. 获取code
            Wechat.auth(scope, state, function (response) {
                _this.code = response.code;
            }, function (reason) {
                alert("Failed: " + reason);
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            loading.dismiss();
        }
    };
    LoginByWechatPage.prototype.weChatAuth = function () {
        var _this = this;
        this.nativeService.isInstallWeChat();
        var loading = this.loadingCtrl.create({
            content: "跳转微信登录中...",
            dismissOnPageChange: true,
            showBackdrop: true //是否显示遮罩层
        });
        loading.present();
        try {
            var scope = "snsapi_userinfo", state = "com.fihmb.iproud";
            // 1. 获取code
            Wechat.auth(scope, state, function (response) {
                _this.getWechatUserInfo(response);
            }, function (reason) {
                alert("Failed: " + reason);
            });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            loading.dismiss();
        }
    };
    LoginByWechatPage.prototype.copyCode = function () {
        var _this = this;
        this.clipboard.copy(this.code).then(function (res) {
            _this.nativeService.showToast("复制Code成功，Code：" + _this.code);
        });
    };
    LoginByWechatPage.prototype.getWechatUserInfo = function (response) {
        var _this = this;
        this.userProvider.getWechatUserInfo(response.code).subscribe(function (res) {
            _this.result = JSON.stringify(res, null, 2);
        }, function (err) {
            _this.result = JSON.stringify(err, null, 2);
        });
    };
    LoginByWechatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-login-by-wechat',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\beta\login-by-wechat\login-by-wechat.html"*/'<!--\n\n  Generated template for the LoginByWechatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header> \n\n  <ion-navbar>\n\n    <ion-title>getWechatUserInfo</ion-title>\n\n  </ion-navbar> \n\n</ion-header>\n\n\n\n\n\n<ion-content padding> \n\n  <div [innerHtml]="result"></div>\n\n  <button ion-button block round (click)="weChatAuth()">getWechatUserInfo</button> \n\n\n\n\n\n  <ion-item>\n\n     <span>Code:</span>\n\n    <div [innerHtml]="code"></div>\n\n  </ion-item>\n\n  \n\n  <button ion-button block round (click)="getCode()">getCode</button> \n\n  <button ion-button block round (click)="copyCode()">copyCode</button>  \n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\beta\login-by-wechat\login-by-wechat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_user_provider__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_clipboard__["a" /* Clipboard */]])
    ], LoginByWechatPage);
    return LoginByWechatPage;
}());

//# sourceMappingURL=login-by-wechat.js.map

/***/ })

});
//# sourceMappingURL=109.js.map