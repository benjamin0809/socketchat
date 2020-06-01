webpackJsonp([97],{

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalPageModule", function() { return ImageModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_modal__ = __webpack_require__(1206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageModalPageModule = (function () {
    function ImageModalPageModule() {
    }
    ImageModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__image_modal__["a" /* ImageModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__image_modal__["a" /* ImageModalPage */]),
            ],
        })
    ], ImageModalPageModule);
    return ImageModalPageModule;
}());

//# sourceMappingURL=image-modal.module.js.map

/***/ }),

/***/ 1206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModalPage; });
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


var ImageModalPage = (function () {
    function ImageModalPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    ImageModalPage.prototype.ionViewDidLoad = function () {
        this.Item = this.navParams.data.details;
    };
    ImageModalPage.prototype.closeWindow = function () {
        var _this = this;
        setTimeout(function () {
            _this.view.dismiss(null, null, {
                duration: 0
            });
        }, 100);
    };
    ImageModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-image-modal',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\common\image-modal\image-modal.html"*/' \n\n\n\n\n\n<!-- <ion-content padding> -->\n\n\n\n  <div class="container">\n\n      <div class="close" (click)="closeWindow()" *ngIf="Item?.isShowCloseButton">\n\n          <div class="circle">\n\n            <button large ion-button clear color="medium">\n\n              <ion-icon name="ios-close-circle-outline"></ion-icon>\n\n            </button>\n\n    \n\n          </div>\n\n        </div>\n\n    <div class="image-bg">\n\n      <img [src]="Item?.imageUrl">\n\n    </div>\n\n    <div class="description">\n\n      <span class="handleName" [innerHtml]="Item?.title"></span>\n\n      <span class="treasure" [innerHtml]="Item?.subtitle"> \n\n      </span>\n\n      \n\n      <button (click)="closeWindow()" class="receive-award" small ion-button round >{{Item?.buttonText}} </button>\n\n    </div>\n\n\n\n\n\n  </div>\n\n<!-- </ion-content> -->\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\common\image-modal\image-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]])
    ], ImageModalPage);
    return ImageModalPage;
}());

//# sourceMappingURL=image-modal.js.map

/***/ })

});
//# sourceMappingURL=97.js.map