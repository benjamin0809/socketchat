webpackJsonp([91],{

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(1212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorialPageModule = (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]
            ]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 1212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_config_provider__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_action_sheet_action_sheet_controller__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, translate, platform, events, storageService, nativeService, statusbar, actionSheetCtrl, http, session, navparam, configProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.translate = translate;
        this.platform = platform;
        this.events = events;
        this.storageService = storageService;
        this.nativeService = nativeService;
        this.statusbar = statusbar;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.session = session;
        this.navparam = navparam;
        this.configProvider = configProvider;
        this.showSkip = true;
        this.dir = 'ltr';
        this.isDark = false;
        this.language = '';
        this.isInApp = true;
        this.dir = platform.dir();
        this.isInApp = this.navparam.data.isInApp;
        this.storageService.getItem('optionTheme').then(function (res) {
            _this.isDark = res;
        });
        this.storageService.getItem("language").then(function (lang) {
            _this.language = lang;
            _this.init();
        });
    }
    TutorialPage.prototype.init = function () {
        this.slides = [
            {
                title: this.translate.instant('TUTORIAL_SLIDE1_TITLE'),
                description1: this.translate.instant('TUTORIAL_SLIDE1_DESCRIPTION1'),
                description2: this.translate.instant('TUTORIAL_SLIDE1_DESCRIPTION2'),
                description3: this.translate.instant('TUTORIAL_SLIDE1_DESCRIPTION3'),
                image: 'assets/img/tutorial/icon1.png',
            },
            {
                title: this.translate.instant('TUTORIAL_SLIDE2_TITLE'),
                description1: this.translate.instant('TUTORIAL_SLIDE2_DESCRIPTION1'),
                description2: this.translate.instant('TUTORIAL_SLIDE2_DESCRIPTION2'),
                description3: this.translate.instant('TUTORIAL_SLIDE2_DESCRIPTION3'),
                image: 'assets/img/tutorial/icon2.png',
            },
            {
                title: this.translate.instant('TUTORIAL_SLIDE3_TITLE'),
                description1: this.translate.instant('TUTORIAL_SLIDE3_DESCRIPTION1'),
                description2: this.translate.instant('TUTORIAL_SLIDE3_DESCRIPTION2'),
                description3: this.translate.instant('TUTORIAL_SLIDE3_DESCRIPTION3'),
                image: 'assets/img/tutorial/icon3.png',
                isEnd: true
            }
        ];
    };
    TutorialPage.prototype.startApp = function () {
        if (this.isInApp) {
            this.navCtrl.pop();
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages__["c" /* MainPage */], {}, {
                animate: true,
                direction: 'forward'
            });
            this.events.publish('tutorial:init');
            this.storageService.setItem(__WEBPACK_IMPORTED_MODULE_4__services_constants__["F" /* TUTORIAL_FLAG_NAME */], true);
        }
    };
    TutorialPage.prototype.styleChange = function () {
        if (this.isDark) {
            this.statusbar.styleDefault();
            this.isDark = !this.isDark;
        }
        else {
            this.statusbar.styleLightContent();
            this.isDark = !this.isDark;
        }
    };
    TutorialPage.prototype.overLays = function () {
        if (this.isDark) {
            this.statusbar.overlaysWebView(true);
            this.isDark = !this.isDark;
        }
        else {
            this.statusbar.overlaysWebView(false);
            this.isDark = !this.isDark;
        }
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
        this.nativeService.setStyleLightContent();
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
        this.nativeService.statusBarStyle(this.isDark);
    };
    /**
     * 打开语言选择
     */
    TutorialPage.prototype.doSelectLanguage = function () {
        var _this = this;
        var ActionSheetButtons = [];
        var _loop_1 = function (item) {
            var button = {
                text: item.name,
                role: this_1.language === item.value ? 'destructive' : '',
                icon: this_1.language === item.value ? 'ios-checkmark' : '',
                handler: function () {
                    _this.language = item.value;
                    _this._selectLanguage(item.value);
                }
            };
            ActionSheetButtons.push(button);
        };
        var this_1 = this;
        for (var _i = 0, LANGUAGES_1 = __WEBPACK_IMPORTED_MODULE_4__services_constants__["u" /* LANGUAGES */]; _i < LANGUAGES_1.length; _i++) {
            var item = LANGUAGES_1[_i];
            _loop_1(item);
        }
        ActionSheetButtons.push({
            text: this.translate.instant('APP_COMMON_CANCEL'),
            role: 'cancel',
            handler: function () {
            }
        });
        this.actionSheetCtrl.create({
            title: this.translate.instant('LOGIN_LANGUAGE_SELECT'),
            buttons: ActionSheetButtons
        }).present();
    };
    /**选定语言 */
    TutorialPage.prototype._selectLanguage = function (lang) {
        this.language = lang;
        this.configProvider.changeLanguage(lang, true);
        this.init();
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
            selector: 'page-tutorial',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\common\tutorial\tutorial.html"*/'<ion-header no-shadow transparent>\n\n  <ion-navbar>\n\n    <!-- <ion-buttons start>\n\n    <button ion-button color="royal" (click)="doSelectLanguage()">\n\n      <ion-icon name="globe-outline"></ion-icon>\n\n    </button>\n\n  </ion-buttons> -->\n\n    <ion-buttons end *ngIf="showSkip">\n\n      <button ion-button (click)="startApp()" color="light">{{ \'APP_TUTORIAL_PASS\' | translate}}</button>\n\n      <!-- <button ion-button (click)="styleChange()" color="light">styleChange</button>\n\n      <button ion-button (click)="overLays()" color="light">overLays</button> -->\n\n      \n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)">\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <div>\n\n        <h1 class="slide-title">{{slide.title}}</h1>\n\n        <p class="slide-description">{{slide.description1}}</p>\n\n        <p class="slide-description">{{slide.description2}}</p>\n\n        <p class="slide-description">{{slide.description3}}</p>\n\n      </div>\n\n      <div class="start" *ngIf="slide.isEnd">\n\n        <button ion-button full (click)="startApp()" color="light"> {{\'APP_TUTORIAL_START\' | translate}}</button>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\common\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["m" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_5__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_action_sheet_action_sheet_controller__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_config_provider__["a" /* ConfigProvider */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=91.js.map