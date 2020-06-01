webpackJsonp([50],{

/***/ 1107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdlRecruitmentPageModule", function() { return IdlRecruitmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idl_recruitment__ = __webpack_require__(1296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IdlRecruitmentPageModule = (function () {
    function IdlRecruitmentPageModule() {
    }
    IdlRecruitmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__idl_recruitment__["a" /* IdlRecruitmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__idl_recruitment__["a" /* IdlRecruitmentPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], IdlRecruitmentPageModule);
    return IdlRecruitmentPageModule;
}());

//# sourceMappingURL=idl-recruitment.module.js.map

/***/ }),

/***/ 1296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdlRecruitmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_widget_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_idl_recruiting_provider__ = __webpack_require__(598);
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
 * Generated class for the IdlRecruitmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IdlRecruitmentPage = (function () {
    function IdlRecruitmentPage(navCtrl, navParams, iDLRecruitingProvider, translateService, widgetProvider, session) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iDLRecruitingProvider = iDLRecruitingProvider;
        this.translateService = translateService;
        this.widgetProvider = widgetProvider;
        this.session = session;
        this.postItem = {};
        var item = this.navParams.data;
        this.iDLRecruitingProvider.PostDetail(item.id).subscribe(function (res) {
            if (res.errcode == 0) {
                _this.postItem = res.result;
                if (!_this.postItem.applyUrl) {
                    _this.postItem.applyUrl = "http://fishnet.fih-foxconn.com/Job/JobApply?ChannelCode=C01&jobId=1&LanguageCode=zh-TW&AccountId=" + _this.session.userId;
                }
                else {
                    _this.postItem.applyUrl += _this.session.userId;
                }
            }
        });
    }
    IdlRecruitmentPage.prototype.ionViewDidLoad = function () {
    };
    IdlRecruitmentPage.prototype.applyPost = function () {
        var page = {
            url: this.postItem.applyUrl,
            title: this.translateService.instant('HOME_ENGINEER_RECRUITMENT'),
            description: "",
            imageUrl: "",
            appId: "",
            options: {}
        };
        this.widgetProvider.openWebpage(page, this.navCtrl);
    };
    IdlRecruitmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-idl-recruitment',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\recruitment\idl-recruitment\idl-recruitment.html"*/'<!--\n\n  Generated template for the PostDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'POST_DETAILS\'|translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <h2>{{postItem.postName}}</h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div class="post-info">\n\n        <p><span>{{\'RECRUITMENT_IDL_WORKPLACE\' | translate }}:</span>{{postItem.workplace}}</p>\n\n        <p><span>{{\'RECRUITMENT_IDL_DEPARTMENT\' | translate }}:</span>{{postItem.department}}</p>\n\n        <p><span>{{\'RECRUITMENT_IDL_QUANTITY\' | translate }}:</span>{{postItem.requestQty}}</p>\n\n        <p><span>{{\'RECRUITMENT_IDL_SALARY_RANGE\' | translate }}:</span>{{postItem.salaryFrom}} - {{postItem.salaryTo}}</p>\n\n        <p><span>{{\'RECRUITMENT_IDL_PUBLISHTIME\' | translate }}:</span>{{postItem.dateFrom}}</p>\n\n        <p><span>{{\'RECRUITMENT_IDL_ENDTIME\' | translate }}:</span>{{postItem.dateTo}}</p>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <div class="divider"></div>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <h2>{{\'RECRUITMENT_IDL_WORK_DUTY\' | translate }}</h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div class="post-info">\n\n        <p>{{postItem.dutyRequirement}} </p>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <div class="divider"></div>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <h2>{{\'RECRUITMENT_IDL_QUALIFICATIONS\' | translate }}</h2>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <div class="post-info">\n\n        <p>{{postItem.skillRequirement}} </p>\n\n      </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer >\n\n    <ion-toolbar> \n\n  <button ion-button block round (click)="applyPost()">{{\'RECRUITMENT_APPLY\' | translate }}</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\recruitment\idl-recruitment\idl-recruitment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_idl_recruiting_provider__["a" /* IDLRecruitingProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1__providers_widget_provider__["a" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_0__services_session__["a" /* Session */]])
    ], IdlRecruitmentPage);
    return IdlRecruitmentPage;
}());

//# sourceMappingURL=idl-recruitment.js.map

/***/ })

});
//# sourceMappingURL=50.js.map