webpackJsonp([61],{

/***/ 1086:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageImagePickerPageModule", function() { return MessageImagePickerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_image_picker__ = __webpack_require__(1261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessageImagePickerPageModule = (function () {
    function MessageImagePickerPageModule() {
    }
    MessageImagePickerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__message_image_picker__["a" /* MessageImagePickerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__message_image_picker__["a" /* MessageImagePickerPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], MessageImagePickerPageModule);
    return MessageImagePickerPageModule;
}());

//# sourceMappingURL=message-image-picker.module.js.map

/***/ }),

/***/ 1261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageImagePickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
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
 * Generated class for the MessageImagePickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessageImagePickerPage = (function () {
    function MessageImagePickerPage(navCtrl, navParams, nativeService, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.view = view;
    }
    MessageImagePickerPage.prototype.getPictureByCamera = function () {
        var _this = this;
        var param = this.navParams.data;
        if (this.nativeService.isMobile()) {
            this.nativeService.getFullPictureByCamera({}).subscribe(function (img) {
                _this.nativeService.compressImage(img, { MaxWidthOrHeight: 1024 }).subscribe(function (res) {
                    param.callback && param.callback(param.scope, res.dataURL, 'Image');
                    _this.view.dismiss();
                });
            }, function (err) {
                _this.nativeService.showToast(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* Utility */].generateQRCode("https://iproud.fihmb.com/Resources/Widgets/66295698871296.png").then(function (img) {
                param.callback && param.callback(param.scope, img, 'Image');
                _this.view.dismiss();
            });
        }
    };
    MessageImagePickerPage.prototype.getPictureByPhotoLibrary = function () {
        var _this = this;
        var param = this.navParams.data;
        if (this.nativeService.isMobile()) {
            this.nativeService.getFullPictureByPhotoLibrary({}).subscribe(function (img) {
                _this.nativeService.compressImage(img, { MaxWidthOrHeight: 1024 }).subscribe(function (res) {
                    param.callback && param.callback(param.scope, res.dataURL, 'Image');
                    _this.view.dismiss();
                });
            }, function (err) {
                _this.nativeService.showToast(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* Utility */].generateQRCode("https://iproud.fihmb.com/Resources/Widgets/66295698871296.png").then(function (img) {
                param.callback && param.callback(param.scope, img, 'Image');
                _this.view.dismiss();
            });
        }
    };
    MessageImagePickerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-message-image-picker',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\message\message-image-picker\message-image-picker.html"*/'<!--\n\n  Generated template for the MessageImagePickerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n \n\n\n\n\n\n<ion-content >\n\n\n\n    <div class="send-more-container" >\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col text-center>\n\n              <button (click)="getPictureByCamera()">\n\n                <img src="assets/img/camera.png">\n\n                <br />{{\'MESSAGE_IMAGE_CAMERA\'|translate}}\n\n              </button> \n\n            </ion-col>\n\n            <ion-col text-center>\n\n              <button (click)="getPictureByPhotoLibrary()">\n\n                <img src="assets/img/album.png">\n\n                <br /> {{\'MESSAGE_IMAGE_PHOTO\'|translate}}\n\n              </button>\n\n            </ion-col>\n\n            <!-- <ion-col text-center >\n\n                <button   (click)="shareContactCard()"> \n\n                    <img src="assets/img/person.png">\n\n                    <br/> Contact Card\n\n                </button>\n\n            </ion-col> -->\n\n          </ion-row>\n\n        </ion-grid>\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\message\message-image-picker\message-image-picker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]])
    ], MessageImagePickerPage);
    return MessageImagePickerPage;
}());

//# sourceMappingURL=message-image-picker.js.map

/***/ })

});
//# sourceMappingURL=61.js.map