webpackJsonp([45],{

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactChooserPageModule", function() { return ContactChooserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_chooser__ = __webpack_require__(1246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactChooserPageModule = (function () {
    function ContactChooserPageModule() {
    }
    ContactChooserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_chooser__["a" /* ContactChooserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_chooser__["a" /* ContactChooserPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], ContactChooserPageModule);
    return ContactChooserPageModule;
}());

//# sourceMappingURL=contact-chooser.module.js.map

/***/ }),

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageCommon; });
/**
 * page 公共类
 */
var pageCommon = (function () {
    function pageCommon(navCtrl, events) {
        this.navCtrl = navCtrl;
        this.events = events;
    }
    /**
     * 水平scroll寬度
     * @param width scroll 寬度
     * @param height scroll 高度
     */
    pageCommon.prototype.scrollWidth = function (width, height) {
        return {
            "width": width || (window.screen.availWidth - 5) + 'px',
            "height": (height || 44) + 'px',
        };
    };
    /**
     * 發佈下拉完成事件
     * @param _event 下拉事件
     */
    pageCommon.prototype.completeRefresh = function (_event) {
        _event && _event.complete();
    };
    /**
     * 發佈上拉完成事件
     * @param _event 上拉事件
     */
    pageCommon.prototype.completedoInfinite = function (_event) {
        _event && _event.complete();
    };
    return pageCommon;
}());

//# sourceMappingURL=page.base.js.map

/***/ }),

