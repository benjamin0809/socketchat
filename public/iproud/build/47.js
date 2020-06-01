webpackJsonp([47],{

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetaPageModule", function() { return BetaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beta__ = __webpack_require__(1190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BetaPageModule = (function () {
    function BetaPageModule() {
    }
    BetaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__beta__["a" /* BetaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__beta__["a" /* BetaPage */]),
            ],
        })
    ], BetaPageModule);
    return BetaPageModule;
}());

//# sourceMappingURL=beta.module.js.map

/***/ }),

/***/ 1190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__beta_config__ = __webpack_require__(1191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_sqlite_provider__ = __webpack_require__(90);
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
 * Generated class for the BetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BetaPage = (function () {
    function BetaPage(navCtrl, navParams, sqlite, events, session, storage, hand) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.events = events;
        this.session = session;
        this.storage = storage;
        this.hand = hand;
        this.pages = __WEBPACK_IMPORTED_MODULE_4__beta_config__["a" /* BetaPageRouter */];
        this.MassFlag = false;
        this.showSocial = false;
        this.isShowScreenShot = false;
        this.isOnlyRecordError = true;
        this.enabledLocalSetting = false;
        this.init();
    }
    BetaPage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.getItem(__WEBPACK_IMPORTED_MODULE_1__services_constants__["E" /* STORAGE_KEY */].SETTING.ENABLE_LOCAL_SETTING_SOCIAL)];
                    case 1:
                        _a.enabledLocalSetting = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.storage.getItem(__WEBPACK_IMPORTED_MODULE_1__services_constants__["E" /* STORAGE_KEY */].SETTING.SHOWMASS)];
                    case 2:
                        _b.MassFlag = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.storage.getItem(__WEBPACK_IMPORTED_MODULE_1__services_constants__["E" /* STORAGE_KEY */].SETTING.SHOWSOCIAL)];
                    case 3:
                        _c.showSocial = _d.sent();
                        this.isOnlyRecordError = this.hand.isOnlyRecordError;
                        return [2 /*return*/];
                }
            });
        });
    };
    BetaPage.prototype.changeCollectFlag = function () {
        this.hand.isOnlyRecordError = this.isOnlyRecordError;
        this.storage.setItem(__WEBPACK_IMPORTED_MODULE_1__services_constants__["E" /* STORAGE_KEY */].SETTING.ONLY_COLLECT_ERROR_INFO, this.isOnlyRecordError);
    };
    BetaPage.prototype.communityUrlChange = function () {
        this.communityUrl;
    };
    BetaPage.prototype.setMassFlag = function () {
        this.session.user.showMass = this.MassFlag;
        this.storage.setItem(__WEBPACK_IMPORTED_MODULE_1__services_constants__["E" /* STORAGE_KEY */].SETTING.SHOWMASS, this.MassFlag);
        this.events.publish('MassFlagChange');
    };
    BetaPage.prototype.setshowSocialFlag = function () {
        this.session.user.showSocial = this.showSocial;
        this.storage.setItem(__WEBPACK_IMPORTED_MODULE_1__services_constants__["E" /* STORAGE_KEY */].SETTING.SHOWSOCIAL, this.showSocial);
        this.events.publish('MassFlagChange');
    };
    BetaPage.prototype.setEnableMassFlag = function () {
        this.storage.setItem(__WEBPACK_IMPORTED_MODULE_1__services_constants__["E" /* STORAGE_KEY */].SETTING.ENABLE_LOCAL_SETTING_SOCIAL, this.enabledLocalSetting);
        this.events.publish('MassFlagChange');
    };
    BetaPage.prototype.showButton = function () {
        this.events.publish('beta: showScreenShotButton', this.isShowScreenShot);
    };
    BetaPage.prototype.openPage = function (item) {
        this.navCtrl.push(item.url, item.params);
    };
    BetaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-beta',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\beta\beta\beta.html"*/'<!--\n\n  Generated template for the BetaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Beta</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <ion-list>\n\n    <button ion-item (click)="openPage(item)"  *ngFor="let item of pages" > \n\n      <h2>{{item.name}}</h2> \n\n    </button>\n\n\n\n    <ion-item>\n\n      <ion-label>ShowScreenShotButton</ion-label>\n\n      <ion-toggle checked="isShowScreenShot" [(ngModel)]="isShowScreenShot" (ngModelChange)="showButton(ngModelChange)"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item  >\n\n      <ion-label>启用本地设置（社群）</ion-label>\n\n      <ion-toggle checked="enabledLocalSetting" [(ngModel)]="enabledLocalSetting" (ngModelChange)="setEnableMassFlag()"></ion-toggle>\n\n    </ion-item>\n\n\n\n    <ion-item *ngIf="enabledLocalSetting">\n\n        <ion-label>启用积分成就</ion-label>\n\n        <ion-toggle checked="MassFlag" [(ngModel)]="MassFlag" (ngModelChange)="setMassFlag()"></ion-toggle>\n\n      </ion-item>\n\n    <ion-item *ngIf="enabledLocalSetting">\n\n      <ion-label>启用社群功能</ion-label>\n\n      <ion-toggle checked="showSocial" [(ngModel)]="showSocial" (ngModelChange)="setshowSocialFlag()"></ion-toggle>\n\n    </ion-item>\n\n \n\n    <ion-item>\n\n      <ion-label>CollectErrorOnly</ion-label>\n\n      <ion-toggle checked="isOnlyRecordError" [(ngModel)]="isOnlyRecordError" (ngModelChange)="changeCollectFlag()"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\beta\beta\beta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_sqlite_provider__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__["a" /* HandleProvider */]])
    ], BetaPage);
    return BetaPage;
}());

//# sourceMappingURL=beta.js.map

/***/ }),

/***/ 1191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetaPageRouter; });
var BetaPageRouter = [
    {
        url: "CommunityPage",
        name: "Community"
    },
    {
        url: "ContactPage",
        name: "Contact"
    },
    {
        url: "MessageChatPage",
        name: "MessageChat",
        params: { widgetName: "小宝", widgetId: "iproud" }
    },
    {
        url: "HandleHistoryPage",
        name: "HandleHistory"
    },
    {
        url: "SqliteTestPage",
        name: "SqliteTest"
    },
    {
        url: "TestBindempPage",
        name: "TestBindemp"
    },
    {
        url: "SendMessagePage",
        name: "SendMessage"
    },
    {
        url: "LoginByWechatPage",
        name: "getWechatUserInfo"
    },
    {
        url: "KeyboardPage",
        name: "KeyboardPage"
    },
    {
        url: "CommunityOptionPage",
        name: "CommunityOptionPage"
    },
    {
        url: "VideoPage",
        name: "VideoPage"
    },
    {
        url: "FilePage",
        name: "FilePage"
    },
    {
        url: "TestPdfPage",
        name: "TestPdfPage"
    },
    {
        url: "PdfjsViewerPage",
        name: "PdfjsViewerPage"
    }
];
//# sourceMappingURL=beta.config.js.map

/***/ })

});
//# sourceMappingURL=47.js.map