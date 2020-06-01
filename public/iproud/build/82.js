webpackJsonp([82],{

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityIframePageModule", function() { return CommunityIframePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__community_iframe__ = __webpack_require__(1224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommunityIframePageModule = (function () {
    function CommunityIframePageModule() {
    }
    CommunityIframePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__community_iframe__["a" /* CommunityIframePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__community_iframe__["a" /* CommunityIframePage */]),
            ],
        })
    ], CommunityIframePageModule);
    return CommunityIframePageModule;
}());

//# sourceMappingURL=community-iframe.module.js.map

/***/ }),

/***/ 1224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityIframePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_provider__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_share_provider__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_widget_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_fundebug_javascript__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_fundebug_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_fundebug_javascript__);
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
















__WEBPACK_IMPORTED_MODULE_14_fundebug_javascript__["apikey"] = __WEBPACK_IMPORTED_MODULE_13__services_constants__["p" /* FUNDEBUG_API_KEY */];
__WEBPACK_IMPORTED_MODULE_14_fundebug_javascript__["releasestage"] = __WEBPACK_IMPORTED_MODULE_13__services_constants__["t" /* IS_DEBUG */] ? 'development' : 'production';
var _that;
var CommunityIframePage = (function () {
    function CommunityIframePage(navCtrl, params, sanitizer, popoverCtrl, platform, clipboard, httpService, session, toastCtrl, translate, events, nativeService, location, widgetProvider, element, shareProvider, handleProvider, storage, authProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.params = params;
        this.sanitizer = sanitizer;
        this.popoverCtrl = popoverCtrl;
        this.platform = platform;
        this.clipboard = clipboard;
        this.httpService = httpService;
        this.session = session;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.events = events;
        this.nativeService = nativeService;
        this.location = location;
        this.widgetProvider = widgetProvider;
        this.element = element;
        this.shareProvider = shareProvider;
        this.handleProvider = handleProvider;
        this.storage = storage;
        this.authProvider = authProvider;
        this.browser = {
            isLoaded: false,
            proObj: null,
            progress: 0,
            secUrl: '',
            title: '加载中',
            // originUrl: 'http://www.popochiu.com/community/index.html', // 原始链接
            // completeUrl: 'http://www.popochiu.com/community/index.html', // 完整链接（添加了From, AuthCode, Lang）
            originUrl: 'http://www.popochiu.com/ionic/index.html',
            completeUrl: 'http://www.popochiu.com/ionic/index.html',
            share: null,
            description: '',
            options: {}
        };
        this.options = {
            title: 'dafult',
            showHeader: true,
            color: '',
            contentScroll: true,
            contentFullscreen: false,
            headerTransparent: false
        };
        this.showSetting = false;
        this.iframe_outer = {
            'overflow-y': 'scroll',
            '-webkit-overflow-scrolling': 'touch',
            'min-height': '100%'
        };
        this.iframe_inner = {
            'height': '100%',
            'position': 'absolute',
            'overflow': 'auto',
            'border': 'none',
            'width': '1px',
            'min-width': '100%',
            '*width': '100%'
        };
        this.cssStyle = {
            outer: [],
            inner: [],
            outerstr: '',
            innerstr: ''
        };
        this.isShowiFrame = true;
        this.shareConfig = {
            isShow: false
        }; // 分享控制的配置
        this.loadcount = 0; //加载次数
        _that = this;
        this.callback = this.params.get('callback');
        var browserParameter = this.params.get('browser');
        this.nativeService.showLoading();
        if (browserParameter) {
            this.browser.title = browserParameter.title;
            this.browser.originUrl = browserParameter.originUrl;
            this.browser.completeUrl = browserParameter.completeUrl;
            this.browser.appId = browserParameter.appId;
            this.browser.options = browserParameter.options;
            if (!this.browser.originUrl) {
                this.browser.description = browserParameter.description;
            }
            if (browserParameter.share) {
                this.browser.share = browserParameter.share;
            }
        }
        else {
        }
        this.events.subscribe('user:logined', function () {
            _this.reload(true);
        });
        this.events.subscribe('changeCommunityUrl', function (CommunityUrl) {
            if (CommunityUrl) {
                _this.browser.originUrl = CommunityUrl;
                _this.browser.completeUrl = CommunityUrl;
            }
            _this.reload();
        });
        this.init();
        for (var _i = 0, _a = Object.keys(this.iframe_outer); _i < _a.length; _i++) {
            var item = _a[_i];
            this.cssStyle.outer.push({
                key: item,
                value: this.iframe_outer[item]
            });
        }
        for (var _b = 0, _c = Object.keys(this.iframe_inner); _b < _c.length; _b++) {
            var item = _c[_b];
            this.cssStyle.inner.push({
                key: item,
                value: this.iframe_inner[item]
            });
        }
    }
    CommunityIframePage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var CommunityUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getItem('CommunityUrl')];
                    case 1:
                        CommunityUrl = _a.sent();
                        if (CommunityUrl) {
                            this.browser.originUrl = CommunityUrl;
                            this.browser.completeUrl = CommunityUrl;
                        }
                        this.reload(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    // ionViewDidLeave() {
    //   this.callback && this.callback()
    //   window.removeEventListener('message', this.receviceMessage, false)
    // }
    CommunityIframePage.prototype.ionViewDidLoad = function () {
        if (!this.browser.proObj) {
            this.browser.proObj = document.getElementById('progress');
        }
        window.addEventListener("message", this.receviceMessage, false);
    };
    CommunityIframePage.prototype.receviceMessage = function (messageEvent) {
        var whiteList = [/(\w+):\/\/(localhost)(:\d*)?([^# ]*)/, /(\w+):\/\/(www.popochiu.com)(:\d*)?([^# ]*)/];
        var data = messageEvent.data;
        var origin = messageEvent.origin;
        var allow = false;
        whiteList.forEach(function (reg, index) {
            var allowMessage = reg.test(origin);
            console.log("allowMessage", allowMessage);
            if (reg.test(origin))
                allow = true;
        });
        if (!allow)
            return;
        var postMessage = function (method, params) {
            _that.postMessage(method, params, data.params.currentUrl);
        };
        // _that.nativeService.showToast(JSON.stringify(data))
        switch (data.method) {
            case 'close':
                _that.navCtrl.pop();
                break;
            case 'setTitle':
                _that.setTitle(data.params.title);
                break;
            case 'hideTabs':
                _that.hideTabs();
                _that.content.resize();
                break;
            case 'displayTabs':
                _that.displayTabs();
                _that.content.resize();
                break;
            case 'setHeaderColor':
                _that.setHeaderColor(data.params.bgcolor);
                break;
            case 'setFullScreen':
                _that.setFullScreen(data.params.fullscreen);
                break;
            case 'shareWxTimeLine':
                _that.shareWxTimeLine(data.params);
                break;
            case 'shareWxSession':
                _that.shareWxSession(data.params);
                break;
            case 'getUserToken':
                postMessage('getUser', { session: _that.session });
                break;
            case 'getAuthCode':
                postMessage('getAuthCode-callback', { session: _that.session });
                break;
            case 'setContentScroll':
                _that.setContentScroll(data.params.scroll);
                break;
            default:
                if (!data.method) {
                }
                postMessage('getUser', { session: _that.session });
        }
    };
    CommunityIframePage.prototype.newItems = function (array) {
        if (!array)
            array = [];
        array.push({
            key: 'key' + array.length + 1,
            value: 'value' + array.length + 1,
        });
    };
    CommunityIframePage.prototype.settingIframe = function () {
        this.showSetting = !this.showSetting;
    };
    CommunityIframePage.prototype.saveSetting = function () {
        this.iframe_outer = null;
        this.iframe_inner = null;
        var iframe_inner = {};
        var iframe_outer = {};
        for (var _i = 0, _a = this.cssStyle.outer; _i < _a.length; _i++) {
            var item = _a[_i];
            iframe_outer[item.key] = item.value;
        }
        for (var _b = 0, _c = this.cssStyle.inner; _b < _c.length; _b++) {
            var item = _c[_b];
            iframe_inner[item.key] = item.value;
        }
        this.iframe_inner = iframe_inner;
        this.iframe_outer = iframe_outer;
        this.cssStyle.innerstr = JSON.stringify(this.iframe_inner, null, 2);
        this.cssStyle.outerstr = JSON.stringify(this.iframe_outer, null, 2);
        this.storage.setItem('innerstr', this.cssStyle.innerstr);
        this.storage.setItem('outerstr', this.cssStyle.outerstr);
    };
    CommunityIframePage.prototype.setTitle = function (text) {
        _that.options.title = text;
    };
    CommunityIframePage.prototype.setHeaderColor = function (bgcolor) {
        if (!bgcolor) {
            bgcolor = _that.session.isDarkMode ? __WEBPACK_IMPORTED_MODULE_2__services_constants__["f" /* APP_STYLE */].DARK.BG_COLOR : __WEBPACK_IMPORTED_MODULE_2__services_constants__["f" /* APP_STYLE */].DEFAULT.BG_COLOR;
        }
        if (_that.header) {
            var header = _that.header.nativeElement.querySelector('.toolbar-background');
            header.style.backgroundColor = bgcolor;
            _that.setTitleColor(bgcolor);
        }
    };
    CommunityIframePage.prototype.setTitleColor = function (bgcolor) {
        var isBgWhite = _that.session.isDarkMode;
        if (bgcolor) {
            isBgWhite = __WEBPACK_IMPORTED_MODULE_12__services_services__["h" /* Utility */].decideTxtColor(bgcolor);
        }
        if (_that.header) {
            var title = _that.header.nativeElement.querySelector('.toolbar-title');
            title.style.color = isBgWhite ? __WEBPACK_IMPORTED_MODULE_2__services_constants__["f" /* APP_STYLE */].DARK.TEXT_COLOR : __WEBPACK_IMPORTED_MODULE_2__services_constants__["f" /* APP_STYLE */].DEFAULT.TEXT_COLOR;
        }
    };
    CommunityIframePage.prototype.setContentScroll = function (value) {
        if (value === void 0) { value = true; }
        _that.options.contentScroll = value;
    };
    CommunityIframePage.prototype.toggleContentScroll = function () {
        _that.options.contentScroll = !_that.options.contentScroll;
    };
    CommunityIframePage.prototype.setFullScreen = function (value) {
        if (value === void 0) { value = true; }
        _that.options.showHeader = !value;
        setTimeout(function () {
            _that.content.resize();
        }, 100);
    };
    CommunityIframePage.prototype.hideTabs = function () {
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'none';
            });
        }
        setTimeout(function () {
            _that.content.resize();
        }, 100);
    };
    CommunityIframePage.prototype.displayTabs = function () {
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'flex';
            });
        }
        setTimeout(function () {
            _that.content.resize();
        }, 100);
    };
    CommunityIframePage.prototype.postMessage = function (method, data, targetUrl) {
        var that = _that._iframe.nativeElement;
        if (!method)
            return;
        var postdata = {
            method: method
        };
        Object.assign(postdata, data);
        that.contentWindow.postMessage(postdata, targetUrl);
    };
    // 生成随机数
    CommunityIframePage.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    // 网页访问进度
    CommunityIframePage.prototype.onprogress = function () {
        var _this = this;
        // 随机时间
        var timeout = this.random(10, 30);
        var timer = setTimeout(function () {
            if (_this.browser.isLoaded) {
                _this.browser.proObj.style.width = '100%';
                //记载完毕后进度归零，为下一次作准备
                _this.browser.progress = 0,
                    setTimeout(function () {
                        _this.browser.proObj.style.width = '0%';
                    }, 50);
                clearTimeout(timer);
                return;
            }
            // 随机进度
            _this.browser.progress += _this.random(1, 5);
            // 随机进度不能超过 90%，以免页面还没加载完毕，进度已经 100% 了
            if (_this.browser.progress > 90) {
                _this.browser.progress = 90;
                if (!_this.browser.originUrl) {
                    _this.loaded();
                }
            }
            _this.browser.proObj.style.width = _this.browser.progress + '%';
            _this.onprogress();
        }, timeout);
    };
    // 如果iframe页面加载成功后
    CommunityIframePage.prototype.loaded = function () {
        // this.nativeService.hideLoading();
        if (++this.loadcount > 1) {
            this.browser.isLoaded = true;
            // this.nativeService.hideLoading();
            // if (this.isIos()) {
            //   let iframe_ios = this._iframe.nativeElement;
            //   iframe_ios.style.minHeight = window.screen.availHeight - 60 + 'px'
            // }
        }
    };
    // 显示Popver选项
    CommunityIframePage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var cb = {
            refresh: function () {
                _this.reload(true);
            },
            close: function () {
                _this.closeTheWindow();
            },
            copyurl: function () {
                _this.copyurl();
            },
            openInBrowser: function () {
                _this.openInBrowser();
            },
            shareWxTimeLine: null,
            shareWxSession: null,
        };
        var popover = this.popoverCtrl.create('BrowserPopoverPage', {
            callback: cb,
            isShare: this.browser.share != null,
            options: this.browser.options
        }, {
            cssClass: 'browser-popover'
        });
        popover.present({
            ev: myEvent
        });
    };
    // 重新加载页面
    CommunityIframePage.prototype.reload = function (isNeedAuth) {
        var _this = this;
        if (this.browser.completeUrl && !isNeedAuth) {
            setTimeout(function () {
                _this.browser.progress = 0;
                if (!_this.browser.proObj) {
                    _this.browser.proObj = document.getElementById('progress');
                }
                _this.onprogress();
                // update complete Url using new AuthCode
                _this.browser.secUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.browser.completeUrl);
                _this._iframe.nativeElement.src = _this.browser.completeUrl;
                _this._iframe.nativeElement.onload = function () {
                    _this.nativeService.hideLoading();
                    _this.nativeService.showToast('onload');
                };
                window.onerror = function () {
                    console.log('window onerror');
                };
                _this._iframe.nativeElement.onerror = function () {
                    console.log('onerror');
                };
            }, 10);
        }
        else if (this.browser.originUrl) {
            this.authProvider.getAuthCode(this.browser.appId, this.browser.originUrl).subscribe(function (data) {
                if (data.errcode == 0) {
                    var code = data.result.code;
                    var completeUrl_1 = __WEBPACK_IMPORTED_MODULE_12__services_services__["h" /* Utility */].completeUrlForBrowser(_this.browser.originUrl, code, _this.session, _this.browser.appId);
                    var title_1 = _this.browser.title;
                    setTimeout(function () {
                        _this.browser.progress = 0;
                        if (!_this.browser.proObj) {
                            _this.browser.proObj = document.getElementById('progress');
                        }
                        _this.onprogress();
                        _this.browser.title = title_1;
                        // update complete Url using new AuthCode
                        _this.browser.secUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(completeUrl_1);
                    }, 10);
                }
            });
        }
    };
    // 分享微信朋友圈
    CommunityIframePage.prototype.shareWxTimeLine = function (message) {
        var share = {
            title: message.title,
            resource: message.resource,
            description: message.description,
            thumb: message.thumb || "www/assets/imgs/logo.png",
        };
        _that.shareProvider.shareWebPageWxTimeLine(share).subscribe(function () { });
    };
    // 分享到微信好友
    CommunityIframePage.prototype.shareWxSession = function (message) {
        var share = {
            title: message.title,
            resource: message.resource,
            description: message.description,
            thumb: message.thumb || "www/assets/imgs/logo.png",
        };
        _that.shareProvider.shareWebPageWxSession(share).subscribe(function () { });
    };
    // 複製鏈接（作为popover的回调）
    CommunityIframePage.prototype.copyurl = function () {
        var _this = this;
        var url = this.browser.originUrl || this.browser.share.url;
        this.clipboard.copy(url).then(function (value) {
            var toast = _this.toastCtrl.create({
                message: _this.translate.instant('BROWSER_COPIED'),
                duration: 3000,
                position: 'center'
            });
            toast.present();
        }).catch(function (error) {
        });
    };
    CommunityIframePage.prototype.openInBrowser = function () {
        this.widgetProvider.openInBrowser(this.browser.appId, this.getCurrentBrowserUrl());
    };
    CommunityIframePage.prototype.getCurrentBrowserUrl = function () {
        var iframe = this.element.nativeElement.querySelector('iframe');
        var currenturl = __WEBPACK_IMPORTED_MODULE_12__services_services__["h" /* Utility */].removeSessionInfo(this.browser.completeUrl);
        try {
            if (iframe) {
                currenturl = iframe.contentWindow.location.href || this.browser.completeUrl;
            }
        }
        catch (e) {
            this.handleProvider.generate('getIframeurl failed', -1, e);
        }
        return currenturl;
    };
    CommunityIframePage.prototype.closeTheWindow = function () {
        // if (this.nativeService.isIos()) {
        //   this.focusOnOther();
        //   this.nativeService.closeKeyboard();
        //   setTimeout(() => {
        //     this.navCtrl.pop();
        //   }, 10)
        // } else {
        //   this.isShowiFrame = false;
        //   if (this.location.path().split('/').pop() == 'browser') {
        //     this.location.back()
        //     setTimeout(() => {
        //       this.closeTheWindow();
        //     }, 10)
        //   } else {
        //     this.navCtrl.pop();
        //     return;
        //   }
        // }
    };
    // isIos() {
    //   if (this.nativeService.isIos()) {
    //     return true;
    //   }
    //   return false;
    // }
    CommunityIframePage.prototype.setHeaderTransparent = function (transparent) {
    };
    ;
    CommunityIframePage.prototype.setContentFullscreen = function (fullscreen) {
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])("iframe"),
        __metadata("design:type", Object)
    ], CommunityIframePage.prototype, "_iframe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* Content */])
    ], CommunityIframePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["ViewChild"])('header'),
        __metadata("design:type", Object)
    ], CommunityIframePage.prototype, "header", void 0);
    CommunityIframePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'page-community-iframe',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\community\community-iframe\community-iframe.html"*/'<ion-header #header *ngIf="options.showHeader"  >\n\n     <ion-toolbar >\n\n        <ion-title>\n\n          {{options.title}}\n\n        </ion-title>\n\n     </ion-toolbar>\n\n  </ion-header>\n\n<ion-content [ngClass]="{\'no-scroll\': !options.contentScroll}">\n\n    <div class="progress" [hidden]="browser.isLoaded">\n\n        <div class="progress-inner" id="progress"></div>\n\n      </div>\n\n      <div [ngStyle]="iframe_outer">\n\n        <iframe #iframe [ngStyle]="iframe_inner" scrolling="no"\n\n        sandbox="allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms" >\n\n      </iframe> \n\n      </div> \n\n\n\n      \n\n<div padding class="setting" *ngIf="showSetting">\n\n    <div>\n\n        <ion-list>\n\n            <ion-list-header (click)="newItems( cssStyle.outer)">\n\n              iframe-outer\n\n              <ion-icon name="add"></ion-icon>\n\n            </ion-list-header>\n\n         \n\n            <ion-item *ngFor="let item of cssStyle.outer">\n\n               <ion-input [(ngModel)]="item.key"></ion-input> \n\n               <ion-input [(ngModel)]="item.value"></ion-input>  \n\n            </ion-item>\n\n          </ion-list>\n\n        \n\n          <ion-list>\n\n            <ion-list-header (click)="newItems( cssStyle.inner)">\n\n              iframe-inner\n\n              <ion-icon name="add"></ion-icon>\n\n            </ion-list-header>\n\n         \n\n            <ion-item *ngFor="let item of cssStyle.inner">\n\n               <ion-input [(ngModel)]="item.key"></ion-input> \n\n               <ion-input [(ngModel)]="item.value"></ion-input>  \n\n            </ion-item>\n\n          </ion-list>\n\n         \n\n          <button ion-button block (click)="toggleContentScroll()">toggleContentScroll</button> \n\n          <button ion-button block (click)="saveSetting()">save</button> \n\n          <div> {{cssStyle.outerstr}} </div>\n\n          <div> {{cssStyle.innerstr}} </div>\n\n    </div> \n\n  </div>\n\n</ion-content>\n\n\n\n<ion-fab right top >\n\n  <button ion-fab (click)="settingIframe()">\n\n    <ion-icon name="setting"></ion-icon>\n\n  </button>\n\n</ion-fab>\n\n\n\n  \n\n\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\community\community-iframe\community-iframe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_12__services_services__["b" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_12__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_12__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["e" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__providers_widget_provider__["a" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_7__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_4__providers_share_provider__["a" /* ShareProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_handle_handle__["a" /* HandleProvider */],
            __WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_provider__["a" /* AuthProvider */]])
    ], CommunityIframePage);
    return CommunityIframePage;
}());

//# sourceMappingURL=community-iframe.js.map

/***/ })

});
//# sourceMappingURL=82.js.map