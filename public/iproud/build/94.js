webpackJsonp([94],{

/***/ 1034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewPicturePageModule", function() { return PreviewPicturePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_picture__ = __webpack_require__(1210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreviewPicturePageModule = (function () {
    function PreviewPicturePageModule() {
    }
    PreviewPicturePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__preview_picture__["a" /* PreviewPicturePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__preview_picture__["a" /* PreviewPicturePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__preview_picture__["a" /* PreviewPicturePage */]
            ]
        })
    ], PreviewPicturePageModule);
    return PreviewPicturePageModule;
}());

//# sourceMappingURL=preview-picture.module.js.map

/***/ }),

/***/ 1210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewPicturePage; });
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


var PreviewPicturePage = (function () {
    function PreviewPicturePage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.initialSlide = 0;
        this.picturePaths = [];
        this.initialSlide = navParams.get('initialSlide');
        this.picturePaths = navParams.get('picturePaths');
    }
    PreviewPicturePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //http://www.swiper.com.cn/api/index.html
        new Swiper(this.panel.nativeElement, {
            initialSlide: this.initialSlide,
            zoom: true,
            loop: true,
            lazyLoading: true,
            lazyLoadingOnTransitionStart: true,
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            onClick: function () {
                _this.dismiss();
            }
        });
    };
    PreviewPicturePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('panel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PreviewPicturePage.prototype, "panel", void 0);
    PreviewPicturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-preview-picture',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\common\preview-picture\preview-picture.html"*/'<ion-content style="background-color: #000;color: #fff">\n\n  <div #panel class="swiper-container">\n\n    <div class="swiper-wrapper">\n\n      <div class="swiper-slide" *ngFor="let path of picturePaths">\n\n        <div class="swiper-zoom-container">\n\n          <img data-src="{{path}}" class="swiper-lazy">\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="swiper-pagination"></div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\common\preview-picture\preview-picture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], PreviewPicturePage);
    return PreviewPicturePage;
}());

//# sourceMappingURL=preview-picture.js.map

/***/ })

});
//# sourceMappingURL=94.js.map