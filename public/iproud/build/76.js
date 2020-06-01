webpackJsonp([76],{

/***/ 1062:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonClubMainPageModule", function() { return PersonClubMainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_club_main__ = __webpack_require__(1237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonClubMainPageModule = (function () {
    function PersonClubMainPageModule() {
    }
    PersonClubMainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__person_club_main__["a" /* PersonClubMainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__person_club_main__["a" /* PersonClubMainPage */]),
            ],
        })
    ], PersonClubMainPageModule);
    return PersonClubMainPageModule;
}());

//# sourceMappingURL=person-club-main.module.js.map

/***/ }),

/***/ 1237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonClubMainPage; });
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
 * Generated class for the PersonClubMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonClubMainPage = (function () {
    function PersonClubMainPage(navCtrl, navParams, events, session) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.session = session;
        this.isLogin = false;
        this.isEmployee = false;
        this.clubSegment = '1';
        this.isEmployee = this.session.isEmployee;
        if (this.session.user != null) {
            this.currentUser = this.session.user;
            this.isLogin = true;
        }
        if (this.currentUser && this.currentUser.employeeInfo) {
            this.currentUser.pictureUrl = this.currentUser.pictureUrl || "assets/img/avatar-round.png";
        }
        this.user = this.navParams.data;
    }
    PersonClubMainPage.prototype.ionViewDidLoad = function () {
    };
    PersonClubMainPage.prototype.isCurrentUser = function () {
        return (this.currentUser.userId == this.user.userId);
    };
    PersonClubMainPage.prototype.openClubDetail = function (club) {
        this.navCtrl.push('ClubDetailPage', club);
    };
    PersonClubMainPage.prototype.quitClub = function (club) {
        for (var _i = 0, _a = club.memberGroup; _i < _a.length; _i++) {
            var member = _a[_i];
            if (member.userId == this.currentUser.userId) {
                club.memberGroup.pop(member);
                --club.memberCount;
            }
        }
        this.events.publish("userClubGroub:change");
    };
    PersonClubMainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-person-club-main',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\person-club-main\person-club-main.html"*/'<ion-header>\n\n    <ion-navbar color="gray"> \n\n    </ion-navbar>\n\n    <ion-item no-lines class="header">\n\n      <ion-avatar item-start>\n\n          <img [src]="user.pictureUrl">\n\n      </ion-avatar>\n\n      <h6>{{user.nickName}}</h6>\n\n      <p>{{user.clubCount}}个社团</p>\n\n      <ion-note item-end *ngIf="!isCurrentUser()">\n\n        <button ion-button small outline *ngIf="!isConcern(user)" (click)="doConcern(user)" >+关注</button>\n\n        <button ion-button small outline *ngIf="isConcern(user)" (click)="quitConcern(user)" >取消关注</button>\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-segment class="segment"[(ngModel)]="clubSegment" mode="md">\n\n      <ion-segment-button  value="1">\n\n        我的社团\n\n      </ion-segment-button>\n\n      <ion-segment-button  value="2">\n\n        我的讨论\n\n      </ion-segment-button>\n\n    </ion-segment>    \n\n</ion-header>\n\n\n\n<ion-content> \n\n    <div [ngSwitch]="clubSegment">\n\n      <div *ngSwitchCase="\'1\'">\n\n        <ion-list>\n\n          <ion-item *ngFor="let club of user.clubGroup">\n\n            <ion-avatar item-start (click)="openClubDetail(club)" >\n\n              <img [src]="club.pictureUrl">\n\n            </ion-avatar>               \n\n            <h4 class="title" (click)="openClubDetail(club)" >{{club.name}}</h4>\n\n            <ion-note item-end><button class="button"ion-button small outline (click)="quitClub(club)">退出</button></ion-note>\n\n            </ion-item>  \n\n        </ion-list>      \n\n      </div>\n\n      <div *ngSwitchCase="\'2\'">\n\n  \n\n\n\n        \n\n      </div>\n\n    </div>    \n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\person-club-main\person-club-main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__services_session__["a" /* Session */]])
    ], PersonClubMainPage);
    return PersonClubMainPage;
}());

//# sourceMappingURL=person-club-main.js.map

/***/ })

});
//# sourceMappingURL=76.js.map