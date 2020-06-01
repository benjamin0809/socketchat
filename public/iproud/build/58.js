webpackJsonp([58],{

/***/ 1093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeIdentityPageModule", function() { return EmployeeIdentityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee_identity__ = __webpack_require__(1283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EmployeeIdentityPageModule = (function () {
    function EmployeeIdentityPageModule() {
    }
    EmployeeIdentityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__employee_identity__["a" /* EmployeeIdentityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__employee_identity__["a" /* EmployeeIdentityPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__employee_identity__["a" /* EmployeeIdentityPage */]
            ]
        })
    ], EmployeeIdentityPageModule);
    return EmployeeIdentityPageModule;
}());

//# sourceMappingURL=employee-identity.module.js.map

/***/ }),

/***/ 1283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeIdentityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_config_provider__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(33);
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






var EmployeeIdentityPage = (function () {
    function EmployeeIdentityPage(navCtrl, formBuilder, viewCtrl, session, events, userProvider, configProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.session = session;
        this.events = events;
        this.userProvider = userProvider;
        this.configProvider = configProvider;
        this.ExtendFields = []; // 动态栏位
        if (this.session.user != null) {
            this.currentUser = this.session.user;
            if (this.currentUser.isEmployee) {
                if (this.currentUser && this.currentUser.employeeInfo) {
                    this.ExtendFields = this.currentUser.employeeInfo.extendFields;
                }
                this.formView = false;
            }
            else {
                this.formView = true;
            }
        }
        this.form = formBuilder.group({
            staffNumber: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            idCard: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    EmployeeIdentityPage.prototype.bindEmployee = function () {
        //判断工号和身份证号码
        var _this = this;
        //绑定员工信息
        this.userProvider.BindEmployee({
            employeeNo: this.form.value.staffNumber,
            idCardNo: this.form.value.idCard
        }).subscribe(function (data) {
            _this.userProvider.getUserInfo().subscribe(function (data) {
                _this.currentUser = _this.session.user;
                if (_this.currentUser && _this.currentUser.employeeInfo) {
                    _this.ExtendFields = _this.currentUser.employeeInfo.extendFields;
                }
                _this.formView = false;
                setTimeout(function () {
                    _this.events.publish('user:permission-changed');
                }, 1000);
            });
            if (data.result && data.result.inCompanyDate) {
                _this.configProvider.AfterNewEmployeeBind(data.result.inCompanyDate, data.result.siteCode).subscribe();
            }
        });
    };
    /**
     * 发送员工通知
     * @param siteCode 厂区编号
     */
    EmployeeIdentityPage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    EmployeeIdentityPage.prototype.unbindEmployee = function () {
        var _this = this;
        this.userProvider.UnbindEmployee().subscribe(function (data) {
            _this.userProvider.getUserInfo(true).subscribe(function (data) {
                _this.viewCtrl.dismiss();
                setTimeout(function () {
                    _this.events.publish('user:permission-changed');
                }, 1000);
            });
        });
        //this.formView = true;
    };
    EmployeeIdentityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-employee-identity',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\my\employee-identity\employee-identity.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'EMPLOYEE_IDENTITY_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content> \n\n \n\n  <div *ngIf="!formView"> \n\n     <!-- 已绑定员工身份 动态栏位 -->\n\n    <!-- <ion-list *ngIf="ExtendFields && ExtendFields.length > 0"> \n\n      <ion-item *ngFor="let item of ExtendFields">\n\n        <h2>{{ item.Name || item.name }}</h2>\n\n        <ion-note item-end *ngIf="!(item.IsLongField || item.IsLongField)">{{ item.Value || item.value }}</ion-note>\n\n        <ion-note *ngIf="item.IsLongField || item.IsLongField ">{{ item.Value || item.value }}</ion-note>\n\n      </ion-item> \n\n    </ion-list> -->\n\n\n\n     <!-- 已绑定员工身份 固定栏位 -->\n\n    <ion-list >\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_STAFF_NUMBER\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.staffNumber }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_REAL_NAME\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.employeeName }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_NATIONAL_ID\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.nationalId }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_GRADE\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.grade }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_POSITION\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.position }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_SITE\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.site }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_BU\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.bu }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_DEPARTMENT\' | translate }}</h2>\n\n        <ion-note>{{ currentUser.employeeInfo.deptName }}\n\n        </ion-note>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_DEPARTMENT_CODE\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.deptCode }}\n\n        </ion-note>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_COST_CODE\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.priceCode }}\n\n        </ion-note>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_POSITIONSERIES\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.positionSeries }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_COMMITTEE\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.committee }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_WORKPOSTNAME\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.workPostName }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_ISDIRECT\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.isDirect }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_INCOMPANYDATE\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.inCompanyDate }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_WORKLONG\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.workLong }}\n\n        </ion-note>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_OUTYEAR\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.outYear }}\n\n        </ion-note>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_MAXEDUCATION\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.maxEducation }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_SPECIALTY\' | translate }}</h2>\n\n        <ion-note >{{ currentUser.employeeInfo.specialty }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_URGENTMANANDTEL\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.urgentManAndTel }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_DIRECTOR\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.director }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_DORM\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.dorm }}\n\n        </ion-note>\n\n      </ion-item>\n\n      <!-- <ion-item>\n\n        <h2>{{\'EMPLOYEE_PHONE\' | translate }}</h2>\n\n        <ion-note item-end>{{ currentUser.employeeInfo.mobileInPMS }}\n\n        </ion-note>\n\n      </ion-item> -->\n\n\n\n     \n\n\n\n      <div class="extends-field">\n\n        <ion-item *ngFor="let item of ExtendFields">\n\n          <h2>{{ item.Name || item.name }}</h2>\n\n          <ion-note item-end *ngIf="!(item.IsLongField || item.isLongField)">{{ item.Value || item.value }}</ion-note>\n\n          <ion-note *ngIf="item.IsLongField || item.isLongField ">{{ item.Value || item.value }}</ion-note>\n\n        </ion-item> \n\n      </div>\n\n\n\n      <ion-item>\n\n        <h2>{{\'EMPLOYEE_REMARK\' | translate }}</h2>\n\n        <ion-note>{{ currentUser.employeeInfo.remark }}\n\n        </ion-note>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n    <div padding>\n\n      <button ion-button (click)="unbindEmployee()" block round color="nameRed">\n\n        {{\'EMPLOYEE_IDENTITY_UNBIND\' | translate }}\n\n      </button>\n\n    </div>\n\n  </div>\n\n    <!-- 已绑定员工身份 固定栏位 -->\n\n\n\n  <!-- 未绑定用户身份 -->\n\n  <form *ngIf="formView" [formGroup]="form">\n\n    <div text-center margin color="medium">\n\n      <ion-note>{{\'EMPLOYEE_NOT_BIND_YET\' | translate }}</ion-note>\n\n    </div>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="{{\'EMPLOYEE_STAFF_NUMBER\' | translate }}" formControlName="staffNumber"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="{{\'EMPLOYEE_NATIONAL_ID\' | translate }}" formControlName="idCard"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div padding>\n\n      <button ion-button (click)="bindEmployee()" block round color="nameGreen">\n\n        {{\'EMPLOYEE_IDENTITY_BIND\' | translate }}\n\n      </button>\n\n    </div>\n\n\n\n     <!-- 未绑定用户身份 -->\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\my\employee-identity\employee-identity.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["m" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_config_provider__["a" /* ConfigProvider */]])
    ], EmployeeIdentityPage);
    return EmployeeIdentityPage;
}());

//# sourceMappingURL=employee-identity.js.map

/***/ })

});
//# sourceMappingURL=58.js.map