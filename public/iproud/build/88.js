webpackJsonp([88],{

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailPageModule", function() { return BlogDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_detail__ = __webpack_require__(1217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlogDetailPageModule = (function () {
    function BlogDetailPageModule() {
    }
    BlogDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blog_detail__["a" /* BlogDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__blog_detail__["a" /* BlogDetailPage */]),
            ],
        })
    ], BlogDetailPageModule);
    return BlogDetailPageModule;
}());

//# sourceMappingURL=blog-detail.module.js.map

/***/ }),

/***/ 1217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailPage; });
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




/**
 * Generated class for the BlogDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BlogDetailPage = (function () {
    function BlogDetailPage(navCtrl, navParams, session, events, blogProvider, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.session = session;
        this.events = events;
        this.blogProvider = blogProvider;
        this.modalCtrl = modalCtrl;
        this.showModal = false;
        this.isLogin = false;
        this.isEmployee = false;
        this.communitySegment = 'comment';
        this.isEmployee = this.session.isEmployee;
        if (this.session.user != null) {
            this.currentUser = this.session.user;
            this.isLogin = true;
        }
        if (this.currentUser && this.currentUser.employeeInfo) {
            this.currentUser.pictureUrl = this.currentUser.pictureUrl || "assets/img/avatar-round.png";
        }
        this.blog = this.navParams.data;
        this.events.subscribe('comment:add', function (comment, blog) {
            _this.blogProvider.addCommentToBlog(comment, blog);
        });
    }
    BlogDetailPage.prototype.ionViewDidLoad = function () {
    };
    BlogDetailPage.prototype.openPersonMain = function (blog) {
        this.navCtrl.push('PersonMainPage', blog);
    };
    BlogDetailPage.prototype.openSharePage = function (blog) {
        var _this = this;
        if (this.modal && this.showModal) {
            this.modal.dismiss();
        }
        else {
            this.shareMessage = {
                title: blog.author.nickName,
                description: blog.content,
                thumb: blog.author.pictureUrl,
                resource: "https://iproud.fihmb.com/AppClient"
            };
            this.modal = this.modalCtrl.create('SharePage', {
                //數組為空時默認顯示全部類型:1-微信 2-朋友圈 3-微博 4-刷新 5-複製鏈接 6-收藏
                navigationDockTargetMapIds: [1,
                    2, 3], shareMessage: this.shareMessage
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
    BlogDetailPage.prototype.openCommentPage = function (blog) {
        var _this = this;
        if (this.modal && this.showModal) {
            this.modal.dismiss();
        }
        else {
            this.modal = this.modalCtrl.create('CommentPage', { blog: blog }, {
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
    BlogDetailPage.prototype.isConcern = function () {
        return this.blogProvider.isConcernSomeone(this.currentUser, this.blog.author);
    };
    BlogDetailPage.prototype.doConcern = function () {
        this.blogProvider.concernSomeone(this.currentUser, this.blog.author);
    };
    BlogDetailPage.prototype.quitConcern = function () {
        this.blogProvider.quitConcernSomeone(this.currentUser, this.blog.author);
    };
    BlogDetailPage.prototype.isZan = function (blog) {
        return this.blogProvider.isZanBlog(this.currentUser, blog);
    };
    BlogDetailPage.prototype.doZan = function (blog) {
        if (this.blogProvider.isZanBlog(this.currentUser, blog)) {
            this.blogProvider.quitZanBlog(this.currentUser, blog);
            --blog.zanCount;
        }
        else {
            this.blogProvider.zanBlog(this.currentUser, blog);
            ++blog.zanCount;
        }
    };
    ;
    BlogDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-blog-detail',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\blog-detail\blog-detail.html"*/'<!--\n\n  Generated template for the BlogDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>评论</ion-title>\n\n  </ion-navbar>\n\n  <ion-grid class="blog">\n\n      <ion-item no-lines>\n\n          <ion-avatar item-start (click)="openPersonMain(blog)">\n\n              <img [src]="blog.author.pictureUrl">\n\n          </ion-avatar>\n\n          <h6>{{blog.author.nickName}}</h6>\n\n          <p>{{blog.publishTime}}</p>\n\n          <ion-note item-end>\n\n              <button *ngIf="!isConcern()" class="button-concern" ion-button round small outline (click)="doConcern()">+关注</button>\n\n              <button *ngIf="isConcern()" class="button-concern" ion-button round small outline (click)="quitConcern()" >取消关注</button>\n\n          </ion-note>\n\n      </ion-item>\n\n      <ion-row> \n\n          <ion-col col-12>\n\n              <span>{{blog.content}}</span>\n\n          </ion-col>\n\n      </ion-row>\n\n      <ion-row >\n\n          <ion-col col-4  *ngFor="let img of blog.imgs"><img [src]="img.pictureUrl"></ion-col>\n\n      </ion-row>            \n\n      <ion-row>\n\n          <ion-col col-6>{{blog.readCount}}阅读</ion-col>\n\n          <ion-col col-2>\n\n              <ion-icon *ngIf="!isZan(blog)"name="thumbs-up-outline" (click)="doZan(blog)"> {{blog.zanCount}}</ion-icon>\n\n              <ion-icon *ngIf="isZan(blog)"name="thumbs-up" (click)="doZan(blog)"> {{blog.zanCount}}</ion-icon>\n\n          </ion-col>\n\n          <ion-col col-2><ion-icon name="text-outline" >{{blog.commentCount}}</ion-icon></ion-col>\n\n          <ion-col col-2><ion-icon name="share-alt-outline" (click)="openSharePage(blog)">{{blog.shareCount}}</ion-icon></ion-col>\n\n      </ion-row> \n\n      <div class="divider"></div>                          \n\n</ion-grid>   \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >   \n\n  <ion-list class="comment">\n\n    <ion-item *ngFor="let item of blog.commentGroup">\n\n        <ion-avatar item-start>\n\n             <img [src]="item.author.pictureUrl">\n\n        </ion-avatar>\n\n        <p>{{item.author.nickName}}</p>\n\n        <h4>{{item.text}}</h4>\n\n        <ion-note item-end><ion-icon name="thumbs-up"></ion-icon></ion-note>\n\n    </ion-item>           \n\n  </ion-list>  \n\n</ion-content>\n\n\n\n  <ion-footer>\n\n        <ion-toolbar> <button round icon-only (click)="openCommentPage(blog)"><p text-center>我也说一句...</p></button></ion-toolbar>\n\n   \n\n  </ion-footer>    \n\n\n\n\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\blog-detail\blog-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_blog_provider__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], BlogDetailPage);
    return BlogDetailPage;
}());

//# sourceMappingURL=blog-detail.js.map

/***/ })

});
//# sourceMappingURL=88.js.map