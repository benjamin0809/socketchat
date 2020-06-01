webpackJsonp([49],{

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickRegistrationPageModule", function() { return QuickRegistrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quick_registration__ = __webpack_require__(1297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QuickRegistrationPageModule = (function () {
    function QuickRegistrationPageModule() {
    }
    QuickRegistrationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quick_registration__["a" /* QuickRegistrationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quick_registration__["a" /* QuickRegistrationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], QuickRegistrationPageModule);
    return QuickRegistrationPageModule;
}());

//# sourceMappingURL=quick-registration.module.js.map

/***/ }),

/***/ 1297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dl_recruiting_provider__ = __webpack_require__(597);
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
 * Generated class for the QuickRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuickRegistrationPage = (function () {
    function QuickRegistrationPage(navCtrl, navParams, recruitingProvider, nativeService, sanitizer, actionSheetCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recruitingProvider = recruitingProvider;
        this.nativeService = nativeService;
        this.sanitizer = sanitizer;
        this.actionSheetCtrl = actionSheetCtrl;
        this.translateService = translateService;
        var postItem = this.navParams.data.item;
        this.applyitem = {
            Mobile: '',
            Name: '',
            CardID: '',
            InterviewDate: '',
            Site: '',
            Workpost: ''
        };
        this.recruitingProvider.GetSiteList().subscribe(function (data) {
            if (data.errcode == 0) {
                _this.sites = data.result;
                if (!postItem) {
                    _this.applyitem.Site = _this.sites ? _this.sites[0].name : '';
                    _this.getRecuitmentInfo(data.result[0].code);
                }
            }
        });
        if (postItem) {
            this.applyitem.Site = postItem.siteName;
            this.getRecuitmentInfo(postItem.siteCode);
        }
    }
    QuickRegistrationPage.prototype.ionViewDidLoad = function () {
    };
    /** 提交报名申请 */
    QuickRegistrationPage.prototype.applyForm = function () {
        var _this = this;
        this.recruitingProvider.SaveApplyJob(this.applyitem).subscribe(function (data) {
            if (data.errcode == 0) {
                var res = data.result[0];
                _this.nativeService.alert(res.description);
                if (res.status == 'success') {
                    _this.navCtrl.pop();
                }
            }
        });
    };
    //**获取招聘信息 */
    QuickRegistrationPage.prototype.getRecuitmentInfo = function (siteCode) {
        var _this = this;
        this.recruitingProvider.GetPostAndInterviewDate(siteCode).subscribe(function (data) {
            if (data.errcode == 0) {
                _this.interviewdate = data.result.interviewDateList;
                _this.workposts = data.result.workPostList;
                _this.applyitem.InterviewDate = _this.interviewdate ? _this.interviewdate[0].name : '';
                _this.applyitem.Workpost = _this.workposts ? _this.workposts[0].name : '';
            }
        });
    };
    QuickRegistrationPage.prototype.changeSite = function () {
        var _this = this;
        var index = this.sites.findIndex(function (p) { return p.name == _this.applyitem.Site; });
        this.getRecuitmentInfo(this.sites[index].code);
    };
    QuickRegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-quick-registration',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\recruitment\quick-registration\quick-registration.html"*/'<ion-header >\n\n  <ion-navbar>\n\n    <ion-title class="title">{{\'RECRUITMENT_QUICK_REGISTRATION\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen scroll="false">\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label  floating>{{\'RECRUITMENT_PERSON_NAME\' | translate}} </ion-label>\n\n      <ion-input [(ngModel)]="applyitem.Name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label  floating>{{\'RECRUITMENT_CARD_ID\' | translate}} </ion-label>\n\n      <ion-input [(ngModel)]="applyitem.CardID"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label  floating>{{\'RECRUITMENT_MOBILE_PHONE\' | translate}}</ion-label>\n\n      <ion-input [(ngModel)]="applyitem.Mobile"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label >{{\'RECRUITMENT_INTERVIEW_SITE\' | translate}} </ion-label>\n\n      <ion-select [(ngModel)]="applyitem.Site" (ngModelChange)="changeSite()" okText="{{\'APP_COMMON_CONFIRM\' | translate}}" cancelText="{{\'APP_COMMON_CANCEL\' | translate}}">\n\n        <ion-option *ngFor="let item of sites" value="{{item.name}}">{{item.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label >{{\'RECRUITMENT_INTERVIEW_DATE\' | translate}}</ion-label>\n\n      <ion-select [(ngModel)]="applyitem.InterviewDate" okText="{{\'APP_COMMON_CONFIRM\' | translate}}" cancelText="{{\'APP_COMMON_CANCEL\' | translate}}">\n\n        <ion-option *ngFor="let item of interviewdate" value="{{item.name}}">{{item.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label >{{\'RECRUITMENT_INTERVIEW_WORKPOST\' | translate}}</ion-label>\n\n      <ion-select [(ngModel)]="applyitem.Workpost" okText="{{\'APP_COMMON_CONFIRM\' | translate}}" cancelText="{{\'APP_COMMON_CANCEL\' | translate}}">\n\n        <ion-option *ngFor="let item of workposts" value="{{item.name}}">{{item.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n<ion-footer >\n\n    <ion-toolbar> \n\n  <button ion-button block round primary (click)="applyForm()">{{\'APP_COMMON_SUBMIT\'|translate}}</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\recruitment\quick-registration\quick-registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_dl_recruiting_provider__["a" /* DLRecruitingProvider */],
            __WEBPACK_IMPORTED_MODULE_2__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]])
    ], QuickRegistrationPage);
    return QuickRegistrationPage;
}());

//# sourceMappingURL=quick-registration.js.map

/***/ })

});
//# sourceMappingURL=49.js.map