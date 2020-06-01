webpackJsonp([52],{

/***/ 1102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPasswordPageModule", function() { return SetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__updata_phone__ = __webpack_require__(1291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SetPasswordPageModule = (function () {
    function SetPasswordPageModule() {
    }
    SetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__updata_phone__["a" /* updataPhonePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__updata_phone__["a" /* updataPhonePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__updata_phone__["a" /* updataPhonePage */]
            ]
        })
    ], SetPasswordPageModule);
    return SetPasswordPageModule;
}());

//# sourceMappingURL=updata-phone.module.js.map

/***/ }),

/***/ 1291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updataPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_cache_provider__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var updataPhonePage = (function () {
    function updataPhonePage(navCtrl, toastCtrl, viewCtrl, session, userProvider, authProvider, nativeService, translateService, events, modalCtrl, cacheProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.session = session;
        this.userProvider = userProvider;
        this.authProvider = authProvider;
        this.nativeService = nativeService;
        this.translateService = translateService;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.cacheProvider = cacheProvider;
        this.verifyButtonEnabled = false;
        this.switch = false;
        this.COUNTDOWN_KEY = 'updatePhoneCountDown'; //倒计时KEY
        this.events.subscribe('countDown:send-security-code:' + this.COUNTDOWN_KEY, function () {
            _this._resetTime(60);
        });
        this.validateInput();
        this.translateService.get('SIGNUP_VERIFYCODE_SEND').subscribe(function (value) {
            _this.verifyButtonFixedText = value;
            _this.verifyButtonText = _this.verifyButtonFixedText;
        });
        this.country = '+86';
        if (this.session.user != null) {
            this.currentUser = this.session.user;
        }
    }
    updataPhonePage.prototype.submit = function () {
        var _this = this;
        //校验
        if (this.phoneNo == null && this.phoneNo == undefined) {
            this.nativeService.alert(this.translateService.instant("MY_PHONE_VERIFY"));
            return;
        }
        this.userProvider.setPhone({
            phoneNo: this.country + " " + this.phoneNo,
            securityCode: this.verifyCode
        }).subscribe(function (data) {
            _this.userProvider.getUserInfo().subscribe(function (data) {
                // this.events.publish('user:info-changed', Date.now());
                _this.viewCtrl.dismiss();
            });
        });
    };
    //选择国家地区
    updataPhonePage.prototype.doSelectCountry = function () {
        var _this = this;
        var selectModal = this.modalCtrl.create('SelectCountryPage');
        selectModal.onDidDismiss(function (item) {
            if (item) {
                _this.country = "+" + item.number;
            }
        });
        selectModal.present();
    };
    updataPhonePage.prototype.keyUpFn = function () {
        if (this.verifyCode.length == 6) {
            this.switch = true;
        }
        else {
            this.switch = false;
        }
    };
    updataPhonePage.prototype.sendSecurityCodeBefore = function () {
        var _this = this;
        this.verifyButtonEnabled = true;
        this.authProvider.sendSecurityCodeBefore('sendSecurityCodeBefore', {
            country: this.country,
            mobilephone: this.phoneNo
        }, this.COUNTDOWN_KEY, function () {
            _this.verifyButtonEnabled = false;
        });
    };
    updataPhonePage.prototype.getVerifyCode = function () {
        var _this = this;
        // Attempt to login in through our User service
        if (this.verifyButtonEnabled) {
            return;
        }
        //向手机发送验证码
        this.authProvider.sendSecurityCode({
            country: this.country,
            mobilephone: this.phoneNo
        }, "").subscribe(function (resp) {
            _this._resetTime(60);
        }, function (err) {
            // Unable to sign up
            var toast = _this.toastCtrl.create({
                message: _this.sendCodeErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    updataPhonePage.prototype._resetTime = function (time) {
        var that = this;
        that.verifyButtonEnabled = true;
        (function countdown() {
            // var s = time % 60
            // var m = Math.floor((time / 60)) % 60
            // var msg = `${(m < 10 ? '0' : '') + m}分钟${(s < 10 ? '0' : '') + s}`;
            that.verifyButtonText = time.toString() + that.translateService.instant('APP_DATETIME_SECOND');
            if (--time > 0) {
                setTimeout(countdown, 1000);
                that.cacheProvider.setCountDown(that.COUNTDOWN_KEY, time);
            }
            else {
                // 做结束的事
                that.verifyButtonText = that.verifyButtonFixedText;
                that.verifyButtonEnabled = false;
            }
        })();
    };
    /**
* 判断按钮是否可用；
* 1.手机号码为空时，所有按钮不可用。
* 2.当手机号码不为空时，发送验证码按钮可用；验证码为6位时且同意协议时，下一步按钮可用。
*/
    updataPhonePage.prototype.validateInput = function () {
        if (this.phoneNo) {
            if (this.cacheProvider.getCountDown(this.COUNTDOWN_KEY) == 0) {
                this.verifyButtonEnabled = false;
            }
            if (this.verifyCode && this.verifyCode.length == 6) {
                this.switch = true;
            }
            else {
                this.switch = false;
            }
        }
        else {
            this.verifyButtonEnabled = true;
        }
    };
    updataPhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-updata-phone',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\my\updata-phone\updata-phone.html"*/'<ion-header >\n\n        <ion-navbar>\n\n            <ion-title>{{ \'MY_SET_PHONE\' | translate }}</ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <form (ngSubmit)="submit()">\n\n            <div class="account-container">\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-3 class="line_label selectcountry">\n\n                        <button type="button" ion-button outline clear icon-right color="primary" (click)="doSelectCountry()">{{country}}\n\n                            <ion-icon name="md-arrow-dropdown"></ion-icon>\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col col-9 class="line_input"  >\n\n                        <ion-input type="text"  placeholder="{{ \'MY_UPDATA_PHONE\' | translate }}" [(ngModel)]="phoneNo" (ngModelChange)="validateInput($event)" name="phoneNo"></ion-input>\n\n                    </ion-col>    \n\n                </ion-row> \n\n            </ion-grid>\n\n            <ion-grid>\n\n                <ion-row  >\n\n                    <!-- <ion-col col-3 class="line_label">\n\n                        <ion-label fixed color="primary" text-center>{{ \'SIGNUP_VERIFYCODE\' | translate }}</ion-label>\n\n                      </ion-col> -->\n\n                      <ion-col col-8 class="line_input password"  >\n\n                        <ion-input type="text"   [(ngModel)]="verifyCode" (ngModelChange)="validateInput($event)"  name="verifyCode"\n\n                        placeholder="{{ \'SIGNUP_VERIFYCODE_PLACEHOLDER\' | translate }}"></ion-input>\n\n                      </ion-col>\n\n                      <ion-col col-4 class="line_label">\n\n                          <button type="button" item-end [disabled]="verifyButtonEnabled" ion-button small outline icon-right color="primary" \n\n                          (click)="sendSecurityCodeBefore()">{{ verifyButtonText }}</button>\n\n                      </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </div>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-12>\n\n                        <button type="submit" [disabled]="!switch" ion-button color="primary" round block icon-left>\n\n                            {{\'CHANGE_PASSWORD_SUBMIT\' | translate}}\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </form>\n\n    </ion-content>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\my\updata-phone\updata-phone.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["m" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_cache_provider__["a" /* CacheProvider */]])
    ], updataPhonePage);
    return updataPhonePage;
}());

//# sourceMappingURL=updata-phone.js.map

/***/ })

});
//# sourceMappingURL=52.js.map