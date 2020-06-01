webpackJsonp([55],{

/***/ 1098:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityPageModule", function() { return SecurityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__security__ = __webpack_require__(1287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SecurityPageModule = (function () {
    function SecurityPageModule() {
    }
    SecurityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__security__["a" /* SecurityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__security__["a" /* SecurityPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__security__["a" /* SecurityPage */]
            ]
        })
    ], SecurityPageModule);
    return SecurityPageModule;
}());

//# sourceMappingURL=security.module.js.map

/***/ }),

/***/ 1287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_sqlite_provider__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_provider__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_provider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_services__ = __webpack_require__(56);
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










var SecurityPage = (function () {
    function SecurityPage(navCtrl, session, modalCtrl, userProvider, authProvider, nativeService, translate, alert, storageService, events, sqliteProvider) {
        this.navCtrl = navCtrl;
        this.session = session;
        this.modalCtrl = modalCtrl;
        this.userProvider = userProvider;
        this.authProvider = authProvider;
        this.nativeService = nativeService;
        this.translate = translate;
        this.alert = alert;
        this.storageService = storageService;
        this.events = events;
        this.sqliteProvider = sqliteProvider;
        this.isBindWeChat = false;
        this.enableElectronicSign = __WEBPACK_IMPORTED_MODULE_2__services_constants__["o" /* ENABLE_ELECTRONIC_SIGNATURE */];
        if (this.session.user != null) {
            this.currentUser = this.session.user;
            this.isBindWeChat = this.currentUser.nickNameWX || this.currentUser.headImgUrlWX;
        }
    }
    SecurityPage.prototype.goChangePassword = function () {
        this.navCtrl.push('ChangePasswordPage');
    };
    SecurityPage.prototype.goSetPassword = function () {
        this.navCtrl.push('SetPasswordPage');
    };
    SecurityPage.prototype.BindWeChat = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authProvider.getWeChatCode()];
                    case 1:
                        code = _a.sent();
                        this.userProvider.BindWechat(code).subscribe(function (res) {
                            _this.currentUser.nickNameWX = res.result.nickName;
                            _this.currentUser.headImgUrlWX = res.result.headImgUrl;
                            _this.isBindWeChat = _this.currentUser.nickNameWX || _this.currentUser.headImgUrlWX;
                            _this.nativeService.showToast(_this.translate.instant('BINDING_SUCCESS'));
                        }, function (err) {
                            console.error(err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SecurityPage.prototype.UnBindWechat = function () {
        var _this = this;
        this.userProvider.UnBindWechat().subscribe(function (res) {
            _this.isBindWeChat = false;
            _this.nativeService.showToast(_this.translate.instant('UNBIND_SUCCESS'));
        }, function (err) {
            console.error(err);
        });
    };
    SecurityPage.prototype.goCerificiate = function () {
        this.navCtrl.push('CertificatePage');
    };
    SecurityPage.prototype.AccountCancellation = function () {
        var _this = this;
        var alert = this.alert.create({
            title: this.translate.instant('CANCELACCOUNT'),
            subTitle: "",
            message: this.translate.instant('CANCELACCOUNT_TIPS'),
            buttons: [{
                    text: this.translate.instant('MESSAGE_DELETE_CANCEL'),
                    role: 'cancel'
                },
                {
                    text: this.translate.instant('MESSAGE_DELETE_CONFIRM'),
                    handler: function () {
                        _this.userProvider.CancelAccount().subscribe(function (res) {
                            _this.storageService.removeItem("userId");
                            _this.storageService.removeItem('token');
                            _this.storageService.removeItem('refreshtoken');
                            _this.storageService.removeItem('tokenObject');
                            _this.storageService.removeItem('homedata');
                            _this.session.token = null;
                            _this.session.userId = null;
                            _this.session.user = null;
                            _this.session.refreshToken = null;
                            _this.session.homedata = null;
                            _this.session.unionId = null;
                            _this.events.publish('user:reLogin', Date.now());
                            _this.sqliteProvider.closeUserDataBase();
                            _this.nativeService.showToast(_this.translate.instant('CANCELACCOUNT_SUCCESS'));
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SecurityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'page-security',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\my\security\security.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'MY_LIST_SECURITY\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div text-left color="medium" margin>\n\n        <ion-note>{{\'SECURITY_MY_ACCOUNT\' | translate}}</ion-note>\n\n    </div>\n\n    <ion-list>\n\n        <button *ngIf="!currentUser.hasPassword" ion-item (click)="goSetPassword()">\n\n            <h2>{{\'MY_INFO_SET_PASSWORD\' | translate}}</h2>\n\n            <ion-note item-end>\n\n            </ion-note>\n\n        </button>\n\n        <button *ngIf="currentUser.hasPassword" ion-item (click)="goChangePassword()">\n\n            <h2>{{\'MY_INFO_CHANGE_PASSWORD\' | translate}}</h2>\n\n            <ion-note item-end>\n\n            </ion-note>\n\n        </button>\n\n\n\n\n\n\n\n        <button ion-item (click)="goCerificiate()" *ngIf="enableElectronicSign">\n\n            <h2>{{\'SECURITY_MYCERTIFICATE\' | translate}}</h2>\n\n            <ion-note item-end>\n\n            </ion-note>\n\n        </button>\n\n\n\n        <button ion-item (click)="AccountCancellation()" no-lines>\n\n            <h2>{{\'CANCELACCOUNT\' | translate}}</h2>\n\n            <ion-note item-end>\n\n            </ion-note>\n\n        </button>\n\n         \n\n        <div class="divider"></div> \n\n        <!-- <button *ngIf="isBindWeChat" ion-item no-lines>\n\n            <h2>{{\'MY_INFO_CHANGE_WECHATID\' | translate}}</h2>\n\n            <ion-note item-end>\n\n                <img [src]="currentUser?.headImgUrlWX">\n\n                <span>\n\n                    {{currentUser?.nickNameWX }}\n\n                </span>\n\n            </ion-note>\n\n        </button>\n\n\n\n\n\n        <button *ngIf="!isBindWeChat" ion-item (click)="BindWeChat()" no-lines>\n\n            <h2>{{\'MY_INFO_CHANGE_WECHATID\' | translate}}</h2>\n\n            <ion-note item-end>\n\n                {{\'BINDING_GO\' | translate}}\n\n            </ion-note>\n\n        </button> \n\n\n\n        <div padding *ngIf="isBindWeChat">\n\n            <button block round ion-button color="medium" outline (click)="UnBindWechat()">\n\n                {{\'CANCEL_BIND_GO\' | translate}}\n\n            </button>\n\n        </div>\n\n        <div class="divider"></div> -->\n\n    </ion-list> \n\n</ion-content>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\my\security\security.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_provider__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_provider__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__providers_sqlite_provider__["a" /* SqliteProvider */]])
    ], SecurityPage);
    return SecurityPage;
}());

//# sourceMappingURL=security.js.map

/***/ })

});
//# sourceMappingURL=55.js.map