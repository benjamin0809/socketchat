webpackJsonp([103],{

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPdfPageModule", function() { return TestPdfPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_pdf__ = __webpack_require__(1201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestPdfPageModule = (function () {
    function TestPdfPageModule() {
    }
    TestPdfPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__test_pdf__["a" /* TestPdfPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__test_pdf__["a" /* TestPdfPage */]),
            ],
        })
    ], TestPdfPageModule);
    return TestPdfPageModule;
}());

//# sourceMappingURL=test-pdf.module.js.map

/***/ }),

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_workflow_provider__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the TestPdfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPdfPage = (function () {
    function TestPdfPage(navCtrl, navParams, wfprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wfprovider = wfprovider;
        this.weburl = 'http://www.popochiu.com/file/base64/getpdf';
    }
    TestPdfPage.prototype.ionViewDidLoad = function () {
    };
    TestPdfPage.prototype.fromWorkflow = function (pid) {
        this.navCtrl.push('PdfjsViewerPage', {
            pid: pid,
            title: 'pid' + pid
        });
    };
    TestPdfPage.prototype.getWebPDF = function () {
        var _this = this;
        this.wfprovider.GetTmpProcessPDF(this.weburl).subscribe(function (res) {
            var data = res.result.base64Str;
            _this.navCtrl.push('PdfjsViewerPage', {
                base64str: data,
                title: 'web pdf'
            });
        });
    };
    TestPdfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-test-pdf',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\beta\test-pdf\test-pdf.html"*/'<!--\n\n  Generated template for the TestPdfPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>test-pdf</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item (click)="fromWorkflow(21415292)" > \n\n      <h2>Test Workflow PDF(pid 21415292)</h2> \n\n    </button>\n\n\n\n    <button ion-item (click)="fromWorkflow(22127756)" > \n\n      <h2>Test Workflow PDF(pid 22127756)</h2> \n\n    </button>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    \n\n    <ion-item>\n\n      <ion-input clearInput [(ngModel)]="weburl"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-item (click)="getWebPDF()" > \n\n      <h2>Test Web PDF</h2> \n\n    </button>\n\n  </ion-list>\n\n   \n\n   \n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\beta\test-pdf\test-pdf.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_workflow_provider__["a" /* WorkflowProvider */]])
    ], TestPdfPage);
    return TestPdfPage;
}());

//# sourceMappingURL=test-pdf.js.map

/***/ })

});
//# sourceMappingURL=103.js.map