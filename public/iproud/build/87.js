webpackJsonp([87],{

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubDetailPageModule", function() { return ClubDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__club_detail__ = __webpack_require__(1221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClubDetailPageModule = (function () {
    function ClubDetailPageModule() {
    }
    ClubDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__club_detail__["a" /* ClubDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__club_detail__["a" /* ClubDetailPage */]),
            ],
        })
    ], ClubDetailPageModule);
    return ClubDetailPageModule;
}());

//# sourceMappingURL=club-detail.module.js.map

/***/ }),

/***/ 1221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_club_provider__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_blog_provider__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClubDetailPage = (function () {
    function ClubDetailPage(navCtrl, popoverCtrl, navParams, clubProvider, blogProvider, modalCtrl, session, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.clubProvider = clubProvider;
        this.blogProvider = blogProvider;
        this.modalCtrl = modalCtrl;
        this.session = session;
        this.events = events;
        this.isLogin = false;
        this.isEmployee = false;
        this.ItemArray = ['简介', '讨论', '问答'];
        this.postTypes = [{ code: 'moment', name: '动态' }, { code: 'essence', name: '精华' }];
        this.communitySegment = this.ItemArray[0];
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
        this.club.talkGroup = this.blogProvider.allBlogs;
        this.events.subscribe("segment:change", function (data) {
            _this.communitySegment = data;
        });
        this.events.subscribe('clubTalk:add', function (data) {
            console.log(data);
            _this.club.talkGroup.push(data);
            _this.club.talkGroup.sort(function (a, b) {
                return new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime();
            });
        });
    }
    ClubDetailPage.prototype.ionViewDidLoad = function () {
    };
    ClubDetailPage.prototype.isCurrentUser = function (item) {
        return this.blogProvider.isCurrentUser(this.currentUser, item);
    };
    ClubDetailPage.prototype.openGroup = function (club) {
        this.navCtrl.push('MemberPage', club);
    };
    ClubDetailPage.prototype.openPopoverPage = function (club) {
        var popover = this.popoverCtrl.create('ClubPopoverPage', club);
        popover.present();
    };
    ClubDetailPage.prototype.isClubMember = function () {
        //return this.clubProvider.isClubMember(this.club, this.currentUser)
    };
    ClubDetailPage.prototype.joinClub = function () {
        var member = {
            userId: this.currentUser.userId,
            userName: this.currentUser.userName,
            nickName: this.currentUser.nickName,
            hasPassword: this.currentUser.hasPassword,
            isEmployee: this.currentUser.isEmployee,
            pictureUrl: this.currentUser.pictureUrl,
        };
        //this.clubProvider.joinClub(this.club, member)
        this.club.memberGroup.push(member);
        ++this.club.memberCount;
        this.events.publish("userClubGroub:change");
    };
    ClubDetailPage.prototype.quitClub = function () {
        //this.clubProvider.quitClub(this.club, this.currentUser)
        for (var _i = 0, _a = this.club.memberGroup; _i < _a.length; _i++) {
            var member = _a[_i];
            if (member.userId == this.currentUser.userId) {
                this.club.memberGroup.pop(member);
                --this.club.memberCount;
            }
        }
        this.events.publish("userClubGroub:change");
    };
    ClubDetailPage.prototype.addTalk = function (club) {
        this.navCtrl.push("ClubTalkAddPage", club);
    };
    ClubDetailPage.prototype.isConcern = function (item) {
        return this.blogProvider.isConcernSomeone(this.currentUser, item.author);
    };
    ClubDetailPage.prototype.doConcern = function (item) {
        this.blogProvider.concernSomeone(this.currentUser, item.author);
    };
    ClubDetailPage.prototype.quitConcern = function (item) {
        this.blogProvider.quitConcernSomeone(this.currentUser, item.author);
    };
    ClubDetailPage.prototype.isZan = function (item) {
        return this.blogProvider.isZanBlog(this.currentUser, item);
    };
    ClubDetailPage.prototype.doZan = function (item) {
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
    ClubDetailPage.prototype.newBlog = function () {
        this.navCtrl.push('BlogAddPage');
    };
    ClubDetailPage.prototype.openPersonMain = function (item) {
        this.navCtrl.push('PersonMainPage', item.author);
    };
    ClubDetailPage.prototype.openBlogDetail = function (item) {
        this.navCtrl.push('BlogDetailPage', item);
        ++item.readCount;
    };
    ClubDetailPage.prototype.shareClub = function () {
        var _this = this;
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
    ClubDetailPage.prototype.openPersonClubMain = function (item) {
        this.navCtrl.push('PersonClubMainPage', item.author);
    };
    ClubDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-club-detail',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\club-detail\club-detail.html"*/'\n\n<ion-header >\n\n  <ion-navbar color="gray">\n\n      <ion-buttons end>\n\n          <button ion-button icon-only (click)="shareClub()">\n\n            <ion-icon name="share-outline"></ion-icon>\n\n          </button>\n\n      </ion-buttons> \n\n  </ion-navbar> \n\n</ion-header>\n\n\n\n<ion-content class="segment-blog">\n\n    <!--\n\n    <ion-list>\n\n        <ion-item *ngFor="let talk of club.talkGroup"(click)="itemSelected(item)">\n\n          <ion-avatar item-start>\n\n              <img [src]="talk.publisher.pictureUrl">\n\n          </ion-avatar>\n\n          <h4 class="title">{{talk.title}}</h4>\n\n          <p>{{talk.publisher.nickName}}</p>\n\n          <ion-note item-end>\n\n              <p>{{talk.publishTime}}</p>\n\n          </ion-note>\n\n        </ion-item> \n\n     </ion-list>-->  \n\n\n\n     <ion-item no-lines class="header">\n\n        <ion-thumbnail item-start>\n\n              <img [src]="club.pictureUrl">\n\n        </ion-thumbnail>\n\n        <h6>{{club.name}}</h6>\n\n        <h6>{{club.description}}</h6>\n\n        <h6>{{club.follows}}粉丝</h6>\n\n        <ion-note item-end>\n\n              <button ion-button small outline round  *ngIf="!isClubMember()" (click)="joinClub()" > 加入 </button>\n\n              <button ion-button small outline round  *ngIf="isClubMember()" (click)="quitClub()"> 退出社团</button>\n\n        </ion-note> \n\n    </ion-item> \n\n    <div> \n\n      <button ion-button clear (click)="openGroup(club)">\n\n          名人堂&nbsp;<ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </div>\n\n\n\n    <ion-segment [(ngModel)]="postType"> \n\n        <ion-segment-button *ngFor="let Item of postTypes" value="{{ Item.code }}">\n\n            <span>{{ Item.name }}</span>\n\n          </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <div [ngSwitch]="postType">\n\n        <div *ngSwitchCase="\'moment\'"  >\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <div class="sticky-top-box"> \n\n                            <div class="sticky" data-title="置顶"></div>\n\n                            <p>[五周年X读书日活动] 送蚊香液经典，品墨韵书香</p>\n\n                        </div>\n\n                </ion-row>    \n\n            </ion-grid> \n\n            <div class="divider"></div>\n\n                <ion-grid *ngFor="let item of club.talkGroup" class="blog">\n\n                        <ion-item no-lines>\n\n                            <ion-avatar item-start (click)="openPersonMain(item)" >\n\n                                <img [src]="item.author.pictureUrl">\n\n                            </ion-avatar>\n\n                            <h6>{{item.author.nickName}}</h6>\n\n                            <p>{{item.publishTime}}</p>\n\n                            <ion-note item-end *ngIf="!isCurrentUser(item)">\n\n                                <button *ngIf="!isConcern(item)" class="button-concern" ion-button round small outline (click)="doConcern(item)">+关注</button>\n\n                                <button *ngIf="isConcern(item)" class="button-concern" ion-button round small outline (click)="quitConcern(item)" >取消关注</button>\n\n                            </ion-note>\n\n                        </ion-item>\n\n                        <ion-row (click)="openBlogDetail(item)"> \n\n                            <ion-col col-12>\n\n                                <span>{{item.content}}</span>\n\n                            </ion-col>\n\n                        </ion-row> \n\n                        <ion-row >\n\n                            <ion-col col-4  *ngFor="let img of item.imgs"><img [src]="img.pictureUrl"></ion-col>\n\n                        </ion-row>            \n\n                        <ion-row>\n\n                            <ion-col col-6>{{item.readCount}}阅读</ion-col>\n\n                            <ion-col col-2>\n\n                                <ion-icon *ngIf="!isZan(item)"name="thumbs-up-outline" (click)="doZan(item)"> {{item.zanCount}}</ion-icon>\n\n                                <ion-icon *ngIf="isZan(item)"name="thumbs-up" (click)="doZan(item)"> {{item.zanCount}}</ion-icon>\n\n                            </ion-col>\n\n                            <ion-col col-2><ion-icon name="text-outline" (click)="openBlogDetail(item)">{{item.commentCount}}</ion-icon></ion-col>\n\n                            <ion-col col-2><ion-icon name="share-alt-outline" >{{item.shareCount}}</ion-icon></ion-col>\n\n                        </ion-row> \n\n                        <div class="divider"></div>            \n\n                    </ion-grid>  \n\n        </div>\n\n        <div *ngSwitchCase="\'essence\'"  ></div>\n\n    </div>\n\n      \n\n     <ion-fab right bottom>\n\n        <button ion-fab  (click)="addTalk()"><ion-icon name="add"></ion-icon></button>\n\n     </ion-fab>                 \n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\club-detail\club-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_club_provider__["a" /* ClubProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_blog_provider__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], ClubDetailPage);
    return ClubDetailPage;
}());

//# sourceMappingURL=club-detail.js.map

/***/ })

});
//# sourceMappingURL=87.js.map