webpackJsonp([79],{

/***/ 1054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberPageModule", function() { return MemberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member__ = __webpack_require__(1229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MemberPageModule = (function () {
    function MemberPageModule() {
    }
    MemberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__member__["a" /* MemberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__member__["a" /* MemberPage */]),
            ],
        })
    ], MemberPageModule);
    return MemberPageModule;
}());

//# sourceMappingURL=member.module.js.map

/***/ }),

/***/ 1229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_club_provider__ = __webpack_require__(212);
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
 * Generated class for the MemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemberPage = (function () {
    function MemberPage(navCtrl, session, clubProvider, navParams) {
        this.navCtrl = navCtrl;
        this.session = session;
        this.clubProvider = clubProvider;
        this.navParams = navParams;
        this.currentUser = {
            pictureUrl: "assets/img/avatar-round.png"
        };
        this.isLogin = false;
        //用于正式成员或普通成员分页
        this.isDataEmpty = false;
        this.isDataLoading = false;
        this.page = 1; // 页码
        this.pageCount = 10; // 每页条数
        this.hasMoreData = false; // 是否有更多数据
        if (this.session.user != null) {
            this.currentUser = this.session.user;
            this.isLogin = true;
        }
        this.club = this.navParams.data;
    }
    MemberPage.prototype.ionViewDidLoad = function () {
        this.getClubVipMembers();
    };
    MemberPage.prototype.openPersonMain = function (member) {
        this.navCtrl.push("PersonMainPage", member);
    };
    MemberPage.prototype.getClubVipMembers = function (_event) {
        this.clubVipMembers = [];
        this.isDataLoading = true;
        // this.clubProvider.getEvents(this.pageCount).subscribe(res => {
        //   this.clubVipMembers = res;
        //   this.isDataLoading = false;
        //   this.isDataEmpty = !res || res.length == 0;
        //   this.hasMoreData = true;
        //   this.clubVipMembers.sort((a, b) => {
        //     return (
        //       new Date(b.eventTime).getTime() - new Date(a.eventTime).getTime()
        //     );
        //   });
        // });
    };
    MemberPage.prototype.doRefresh = function (_event) {
        _event.complete();
        this.getClubVipMembers();
    };
    MemberPage.prototype.doInfinite = function (_event) {
        // this.clubProvider.getEvents(this.pageCount).subscribe(res => {
        //   this.hasMoreData = Math.floor(Math.random() * 10) % 3 != 1;
        //   this.clubVipMembers.push.apply(this.clubVipMembers, res);
        //   _event.complete();
        // });
    };
    MemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-member",template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\member\member.html"*/'<!--\n\n  Generated template for the MemberPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>社团成员</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <ion-icon iproud name="mylist-people" item-start color="danger"></ion-icon\n\n      ><span class="role">团长</span>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-avatar item-start (click)="openPersonMain(member)">\n\n        <img [src]="currentUser?.pictureUrl" />\n\n      </ion-avatar>\n\n      <h2>{{ currentUser?.nickName || currentUser?.userName }}</h2>\n\n      <p>不畏将来，不念过往</p>\n\n      <ion-note item-end>\n\n        我<!--<button class="button" ion-button small outline></button>-->\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div class="divider"></div>\n\n\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <ion-icon\n\n        iproud\n\n        name="mylist-people"\n\n        item-start\n\n        color="primary"\n\n      ></ion-icon\n\n      ><span class="role">副团长</span>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-avatar item-start (click)="openPersonMain(member)">\n\n        <img src="assets/img/puppy-1.jpg" />\n\n      </ion-avatar>\n\n      <h2>Amy</h2>\n\n      <p>微笑生活</p>\n\n      <ion-note item-end>\n\n        <button class="button" ion-button small outline>关注</button>\n\n      </ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-avatar item-start (click)="openPersonMain(member)">\n\n        <img src="assets/img/puppy-2.jpg" />\n\n      </ion-avatar>\n\n      <h2>Linda</h2>\n\n      <p>明天你好</p>\n\n      <ion-note item-end>\n\n        <button class="button" ion-button small outline>已关注</button>\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div class="divider"></div>\n\n\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <ion-icon\n\n        iproud\n\n        name="mylist-people"\n\n        item-start\n\n        color="secondary"\n\n      ></ion-icon\n\n      ><span class="role">正式成员(24)</span>\n\n    </ion-list-header>\n\n    <ion-item *ngFor="let item of clubVipMembers">\n\n      <ion-avatar item-start (click)="openPersonMain(member)">\n\n        <img [src]="item.eventImage" />\n\n      </ion-avatar>\n\n      <h2>{{ item.eventPlace }}</h2>\n\n      <p>{{ item.title }}</p>\n\n      <ion-note item-end>\n\n        <button class="button" ion-button small outline>关注</button>\n\n      </ion-note>\n\n    </ion-item>\n\n\n\n    <ion-infinite-scroll *ngIf="hasMoreData" (ionInfinite)="doInfinite($event)">\n\n      <ion-infinite-scroll-content\n\n        aria-posinset="button"\n\n        loadingSpinner="bubbles"\n\n      >\n\n      </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\member\member.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_3__providers_club_provider__["a" /* ClubProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], MemberPage);
    return MemberPage;
}());

//# sourceMappingURL=member.js.map

/***/ })

});
//# sourceMappingURL=79.js.map