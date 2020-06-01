webpackJsonp([110],{

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardPageModule", function() { return KeyboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyboard__ = __webpack_require__(1193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KeyboardPageModule = (function () {
    function KeyboardPageModule() {
    }
    KeyboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__keyboard__["a" /* KeyboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__keyboard__["a" /* KeyboardPage */]),
            ],
        })
    ], KeyboardPageModule);
    return KeyboardPageModule;
}());

//# sourceMappingURL=keyboard.module.js.map

/***/ }),

/***/ 1193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_keyboard__ = __webpack_require__(210);
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
 * Generated class for the KeyboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KeyboardPage = (function () {
    function KeyboardPage(navCtrl, navParams, keyboard) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keyboard = keyboard;
        this.resizeModes = ['body', 'native', 'ionic'];
        this.resizeMode = 'ionic';
        this.isHideAccessarybar = true;
        this.keyboard.onKeyboardHide().subscribe(function (res) {
            _this.result += "onKeyboardHide:" + JSON.stringify(res, null, 2);
        }, function (err) {
            _this.result += "onKeyboardHide:" + JSON.stringify(err, null, 2);
        });
        this.keyboard.onKeyboardShow().subscribe(function (res) {
            _this.result += "onKeyboardShow:" + JSON.stringify(res, null, 2);
        }, function (err) {
            _this.result += "onKeyboardShow:" + JSON.stringify(err, null, 2);
        });
        this.keyboard.onKeyboardWillHide().subscribe(function (res) {
            _this.result += "onKeyboardWillHide:" + JSON.stringify(res, null, 2);
        }, function (err) {
            _this.result += "onKeyboardWillHide:" + JSON.stringify(err, null, 2);
        });
        this.keyboard.onKeyboardWillShow().subscribe(function (res) {
            _this.result += "onKeyboardWillShow:" + JSON.stringify(res, null, 2);
        }, function (err) {
            _this.result += "onKeyboardWillShow:" + JSON.stringify(err, null, 2);
        });
    }
    KeyboardPage.prototype.setResizeMode = function () {
        this.keyboard.setResizeMode(this.resizeMode);
    };
    KeyboardPage.prototype.sethideAccessaryBar = function () {
        this.keyboard.hideFormAccessoryBar(this.isHideAccessarybar);
    };
    KeyboardPage.prototype.acceptModifed = function () {
        console.log(this.resizeMode, this.isHideAccessarybar);
        this.setResizeMode();
        this.keyboard.hideFormAccessoryBar(this.isHideAccessarybar);
    };
    KeyboardPage.prototype.clearContent = function () {
        this.result = '';
    };
    KeyboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-keyboard',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\beta\keyboard\keyboard.html"*/'<!--\n\n  Generated template for the KeyboardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>keyboard</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div [innerHtml]="result">\n\n\n\n  </div>\n\n    <ion-list radio-group [(ngModel)]="resizeMode"> \n\n        <ion-list-header>\n\n          resizeMode\n\n        </ion-list-header> \n\n        <ion-item *ngFor="let mode of resizeModes">\n\n          <ion-label>{{mode}}</ion-label>\n\n          <ion-radio [value]="mode"></ion-radio>\n\n        </ion-item> \n\n      </ion-list>\n\n  <ion-list>\n\n \n\n      <ion-item>\n\n          <ion-label>sethideAccessaryBar</ion-label>\n\n          <ion-toggle [(ngModel)]="isHideAccessarybar"  ></ion-toggle>\n\n        </ion-item>\n\n      \n\n     \n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer  >\n\n  <ion-toolbar >\n\n      <ion-input type="text" ></ion-input>\n\n    <button ion-button block (click)="acceptModifed()">comfirm</button>\n\n    <button ion-button block (click)="clearContent()">clearContent</button>\n\n    \n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\beta\keyboard\keyboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_keyboard__["a" /* Keyboard */]])
    ], KeyboardPage);
    return KeyboardPage;
}());

//# sourceMappingURL=keyboard.js.map

/***/ })

});
//# sourceMappingURL=110.js.map