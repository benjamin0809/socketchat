webpackJsonp([44],{

/***/ 1104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DlRecruitmentListPageModule", function() { return DlRecruitmentListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dl_recruitment_list__ = __webpack_require__(1293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DlRecruitmentListPageModule = (function () {
    function DlRecruitmentListPageModule() {
    }
    DlRecruitmentListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dl_recruitment_list__["a" /* DlRecruitmentListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dl_recruitment_list__["a" /* DlRecruitmentListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], DlRecruitmentListPageModule);
    return DlRecruitmentListPageModule;
}());

//# sourceMappingURL=dl-recruitment-list.module.js.map

/***/ }),

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageCommon; });
/**
 * page 公共类
 */
var pageCommon = (function () {
    function pageCommon(navCtrl, events) {
        this.navCtrl = navCtrl;
        this.events = events;
    }
    /**
     * 水平scroll寬度
     * @param width scroll 寬度
     * @param height scroll 高度
     */
    pageCommon.prototype.scrollWidth = function (width, height) {
        return {
            "width": width || (window.screen.availWidth - 5) + 'px',
            "height": (height || 44) + 'px',
        };
    };
    /**
     * 發佈下拉完成事件
     * @param _event 下拉事件
     */
    pageCommon.prototype.completeRefresh = function (_event) {
        _event && _event.complete();
    };
    /**
     * 發佈上拉完成事件
     * @param _event 上拉事件
     */
    pageCommon.prototype.completedoInfinite = function (_event) {
        _event && _event.complete();
    };
    return pageCommon;
}());

//# sourceMappingURL=page.base.js.map

/***/ }),

/***/ 1293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DlRecruitmentListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_dl_recruiting_provider__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_base__ = __webpack_require__(1133);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * Generated class for the DlRecruitmentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DlRecruitmentListPage = (function (_super) {
    __extends(DlRecruitmentListPage, _super);
    function DlRecruitmentListPage(navCtrl, navParams, recruitingProvider) {
        var _this = _super.call(this, navCtrl) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.recruitingProvider = recruitingProvider;
        _this.title = '';
        _this.title = _this.navParams.data.title;
        _this.recruitingProvider.GetJobList().subscribe(function (data) {
            if (data.errcode == 0) {
                _this.postList = data.result;
            }
        });
        return _this;
    }
    DlRecruitmentListPage.prototype.openDetail = function (item) {
        this.navCtrl.push('DlRecruitmentPage', item);
    };
    DlRecruitmentListPage.prototype.openQuickRegistration = function () {
        this.navCtrl.push('QuickRegistrationPage');
    };
    DlRecruitmentListPage.prototype.doRefresh = function (_event) {
        var _this = this;
        this.recruitingProvider.GetJobList().subscribe(function (data) {
            _super.prototype.completeRefresh.call(_this, _event);
            if (data.errcode == 0) {
                _this.postList = data.result;
            }
        }, function (err) {
            _super.prototype.completeRefresh.call(_this, _event);
        });
    };
    DlRecruitmentListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-dl-recruitment-list',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\recruitment\dl-recruitment-list\dl-recruitment-list.html"*/'<!--\n\n  Generated template for the PostPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ title }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="{{\'HOME_PULL_REFRESH\' | translate }}"\n\n      refreshingText="{{\'HOME_REFRESH\' | translate }}">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list>\n\n    <ion-item (click)="openDetail(item)" *ngFor="let item of postList">\n\n      <div class="description">\n\n        <h2><span>{{item.siteName}}{{item.workpostName}}</span> </h2>\n\n        <p>{{item.workAddress}}<ion-icon class="post-icon" name="ios-arrow-forward-outline"></ion-icon>\n\n        </p>\n\n      </div>\n\n\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-5>\n\n            <div class="salary" text-center>\n\n              <h3>{{\'RECRUITMENT_DL_SALARY\' | translate}}</h3>\n\n              <span>¥{{item.totalPermanent}}</span>\n\n              <p>{{item.keywords}}</p>\n\n            </div>\n\n          </ion-col>\n\n\n\n          <ion-col col-3>\n\n            <div class="planQuantity" text-center>\n\n              <h3>{{\'RECRUITMENT_DL_QUANTITY\' | translate}}</h3>\n\n              <h2>{{item.planQuantity}}</h2>\n\n            </div>\n\n          </ion-col>\n\n\n\n          <ion-col col-4>\n\n            <div class="contact" text-center>\n\n              <h3>{{\'RECRUITMENT_DL_REGISTRATION_MOBILE\' | translate}}</h3>\n\n              <h3>{{item.telephone}}</h3>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer >\n\n  <ion-toolbar> \n\n  <button ion-button block round (click)="openQuickRegistration()">{{\'RECRUITMENT_QUICK_REGISTRATION\' | translate}}</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\recruitment\dl-recruitment-list\dl-recruitment-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_dl_recruiting_provider__["a" /* DLRecruitingProvider */]])
    ], DlRecruitmentListPage);
    return DlRecruitmentListPage;
}(__WEBPACK_IMPORTED_MODULE_3__page_base__["a" /* pageCommon */]));

//# sourceMappingURL=dl-recruitment-list.js.map

/***/ })

});
//# sourceMappingURL=44.js.map