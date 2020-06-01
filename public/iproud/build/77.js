webpackJsonp([77],{

/***/ 1056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDetailsPageModule", function() { return ActivityDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_details__ = __webpack_require__(1231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivityDetailsPageModule = (function () {
    function ActivityDetailsPageModule() {
    }
    ActivityDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activity_details__["a" /* ActivityDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity_details__["a" /* ActivityDetailsPage */]),
            ],
        })
    ], ActivityDetailsPageModule);
    return ActivityDetailsPageModule;
}());

//# sourceMappingURL=activity-details.module.js.map

/***/ }),

/***/ 1231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the ActivityDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivityDetailsPage = (function () {
    function ActivityDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ItemDetail = this.navParams.data;
    }
    ActivityDetailsPage.prototype.ionViewDidLoad = function () {
    };
    ActivityDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-activity-details',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\my\activity-details\activity-details.html"*/'<!--\n\n  Generated template for the ActivityDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>activity-details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- <div class="bg" [style.background-image] = "ItemDetail?.clubImage">\n\n\n\n  </div> -->\n\n  <div text-center>\n\n      <img [src]="ItemDetail?.clubImage">\n\n      <span class="event-title">{{ItemDetail?.clubName}}</span>\n\n  </div>\n\n\n\n  <div>\n\n    <img [src]="ItemDetail?.eventImage">\n\n\n\n    <span class="event-type">{{ItemDetail?.eventType}}: </span>\n\n      <p class="text light">{{ItemDetail?.title}}</p>\n\n      <p class="text">活动时间: <span>{{ItemDetail?.eventTime}}</span></p>\n\n      <p class="text">地点: <span>{{ItemDetail?.eventPlace}}</span></p>\n\n  </div>\n\n    \n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar >\n\n      <div text-center class="event-status" [ngClass]="{\n\n        \'event-status-apply-failed\': ItemDetail?.eventStatus == -1, \n\n        \'event-status-apply-success\': ItemDetail?.eventStatus == 1,\n\n        \'event-status-apply-ing\': ItemDetail?.eventStatus == 0 }">\n\n          <span class="event-status-name">{{ItemDetail?.eventStatusName}}</span>\n\n       </div>\n\n    \n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\my\activity-details\activity-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], ActivityDetailsPage);
    return ActivityDetailsPage;
}());

//# sourceMappingURL=activity-details.js.map

/***/ })

});
//# sourceMappingURL=77.js.map