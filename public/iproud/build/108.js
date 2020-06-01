webpackJsonp([108],{

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessagePageModule", function() { return SendMessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__send_message__ = __webpack_require__(1196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SendMessagePageModule = (function () {
    function SendMessagePageModule() {
    }
    SendMessagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__send_message__["a" /* SendMessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__send_message__["a" /* SendMessagePage */]),
            ],
        })
    ], SendMessagePageModule);
    return SendMessagePageModule;
}());

//# sourceMappingURL=send-message.module.js.map

/***/ }),

/***/ 1196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_club_provider__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_provider__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the SendMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendMessagePage = (function () {
    function SendMessagePage(navCtrl, navParams, session, events, sqliteProvider, alertCtrl, nativeService, clubProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.session = session;
        this.events = events;
        this.sqliteProvider = sqliteProvider;
        this.alertCtrl = alertCtrl;
        this.nativeService = nativeService;
        this.clubProvider = clubProvider;
        this.message = {
            widgetId: 0,
            messageId: 0,
            widgetName: 'iProud',
            widgetIcon: '',
            formatType: 'image',
            title: '',
            abstract: '',
            imageUrl: '',
            redirectUrl: '',
            groudId: 0,
            senderId: '',
            senderName: '',
            senderAvator: '',
            fromType: '',
        };
        this.formatTypes = [];
        this.fromTypes = [];
        this.extraFromTypes = [];
        this.widgetList = [];
        this.boardList = [];
        this.Friends = [];
    }
    SendMessagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.formatTypes = ['widget', 'text', 'image', 'headerimage', 'titleinimage', 'richtextimage',];
        this.extraFromTypes = ['Video', 'Board', 'Club'];
        this.fromTypes = ['Chat', 'AdminConsole'];
        this.fromTypes.push.apply(this.fromTypes, this.extraFromTypes);
        this.message.messageId = +new Date();
        this.widgetList.push({
            widgetId: 0, widgetName: 'iProud',
            widgetIcon: ''
        });
        this.session.widget.forEach(function (v) {
            v.widgets.forEach(function (element) {
                var widget = {
                    widgetId: element.id,
                    widgetName: element.widgetName,
                    widgetIcon: element.iconUrl
                };
                _this.widgetList.push(widget);
            });
        });
        this.sqliteProvider.queryContacts().subscribe(function (friends) {
            friends.forEach(function (friend) {
                var extra = JSON.parse(friend.Extra);
                var friendItem = {
                    senderId: extra.id,
                    senderName: extra.aliasName || extra.name,
                    senderAvator: extra.avator
                };
                _this.Friends.push(friendItem);
            });
        });
        this.extraFromTypes.forEach(function (channel) {
            _this.clubProvider.getMyClubs(_this.session.user.employeeInfo.siteCode, channel).subscribe(function (res) {
                res.result.forEach(function (element) {
                    var widget = {
                        widgetId: element.boardId,
                        widgetName: element.displayName,
                        widgetIcon: element.iconUrl,
                        type: channel
                    };
                    _this.boardList.push(widget);
                });
            }, function (err) {
            }, function () {
            });
        });
    };
    SendMessagePage.prototype.filterBoard = function (type) {
        if (!type) {
            return [];
        }
        var array = this.boardList.filter(function (item) { return item.type === type; });
        return array;
    };
    SendMessagePage.prototype.selectWidget = function (widgetid) {
        var _this = this;
        this.widgetList.forEach(function (element) {
            if (element.widgetId == widgetid) {
                _this.message.senderId = element.widgetId;
                _this.message.widgetId = element.widgetId;
                _this.message.senderName = element.widgetName;
                _this.message.senderAvator = element.widgetIcon;
                _this.message.widgetName = element.widgetName;
                _this.message.widgetIcon = element.widgetIcon;
            }
        });
    };
    SendMessagePage.prototype.selectBoard = function (widgetid) {
        var _this = this;
        this.boardList.forEach(function (element) {
            if (element.widgetId == widgetid) {
                _this.message.senderId = element.widgetId;
                _this.message.widgetId = element.widgetId;
                _this.message.senderName = element.widgetName;
                _this.message.senderAvator = element.widgetIcon;
                _this.message.widgetName = element.widgetName;
                _this.message.widgetIcon = element.widgetIcon;
            }
        });
    };
    SendMessagePage.prototype.selectFriend = function (senderId) {
        var _this = this;
        this.Friends.forEach(function (element) {
            if (element.senderId == senderId) {
                _this.message.senderId = element.senderId;
                _this.message.widgetId = element.senderId;
                _this.message.senderName = element.senderName;
                _this.message.senderAvator = element.senderAvator;
                _this.message.widgetName = element.senderName;
                _this.message.widgetIcon = element.senderAvator;
            }
        });
    };
    SendMessagePage.prototype.processWebImage = function (event) {
        var _this = this;
        var filesList = event.target.files;
        for (var _i = 0, filesList_1 = filesList; _i < filesList_1.length; _i++) {
            var file = filesList_1[_i];
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                var imageData = readerEvent.target.result;
                _this.message.imageUrl = imageData;
            };
            reader.readAsDataURL(file);
        }
    };
    SendMessagePage.prototype.openPhoneGallery = function () {
        var _this = this;
        if (this.nativeService.isMobile()) {
            this.nativeService.getFullPictureByPhotoLibrary({
                destinationType: 0 //期望返回的图片格式,0图片字符串
            }).subscribe(function (img) {
                _this.message.imageUrl = img;
            }, function (err) {
                _this.nativeService.showToast(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    SendMessagePage.prototype.send = function () {
        var _this = this;
        // console.log(this.message)
        this.events.publish('iProud.receiveNotification', this.message);
        var alert = this.alertCtrl.create();
        alert.setSubTitle('发送完成');
        alert.addButton({
            text: 'Stay',
            handler: function (data) {
                _this.message.messageId = +new Date();
            }
        });
        alert.addButton({
            text: 'Back to Tabs',
            handler: function (data) {
                _this.popToMylistPage();
            }
        });
        alert.present();
    };
    /**
      * 返回到好友列表
      */
    SendMessagePage.prototype.popToMylistPage = function () {
        for (var i = 0; i < this.navCtrl.length(); i++) {
            var view = this.navCtrl.getByIndex(i);
            if (view.name == 'MyListPage' || view.id == 'MyListPage') {
                this.navCtrl.popTo(view);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], SendMessagePage.prototype, "fileInput", void 0);
    SendMessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-send-message',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\beta\send-message\send-message.html"*/'<!--\n\n  Generated template for the SendMessagePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>send-message</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary">fromType</ion-label>\n\n      <ion-select [(ngModel)]="message.fromType"  >\n\n        <ion-option *ngFor="let value of fromTypes" [value]="value">{{value}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <div *ngIf="message.fromType == \'AdminConsole\'">\n\n        <ion-item >\n\n            <ion-label color="primary">Widget</ion-label>\n\n            <ion-select [(ngModel)]="message.widgetId" (ngModelChange)="selectWidget(message.widgetId)">\n\n              <ion-option *ngFor="let item of widgetList" [value]="item.widgetId">{{item.widgetName}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label color="primary" stacked>WidgetName</ion-label>\n\n            <ion-input type="text" [(ngModel)]="message.widgetName"></ion-input>\n\n          </ion-item>\n\n      \n\n          <ion-item>\n\n            <ion-avatar item-end>\n\n              <img [src]="message.widgetIcon " *ngIf="message.widgetIcon">\n\n            </ion-avatar>\n\n            <ion-label color="primary" stacked>widgetIcon</ion-label>\n\n            <ion-input type="text" [(ngModel)]="message.widgetIcon"></ion-input>\n\n          </ion-item>\n\n    </div>\n\n\n\n    <div *ngFor="let channel of extraFromTypes">\n\n      <div *ngIf="message.fromType == channel">\n\n        <ion-item >\n\n            <ion-label color="primary">{{channel}}</ion-label>\n\n            <ion-select [(ngModel)]="message.widgetId" (ngModelChange)="selectBoard(message.widgetId)">\n\n              <ion-option *ngFor="let item of filterBoard(channel)" [value]="item.widgetId">{{item.widgetName}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label color="primary" stacked>WidgetName</ion-label>\n\n            <ion-input type="text" [(ngModel)]="message.widgetName"></ion-input>\n\n          </ion-item>\n\n      \n\n          <ion-item>\n\n            <ion-avatar item-end>\n\n              <img [src]="message.widgetIcon " *ngIf="message.widgetIcon">\n\n            </ion-avatar>\n\n            <ion-label color="primary" stacked>widgetIcon</ion-label>\n\n            <ion-input type="text" [(ngModel)]="message.widgetIcon"></ion-input>\n\n          </ion-item>\n\n    </div>\n\n    </div> \n\n    <div *ngIf="message.fromType == \'Chat\'">\n\n        <ion-item >\n\n            <ion-label color="primary">sender</ion-label>\n\n            <ion-select [(ngModel)]="message.senderId" (ngModelChange)="selectFriend(message.senderId)">\n\n              <ion-option *ngFor="let item of Friends" [value]="item.senderId">{{item.senderName}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label color="primary" stacked>senderName</ion-label>\n\n            <ion-input type="text" [(ngModel)]="message.senderName"></ion-input>\n\n          </ion-item>\n\n      \n\n          <ion-item>\n\n            <ion-avatar item-end>\n\n              <img [src]="message.senderAvator " *ngIf="message.senderAvator">\n\n            </ion-avatar>\n\n            <ion-label color="primary" stacked>senderAvator</ion-label>\n\n            <ion-input type="text" [(ngModel)]="message.senderAvator"></ion-input>\n\n          </ion-item>\n\n    </div>\n\n   \n\n\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>messageId</ion-label>\n\n      <ion-input type="text" [(ngModel)]="message.messageId"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary">FormatType</ion-label>\n\n      <ion-select [(ngModel)]="message.formatType">\n\n        <ion-option *ngFor="let value of formatTypes" [value]="value">{{value}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item  (click)="openPhoneGallery()">\n\n      <input type="file" #fileInput multiple="multiple" style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n      <ion-label (click)="openPhoneGallery()" color="primary" stacked>imageUrl <ion-icon name="add-circle" ></ion-icon></ion-label>\n\n \n\n      <ion-input type="text" [(ngModel)]="message.imageUrl"></ion-input>\n\n      \n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>redirectUrl</ion-label>\n\n      <ion-input type="text" [(ngModel)]="message.redirectUrl"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>title</ion-label>\n\n      <ion-input type="text" [(ngModel)]="message.title"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label color="primary" stacked>abstract</ion-label>\n\n      <ion-input type="text" [(ngModel)]="message.abstract"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block (click)="send()">test</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\beta\send-message\send-message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_provider__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_club_provider__["a" /* ClubProvider */]])
    ], SendMessagePage);
    return SendMessagePage;
}());

//# sourceMappingURL=send-message.js.map

/***/ })

});
//# sourceMappingURL=108.js.map