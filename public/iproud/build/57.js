webpackJsonp([57],{

/***/ 1095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback__ = __webpack_require__(1285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FeedbackPageModule = (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__feedback__["a" /* FeedbackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__feedback__["a" /* FeedbackPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__feedback__["a" /* FeedbackPage */]
            ]
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());

//# sourceMappingURL=feedback.module.js.map

/***/ }),

/***/ 1285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, formBuilder, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.form = formBuilder.group({
            profilePic: [''],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            about: ['']
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feedback',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\my\feedback\feedback.html"*/'<ion-header >\n\n    <ion-navbar>\n\n        <ion-title>问题反馈</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n\n                <span color="primary" showWhen="ios">\n\n                    提交\n\n                </span>\n\n                <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <form [formGroup]="form" (ngSubmit)="bindEmployee()">\n\n        <div text-left margin color="medium">\n\n            <ion-note>（必填）你想反馈的问题类型</ion-note>\n\n        </div>\n\n        <ion-list radio-group>\n\n            <ion-item>\n\n                <ion-label>功能异常: 功能故障或不可用</ion-label>\n\n                <ion-radio value="exception"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>产品建议：用的不爽，我有建议</ion-label>\n\n                <ion-radio value="advice" checked="true"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>其他问题</ion-label>\n\n                <ion-radio value="others"></ion-radio>\n\n            </ion-item>\n\n        </ion-list>\n\n        <div text-left margin color="medium">\n\n            <ion-note>请补充详细问题和意见</ion-note>\n\n        </div>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-textarea type="text" min="10" max="200" placeholder="请输入不少于10个字的描述" formControlName="name"></ion-textarea>\n\n            </ion-item>\n\n            <div text-right color="primary">\n\n                <ion-note>0/200</ion-note>\n\n            </div>\n\n        </ion-list>\n\n        <div text-left margin color="medium">\n\n            <ion-note>请提供相关问题的截图或照片</ion-note>\n\n        </div>\n\n\n\n        <button ion-button outline>\n\n            <ion-icon name="add" strong></ion-icon>\n\n        </button>\n\n\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\my\feedback\feedback.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ })

});
//# sourceMappingURL=57.js.map