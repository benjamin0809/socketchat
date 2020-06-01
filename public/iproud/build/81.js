webpackJsonp([81],{

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunitySearchSingleItemPageModule", function() { return CommunitySearchSingleItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__community_search_single_item__ = __webpack_require__(1225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommunitySearchSingleItemPageModule = (function () {
    function CommunitySearchSingleItemPageModule() {
    }
    CommunitySearchSingleItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__community_search_single_item__["a" /* CommunitySearchSingleItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__community_search_single_item__["a" /* CommunitySearchSingleItemPage */]),
            ],
        })
    ], CommunitySearchSingleItemPageModule);
    return CommunitySearchSingleItemPageModule;
}());

//# sourceMappingURL=community-search-single-item.module.js.map

/***/ }),

/***/ 1225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunitySearchSingleItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_club_provider__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommunitySearchSingleItemPage = (function () {
    function CommunitySearchSingleItemPage(navCtrl, navParams, clubProvider, translate, widgetProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clubProvider = clubProvider;
        this.translate = translate;
        this.widgetProvider = widgetProvider;
        this.types = [];
        this.Params = {
            type: '',
            datasource: [],
            isPagination: false,
            searchKey: ''
        };
        this.hasMoreData = false;
        this.isDataLoading = false;
        this.isDataEmpty = false;
        this.pageCount = 20;
        this.types = [{
                type: 'activities',
                translateKey: 'SOCIAL_CLUB_ACTIVITY'
            }, {
                type: 'boards',
                translateKey: 'SOCIAL_CLUB_CLUB'
            }, {
                type: 'posts',
                translateKey: 'SOCIAL_CLUB_MOMENT'
            }, {
                type: 'topics',
                translateKey: 'SOCIAL_CLUB_POSTS'
            }];
        this.Params = this.navParams.data;
        this.type = this.Params.type;
        this.hasMoreData = this.Params.datasource.length == 10;
        this.title = translate.instant(this.types.find(function (p) { return p.type == _this.Params.type; }).translateKey);
    }
    CommunitySearchSingleItemPage.prototype.searchMore = function () {
        this.clubProvider.SearchAllPosts(this.Params.searchKey, this.Params.datasource.length, this.pageCount).subscribe(function (res) {
        }, function (err) {
        }, function () {
        });
    };
    CommunitySearchSingleItemPage.prototype.parsePicture = function (pics) {
        if (!pics)
            return '';
        return pics.split(',')[0];
    };
    CommunitySearchSingleItemPage.prototype.doInfinite = function (_event) {
        var _this = this;
        this.clubProvider.SearchAllPosts(this.Params.searchKey, this.Params.datasource.length, this.pageCount).subscribe(function (res) {
            if (res.result) {
                (_a = _this.Params.datasource).push.apply(_a, res.result);
            }
            _this.hasMoreData = res.result.length == _this.pageCount;
            var _a;
        }, function (err) {
        }, function () {
            _event.complete();
        });
    };
    CommunitySearchSingleItemPage.prototype.doRefresh = function (_event) {
        _event.complete();
    };
    CommunitySearchSingleItemPage.prototype.TopicDetail = function (topicId) {
        this.clubProvider.openWebpage(this.clubProvider.TopicDetail(topicId), this.navCtrl);
    };
    CommunitySearchSingleItemPage.prototype.ActivityDetail = function (activityId) {
        this.clubProvider.openWebpage(this.clubProvider.ActivityDetail(activityId), this.navCtrl);
    };
    CommunitySearchSingleItemPage.prototype.clubDetail = function (boardId) {
        this.clubProvider.openWebpage(this.clubProvider.BoardDetail(boardId, "", ""), this.navCtrl);
    };
    CommunitySearchSingleItemPage.prototype.PostDetail = function (postId) {
        this.clubProvider.openWebpage(this.clubProvider.PostDetail(postId), this.navCtrl);
    };
    CommunitySearchSingleItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-community-search-single-item',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\community-search-single-item\community-search-single-item.html"*/'<!--\n\n  Generated template for the CommunitySearchSingleItemPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n  <div [ngSwitch]="type">\n\n\n\n      <ion-list *ngSwitchCase="types[0]?.type">\n\n          <ion-item *ngFor="let item of Params.datasource"  (click)="ActivityDetail(item.activityId)"> \n\n              <ion-thumbnail item-start *ngIf="parsePicture(item.pictures)">\n\n                  <div class="background-image" [style.background-image]="\'url(\' + parsePicture(item.pictures) + \')\'"></div>\n\n                </ion-thumbnail>\n\n                <h2>\n\n                  {{ item.content }}\n\n                </h2>\n\n                <p>{{ item.place }}</p>\n\n          </ion-item>\n\n        </ion-list>\n\n      \n\n        <ion-list *ngSwitchCase="types[1]?.type">\n\n          <ion-item *ngFor="let item of Params.datasource" (click)="clubDetail(item.boardId)">\n\n              <ion-thumbnail item-start *ngIf="item.iconUrl">\n\n                  <div class="background-image" [style.background-image]="\'url(\' + item.iconUrl + \')\'"></div>\n\n                </ion-thumbnail>\n\n                <h2>\n\n                  {{ item.displayName }}\n\n                </h2>\n\n                <p>{{ item.description }}</p> \n\n          </ion-item>\n\n        </ion-list>\n\n      \n\n        <ion-list *ngSwitchCase="types[2]?.type">\n\n          <ion-item *ngFor="let item of Params.datasource" (click)="PostDetail(item.postId)"> \n\n              <ion-thumbnail item-start *ngIf="parsePicture(item.pictures)">\n\n                  <div class="background-image" [style.background-image]="\'url(\' + parsePicture(item.pictures) + \')\'"></div>\n\n                </ion-thumbnail>\n\n                <h2>\n\n                  {{ item.content }}\n\n                </h2>\n\n                <p>{{ item.place }}</p>\n\n          </ion-item>\n\n          \n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="types[3]?.type">\n\n          <ion-item *ngFor="let item of Params.datasource"  (click)="TopicDetail(item.topicId)">\n\n              {{item.displayName}}\n\n          </ion-item>\n\n        </ion-list> \n\n      \n\n  </div>\n\n\n\n  <ion-infinite-scroll *ngIf="Params.isPagination && hasMoreData" (ionInfinite)="doInfinite($event)">\n\n      <ion-infinite-scroll-content aria-posinset="button" loadingSpinner="bubbles">\n\n      </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\community-search-single-item\community-search-single-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_club_provider__["a" /* ClubProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["n" /* WidgetProvider */]])
    ], CommunitySearchSingleItemPage);
    return CommunitySearchSingleItemPage;
}());

//# sourceMappingURL=community-search-single-item.js.map

/***/ })

});
//# sourceMappingURL=81.js.map