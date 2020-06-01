webpackJsonp([62],{

/***/ 1085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignPageModule", function() { return SignPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign__ = __webpack_require__(1260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignPageModule = (function () {
    function SignPageModule() {
    }
    SignPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign__["a" /* SignPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign__["a" /* SignPage */]),
            ],
        })
    ], SignPageModule);
    return SignPageModule;
}());

//# sourceMappingURL=sign.module.js.map

/***/ }),

/***/ 1260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the SignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignPage = (function () {
    function SignPage(navCtrl, navParams, session, translateService, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.session = session;
        this.translateService = translateService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.signList = [];
        this.displayList = [];
        this.select = 'week';
    }
    SignPage.prototype.ionViewDidLoad = function () {
        this.options = [{ name: this.translateService.instant('HOME_SIGN_WEEK'), id: "1", value: 'week' },
            { name: this.translateService.instant('HOME_SIGN_MONTH'), id: "2", value: 'month' },
            { name: this.translateService.instant('HOME_SIGN_QUARTER'), id: "3", value: 'months' }];
        for (var i = 0, j = 0, k = 0; i < 90; i++) {
            var sign = {
                id: i,
                time: ''
            };
            var timestamp = +new Date();
            if (i % 2 === 0) {
                var res = timestamp - k * 1000 * 60 * 60 * 24;
                sign.time = __WEBPACK_IMPORTED_MODULE_2__services_utility__["a" /* Utility */].formatSignTime(this.session.language, res);
                k++;
            }
            else {
                j++;
                var res = timestamp - (j * 24 - 16) * 1000 * 60 * 60;
                sign.time = __WEBPACK_IMPORTED_MODULE_2__services_utility__["a" /* Utility */].formatSignTime(this.session.language, res);
            }
            this.signList.push(sign);
        }
        this.selectOption(this.select);
    };
    SignPage.prototype.filter = function (length) {
        var temp = this.signList.sort(function (a, b) {
            return new Date(b['time'].toString()).getTime() - new Date(a['time'].toString()).getTime();
        });
        return temp.filter(function (item, index) { return index < length; });
    };
    SignPage.prototype.selectOption = function (select) {
        this.select = select;
        switch (select) {
            case 'week':
                this.displayList = this.filter(7);
                break;
            case 'month':
                this.displayList = this.filter(30);
                break;
            case 'months':
                this.displayList = this.filter(90);
                break;
            default:
                this.displayList = this.filter(7);
                break;
        }
    };
    SignPage.prototype.sign = function () {
        this.signList.sort(function (a, b) {
            return b['id'] - a['id'];
        });
        var max = this.signList[0]['id'];
        var sign = {
            id: max + 1,
            time: __WEBPACK_IMPORTED_MODULE_2__services_utility__["a" /* Utility */].formatSignTime(this.session.language, +new Date())
        };
        this.signList.push(sign);
        this.selectOption(this.select);
    };
    SignPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Options',
            buttons: [
                {
                    text: this.options[0]['name'],
                    role: this.select === 'week' ? 'destructive' : '',
                    icon: this.select === 'week' ? 'ios-checkmark' : '',
                    handler: function () {
                        _this.selectOption('week');
                    }
                },
                {
                    text: this.options[1]['name'],
                    role: this.select === 'month' ? 'destructive' : '',
                    icon: this.select === 'month' ? 'ios-checkmark' : '',
                    handler: function () {
                        _this.selectOption('month');
                    }
                },
                {
                    text: this.options[2]['name'],
                    role: this.select === 'months' ? 'destructive' : '',
                    icon: this.select === 'months' ? 'ios-checkmark' : '',
                    handler: function () {
                        _this.selectOption('months');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SignPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-sign',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\home\sign\sign.html"*/'<!--\n\n  Generated template for the SignPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header >\n\n  <ion-navbar>\n\n    <ion-title>\n\n      sign\n\n    </ion-title>\n\n\n\n    <ion-buttons end   >\n\n      <button   ion-button icon-only (click)="presentActionSheet($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n \n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <!-- <ion-toolbar>\n\n    <ion-item no-lines>\n\n      <ion-label></ion-label>\n\n      <ion-select [(ngModel)]="select" (ngModelChange)="selectOption(select)">\n\n        <ion-option value="{{item.value}}" *ngFor="let item of options">{{item.name}}</ion-option> \n\n      </ion-select>\n\n  </ion-item>\n\n  </ion-toolbar> -->\n\n</ion-header>\n\n \n\n<ion-content  >\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of displayList;let idx = index"> {{idx + 1}}.{{item.time}}-{{item.id}}</ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar> \n\n      <div class="footer-container">\n\n          <button (click)="sign()" ion-button color="primary" round block  >\n\n              sign\n\n            </button>\n\n          </div>\n\n          </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\home\sign\sign.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */]])
    ], SignPage);
    return SignPage;
}());

//# sourceMappingURL=sign.js.map

/***/ })

});
//# sourceMappingURL=62.js.map