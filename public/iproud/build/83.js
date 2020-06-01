webpackJsonp([83],{

/***/ 1048:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPageModule", function() { return CommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment__ = __webpack_require__(1223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommentPageModule = (function () {
    function CommentPageModule() {
    }
    CommentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comment__["a" /* CommentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comment__["a" /* CommentPage */]),
            ],
        })
    ], CommentPageModule);
    return CommentPageModule;
}());

//# sourceMappingURL=comment.module.js.map

/***/ }),

/***/ 1223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session__ = __webpack_require__(19);
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
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentPage = (function () {
    function CommentPage(navCtrl, navParams, formBuilder, session, events, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.session = session;
        this.events = events;
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
        this.blog = this.navParams.data.blog;
        this.form = formBuilder.group({
            commentText: '',
        });
    }
    CommentPage.prototype.ionViewDidLoad = function () {
    };
    CommentPage.prototype.sendComment = function () {
        this.form.controls['commentText'];
        var comment = {
            author: {
                userId: this.currentUser.userId,
                userName: this.currentUser.userName,
                nickName: this.currentUser.nickName,
                hasPassword: this.currentUser.hasPassword,
                isEmployee: this.currentUser.isEmployee,
                pictureUrl: this.currentUser.pictureUrl,
                fansCount: 6
            },
            text: this.form.value.commentText,
            creTime: Date.now()
        };
        var blog = this.blog;
        console.log(blog);
        this.events.publish('comment:add', comment, blog);
        this.viewCtrl.dismiss();
    };
    CommentPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    CommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-comment',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\comment\comment.html"*/'<!--\n\n  Generated template for the CommentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content  no-bounce >\n\n  <form  [formGroup]="form">\n\n  <ion-row>   \n\n    <ion-card ><ion-input class="input-area" formControlName="commentText" placeholder="...写评论..."></ion-input></ion-card>\n\n    <ion-col>\n\n        <button icon-button small (click)="sendComment()">发送</button>\n\n        <button icon-button small (click)="cancel()" class="button-cancel">取消</button>\n\n    </ion-col>\n\n  </ion-row>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\comment\comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ })

});
//# sourceMappingURL=83.js.map