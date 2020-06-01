webpackJsonp([53],{

/***/ 1101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPasswordPageModule", function() { return SetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__updata_nickName__ = __webpack_require__(1290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SetPasswordPageModule = (function () {
    function SetPasswordPageModule() {
    }
    SetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__updata_nickName__["a" /* updataNickNamePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__updata_nickName__["a" /* updataNickNamePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__updata_nickName__["a" /* updataNickNamePage */]
            ]
        })
    ], SetPasswordPageModule);
    return SetPasswordPageModule;
}());

//# sourceMappingURL=updata-nickName.module.js.map

/***/ }),

/***/ 1290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updataNickNamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var updataNickNamePage = (function () {
    function updataNickNamePage(navCtrl, viewCtrl, session, userProvider, nativeService, translateService, formBuilder, events, modalCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.session = session;
        this.userProvider = userProvider;
        this.nativeService = nativeService;
        this.translateService = translateService;
        this.formBuilder = formBuilder;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.isLengthInvalid = false;
        if (this.session.user != null) {
            this.currentUser = this.session.user;
        }
        this.form = formBuilder.group({
            nickname: [this.navParams.data.nickName || '', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            if (__WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* Utility */].getByteLen(v.nickname) <= 50) {
                _this.isReadyToSave = _this.form.valid;
                _this.isLengthInvalid = false;
            }
            else {
                _this.isReadyToSave = false;
                _this.isLengthInvalid = true;
            }
        });
    }
    updataNickNamePage.prototype.submit = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.form.controls['username'];
        //校验
        if (this.form.value.nickname == null && this.form.value.nickname == undefined) {
            this.nativeService.alert(this.translateService.instant("MY_NICKNAME_VERIFY"));
            return;
        }
        this.userProvider.setNickname({
            nickname: this.form.value.nickname
        }).subscribe(function (data) {
            _this.userProvider.getUserInfo().subscribe(function (data) {
                // this.events.publish('user:info-changed', Date.now());
                _this.viewCtrl.dismiss();
            });
        });
    };
    updataNickNamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-updata-NickNamePage',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\my\updata-nickName\updata-nickName.html"*/'<ion-header >\n\n    <ion-navbar>\n\n        <ion-title>{{ \'MY_SET_NICKNAME\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="submit()">\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-input type="text" placeholder="{{ \'MY_UPDATA_NICKNAME\' | translate }}" formControlName="nickname"></ion-input>\n\n            </ion-item>\n\n\n\n            <div   error class="error-container">\n\n                <div *ngIf="isLengthInvalid" class="error">{{\'MY_NICKNAME_EXCEED\' | translate}}</div>\n\n            </div>\n\n            <!-- <ion-item *ngIf="!isLengthInvalid" class="error"> \n\n          </ion-item>\n\n            <ion-item *ngIf="isLengthInvalid" class="error">\n\n                  {{\'MY_NICKNAME_EXCEED\' | translate}}\n\n            </ion-item> -->\n\n        </ion-list>\n\n        <div padding>\n\n            <button type="submit" [disabled]="!isReadyToSave" ion-button color="primary" round block icon-left>\n\n                {{\'CHANGE_PASSWORD_SUBMIT\' | translate}}\n\n            </button>\n\n        </div>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\my\updata-nickName\updata-nickName.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_6__providers_providers__["m" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */]])
    ], updataNickNamePage);
    return updataNickNamePage;
}());

//# sourceMappingURL=updata-nickName.js.map

/***/ })

});
//# sourceMappingURL=53.js.map