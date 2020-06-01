webpackJsonp([42],{

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogAddPageModule", function() { return BlogAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__ = __webpack_require__(1138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_add__ = __webpack_require__(1216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BlogAddPageModule = (function () {
    function BlogAddPageModule() {
    }
    BlogAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__blog_add__["a" /* BlogAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__blog_add__["a" /* BlogAddPage */]),
                __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__["a" /* DirectivesModule */],
            ],
        })
    ], BlogAddPageModule);
    return BlogAddPageModule;
}());

//# sourceMappingURL=blog-add.module.js.map

/***/ }),

/***/ 1138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autosize_autosize__ = __webpack_require__(1139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scroll_focus_scroll_focus__ = __webpack_require__(1140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__autosize_autosize__["a" /* AutosizeDirective */],
                __WEBPACK_IMPORTED_MODULE_2__scroll_focus_scroll_focus__["a" /* ScrollFocusDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__autosize_autosize__["a" /* AutosizeDirective */],
                __WEBPACK_IMPORTED_MODULE_2__scroll_focus_scroll_focus__["a" /* ScrollFocusDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosizeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the AutosizeDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var AutosizeDirective = (function () {
    function AutosizeDirective(element) {
        this.element = element;
    }
    AutosizeDirective.prototype.onInput = function (textArea) {
        var textArea1 = textArea;
        this.adjust();
    };
    AutosizeDirective.prototype.onChange = function (textArea) {
        var textArea1 = textArea;
        this.adjust();
    };
    AutosizeDirective.prototype.onBlur = function (textArea) {
        var _this = this;
        var textArea1 = textArea;
        setTimeout(function () {
            _this.adjust();
        }, 100);
    };
    AutosizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(0, true); }, 0);
    };
    AutosizeDirective.prototype.adjust = function (textAreaHeight, isInit) {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        if (isInit) {
            textArea.rows = 1;
        }
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        if (textAreaHeight) {
            textArea.style.height = textAreaHeight + 'px';
        }
        else if (this.maxHeight && this.maxHeight < textArea.scrollHeight) {
            textArea.style.height = this.maxHeight + 'px';
            textArea.style.overflow = 'scroll';
        }
        else {
            textArea.style.height = textArea.scrollHeight + 'px';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AutosizeDirective.prototype, "maxHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], AutosizeDirective.prototype, "onInput", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('propertychange', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], AutosizeDirective.prototype, "onChange", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('ionBlur', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], AutosizeDirective.prototype, "onBlur", null);
    AutosizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[autosize]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AutosizeDirective);
    return AutosizeDirective;
}());

//# sourceMappingURL=autosize.js.map

/***/ }),

/***/ 1140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollFocusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ScrollFocusDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var ScrollFocusDirective = (function () {
    function ScrollFocusDirective(element, session) {
        this.element = element;
        this.session = session;
    }
    ScrollFocusDirective.prototype.onTouchstart = function (event) {
        window['scrollingX'] = false;
    };
    ScrollFocusDirective.prototype.onTouchmove = function (event) {
        window['scrollingX'] = true;
    };
    ScrollFocusDirective.prototype.onTouchend = function (event) {
        window['scrollingX'] = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('touchstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollFocusDirective.prototype, "onTouchstart", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('touchmove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollFocusDirective.prototype, "onTouchmove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('touchend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollFocusDirective.prototype, "onTouchend", null);
    ScrollFocusDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
            selector: '[scroll-focus]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__services_session__["a" /* Session */]])
    ], ScrollFocusDirective);
    return ScrollFocusDirective;
}());

//# sourceMappingURL=scroll-focus.js.map

/***/ }),

