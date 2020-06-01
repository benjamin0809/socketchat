webpackJsonp([2],{

/***/ 1087:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageChatPageModule", function() { return MessageChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__ = __webpack_require__(1138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_chat__ = __webpack_require__(1262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(1123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MessageChatPageModule = (function () {
    function MessageChatPageModule() {
    }
    MessageChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__message_chat__["a" /* MessageChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__message_chat__["a" /* MessageChatPage */]),
                __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], MessageChatPageModule);
    return MessageChatPageModule;
}());

//# sourceMappingURL=message-chat.module.js.map

/***/ }),

/***/ 1120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlphaSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alpha_cell__ = __webpack_require__(1121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlphaSectionComponent = (function () {
    function AlphaSectionComponent(elementRef) {
        this.elementRef = elementRef;
        this._current = false;
    }
    AlphaSectionComponent.prototype.getElementRef = function () {
        return this.elementRef;
    };
    AlphaSectionComponent.prototype.ngAfterViewChecked = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AlphaSectionComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__alpha_cell__["a" /* AlphaCellComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], AlphaSectionComponent.prototype, "_listOfAlphaCell", void 0);
    AlphaSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ion-alpha-section',
            template: "\n      <div class=\"alpha-section\" [class.alpha-section-current]=\"_current\">\n            <!-- group-->\n            <div class=\"alpha-section-index\" >\n              {{index}}\n            </div>\n\n            <!--\u5206\u7EC4\u4E0B\u7684\u8BE6\u7EC6\u5185\u5BB9-->\n            <div class=\"alpha-section-main\">\n              <ng-content>\n\n              </ng-content>\n            </div>\n        </div>\n    ",
            styles: ["\n    .alpha-section-index{\n      margin: 0;\n      padding: 2px 10px 2px 10px; \n    }\n\n    .alpha-section-main{ \n    }\n\n    .alpha-section-current .alpha-section-index{\n        position: sticky;\n        position: -webkit-sticky;\n        top: 0px;\n        left: 0px;\n        width: 100%;\n        z-index: 3;\n        transform: translateZ(0px);\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AlphaSectionComponent);
    return AlphaSectionComponent;
}());

//# sourceMappingURL=alpha-section.js.map

/***/ }),

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlphaCellComponent; });
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

