webpackJsonp([3],{

/***/ 1119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowTaskPageModule", function() { return WorkflowTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_task__ = __webpack_require__(1308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(1123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WorkflowTaskPageModule = (function () {
    function WorkflowTaskPageModule() {
    }
    WorkflowTaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__workflow_task__["a" /* WorkflowTaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__workflow_task__["a" /* WorkflowTaskPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], WorkflowTaskPageModule);
    return WorkflowTaskPageModule;
}());

//# sourceMappingURL=workflow-task.module.js.map

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

/***/ 1135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return workflowCommon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_base__ = __webpack_require__(1133);
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

/**
 * workflow 公共类
 */
var workflowCommon = (function (_super) {
    __extends(workflowCommon, _super);
    function workflowCommon(navCtrl, events) {
        var _this = _super.call(this, navCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.events = events;
        return _this;
    }
    /**
     * 水平scroll寬度
     * @param width scroll 寬度
     * @param height scroll 高度
     */
    workflowCommon.prototype.scrollWidth = function (width, height) {
        return _super.prototype.scrollWidth.call(this, width, height);
    };
    /**
     * 發佈刷新完成事件
     * @param _event 刷新事件
     */
    workflowCommon.prototype.completeRefresh = function (_event) {
        _super.prototype.completeRefresh.call(this, _event);
    };
    /**
     * 返回上一頁
     */
    workflowCommon.prototype.goBack = function () {
        this.events.publish('back-to-home');
    };
    /**
     * 打開任務詳細
     * @param item 任務對象
     */
    workflowCommon.prototype.goDetails = function (item) {
        this.navCtrl.push('WorkflowDetailsPage', item);
    };
    return workflowCommon;
}(__WEBPACK_IMPORTED_MODULE_0__page_base__["a" /* pageCommon */]));

//# sourceMappingURL=workflow.common.js.map

/***/ }),

/***/ 1308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_workflow_provider__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__workflow_tabs_workflow_common__ = __webpack_require__(1135);
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
 * Generated class for the WorkflowTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WorkflowTaskPage = (function (_super) {
    __extends(WorkflowTaskPage, _super);
    function WorkflowTaskPage(navCtrl, navParams, events, workflowProvider, session) {
        var _this = _super.call(this, navCtrl, events) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.workflowProvider = workflowProvider;
        _this.session = session;
        _this.page = 0; //当前页码
        _this.count = 10; //单页显示数量 
        _this.startDate = __WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* Utility */].dateFormatByMiles(new Date().getTime() - 7 * 24 * 3600 * 1000);
        _this.endDate = __WEBPACK_IMPORTED_MODULE_0__services_utility__["a" /* Utility */].dateFormat(new Date());
        _this.getMyTasks();
        return _this;
    }
    /**
     * 根據日期區間獲取我的單
     * @param _event
     */
    WorkflowTaskPage.prototype.getMyTasks = function (_event) {
        var _this = this;
        this.workflowProvider.getMyProcess(this.startDate, this.endDate).subscribe(function (data) {
            if (data.errcode == 0) {
                _this.tasklist = data.result;
            }
            _super.prototype.completeRefresh.call(_this, _event);
        }, function (err) {
            _super.prototype.completeRefresh.call(_this, _event);
        });
    };
    /**调用父类返回方法 */
    WorkflowTaskPage.prototype.goBack = function () {
        _super.prototype.goBack.call(this);
    };
    /**调用父类跳到任务详情方法 */
    WorkflowTaskPage.prototype.goDetails = function (item) {
        item['app_isEdit'] = false;
        item['isFinished'] = true;
        _super.prototype.goDetails.call(this, item);
    };
    /**刷新 */
    WorkflowTaskPage.prototype.doRefresh = function (_event) {
        this.getMyTasks(_event);
    };
    //加载更多数据
    WorkflowTaskPage.prototype.doInfinite = function (infiniteScroll) {
        //this.createArray();
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1000);
    };
    WorkflowTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-workflow-task',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\workflow\workflow-task\workflow-task.html"*/'<ion-header  no-shadow>\n\n  <ion-navbar class="page-navbar" hideBackButton="true"  >\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="goBack()">\n\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n        \n\n        {{\'HOME_TITLE\' | translate}}\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{\'WORKFLOW_TASK_TITLE\' | translate}}</ion-title>\n\n    <!-- <ion-buttons end class="close-buttons">\n\n      <button ion-button icon-only (click)="goBack()">\n\n        <img class="close-button" src="assets/imgs/close_black_button.png">\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar>\n\n     <div class="condition-container" text-center >\n\n\n\n        <ion-item>\n\n            <ion-label>{{\'WORKFLOW_TASK_STARTDATE\' | translate}}</ion-label>\n\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="startDate"></ion-datetime>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label>{{\'WORKFLOW_TASK_ENDDATE\' | translate}}</ion-label>\n\n              <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="endDate"></ion-datetime>\n\n            </ion-item>\n\n \n\n \n\n     </div>\n\n \n\n\n\n    <button class="button" color="medium" ion-button block   small (click)="getMyTasks()">\n\n      <p>{{\'WORKFLOW_TASK_BUTTON\' | translate}}</p>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" refreshingSpinner="circles">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n \n\n  <data-hints text="{{\'WORKFLOW_TASK_HINT\' | translate}}" *ngIf="!tasklist||tasklist?.length == 0"></data-hints>\n\n  <ion-list> \n\n        <button *ngFor="let item of tasklist" ion-item (click)="goDetails(item)">\n\n            <h2 class="list-title">\n\n               {{item.taskdesc}}&nbsp; &nbsp;({{item.completedate}})\n\n            </h2>\n\n             \n\n            <!-- <p class="responsible">\n\n                {{item.processname}}\n\n              </p> -->\n\n\n\n              <p class="taskdesc-box">\n\n                <span class="taskdesc">{{item.taskdesc}}</span>\n\n                <span class="pid">{{item.pid}}</span> \n\n              </p>\n\n             <p>\n\n              {{item.responsiblename}}\n\n             </p>\n\n          </button>\n\n  </ion-list>\n\n\n\n  <!--<data-hints text="{{\'MESSAGE_NO_MORE\' | translate}}" *ngIf="!finiteScroll && page > 0"></data-hints>-->\n\n\n\n  <!-- <ion-infinite-scroll *ngIf="finiteScroll" (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content aria-posinset="button" loadingSpinner="bubbles">\n\n    </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll> -->\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\workflow\workflow-task\workflow-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_workflow_provider__["a" /* WorkflowProvider */],
            __WEBPACK_IMPORTED_MODULE_1__services_session__["a" /* Session */]])
    ], WorkflowTaskPage);
    return WorkflowTaskPage;
}(__WEBPACK_IMPORTED_MODULE_5__workflow_tabs_workflow_common__["a" /* workflowCommon */]));

//# sourceMappingURL=workflow-task.js.map

/***/ })

});
//# sourceMappingURL=3.js.map