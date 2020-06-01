webpackJsonp([73],{

/***/ 1066:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicChooserPageModule", function() { return TopicChooserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_chooser__ = __webpack_require__(1241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TopicChooserPageModule = (function () {
    function TopicChooserPageModule() {
    }
    TopicChooserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__topic_chooser__["a" /* TopicChooserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__topic_chooser__["a" /* TopicChooserPage */]),
            ],
        })
    ], TopicChooserPageModule);
    return TopicChooserPageModule;
}());

//# sourceMappingURL=topic-chooser.module.js.map

/***/ }),

/***/ 1241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicChooserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_blog_provider__ = __webpack_require__(214);
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
 * Generated class for the TopicChooserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicChooserPage = (function () {
    function TopicChooserPage(navCtrl, navParams, blogProvider, viewCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogProvider = blogProvider;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.allTopic = this.initTopics();
    }
    TopicChooserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TopicChooserPage');
    };
    TopicChooserPage.prototype.initTopics = function () {
        return this.blogProvider.initTopics().sort(function (a, b) {
            return b.discussCount - a.discussCount;
        });
    };
    TopicChooserPage.prototype.topicSelected = function (topic) {
        this.viewCtrl.dismiss();
        this.events.publish('topic:choosen', topic);
    };
    TopicChooserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-topic-chooser',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\topic-chooser\topic-chooser.html"*/'<!--\n\n  Generated template for the TopicChooserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>topic-chooser</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-list>      \n\n        <p class="hint" text-center>热议话题 </p>       \n\n        <ion-item *ngFor=\'let topic of allTopic\' (click)="topicSelected(topic)">\n\n            <ion-thumbnail item-start><img [src]="topic.pictureUrl"></ion-thumbnail>\n\n            <h2>{{topic.title}}</h2>\n\n            <p>{{topic.description}}</p>\n\n            <p>{{topic.discussCount}}讨论&nbsp;&nbsp;{{topic.readCount}}阅读</p>\n\n        </ion-item>\n\n    </ion-list> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\topic-chooser\topic-chooser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_blog_provider__["a" /* BlogProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Events */]])
    ], TopicChooserPage);
    return TopicChooserPage;
}());

//# sourceMappingURL=topic-chooser.js.map

/***/ })

});
//# sourceMappingURL=73.js.map