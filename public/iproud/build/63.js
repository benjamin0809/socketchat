webpackJsonp([63],{

/***/ 1083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageModule", function() { return ScanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scan__ = __webpack_require__(1258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ScanPageModule = (function () {
    function ScanPageModule() {
    }
    ScanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__scan__["a" /* ScanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__scan__["a" /* ScanPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__scan__["a" /* ScanPage */]
            ]
        })
    ], ScanPageModule);
    return ScanPageModule;
}());

//# sourceMappingURL=scan.module.js.map

/***/ }),

/***/ 1258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_qr_scanner__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_utility__ = __webpack_require__(32);
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
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanPage = (function () {
    function ScanPage(navCtrl, qrScanner, alertCtrl, widgetProvider, translateService, nativeService, view, events) {
        this.navCtrl = navCtrl;
        this.qrScanner = qrScanner;
        this.alertCtrl = alertCtrl;
        this.widgetProvider = widgetProvider;
        this.translateService = translateService;
        this.nativeService = nativeService;
        this.view = view;
        this.events = events;
        //默认为false
        this.light = false;
        this.frontCamera = false;
    }
    ScanPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.publish('changeTabsDisplay', true);
        // this.ionTab = <HTMLElement>document.getElementsByTagName("ion-tab")[0];
        // this.tabbar = <HTMLElement>document.getElementsByClassName("tabbar")[0];
        // //隱藏tab頁面，否則會顯示上一層頁面
        // this.ionTab.style.display = "none";
        // this.tabbar.style.opacity = 0;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // this.nativeService.setStatusColor( null,true)
                // camera permission was granted
                // start scanning  
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (result) {
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                    _this.events.publish('changeTabsDisplay', false);
                    _this.view.dismiss();
                    var page = {
                        url: result,
                        title: "",
                        description: "",
                        imageUrl: "",
                        appId: "",
                        options: {
                            canShare: true
                        }
                    };
                    if (result) {
                        result = result.trim();
                        // 如果是URL 或者 iProud:// 开发的链接，不作处理
                        if (!__WEBPACK_IMPORTED_MODULE_7__services_utility__["a" /* Utility */].isUrl(result) && result.indexOf(__WEBPACK_IMPORTED_MODULE_1__services_constants__["d" /* APPNAME_PAGE_PREFIX */].toLowerCase() + "AppPageId") == -1) {
                            //非URL 并且非 iProud:// 开发的链接，链接到后台处理
                            page.url = __WEBPACK_IMPORTED_MODULE_1__services_constants__["C" /* SCANRESULT_WEBURL */] + "?result=" + encodeURIComponent(result);
                        }
                    }
                    _this.widgetProvider.openWebpage(page, _this.navCtrl);
                });
                // show camera preview
                _this.qrScanner.show();
                // wait for user to scan something, then the observable callback will be called
            }
            else if (status.denied) {
                _this.showOpenSettingAlert();
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                //alert("臨時無權限");
                _this.showOpenSettingAlert();
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) {
            _this.showOpenSettingAlert();
            console.error('Error is', e);
        });
    };
    ScanPage.prototype.ionViewDidEnter = function () {
        //页面可见时才执行 
        this.showCamera();
    };
    //是否需要打开相机设置
    ScanPage.prototype.showOpenSettingAlert = function () {
        var _this = this;
        if (this.nativeService.isMobile()) {
            var confirm_1 = this.alertCtrl.create({
                title: this.translateService.instant('SCANNER_SETTING_REQUEST'),
                message: this.translateService.instant('SCANNER_SETTING_OPENSETTING'),
                buttons: [
                    {
                        text: this.translateService.instant('APP_COMMON_CANCEL'),
                        handler: function () {
                        }
                    },
                    {
                        text: this.translateService.instant('APP_COMMON_CONFIRM'),
                        handler: function () {
                            //打开相机设置
                            _this.qrScanner.openSettings();
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    /**
   * 闪光灯控制，默认关闭
     */
    ScanPage.prototype.toggleLight = function () {
        if (this.light) {
            this.qrScanner.disableLight();
        }
        else {
            this.qrScanner.enableLight();
        }
        this.light = !this.light;
    };
    /**
    * 前后摄像头互换
   */
    ScanPage.prototype.toggleCamera = function () {
        if (this.frontCamera) {
            this.qrScanner.useBackCamera();
        }
        else {
            this.qrScanner.useFrontCamera();
        }
        this.frontCamera = !this.frontCamera;
    };
    ScanPage.prototype.showCamera = function () {
        window.document.querySelector('ion-app').classList.add('cameraView');
    };
    ScanPage.prototype.hideCamera = function () {
        window.document.querySelector('ion-app').classList.remove('cameraView');
        // alert("disableLight");
        this.qrScanner.disableLight();
        // alert("hide")
        this.qrScanner.hide().then(function (result) {
            // alert("hide result:" + JSON.stringify(result));
        }); //需要关闭扫描，否则相机一直开着
        this.qrScanner.destroy().then(function (result) {
            // alert("destory result:" + JSON.stringify(result));
        });
    };
    //离开页面时，恢复显示tab页，且關閉相機
    ScanPage.prototype.ionViewWillLeave = function () {
        // if (this.ionTab) this.ionTab.style.display = "block";
        // if (this.tabbar) this.tabbar.style.opacity = 1;
        this.hideCamera();
        this.events.publish('changeTabsDisplay', false);
        // this.nativeService.setStatusColor()
    };
    ScanPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-scan',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\home\scan\scan.html"*/'<ion-header  no-border>\n\n        <ion-navbar  hideBackButton="true"  transparent >\n\n                <ion-buttons start>\n\n                  <button ion-button icon-only (click)="goBack()">\n\n                    <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n                  </button> \n\n                </ion-buttons> \n\n        <ion-title>{{ \'QR_CODE\' | translate  }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content scroll="false" class="qrscanner">\n\n    <div class="qrscanner-area">\n\n    </div>\n\n    <div class="through-line"></div>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-3></ion-col>\n\n                <ion-col col-3 text-left>\n\n                    <button (click)="toggleLight()" ion-fab class="icon-camera" margin-right  >\n\n                        <ion-icon name="flash"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col col-3 text-right>\n\n                    <button (click)="toggleCamera()" ion-fab class="icon-camera"  margin-left>\n\n                        <ion-icon name="reverse-camera"></ion-icon>\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col col-3></ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\home\scan\scan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_providers__["n" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Events */]])
    ], ScanPage);
    return ScanPage;
}());

//# sourceMappingURL=scan.js.map

/***/ })

});
//# sourceMappingURL=63.js.map