webpackJsonp([59],{

/***/ 1092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_password__ = __webpack_require__(1282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangePasswordPageModule = (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__change_password__["a" /* ChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__change_password__["a" /* ChangePasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__change_password__["a" /* ChangePasswordPage */]
            ]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ 1282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, viewCtrl, session, formBuilder, userProvider, nativeService, events, translateService, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.session = session;
        this.formBuilder = formBuilder;
        this.userProvider = userProvider;
        this.nativeService = nativeService;
        this.events = events;
        this.translateService = translateService;
        this.modalCtrl = modalCtrl;
        this.word = '';
        this.tipsId = 'tips';
        this.tipsIdes = 'tips';
        this.isConfirmPass = false;
        this.isCorrect = false;
        this.textColr = "defoult";
        this.reminder = this.translateService.instant('SET_PASSWORD_RULE');
        this.aStr = [
            this.translateService.instant('SET_PASSWORD_COEFFICIENT1'),
            this.translateService.instant('SET_PASSWORD_COEFFICIENT2'),
            '', '', ''
            // this.translateService.instant('SET_PASSWORD_COEFFICIENT3'),
            // this.translateService.instant('SET_PASSWORD_COEFFICIENT4'),
            // this.translateService.instant('SET_PASSWORD_COEFFICIENT5') 
        ];
        if (this.session.user != null) {
            this.currentUser = this.session.user;
        }
        this.form = formBuilder.group({
            oldPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            newPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
        });
        this.isReadyToSave = false;
        //Watch the form for changes, and
        setTimeout(function () {
            _this.form.valueChanges.subscribe(function (v) {
                if (_this.form.valid) {
                    _this.veryfy();
                }
            });
        }, 500);
    }
    //校验密码复杂系数
    ChangePasswordPage.prototype.ionViewDidLoad = function (clack) {
        if (this.form.value.newPassword.length < 1)
            return;
        //this.form.value.newPassword
        var num = this.checkStrong(this.form.value.newPassword);
        if (this.form.value.newPassword.length >= 8) {
            switch (num) {
                case 0:
                    this.word = this.aStr[0];
                    this.tipsId = 'tips';
                    break;
                case 1:
                    this.word = this.aStr[1];
                    this.tipsId = 'tips0';
                    break;
                case 2:
                    this.word = this.aStr[2];
                    this.tipsId = 'tips1';
                    break;
                case 3:
                    this.word = this.aStr[2];
                    this.tipsId = 'tips2';
                    break;
                case 4:
                    this.word = this.aStr[2];
                    this.tipsId = 'tips3';
                    break;
            }
            if (num >= 2) {
                this.tipsIdes = 'tips0';
                this.isConfirmPass = true;
                this.textColr = "defoult";
            }
            else {
                this.textColr = "status";
            }
        }
        else {
            if (num >= 2) {
                this.textColr = "place";
            }
            else {
                this.textColr = "invalid";
            }
            this.isConfirmPass = false;
            this.word = "";
            this.tipsId = 'tips';
            this.tipsIdes = 'tips';
            this.wordes = "";
        }
        this.isCorrect = false;
        this.veryfy();
    };
    ChangePasswordPage.prototype.checkStrong = function (val) {
        var modes = 0;
        if (/\d/.test(val))
            modes++; //数字
        if (/[a-z]/.test(val))
            modes++; //小写
        if (/[A-Z]/.test(val))
            modes++; //大写
        if (/\W/.test(val))
            modes++; //特殊字符
        return modes;
    };
    //校验密码是否一致
    ChangePasswordPage.prototype.veryfy = function () {
        if (this.form.value.confirmPassword == this.form.value.newPassword) {
            this.wordes = this.word;
            this.tipsIdes = this.tipsId;
            this.isCorrect = true;
            if (this.form.value.oldPassword.length > 0) {
                this.isReadyToSave = true;
            }
            else {
                this.isReadyToSave = false;
            }
        }
        else {
            this.tipsIdes = 'tips0';
            this.isCorrect = false;
            this.isReadyToSave = false;
        }
    };
    ChangePasswordPage.prototype.submit = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        if (this.form.value.confirmPassword != this.form.value.newPassword) {
            this.nativeService.alert(this.translateService.instant("CHANGE_PASSWORD_CONFIRM_INVLID"));
            return;
        }
        this.userProvider.changePassword({
            oldPassword: this.form.value.oldPassword,
            newPassword: this.form.value.newPassword
        }).subscribe(function (data) {
            _this.translateService.get(['CHANGE_PASSWORD_SUCCESS']).subscribe(function (values) {
                _this.nativeService.showToast(values.CHANGE_PASSWORD_SUCCESS);
            });
            _this.userProvider.getUserInfo().subscribe(function (data) {
                _this.events.publish('user:info-changed', Date.now());
                _this.viewCtrl.dismiss();
            });
        });
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-password',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\my\change-password\change-password.html"*/'<ion-header >\n\n    <ion-navbar>\n\n        <ion-title >{{ \'MY_INFO_CHANGE_PASSWORD\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="submit()">\n\n         \n\n        <ion-list>\n\n            <!--<ion-item>\n\n                <H3>{{\'SET_PASSWORD_RULE\'|translate}}</H3>\n\n            </ion-item>-->\n\n            <ion-item>\n\n                <ion-label floating>{{ \'CHANGE_PASSWORD_OLD\' | translate }}</ion-label>\n\n                <ion-input type="password" formControlName="oldPassword"></ion-input>\n\n            </ion-item>\n\n            <ion-item class = "tips">\n\n                <ion-label floating>{{ \'CHANGE_PASSWORD_NEW\' | translate }}</ion-label>\n\n                <ion-input type="password" (keyup)="ionViewDidLoad($event)" formControlName="newPassword"></ion-input>\n\n                <ion-icon *ngIf = "isConfirmPass" id = {{tipsId}} name="checkmark-circle" item-end></ion-icon>\n\n                <!-- <ion-icon *ngIf = "!isConfirmPass"  id = {{tipsId}} name = "key" item-end></ion-icon> -->\n\n                <ion-icon id = {{tipsId}} style="font-size: 18px;" item-end>{{word}}</ion-icon>\n\n            </ion-item>\n\n            <ion-item class = "tips" *ngIf = "isConfirmPass">\n\n                <ion-label floating>{{ \'CHANGE_PASSWORD_CONFIRM\' | translate }}</ion-label>\n\n                <ion-input type="password" (keyup)="veryfy($event)"  formControlName="confirmPassword"></ion-input>\n\n                <ion-icon *ngIf = "isCorrect" id = {{tipsIdes}} name="checkmark-circle" item-end></ion-icon>\n\n                <ion-icon *ngIf = "!isCorrect" id = {{tipsIdes}} name = "close-circle" item-end></ion-icon>\n\n                <ion-icon id = {{tipsIdes}} style="font-size: 18px;" item-end>{{wordes}}</ion-icon>\n\n            </ion-item>\n\n            \n\n            <p padding-left id ={{textColr}} [innerHTML] = \'reminder\'></p> \n\n               \n\n             \n\n        </ion-list>\n\n        <div padding>\n\n            <button type="submit" [disabled]="!isReadyToSave" ion-button color="primary" round block icon-left>\n\n                {{\'CHANGE_PASSWORD_SUBMIT\' | translate}}\n\n            </button>\n\n        </div>\n\n        \n\n    </form>\n\n    \n\n</ion-content>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\my\change-password\change-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["m" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=59.js.map