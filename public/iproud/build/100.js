webpackJsonp([100],{

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPageModule", function() { return BrowserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser__ = __webpack_require__(1204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BrowserPageModule = (function () {
    function BrowserPageModule() {
    }
    BrowserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__browser__["a" /* BrowserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__browser__["a" /* BrowserPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__browser__["a" /* BrowserPage */]
            ]
        })
    ], BrowserPageModule);
    return BrowserPageModule;
}());

//# sourceMappingURL=browser.module.js.map

/***/ }),

/***/ 1204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_provider__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_preload_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_share_provider__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_widget_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_clipboard__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_fundebug_javascript__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_fundebug_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_fundebug_javascript__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















__WEBPACK_IMPORTED_MODULE_15_fundebug_javascript__["apikey"] = __WEBPACK_IMPORTED_MODULE_14__services_constants__["p" /* FUNDEBUG_API_KEY */];
__WEBPACK_IMPORTED_MODULE_15_fundebug_javascript__["releasestage"] = __WEBPACK_IMPORTED_MODULE_14__services_constants__["t" /* IS_DEBUG */] ? 'development' : 'production';
var BrowserPage = (function () {
    function BrowserPage(navCtrl, params, sanitizer, popoverCtrl, platform, clipboard, httpService, session, toastCtrl, translate, events, nativeService, location, widgetProvider, element, shareProvider, handleProvider, keyboard, cd, preload, viewCtrl, authProvider) {
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
        this.keyboard = keyboard;
        this.cd = cd;
        this.preload = preload;
        this.viewCtrl = viewCtrl;
        this.authProvider = authProvider;
        this.browser = {
            isLoaded: false,
            proObj: null,
            progress: 0,
            secUrl: '',
            title: '加载中',
            originUrl: '',
            completeUrl: '',
            share: null,
            description: '',
            options: {}
        };
        this.options = {
            title: 'dafult',
            showHeader: true,
            color: '',
            contentScroll: true,
            contentFullscreen: true,
            headerTransparent: false,
            isShowPopover: true
        };
        this.keyBoardHeight = 0;
        this.isCalcIframe = false;
        this.isShowiFrame = true;
        this.shareConfig = {
            isShow: false
        }; // 分享控制的配置 
        this.browserPopoverOption = {
            isShowPopover: false,
            allowCopyLink: false,
            allowOpenInBrowser: false,
            isShare: false,
            isComplaint: false
        };
        this.history_length = 0;
        this.loadcount = 0; //加载次数
        this.isReloadEventOnWebPage = false; // 刷新事件是否交由网页处理
        window.iproud = this;
        this.history_length = window.history.length;
        this.callback = this.params.get('callback');
        var browserParameter = this.params.get('browser');
        if (browserParameter) {
            this.browser.title = browserParameter.title;
            this.browser.originUrl = browserParameter.originUrl;
            this.browser.completeUrl = browserParameter.completeUrl;
            this.browser.appId = browserParameter.appId;
            this.browser.options = browserParameter.options;
            this.options.title = this.browser.title;
            if (!this.browser.originUrl) {
                this.browser.description = browserParameter.description;
            }
            if (browserParameter.share) {
                this.browser.share = browserParameter.share;
            }
        }
        this.events.subscribe('user:logined', function () {
            _this.reload(true);
        });
    }
    BrowserPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.nativeService.isIos()) {
            var str = "height: " + (this.content.contentHeight + this.content.contentTop) + "px;";
            this.setIframeOuterCss(str);
            this.setIframeIosCss(str);
        }
        if (!this.nativeService.isMobile()) {
            setTimeout(function () {
                _this.postMessage('keyHeight', { keyHeight: 400 }, '*');
            }, 1000);
        }
        this.postMessage('HeaderHeight', { headerHeight: this.header && this.header.nativeElement.clientHeight }, '*');
    };
    BrowserPage.prototype.ionViewDidLeave = function () {
        this.callback && this.callback();
        /** 移除message监视器 否则下次进入此页面时会重复定义message */
        window.removeEventListener('message', this.handEvent, false);
        this.setStatusBarTextDark(!this.session.isDarkMode);
    };
    BrowserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.keyboard.onKeyboardWillShow().subscribe(function (e) {
            _this.keyBoardHeight = e.keyboardHeight;
            _this.postMessage('keyHeight', { keyHeight: e.keyboardHeight }, '*');
        });
        this.keyboard.onKeyboardWillHide().subscribe(function (e) {
            _this.keyBoardHeight = 0;
        });
        if (!this.browser.proObj) {
            this.browser.proObj = document.getElementById('progress');
        }
        this.reload(false);
        window.addEventListener('message', this.handEvent, false);
    };
    /**
     * 定义message listener处理函数，指向唯一函数
     * @param messageEvent
     */
    BrowserPage.prototype.handEvent = function (messageEvent) {
        return window.iproud.receviceMessage(messageEvent);
    };
    //离开页面时
    BrowserPage.prototype.focusOnOther = function () {
        if (this.isIos()) {
            this._iframe.nativeElement.focus();
        }
    };
    // 生成随机数
    BrowserPage.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    // 网页访问进度
    BrowserPage.prototype.onprogress = function () {
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
    /***
     * 进度条开始
     */
    BrowserPage.prototype.iProgressStart = function () {
        var _this = this;
        this.browser.isLoaded = false;
        var repeat = function () {
            // 随机时间
            var timeout = _this.random(10, 30);
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
                }
                _this.browser.proObj.style.width = _this.browser.progress + '%';
                repeat();
            }, timeout);
        };
        repeat();
    };
    /**
     * 进度条完成
     */
    BrowserPage.prototype.iProgressDone = function () {
        this.browser.isLoaded = true;
    };
    // 如果iframe页面加载成功后
    BrowserPage.prototype.loaded = function () {
        if (++this.loadcount > 1) {
            this.browser.isLoaded = true;
            if (this.isIos()) {
                var iframe_ios = this._iframe.nativeElement;
                iframe_ios.style.minHeight = window.screen.availHeight - 60 + 'px';
            }
        }
    };
    // 显示Popver选项
    BrowserPage.prototype.presentPopover = function (myEvent) {
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
            openComplaint: function () {
                _this.openComplaint();
            },
            shareWxTimeLine: null,
            shareWxSession: null,
        };
        if (this.browser.share != null) {
            cb.shareWxTimeLine = function () {
                _this.shareWxTimeLine();
            };
            cb.shareWxSession = function () {
                _this.shareWxSession();
            };
        }
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
    BrowserPage.prototype.reload = function (isNeedAuth) {
        var _this = this;
        if (this.isReloadEventOnWebPage) {
            this.postMessage('ReloadEvent', null, '*');
            return;
        }
        if (this.browser.completeUrl && !isNeedAuth) {
            setTimeout(function () {
                _this.browser.progress = 0;
                if (!_this.browser.proObj) {
                    _this.browser.proObj = document.getElementById('progress');
                }
                _this.onprogress();
                // update complete Url using new AuthCode
                _this.browser.secUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.browser.completeUrl);
            }, 10);
        }
        else if (this.browser.originUrl) {
            this.authProvider.getAuthCode(this.browser.appId, this.browser.originUrl).subscribe(function (data) {
                if (data.errcode == 0) {
                    var code = data.result.code;
                    var completeUrl_1 = __WEBPACK_IMPORTED_MODULE_13__services_services__["h" /* Utility */].completeUrlForBrowser(_this.browser.originUrl, code, _this.session, _this.browser.appId);
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
    BrowserPage.prototype.shareWxTimeLine = function (fromIframeMessage) {
        var message = {
            title: this.browser.share.title || this.browser.title,
            resource: this.browser.share.url,
            description: this.browser.share.description || "",
            thumb: this.browser.share.thumb || "www/assets/imgs/logo.png",
        };
        if (fromIframeMessage) {
            this.shareProvider.shareWebPageWxTimeLine(fromIframeMessage).subscribe(function () { });
        }
        else {
            this.shareProvider.shareWebPageWxTimeLine(message).subscribe(function () { });
        }
    };
    // 分享到微信好友
    BrowserPage.prototype.shareWxSession = function (fromIframeMessage) {
        var message = {
            title: this.browser.share.title || this.browser.title,
            resource: this.browser.share.url,
            description: this.browser.share.description || "",
            thumb: this.browser.share.thumb || "www/assets/imgs/logo.png",
        };
        if (fromIframeMessage) {
            this.shareProvider.shareWebPageWxSession(fromIframeMessage).subscribe(function () { });
        }
        else {
            this.shareProvider.shareWebPageWxSession(message).subscribe(function () { });
        }
    };
    // 複製鏈接（作为popover的回调）
    BrowserPage.prototype.copyurl = function () {
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
    BrowserPage.prototype.openInBrowser = function () {
        this.widgetProvider.openInBrowser(this.browser.appId, this.getCurrentBrowserUrl());
    };
    BrowserPage.prototype.getCurrentBrowserUrl = function () {
        var iframe = this.element.nativeElement.querySelector('iframe');
        var currenturl = __WEBPACK_IMPORTED_MODULE_13__services_services__["h" /* Utility */].removeSessionInfo(this.browser.completeUrl);
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
    BrowserPage.prototype.goBack = function () {
        var _this = this;
        this.focusOnOther();
        this.nativeService.closeKeyboard();
        setTimeout(function () {
            _this.location.back();
            setTimeout(function () {
                _this.events.publish('back_registration');
            }, 10);
        }, 10);
    };
    BrowserPage.prototype.closeTheWindow = function () {
        var _this = this;
        if (this.nativeService.isIos()) {
            this.focusOnOther();
            this.nativeService.closeKeyboard();
            setTimeout(function () {
                _this.navCtrl.pop();
            }, 10);
        }
        else {
            this.isShowiFrame = false;
            // this.navCtrl.pop();
            // console.log(this.location.path())
            if (this.location.path().split('/').pop() == 'browser') {
                this.location.back();
                setTimeout(function () {
                    _this.closeTheWindow();
                }, 0);
            }
            else {
                this.navCtrl.pop();
                this.navCtrl.id;
                return;
            }
        }
    };
    BrowserPage.prototype.isIos = function () {
        if (this.nativeService.isIos()) {
            return true;
        }
        return false;
    };
    /**
       * 设置标题
       * @param text
       */
    BrowserPage.prototype.setTitle = function (text, style) {
        if (style && this.title) {
            this.title.nativeElement.style = style;
        }
        this.options.title = text;
    };
    /**
     * 设置头部颜色
     * @param bgcolor
     */
    BrowserPage.prototype.setHeaderColor = function (bgcolor, nolines) {
        if (nolines === void 0) { nolines = false; }
        if (!bgcolor) {
            bgcolor = this.session.isDarkMode ? __WEBPACK_IMPORTED_MODULE_4__services_constants__["f" /* APP_STYLE */].DARK.BG_COLOR : __WEBPACK_IMPORTED_MODULE_4__services_constants__["f" /* APP_STYLE */].DEFAULT.BG_COLOR;
        }
        if (this.header) {
            var header = this.header.nativeElement.querySelector('.toolbar-background');
            this.header.nativeElement.style.background = bgcolor;
            header.style.background = bgcolor;
            if (nolines) {
                header.style.borderWidth = '0';
            }
            else {
                header.style.borderWidth = '1px';
            }
            this.setTitleColor(bgcolor);
        }
    };
    BrowserPage.prototype.setTitleColor = function (bgcolor) {
        var DarkMode = this.session.isDarkMode;
        if (bgcolor) {
            DarkMode = __WEBPACK_IMPORTED_MODULE_13__services_services__["h" /* Utility */].decideTxtColor(bgcolor);
        }
        if (this.header) {
            var title = this.header.nativeElement.querySelector('.toolbar-title');
            title.style.color = DarkMode ? __WEBPACK_IMPORTED_MODULE_4__services_constants__["f" /* APP_STYLE */].DARK.TEXT_COLOR : __WEBPACK_IMPORTED_MODULE_4__services_constants__["f" /* APP_STYLE */].DEFAULT.TEXT_COLOR;
        }
    };
    BrowserPage.prototype.setContentScroll = function (value) {
        if (value === void 0) { value = true; }
        this.options.contentScroll = value;
    };
    /**
     * 设置内容是否为全部
     * @param fullscreen
     */
    BrowserPage.prototype.setContentFullscreen = function (value) {
        var _this = this;
        if (value === void 0) { value = false; }
        this.options.contentFullscreen = value;
        var content = this.element.nativeElement.querySelector('#content');
        if (this.options.contentFullscreen) {
            content.setAttribute("fullscreen", "true");
        }
        else {
            content.removeAttribute("fullscreen");
        }
        this.content.resize();
        setTimeout(function () {
            if (_this.nativeService.isIos()) {
                var str = "height: " + (_this.options.contentFullscreen ? _this.content.contentHeight + _this.content.contentTop : _this.content.contentHeight) + "px;";
                _this.setIframeOuterCss(str);
                _this.setIframeIosCss(str);
            }
        }, 100);
    };
    /**
     * 设置头部透明
     * @param transparent
     */
    BrowserPage.prototype.setHeaderTransparent = function (value) {
        if (value === void 0) { value = false; }
        this.options.headerTransparent = value;
        var navbar = this.element.nativeElement.querySelector('#navbar');
        if (navbar) {
            if (this.options.headerTransparent) {
                this.setHeaderColor('rgba(0,0,0,0)', true);
            }
            else {
                this.setHeaderColor('rgba(255, 255, 255, 1)', false);
            }
        }
    };
    BrowserPage.prototype.postMessage = function (method, data, targetUrl) {
        var that = this._iframe.nativeElement;
        if (!method)
            return;
        var postdata = {
            method: method,
            params: data
        };
        that && that.contentWindow && that.contentWindow.postMessage(postdata, targetUrl);
    };
    /**
     * 设置头部是否显示
     * @param fullscreen
     */
    BrowserPage.prototype.setHeaderVisibility = function (value) {
        var _this = this;
        if (value === void 0) { value = true; }
        this.options.showHeader = !value;
        setTimeout(function () {
            _this.content.resize();
        }, 100);
    };
    /**关闭当前页面 */
    BrowserPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    /**
     * 设置选项按钮是否显示
     * @param show
     */
    BrowserPage.prototype.toggleBrowserPopover = function (show) {
        this.options.isShowPopover = show;
    };
    BrowserPage.prototype.refreshLocation = function (url) {
        this.browser.share && (this.browser.share.url = url);
        this.browser.completeUrl = url;
        this.browser.originUrl = __WEBPACK_IMPORTED_MODULE_13__services_services__["h" /* Utility */].removeSessionInfo(url);
        this.postMessage('HeaderHeight', { headerHeight: this.header && this.header.nativeElement.clientHeight }, '*');
    };
    BrowserPage.prototype.setIframeOuterCss = function (style) {
        var outer = this.element.nativeElement.querySelector('.iframe-outer');
        if (outer) {
            outer.style = style;
        }
    };
    BrowserPage.prototype.setIframeIosCss = function (style) {
        this._iframe.nativeElement.style = style;
    };
    BrowserPage.prototype.previewPicture = function (imageArray, index, callback) {
        if (index === void 0) { index = 0; }
        this.preload.previewImage(imageArray, index);
    };
    BrowserPage.prototype.openComplaint = function () {
        this.postMessage('openComplaint', null, '*');
    };
    BrowserPage.prototype.shareToWechat = function (shareModel) {
        var _this = this;
        shareModel.callback = function () {
            _this.postMessage('shareToWechat', {
                success: true
            }, "*");
        };
        this.preload.openShareModal(shareModel);
    };
    BrowserPage.prototype.setStatusBarTextDark = function (isDark) {
        this.nativeService.setStatusBarTextDark(isDark);
    };
    BrowserPage.prototype.enabledWebpageReload = function (enabled) {
        this.isReloadEventOnWebPage = enabled;
    };
    BrowserPage.prototype.showLoading = function (show) {
        if (show === void 0) { show = false; }
        var func = show ? this.nativeService.showLoading : this.nativeService.hideLoading;
        func.call(this.nativeService);
    };
    BrowserPage.prototype.showToast = function (desc) {
        if (desc) {
            this.nativeService.showToast(desc);
        }
    };
    BrowserPage.prototype.enableComplaint = function (show) {
        if (show === void 0) { show = false; }
        this.browser.options.isComplaint = show;
    };
    BrowserPage.prototype.getBrowserHeight = function (currentUrl) {
        var fixed = this.element.nativeElement.querySelector('.fixed-content');
        var outer = this.element.nativeElement.querySelector('.iframe-outer');
        var obj = {
            contentHeight: fixed.clientHeight,
            iframeHeight: this._iframe.nativeElement.clientHeight
        };
        if (outer) {
            Object.assign(obj, {
                outerHeight: outer.clientHeight
            });
        }
        this.handleProvider.generateInfo('BrowserHeight', obj);
        this.postMessage('BrowserHeight', obj, currentUrl);
    };
    /**
     * 接收postMessage 方法
     * @param messageEvent
     */
    BrowserPage.prototype.receviceMessage = function (messageEvent) {
        var _this = this;
        //允许接收postMessage白名单
        var whiteList = [
            /(\w+):\/\/(localhost)(:\d*)?([^# ]*)/,
            /(\w+):\/\/(www.popochiu.com)(:\d*)?([^# ]*)/,
            /(\w+):\/\/(iproud.fihmb.com)(:\d*)?([^# ]*)/ // iproud.fihmb.com
        ];
        var data = messageEvent.data, origin = messageEvent.origin;
        var allow = false;
        whiteList.forEach(function (reg) {
            var allowMessage = reg.test(origin);
            if (allowMessage)
                allow = true;
        });
        if (!allow) {
            //非白名单域名中断
            return;
        }
        /**
         * 定义一个Map，key 为外部可调方法名
         * value 第一个参数对应实现方法，第二参数为传递到方法的参数
         */
        var funcs = new Map([
            ['close', [this.close, []]],
            ['iProgressStart', [this.iProgressStart, []]],
            ['iProgressDone', [this.iProgressDone, []]],
            ['setTitle', [this.setTitle, [data.params.title, data.params.style]]],
            ['setHeaderColor', [this.setHeaderColor, [data.params.bgcolor]]],
            ['setHeaderVisibility', [this.setHeaderVisibility, [data.params.visibility]]],
            ['shareWxTimeLine', [this.shareWxTimeLine, [data.params]]],
            ['shareWxSession', [this.shareWxSession, [data.params]]],
            ['setContentFullscreen', [this.setContentFullscreen, [data.params.fullscreen]]],
            ['setHeaderTransparent', [this.setHeaderTransparent, [data.params.transparent]]],
            ['setContentScroll', [this.setContentScroll, [data.params.scroll]]],
            ['toggleBrowserPopover', [this.toggleBrowserPopover, [data.params.show]]],
            ['refreshLocation', [this.refreshLocation, [data.params.currentUrl]]],
            ['getBrowserHeight', [this.getBrowserHeight, [data.params.currentUrl]]],
            ['setIframeOuterCss', [this.setIframeOuterCss, [data.params.style]]],
            ['setIframeIosCss', [this.setIframeIosCss, [data.params.style]]],
            ['previewPicture', [this.previewPicture, [data.params.images, data.params.index]]],
            ['shareToWechat', [this.shareToWechat, [data.params.shareModel]]],
            ['setStatusBarTextDark', [this.setStatusBarTextDark, [data.params.dark]]],
            ['enabledWebpageReload', [this.enabledWebpageReload, [data.params.enabled]]],
            ['showLoading', [this.showLoading, [data.params.show]]],
            ['showToast', [this.showToast, [data.params.desc]]],
            ['enableComplaint', [this.enableComplaint, [data.params.show]]]
        ]);
        var method = data.method;
        this.handleProvider.generateInfo(method, data.params);
        var execute = funcs.get(method) || funcs.get('default');
        var func = execute['0'];
        var args = execute.length > 1 ? execute['1'] : [];
        func.apply(this, args);
        setTimeout(function () {
            _this.cd.detectChanges();
        }, 10);
    };
    BrowserPage.prototype.onTouchMoveEvent = function (event) {
        if (this.nativeService.isIos()) {
            event.preventDefault();
        }
    };
    BrowserPage.prototype.onScrollEvent = function (event) {
        if (this.nativeService.isIos()) {
            event.preventDefault();
        }
    };
    BrowserPage.prototype.ionScroll = function (event) {
        if (this.nativeService.isIos()) {
            event.preventDefault();
        }
    };
    BrowserPage.prototype.preventDefault = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["ViewChild"])("iframe"),
        __metadata("design:type", Object)
    ], BrowserPage.prototype, "_iframe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], BrowserPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["ViewChild"])('header'),
        __metadata("design:type", Object)
    ], BrowserPage.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["ViewChild"])('title'),
        __metadata("design:type", Object)
    ], BrowserPage.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["HostListener"])('touchmove', ['$event']) //监听滑动事件，阻止默认行为（IOS）
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BrowserPage.prototype, "onTouchMoveEvent", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["HostListener"])('scroll', ['$event']) //监听滑动事件，阻止默认行为（IOS）
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], BrowserPage.prototype, "onScrollEvent", null);
    BrowserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
            selector: 'page-browser',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\common\browser\browser.html"*/'<ion-header  #header no-shadow *ngIf="options.showHeader" >\n\n  <ion-navbar id="navbar"  transparent  class="page-navbar" hideBackButton="true" >\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="goBack()">\n\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n      </button> \n\n    </ion-buttons> \n\n    <ion-title #title>{{options.title}}</ion-title> \n\n    <ion-buttons end  class="buttons" [ngClass]="{ \'buttons-clear\': callback }">\n\n      <button class="button-more   " [hidden]="callback || !options.isShowPopover"   ion-button icon-only (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button> \n\n      <button class="button-close" ion-button icon-only (click)="closeTheWindow()">\n\n          <img class="close-button" src="assets/svg/db_circle.svg">\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <div class="progress" [hidden]="browser.isLoaded">\n\n        <div class="progress-inner" id="progress"></div>\n\n      </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content id="content" class="content"  no-bounce [ngClass]="{\'fullscreen\': options.contentFullscreen}" (ionScroll)="ionScroll($event)"> \n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown">\n\n        </ion-refresher-content>\n\n      </ion-refresher>\n\n  <div *ngIf="browser.secUrl"  >\n\n    <!-- <div class="iframe-outer" > -->\n\n      <iframe *ngIf="isIos()" #iframe scrolling="no" frameborder="0" class="iframe-ios" height="100%"  \n\n       sandbox="allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms allow-modals" \n\n       [src]="browser.secUrl"  (load)="loaded()">\n\n      </iframe>\n\n    <!-- </div> -->\n\n\n\n      <iframe #iframe *ngIf="!isIos()"   class="iframe" sandbox="allow-modals allow-scripts allow-top-navigation allow-pointer-lock allow-same-origin allow-popups allow-forms"\n\n      [src]="browser.secUrl"  (load)="loaded()">\n\n    </iframe> \n\n  </div>\n\n\n\n  <div *ngIf="!browser.secUrl">\n\n    <p>{{browser.description}}</p>\n\n  </div>\n\n   \n\n</ion-content>\n\n<!--<panel-share [(isShow)]="shareConfig.isShow" [share]="browser.share"></panel-share>-->\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\common\browser\browser.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_13__services_services__["b" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_13__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_13__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["e" /* Location */],
            __WEBPACK_IMPORTED_MODULE_7__providers_widget_provider__["a" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_8__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_6__providers_share_provider__["a" /* ShareProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_handle_handle__["a" /* HandleProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_2__providers_preload_provider__["a" /* PreloadProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_provider__["a" /* AuthProvider */]])
    ], BrowserPage);
    return BrowserPage;
}());

//# sourceMappingURL=browser.js.map

/***/ })

});
//# sourceMappingURL=100.js.map