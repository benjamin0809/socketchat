webpackJsonp([114],{

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderBoardPageModule", function() { return LeaderBoardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leader_board__ = __webpack_require__(1186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeaderBoardPageModule = (function () {
    function LeaderBoardPageModule() {
    }
    LeaderBoardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__leader_board__["a" /* LeaderBoardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__leader_board__["a" /* LeaderBoardPage */]),
            ],
        })
    ], LeaderBoardPageModule);
    return LeaderBoardPageModule;
}());

//# sourceMappingURL=leader-board.module.js.map

/***/ }),

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderBoardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the LeaderBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaderBoardPage = (function () {
    function LeaderBoardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rankData = [];
    }
    LeaderBoardPage.prototype.ionViewDidLoad = function () {
        this.rankData = [{
                rank: 1,
                avatar: 'assets/img/avatar.png',
                userName: 'Benjamin',
                level: 'Lv8',
                score: '705'
            }, {
                rank: 2,
                avatar: 'assets/img/avatar.png',
                userName: 'Jack',
                level: 'Lv7',
                score: '655'
            }, {
                rank: 3,
                avatar: 'assets/img/avatar.png',
                userName: 'ROse',
                level: 'Lv6',
                score: '602'
            }, {
                rank: 4,
                avatar: 'assets/img/avatar.png',
                userName: 'Richard',
                level: 'Lv5',
                score: '589'
            }, {
                rank: 5,
                avatar: 'assets/img/avatar.png',
                userName: 'Robinson',
                level: 'Lv5',
                score: '562'
            }, {
                rank: 6,
                avatar: 'assets/img/avatar.png',
                userName: 'Ganason',
                level: 'Lv4',
                score: '499'
            }, {
                rank: 7,
                avatar: 'assets/img/avatar.png',
                userName: 'Rogess',
                level: 'Lv4',
                score: '499'
            }, {
                rank: 8,
                avatar: 'assets/img/avatar.png',
                userName: 'Tayor Swift ',
                level: 'Lv4',
                score: '499'
            }, {
                rank: 9,
                avatar: 'assets/img/avatar.png',
                userName: 'Blanni',
                level: 'Lv4',
                score: '499'
            }];
    };
    LeaderBoardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-leader-board',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\achievement\leader-board\leader-board.html"*/'<!--\n\n  Generated template for the LeaderBoardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>leaderBoard</ion-title>\n\n\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n    <div class="rank-leader-container">\n\n      <div class="triangle-container">\n\n        <div class="scondary"> \n\n          <img class="rank-logo" src="assets/img/rank/thirdplace.png">\n\n          <img class="rank-avatar" [src]="rankData[2]?.avatar">\n\n          <span class="name">{{rankData[2]?.userName}}</span>\n\n          <span>{{rankData[2]?.score}}</span>\n\n          <span>员宝贝</span>\n\n        </div>\n\n\n\n        <div class="triangle left-triangle"></div>\n\n      </div>\n\n\n\n      <div class="champion-container">\n\n        <div class="champion">\n\n          <img class="rank-logo" src="assets/img/rank/champion.png">\n\n          <img class="champion-avatar" [src]="rankData[0]?.avatar">\n\n          <span class="name">{{rankData[0]?.userName}}</span>\n\n          <span>{{rankData[0]?.score}}</span>\n\n          <span>员宝贝</span>\n\n        </div>\n\n\n\n      </div>\n\n\n\n      <div class="triangle-container">\n\n        <div class="triangle right-triangle"></div>\n\n        <div class="scondary">\n\n          <img class="rank-logo" src="assets/img/rank/secondplace.png">\n\n          <img class="rank-avatar" [src]="rankData[1]?.avatar">\n\n          <span class="name">{{rankData[1]?.userName}}</span>\n\n          <span>{{rankData[1]?.score}}</span>\n\n          <span>员宝贝</span>\n\n        </div> \n\n      </div>\n\n\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content  >\n\n    <ion-grid  >\n\n      \n\n                \n\n        <div class="col-data" *ngFor="let item of rankData,let index = index">\n\n            <ion-row *ngIf="index > 2" align-items-center>\n\n                <ion-col col-1 text-center>\n\n                    <span >{{item.rank}}</span>\n\n                </ion-col>\n\n                 <ion-col col-3>\n\n                    <img class="list-avatar" [src]="item.avatar" >\n\n                 </ion-col>\n\n              \n\n                 <ion-col col-4>\n\n                   <span class="">{{item.userName}}</span>\n\n                 </ion-col>\n\n                 \n\n                 <ion-col col-2>\n\n                    <span class="">{{item.level}}</span>\n\n                 </ion-col>\n\n                 \n\n                 <ion-col col-2>\n\n                    <span class="">{{item.score}}</span>\n\n                 </ion-col>\n\n              </ion-row>\n\n        </div>\n\n        \n\n      </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\achievement\leader-board\leader-board.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], LeaderBoardPage);
    return LeaderBoardPage;
}());

//# sourceMappingURL=leader-board.js.map

/***/ })

});
//# sourceMappingURL=114.js.map