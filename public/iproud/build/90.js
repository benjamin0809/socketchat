webpackJsonp([90],{

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradePageModule", function() { return UpgradePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upgrade__ = __webpack_require__(1213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UpgradePageModule = (function () {
    function UpgradePageModule() {
    }
    UpgradePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__upgrade__["a" /* UpgradePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upgrade__["a" /* UpgradePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], UpgradePageModule);
    return UpgradePageModule;
}());

//# sourceMappingURL=upgrade.module.js.map

/***/ }),

/***/ 1213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(216);
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
 * Generated class for the UpgradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpgradePage = (function () {
    function UpgradePage(navCtrl, modalCtrl, nativeService, configProvider, events, iab, serverProvider, widgetProvider, session, viewCtrl, storageService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.nativeService = nativeService;
        this.configProvider = configProvider;
        this.events = events;
        this.iab = iab;
        this.serverProvider = serverProvider;
        this.widgetProvider = widgetProvider;
        this.session = session;
        this.viewCtrl = viewCtrl;
        this.storageService = storageService;
        this.needUpdate = false;
        this.isDebug = false;
        this.isIgnore = false;
        this.canIgnore = true;
        this.init();
    }
    UpgradePage.prototype.ionViewDidLeave = function () {
        this.configProvider.isShowUpgraderPage = false;
    };
    UpgradePage.prototype.updateVersion = function () {
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
                        if (item.name == 'AndroidUpgradeUrl') {
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
    UpgradePage.prototype.init = function () {
        this.isDebug = this.serverProvider.isDebug;
        this.currentVerionNo = this.configProvider.currentVersionNo;
        this.lastestVerionNo = this.configProvider.latestVersionNo;
        this.lastVersionInfo = this.configProvider.lastVersionInfo;
        this.appDownloadPageUrl = this.configProvider.appDownloadPageUrl;
        for (var _i = 0, _a = this.session.globalSetting; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.name.toLowerCase() == 'minAppVersion'.toLowerCase()) {
                this.canIgnore = !__WEBPACK_IMPORTED_MODULE_2__services_utility__["a" /* Utility */].checkNewVersion(item.value, this.configProvider.currentVersionNo);
                break;
            }
        }
        this.needUpdate = __WEBPACK_IMPORTED_MODULE_2__services_utility__["a" /* Utility */].checkNewVersion(this.lastestVerionNo, this.currentVerionNo);
    };
    UpgradePage.prototype.ignored = function () {
        this.configProvider.canUpgrade = false;
        this.storageService.setItem("isIgnore" + this.lastestVerionNo, true);
        this.viewCtrl.dismiss();
        this.events.publish('upgrade:re-init');
    };
    UpgradePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-upgrade',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\common\upgrade\upgrade.html"*/'<!--\n\n  Generated template for the UpgradePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header >\n\n\n\n  <ion-navbar>\n\n    <ion-title >{{\'UPGRADE_NEW_VERSION\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p class="tips" text-center>{{\'UPGRADE_VERSION_TIPS\' | translate}}</p>\n\n\n\n  <ion-card> \n\n    <ion-card-content>\n\n        <ion-card-title text-center>\n\n            {{\'UPGRADE_CURRENT_VERSION\' | translate}}:{{currentVerionNo}}\n\n        </ion-card-title>\n\n\n\n        <ion-card-title text-center>\n\n          {{\'UPGRADE_LATEST_VERSION\' | translate}}:{{lastestVerionNo}}\n\n      </ion-card-title>\n\n    </ion-card-content>\n\n</ion-card>\n\n<ion-card>\n\n    \n\n    <ion-card-content >\n\n        <ion-card-title text-center>\n\n            {{\'ABOUT_VERSION_DESC\' | translate}}\n\n        </ion-card-title>\n\n      \n\n \n\n        <p [innerHTML]="lastVersionInfo?.releaseNotes">  </p>\n\n    </ion-card-content>\n\n</ion-card>\n\n \n\n<div text-center margin-top color="medium">\n\n    <ion-note> FIH 富智康 版权所有\n\n        <br/>Copyright@2018 FIH. All rights reserved.</ion-note>\n\n</div>\n\n\n\n</ion-content>\n\n<ion-footer  >\n\n  <ion-toolbar >\n\n      <ion-grid>\n\n          <ion-row>\n\n            <ion-col *ngIf="canIgnore">\n\n              <button ion-button block round primary  outline (click)="ignored()"> {{\'UPGRADE_IGNORE\' | translate}}</button>\n\n            </ion-col>\n\n            <ion-col>\n\n              <button ion-button  block round primary (click)="updateVersion()">{{\'UPGRADE_UPDATE_NOW\' | translate}}</button>\n\n            </ion-col>\n\n          </ion-row> \n\n        </ion-grid> \n\n </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\common\upgrade\upgrade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_providers__["d" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__providers_providers__["k" /* ServerProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_providers__["n" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_1__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__services_storage_service__["a" /* StorageService */]])
    ], UpgradePage);
    return UpgradePage;
}());

//# sourceMappingURL=upgrade.js.map

/***/ })

});
//# sourceMappingURL=90.js.map