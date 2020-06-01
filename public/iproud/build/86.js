webpackJsonp([86],{

/***/ 1044:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubListPageModule", function() { return ClubListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__club_list__ = __webpack_require__(1219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClubListPageModule = (function () {
    function ClubListPageModule() {
    }
    ClubListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__club_list__["a" /* ClubListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__club_list__["a" /* ClubListPage */]),
            ],
        })
    ], ClubListPageModule);
    return ClubListPageModule;
}());

//# sourceMappingURL=club-list.module.js.map

/***/ }),

/***/ 1219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_club_provider__ = __webpack_require__(212);
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
 * Generated class for the ClubListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClubListPage = (function () {
    function ClubListPage(navCtrl, navParams, events, clubProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.clubProvider = clubProvider;
        this.isLogin = false;
        this.isEmployee = false;
        this.user = this.navParams.data;
    }
    ClubListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClubListPage');
    };
    ClubListPage.prototype.quitClub = function (club) {
        // this.clubProvider.quitClub(club,this.currentUser)
        // for(let member of club.memberGroup){
        //   if(member.userId==this.currentUser.userId){
        //    club.memberGroup.pop(member);
        //     --club.memberCount;
        //   }
        // }
        this.events.publish("userClubGroub:change");
    };
    ClubListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-club-list',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\club-list\club-list.html"*/'<!--\n\n  Generated template for the ClubListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>我的社团</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item *ngFor="let club of user.clubGroup">\n\n          <ion-thumbnail item-start (click)="openClubDetail(club)" >\n\n            <img [src]="club.pictureUrl">\n\n          </ion-thumbnail>               \n\n          <h4 class="title" (click)="openClubDetail(club)" >{{club.name}}</h4>\n\n          <ion-note item-end><button class="button"ion-button small outline (click)="quitClub(club)">退出</button></ion-note>\n\n          </ion-item>  \n\n      </ion-list>    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\club-list\club-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__providers_club_provider__["a" /* ClubProvider */]])
    ], ClubListPage);
    return ClubListPage;
}());

//# sourceMappingURL=club-list.js.map

/***/ })

});
//# sourceMappingURL=86.js.map