/***/ 1216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_native_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BlogAddPage = (function () {
    function BlogAddPage(navCtrl, navParams, session, formBuilder, events, keyboard, nativeService, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.session = session;
        this.formBuilder = formBuilder;
        this.events = events;
        this.keyboard = keyboard;
        this.nativeService = nativeService;
        this.viewCtrl = viewCtrl;
        this.isLogin = false;
        this.isEmployee = false;
        this.choosenImages = [];
        this.location = "你在哪里";
        this.privacy = "公开";
        if (this.session.user != null) {
            this.currentUser = this.session.user;
            this.isLogin = true;
        }
        if (this.currentUser && this.currentUser.employeeInfo) {
            this.currentUser.pictureUrl = this.currentUser.pictureUrl || "assets/img/avatar-round.png";
        }
        this.form = formBuilder.group({
            inputcontent: [this.navParams.data.inputContent || '', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
        //this.topic=this.navParams.data||false;
        this.events.subscribe('at-someone:choosen', function (data) {
            if (!_this.form.value.inputcontent) {
                _this.form.value.inputcontent = '';
            }
            _this.inputText = _this.form.value.inputcontent + "@" + data.realname;
        });
        this.events.subscribe('topic:choosen', function (data) {
            if (!_this.form.value.inputcontent) {
                _this.form.value.inputcontent = '';
            }
            _this.inputText = data.title + _this.form.value.inputcontent;
        });
        this.keyboard.onKeyboardShow().subscribe(function (e) {
            _this.setFooterPosition(e.keyboardHeight);
            _this.ContentResize();
        });
        this.events.subscribe("location:choosed", function (data) {
            _this.location = data.name;
        });
        this.events.subscribe("privacy:done", function (data) {
            _this.privacy = data;
        });
    }
    BlogAddPage.prototype.ionViewDidLoad = function () {
    };
    BlogAddPage.prototype.spliceImages = function (index) {
        this.choosenImages.splice(index, 1);
    };
    BlogAddPage.prototype.setFooterPosition = function (paddingBottom) {
        this.footer.nativeElement.style.paddingBottom = paddingBottom + 'px';
    };
    BlogAddPage.prototype.ContentResize = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.resize();
            setTimeout(function () {
                _this.scrollToBottom();
            }, 50);
        }, 50);
    };
    BlogAddPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 10);
    };
    BlogAddPage.prototype.publishBlog = function () {
        this.form.controls['inputcontent'];
        if (this.location = "你在哪里") {
            this.location = '';
        }
        var blog = {
            id: 1,
            author: {
                userId: this.currentUser.userId,
                userName: this.currentUser.employeeName,
                nickName: this.currentUser.nickName,
                hasPassword: this.currentUser.hasPassword,
                isEmployee: this.currentUser.isEmployee,
                pictureUrl: this.currentUser.pictureUrl,
                fansCount: 0
            },
            site: this.currentUser.employeeInfo.site,
            content: this.form.value.inputcontent,
            imgs: this.choosenImages,
            location: this.location,
            redirectUrl: 'string',
            publishTime: __WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss'),
            readCount: 0,
            zanCount: 0,
            commentCount: 0,
            shareCount: 0,
        };
        this.events.publish('blog:add', blog);
        this.viewCtrl.dismiss();
    };
    BlogAddPage.prototype.openPhoneGallery = function () {
        var _this = this;
        if (this.nativeService.isMobile()) {
            this.nativeService.getFullPictureByPhotoLibrary({
                destinationType: 0 //期望返回的图片格式,0图片字符串
            }).subscribe(function (img) {
                if (!_this.choosenImages) {
                    _this.choosenImages = [];
                }
                _this.choosenImages.push({ pictureUrl: img });
            }, function (err) {
                _this.nativeService.showToast(err);
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    BlogAddPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    BlogAddPage.prototype.processWebImage = function (event) {
        var _this = this;
        var filesList = event.target.files;
        for (var _i = 0, filesList_1 = filesList; _i < filesList_1.length; _i++) {
            var file = filesList_1[_i];
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                var imageData = readerEvent.target.result;
                if (!_this.choosenImages) {
                    _this.choosenImages = [];
                }
                _this.choosenImages.push({ pictureUrl: imageData });
            };
            reader.readAsDataURL(file);
        }
    };
    BlogAddPage.prototype.openCamera = function () {
        var _this = this;
        if (this.nativeService.isMobile()) {
            this.nativeService.getFullPictureByCamera({
                destinationType: 0 //期望返回的图片格式,1图片路径,0 base64編碼
            }).subscribe(function (img) {
                if (!_this.choosenImages) {
                    _this.choosenImages = [];
                }
                _this.choosenImages.push({ pictureUrl: img });
            }, function (err) {
                _this.nativeService.showToast(err);
            });
        }
        else {
            if (!this.choosenImages) {
                this.choosenImages = [];
            }
            this.choosenImages.push({ pictureUrl: 'assets/img/puppy-2.jpg' });
        }
    };
    BlogAddPage.prototype.openFrindList = function () {
        //let time=Utility.dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss');
        this.navCtrl.push('AtSomeonePage');
    };
    BlogAddPage.prototype.openTopicPage = function () {
        this.navCtrl.push('TopicChooserPage');
    };
    BlogAddPage.prototype.openQuestionPage = function () {
        this.navCtrl.push('QuestionAddPage');
    };
    BlogAddPage.prototype.setLocation = function () {
        this.navCtrl.push('LocationChooserPage');
    };
    BlogAddPage.prototype.setPrivacy = function () {
        this.navCtrl.push('PrivacySettingPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('footer'),
        __metadata("design:type", Object)
    ], BlogAddPage.prototype, "footer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], BlogAddPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], BlogAddPage.prototype, "fileInput", void 0);
    BlogAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-blog-add',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\blog-add\blog-add.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-buttons start>\n\n          <button ion-button icon-only (click)="goback()">\n\n            取消\n\n          </button>\n\n      </ion-buttons>\n\n      <ion-title>发微博</ion-title>\n\n      <ion-buttons end>\n\n          <button ion-button block color="dark" (click)="publishBlog()">\n\n            发布\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <form padding [formGroup]="form">\n\n    <ion-textarea type="text" autosize  placeholder="发布动态，让更多人看到你的精彩..." formControlName="inputcontent" [(ngModel)]="inputText">   \n\n    </ion-textarea>\n\n    <br/>\n\n    <ion-row  >\n\n      <ion-col col-4 *ngFor="let img of choosenImages,let indx = index">\n\n          <div class="preview-image" [style.background-image]="\'url(\'+ img.pictureUrl +\')\'" > \n\n            <img class="subtract" src="assets/img/subtract.png" (click)="spliceImages(indx)">  </div> \n\n        <!-- <img [src]="img.pictureUrl"> -->\n\n      </ion-col>\n\n    </ion-row> \n\n  </form>\n\n</ion-content>\n\n\n\n\n\n\n\n<ion-footer #footer class="footer-container"> \n\n  <ion-toolbar>\n\n      <input type="file" #fileInput multiple="multiple" style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n\n      <ion-row class="option">\n\n          <ion-col col-9 (click)="setLocation()"><ion-icon name="pin-outline"></ion-icon>&nbsp;&nbsp;<span>{{location}}</span></ion-col>\n\n          <ion-col (click)="setPrivacy()"><ion-icon name="globe-outline" ></ion-icon>&nbsp;&nbsp;<span>{{privacy}}</span></ion-col>\n\n        </ion-row>\n\n        <button ion-button icon-only (click)="openPhoneGallery()"><ion-icon name="photos-outline"></ion-icon></button>\n\n        <button ion-button icon-only (click)="openCamera()"><ion-icon name="camera-outline"></ion-icon></button>\n\n        <button ion-button icon-only (click)="openFrindList()"><ion-icon name="at-outline"></ion-icon></button>\n\n        <button ion-button icon-only (click)="openTopicPage()"><ion-icon name="grid-outline"></ion-icon></button>\n\n        <button ion-button icon-only (click)="openQuestionPage()"><ion-icon name="help-circle-outline"></ion-icon></button>\n\n  </ion-toolbar> \n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\blog-add\blog-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_6__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */]])
    ], BlogAddPage);
    return BlogAddPage;
}());

//# sourceMappingURL=blog-add.js.map

/***/ })

});
//# sourceMappingURL=42.js.map