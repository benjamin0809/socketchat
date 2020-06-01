webpackJsonp([46],{

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacySettingPageModule", function() { return PrivacySettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacy_setting__ = __webpack_require__(1238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrivacySettingPageModule = (function () {
    function PrivacySettingPageModule() {
    }
    PrivacySettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__privacy_setting__["a" /* PrivacySettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__privacy_setting__["a" /* PrivacySettingPage */]),
            ],
        })
    ], PrivacySettingPageModule);
    return PrivacySettingPageModule;
}());

//# sourceMappingURL=privacy-setting.module.js.map

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

/***/ 1238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacySettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_base__ = __webpack_require__(1133);
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
 * Generated class for the PrivacySettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacySettingPage = (function (_super) {
    __extends(PrivacySettingPage, _super);
    function PrivacySettingPage(navCtrl, viewCtrl, navParams, events) {
        var _this = _super.call(this, navCtrl) || this;
        _this.navCtrl = navCtrl;
        _this.viewCtrl = viewCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.people = "公开";
        _this.events.subscribe("privacy:selected", function (data) {
            _this.selected = data;
        });
        return _this;
    }
    PrivacySettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacySettingPage');
    };
    PrivacySettingPage.prototype.doSelect = function () {
        console.log(this.people);
    };
    PrivacySettingPage.prototype.doSubmit = function () {
        this.events.publish("privacy:done", this.people);
        this.viewCtrl.dismiss();
    };
    PrivacySettingPage.prototype.openContactChooser = function () {
        this.navCtrl.push("ContactChooserPage");
    };
    PrivacySettingPage.prototype.scrollWidth = function () {
        return _super.prototype.scrollWidth.call(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scroll'),
        __metadata("design:type", Object)
    ], PrivacySettingPage.prototype, "scroll", void 0);
    PrivacySettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-privacy-setting',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\privacy-setting\privacy-setting.html"*/'<!--\n\n  Generated template for the PrivacySettingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>谁可以看</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="doSubmit()" >\n\n          完成\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  \n\n  <ion-list radio-group [(ngModel)]="people" (ngModelChange)="doSelect()">\n\n    <ion-item>\n\n      <ion-label>\n\n          <h2>公开</h2>\n\n          <p>所有人可见</p>\n\n      </ion-label>\n\n      <ion-radio value="公开" color="primary" checked="true"></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>\n\n          <h2>好友圈</h2>\n\n          <p>相互关注好友可见</p>\n\n      </ion-label>\n\n      <ion-radio value="好友圈" color="primary" ></ion-radio>\n\n    </ion-item>\n\n    <ion-item no-lines>\n\n      <ion-label>\n\n          <h2>部分可见</h2>\n\n          <p>选中的好友可见</p>\n\n      </ion-label>\n\n      <ion-radio value="部分可见" color="primary" (click)="openContactChooser()"></ion-radio>\n\n    </ion-item >\n\n   \n\n      <ion-item *ngFor="let contact of selected" no-lines>\n\n        <ion-avatar item-start><img [src]="contact.avator"></ion-avatar>\n\n        <h2>{{contact.name}}</h2>\n\n      </ion-item>\n\n    <!--\n\n    <ion-toolbar >\n\n        <ion-scroll #scroll scrollX="true" [ngStyle]="scrollWidth()">\n\n            <div style="display: inline-flex;">\n\n              <div class="profile-container" *ngFor="let item of selected">\n\n                  <img [src]="item.avator">\n\n              </div>\n\n            </div>\n\n          </ion-scroll>\n\n    </ion-toolbar>\n\n    -->\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\privacy-setting\privacy-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], PrivacySettingPage);
    return PrivacySettingPage;
}(__WEBPACK_IMPORTED_MODULE_2__page_base__["a" /* pageCommon */]));

//# sourceMappingURL=privacy-setting.js.map

/***/ })

});
//# sourceMappingURL=46.js.map