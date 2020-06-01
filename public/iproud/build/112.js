webpackJsonp([112],{

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityOptionPageModule", function() { return CommunityOptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__community_option__ = __webpack_require__(1192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommunityOptionPageModule = (function () {
    function CommunityOptionPageModule() {
    }
    CommunityOptionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__community_option__["a" /* CommunityOptionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__community_option__["a" /* CommunityOptionPage */]),
            ],
        })
    ], CommunityOptionPageModule);
    return CommunityOptionPageModule;
}());

//# sourceMappingURL=community-option.module.js.map

/***/ }),

/***/ 1192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityOptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
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




var CommunityOptionPage = (function () {
    function CommunityOptionPage(navCtrl, navParams, storage, events, native) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
        this.native = native;
        this.tmpUrl = 'http://www.popochiu.com/upload/1558145430468.html';
        this.CommunityUrl = 'http://www.popochiu.com/community/index.html';
        this.my = {
            follows: this.tmpUrl,
            publish: this.tmpUrl,
            comments: this.tmpUrl,
            avtivity: this.tmpUrl
        };
        this.CommunityUrls = {
            clubDetail: this.tmpUrl,
            activity: this.tmpUrl,
            Posts: this.tmpUrl,
            more: this.tmpUrl,
            my: this.my
        };
        this.result = "";
        this.array = [];
        this.init();
    }
    CommunityOptionPage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var CommunityUrl, CommunityUrls;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getItem('CommunityUrl')];
                    case 1:
                        CommunityUrl = _a.sent();
                        return [4 /*yield*/, this.storage.getItem('CommunityUrls')];
                    case 2:
                        CommunityUrls = _a.sent();
                        if (CommunityUrls) {
                            this.CommunityUrls = CommunityUrls;
                        }
                        this.CommunityUrl = CommunityUrl || 'http://www.popochiu.com/community/index.html';
                        return [2 /*return*/];
                }
            });
        });
    };
    CommunityOptionPage.prototype.changeCommunityUrl = function () {
        this.result = JSON.stringify(this.CommunityUrls, null, 2);
        this.storage.setItem('CommunityUrls', this.CommunityUrls);
        this.storage.setItem('CommunityUrl', this.CommunityUrl);
        this.events.publish('changeCommunityUrl', this.CommunityUrl);
        this.native.showToast('Ok');
    };
    CommunityOptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-community-option',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\beta\community-option\community-option.html"*/'<!--\n\n  Generated template for the CommunityOptionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>community-option</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding> \n\n  <ion-item>\n\n    <ion-label>CommunityUrls.clubDetail</ion-label>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-input clearInput [(ngModel)]="CommunityUrls.clubDetail"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>CommunityUrls.activity</ion-label>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-input clearInput [(ngModel)]="CommunityUrls.activity"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>CommunityUrls.Posts</ion-label>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-input clearInput [(ngModel)]="CommunityUrls.Posts"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>CommunityUrls.more</ion-label>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-input clearInput [(ngModel)]="CommunityUrls.more"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>my.follow</ion-label>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-input clearInput [(ngModel)]="CommunityUrls.my.follows"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>my.publish</ion-label>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-input clearInput [(ngModel)]="CommunityUrls.my.publish"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>my.comments</ion-label>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-input clearInput [(ngModel)]="CommunityUrls.my.comments"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>my.avtivity</ion-label>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-input clearInput [(ngModel)]="CommunityUrls.my.avtivity"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button block (click)="changeCommunityUrl()">changeCommunityUrl </button>\n\n\n\n  <div padding>\n\n    {{result}}\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\beta\community-option\community-option.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__services_native_service__["a" /* NativeService */]])
    ], CommunityOptionPage);
    return CommunityOptionPage;
}());

//# sourceMappingURL=community-option.js.map

/***/ })

});
//# sourceMappingURL=112.js.map