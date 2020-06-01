webpackJsonp([72],{

/***/ 1067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPageModule", function() { return TopicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic__ = __webpack_require__(1242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TopicPageModule = (function () {
    function TopicPageModule() {
    }
    TopicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__topic__["a" /* TopicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__topic__["a" /* TopicPage */]),
            ],
        })
    ], TopicPageModule);
    return TopicPageModule;
}());

//# sourceMappingURL=topic.module.js.map

/***/ }),

/***/ 1242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_provider__ = __webpack_require__(214);
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
 * Generated class for the TopicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicPage = (function () {
    function TopicPage(navCtrl, navParams, blogProvider, session) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.session = session;
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
        this.topic = this.navParams.data;
    }
    TopicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TopicPage');
    };
    TopicPage.prototype.openCreatePage = function (topic) {
        this.navCtrl.push('BlogAddPage', topic);
    };
    TopicPage.prototype.isConcern = function (item) {
        return this.blogProvider.isConcernSomeone(this.currentUser, item.author);
    };
    TopicPage.prototype.doConcern = function (item) {
        this.blogProvider.concernSomeone(this.currentUser, item.author);
    };
    TopicPage.prototype.quitConcern = function (item) {
        this.blogProvider.quitConcernSomeone(this.currentUser, item.author);
    };
    TopicPage.prototype.isCurrentUser = function (item) {
        return this.blogProvider.isCurrentUser(this.currentUser, item);
    };
    TopicPage.prototype.newBlog = function () {
        this.navCtrl.push('BlogAddPage');
    };
    TopicPage.prototype.openPersonMain = function (item) {
        this.navCtrl.push('PersonMainPage', item.author);
    };
    TopicPage.prototype.openPersonMain1 = function (currentUser) {
        this.navCtrl.push('PersonMainPage', currentUser);
    };
    TopicPage.prototype.openBlogDetail = function (item) {
        this.navCtrl.push('BlogDetailPage', item);
        ++item.readCount;
    };
    TopicPage.prototype.isZan = function (item) {
        return this.blogProvider.isZanBlog(this.currentUser, item);
    };
    TopicPage.prototype.doZan = function (item) {
        if (this.blogProvider.isZanBlog(this.currentUser, item)) {
            this.blogProvider.quitZanBlog(this.currentUser, item);
            --item.zanCount;
        }
        else {
            this.blogProvider.zanBlog(this.currentUser, item);
            ++item.zanCount;
        }
    };
    ;
    TopicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-topic',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\topic\topic.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-searchbar id="ion-search" (click)="openSearchPage($event)" animated=\'false\' [placeholder]="topic.title" ></ion-searchbar>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="openCreatePage(topic)">\n\n        <ion-icon  name="create-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <ion-item no-lines class=\'header\'>\n\n      <ion-thumbnail item-start><img [src]="topic.pictureUrl"></ion-thumbnail>\n\n      <h2>{{topic.title}}</h2>\n\n      <p>{{topic.discussCount}}讨论&nbsp;&nbsp;{{topic.readCount}}阅读</p>\n\n  </ion-item> \n\n</ion-header>\n\n\n\n<ion-content >\n\n    <div class="divider"></div>\n\n    <p class="hint">导语：{{topic.description}}</p>\n\n    <div class="divider"></div>\n\n\n\n    <ion-grid *ngFor="let item of topic.blogs" class="blog">\n\n        <ion-item no-lines>\n\n            <ion-avatar item-start (click)="openPersonMain(item)">\n\n                <img [src]="item.author.pictureUrl">\n\n            </ion-avatar>\n\n            <h6>{{item.author.nickName}}</h6>\n\n            <p>{{item.publishTime}}</p>\n\n            <ion-note item-end *ngIf="!isCurrentUser(item)">\n\n                <button *ngIf="!isConcern(item)" class="button-concern" ion-button round small outline (click)="doConcern(item)">+关注</button>\n\n                <button *ngIf="isConcern(item)" class="button-concern" ion-button round small outline (click)="quitConcern(item)" >取消关注</button>\n\n            </ion-note>\n\n        </ion-item>\n\n        <ion-row (click)="openBlogDetail(item)"> \n\n            <ion-col col-12>\n\n                <span><span class="topic-title">{{topic.title}}</span>{{item.content}}</span>\n\n            </ion-col>\n\n        </ion-row> \n\n        <ion-row >\n\n            <ion-col col-4  *ngFor="let img of item.imgs"><img [src]="img.pictureUrl"></ion-col>\n\n        </ion-row>            \n\n        <ion-row>\n\n            <ion-col col-6>{{item.readCount}}阅读</ion-col>\n\n            <ion-col col-2>\n\n                <ion-icon *ngIf="!isZan(item)"name="thumbs-up-outline" (click)="doZan(item)"> {{item.zanCount}}</ion-icon>\n\n                <ion-icon *ngIf="isZan(item)"name="thumbs-up" (click)="doZan(item)"> {{item.zanCount}}</ion-icon>\n\n            </ion-col>\n\n            <ion-col col-2><ion-icon name="text-outline" (click)="openBlogDetail(item)">{{item.commentCount}}</ion-icon></ion-col>\n\n            <ion-col col-2><ion-icon name="share-alt-outline" >{{item.shareCount}}</ion-icon></ion-col>\n\n        </ion-row> \n\n        <div class="divider"></div>            \n\n    </ion-grid> \n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\topic\topic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_provider__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_3__services_session__["a" /* Session */]])
    ], TopicPage);
    return TopicPage;
}());

//# sourceMappingURL=topic.js.map

/***/ })

});
//# sourceMappingURL=72.js.map