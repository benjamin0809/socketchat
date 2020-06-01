webpackJsonp([96],{

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgViewerPageModule", function() { return ImgViewerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_viewer__ = __webpack_require__(1207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImgViewerPageModule = (function () {
    function ImgViewerPageModule() {
    }
    ImgViewerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__img_viewer__["a" /* ImgViewerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__img_viewer__["a" /* ImgViewerPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__img_viewer__["a" /* ImgViewerPage */]]
        })
    ], ImgViewerPageModule);
    return ImgViewerPageModule;
}());

//# sourceMappingURL=img-viewer.module.js.map

/***/ }),

/***/ 1207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgViewerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_preload_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_widget_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_cache_provider__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_view_controller__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ImgViewerPage = (function () {
    function ImgViewerPage(navCtrl, navParams, viewCtrl, actionSheetCtrl, translateService, cacheProvider, widgetProvider, preload, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.translateService = translateService;
        this.cacheProvider = cacheProvider;
        this.widgetProvider = widgetProvider;
        this.preload = preload;
        this.events = events;
        this.tapImageCount = 0;
        this.vm = {
            selectedIndex: 0,
            images: [],
        };
        this.vm.images = this.navParams.data.imageArray;
        this.vm.selectedIndex = this.navParams.data.index;
    }
    ImgViewerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.swiper = new Swiper(this.panel.nativeElement, {
            initialSlide: this.vm.selectedIndex,
            direction: 'horizontal',
            zoom: true,
            loop: false,
            lazyLoading: true,
            lazyLoadingOnTransitionStart: true,
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChange: function () {
                    if (_this.swiper) {
                        var activeIndex = _this.swiper.activeIndex;
                        if (activeIndex < _this.vm.images.length && activeIndex >= 0) {
                            _this.vm.selectedIndex = activeIndex;
                        }
                    }
                }
            }
        });
    };
    ImgViewerPage.prototype.close = function () {
        var _this = this;
        // this.events.publish('backbutton' );
        this.tapImageCount++;
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            if (_this.tapImageCount < 2) {
                _this.timer && clearTimeout(_this.timer);
                _this.viewCtrl.dismiss({ ImgViewerDismiss: true });
            }
            _this.tapImageCount = 0;
        }, 50);
    };
    ImgViewerPage.prototype.onHold = function (image) {
        var that = this;
        var sheet = null;
        var buttons = [];
        buttons.push({
            text: that.translateService.instant('SHARE_MODAL_TITLE'),
            handler: function () {
                that.openSharePage(image.pictureUrl);
            }
        });
        buttons.push({
            text: that.translateService.instant('MESSAGE_DELETE_CANCEL'),
            role: 'cancel'
        });
        //长按时同时识别图片中是否存在二维码，若存在，则增加 识别二维码选项
        this.cacheProvider.decodeQRCode(image.pictureUrl).subscribe(function (decodeResult) {
            buttons.splice(buttons.length - 1, 1, {
                text: that.translateService.instant('APP_COMMON_EXTRACT_QRCODE'),
                handler: function () {
                    that.openQRCodeUrl(decodeResult);
                }
            });
            buttons.push({
                text: that.translateService.instant('MESSAGE_DELETE_CANCEL'),
                role: 'cancel'
            });
            var newsheet = that.actionSheetCtrl.create({ buttons: buttons });
            newsheet.present();
            sheet && sheet.dismiss();
        }, function (err) {
            sheet = that.actionSheetCtrl.create({ buttons: buttons });
            sheet.present();
        });
    };
    /**
    * 打开分享页面
    */
    ImgViewerPage.prototype.openSharePage = function (imageUrl) {
        var shareMessage = {
            title: '',
            description: '',
            thumb: imageUrl || __WEBPACK_IMPORTED_MODULE_1__services_constants__["j" /* DEFAULT_LOGO */],
            resource: imageUrl //图片url或网页url
        };
        this.preload.openShareModal({
            shareMessage: shareMessage,
            isShareImage: true,
            navigationDockTargetMapIds: [1, 2]
        });
    };
    ImgViewerPage.prototype.openQRCodeUrl = function (imgMsg) {
        var page = {
            url: imgMsg,
            title: '',
            description: '',
            imageUrl: '',
            appId: '',
            options: {}
        };
        this.widgetProvider.openWebpage(page, this.navCtrl);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])('panel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_core__["ElementRef"])
    ], ImgViewerPage.prototype, "panel", void 0);
    ImgViewerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'page-img-viewer',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\common\img-viewer\img-viewer.html"*/'<!-- <ion-header>\n\n    <ion-navbar>\n\n         <ion-title>{{vm.selectedIndex + 1}}/{{vm.images.length}}</ion-title>\n\n     </ion-navbar>\n\n </ion-header>\n\n  -->\n\n <ion-content>\n\n   <div #panel class="swiper-container">\n\n     <div class="swiper-wrapper">\n\n       <div class="swiper-slide" *ngFor="let image of vm.images">\n\n         <div class="swiper-zoom-container"  (tap)="close()">\n\n           <img data-src="{{image?.pictureUrl}}" class="swiper-lazy" (press)="onHold(image)"  >\n\n         </div>\n\n       </div>\n\n     </div>\n\n     <div class="swiper-pagination"></div>\n\n         <!-- 如果需要导航按钮 -->\n\n    <!-- <div class="swiper-button-prev"></div>\n\n    <div class="swiper-button-next"></div> -->\n\n    \n\n    <!-- 如果需要滚动条 <div class="swiper-scrollbar"></div> -->\n\n    \n\n   </div>\n\n </ion-content>\n\n\n\n\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\common\img-viewer\img-viewer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_cache_provider__["a" /* CacheProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_widget_provider__["a" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_preload_provider__["a" /* PreloadProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Events */]])
    ], ImgViewerPage);
    return ImgViewerPage;
}());

//# sourceMappingURL=img-viewer.js.map

/***/ })

});
//# sourceMappingURL=96.js.map