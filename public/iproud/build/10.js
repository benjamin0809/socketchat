webpackJsonp([10],{

/***/ 1088:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListPageModule", function() { return MessageListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_list__ = __webpack_require__(1263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_moment__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_long_press__ = __webpack_require__(1264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(1123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MessageListPageModule = (function () {
    function MessageListPageModule() {
    }
    MessageListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__message_list__["a" /* MessageListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__message_list__["a" /* MessageListPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_long_press__["a" /* LongPressModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__message_list__["a" /* MessageListPage */]
            ]
        })
    ], MessageListPageModule);
    return MessageListPageModule;
}());

//# sourceMappingURL=message-list.module.js.map

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

/***/ 1263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_club_provider__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_preload_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_providers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_services__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var MessageListPage = (function () {
    function MessageListPage(navCtrl, actionSheetCtrl, events, messageProvider, modalCtrl, alertCtrl, widgetProvider, translateService, cd, session, sanitizer, navParams, clipboard, preload, cacheProvider, element, clubProvider, storage) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.messageProvider = messageProvider;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.widgetProvider = widgetProvider;
        this.translateService = translateService;
        this.cd = cd;
        this.session = session;
        this.sanitizer = sanitizer;
        this.navParams = navParams;
        this.clipboard = clipboard;
        this.preload = preload;
        this.cacheProvider = cacheProvider;
        this.element = element;
        this.clubProvider = clubProvider;
        this.storage = storage;
        this.messages = []; //显示信息数组
        this.messageTitle = '';
        this.isDataLoading = false; //是否在加载数据
        this.isDataEmpty = false; // 是否为无数据 
        this.pageCount = 10; // 每页条数   
        this.messageTitle = this.navParams.data.widgetName;
        this.session.messageWidgetId = this.navParams.data.widgetId;
        this.getCurrentWidget();
        if (this.navParams.data.messages) {
            this.messages.push.apply(this.messages, this.navParams.data.messages.reverse());
            this.finiteScroll = this.messages.length >= this.pageCount;
            this.refreshDisplaytime();
            this.transHtml();
        }
        else {
            this.createArray();
        }
    }
    MessageListPage.prototype.getCurrentWidget = function () {
        return __awaiter(this, void 0, void 0, function () {
            var site, siteCode, channel_1, Communitys, isBoard, widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentWidget = this.widgetProvider.getWidgetById(this.session.messageWidgetId);
                        if (!!this.currentWidget) return [3 /*break*/, 2];
                        site = "";
                        if (this.session.user != null) {
                            site = this.session.user.employeeInfo.siteCode;
                        }
                        return [4 /*yield*/, this.storage.getItem('siteCode')];
                    case 1:
                        siteCode = _a.sent();
                        if (siteCode) {
                            site = siteCode;
                        }
                        channel_1 = this.navParams.data.extra.fromType;
                        Communitys = ['board', 'video', 'club'];
                        isBoard = Communitys.some(function (item) { return item == channel_1.toLowerCase(); });
                        if (isBoard) {
                            widget = {
                                id: this.navParams.data.widgetId,
                                widgetName: this.navParams.data.sessionName,
                                appPageName: '',
                                iconUrl: this.navParams.data.widgetIcon,
                                homeUrl: this.clubProvider.BoardDetail(this.navParams.data.widgetId, channel_1, site)
                            };
                            this.currentWidget = widget;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MessageListPage.prototype.openWidget = function (widget) {
        var page = {
            url: widget.appPageName || widget.homeUrl,
            title: widget.widgetName,
            description: "",
            imageUrl: widget.iconUrl,
            appId: widget.id.toString(),
            options: {
                canShare: widget.canShare,
                allowCopyLink: widget.allowCopyLink,
                allowOpenInBrowser: widget.allowOpenInBrowser,
                useNativeBrowser: widget.useNativeBrowser
            }
        };
        this.widgetProvider.openWebpage(page, this.navCtrl);
    };
    MessageListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.events.subscribe('lang:changed', function () {
            _this.refreshDisplaytime();
        });
        //登录后刷新消息
        this.events.subscribe('user:logined', function (time) {
            _this.createArray();
        });
        this.events.subscribe("messageProvider-addMessage", function (message) {
            // this.messages.unshift(message); 
            _this.createArray();
            _this.refreshDisplaytime();
        });
    };
    MessageListPage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe("messageProvider-addMessage");
    };
    /**
     * The view loaded, let's query our items for the list
     */
    MessageListPage.prototype.ionViewWillEnter = function () {
        this.setMessageTimer();
    };
    MessageListPage.prototype.ionViewDidLeave = function () {
        clearTimeout(this.timer);
    };
    // 下拉加载更多
    MessageListPage.prototype.doRefresh = function (_event) {
        this.messages = [];
        this.createArray(_event);
    };
    MessageListPage.prototype.doInfinite = function (_event) {
        this.createArray(_event);
    };
    /**
     * 加载数据
     * @param _event derefresh事件，加载更多数据
     */
    MessageListPage.prototype.createArray = function (_event) {
        var _this = this;
        this.isDataLoading = true;
        this.messageProvider.queryMessage(this.session.messageWidgetId, this.pageCount, this.messages ? this.messages.length : 0, true).subscribe(function (res) {
            if (res) {
                if (res.length == _this.pageCount) {
                    _this.finiteScroll = true;
                }
                else {
                    _this.finiteScroll = false;
                }
                _this.isDataLoading = false;
                _this.messages.push.apply(_this.messages, res);
                _this.refreshDisplaytime();
                _this.transHtml();
            }
        }, function (err) {
            _this.isDataEmpty = true;
            _this.isDataLoading = false;
        });
        _event && _event.complete();
    };
    MessageListPage.prototype.scrollTopByHandle = function () {
        if (!this.topId)
            return;
        var ele = this.element.nativeElement.querySelector("#" + this.topId);
        this.content.scrollTop = ele.offsetTop > 20 ? ele.offsetTop - 20 : ele.offsetTop;
    };
    MessageListPage.prototype.released = function () {
    };
    MessageListPage.prototype.options = function () {
        var _this = this;
        var sheet = null;
        var buttons = [];
        if (!!this.currentWidget) {
            buttons.push({
                text: this.translateService.instant('APP_COMMON_ENTER') + ' ' + this.currentWidget.widgetName,
                handler: function () {
                    _this.openWidget(_this.currentWidget);
                }
            });
        }
        buttons.push({
            text: this.translateService.instant('APP_COMMON_CLEAR_MESSAGES'),
            handler: function () {
                _this.clearMessage();
            }
        });
        buttons.push({
            text: this.translateService.instant('MESSAGE_DELETE_CANCEL'),
            role: 'cancel'
        });
        sheet = this.actionSheetCtrl.create({ buttons: buttons });
        sheet.present();
    };
    // 长按弹出菜单
    MessageListPage.prototype.onHold = function (message, _event) {
        var _this = this;
        _event.target.classList.add('img-scaling');
        var that = this;
        var sheet = null;
        var buttons = [];
        buttons.push({
            text: that.translateService.instant('MESSAGE_DELETE'),
            handler: function () {
                that.showDeleteMsg(message);
            }
        });
        if (message.formatType.indexOf('Image') > -1) {
            buttons.push({
                text: that.translateService.instant('APP_COMMON_RELOAD_IAMGE'),
                handler: function () {
                    that.cacheProvider.reloadImage(message.imageUrl).subscribe();
                    message.imageUrl = message.imageUrl + "#reload";
                }
            });
        }
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
            newsheet.onDidDismiss(function () {
                _event.target.classList.remove('img-scaling');
            });
        }, function (err) {
            sheet = that.actionSheetCtrl.create({ buttons: buttons });
            sheet.present();
            sheet.onDidDismiss(function () {
                _event.target.classList.remove('img-scaling');
            });
        });
    };
    /**
    * 打开分享页面
    */
    MessageListPage.prototype.openSharePage = function (message) {
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
                    console.log(data);
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
    MessageListPage.prototype.openQRCodeUrl = function (imgMsg, message) {
        var page = {
            url: imgMsg,
            title: message.title,
            description: message.abstract,
            imageUrl: message.imageUrl,
            appId: message.widgetId.toString(),
            options: {
                canShare: true
            }
        };
        this.widgetProvider.openWebpage(page, this.navCtrl, true);
    };
    /**
     * 创建分享对象
     * @param message 消息对象
     */
    MessageListPage.prototype.buildMessageForWechatShare = function (message) {
        var shareMessage = {
            title: message.title || message.abstract || message.formatType,
            description: message.abstract,
            thumb: message.widgetIcon,
            resource: message.imageUrl
        };
        return shareMessage;
    };
    /**
     * Navigate to the detail page for this item.
     */
    MessageListPage.prototype.goMessageDetail = function (message, replaceUrl) {
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
        this.widgetProvider.openWebpage(page, this.navCtrl);
    };
    //清空消息
    MessageListPage.prototype.clearMessage = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.translateService.instant('APP_COMMON_HANDLE_TIPS'),
            message: this.translateService.instant('MESSAGE_CLEAR_MESSAGE'),
            buttons: [
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CANCEL'),
                    handler: function () {
                    }
                },
                {
                    text: this.translateService.instant('MESSAGE_DELETE_CONFIRM'),
                    handler: function () {
                        _this.messages = [];
                        _this.isDataEmpty = true;
                        _this.messageProvider.deleteMessageBySessionId(_this.session.messageWidgetId);
                    }
                }
            ]
        });
        confirm.present();
    };
    //显示删除alert
    MessageListPage.prototype.showDeleteMsg = function (message) {
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
                        //this.getMessages(); 
                    }
                }
            ]
        });
        confirm.present();
    };
    //一分钟刷新一次显示时间
    MessageListPage.prototype.setMessageTimer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.refreshDisplaytime();
        }, 1000 * 60);
    };
    MessageListPage.prototype.refreshDisplaytime = function () {
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var item = _a[_i];
            item.displayTime = __WEBPACK_IMPORTED_MODULE_6__services_utility__["a" /* Utility */].formatMessageTime(this.session.language, item.receiveTime);
        }
    };
    MessageListPage.prototype.lowerCaseFormatType = function (type) {
        if (!type)
            return "";
        return type.toLowerCase();
    };
    MessageListPage.prototype.transHtml = function () {
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.abstract) {
                item.displayAbstract = this.messageProvider.transformHtml(item.abstract);
                item.displayAbstract = this.sanitizer.bypassSecurityTrustHtml(item.displayAbstract); //遵循angular机制才会正常绑定html 
            }
        }
    };
    MessageListPage.prototype.abstractOnClick = function (e, message) {
        e.stopPropagation(); //阻止冒泡事件 
        e = e || window.event; //兼容IE8
        var target = e.target || e.srcElement; //判断目标事件 
        var url = target.href === 'javascript:void(0)' ? (target.title || target.innerText) : '';
        this.goMessageDetail(message, url);
    };
    /**
     * 滚动到底部
     */
    MessageListPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 10);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Content */])
    ], MessageListPage.prototype, "content", void 0);
    MessageListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'page-message-list',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\message\message-list\message-list.html"*/'<ion-header >\n\n  <ion-navbar>\n\n    <ion-title class="title">{{messageTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="options()" >\n\n          <ion-icon name="ios-more"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n  </ion-navbar> \n\n</ion-header>\n\n\n\n<ion-content class="cards-bg"    >\n\n  <ion-refresher (ionRefresh)="doRefresh($event)" >\n\n    <ion-refresher-content pullingIcon="arrow-dropdown"  >\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n   \n\n  <nodata text="{{\'MESSAGE_EMPTY\' | translate}}" translateKey="MESSAGE_EMPTY" *ngIf="isDataEmpty && !isDataLoading  "></nodata>\n\n\n\n  <div class="message-container">\n\n\n\n \n\n  <div  *ngFor="let message of messages "  [ngSwitch]="lowerCaseFormatType(message.formatType)" >\n\n    <div class="datetime ">\n\n        <span class="red-point" *ngIf="!message.isRead"> </span>\n\n        <span class="time-value">{{message.displayTime}}</span>\n\n    </div>\n\n \n\n    <ion-card [id]="message.id"  ion-long-press (onPressStart)="onHold(message, $event)" (onPressEnd)="released( $event)"     [ngClass]="{\'card-ios-canClick\':message.redirectUrl}" (click)="goMessageDetail(message)" >\n\n\n\n      <div *ngSwitchCase="\'text\'"> \n\n        <ion-item *ngIf="message.title!=null">\n\n          <h2>{{message.title}}</h2>\n\n        </ion-item>\n\n        <ion-card-content>\n\n          <div [innerHTML]="message.displayAbstract" (click)="abstractOnClick($event,message)">\n\n          </div>\n\n        </ion-card-content>\n\n       \n\n      </div>\n\n \n\n        <div  *ngSwitchCase="\'image\'">  \n\n          <img-lazy-load class="image"   [src]="message.imageUrl"></img-lazy-load>  \n\n        </div> \n\n      <div *ngSwitchCase="\'headerimage\'"> \n\n        <ion-item *ngIf="message.title!=null">\n\n          <h2>{{message.title}}</h2>\n\n        </ion-item>\n\n        <img-lazy-load class="image" [src]="message.imageUrl"></img-lazy-load> \n\n      </div>\n\n\n\n      <div class="titleInImage" *ngSwitchCase="\'titleinimage\'"> \n\n        <img-lazy-load class="image"  [src]="message.imageUrl"></img-lazy-load> \n\n        <div *ngIf="message.title!=null" class="title">\n\n          {{message.title}}\n\n        </div>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'richtextimage\'"> \n\n        <ion-item *ngIf="message.title!=null">\n\n          <h2>{{message.title}}</h2>\n\n        </ion-item>\n\n        <img-lazy-load class="image"   *ngIf="message.imageUrl" [src]="message.imageUrl"></img-lazy-load> \n\n        <ion-card-content>\n\n          <div [innerHTML]="message.displayAbstract" (click)="abstractOnClick($event,message)">\n\n          </div>\n\n        </ion-card-content>\n\n      </div> \n\n\n\n      <div *ngSwitchDefault > \n\n          <ion-item *ngIf="message.title!=null">\n\n            <h2>{{message.title}}</h2>\n\n          </ion-item>\n\n          <img-lazy-load class="image"   *ngIf="message.imageUrl" [src]="message.imageUrl"></img-lazy-load> \n\n          <ion-card-content>\n\n            <div [innerHTML]="message.displayAbstract" (click)="abstractOnClick($event,message)">\n\n            </div>\n\n          </ion-card-content>\n\n        </div> \n\n      \n\n    </ion-card>\n\n\n\n  </div>\n\n</div>\n\n  <!-- <data-hints text="{{\'MESSAGE_NO_MORE\' | translate}}" *ngIf="!finiteScroll && page > 1"></data-hints>  -->\n\n  <!-- 上滑的时候,加载数据 -->\n\n  <ion-infinite-scroll *ngIf="finiteScroll" (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content aria-posinset="button" loadingSpinner="bubbles">\n\n    </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\message\message-list\message-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__providers_providers__["i" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_providers__["n" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_5__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_2__providers_preload_provider__["a" /* PreloadProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_providers__["c" /* CacheProvider */],
            __WEBPACK_IMPORTED_MODULE_7__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__providers_club_provider__["a" /* ClubProvider */],
            __WEBPACK_IMPORTED_MODULE_11__services_services__["g" /* StorageService */]])
    ], MessageListPage);
    return MessageListPage;
}());

