webpackJsonp([119],{

/***/ 1000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentifyCodePageModule", function() { return IdentifyCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identify_code__ = __webpack_require__(1174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IdentifyCodePageModule = (function () {
    function IdentifyCodePageModule() {
    }
    IdentifyCodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__identify_code__["a" /* IdentifyCodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__identify_code__["a" /* IdentifyCodePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], IdentifyCodePageModule);
    return IdentifyCodePageModule;
}());

//# sourceMappingURL=identify-code.module.js.map

/***/ }),

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentifyCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_errcode__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_provider__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(33);
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
 * 验证码页面
 */
var IdentifyCodePage = (function () {
    function IdentifyCodePage(navCtrl, navParams, authProvider, sanitizer, viewController, formBuilder, translateService, nativeService, events, ionicApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.sanitizer = sanitizer;
        this.viewController = viewController;
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.nativeService = nativeService;
        this.events = events;
        this.ionicApp = ionicApp;
        this.sendButtonDisabled = true; //发送按钮是否可用
        this.errorString = ''; //验证码错误提示
        this.inputType = ''; //使用验证码类型
        this.clientId = ''; //获取验证码clientId
        this._buildForm();
        this.accountInfo = this.navParams.data.accountInfo;
        this.inputType = this.navParams.data.inputType;
        this.clientId = this.navParams.data.clientId;
    }
    IdentifyCodePage.prototype.ionViewDidLoad = function () {
        this.getIdentifyCode();
    };
    /**
     * 获取验证码
     */
    IdentifyCodePage.prototype.getIdentifyCode = function () {
        var _this = this;
        this.authProvider.MessageCaptcha(this.clientId).subscribe(function (res) {
            if (res.result && res.result.image) {
                if (res.result.image.indexOf('data:image/jpeg;base64,') == -1) {
                    _this.identifyCodeUrl = _this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + res.result.image);
                }
                else {
                    _this.identifyCodeUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(res.result.image);
                }
            }
        });
    };
    IdentifyCodePage.prototype.refreshVerifyCode = function () {
        this.keywordInput.setFocus(); //为输入框设置焦点
        this.getIdentifyCode();
    };
    /**
     * 关闭当前窗口
     */
    IdentifyCodePage.prototype.closeWindow = function () {
        this.events.publish('Verification:close-window');
        if (this.viewController) {
            this.viewController.dismiss();
        }
    };
    IdentifyCodePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.keywordInput.setFocus(); //为输入框设置焦点
        }, 150);
    };
    IdentifyCodePage.prototype.closeAllModalPage = function () {
        this.events.publish('closemodal:login-success');
    };
    /**
     * 校验验证码
     */
    IdentifyCodePage.prototype.sendVerificationCode = function () {
        var _this = this;
        var identifyCode = __WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* Utility */].trim(this.identifyForm.controls.identifyCode.value);
        switch (this.inputType) {
            case 'sendSecurityCodeBefore':
                this.authProvider.SendSecurityCode2(this.accountInfo, identifyCode, this.navParams.data.countDownKey)
                    .subscribe(function (res) {
                    _this.closeWindow();
                    // this.closeAllModalPage()
                }, function (err) {
                    _this.verificationErrorHandle(err);
                });
                break;
            case 'LoginByWFAccountBefore':
                this.authProvider.LoginByWFAccount2(this.accountInfo, identifyCode)
                    .subscribe(function (res) {
                    // this.closeWindow();
                    _this.closeAllModalPage();
                }, function (err) {
                    _this.verificationErrorHandle(err, true);
                });
                break;
            case 'LoginByMobileBefore':
                this.authProvider.Login2(this.accountInfo, identifyCode)
                    .subscribe(function (res) {
                    // this.closeWindow();
                    _this.closeAllModalPage();
                }, function (err) {
                    _this.verificationErrorHandle(err, true);
                });
                break;
        }
    };
    /**
     * 验证失败处理
     * @param err
     * @param isLogin 是否为登录
     */
    IdentifyCodePage.prototype.verificationErrorHandle = function (err, isLogin) {
        if (err.errcode == __WEBPACK_IMPORTED_MODULE_4__services_errcode__["a" /* ErrorCode */].USER.INCORRECT_VERIFICATION_CODE) {
            this.errorString = this.translateService.instant('VERIFICATION_CODE_INCORRECT');
            this.getIdentifyCode();
        }
        else if (err.errcode == __WEBPACK_IMPORTED_MODULE_4__services_errcode__["a" /* ErrorCode */].USER.VERIFICATION_CODE_EXPIRED) {
            this.errorString = this.translateService.instant('VERIFICATION_CODE_EXPIRED');
            this.getIdentifyCode();
        }
        else {
            this.loginError(err);
            this.closeWindow();
        }
    };
    IdentifyCodePage.prototype._buildForm = function () {
        var _this = this;
        this.identifyForm = this.formBuilder.group({
            identifyCode: ['']
        });
        this.identifyForm.controls.identifyCode.valueChanges.subscribe(function (value) {
            _this.sendButtonDisabled = value ? false : true;
            _this.errorString = "";
        });
    };
    /**
     * 登录失败处理
     * @param err
     */
    IdentifyCodePage.prototype.loginError = function (err) {
        var loginErrorString = '';
        switch (err.errcode) {
            case __WEBPACK_IMPORTED_MODULE_4__services_errcode__["a" /* ErrorCode */].USER.INACTIVE_USER:
                loginErrorString = "ACCOUNT_LOCKED";
                break;
            case __WEBPACK_IMPORTED_MODULE_4__services_errcode__["a" /* ErrorCode */].USER.USER_NOT_EXIST:
                loginErrorString = "LOGIN_ERROR_USER_NOT_EXIST";
                break;
            case __WEBPACK_IMPORTED_MODULE_4__services_errcode__["a" /* ErrorCode */].USER.MOBILE_NOT_EXIST:
                loginErrorString = "LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";
                break;
            case __WEBPACK_IMPORTED_MODULE_4__services_errcode__["a" /* ErrorCode */].USER.INCORRECT_ACCOUNT_AND_PASSWORD:
                loginErrorString = "LOGIN_ERROR_INCORRECT_PASSWORD";
                break;
            case __WEBPACK_IMPORTED_MODULE_4__services_errcode__["a" /* ErrorCode */].USER.INCORRECT_PASSWORD:
                loginErrorString = "LOGIN_ERROR_INCORRECT_PASSWORD";
                break;
            default: loginErrorString = 'LOGIN_ERROR';
        }
        this.nativeService.alert(this.translateService.instant(loginErrorString));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])("keyword"),
        __metadata("design:type", Object)
    ], IdentifyCodePage.prototype, "keywordInput", void 0);
    IdentifyCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'page-identify-code',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\account\identify-code\identify-code.html"*/'<ion-content no-bounce (click)="closeWindow()">\n\n <div class=" identify-container   " [ngClass]="{\'identify-container-blur\': isBlur}"\n\n   (click)="$event.stopPropagation();"> \n\n   <div class="identify-box">\n\n     <div class="identify-code ">\n\n       <h6 (click)="getActivityModalId()">\n\n         {{ \'SIGNUP_VERIFYCODE_TITLE\' | translate }}\n\n       </h6>\n\n       <div class="verification-img" (click)="refreshVerifyCode()"> \n\n         <img [src]="identifyCodeUrl" *ngIf="identifyCodeUrl">\n\n         <img class="loading-img" src="assets/svg/loading.svg" *ngIf="!identifyCodeUrl">\n\n       </div>  \n\n       <div class="error-hints">\n\n         <p class="error-code" [hidden]="!errorString"> {{ errorString }}</p>\n\n       </div> \n\n     </div>\n\n \n\n     <form class="form" [formGroup]="identifyForm" (ngSubmit)="sendVerificationCode()">\n\n       <ion-grid>\n\n         <ion-row align-self-center>\n\n           <ion-col col-1></ion-col>\n\n           <ion-col col-6> \n\n             <ion-input type="text" (ionBlur)="isBlur = true " (ionFocus)="isBlur = false" #keyword\n\n               formControlName="identifyCode" placeholder="{{ \'SIGNUP_IDENTIFY_PLACEHOLDER\' | translate }}"></ion-input> \n\n\n\n           </ion-col>\n\n           <ion-col col-5 class="submit-button">\n\n             <button type="submit" small ion-button outline\n\n               [disabled]="sendButtonDisabled">{{\'APP_COMMON_CONFIRM\' | translate}}</button>\n\n           </ion-col>\n\n         </ion-row>\n\n       </ion-grid> \n\n     </form>\n\n   </div> \n\n </div> \n\n</ion-content>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\account\identify-code\identify-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_provider__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicApp */]])
    ], IdentifyCodePage);
    return IdentifyCodePage;
}());

//# sourceMappingURL=identify-code.js.map

/***/ })

});
//# sourceMappingURL=119.js.map