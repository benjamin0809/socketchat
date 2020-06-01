webpackJsonp([75],{

/***/ 1061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonMainPageModule", function() { return PersonMainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_main__ = __webpack_require__(1236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonMainPageModule = (function () {
    function PersonMainPageModule() {
    }
    PersonMainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__person_main__["a" /* PersonMainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__person_main__["a" /* PersonMainPage */]),
            ],
        })
    ], PersonMainPageModule);
    return PersonMainPageModule;
}());

//# sourceMappingURL=person-main.module.js.map

/***/ }),

/***/ 1236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonMainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blog_provider__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonMainPage = (function () {
    function PersonMainPage(navCtrl, navParams, session, blogProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.session = session;
        this.blogProvider = blogProvider;
        this.modalCtrl = modalCtrl;
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
        this.person = this.navParams.data;
        if (!this.person.clubGroup) {
            this.person.clubGroup = [];
        }
        this.person.clubCount = this.person.clubGroup.length;
        this.initPersonGroup();
    }
    PersonMainPage.prototype.ionViewDidLoad = function () {
    };
    PersonMainPage.prototype.isCurrentUser = function () {
        return (this.currentUser.userId == this.person.userId);
    };
    PersonMainPage.prototype.isConcern = function (person) {
        return this.blogProvider.isConcernSomeone(this.currentUser, person);
    };
    PersonMainPage.prototype.doConcern = function (person) {
        this.blogProvider.concernSomeone(this.currentUser, person);
    };
    PersonMainPage.prototype.quitConcern = function (person) {
        this.blogProvider.quitConcernSomeone(this.currentUser, person);
    };
    PersonMainPage.prototype.initPersonGroup = function () {
        this.personBlogGroup = this.blogProvider.getPersonBlogGroup(this.person.userId);
    };
    PersonMainPage.prototype.isZan = function (blog) {
        return this.blogProvider.isZanBlog(this.currentUser, blog);
    };
    PersonMainPage.prototype.doZan = function (blog) {
        if (this.blogProvider.isZanBlog(this.currentUser, blog)) {
            this.blogProvider.quitZanBlog(this.currentUser, blog);
            --blog.zanCount;
        }
        else {
            this.blogProvider.zanBlog(this.currentUser, blog);
            ++blog.zanCount;
        }
    };
    PersonMainPage.prototype.openBlogDetail = function (blog) {
        this.navCtrl.push('BlogDetailPage', blog);
        ++blog.readCount;
    };
    PersonMainPage.prototype.openClubGroup = function (person) {
        this.navCtrl.push('ClubListPage', person);
    };
    PersonMainPage.prototype.doShare = function (blog) {
        var _this = this;
        if (this.modal && this.showModal) {
            this.modal.dismiss();
        }
        else {
            this.shareMessage = {
                title: blog.nickName,
                description: blog.content,
                thumb: blog.pictureUrl,
                resource: "https://iproud.fihmb.com/AppClient" //图片url或网页url
            };
            this.modal = this.modalCtrl.create('SharePage', {
                //數組為空時默認顯示全部類型:1-微信 2-朋友圈 3-微博 4-刷新 5-複製鏈接 6-收藏
                navigationDockTargetMapIds: [1,
                    2, 3, 6], shareMessage: this.shareMessage
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
    PersonMainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-person-main',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\person-main\person-main.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color="gray"> \n\n  </ion-navbar>\n\n  <ion-item no-lines class="header">\n\n    <ion-avatar item-start>\n\n        <img [src]="person.pictureUrl">\n\n    </ion-avatar>\n\n    <h6>{{person.nickName}}</h6>\n\n    <button ion-button clear (click)="openClubGroup(person)">\n\n        <p>{{person.clubCount}}个社团</p>&nbsp;<ion-icon name="arrow-forward"></ion-icon>\n\n    </button>\n\n    <ion-note item-end *ngIf="!isCurrentUser()">\n\n      <button ion-button small outline *ngIf="!isConcern(person)" (click)="doConcern(person)" >+关注</button>\n\n      <button ion-button small outline *ngIf="isConcern(person)" (click)="quitConcern(person)" >取消关注</button>\n\n    </ion-note>\n\n  </ion-item>\n\n</ion-header>\n\n\n\n<ion-content fullscreen>\n\n    <ion-grid *ngFor="let blog of personBlogGroup" class="blog">\n\n        <ion-item no-lines>\n\n            <ion-avatar item-start >\n\n                <img [src]="person.pictureUrl">\n\n            </ion-avatar>\n\n            <h6>{{person.nickName}}</h6>\n\n            <p>{{blog.publishTime}}</p>\n\n        </ion-item>\n\n        <ion-row (click)="openBlogDetail(blog)"> \n\n            <ion-col col-12>\n\n                <span>{{blog.content}}</span>\n\n            </ion-col>\n\n        </ion-row> \n\n        <ion-row >\n\n            <ion-col col-4  *ngFor="let img of blog.imgs"><img [src]="img.pictureUrl"></ion-col>\n\n        </ion-row>            \n\n        <ion-row>\n\n            <ion-col col-6>{{blog.readCount}}阅读</ion-col>\n\n            <ion-col col-2>\n\n                <ion-icon *ngIf="!isZan(blog)"name="thumbs-up-outline" (click)="doZan(blog)"> {{blog.zanCount}}</ion-icon>\n\n                <ion-icon *ngIf="isZan(blog)"name="thumbs-up" (click)="doZan(blog)"> {{blog.zanCount}}</ion-icon>\n\n            </ion-col>\n\n            <ion-col col-2><ion-icon name="text-outline" (click)="openBlogDetail(blog)">{{blog.commentCount}}</ion-icon></ion-col>\n\n            <ion-col col-2><ion-icon name="share-alt-outline" (click)="doShare(blog)">{{blog.shareCount}}</ion-icon></ion-col>\n\n        </ion-row> \n\n        <div class="divider"></div>          \n\n    </ion-grid> \n\n    \n\n                  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\person-main\person-main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_3__providers_blog_provider__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], PersonMainPage);
    return PersonMainPage;
}());

//# sourceMappingURL=person-main.js.map

/***/ })

});
//# sourceMappingURL=75.js.map