//# sourceMappingURL=message-list.js.map

/***/ }),

/***/ 1264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LongPressDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongPressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(64);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LongPressDirective = /** @class */ (function () {
    function LongPressDirective(zone, el) {
        this.zone = zone;
        this.onPressStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onPressing = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onPressEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    LongPressDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.interval)
            this.interval = 500;
        if (this.interval < 40) {
            throw new Error('A limit of 40ms is imposed so you don\'t destroy device performance. If you need less than a 40ms interval, please file an issue explaining your use case.');
        }
        this.pressGesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__["a" /* Gesture */](this.el);
        this.pressGesture.listen();
        this.pressGesture.on('press', function (e) {
            _this.onPressStart.emit(e);
            _this.clearInt();
            _this.int = /** @type {?} */ (setInterval(function () {
                _this.onPressing.emit();
            }, _this.interval));
        });
        this.pressGesture.on('pressup', function (e) {
            _this.pressEnd();
        });
        this.pressGesture.on('pan', function (e) {
            _this.pressEnd();
        });
        this.pressGesture.on('release', function (e) {
            _this.pressEnd();
        });
        this.el.addEventListener('mouseleave', function (e) {
            _this.pressEnd();
        });
        this.el.addEventListener('mouseout', function (e) {
            _this.pressEnd();
        });
    };
    /**
     * @return {?}
     */
    LongPressDirective.prototype.clearInt = /**
     * @return {?}
     */
    function () {
        if (this.int !== undefined) {
            clearInterval(this.int);
            this.int = undefined;
        }
    };
    /**
     * @return {?}
     */
    LongPressDirective.prototype.pressEnd = /**
     * @return {?}
     */
    function () {
        this.clearInt();
        this.onPressEnd.emit();
    };
    /**
     * @return {?}
     */
    LongPressDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.pressEnd();
        this.pressGesture.destroy();
    };
    LongPressDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[ion-long-press]'
                },] },
    ];
    /** @nocollapse */
    LongPressDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    LongPressDirective.propDecorators = {
        "interval": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "onPressStart": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "onPressing": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "onPressEnd": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return LongPressDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LongPressModule = /** @class */ (function () {
    function LongPressModule() {
    }
    LongPressModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
                    ],
                    declarations: [LongPressDirective],
                    exports: [LongPressDirective]
                },] },
    ];
    return LongPressModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtbG9uZy1wcmVzcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaW9uaWMtbG9uZy1wcmVzcy9kaXJlY3RpdmVzL2xvbmctcHJlc3MuZGlyZWN0aXZlLnRzIiwibmc6Ly9pb25pYy1sb25nLXByZXNzL2xvbmctcHJlc3MubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHZXN0dXJlIH0gZnJvbSAnaW9uaWMtYW5ndWxhci9nZXN0dXJlcy9nZXN0dXJlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaW9uLWxvbmctcHJlc3NdJ1xufSlcbmV4cG9ydCBjbGFzcyBMb25nUHJlc3NEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBpbnRlcnZhbDogbnVtYmVyO1xuXG4gICAgQE91dHB1dCgpIG9uUHJlc3NTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG9uUHJlc3Npbmc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBvblByZXNzRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGVsOiBIVE1MRWxlbWVudDtcbiAgICBwcmVzc0dlc3R1cmU6IEdlc3R1cmU7XG5cbiAgICBpbnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgem9uZTogTmdab25lLFxuICAgICAgICBlbDogRWxlbWVudFJlZlxuICAgICkge1xuICAgICAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVydmFsKSB0aGlzLmludGVydmFsID0gNTAwO1xuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCA8IDQwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgbGltaXQgb2YgNDBtcyBpcyBpbXBvc2VkIHNvIHlvdSBkb25cXCd0IGRlc3Ryb3kgZGV2aWNlIHBlcmZvcm1hbmNlLiBJZiB5b3UgbmVlZCBsZXNzIHRoYW4gYSA0MG1zIGludGVydmFsLCBwbGVhc2UgZmlsZSBhbiBpc3N1ZSBleHBsYWluaW5nIHlvdXIgdXNlIGNhc2UuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZSA9IG5ldyBHZXN0dXJlKHRoaXMuZWwpO1xuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5saXN0ZW4oKTtcbiAgICAgICAgdGhpcy5wcmVzc0dlc3R1cmUub24oJ3ByZXNzJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblByZXNzU3RhcnQuZW1pdChlKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJJbnQoKTtcbiAgICAgICAgICAgIHRoaXMuaW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25QcmVzc2luZy5lbWl0KCk7XG4gICAgICAgICAgICB9LCB0aGlzLmludGVydmFsKSBhcyBhbnk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJlc3NHZXN0dXJlLm9uKCdwcmVzc3VwJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5vbigncGFuJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZXNzR2VzdHVyZS5vbigncmVsZWFzZScsIChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJlc3NFbmQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmVzc0VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhckludCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnQpO1xuICAgICAgICAgICAgdGhpcy5pbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmVzc0VuZCgpIHtcbiAgICAgICAgdGhpcy5jbGVhckludCgpO1xuICAgICAgICB0aGlzLm9uUHJlc3NFbmQuZW1pdCgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnByZXNzRW5kKCk7XG4gICAgICAgIHRoaXMucHJlc3NHZXN0dXJlLmRlc3Ryb3koKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHZXN0dXJlIH0gZnJvbSAnaW9uaWMtYW5ndWxhci9nZXN0dXJlcy9nZXN0dXJlJztcbmltcG9ydCB7IExvbmdQcmVzc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9sb25nLXByZXNzLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW0xvbmdQcmVzc0RpcmVjdGl2ZV0sXG4gICAgZXhwb3J0czogW0xvbmdQcmVzc0RpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTG9uZ1ByZXNzTW9kdWxlIHsgfSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBbUJJLDRCQUNXLE1BQ1AsRUFBYztRQURQLFNBQUksR0FBSixJQUFJOzRCQVY2QixJQUFJLFlBQVksRUFBRTswQkFDcEIsSUFBSSxZQUFZLEVBQUU7MEJBQ2xCLElBQUksWUFBWSxFQUFFO1FBV3hELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM5Qjs7OztJQUVELHFDQUFROzs7SUFBUjtRQUFBLGlCQW1DQztRQWxDRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUN4QyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsNEpBQTRKLENBQUMsQ0FBQztTQUNqTDtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBTTtZQUNqQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsS0FBSSxDQUFDLEdBQUcscUJBQUcsV0FBVyxDQUFDO2dCQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzFCLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBUSxDQUFBLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBTTtZQUNuQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsQ0FBTTtZQUMvQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBTTtZQUNuQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBQyxDQUFNO1lBQzFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxVQUFDLENBQU07WUFDeEMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUN4QixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO0tBQ0o7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUMxQjs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQy9COztnQkEzRUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7aUJBQy9COzs7O2dCQUxvRCxNQUFNO2dCQUF2QyxVQUFVOzs7NkJBUXpCLEtBQUs7aUNBRUwsTUFBTTsrQkFDTixNQUFNOytCQUNOLE1BQU07OzZCQVpYOzs7Ozs7O0FDQUE7Ozs7Z0JBS0MsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3FCQUNmO29CQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDaEM7OzBCQVhEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ })

});
//# sourceMappingURL=10.js.map