var AlphaCellComponent = (function () {
    function AlphaCellComponent() {
    }
    AlphaCellComponent.prototype.ngOnInit = function () { };
    AlphaCellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ion-alpha-cell',
            template: "\n      <div class=\"alpha-cell\">\n        <div class=\"alpha-cell-item\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    ",
            styles: ["\n      .alpha-cell{ \n        padding-left:10px\n      }\n\n      .alpha-cell-item{\n        box-sizing: border-box;\n        color: inherit;\n        min-height: 40px;\n        display: block;\n        overflow: hidden;\n        position: relative;\n        text-decoration: none; \n        width: 100%;\n        display: flex;\n        align-items: center;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], AlphaCellComponent);
    return AlphaCellComponent;
}());

//# sourceMappingURL=alpha-cell.js.map

/***/ }),

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlphaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alpha_section__ = __webpack_require__(1120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlphaListComponent = (function () {
    function AlphaListComponent(cd) {
        this.cd = cd;
        this._flag = true;
        this._indexes = []; // 右侧导航
        this._offsetTops = []; // 每个AlphaSection 的offsetTop
        this._indicatorTime = null;
        this._showModal = false;
        this.hasTop = false;
    }
    AlphaListComponent.prototype.ngAfterViewChecked = function () {
        this._createListOfAlphaSection();
        this.cd.detectChanges();
    };
    AlphaListComponent.prototype._createListOfAlphaSection = function () {
        var _this = this;
        // this._flag = true
        // this._indexes = []
        // this._offsetTops = [] 
        if (this._flag && this._listOfAlphaSection) {
            this._listOfAlphaSection.forEach(function (section) {
                _this._indexes.push(section.index);
                var offsetTop = section.getElementRef().nativeElement.offsetTop;
                _this._offsetTops.push(offsetTop);
            });
            if (this._listOfAlphaSection.length > 0) {
                this._flag = false;
                if (this.hasTop) {
                    this._indexes.unshift('#');
                    this._offsetTops.unshift(0);
                }
            }
        }
    };
    AlphaListComponent.prototype.onScroll = function (e) {
        var _this = this;
        e.preventDefault();
        var scrollTopOffsetTop = this.scrollContent.nativeElement.scrollTop;
        this._offsetTops.forEach(function (v, i) {
            if (scrollTopOffsetTop >= v) {
                _this._currentIndicator = _this._indexes[i];
                _this.setCurrentSection(_this._currentIndicator);
            }
        });
    };
    AlphaListComponent.prototype.touchstart = function (e) {
        this._navOffsetX = e.changedTouches[0].clientX;
        this.scrollList(e.changedTouches[0].clientY);
    };
    AlphaListComponent.prototype.touchmove = function (e) {
        e.preventDefault();
        this.scrollList(e.changedTouches[0].clientY);
    };
    AlphaListComponent.prototype.touchend = function (e) {
        var _this = this;
        this._indicatorTime = setTimeout(function () {
            _this._showModal = false;
            _this._currentIndicator = '';
        }, 500);
    };
    AlphaListComponent.prototype.scrollList = function (y) {
        var currentItem = document.elementFromPoint(this._navOffsetX, y);
        if (!currentItem || !currentItem.classList.contains('alpha-bar')) {
            return;
        }
        this._currentIndicator = currentItem['innerText'];
        var index = this._indexes.indexOf(this._currentIndicator);
        console.log(index, this._offsetTops[index]);
        this.scrollContent.nativeElement.scrollTop = this._offsetTops[index];
        this._showModal = true;
        if (this._indicatorTime) {
            clearTimeout(this._indicatorTime);
        }
    };
    AlphaListComponent.prototype.setCurrentSection = function (currentindex) {
        var listArray = this._listOfAlphaSection.toArray();
        listArray.forEach(function (section) {
            if (section.index === currentindex) {
                section._current = true;
            }
            else {
                section._current = false;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AlphaListComponent.prototype, "hasTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('top'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AlphaListComponent.prototype, "top", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__alpha_section__["a" /* AlphaSectionComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], AlphaListComponent.prototype, "_listOfAlphaSection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AlphaListComponent.prototype, "scrollContent", void 0);
    AlphaListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ion-alpha-list',
            template: "\n    <div class=\"alpha-list\">\n      <div class=\"alpha-list-wrapper\"  #scrollContent tappable (scroll)=\"onScroll($event)\">\n        <ng-content select=\"[top]\"></ng-content>\n        <ng-content></ng-content>\n      </div>\n\n      <div class=\"alpha-list-nav\" (touchstart)=\"touchstart($event)\" (touchmove)=\"touchmove($event)\" (touchend)=\"touchend($event)\">\n        <div class=\"alpha-bar\" *ngFor=\"let index of _indexes;\"\n             [class.alpha-list-nav-activate]=\"index === _currentIndicator\">\n          {{index}}\n        </div>\n      </div>\n      \n      <div class=\"modal\" [class.show]=\"_showModal\">\n        {{_currentIndicator}}\n      </div>\n    </div>",
            styles: ["\n    ::-webkit-scrollbar {\n      width: 0\n    }\n\n    .alpha-list{\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      height: 100%;\n      overflow: hidden;\n      transform:translate(0,0);\n    }\n\n    .alpha-list-wrapper{\n      width: 100%;\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n    }\n\n    .alpha-list-nav{\n      width:6%;\n      position: absolute;\n      right: 0;\n      top: 5%; \n      display: flex;\n      justify-content: flex-start;\n      flex-direction: column;\n      text-align: center;\n      background-color: rgba(245, 245, 245, 0.3);\n      height: 100%;\n      z-index: 1000;\n      -webkit-touch-callout: none;\n    }\n\n    .alpha-bar{\n      padding: 2px 6px;\n      font-size: 16px;\n    }\n\n    .alpha-list-nav-activate{\n      color: #1A83D4;\n    }\n\n    .modal {\n      top: 50%;\n      left: 50%;\n      z-index: 100;\n      position: fixed;\n      pointer-events: none;\n      width: 20vw;\n      height: 20vw;\n      line-height: 20vw;\n      margin-left: -10vw;\n      margin-top: -10vw;\n      color: #fff;\n      font-size: 3em;\n      text-align: center;\n      border-radius: 8px;\n      background-color: rgba(0, 0, 0, 0.52);\n      -webkit-box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);\n      box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);\n      -webkit-transition: opacity .5s;\n      -o-transition: opacity .5s;\n      transition: opacity .5s;\n      opacity: 0;\n    }\n\n    .modal.show {\n      opacity: 1;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], AlphaListComponent);
    return AlphaListComponent;
}());

//# sourceMappingURL=alpha-list.js.map

/***/ }),

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_lazy_load_img_lazy_load__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_hints_data_hints__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__avatar_badge_avatar_badge__ = __webpack_require__(1126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__privacy_policy_privacy_policy__ = __webpack_require__(1127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nodata_nodata__ = __webpack_require__(1128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alpha_list_alpha_list__ = __webpack_require__(1122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alpha_list_alpha_section__ = __webpack_require__(1120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__alpha_list_alpha_cell__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__counto_counto__ = __webpack_require__(1129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__iproud_load_data_iproud_load_data__ = __webpack_require__(1130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__img_lazy_load_img_lazy_load__["a" /* ImgLazyLoadComponent */], __WEBPACK_IMPORTED_MODULE_4__avatar_badge_avatar_badge__["a" /* AvatarBadgeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__data_hints_data_hints__["a" /* DataHintsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__privacy_policy_privacy_policy__["a" /* PrivacyPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nodata_nodata__["a" /* NodataComponent */],
                __WEBPACK_IMPORTED_MODULE_7__alpha_list_alpha_list__["a" /* AlphaListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__alpha_list_alpha_section__["a" /* AlphaSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__alpha_list_alpha_cell__["a" /* AlphaCellComponent */],
                __WEBPACK_IMPORTED_MODULE_11__counto_counto__["a" /* CountoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__iproud_load_data_iproud_load_data__["a" /* IproudLoadDataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__img_lazy_load_img_lazy_load__["a" /* ImgLazyLoadComponent */],
                __WEBPACK_IMPORTED_MODULE_3__data_hints_data_hints__["a" /* DataHintsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__avatar_badge_avatar_badge__["a" /* AvatarBadgeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__privacy_policy_privacy_policy__["a" /* PrivacyPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nodata_nodata__["a" /* NodataComponent */],
                __WEBPACK_IMPORTED_MODULE_7__alpha_list_alpha_list__["a" /* AlphaListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__alpha_list_alpha_section__["a" /* AlphaSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__alpha_list_alpha_cell__["a" /* AlphaCellComponent */],
                __WEBPACK_IMPORTED_MODULE_11__counto_counto__["a" /* CountoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__iproud_load_data_iproud_load_data__["a" /* IproudLoadDataComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 1124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgLazyLoadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_providers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the ImgLazyLoadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ImgLazyLoadComponent = (function () {
    function ImgLazyLoadComponent(storageService, changeDetectorRef, nativeService, events, cache, handle) {
        this.storageService = storageService;
        this.changeDetectorRef = changeDetectorRef;
        this.nativeService = nativeService;
        this.events = events;
        this.cache = cache;
        this.handle = handle;
        this.default = ''; //图片默认路径
        this.defaultImg = 'assets/svg/loading.svg';
    }
    ImgLazyLoadComponent.prototype.ngOnInit = function () {
        this._loadingImage();
    };
    ImgLazyLoadComponent.prototype._loadingImage = function () {
        var _this = this;
        if (!this.src)
            return;
        this.src = this.src.trim();
        if (this.src.startsWith('./assets') || this.src.startsWith('assets')) {
            this.loadImg(this.src);
        }
        else if (this.src && this.nativeService.isMobile()) {
            this.cache.getImagePath(this.src).subscribe(function (res) {
                _this.handle.generate('getImageFromLocal', 0, res);
                _this.loadImg(res);
            }, function (err) {
                _this.loadImg(_this.src);
            });
        }
        else {
            this.loadImg(this.src);
        }
    };
    /**
     * 当src地址发生变化，刷新组件
     * @param changes
     */
    ImgLazyLoadComponent.prototype.ngOnChanges = function (changes) {
        if (!changes.src.firstChange && changes.src.currentValue) {
            this.src = changes.src.currentValue;
            this._loadingImage();
        }
    };
    ImgLazyLoadComponent.prototype.imgStyleOptions = function () {
        var styleObject = {};
        if (this.options) {
            if (this.options instanceof Object) {
                styleObject = this.options;
            }
            else {
                styleObject = JSON.parse(this.options);
            }
        }
        if (this.width) {
            styleObject['width'] = this.width;
        }
        if (this.height) {
            styleObject['height'] = this.height;
        }
        if (this.maxWidth) {
            styleObject['max-width'] = this.maxWidth;
        }
        if (this.maxHeight) {
            styleObject['max-height'] = this.maxHeight;
        }
        return styleObject;
    };
    ImgLazyLoadComponent.prototype.vitrualImgStyleOptions = function () {
        var styleObject = {};
        if (this.options) {
            if (this.options instanceof Object) {
                styleObject = this.options;
            }
            else {
                styleObject = JSON.parse(this.options);
            }
        }
        if (this.width) {
            styleObject['width'] = this.width;
        }
        if (this.height || this.occupyHeight) {
            styleObject['height'] = this.height || this.occupyHeight;
        }
        if (this.maxWidth) {
            styleObject['max-width'] = this.maxWidth;
        }
        if (this.maxHeight) {
            styleObject['max-height'] = this.maxHeight;
        }
        return styleObject;
    };
    //加载标签图片
    ImgLazyLoadComponent.prototype.loadImg = function (src) {
        var _this = this;
        if (!src)
            return;
        var img = new Image();
        img.src = src;
        this.occupyHeight = img.height + 'px'; //未加载到图片时，给定一个高度占位。
        img.onload = function () {
            _this.default = img.src;
            if (!_this.changeDetectorRef['destroyed']) {
                _this.changeDetectorRef.detectChanges();
            }
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ImgLazyLoadComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean //要显示的图片 
        )
    ], ImgLazyLoadComponent.prototype, "isLoading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ImgLazyLoadComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ImgLazyLoadComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ImgLazyLoadComponent.prototype, "maxWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ImgLazyLoadComponent.prototype, "maxHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ImgLazyLoadComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ImgLazyLoadComponent.prototype, "isKeepRatio", void 0);
    ImgLazyLoadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'img-lazy-load',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\components\img-lazy-load\img-lazy-load.html"*/'<!-- Generated template for the ImgLazyLoadComponent component -->\n\n\n\n<img class="img" src="{{default}}" *ngIf="default" [ngStyle]="imgStyleOptions()" >\n\n<img class="img occupy" *ngIf="!default" src="{{defaultImg}}" [ngStyle]="vitrualImgStyleOptions()">\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\components\img-lazy-load\img-lazy-load.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_services__["g" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_3__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__providers_providers__["c" /* CacheProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__["a" /* HandleProvider */]])
    ], ImgLazyLoadComponent);
    return ImgLazyLoadComponent;
}());

//# sourceMappingURL=img-lazy-load.js.map

/***/ }),

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataHintsComponent; });
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
 * Generated class for the DataHintsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
/**
 *  提示组件
 */
var DataHintsComponent = (function () {
    function DataHintsComponent() {
    }
    DataHintsComponent.prototype.ngOnInit = function () {
        this.showText = this.text;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DataHintsComponent.prototype, "text", void 0);
    DataHintsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'data-hints',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\components\data-hints\data-hints.html"*/'<!-- Generated template for the DataHintsComponent component -->\n\n<div>\n\n  <span></span>\n\n  {{showText}}\n\n  <span></span>\n\n</div>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\components\data-hints\data-hints.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DataHintsComponent);
    return DataHintsComponent;
}());

//# sourceMappingURL=data-hints.js.map

/***/ }),

/***/ 1126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarBadgeComponent; });
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
 * Generated class for the AvatarBadgeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AvatarBadgeComponent = (function () {
    function AvatarBadgeComponent(element) {
        this.element = element;
    }
    AvatarBadgeComponent.prototype.ngAfterViewInit = function () {
        if (this.badge && parseInt(this.badge) > 999) {
            this.badge = '...';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AvatarBadgeComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AvatarBadgeComponent.prototype, "badge", void 0);
    AvatarBadgeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'avatar-badge',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\components\avatar-badge\avatar-badge.html"*/' \n\n  <div class="info">\n\n    <img src="{{src}}">\n\n    <span class="info-tip" *ngIf="badge > 0" >{{badge}}</span>\n\n  </div>\n\n \n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\components\avatar-badge\avatar-badge.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AvatarBadgeComponent);
    return AvatarBadgeComponent;
}());

//# sourceMappingURL=avatar-badge.js.map

/***/ }),

