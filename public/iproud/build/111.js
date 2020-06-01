webpackJsonp([111],{

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePageModule", function() { return FilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file__ = __webpack_require__(1194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilePageModule = (function () {
    function FilePageModule() {
    }
    FilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file__["a" /* FilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file__["a" /* FilePage */]),
            ],
        })
    ], FilePageModule);
    return FilePageModule;
}());

//# sourceMappingURL=file.module.js.map

/***/ }),

/***/ 1194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(56);
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
 * Generated class for the FilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilePage = (function () {
    function FilePage(navCtrl, navParams, nativeService, handle) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.handle = handle;
        this.imageUrl = '';
        this.tmpImageBase64 = '';
    }
    FilePage.prototype.ionViewDidLoad = function () {
    };
    FilePage.prototype.openPhoneGallery = function () {
        var _this = this;
        if (this.nativeService.isMobile()) {
            this.nativeService.getFullPictureByPhotoLibrary({
                destinationType: 0 //期望返回的图片格式,0图片字符串
            }).subscribe(function (img) {
                _this.imageUrl = img;
            }, function (err) {
                _this.nativeService.showToast(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    FilePage.prototype.processWebImage = function (event) {
        var _this = this;
        var filesList = event.target.files;
        for (var _i = 0, filesList_1 = filesList; _i < filesList_1.length; _i++) {
            var file = filesList_1[_i];
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                var imageData = readerEvent.target.result;
                _this.imageUrl = imageData;
                _this.tmpImageBase64 = _this.imageUrl.substr(0, 50);
            };
            reader.readAsDataURL(file);
        }
    };
    FilePage.prototype.saveBase64toFile = function () {
        var _this = this;
        this.nativeService.saveBase64toFile(this.imageUrl).subscribe(function (res) {
            _this.handle.generateInfo('saveBase64toFile', res);
            _this.result = JSON.stringify(res);
            _this.imageUrl = res.result.nativeURL;
        }, function (err) {
            _this.handle.generateError('saveBase64toFile', err);
            _this.result = JSON.stringify(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], FilePage.prototype, "fileInput", void 0);
    FilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-file',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\beta\file\file.html"*/'<!--\n\n  Generated template for the FilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>file</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item  (click)="openPhoneGallery()">\n\n      <input type="file" #fileInput multiple="multiple" style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n      <ion-label (click)="openPhoneGallery()" color="primary" stacked>imageUrl <ion-icon name="add-circle" ></ion-icon></ion-label>\n\n\n\n      <ion-input type="text" [(ngModel)]="imageUrl"></ion-input>\n\n      \n\n    </ion-item>\n\n\n\n    <ion-item  >\n\n     <ion-label>tmpImageBase64</ion-label>\n\n      {{tmpImageBase64}}\n\n    </ion-item> \n\n\n\n    {{\n\n      result\n\n    }}\n\n\n\n    <img [src]="imageUrl">\n\n\n\n   <button ion-button block (click)="saveBase64toFile()"> saveBase64toFile</button>\n\n  </ion-list>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\beta\file\file.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__["a" /* HandleProvider */]])
    ], FilePage);
    return FilePage;
}());

//# sourceMappingURL=file.js.map

/***/ })

});
//# sourceMappingURL=111.js.map