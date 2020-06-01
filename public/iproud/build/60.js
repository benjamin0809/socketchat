webpackJsonp([60],{

/***/ 1090:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about__ = __webpack_require__(1266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__about__["a" /* AboutPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__about__["a" /* AboutPage */]
            ]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 1266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_widget_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular_navigation_nav_params__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AboutPage = (function () {
    function AboutPage(navCtrl, modalCtrl, nativeService, configProvider, events, iab, widgetProvider, serverProvider, session, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.nativeService = nativeService;
        this.configProvider = configProvider;
        this.events = events;
        this.iab = iab;
        this.widgetProvider = widgetProvider;
        this.serverProvider = serverProvider;
        this.session = session;
        this.navParams = navParams;
        this.needUpdate = false;
        this.isDebug = false;
        this.isAdmin = false;
        this.isBeta = false;
        this.isAdmin = this.navParams.data.isAdmin;
        if (this.session && this.session.userId && this.session.userId == '50709171857408') {
            if (this.session.user.nickName == 'Beta') {
                this.isAdmin = true;
            }
            else {
                this.isAdmin = false;
            }
        }
        this.isBeta = __WEBPACK_IMPORTED_MODULE_1__services_constants__["s" /* IS_BETA */];
        this.events.subscribe('lang:changed', function (data) {
            var language;
            switch (data.language) {
                case 'zh-CN':
                    language = 'cn';
                    break;
                case 'zh-TW':
                    language = 'tw';
                    break;
                default: language = 'us';
            }
            _this.configProvider.getLastestVersion(language).subscribe(function () {
                _this.init();
            });
        });
        this.init();
    }
    AboutPage.prototype.updateVersion = function () {
        var _this = this;
        if (!this.appDownloadPageUrl) {
            this.appDownloadPageUrl = this.serverProvider.AppDownloadPage();
        }
        if (this.nativeService.isIos()) {
            this.widgetProvider.openOnSystem(this.appDownloadPageUrl);
        }
        else {
            this.configProvider.getGlobalSettings().subscribe(function (res) {
                if (res.errcode == 0) {
                    for (var _i = 0, _a = res.result; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.toLowerCase() == 'androidupgradeurl') {
                            var url = "";
                            if (item.value && item.value.indexOf("?") > -1) {
                                url = item.value;
                            }
                            else {
                                url = item.value + '?Lang=' + _this.session.language;
                            }
                            window.open(url, '_system'); //'_system' 系统自带浏览器打开下载页
                            break;
                        }
                    }
                }
                else {
                    window.open(_this.appDownloadPageUrl + '?Lang=' + _this.session.language, '_system'); //'_system' 系统自带浏览器打开下载页
                }
            }, function (err) {
                window.open(_this.appDownloadPageUrl + '?Lang=' + _this.session.language, '_system'); //'_system' 系统自带浏览器打开下载页
            });
        }
    };
    //查看隐私政策
    AboutPage.prototype.viewPrivacyPolicy = function () {
        this.navCtrl.push('PrivacyPolicyPage', { subjectId: 256801, language: this.session.language });
    };
    //查看服务条款
    AboutPage.prototype.viewServiceAgreement = function () {
        this.navCtrl.push('PrivacyPolicyPage', { subjectId: 256802, language: this.session.language });
    };
    AboutPage.prototype.openWelcomePage = function () {
        this.navCtrl.push('TutorialPage', { isInApp: true });
    };
    AboutPage.prototype.openBeta = function () {
        this.navCtrl.push('BetaPage');
    };
    AboutPage.prototype.init = function () {
        this.isDebug = this.serverProvider.isDebug;
        this.currentVerionNo = this.configProvider.currentVersionNo;
        this.lastestVerionNo = this.configProvider.latestVersionNo;
        this.lastVersionInfo = this.configProvider.lastVersionInfo;
        this.appDownloadPageUrl = this.configProvider.appDownloadPageUrl;
        this.needUpdate = __WEBPACK_IMPORTED_MODULE_3__services_utility__["a" /* Utility */].checkNewVersion(this.lastestVerionNo, this.currentVerionNo);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\my\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'ABOUT_APP\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <img src="assets/img/appicon.png" width="96" height="96" />\n\n    <ion-card-content>\n\n      <!-- <ion-card-title text-center>\n\n        {{\'ABOUT_APP_VERSION\' | translate}}：{{currentVerionNo}}\n\n      </ion-card-title>\n\n\n\n      <p text-center [ngSwitch]="isDebug">\n\n        <span *ngSwitchCase=true>{{\'ABOUT_VERSION_DEBUG\' | translate}}</span>\n\n      </p> -->\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  <ion-list>\n\n    <!-- <button *ngIf="needUpdate" class="last-item" ion-item (click)="updateVersion()">\n\n      <h2>{{\'ABOUT_VERSION_UPDATE\' | translate}}</h2>\n\n      <ion-note item-end>\n\n        <p>\n\n          <ion-badge color="danger">new</ion-badge> {{lastestVerionNo}}\n\n        </p>\n\n      </ion-note>\n\n    </button>\n\n    <div *ngIf="needUpdate" class="divider"></div> -->\n\n    <button ion-item (click)="openWelcomePage()">\n\n      <h2>{{ \'ABOUT_WELCOME_PAGE\' | translate}}</h2>\n\n    </button>\n\n    <button ion-item (click)="viewPrivacyPolicy()">\n\n      <h2>{{ \'SIGNUP_PRIVACY_PPLICY\' | translate }}</h2>\n\n    </button>\n\n    <button ion-item class="last-item" (click)="viewServiceAgreement()">\n\n      <h2>{{ \'SIGNUP_SERVICE_AGREEMENT\' | translate }}</h2>\n\n    </button>\n\n   \n\n \n\n  <div class="divider"></div> \n\n\n\n    <button ion-item (click)="openBeta()" *ngIf="isAdmin" > \n\n        <h2>Beta</h2> \n\n      </button>\n\n\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar> \n\n    <div text-center margin-top color="medium">\n\n      <ion-note> FIH 富智康 版权所有\n\n        <br />Copyright@2018 FIH. All rights reserved.</ion-note>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\my\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_providers__["d" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_0__providers_widget_provider__["a" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_providers__["k" /* ServerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular_navigation_nav_params__["a" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=60.js.map