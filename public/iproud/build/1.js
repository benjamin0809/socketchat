webpackJsonp([1],{

/***/ 1079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__ = __webpack_require__(1138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(1123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_main__ = __webpack_require__(1254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__home_main__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__home_main__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__["a" /* DirectivesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__home_main__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home-main.module.js.map

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

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_cache_provider__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_preload_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_providers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_session__ = __webpack_require__(19);
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











var TabsPage = (function () {
    function TabsPage(navCtrl, translateService, messageProvider, session, events, jpushService, storageService, cd, element, preloadProvider, cacheProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.messageProvider = messageProvider;
        this.session = session;
        this.events = events;
        this.jpushService = jpushService;
        this.storageService = storageService;
        this.cd = cd;
        this.element = element;
        this.preloadProvider = preloadProvider;
        this.cacheProvider = cacheProvider;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_8__pages__["f" /* Tab1Root */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_8__pages__["g" /* Tab2Root */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_8__pages__["h" /* Tab3Root */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_8__pages__["i" /* Tab4Root */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_8__pages__["j" /* Tab5Root */];
        this.tab1Title = " ";
        this.tab2Title = " ";
        this.tab3Title = " ";
        this.tab4Title = " ";
        this.tab5Title = " ";
        // isEmployee: Boolean = false;
        this.isShowScreenShot = false;
        this.showSocial = false;
        this.newMessageCount = 0;
        this.showTabs = true;
        this._setTabText();
        this.init();
        // 当收到推送消息时（此时将消息存储）
        this.events.subscribe('jpush.notificationReceived', function () {
            // if (this.tabRef.getSelected().index != 1) {
            // this.newMessageCount += 1;
            _this._setTabMessageBadge();
            // }
        });
        this.events.subscribe('beta: showScreenShotButton', function (isShowScreenShot) {
            _this.isShowScreenShot = isShowScreenShot;
        });
        this.events.subscribe('lang:changed', function (event) {
            _this._setTabText();
        });
        this.events.subscribe('to-homemain', function (event) {
            _this.selectTab(0);
        });
        this.events.subscribe('changeTabsDisplay', function (isHide) {
            _this.showTabs = !isHide;
        });
        this.events.subscribe('user:info-changed', function () {
            // this.isEmployee = this.session.isEmployee;
            setTimeout(function () {
                _this.init();
                _this.cd && _this.cd.detectChanges();
            }, 100);
        });
        this.events.subscribe('message:count-changed', function (count) {
            if (count > 0) {
                _this.newMessageCount = count;
            }
            else {
                _this.newMessageCount = 0;
            }
            _this.jpushService.setIosIconBadgeNumber(count);
            _this._setTabMessageBadge();
            // setTimeout(()=>{ 
            //   if (!this.cd['destroyed'])this.cd.detectChanges();
            // },500) 
        });
        this.events.subscribe('MassFlagChange', function () {
            _this.init();
        });
    }
    TabsPage.prototype.ionChange = function () {
        if (this.tabRef.getSelected().index == 1) {
        }
    };
    ;
    TabsPage.prototype.selectTab = function (index) {
        this.tabRef.select(index);
        this.ionChange();
    };
    TabsPage.prototype._setTabMessageBadge = function () {
        if (this.newMessageCount == 0) {
            this.tabRef.getByIndex(1).tabBadge = "";
        }
        else {
            this.tabRef.getByIndex(1).tabBadge = this.newMessageCount.toString();
            this.cd && this.cd.detectChanges();
        }
    };
    TabsPage.prototype._setTabText = function () {
        var _this = this;
        this.translateService.get(['TABS_TAB1_TITLE', 'TABS_TAB2_TITLE', 'TABS_TAB3_TITLE', 'TABS_TAB4_TITLE', 'TABS_TAB5_TITLE']).subscribe(function (values) {
            _this.tab1Title = values['TABS_TAB1_TITLE'];
            _this.tab2Title = values['TABS_TAB2_TITLE'];
            _this.tab3Title = values['TABS_TAB3_TITLE'];
            _this.tab4Title = values['TABS_TAB4_TITLE'];
            _this.tab5Title = values['TABS_TAB5_TITLE'];
        });
    };
    TabsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (event) {
            _this._setTabText();
        });
    };
    TabsPage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.cacheProvider.getSocialSetting()];
                    case 1:
                        res = _a.sent();
                        this.showSocial = res.showSocial;
                        this.session.showSocial = res.showSocial;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3:
                        this.cd && this.cd.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage.prototype.screenShot = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__services_utility__["a" /* Utility */].captureWebPage(this.element.nativeElement).subscribe(function (res) {
            _this.preloadProvider.previewImage([
                { pictureUrl: res.result }
            ], 0);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('mainTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["w" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\common\tabs\tabs.html"*/'<ion-tabs id="rootTabs" #mainTabs  (ionChange)="ionChange()" [ngClass]="{\'hide-tabs\': !showTabs}">\n\n  <ion-tab [root]="tab1Root" [tabTitle]="tab1Title" tabIcon="home" ></ion-tab>\n\n  <ion-tab [root]="tab2Root" [tabTitle]="tab2Title" tabIcon="ios-text" tabBadgeStyle="danger"></ion-tab> \n\n  <ion-tab [root]="tab3Root" [tabTitle]="tab3Title" tabIcon="md-apps"  ></ion-tab> \n\n  <ion-tab [root]="tab4Root" [tabTitle]="tab4Title" tabIcon="community-link"  [show]="showSocial"></ion-tab>\n\n  <ion-tab [root]="tab5Root" [tabTitle]="tab5Title" tabIcon="person"  ></ion-tab>\n\n\n\n  <!--<ion-tab [root]="tab5Root" [tabTitle]="tab5Title" tabIcon="person"   ></ion-tab>  -->\n\n</ion-tabs>\n\n<div class="screen-shot" *ngIf="isShowScreenShot" (click)="screenShot()"></div>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\common\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_providers__["i" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_10__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__services_services__["c" /* JPushService */],
            __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__providers_preload_provider__["a" /* PreloadProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_cache_provider__["a" /* CacheProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 1254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_content_provider__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_idl_recruiting_provider__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_server_provider__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_tabs_tabs__ = __webpack_require__(1144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_providers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_dragula__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_dragula__);
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














var HomePage = (function () {
    function HomePage(navCtrl, authProvider, widgetProvider, session, storageService, events, translateService, tabRef, dragulaService, nativeService, element, serverProvider, idlrecruitingProvider, logger, contentProvider, handleProvider) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.widgetProvider = widgetProvider;
        this.session = session;
        this.storageService = storageService;
        this.events = events;
        this.translateService = translateService;
        this.tabRef = tabRef;
        this.dragulaService = dragulaService;
        this.nativeService = nativeService;
        this.element = element;
        this.serverProvider = serverProvider;
        this.idlrecruitingProvider = idlrecruitingProvider;
        this.logger = logger;
        this.contentProvider = contentProvider;
        this.handleProvider = handleProvider;
        this.numbers = 1;
        this.autoplay = 3000;
        this.initX = 300; //悬浮球初始横坐标
        this.initY = 300; //悬浮球初始纵坐标
        this.srcollable = false; //是否可滑动
        this.uniqueBagId = 'ion-fab'; //悬浮球 dragula bagid
        this.isShowFabButton = true; //是否显示悬浮球
        this.isEmployee = true;
        this.isLoadingNews = false;
        this.initVariable(); //初始化变量
        this.initHomeData(); //初始主页数据
        this.getHistoryLocation(); //初始化客服图标位置
        this.initDragulaService();
        this.initEventSubscribe();
    }
    HomePage.prototype.initEventSubscribe = function () {
        var _this = this;
        this.events.subscribe('user:logined', function (time) {
            _this.nativeService.splashScreenHide();
            if (_this.session.homedata) {
                _this.storageService.setItem('homedata', _this.session.homedata);
                _this.storageService.setItem('isPunchMember', _this.session.isPunchMember);
                // this.initPostList(this.session.homedata['widgets'])
                if (!__WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].isEqualsObject(_this.hotNews, _this.session.homedata['hotNews'])) {
                    _this.hotNews = _this.session.homedata['hotNews'];
                }
                if (!__WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].isEqualsObject(_this.friendlyLinkList, _this.session.homedata['friendlyLinks'])) {
                    _this.friendlyLinkList = _this.session.homedata['friendlyLinks'];
                }
                if (!__WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].isEqualsObject(_this.cardItems, _this.session.homedata['slides'])) {
                    _this.cardItems = _this.session.homedata['slides'];
                }
                if (!__WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].isEqualsObject(_this.favoriteWidgets, _this.session.homedata['widgets'])) {
                    _this.favoriteWidgets = _this.session.homedata['widgets'];
                }
                if (_this.sign.isNeedSign != _this.session.isPunchMember) {
                    _this.sign.isNeedSign = _this.session.isPunchMember;
                }
                _this.loadNewsList();
            }
            else {
                _this._setInif();
            }
            _this.resizeSlides();
        });
        //变更语言更新
        this.events.subscribe('lang:changed', function (event) {
            if (!event.isNotRefresh) {
                _this._setInif();
            }
        });
        this.events.subscribe('Home:subscribe', function (time) {
            _this.widgetProvider.getFavorites().subscribe(function (data) {
                if (data.errcode == 0) {
                    _this.favoriteWidgets = data.result;
                }
            }, function (err) {
                _this.logger.log(JSON.stringify(err), 'Home:subscribe');
            });
        });
        this.events.subscribe('user:permission-changed', function () {
            _this._setInif();
        });
        this.events.subscribe('user:info-changed', function () {
            _this.isEmployee = _this.session.isEmployee;
        });
        this.events.subscribe('register:success', function () {
            _this.isEmployee = _this.session.isEmployee;
            if (_this.session.user && !_this.session.user.hasPassword) {
                _this.navCtrl.push('SetPasswordPage');
            }
        });
        this.events.subscribe('previewJobs', function () {
            // for (let item of this.session.widget) {
            //   // this.initPostList(item.widgets);
            // }
        });
        this.events.subscribe('homemain:resize-content', function () {
            _this.content.resize();
        });
        this.events.subscribe('setting:change-theme', function (value) {
            setTimeout(function () {
                if (_this.content && _this.content.scrollTop) {
                    _this.setHeaderBackground(_this.content.scrollTop);
                }
            }, 300);
        });
    };
    HomePage.prototype.canRefresh = function () {
        return !window['scrollingX'];
    };
    HomePage.prototype._setInif = function () {
        var _this = this;
        this.widgetProvider.getHomeData().subscribe(function (data) {
            if (data.errcode == 0) {
                // this.initPostList(data.result.widgets);
                if (!__WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].isEqualsObject(_this.hotNews, data.result.hotNews)) {
                    _this.hotNews = data.result.hotNews;
                }
                if (!__WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].isEqualsObject(_this.friendlyLinkList, data.result.friendlyLinks)) {
                    _this.friendlyLinkList = data.result.friendlyLinks;
                }
                if (!__WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].isEqualsObject(_this.cardItems, data.result.slides)) {
                    _this.cardItems = data.result.slides;
                }
                if (!__WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].isEqualsObject(_this.favoriteWidgets, data.result.widgets)) {
                    _this.favoriteWidgets = data.result.widgets;
                }
                _this.storageService.setItem("homedata", data.result);
                _this.resizeSlides();
            }
        }, function (err) {
            _this.logger.log(JSON.stringify(err), 'HomePage.widgetProvider.getHomeData()');
        });
        // this.userProvider.IsPunchMember().subscribe((res) => { //获取用户是否需要punching
        //   if (res.errcode === 0) {
        //     this.session.isPunchMember = res.result.isPunchMember;
        //     this.sign.isNeedSign = res.result.isPunchMember;
        //     this.storageService.setItem('isPunchMember', this.session.isPunchMember) 
        //   }
        // });
        // this.preloadProvider.getAllWidget(false);
        this.loadNewsList();
    };
    /**
     * 下拉刷新
     * @param refresh 刷新事件
     */
    HomePage.prototype.doRefresh = function (refresh) {
        if (this.nativeService.isConnecting()) {
            this._setInif();
        }
        setTimeout(function () {
            refresh.complete();
        }, 500);
    };
    /**
     * 横向滚动条宽度
     */
    HomePage.prototype.scrollWidth = function () {
        return {
            "width": (window.screen.availWidth - 5) + 'px',
            "height": 200 + 'px',
        };
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.fabdom = this.element.nativeElement.querySelector('#homemainfab');
        if (this.nativeService.isIos()) {
            try {
                this.fabdom.children[0].style.width = '6.4rem';
            }
            catch (e) {
                console.error(e);
            }
        }
        var ionsearch = this.element.nativeElement.querySelector('#ion-search');
        if (ionsearch) {
            ionsearch.firstChild.children[2].disabled = true; //搜索框设置为disabled
        }
    };
    /**
     * 跳轉到應用頁面, 判断是否为本地页面
     * @param widget 应用对象
     */
    HomePage.prototype.openWidget = function (widget) {
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
                useNativeBrowser: widget.useNativeBrowser,
            }
        };
        this.widgetProvider.openWebpage(page, this.navCtrl);
    };
    /**
     * 开启轮播图, 判断是否为本地页面
     * @param widget 应用对象
     */
    HomePage.prototype.openSlide = function (widget) {
        var page = {
            url: widget.redirectUrl,
            title: widget.title,
            description: "",
            imageUrl: widget.bannerUrl,
            appId: "",
            options: {
                canShare: widget.canShare,
                allowCopyLink: widget.allowCopyLink,
                allowOpenInBrowser: widget.allowOpenInBrowser,
                useNativeBrowser: widget.useNativeBrowser,
            }
        };
        this.widgetProvider.openWebpage(page, this.navCtrl);
    };
    /**
     * 开启友情链接
     * @param widget widget 应用对象
     */
    HomePage.prototype.openFavorites = function (widget) {
        var page = {
            url: widget.redirectUrl,
            title: widget.title,
            description: "",
            imageUrl: widget.bannerUrl,
            appId: "",
            options: {
                canShare: widget.canShare,
                allowCopyLink: widget.allowCopyLink,
                allowOpenInBrowser: widget.allowOpenInBrowser,
                useNativeBrowser: widget.useNativeBrowser,
            }
        };
        this.widgetProvider.openWebpage(page, this.navCtrl);
    };
    HomePage.prototype.openHotNews = function (widget) {
        var page = {
            url: widget.redirectUrl,
            title: widget.title,
            description: "",
            imageUrl: widget.bannerUrl,
            appId: "",
            options: {
                canShare: widget.canShare,
                allowCopyLink: widget.allowCopyLink,
                allowOpenInBrowser: widget.allowOpenInBrowser,
                useNativeBrowser: widget.useNativeBrowser,
            }
        };
        this.widgetProvider.openWebpage(page, this.navCtrl);
    };
    //进入扫描页面
    HomePage.prototype.openScanPage = function () {
        this.openAppPage('ScanPage');
    };
    // 跳轉到全部應用Tab頁面
    HomePage.prototype.gotoTabWidgets = function () {
        this.tabRef.selectTab(2);
    };
    //进入搜索页面
    HomePage.prototype.openSearchPage = function (event) {
        event.stopPropagation();
        this.openAppPage('SearchPage');
    };
    /**
     * 打开干部招聘页面
     * @param item
     */
    HomePage.prototype.openJobDetails = function (item) {
        this.openAppPage('IdlRecruitmentPage', item);
    };
    /**
     * 打开身份绑定
     * @param item
     */
    HomePage.prototype.openBindEmployee = function (item) {
        this.openAppPage('EmployeeIdentityPage', item);
    };
    /**
     * 打开页面
     * @param widget 页面id
     * @param item 参数
     */
    HomePage.prototype.openAppPage = function (widget, item) {
        if (widget) {
            this.navCtrl.push(widget, item);
        }
    };
    //打开客服
    HomePage.prototype.openFeedback = function () {
        this.widgetProvider.openFeedback(this.navCtrl);
    };
    //格式化坐标，控制按钮不能超出界面
    HomePage.prototype.formatCoords = function () {
        var height = window.screen.availHeight;
        var width = window.screen.availWidth;
        if (this.touchTarget.initCoords.x < 0) {
            this.touchTarget.initCoords.x = 0;
        }
        else if (this.touchTarget.initCoords.x > width - 56) {
            this.touchTarget.initCoords.x = width - 56;
        }
        if (this.touchTarget.initCoords.y < 0) {
            this.touchTarget.initCoords.y = 0;
        }
        else if (this.touchTarget.initCoords.y > height - 56 - 62 - 56) {
            this.touchTarget.initCoords.y = height - 56 - 62 - 56;
        }
        if (!this.fabdom)
            this.fabdom = this.element.nativeElement.querySelector('#homemainfab');
        try {
            this.fabdom.style.left = this.touchTarget.initCoords.x + 'px';
            this.fabdom.style.top = this.touchTarget.initCoords.y + 'px';
        }
        catch (e) {
            console.error(e);
        }
        this.srcollable = true;
    };
    HomePage.prototype.onTouchMoveEvent = function (event) {
        if (this.nativeService.isIos()) {
            if (!this.srcollable) {
                event.preventDefault();
            }
        }
    };
    HomePage.prototype.initDragulaService = function () {
        var _this = this;
        //变更设置通知
        this.events.subscribe('setting:changed', function (value) {
            _this.isShowFabButton = value;
            _this.storageService.setItem("isShowFabButton", value);
        });
        //查找dragulaService是否存在uniqueBagId，若有，则destory
        var bag = this.dragulaService.find(this.uniqueBagId);
        if (bag !== undefined) {
            this.dragulaService.destroy(this.uniqueBagId);
        }
        //配置dragulaService
        this.dragulaService.setOptions(this.uniqueBagId, { copy: true });
        this.dragulaService.drag.subscribe(function (value) {
            _this.srcollable = false;
            _this.touchTarget.touchBefore.x = __WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].getCurrentTouchCoords().x;
            _this.touchTarget.touchBefore.y = __WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].getCurrentTouchCoords().y;
        }, function (error) {
            console.error(error);
        });
        this.dragulaService.dragend.subscribe(function (value) {
            _this.srcollable = true;
            _this.touchTarget.touchAfter.x = __WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].getCurrentTouchCoords().x;
            _this.touchTarget.touchAfter.y = __WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].getCurrentTouchCoords().y;
            _this.touchTarget.initCoords.x += _this.touchTarget.touchAfter.x - _this.touchTarget.touchBefore.x;
            _this.touchTarget.initCoords.y += _this.touchTarget.touchAfter.y - _this.touchTarget.touchBefore.y;
            _this.formatCoords();
            _this.storageService.setItem("touch-coords", _this.touchTarget.initCoords);
        });
    };
    //获取历史坐标
    HomePage.prototype.getHistoryLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var touchCoords, isShowFabButton, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.storageService.getItem("touch-coords")];
                    case 1:
                        touchCoords = _a.sent();
                        return [4 /*yield*/, this.storageService.getItem("isShowFabButton")];
                    case 2:
                        isShowFabButton = _a.sent();
                        if (touchCoords)
                            this.touchTarget.initCoords = touchCoords;
                        if (isShowFabButton === false) {
                            this.isShowFabButton = false;
                        }
                        else {
                            this.isShowFabButton = true;
                        }
                        this.formatCoords();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.logger.log(JSON.stringify(err_1), 'this.storageService.getItem("touch-coords")');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.initHomeData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var homedata, isPunchMember, isEmployee, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.nativeService.isConnecting()) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.storageService.getItem('homedata')];
                    case 2:
                        homedata = _a.sent();
                        return [4 /*yield*/, this.storageService.getItem('isPunchMember')];
                    case 3:
                        isPunchMember = _a.sent();
                        return [4 /*yield*/, this.storageService.getItem('isEmployee')];
                    case 4:
                        isEmployee = _a.sent();
                        if (homedata) {
                            this.friendlyLinkList = homedata.friendlyLinks;
                            this.hotNews = homedata.hotNews;
                            this.cardItems = homedata.slides;
                            this.favoriteWidgets = homedata.widgets;
                        }
                        if (typeof (isPunchMember) === 'boolean') {
                            this.sign.isNeedSign = isPunchMember;
                        }
                        if (isEmployee) {
                            this.isEmployee = isEmployee;
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        err_2 = _a.sent();
                        this.logger.log(JSON.stringify(err_2), 'this.storageService.getItem("homedata")');
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 判断widgets是否含有 IdlRecruitmentListPage 的页面，有则加载职位列表
     * @param widgets
     */
    HomePage.prototype.initPostList = function (widgets) {
        this.previewJobs = [];
        for (var _i = 0, widgets_1 = widgets; _i < widgets_1.length; _i++) {
            var item = widgets_1[_i];
            if (item.homeUrl === 'IdlRecruitmentListPage') {
                this.loadPostList();
                break;
            }
        }
    };
    /**
     * 加载职位列表
     */
    HomePage.prototype.loadPostList = function () {
        var _this = this;
        this.idlrecruitingProvider.PostList(null, null, 0, 5, true).subscribe(function (data) {
            if (data.errcode == 0) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.distributedOn = __WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].formatTime(_this.session.language, item.distributedOn, 'YYYY-MM-DD');
                }
                _this.previewJobs = data.result;
            }
        });
    };
    /**
     * 加载业界新闻
     */
    HomePage.prototype.loadNewsList = function () {
        var _this = this;
        if (this.isLoadingNews)
            return;
        this.isLoadingNews = true;
        this.contentProvider.getNewsList(45313411872769, 0, 10, true).subscribe(function (res) {
            if (res.result) {
                for (var _i = 0, _a = res.result.newsItems; _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.publishTime = __WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].formatMessageTime(_this.session.language, item.publishTime, 'YYYY-MM-DD');
                }
                if (!__WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].isEqualsObject(_this.newsList, res.result.newsItems)) {
                    // console.log('diff') 
                    _this.newsList = res.result.newsItems;
                }
                else {
                    // console.log('equals')
                }
            }
        }, function (err) {
        }, function () {
            _this.isLoadingNews = false;
        });
    };
    HomePage.prototype.openMoreHotNews = function () {
        var title = '';
        for (var _i = 0, _a = this.favoriteWidgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget.id == 59907583691776) {
                title = widget.widgetName;
                break;
            }
        }
        this.navCtrl.push('NewsListPage', {
            canShare: true,
            subjectId: 44877979147205,
            title: title
        });
    };
    HomePage.prototype.openNewsList = function () {
        var _widget = null;
        for (var _i = 0, _a = this.favoriteWidgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget.id == 59907583691776) {
                _widget = widget;
                break;
            }
        }
        var page = {
            url: _widget.homeUrl,
            title: _widget.widgetName,
            description: "",
            imageUrl: _widget.iconUrl,
            appId: _widget.id.toString(),
            options: {
                canShare: _widget.canShare,
                allowCopyLink: _widget.allowCopyLink,
                allowOpenInBrowser: _widget.allowOpenInBrowser,
                useNativeBrowser: _widget.useNativeBrowser,
            }
        };
        this.widgetProvider.openWebpage(page, this.navCtrl);
    };
    /**打开新闻详情 */
    HomePage.prototype.openNewsDetails = function (item) {
        var canShare = false;
        for (var _i = 0, _a = this.favoriteWidgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget.id == 59907583691776) {
                canShare = widget.canShare;
                break;
            }
        }
        var page = {
            url: item.url,
            title: item.title,
            description: item.title,
            imageUrl: item.bannerUrl,
            appId: '59907583691776',
            options: {
                canShare: canShare,
                allowCopyLink: item.allowCopyLink,
                allowOpenInBrowser: item.allowOpenInBrowser,
                useNativeBrowser: item.useNativeBrowser,
            }
        };
        this.widgetProvider.openWebpage(page, this.navCtrl);
    };
    HomePage.prototype.initVariable = function () {
        this.touchTarget = {
            initCoords: {
                x: this.initX,
                y: this.initY
            },
            touchBefore: {
                x: 0,
                y: 0
            },
            touchAfter: {
                x: 0,
                y: 0
            }
        };
        this.cardItems = [];
        this.favoriteWidgets = [];
        this.friendlyLinkList = [];
        this.sign = {
            isNeedSign: null,
            lastSignTime: '',
        };
    };
    /**
     * 开始自动播放轮播图
     */
    HomePage.prototype.startAutoplay = function () {
        var _this = this;
        if (!this.slides)
            return;
        try {
            this.slides.startAutoplay();
        }
        catch (e) {
            this.slides.stopAutoplay();
            this.slideTimer = setTimeout(function () {
                _this.slides.startAutoplay();
            }, 1000);
        }
    };
    /**
     * 轮播图切换时，控制自动播放
     */
    HomePage.prototype.slideChanged = function () {
        var _this = this;
        clearTimeout(this.slideTimer);
        if (this.slides.isEnd()) {
            this.slideTimer = setTimeout(function () {
                _this.slides.slideTo(0);
                _this.startAutoplay();
            }, this.autoplay);
        }
        else if (this.slides.isBeginning()) {
            this.slideTimer = setTimeout(function () {
                _this.slides.slideNext();
                _this.startAutoplay();
            }, this.autoplay);
        }
        else {
            this.startAutoplay();
        }
    };
    /**
     * 页面进入时，开始轮播图
     */
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.slideTimer = setTimeout(function () {
            _this.startAutoplay();
        }, 1000);
    };
    /**
     * 页面离开时，停止自动播放轮播图
     */
    HomePage.prototype.ionViewWillLeave = function () {
        if (this.slides) {
            this.slides.stopAutoplay();
        }
    };
    HomePage.prototype.resizeSlides = function () {
        var _this = this;
        if (this.slides && this.cardItems && this.cardItems.length > 0) {
            setTimeout(function () {
                _this.slides.update();
                _this.slides.resize();
                _this.slides.slideTo(0);
            }, 1000);
        }
    };
    HomePage.prototype.scrollEvent = function (e) {
        this.setHeaderBackground(e.scrollTop);
    };
    HomePage.prototype.setHeaderBackground = function (scrollTop) {
        var opacity = scrollTop / 70;
        // console.log(scrollTop)
        // if(scrollTop > 100)return; 
        var header_color = 255;
        var default_icon_color = [170, 242]; //icon颜色区间
        var default_search_input = [211, 255]; //搜索输入框背景颜色区间
        default_search_input[1] = 242 - scrollTop;
        default_icon_color[1] = 242 - scrollTop;
        if (this.session.isDarkMode) {
            header_color = 0;
            default_icon_color = [220, 242];
            default_search_input = [220, 242];
        }
        this.header.nativeElement.style.backgroundColor = "rgba(" + header_color + " ," + header_color + ", " + header_color + "," + opacity + ")";
        if (default_search_input[1] < default_search_input[0])
            default_search_input[1] = default_search_input[0];
        if (default_icon_color[1] < default_icon_color[0])
            default_icon_color[1] = default_icon_color[0];
        var scan = this.element.nativeElement.querySelector('#scan');
        var search = this.element.nativeElement.querySelector('#ion-search');
        if (scan) {
            scan.style.color = "rgb(" + default_icon_color[1] + " ," + default_icon_color[1] + ", " + default_icon_color[1] + ")"; //设置扫码图标颜色
        }
        if (search) {
            search.children[0].style.backgroundColor = "rgb(" + default_search_input[1] + " ," + default_search_input[1] + ", " + default_search_input[1] + ",1)"; //设置搜索输入框背景颜色
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["v" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["v" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* Content */])
    ], HomePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])("header"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])("scroll"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "scrollx", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["HostListener"])('touchmove', ['$event']) //监听滑动事件，阻止默认行为（IOS）
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], HomePage.prototype, "onTouchMoveEvent", null);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\home\home-main\home-main.html"*/'<ion-header #header  transparent no-border class="iproud-header">\n\n  <ion-navbar  transparent>\n\n\n\n    <ion-searchbar id="ion-search" (click)="openSearchPage($event)" animated=\'false\' placeholder="{{\'HOME_SEARCH_LIST\' | translate}}"></ion-searchbar>\n\n\n\n    <!-- <ion-buttons end>\n\n      <button ion-button icon-only (click)="openScanPage()">\n\n        <ion-icon id="scan"  name="home-scan"  ></ion-icon>\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen scroll="false" (ionScroll)="scrollEvent($event)">\n\n  \n\n  <ion-refresher [enabled]="canRefresh()" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="{{\'HOME_PULL_REFRESH\' | translate }}"\n\n      refreshingText="{{\'HOME_REFRESH\' | translate }}">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-fab id="homemainfab" [dragula]="uniqueBagId" [hidden]="!isShowFabButton || !isEmployee" [ngStyle]="{\'opacity\':srcollable ? 1 : 0 }">\n\n    <button ion-fab color="light" (click)="openFeedback()">\n\n      <img src="assets/icon/service.png" /> </button>\n\n  </ion-fab>\n\n\n\n  <div class="card-slide-item">\n\n    <ion-slides class="card-slide" centeredSlides="true" pager speed="300" [autoplay]="autoplay" paginationtype=\'progress\'\n\n      (ionSlideDidChange)="slideChanged()" effect="slide" *ngIf="cardItems?.length > 0">\n\n\n\n      <ion-slide *ngFor="let item of cardItems,let indx = index" (tap)="openSlide(item)">\n\n        <!--<img id = "pic" [src]="item.image" > [background-image] = url("item.image")  -->\n\n        <!-- <img   [src]="item.bannerUrl">  -->\n\n\n\n        <img-lazy-load [src]="item.bannerUrl"></img-lazy-load>\n\n\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n  <!-- 绑定员工身份 快速通道-->\n\n \n\n  <!-- <div class="quick-bind"(click)="openBindEmployee()"  >  -->\n\n  <div class="quick-bind" (click)="openBindEmployee()" *ngIf="!isEmployee">\n\n    <div class="quick-bind-inner">\n\n      <p text-center> {{\'LOGIN_NO_EMPLOYEEID_TIPS\' | translate}} </p>\n\n    </div>\n\n  </div>\n\n\n\n\n\n  <!-- 應用 員工身份-->\n\n  <ion-grid class="widgets">\n\n    <ion-row>\n\n      <ion-col col-3 text-center *ngFor="let item of favoriteWidgets">\n\n        <button text-center (click)="openWidget(item)">\n\n          <!-- <img width="36" height="36" [src]="item.iconUrl" id="{{item.id}}"/>  -->\n\n          <div class="bgimage">\n\n              <img-lazy-load [src]="item.iconUrl"></img-lazy-load>\n\n        </div>\n\n          <!-- <img-lazy-load [src]="item.iconUrl"></img-lazy-load> -->\n\n          <span class="widget-name">{{item.widgetName}}</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-3 text-center *ngIf="(favoriteWidgets?.length > 0) && isEmployee">\n\n        <button text-center (click)="gotoTabWidgets()">\n\n            <div class="bgimage">\n\n                <img-lazy-load src="assets/img/appicons/home-more2.png"  id="gotoTab" ></img-lazy-load>\n\n          </div>\n\n          <!-- <img src="assets/img/appicons/home-more2.png"/> --> \n\n           <span class="widget-name">{{ \'HOME_MORE_WIDGET\' | translate }}</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <div class="sign" *ngIf="sign.isNeedSign && false">\n\n    <div class="divider"></div>\n\n    <!-- 簽到記錄 需簽到人員 -->\n\n    <button  ion-item  (click)="openAppPage(\'SignPage\')">\n\n\n\n      <ion-row>\n\n        <ion-col col-auto>\n\n          <img src="assets/svg/Sign.svg" />\n\n        </ion-col>\n\n        <ion-col col-auto align-self-center>\n\n          <p>{{\'HOME_SIGN_TITLE\' | translate}} {{sign.lastSignTime}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-note item-end>\n\n      </ion-note>\n\n    </button>\n\n    <div class="divider"></div>\n\n  </div>\n\n\n\n\n\n  <!-- 友情链接 -->\n\n  <ion-grid class="links" *ngIf="friendlyLinkList?.length > 0">\n\n    <ion-row>\n\n      <ion-col col-12 *ngFor="let item of friendlyLinkList">\n\n        <button block text-left (click)="openFavorites(item)">\n\n          <!-- <img float-end [src]="item.bannerUrl"/>  -->\n\n          <img-lazy-load float-end [src]="item.bannerUrl"></img-lazy-load>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <div class="divider"></div>\n\n  <!-- 職位速遞 - 工程师招聘 非員工身份 -->\n\n  <div class="recruit" *ngIf="previewJobs?.length > 0 && false">\n\n    <div class="category" text-left>\n\n      <ion-note color="medium">{{ \'HOME_POSITION_PREVIEW\' | translate}} </ion-note>\n\n      <span class="viewmore" (click)="openAppPage(\'IdlRecruitmentListPage\')">{{ \'APP_COMMON_MORE\' | translate}}</span>\n\n    </div>\n\n    <ion-list>\n\n\n\n      <ion-item *ngFor="let item of previewJobs" (click)="openJobDetails(item)">\n\n        <h2>{{item.postName}}</h2>\n\n        <ion-grid>\n\n          <ion-row align-items-center>\n\n            <ion-col col-4 text-left><span>{{item.workplace}}</span></ion-col>\n\n            <ion-col col-5 text-left><span>{{item.department}}</span></ion-col>\n\n            <ion-col col-3 text-left><span>{{item.distributedOn}}</span></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <div class="article">\n\n          <span>{{\'RECRUITMENT_IDL_WORK_DUTY\' | translate }}:</span>\n\n          <span>{{item.dutyRequirement}}</span>\n\n        </div>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n\n\n   <!-- 廠區熱點-->\n\n   <div class="news-container" >\n\n      <div class="category" text-left *ngIf="hotNews &&hotNews.length > 0">\n\n        <ion-note color="medium">{{ \'HOME_NEWS_FIH_PREVIEW\' | translate}} </ion-note>\n\n        <span class="viewmore" (click)="openMoreHotNews()">{{ \'APP_COMMON_MORE\' | translate}}\n\n          <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n        </span>\n\n        \n\n      </div>\n\n \n\n      <ion-scroll #scroll scroll-focus scrollX="true" [ngStyle]="scrollWidth()" *ngIf="hotNews &&hotNews.length > 0">\n\n          <div style="display: inline-flex; padding-left: 8px;"> \n\n            <div class="fih-news-card"  *ngFor="let item of hotNews" (click)="openHotNews(item)">\n\n                <!-- <img-lazy-load [src]="item.bannerUrl" maxWidth="300px" height="100px" options=\'{"border-top-left-radius":"5px",\n\n                "border-top-right-radius":"5px"}\'></img-lazy-load> -->\n\n                <div class="preview-image" [style.background-image]="\'url(\'+ item.bannerUrl +\')\'" > \n\n                  <span class="site" *ngIf="item.site">{{item.site}}</span>\n\n                </div> \n\n                <div class="fih-news-des-container ">\n\n                  <p class="fih-news-des">{{item.title}}</p>\n\n                  <!-- <p class="date">{{item.publishTime}}</p> -->\n\n                </div> \n\n            </div> \n\n          </div>\n\n        </ion-scroll>\n\n \n\n    </div> \n\n    <div class="divider" *ngIf="hotNews &&hotNews.length > 0"></div>\n\n    <!-- 廠區熱點--> \n\n\n\n <!-- 业界新闻-->\n\n  <div class="news-container" >\n\n    <div class="category" text-left *ngIf="newsList &&newsList.length > 0">\n\n      <ion-note color="medium">{{ \'HOME_NEWS_INDUSTRY_PREVIEW\' | translate}} </ion-note>\n\n      <span class="viewmore" (click)="openNewsList()">{{ \'APP_COMMON_MORE\' | translate}}\n\n        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n      </span>\n\n    </div>\n\n\n\n    <div class="news-loading" [ngClass]="{\'news-loading-show\': isLoadingNews, \'news-loading-hide\': !isLoadingNews}" text-center >\n\n      <ion-spinner name="ios"></ion-spinner>\n\n    </div>\n\n\n\n    <ion-list *ngIf="newsList &&newsList.length > 0">\n\n      <ion-item (click)="openNewsDetails(item)" *ngFor="let item of newsList">\n\n        <ion-thumbnail item-end *ngIf="item.bannerUrl">\n\n          <!-- 刷新频率较高，不再缓存业界新闻图片 2019-04-27 --> \n\n          <diV class="news-imgae">\n\n              <img [src]="item.bannerUrl">\n\n          </diV>\n\n          <!-- <img-lazy-load [src]="item.bannerUrl"></img-lazy-load> -->\n\n        </ion-thumbnail>\n\n        <h2 [ngStyle]="{\'color\':item.isRead?\'gray\':\'\'}">{{item.title}}</h2>\n\n        <div class="feedback">\n\n            <ion-icon name="ios-eye-outline"></ion-icon>\n\n            <span >{{item.readQty}}\n\n            </span><p class="publish-time">{{item.publishTime}}</p>\n\n          </div>\n\n \n\n      </ion-item> \n\n    </ion-list>\n\n  </div>\n\n  <!-- 业界新闻-->\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\home\home-main\home-main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_providers__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_providers__["n" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_11__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_11__services_services__["g" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9__common_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_dragula__["DragulaService"],
            __WEBPACK_IMPORTED_MODULE_6__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_5__providers_server_provider__["a" /* ServerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_idl_recruiting_provider__["a" /* IDLRecruitingProvider */],
            __WEBPACK_IMPORTED_MODULE_2__services_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_1__providers_content_provider__["a" /* ContentProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__["a" /* HandleProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home-main.js.map

/***/ })

});
//# sourceMappingURL=1.js.map