/***/ 1127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_keyboard__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
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
 * Generated class for the PrivacyPolicyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PrivacyPolicyComponent = (function () {
    function PrivacyPolicyComponent(navCtrl, storageService, modalController, keyboard) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.modalController = modalController;
        this.keyboard = keyboard;
        this.isTyping = false;
        this.keyboard.onKeyboardShow().subscribe(function (res) {
            _this.isTyping = true;
        });
        this.keyboard.onKeyboardHide().subscribe(function (res) {
            _this.isTyping = false;
        });
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        this.text = this.agreeText;
    };
    //查看隐私政策
    PrivacyPolicyComponent.prototype.viewPrivacyPolicy = function () {
        this.modalController.create('PrivacyPolicyPage', { subjectId: 256801, language: this.language }).present();
        // this.navCtrl.push('PrivacyPolicyPage', { subjectId: 256801, language: this.language });
    };
    //查看服务条款
    PrivacyPolicyComponent.prototype.viewServiceAgreement = function () {
        this.modalController.create('PrivacyPolicyPage', { subjectId: 256802, language: this.language }).present();
        // this.navCtrl.push('PrivacyPolicyPage', { subjectId: 256802, language: this.language });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PrivacyPolicyComponent.prototype, "float", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PrivacyPolicyComponent.prototype, "agreeText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PrivacyPolicyComponent.prototype, "language", void 0);
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'privacy-policy',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\components\privacy-policy\privacy-policy.html"*/'<span [ngClass]="{\'float\' :float} " class="private  " *ngIf="language == \'en-US\'">{{ agreeText }}\n\n  <span class="privacy-policy " (click)="viewServiceAgreement()">\n\n    <i>\n\n      <u>{{ \'SIGNUP_SERVICE_AGREEMENT\' | translate }}</u>\n\n    </i>\n\n  </span>\n\n  <span>{{\'SIGNUP_AND\' | translate}}</span>\n\n  <span class="privacy-policy" (click)="viewPrivacyPolicy()">\n\n    <i>\n\n      <u>{{ \'SIGNUP_PRIVACY_PPLICY\' | translate }}</u>\n\n    </i>\n\n  </span>\n\n</span>\n\n\n\n<span [ngClass]="{\'float\': float}"  class="private  " *ngIf="language != \'en-US\'">{{ agreeText }}\n\n  <span class="privacy-policy" (click)="viewServiceAgreement()">\n\n    《<u>{{ \'SIGNUP_SERVICE_AGREEMENT\' | translate }}</u>》\n\n  </span>\n\n  <span>{{\'SIGNUP_AND\' | translate}}</span>\n\n  <span class="privacy-policy" (click)="viewPrivacyPolicy()">\n\n    《<u>{{ \'SIGNUP_PRIVACY_PPLICY\' | translate }}</u>》\n\n  </span>\n\n</span>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\components\privacy-policy\privacy-policy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_keyboard__["a" /* Keyboard */]])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 1128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utility__ = __webpack_require__(32);
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
 * Generated class for the NodataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NodataComponent = (function () {
    function NodataComponent(events, session, cd, translate) {
        var _this = this;
        this.events = events;
        this.session = session;
        this.cd = cd;
        this.translate = translate;
        this.translateKey = '';
        this.events.subscribe('setting:change-theme', function () {
            setTimeout(function () {
                _this.imgUrl = __WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].getThemeColor(_this.session.isDarkMode).NO_MESSAGE;
            }, 200);
        });
        this.events.subscribe('lang:changed', function (obj) {
            setTimeout(function () {
                _this.showText = _this.translateKey ? _this.translate.instant(_this.translateKey) : _this.text;
                _this.cd.detectChanges();
            }, 100);
        });
    }
    NodataComponent.prototype.ngOnInit = function () {
        this.imgUrl = __WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].getThemeColor(this.session.isDarkMode).NO_MESSAGE;
        this.showText = this.translateKey ? this.translate.instant(this.translateKey) : this.text;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NodataComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NodataComponent.prototype, "translateKey", void 0);
    NodataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'nodata',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\components\nodata\nodata.html"*/'<div class="nodata"   >\n\n  <img [src]="imgUrl"/>\n\n  <br/><br/>\n\n  <span> {{showText}} </span>\n\n</div>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\components\nodata\nodata.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_1__services_session__["a" /* Session */], __WEBPACK_IMPORTED_MODULE_3__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]])
    ], NodataComponent);
    return NodataComponent;
}());

