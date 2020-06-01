webpackJsonp([54],{

/***/ 1100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(1289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(596);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 1289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_config_provider__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_provider__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_widget_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_cache_provider__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_providers__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, settings, formBuilder, navParams, translate, storageService, userProvider, alertCtrl, events, session, nativeService, cacheProvider, jpushService, widgetProvider, serverProvider, configProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this.storageService = storageService;
        this.userProvider = userProvider;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.session = session;
        this.nativeService = nativeService;
        this.cacheProvider = cacheProvider;
        this.jpushService = jpushService;
        this.widgetProvider = widgetProvider;
        this.serverProvider = serverProvider;
        this.configProvider = configProvider;
        this.openWay = __WEBPACK_IMPORTED_MODULE_4__services_constants__["v" /* OPEN_WIDGET_WAY */].IFRAME;
        this.settingsReady = false;
        this.isEmployee = false;
        this.browserCore = false;
        this.cacheSize = 0;
        this.isAdmin = false;
        this.isBeta = false;
        this.languages = __WEBPACK_IMPORTED_MODULE_4__services_constants__["u" /* LANGUAGES */];
        this.browserCoreKey = 'browserCore';
        this.openWays = [];
        this.isAdmin = this.navParams.data.isAdmin;
        this.isBeta = __WEBPACK_IMPORTED_MODULE_4__services_constants__["s" /* IS_BETA */];
        this.userId = this.navParams.data.userId;
        this.events.subscribe('cache:clear-image', function () {
            _this.cacheSize = 0;
        });
        this.initBrowserCore();
        this.browserCoreKey = this.userId + this.browserCoreKey;
        for (var _i = 0, _a = Object.keys(__WEBPACK_IMPORTED_MODULE_4__services_constants__["v" /* OPEN_WIDGET_WAY */]); _i < _a.length; _i++) {
            var key = _a[_i];
            this.openWays.push({
                label: key,
                value: __WEBPACK_IMPORTED_MODULE_4__services_constants__["v" /* OPEN_WIDGET_WAY */][key],
            });
        }
    }
    SettingsPage.prototype._buildForm = function () {
        var _this = this;
        var group = {
            optionDebug: [this.options.optionDebug],
            optionBrowser: [this.options.optionBrowser],
            optionShowFabButton: [this.options.optionShowFabButton],
            optionTheme: [this.options.optionTheme],
            optionReceiveNotify: [this.options.optionReceiveNotify],
            optionLanguage: [this.navParams.data.language || this.options.optionLanguage],
            isCollectErrorInfo: [this.options.isCollectErrorInfo],
        };
        this.form = this.formBuilder.group(group);
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.settings.merge(_this.form.value);
        });
        this.form.controls.isCollectErrorInfo.valueChanges.subscribe(function (value) {
            _this.storageService.setItem("isCollectErrorInfo", value);
        });
        this.form.controls.optionLanguage.valueChanges.subscribe(function (lang) {
            _this.session.widget = null;
            _this.configProvider.changeLanguage(lang, false);
            _this.userProvider.getUserInfo(); //刷新个人信息
        });
        this.form.controls.optionShowFabButton.valueChanges.subscribe(function (value) {
            _this.events.publish('setting:changed', value); //需要刷新设置 
        });
        this.form.controls.optionDebug.valueChanges.subscribe(function (value) {
            // this.events.publish('setting:changed',value); //需要刷新版本
            _this.storageService.setItem("isdebug", value);
            var message = "";
            if (value) {
                message = _this.translate.instant('VERSION_EXCHANGE_TO_DEBUG');
            }
            else {
                message = _this.translate.instant('VERSION_EXCHANGE_TO_RELEASE');
            }
            _this.nativeService.showToast(message);
        });
        this.form.controls.optionBrowser.valueChanges.subscribe(function (value) {
            _this.browserCore = value;
            _this.widgetProvider.innerBrowser = value;
            _this.storageService.setItem(_this.session.userId + "openWay", _this.openWay);
            _this.storageService.setItem(_this.browserCoreKey, value);
            _this.events.publish('change:openWay', value, _this.openWay);
        });
        this.form.controls.optionTheme.valueChanges.subscribe(function (value) {
            _this.session.isDarkMode = value;
            _this.storageService.setItem("optionTheme", value);
            _this.events.publish('setting:change-theme', value);
            //延时保存主题
            clearTimeout(_this.timer);
            _this.timer = setTimeout(function () {
                _this.userProvider.privateSetting([{ "name": "appTheme", "value": __WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].getThemeName(value) }]).subscribe(function (data) {
                });
            }, 3000);
        });
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        // this.testSaveDeviceId();
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        this.settings.load().then(function () {
            _this.settingsReady = true;
            _this.options = _this.settings.allSettings;
            _this.options.optionDebug = _this.serverProvider.isDebug;
            _this._buildForm();
        }).catch(function () {
            _this.settingsReady = true;
            _this.options = {
                optionReceiveNotify: true,
                optionLanguage: 'en-US',
                optionShowFabButton: true,
                optionTheme: false,
                optionDebug: __WEBPACK_IMPORTED_MODULE_4__services_constants__["t" /* IS_DEBUG */],
                isCollectErrorInfo: true
            };
            _this._buildForm();
        });
        this.storageService.getItem(__WEBPACK_IMPORTED_MODULE_4__services_constants__["E" /* STORAGE_KEY */].DATA.CACHE_SIZE).then(function (cacheResult) {
            if (!cacheResult)
                cacheResult = 0;
            _this.cacheSize = cacheResult;
        });
        this.isEmployee = this.session.isEmployee;
    };
    SettingsPage.prototype.ngOnChanges = function () {
    };
    //清除缓存--删除消息 
    SettingsPage.prototype.deleteCache = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.translate.instant('SETTINGS_DELETE_CACHE'),
            message: this.translate.instant('SETTINGS_CACHE_INFO'),
            buttons: [
                {
                    text: this.translate.instant('APP_COMMON_CANCEL'),
                    role: 'Cancel'
                },
                {
                    text: this.translate.instant('APP_COMMON_CONFIRM'),
                    handler: function () {
                        //2019-1-14 by zhaogx do not clear message
                        // this.events.publish('message:clear-all', Date.now());
                        //清除搜索记录
                        _this.storageService.setItem("HistorySearch", []);
                        //清除搜索记录 
                        //清除悬浮球信息
                        _this.storageService.setItem("touch-coords", "");
                        _this.storageService.setItem("isShowFabButton", "");
                        /**清除图片缓存 */
                        _this.cacheProvider.clearImageCache();
                        _this.widgetProvider.clearBrowserCache();
                        _this.userProvider.clearMemberCache().subscribe(function (res) {
                            _this.nativeService.alert(_this.translate.instant('SETTINGS_CACHE_COMPLETE'));
                        }, function (error) {
                            console.error(error);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    SettingsPage.prototype.changeOpenWay = function () {
        this.storageService.setItem(this.session.userId + "openWay", this.openWay);
        this.events.publish('change:openWay', this.browserCore, this.openWay);
    };
    SettingsPage.prototype.initBrowserCore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var openWay, browserCore;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.getItem(this.session.userId + "openWay")];
                    case 1:
                        openWay = _a.sent();
                        return [4 /*yield*/, this.storageService.getItem(this.browserCoreKey)];
                    case 2:
                        browserCore = _a.sent();
                        if (browserCore) {
                            this.browserCore = browserCore;
                        }
                        if (openWay) {
                            this.openWay = openWay;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.getRegistrationID = function () {
        //this.jpushService.initJpush();
        // this.jpushService.count = 0;
        this.jpushService.getDeviceId(true);
        // this.storageService.removeItem('homedata')
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\my\settings\settings.html"*/'<ion-header >\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'SETTINGS_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <form [formGroup]="form" *ngIf="settingsReady">\n\n    <ion-list >\n\n      <!-- <ion-item>\n\n        <ion-label>{{ \'SETTINGS_OPTION_RECEIVE_NOTIFY\' | translate }}</ion-label>\n\n        <ion-toggle formControlName="optionReceiveNotify"></ion-toggle>\n\n      </ion-item> -->\n\n      <ion-item>\n\n        <ion-label>{{ \'SETTINGS_OPTION_LANGUAGE\' | translate }}</ion-label>\n\n        <ion-select formControlName="optionLanguage" okText="{{\'APP_COMMON_CONFIRM\' | translate}}" cancelText="{{\'APP_COMMON_CANCEL\' | translate}}"> \n\n          <ion-option value="{{language.value}}" *ngFor="let language of languages">{{language.name}}</ion-option>  \n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="isEmployee">\n\n        <ion-label>{{ \'SETTINGS_ASSISTIVE_TOUCH\' | translate }}</ion-label>\n\n        <ion-toggle formControlName="optionShowFabButton"></ion-toggle>\n\n      </ion-item>\n\n\n\n      <!-- <ion-item *ngIf="isAdmin">\n\n          <ion-label>{{ \'ABOUT_VERSION_DEBUG\' | translate }}</ion-label>\n\n          <ion-toggle formControlName="optionDebug"></ion-toggle>\n\n      </ion-item> -->\n\n\n\n      <ion-item *ngIf="isAdmin">\n\n        <ion-label>{{ \'SETTINGS_BROWSER_CORE\' | translate }}</ion-label>\n\n        <ion-toggle formControlName="optionBrowser"></ion-toggle>\n\n      </ion-item>\n\n\n\n      \n\n\n\n      <ion-item  no-lines>\n\n        <ion-label>{{ \'SETTINGS_DARK_THEME\' | translate }}</ion-label>\n\n        <ion-toggle formControlName="optionTheme"></ion-toggle>\n\n      </ion-item>\n\n\n\n      <div class="divider"></div>\n\n      <ion-item  >\n\n        <ion-label>{{ \'SETTINGS_SEND_ERROR_REPORT\' | translate }}</ion-label>\n\n        <ion-toggle formControlName="isCollectErrorInfo"></ion-toggle>\n\n      </ion-item>\n\n\n\n      <ion-item (click)="deleteCache()">\n\n          {{\'SETTINGS_DELETE_CACHE\' | translate}}{{ cacheSize | cacheFormat }}\n\n      </ion-item>\n\n\n\n\n\n      <!-- <ion-item (click)="create()">\n\n        create\n\n    </ion-item>\n\n    <ion-item (click)="delete()">\n\n      delete\n\n  </ion-item>\n\n\n\n  <ion-item (click)="insertUser()">\n\n    insertUser\n\n</ion-item>\n\n\n\n<ion-item (click)="queryUser()">\n\n  queryUser\n\n</ion-item>\n\n\n\n<ion-item (click)="clearALl()">\n\n  clearALl\n\n</ion-item>  -->\n\n\n\n    </ion-list>\n\n  </form>\n\n  <ion-list class="advance-options " [ngClass]="{\'advance-options-hidden\': !isAdmin || !browserCore}"  radio-group [(ngModel)]="openWay" (ngModelChange)="changeOpenWay()">\n\n\n\n    <div>\n\n        <ion-list-header>\n\n            How to open an app\n\n        </ion-list-header>\n\n      \n\n        <ion-item *ngFor="let item of openWays">\n\n          <ion-label>{{item.label}}</ion-label>\n\n          <ion-radio [value]="item.value" [checked]="item.value == openWay"></ion-radio>\n\n        </ion-item> \n\n    </div> \n\n    </ion-list>\n\n\n\n\n\n  <!--\n\n    <ion-label>清除缓存</ion-label>\n\n    <ion-select multiple="true" formControlName="deleteCache">\n\n            <ion-option value="1">消息缓存</ion-option>\n\n            <ion-option value="2">其他缓存</ion-option>\n\n    </ion-select>\n\n -->\n\n  <!-- <div padding *ngIf="isAdmin">\n\n    <button (click)="getRegistrationID()" ion-button color="namePurple" round block icon-left>\n\n      getRegistrationID \n\n    </button>\n\n  </div> -->\n\n \n\n</ion-content>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\my\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_12__providers_providers__["l" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_11__services_services__["g" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_12__providers_providers__["m" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_11__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_6__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_cache_provider__["a" /* CacheProvider */],
            __WEBPACK_IMPORTED_MODULE_6__services_services__["c" /* JPushService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_widget_provider__["a" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_server_provider__["a" /* ServerProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_config_provider__["a" /* ConfigProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=54.js.map