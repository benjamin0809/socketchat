webpackJsonp([92],{

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs__ = __webpack_require__(1144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_cache_provider__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_preload_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_providers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_session__ = __webpack_require__(19);
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











var TabsPage = (function () {
    function TabsPage(navCtrl, translateService, messageProvider, session, events, jpushService, storageService, cd, element, preloadProvider, cacheProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.messageProvider = messageProvider;
        this.session = session;
        this.events = events;
        this.jpushService = jpushService;
        this.storageService = storageService;
        this.cd = cd;
        this.element = element;
        this.preloadProvider = preloadProvider;
        this.cacheProvider = cacheProvider;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_8__pages__["f" /* Tab1Root */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_8__pages__["g" /* Tab2Root */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_8__pages__["h" /* Tab3Root */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_8__pages__["i" /* Tab4Root */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_8__pages__["j" /* Tab5Root */];
        this.tab1Title = " ";
        this.tab2Title = " ";
        this.tab3Title = " ";
        this.tab4Title = " ";
        this.tab5Title = " ";
        // isEmployee: Boolean = false;
        this.isShowScreenShot = false;
        this.showSocial = false;
        this.newMessageCount = 0;
        this.showTabs = true;
        this._setTabText();
        this.init();
        // 当收到推送消息时（此时将消息存储）
        this.events.subscribe('jpush.notificationReceived', function () {
            // if (this.tabRef.getSelected().index != 1) {
            // this.newMessageCount += 1;
            _this._setTabMessageBadge();
            // }
        });
        this.events.subscribe('beta: showScreenShotButton', function (isShowScreenShot) {
            _this.isShowScreenShot = isShowScreenShot;
        });
        this.events.subscribe('lang:changed', function (event) {
            _this._setTabText();
        });
        this.events.subscribe('to-homemain', function (event) {
            _this.selectTab(0);
        });
        this.events.subscribe('changeTabsDisplay', function (isHide) {
            _this.showTabs = !isHide;
        });
        this.events.subscribe('user:info-changed', function () {
            // this.isEmployee = this.session.isEmployee;
            setTimeout(function () {
                _this.init();
                _this.cd && _this.cd.detectChanges();
            }, 100);
        });
        this.events.subscribe('message:count-changed', function (count) {
            if (count > 0) {
                _this.newMessageCount = count;
            }
            else {
                _this.newMessageCount = 0;
            }
            _this.jpushService.setIosIconBadgeNumber(count);
            _this._setTabMessageBadge();
            // setTimeout(()=>{ 
            //   if (!this.cd['destroyed'])this.cd.detectChanges();
            // },500) 
        });
        this.events.subscribe('MassFlagChange', function () {
            _this.init();
        });
    }
    TabsPage.prototype.ionChange = function () {
        if (this.tabRef.getSelected().index == 1) {
        }
    };
    ;
    TabsPage.prototype.selectTab = function (index) {
        this.tabRef.select(index);
        this.ionChange();
    };
    TabsPage.prototype._setTabMessageBadge = function () {
        if (this.newMessageCount == 0) {
            this.tabRef.getByIndex(1).tabBadge = "";
        }
        else {
            this.tabRef.getByIndex(1).tabBadge = this.newMessageCount.toString();
            this.cd && this.cd.detectChanges();
        }
    };
    TabsPage.prototype._setTabText = function () {
        var _this = this;
        this.translateService.get(['TABS_TAB1_TITLE', 'TABS_TAB2_TITLE', 'TABS_TAB3_TITLE', 'TABS_TAB4_TITLE', 'TABS_TAB5_TITLE']).subscribe(function (values) {
            _this.tab1Title = values['TABS_TAB1_TITLE'];
            _this.tab2Title = values['TABS_TAB2_TITLE'];
            _this.tab3Title = values['TABS_TAB3_TITLE'];
            _this.tab4Title = values['TABS_TAB4_TITLE'];
            _this.tab5Title = values['TABS_TAB5_TITLE'];
        });
    };
    TabsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (event) {
            _this._setTabText();
        });
    };
    TabsPage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.cacheProvider.getSocialSetting()];
                    case 1:
                        res = _a.sent();
                        this.showSocial = res.showSocial;
                        this.session.showSocial = res.showSocial;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3:
                        this.cd && this.cd.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage.prototype.screenShot = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__services_utility__["a" /* Utility */].captureWebPage(this.element.nativeElement).subscribe(function (res) {
            _this.preloadProvider.previewImage([
                { pictureUrl: res.result }
            ], 0);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('mainTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["w" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\common\tabs\tabs.html"*/'<ion-tabs id="rootTabs" #mainTabs  (ionChange)="ionChange()" [ngClass]="{\'hide-tabs\': !showTabs}">\n\n  <ion-tab [root]="tab1Root" [tabTitle]="tab1Title" tabIcon="home" ></ion-tab>\n\n  <ion-tab [root]="tab2Root" [tabTitle]="tab2Title" tabIcon="ios-text" tabBadgeStyle="danger"></ion-tab> \n\n  <ion-tab [root]="tab3Root" [tabTitle]="tab3Title" tabIcon="md-apps"  ></ion-tab> \n\n  <ion-tab [root]="tab4Root" [tabTitle]="tab4Title" tabIcon="community-link"  [show]="showSocial"></ion-tab>\n\n  <ion-tab [root]="tab5Root" [tabTitle]="tab5Title" tabIcon="person"  ></ion-tab>\n\n\n\n  <!--<ion-tab [root]="tab5Root" [tabTitle]="tab5Title" tabIcon="person"   ></ion-tab>  -->\n\n</ion-tabs>\n\n<div class="screen-shot" *ngIf="isShowScreenShot" (click)="screenShot()"></div>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\common\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_providers__["i" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_10__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__services_services__["c" /* JPushService */],
            __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__providers_preload_provider__["a" /* PreloadProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_cache_provider__["a" /* CacheProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=92.js.map