webpackJsonp([74],{

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionPageModule", function() { return QuestionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(1240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuestionPageModule = (function () {
    function QuestionPageModule() {
    }
    QuestionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__question__["a" /* QuestionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* QuestionPage */]),
            ],
        })
    ], QuestionPageModule);
    return QuestionPageModule;
}());

//# sourceMappingURL=question.module.js.map

/***/ }),

/***/ 1240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(70);
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
 * Generated class for the QuestionGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionPage = (function () {
    function QuestionPage(navCtrl, navParams, modalCtrl, blogProvider, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.blogProvider = blogProvider;
        this.events = events;
        this.showModal = false;
        this.question = this.navParams.data;
        this.questionGroup = this.question.questionGroup;
    }
    QuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionGroupPage');
    };
    QuestionPage.prototype.hideAnswers = function (item) {
        item.isShowAnswers = false;
    };
    QuestionPage.prototype.showAnswers = function (item) {
        item.isShowAnswers = true;
    };
    QuestionPage.prototype.openModal = function (item) {
        var _this = this;
        if (this.modal && this.showModal) {
            this.modal.dismiss();
        }
        else {
            this.modal = this.modalCtrl.create('AnswerAddPage', { item: item }, {
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
    QuestionPage.prototype.addQuestion = function () {
        this.navCtrl.push("QuestionAddPage");
    };
    QuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-question',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\question\question.html"*/'\n\n<ion-header>\n\n    <ion-navbar color="gray">\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="addQuestion()">\n\n              <ion-icon  name="create-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n    <ion-item no-lines class=\'header\'>\n\n        <ion-thumbnail item-start><img [src]="question.pictureUrl"></ion-thumbnail>\n\n        <h2>{{question.type}}</h2>\n\n        <p>{{question.questionCount}}问题&nbsp;&nbsp;{{question.answerCount}}回答</p>\n\n    </ion-item> \n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n          <ion-grid *ngFor="let item of questionGroup" class="question">\n\n                  <ion-item no-lines>\n\n                      <ion-avatar item-start>\n\n                          <img [src]="item.author.pictureUrl">\n\n                      </ion-avatar>\n\n                      <h6>{{item.author.nickName}}</h6>\n\n                      <p>{{item.creTime}}</p>\n\n                      <!--\n\n                      <ion-note item-end *ngIf="!isCurrentUser(item)">\n\n                          <button *ngIf="!isConcern(item)" class="button-concern" ion-button round small outline (click)="doConcern(item)">+关注</button>\n\n                          <button *ngIf="isConcern(item)" class="button-concern" ion-button round small outline (click)="quitConcern(item)" >取消关注</button>\n\n                      </ion-note>-->\n\n                  </ion-item>\n\n                  <ion-row> \n\n                      <ion-col col-12>\n\n                          <span>{{item.question}}</span>\n\n                      </ion-col>\n\n                  </ion-row> \n\n                  <ion-row >\n\n                      <ion-col col-4  *ngFor="let img of item.imgs"><img [src]="img.pictureUrl" ></ion-col>\n\n                  </ion-row> \n\n                  <ion-row>\n\n                    <h6>{{item.answerGroup.length}}回答</h6>\n\n                    <ion-icon *ngIf="item.isShowAnswers" name="arrow-dropup" (click)="hideAnswers(item)"></ion-icon>\n\n                    <ion-icon *ngIf="!item.isShowAnswers" name="arrow-dropdown" (click)="showAnswers(item)"></ion-icon>\n\n                  </ion-row> \n\n                  <div *ngIf="item.isShowAnswers">\n\n                  <div *ngFor="let answer of item.answerGroup">\n\n                      <ion-item no-lines>\n\n                          <ion-avatar item-start>\n\n                              <img [src]="answer.author.pictureUrl">\n\n                          </ion-avatar>\n\n                          <h6>{{answer.author.nickName}}</h6>\n\n                          <p>{{answer.content}}</p>\n\n                      </ion-item>\n\n                  </div>\n\n                </div>\n\n\n\n                  <div class="divider"></div>            \n\n              </ion-grid>\n\n              \n\n  \n\n      \n\n  </ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\question\question.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], QuestionPage);
    return QuestionPage;
}());

//# sourceMappingURL=question.js.map

/***/ })

});
//# sourceMappingURL=74.js.map