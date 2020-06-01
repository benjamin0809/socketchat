webpackJsonp([98],{

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleHistoryPageModule", function() { return HandleHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handle_history__ = __webpack_require__(1205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HandleHistoryPageModule = (function () {
    function HandleHistoryPageModule() {
    }
    HandleHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__handle_history__["a" /* HandleHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__handle_history__["a" /* HandleHistoryPage */]),
            ],
        })
    ], HandleHistoryPageModule);
    return HandleHistoryPageModule;
}());

//# sourceMappingURL=handle-history.module.js.map

/***/ }),

/***/ 1205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandleHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the HandleHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HandleHistoryPage = (function () {
    function HandleHistoryPage(navCtrl, navParams, storageService, device, handleProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storageService = storageService;
        this.device = device;
        this.handleProvider = handleProvider;
        this.types = [{
                name: 'all', value: 999
            }, {
                name: 'error', value: -1
            }, {
                name: 'sqlite', value: 1
            }, {
                name: 'normal', value: 0
            }];
        this.type = this.types[0].value;
        this.history = this.handleProvider.get(this.type);
    }
    HandleHistoryPage.prototype.doRefresh = function (events) {
        this.history = this.handleProvider.get(this.type);
        setTimeout(function () {
            events && events.complete();
        }, 500);
    };
    HandleHistoryPage.prototype.clear = function () {
        this.handleProvider.clear();
        this.history = this.handleProvider.get(this.type);
    };
    HandleHistoryPage.prototype.openHandleDetailsPage = function (item) {
        this.navCtrl.push('HandleDetailsPage', item);
    };
    HandleHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-handle-history',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\common\handle-history\handle-history.html"*/'<!--\n\n  Generated template for the HandleHistoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar> \n\n       <ion-select [(ngModel)]="type" (ngModelChange)="doRefresh()">\n\n        <ion-option [value]="item.value" *ngFor="let item of types">{{item.name}}</ion-option> \n\n      </ion-select> \n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="clear()">\n\n        <ion-icon name="ios-trash-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown"  >\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of history,let indx = index" (click)="openHandleDetailsPage(item)">\n\n      <p>No.{{indx + 1}}<span style="float:right;">{{item.handleTime}}</span></p>\n\n      <p style="white-space:normal;">Event ->{{item.handleName}}</p>\n\n      \n\n      <p style="white-space:normal;">Result ->{{item.result}}</p>\n\n    </ion-item>\n\n     \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\common\handle-history\handle-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__["a" /* HandleProvider */]])
    ], HandleHistoryPage);
    return HandleHistoryPage;
}());

//# sourceMappingURL=handle-history.js.map

/***/ })

});
//# sourceMappingURL=98.js.map