/***/ 1246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactChooserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_contact_provider__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_base__ = __webpack_require__(1133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sqlite_provider__ = __webpack_require__(90);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * Generated class for the ContactChooserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactChooserPage = (function (_super) {
    __extends(ContactChooserPage, _super);
    function ContactChooserPage(navCtrl, navParams, contactProvider, events, session, sqliteProvider, view) {
        var _this = _super.call(this, navCtrl) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.contactProvider = contactProvider;
        _this.events = events;
        _this.session = session;
        _this.sqliteProvider = sqliteProvider;
        _this.view = view;
        _this.isMulti = false;
        _this.title = '';
        _this.title = _this.navParams.data.title || 'friends';
        _this.Selected = [];
        _this.getMyFriends();
        return _this;
        /**
    this.contacts = []
    if(this.contactProvider.friends){
      this.contacts =  this.contactProvider.friends;
      for(let item of this.contacts){
        item.isCheck = false;
  
        if(item.isCheck){
          this.Selected.push(item)
        
        }
      }
    }else{
      this.contactProvider.MyFriends().subscribe(res=>{
        this.contacts =  res.result;
        for(let item of this.contacts){
          item.isCheck = false;
    
          if(item.isCheck){
            this.Selected.push(item)
          
          }
        }
      })
    }*/
    }
    ContactChooserPage.prototype.getMyFriends = function () {
        var _this = this;
        /**
        this.contactProvider.MyFriends().subscribe(res=>{
          this.friendTags = res.result;
          console.log(res.result);
          for(let item of this.friendTags){
            if(item.friendTagId == -1){
              item.iproudshow = false
            }else{
              item.iproudshow = true;
              if(!this.contacts){this.contacts=[];}
              this.contacts=this.contacts.concat(item.friends);
            }
          }
        });
        */
        this.sqliteProvider.queryContacts().subscribe(function (friends) {
            for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
                var friend = friends_1[_i];
                if (!_this.contacts) {
                    _this.contacts = [];
                }
                if (JSON.parse(friend.Extra).isBlack == false) {
                    _this.contacts.push(JSON.parse(friend.Extra));
                }
            }
        });
    };
    ContactChooserPage.prototype.scrollWidth = function () {
        return _super.prototype.scrollWidth.call(this);
    };
    ContactChooserPage.prototype.selectedFriend = function (contact) {
        //console.log(contact)
        var data = [];
        data.push(contact);
        this.close(data);
    };
    ContactChooserPage.prototype.SelectedOnContact = function (contact) {
        if (!contact.isCheck) {
            var index = this.Selected.findIndex(function (p) { return p.id == contact.id; });
            if (index > -1) {
                this.Selected.splice(index, 1);
            }
        }
        else {
            this.Selected.push(contact);
            this.scroll._scrollContent.nativeElement.scrollLeft = this.scroll._scrollContent.nativeElement.scrollWidth;
        }
    };
    ContactChooserPage.prototype.cancelSetectedFriend = function (contact) {
        contact.isCheck = false;
        var index = this.Selected.findIndex(function (p) { return p.id == contact.id; });
        if (index > -1) {
            this.Selected.splice(index, 1);
        }
    };
    ContactChooserPage.prototype.exchangeMulti = function () {
        this.isMulti = !this.isMulti;
    };
    ContactChooserPage.prototype.completedSetected = function () {
        this.close(this.Selected);
    };
    ContactChooserPage.prototype.close = function (data) {
        this.view.dismiss(data);
        this.events.publish("privacy:selected", data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('scroll'),
        __metadata("design:type", Object)
    ], ContactChooserPage.prototype, "scroll", void 0);
    ContactChooserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-contact-chooser',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\contact\contact-chooser\contact-chooser.html"*/'<!--\n\n  Generated template for the ContactChooserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-buttons start>\n\n          <button ion-button icon-only (click)="close()" *ngIf="!isMulti">\n\n              {{\'CONTACT_CHOOSER_CLOSE\'|translate}}\n\n            </button>\n\n          <button ion-button icon-only (click)="exchangeMulti()" *ngIf="isMulti">\n\n            {{\'CONTACT_CHOOSER_CANCEL\'|translate}}\n\n          </button>\n\n        </ion-buttons>\n\n    <ion-title *ngIf="!isMulti">{{\'CONTACT_CHOOSER_TITLE\'|translate}}</ion-title>\n\n    <ion-title *ngIf="isMulti">{{\'CONTACT_CHOOSER_TITLE_MULTI\'|translate}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="exchangeMulti()" *ngIf="!isMulti">\n\n        {{\'CONTACT_CHOOSER_MULTI\'|translate}}\n\n      </button>\n\n\n\n      <button ion-button icon-only color="primary" [disabled]="!(Selected && Selected.length > 0)" (click)="completedSetected()" *ngIf="isMulti">\n\n         {{\'CONTACT_CHOOSER_DONE\'|translate}}\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar> \n\n\n\n  <ion-toolbar >\n\n      <ion-scroll #scroll scrollX="true" [ngStyle]="scrollWidth()">\n\n          <div style="display: inline-flex;">\n\n            <div class="profile-container" *ngFor="let item of Selected">\n\n                <img [src]="item.avator" (click)="cancelSetectedFriend(item)">\n\n            </div>\n\n            <!-- <button ion-button small *ngFor="let item of Selected" (click)="cancelSetectedFriend(item)"  > \n\n                <img [src]="item.avator" (click)="cancelSetectedFriend(item)">\n\n              </button> -->\n\n          </div>\n\n        </ion-scroll>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content> \n\n  <ion-list *ngIf="!isMulti"> \n\n      <ion-item *ngFor="let contact of contacts" (click)="selectedFriend(contact)">\n\n        <ion-avatar item-start>\n\n          <img [src]="contact.avator">\n\n        </ion-avatar>\n\n        <ion-label>{{contact.name}}</ion-label>\n\n      </ion-item> \n\n  </ion-list>\n\n \n\n\n\n  <ion-list *ngIf="isMulti"> \n\n    <ion-item *ngFor="let contact of contacts">\n\n      <ion-avatar item-start>\n\n        <img [src]="contact.avator">\n\n      </ion-avatar>\n\n      <ion-label>{{contact.name}}</ion-label>\n\n      <ion-checkbox [(ngModel)]="contact.isCheck" (ngModelChange)="SelectedOnContact(contact)"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n '/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\contact\contact-chooser\contact-chooser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_contact_provider__["a" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_5__providers_sqlite_provider__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* ViewController */]])
    ], ContactChooserPage);
    return ContactChooserPage;
}(__WEBPACK_IMPORTED_MODULE_4__page_base__["a" /* pageCommon */]));

//# sourceMappingURL=contact-chooser.js.map

/***/ })

});
//# sourceMappingURL=45.js.map