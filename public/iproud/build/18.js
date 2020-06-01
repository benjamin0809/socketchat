webpackJsonp([18],{

/***/ 1096:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPageModule", function() { return MyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(1123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_list__ = __webpack_require__(1286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MyPageModule = (function () {
    function MyPageModule() {
    }
    MyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__my_list__["a" /* MyListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__my_list__["a" /* MyListPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__my_list__["a" /* MyListPage */]
            ]
        })
    ], MyPageModule);
    return MyPageModule;
}());

//# sourceMappingURL=my-list.module.js.map

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

/***/ 1286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_club_provider__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_social_social__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_provider__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_preload_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_provider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_providers__ = __webpack_require__(70);
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












var MyListPage = (function () {
    function MyListPage(navCtrl, userProvider, events, session, translate, nativeService, configProvider, widgetProvider, serverProvider, preload, sqliteProvider, modalController, socialProvider, storage, clubProvider, cd, cacheProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.events = events;
        this.session = session;
        this.translate = translate;
        this.nativeService = nativeService;
        this.configProvider = configProvider;
        this.widgetProvider = widgetProvider;
        this.serverProvider = serverProvider;
        this.preload = preload;
        this.sqliteProvider = sqliteProvider;
        this.modalController = modalController;
        this.socialProvider = socialProvider;
        this.storage = storage;
        this.clubProvider = clubProvider;
        this.cd = cd;
        this.cacheProvider = cacheProvider;
        this.currentUser = {
            pictureUrl: "assets/img/avatar-round.png"
        };
        this.needUpdate = false;
        this.isLogin = false;
        this.isEmployee = false;
        this.showHeader = false;
        this.isBindWeChat = false;
        this.isBeta = true;
        this.tmpUrl = "http://www.popochiu.com/upload/1558145430468.html";
        this.CommunityUrls = {
            follows: this.tmpUrl,
            publish: this.tmpUrl,
            comments: this.tmpUrl,
            avtivity: this.tmpUrl
        };
        this.achieveItem = {
            score: 0,
            ranking: 0,
            medalQuantity: 0,
            level: "LV1",
            ratio: "0%"
        };
        this.showMass = false;
        this.showSocial = false;
        if (this.session.user != null) {
            this.currentUser = this.session.user;
            this.isLogin = true;
        }
        this._InfoConfig();
        this.checkVersion();
        this.getSocialProfile();
        var func = [this.getSocialProfile, this._InfoConfig];
        var eventList = [
            {
                eventName: "user:info-changed",
                func: [0, 1]
            },
            {
                eventName: "user:permission-changed",
                func: [0, 1]
            },
            {
                eventName: "achievement:refresh-assets",
                func: [0]
            },
            {
                eventName: "MassFlagChange",
                func: [1]
            },
            {
                eventName: "changeCommunityUrl",
                func: [1]
            }
        ];
        eventList.forEach(function (item) {
            _this.events.subscribe(item.eventName, function () {
                item.func.forEach(function (f) {
                    func[f].call(_this);
                });
            });
        });
        // //當用戶信息變更時，接收廣播
        // this.events.subscribe('user:info-changed', () => {
        //   this.getSocialProfile()
        //   this._InfoConfig()
        // });
        // this.events.subscribe('user:permission-changed', () => {
        //   this.getSocialProfile()
        //   this._InfoConfig()
        // });
        // this.events.subscribe('achievement:refresh-assets', () => {
        //   this.getSocialProfile()
        // });
        // this.events.subscribe('MassFlagChange', () => {
        //   this._InfoConfig()
        // })
        // this.events.subscribe('changeCommunityUrl', () => {
        //   this._InfoConfig();
        // })
    }
    MyListPage.prototype._InfoConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1, CommunityUrls;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.cacheProvider.getSocialSetting()];
                    case 1:
                        res = _a.sent();
                        this.showSocial = res.showSocial;
                        this.showMass = res.showMass;
                        this.session.showSocial = res.showSocial;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3:
                        this.currentUser = this.session.user;
                        this.isEmployee = this.session.isEmployee;
                        if (this.currentUser) {
                            this.isBindWeChat = this.currentUser.isBindedWX || this.currentUser.nickNameWX || this.currentUser.headImgUrlWX;
                            this.isLogin = true;
                            this.currentUser.pictureUrl =
                                this.currentUser.pictureUrl || "assets/img/avatar-round.png";
                            if (this.currentUser.employeeInfo) {
                                this.staffNumber = this.currentUser.employeeInfo.staffNumber;
                            }
                        }
                        else {
                            this.staffNumber = "";
                        }
                        return [4 /*yield*/, this.storage.getItem("CommunityUrls")];
                    case 4:
                        CommunityUrls = _a.sent();
                        if (CommunityUrls && CommunityUrls.my) {
                            this.CommunityUrls = CommunityUrls.my;
                        }
                        this.content.scrollToTop();
                        this.showHeader = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The view loaded, let's query our items for the list
     */
    MyListPage.prototype.ionViewDidLoad = function () {
        if (!this.isLogin) {
            this.userProvider.getUserInfo();
        }
    };
    MyListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.configProvider.init().then(function () {
            _this.checkVersion();
        });
    };
    MyListPage.prototype.openMedalPage = function () {
        this.navCtrl.push("MymodalPage");
    };
    MyListPage.prototype.getSocialProfile = function (_event) {
        var _this = this;
        this.socialProvider.getProfiles().subscribe(function (res) {
            _event && _event.complete();
            _this.achieveItem = _this.socialProvider.socialProfiles;
            if (_this.achieveItem.currentLevelExperience +
                _this.achieveItem.nextLevelExperience >
                0) {
                _this.achieveItem.ratio =
                    (_this.achieveItem.currentLevelExperience * 100) /
                        (_this.achieveItem.currentLevelExperience +
                            _this.achieveItem.nextLevelExperience) +
                        "%";
            }
        }, function (err) {
            _event && _event.complete();
        });
    };
    MyListPage.prototype.openScancode = function () {
        event.stopPropagation();
        this.navCtrl.push("MycodePage");
    };
    MyListPage.prototype.openSignPage = function () {
        this.navCtrl.push("SignInPage");
    };
    MyListPage.prototype.openSociality = function (index) {
        if (index == 1) {
            this.navCtrl.push("MySegmentPage", { socialcontact: "fabiao" });
        }
        else if (index == 2) {
            this.navCtrl.push("MySegmentPage", { socialcontact: "guanzhu" });
        }
        else if (index == 3) {
            this.navCtrl.push("MySegmentPage", { socialcontact: "fans" });
        }
        else {
            this.navCtrl.push("MySegmentPage", { socialcontact: "huozan" });
        }
    };
    MyListPage.prototype.openMyFanstPage = function (item) {
        this.clubProvider.openWebpage(this.clubProvider.MyFans(), this.navCtrl);
    };
    MyListPage.prototype.openCollectPage = function (item) {
        this.clubProvider.openWebpage(this.clubProvider.MyFavorite(), this.navCtrl);
    };
    MyListPage.prototype.openAccumulatePoints = function (item) {
        this.navCtrl.push("AccumulatePointsPage");
    };
    MyListPage.prototype.openSecurity = function () {
        if (this.checkLogin()) {
            this.navCtrl.push("SecurityPage");
        }
    };
    /**
     * Navigate to my info page.
     */
    MyListPage.prototype.openEmployeeIdentityPage = function () {
        if (this.checkLogin()) {
            this.navCtrl.push("EmployeeIdentityPage");
        }
    };
    /**
     * Navigate to my info page.
     */
    MyListPage.prototype.openMyInfoPage = function () {
        if (this.checkLogin()) {
            this.navCtrl.push("MyInfoPage");
        }
    };
    /**
     * Navigate to the about page.
     */
    MyListPage.prototype.openAboutPage = function () {
        var params = { language: this.session.language };
        if (this.currentUser) {
            params["isAdmin"] = this.currentUser.isAdmin;
            params["userId"] = this.currentUser.userId;
        }
        this.navCtrl.push("AboutPage", params);
    };
    /**
     * Navigate to settings page.
     */
    /**
     * 分享
     */
    MyListPage.prototype.openSharePage = function () {
        var shareMessage = {
            title: this.translate.instant("SHARE_TITLE"),
            description: this.translate.instant("SHARE_DESCRIPTION"),
            thumb: "www/assets/imgs/logo.png",
            resource: "https://iproud.fihmb.com/AppClient" //图片url或网页url
        };
        this.preload.openShareModal({
            shareMessage: shareMessage,
            navigationDockTargetMapIds: [1, 2],
            isShareImage: false,
            qrcode: "assets/imgs/iproud_qrcode.png"
        });
    };
    MyListPage.prototype.openSettingsPage = function () {
        var params = { language: this.session.language };
        if (this.currentUser) {
            params["isAdmin"] = this.currentUser.isAdmin;
            params["userId"] = this.currentUser.userId;
        }
        this.navCtrl.push("SettingsPage", params);
    };
    MyListPage.prototype.openService = function () {
        this.widgetProvider.openFeedback(this.navCtrl);
    };
    //登出
    MyListPage.prototype.doLogout = function () {
        var _this = this;
        this.isLogin = false;
        this.currentUser = {
            pictureUrl: "assets/img/avatar-round.png",
            employeeInfo: {}
        };
        this.staffNumber = "";
        this.userProvider.logout().subscribe(function () {
            _this.events.publish("user:logout");
            _this.sqliteProvider.closeUserDataBase();
        });
    };
    //是否已經登錄，若沒登錄，則打開登錄頁面
    MyListPage.prototype.checkLogin = function () {
        if (!this.isLogin) {
            this.events.publish("user:reLogin");
            return false;
        }
        return true;
    };
    MyListPage.prototype.checkVersion = function () {
        this.currentVerionNo = this.configProvider.currentVersionNo;
        this.lastestVerionNo = this.configProvider.latestVersionNo;
        this.needUpdate = __WEBPACK_IMPORTED_MODULE_10__services_services__["h" /* Utility */].checkNewVersion(this.lastestVerionNo, this.currentVerionNo);
    };
    MyListPage.prototype.openCommunityPage = function (url) {
        var page = {
            url: url,
            options: {
                useNativeBrowser: "iframe"
            }
        };
        this.widgetProvider.openWebpage(page, this.navCtrl);
    };
    /** 我的评论 */
    MyListPage.prototype.openMyComment = function () {
        this.clubProvider.openWebpage(this.clubProvider.MyComment(), this.navCtrl);
    };
    /**
     * 我的关注
     */
    MyListPage.prototype.openMyFollows = function () {
        this.clubProvider.openWebpage(this.clubProvider.MyFollow(), this.navCtrl);
    };
    /**
     * 我的活动
     */
    MyListPage.prototype.openMyEvents = function () {
        this.clubProvider.openWebpage(this.clubProvider.MyActivity(), this.navCtrl);
    };
    /**
     * 我的发表
     */
    MyListPage.prototype.openMyPublish = function () {
        this.clubProvider.openWebpage(this.clubProvider.MyPublish(), this.navCtrl);
    };
    MyListPage.prototype.openSpeechPage = function () {
        this.navCtrl.push("SpeechPage");
    };
    /**
     * 任务清单
     */
    MyListPage.prototype.openTaskList = function () {
        this.navCtrl.push("AchieveTaskListPage");
    };
    /**
     * 我的成就
     */
    MyListPage.prototype.openAchievement = function () {
        this.navCtrl.push("AchievementPage");
    };
    /**
     * 我的员宝贝
     */
    MyListPage.prototype.openMyAssets = function (selected) {
        this.navCtrl.push("MyAssetsPage", {
            selected: selected,
            details: this.achieveItem
        });
    };
    /**
     * 制度说明
     */
    MyListPage.prototype.openTerms = function () {
        this.modalController
            .create("PrivacyPolicyPage", {
            subjectId: 74605615803392,
            language: this.session.language
        })
            .present();
    };
    MyListPage.prototype.checkExprience = function () {
        this.nativeService.showToast("\n    " + this.translate.instant("MY_LIST_EXPERIENCE") + this.achieveItem.experience + "\n    " + this.translate.instant("MY_LIST_NEXT_LEVEL_REQUIRES") + " \n    " + this.achieveItem.nextLevelExperience);
    };
    MyListPage.prototype.doRefresh = function (_event) {
        this.getSocialProfile(_event);
    };
    MyListPage.prototype.scrollEvent = function (e) {
        var _this = this;
        e && (function () {
            var scrollTop = e.scrollTop;
            if (scrollTop > 35) {
                _this.showHeader = true;
            }
            else {
                _this.showHeader = false;
            }
            _this.cd.detectChanges();
        })();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* Content */])
    ], MyListPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])("header"),
        __metadata("design:type", Object)
    ], MyListPage.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])("toolbar"),
        __metadata("design:type", Object)
    ], MyListPage.prototype, "toolbar", void 0);
    MyListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: "page-my-list",template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\my\my-list\my-list.html"*/'<ion-header transparent [ngClass]="{ \'show-header\': showHeader }">\n\n  <ion-toolbar #toolbar transparent>\n\n    <div class="header-container" *ngIf="showHeader" (click)="openMyInfoPage(item)">\n\n      <img class="header-avator" [src]="currentUser?.pictureUrl" />\n\n      <span class="header-title">{{ currentUser?.nickName || currentUser?.userName }}\n\n      </span>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content no-bounce fullscreen (ionScroll)="scrollEvent($event)">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <div class="content-profile" [ngClass]="{ \'content-profile-showMass\': showMass }"></div>\n\n  <div class="float-card">\n\n    <img class="avator" [src]="currentUser?.pictureUrl" (click)="openMyInfoPage(item)" />\n\n    <div class="table">\n\n      <span class="title" (click)="openMyInfoPage(item)">{{ currentUser?.nickName || currentUser?.userName }}\n\n      </span>\n\n\n\n      <div class="level-container">\n\n        <span class="level-value" (click)="checkExprience()" *ngIf="showMass">{{\n\n          achieveItem.level\n\n          }}</span>\n\n        <span class="exprience" (click)="checkExprience()" *ngIf="showMass">\n\n          <span class="bar" [ngStyle]="{ width: achieveItem.ratio }"></span>\n\n        </span>\n\n        <span class="clear-score" *ngIf="!showMass" (click)="openMyAssets()">{{ achieveItem.score }}\n\n          <span class="name">{{\n\n            "SOCIAL_IPROUD_POINTS" | translate\n\n            }}</span></span>\n\n        <span class="sign" (click)="openSignPage()">\n\n          {{ "MY_LIST_SIGN_BUTTONNAME" | translate }}\n\n          <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n        </span>\n\n      </div>\n\n    </div>\n\n\n\n    <ion-grid class="achieve-item" *ngIf="showMass && !showSocial">\n\n      <ion-row>\n\n        <ion-col col-4 text-center>\n\n          <button text-center class="button-item" (click)="openMyAssets()">\n\n            <!-- <span class="count" *ngIf="isLogin">{{achieveItem.score}}</span> -->\n\n            <counto class="count" [endVal]="achieveItem.score"></counto>\n\n            <span class="name">{{ "MY_LIST_ASSETS_SHELL" | translate }}</span>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n          <button text-center class="button-item" (click)="openMyAssets(\'rank\')">\n\n            <counto class="count" [endVal]="achieveItem.ranking"></counto>\n\n            <!-- <span class="count" *ngIf="isLogin">{{achieveItem.ranking}}</span> -->\n\n            <span class="name">{{ "MY_LIST_ASSETS_RANKS" | translate }}</span>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n          <button text-center class="button-item" (click)="openAchievement()">\n\n            <!-- <span class="count" *ngIf="isLogin">{{achieveItem.medalQuantity}}</span> -->\n\n            <counto class="count" [endVal]="achieveItem.medalQuantity"></counto>\n\n            <span class="name">{{ "MY_LIST_ASSETS_MEDALS" | translate }}</span>\n\n          </button>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-grid class="achieve-item" *ngIf="showMass && showSocial">\n\n      <ion-row>\n\n        <ion-col col-3 text-center>\n\n          <button text-center class="button-item" (click)="openMyAssets()">\n\n            <!-- <span class="count" *ngIf="isLogin">{{achieveItem.score}}</span> -->\n\n            <counto class="count" [endVal]="achieveItem.score"></counto>\n\n            <span class="name">{{ "MY_LIST_ASSETS_SHELL" | translate }}</span>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-3 text-center>\n\n          <button text-center class="button-item" (click)="openMyAssets(\'rank\')">\n\n            <counto class="count" [endVal]="achieveItem.ranking"></counto>\n\n            <!-- <span class="count" *ngIf="isLogin">{{achieveItem.ranking}}</span> -->\n\n            <span class="name">{{ "MY_LIST_ASSETS_RANKS" | translate }}</span>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-3 text-center>\n\n          <button text-center class="button-item" (click)="openAchievement()">\n\n            <!-- <span class="count" *ngIf="isLogin">{{achieveItem.medalQuantity}}</span> -->\n\n            <counto class="count" [endVal]="achieveItem.medalQuantity"></counto>\n\n            <span class="name">{{ "MY_LIST_ASSETS_MEDALS" | translate }}</span>\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col col-3 text-center>\n\n          <button text-center class="button-item" (click)="openMyFanstPage()">\n\n            <!-- <span class="count" *ngIf="isLogin">{{achieveItem.medalQuantity}}</span> -->\n\n            <counto class="count" [endVal]="achieveItem.fans"></counto>\n\n            <span class="name">{{ "MY_LIST_MY_FANS" | translate }}</span>\n\n          </button>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n  </div>\n\n\n\n  <ion-grid class="achievement" *ngIf="showMass">\n\n    <ion-row>\n\n      <ion-col col-3 text-center>\n\n        <button text-center class="button-item" (click)="openMyAssets()">\n\n          <img src="assets/img/achievement/coins.png" />\n\n          <span class="description">{{\n\n            "MY_LIST_SHELLS_DETAILS" | translate\n\n            }}</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-3 text-center>\n\n        <button text-center class="button-item" (click)="openTaskList()">\n\n          <img src="assets/img/achievement/tasks.png" />\n\n          <span class="description">{{ "MY_LIST_TASKLIST" | translate }}</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-3 text-center>\n\n        <button text-center class="button-item" (click)="openAchievement()">\n\n          <img src="assets/img/achievement/medal.png" />\n\n          <span class="description">{{\n\n            "MY_LIST_ACHIEVELIST" | translate\n\n            }}</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-3 text-center>\n\n        <button text-center class="button-item" (click)="openTerms()">\n\n          <img src="assets/img/achievement/items.png" />\n\n          <span class="description">{{\n\n            "MY_LIST_SCORE_ROLE" | translate\n\n            }}</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div class="divider"></div>\n\n\n\n  <ion-list class="item-list">\n\n    <div>\n\n      <div class="item-list-block">\n\n        <button ion-item (click)="openEmployeeIdentityPage(item)">\n\n          <ion-icon iproud name="mylist-people" item-start color="medium"></ion-icon>\n\n          <h2>{{ "MY_LIST_EMPLOYEE" | translate }}</h2>\n\n          <ion-note item-end>{{ staffNumber }} </ion-note>\n\n        </button>\n\n\n\n        <button ion-item (click)="openSecurity()">\n\n          <ion-icon iproud name="mylist-security" item-start color="medium"></ion-icon>\n\n          <h2>{{ "MY_LIST_SECURITY" | translate }}</h2>\n\n          <!-- <ion-note item-end>\n\n            <img class="wechat" *ngIf="isBindWeChat" src="assets/icon/wechat.png" />\n\n          </ion-note> -->\n\n        </button>\n\n\n\n      </div>\n\n      <div class="divider"></div>\n\n    </div>\n\n\n\n\n\n\n\n    <div *ngIf="showSocial">\n\n\n\n      <div class="item-list-block">\n\n\n\n        <button ion-item (click)="openMyFollows()">\n\n          <ion-icon iproud name="community-follow" item-start color="medium"></ion-icon>\n\n          <h2>{{ "MY_LIST_MYFOLLOWS" | translate }}</h2>\n\n          <ion-note item-end> </ion-note>\n\n        </button>\n\n        <button ion-item (click)="openMyPublish()">\n\n          <ion-icon iproud name="community-publish" item-start color="medium"></ion-icon>\n\n          <h2>{{ "MY_LIST_MYPUBLISH" | translate }}</h2>\n\n          <ion-note item-end> </ion-note>\n\n        </button>\n\n\n\n        <button ion-item (click)="openCollectPage(item)">\n\n          <ion-icon iproud name="mylist-collection" item-start color="medium"></ion-icon>\n\n          <h2>{{ "MY_LIST_MYFAVOURITE" | translate }}</h2>\n\n          <ion-note item-end> </ion-note>\n\n        </button>\n\n        <!-- <ion-note ion-item (click)="openMyComment()">\n\n        <ion-icon iproud name="community-comment"  item-start color="medium"></ion-icon>\n\n        <h2>{{ \'MY_LIST_MYCOMMENTS\' | translate }}</h2>\n\n        <ion-note item-end>\n\n        </ion-note>\n\n      </button>\n\n      <button ion-item (click)="openMyEvents()" no-lines>\n\n        <ion-icon iproud name="community-events"   item-start color="medium"></ion-icon>\n\n        <h2>{{ \'MY_LIST_MYEVENTS\' | translate }}</h2>\n\n        <ion-note item-end>\n\n        </ion-note>\n\n      </button>  -->\n\n\n\n      </div>\n\n      <div class="divider"></div>\n\n    </div>\n\n    <button ion-item (click)="openService()" *ngIf="isEmployee">\n\n      <ion-icon iproud name="mylist-help" item-start color="medium"></ion-icon>\n\n      <h2>{{ "MY_LIST_HELP" | translate }}</h2>\n\n      <ion-note item-end> </ion-note>\n\n    </button>\n\n    <!-- <button ion-item (click)="openSharePage()">\n\n      <ion-icon iproud name="mylist-share" item-start color="medium"></ion-icon>\n\n      <h2>{{ "MY_LIST_SHARE" | translate }}</h2>\n\n      <ion-note item-end> </ion-note>\n\n    </button> -->\n\n\n\n    <button ion-item (click)="openSettingsPage()">\n\n      <ion-icon iproud name="mylist-setting" item-start color="medium"></ion-icon>\n\n      <h2>{{ "MY_LIST_SETTING" | translate }}</h2>\n\n      <ion-note item-end> </ion-note>\n\n    </button>\n\n    <button ion-item (click)="openAboutPage()">\n\n      <ion-icon iproud name="mylist-about" item-start color="medium"></ion-icon>\n\n      <h2>{{ "MY_LIST_ABOUT" | translate }}</h2>\n\n      <ion-note item-end>\n\n        <!-- <p *ngIf="needUpdate">\n\n          <ion-badge color="danger">new</ion-badge> {{ lastestVerionNo }}\n\n        </p>\n\n        <p *ngIf="!needUpdate">{{ currentVerionNo }}</p> -->\n\n      </ion-note>\n\n    </button>\n\n  </ion-list>\n\n\n\n  <div padding *ngIf="isLogin" text-center>\n\n    <button (click)="doLogout()" ion-button color="medium" outline round block icon-left>\n\n      {{ "MY_LIST_LOGOUT" | translate }}\n\n    </button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\my\my-list\my-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_provider__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_10__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_11__providers_providers__["d" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_providers__["n" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["k" /* ServerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_preload_provider__["a" /* PreloadProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_provider__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_social_social__["a" /* SocialProvider */],
            __WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_club_provider__["a" /* ClubProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["c" /* CacheProvider */]])
    ], MyListPage);
    return MyListPage;
}());

//# sourceMappingURL=my-list.js.map

/***/ })

});
//# sourceMappingURL=18.js.map