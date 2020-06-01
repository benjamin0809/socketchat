webpackJsonp([84],{

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubTalkAddPageModule", function() { return ClubTalkAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__club_talk_add__ = __webpack_require__(1222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClubTalkAddPageModule = (function () {
    function ClubTalkAddPageModule() {
    }
    ClubTalkAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__club_talk_add__["a" /* ClubTalkAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__club_talk_add__["a" /* ClubTalkAddPage */]),
            ],
        })
    ], ClubTalkAddPageModule);
    return ClubTalkAddPageModule;
}());

//# sourceMappingURL=club-talk-add.module.js.map

/***/ }),

/***/ 1222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubTalkAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__ = __webpack_require__(10);
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
 * Generated class for the ClubTalkAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClubTalkAddPage = (function () {
    function ClubTalkAddPage(navCtrl, viewCtrl, navParams, events, session) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.events = events;
        this.session = session;
        this.isLogin = false;
        this.isEmployee = false;
        if (this.session.user != null) {
            this.currentUser = this.session.user;
            this.isLogin = true;
        }
        if (this.currentUser && this.currentUser.employeeInfo) {
            this.currentUser.pictureUrl = this.currentUser.pictureUrl || "assets/img/avatar-round.png";
        }
        this.club = this.navParams.data;
    }
    ClubTalkAddPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ClubTalkAddPage');
    };
    ClubTalkAddPage.prototype.publish = function () {
        if (!this.club.talkGroup) {
            this.club.talkGroup = [];
        }
        var talk = {
            id: 1,
            author: {
                userId: this.currentUser.userId,
                userName: this.currentUser.userName,
                nickName: this.currentUser.nickName,
                hasPassword: this.currentUser.hasPassword,
                isEmployee: this.currentUser.isEmployee,
                pictureUrl: this.currentUser.pictureUrl,
                fansCount: this.currentUser.fansCount
            },
            site: this.currentUser.employeeInfo.site,
            title: this.inputTitle,
            content: this.inputContent,
            publishTime: __WEBPACK_IMPORTED_MODULE_3__services_utility__["a" /* Utility */].dateFormat(new Date()),
            readCount: 0,
            zanCount: 0,
            commentCount: 0,
            shareCount: 0,
        };
        this.events.publish('clubTalk:add', talk);
        this.club.talkGroup.push(talk);
        this.viewCtrl.dismiss();
    };
    ClubTalkAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-club-talk-add',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\club-talk-add\club-talk-add.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n        <button ion-button icon-only>\n\n          取消\n\n        </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="publish()">\n\n          发布\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n      <ion-list>\n\n          <!--<ion-label> 标题</ion-label>\n\n          <ion-input *ngIf="isTalk" type="text" placeholder="输入标题..." [(ngModel)]="inputTitle"></ion-input>-->\n\n\n\n        <ion-card >\n\n          <button ion-button block text-center><img src="assets/img/camera.png"></button>\n\n          <ion-textarea  placeholder="...输入内容..." rows=20 [(ngModel)]="inputContent"></ion-textarea>\n\n        </ion-card>\n\n      </ion-list>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\club-talk-add\club-talk-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__services_session__["a" /* Session */]])
    ], ClubTalkAddPage);
    return ClubTalkAddPage;
}());

//# sourceMappingURL=club-talk-add.js.map

/***/ })

});
//# sourceMappingURL=84.js.map