//# sourceMappingURL=nodata.js.map

/***/ }),

/***/ 1129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountoComponent; });
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
 * Generated class for the CountoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CountoComponent = (function () {
    function CountoComponent() {
        this.displayVal = 0;
        this.miles = 1000;
        this.startAnimation();
    }
    CountoComponent.prototype.startAnimation = function (delval) {
        var _this = this;
        var miles = this.endVal - this.displayVal;
        if (delval) {
            miles = delval;
        }
        if (miles > 0) {
            var rasio_1 = Math.round(Math.abs(miles) * 10 / this.miles) || 1;
            var numSlideFun_1 = function () { return setTimeout(function () {
                _this.displayVal += rasio_1;
                if (_this.displayVal >= _this.endVal) {
                    _this.displayVal = _this.endVal;
                }
                else {
                    numSlideFun_1();
                }
            }, 0); };
            numSlideFun_1();
        }
        else if (miles < 0) {
            var rasio_2 = Math.round(Math.abs(miles) * 10 / this.miles) || 1;
            var numSlideFun_2 = function () { return setTimeout(function () {
                _this.displayVal -= rasio_2;
                if (_this.displayVal <= _this.endVal) {
                    _this.displayVal = _this.endVal;
                }
                else {
                    numSlideFun_2();
                }
            }, 0); };
            numSlideFun_2();
        }
    };
    CountoComponent.prototype.ngOnChanges = function (changes) {
        this.endVal = changes.endVal.currentValue;
        this.startAnimation(changes.endVal.currentValue - changes.endVal.previousValue);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CountoComponent.prototype, "endVal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CountoComponent.prototype, "miles", void 0);
    CountoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'counto',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\components\counto\counto.html"*/' <span>{{displayVal}}</span>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\components\counto\counto.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CountoComponent);
    return CountoComponent;
}());

//# sourceMappingURL=counto.js.map

/***/ }),

/***/ 1130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IproudLoadDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(29);
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
 * Generated class for the IproudLoadDataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IproudLoadDataComponent = (function () {
    function IproudLoadDataComponent(events, session, cd, translate) {
        var _this = this;
        this.events = events;
        this.session = session;
        this.cd = cd;
        this.translate = translate;
        this.withEmptyImage = true;
        this.translateKey = '';
        this.emitter = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.DataEmpty = false;
        this.DataLoading = false;
        this.events.subscribe('setting:change-theme', function () {
            setTimeout(function () {
                _this.imgUrl = __WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* Utility */].boolean(_this.withEmptyImage) ? __WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* Utility */].getThemeColor(_this.session.isDarkMode).NO_MESSAGE : null;
            }, 200);
        });
        this.events.subscribe('lang:changed', function (obj) {
            setTimeout(function () {
                _this.showText = _this.translateKey ? _this.translate.instant(_this.translateKey) : _this.translate.instant('APP_COMMON_NODATA');
                _this.cd.detectChanges();
            }, 100);
        });
    }
    IproudLoadDataComponent.prototype.ngOnInit = function () {
        this.DataEmpty = this.isDataEmpty;
        this.DataLoading = this.isDataLoading;
        this.imgUrl = __WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* Utility */].boolean(this.withEmptyImage) ? __WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* Utility */].getThemeColor(this.session.isDarkMode).NO_MESSAGE : null;
        this.showText = this.translateKey ? this.translate.instant(this.translateKey) : this.translate.instant('APP_COMMON_NODATA');
        this.buttons = this.Buttons;
    };
    IproudLoadDataComponent.prototype.ngOnChanges = function (changes) {
        this.isDataEmpty = changes.isDataEmpty && changes.isDataEmpty.currentValue;
        this.isDataLoading = changes.isDataLoading && changes.isDataLoading.currentValue;
        this.imgUrl = __WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* Utility */].boolean(this.withEmptyImage) ? __WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* Utility */].getThemeColor(this.session.isDarkMode).NO_MESSAGE : null;
        this.showText = this.translateKey ? this.translate.instant(this.translateKey) : this.translate.instant('APP_COMMON_NODATA');
        this.DataEmpty = this.isDataEmpty;
        this.DataLoading = this.isDataLoading;
        this.buttons = this.Buttons;
        this.cd.detectChanges();
    };
    IproudLoadDataComponent.prototype.buttonOnClick = function (event) {
        this.emitter.emit({
            eventName: event.name,
            func: event.func,
            args: event.args
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], IproudLoadDataComponent.prototype, "isDataEmpty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], IproudLoadDataComponent.prototype, "isDataLoading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], IproudLoadDataComponent.prototype, "withEmptyImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IproudLoadDataComponent.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], IproudLoadDataComponent.prototype, "translateKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], IproudLoadDataComponent.prototype, "Buttons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], IproudLoadDataComponent.prototype, "emitter", void 0);
    IproudLoadDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'iproud-load-data',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\components\iproud-load-data\iproud-load-data.html"*/'<div class="nodata"  *ngIf="!DataLoading && DataEmpty" >\n\n  <img *ngIf="imgUrl" [src]="imgUrl"/>\n\n  <br/><br/>\n\n  <span> {{showText}} </span>\n\n  <br/><br/>\n\n  <div *ngFor="let button of buttons">\n\n      <button class="button" (click)="buttonOnClick( button)">{{button.name}} </button>\n\n  </div>\n\n  \n\n</div>\n\n<div text-center *ngIf="DataLoading" padding>\n\n  <!-- <ion-spinner name="ios"></ion-spinner> -->\n\n  <img width="40px" src="assets/svg/load.svg"> \n\n</div>\n\n\n\n '/*ion-inline-end:"F:\iproud2.5-pwa\src\components\iproud-load-data\iproud-load-data.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_1__services_session__["a" /* Session */], __WEBPACK_IMPORTED_MODULE_3__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], IproudLoadDataComponent);
    return IproudLoadDataComponent;
}());

//# sourceMappingURL=iproud-load-data.js.map

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

