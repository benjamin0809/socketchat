webpackJsonp([89],{

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerAddPageModule", function() { return AnswerAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__answer_add__ = __webpack_require__(1214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AnswerAddPageModule = (function () {
    function AnswerAddPageModule() {
    }
    AnswerAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__answer_add__["a" /* AnswerAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__answer_add__["a" /* AnswerAddPage */]),
            ],
        })
    ], AnswerAddPageModule);
    return AnswerAddPageModule;
}());

//# sourceMappingURL=answer-add.module.js.map

/***/ }),

/***/ 1214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utility__ = __webpack_require__(32);
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






/**
 * Generated class for the AnswerAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnswerAddPage = (function () {
    function AnswerAddPage(navCtrl, navParams, session, formBuilder, events, blogProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.session = session;
        this.formBuilder = formBuilder;
        this.events = events;
        this.blogProvider = blogProvider;
        this.viewCtrl = viewCtrl;
        this.isLogin = false;
        this.isEmployee = false;
        this.isEmployee = this.session.isEmployee;
        if (this.session.user != null) {
            this.currentUser = this.session.user;
            this.isLogin = true;
        }
        if (this.currentUser && this.currentUser.employeeInfo) {
            this.currentUser.pictureUrl = this.currentUser.pictureUrl || "assets/img/avatar-round.png";
        }
        this.question = this.navParams.data.item;
        this.form = formBuilder.group({
            Text: '',
        });
    }
    AnswerAddPage.prototype.send = function () {
        this.form.controls['Text'];
        var answer = {
            author: {
                userId: this.currentUser.userId,
                userName: this.currentUser.userName,
                nickName: this.currentUser.nickName,
                hasPassword: this.currentUser.hasPassword,
                isEmployee: this.currentUser.isEmployee,
                pictureUrl: this.currentUser.pictureUrl,
            },
            content: this.form.value.Text,
            creTime: __WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].dateFormat(new Date()),
        };
        if (!this.question.answerGroup) {
            this.question.answerGroup = [];
        }
        this.question.answerGroup.push(answer);
        this.question.answerGroup.sort(function (a, b) {
            return new Date(b.creTime).getTime() - new Date(a.creTime).getTime();
        });
        //this.blogProvider.addAnswerCount(this.question);
        this.viewCtrl.dismiss();
    };
    AnswerAddPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    AnswerAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-answer-add',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\answer-add\answer-add.html"*/'<!--\n\n  Generated template for the AnswerAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content  no-bounce >\n\n    <form  [formGroup]="form">\n\n    <ion-row>   \n\n      <ion-card ><ion-input class="input-area" formControlName="Text" placeholder="...我来回答..."></ion-input></ion-card>\n\n      <ion-col>\n\n          <button icon-button small (click)="send()">回答</button>\n\n          <button icon-button small (click)="cancel()" class="button-cancel">取消</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    </form>\n\n  </ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\answer-add\answer-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["b" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]])
    ], AnswerAddPage);
    return AnswerAddPage;
}());

//# sourceMappingURL=answer-add.js.map

/***/ })

});
//# sourceMappingURL=89.js.map