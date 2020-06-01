webpackJsonp([85],{

/***/ 1045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubPopoverPageModule", function() { return ClubPopoverPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__club_popover__ = __webpack_require__(1220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClubPopoverPageModule = (function () {
    function ClubPopoverPageModule() {
    }
    ClubPopoverPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__club_popover__["a" /* ClubPopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__club_popover__["a" /* ClubPopoverPage */]),
            ],
        })
    ], ClubPopoverPageModule);
    return ClubPopoverPageModule;
}());

//# sourceMappingURL=club-popover.module.js.map

/***/ }),

/***/ 1220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session__ = __webpack_require__(19);
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
 * Generated class for the ClubPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClubPopoverPage = (function () {
    function ClubPopoverPage(navCtrl, navParams, events, viewCtrl, modalCtrl, session) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.session = session;
        this.isLogin = false;
        this.isEmployee = false;
        this.showModal = false;
        this.isEmployee = this.session.isEmployee;
        if (this.session.user != null) {
            this.currentUser = this.session.user;
            this.isLogin = true;
        }
        if (this.currentUser && this.currentUser.employeeInfo) {
            this.currentUser.pictureUrl = this.currentUser.pictureUrl || "assets/img/avatar-round.png";
        }
        this.club = this.navParams.data;
    }
    ClubPopoverPage.prototype.ionViewDidLoad = function () {
    };
    ClubPopoverPage.prototype.addTalk = function () {
        this.navCtrl.push('ClubTalkAddPage', [this.club, "1"]);
        this.viewCtrl.dismiss();
    };
    ClubPopoverPage.prototype.addQuestion = function () {
        this.navCtrl.push('ClubTalkAddPage', [this.club, "2"]);
        this.viewCtrl.dismiss();
    };
    ClubPopoverPage.prototype.shareClub = function () {
        var _this = this;
        this.viewCtrl.dismiss();
        if (this.modal && this.showModal) {
            this.modal.dismiss();
        }
        else {
            this.shareMessage = {
                title: this.club.name,
                description: this.club.description,
                thumb: this.club.pictureUrl,
                resource: "",
            };
            this.modal = this.modalCtrl.create('SharePage', {
                navigationDockTargetMapIds: [1, 2], shareMessage: this.shareMessage
            }, {
                showBackdrop: true,
                enableBackdropDismiss: true,
                enterAnimation: 'modal-from-bottom-enter',
                leaveAnimation: 'modal-from-bottom-leave'
            });
            this.modal.onDidDismiss(function (data) {
                _this.showModal = false;
            });
            this.modal.present().then(function (data) {
                _this.showModal = true;
            });
        }
    };
    ClubPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-club-popover',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\club-popover\club-popover.html"*/'\n\n<ion-content >\n\n  <ion-list>\n\n    <ion-item text-center (click)="addTalk()">发布讨论</ion-item>\n\n    <ion-item text-center (click)="addQuestion()">发布问题</ion-item>\n\n    <ion-item text-center (click)="shareClub()">邀请好友</ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\club-popover\club-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_session__["a" /* Session */]])
    ], ClubPopoverPage);
    return ClubPopoverPage;
}());

//# sourceMappingURL=club-popover.js.map

/***/ })

});
//# sourceMappingURL=85.js.map