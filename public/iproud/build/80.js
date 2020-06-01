webpackJsonp([80],{

/***/ 1053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationChooserPageModule", function() { return LocationChooserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_chooser__ = __webpack_require__(1228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocationChooserPageModule = (function () {
    function LocationChooserPageModule() {
    }
    LocationChooserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__location_chooser__["a" /* LocationChooserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__location_chooser__["a" /* LocationChooserPage */]),
            ],
        })
    ], LocationChooserPageModule);
    return LocationChooserPageModule;
}());

//# sourceMappingURL=location-chooser.module.js.map

/***/ }),

/***/ 1228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationChooserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Generated class for the LocationChooserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationChooserPage = (function () {
    function LocationChooserPage(navCtrl, viewCtrl, events, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.navParams = navParams;
        this.sites = [{ name: "富士康科技集团", location: "广东省深圳市龙华新区" }];
    }
    LocationChooserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationChooserPage');
    };
    LocationChooserPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LocationChooserPage.prototype.chooseLocation = function (site) {
        this.viewCtrl.dismiss();
        this.events.publish("location:choosed", site);
    };
    LocationChooserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-location-chooser',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\location-chooser\location-chooser.html"*/'<!--\n\n  Generated template for the LocationChooserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>所在位置</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <ion-list>\n\n    <ion-item (click)="dismiss()">\n\n      <ion-label>不显示位置</ion-label>\n\n    </ion-item>\n\n    <ion-item *ngFor="let site of sites" (click)="chooseLocation(site)">\n\n      <h2>{{site.name}}</h2>\n\n      <p>{{site.location}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\location-chooser\location-chooser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* NavParams */]])
    ], LocationChooserPage);
    return LocationChooserPage;
}());

//# sourceMappingURL=location-chooser.js.map

/***/ })

});
//# sourceMappingURL=80.js.map