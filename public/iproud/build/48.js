webpackJsonp([48],{

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowPageModule", function() { return WorkflowPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow__ = __webpack_require__(1307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WorkflowPageModule = (function () {
    function WorkflowPageModule() {
    }
    WorkflowPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__workflow__["a" /* WorkflowPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__workflow__["a" /* WorkflowPage */]),
            ],
        })
    ], WorkflowPageModule);
    return WorkflowPageModule;
}());

//# sourceMappingURL=workflow.module.js.map

/***/ }),

/***/ 1307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
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
 * Generated class for the WorkflowPage page.
 *
  WorkflowPage 不能修改，若要修改，请在app.component.ts也修改相应关键词
 */
var WorkflowPage = (function () {
    function WorkflowPage(navCtrl, navParams, viewCtrl, translateService, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.translateService = translateService;
        this.events = events;
        this.workflow_tab1Root = __WEBPACK_IMPORTED_MODULE_0__pages__["m" /* workflow_tab1Root */];
        this.workflow_tab2Root = __WEBPACK_IMPORTED_MODULE_0__pages__["n" /* workflow_tab2Root */];
        this.workflow_tab3Root = __WEBPACK_IMPORTED_MODULE_0__pages__["o" /* workflow_tab3Root */];
        this.workflow_tab4Root = __WEBPACK_IMPORTED_MODULE_0__pages__["p" /* workflow_tab4Root */];
        this.tab1Title = " ";
        this.tab2Title = " ";
        this.tab3Title = " ";
        this.tab4Title = " ";
        this.events.subscribe('back-to-home', function () {
            _this.viewCtrl.dismiss();
        });
        this.setTabText();
    }
    WorkflowPage.prototype.setTabText = function () {
        var _this = this;
        this.translateService.get(['WORKFLOW_TAB1_TITLE', 'WORKFLOW_TAB2_TITLE', 'WORKFLOW_TAB3_TITLE', 'WORKFLOW_TAB4_TITLE']).subscribe(function (values) {
            _this.tab1Title = values['WORKFLOW_TAB1_TITLE'];
            _this.tab2Title = values['WORKFLOW_TAB2_TITLE'];
            _this.tab3Title = values['WORKFLOW_TAB3_TITLE'];
            _this.tab4Title = values['WORKFLOW_TAB4_TITLE'];
        });
    };
    WorkflowPage.prototype.ionViewDidLoad = function () {
    };
    WorkflowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-workflow',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\workflow\workflow-tabs\workflow.html"*/'<ion-tabs>\n\n    <ion-tab [root]="workflow_tab1Root" [tabTitle]="tab1Title" tabIcon="book"></ion-tab>\n\n    <ion-tab [root]="workflow_tab2Root" [tabTitle]="tab2Title" tabIcon="bookmarks"></ion-tab>\n\n    <ion-tab [root]="workflow_tab3Root" [tabTitle]="tab3Title" tabIcon="person"></ion-tab>\n\n    <ion-tab [root]="workflow_tab4Root" [tabTitle]="tab4Title" tabIcon="settings"></ion-tab>\n\n    \n\n  </ion-tabs>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\workflow\workflow-tabs\workflow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], WorkflowPage);
    return WorkflowPage;
}());

//# sourceMappingURL=workflow.js.map

/***/ })

});
//# sourceMappingURL=48.js.map