/***/ 1262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cache_provider__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_widget_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_preload_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_message_provider__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__ = __webpack_require__(29);
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
 * Generated class for the MessageChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessageChatPage = (function () {
    // isTyping: boolean = false; //是否正在输入
    function MessageChatPage(navParams, navCtrl, formBuilder, session, messageProvider, sanitizer, storageService, element, nativeService, keyboard, preloadProvider, events, alertCtrl, translateService, widgetProvider, clipboard, preload, cacheProvider, actionSheetCtrl, modal, cd) {
        var _this = this;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.session = session;
        this.messageProvider = messageProvider;
        this.sanitizer = sanitizer;
        this.storageService = storageService;
        this.element = element;
        this.nativeService = nativeService;
        this.keyboard = keyboard;
        this.preloadProvider = preloadProvider;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.widgetProvider = widgetProvider;
        this.clipboard = clipboard;
        this.preload = preload;
        this.cacheProvider = cacheProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modal = modal;
        this.cd = cd;
        this.limit = 15; //加载消息条数
        this.offset = 0; //偏移量
        this.toUser = {
            _id: 'initialId',
            pic: 'assets/imgs/logo.png',
            username: 'reveiceUser',
        };
        this.user = {
            _id: 'initialId',
            pic: 'assets/imgs/logo.png',
            username: 'currentUser',
        };
        this.isShowChooser = false; //输入时是否显示更多选项  
        this.isSending = false;
        this.messages = []; //当前信息
        this.isTyping = false;
        this.topId = ''; // 最顶消息id，记录scroll位置用 
        this.messageForm = formBuilder.group({
            message: new __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormControl */]('')
        });
        // this.widgetId = this.navParams.data.widgetId;
        // this.pending = this.navParams.data.pending;
        this.keyboard.onKeyboardWillShow().subscribe(function (e) {
            if (_this.nativeService.isAndroid()) {
                _this.setFooterPosition(_this.session.keyboardHeight || 243);
            }
            _this.ContentResize();
        });
        this.keyboard.onKeyboardWillHide().subscribe(function (e) {
            if (_this.nativeService.isAndroid()) {
                _this.setFooterPosition(0);
            }
        });
        if (this.navParams.data.messages) {
            this.messages = this.navParams.data.messages.concat(this.messages);
            this.refreshDisplaytime();
            this.transHtml();
            this.ContentResize();
        }
    }
    MessageChatPage.prototype.ionViewCanEnter = function () {
        if (this.session && this.session.userId && this.session.userId == '50709171857408') {
            if (this.session.user.nickName == 'Beta') {
                return true;
            }
            else {
                this.nativeService.showToast(this.translateService.instant('APP_COMMON_DISABLE_FUCTION'));
                return false;
            }
        }
    };
    MessageChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.keyboard.setResizeMode('body');
        this.nativeService.hideKeyboardAccessoryBar(true);
        this.toUser._id = this.navParams.data.widgetId || 'bot_001';
        this.session.messageWidgetId = this.navParams.data.widgetId || 'bot_001';
        this.toUser.pic = this.navParams.data.widgetIcon || this.toUser.pic;
        this.toUser.username = this.navParams.data.widgetName || 'bot';
        this.chatBox = '';
        this.messageTitle = this.navParams.data.widgetName;
        this.user.pic = this.session.user ? this.session.user.pictureUrl : this.user.pic;
        this.user._id = this.session.userId;
        if (!this.navParams.data.messages) {
            this.createArray();
        }
        this.events.subscribe("messageProvider-addMessage", function (message) {
            if (_this.messages.findIndex(function (p) { return p.id == message.id; }) == -1) {
                _this.messages.push(message);
                _this.transHtml();
                _this.scrollToBottom();
                _this.cd.detectChanges();
            }
        });
    };
    MessageChatPage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe("messageProvider-addMessage");
    };
    MessageChatPage.prototype.lowerCaseFormatType = function (type) {
        if (!type)
            return "";
        return type.toLowerCase();
    };
    MessageChatPage.prototype.ionViewDidLeave = function () {
        this.keyboard.setResizeMode('');
        this.nativeService.hideKeyboardAccessoryBar(false);
    };
    /**
     * 取消输入，例如：点击除输入区域的其他地方
     */
    MessageChatPage.prototype.cancelTyping = function () {
        this.isShowChooser = false;
        // this.setFooterPosition(0)
        this.ContentResize();
        this.cd.detectChanges();
    };
    /**
     * 失焦時，
     */
    MessageChatPage.prototype.blurInput = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.isSending || _this.isShowChooser)
                return;
            // this.setFooterPosition(0)
            _this.ContentResize();
            _this.cd.detectChanges();
        }, 10);
    };
    /**
     * 输入框获取到焦点时
     */
    MessageChatPage.prototype.focusInput = function () {
        this.isShowChooser = false;
    };
    MessageChatPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.content.scrollDownOnLoad = true;
        this.content.scrollTop = 999999;
        setTimeout(function () {
            _this.content.scrollDownOnLoad = true;
            _this.content.scrollTop = 9999999;
        }, 100);
    };
    // 回车发送消息
    MessageChatPage.prototype.FormSubmit = function (message) {
        // this.myInput.setFocus();
        // this.sendMessage(message, 'text');
    };
    // 点击发送按钮发送消息，重新获取焦点
    MessageChatPage.prototype.send = function (message) {
        var _this = this;
        if (!message || !message.replace(/\s+/g, ""))
            return;
        this.isSending = true;
        this.sendMessage(message, 'text');
        this.myInput.setFocus();
        this.cd.detectChanges();
        setTimeout(function () {
            _this.isSending = false;
        }, 30);
    };
    /**
     * 发送图片信息
     * @param imageBase64 图片base64
     * @param abstract 描述
     * @param title
     */
    MessageChatPage.prototype.sendImageMessage = function (scope, imageBase64, abstract, title) {
        (scope || this).sendMessage(abstract, 'image', imageBase64);
    };
    /**
     * 发送消息
     * @param message
     * @param formatType 消息类型: 'text':文本；'image':图片
     */
    MessageChatPage.prototype.sendMessage = function (message, formatType, imageBase64) {
        if (message && message !== '') {
            var messageData = {
                widgetId: this.toUser._id,
                id: this.session.userId + Date.now(),
                userId: this.user._id,
                widgetName: this.toUser.username,
                imageUrl: imageBase64,
                widgetIcon: this.toUser.pic,
                abstract: message,
                receiveTime: Date.now().toString(),
                formatType: formatType,
                isRead: true,
                isSend: true,
                status: this.messageProvider.STAUTS.SEND_MESSAGE_SENDING,
                extra: {
                    groudId: 0,
                    senderAvator: this.user.pic,
                    senderName: this.session.user.username,
                    senderId: Number(this.toUser._id),
                    fromType: 'Chat'
                }
            };
            this.messageProvider.insertMessage(messageData);
            this._sendMessageFromMessageProvider(messageData);
            this.messages.push(messageData);
            this.transHtml();
            this.scrollToBottom();
        }
        this.chatBox = '';
        this.refreshDisplaytime();
    };
    MessageChatPage.prototype._sendMessageFromMessageProvider = function (messageData) {
        var _this = this;
        this.messageProvider.sendMessage(messageData).subscribe(function (result) {
            var status = result ? _this.messageProvider.STAUTS.SEND_MESSAGE_OK : _this.messageProvider.STAUTS.SEND_MESSAGE_FAILED;
            _this._updateMessageStatus(status, messageData);
        }, function (err) {
            var status = _this.messageProvider.STAUTS.SEND_MESSAGE_FAILED;
            _this._updateMessageStatus(status, messageData);
        });
    };
    MessageChatPage.prototype._updateMessageStatus = function (status, messageData) {
        var _this = this;
        this.messageProvider.updateMessageStatus(status, messageData).subscribe(function (res) {
            var index = _this.messages.findIndex(function (p) { return p.id == messageData.id; });
            if (index > -1)
                _this.messages[index].status = status;
        });
    };
    /**
     * 重新發送消息
     * @param message
     */
    MessageChatPage.prototype.reSendMessage = function (message) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.translateService.instant('MESSAGE_CHAT_RESEND'),
            buttons: [
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CANCEL'),
                    handler: function () {
                    }
                },
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CONFIRM'),
                    handler: function () {
                        var index = _this.messages.findIndex(function (p) { return p.id == message.id; });
                        if (index > -1) {
                            message.receiveTime = Date.now().toString();
                            message.status = _this.messageProvider.STAUTS.SEND_MESSAGE_SENDING;
                            _this.messages.splice(index, 1);
                            _this.messages.push(message);
                            _this.refreshDisplaytime();
                            _this.messageProvider.updateMessage(message).subscribe(function (res) {
                                _this._sendMessageFromMessageProvider(message);
                            });
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    MessageChatPage.prototype.AlterSendMessage = function (messageData, isSend) {
        this.messageProvider.insertMessage(messageData);
        if (isSend) {
            this.messageProvider.sendMessage(messageData).subscribe();
        }
        else {
            this.messageProvider.receiveMessageNew(messageData);
        }
        this.messages.push(messageData);
        this.transHtml();
        this.scrollToBottom();
    };
    /**
     * 滚动到底部
     */
    MessageChatPage.prototype.scrollToBottom = function (duration) {
        var _this = this;
        if (duration === void 0) { duration = 300; }
        setTimeout(function () {
            _this.content.scrollToBottom(duration);
        }, 10);
    };
    MessageChatPage.prototype.setInputHeight = function (height) {
        if (height === void 0) { height = 36; }
        this.myInput._elementRef.nativeElement.style.height = height + 'px';
    };
    MessageChatPage.prototype.doRefresh = function (_event) {
        if (this.messages && this.messages.length > 0)
            this.topId = this.messages[0].id;
        this.createArray(_event);
    };
    MessageChatPage.prototype.refreshDisplaytime = function () {
        var i = 0;
        var timeline = null; // 3分钟作为一个时间轴
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var item = _a[_i];
            var receiveTime = Number(item.receiveTime);
            item.displayTime = __WEBPACK_IMPORTED_MODULE_10__services_utility__["a" /* Utility */].formatMessageTime(this.session.language, receiveTime);
            if (i > 0) {
                var time = receiveTime;
                if (time - timeline > 1000 * 60 * 3) {
                    timeline = time;
                }
                else {
                    item.displayTime = '';
                }
            }
            else {
                timeline = receiveTime;
            }
            i++;
        }
    };
    MessageChatPage.prototype.scrollTopByHandle = function () {
        if (!this.topId)
            return;
        var ele = this.element.nativeElement.querySelector("#messageid-" + this.topId);
        this.content.scrollTop = ele.offsetTop > 20 ? ele.offsetTop - 20 : ele.offsetTop;
    };
    MessageChatPage.prototype.transHtml = function () {
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.abstract) {
                item.displayAbstract = this.messageProvider.transformHtml(item.abstract);
                item.displayAbstract = this.sanitizer.bypassSecurityTrustHtml(item.displayAbstract); //遵循angular机制才会正常绑定html 
            }
        }
    };
    MessageChatPage.prototype.abstractOnClick = function (e, message) {
        e.stopPropagation(); //阻止冒泡事件 
        e = e || window.event; //兼容IE8
        var target = e.target || e.srcElement; //判断目标事件 
        var url = target.href === 'javascript:void(0)' ? (target.title || target.innerText) : '';
        this.goMessageDetail(message, url);
    };
    // 长按弹出菜单
    MessageChatPage.prototype.onHold = function (message) {
        var _this = this;
        var that = this;
        var sheet = null;
        var buttons = [];
        buttons.push({
            text: that.translateService.instant('MESSAGE_DELETE'),
            handler: function () {
                that.showDeleteMsg(message);
            }
        });
        if (message.redirectUrl || message.formatType.indexOf('Image') > -1) {
            buttons.push({
                text: that.translateService.instant('SHARE_MODAL_TITLE'),
                handler: function () {
                    that.openSharePage(message);
                }
            });
        }
        else {
            buttons.push({
                text: that.translateService.instant('APP_COMMON_COPY_MESSAGE'),
                handler: function () {
                    _this.clipboard.copy(message.abstract);
                }
            });
        }
        buttons.push({
            text: that.translateService.instant('MESSAGE_DELETE_CANCEL'),
            role: 'cancel'
        });
        //长按时同时识别图片中是否存在二维码，若存在，则增加 识别二维码选项
        this.cacheProvider.decodeQRCode(message.imageUrl).subscribe(function (decodeResult) {
            buttons.splice(buttons.length - 1, 1, {
                text: that.translateService.instant('APP_COMMON_EXTRACT_QRCODE'),
                handler: function () {
                    that.openQRCodeUrl(decodeResult, message);
                }
            });
            buttons.push({
                text: that.translateService.instant('MESSAGE_DELETE_CANCEL'),
                role: 'cancel'
            });
            var newsheet = that.actionSheetCtrl.create({ buttons: buttons });
            newsheet.present();
            sheet && sheet.dismiss();
        }, function (err) {
            sheet = that.actionSheetCtrl.create({ buttons: buttons });
            sheet.present();
        });
    };
    //显示删除alert
    MessageChatPage.prototype.showDeleteMsg = function (message) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.translateService.instant('MESSAGE_DELETE_TITLE'),
            message: this.translateService.instant('MESSAGE_DELETE_MESSAGE'),
            buttons: [
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CANCEL'),
                    handler: function () {
                    }
                },
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CONFIRM'),
                    handler: function () {
                        var index = _this.messages.findIndex(function (p) { return p.id == message.id; });
                        _this.messages.splice(index, 1);
                        _this.messageProvider.deleteMessage(message.id);
                    }
                }
            ]
        });
        confirm.present();
    };
    /**
    * 打开分享页面
    */
    MessageChatPage.prototype.openSharePage = function (message) {
        var shareMessage = {
            title: message.title,
            description: message.abstract,
            thumb: message.imageUrl || __WEBPACK_IMPORTED_MODULE_1__services_constants__["j" /* DEFAULT_LOGO */],
            resource: message.redirectUrl || message.imageUrl //图片url或网页url
        };
        this.preload.openShareModal({
            shareMessage: shareMessage,
            callback: function (data) {
                if (data) {
                }
            },
            isShareImage: message.redirectUrl ? false : true,
            navigationDockTargetMapIds: [1, 2]
            // navigationDockTargetMapIds: [1, 2, 7]
        });
    };
    /**
     * 打开二维码地址
     * @param imgMsg 二维码url
     * @param message Message对象
     */
    MessageChatPage.prototype.openQRCodeUrl = function (imgMsg, message) {
        var page = {
            url: imgMsg,
            title: message.title,
            description: message.abstract,
            imageUrl: message.imageUrl,
            appId: message.widgetId.toString(),
            options: {}
        };
        this.widgetProvider.openWebpage(page, this.navCtrl);
    };
    MessageChatPage.prototype.goMessageDetail = function (message, replaceUrl) {
        message.isRead = true;
        this.messageProvider.setMessageIsRead(message.id);
        if (!message.redirectUrl && !replaceUrl)
            return;
        var page = {
            url: replaceUrl || message.redirectUrl,
            title: message.title == null ? message.widgetName : message.title,
            description: message.abstract,
            imageUrl: message.imageUrl,
            appId: message.widgetId == null ? '' : message.widgetId.toString(),
            options: {}
        };
        this.widgetProvider.openWebpage(page, this.navCtrl, true);
    };
    MessageChatPage.prototype.getPictureByPhotoLibrary = function () {
        var _this = this;
        event.stopPropagation();
        if (this.nativeService.isMobile()) {
            this.nativeService.getFullPictureByPhotoLibrary({}).subscribe(function (img) {
                _this.nativeService.compressImage(img, { MaxWidthOrHeight: 1024 }).subscribe(function (res) {
                    _this.sendImageMessage(_this, res.dataURL, 'Image');
                });
            }, function (err) {
                _this.nativeService.showToast(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_10__services_utility__["a" /* Utility */].generateQRCode("https://iproud.fihmb.com/Resources/Widgets/66295698871296.png").then(function (img) {
                _this.sendImageMessage(_this, img, 'Image');
            });
        }
    };
    MessageChatPage.prototype.getPictureByCamera = function () {
        var _this = this;
        event.stopPropagation();
        if (this.nativeService.isMobile()) {
            this.nativeService.getFullPictureByCamera({}).subscribe(function (img) {
                _this.nativeService.compressImage(img, { MaxWidthOrHeight: 1024 }).subscribe(function (res) {
                    _this.sendImageMessage(_this, res.dataURL, 'Image');
                });
            }, function (err) {
                _this.nativeService.showToast(err);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_10__services_utility__["a" /* Utility */].generateQRCode("https://iproud.fihmb.com/Resources/Widgets/66295698871296.png").then(function (img) {
                _this.sendImageMessage(_this, img, 'Image');
            });
        }
    };
    /**
     * 更多选项事件
     */
    MessageChatPage.prototype.showOptions = function () {
        // this.isTyping = true;
        // this.isShowChooser = !this.isShowChooser;
        // this.setFooterPosition(this.session.keyboardHeight || 243)
        // if (!this.isShowChooser) this.myInput.setFocus();
        this.cd.detectChanges();
        this.ContentResize();
        this.modal.create('MessageImagePickerPage', { callback: this.sendImageMessage, scope: this }, {
            enterAnimation: 'modal-from-bottom-enter',
            leaveAnimation: 'modal-from-bottom-leave',
            cssClass: 'pick-modal'
        }).present();
    };
    MessageChatPage.prototype.ContentResize = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.resize();
            setTimeout(function () {
                _this.scrollToBottom();
            }, 50);
        }, 50);
    };
    /**
     * 设置Footer的位置
     * @param paddingBottom
     */
    MessageChatPage.prototype.setFooterPosition = function (paddingBottom) {
        this.footer.nativeElement.style.setProperty('padding-bottom', paddingBottom + "px", 'important');
        this.ContentResize();
        this.cd.detectChanges();
    };
    MessageChatPage.prototype.getFooterPaddingBottomHeight = function () {
        var style = this.footer.nativeElement.style;
        return style.getPropertyValue('padding-bottom');
    };
    /**
     * 点击图片放大
     * @param message
     * @param _event
     */
    MessageChatPage.prototype.clickOnImage = function (message, _event) {
        var ImageEvent = _event || event;
        ImageEvent.stopPropagation();
        var imageArray = [];
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.formatType.toLowerCase() == 'image') {
                imageArray.push({
                    id: item.id,
                    pictureUrl: item.imageUrl
                });
            }
        }
        if (imageArray.length > 0) {
            var index = imageArray.findIndex(function (p) { return p.id == message.id; });
            this.preloadProvider.previewImage(imageArray, index, function (data) {
            });
        }
    };
    /**
     * 打开用户信息页面
     * @param message
     */
    MessageChatPage.prototype.openMemberPage = function (friendId) {
        this.navCtrl.push('ContactDetailPage', { friendId: friendId });
    };
    /**
     * 查询聊天记录且创建数据格式
     * @param _event 刷新事件
     */
    MessageChatPage.prototype.createArray = function (_event) {
        var _this = this;
        this.messageProvider.queryMessage(this.toUser._id, this.limit, this.messages.length || this.offset).subscribe(function (res) {
            if (res) {
                _this.messages = res.concat(_this.messages);
                _this.refreshDisplaytime();
                _this.transHtml();
                setTimeout(function () {
                    _this.scrollTopByHandle();
                }, 10);
            }
        });
        _event && _event.complete();
    };
    MessageChatPage.prototype.shareContactCard = function () {
        this.preload.openContactChooserPage({ callback: this.AfterShare, type: 1 });
    };
    MessageChatPage.prototype.AfterShare = function (data) {
        var _this = this;
        var contact = data[0];
        var confirm = this.alertCtrl.create({
            title: "Share contact card",
            message: data[0].name,
            buttons: [
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CANCEL'),
                    handler: function () {
                    }
                },
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CONFIRM'),
                    handler: function () {
                        var messageData = {
                            widgetId: _this.toUser._id,
                            id: data[0].id,
                            userId: _this.user._id,
                            widgetName: _this.toUser.username,
                            imageUrl: data[0].avator,
                            widgetIcon: _this.toUser.pic,
                            abstract: data[0].name,
                            receiveTime: Date.now().toString(),
                            formatType: "card",
                            isRead: true,
                            isSend: true,
                            status: 'success'
                        };
                        _this.AlterSendMessage(messageData, true);
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_14__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* Content */])
    ], MessageChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_14__angular_core__["ViewChild"])('inputId'),
        __metadata("design:type", Object)
    ], MessageChatPage.prototype, "myInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_14__angular_core__["ViewChild"])('footer'),
        __metadata("design:type", Object)
    ], MessageChatPage.prototype, "footer", void 0);
    MessageChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_14__angular_core__["Component"])({
            selector: 'page-message-chat',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\message\message-chat\message-chat.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{messageTitle}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content (click)="cancelTyping()">\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <div [id]="\'messageid-\' + message.id" *ngFor="let message of messages" class="message-wrapper" [ngSwitch]="lowerCaseFormatType(message.formatType)">\n\n    <div class="datetime " *ngIf="message?.displayTime">\n\n      <span>{{message.displayTime}}</span>\n\n    </div> \n\n<!-- 判断消息是发送,对方 -->\n\n    <div (press)="onHold(message)" >\n\n\n\n    <div *ngIf=" !message.isSend ">\n\n        <img (click)="openMemberPage(toUser._id)" class="profile-pic left" [src]="toUser.pic" [ngStyle]="{\'top\': message?.displayTime ? \'20px\' :\'10px\'}"/>\n\n        <!--  wave-->\n\n        <div *ngSwitchCase="\'text\'  " class="chat-bubble left slide-left">\n\n          <div  class="toUser">\n\n            <div class="message" [innerHTML]="message.displayAbstract" (click)="abstractOnClick($event,message)"></div>\n\n\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngSwitchCase="\'image\'" class="chat-bubble-image-left  left slide-left">\n\n          <div   class="toUser">\n\n            <!-- <img  [src]="message.imageUrl" (click)="clickOnImage(message)">  -->\n\n            <img-lazy-load [src]="message.imageUrl" (click)="clickOnImage(message)"></img-lazy-load>\n\n          </div>\n\n        </div>\n\n\n\n        <div *ngSwitchCase="\'card\'" class="chat-bubble-image-left  left slide-left">\n\n          <div  class="toUser">\n\n            <ion-item>\n\n              <ion-avatar item-start><img [src]="message.imageUrl"></ion-avatar>\n\n              <h2>{{message.abstract}}</h2>\n\n            </ion-item>\n\n            <ion-item no-lines>\n\n              <p>Contact Card</p>\n\n            </ion-item>\n\n          </div>\n\n        </div>\n\n        </div>\n\n        \n\n\n\n\n\n\n\n\n\n    </div>\n\n\n\n    <!-- 判断消息是发送，自己 -->\n\n    <div *ngIf="message.isSend ">\n\n      <img (click)="openMemberPage(user._id)" class="profile-pic right" [src]="user.pic" /> \n\n      <div class="chat-bubble-container" (press)="onHold(message)" >\n\n          <!-- <ion-icon class="icon" name="alert" color="danger"  (click)="reSendMessage(message)"></ion-icon> -->\n\n          <!-- <ion-spinner class="icon" name="ios-small"  ></ion-spinner> -->\n\n          \n\n          <ion-spinner class="icon" name="ios-small" *ngIf="message.status == \'sending\'"></ion-spinner>\n\n          <ion-icon class="icon" name="alert" color="danger" *ngIf="message.status == \'failed\'" (click)="reSendMessage(message)"></ion-icon>\n\n          <div *ngSwitchCase="\'text\'" class="chat-bubble right slide-right">\n\n               \n\n            <div class="message" [innerHTML]="message.displayAbstract" (click)="abstractOnClick($event,message)"></div>\n\n          </div>\n\n    \n\n          <div *ngSwitchCase="\'image\'" class=" chat-bubble-image-right right slide-right">\n\n              \n\n            <img [src]="message.imageUrl" (click)="clickOnImage(message,$event)">\n\n          </div>\n\n      </div>\n\n      \n\n\n\n      <div *ngSwitchCase="\'card\'" class=" chat-bubble-image-right right slide-right" (click)="openContact(message)">\n\n        <ion-list class="card">\n\n          <ion-item no-lines>\n\n            <ion-avatar item-start><img [src]="message.imageUrl"></ion-avatar>\n\n            <h2>{{message.abstract}}</h2>\n\n          </ion-item>\n\n        </ion-list>\n\n        <ion-item no-lines>\n\n          <p>Contact Card</p>\n\n        </ion-item>\n\n      </div> \n\n    </div> \n\n    <div class="cf"></div>\n\n  </div>\n\n\n\n  <!-- <div class="footer-container" *ngIf="isTyping"> \n\n        <form [formGroup]="messageForm" (submit)="FormSubmit(chatBox)" novalidate>\n\n            <ion-item no-lines>\n\n              <button ion-button clear (click)="showOptions()" item-start>\n\n                <ion-icon class="footer-btn" name="ios-add-circle-outline"></ion-icon>\n\n              </button>\n\n              <ion-textarea class="textarea" #inputId maxHeight="150" autosize (ionBlur)="blurInput()" (ionFocus)="focusInput()"\n\n                type="text" formControlName="message" name="chatBox" [(ngModel)]="chatBox">\n\n              </ion-textarea>\n\n              <button ion-button clear (click)="send(chatBox)" item-end>\n\n                <ion-icon class="footer-btn" name="send"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n          </form>  \n\n  </div> -->\n\n</ion-content>\n\n\n\n<!-- 底部固定的输入框 -->\n\n<ion-footer #footer class="footer-container">\n\n  <ion-toolbar>\n\n    <form [formGroup]="messageForm" (submit)="FormSubmit(chatBox)" novalidate>\n\n      <ion-item no-lines>\n\n        <button ion-button clear (click)="showOptions()" item-start>\n\n          <ion-icon class="footer-btn" name="ios-add-circle-outline"></ion-icon>\n\n        </button>\n\n        <ion-textarea class="textarea" #inputId maxHeight="150" autosize (ionBlur)="blurInput()" (ionFocus)="focusInput()"\n\n          type="text" formControlName="message" name="chatBox" [(ngModel)]="chatBox">\n\n        </ion-textarea>\n\n        <button ion-button clear (click)="send(chatBox)" item-end>\n\n          <ion-icon class="footer-btn" name="send"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n    </form>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!-- <div class="send-more-container" [hidden]="!isShowChooser">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col text-center>\n\n        <button (click)="getPictureByCamera()">\n\n          <img src="assets/img/camera.png">\n\n          <br />Camera\n\n        </button> \n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <button (click)="getPictureByPhotoLibrary()">\n\n          <img src="assets/img/album.png">\n\n          <br /> Album\n\n        </button>\n\n      </ion-col>\n\n       <ion-col text-center >\n\n          <button   (click)="shareContactCard()"> \n\n              <img src="assets/img/person.png">\n\n              <br/> Contact Card\n\n          </button>\n\n      </ion-col>  \n\n    </ion-row>\n\n  </ion-grid>\n\n</div> -->\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\message\message-chat\message-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_12__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_11__providers_message_provider__["a" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_8__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_14__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_7__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_5__providers_preload_provider__["a" /* PreloadProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_widget_provider__["a" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_5__providers_preload_provider__["a" /* PreloadProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cache_provider__["a" /* CacheProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_14__angular_core__["ChangeDetectorRef"]])
    ], MessageChatPage);
    return MessageChatPage;
}());

//# sourceMappingURL=message-chat.js.map

/***/ })

});
//# sourceMappingURL=2.js.map