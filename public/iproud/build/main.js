webpackJsonp([121],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_provider__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sqlite_provider__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_jpush_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs__);
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












var MessageProvider = (function () {
    function MessageProvider(httpService, storageService, session, logger, nativeService, events, jPushService, translateService, sqlite, contactProvider) {
        this.httpService = httpService;
        this.storageService = storageService;
        this.session = session;
        this.logger = logger;
        this.nativeService = nativeService;
        this.events = events;
        this.jPushService = jPushService;
        this.translateService = translateService;
        this.sqlite = sqlite;
        this.contactProvider = contactProvider;
        this.messages = []; /**消息数组 */
        this.messageSession = []; /**消息分组数组 */
        this.isLoadStorage = false; /**是否已经加载内存消息 */
        this.KEY = {
            MESSAGE_CHAT: 'messageChat-',
            MESSAGE: 'message-',
        };
        this.STAUTS = {
            SEND_MESSAGE_OK: 'sent',
            SEND_MESSAGE_FAILED: 'failed',
            SEND_MESSAGE_SENDING: 'sending'
        };
        this.messageSession = [];
    }
    /**
     * 初始化MessageProvider,加载localstorage 中的 messages 和 messageGroup
     */
    MessageProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    // const messages = await this.storageService.getItem("messages") 
                    this.isLoadStorage = true;
                    this.moveStorageMessageToSqlite();
                    // this.messages = messages || []; 
                }
                catch (err) {
                    // this.messages = []; 
                    this.logger.log(JSON.stringify(err), "this.storageService.getItem(\"messages\")");
                }
                finally {
                    this.getMessageChat().subscribe();
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * 将storage信息移到sqlite中
     */
    MessageProvider.prototype.moveStorageMessageToSqlite = function () {
        return __awaiter(this, void 0, void 0, function () {
            var messages, _i, messages_1, item, message, messageSession;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.getItem("messages")];
                    case 1:
                        messages = _a.sent();
                        if (!messages)
                            return [2 /*return*/];
                        for (_i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                            item = messages_1[_i];
                            if (item.widgetId == 0) {
                                message = {
                                    id: item.id,
                                    formatType: item.formatType,
                                    widgetId: item.widgetId,
                                    widgetName: item.widgetName,
                                    widgetIcon: item.widgetIcon,
                                    title: item.title,
                                    abstract: item.abstract,
                                    imageUrl: item.imageUrl,
                                    redirectUrl: item.redirectUrl,
                                    receiveTime: item.receiveTime,
                                    isRead: true,
                                    status: this.STAUTS.SEND_MESSAGE_OK,
                                    extra: {
                                        groudId: 0,
                                        senderId: 0,
                                        senderName: '',
                                        senderAvator: '',
                                        fromType: '',
                                    }
                                };
                                messageSession = {
                                    id: message.extra.senderId || message.widgetId,
                                    sessionName: message.extra.senderName || message.widgetName,
                                    sessionIcon: message.extra.senderAvator || message.widgetIcon || (message.widgetId == '0' ? __WEBPACK_IMPORTED_MODULE_5__services_constants__["j" /* DEFAULT_LOGO */] : __WEBPACK_IMPORTED_MODULE_5__services_constants__["i" /* DEFAULT_AVATAR */]),
                                    latestMessageId: message.id,
                                    latestMessageTitle: message.abstract || message.title,
                                    latestTime: new Date(message.receiveTime).getTime().toString(),
                                    unreadCount: 0,
                                    userId: this.session.userId,
                                    extra: message.extra
                                };
                                this.saveSessionMessage(message, messageSession, true);
                            }
                        }
                        this.storageService.setItem("messages", []);
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageProvider.prototype.setMessage = function (Message) {
        this.messages = Message;
    };
    MessageProvider.prototype.getMessage = function () {
        return this.messages;
    };
    MessageProvider.prototype.setSessionRoomId = function (id) {
        this.sessionRoomId = id;
    };
    MessageProvider.prototype.getSessionRoomId = function () {
        return this.sessionRoomId;
    };
    /**
     * 当前系统为调用init()方法时，初始化MessageProvider,加载localstorage 中的 messages 和 messageGroup
     */
    MessageProvider.prototype.check = function () {
        return __awaiter(this, void 0, void 0, function () {
            var messages, messageGroup, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isLoadStorage) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, this.storageService.getItem("messages")];
                    case 2:
                        messages = _a.sent();
                        return [4 /*yield*/, this.storageService.getItem("messageGroup")];
                    case 3:
                        messageGroup = _a.sent();
                        this.isLoadStorage = true;
                        if (messages && this.messages instanceof Array && this.messages.length == 0) {
                            this.messages = messages;
                        }
                        if (!this.messages) {
                            this.messages = [];
                        }
                        return [3 /*break*/, 6];
                    case 4:
                        err_1 = _a.sent();
                        this.logger.log(JSON.stringify(err_1), "this.storageService.getItem(\"messages\")");
                        this.messages = [];
                        return [3 /*break*/, 6];
                    case 5:
                        this.getUnreadMessageCount();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 获取所有消息
     * 判断是否为移动端，若未移动端，取localstorage内消息,否则自动成模拟数据
     */
    MessageProvider.prototype.getAll = function () {
        if (this.nativeService.isMobile()) {
            return this.messages;
        }
        else {
            this.messages = [];
            var groupsCount = 5;
            var messagesCount = 300;
            var formatTypes = ['Text', 'Image', 'HeaderImage', 'TitleInImage', 'RichTextImage'];
            var widgets = [{ widgetId: 0, widgetIcon: "./assets/imgs/logo.png", widgetName: "员宝助手" },
                { widgetId: 1, widgetIcon: "./assets/icon/share.png", widgetName: "分享" },
                { widgetId: 2, widgetIcon: "./assets/img/avatar.png", widgetName: "头像" }];
            for (var i = 0; i < groupsCount - 3; i++) {
                var index = Math.floor(Math.random() * 100) % widgets.length;
                var widget = {
                    widgetId: groupsCount - i,
                    widgetIcon: widgets[index].widgetIcon,
                    widgetName: widgets[index].widgetName
                };
                widgets.push(widget);
            }
            var redirectUrls = ['http://www.baidu.com', 'https://830114.com/appp.php/1384', '', 'https://iproud.fihmb.com/WebApp/Feedback/Contents?Id=64443449535489'];
            var abstracts = ['https://iproud.fihmb.com/WebApp/Feedback/Contents?Id=64443449535489', 'https://iproud.fihmb.com/WebApp/Feedback/Contents?Id=64443449535489&AppId=a', 'IOS 下载地址 https://830114.com/appp.php/1384  ,Android下载地址 https://830114.com/appp.php/1426,https://portal.fihmb.com/hrweixin/SingleProgram/ChaChaDetail.aspx', '', ''];
            var imageUrls = ["https://iproud.fihmb.com/Resources/Messages/201901/68835796430848.jpg", "http://ifih-t.fih-foxconn.com/Resources/Messages/201807/53552117150720.jpg", "https://iproud.fihmb.com/Resources/Slides/61147274506240.jpg", ''];
            for (var i = 0; i < messagesCount; i++) {
                var count = Math.round(Math.random() * 100) % groupsCount;
                var message = {
                    id: i,
                    formatType: formatTypes[Math.round(Math.random() * 100) % 5],
                    isRead: Math.round(Math.random() * 100) % 3 == 2 ? true : false,
                    widgetId: widgets[count].widgetId,
                    widgetIcon: widgets[count].widgetIcon,
                    widgetName: widgets[count].widgetName,
                    receiveTime: __WEBPACK_IMPORTED_MODULE_6__services_utility__["a" /* Utility */].randomDate(this.session.language),
                    title: 'title' + i,
                    redirectUrl: redirectUrls[Math.round(Math.random() * 100) % 3],
                    abstract: abstracts[Math.round(Math.random() * 100) % 3],
                    imageUrl: imageUrls[Math.round(Math.random() * 100) % 3],
                    status: 'success'
                };
                this.messages.push(message);
            }
            return this.messages;
        }
    };
    /**
     * 添加消息到localstorage
     * @param message 消息对象
     */
    MessageProvider.prototype.addMessage = function (message) {
        if (!this.messages) {
            this.messages = [];
            this.messages.push(message);
        }
        else {
            var index = this.messages.findIndex(function (p) { return p.id == message.id; });
            //alert("index:"+index);
            if (index == -1) {
                this.messages.push(message);
            }
        }
        this.receiveMessageNew(message);
        this.events.publish("messageProvider-addMessage", message);
        this.getUnreadMessageCount();
    };
    /**
     * 新添加的消息保存到后台
     * @param messageId 消息id
     */
    MessageProvider.prototype.receiveMessage = function (messageId) {
        //this.nativeService.showToast("receiveMessage begin: meesageId:" + messageId);
        if (this.session.userId) {
            var seq = this.httpService.post('Message/Receiver', true, { "messageId": messageId }, true).share();
            seq.subscribe(function (data) {
                //this.nativeService.showToast("receiveMessage completed");
            });
            return seq;
        }
    };
    /**
     * 根据消息id设置消息为已读状态
     * @param messageId 消息id
     */
    MessageProvider.prototype.setMessageIsRead = function (messageId) {
        var index = this.messages.findIndex(function (p) { return p.id == messageId; });
        if (index > -1) {
            this.messages[index].isRead = true;
        }
        this.updateMessage(this.messages[index]).subscribe(function (res) { }); //更新到数据库
        this.jPushService.clearNotificationById(messageId);
    };
    /**
     * 根据消息分组id设置消息为已读状态
     * @param widgetId 消息分组id
     */
    MessageProvider.prototype.setMessageIsReadByWidgetId = function (widgetId) {
        var index = this.findMessageSessionById(widgetId);
        if (index > -1) {
            this.messageSession[index].unreadCount = 0;
            for (var _i = 0, _a = this.messageSession; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.id && item.id.toString() == widgetId.toString()) {
                    item.unreadCount = 0;
                }
            }
            this.updateMessageChat(this.messageSession[index]);
            this.getUnreadMessageCount();
        }
    };
    /**
     * 初始化數組
     */
    MessageProvider.prototype.initGroups = function () {
        return this.getGroups(this.getAll());
    };
    /**
     * 初始化數組，在移動端中與initGroups()沒異同。
     */
    MessageProvider.prototype.updateGroups = function () {
        return this.getGroups(this.messages);
    };
    /**
     * 获取消息分组
     * @param _messages
     */
    MessageProvider.prototype.getGroups = function (_messages) {
        if (!_messages)
            return [];
        var resArray = [];
        var _loop_1 = function (item) {
            item.title = item.title || item.abstract || (item.formatType.toLowerCase().indexOf('image') > -1 ? this_1.translateService.instant('MESSAGE_TYPE_IMAGE') : '');
            var messageGroup = {
                widgetId: item.widgetId || 0,
                widgetName: item.widgetName,
                widgetIcon: item.widgetIcon,
                count: 1,
                isRead: false,
                latestMessage: item,
                latestTime: __WEBPACK_IMPORTED_MODULE_6__services_utility__["a" /* Utility */].formatSignTime(this_1.session.language, item.receiveTime),
                isInteractive: false,
                messages: [],
                isTop: 0
            };
            /** 若數組為空，push messageGroup*/
            if (resArray.length == 0)
                resArray.push(messageGroup);
            /** 查找是否存在該widgetId的數組 */
            var index = resArray.findIndex(function (p) { return p.widgetId == messageGroup.widgetId; });
            /**不存在，push messageGroup */
            if (index == -1) {
                if (!item.isRead) {
                    messageGroup.messages.push(item);
                }
                resArray.push(messageGroup);
            }
            else {
                resArray[index].widgetName = messageGroup.widgetName; //取最新的widgetName
                var indx = resArray[index].messages.findIndex(function (p) { return p.id == item.id; });
                if (indx == -1 && !item.isRead) {
                    resArray[index].messages.push(item);
                }
                /**根據時間對latestMessage進行賦值 */
                if (resArray[index].latestMessage.receiveTime < messageGroup.latestMessage.receiveTime) {
                    resArray[index].latestMessage = messageGroup.latestMessage;
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _messages_1 = _messages; _i < _messages_1.length; _i++) {
            var item = _messages_1[_i];
            _loop_1(item);
        }
        this.getUnreadMessageCount();
        /**分组排序，先按置顶flag，再按 receiveTime */
        resArray.sort(function (a, b) {
            if (a.isTop == b.isTop) {
                return new Date(b.latestMessage.receiveTime).getTime() - new Date(a.latestMessage.receiveTime).getTime();
            }
            return b.isTop - a.isTop;
        });
        /**對消息分組圖標 和 標題 進行賦值*/
        for (var _a = 0, resArray_1 = resArray; _a < resArray_1.length; _a++) {
            var item = resArray_1[_a];
            if (item.latestMessage) {
                item.widgetIcon = item.latestMessage.widgetIcon || __WEBPACK_IMPORTED_MODULE_5__services_constants__["j" /* DEFAULT_LOGO */];
                item.widgetName = item.latestMessage.widgetName || item.title;
            }
        }
        return resArray;
    };
    /**
     * 获取所有消息未读数量
     */
    MessageProvider.prototype.getUnreadMessageCount = function () {
        var count = 0;
        for (var _i = 0, _a = this.messageSession; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.unreadCount)
                count += item.unreadCount;
        }
        this.events.publish('message:count-changed', count);
    };
    /**
     *
     * @param mesg
     * @param reqType 0 :文本 ，1 ：图片
     */
    MessageProvider.prototype.sendMessageToTuling = function (mesg, reqType) {
        var body = {
            "reqType": reqType,
            "perception": {
                "inputText": {
                    "text": mesg
                }, "inputImage": {
                    "url": mesg
                },
            },
            "userInfo": {
                "apiKey": "35133dae6f5685865207f861f35a1660",
                "userId": "35133dae6f5685865207f861f35a1660"
            }
        };
        var seq = this.httpService.post("http://openapi.tuling123.com/openapi/api/v2", false, body, true).share();
        seq.subscribe(function (res) {
        });
        return seq;
    };
    /**
     * 发送消息，更新messageSession，并保存在本地
     * @param message
     */
    MessageProvider.prototype.sendMessage = function (message) {
        var _this = this;
        var messageSession = {
            id: message.widgetId,
            sessionName: message.widgetName,
            sessionIcon: message.widgetIcon,
            latestMessageId: message.id,
            latestMessageTitle: message.abstract || message.title,
            latestTime: message.receiveTime,
            unreadCount: 0,
            userId: this.session.userId,
            extra: message.extra
        };
        this.saveSessionMessageSession(messageSession, true);
        if (message.formatType == 'image') {
            return new __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"](function (observe) {
                _this.nativeService.convertImgToBase64(message.imageUrl).subscribe(function (res) {
                    message.imageUrl = res;
                    _this._sendMsg(message).subscribe(function (res) {
                        observe.next(res);
                    }, function (err) {
                        observe.next(err);
                    });
                }, function (error) {
                    _this._sendMsg(message).subscribe(function (res) {
                        observe.next(res);
                    }, function (err) {
                        observe.next(err);
                    });
                });
            });
        }
        else {
            return this._sendMsg(message);
        }
    };
    MessageProvider.prototype._sendMsg = function (message) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"](function (observe) {
            _this.contactProvider.SendMsg([message.widgetId.toString()], message.id, message.formatType, message.abstract, message.abstract, message.imageUrl).subscribe(function (res) {
                observe.next(res.errcode == 0 || false);
            }, function (error) {
                observe.error(false);
            });
        });
    };
    /**
     * 更新消息狀態
     * @param status 消息狀態
     * @param message
     */
    MessageProvider.prototype.updateMessageStatus = function (status, message) {
        return this.sqlite.updateMessageStatus(status, message);
    };
    MessageProvider.prototype.updateMessage = function (message) {
        return this.sqlite.updateMessage(message);
    };
    /**
     * 接收到信息
     * @param message
     */
    MessageProvider.prototype.receiveMessageNew = function (message) {
        var messageSession = {
            id: message.extra.senderId || message.widgetId,
            sessionName: message.extra.senderName || message.widgetName,
            sessionIcon: message.extra.senderAvator || message.widgetIcon || (message.widgetId == '0' ? __WEBPACK_IMPORTED_MODULE_5__services_constants__["j" /* DEFAULT_LOGO */] : __WEBPACK_IMPORTED_MODULE_5__services_constants__["i" /* DEFAULT_AVATAR */]),
            latestMessageId: message.id,
            latestMessageTitle: message.abstract || message.title,
            latestTime: new Date(message.receiveTime).getTime().toString(),
            unreadCount: 0,
            userId: this.session.userId,
            extra: message.extra
        };
        this.saveSessionMessage(message, messageSession, false, message.isRead);
    };
    /**
     * 根据messageSessionId 找到index
     * @param id
     */
    MessageProvider.prototype.findMessageSessionById = function (id) {
        if (!id && id != '0')
            return -1;
        return this.messageSession.findIndex(function (p) {
            return p.id == id || p.id.toString() == id.toString();
        });
    };
    /**
     * 保存信息，成功后再保存session
     * @param message
     * @param isSend
     * @param isRead
     */
    MessageProvider.prototype.saveSessionMessage = function (message, messageSession, MessageisSend, isRead) {
        var _this = this;
        message.userId = message.userId || this.session.userId;
        message.receiveTime = new Date(message.receiveTime).getTime().toString();
        this.sqlite.insertMessage(message).subscribe(function (res) {
            if (res.result) {
                _this.saveSessionMessageSession(messageSession, MessageisSend, isRead);
                _this.receiveMessage(message.id);
            }
        });
    };
    MessageProvider.prototype.saveSessionMessageSession = function (messageSession, isSend, isRead) {
        var _this = this;
        var index = this.findMessageSessionById(messageSession.id);
        if (index == -1) {
            if (!this.messageSession)
                this.messageSession.push(messageSession);
            if (!isSend && !isRead) {
                messageSession.unreadCount++;
            }
            this.sqlite.insertMessageChat(messageSession).subscribe(function (res) {
                _this.events.publish('messageSession:refresh');
            });
        }
        else {
            if (!isSend && !isRead) {
                this.messageSession[index].unreadCount++;
                messageSession.unreadCount = this.messageSession[index].unreadCount;
            }
            Object.assign(this.messageSession[index], messageSession);
            this.updateMessageChat(this.messageSession[index]);
        }
    };
    MessageProvider.prototype.updateMessageChat = function (messageSession) {
        var _this = this;
        this.sqlite.updateMessageChat(messageSession).subscribe(function (res) {
            if (res.result) {
                _this.events.publish('messageSession:refresh');
            }
        });
    };
    /**
    * 设置消息分组置顶状态
    * @param widgetId 消息分组id
    * @param flag 是否置顶 1:置顶,0 :非置顶
    */
    MessageProvider.prototype.setMessageSessionTopStatusFlag = function (SessionID, flag) {
        var index = this.findMessageSessionById(SessionID);
        if (index > -1) {
            this.messageSession[index].isTop = flag;
        }
        this.updateMessageChat(this.messageSession[index]);
    };
    /**
    * 根据消息分组id删除消息
    * @param sessionID 消息分组id
    */
    MessageProvider.prototype.deleteMessageBySessionId = function (sessionID) {
        var _this = this;
        this.sqlite.insertDeleteMessagesRecord(sessionID).subscribe(function (rst) {
            rst.result && _this.sqlite.deleteMessageByChatId(sessionID).subscribe(function (result) {
                result.result && _this.sqlite.deleteMessageChat(sessionID).subscribe(function (res) {
                    res.result && _this.events.publish('messageSession:refresh');
                });
            });
        });
    };
    /**
     * 删除消息
     * @param messageId 消息id
     */
    MessageProvider.prototype.deleteMessage = function (messageId) {
        var _this = this;
        var index = this.messages.findIndex(function (p) { return p.id == messageId; });
        this.sqlite.insertDeleteMessageRecord(messageId).subscribe(function (rst) {
            rst.result && _this.sqlite.deleteMessage(messageId).subscribe(function (res) {
                if (res.result) {
                    _this.messages.splice(index, 1);
                    if (_this.messages.length == 0) {
                        var indx = _this.findMessageSessionById(_this.messages[index].widgetId);
                        if (indx > -1) {
                            _this.deleteMessageBySessionId(_this.messageSession[indx].id);
                        }
                    }
                    else if (index == _this.messages.length) {
                        var indx = _this.findMessageSessionById(_this.messages[index - 1].widgetId);
                        if (indx > -1) {
                            _this.messageSession[indx].latestMessageId = _this.messages[_this.messages.length - 1].id;
                            _this.messageSession[indx].latestMessageTitle = _this.messages[_this.messages.length - 1].title || _this.messages[_this.messages.length - 1].abstract;
                            _this.messageSession[indx].latestTime = _this.messages[_this.messages.length - 1].receiveTime;
                            _this.updateMessageChat(_this.messageSession[indx]);
                        }
                    }
                }
            });
        });
    };
    MessageProvider.prototype.setMessageSessionIsRead = function (SessionID) {
        var index = this.findMessageSessionById(SessionID);
        if (index > -1 && this.messageSession[index].unreadCount > 0) {
            this.getUnreadMessageCount();
            this.messageSession[index].unreadCount = 0;
        }
    };
    MessageProvider.prototype._transformTagA = function (ele) {
        var children = ele.children;
        for (var i = 0; i < children.length; i++) {
            if (children[i].nodeName == 'A') {
                var url = children[i].getAttribute('href');
                if (url != 'javascript:void(0)') {
                    children[i].setAttribute('title', url);
                }
                children[i].setAttribute('href', 'javascript:void(0)');
            }
            else {
                this._transformTagA(children[i]);
            }
        }
        this._transformElement(ele);
    };
    /**
     * (old)
     * @param HtmlAbstract
     */
    MessageProvider.prototype.transHtml = function (HtmlAbstract) {
        var result = "";
        if (HtmlAbstract) {
            var ele = document.createElement('div'); // 创建element
            ele.innerHTML = HtmlAbstract;
            this._transformTagA(ele);
            this._transformElement(ele);
            result = ele.innerHTML;
        }
        return result;
    };
    MessageProvider.prototype._transformElement = function (ele) {
        var children = ele.children;
        var tmpelement = document.createElement('div'); // 创建element 
        var textContentWithoutNode = ele.innerHTML;
        for (var i = 0; i < children.length; i++) {
            var outerHTML = children.item(i).outerHTML;
            tmpelement.appendChild(children[i]);
            textContentWithoutNode = textContentWithoutNode.replace(outerHTML, "");
        }
        ele.innerHTML = this._transformUrlToTagA(textContentWithoutNode);
        for (var i = 0; i < tmpelement.children.length; i++) {
            ele.appendChild(tmpelement.children[i]);
        }
    };
    MessageProvider.prototype._transformUrlToTagA = function (html) {
        var abstractArray = html.split(/\s+/);
        var i = 0;
        for (var _i = 0, abstractArray_1 = abstractArray; _i < abstractArray_1.length; _i++) {
            var abstract = abstractArray_1[_i];
            if (__WEBPACK_IMPORTED_MODULE_6__services_utility__["a" /* Utility */].isUrl(abstract)) {
                var a = "<a href=\"javascript:void(0)\" title=\"" + abstract + "\">" + abstract + "</a>";
                abstractArray[i] = a;
            }
            i++;
        }
        return abstractArray.join(' ');
    };
    /**
     * 转换url 或者a标签
     * @param html html文本
     */
    MessageProvider.prototype.transformHtml = function (html) {
        if (!html)
            return "";
        var split = html.split('</a>');
        if (split.length <= 1) {
            return this._transformUrlToTagA(html);
        }
        else {
            for (var i = 0; i < split.length; i++) {
                var _split = split[i].split('<a');
                if (split.length - 1 == i) {
                    split[i] = this._transformUrlToTagA(split[i]);
                }
                else {
                    for (var j = 0; j < _split.length; j++) {
                        if (j == _split.length - 1) {
                            var containsA = _split[j];
                            if (!containsA || containsA.length != 0) {
                                var start = containsA.indexOf('href="') + 6, length_1 = 0, isFind = false;
                                while (!isFind && start >= 6) {
                                    if (containsA[start + length_1] == '"') {
                                        isFind = true;
                                    }
                                    if (containsA.length == start + length_1) {
                                        isFind = true;
                                        containsA += '"';
                                    }
                                    length_1++;
                                }
                                var url = containsA.substr(start, length_1);
                                var replacestr = "javascript:void(0)\" title=\"" + url;
                                containsA = containsA.replace(url, replacestr);
                                _split[j] = containsA;
                            }
                        }
                        else {
                            _split[j] = this._transformUrlToTagA(_split[j]);
                        }
                    }
                    split[i] = _split.join('<a');
                }
            }
            return split.join('</a>');
        }
    };
    /**
     * 插入新消息，先将messageid插入sqlite，再将明细以messageid为key保存明细
     * @param message
     */
    MessageProvider.prototype.insertMessage = function (message) {
        this.sqlite.insertMessage(message).subscribe(function (res) {
        });
    };
    /**
     * 查询数据
     * 先从sqlite中根据条件去除所需获取的messageid，再从storage取得明细
     * @param userID 消息所属id
     * @param toUserId 对方id
     * @param limit 查询数量
     * @param offset 偏移量（从第几条开始）
     * @param isNotReverse 是否不需要翻转，默认翻转
     */
    MessageProvider.prototype.queryMessage = function (chatId, limit, offset, isNotReverse) {
        var _this = this;
        if (isNotReverse === void 0) { isNotReverse = false; }
        return new __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"](function (observe) {
            _this.sqlite.queryMessage(chatId, limit, offset, isNotReverse).subscribe(function (res) {
                var messages = [];
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var item = res_1[_i];
                    if (item.Extra) {
                        messages.push(JSON.parse(item.Extra));
                    }
                }
                _this.setMessage(messages.concat(_this.messages));
                observe.next(messages);
            }, function (err) {
                observe.error([]);
            });
        });
    };
    /**
     * 查询数据
     * 先从sqlite中根据条件去除所需获取的chatid，再从storage取得明细
     * @param userId 用户id
     */
    MessageProvider.prototype.getMessageChat = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"](function (observe) {
            _this.sqlite.queryMessageChat().subscribe(function (res) {
                var session = [];
                for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                    var item = res_2[_i];
                    if (item.Extra) {
                        var messageSession = JSON.parse(item.Extra);
                        var messageExtra = JSON.parse(item.messageExtra);
                        messageSession.latestMessageId = messageExtra.id;
                        messageSession.latestMessageTitle = messageExtra.title || messageExtra.abstract || (messageExtra.formatType &&
                            messageExtra.formatType.toLowerCase().indexOf('image') > -1 ?
                            _this.translateService.instant('MESSAGE_TYPE_IMAGE') : '');
                        messageSession.latestTime = messageExtra.receiveTime;
                        session.push(messageSession);
                    }
                }
                observe.next(session);
                _this.messageSession = session || [];
                _this.getUnreadMessageCount();
            }, function (error) {
                observe.next([]);
            });
        });
    };
    MessageProvider.prototype._unitTestTransHtml = function () {
        var html1 = "\n    http://www.baidu.com\n    <div>\n    http://www.tentec.com\n        <p>\u8FDB\u5165\u4EAC\u4E1C<a href=\"http://www.jd.com>\u8BF7\u70B9\u51FB\u8FD9\u91CC</a></p>\n    </div>";
        var html2 = "<div>\n        http://www.baidu.com\n        <div>\n        http://www.baidu.com\n        <p>\u8FDB\u5165\u4EAC\u4E1C<div>\n        http://www.baidu.com\n        <p>\u8FDB\u5165\u4EAC\u4E1C<a href=\"http://www.jd.com\">\u8BF7\u70B9\u51FB\u8FD9\u91CC</a></p>\n    </div></p>\n    </div>\n    </div>";
        console.log(html1.split('</a>'));
        console.log(this.transformHtml(html1));
        console.log(this.transformHtml(html2));
        console.log(html1, this.transHtml(html1));
        console.log(html2, this.transHtml(html2));
    };
    /**
     * {
    "errcode": 0,
    "errmsg": "OK",
    "result": [
        {
            "messageId": 0,
            "fromType": "Widget",
            "formatType": "Image",
            "widgetId": 0,
            "widgetName": "test",
            "widgetIcon": "",
            "senderId": 0,
            "senderName": "wo",
            "senderAvator": "",
            "groupId": 0,
            "title": "",
            "abstract": "",
            "imageUrl": "",
            "redirectUrl": ""
        }
    ]
}
     */
    MessageProvider.prototype.getMessageMissing = function () {
        var seq = this.httpService.post('Message/Missing', true, {}, true).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    MessageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__services_services__["b" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_10__services_services__["g" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_10__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_8__services_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_7__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__services_jpush_service__["a" /* JPushService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1__sqlite_provider__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_0__contact_provider__["a" /* ContactProvider */]])
    ], MessageProvider);
    return MessageProvider;
}());

//# sourceMappingURL=message-provider.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginPage; });
/* unused harmony export SetPasswordPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Tab3Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Tab4Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Tab5Root; });
/* unused harmony export Tab6Root */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return MessageListPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MessageChatPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return UpgradePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return TutorialPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return workflow_tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return workflow_tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return workflow_tab3Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return workflow_tab4Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return workflow_tabs; });
// The page the user lands on after opening the app and without a session
var LoginPage = 'LoginPage'; // 'WelcomePage';
var SetPasswordPage = 'SetPasswordPage'; // 'WelcomePage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'HomePage';
var Tab2Root = 'MessageSessionPage';
var Tab3Root = 'WidgetListPage';
var Tab4Root = 'CommunityPage';
var Tab5Root = 'MyListPage';
var Tab6Root = 'CommunityIframePage';
var BrowserPage = 'BrowserPage';
var MessageListPage = 'MessageListPage';
var MessageChatPage = 'MessageChatPage';
var UpgradePage = 'UpgradePage';
var TutorialPage = 'TutorialPage';
var workflow_tab1Root = 'UndonetaskPage';
var workflow_tab2Root = 'DonetaskPage';
var workflow_tab3Root = 'WorkflowTaskPage';
var workflow_tab4Root = 'WorkflowSettingPage';
var workflow_tabs = [workflow_tab1Root, workflow_tab2Root, workflow_tab3Root, workflow_tab4Root];
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_clipboard__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the ShareProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ShareProvider = (function () {
    function ShareProvider(http, nativeService, events, translate, sanitizer, httpService, session, platform, toastCtrl, clipboard) {
        this.http = http;
        this.nativeService = nativeService;
        this.events = events;
        this.translate = translate;
        this.sanitizer = sanitizer;
        this.httpService = httpService;
        this.session = session;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.clipboard = clipboard;
        this.loadcount = 0; //加载次数
    }
    /**
     * 分享到微信
     * @param shareBody 分享body
     */
    ShareProvider.prototype._shareOnWechat = function (shareBody) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].create(function (observer) {
            if (_this._isSupportWeChat()) {
                _this.nativeService.isInstallWeChat();
                shareBody.message.thumb = shareBody.message.thumb || __WEBPACK_IMPORTED_MODULE_1__services_constants__["j" /* DEFAULT_LOGO */];
                shareBody.message.description = shareBody.message.description || "";
                Wechat.share(shareBody, function (res) {
                    observer.next(res);
                }, function (reason) {
                    observer.error(reason);
                    console.error("Failed: " + JSON.stringify(reason));
                });
            }
            else {
                observer.next(true);
            }
        });
    };
    // 分享网页到微信
    ShareProvider.prototype._shareWebPageOnWx = function (messageBody, scene) {
        var url = __WEBPACK_IMPORTED_MODULE_7__services_services__["h" /* Utility */].removeSessionInfoForShareLink(messageBody.resource);
        url = __WEBPACK_IMPORTED_MODULE_7__services_services__["h" /* Utility */].addShareByUserToURL(url, this.session.userId);
        var msgBody = Object.assign(messageBody, {
            media: {
                type: this._getTypeWebpage(),
                webpageUrl: url
            }
        });
        var shareBody = {
            message: msgBody,
            scene: scene
        };
        //console.log(shareBody)
        return this._shareOnWechat(shareBody);
    };
    // 分享图片到微信
    ShareProvider.prototype._shareImageOnWx = function (messageBody, scene) {
        var msgBody = Object.assign(messageBody, {
            media: {
                type: this._getTypeImage(),
                image: messageBody.resource
            }
        });
        var shareBody = {
            message: msgBody,
            scene: scene
        };
        return this._shareOnWechat(shareBody);
    };
    // 分享网页微信朋友圈
    ShareProvider.prototype.shareWebPageWxTimeLine = function (messageBody) {
        return this._shareWebPageOnWx(messageBody, this._getSceneTimeline());
    };
    // 分享网页到微信好友
    ShareProvider.prototype.shareWebPageWxSession = function (messageBody) {
        return this._shareWebPageOnWx(messageBody, this._getSceneSession());
    };
    // 分享图片微信朋友圈
    ShareProvider.prototype.shareImageWxTimeLine = function (messageBody) {
        return this._shareImageOnWx(messageBody, this._getSceneTimeline());
    };
    // 分享图片到微信好友
    ShareProvider.prototype.shareImageWxSession = function (messageBody) {
        return this._shareImageOnWx(messageBody, this._getSceneSession());
    };
    ShareProvider.prototype._getSceneSession = function () {
        if (this._isSupportWeChat()) {
            return Wechat.Scene.SESSION;
        }
        return 0;
    };
    ShareProvider.prototype._getSceneTimeline = function () {
        if (this._isSupportWeChat()) {
            return Wechat.Scene.TIMELINE;
        }
        return 1;
    };
    ShareProvider.prototype._getTypeImage = function () {
        if (this._isSupportWeChat()) {
            return Wechat.Type.IMAGE;
        }
        return 7;
    };
    ShareProvider.prototype._getTypeWebpage = function () {
        if (this._isSupportWeChat()) {
            return Wechat.Type.WEBPAGE;
        }
        return 4;
    };
    ShareProvider.prototype._isSupportWeChat = function () {
        //console.log(typeof Wechat !== 'undefined')
        //console.log(Wechat)
        return this.nativeService.isMobile() && typeof Wechat !== 'undefined';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewChild"])("iframe"),
        __metadata("design:type", Object)
    ], ShareProvider.prototype, "_iframe", void 0);
    ShareProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_7__services_services__["b" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_7__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_clipboard__["a" /* Clipboard */]])
    ], ShareProvider);
    return ShareProvider;
}());

//# sourceMappingURL=share-provider.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(98);
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
 * 上传图片到文件服务器
 */
var FileService = (function () {
    function FileService(httpService, nativeService, storage, session) {
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.session = session;
    }
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__session__["a" /* Session */]])
    ], FileService);
    return FileService;
}());

//# sourceMappingURL=file-service.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return IS_DEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return IS_BETA; });
/* unused harmony export IS_LOAD_SQLITE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return DEVELOPMENT_WEB_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DEVELOPMENT_API_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return DEVELOPMENT_FILE_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return DEVELOPMENT_APP_DOWNLOAD_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return PRODUCTION_WEB_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return PRODUCTION_API_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return PRODUCTION_FILE_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return PRODUCTION_APP_DOWNLOAD_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return SCANRESULT_WEBURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return APPNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return APPNAME_PAGE_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DEFAULT_AVATAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DEFAULT_LOGO; });
/* unused harmony export DEFAULT_IPROUD_POINTS */
/* unused harmony export PAGE_SIZE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return IMAGE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return QUALITY_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REQUEST_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return FUNDEBUG_API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CERT_SERCET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return APPSECRET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APPLE_STORE_APPID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APPLE_STORE_APPID_TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return TUTORIAL_FLAG_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return WEIXIN_APPID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return WEIXIN_APPSECRET; });
/* unused harmony export DB_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ENABLE_ELECTRONIC_SIGNATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return HOT_CONTENT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return OPEN_WIDGET_WAY; });
/* unused harmony export CODE_PUSH_DEPLOYMENT_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return APP_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SQLITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DEEPLINKS_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return STORAGE_KEY; });
var IS_DEBUG = false; //是否开发(调试)模式
var IS_BETA = false; //是否为beta版
var IS_LOAD_SQLITE = true; //是否使用sqlite
/*---------------------Development Environment------------------------------*/
var DEVELOPMENT_WEB_SERVER = 'http://iproud-t.fihmb.com/'; //域名
var DEVELOPMENT_API_SERVER = 'http://iproud-t.fihmb.com/frontapi/'; //后台Api地址
var DEVELOPMENT_FILE_SERVER = 'http://iproud-t.fihmb.com/'; //文件服务
var DEVELOPMENT_APP_DOWNLOAD_PAGE = 'http://iproud-t.fihmb.com/AppClient/Android'; //APP下载页面路径
/*---------------------Production Environment------------------------------*/
var PRODUCTION_WEB_SERVER = 'https://iproud.fihmb.com/'; // 域名
var PRODUCTION_API_SERVER = 'https://iproud.fihmb.com/frontapi/'; //后台Api地址
// export const PRODUCTION_API_SERVER = 'http://localhost:42151/'; //后台Api地址
var PRODUCTION_FILE_SERVER = 'https://iproud.fihmb.com/'; //文件服务
var PRODUCTION_APP_DOWNLOAD_PAGE = 'https://iproud.fihmb.com/AppClient/Android'; //APP下载页面路径
var SCANRESULT_WEBURL = 'https://iproud.fihmb.com/WebApp/ScanResult'; //APP下载页面路径
var APPNAME = "iProud"; // App Unique Name
var APPNAME_PAGE_PREFIX = APPNAME + "://";
var DEFAULT_AVATAR = './assets/img/avatar.png'; //用户默认头像
var DEFAULT_LOGO = './assets/imgs/logo.png'; //用户默认头像
var DEFAULT_IPROUD_POINTS = './assets/img/points.png'; //用户默认头像
var PAGE_SIZE = 5; //默认分页大小
var IMAGE_SIZE = 512; //拍照/从相册选择照片压缩大小
var QUALITY_SIZE = 94; //图像压缩质量，范围为0 - 100
var REQUEST_TIMEOUT = 20000; //请求超时时间,单位为毫秒
var FUNDEBUG_API_KEY = '2042a1e8ac5939175022e0f74fc4dd39ff0e36c67f7fb6023215f5f39f182a91'; //https://fundebug.com/申请key //defzhu@126.com
var CERT_SERCET = 'FiH@82#0-295ce16a405a81ABC';
var APPSECRET = 'pBnnZUS0OjPeSW2w6MW%EUwjPoSlMDj4';
var APPLE_STORE_APPID = '1407158687'; //苹果应用APPID
var APPLE_STORE_APPID_TEST = '1407158687'; //苹果应用APPID 微信id
var TUTORIAL_FLAG_NAME = "Tutorial-1.9-t";
var WEIXIN_APPID = 'wx6e76a50c2c5970ea'; //微信APPID
var WEIXIN_APPSECRET = '9c79679b23a4a119ef478c0fada64493'; //APP secret微信
var DB_NAME = '_ionicstorage';
var ENABLE_ELECTRONIC_SIGNATURE = true;
var HOT_CONTENT_URL = {
    FILE_URL: 'http://www.popochiu.com:8888/www/chcp.json',
    DIR_URL: 'http://www.popochiu.com:8888/www/'
};
var OPEN_WIDGET_WAY = {
    IFRAME: 'Iframe',
    LOCALBROWSER: 'LocalBrowser',
    INAPPBROWSER: 'InAppBrowser',
    ASK: 'Ask' //每次打开时询问
};
//code push 部署key
var CODE_PUSH_DEPLOYMENT_KEY = {
    'android': {
        'Production': 'i0LgJRugiIfjVYTgmXs9go45Xc7g26690215-d954-4697-a879-90e0c4612b59',
        'Staging': 'WY29_Zyq_hg0eB3TSTGaKRSKPE6k26690215-d954-4697-a879-90e0c4612b59'
    },
    'ios': {
        'Production': 'kn3VJ28z0hB_zQYnW-KnblldnBzN26690215-d954-4697-a879-90e0c4612b59',
        'Staging': 'SRoxClVMoed8SgwIRxeVCPWx26Fk26690215-d954-4697-a879-90e0c4612b59'
    }
};
/** APP支持语言 */
var LANGUAGES = [{
        name: 'English', value: 'en-US'
    }, {
        name: '简体中文', value: 'zh-CN'
    }, {
        name: '繁体中文', value: 'zh-TW'
    }, {
        name: 'Tiếng việt', value: 'vi-VN'
    }
];
var APP_STYLE = {
    DEFAULT: {
        NAME: 'theme-light',
        NO_MESSAGE: "assets/img/no-data.png",
        BG_COLOR: '#ffffff',
        TEXT_COLOR: '#343434',
        BORDER_COLOR: '#f2f2f2',
        BROWSER_IMG: {
            BACKBUTTON: {
                wwwImage: 'assets/imgs/back_black.png',
                wwwImagePressed: 'assets/imgs/back_pressed.png',
            },
            CLOSEBUTTON: {
                wwwImage: 'assets/imgs/close_black.png',
                wwwImagePressed: 'assets/imgs/close_pressed.png',
            },
            MENU: {
                wwwImage: 'assets/imgs/menu_black.png',
                wwwImagePressed: 'assets/imgs/menu_pressed.png',
            }
        }
    },
    DARK: {
        NAME: 'theme-dark',
        NO_MESSAGE: "assets/img/no-data_black.png",
        BG_COLOR: '#181818',
        TEXT_COLOR: '#ffffff',
        BORDER_COLOR: '#2B3238',
        BROWSER_IMG: {
            BACKBUTTON: {
                wwwImage: 'assets/imgs/back_white.png',
                wwwImagePressed: 'assets/imgs/back_pressed.png',
            },
            CLOSEBUTTON: {
                wwwImage: 'assets/imgs/close_white.png',
                wwwImagePressed: 'assets/imgs/close_pressed.png',
            },
            MENU: {
                wwwImage: 'assets/imgs/menu_white.png',
                wwwImagePressed: 'assets/imgs/menu_pressed.png',
            }
        }
    }
};
var SQLITE = {
    WINDOW: {
        name: DB_NAME,
        version: '1',
        description: '',
        maxSize: 1004 * 1024
    },
    ANDROID: {
        name: DB_NAME,
        location: 'default'
    },
    IOS: {
        name: DB_NAME,
        iosDatabaseLocation: 'default'
    }
};
var DEEPLINKS_TYPE = {
    OPENURL: 'openURL',
    OPENPAGE: 'openPage'
};
var STORAGE_KEY = {
    SETTING: {
        SHOWSOCIAL: 'local_showsocial',
        SHOWMASS: 'local_showmass',
        ENABLE_LOCAL_SETTING_SOCIAL: 'local_setting_social',
        ONLY_COLLECT_ERROR_INFO: 'only_collect_error'
    },
    DATA: {
        CACHE_SIZE: 'Cache_Size'
    },
    ACCOUNT: {
        TOKEN: 'tokenObject',
    }
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JPushService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jiguang_ionic_jpush__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_session__ = __webpack_require__(19);
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
 * 极光推送
 */
var JPushService = (function () {
    function JPushService(jPush, nativeService, httpService, events, session, handleProvider) {
        this.jPush = jPush;
        this.nativeService = nativeService;
        this.httpService = httpService;
        this.events = events;
        this.session = session;
        this.handleProvider = handleProvider;
        this.count = 0;
    }
    JPushService.prototype.initJpush = function () {
        this.handleProvider.generate('JPushService:initJpush', 0);
        if (!this.nativeService.isMobile()) {
            return;
        }
        this.jPush.init();
        this.jPush.setDebugMode(__WEBPACK_IMPORTED_MODULE_4__constants__["t" /* IS_DEBUG */]);
        this.getDeviceId(false);
        this.jPushAddEventListener();
    };
    JPushService.prototype.jPushAddEventListener = function () {
        var _this = this;
        this.jPush.getUserNotificationSettings().then(function (result) {
            if (result == 0) {
            }
            else if (result > 0) {
            }
        });
        //点击通知进入应用程序时会触发的事件
        document.addEventListener("jpush.openNotification", function (event) {
            _this.handleProvider.generate('jpush.openNotification', 0);
            var content = _this.nativeService.isIos() ? event : event['extras']['cn.jpush.android.EXTRA'];
            _this.events.publish('iProud.openNotification', content);
            _this.handleProvider.generate('jpush:this.events.publish(iProud.openNotification, content);', 0);
        }, false);
        //foreground收到通知时会触发该事件
        document.addEventListener("jpush.receiveNotification", function (event) {
            var extras = _this.nativeService.isIos() ? event : event['extras']['cn.jpush.android.EXTRA'];
            _this.events.publish('iProud.receiveNotification', extras);
        }, false);
        //background收到通知时会触发该事件jpush.backgroundNotification
        document.addEventListener("jpush.backgroundNotification", function (event) {
            var extras = _this.nativeService.isIos() ? event : event['extras']['cn.jpush.android.EXTRA'];
            _this.events.publish('iProud.receiveNotification', extras);
        }, false);
        //background收到customize message
        document.addEventListener("jpush.receiveMessage", function (event) {
            // alert(JSON.stringify(event));
            var extras = _this.nativeService.isIos() ? event : event['extras']['cn.jpush.android.EXTRA'];
            _this.events.publish('jpush.receiveCustomizeMessage', extras);
        }, false);
        //收到自定义消息时触发这个事件
        // document.addEventListener("jpush.receiveMessage", event => {
        //   let message = this.nativeService.isIos() ? event['content'] : event['message']; 
        // }, false);
    };
    JPushService.prototype.setAlias = function () {
        if (!this.nativeService.isMobile()) {
            return;
        }
        this.jPush.setAlias({ sequence: 1, alias: this.session.userId.toString() }).then(function (result) {
            console.log(result);
        }, function (error) {
            console.error('jpush-设置别名失败:' + error.code);
        });
    };
    JPushService.prototype.deleteAlias = function () {
        if (!this.nativeService.isMobile()) {
            return;
        }
        this.jPush.deleteAlias({ sequence: 2 }).then(function (result) {
        }, function (error) {
            console.error('jpush-设删除别名失败:' + error.code);
        });
    };
    JPushService.prototype.setTags = function (tags) {
        if (tags === void 0) { tags = []; }
        if (!this.nativeService.isMobile()) {
            return;
        }
        if (this.nativeService.isAndroid()) {
            tags.push('android');
        }
        if (this.nativeService.isIos()) {
            tags.push('ios');
        }
        this.jPush.setTags({ sequence: 3, tags: tags }).then(function (result) {
        }, function (error) {
            console.error('jpush-设置标签失败:' + error.code);
        });
    };
    JPushService.prototype.deleteTags = function (tags) {
        if (tags === void 0) { tags = []; }
        if (!this.nativeService.isMobile()) {
            return;
        }
        this.jPush.deleteTags({ sequence: 4, tags: tags }).then(function (result) {
        }, function (error) {
            console.error('jpush-删除标签失败:' + error.code);
        });
    };
    /**
     * 清除所有通知
     */
    JPushService.prototype.clearAllNotification = function () {
        this.jPush.clearAllNotification();
    };
    JPushService.prototype.clearNotificationById = function (messageId) {
        this.jPush.clearNotificationById(messageId);
    };
    //设置ios应用角标数量
    JPushService.prototype.setIosIconBadgeNumber = function (badgeNumber) {
        if (this.nativeService.isIos()) {
            this.jPush.setBadge(badgeNumber); //上传badge值到jPush服务器
            this.jPush.setApplicationIconBadgeNumber(badgeNumber); //设置应用badge值
        }
    };
    //取得设备Id
    JPushService.prototype.getDeviceId = function (isShowMsg) {
        var _this = this;
        this.count++;
        this.jPush.getRegistrationID().then(function (deviceId) {
            if (isShowMsg) {
                _this.nativeService.showToast("(count):" + _this.count + ",DeviceId:" + deviceId);
            }
            _this.session.deviceId = deviceId;
            if (deviceId != null && deviceId != undefined && deviceId != "") {
                if (_this.session.userId != null) {
                    _this.httpService.post('User/DeviceId', true, { "deviceId": deviceId }, true).subscribe(function (res) {
                    });
                }
            }
            else if (_this.count < 5) {
                setTimeout(function () {
                    _this.getDeviceId(isShowMsg);
                }, 3000);
            }
        });
    };
    JPushService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__jiguang_ionic_jpush__["a" /* JPush */],
            __WEBPACK_IMPORTED_MODULE_5__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__["a" /* HandleProvider */]])
    ], JPushService);
    return JPushService;
}());

//# sourceMappingURL=jpush-service.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Session; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Session = (function () {
    function Session() {
        //设置http请求是否显示loading,注意:设置为true,接下来的请求会不显示loading,请求执行完成会自动设置为false
        this._showLoading = true;
        this._NightTheme = false;
        //是否启用文件缓存
        this._enabledFileCache = true;
        this._keyboardHeight = 0;
    }
    Object.defineProperty(Session.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (value) {
            this._userId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "refreshToken", {
        get: function () {
            return this._refreshToken;
        },
        set: function (value) {
            this._refreshToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "expireTime", {
        get: function () {
            return this._expireTime;
        },
        set: function (value) {
            this._expireTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "tokenObject", {
        get: function () {
            return this._user_and_token;
        },
        set: function (value) {
            this._user_and_token = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "language", {
        get: function () {
            return this._language;
        },
        set: function (value) {
            this._language = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "deviceId", {
        get: function () {
            return this._deviceId;
        },
        set: function (value) {
            this._deviceId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "shortDatePattern", {
        //简短日期格式
        get: function () {
            return this._shortDatePattern;
        },
        set: function (value) {
            this._shortDatePattern = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "longDatePattern", {
        //完整日期格式
        get: function () {
            return this._longDatePattern;
        },
        set: function (value) {
            this._longDatePattern = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "timezone", {
        //时区
        get: function () {
            return this._timezone;
        },
        set: function (value) {
            this._timezone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "utcOffset", {
        //时区偏移秒数
        get: function () {
            return this._utcOffset;
        },
        set: function (value) {
            this._utcOffset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "dstOffset", {
        //夏令时偏移秒数
        get: function () {
            return this._dstOffset;
        },
        set: function (value) {
            this._dstOffset = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "showLoading", {
        get: function () {
            return this._showLoading;
        },
        set: function (value) {
            this._showLoading = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "enabledFileCache", {
        get: function () {
            return this._enabledFileCache;
        },
        set: function (value) {
            this._enabledFileCache = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "homedata", {
        get: function () {
            return this._homedata;
        },
        set: function (value) {
            this._homedata = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "isPunchMember", {
        get: function () {
            return this._isPunchMember;
        },
        set: function (value) {
            this._isPunchMember = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "isEmployee", {
        get: function () {
            return this._isEmployee;
        },
        set: function (value) {
            this._isEmployee = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "widget", {
        get: function () {
            return this._widget;
        },
        set: function (value) {
            this._widget = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "setting", {
        get: function () {
            return this._setting;
        },
        set: function (value) {
            this._setting = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "messageWidgetId", {
        get: function () {
            return this._messageWidgetId;
        },
        set: function (value) {
            this._messageWidgetId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "isDarkMode", {
        get: function () {
            return this._NightTheme;
        },
        set: function (value) {
            this._NightTheme = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "globalSetting", {
        get: function () {
            return this._globalSetting;
        },
        set: function (value) {
            this._globalSetting = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "LangContexts", {
        get: function () {
            return this._LangContexts;
        },
        set: function (value) {
            this._LangContexts = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "keyboardHeight", {
        get: function () {
            return this._keyboardHeight;
        },
        set: function (value) {
            this._keyboardHeight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "showSocial", {
        get: function () {
            return this._showSocial;
        },
        set: function (value) {
            this._showSocial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "communityColumn", {
        get: function () {
            return this._communityColumn;
        },
        set: function (value) {
            this._communityColumn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "unionId", {
        get: function () {
            return this._unionId;
        },
        set: function (value) {
            this._unionId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Session.prototype, "certKey", {
        get: function () {
            return this.userId + 'cert';
        },
        enumerable: true,
        configurable: true
    });
    Session = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Session);
    return Session;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_minimize__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_themeable_browser__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_sim__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_user_agent__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__constants__ = __webpack_require__(14);
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















//import { ImagePicker } from "@ionic-native/image-picker";








var NativeService = (function () {
    function NativeService(toastCtrl, alertCtrl, loadingCtrl, statusBar, splashScreen, platform, appVersion, camera, network, logger, file, appMinimize, cn, 
        // private imagePicker: ImagePicker,
        browser, diagnostic, sim, transfer, geolocation, keyboard, translateService, userAgent, fileChooser) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.platform = platform;
        this.appVersion = appVersion;
        this.camera = camera;
        this.network = network;
        this.logger = logger;
        this.file = file;
        this.appMinimize = appMinimize;
        this.cn = cn;
        this.browser = browser;
        this.diagnostic = diagnostic;
        this.sim = sim;
        this.transfer = transfer;
        this.geolocation = geolocation;
        this.keyboard = keyboard;
        this.translateService = translateService;
        this.userAgent = userAgent;
        this.fileChooser = fileChooser;
        /**
         * 只有一个确定按钮的弹出框.
         * 如果已经打开则不再打开
         */
        this.alert = (function () {
            var isExist = false;
            return function (title, subTitle, message, callBackFun) {
                if (subTitle === void 0) { subTitle = ''; }
                if (message === void 0) { message = ''; }
                if (callBackFun === void 0) { callBackFun = null; }
                if (!isExist) {
                    isExist = true;
                    var alert_1 = _this.alertCtrl.create({
                        title: title,
                        subTitle: subTitle,
                        message: message,
                        buttons: [{
                                text: _this.translateService.instant('APP_COMMON_CONFIRM'),
                                handler: function () {
                                    isExist = false;
                                    callBackFun && callBackFun();
                                }
                            }],
                        enableBackdropDismiss: false
                    });
                    alert_1.present();
                }
            };
        })();
        /**
         * 获得用户当前坐标信息
         * 5秒内只会返回同一结果
         */
        this.getUserLocation = (function () {
            var lastTime = null; // 缓存上次获取定位时间
            var lastResult = null; // 缓存上次获取的结果
            return function () {
                return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
                    // 5秒内有获取过定位则不再重复获取
                    if (lastTime && (new Date().getTime() - lastTime < 5000)) {
                        if (lastResult) {
                            observer.next(lastResult);
                        }
                        else {
                            // 获取定位是异步,所以这里用定时,直到获取到结果
                            var timer_1 = setInterval(function () {
                                if (lastResult) {
                                    clearInterval(timer_1);
                                    observer.next(lastResult);
                                }
                            }, 1000);
                        }
                    }
                    else {
                        lastTime = new Date().getTime(); // 准备获取定位时记录时间
                        lastResult = null; // 每次重新获取时,需清空上次结果,以免下次一获取在5秒内直接返回上次结果
                        _this.getLocation().subscribe(function (res) {
                            lastTime = new Date().getTime(); // 当获取成功,重置上次获取时间
                            lastResult = res;
                            observer.next(res);
                        }, function () {
                            lastTime = null;
                        });
                    }
                });
            };
        })();
        //检测app位置服务是否开启
        this.assertLocationService = (function () {
            var enabledLocationService = false; //手机是否开启位置服务
            return function () {
                return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
                    if (enabledLocationService) {
                        observer.next(true);
                    }
                    else {
                        _this.diagnostic.isLocationEnabled().then(function (enabled) {
                            if (enabled) {
                                enabledLocationService = true;
                                observer.next(true);
                            }
                            else {
                                enabledLocationService = false;
                                _this.alertCtrl.create({
                                    title: '您未开启位置服务',
                                    subTitle: '正在获取位置信息',
                                    buttons: [{ text: '取消' },
                                        {
                                            text: '去开启',
                                            handler: function () {
                                                _this.diagnostic.switchToLocationSettings();
                                            }
                                        }
                                    ]
                                }).present();
                                observer.error(false);
                            }
                        }).catch(function (err) {
                            _this.logger.log(JSON.stringify(err), '调用diagnostic.isLocationEnabled方法失败');
                            observer.error(false);
                        });
                    }
                });
            };
        })();
        //检测app是否有定位权限,如果没有权限则会请求权限
        this.assertLocationAuthorization = (function () {
            var locationAuthorization = false;
            return function () {
                return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
                    if (locationAuthorization) {
                        observer.next(true);
                    }
                    else {
                        _this.diagnostic.isLocationAuthorized().then(function (res) {
                            if (res) {
                                locationAuthorization = true;
                                observer.next(true);
                            }
                            else {
                                locationAuthorization = false;
                                _this.diagnostic.requestLocationAuthorization('always').then(function (res) {
                                    if (res == 'DENIED_ALWAYS') {
                                        locationAuthorization = false;
                                        _this.alertCtrl.create({
                                            title: '缺少定位权限',
                                            subTitle: '请在手机设置或app权限管理中开启',
                                            buttons: [{ text: '取消' },
                                                {
                                                    text: '去开启',
                                                    handler: function () {
                                                        _this.diagnostic.switchToSettings();
                                                    }
                                                }
                                            ]
                                        }).present();
                                        observer.error(false);
                                    }
                                    else {
                                        locationAuthorization = true;
                                        observer.next(true);
                                    }
                                }).catch(function (err) {
                                    _this.logger.log(JSON.stringify(err), '调用diagnostic.requestLocationAuthorization方法失败');
                                    observer.error(false);
                                });
                            }
                        }).catch(function (err) {
                            _this.logger.log(JSON.stringify(err), '调用diagnostic.isLocationAvailable方法失败');
                            observer.error(false);
                        });
                    }
                });
            };
        })();
        /**
         * 检测app是否有读取存储权限,如果没有权限则会请求权限
         */
        this.externalStoragePermissionsAuthorization = (function () {
            var havePermission = false;
            return function () {
                return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
                    if (havePermission) {
                        observer.next(true);
                    }
                    else {
                        var permissions_1 = [_this.diagnostic.permission.READ_EXTERNAL_STORAGE, _this.diagnostic.permission.WRITE_EXTERNAL_STORAGE];
                        _this.diagnostic.getPermissionsAuthorizationStatus(permissions_1).then(function (res) {
                            if (res.READ_EXTERNAL_STORAGE == 'GRANTED' && res.WRITE_EXTERNAL_STORAGE == 'GRANTED') {
                                havePermission = true;
                                observer.next(true);
                            }
                            else {
                                havePermission = false;
                                _this.diagnostic.requestRuntimePermissions(permissions_1).then(function (res) {
                                    if (res.READ_EXTERNAL_STORAGE == 'GRANTED' && res.WRITE_EXTERNAL_STORAGE == 'GRANTED') {
                                        havePermission = true;
                                        observer.next(true);
                                    }
                                    else {
                                        havePermission = false;
                                        _this.alertCtrl.create({
                                            title: '缺少读取存储权限',
                                            subTitle: '请在手机设置或app权限管理中开启',
                                            buttons: [{ text: '取消' },
                                                {
                                                    text: '去开启',
                                                    handler: function () {
                                                        _this.diagnostic.switchToSettings();
                                                    }
                                                }
                                            ]
                                        }).present();
                                        observer.error(false);
                                    }
                                }).catch(function (err) {
                                    _this.logger.log(JSON.stringify(err), '调用diagnostic.requestRuntimePermissions方法失败');
                                    observer.error(false);
                                });
                            }
                        }).catch(function (err) {
                            _this.logger.log(JSON.stringify(err), '调用diagnostic.getPermissionsAuthorizationStatus方法失败');
                            observer.error(false);
                        });
                    }
                });
            };
        })();
    }
    /**
     * 状态栏
     */
    NativeService.prototype.statusBarStyle = function (isDark) {
        if (this.isMobile()) {
            this.statusBar.overlaysWebView(true);
            if (!isDark) {
                this.statusBar.styleDefault();
                // this.statusBar.backgroundColorByHexString(APP_STYLE.DEFAULT.BG_COLOR);
            }
            else {
                this.statusBar.styleLightContent();
                // this.statusBar.backgroundColorByHexString(APP_STYLE.DARK.BG_COLOR); 
            }
        }
    };
    NativeService.prototype.setStyleLightContent = function () {
        this.statusBar.styleLightContent();
    };
    NativeService.prototype.setTutorialStatusBarStyle = function (isDark) {
        if (this.isMobile()) {
            this.statusBar.overlaysWebView(false);
            if (!isDark) {
                this.statusBar.styleDefault();
                this.statusBar.backgroundColorByHexString("#32598e");
            }
            else {
                this.statusBar.styleLightContent();
                this.statusBar.backgroundColorByHexString("#32598e");
            }
        }
    };
    /**
     * 设置状态栏字体是否为黑色
     */
    NativeService.prototype.setStatusBarTextDark = function (isDark) {
        isDark ? this.statusBar.styleDefault() : this.statusBar.styleLightContent();
    };
    /**
     * 隐藏启动页面
     */
    NativeService.prototype.splashScreenHide = function () {
        this.isMobile() && this.splashScreen.hide();
    };
    NativeService.prototype.hideKeyboardAccessoryBar = function (isHide) {
        if (this.isIos()) {
            this.keyboard.hideFormAccessoryBar(isHide);
            // this.setKeyboardDisableScroll(true); 
        }
    };
    NativeService.prototype.setKeyboardResizeMode = function (mode) {
        this.keyboard.setResizeMode(mode);
    };
    // setKeyboardDisableScroll(disableScroll: boolean) {
    //     this.keyboard.disableScroll(disableScroll);
    // }
    NativeService.prototype.closeKeyboard = function () {
        this.keyboard.hide();
    };
    NativeService.prototype.showToast = function (message, duration, position, showCloseButton) {
        if (duration === void 0) { duration = 3000; }
        if (position === void 0) { position = "top"; }
        if (showCloseButton === void 0) { showCloseButton = false; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position,
            cssClass: "danger",
            showCloseButton: false,
            closeButtonText: "X",
            dismissOnPageChange: true
        });
        toast.present();
    };
    /**
     * 通过浏览器打开url
     */
    NativeService.prototype.openUrlByBrowser = function (url) {
        //this.browser.create(url, '_system');
        var options = {
            statusbar: {
                color: '#2eb3feff'
            },
            toolbar: {
                height: 44,
                color: '#2eb3feff'
            },
            title: {
                color: '#ffffffff',
                showPageTitle: true
            },
            backButtonCanClose: true
        };
        this.browser.create(url, '_system', options);
    };
    //申请SIM卡读取权限(仅android系统下)
    NativeService.prototype.networkOnChange = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            _this.network.onchange().subscribe(function (value) {
                observer.next(value);
            }, function (error) {
                observer.error(error);
            });
        });
    };
    NativeService.prototype.networkOnConnect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            _this.network.onConnect().subscribe(function (value) {
                observer.next(value);
            }, function (error) {
                observer.error(error);
            });
        });
    };
    NativeService.prototype.networkOnDisconnect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            _this.network.onDisconnect().subscribe(function (value) {
                observer.next(value);
            }, function (error) {
                observer.error(error);
            });
        });
    };
    /**
    * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
    */
    NativeService.prototype.getNetworkType = function () {
        if (!this.isMobile()) {
            return 'wifi';
        }
        return this.network.type;
    };
    /**
     * 判断是否有网络
     */
    NativeService.prototype.isConnecting = function () {
        return this.getNetworkType() != 'none' && this.getNetworkType() != 'unknown';
    };
    /**
     * 调用最小化app插件
     */
    NativeService.prototype.minimize = function () {
        this.appMinimize.minimize();
    };
    /**
     * 是否真机环境
     */
    NativeService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     */
    NativeService.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     */
    NativeService.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     */
    NativeService.prototype.getVersionNumber = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            if (_this.isMobile()) {
                _this.appVersion.getVersionNumber().then(function (value) {
                    observer.next(value);
                }).catch(function (err) {
                    _this.logger.log(JSON.stringify(err), '获得app版本号失败');
                    observer.error(false);
                });
            }
            else {
                observer.error(false);
            }
        });
    };
    /**
     * 获得app name,如现场作业
     * @description  对应/config.xml中name的值
     */
    NativeService.prototype.getAppName = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            _this.appVersion.getAppName().then(function (value) {
                observer.next(value);
            }).catch(function (err) {
                _this.logger.log(JSON.stringify(err), '获得app name失败');
                observer.error(false);
            });
        });
    };
    /**
     * 获得app包名/id,如com.kit.ionic2tabs
     * @description  对应/config.xml中id的值
     */
    NativeService.prototype.getPackageName = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            _this.appVersion.getPackageName().then(function (value) {
                observer.next(value);
            }).catch(function (err) {
                _this.logger.log(JSON.stringify(err), '获得app包名失败');
                observer.error(false);
            });
        });
    };
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    NativeService.prototype.showLoading = function (content) {
        if (content === void 0) { content = ''; }
        if (!this.loading) {
            var loading = this.loadingCtrl.create({
                content: content
            });
            loading.present();
            this.loading = loading;
        }
    };
    ;
    /**
   * 关闭loading
   */
    NativeService.prototype.hideLoading = function () {
        this.loading && this.loading.dismiss();
        this.loading = null;
    };
    ;
    /**
     * 压缩图片
     * @param path 图片路径
     * @param options MaxWidthOrHeight 压缩图片最大宽度或高度
     */
    NativeService.prototype.compressImage = function (path, options) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"](function (observe) {
            var img = new Image();
            if (_this.isIos()) {
                path = path.replace(/^file:\/\//, '');
            }
            img.src = path;
            img.onload = function () {
                // 默认按比例压缩
                var width = options.targetWidth || img.width;
                var height = options.targetheight || img.height;
                if (!options.MaxWidthOrHeight)
                    options.MaxWidthOrHeight = 1024;
                if (options.MaxWidthOrHeight < width || options.MaxWidthOrHeight < height) {
                    var scale = 1;
                    if (width > height) {
                        scale = width / options.MaxWidthOrHeight;
                    }
                    else {
                        scale = height / options.MaxWidthOrHeight;
                    }
                    width = width / scale;
                    height = height / scale;
                }
                var quality = options.quality || 1; // 默认图片质量为1
                //生成canvas
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                // 创建属性节点
                var anw = document.createAttribute("width");
                anw.nodeValue = width.toString();
                var anh = document.createAttribute("height");
                anh.nodeValue = height.toString();
                canvas.setAttributeNode(anw);
                canvas.setAttributeNode(anh);
                ctx.drawImage(img, 0, 0, width, height);
                // 图像质量  
                var base64 = canvas.toDataURL('image/jpeg', quality);
                // 回调函数返回base64的值
                observe.next({ result: true, dataURL: base64 });
            };
        });
    };
    /**
   * 使用cordova-plugin-camera获取照片
   * @param options
   */
    NativeService.prototype.getPicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: __WEBPACK_IMPORTED_MODULE_22__constants__["A" /* QUALITY_SIZE */],
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: true,
            correctOrientation: true //设置摄像机拍摄的图像是否为正确的方向
        }, options);
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            _this.camera.getPicture(ops).then(function (imgData) {
                if (ops.destinationType === _this.camera.DestinationType.DATA_URL) {
                    observer.next('data:image/jpg;base64,' + imgData);
                }
                else {
                    observer.next(imgData);
                }
            }).catch(function (err) {
                if (err == 20) {
                    _this.alert('没有权限,请在设置中开启权限');
                    return;
                }
                if (String(err).indexOf('cancel') != -1) {
                    return;
                }
                _this.logger.log(JSON.stringify(err), '使用cordova-plugin-camera获取照片失败');
                //this.alert('获取照片失败');
                observer.error(false);
            });
        });
    };
    ;
    /**
     * 通过拍照获取照片
     * @param options
     */
    NativeService.prototype.getPictureByCamera = function (options) {
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: __WEBPACK_IMPORTED_MODULE_22__constants__["r" /* IMAGE_SIZE */],
            targetHeight: __WEBPACK_IMPORTED_MODULE_22__constants__["r" /* IMAGE_SIZE */],
        }, options);
        return this.getPicture(ops);
    };
    ;
    /**
     * 通过图库获取照片
     * @param options
     */
    NativeService.prototype.getPictureByPhotoLibrary = function (options) {
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: __WEBPACK_IMPORTED_MODULE_22__constants__["r" /* IMAGE_SIZE */],
            targetHeight: __WEBPACK_IMPORTED_MODULE_22__constants__["r" /* IMAGE_SIZE */],
        }, options);
        return this.getPicture(ops);
    };
    ;
    /**
     * 通过图库获取照片
     * @param options
     */
    NativeService.prototype.getFullPictureByPhotoLibrary = function (options) {
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            allowEdit: false,
        }, options);
        return this.getPicture(ops);
    };
    ;
    /**
    * 通过拍照获取照片
    * @param options
    */
    NativeService.prototype.getFullPictureByCamera = function (options) {
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.FILE_URI,
            allowEdit: false,
        }, options);
        return this.getPicture(ops);
    };
    ;
    /**
     * 通过图库选择多图
     * @param options
     */
    /*
    getMultiplePicture(options = {}): Observable<any> {
        let that = this;
        let ops = Object.assign({
            maximumImagesCount: 6,
            width: IMAGE_SIZE,//缩放图像的宽度（像素）
            height: IMAGE_SIZE,//缩放图像的高度（像素）
            quality: QUALITY_SIZE//图像质量，范围为0 - 100
        }, options);
        return Observable.create(observer => {
            this.imagePicker.getPictures(ops).then(files => {
                let destinationType = options['destinationType'] || 0;//0:base64字符串,1:图片url
                if (destinationType === 1) {
                    observer.next(files);
                } else {
                    let imgBase64s = [];//base64字符串数组
                    for (let fileUrl of files) {
                        that.convertImgToBase64(fileUrl).subscribe(base64 => {
                            imgBase64s.push(base64);
                            if (imgBase64s.length === files.length) {
                                observer.next(imgBase64s);
                            }
                        })
                    }
                }
            }).catch(err => {
                this.logger.log(err, '通过图库选择多图失败');
                this.alert('获取照片失败');
                observer.error(false);
            });
        });
    };
*/
    /**
     * 根据图片绝对路径转化为base64字符串
     * @param path 绝对路径
     */
    NativeService.prototype.convertImgToBase64 = function (path) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            _this.file.resolveLocalFilesystemUrl(path).then(function (fileEnter) {
                fileEnter.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function (e) {
                        observer.next(this.result);
                    };
                    reader.readAsDataURL(file);
                });
            }).catch(function (err) {
                _this.logger.log(JSON.stringify(err), '根据图片绝对路径转化为base64字符串失败');
                observer.error(false);
            });
        });
    };
    NativeService.prototype.resolveLocalFilesystemUrl = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.file.resolveLocalFilesystemUrl(path).then(function (fileEnter) {
                fileEnter.file(function (file) {
                    resolve(file);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    NativeService.prototype.openFileChooser = function () {
        return this.fileChooser.open();
    };
    NativeService.prototype.getVideoCapture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            mediaType: this.camera.MediaType.VIDEO,
            sourceType: this.camera.PictureSourceType.CAMERA,
            cameraDirection: this.camera.Direction.FRONT,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: __WEBPACK_IMPORTED_MODULE_22__constants__["A" /* QUALITY_SIZE */],
            saveToPhotoAlbum: true,
            correctOrientation: true //设置摄像机拍摄的图像是否为正确的方向
        }, options);
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            _this.camera.getPicture(ops).then(function (imgData) {
                if (ops.destinationType === _this.camera.DestinationType.DATA_URL) {
                    observer.next('data:image/jpg;base64,' + imgData);
                }
                else {
                    observer.next(imgData);
                }
            }).catch(function (err) {
                if (err == 20) {
                    _this.alert('没有权限,请在设置中开启权限');
                    return;
                }
                if (String(err).indexOf('cancel') != -1) {
                    return;
                }
                _this.logger.log(JSON.stringify(err), '使用cordova-plugin-camera获取照片失败');
                //this.alert('获取照片失败');
                observer.error(err);
            });
        });
    };
    ;
    NativeService.prototype.checkFile = function (path, fileName) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            _this.file.checkFile(path, fileName).then(function (result) {
                observer.next(result);
            }).catch(function () {
                observer.next(false);
            });
        });
    };
    NativeService.prototype.writeLog = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var date, filename, dirName, path, checkDir, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isAndroid())
                            return [2 /*return*/];
                        date = __WEBPACK_IMPORTED_MODULE_0__utility__["a" /* Utility */].dateFormat(new Date());
                        filename = date + ".txt";
                        dirName = "iproud_log";
                        path = this.file.externalRootDirectory;
                        checkDir = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.file.checkDir(path, dirName)];
                    case 2:
                        checkDir = _a.sent();
                        if (checkDir) {
                            this.writeFileBefore(text, path + dirName, filename);
                        }
                        else {
                            this.createDirAndWrite(path, dirName, text, filename);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.createDirAndWrite(path, dirName, text, filename);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NativeService.prototype.createDirAndWrite = function (path, dirName, text, filename) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.file.createDir(path, dirName, false).then(function (createDir) {
                    // alert(JSON.stringify(createDir, null ,2))
                    _this.writeFileBefore(text, path + dirName, filename);
                }).catch(function (e) {
                    // alert(JSON.stringify(e, null ,2))
                });
                return [2 /*return*/];
            });
        });
    };
    NativeService.prototype.writeFileBefore = function (text, path, filename) {
        return __awaiter(this, void 0, void 0, function () {
            var checkFile, e_2, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path += "/";
                        checkFile = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 8]);
                        return [4 /*yield*/, this.file.checkFile(path, filename)];
                    case 2:
                        checkFile = _a.sent();
                        if (checkFile) {
                            this.writeFileText(text, path, filename);
                        }
                        return [3 /*break*/, 8];
                    case 3:
                        e_2 = _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.file.createFile(path, filename, false)];
                    case 5:
                        _a.sent();
                        this.writeFileText(text, path, filename);
                        return [3 /*break*/, 7];
                    case 6:
                        e_3 = _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    NativeService.prototype.writeFileText = function (Text, path, fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var writeFile, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.file.writeFile(path, fileName, Text, {
                                append: true
                            })];
                    case 1:
                        writeFile = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 获取位置
     */
    NativeService.prototype.getLocation = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            if (_this.isMobile()) {
                // 检查app是否开始位置服务和定位权限.没有则会请求权限
                __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].zip(_this.assertLocationService(), _this.assertLocationAuthorization()).subscribe(function () {
                    LocationPlugin.getLocation(function (data) {
                        // android返回data形如:{"locationType":4,"latitude":23.119225,"longitude":113.350784,"hasAccuracy":true,"accuracy":29,"address":"广东省广州市天河区潭乐街靠近广电科技大厦","country":"中国","province":"广东省","city":"广州市","district":"天河区","street":"平云路","cityCode":"020","adCode":"440106","aoiName":"广电平云广场","speed":0,"bearing":0,"time":1515976535559}
                        // 其中locationType为定位来源.定位类型对照表: http://lbs.amap.com/api/android-location-sdk/guide/utilities/location-type/
                        // iOS只会返回data形如:{longitude: 113.35081420800906, latitude: 23.119172707345594} 
                        observer.next({ 'lng': data.longitude, 'lat': data.latitude });
                    }, function (msg) {
                        if (msg.indexOf('缺少定位权限') != -1 || (_this.isIos() && msg.indexOf('定位失败') != -1)) {
                            _this.alertCtrl.create({
                                title: '缺少定位权限',
                                subTitle: '请在手机设置或app权限管理中开启',
                                buttons: [{ text: '取消' },
                                    {
                                        text: '去开启',
                                        handler: function () {
                                            _this.diagnostic.switchToSettings();
                                        }
                                    }
                                ]
                            }).present();
                        }
                        else if (msg.indexOf('WIFI信息不足') != -1) {
                            alert('定位失败,请确保连上WIFI或者关掉WIFI只开流量数据');
                        }
                        else if (msg.indexOf('网络连接异常') != -1) {
                            alert('网络连接异常,请检查您的网络是否畅通');
                        }
                        else {
                            alert('获取位置错误,错误消息:' + msg);
                            _this.logger.log(msg, '获取位置失败');
                        }
                        observer.error('获取位置失败');
                    });
                }, function (err) {
                    observer.error(err);
                });
            }
            else {
                console.log('非手机环境,即测试环境返回固定坐标');
                observer.next({ 'lng': 113.350912, 'lat': 23.119495 });
            }
        });
    };
    /**
   * 拨打电话
   * @param number
   */
    NativeService.prototype.callNumber = function (number) {
        var _this = this;
        this.cn.callNumber(number, true)
            .then(function () { return console.log('成功拨打电话:' + number); })
            .catch(function (err) { return _this.logger.log(JSON.stringify(err), '拨打电话失败'); });
    };
    //获取SIM卡信息
    NativeService.prototype.getSimInfo = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            _this.sim.getSimInfo()
                .then(function (info) {
                observer.next(info);
            })
                .catch(function (err) {
                observer.next(err);
                _this.logger.log(JSON.stringify(err), '获取SIM卡信息失败');
            });
        });
    };
    //是否允许读取SIM卡权限(仅android系统下)
    NativeService.prototype.hasReadPermission = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            _this.sim.hasReadPermission().then(function (info) { return console.log(info); });
        });
    };
    //申请SIM卡读取权限(仅android系统下)
    NativeService.prototype.requestReadPermission = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            _this.sim.requestReadPermission().then(function (info) { return console.log(info); });
        });
    };
    NativeService.prototype.saveBase64toFile = function (base64str) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"](function (observe) {
            var reg = /data:image\/([^;]+).*/i;
            if (!reg.test(base64str)) {
                observe.error({
                    success: false,
                    result: base64str,
                    msg: 'not image base64'
                });
                return;
            }
            var mineType = (base64str).replace(reg, '$1');
            var fileName = +new Date() + '.' + mineType;
            var base64Data = base64str.replace(/^data:image\/\w+;base64,/, "");
            // let cacheDirctory = this.file.externalDataDirectory + '/';
            var cacheDirctory = _this.file.dataDirectory + 'imageCache/';
            var base64DataBuffer = __WEBPACK_IMPORTED_MODULE_0__utility__["a" /* Utility */].base64ToArrayBuffer(base64Data);
            _this.file.writeFile(cacheDirctory, fileName, base64DataBuffer).then(function (res) {
                observe.next({
                    success: true,
                    result: res,
                    msg: 'ok'
                });
            }).catch(function (err) {
                observe.error({
                    success: false,
                    result: err,
                    msg: 'saveBase64toFile failed'
                });
            });
        });
    };
    //下载文件
    //
    NativeService.prototype.download = function (url, targetDirectory, fileName) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            var fileSize = 0;
            var FT = _this.transfer.create();
            if (!url)
                observer.next(url);
            FT.onProgress(function (progressEvent) {
                if (progressEvent.lengthComputable) {
                    // 下载过程会一直打印，完成的时候会显示 1
                    fileSize = progressEvent.total;
                    if (progressEvent.loaded / progressEvent.total == 1) {
                    }
                }
                else {
                }
            });
            FT.download(encodeURI(url), targetDirectory + fileName).then(function (entry) {
                observer.next({ localUrl: entry.toURL(), fileSize: fileSize, fileName: fileName });
                // })
            }, function (err) {
                observer.next(err);
                _this.logger.log(JSON.stringify(err), '下载失败');
            });
        });
    };
    NativeService.prototype.upload = function () {
        // ionic 官方文档例子漏写了这句话
        // http://ionicframework.com/docs/native/file-transfer/
        //
        var fileTransfer = this.transfer.create();
        // 更多的 Options 可以点进去自己看看，不懂的就谷歌翻译他的注释
        var options = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {},
            params: {} // 如果要传参数，写这里 
        };
        fileTransfer.upload('<file path>', '<api endpoint>', options)
            .then(function (data) {
            // success
        }, function (err) {
            // error
        });
    };
    //获取當前位置 
    NativeService.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            if (_this.isMobile()) {
                _this.geolocation.getCurrentPosition(options).then(function (resp) {
                    if (resp && resp.coords) {
                        var location_1 = {
                            longitude: resp.coords.longitude,
                            latitude: resp.coords.latitude,
                            altitude: resp.coords.altitude ? resp.coords.altitude : 0
                        };
                        // alert("location:" +JSON.stringify(location));
                        console.log("location:", JSON.stringify(location_1));
                        observer.next(location_1);
                    }
                }).catch(function (error) {
                    _this.logger.log("error:" + JSON.stringify(error), "geolocation.getCurrentPosition");
                    observer.error(error);
                });
            }
            else {
                observer.next({ 'longitude': 113.350912, 'latitude': 23.119495, 'altitude': 2222 });
            }
        });
    };
    NativeService.prototype.isInstallWeChat = function () {
        var _this = this;
        Wechat.isInstalled(function (installed) {
            if (!installed) {
                _this.alert(_this.translateService.instant('BROWSER_NOT_INSTALL_WEXIN'));
                return false;
            }
        }, function (reason) {
            _this.alert(reason);
        });
    };
    NativeService.prototype.setUserAgent = function (userAgent) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"](function (observer) {
            _this.userAgent.set(userAgent)
                .then(function (res) { return observer.next(res); })
                .catch(function (error) { return observer.error(error); });
        });
    };
    NativeService.prototype.getUserAgent = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"](function (observer) {
            _this.userAgent.get()
                .then(function (res) {
                observer.next(res);
            })
                .catch(function (error) {
                observer.error(error);
            });
        });
    };
    NativeService.prototype.resetUserAgent = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_8_rxjs__["Observable"].create(function (observer) {
            _this.userAgent.reset()
                .then(function (res) { return observer.next(res); })
                .catch(function (error) { return observer.error(error); });
        });
    };
    NativeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_18__logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_minimize__["a" /* AppMinimize */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_sim__["a" /* Sim */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_user_agent__["a" /* UserAgent */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__["a" /* FileChooser */]])
    ], NativeService);
    return NativeService;
}());

//# sourceMappingURL=native-service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloadProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__club_provider__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_provider__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_provider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__widget_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PreloadProvider = (function () {
    function PreloadProvider(widgetProvider, session, events, userProvider, modal, logger, translate, messageProvider, handleProvider, clubProvider) {
        var _this = this;
        this.widgetProvider = widgetProvider;
        this.session = session;
        this.events = events;
        this.userProvider = userProvider;
        this.modal = modal;
        this.logger = logger;
        this.translate = translate;
        this.messageProvider = messageProvider;
        this.handleProvider = handleProvider;
        this.clubProvider = clubProvider;
        this.events.subscribe('user:permission-changed', function () {
            _this.widgetProvider.getAllWidget({ "lang": _this.session.language }, true).subscribe(function (data) {
                if (data.errcode == 0) {
                    _this.session.widget = data.result;
                }
            });
        });
        this.events.subscribe('user:info-changed', function () {
            _this.widgetProvider.getAllWidget({ "lang": _this.session.language }, true).subscribe(function (data) {
                if (data.errcode == 0) {
                    _this.session.widget = data.result;
                }
            });
        });
    }
    PreloadProvider.prototype.IsPunchMember = function () {
        var _this = this;
        //预加载是否需要签到
        this.userProvider.IsPunchMember().subscribe(function (res) {
            if (res.errcode === 0) {
                _this.session.isPunchMember = res.result.isPunchMember;
            }
        });
    };
    PreloadProvider.prototype.getHomeData = function (isHideLoading) {
        var _this = this;
        //预加载首页数据
        this.widgetProvider.getHomeData(isHideLoading).subscribe(function (data) {
            if (data.errcode == 0) {
                _this.session.homedata = data.result;
                // this.handleProvider.generate('getHomeData successfully',-1,data.result)
                setTimeout(function () {
                    _this.events.publish('user:logined', {
                        "userId": _this.session.userId,
                        "userToken": _this.session.token,
                        "timestamp": new Date().getTime()
                    });
                }, 1);
            }
        }, function (err) {
            _this.logger.log(JSON.stringify(err), "getHomeData");
        });
    };
    PreloadProvider.prototype.getCommunityChannel = function () {
        var _this = this;
        //预加载首页数据
        this.clubProvider.getCommunityChannel().subscribe(function (data) {
            _this.session.communityColumn = data.result;
        }, function (err) {
            _this.logger.log(JSON.stringify(err), "getCommunityChannel");
        });
    };
    PreloadProvider.prototype.getAllWidget = function (isHideLoading) {
        var _this = this;
        //预加载首页数据
        this.widgetProvider.getAllWidget({ "lang": this.session.language }, isHideLoading).subscribe(function (data) {
            if (data.errcode == 0) {
                _this.session.widget = data.result;
                _this.events.publish('previewJobs');
            }
        });
    };
    PreloadProvider.prototype.getUserInfo = function (isRegister) {
        var _this = this;
        //预加载个人信息
        this.userProvider.getUserInfo(true, isRegister).subscribe(function (data) {
            if (data.result.isActive) {
                setTimeout(function () {
                    _this.events.publish('user:logined', {
                        "userId": _this.session.userId,
                        "userToken": _this.session.token,
                        "timestamp": new Date().getTime()
                    });
                }, 1000);
            }
            else {
                _this.session.token = '';
                _this.session.userId = '';
                _this.events.publish('user-isActive:false');
            }
        });
    };
    /**
     * 打开Share Modal
     * @param share
     */
    PreloadProvider.prototype.openShareModal = function (share) {
        var md = this.modal.create('SharePage', {
            //數組為空時默認顯示全部類型:1-微信 2-朋友圈 3-微博 4-刷新 5-複製鏈接 6-收藏
            navigationDockTargetMapIds: share.navigationDockTargetMapIds,
            shareMessage: share.shareMessage,
            isShareImage: share.isShareImage,
            callback: share.callback,
            qrcode: share.qrcode
        }, {
            showBackdrop: true,
            enableBackdropDismiss: true,
            enterAnimation: 'modal-from-bottom-enter',
            leaveAnimation: 'modal-from-bottom-leave'
        });
        md.present();
        md.onDidDismiss(function (data) {
            if (share && share.callback && data && data.result) {
                share.callback(data);
            }
        });
    };
    PreloadProvider.prototype.openContactChooserPage = function (contact) {
        var md = this.modal.create('ContactChooserPage', contact);
        md.present();
        md.onDidDismiss(function (data) {
            // if(contact.type == 1){
            //   this.messageProvider.sendMessage()
            // }
            if (contact && contact.callback) {
                contact.callback(data);
            }
        });
    };
    PreloadProvider.prototype.previewImage = function (imageArray, index, callback) {
        var md = this.modal.create('ImgViewerPage', {
            imageArray: imageArray,
            index: index
        }, {
            enterAnimation: 'modal-scale-enter',
            leaveAnimation: 'modal-scale-leave',
            cssClass: 'img-viewer-backdrop'
        });
        md.present().then(function (res) {
        }).catch(function (error) {
        });
        md.onDidDismiss(function (data) {
            callback && callback(data);
        });
    };
    PreloadProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__widget_provider__["a" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_7__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__user_provider__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__services_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__message_provider__["a" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_1__handle_handle__["a" /* HandleProvider */],
            __WEBPACK_IMPORTED_MODULE_0__club_provider__["a" /* ClubProvider */]])
    ], PreloadProvider);
    return PreloadProvider;
}());

//# sourceMappingURL=preload-provider.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_provider__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the ClubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClubProvider = (function () {
    function ClubProvider(http, session, httpService, serverProvider, widgetProvider, events) {
        this.http = http;
        this.session = session;
        this.httpService = httpService;
        this.serverProvider = serverProvider;
        this.widgetProvider = widgetProvider;
        this.events = events;
        this.isDebug = false;
        this.baseURL = '';
        this.baseURL = this.isDebug ? 'http://localhost:6249/' : this.serverProvider.WebServer();
        window.ClubProvider = this;
    }
    /**
     * 请求参数加上语言
     */
    ClubProvider.prototype.baseParam = function (params) {
        var base = {
            lang: this.session.language
        };
        if (params) {
            Object.assign(base, params);
        }
        return base;
    };
    /**
     * 获取我的社团、交流园地
     * @param site 厂区
     * @param channelCode 频道
     */
    ClubProvider.prototype.getMyClubs = function (site, channelCode) {
        var params = {
            "userId": this.session.userId,
            "channelCode": channelCode,
            "site": site
        };
        var seq = this.httpService.post('Community/UserBoards', true, this.baseParam(params), true).share();
        return seq;
    };
    /**
     *
     * @param searchKey 搜索key
     */
    ClubProvider.prototype.BoardSearch = function (searchKey) {
        var params = {
            "searchKey": searchKey
        };
        var seq = this.httpService.post('Community/BoardSearch', true, this.baseParam(params), true).share();
        return seq;
    };
    /**
     * 获取厂区
     */
    ClubProvider.prototype.BoardSites = function () {
        var seq = this.httpService.post('Community/BoardSites', true, this.baseParam(), true).share();
        return seq;
    };
    /**
     * 获取推荐的社团
     * @param site 厂区
     */
    ClubProvider.prototype.RecommendBoards = function (site) {
        var params = {
            "site": site,
            "channelCode": "Club"
        };
        Object.assign(params, this.baseParam(params));
        var seq = this.httpService.post('Community/RecommendBoards', true, this.baseParam(params)).share();
        return seq;
    };
    /**
     * 获取最近访问
     * @param site 厂区
     * @param take 数量
     */
    ClubProvider.prototype.MyAccessBoards = function (site, take) {
        var params = {
            "userId": this.session.userId,
            "lang": this.session.language,
            "channelCode": "Club",
            "site": site,
            "take": take || 5
        };
        var seq = this.httpService.post('Community/MyAccessBoards', true, this.baseParam(params)).share();
        return seq;
    };
    /**
     * 关注社团
     * @param boardId
     */
    ClubProvider.prototype.FollowBoard = function (boardId) {
        var params = {
            "boardId": boardId
        };
        var seq = this.httpService.post('Community/FollowBoard', true, params).share();
        return seq;
    };
    /**
     * 搜索帖子
     * @param SearchKey
     * @param Skip
     * @param Take
     */
    ClubProvider.prototype.SearchAllPosts = function (SearchKey, Skip, Take) {
        var params = {
            "SearchKey": SearchKey,
            "Skip": Skip,
            "Take": Take
        };
        var seq = this.httpService.post('Community/SearchAllPosts', true, this.baseParam(params), true).share();
        return seq;
    };
    /**
     * 获取频道
     */
    ClubProvider.prototype.getCommunityChannel = function () {
        var seq = this.httpService.post('Community/CommunityChannel', true, this.baseParam(), true).share();
        return seq;
    };
    /**
   * 获取社团首页内容
   */
    ClubProvider.prototype.getCommunityContent = function (site, skip, take) {
        var _this = this;
        var seq = this.httpService.post('Community/GetHomePosts', true, { site: site, skip: skip, take: take }, false).pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["map"])(function (x) {
            for (var _i = 0, _a = x.result; _i < _a.length; _i++) {
                var item = _a[_i];
                item.creationTime = __WEBPACK_IMPORTED_MODULE_4__services_utility__["a" /* Utility */].formatSignTime(_this.session.language, item.creationTime);
                var imgs = [];
                var thumbPictures = [];
                var result = [];
                if (item.pictures) {
                    imgs = item.pictures ? item.pictures.split(';') : [];
                }
                if (item.thumbPictures) {
                    thumbPictures = item.thumbPictures.split(';');
                }
                for (var i = 0; i < imgs.length; i++) {
                    result.push({
                        sourceUrl: imgs[i],
                        id: i,
                        pictureUrl: thumbPictures[i]
                    });
                }
                item.thumbImgs = item.thumbPictures ? item.thumbPictures.split(';').slice(0, 3) : [];
                item.imgs = result;
            }
            x.isMore = x.result && x.result.length === take;
            return x;
        }));
        return seq;
    };
    /**
     * 我的关注
     */
    ClubProvider.prototype.MyFollow = function () {
        return this.baseURL + 'Community/Mine/MyFollow';
    };
    /**
     * 我的发表
     */
    ClubProvider.prototype.MyPublish = function () {
        return this.baseURL + 'Community/Mine/MyPublish';
    };
    /**
     * 我的评论
     */
    ClubProvider.prototype.MyComment = function () {
        return this.baseURL + 'Community/Board/MyComment';
    };
    /**
     * 我的活动
     */
    ClubProvider.prototype.MyActivity = function () {
        return this.baseURL + 'Community/Board/MyActivity';
    };
    /**
     * 我的收藏
     */
    ClubProvider.prototype.MyFavorite = function () {
        return this.baseURL + 'Community/Mine/MyFavorite';
    };
    /**
     * 我的粉丝
     */
    ClubProvider.prototype.MyFans = function () {
        return this.baseURL + 'Community/Mine/MyFans';
    };
    ClubProvider.prototype.Activities = function (site) {
        return this.baseURL + 'Community/Board/Activities?site=' + site;
    };
    /**
     * 社团详情
     * @param boardId
     * @param channelCode
     * @param site
     */
    ClubProvider.prototype.BoardDetail = function (boardId, channelCode, site) {
        // let context = "";
        // if(channelCode == "Club"){
        //   context = "Club"
        // }else{
        //   context = "Board"
        // }
        return this.baseURL + "Community/" + channelCode + "/Index?boardId=" + boardId + "&channelCode=" + channelCode + "&site=" + site;
    };
    ClubProvider.prototype.UserPage = function (userId) {
        return this.baseURL + "Community/Member/MemberHomePage?memberId=" + userId;
    };
    /**
     * 前往全部社团
     * @param site 厂区
     */
    ClubProvider.prototype.AllBoards = function (site) {
        return this.baseURL + 'Community/Club/AllBoards?site=' + site;
    };
    ClubProvider.prototype.Topics = function (site) {
        return this.baseURL + 'Community/Board/Topics?site=' + site;
    };
    ClubProvider.prototype.PostDetail = function (postId) {
        return this.baseURL + 'Community/Post/PostDetail?postId=' + postId;
    };
    ClubProvider.prototype.TopicDetail = function (topicId) {
        return this.baseURL + 'Community/Board/TopicDetail?topicId=' + topicId;
    };
    ClubProvider.prototype.ActivityDetail = function (activityId) {
        return this.baseURL + 'Community/Board/ActivityDetail?activityId=' + activityId;
    };
    /**
     * 打开浏览器（社群功能）
     * @param url
     * @param navCtrl
     */
    ClubProvider.prototype.openWebpage = function (url, navCtrl) {
        var page = {
            url: url,
            options: {
                useNativeBrowser: 'iframe',
                canShare: false
            }
        };
        this.widgetProvider.openWebpage(page, navCtrl);
    };
    ClubProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__server_provider__["a" /* ServerProvider */],
            __WEBPACK_IMPORTED_MODULE_1__widget_provider__["a" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Events */]])
    ], ClubProvider);
    return ClubProvider;
}());

//# sourceMappingURL=club-provider.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ContactProvider = (function () {
    function ContactProvider(session, http, events) {
        this.session = session;
        this.http = http;
        this.events = events;
    }
    ContactProvider.prototype.getContacts = function () {
        return this.list;
    };
    ContactProvider.prototype.addContact = function (item) {
    };
    /**
     * 查找用户
     * @param keyword 账号（手机号码）
     */
    ContactProvider.prototype.SearchMember = function (keyword) {
        var seq = this.http.post('/Friends/SearchMember', true, {
            lang: this.session.language,
            keyword: keyword
        }, true).share();
        return seq;
    };
    /**
     * 发送添加好友邀请
     * @param FriendId 好友id
     * @param Description 描述
     */
    ContactProvider.prototype.SendAddRequest = function (FriendId, Description) {
        var seq = this.http.post('/Friends/SendAddRequest', true, {
            FriendId: FriendId,
            Description: Description
        }).share();
        return seq;
    };
    /**
     * 驗證好友請求
     * @param FriendId  好友id
     * @param Description 描述
     */
    ContactProvider.prototype.AcceptAddRequest = function (RequestId, IsAccept) {
        var seq = this.http.post('/Friends/AcceptAddRequest', true, {
            RequestId: RequestId,
            IsAccept: IsAccept
        }).share();
        return seq;
    };
    /**
     * 获取朋友列表
     */
    ContactProvider.prototype.MyFriends = function () {
        var _this = this;
        var seq = this.http.post('/Friends/MyFriends', true, {
            lang: this.session.language
        }).share();
        seq.subscribe(function (res) {
            _this.friends = res.result;
            _this.events.publish('contact:refresh-myFriends');
        });
        return seq;
    };
    /**
     * 获取朋友列表
     */
    ContactProvider.prototype.FriendInfo = function (FriendID) {
        var _this = this;
        var seq = this.http.post('/Friends/FriendInfo', true, {
            lang: this.session.language,
            FriendID: FriendID
        }).share();
        seq.subscribe(function (res) {
            _this.friendInfo = res.result;
            _this.events.publish('contact: refresh-friendinfo');
        });
        return seq;
    };
    /**
     * 最近的好友验证
     */
    ContactProvider.prototype.LatestFriendRequest = function () {
        var _this = this;
        var seq = this.http.post('/Friends/LatestFriendRequest', true, {
            lang: this.session.language
        }, true).share();
        seq.subscribe(function (res) {
            _this.newFriends = res.result;
        });
        return seq;
    };
    /**
     * 移除好友
     * @param FriendId 好友id
     */
    ContactProvider.prototype.RemoveFriend = function (FriendId) {
        var seq = this.http.post('/Friends/RemoveFriend', true, {
            FriendId: FriendId
        }).share();
        seq.subscribe(function (res) {
        });
        return seq;
    };
    /**
     * 好友设置
     * @param FriendId 好友id
     * @param settings 设置
     */
    ContactProvider.prototype.FriendSetting = function (FriendId, settings) {
        var _this = this;
        var seq = this.http.post('/Friends/FriendSetting', true, {
            FriendId: FriendId,
            settings: settings
        }).share();
        seq.subscribe(function (res) {
            _this.FriendInfo(FriendId).subscribe();
        });
        return seq;
    };
    /**
     * 黑名单列表
     */
    ContactProvider.prototype.BlackList = function () {
        var seq = this.http.post('/Friends/BlackList', true).share();
        return seq;
    };
    /**
     * 加入黑名单
     * @param MemberId 用户id
     */
    ContactProvider.prototype.AddToBlackList = function (MemberId) {
        var seq = this.http.post('/Friends/AddToBlackList', true, { MemberId: MemberId }).share();
        seq.subscribe(function (res) {
        });
        return seq;
    };
    /**
     * 移出黑名单
     * @param MemberId 用户id
     */
    ContactProvider.prototype.RemoveFromBlackList = function (MemberId) {
        var seq = this.http.post('/Friends/RemoveFromBlackList', true, { MemberId: MemberId }).share();
        seq.subscribe(function (res) {
        });
        return seq;
    };
    ContactProvider.prototype.generateMemberURL = function (memberId) {
        return __WEBPACK_IMPORTED_MODULE_0__services_constants__["d" /* APPNAME_PAGE_PREFIX */].toLowerCase() + "AppPageId=ContactDetailPage?friendId=" + memberId;
    };
    /**
     * 发送消息
     * Type: 消息類型，Text為文本, Image為圖片(jpeg/png/jpg), Forward為轉發類消息, Card為個人名片, Location為個人位置
     *
     * FromType:消息來源, 有四類: 1.Chat 一般聊天,  2.GroupChat 群聊  此時需要傳GroupId,  本接口只有以上這兩種.
        3.Widget 應用,   4.AdminConsole 后臺
     * @param type
     * @param title
     * @param content
     * @param image
     * @param redirectUrl
     * @param MemberIds
     */
    ContactProvider.prototype.SendMsg = function (MemberIds, messageId, type, title, content, image, redirectUrl) {
        var seq = this.http.post('/Friends/SendMsg', true, {
            "MessageId": messageId,
            "type": type,
            "Lang": this.session.language,
            "fromType": "Chat",
            "title": title,
            "content": content,
            "image": image,
            "redirectUrl": redirectUrl,
            "ReceiverId": MemberIds,
            "GroupId": 0
        }, true).share();
        seq.subscribe(function (res) { }, function (err) { });
        return seq;
    };
    ContactProvider.prototype.FriendTagList = function () {
        var seq = this.http.post('/Friends/FriendTagList', true, null).share();
        seq.subscribe(function (res) {
        });
        return seq;
    };
    ContactProvider.prototype.CreateFriendTag = function (TagName, MemberIdList) {
        var seq = this.http.post('/Friends/CreateFriendTag', true, {
            "TagName": TagName,
            "MemberIdList": MemberIdList
        }).share();
        seq.subscribe(function (res) {
        });
        return seq;
    };
    ContactProvider.prototype.UpdateFriendTag = function (FriendTagId, TagName, AddList, RemoveList) {
        var seq = this.http.post('/Friends/UpdateFriendTag', true, {
            "FriendTagId": FriendTagId,
            "TagName": TagName,
            "AddList": AddList,
            "RemoveList": RemoveList
        }).share();
        seq.subscribe(function (res) {
        });
        return seq;
    };
    ContactProvider.prototype.FriendTagMembers = function (FriendTagId) {
        var seq = this.http.post('/Friends/FriendTagMembers', true, {
            "FriendTagId": FriendTagId
        }).share();
        seq.subscribe(function (res) {
        });
        return seq;
    };
    ContactProvider.prototype.DeleteFriendTag = function (FriendTagId) {
        var seq = this.http.post('/Friends/DeleteFriendTag', true, {
            "FriendTagId": FriendTagId
        }).share();
        seq.subscribe(function (res) {
        });
        return seq;
    };
    ContactProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], ContactProvider);
    return ContactProvider;
}());

//# sourceMappingURL=contact-provider.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
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


/*
  Generated class for the BlogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BlogProvider = (function () {
    function BlogProvider(http) {
        this.http = http;
        this.initBlogs();
    }
    BlogProvider.prototype.initBlogs = function () {
        this.allBlogs = [{
                id: 1,
                author: {
                    userId: 'u01',
                    userName: '',
                    nickName: '用户1',
                    hasPassword: true,
                    isEmployee: true,
                    pictureUrl: 'assets/img/avatar.png',
                    fansCount: 6
                },
                site: 'LH',
                content: '员宝，有温度的共享平台!员宝，有温度的共享平台!员宝，有温度的共享平台!员宝，有温度的共享平台!员宝，有温度的共享平台!员宝，有温度的共享平台!员宝，有温度的共享平台!',
                imgs: [{ pictureUrl: 'assets/img/puppy-1.jpg' }, { pictureUrl: 'assets/img/puppy-2.jpg' }, { pictureUrl: 'assets/img/puppy-3.jpg' }],
                redirectUrl: 'string',
                publishTime: '2018-12-04',
                readCount: 5,
                zanCount: 2,
                commentCount: 2,
                shareCount: 2,
                zanGroup: [{
                        author: {
                            userId: 'u02',
                            userName: '',
                            nickName: '用户2',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }, {
                        author: {
                            userId: 'u03',
                            userName: '',
                            nickName: '用户3',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-18'
                    }],
                commentGroup: [{
                        author: {
                            userId: 'u02',
                            userName: '',
                            nickName: '用户2',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        text: '员宝加油鸭！',
                        creTime: '2018-12-20'
                    }, {
                        author: {
                            userId: 'u03',
                            userName: '',
                            nickName: '用户3',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        text: '今天也要加油鸭，冲鸭！！！',
                        creTime: '2018-12-20'
                    }],
                shareGroup: [{
                        author: {
                            userId: 'u02',
                            userName: '',
                            nickName: '用户2',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }, {
                        author: {
                            userId: 'u04',
                            userName: '',
                            nickName: '用户4',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }]
            }, {
                id: 2,
                author: {
                    userId: 'u02',
                    userName: '',
                    nickName: '用户2',
                    hasPassword: true,
                    isEmployee: true,
                    pictureUrl: 'assets/img/avatar.png',
                    fansCount: 6
                },
                site: 'LF',
                content: '员宝，有温度的共享平台',
                imgs: [{ pictureUrl: 'assets/img/puppy-1.jpg' }],
                redirectUrl: 'string',
                publishTime: '2018-12-02',
                readCount: 5,
                zanCount: 2,
                commentCount: 2,
                shareCount: 2,
                zanGroup: [{
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }, {
                        author: {
                            userId: 'u03',
                            userName: '',
                            nickName: '用户3',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }],
                commentGroup: [{
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        text: '员宝加油鸭！',
                        creTime: '2018-12-20'
                    }, {
                        author: {
                            userId: 'u04',
                            userName: '',
                            nickName: '用户4',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        text: '今天也要加油鸭，冲鸭！！！',
                        creTime: '2018-12-20'
                    }],
                shareGroup: [{
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }, {
                        author: {
                            userId: 'u03',
                            userName: '',
                            nickName: '用户3',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }]
            }, {
                id: 3,
                author: {
                    userId: 'u01',
                    userName: '',
                    nickName: '用户1',
                    hasPassword: true,
                    isEmployee: true,
                    pictureUrl: 'assets/img/avatar.png',
                    fansCount: 6
                },
                site: 'LH',
                content: '员宝，有温度的共享平台',
                imgs: [{ pictureUrl: 'assets/img/puppy-1.jpg' }, { pictureUrl: 'assets/img/puppy-1.jpg' }],
                redirectUrl: 'string',
                publishTime: '2018-12-02',
                readCount: 6,
                zanCount: 2,
                commentCount: 2,
                shareCount: 2,
                zanGroup: [{
                        author: {
                            userId: 'u02',
                            userName: '',
                            nickName: '用户2',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }, {
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }],
                commentGroup: [{
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        text: '员宝加油鸭！',
                        creTime: '2018-12-20'
                    }, {
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        text: '今天也要加油鸭，冲鸭！！！',
                        creTime: '2018-12-20'
                    }],
                shareGroup: [{
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }, {
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }]
            }, {
                id: 4,
                author: {
                    userId: 'u02',
                    userName: '',
                    nickName: '用户2',
                    hasPassword: true,
                    isEmployee: true,
                    pictureUrl: 'assets/img/avatar.png',
                    fansCount: 6
                },
                site: 'LH',
                content: '员宝，有温度的共享平台',
                imgs: [{ pictureUrl: 'assets/img/puppy-1.jpg' }, { pictureUrl: 'assets/img/puppy-4.jpg' }, { pictureUrl: 'assets/img/puppy-3.jpg' }, { pictureUrl: 'assets/img/puppy-4.jpg' }],
                redirectUrl: 'string',
                publishTime: '2018-12-03',
                readCount: 6,
                zanCount: 2,
                commentCount: 2,
                shareCount: 2,
                zanGroup: [{
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }, {
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }],
                commentGroup: [{
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        text: '员宝加油鸭！',
                        creTime: '2018-12-20'
                    }, {
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        text: '今天也要加油鸭，冲鸭！！！',
                        creTime: '2018-12-20'
                    }],
                shareGroup: [{
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }, {
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        creTime: '2018-12-20'
                    }, {
                        id: 5,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        site: 'LH',
                        content: '员宝，有温度的共享平台!员宝，有温度的共享平台!员宝，有温度的共享平台!员宝，有温度的共享平台!员宝，有温度的共享平台!员宝，有温度的共享平台!员宝，有温度的共享平台!',
                        imgs: [],
                        redirectUrl: 'string',
                        publishTime: '2018-12-04',
                        readCount: 5,
                        zanCount: 2,
                        commentCount: 2,
                        shareCount: 2,
                        zanGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                creTime: '2018-12-20'
                            }, {
                                author: {
                                    userId: 'u03',
                                    userName: '',
                                    nickName: '用户3',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                creTime: '2018-12-18'
                            }],
                        commentGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                text: '员宝加油鸭！',
                                creTime: '2018-12-20'
                            }, {
                                author: {
                                    userId: 'u03',
                                    userName: '',
                                    nickName: '用户3',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                text: '今天也要加油鸭，冲鸭！！！',
                                creTime: '2018-12-20'
                            }],
                        shareGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                creTime: '2018-12-20'
                            }, {
                                author: {
                                    userId: 'u04',
                                    userName: '',
                                    nickName: '用户4',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                creTime: '2018-12-20'
                            }]
                    }]
            }];
        return this.allBlogs;
    };
    BlogProvider.prototype.initTopics = function () {
        return this.allTopic = [{
                pictureUrl: 'assets/img/totoro.png',
                title: '#过年回家抢票不易#',
                description: '最近大家的朋友圈都被各种抢票加速包刷屏，你抢到回家的票了吗？',
                discussCount: 1,
                readCount: 5,
                blogs: [{
                        id: 1,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        site: 'LH',
                        content: '抢不到回家的票，瑟瑟发抖',
                        imgs: [],
                        redirectUrl: 'string',
                        publishTime: '2018-12-04',
                        readCount: 5,
                        zanCount: 2,
                        commentCount: 2,
                        shareCount: 2,
                        zanGroup: [],
                        commentGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                text: '瑟瑟发抖',
                                creTime: '2018-12-20'
                            }, {
                                author: {
                                    userId: 'u03',
                                    userName: '',
                                    nickName: '用户3',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                text: '加油鸭，冲鸭！！！',
                                creTime: '2018-12-20'
                            }],
                        shareGroup: []
                    }]
            }, {
                pictureUrl: 'assets/img/totoro.png',
                title: '#过年回家抢票不易#',
                description: '最近大家的朋友圈都被各种抢票加速包刷屏，你抢到回家的票了吗？',
                discussCount: 1,
                readCount: 4,
                blogs: [{
                        id: 1,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        site: 'LH',
                        content: '抢不到回家的票，瑟瑟发抖',
                        imgs: [],
                        redirectUrl: 'string',
                        publishTime: '2018-12-04',
                        readCount: 5,
                        zanCount: 2,
                        commentCount: 2,
                        shareCount: 2,
                        zanGroup: [],
                        commentGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                text: '瑟瑟发抖',
                                creTime: '2018-12-20'
                            }, {
                                author: {
                                    userId: 'u03',
                                    userName: '',
                                    nickName: '用户3',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                text: '加油鸭，冲鸭！！！',
                                creTime: '2018-12-20'
                            }],
                        shareGroup: []
                    }]
            }, {
                pictureUrl: 'assets/img/totoro.png',
                title: '#过年回家抢票不易#',
                description: '最近大家的朋友圈都被各种抢票加速包刷屏，你抢到回家的票了吗？',
                discussCount: 1,
                readCount: 5,
                blogs: [{
                        id: 1,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        site: 'LH',
                        content: '抢不到回家的票，瑟瑟发抖',
                        imgs: [],
                        redirectUrl: 'string',
                        publishTime: '2018-12-04',
                        readCount: 5,
                        zanCount: 2,
                        commentCount: 2,
                        shareCount: 2,
                        zanGroup: [],
                        commentGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                text: '瑟瑟发抖',
                                creTime: '2018-12-20'
                            }, {
                                author: {
                                    userId: 'u03',
                                    userName: '',
                                    nickName: '用户3',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                text: '加油鸭，冲鸭！！！',
                                creTime: '2018-12-20'
                            }],
                        shareGroup: []
                    }]
            }, {
                pictureUrl: 'assets/img/totoro.png',
                title: '#过年回家抢票不易#',
                description: '最近大家的朋友圈都被各种抢票加速包刷屏，你抢到回家的票了吗？',
                discussCount: 1,
                readCount: 5,
                blogs: [{
                        id: 1,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        site: 'LH',
                        content: '抢不到回家的票，瑟瑟发抖',
                        imgs: [],
                        redirectUrl: 'string',
                        publishTime: '2018-12-04',
                        readCount: 5,
                        zanCount: 2,
                        commentCount: 2,
                        shareCount: 2,
                        zanGroup: [],
                        commentGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                text: '瑟瑟发抖',
                                creTime: '2018-12-20'
                            }, {
                                author: {
                                    userId: 'u03',
                                    userName: '',
                                    nickName: '用户3',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                text: '加油鸭，冲鸭！！！',
                                creTime: '2018-12-20'
                            }],
                        shareGroup: []
                    }]
            }, {
                pictureUrl: 'assets/img/totoro.png',
                title: '#过年回家抢票不易#',
                description: '最近大家的朋友圈都被各种抢票加速包刷屏，你抢到回家的票了吗？',
                discussCount: 1,
                readCount: 5,
                blogs: [{
                        id: 1,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                            fansCount: 6
                        },
                        site: 'LH',
                        content: '抢不到回家的票，瑟瑟发抖',
                        imgs: [],
                        redirectUrl: 'string',
                        publishTime: '2018-12-04',
                        readCount: 5,
                        zanCount: 2,
                        commentCount: 2,
                        shareCount: 2,
                        zanGroup: [],
                        commentGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                text: '瑟瑟发抖',
                                creTime: '2018-12-20'
                            }, {
                                author: {
                                    userId: 'u03',
                                    userName: '',
                                    nickName: '用户3',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                    fansCount: 6
                                },
                                text: '加油鸭，冲鸭！！！',
                                creTime: '2018-12-20'
                            }],
                        shareGroup: []
                    }]
            }, {
                pictureUrl: 'assets/img/totoro.png',
                title: '#过年回家抢票不易#',
                description: '最近大家的朋友圈都被各种抢票加速包刷屏，你抢到回家的票了吗？',
                discussCount: 0,
                readCount: 0
            }, {
                pictureUrl: 'assets/img/totoro.png',
                title: '#过年回家抢票不易#',
                description: '最近大家的朋友圈都被各种抢票加速包刷屏，你抢到回家的票了吗？',
                discussCount: 0,
                readCount: 0
            }, {
                pictureUrl: 'assets/img/totoro.png',
                title: '#过年回家抢票不易#',
                description: '最近大家的朋友圈都被各种抢票加速包刷屏，你抢到回家的票了吗？',
                discussCount: 0,
                readCount: 0
            }, {
                pictureUrl: 'assets/img/totoro.png',
                title: '#过年回家抢票不易#',
                description: '最近大家的朋友圈都被各种抢票加速包刷屏，你抢到回家的票了吗？',
                discussCount: 0,
                readCount: 0
            }, {
                pictureUrl: 'assets/img/totoro.png',
                title: '#过年回家抢票不易#',
                description: '最近大家的朋友圈都被各种抢票加速包刷屏，你抢到回家的票了吗？',
                discussCount: 0,
                readCount: 0
            }
        ];
    };
    BlogProvider.prototype.initQuestions = function () {
        return this.allQuestions = [{
                pictureUrl: 'assets/img/totoro.png',
                type: '工资问题',
                questionCount: 2,
                answerCount: 3,
                questionGroup: [{
                        id: 11,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                        },
                        site: 'LH',
                        question: '一月份工资几号发',
                        imgs: [],
                        publishTime: '2018-01-04',
                        isShowAnswers: false,
                        answerGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                },
                                content: '10号吧',
                                creTime: '2018-01-04'
                            }],
                    }, {
                        id: 12,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                        },
                        site: 'LH',
                        question: '转正后基本工资加多少',
                        imgs: [],
                        publishTime: '2018-01-04',
                        isShowAnswers: false,
                        answerGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                },
                                content: '不知道，500到1000左右吧',
                                creTime: '2018-01-04'
                            }, {
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                },
                                content: '嗯嗯',
                                creTime: '2018-01-04'
                            }],
                    }]
            }, {
                pictureUrl: 'assets/img/totoro.png',
                type: '加班问题',
                questionCount: 1,
                answerCount: 1,
                questionGroup: [{
                        id: 21,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                        },
                        site: 'LH',
                        question: '什么时候加班管控恢复到48个小时啊',
                        imgs: [],
                        publishTime: '2018-01-04',
                        isShowAnswers: false,
                        answerGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                },
                                content: '不知道，我也想',
                                creTime: '2018-01-04'
                            }],
                    }]
            }, {
                pictureUrl: 'assets/img/totoro.png',
                type: '住宿问题',
                questionCount: 1,
                answerCount: 1,
                questionGroup: [{
                        id: 31,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                        },
                        site: 'LH',
                        question: '怎么办退宿，有哪些注意事项',
                        imgs: [],
                        publishTime: '2018-01-04',
                        isShowAnswers: false,
                        answerGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                },
                                content: '找宿管，需要室友陪同',
                                creTime: '2018-01-04'
                            }],
                    }]
            }, {
                pictureUrl: 'assets/img/totoro.png',
                type: '辞职问题',
                questionCount: 1,
                answerCount: 1,
                questionGroup: [{
                        id: 41,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                        },
                        site: 'LH',
                        question: '申请辞职主管不同意怎么办',
                        imgs: [],
                        publishTime: '2018-01-04',
                        isShowAnswers: false,
                        answerGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                },
                                content: '等待',
                                creTime: '2018-01-04'
                            }],
                    }]
            }, {
                pictureUrl: 'assets/img/totoro.png',
                type: '工作问题',
                questionCount: 1,
                answerCount: 1,
                questionGroup: [{
                        id: 51,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                        },
                        site: 'LH',
                        question: '早上上班忘记打卡了怎么办',
                        imgs: [],
                        publishTime: '2018-01-04',
                        isShowAnswers: false,
                        answerGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                },
                                content: '申请手工签卡',
                                creTime: '2018-01-04'
                            }],
                    }]
            }, {
                pictureUrl: 'assets/img/totoro.png',
                type: '社保问题',
                questionCount: 1,
                answerCount: 1,
                questionGroup: [{
                        id: 61,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                        },
                        site: 'LH',
                        question: '一月份工资几号发',
                        imgs: [],
                        publishTime: '2018-01-04',
                        isShowAnswers: false,
                        answerGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                },
                                content: '10号吧',
                                creTime: '2018-01-04'
                            }],
                    }]
            }, {
                pictureUrl: 'assets/img/totoro.png',
                type: '住房公积金问题',
                questionCount: 1,
                answerCount: 1,
                questionGroup: [{
                        id: 71,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                        },
                        site: 'LH',
                        question: '一月份工资几号发',
                        imgs: [],
                        publishTime: '2018-01-04',
                        isShowAnswers: false,
                        answerGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                },
                                content: '10号吧',
                                creTime: '2018-01-04'
                            }],
                    }]
            }, {
                pictureUrl: 'assets/img/totoro.png',
                type: '其他问题',
                questionCount: 1,
                answerCount: 1,
                questionGroup: [{
                        id: 81,
                        author: {
                            userId: 'u01',
                            userName: '',
                            nickName: '用户1',
                            hasPassword: true,
                            isEmployee: true,
                            pictureUrl: 'assets/img/avatar.png',
                        },
                        site: 'LH',
                        question: '一月份工资几号发',
                        imgs: [],
                        publishTime: '2018-01-04',
                        isShowAnswers: false,
                        answerGroup: [{
                                author: {
                                    userId: 'u02',
                                    userName: '',
                                    nickName: '用户2',
                                    hasPassword: true,
                                    isEmployee: true,
                                    pictureUrl: 'assets/img/avatar.png',
                                },
                                content: '10号吧',
                                creTime: '2018-01-04'
                            }],
                    }]
            }];
    };
    BlogProvider.prototype.getPersonBlogGroup = function (_userId) {
        this.personBlogGroup = [];
        for (var _i = 0, _a = this.allBlogs; _i < _a.length; _i++) {
            var blog = _a[_i];
            if (blog.author.userId == _userId) {
                this.personBlogGroup.push(blog);
            }
        }
        return this.personBlogGroup;
    };
    BlogProvider.prototype.addCommentToBlog = function (_comment, _blog) {
        for (var _i = 0, _a = this.allBlogs; _i < _a.length; _i++) {
            var blog = _a[_i];
            if (blog.id == _blog.id) {
                if (!blog.commentGroup) {
                    blog.commentGroup = [];
                }
                blog.commentGroup.push(_comment);
                ++blog.commentCount;
            }
        }
    };
    BlogProvider.prototype.addAnswerToQuestion = function (_question, answer) {
        for (var _i = 0, _a = this.allQuestions; _i < _a.length; _i++) {
            var question = _a[_i];
            if (question.id == _question.id) {
                if (!question.answerGroup) {
                    question.answerGroup = [];
                }
                question.answerGroup.push(answer);
            }
        }
    };
    BlogProvider.prototype.addAnswerCount = function (_question) {
        for (var _i = 0, _a = this.allQuestions; _i < _a.length; _i++) {
            var question = _a[_i];
            for (var _b = 0, _c = question.questionGroup; _b < _c.length; _b++) {
                var item = _c[_b];
                if (item.id == _question.id) {
                    ++question.answerCount;
                }
            }
        }
    };
    BlogProvider.prototype.isConcernSomeone = function (user, someone) {
        if (!user.concernGroup) {
            user.concernGroup = [];
        }
        var index = user.concernGroup.findIndex(function (person) { return person.userId == someone.userId; });
        if (index > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    BlogProvider.prototype.concernSomeone = function (user, someone) {
        if (!user.concernGroup) {
            user.concernGroup = [];
        }
        user.concernGroup.push(someone);
    };
    BlogProvider.prototype.quitConcernSomeone = function (user, someone) {
        user.concernGroup.pop(someone);
    };
    BlogProvider.prototype.isZanBlog = function (user, blog) {
        if (!blog.zanGroup) {
            blog.zanGroup = [];
        }
        var index = blog.zanGroup.findIndex(function (p) { return p.userId == user.userId; });
        if (index > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    BlogProvider.prototype.zanBlog = function (user, blog) {
        if (!blog.zanGroup) {
            blog.zanGroup = [];
        }
        blog.zanGroup.push(user);
    };
    BlogProvider.prototype.quitZanBlog = function (user, blog) {
        blog.zanGroup.pop(user);
    };
    BlogProvider.prototype.isCurrentUser = function (user, item) {
        if (user.userId == item.author.userId) {
            return true;
        }
        return false;
    };
    BlogProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BlogProvider);
    return BlogProvider;
}());

//# sourceMappingURL=blog-provider.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqliteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SqliteService = (function () {
    function SqliteService(sqlite, nativeService, handle) {
        this.sqlite = sqlite;
        this.nativeService = nativeService;
        this.handle = handle;
        this.win = window; //window对象  
    }
    /**
     * 初始化db
     * @param userId 用户id
     */
    SqliteService.prototype.init = function (userId, sqls) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"](function (observe) {
            _this.createDB(userId).subscribe(function () {
                _this.initTable(sqls).then(function () {
                    observe.next({ result: true, msg: '初始化表成功' });
                }).catch(function (err) {
                    observe.error({ result: false, msg: err });
                });
            }, function (err) {
                observe.error({ result: false, msg: err });
            });
        });
    };
    /**
     * 创建数据库；
     * 以用户id为数据库名称进行创建
     * @param userId
     */
    SqliteService.prototype.createDB = function (userId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"](function (observe) {
            if (!userId) {
                console.error("userId is empty, can not create database");
                observe.error({ result: false, msg: "userId is empty, can not create database" });
                return;
            }
            userId = userId.toString();
            if (!_this.win.sqlitePlugin) {
                //window.openDatabase("数据库名字", "版本","数据库描述",数据库大小);
                _this.database = _this.win.openDatabase(userId || __WEBPACK_IMPORTED_MODULE_2__constants__["D" /* SQLITE */].WINDOW.name, __WEBPACK_IMPORTED_MODULE_2__constants__["D" /* SQLITE */].WINDOW.version, __WEBPACK_IMPORTED_MODULE_2__constants__["D" /* SQLITE */].WINDOW.description, __WEBPACK_IMPORTED_MODULE_2__constants__["D" /* SQLITE */].WINDOW.maxSize);
                observe.next({ result: true, msg: 'openDatabase successfully' });
                return;
            }
            if (_this.nativeService.isAndroid()) {
                _this.sqlite.create({
                    name: userId || __WEBPACK_IMPORTED_MODULE_2__constants__["D" /* SQLITE */].ANDROID.name,
                    location: __WEBPACK_IMPORTED_MODULE_2__constants__["D" /* SQLITE */].ANDROID.location
                }).then(function (db) {
                    _this.database = db;
                    if (!db || !db.transaction) {
                        observe.error({ result: false, msg: 'db is empty' });
                    }
                    else {
                        observe.next({ result: true, msg: 'createDatabase successfully' });
                    }
                }).catch(function (err) {
                    observe.error({ result: false, msg: err });
                });
            }
            else {
                _this.sqlite.create({
                    name: userId || __WEBPACK_IMPORTED_MODULE_2__constants__["D" /* SQLITE */].IOS.name,
                    iosDatabaseLocation: __WEBPACK_IMPORTED_MODULE_2__constants__["D" /* SQLITE */].IOS.iosDatabaseLocation,
                }).then(function (db) {
                    _this.database = db;
                    if (!db || !db.transaction) {
                        observe.error({ result: false, msg: 'db is empty' });
                    }
                    else {
                        observe.next({ result: true, msg: 'createDatabase successfully' });
                    }
                }).catch(function (err) {
                    observe.error({ result: false, msg: err });
                });
            }
        });
    };
    /**
     * 执行sql语句
     * @param {string} sql
     * @param {*} [params={}]
     * @returns {Promise<any>}
     * @memberof SQLService
     */
    SqliteService.prototype.executeSql = function (sql, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        return new Promise(function (resolve, reject) {
            try {
                _this.database.transaction(function (tx) {
                    tx.executeSql(sql, params, function (tx, res) {
                        var data = [];
                        if (res.rows.length > 0) {
                            for (var i = 0; i < res.rows.length; i++) {
                                data.push(res.rows.item([i]));
                            }
                        }
                        _this.handle.generate(" " + sql, 1, res ? {
                            params: params,
                            rows: data,
                            rowsAffected: res['rowsAffected']
                        } : res);
                        res['data'] = data;
                        resolve({ tx: tx, res: res });
                    }, function (tx, err) {
                        console.error(err);
                        _this.handle.generate(" " + sql + " error", -1, {
                            code: err.code,
                            message: err.message,
                            params: params,
                            sql: sql
                        });
                        reject({ tx: tx, err: err });
                    });
                });
            }
            catch (err) {
                reject({ err: err });
                _this.handle.generate(" " + sql + " error", -1, {
                    code: err.code,
                    message: err.message,
                    params: params,
                    sql: sql
                });
            }
        });
    };
    /**
     * 初始化表，不存在则创建
     */
    SqliteService.prototype.initTable = function (sqls) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.database.transaction(function (tx) {
                    for (var _i = 0, sqls_1 = sqls; _i < sqls_1.length; _i++) {
                        var sqlItem = sqls_1[_i];
                        tx.executeSql(sqlItem.sql, sqlItem.params, function (tx, res) {
                            resolve({ tx: tx, res: res });
                        }, function (tx, err) {
                            reject({ tx: tx, err: err });
                        });
                    }
                });
            }
            catch (err) {
                reject({ err: err });
            }
        });
    };
    /**
     * 关闭数据库（用户退出登陆时）
     */
    SqliteService.prototype.closeUserDataBase = function () {
        if (this.nativeService.isMobile()) {
            this.database.close();
        }
    };
    SqliteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_1__native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_handle_handle__["a" /* HandleProvider */]])
    ], SqliteService);
    return SqliteService;
}());

//# sourceMappingURL=sqlite-service.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_server_provider__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HttpService = (function () {
    function HttpService(http, Session, logger, events, nativeService, serverProvider, storageService, translateService, handleProvider) {
        this.http = http;
        this.Session = Session;
        this.logger = logger;
        this.events = events;
        this.nativeService = nativeService;
        this.serverProvider = serverProvider;
        this.storageService = storageService;
        this.translateService = translateService;
        this.handleProvider = handleProvider;
        this.count = 0; //记录未完成的请求数量,当请求数为0关闭loading,当不为0显示loading
    }
    HttpService_1 = HttpService;
    /**
     *
     * @param url 请求URL， 默认使用API v1版本，若为其他版本，请加上前缀v** (eg: v2/Auth/Login)
     * @param needAuth 是否需要验证
     * @param options 请求option
     * @param isHideLoading 是否隐藏loading
     */
    HttpService.prototype.request = function (url, needAuth, options, isHideLoading) {
        // if (!this.nativeService.isConnecting()) {
        //   this.nativeService.alert('请连接网络');
        //   return;
        // }
        var _this = this;
        if (needAuth === void 0) { needAuth = false; }
        if (!isHideLoading) {
            this.handleProvider.generate('request', 0, url);
        }
        url = this.formatUrlDefaultApi(url);
        if (needAuth) {
            options = this.addAuthorizationHeader(options);
        }
        __WEBPACK_IMPORTED_MODULE_9__constants__["t" /* IS_DEBUG */] && console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
        this.showLoading(isHideLoading);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].create(function (observer) {
            try {
                _this.http.request(url, options).timeout(__WEBPACK_IMPORTED_MODULE_9__constants__["B" /* REQUEST_TIMEOUT */]).subscribe(function (res) {
                    var data = _this.requestSuccessHandle(url, options, res, false, isHideLoading);
                    if (data.errcode == 0) {
                        observer.next(data);
                        observer.complete();
                    }
                    else if (data.errcode == 401 || (data.errcode >= 6000 && data.errcode < 6006)) {
                        _this.RefreshToken(url, options, observer, isHideLoading);
                    }
                    else {
                        observer.error(data);
                        observer.complete();
                    }
                }, function (err) {
                    observer.error(_this.requestFailedHandle(url, options, err, isHideLoading));
                    observer.complete();
                }, function () {
                    // observer.complete()
                });
            }
            catch (e) {
                observer.error(e);
            }
        });
    };
    /**
     * token过期后重新获取token，并继续发出请求
     */
    HttpService.prototype.RefreshToken = function (url, options, observer, isHideLoading) {
        var _this = this;
        this.showLoading(isHideLoading);
        var res = this.http.request(this.formatUrlDefaultApi('Auth/RefreshUserToken'), new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestMethod */].Post,
            body: {
                "RefreshToken": this.Session.refreshToken,
                "OldToken": this.Session.token
            },
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        })).timeout(__WEBPACK_IMPORTED_MODULE_9__constants__["B" /* REQUEST_TIMEOUT */]);
        res.subscribe(function (res) {
            var data = _this.requestSuccessHandle(url, options, res, true, isHideLoading);
            if (data.result && data.result.refreshToken)
                _this.Session.refreshToken = data.result.refreshToken;
            if (data.result && data.result.userToken)
                _this.Session.token = data.result.userToken;
            if (data.result && data.result.userId)
                _this.Session.userId = data.result.userId;
            var tokenObject = { userId: '', userToken: '', refreshToken: '' };
            tokenObject.userId = _this.Session.userId;
            tokenObject.userToken = _this.Session.token;
            tokenObject.refreshToken = _this.Session.refreshToken;
            _this.storageService.setItem('tokenObject', tokenObject);
            options = _this.refreshAuthorizationHeader(options); //重新对auth赋值
            _this.http.request(url, options).timeout(__WEBPACK_IMPORTED_MODULE_9__constants__["B" /* REQUEST_TIMEOUT */]).subscribe(function (result) {
                var data = _this.requestSuccessHandle(url, options, result, true, isHideLoading);
                data.errcode == 0 ? observer.next(data) : observer.error(data);
                observer.complete();
            }, function (err) {
                observer.error(_this.requestFailedHandle(url, options, err, isHideLoading));
                observer.complete();
            });
        });
    };
    /**
    * HTTP GET方法
    * @param url 请求URL， 默认使用API v1版本，若为其他版本，请加上前缀v** (eg: v2/Auth/Login)
    * @param needAuth 是否需要Token验证
    * @param paramMap 请求参数,eg : { account: 'test', password: '123'}
    * @param isHideLoading 是否隐藏loading,默认显示
    */
    HttpService.prototype.get = function (url, needAuth, paramMap, isHideLoading) {
        if (needAuth === void 0) { needAuth = false; }
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, needAuth, new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestMethod */].Get,
            search: HttpService_1.buildURLSearchParams(paramMap)
        }), isHideLoading);
    };
    /**
    * HTTP POST方法
    * @param url 请求URL， 默认使用API v1版本，若为其他版本，请加上前缀v** (eg: v2/Auth/Login)
    * @param needAuth 是否需要Token验证
    * @param body 请求参数,eg : { account: 'test', password: '123'}
    * @param isHideLoading 是否隐藏loading,默认显示
    */
    HttpService.prototype.post = function (url, needAuth, body, isHideLoading) {
        if (needAuth === void 0) { needAuth = false; }
        if (body === void 0) { body = {}; }
        return this.request(url, needAuth, new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestMethod */].Post,
            body: body,
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }), isHideLoading);
    };
    HttpService.prototype.postFormData = function (url, needAuth, paramMap, isHideLoading) {
        if (needAuth === void 0) { needAuth = false; }
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, needAuth, new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestMethod */].Post,
            body: HttpService_1.buildURLSearchParams(paramMap).toString(),
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        }), isHideLoading);
    };
    HttpService.prototype.put = function (url, needAuth, body, isHideLoading) {
        if (needAuth === void 0) { needAuth = false; }
        if (body === void 0) { body = {}; }
        return this.request(url, needAuth, new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestMethod */].Put,
            body: body
        }), isHideLoading);
    };
    HttpService.prototype.delete = function (url, needAuth, paramMap, isHideLoading) {
        if (needAuth === void 0) { needAuth = false; }
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, needAuth, new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestMethod */].Delete,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }), isHideLoading);
    };
    HttpService.prototype.patch = function (url, needAuth, body, isHideLoading) {
        if (needAuth === void 0) { needAuth = false; }
        if (body === void 0) { body = {}; }
        return this.request(url, needAuth, new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestMethod */].Patch,
            body: body
        }), isHideLoading);
    };
    /**
     * 处理请求成功事件
     */
    HttpService.prototype.requestSuccessHandle = function (url, options, res, isCheck, isHideLoading) {
        this.hideLoading(isHideLoading);
        var json = res.json();
        if (url.indexOf(this.serverProvider.BaseApiServer()) != -1) {
            if (json.errcode != 0) {
                __WEBPACK_IMPORTED_MODULE_9__constants__["t" /* IS_DEBUG */] && console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', res);
                if (json.errcode == 401 || (json.errcode >= 6000 && json.errcode <= 6010)) {
                    //this.nativeService.showToast('用户会话已过期,请重新登录'); 
                    if (isCheck) {
                        this.events.publish('user:reLogin', Date.now());
                    }
                }
                else {
                    //this.nativeService.alert(json.errmsg || '请求失败,请稍后再试!');
                }
                return json;
            }
            else {
                __WEBPACK_IMPORTED_MODULE_9__constants__["t" /* IS_DEBUG */] && console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
                return json; //{success: true, data: json};
            }
        }
        else {
            return { errcode: 0, result: json };
        }
    };
    /**
     * 处理请求失败事件
     */
    HttpService.prototype.requestFailedHandle = function (url, options, err, isHideLoading) {
        __WEBPACK_IMPORTED_MODULE_9__constants__["t" /* IS_DEBUG */] && console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', err);
        this.hideLoading(isHideLoading);
        if (!this.nativeService.isConnecting()) {
            this.nativeService.alert(this.translateService.instant('HTTP_ERROR_STATUS_DISCONNECTED'));
        }
        else if (err instanceof __WEBPACK_IMPORTED_MODULE_5_rxjs__["TimeoutError"]) {
            // this.nativeService.alert(this.translateService.instant('HTTP_ERROR_STATUS_TIMEOUT'));
            this.handleProvider.generate('request timeout', -1, {
                url: url,
                error: err
            });
        }
        else {
            var status_1 = err.status;
            var msg = this.translateService.instant('HTTP_ERROR_STATUS_UNKNOWN');
            if (status_1 === 0) {
            }
            else if (status_1 === 404) {
                msg = this.translateService.instant('HTTP_ERROR_STATUS_404');
                // this.nativeService.alert(msg);
            }
            else if (status_1 === 500) {
                msg = this.translateService.instant('HTTP_ERROR_STATUS_500');
                // this.nativeService.alert(msg);
            }
            else {
                // this.nativeService.alert(msg);
            }
            this.logger.log(JSON.stringify(err), msg + url);
            this.logger.httpLog(err, msg, {
                url: url,
                status: status_1
            });
        }
        return err;
    };
    /**
     * 将对象转为查询参数
     */
    HttpService.buildURLSearchParams = function (paramMap) {
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["f" /* URLSearchParams */]();
        if (!paramMap) {
            return params;
        }
        for (var key in paramMap) {
            var val = paramMap[key];
            if (val instanceof Date) {
                val = __WEBPACK_IMPORTED_MODULE_6__utility__["a" /* Utility */].dateFormat(val, 'yyyy-MM-dd hh:mm:ss');
            }
            params.set(key, val);
        }
        return params;
    };
    /**
     * 格式化url使用默认API地址
     */
    HttpService.prototype.formatUrlDefaultApi = function (url) {
        if (url === void 0) { url = ''; }
        var resUrl = __WEBPACK_IMPORTED_MODULE_6__utility__["a" /* Utility */].formatUrl(url.startsWith('http') ? url : this.serverProvider.ApiServer() + url);
        /** 默认使用API v1版本，若为其他版本，则替换掉v1 */
        if (resUrl) {
            var reg = /\/frontapi\/v1\/v([0-9]*)/;
            resUrl = resUrl.replace(reg, '/frontapi/v$1');
            // const reg1 = /42151\/v1\/v([0-9]*)/
            // resUrl = resUrl.replace(reg1, '42151/v$1')
        }
        return resUrl;
    };
    /**
     * 给请求头添加权限认证token
     */
    HttpService.prototype.addAuthorizationHeader = function (options) {
        var token = this.Session.token;
        //let token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpUHJvdWQiLCJhdWQiOiI1MDI1ODc2MjU0MzEwNCIsImV4cCI6IjE1NjQ3OTU5NjQiLCJuYmYiOiI4LzMvMjAxOSAxMjozMjo0NCBBTSIsImp0aSI6IjExMSJ9.pLM-xdQrJYhzKbROgEbetq0wQLymt1T1y5MSFf514xo'
        if (token != null && token != undefined) {
            if (options.headers) {
                options.headers.append('Authorization', 'Bearer ' + token);
            }
            else {
                options.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
                    'Authorization': 'Bearer ' + token
                });
            }
        }
        // return this.addSignatureIntoHeaders(options);
        return options;
    };
    HttpService.prototype.refreshAuthorizationHeader = function (options) {
        var token = this.Session.token;
        if (token != null && token != undefined) {
            if (options.headers) {
                options.headers.delete('Authorization');
                options.headers.append('Authorization', 'Bearer ' + token);
            }
            else {
                options.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
                    'Authorization': 'Bearer ' + token
                });
            }
        }
        // return this.addSignatureIntoHeaders(options);
        return options;
    };
    HttpService.prototype.addSignatureIntoHeaders = function (options) {
        if (!options.headers.has('Signature')) {
            var signature = __WEBPACK_IMPORTED_MODULE_6__utility__["a" /* Utility */].generateSignature();
            options.headers.append('Signature', signature['Signature']);
            options.headers.append('Timestamp', signature['Timestamp']);
            options.headers.append('Nonce', signature['Nonce']);
        }
        return options;
    };
    HttpService.prototype.showLoading = function (isHideLoading) {
        if (!isHideLoading) {
            if (++this.count > 0) {
                this.Session.showLoading && this.nativeService.showLoading();
            }
        }
    };
    HttpService.prototype.hideLoading = function (isHideLoading) {
        var _this = this;
        if (!isHideLoading) {
            if (this.Session.showLoading) {
                //延迟处理可以避免嵌套请求关闭了第一个loading,突然后弹出第二个loading情况(结合nativeService.showLoading())
                setTimeout(function () {
                    if (--_this.count === 0) {
                        _this.nativeService.hideLoading();
                    }
                }, 200);
            }
            else {
                this.Session.showLoading = true;
            }
        }
    };
    HttpService = HttpService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_10__logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_12__providers_server_provider__["a" /* ServerProvider */],
            __WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_11__providers_handle_handle__["a" /* HandleProvider */]])
    ], HttpService);
    return HttpService;
    var HttpService_1;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 232;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/forgot-password/forgot-password.module": [
		999,
		40
	],
	"../pages/account/identify-code/identify-code.module": [
		1000,
		119
	],
	"../pages/account/login/login.module": [
		1001,
		39
	],
	"../pages/account/privacy-policy/privacy-policy.module": [
		1002,
		118
	],
	"../pages/account/select-country/select-country.module": [
		1003,
		117
	],
	"../pages/account/signup/signup.module": [
		1004,
		38
	],
	"../pages/account/welcome/welcome.module": [
		1005,
		116
	],
	"../pages/account/wf-login/wf-login.module": [
		1006,
		37
	],
	"../pages/achievement/achieve-item/achieve-item.module": [
		1007,
		36
	],
	"../pages/achievement/achieve-task-list/achieve-task-list.module": [
		1008,
		35
	],
	"../pages/achievement/achievement/achievement.module": [
		1010,
		34
	],
	"../pages/achievement/collection/collection.module": [
		1009,
		115
	],
	"../pages/achievement/leader-board/leader-board.module": [
		1012,
		114
	],
	"../pages/achievement/my-assets/my-assets.module": [
		1011,
		13
	],
	"../pages/achievement/my-segment/my-segment.module": [
		1013,
		113
	],
	"../pages/achievement/sign-in/sign-in.module": [
		1014,
		43
	],
	"../pages/beta/beta/beta.module": [
		1015,
		47
	],
	"../pages/beta/community-option/community-option.module": [
		1016,
		112
	],
	"../pages/beta/file/file.module": [
		1018,
		111
	],
	"../pages/beta/keyboard/keyboard.module": [
		1017,
		110
	],
	"../pages/beta/login-by-wechat/login-by-wechat.module": [
		1019,
		109
	],
	"../pages/beta/send-message/send-message.module": [
		1020,
		108
	],
	"../pages/beta/speech/speech.module": [
		1021,
		107
	],
	"../pages/beta/sqlite-test/sqlite-test.module": [
		1022,
		106
	],
	"../pages/beta/storage-key-managment/storage-key-managment.module": [
		1023,
		105
	],
	"../pages/beta/test-bindemp/test-bindemp.module": [
		1024,
		104
	],
	"../pages/beta/test-pdf/test-pdf.module": [
		1025,
		103
	],
	"../pages/beta/video/video.module": [
		1026,
		102
	],
	"../pages/common/browser-popover/browser-popover.module": [
		1027,
		101
	],
	"../pages/common/browser/browser.module": [
		1028,
		100
	],
	"../pages/common/handle-details/handle-details.module": [
		1033,
		99
	],
	"../pages/common/handle-history/handle-history.module": [
		1029,
		98
	],
	"../pages/common/image-modal/image-modal.module": [
		1030,
		97
	],
	"../pages/common/img-viewer/img-viewer.module": [
		1031,
		96
	],
	"../pages/common/pdf-viewer/pdf-viewer.module": [
		1032,
		95
	],
	"../pages/common/preview-picture/preview-picture.module": [
		1034,
		94
	],
	"../pages/common/share/share.module": [
		1035,
		93
	],
	"../pages/common/tabs/tabs.module": [
		1036,
		92
	],
	"../pages/common/tutorial/tutorial.module": [
		1037,
		91
	],
	"../pages/common/upgrade/upgrade.module": [
		1038,
		90
	],
	"../pages/community/answer-add/answer-add.module": [
		1039,
		89
	],
	"../pages/community/at-someone/at-someone.module": [
		1040,
		33
	],
	"../pages/community/blog-add/blog-add.module": [
		1041,
		42
	],
	"../pages/community/blog-detail/blog-detail.module": [
		1042,
		88
	],
	"../pages/community/club-all/club-all.module": [
		1043,
		32
	],
	"../pages/community/club-detail/club-detail.module": [
		1046,
		87
	],
	"../pages/community/club-list/club-list.module": [
		1044,
		86
	],
	"../pages/community/club-popover/club-popover.module": [
		1045,
		85
	],
	"../pages/community/club-talk-add/club-talk-add.module": [
		1047,
		84
	],
	"../pages/community/comment/comment.module": [
		1048,
		83
	],
	"../pages/community/community-iframe/community-iframe.module": [
		1049,
		82
	],
	"../pages/community/community-search-single-item/community-search-single-item.module": [
		1050,
		81
	],
	"../pages/community/community-searching/community-searching.module": [
		1051,
		31
	],
	"../pages/community/community-segment/community.module": [
		1052,
		11
	],
	"../pages/community/location-chooser/location-chooser.module": [
		1053,
		80
	],
	"../pages/community/member/member.module": [
		1054,
		79
	],
	"../pages/community/modal-more/modal-more.module": [
		1055,
		78
	],
	"../pages/community/my/activity-details/activity-details.module": [
		1056,
		77
	],
	"../pages/community/my/my-activities/my-activities.module": [
		1057,
		30
	],
	"../pages/community/my/my-comment/my-comment.module": [
		1058,
		29
	],
	"../pages/community/my/my-follow/my-follow.module": [
		1059,
		28
	],
	"../pages/community/my/my-publication/my-publication.module": [
		1060,
		27
	],
	"../pages/community/person-club-main/person-club-main.module": [
		1062,
		76
	],
	"../pages/community/person-main/person-main.module": [
		1061,
		75
	],
	"../pages/community/privacy-setting/privacy-setting.module": [
		1063,
		46
	],
	"../pages/community/question-add/question-add.module": [
		1064,
		41
	],
	"../pages/community/question/question.module": [
		1065,
		74
	],
	"../pages/community/topic-chooser/topic-chooser.module": [
		1066,
		73
	],
	"../pages/community/topic/topic.module": [
		1067,
		72
	],
	"../pages/contact/black-list/black-list.module": [
		1069,
		26
	],
	"../pages/contact/contact-add/contact-add.module": [
		1068,
		25
	],
	"../pages/contact/contact-chooser/contact-chooser.module": [
		1071,
		45
	],
	"../pages/contact/contact-detail/contact-detail.module": [
		1070,
		71
	],
	"../pages/contact/contact-group-manage/contact-group-manage.module": [
		1072,
		70
	],
	"../pages/contact/contact-more-modal/contact-more-modal.module": [
		1073,
		69
	],
	"../pages/contact/contact-option/contact-option.module": [
		1075,
		68
	],
	"../pages/contact/contact-setremark/contact-setremark.module": [
		1076,
		67
	],
	"../pages/contact/contact-tag-chooser/contact-tag-chooser.module": [
		1074,
		66
	],
	"../pages/contact/contact/contact.module": [
		1077,
		24
	],
	"../pages/home/article-content/article-content.module": [
		1078,
		65
	],
	"../pages/home/home-main/home-main.module": [
		1079,
		1
	],
	"../pages/home/news-list/news-list.module": [
		1080,
		23
	],
	"../pages/home/parklife/parklife.module": [
		1081,
		22
	],
	"../pages/home/scan-result/scan-result.module": [
		1082,
		64
	],
	"../pages/home/scan/scan.module": [
		1083,
		63
	],
	"../pages/home/search/search.module": [
		1084,
		21
	],
	"../pages/home/sign/sign.module": [
		1085,
		62
	],
	"../pages/message/message-chat/message-chat.module": [
		1087,
		2
	],
	"../pages/message/message-image-picker/message-image-picker.module": [
		1086,
		61
	],
	"../pages/message/message-list/message-list.module": [
		1088,
		10
	],
	"../pages/message/message-session/message-session.module": [
		1089,
		20
	],
	"../pages/my/about/about.module": [
		1090,
		60
	],
	"../pages/my/certificate/certificate.module": [
		1091,
		0
	],
	"../pages/my/change-password/change-password.module": [
		1092,
		59
	],
	"../pages/my/employee-identity/employee-identity.module": [
		1093,
		58
	],
	"../pages/my/feedback/feedback.module": [
		1095,
		57
	],
	"../pages/my/my-info/my-info.module": [
		1094,
		19
	],
	"../pages/my/my-list/my-list.module": [
		1096,
		18
	],
	"../pages/my/mycode/mycode.module": [
		1099,
		56
	],
	"../pages/my/security/security.module": [
		1098,
		55
	],
	"../pages/my/set-password/set-password.module": [
		1097,
		120
	],
	"../pages/my/settings/settings.module": [
		1100,
		54
	],
	"../pages/my/updata-nickName/updata-nickName.module": [
		1101,
		53
	],
	"../pages/my/updata-phone/updata-phone.module": [
		1102,
		52
	],
	"../pages/my/update-signature/update-signature.module": [
		1103,
		51
	],
	"../pages/recruitment/dl-recruitment-list/dl-recruitment-list.module": [
		1104,
		44
	],
	"../pages/recruitment/dl-recruitment/dl-recruitment.module": [
		1105,
		17
	],
	"../pages/recruitment/idl-recruitment-list/idl-recruitment-list.module": [
		1106,
		9
	],
	"../pages/recruitment/idl-recruitment/idl-recruitment.module": [
		1107,
		50
	],
	"../pages/recruitment/quick-registration/quick-registration.module": [
		1108,
		49
	],
	"../pages/widget/widget-amend/widget-amend.module": [
		1109,
		12
	],
	"../pages/widget/widget-list/widget-list.module": [
		1110,
		16
	],
	"../pages/workflow/donetask/donetask.module": [
		1111,
		8
	],
	"../pages/workflow/undonetask/undonetask.module": [
		1113,
		7
	],
	"../pages/workflow/workflow-agent-setting/setposter.module": [
		1112,
		6
	],
	"../pages/workflow/workflow-agent/workflow-agent.module": [
		1116,
		15
	],
	"../pages/workflow/workflow-details/workflow-details.module": [
		1114,
		14
	],
	"../pages/workflow/workflow-setting-agentlist/workflow-setting-agentlist.module": [
		1115,
		5
	],
	"../pages/workflow/workflow-setting/workflow-setting.module": [
		1117,
		4
	],
	"../pages/workflow/workflow-tabs/workflow.module": [
		1118,
		48
	],
	"../pages/workflow/workflow-task/workflow-task.module": [
		1119,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 278;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = (function () {
    function StorageService(storage) {
        this.storage = storage;
    }
    StorageService.prototype.setItem = function (key, value) {
        this.storage.set(key, value);
    };
    StorageService.prototype.getItem = function (key) {
        return this.storage.get(key);
    };
    StorageService.prototype.removeItem = function (key) {
        this.storage.remove(key);
    };
    StorageService.prototype.getKeys = function () {
        return this.storage.keys();
    };
    StorageService.prototype.getStorageLength = function () {
        return this.storage.length();
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage-service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fundebug_javascript__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fundebug_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fundebug_javascript__);
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
 * fundebug-javascript 監控Javascript異常
 * @description
 */
var Logger = (function () {
    function Logger(session) {
        this.session = session;
    }
    Logger.prototype.log = function (err, action, other) {
        if (other === void 0) { other = null; }
        console.log(new Date() + (":Logger.log By " + this.session.username + ":action- + " + action + " =======> error: " + err));
        other && console.log(other);
        // console.log(new Date() + err);
        __WEBPACK_IMPORTED_MODULE_2_fundebug_javascript__["notifyError"](err, {
            metaData: {
                action: action,
                other: other,
                user: { id: this.session.userId, name: this.session.username }
            }
        });
    };
    Logger.prototype.httpLog = function (err, msg, other) {
        if (other === void 0) { other = {}; }
        console.log('Logger.httpLog：msg-' + msg);
        __WEBPACK_IMPORTED_MODULE_2_fundebug_javascript__["notifyHttpError"](err, {
            metaData: {
                action: msg,
                other: other,
                user: { id: this.session.userId, name: this.session.username }
            }
        });
    };
    Logger = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__session__["a" /* Session */]])
    ], Logger);
    return Logger;
}());

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utility; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_qrcode__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_qrcode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_html2canvas__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_html2canvas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_html2canvas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
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








//declare let hex_md5;
/**
 * Utils类存放和业务无关的公共方法
 * @description
 */
var Utility = (function () {
    function Utility() {
    }
    Utility_1 = Utility;
    Utility.isEmpty = function (value) {
        return value == null || typeof value === 'string' && value.length === 0;
    };
    Utility.isNotEmpty = function (value) {
        return !Utility_1.isEmpty(value);
    };
    Utility.isObjectEmpty = function (obj) {
        for (var key in obj) {
            return false;
        }
        return true;
    };
    /**
     * 格式“是”or“否”
     * @param value
     * @returns {string|string}
     */
    Utility.formatYesOrNo = function (value) {
        return value == 1 ? '是' : (value == '0' ? '否' : null);
    };
    /**
     * 日期对象转为日期字符串
     * @param date 需要格式化的日期对象
     * @param sFormat 输出格式,默认为yyyy-MM-dd                        年：y，月：M，日：d，时：h，分：m，秒：s
     * @example  dateFormat(new Date())                               "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd')                  "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')         "2017-02-28 13:24:00"   ps:HH:24小时制
     * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')         "2017-02-28 01:24:00"   ps:hh:12小时制
     * @example  dateFormat(new Date(),'hh:mm')                       "09:24"
     * @example  dateFormat(new Date(),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
     * @example  dateFormat(new Date('2017-02-28 13:24:00'),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
     * @returns {string}
     */
    Utility.dateFormat = function (date, sFormat) {
        if (sFormat === void 0) { sFormat = 'yyyy-MM-dd'; }
        var time = {
            Year: 0,
            TYear: '0',
            Month: 0,
            TMonth: '0',
            Day: 0,
            TDay: '0',
            Hour: 0,
            THour: '0',
            hour: 0,
            Thour: '0',
            Minute: 0,
            TMinute: '0',
            Second: 0,
            TSecond: '0',
            Millisecond: 0
        };
        time.Year = date.getFullYear();
        time.TYear = String(time.Year).substr(2);
        time.Month = date.getMonth() + 1;
        time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
        time.Day = date.getDate();
        time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
        time.Hour = date.getHours();
        time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
        time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
        time.Minute = date.getMinutes();
        time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
        time.Second = date.getSeconds();
        time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
        time.Millisecond = date.getMilliseconds();
        return sFormat.replace(/yyyy/ig, String(time.Year))
            .replace(/yyy/ig, String(time.Year))
            .replace(/yy/ig, time.TYear)
            .replace(/y/ig, time.TYear)
            .replace(/MM/g, time.TMonth)
            .replace(/M/g, String(time.Month))
            .replace(/dd/ig, time.TDay)
            .replace(/d/ig, String(time.Day))
            .replace(/HH/g, time.THour)
            .replace(/H/g, String(time.Hour))
            .replace(/hh/g, time.Thour)
            .replace(/h/g, String(time.hour))
            .replace(/mm/g, time.TMinute)
            .replace(/m/g, String(time.Minute))
            .replace(/ss/ig, time.TSecond)
            .replace(/s/ig, String(time.Second))
            .replace(/fff/ig, String(time.Millisecond));
    };
    Utility.dateFormatByMiles = function (miles, sFormat) {
        if (sFormat === void 0) { sFormat = 'yyyy-MM-dd'; }
        var date = new Date(miles);
        var time = {
            Year: 0,
            TYear: '0',
            Month: 0,
            TMonth: '0',
            Day: 0,
            TDay: '0',
            Hour: 0,
            THour: '0',
            hour: 0,
            Thour: '0',
            Minute: 0,
            TMinute: '0',
            Second: 0,
            TSecond: '0',
            Millisecond: 0
        };
        time.Year = date.getFullYear();
        time.TYear = String(time.Year).substr(2);
        time.Month = date.getMonth() + 1;
        time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
        time.Day = date.getDate();
        time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
        time.Hour = date.getHours();
        time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
        time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
        time.Minute = date.getMinutes();
        time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
        time.Second = date.getSeconds();
        time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
        time.Millisecond = date.getMilliseconds();
        return sFormat.replace(/yyyy/ig, String(time.Year))
            .replace(/yyy/ig, String(time.Year))
            .replace(/yy/ig, time.TYear)
            .replace(/y/ig, time.TYear)
            .replace(/MM/g, time.TMonth)
            .replace(/M/g, String(time.Month))
            .replace(/dd/ig, time.TDay)
            .replace(/d/ig, String(time.Day))
            .replace(/HH/g, time.THour)
            .replace(/H/g, String(time.Hour))
            .replace(/hh/g, time.Thour)
            .replace(/h/g, String(time.hour))
            .replace(/mm/g, time.TMinute)
            .replace(/m/g, String(time.Minute))
            .replace(/ss/ig, time.TSecond)
            .replace(/s/ig, String(time.Second))
            .replace(/fff/ig, String(time.Millisecond));
    };
    /**
     * 返回字符串长度，中文计数为2
     * @param str
     * @returns {number}
     */
    Utility.strLength = function (str) {
        var len = 0;
        for (var i = 0, length_1 = str.length; i < length_1; i++) {
            str.charCodeAt(i) > 255 ? len += 2 : len++;
        }
        return len;
    };
    /**
     * 把url中的双斜杠替换为单斜杠
     * 如:http://localhost:8080//api//demo.替换后http://localhost:8080/api/demo
     * @param url
     * @returns {string}
     */
    Utility.formatUrl = function (url) {
        if (url === void 0) { url = ''; }
        var index = 0;
        if (url.startsWith('http')) {
            index = 7;
        }
        return url.substring(0, index) + url.substring(index).replace(/\/\/*/g, '/');
    };
    /**
     * 字符串加密
     * @param str
     * @returns {any}
     */
    Utility.md5 = function (str) {
        var text = __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(str).toString();
        text = __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(text).toString();
        return text;
    };
    Utility.generateSignature = function () {
        var timestamp = new Date().getTime().toString();
        var nonce = Math.floor((Math.random() * 9 + 1) * 100000).toString();
        var array = [__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* APPSECRET */], timestamp, nonce];
        array.sort();
        var res = {
            'Signature': this.md5(array[0] + array[1] + array[2]),
            'Timestamp': timestamp,
            'Nonce': nonce
        };
        return res;
    };
    /** 产生一个随机的32位长度字符串 */
    Utility.uuid = function () {
        var text = "";
        var possible = "abcdef0123456789";
        for (var i = 0; i < 19; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + new Date().getTime();
    };
    Utility.AppName = function () {
        return __WEBPACK_IMPORTED_MODULE_3__services_constants__["c" /* APPNAME */];
    };
    /**
     * 判断是否有版本更新
     * @param lastestVerionNo 最新版本
     * @param currentVerionNo 当前版本
     */
    Utility.checkNewVersion = function (lastestVerionNo, currentVerionNo) {
        if (lastestVerionNo && currentVerionNo) {
            var lastestArray = lastestVerionNo.split('.');
            var currentArray = currentVerionNo.split('.');
            var i = 0;
            while (lastestArray.length >= i) {
                var latestVersion = lastestArray[i] || 0;
                var currentVersion = currentArray[i] || 0;
                if (parseInt(latestVersion) > parseInt(currentVersion) || 0) {
                    return true;
                }
                else if (parseInt(latestVersion) == parseInt(currentVersion)) {
                }
                else {
                    return false;
                }
                i++;
            }
        }
        return false;
    };
    /**
    * 是否要强制更新，只比较第一位，若第一位currentVerionNo > lastestVerionNo，则要强制升级
    * @param lastestVerionNo
    * @param currentVerionNo
    */
    Utility.isForceUpgrade = function (lastestVerionNo, currentVerionNo) {
        if (lastestVerionNo && currentVerionNo) {
            var lastestArray = lastestVerionNo.split('.');
            var currentArray = currentVerionNo.split('.');
            var i = 0;
            return parseInt(lastestArray[i]) > parseInt(currentArray[i]);
        }
        return false;
    };
    Utility.transformToMilliseconds = function (language, utcDate) {
        var milliseconds = 0;
        milliseconds = this.formatTime(language, utcDate);
        if (typeof (utcDate) == 'string') {
            var parseUtcDate = Number(utcDate);
            if (isNaN(parseUtcDate)) {
                milliseconds = this.formatTime(language, utcDate);
            }
            else {
                milliseconds = this.formatTime(language, parseUtcDate);
            }
        }
        else if (utcDate instanceof Date) {
            milliseconds = utcDate.getTime();
        }
        else if (typeof (utcDate) == 'number') {
            milliseconds = utcDate;
        }
        return milliseconds;
    };
    Utility.formatMessageTime = function (language, utcDate) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var localdatetime = this.transformToMilliseconds(language, utcDate);
        var currentMiles = __WEBPACK_IMPORTED_MODULE_4_moment___default()().valueOf();
        var targetMiles = __WEBPACK_IMPORTED_MODULE_4_moment___default()(localdatetime).valueOf();
        var devalue = currentMiles - targetMiles;
        if (devalue > 0 && devalue < 1000 * 60 * 60 * 24 * 6) {
            if (new Date(localdatetime).getDay() != new Date().getDay()) {
                return __WEBPACK_IMPORTED_MODULE_4_moment___default()(localdatetime).format("dddd LT");
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_4_moment___default()(localdatetime).format("LT");
            }
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4_moment___default()(localdatetime).format("LLL");
        }
    };
    Utility.formatMessageGroupTime = function (language, utcDate) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var localdatetime = null;
        __WEBPACK_IMPORTED_MODULE_4_moment___default.a.locale(language.toLowerCase());
        if (typeof (utcDate) == 'string') {
            localdatetime = this.formatTime(language, utcDate);
        }
        else if (utcDate instanceof Date) {
            localdatetime = this.dateFormat(utcDate, 'yyyy-MM-dd HH:mm:ss');
        }
        else if (typeof (utcDate) == 'number') {
            localdatetime = utcDate;
        }
        var currentMiles = __WEBPACK_IMPORTED_MODULE_4_moment___default()().valueOf();
        var targetMiles = __WEBPACK_IMPORTED_MODULE_4_moment___default()(localdatetime).valueOf();
        var devalue = currentMiles - targetMiles;
        if (devalue > 0 && devalue < 1000 * 60 * 60 * 24 * 6) {
            var local = new Date(localdatetime);
            var now = new Date();
            var localday = local.getDate();
            var nowaday = now.getDate();
            if (localday != nowaday) {
                return __WEBPACK_IMPORTED_MODULE_4_moment___default()(localdatetime).format("dddd"); //显示星期几
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_4_moment___default()(localdatetime).format("LT"); //显示时间
            }
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4_moment___default()(localdatetime).format("L"); //显示日期
        }
    };
    /**
     * 格式化成'YYYY-MM-DD HH:mm:ss'
     * @param language
     * @param utcDate
     */
    Utility.formatSignTime = function (language, utcDate) {
        return this.formatTime(language, utcDate, 'YYYY-MM-DD HH:mm:ss');
    };
    /**
     *
     * @param language
     * @param utcDate
     * @param pattern
     */
    Utility.formatTime = function (language, utcDate, pattern) {
        if (!utcDate)
            return utcDate;
        __WEBPACK_IMPORTED_MODULE_4_moment___default.a.locale(language.toLowerCase());
        if (isNaN(Number(utcDate))) {
            return __WEBPACK_IMPORTED_MODULE_4_moment___default.a.utc(utcDate).local().format(pattern);
        }
        return __WEBPACK_IMPORTED_MODULE_4_moment___default.a.utc(Number(utcDate)).local().format(pattern);
    };
    Utility.randomDate = function (language, utcDate) {
        var rand = Math.floor(Math.random() * 100);
        var date = new Date();
        date.setDate(date.getDate() - rand);
        return this.formatTime(language, date, 'YYYY-MM-DD');
    };
    /**
     * 判断两个object是否相同
     * @param Object1
     * @param Object2
     */
    Utility.isEqualsObject = function (Object1, Object2) {
        var o1 = Object1 instanceof Object;
        var o2 = Object2 instanceof Object;
        var a1 = Object1 instanceof Array;
        var a2 = Object2 instanceof Array;
        if (!o1 || !o2) {
            return Object1 === Object2;
        }
        if (Object.keys(Object1).length !== Object.keys(Object2).length) {
            return false;
            //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
        }
        if (a1 && a2) {
            var isEqual = true;
            for (var i = 0; i < Object.keys(Object1).length; i++) {
                isEqual = isEqual && this.isEqualsObject(Object1[i], Object2[i]);
            }
            return isEqual;
        }
        for (var attr in Object1) {
            var t1 = Object1[attr] instanceof Object;
            var t2 = Object2[attr] instanceof Object;
            if (t1 && t2) {
                return this.isEqualsObject(Object1[attr], Object2[attr]);
            }
            else if (Object1[attr] !== Object2[attr]) {
                return false;
            }
        }
        return true;
    };
    //获取此时点击屏幕的坐标
    Utility.getCurrentTouchCoords = function () {
        var coords = {
            x: 0,
            y: 0
        };
        if (!window.event['clientX']) {
            coords.x = window.event['changedTouches'][0]['clientX'];
            coords.y = window.event['changedTouches'][0]['clientY'];
        }
        else {
            coords.x = window.event['clientX'];
            coords.y = window.event['clientY'];
        }
        return coords;
    };
    /**
     * 员宝内打开链接，加上Session等各种参数
     * 注意：AuthCode必须放在最后面
     * @param completeUrl
     * @param AuthCode
     * @param session
     * @param appId
     */
    Utility.completeUrlForBrowser = function (completeUrl, AuthCode, session, appId, isAddAccount) {
        isAddAccount = isAddAccount || !!this.getQueryByName(completeUrl, 'accountId');
        var searchParamsAppId = this.getQueryByName(completeUrl, 'appid');
        completeUrl = this.removeSessionInfo(completeUrl);
        var qindex = completeUrl.indexOf('?');
        if (qindex > -1) {
            var urlArr = completeUrl.split('?');
            var joinUrl = "From=" + Utility_1.AppName();
            var signature = Utility_1.generateSignature();
            joinUrl = this._addParamForUrl(joinUrl, 'AppId', appId || searchParamsAppId || 0);
            joinUrl = this._addParamForUrl(joinUrl, 'Signature', signature['Signature']);
            joinUrl = this._addParamForUrl(joinUrl, 'Timestamp', signature['Timestamp']);
            joinUrl = this._addParamForUrl(joinUrl, 'Nonce', signature['Nonce']);
            joinUrl = this._addParamForUrl(joinUrl, 'Theme', this.getThemeName(session.isDarkMode));
            joinUrl = this._addParamForUrl(joinUrl, 'Lang', session.language);
            joinUrl = this._addParamForUrl(joinUrl, 'AuthCode', AuthCode);
            if (isAddAccount) {
                joinUrl = this._addParamForUrl(joinUrl, 'accountId', session.userId);
            }
            urlArr[1] = joinUrl + '&' + urlArr[1];
            completeUrl = urlArr.join('?');
        }
        else {
            completeUrl += "?From=" + Utility_1.AppName();
            // add timestamp
            var signature = Utility_1.generateSignature();
            completeUrl = this._addParamForUrl(completeUrl, 'AppId', appId || searchParamsAppId || 0);
            completeUrl = this._addParamForUrl(completeUrl, 'Signature', signature['Signature']);
            completeUrl = this._addParamForUrl(completeUrl, 'Timestamp', signature['Timestamp']);
            completeUrl = this._addParamForUrl(completeUrl, 'Nonce', signature['Nonce']);
            completeUrl = this._addParamForUrl(completeUrl, 'Theme', this.getThemeName(session.isDarkMode));
            completeUrl = this._addParamForUrl(completeUrl, 'Lang', session.language);
            completeUrl = this._addParamForUrl(completeUrl, 'AuthCode', AuthCode);
            if (isAddAccount) {
                completeUrl = this._addParamForUrl(completeUrl, 'accountId', session.userId);
            }
        }
        return completeUrl;
    };
    Utility.getBoolean = function (value, defaultValue) {
        if (defaultValue === void 0) { defaultValue = true; }
        return (typeof (value) == 'undefined' || value == null) ? defaultValue : this.boolean(value);
    };
    Utility.utf16toEntities = function (str) {
        var patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则 
        str = str.replace(patt, function (char) {
            var H, L, code;
            if (char.length === 2) {
                H = char.charCodeAt(0); // 取出高位 
                L = char.charCodeAt(1); // 取出低位 
                code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法 
                return "&#" + code + ";";
            }
            else {
                return char;
            }
        });
        return str;
    };
    Utility.testRemoveSessionInfo = function () {
        var urls = [
            {
                url: 'https://iproud.fihmb.com/?From=iProud&AppId=42381068308509&Signature=a9eca04ec32f9c24118c66a8a885ca11&Timestamp=1552899524798&Nonce=317656&Theme=theme-light&Lang=zh-CN&AuthCode=75235650516992'
            }, {
                url: 'https://iproud.fihmb.com/?From=iProud&AppId=42381068308509&?Signature=a9eca04ec32f9c24118c66a8a885ca11&Timestamp=1552899524798&Nonce=317656&Theme=theme-light&Lang=zh-CN&AuthCode=75235650516992',
            }, {
                url: 'https://iproud.fihmb.com/?From=iProud&AppId=42381068308509&Signature=a9eca04ec32f9c24118c66a8a885ca11&Timestamp=1552899524798&Nonce=317656&Theme=theme-light&Lang=zh-CN&AuthCode=75235650516992#123456&456',
            }, {
                url: 'https://iproud.fihmb.com/#123456&456?AppId=42381068308509&Signature=a9eca04ec32f9c24118c66a8a885ca11'
            }
        ];
        for (var _i = 0, urls_1 = urls; _i < urls_1.length; _i++) {
            var item = urls_1[_i];
            item['resultUrl'] = this.removeSessionInfo(item.url);
        }
        console.log(JSON.stringify(urls, null, 2));
    };
    Utility.removeSessionInfo = function (link) {
        if (!link)
            return '';
        var url = link;
        var questionIndex = url.indexOf('?');
        var anchorIndex = url.indexOf('#');
        if (questionIndex == -1) {
            return link;
        }
        else if (anchorIndex > -1 && questionIndex < anchorIndex) {
            var partOfAnchor = url.substring(anchorIndex, url.length);
            var partOfPrefix = url.substring(0, anchorIndex);
            return this._removeKeys(partOfPrefix) + partOfAnchor;
        }
        else {
            var partOfPrefix = url;
            return this._removeKeys(partOfPrefix);
        }
    };
    Utility._removeKeys = function (url) {
        var index = url.indexOf('?');
        var partOfPrefix = url.substring(0, index);
        var params = this.parseQuery(url);
        var keys = ['Signature', 'AuthCode', 'Theme', 'From', 'Nonce', 'Timestamp', 'accountId', 'AppId', 'Lang'];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            delete params[key]; //移除签名 
        }
        for (var _a = 0, _b = Object.keys(params); _a < _b.length; _a++) {
            var key = _b[_a];
            if (partOfPrefix.indexOf('?') > -1) {
                partOfPrefix += "&" + key + "=" + params[key];
            }
            else {
                partOfPrefix += "?" + key + "=" + params[key];
            }
        }
        return partOfPrefix;
    };
    /**
     * 移除AuthCode等个人信息
     * @param link
     */
    Utility.removeSessionInfoForShareLink = function (link) {
        var url = link;
        var index = url.indexOf('?');
        if (url && index > -1) {
            var preurl = url.substring(0, index);
            var params = this.parseQuery(url);
            delete params['Signature']; //移除签名
            delete params['AuthCode']; //移除authCode
            delete params['Theme']; //移除Theme
            delete params['From']; //移除From
            delete params['Nonce']; //移除Nonce 
            delete params['Timestamp']; //移除Timestamp
            delete params['accountId']; //移除accountId
            for (var _i = 0, _a = Object.keys(params); _i < _a.length; _i++) {
                var key = _a[_i];
                if (preurl.indexOf('?') > -1) {
                    preurl += "&" + key + "=" + params[key];
                }
                else {
                    preurl += "?" + key + "=" + params[key];
                }
            }
            return preurl;
        }
        return url;
    };
    /**
     * 更换参数的值，若不存在该参数则新增。
     * @param url
     * @param paramName 参数名称
     * @param value 参数值
     */
    Utility._addParamForUrl = function (url, paramName, value) {
        if (!url)
            return "";
        var index = url.indexOf(paramName + '=');
        if (index > -1) {
            var oldValue = this.getQueryByName(url, paramName);
            url = url.replace(paramName + '=' + oldValue, paramName + '=' + value); //替换旧的value 
        }
        else {
            url += "&" + paramName + "=" + value;
        }
        return url;
    };
    Utility.addShareByUserToURL = function (link, userId) {
        if (!link)
            return '';
        if (link.indexOf('?') >= 0) {
            var queryValue = this.getQueryByName(link, 'ShareByUser');
            if (!queryValue) {
                link += "&ShareByUser=" + userId;
            }
            else {
                link = link.replace('ShareByUser=' + queryValue, 'ShareByUser=' + userId);
            }
        }
        else {
            link += "?ShareByUser=" + userId;
        }
        return link;
    };
    /**
     *
     * @param url 获取某个url中某个参数的值
     * @param name
     */
    Utility.getQueryByName = function (url, name) {
        var reg = new RegExp('[?&]' + name + '=([^&#]+)', "i");
        var query = url.match(reg);
        return query ? query[1] : null;
    };
    Utility.testGetQueryByName = function () {
        var _this = this;
        var array = [];
        array.push('https://www.popochiu.com/?appid=123');
        array.push('https://www.popochiu.com/?id=1&appid=123');
        array.push('https://www.popochiu.com/?id=1&appId=123');
        array.push('https://www.popochiu.com/?id=1&appId=123&h=888');
        array.push('https://www.popochiu.com/?id=1&appId=123&h=888');
        array.push('https://www.popochiu.com/?id=1&appId=123#h=888');
        array.forEach(function (item) {
            console.log(item, ":", _this.getQueryByName(item, 'appid'));
        });
    };
    /**
     * 将所有参数转化为对象，重复的参数作为数组
     * @param url
     */
    Utility.parseQuery = function (url) {
        var queryObj = {};
        var reg = /[?&]([^=&#]+)=([^&#]*)/g;
        var querys = url.match(reg);
        if (querys) {
            for (var i in querys) {
                var query = querys[i].split('=');
                var key = query[0].substr(1), value = query[1];
                queryObj[key] ? queryObj[key] = [].concat(queryObj[key], value) : queryObj[key] = value;
            }
        }
        return queryObj;
    };
    Utility.testCheckVersion = function () {
        var currentVerisons = ['0.1', '0.1.1', '0.1.2', '0.1.12', '1.0', '1.1', '1.1.0', '1.1.1', '1.2', '1.2.0', '1.2.1', '2.0', '2.0.0', '2.0.1', '2.1.1'];
        var latestVerisons = ['0.1', '0.1.1', '0.1.2', '0.1.12', '1.0', '1.1', '1.1.0', '1.1.1', '1.2', '1.2.0', '1.2.1', '2.0', '2.0.0', '2.0.1', '2.1.1'];
        for (var _i = 0, currentVerisons_1 = currentVerisons; _i < currentVerisons_1.length; _i++) {
            var cur = currentVerisons_1[_i];
            for (var _a = 0, latestVerisons_1 = latestVerisons; _a < latestVerisons_1.length; _a++) {
                var late = latestVerisons_1[_a];
                console.log('currentVerison:' + cur, ',latestVerison:' + late, ",update available :" + Utility_1.checkNewVersion(late, cur));
            }
        }
    };
    Utility.isUrl = function (url) {
        var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
        var isurl = reg.test(url);
        if (url) {
            url = url.trim();
        }
        var start = url.startsWith('http');
        return isurl && start;
    };
    Utility.matchAppPrefix = function (url) {
        var reg = /(iproud:\/\/)/ig;
        return reg.test(url);
    };
    Utility.parsePageUrl = function (url) {
        var res = {
            AppPageId: '',
            params: {}
        };
        if (!this.matchAppPrefix(url)) {
            return res;
        }
        var newurl = url.replace(__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* APPNAME_PAGE_PREFIX */].toLowerCase(), '');
        var array = newurl.split('?');
        if (array[0]) {
            res.AppPageId = array[0].split('=')[1];
        }
        if (array[1]) {
            var param = {};
            var paramarray = array[1].split('&');
            for (var _i = 0, paramarray_1 = paramarray; _i < paramarray_1.length; _i++) {
                var item = paramarray_1[_i];
                if (item) {
                    param[item.split('=')[0]] = item.split('=')[1];
                }
            }
            res.params = param;
        }
        return res;
    };
    Utility.generateQRCode = function (str) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_5_qrcode___default.a.toDataURL(str)];
                    case 1: return [2 /*return*/, (_a.sent())];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Utility.testIsUrl = function () {
        var str1 = "http://www.baidu.com";
        var str2 = "https://www.baidu.com";
        var str3 = "http://www.baidu.comhttps:";
        var str4 = "www.baidu.comhttp://";
        var str5 = "{\"AppPage\":{ \"pageId\": \"workflow\",\"params\":{\"taskid\":\"\",\"url\":\"https://www.baidu.com\"}}}";
        var str6 = "AppPageId";
        console.log(str1 + ":" + this.isUrl(str1));
        console.log(str2 + ":" + this.isUrl(str2));
        console.log(str3 + ":" + this.isUrl(str3));
        console.log(str4 + ":" + this.isUrl(str4));
        console.log(str5 + ":" + this.isUrl(str5));
        console.log(JSON.parse(str5));
        console.log(this.parsePageUrl(str6));
    };
    Utility.deepCopy = function (object) {
        if (object instanceof Array) {
            var newarray = [];
            for (var _i = 0, object_1 = object; _i < object_1.length; _i++) {
                var item = object_1[_i];
                newarray.push(item);
            }
            return newarray;
        }
        else if (object instanceof Object) {
            return JSON.parse(JSON.stringify(object));
        }
        return object;
    };
    Utility.getThemeColor = function (isDark) {
        return !isDark ? __WEBPACK_IMPORTED_MODULE_3__services_constants__["f" /* APP_STYLE */].DEFAULT : __WEBPACK_IMPORTED_MODULE_3__services_constants__["f" /* APP_STYLE */].DARK;
    };
    Utility.getThemeName = function (isDark) {
        return !isDark ? __WEBPACK_IMPORTED_MODULE_3__services_constants__["f" /* APP_STYLE */].DEFAULT.NAME : __WEBPACK_IMPORTED_MODULE_3__services_constants__["f" /* APP_STYLE */].DARK.NAME;
    };
    Utility.trim = function (str) {
        return str.replace(/\s+/g, "");
    };
    Utility.boolean = function (value) {
        return Boolean(value) && value !== 'false';
    };
    /**
     * 判断输入字符串的长度（中文占用两个字节，英文占用一个字节）
     * @param val :string
     */
    Utility.getByteLen = function (val) {
        var len = 0;
        for (var i = 0; i < val.length; i++) {
            var value = val[i];
            if (value.match(/[^\x00-\xff]/ig) != null)
                len += 2; //如果是全角，占用两个字节  如果mysql中某字段是text, 如果设置编码为utf-8,那么一个中文是占3个字节, gbk是两个字节
            else
                len += 1; //半角占用一个字节
        }
        return len;
    };
    Utility.blurMobilePhone = function (phonemobile) {
        if (!phonemobile)
            return '';
        var bit = 5;
        if (phonemobile.length > 0 && phonemobile.length <= 5)
            bit = 1;
        if (phonemobile.length > 5 && phonemobile.length <= 8)
            bit = 2;
        if (phonemobile.length > 8 && phonemobile.length <= 10)
            bit = 3;
        if (phonemobile.length > 10)
            bit = 5;
        var star = '';
        for (var i = 0; i < bit; i++) {
            star += '*';
        }
        return phonemobile.replace(phonemobile.substr(phonemobile.length - (bit + 3), bit), star);
    };
    Utility.test = function () {
        var url = "https://iproud.fihmb.com/WebApp/Feedback/Contents?Id=64443449535489#123/asdsad";
        var fullurl = "https://iproud.fihmb.com/WebApp/Policy/Index?From=iProud&AppId=42381068308509&Signature=a9eca04ec32f9c24118c66a8a885ca11&Timestamp=1552899524798&Nonce=317656&Theme=theme-light&Lang=zh-CN&AuthCode=75235650516992";
        console.log("removeSessionInfoForShareLink", this.removeSessionInfoForShareLink(fullurl));
        console.log("removeSessionInfo", this.removeSessionInfo(url));
        // console.log(this.completeUrlForBrowser(url, '65649584491520', "zh-CN")) 
        // console.log(this.completeUrlForBrowser("https://iproud.fihmb.com/WebApp/Feedback/Contents?Id=64443449535489&AppId=29a", '65649584491520', "zh-CN"))
    };
    Utility.captureWebPage = function (element) {
        var st = new Date().getTime();
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"](function (obersve) {
            __WEBPACK_IMPORTED_MODULE_6_html2canvas___default()(element)
                .then(function (canvas) {
                var et = new Date().getTime();
                var src = canvas.toDataURL("image/png");
                obersve.next({ success: !!src, result: src, mills: et - st });
            }).catch(function (error) {
                obersve.error({ success: false, result: error });
            });
        });
    };
    Utility.testcaptureWebPage = function (element) {
        var _this = this;
        setTimeout(function () {
            _this.captureWebPage(element).subscribe(function (res) {
                console.log(res);
            });
        }, 2000);
    };
    Utility._brightnessOfColor = function (colorHexdecimalValue) {
        if (!colorHexdecimalValue)
            return 0;
        var rColorValue = 1;
        var gColorValue = 1;
        var bColorValue = 1;
        if (colorHexdecimalValue.indexOf('rgb') > -1) {
            var rgb = colorHexdecimalValue.match(/(\d(\.\d+)?)+/g);
            if (rgb) {
                rColorValue = rgb[0] ? Number(rgb[0]) : 1;
                gColorValue = rgb[1] ? Number(rgb[1]) : 1;
                bColorValue = rgb[2] ? Number(rgb[2]) : 1;
            }
        }
        else if (colorHexdecimalValue.indexOf('#') > -1) {
            var useColorValue = colorHexdecimalValue.slice(1);
            var rColor = useColorValue.slice(0, 2);
            var gColor = useColorValue.slice(2, 4);
            var bColor = useColorValue.slice(4);
            rColorValue = this._hexToRgb(rColor);
            gColorValue = this._hexToRgb(gColor);
            bColorValue = this._hexToRgb(bColor);
        }
        else {
            return 0;
        }
        var lightness = rColorValue * 0.299 + gColorValue * 0.587 + bColorValue * 0.114;
        return lightness;
    };
    Utility._hexToRgb = function (hexColor) {
        return parseInt(hexColor, 16);
    };
    Utility.decideTxtColor = function (colorHexdecimal) {
        return this._brightnessOfColor(colorHexdecimal) < 128;
    };
    Utility.base64ToArrayBuffer = function (base64) {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    };
    /**
     * 每次调用sequence加1
     * @type {()=>number}
     */
    Utility.getSequence = (function () {
        var sequence = 1;
        return function () {
            return ++sequence;
        };
    })();
    Utility = Utility_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Utility);
    return Utility;
    var Utility_1;
}());

//# sourceMappingURL=utility.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants__ = __webpack_require__(14);
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







/*
  Generated class for the HandleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HandleProvider = (function () {
    function HandleProvider(http, storageService, nativeService) {
        this.http = http;
        this.storageService = storageService;
        this.nativeService = nativeService;
        this.history = [];
        this.isOnlyRecordError = true;
        this.Key = 'Handle:History';
    }
    HandleProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, history;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.history)
                            this.history = [];
                        _a = this;
                        return [4 /*yield*/, this.storageService.getItem(__WEBPACK_IMPORTED_MODULE_0__services_constants__["E" /* STORAGE_KEY */].SETTING.ONLY_COLLECT_ERROR_INFO)];
                    case 1:
                        _a.isOnlyRecordError = _b.sent();
                        return [4 /*yield*/, this.storageService.getItem(this.Key)];
                    case 2:
                        history = _b.sent();
                        if (history) {
                            if (this.history.length > 0) {
                                this.history = this.history.concat(history);
                                this.storageService.setItem(this.Key, this.history);
                            }
                            else {
                                this.history = history;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleProvider.prototype.generateError = function (handleName, result) {
        this.generate(handleName, -1, result);
    };
    HandleProvider.prototype.generateInfo = function (handleName, result) {
        this.generate(handleName, 0, result);
    };
    HandleProvider.prototype.generateSql = function (handleName, result) {
        this.generate(handleName, 1, result);
    };
    /**
     *
     * @param handleName 动作名称
     * @param type 类型 (0: normal; 1: sqlite; -1 : error)
     * @param result 结果
     */
    HandleProvider.prototype.generate = function (handleName, type, result) {
        if ((this.isOnlyRecordError && type != -1) || !__WEBPACK_IMPORTED_MODULE_6__services_constants__["s" /* IS_BETA */])
            return;
        if (!this.history)
            this.history = [];
        var date = new Date();
        var time = date.getTime();
        var item = {
            handleName: handleName,
            handleTime: __WEBPACK_IMPORTED_MODULE_3__services_utility__["a" /* Utility */].dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss') + ' ' + time.toString().substr(time.toString().length - 3, 3),
            createTime: time,
            type: type,
            result: result
        };
        this.history.push(item);
        // this.nativeService.writeLog(JSON.stringify(item, null ,2));
        this.storageService.setItem(this.Key, this.history);
    };
    HandleProvider.prototype.get = function (type) {
        var history = this.filter(type);
        history.sort(function (a, b) {
            return new Date(b.createTime).getTime() - new Date(a.createTime).getTime();
        });
        return history;
    };
    HandleProvider.prototype.filter = function (type) {
        var array = [];
        if (!type || type == 999) {
            return this.history;
        }
        for (var _i = 0, _a = this.history; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.type == type) {
                array.push(item);
            }
        }
        return array;
    };
    HandleProvider.prototype.clear = function () {
        this.history = [];
        this.storageService.setItem(this.Key, []);
    };
    HandleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1__services_native_service__["a" /* NativeService */]])
    ], HandleProvider);
    return HandleProvider;
}());

//# sourceMappingURL=handle.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_file_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fundebug_javascript__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fundebug_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fundebug_javascript__);
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
 * Helper类存放和业务有关的公共方法
 * @description
 */
var Helper = (function () {
    function Helper(logger, fileService, nativeService, session) {
        this.logger = logger;
        this.fileService = fileService;
        this.nativeService = nativeService;
        this.session = session;
    }
    /**
     * 设置日志监控app的版本号
     */
    Helper.prototype.funDebugInit = function () {
        if (this.nativeService.isMobile()) {
            this.nativeService.getVersionNumber().subscribe(function (version) {
                __WEBPACK_IMPORTED_MODULE_5_fundebug_javascript__["appversion"] = version;
            });
        }
    };
    /**
     * AlloyLever,一款本地"开发者工具"
     * 文档:https://github.com/AlloyTeam/AlloyLever
     */
    Helper.prototype.alloyLeverInit = function () {
        AlloyLever.config({
            cdn: 'http://s.url.cn/qqun/qun/qqweb/m/qun/confession/js/vconsole.min.js',
            /*reportUrl: "//a.qq.com",  //错误上报地址
            reportPrefix: 'qun',    //错误上报msg前缀，一般用于标识业务类型
            reportKey: 'msg',        //错误上报msg前缀的key，用户上报系统接收存储msg
            otherReport: {              //需要上报的其他信息
              uin: 491862102
            },*/
            entry: "#entry" //请点击这个DOM元素6次召唤vConsole。//你可以通过AlloyLever.entry('#entry2')设置多个机关入口召唤神龙
        });
    };
    /**
     * 获取用户头像路径
     * @param avatarId
     */
    // loadAvatarPath(avatarId) {
    //   return Observable.create(observer => {
    //     if (!avatarId) {
    //       observer.next(DEFAULT_AVATAR);
    //     } else {
    //       this.fileService.getFileInfoById(avatarId).subscribe((res: FileObject) => {
    //         if (res.origPath) {
    //           let avatarPath = res.origPath;
    //           observer.next(avatarPath);
    //         } else {
    //           observer.next(DEFAULT_AVATAR);
    //         }
    //       }, () => {
    //         observer.next(DEFAULT_AVATAR);
    //       })
    //     }
    //   });
    // }
    /**
     * 从文件对象数组中找出指定id对应的文件对象
     * @param fileList 文件对象数组
     * @param idList id数组
     */
    Helper.findFileListById = function (fileList, ids) {
        if (!ids || ids.length == 0) {
            return [];
        }
        var newFileList = [];
        for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
            var file = fileList_1[_i];
            for (var _a = 0, ids_1 = ids; _a < ids_1.length; _a++) {
                var id = ids_1[_a];
                if (file.id == id) {
                    newFileList.push(file);
                }
            }
        }
        return newFileList;
    };
    Helper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_3__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_1__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_2__services_session__["a" /* Session */]])
    ], Helper);
    return Helper;
}());

//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validators__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__jpush_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__face_service__ = __webpack_require__(965);
/* unused harmony reexport FileService */
/* unused harmony reexport Helper */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__http_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__logger__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__native_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__session__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__storage_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__utility__["a"]; });
/* unused harmony reexport Validators */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__jpush_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_10__face_service__["a"]; });












//# sourceMappingURL=services.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
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











/*
  Generated class for the CacheProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CacheProvider = (function () {
    function CacheProvider(http, events, storageService, file, nativeService, logger, session) {
        this.http = http;
        this.events = events;
        this.storageService = storageService;
        this.file = file;
        this.nativeService = nativeService;
        this.logger = logger;
        this.session = session;
        this.ImgArray = [];
        this.cacheDirctory = ''; //缓存路径
        this.cacheSize = 0;
        this.CountDown = {};
    }
    CacheProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ImgArray, cacheSize;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.cacheDirctory = this.file.dataDirectory + 'imageCache/';
                        return [4 /*yield*/, this.storageService.getItem('ImgUrlArray')];
                    case 1:
                        ImgArray = _a.sent();
                        if (ImgArray && this.ImgArray)
                            this.ImgArray.concat(ImgArray);
                        return [4 /*yield*/, this.storageService.getItem(__WEBPACK_IMPORTED_MODULE_1__services_constants__["E" /* STORAGE_KEY */].DATA.CACHE_SIZE)];
                    case 2:
                        cacheSize = _a.sent();
                        if (cacheSize && typeof (cacheSize) == "number")
                            this.cacheSize += cacheSize;
                        return [2 /*return*/];
                }
            });
        });
    };
    CacheProvider.prototype.reloadImage = function (url) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) { return __awaiter(_this, void 0, void 0, function () {
            var fileName, checkResult, removeResult, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!url) {
                            observer.error(false);
                            return [2 /*return*/];
                        }
                        fileName = url.split("/").pop();
                        fileName = fileName.toLowerCase();
                        if (fileName.lastIndexOf('.jpg') > -1) {
                            fileName = fileName.substring(0, fileName.lastIndexOf('.jpg') + 4);
                        }
                        else if (fileName.lastIndexOf('.jpeg') > -1) {
                            fileName = fileName.substring(0, fileName.lastIndexOf('.jpeg') + 5);
                        }
                        else if (fileName.lastIndexOf('.png') > -1) {
                            fileName = fileName.substring(0, fileName.lastIndexOf('.png') + 4);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 6, 7]);
                        return [4 /*yield*/, this.file.checkFile(this.cacheDirctory, fileName)];
                    case 2:
                        checkResult = _a.sent();
                        if (!checkResult) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.file.removeFile(this.cacheDirctory, fileName)];
                    case 3:
                        removeResult = _a.sent();
                        if (removeResult) {
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1 = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        this.nativeService.download(url, this.cacheDirctory, fileName).subscribe();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        }); });
    };
    CacheProvider.prototype.getImagePath = function (url) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
            if (!url) {
                observer.error(false);
                return;
            }
            var fileName = url.split("/").pop();
            fileName = fileName.toLowerCase();
            if (fileName.lastIndexOf('.jpg') > -1) {
                fileName = fileName.substring(0, fileName.lastIndexOf('.jpg') + 4);
            }
            else if (fileName.lastIndexOf('.jpeg') > -1) {
                fileName = fileName.substring(0, fileName.lastIndexOf('.jpeg') + 5);
            }
            else if (fileName.lastIndexOf('.png') > -1) {
                fileName = fileName.substring(0, fileName.lastIndexOf('.png') + 4);
            }
            _this.nativeService.checkFile(_this.cacheDirctory, fileName).subscribe(function (check) {
                if (check) {
                    var itemSrc = _this.cacheDirctory + fileName;
                    if (_this.nativeService.isIos()) {
                        itemSrc = itemSrc.replace(/^file:\/\//, '');
                    }
                    observer.next(itemSrc);
                }
                else {
                    _this.nativeService.download(url, _this.cacheDirctory, fileName).subscribe(function (res) {
                        _this.addImageCache(res.fileName, res.fileSize);
                    });
                    observer.error(false);
                }
            });
        });
    };
    //将图片转成base64
    CacheProvider.prototype.loadedImageOnBase64 = function (url) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
            if (!url) {
                observer.error(false);
                return;
            }
            var fileName = url.split("/").pop();
            fileName = fileName.toLowerCase();
            if (fileName.lastIndexOf('.jpg') > -1) {
                fileName = fileName.substring(0, fileName.lastIndexOf('.jpg') + 4);
            }
            else if (fileName.lastIndexOf('.jpeg') > -1) {
                fileName = fileName.substring(0, fileName.lastIndexOf('.jpeg') + 5);
            }
            else if (fileName.lastIndexOf('.png') > -1) {
                fileName = fileName.substring(0, fileName.lastIndexOf('.png') + 4);
            }
            _this.nativeService.checkFile(_this.cacheDirctory, fileName).subscribe(function (check) {
                if (check) {
                    _this.nativeService.convertImgToBase64(_this.cacheDirctory + fileName).subscribe(function (result) {
                        observer.next(result);
                    }, function (error) {
                        _this.nativeService.download(url, _this.cacheDirctory, fileName).subscribe(function (res) {
                            _this.addImageCache(res.fileName, res.fileSize);
                        });
                        observer.error(error);
                    });
                }
                else {
                    _this.nativeService.download(url, _this.cacheDirctory, fileName).subscribe(function (res) {
                        _this.addImageCache(res.fileName, res.fileSize);
                    });
                    observer.error(false);
                }
            });
        });
    };
    //添加图片缓存
    CacheProvider.prototype.addImageCache = function (fileName, cacheSize) {
        if (typeof (cacheSize) == "number") {
            this.cacheSize += cacheSize;
        }
        if (!this.ImgArray)
            this.ImgArray = [];
        if (fileName)
            this.ImgArray.push(fileName);
        this.storageService.setItem('ImgUrlArray', this.ImgArray);
        this.storageService.setItem(__WEBPACK_IMPORTED_MODULE_1__services_constants__["E" /* STORAGE_KEY */].DATA.CACHE_SIZE, this.cacheSize);
    };
    //清除图片缓存
    CacheProvider.prototype.clearImageCache = function () {
        var _this = this;
        this.file.removeRecursively(this.file.dataDirectory, 'imageCache').then(function (res) {
            _this.storageService.setItem(__WEBPACK_IMPORTED_MODULE_1__services_constants__["E" /* STORAGE_KEY */].DATA.CACHE_SIZE, 0);
            //清除缓存图片
            _this.storageService.setItem("ImgUrlArray", []);
            _this.cacheSize = 0;
            _this.ImgArray = [];
            _this.events.publish('cache:clear-image');
        }).catch(function (err) {
            _this.logger.log(JSON.stringify(err), 'removeFile err');
        });
    };
    /**
     * 设置倒计时
     * @param key 倒计时key
     * @param countdown 倒计时时间（s）
     */
    CacheProvider.prototype.setCountDown = function (key, countdown) {
        this.CountDown[key] = countdown;
    };
    CacheProvider.prototype.getCountDown = function (key) {
        return this.CountDown[key] || 0;
    };
    /**
     * 识别二维码
     * @param imageUrl 图片路径或base64
     */
    CacheProvider.prototype.decodeQRCode = function (imageUrl) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].create(function (observer) {
            // if(!Utility.isUrl(imageUrl)){
            //   observer.error(""); 
            // }
            //第一次解析二维码
            if (!_this.nativeService.isMobile()) {
                observer.error('');
                return;
            }
            ;
            qrcode.decode(imageUrl);
            qrcode.callback = function (firstDecodeResult) {
                if (__WEBPACK_IMPORTED_MODULE_2__services_utility__["a" /* Utility */].isUrl(firstDecodeResult)) {
                    observer.next(firstDecodeResult);
                }
                else {
                    if (!__WEBPACK_IMPORTED_MODULE_2__services_utility__["a" /* Utility */].isUrl(imageUrl)) {
                        _this.nativeService.convertImgToBase64(imageUrl).subscribe(function (result) {
                            qrcode.decode(result);
                            qrcode.callback = function (secondDecodeResult) {
                                if (__WEBPACK_IMPORTED_MODULE_2__services_utility__["a" /* Utility */].isUrl(secondDecodeResult)) {
                                    observer.next(secondDecodeResult);
                                }
                                else {
                                    observer.error("");
                                }
                            };
                        }, function (error) {
                            observer.error(error);
                        });
                    }
                    else {
                        //第一次解析失败,转成base64再解析一次
                        _this.loadedImageOnBase64(imageUrl).subscribe(function (base64) {
                            qrcode.decode(base64);
                            qrcode.callback = function (secondDecodeResult) {
                                if (__WEBPACK_IMPORTED_MODULE_2__services_utility__["a" /* Utility */].isUrl(secondDecodeResult)) {
                                    observer.next(secondDecodeResult);
                                }
                                else {
                                    observer.error("");
                                }
                            };
                        });
                    }
                }
            };
        });
    };
    /**
     *  取得社群本地设置
     */
    CacheProvider.prototype.getSocialSetting = function () {
        var _this = this;
        var result = {
            showSocial: false,
            showMass: false
        };
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _enable_local_setting_social, _a, _b, e_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.storageService.getItem(__WEBPACK_IMPORTED_MODULE_1__services_constants__["E" /* STORAGE_KEY */].SETTING.ENABLE_LOCAL_SETTING_SOCIAL)];
                    case 1:
                        _enable_local_setting_social = _c.sent();
                        if (!_enable_local_setting_social) return [3 /*break*/, 4];
                        _a = result;
                        return [4 /*yield*/, this.storageService.getItem(__WEBPACK_IMPORTED_MODULE_1__services_constants__["E" /* STORAGE_KEY */].SETTING.SHOWMASS)];
                    case 2:
                        _a.showMass = _c.sent();
                        _b = result;
                        return [4 /*yield*/, this.storageService.getItem(__WEBPACK_IMPORTED_MODULE_1__services_constants__["E" /* STORAGE_KEY */].SETTING.SHOWSOCIAL)];
                    case 3:
                        _b.showSocial = _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (this.session.user) {
                            result.showMass = __WEBPACK_IMPORTED_MODULE_2__services_utility__["a" /* Utility */].boolean(this.session.user.showMass);
                            result.showSocial = __WEBPACK_IMPORTED_MODULE_2__services_utility__["a" /* Utility */].boolean(this.session.user.showSocial);
                        }
                        _c.label = 5;
                    case 5:
                        resolve(result);
                        return [3 /*break*/, 7];
                    case 6:
                        e_2 = _c.sent();
                        reject(e_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); });
    };
    CacheProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_0__services_session__["a" /* Session */]])
    ], CacheProvider);
    return CacheProvider;
}());

//# sourceMappingURL=cache-provider.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session__ = __webpack_require__(19);
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





/*
  Generated class for the WorkflowProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WorkflowProvider = (function () {
    function WorkflowProvider(http, httpService, session, storage) {
        this.http = http;
        this.httpService = httpService;
        this.session = session;
        this.storage = storage;
    }
    //取待辦任務
    WorkflowProvider.prototype.getTodoTask = function (MobileTaskOnly) {
        var seq = this.httpService.post('MobileWF/TodoTasks', true, {
            "Lang": this.session.language,
            "MobileTaskOnly": MobileTaskOnly
        }, true).share();
        return seq;
    };
    //取已辦任務
    WorkflowProvider.prototype.getFinishedTask = function (StartDate, EndDate) {
        var seq = this.httpService.post('MobileWF/FinishedTask', true, {
            "Lang": this.session.language,
            "StartDate": StartDate,
            "EndDate": EndDate
        }).share();
        return seq;
    };
    //取某Model下的簽核任務
    WorkflowProvider.prototype.getTasksByModel = function (ModelName) {
        var seq = this.httpService.post('MobileWF/Tasks', true, {
            "Lang": this.session.language,
            "ModelName": ModelName,
        }).share();
        return seq;
    };
    //取得某條簽核任務的詳細信息
    WorkflowProvider.prototype.getTaskDetails = function (PID, TaskID, ModelName) {
        var seq = this.httpService.post('MobileWF/TaskDeatils', true, {
            "lang": this.session.language,
            "pid": PID,
            "taskID": TaskID,
            "modelName": ModelName
        }).share();
        return seq;
    };
    //取我的單
    WorkflowProvider.prototype.getMyProcess = function (StartDate, EndDate) {
        var seq = this.httpService.post('MobileWF/MyProcess', true, {
            "Lang": this.session.language,
            "StartDate": StartDate,
            "EndDate": EndDate
        }).share();
        seq.subscribe(function (data) {
        }, function (err) {
        });
        return seq;
    };
    //簽單
    WorkflowProvider.prototype.doApproveTask = function (approveTask) {
        var seq = this.httpService.post('MobileWF/ApproveProcessTask', true, Object.assign(approveTask, {
            "Lang": this.session.language,
            "UserCode": this.session.user.employeeInfo.staffNumber
        })).share();
        seq.subscribe(function (data) {
        }, function (err) {
        });
        return seq;
    };
    //取代理設置
    WorkflowProvider.prototype.getAgent = function () {
        var seq = this.httpService.post('MobileWF/AgentSetList', true, {
            "Lang": this.session.language
        }).share();
        seq.subscribe(function (data) {
        }, function (err) {
        });
        return seq;
    };
    //新增代理
    WorkflowProvider.prototype.addAgent = function (UserCode, AgentCode, AgentType, StartDate, EndDate, Remark) {
        var seq = this.httpService.post('MobileWF/AddAgent', true, {
            "Lang": this.session.language,
            "UserCode": UserCode,
            "AgentCode": AgentCode,
            "AgentType": AgentType,
            "StartDate": StartDate,
            "EndDate": EndDate,
            "Remark": Remark,
        }).share();
        seq.subscribe(function (data) {
        }, function (err) {
        });
        return seq;
    };
    //刪除代理
    WorkflowProvider.prototype.deleteAgent = function (AgentGuid) {
        var seq = this.httpService.post('MobileWF/DeleteAgent', true, {
            "Lang": this.session.language,
            "AgentGuid": AgentGuid,
        }).share();
        seq.subscribe(function (data) {
        }, function (err) {
        });
        return seq;
    };
    /**
     * 獲取历史代理人
     */
    WorkflowProvider.prototype.AgentHisList = function () {
        var seq = this.httpService.post('MobileWF/AgentHisList', true, {
            "Lang": this.session.language,
        }).share();
        seq.subscribe(function (data) {
        }, function (err) {
        });
        return seq;
    };
    /**
     * 獲取历史代理人
     */
    WorkflowProvider.prototype.UserName = function (userCode) {
        var seq = this.httpService.post('MobileWF/UserName', true, {
            "Lang": this.session.language,
            "userCode": userCode
        }).share();
        seq.subscribe(function (data) {
        }, function (err) {
        });
        return seq;
    };
    WorkflowProvider.prototype.getCertSubjectName = function (cert) {
        if (!cert.subject) {
            return '';
        }
        var res = cert.subject.find(function (x) { return x.shortName === 'CN'; });
        if (res && res.value) {
            return res.value;
        }
        else {
            return '';
        }
    };
    /**
     * 获取证书信息
     */
    WorkflowProvider.prototype.getCertification = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.getItem(this.session.certKey)];
                    case 1:
                        _a.cert = _b.sent();
                        if (!this.cert) {
                            reject({
                                errcode: -1,
                                msg: 'cert is invalid'
                            });
                            return [2 /*return*/];
                        }
                        // console.log(this.getCertSubjectName(this.cert), this.getCertSubjectName(this.cert) == '朱優良' , this.getCertSubjectName(this.cert) == this.session.user.employeeName) 
                        if (!this.session.user || !this.session.user.employeeInfo) {
                            reject({
                                errcode: -5,
                                msg: 'current user is null'
                            });
                            return [2 /*return*/];
                        }
                        else if (this.getCertSubjectName(this.cert) != this.session.user.employeeInfo.employeeName) {
                            reject({
                                errcode: -6,
                                msg: 'cert user name is not match current user'
                            });
                            return [2 /*return*/];
                        }
                        if (!this.cert.password) {
                            reject({
                                errcode: -2,
                                msg: 'password is empty'
                            });
                            return [2 /*return*/];
                        }
                        if (this.cert.validity && this.cert.validity.notAfter) {
                            if (new Date(this.cert.validity.notAfter).getTime() < new Date().getTime()) {
                                reject({
                                    errcode: -3,
                                    msg: 'certificate is invalid'
                                });
                                return [2 /*return*/];
                            }
                        }
                        if (!this.cert.encryptData) {
                            reject({
                                errcode: -4,
                                msg: 'file is invalid'
                            });
                            return [2 /*return*/];
                        }
                        resolve(this.cert);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    // E化联络单PDF（base64）
    WorkflowProvider.prototype.GetProcessPDF = function (PID) {
        var seq = this.httpService.post('MobileWF/GetProcessPDF', true, {
            Lang: this.session.language,
            PID: PID
        }, true).share();
        return seq;
    };
    WorkflowProvider.prototype.GetTmpProcessPDF = function (weburl) {
        var seq = this.httpService.get(weburl, true, {
            Lang: this.session.language,
            PID: weburl
        }, false).share();
        return seq;
    };
    WorkflowProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_0__services_storage_service__["a" /* StorageService */]])
    ], WorkflowProvider);
    return WorkflowProvider;
}());

//# sourceMappingURL=workflow-provider.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_jpush_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_provider__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sqlite_provider__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_provider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widget_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__server_provider__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_deeplinks__ = __webpack_require__(186);
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






















var ConfigProvider = (function () {
    function ConfigProvider(nativeService, httpService, storageService, logger, serverProvider, events, session, translate, http, deeplinks, widgetProvider, handleProvider, userProvider, sqlprovider, messageProvider, jpushService) {
        this.nativeService = nativeService;
        this.httpService = httpService;
        this.storageService = storageService;
        this.logger = logger;
        this.serverProvider = serverProvider;
        this.events = events;
        this.session = session;
        this.translate = translate;
        this.http = http;
        this.deeplinks = deeplinks;
        this.widgetProvider = widgetProvider;
        this.handleProvider = handleProvider;
        this.userProvider = userProvider;
        this.sqlprovider = sqlprovider;
        this.messageProvider = messageProvider;
        this.jpushService = jpushService;
        this.isMobile = false; //是否移动端
        //app更新进度.默认为0,在app升级过程中会改变
        this.updateProgress = -1;
        this.language = 'us';
        this.isInit = true; //是否正在初始化
        this.isShowUpgraderPage = false;
        this.canUpgrade = false;
        this.isIgnore = false;
        this.eventsSet = new Map([]);
    }
    /**
     * 初始化VersionProvider，获取系统语言；获取本地版本；获取最新版本；
     */
    ConfigProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var lang, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.storageService.getItem("language")];
                    case 1:
                        lang = _a.sent();
                        switch (lang) {
                            case 'zh-CN':
                                this.language = 'cn';
                                break;
                            case 'zh-TW':
                                this.language = 'tw';
                                break;
                            default: this.language = 'us';
                        }
                        this.isMobile = this.nativeService.isMobile();
                        if (this.isMobile) {
                            this.nativeService.getVersionNumber().subscribe(function (currentVersionNo) {
                                _this.currentVersionNo = currentVersionNo;
                                _this.storageService.setItem("version", _this.currentVersionNo);
                            });
                            this.getLastestVersion(this.language).subscribe(function (data) {
                                //this.upgradeHint(data.latestVersionNo);
                            }, function (err) {
                                _this.logger.log(JSON.stringify(err), "VersionProvider.getLastestVersion");
                            });
                        }
                        else {
                            this.currentVersionNo = '1.12';
                            this.storageService.setItem("version", '1.12');
                            this.getLastestVersion(this.language).subscribe(function (data) {
                                //this.upgradeHint(data.latestVersionNo);
                            }, function (err) {
                                _this.logger.log(JSON.stringify(err), "VersionProvider.getLastestVersion");
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.logger.log(JSON.stringify(err_1), "this.storageService.getItem(\"language\")");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ;
    /**
     * ANDROID：获取后台版本
     * IOS：获取APP STORE版本
     * @param language 语言
     */
    ConfigProvider.prototype.getLastestVersion = function (language) {
        var _this = this;
        var isEmulateIOS = true;
        return __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"].create(function (observer) {
            if (_this.nativeService.isAndroid()) {
                var seq = _this.httpService.post('Version/LatestVersion', true, {
                    "versionType": 'Android',
                    "Lang": language
                }, true).share().subscribe(function (data) {
                    if (data.errcode == 0) {
                        _this.latestVersionNo = data.result.versionNumber;
                        _this.lastVersionInfo = data.result;
                        _this.lastVersionInfo.releaseNotes = data.result.description;
                        _this.appDownloadPageUrl = _this.serverProvider.AppDownloadPage();
                        observer.next(_this.fillData());
                    }
                }, function (err) {
                    observer.error(err);
                    _this.logger.log(JSON.stringify(err), "Version/LatestVersion");
                });
            }
            else if (_this.nativeService.isIos()) {
                //调用苹果提供的API获取版本号
                var url = "https://itunes.apple.com/" + language + "/lookup?id=" + _this.serverProvider.AppStoreId();
                var seq = _this.httpService.post(url, true, { "id": __WEBPACK_IMPORTED_MODULE_10__services_constants__["a" /* APPLE_STORE_APPID */] }, true).share();
                seq.subscribe(function (data) {
                    _this.fillValue(data);
                    observer.next(_this.fillData());
                }, function (err) {
                    _this.logger.log(JSON.stringify(err), "https://itunes.apple.com/" + language + "/lookup?id=" + _this.serverProvider.AppStoreId());
                });
            }
            else if (isEmulateIOS) {
                //调用苹果提供的API获取版本号
                var url = "https://itunes.apple.com/" + language + "/lookup?id=" + _this.serverProvider.AppStoreId();
                var seq = _this.httpService.post(url, true, { "id": __WEBPACK_IMPORTED_MODULE_10__services_constants__["a" /* APPLE_STORE_APPID */] }, true).share();
                seq.subscribe(function (data) {
                    _this.fillValue(data);
                    observer.next(_this.fillData());
                }, function (err) {
                    _this.logger.log(JSON.stringify(err), "https://itunes.apple.com/" + language + "/lookup?id=" + _this.serverProvider.AppStoreId());
                });
            }
            else {
                _this.httpService.post('Version/LatestVersion', true, {
                    "versionType": 'Android',
                    "Lang": language
                }, true).share().subscribe(function (data) {
                    if (data.errcode == 0) {
                        _this.latestVersionNo = data.result.versionNumber;
                        _this.lastVersionInfo = data.result;
                        _this.lastVersionInfo.releaseNotes = data.result.description;
                        _this.appDownloadPageUrl = _this.serverProvider.AppDownloadPage();
                        observer.next(_this.fillData());
                    }
                }, function (err) {
                });
            }
        });
    };
    ConfigProvider.prototype.fillData = function () {
        this.events.publish('version:got-globalSetting');
        return {
            latestVersionNo: this.latestVersionNo,
            lastVersionInfo: this.lastVersionInfo,
            appDownloadPageUrl: this.appDownloadPageUrl
        };
    };
    ConfigProvider.prototype.fillValue = function (data) {
        if (data.errcode == 0 && data.result.resultCount > 0) {
            this.latestVersionNo = data.result.results[0].version;
            this.appDownloadPageUrl = data.result.results[0].trackViewUrl;
            this.lastVersionInfo = data.result.results[0];
        }
    };
    /**
     * 更新提示，可忽略
     * @param versionNumber 最新版本号
     */
    ConfigProvider.prototype.upgradeHint = function (versionNumber) {
        var _this = this;
        this.storageService.getItem("isIgnore" + versionNumber).then(function (isIgnore) {
            if (!isIgnore && __WEBPACK_IMPORTED_MODULE_11__services_utility__["a" /* Utility */].checkNewVersion(versionNumber, _this.currentVersionNo)) {
                _this.canUpgrade = true;
                _this.events.publish('version:upgrade-available', function () { });
            }
        });
    };
    ConfigProvider.prototype.getSeverVersion = function () {
        return this.httpService.get(__WEBPACK_IMPORTED_MODULE_10__services_constants__["q" /* HOT_CONTENT_URL */].FILE_URL, false, null, true);
    };
    /**
     * 获取全局设置中android upgraderUrl
     */
    ConfigProvider.prototype.getGlobalSettings = function () {
        var seq = this.httpService.post('Config/GlobleSettings', true, {
            "Lang": this.session.language,
            "type": "frontend"
        }, true).share();
        seq.subscribe(function (data) {
            if (data.errcode == 0) {
            }
        }, function (err) {
            console.error('Config/GlobleSettings', JSON.stringify(err));
        });
        return seq;
    };
    ConfigProvider.prototype.getCurrentVersionNo = function () {
        return this.currentVersionNo;
    };
    ConfigProvider.prototype.getLatestVersionNo = function () {
        return this.latestVersionNo;
    };
    ConfigProvider.prototype.getLastVersionInfo = function () {
        return this.lastVersionInfo;
    };
    /**
   * 获取多语言文本
   */
    ConfigProvider.prototype.getLangContext = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var defaultOption = { "Lang": this.session.language };
        Object.assign(defaultOption, options);
        var seq = this.httpService.post('Config/LangContext', true, defaultOption, true).share();
        seq.subscribe(function (data) {
            if (data.errcode == 0) {
                _this.session.LangContexts = [];
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.fieldName.toLowerCase() == 'iproudname' || item.fieldName.toLowerCase() == 'widgetname') {
                        if (item.keyId == 1)
                            item.keyId = 0;
                        _this.session.LangContexts.push(item);
                    }
                }
                _this.events.publish('refreshSessionName:LangChanged');
            }
        }, function (err) {
            console.error('Config/LangContext', JSON.stringify(err));
        });
        return seq;
    };
    /**
     * 收集用户行为
     * @param PageName 页面名称
     * @param Action 动作
     * @param Data 数据
     */
    ConfigProvider.prototype.Behavior = function (PageName, Action, Data) {
        var defaultOption = {
            "UserId": this.session.userId,
            "PageName": PageName,
            "Action": Action,
            "Data": Data
        };
        var seq = this.httpService.post('Config/Behavior', true, defaultOption, true).share();
        seq.subscribe(function (data) {
        }, function (err) {
            console.error('Config/LangContext', JSON.stringify(err));
        });
        return seq;
    };
    /**
     * 更改语言设置
     * @param lang
     */
    ConfigProvider.prototype.changeLanguage = function (lang, isNotRefresh) {
        this.userProvider.privateSetting([{
                "name": "Lang",
                "value": lang
            }]);
        this.session.language = lang;
        this.storageService.setItem("language", lang);
        this.translate.currentLoader = new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](this.http, './assets/i18n/', '.json');
        this.translate.use(lang);
        this.events.publish('lang:changed', { isNotRefresh: isNotRefresh, language: lang }); //需要刷新主页语言
        this.getLangContext().subscribe();
    };
    ConfigProvider.prototype.AfterNewEmployeeBind = function (inCompanyDateStr, siteCode) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"](function (observe) {
            if (inCompanyDateStr) {
                var inCompanyDate = new Date(inCompanyDateStr).getTime();
                var today = new Date().getTime();
                var expireMills = 3 * 24 * 60 * 60 * 1000;
                // this.storageService.getItem('newEmployeeNotice').then(res=>{
                if (inCompanyDate + expireMills > today) {
                    /**判断session中是否已经获取到globalSetting，若没有，则从服务器中获取后再发送新员工指示。 */
                    if (!_this.session.globalSetting) {
                        _this.getGlobalSettings().subscribe(function (res) {
                            _this.session.globalSetting = res.result;
                            var result = _this._sendNewEmployeeNotice(res.result.siteCode);
                            observe.next(result ? 'Send message successfully!' : 'No entry guidance in the site, please contact the administrator to add!');
                        });
                    }
                    else {
                        var result = _this._sendNewEmployeeNotice(siteCode);
                        observe.next(result ? 'Send message successfully!' : 'No entry guidance in the site, please contact the administrator to add!');
                    }
                }
                else {
                    observe.next('Not NewEmployee!');
                }
                // })
            }
            else {
                observe.next('inCompanyDate is Empty!');
            }
        });
    };
    ConfigProvider.prototype._sendNewEmployeeNotice = function (siteCode) {
        if (!siteCode)
            return false;
        for (var _i = 0, _a = this.session.globalSetting; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.name.toLowerCase() == ('newemp-' + siteCode.toLowerCase())) {
                var value = {};
                value['imageUrl'] = item.value;
                var extras = {
                    widgetId: value.widgetId || 0,
                    messageId: value.messageId || 'newEmployee:' + new Date().getTime(),
                    widgetName: value.widgetName || 'iProud',
                    formatType: value.formatType || 'image',
                    imageUrl: value.imageUrl,
                    redirectUrl: value.redirectUrl,
                    groudId: value.groudId,
                    senderId: value.senderId,
                    senderName: value.senderName,
                    senderAvator: value.senderAvator,
                    fromType: value.fromType || 'AdminConsole',
                };
                this.events.publish('iProud.receiveNotification', extras);
                // this.nativeService.showToast(this.translate.instant('sd') + 'test')
                this.storageService.setItem('newEmployeeNotice', true);
                return true;
            }
        }
        return false;
    };
    ConfigProvider.prototype.ConfigDeeplinks = function (nav) {
        var _this = this;
        this.deeplinks.route({
            '/about-us/:userid': 'AboutPage',
            '/webview/:url': 'webview'
        }).subscribe(function (match) {
            // match.$route - the route we matched, which is the matched entry from the arguments to route()
            // match.$args - the args passed in the link
            // match.$link - the full link data
            _this.handleProvider.generate('deeplink match', -1, match);
            var route = match.$route;
            var args = match.$args;
            var link = match.$link;
            if ('webview' == route) {
                var page = {
                    url: args.url,
                    options: {
                        allowCopyLink: true,
                        allowOpenInBrowser: true,
                        canShare: true,
                        useNativeBrowser: ''
                    }
                };
                _this.widgetProvider.openWebpage(page, nav);
            }
            else {
                nav.push(route, args);
            }
        }, function (nomatch) {
            // nomatch.$link - the full link data 
            _this.handleProvider.generate('deeplink no match', -1, nomatch);
        });
    };
    ConfigProvider.prototype.initDatabase = function () {
        var _this = this;
        if (this.sqlprovider.isInit)
            return;
        this.sqlprovider.init(this.session.userId).subscribe(function (res) {
            _this.events.publish('database:initialization'); //初始成功后发布事件
            _this.messageProvider.init().then(function () {
                _this.jpushService.initJpush(); //初始化极光推送 
                _this.messageProvider.getMessageMissing().subscribe(function (res) {
                    if (res.errcode == 0 && res.result) {
                        var i = 0;
                        var _loop_1 = function (extra) {
                            setTimeout(function () {
                                _this.events.publish('iProud.receiveNotification', extra);
                            }, i * 100);
                        };
                        for (var _i = 0, _a = res.result; _i < _a.length; _i++) {
                            var extra = _a[_i];
                            _loop_1(extra);
                        }
                        i++;
                    }
                });
            });
        }, function (err) {
            _this.handleProvider.generate('init', -1, err);
        });
    };
    ConfigProvider.prototype.subscribeEvent = function (handler, handleId, array, callback) {
        var _this = this;
        if (!handleId)
            return;
        if (array && array.length > 0) {
            array.forEach(function (eventName) {
                var canAddEvent = _this.addEvents(handleId, eventName);
                if (canAddEvent) {
                    handler.events.subscribe(eventName, function () {
                        callback && callback.func(callback.params);
                    });
                }
            });
        }
    };
    ConfigProvider.prototype.addEvents = function (handleId, eventName) {
        var eventlist = this.eventsSet.get(handleId) || [];
        if (eventlist.findIndex(function (p) { return p == eventName; }) == -1) {
            eventlist.push(eventName);
            this.eventsSet.set(handleId, eventlist);
            return true;
        }
        return false;
    };
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_16__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_15__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_17__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_14__services_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_12__server_provider__["a" /* ServerProvider */],
            __WEBPACK_IMPORTED_MODULE_18_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_5__widget_provider__["a" /* WidgetProvider */],
            __WEBPACK_IMPORTED_MODULE_4__handle_handle__["a" /* HandleProvider */],
            __WEBPACK_IMPORTED_MODULE_3__user_provider__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__sqlite_provider__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_1__message_provider__["a" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_0__services_jpush_service__["a" /* JPushService */]])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config-provider.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialProvider = (function () {
    function SocialProvider(httpService, session) {
        this.httpService = httpService;
        this.session = session;
    }
    /**
     * 获取个人social信息
     */
    SocialProvider.prototype.getProfiles = function () {
        var _this = this;
        var TimeZone = (-new Date().getTimezoneOffset() / 60);
        var seq = this.httpService.post('Social/Profiles', true, { "lang": this.session.language, TimeZone: TimeZone }, true).share();
        seq.subscribe(function (data) {
            if (data && data.result && data.result.length > 0) {
                _this.socialProfiles = data.result[0];
            }
        });
        return seq;
    };
    /**
     * 签到
     * @param checkinDate 签到日期
     */
    SocialProvider.prototype.CheckIn = function (checkinDate) {
        var TimeZone = (-new Date().getTimezoneOffset() / 60);
        var seq = this.httpService.post('Social/CheckIn', true, { Time: checkinDate, TimeZone: TimeZone }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    /**
     * 签到记录
     * @param Year 年份
     * @param Month
     */
    SocialProvider.prototype.CheckInRecord = function (Year, Month) {
        var TimeZone = (-new Date().getTimezoneOffset() / 60);
        var seq = this.httpService.post('Social/CheckInRecord', true, { Year: Year, Month: Month, TimeZone: TimeZone }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    SocialProvider.prototype.CheckInRecord_New = function (Year, Month) {
        var TimeZone = (-new Date().getTimezoneOffset() / 60);
        var seq = this.httpService.post('v2/Social/CheckInRecord', true, { Year: Year, Month: Month, TimeZone: TimeZone }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    /**
     * 获取成就列表
     */
    SocialProvider.prototype.getAchievements = function () {
        var TimeZone = (-new Date().getTimezoneOffset() / 60);
        var seq = this.httpService.post('Social/Achievements', true, { "lang": this.session.language, TimeZone: TimeZone }, true).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    /**
     * 获取人任务清单
     */
    SocialProvider.prototype.getTasks = function () {
        var TimeZone = (-new Date().getTimezoneOffset() / 60);
        var seq = this.httpService.post('Social/Tasks', true, { "lang": this.session.language, TimeZone: TimeZone }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    /**
     * 领取任务积分
     * TaskId不傳，領取所有任務積分
     * @param TaskId 任务id
     */
    SocialProvider.prototype.TakeScore = function (TaskId) {
        var TimeZone = (-new Date().getTimezoneOffset() / 60);
        var param = { TimeZone: TimeZone };
        if (TaskId) {
            param['TaskId'] = TaskId;
        }
        var seq = this.httpService.post('Social/TakeScore', true, param).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    /**
     * 员宝贝明细
     */
    SocialProvider.prototype.CowryDetail = function () {
        var TimeZone = (-new Date().getTimezoneOffset() / 60);
        var seq = this.httpService.post('Social/CowryDetail', true, { "lang": this.session.language, TimeZone: TimeZone }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    /**
     * 歷史積分
     * @param skip 開始條數
     * @param Take 獲取條數
     */
    SocialProvider.prototype.ScoreHis = function (skip, Take, isHideLoading) {
        if (skip === void 0) { skip = 1; }
        if (Take === void 0) { Take = 10; }
        if (isHideLoading === void 0) { isHideLoading = false; }
        var TimeZone = (-new Date().getTimezoneOffset() / 60);
        var seq = this.httpService.post('Social/ScoreHis', true, { "Lang": this.session.language, "Skip": skip, "Take": Take, TimeZone: TimeZone }, isHideLoading).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    SocialProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2__services_session__["a" /* Session */]])
    ], SocialProvider);
    return SocialProvider;
}());

//# sourceMappingURL=social.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_errcode__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preload_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_provider__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AuthProvider = (function () {
    function AuthProvider(httpService, storageService, userProvider, events, nativeService, translate, session, logger, modalCtrl, loadingCtrl, preloadProvider) {
        this.httpService = httpService;
        this.storageService = storageService;
        this.userProvider = userProvider;
        this.events = events;
        this.nativeService = nativeService;
        this.translate = translate;
        this.session = session;
        this.logger = logger;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.preloadProvider = preloadProvider;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    AuthProvider.prototype.login = function (accountInfo) {
        var _this = this;
        accountInfo.password = __WEBPACK_IMPORTED_MODULE_9__services_utility__["a" /* Utility */].md5(accountInfo.password);
        var seq = this.httpService.post('Auth/Login', false, accountInfo).share();
        seq.subscribe(function (data) {
            // If the API returned a successful response, mark the user as logged in
            if (data.errcode == 0) {
                _this.loginSuccessHandle(data);
            }
            else {
                throw Error(data.errmsg);
            }
        }, function (err) {
            _this.logger.log(JSON.stringify(err), 'login');
        });
        return seq;
    };
    AuthProvider.prototype.LoginByWFAccount = function (accountInfo) {
        var _this = this;
        // accountInfo.password = Utility.md5(accountInfo.password);
        var seq = this.httpService.post('Auth/LoginByWFAccount', false, accountInfo).share();
        seq.subscribe(function (data) {
            // If the API returned a successful response, mark the user as logged in
            if (data.errcode == 0) {
                _this.loginSuccessHandle(data);
            }
            else {
                throw Error(data.errmsg);
            }
        }, function (err) {
            _this.logger.log(JSON.stringify(err), 'LoginByWFAccount');
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    AuthProvider.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.httpService.post('Auth/Register', false, {
            "mobilePhone": accountInfo.country + " " + accountInfo.mobilephone,
            "securityCode": accountInfo.verifyCode,
            "lang": this.session.language
        }).share();
        seq.subscribe(function (data) {
            // If the API returned a successful response, mark the user as logged in
            if (data.errcode == 0) {
                _this.loginSuccessHandle(data, false, true);
            }
        }, function (err) {
            _this.logger.log(JSON.stringify(err), 'signup');
        });
        return seq;
    };
    /*
      短信校验登录
    */
    AuthProvider.prototype.onteLogin = function (accountInfo) {
        var _this = this;
        var seq = this.httpService.post('Auth/LoginBySecurityCode', false, {
            "mobilePhone": accountInfo.country + " " + accountInfo.mobilephone,
            "securityCode": accountInfo.verifyCode,
            "lang": this.session.language
        }).share();
        seq.subscribe(function (data) {
            // If the API returned a successful response, mark the user as logged in
            if (data.errcode == 0) {
                _this.loginSuccessHandle(data, false, true);
            }
        }, function (err) {
            _this.logger.log(JSON.stringify(err), 'onteLogin');
        });
        return seq;
    };
    /**
     * 登录成功处理
     */
    AuthProvider.prototype.loginSuccessHandle = function (data, isHideLoading, isRegister) {
        var _this = this;
        this.session.userId = data.result.userId;
        this.session.token = data.result.userToken;
        this.session.expireTime = data.result.expireTime;
        if (data.result && data.result.refreshToken) {
            this.session.refreshToken = data.result.refreshToken;
            // this.storageService.setItem('refreshtoken', this.session.refreshToken);
        }
        // if(this.session.userId==null || this.session.userId==undefined) this.session.userId = data.result.userid;
        // if(this.session.token==null || this.session.token==undefined) this.session.token = data.result.usertoken;
        var tokenObject = { userId: '', userToken: '', refreshToken: '' };
        tokenObject.userId = this.session.userId;
        tokenObject.userToken = this.session.token;
        tokenObject.refreshToken = this.session.refreshToken;
        this.storageService.setItem('tokenObject', tokenObject);
        // this.storageService.setItem('token', this.session.token);
        this.storageService.getItem('enabled-file-cache-' + this.session.userId).then(function (res) {
            if (res === false) {
                _this.session.enabledFileCache = false;
            }
        });
        //预加载是否需要签到
        // this.preloadProvider.IsPunchMember();
        //预加载社群栏目
        this.preloadProvider.getCommunityChannel();
        //预加载首页数据
        this.preloadProvider.getHomeData(isHideLoading);
        //预加载首页数据
        this.preloadProvider.getAllWidget(isHideLoading);
        //预加载个人信息
        this.preloadProvider.getUserInfo(isRegister);
        //更新用户设备Id
        //this.nativeService.showToast(this.session.deviceId);
        if (this.session.deviceId) {
            //this.nativeService.alert(this.session.deviceId);
            this.userProvider.updateDeviceId(this.session.deviceId).subscribe();
        }
        // 更新用户WeChatId
        // if (this.session.unionId) { 
        //   this.userProvider.BindWechatByUnionId(this.session.unionId).subscribe();
        // } 
    };
    /**
     * 刷新userToken
     */
    AuthProvider.prototype.refreshUserToken = function () {
        var _this = this;
        var seq = this.httpService.post('Auth/RefreshUserToken', false, {
            "RefreshToken": this.session.refreshToken,
            "OldToken": this.session.token
        }).share();
        seq.subscribe(function (data) {
            // If the API returned a successful response, mark the user as logged in
            // if (data.errcode == 0) {
            //     this._loginSuccessHandle(data);
            // }
        }, function (err) {
            _this.logger.log(JSON.stringify(err), 'refreshUserToken');
        });
        return seq;
    };
    /**
     * 发送短信验证码之前，先输入验证码
     * @param accountInfo
     * @param countDownKey
     */
    AuthProvider.prototype.sendSecurityCodeBefore = function (inputType, accountInfo, countDownKey, callback) {
        var IdentifyCodeModal = this.modalCtrl.create('IdentifyCodePage', {
            inputType: inputType,
            clientId: accountInfo.clientId || accountInfo.country + " " + accountInfo.mobilephone,
            accountInfo: accountInfo,
            countDownKey: countDownKey,
        }, {
            showBackdrop: true,
            cssClass: 'identify-code-backdrop',
            enterAnimation: 'modal-scale-enter',
            leaveAnimation: 'modal-scale-leave'
        });
        IdentifyCodeModal.present();
        IdentifyCodeModal.onDidDismiss(function () {
            callback && callback();
        });
    };
    /**
     * 发送验证码，由此方法统一处理异常。
     * @param accountInfo 用户信息
     */
    AuthProvider.prototype.sendSecurityCode = function (accountInfo, countDownKey) {
        var _this = this;
        var seq = this.httpService.post('Auth/SendSecurityCode', true, {
            "mobilePhone": accountInfo.country + " " + accountInfo.mobilephone,
            "lang": this.session.language
        }).share();
        seq.subscribe(function (data) {
            if (data.errcode == 0) {
                _this.nativeService.showToast(_this.translate.instant("SIGNUP_VERIFYCODE_ISSENT"));
                _this.events.publish('countDown:send-security-code:' + countDownKey);
            }
        }, function (err) {
            if (err.errcode == 6125) {
                // this.sendCodeErrorString = err.errmsg
                _this.nativeService.alert(_this.translate.instant("VERIFICATION_CODE_SENT"));
            }
            else if (err.errcode == 6112) {
            }
            _this.logger.log(JSON.stringify(err), 'sendSecurityCode');
        });
        return seq;
    };
    AuthProvider.prototype.setPassword = function (input) {
        //let seq = this.httpService.get('User/setPassword', true, input).share();
        var _this = this;
        var seq = this.httpService.post('User/setPassword', true, {
            "password": __WEBPACK_IMPORTED_MODULE_9__services_utility__["a" /* Utility */].md5(input.password.toString())
        }).share();
        // seq.subscribe((data: any) => {
        //   this.session.user = data.result;
        // });Password
        seq.subscribe(function (data) {
            // If the API returned a successful response, mark the user as logged in
            if (data.errcode == 0) {
                _this.nativeService.showToast(_this.translate.instant("SET_PASSWORD_ISSENT"));
            }
        }, function (err) {
            _this.logger.log(JSON.stringify(err), 'setPassword');
        });
        return seq;
    };
    /** 获取AuthCode */
    AuthProvider.prototype.getAuthCode = function (AppId, URL) {
        if (!AppId)
            AppId = __WEBPACK_IMPORTED_MODULE_9__services_utility__["a" /* Utility */].getQueryByName(URL, 'appid') || "0";
        var seq = this.httpService.post('v2/Auth/GetCode', true, { AppId: AppId }).share();
        return seq;
    };
    /**
     * 登录微信
     * @param Code 微信code
     */
    AuthProvider.prototype.LoginByWechat = function (Code) {
        var seq = this.httpService.post('Auth/LoginByWechat', true, {
            Code: Code
        }).share();
        return seq;
    };
    /**
     * 获取微信Code
     */
    AuthProvider.prototype.getWeChatCode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.nativeService.isMobile()) {
                _this.nativeService.isInstallWeChat();
                var loading = _this.loadingCtrl.create({
                    content: "跳转微信登录中...",
                    dismissOnPageChange: true,
                    showBackdrop: true //是否显示遮罩层
                });
                loading.present();
                try {
                    var scope = "snsapi_userinfo", state = "com.fihmb.iproud";
                    // 1. 获取code
                    Wechat.auth(scope, state, function (response) {
                        resolve(response.code);
                    }, function (reason) {
                        reject(reason);
                    });
                }
                catch (error) {
                    console.error(error);
                    reject(error);
                }
                finally {
                    loading.dismiss();
                }
            }
            else {
                resolve("061QKBZ12AhrQW0pY4Z12gVmZ12QKBZd");
            }
        });
    };
    /**
     * 获取验证码
     * @param clientId 客户端id，可传手机号码
     */
    AuthProvider.prototype.MessageCaptcha = function (clientId) {
        var seq = this.httpService.post('Message/Captcha', false, { "clientId": clientId }, true).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    /**
     * 登录，需要验证码
     * @param accountInfo 账号信息
     * @param Captcha 图形验证码
     */
    AuthProvider.prototype.Login2 = function (accountInfo, Captcha) {
        var _this = this;
        var form = __WEBPACK_IMPORTED_MODULE_9__services_utility__["a" /* Utility */].deepCopy(accountInfo);
        form.password = __WEBPACK_IMPORTED_MODULE_9__services_utility__["a" /* Utility */].md5(form.password);
        form.Captcha = Captcha;
        var seq = this.httpService.post('v2/Auth/Login', false, form, false).share();
        seq.subscribe(function (data) {
            setTimeout(function () {
                _this.loginSuccessHandle(data);
                // this.events.publish('Login2:success', data);
            }, 300);
        }, function (err) {
        });
        return seq;
    };
    /**
     * 获取手机验证码，需要传图形验证码
     * @param accountInfo 账号信息
     * @param Captcha 验证码
     */
    AuthProvider.prototype.SendSecurityCode2 = function (accountInfo, Captcha, countDownKey) {
        var _this = this;
        var seq = this.httpService.post('v2/Auth/SendSecurityCode', false, {
            "Lang": this.session.language,
            "MobilePhone": accountInfo.country + " " + accountInfo.mobilephone,
            "Captcha": Captcha
        }, true).share();
        seq.subscribe(function (data) {
            if (data.errcode == 0) {
                setTimeout(function () {
                    _this.nativeService.showToast(_this.translate.instant("SIGNUP_VERIFYCODE_ISSENT"));
                    _this.events.publish('countDown:send-security-code:' + countDownKey);
                }, 300);
            }
        }, function (err) {
            //只处理获取手机验证码错误，图形验证码交由验证码页面处理
            if (err.errcode == __WEBPACK_IMPORTED_MODULE_0__services_errcode__["a" /* ErrorCode */].USER.SEND_SECURITY_CODE_FAILED) {
                // this.sendCodeErrorString = err.errmsg
                _this.nativeService.alert(_this.translate.instant("VERIFICATION_CODE_SENT"));
            }
            else if (err.errcode == __WEBPACK_IMPORTED_MODULE_0__services_errcode__["a" /* ErrorCode */].USER.MOBILE_FORMAT_ERROR) {
                _this.nativeService.alert("手机格式不正确");
            }
        });
        return seq;
    };
    /**
     * 获取手机验证码，需要传图形验证码
     * @param accountInfo 账号信息
     * @param Captcha 图形验证码
     */
    AuthProvider.prototype.LoginByWFAccount2 = function (accountInfo, Captcha) {
        var _this = this;
        accountInfo.Captcha = Captcha;
        var seq = this.httpService.post('v2/Auth/LoginByWFAccount', false, accountInfo, false).share();
        seq.subscribe(function (data) {
            setTimeout(function () {
                _this.loginSuccessHandle(data);
                // this.events.publish('LoginByWFAccount2:success', data);
            }, 300);
        }, function (err) {
        });
        return seq;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_8__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_12__user_provider__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_11__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_1__services_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__preload_provider__["a" /* PreloadProvider */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth-provider.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_message_date__ = __webpack_require__(968);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cache_format_cache_format__ = __webpack_require__(969);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__date_message_date__["a" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_2__cache_format_cache_format__["a" /* CacheFormatPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__date_message_date__["a" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_2__cache_format_cache_format__["a" /* CacheFormatPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DLRecruitingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DLRecruitingProvider = (function () {
    function DLRecruitingProvider(httpService, session, events, nativeService, storageService) {
        this.httpService = httpService;
        this.session = session;
        this.events = events;
        this.nativeService = nativeService;
        this.storageService = storageService;
    }
    DLRecruitingProvider.prototype.GetSiteList = function () {
        var seq = this.httpService.post('DLRecruiting/GetSiteList', true, { "lang": this.session.language }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    DLRecruitingProvider.prototype.GetJobList = function (SiteCode) {
        var seq = this.httpService.post('DLRecruiting/GetJobList', true, { "lang": this.session.language }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    DLRecruitingProvider.prototype.GetJobDescription = function (SiteCode) {
        var seq = this.httpService.post('DLRecruiting/GetJobDescription', true, { "lang": this.session.language, "SiteCode": SiteCode }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    DLRecruitingProvider.prototype.GetPostAndInterviewDate = function (SiteCode) {
        var seq = this.httpService.post('DLRecruiting/GetPostAndInterviewDate', true, { "lang": this.session.language, "SiteCode": SiteCode }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    DLRecruitingProvider.prototype.GetFAQInfo = function (SiteCode) {
        var seq = this.httpService.post('DLRecruiting/GetFAQInfo', true, { "lang": this.session.language, "SiteCode": SiteCode }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    DLRecruitingProvider.prototype.SaveApplyJob = function (ApplyJobInput) {
        var seq = this.httpService.post('DLRecruiting/SaveApplyJob', true, ApplyJobInput).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    DLRecruitingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_5__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_0__services_storage_service__["a" /* StorageService */]])
    ], DLRecruitingProvider);
    return DLRecruitingProvider;
}());

//# sourceMappingURL=dl-recruiting-provider.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IDLRecruitingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IDLRecruitingProvider = (function () {
    function IDLRecruitingProvider(httpService, session, events, nativeService, storageService) {
        this.httpService = httpService;
        this.session = session;
        this.events = events;
        this.nativeService = nativeService;
        this.storageService = storageService;
    }
    IDLRecruitingProvider.prototype.PostTypes = function () {
        var seq = this.httpService.post('IDLRecruiting/PostTypes', true, { "lang": this.session.language }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    IDLRecruitingProvider.prototype.WorkSites = function () {
        var seq = this.httpService.post('IDLRecruiting/WorkSites', true, { "lang": this.session.language }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    IDLRecruitingProvider.prototype.PostList = function (TenantId, JobTypeId, Skip, Take, isHideLoading) {
        var PostsBaseInfo = { "Skip": Skip, "Take": Take, "Lang": "", "TenantId": "", "JobTypeId": "", "SalaryFrom": "", "SalaryTo": "", "PostKey": "" };
        PostsBaseInfo.Lang = this.session.language;
        PostsBaseInfo.TenantId = TenantId || '';
        PostsBaseInfo.JobTypeId = JobTypeId || '';
        var seq = this.httpService.post('IDLRecruiting/PostList', true, PostsBaseInfo, isHideLoading).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    IDLRecruitingProvider.prototype.PostDetail = function (PostId, isHideLoading) {
        var seq = this.httpService.post('IDLRecruiting/PostDetail', true, { "lang": this.session.language, "PostId": PostId }, isHideLoading).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    IDLRecruitingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_5__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_0__services_storage_service__["a" /* StorageService */]])
    ], IDLRecruitingProvider);
    return IDLRecruitingProvider;
}());

//# sourceMappingURL=idl-recruiting-provider.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContentProvider = (function () {
    function ContentProvider(httpService, session, events, nativeService, storageService) {
        this.httpService = httpService;
        this.session = session;
        this.events = events;
        this.nativeService = nativeService;
        this.storageService = storageService;
    }
    ContentProvider.prototype.getParkLifeList = function () {
        var seq = this.httpService.post('Content/Parklife', true, { "lang": this.session.language }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    ContentProvider.prototype.getNewsList = function (subjectId, skip, take, isHideLoading) {
        var subject = {
            "lang": this.session.language,
            "skip": skip || 0,
            "take": take || 10
        };
        if (subjectId) {
            subject['SubjectId'] = subjectId;
        }
        var seq = this.httpService.post('Content/News', true, subject, isHideLoading).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    ContentProvider.prototype.getNewsSubjects = function () {
        var seq = this.httpService.post('Content/NewsSubjects', true, { Lang: this.session.language }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    ContentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_5__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_0__services_storage_service__["a" /* StorageService */]])
    ], ContentProvider);
    return ContentProvider;
}());

//# sourceMappingURL=content-provider.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorCode; });
var ErrorCode = {
    COMMON: {
        UNKNOW: -1,
        SUCCESS: 0,
        NOT_FOUND: 404,
        UNAUTHORIZED: 401,
        TIME_OUT: 408,
        SERVER_ERROR: 500
    },
    TOKEN: {
        TOKEN_EXPIRED: 6000,
        SIGNATURE_INVALID: 6001,
        HEADER_UNDECODE: 6002,
        FORMAT_ERROR: 6003,
        REFRESH_TOKEN_EMPTY: 6004,
        OLD_TOKEN_EMPTY: 6005,
    },
    USER: {
        INACTIVE_USER: 6100,
        USER_NOT_EXIST: 6101,
        EMPLOYEE_INFO_EMPTY: 6102,
        CODE_EXPIRED: 6103,
        CODE_EMPTY: 6104,
        INCORRECT_CODE: 6105,
        MOBILE_EXIST: 6110,
        MOBILE_NOT_EXIST: 6111,
        MOBILE_FORMAT_ERROR: 6112,
        MOBILE_OR_PASSWORD_EMPTY: 6113,
        MOBILE_OR_SECURITY_CODE_EMPTY: 6114,
        ACCOUNT_EMPTY: 6115,
        INCORRECT_ACCOUNT_AND_PASSWORD: 6116,
        INCORRECT_PASSWORD: 6120,
        PASSWORD_EMPTY: 6121,
        INCORRECT_OLD_PASSWORD: 6122,
        SEND_SECURITY_CODE_FAILED: 6125,
        INCORRECT_SECURITY_CODE: 6126,
        VERIFICATION_CODE_EXPIRED: 6127,
        INCORRECT_VERIFICATION_CODE: 6128,
        CREATE_USER_TOKEN_FAILED: 6130,
        USER_T0KEN_EMPTY: 6131,
        NO_IMAGE_DATA: 6136,
        UIMAGE_FORMAT_INVALIED: 6137,
        EMPLOYEENO_OR_IDCARDNO_EMPTY: 6140,
        INCORRECT_MPLOYEENO_OR_IDCARDNO: 6141,
        NICKNAME_EMPTY: 6142,
        Already_BINDED: 6143,
        DEVICE_ID_EMPTY: 6145,
        ALL_PARAMETERS_NOT_EMPTY: 6150,
        SHOULD_BE_NUMERIC: 6151,
    },
    MESSAGE: {
        MESSAGE_TYPE_EMPTY: 6300,
        INVALID_MESSAGE_TYPE: 6301,
        CONTENT_EMPTY: 6302,
        IMAGE_URL_EMPTY: 6303,
        TITLE_EMPTY: 6304,
        INVALID_SEND_TIME: 6305,
        VALUE_EMPTY: 6306,
        NOT_REGISTERRATION_OR_BIND: 6307,
        MEMEBERS_MAXIMUM_NUMBER: 6308,
        TAGS_MAXIMUM_NUMBER: 6309,
        NO_PERMISSION: 6310,
    },
    WIDGET: {
        INCORRECT_PARAMETER: 6400,
        INVALID_WIDGETID: 6401,
        WIDGETID_NOT_EXIST: 6402,
        WIDGETID_OR_WIDGETSECRET_EMPTY: 6403,
        INVALID_WIDGETSECRET: 6404,
    },
    VERSION: {
        VERSION_TYPE_EMPTY: 6500,
    },
    GLOBLE: {
        MISSING_PARAMETERS: 6600
    }
};
// {-1, "unknow error"},
// { 0, "OK"},
// {404, "not found"},
// {401, "unauthorized, not allow to access without token"},
// {408, "request timeout"},
// {500, "internal server error"},
// //Token 60- 
// {6000, "token expired"},
// {6001, "signature validation failed"},
// {6002, "unable to decode the header"},
// {6003, "incorrect token format"},
// {6004, "refresh token is empty"},
// {6005, "old token is empty"},
// //User 61-  (預留62-)
// {6100, "inactive user"},
// {6101, "the user not exist"},
// {6102, "not found employee info, maybe left or unbind"},
// {6103, "code expired"},
// {6104, "code is empty"},
// {6105, "incorrect code"},
// {6110, "phone number already exist"},
// {6111, "phone number not exist."},
// {6112, "incorect phone number format"},
// {6113, "mobile phone or password is empty"},
// {6114, "mobile phone or security code is empty"},
// {6115, "account is empty"},
// {6116, "incorrect account and password"},
// {6120, "incorrect password"},
// {6121, "password is empty"},
// {6122, "incorrect old password"},
// {6125, "failed to send security code"},
// {6126, "incorrect security code"},  安全码
// {6128, "incorrect verification code"},
// {6127, "verification code expired"}, 图形验证码
// {6130, "failed to create user token"},
// {6131, "user token is empty"},
// {6136, "no image data"},
// {6137, "image format invalid"},
// {6140, "empolyeeno or idcardno is empty"},
// {6141, "incorrect empolyeeno or idcardno"},
// {6142, "nickname is empty"},
// {6143, "Already binded by "},
// {6150, "all parameters value are not allowed to be empty"},
// {6151, "incorect format,the paramter value should be numeric"},
// {6145, "device Id is empty"},
// //Message 63-
// {6300, "message type is empty"},
// {6301, "invalid message type, only support: Text, RichTextImage, Image, HeaderImage, TitleInImage"},
// {6302, "content is empty"},
// {6303, "image url is empty"},
// {6304, "title is empty"},
// {6305, "invalid plan send time(correct format:yyyy-MM-dd HH:mm)"},
// {6306, "not set value for parameter 'Tags' or 'Members',at least one can not be empty)"},
// {6307, "not registration or not bind employee info"},
// {6308, "The maximum number is 1000 at one time for parameter 'Memebers'"},
// {6309, "The maximum number is 20 at one time for parameter 'Tags'"},
// {6310, "No permission:"},
// //widget  64-
// {6400, "incorrect parameter"},
// {6401, "invalid widgetId"},
// {6402, "widgetId not exist"},
// {6403, "widgetId or widgetSecret is empty"},
// {6404, "invalid widgetSecret"}, 
// //version 65-
// {6500, "version type is empty"}, 
// //globle 66---
// { 6600, "missing parameters"}
//workflow簽核
//  { 6820,"workflow api error"},
//  { 6821,"get hash error"},
//  { 6822,"sign PDF error"}  
//# sourceMappingURL=errcode.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinyinService; });
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

/*
  Generated class for the PinyinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SimplizedStr = '皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄';
var TraditionalStr = '皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩';
/**
 * @typedef Option
 * @type Object
 * @property {Boolean} [checkPolyphone=false] 是否检查多音字
 * @property {Number} [charCase=0] 输出拼音的大小写模式，0-首字母大写；1-全小写；2-全大写
 * /
 **/
var PinyinService = (function () {
    /**
     * 构造函数，设置参数并初始化数据
     * @param {Option} [options] 参数对象
     */
    function PinyinService() {
        this.setOptions();
        this.initialize();
    }
    /**
     * 设置参数
     * @param {Option} [options] 参数对象
     */
    PinyinService.prototype.setOptions = function (options) {
        var option = options || {};
        this.options = Object.assign({ checkPolyphone: false, charCase: 0 }, option);
    };
    /**
     * 初始化数据
     */
    PinyinService.prototype.initialize = function () {
        this.char_dict = "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY";
        this.full_dict = {
            "a": "\u554a\u963f\u9515",
            "ai": "\u57c3\u6328\u54ce\u5509\u54c0\u7691\u764c\u853c\u77ee\u827e\u788d\u7231\u9698\u8bf6\u6371\u55f3\u55cc\u5ad2\u7477\u66a7\u7839\u953f\u972d",
            "an": "\u978d\u6c28\u5b89\u4ffa\u6309\u6697\u5cb8\u80fa\u6848\u8c19\u57ef\u63de\u72b4\u5eb5\u6849\u94f5\u9e4c\u9878\u9eef",
            "ang": "\u80ae\u6602\u76ce",
            "ao": "\u51f9\u6556\u71ac\u7ff1\u8884\u50b2\u5965\u61ca\u6fb3\u5773\u62d7\u55f7\u5662\u5c99\u5ed2\u9068\u5aaa\u9a9c\u8071\u87af\u93ca\u9ccc\u93d6",
            "ba": "\u82ad\u634c\u6252\u53ed\u5427\u7b06\u516b\u75a4\u5df4\u62d4\u8dcb\u9776\u628a\u8019\u575d\u9738\u7f62\u7238\u8307\u83dd\u8406\u636d\u5c9c\u705e\u6777\u94af\u7c91\u9c85\u9b43",
            "bai": "\u767d\u67cf\u767e\u6446\u4f70\u8d25\u62dc\u7a17\u859c\u63b0\u97b4",
            "ban": "\u6591\u73ed\u642c\u6273\u822c\u9881\u677f\u7248\u626e\u62cc\u4f34\u74e3\u534a\u529e\u7eca\u962a\u5742\u8c73\u94a3\u7622\u764d\u8228",
            "bang": "\u90a6\u5e2e\u6886\u699c\u8180\u7ed1\u68d2\u78c5\u868c\u9551\u508d\u8c24\u84a1\u8783",
            "bao": "\u82de\u80de\u5305\u8912\u96f9\u4fdd\u5821\u9971\u5b9d\u62b1\u62a5\u66b4\u8c79\u9c8d\u7206\u52f9\u8446\u5b80\u5b62\u7172\u9e28\u8913\u8db5\u9f85",
            "bo": "\u5265\u8584\u73bb\u83e0\u64ad\u62e8\u94b5\u6ce2\u535a\u52c3\u640f\u94c2\u7b94\u4f2f\u5e1b\u8236\u8116\u818a\u6e24\u6cca\u9a73\u4eb3\u8543\u5575\u997d\u6a97\u64d8\u7934\u94b9\u9e41\u7c38\u8ddb",
            "bei": "\u676f\u7891\u60b2\u5351\u5317\u8f88\u80cc\u8d1d\u94a1\u500d\u72c8\u5907\u60eb\u7119\u88ab\u5b5b\u9642\u90b6\u57e4\u84d3\u5457\u602b\u6096\u789a\u9e4e\u8919\u943e",
            "ben": "\u5954\u82ef\u672c\u7b28\u755a\u574c\u951b",
            "beng": "\u5d29\u7ef7\u752d\u6cf5\u8e66\u8ff8\u552a\u5623\u750f",
            "bi": "\u903c\u9f3b\u6bd4\u9119\u7b14\u5f7c\u78a7\u84d6\u853d\u6bd5\u6bd9\u6bd6\u5e01\u5e87\u75f9\u95ed\u655d\u5f0a\u5fc5\u8f9f\u58c1\u81c2\u907f\u965b\u5315\u4ef3\u4ffe\u8298\u835c\u8378\u5421\u54d4\u72f4\u5eb3\u610e\u6ed7\u6fde\u5f3c\u59a3\u5a62\u5b16\u74a7\u8d32\u7540\u94cb\u79d5\u88e8\u7b5a\u7b85\u7be6\u822d\u895e\u8df8\u9ac0",
            "bian": "\u97ad\u8fb9\u7f16\u8d2c\u6241\u4fbf\u53d8\u535e\u8fa8\u8fa9\u8fab\u904d\u533e\u5f01\u82c4\u5fed\u6c74\u7f0f\u7178\u782d\u78a5\u7a39\u7a86\u8759\u7b3e\u9cca",
            "biao": "\u6807\u5f6a\u8198\u8868\u5a4a\u9aa0\u98d1\u98d9\u98da\u706c\u9556\u9573\u762d\u88f1\u9cd4",
            "bie": "\u9cd6\u618b\u522b\u762a\u8e69\u9cd8",
            "bin": "\u5f6c\u658c\u6fd2\u6ee8\u5bbe\u6448\u50a7\u6d5c\u7f24\u73a2\u6ba1\u8191\u9554\u9acc\u9b13",
            "bing": "\u5175\u51b0\u67c4\u4e19\u79c9\u997c\u70b3\u75c5\u5e76\u7980\u90b4\u6452\u7ee0\u678b\u69df\u71f9",
            "bu": "\u6355\u535c\u54fa\u8865\u57e0\u4e0d\u5e03\u6b65\u7c3f\u90e8\u6016\u62ca\u535f\u900b\u74ff\u6661\u949a\u91ad",
            "ca": "\u64e6\u5693\u7924",
            "cai": "\u731c\u88c1\u6750\u624d\u8d22\u776c\u8e29\u91c7\u5f69\u83dc\u8521",
            "can": "\u9910\u53c2\u8695\u6b8b\u60ed\u60e8\u707f\u9a96\u74a8\u7cb2\u9eea",
            "cang": "\u82cd\u8231\u4ed3\u6ca7\u85cf\u4f27",
            "cao": "\u64cd\u7cd9\u69fd\u66f9\u8349\u8279\u5608\u6f15\u87ac\u825a",
            "ce": "\u5395\u7b56\u4fa7\u518c\u6d4b\u5202\u5e3b\u607b",
            "ceng": "\u5c42\u8e6d\u564c",
            "cha": "\u63d2\u53c9\u832c\u8336\u67e5\u78b4\u643d\u5bdf\u5c94\u5dee\u8be7\u7339\u9987\u6c4a\u59f9\u6748\u6942\u69ce\u6aab\u9497\u9538\u9572\u8869",
            "chai": "\u62c6\u67f4\u8c7a\u4faa\u8308\u7625\u867f\u9f87",
            "chan": "\u6400\u63ba\u8749\u998b\u8c17\u7f20\u94f2\u4ea7\u9610\u98a4\u5181\u8c04\u8c36\u8487\u5edb\u5fcf\u6f7a\u6fb6\u5b71\u7fbc\u5a75\u5b17\u9aa3\u89c7\u7985\u9561\u88e3\u87fe\u8e94",
            "chang": "\u660c\u7316\u573a\u5c1d\u5e38\u957f\u507f\u80a0\u5382\u655e\u7545\u5531\u5021\u4f25\u9b2f\u82cc\u83d6\u5f9c\u6005\u60dd\u960a\u5a3c\u5ae6\u6636\u6c05\u9cb3",
            "chao": "\u8d85\u6284\u949e\u671d\u5632\u6f6e\u5de2\u5435\u7092\u600a\u7ec9\u6641\u8016",
            "che": "\u8f66\u626f\u64a4\u63a3\u5f7b\u6f88\u577c\u5c6e\u7817",
            "chen": "\u90f4\u81e3\u8fb0\u5c18\u6668\u5ff1\u6c89\u9648\u8d81\u886c\u79f0\u8c0c\u62bb\u55d4\u5bb8\u741b\u6987\u809c\u80c2\u789c\u9f80",
            "cheng": "\u6491\u57ce\u6a59\u6210\u5448\u4e58\u7a0b\u60e9\u6f84\u8bda\u627f\u901e\u9a8b\u79e4\u57d5\u5d4a\u5fb5\u6d48\u67a8\u67fd\u6a18\u665f\u584d\u77a0\u94d6\u88ce\u86cf\u9172",
            "chi": "\u5403\u75f4\u6301\u5319\u6c60\u8fdf\u5f1b\u9a70\u803b\u9f7f\u4f88\u5c3a\u8d64\u7fc5\u65a5\u70bd\u50ba\u5880\u82aa\u830c\u640b\u53f1\u54e7\u557b\u55e4\u5f73\u996c\u6cb2\u5ab8\u6555\u80dd\u7719\u7735\u9e31\u761b\u892b\u86a9\u87ad\u7b1e\u7bea\u8c49\u8e05\u8e1f\u9b51",
            "chong": "\u5145\u51b2\u866b\u5d07\u5ba0\u833a\u5fe1\u61a7\u94f3\u825f",
            "chou": "\u62bd\u916c\u7574\u8e0c\u7a20\u6101\u7b79\u4ec7\u7ef8\u7785\u4e11\u4fe6\u5733\u5e31\u60c6\u6eb4\u59af\u7633\u96e0\u9c8b",
            "chu": "\u81ed\u521d\u51fa\u6a71\u53a8\u8e87\u9504\u96cf\u6ec1\u9664\u695a\u7840\u50a8\u77d7\u6410\u89e6\u5904\u4e8d\u520d\u61b7\u7ecc\u6775\u696e\u6a17\u870d\u8e70\u9edc",
            "chuan": "\u63e3\u5ddd\u7a7f\u693d\u4f20\u8239\u5598\u4e32\u63be\u821b\u60f4\u9044\u5ddb\u6c1a\u948f\u9569\u8221",
            "chuang": "\u75ae\u7a97\u5e62\u5e8a\u95ef\u521b\u6006",
            "chui": "\u5439\u708a\u6376\u9524\u5782\u9672\u68f0\u69cc",
            "chun": "\u6625\u693f\u9187\u5507\u6df3\u7eaf\u8822\u4fc3\u83bc\u6c8c\u80ab\u6710\u9e51\u877d",
            "chuo": "\u6233\u7ef0\u851f\u8fb6\u8f8d\u955e\u8e14\u9f8a",
            "ci": "\u75b5\u8328\u78c1\u96cc\u8f9e\u6148\u74f7\u8bcd\u6b64\u523a\u8d50\u6b21\u8360\u5472\u5d6f\u9e5a\u8785\u7ccd\u8d91",
            "cong": "\u806a\u8471\u56f1\u5306\u4ece\u4e1b\u506c\u82c1\u6dd9\u9aa2\u742e\u7481\u679e",
            "cu": "\u51d1\u7c97\u918b\u7c07\u731d\u6b82\u8e59",
            "cuan": "\u8e7f\u7be1\u7a9c\u6c46\u64ba\u6615\u7228",
            "cui": "\u6467\u5d14\u50ac\u8106\u7601\u7cb9\u6dec\u7fe0\u8403\u60b4\u7480\u69b1\u96b9",
            "cun": "\u6751\u5b58\u5bf8\u78cb\u5fd6\u76b4",
            "cuo": "\u64ae\u6413\u63aa\u632b\u9519\u539d\u811e\u9509\u77ec\u75e4\u9e7e\u8e49\u8e9c",
            "da": "\u642d\u8fbe\u7b54\u7629\u6253\u5927\u8037\u54d2\u55d2\u601b\u59b2\u75b8\u8921\u7b2a\u977c\u9791",
            "dai": "\u5446\u6b79\u50a3\u6234\u5e26\u6b86\u4ee3\u8d37\u888b\u5f85\u902e\u6020\u57ed\u7519\u5454\u5cb1\u8fe8\u902f\u9a80\u7ed0\u73b3\u9edb",
            "dan": "\u803d\u62c5\u4e39\u5355\u90f8\u63b8\u80c6\u65e6\u6c2e\u4f46\u60ee\u6de1\u8bde\u5f39\u86cb\u4ebb\u510b\u5369\u840f\u5556\u6fb9\u6a90\u6b9a\u8d55\u7708\u7605\u8043\u7baa",
            "dang": "\u5f53\u6321\u515a\u8361\u6863\u8c20\u51fc\u83ea\u5b95\u7800\u94db\u88c6",
            "dao": "\u5200\u6363\u8e48\u5012\u5c9b\u7977\u5bfc\u5230\u7a3b\u60bc\u9053\u76d7\u53e8\u5541\u5fc9\u6d2e\u6c18\u7118\u5fd1\u7e9b",
            "de": "\u5fb7\u5f97\u7684\u951d",
            "deng": "\u8e6c\u706f\u767b\u7b49\u77aa\u51f3\u9093\u5654\u5d9d\u6225\u78f4\u956b\u7c26",
            "di": "\u5824\u4f4e\u6ef4\u8fea\u654c\u7b1b\u72c4\u6da4\u7fdf\u5ae1\u62b5\u5e95\u5730\u8482\u7b2c\u5e1d\u5f1f\u9012\u7f14\u6c10\u7c74\u8bcb\u8c1b\u90b8\u577b\u839c\u837b\u5600\u5a23\u67e2\u68e3\u89cc\u7825\u78b2\u7747\u955d\u7f9d\u9ab6",
            "dian": "\u98a0\u6382\u6ec7\u7898\u70b9\u5178\u975b\u57ab\u7535\u4f43\u7538\u5e97\u60e6\u5960\u6dc0\u6bbf\u4e36\u963d\u576b\u57dd\u5dc5\u73b7\u765c\u766b\u7c1f\u8e2e",
            "diao": "\u7889\u53fc\u96d5\u51cb\u5201\u6389\u540a\u9493\u8c03\u8f7a\u94de\u8729\u7c9c\u8c82",
            "die": "\u8dcc\u7239\u789f\u8776\u8fed\u8c0d\u53e0\u4f5a\u57a4\u581e\u63f2\u558b\u6e2b\u8f76\u7252\u74de\u8936\u800b\u8e40\u9cbd\u9cce",
            "ding": "\u4e01\u76ef\u53ee\u9489\u9876\u9f0e\u952d\u5b9a\u8ba2\u4e22\u4ec3\u5576\u738e\u815a\u7887\u753a\u94e4\u7594\u8035\u914a",
            "dong": "\u4e1c\u51ac\u8463\u61c2\u52a8\u680b\u4f97\u606b\u51bb\u6d1e\u578c\u549a\u5cbd\u5cd2\u5902\u6c21\u80e8\u80f4\u7850\u9e2b",
            "dou": "\u515c\u6296\u6597\u9661\u8c46\u9017\u75d8\u8538\u94ad\u7aa6\u7aac\u86aa\u7bfc\u9161",
            "du": "\u90fd\u7763\u6bd2\u728a\u72ec\u8bfb\u5835\u7779\u8d4c\u675c\u9540\u809a\u5ea6\u6e21\u5992\u828f\u561f\u6e0e\u691f\u6a50\u724d\u8839\u7b03\u9ad1\u9ee9",
            "duan": "\u7aef\u77ed\u953b\u6bb5\u65ad\u7f0e\u5f56\u6934\u7145\u7c16",
            "dui": "\u5806\u5151\u961f\u5bf9\u603c\u619d\u7893",
            "dun": "\u58a9\u5428\u8e72\u6566\u987f\u56e4\u949d\u76fe\u9041\u7096\u7818\u7905\u76f9\u9566\u8db8",
            "duo": "\u6387\u54c6\u591a\u593a\u579b\u8eb2\u6735\u8dfa\u8235\u5241\u60f0\u5815\u5484\u54da\u7f0d\u67c1\u94ce\u88f0\u8e31",
            "e": "\u86fe\u5ce8\u9e45\u4fc4\u989d\u8bb9\u5a25\u6076\u5384\u627c\u904f\u9102\u997f\u5669\u8c14\u57a9\u57ad\u82ca\u83aa\u843c\u5443\u6115\u5c59\u5a40\u8f6d\u66f7\u816d\u786a\u9507\u9537\u9e57\u989a\u9cc4",
            "en": "\u6069\u84bd\u6441\u5514\u55ef",
            "er": "\u800c\u513f\u8033\u5c14\u9975\u6d31\u4e8c\u8d30\u8fe9\u73e5\u94d2\u9e38\u9c95",
            "fa": "\u53d1\u7f5a\u7b4f\u4f10\u4e4f\u9600\u6cd5\u73d0\u57a1\u781d",
            "fan": "\u85e9\u5e06\u756a\u7ffb\u6a0a\u77fe\u9492\u7e41\u51e1\u70e6\u53cd\u8fd4\u8303\u8d29\u72af\u996d\u6cdb\u8629\u5e61\u72ad\u68b5\u6535\u71d4\u7548\u8e6f",
            "fang": "\u574a\u82b3\u65b9\u80aa\u623f\u9632\u59a8\u4eff\u8bbf\u7eba\u653e\u531a\u90a1\u5f77\u94ab\u822b\u9c82",
            "fei": "\u83f2\u975e\u5561\u98de\u80a5\u532a\u8bfd\u5420\u80ba\u5e9f\u6cb8\u8d39\u82be\u72d2\u60b1\u6ddd\u5983\u7ecb\u7eef\u69a7\u8153\u6590\u6249\u7953\u7829\u9544\u75f1\u871a\u7bda\u7fe1\u970f\u9cb1",
            "fen": "\u82ac\u915a\u5429\u6c1b\u5206\u7eb7\u575f\u711a\u6c7e\u7c89\u594b\u4efd\u5fff\u6124\u7caa\u507e\u7035\u68fc\u610d\u9cbc\u9f22",
            "feng": "\u4e30\u5c01\u67ab\u8702\u5cf0\u950b\u98ce\u75af\u70fd\u9022\u51af\u7f1d\u8bbd\u5949\u51e4\u4ff8\u9146\u8451\u6ca3\u781c",
            "fu": "\u4f5b\u5426\u592b\u6577\u80a4\u5b75\u6276\u62c2\u8f90\u5e45\u6c1f\u7b26\u4f0f\u4fd8\u670d\u6d6e\u6daa\u798f\u88b1\u5f17\u752b\u629a\u8f85\u4fef\u91dc\u65a7\u812f\u8151\u5e9c\u8150\u8d74\u526f\u8986\u8d4b\u590d\u5085\u4ed8\u961c\u7236\u8179\u8d1f\u5bcc\u8ba3\u9644\u5987\u7f1a\u5490\u5310\u51eb\u90db\u8299\u82fb\u832f\u83a9\u83d4\u544b\u5e5e\u6ecf\u8274\u5b5a\u9a78\u7ec2\u6874\u8d59\u9efb\u9efc\u7f58\u7a03\u99a5\u864d\u86a8\u8709\u8760\u876e\u9eb8\u8dba\u8dd7\u9cc6",
            "ga": "\u5676\u560e\u86e4\u5c2c\u5477\u5c15\u5c1c\u65ee\u9486",
            "gai": "\u8be5\u6539\u6982\u9499\u76d6\u6e89\u4e10\u9654\u5793\u6224\u8d45\u80f2",
            "gan": "\u5e72\u7518\u6746\u67d1\u7aff\u809d\u8d76\u611f\u79c6\u6562\u8d63\u5769\u82f7\u5c34\u64c0\u6cd4\u6de6\u6f89\u7ec0\u6a44\u65f0\u77f8\u75b3\u9150",
            "gang": "\u5188\u521a\u94a2\u7f38\u809b\u7eb2\u5c97\u6e2f\u6206\u7f61\u9883\u7b7b",
            "gong": "\u6760\u5de5\u653b\u529f\u606d\u9f9a\u4f9b\u8eac\u516c\u5bab\u5f13\u5de9\u6c5e\u62f1\u8d21\u5171\u857b\u5efe\u54a3\u73d9\u80b1\u86a3\u86e9\u89e5",
            "gao": "\u7bd9\u768b\u9ad8\u818f\u7f94\u7cd5\u641e\u9550\u7a3f\u544a\u777e\u8bf0\u90dc\u84bf\u85c1\u7f1f\u69d4\u69c1\u6772\u9506",
            "ge": "\u54e5\u6b4c\u6401\u6208\u9e3d\u80f3\u7599\u5272\u9769\u845b\u683c\u9601\u9694\u94ec\u4e2a\u5404\u9b32\u4ee1\u54ff\u5865\u55dd\u7ea5\u643f\u8188\u784c\u94ea\u9549\u88bc\u988c\u867c\u8238\u9abc\u9ac2",
            "gei": "\u7ed9",
            "gen": "\u6839\u8ddf\u4e98\u831b\u54cf\u826e",
            "geng": "\u8015\u66f4\u5e9a\u7fb9\u57c2\u803f\u6897\u54fd\u8d53\u9ca0",
            "gou": "\u94a9\u52fe\u6c9f\u82df\u72d7\u57a2\u6784\u8d2d\u591f\u4f5d\u8bdf\u5ca3\u9058\u5abe\u7f11\u89cf\u5f40\u9e32\u7b31\u7bdd\u97b2",
            "gu": "\u8f9c\u83c7\u5495\u7b8d\u4f30\u6cbd\u5b64\u59d1\u9f13\u53e4\u86ca\u9aa8\u8c37\u80a1\u6545\u987e\u56fa\u96c7\u560f\u8bc2\u83f0\u54cc\u5d2e\u6c69\u688f\u8f71\u726f\u727f\u80cd\u81cc\u6bc2\u77bd\u7f5f\u94b4\u9522\u74e0\u9e2a\u9e44\u75fc\u86c4\u9164\u89da\u9cb4\u9ab0\u9e58",
            "gua": "\u522e\u74dc\u5250\u5be1\u6302\u8902\u5366\u8bd6\u5471\u681d\u9e39",
            "guai": "\u4e56\u62d0\u602a\u54d9",
            "guan": "\u68fa\u5173\u5b98\u51a0\u89c2\u7ba1\u9986\u7f50\u60ef\u704c\u8d2f\u500c\u839e\u63bc\u6dab\u76e5\u9e73\u9ccf",
            "guang": "\u5149\u5e7f\u901b\u72b7\u6844\u80f1\u7592",
            "gui": "\u7470\u89c4\u572d\u7845\u5f52\u9f9f\u95fa\u8f68\u9b3c\u8be1\u7678\u6842\u67dc\u8dea\u8d35\u523d\u5326\u523f\u5e8b\u5b84\u59ab\u6867\u7085\u6677\u7688\u7c0b\u9c91\u9cdc",
            "gun": "\u8f8a\u6eda\u68cd\u4e28\u886e\u7ef2\u78d9\u9ca7",
            "guo": "\u9505\u90ed\u56fd\u679c\u88f9\u8fc7\u9998\u8803\u57da\u63b4\u5459\u56d7\u5e3c\u5d1e\u7313\u6901\u8662\u951e\u8052\u872e\u873e\u8748",
            "ha": "\u54c8",
            "hai": "\u9ab8\u5b69\u6d77\u6c26\u4ea5\u5bb3\u9a87\u54b4\u55e8\u988f\u91a2",
            "han": "\u9163\u61a8\u90af\u97e9\u542b\u6db5\u5bd2\u51fd\u558a\u7f55\u7ff0\u64bc\u634d\u65f1\u61be\u608d\u710a\u6c57\u6c49\u9097\u83e1\u6496\u961a\u701a\u6657\u7113\u9894\u86b6\u9f3e",
            "hen": "\u592f\u75d5\u5f88\u72e0\u6068",
            "hang": "\u676d\u822a\u6c86\u7ed7\u73e9\u6841",
            "hao": "\u58d5\u568e\u8c6a\u6beb\u90dd\u597d\u8017\u53f7\u6d69\u8585\u55e5\u5686\u6fe0\u704f\u660a\u7693\u98a2\u869d",
            "he": "\u5475\u559d\u8377\u83cf\u6838\u79be\u548c\u4f55\u5408\u76d2\u8c89\u9602\u6cb3\u6db8\u8d6b\u8910\u9e64\u8d3a\u8bc3\u52be\u58d1\u85ff\u55d1\u55ec\u9616\u76cd\u86b5\u7fee",
            "hei": "\u563f\u9ed1",
            "heng": "\u54fc\u4ea8\u6a2a\u8861\u6052\u8a07\u8605",
            "hong": "\u8f70\u54c4\u70d8\u8679\u9e3f\u6d2a\u5b8f\u5f18\u7ea2\u9ec9\u8ba7\u836d\u85a8\u95f3\u6cd3",
            "hou": "\u5589\u4faf\u7334\u543c\u539a\u5019\u540e\u5820\u5f8c\u9005\u760a\u7bcc\u7cc7\u9c8e\u9aba",
            "hu": "\u547c\u4e4e\u5ffd\u745a\u58f6\u846b\u80e1\u8774\u72d0\u7cca\u6e56\u5f27\u864e\u552c\u62a4\u4e92\u6caa\u6237\u51b1\u553f\u56eb\u5cb5\u7322\u6019\u60da\u6d52\u6ef9\u7425\u69f2\u8f77\u89f3\u70c0\u7173\u623d\u6248\u795c\u9e55\u9e71\u7b0f\u9190\u659b",
            "hua": "\u82b1\u54d7\u534e\u733e\u6ed1\u753b\u5212\u5316\u8bdd\u5290\u6d4d\u9a85\u6866\u94e7\u7a1e",
            "huai": "\u69d0\u5f8a\u6000\u6dee\u574f\u8fd8\u8e1d",
            "huan": "\u6b22\u73af\u6853\u7f13\u6362\u60a3\u5524\u75ea\u8c62\u7115\u6da3\u5ba6\u5e7b\u90c7\u5942\u57b8\u64d0\u571c\u6d39\u6d63\u6f36\u5bf0\u902d\u7f33\u953e\u9ca9\u9b1f",
            "huang": "\u8352\u614c\u9ec4\u78fa\u8757\u7c27\u7687\u51f0\u60f6\u714c\u6643\u5e4c\u604d\u8c0e\u968d\u5fa8\u6e5f\u6f62\u9051\u749c\u8093\u7640\u87e5\u7bc1\u9cc7",
            "hui": "\u7070\u6325\u8f89\u5fbd\u6062\u86d4\u56de\u6bc1\u6094\u6167\u5349\u60e0\u6666\u8d3f\u79fd\u4f1a\u70e9\u6c47\u8bb3\u8bf2\u7ed8\u8bd9\u8334\u835f\u8559\u54d5\u5599\u96b3\u6d04\u5f57\u7f0b\u73f2\u6656\u605a\u867a\u87ea\u9ebe",
            "hun": "\u8364\u660f\u5a5a\u9b42\u6d51\u6df7\u8be8\u9984\u960d\u6eb7\u7f17",
            "huo": "\u8c41\u6d3b\u4f19\u706b\u83b7\u6216\u60d1\u970d\u8d27\u7978\u6509\u56af\u5925\u94ac\u952a\u956c\u8020\u8816",
            "ji": "\u51fb\u573e\u57fa\u673a\u7578\u7a3d\u79ef\u7b95\u808c\u9965\u8ff9\u6fc0\u8ba5\u9e21\u59ec\u7ee9\u7f09\u5409\u6781\u68d8\u8f91\u7c4d\u96c6\u53ca\u6025\u75be\u6c72\u5373\u5ac9\u7ea7\u6324\u51e0\u810a\u5df1\u84df\u6280\u5180\u5b63\u4f0e\u796d\u5242\u60b8\u6d4e\u5bc4\u5bc2\u8ba1\u8bb0\u65e2\u5fcc\u9645\u5993\u7ee7\u7eaa\u5c45\u4e0c\u4e69\u525e\u4f76\u4f74\u8114\u58bc\u82a8\u82b0\u8401\u84ba\u857a\u638e\u53fd\u54ad\u54dc\u5527\u5c8c\u5d74\u6d0e\u5f50\u5c50\u9aa5\u757f\u7391\u696b\u6b9b\u621f\u6222\u8d4d\u89ca\u7284\u9f51\u77f6\u7f81\u5d47\u7a37\u7620\u7635\u866e\u7b08\u7b04\u66a8\u8dfb\u8dfd\u9701\u9c9a\u9cab\u9afb\u9e82",
            "jia": "\u5609\u67b7\u5939\u4f73\u5bb6\u52a0\u835a\u988a\u8d3e\u7532\u94be\u5047\u7a3c\u4ef7\u67b6\u9a7e\u5ac1\u4f3d\u90cf\u62ee\u5cac\u6d43\u8fe6\u73c8\u621b\u80db\u605d\u94d7\u9553\u75c2\u86f1\u7b33\u8888\u8dcf",
            "jian": "\u6b7c\u76d1\u575a\u5c16\u7b3a\u95f4\u714e\u517c\u80a9\u8270\u5978\u7f04\u8327\u68c0\u67ec\u78b1\u7877\u62e3\u6361\u7b80\u4fed\u526a\u51cf\u8350\u69db\u9274\u8df5\u8d31\u89c1\u952e\u7bad\u4ef6\u5065\u8230\u5251\u996f\u6e10\u6e85\u6da7\u5efa\u50ed\u8c0f\u8c2b\u83c5\u84b9\u641b\u56dd\u6e54\u8e47\u8b07\u7f23\u67a7\u67d9\u6957\u620b\u622c\u726e\u728d\u6bfd\u8171\u7751\u950f\u9e63\u88e5\u7b15\u7bb4\u7fe6\u8dbc\u8e3a\u9ca3\u97af",
            "jiang": "\u50f5\u59dc\u5c06\u6d46\u6c5f\u7586\u848b\u6868\u5956\u8bb2\u5320\u9171\u964d\u8333\u6d1a\u7edb\u7f30\u729f\u7913\u8029\u7ce8\u8c47",
            "jiao": "\u8549\u6912\u7901\u7126\u80f6\u4ea4\u90ca\u6d47\u9a84\u5a07\u56bc\u6405\u94f0\u77eb\u4fa5\u811a\u72e1\u89d2\u997a\u7f34\u7ede\u527f\u6559\u9175\u8f7f\u8f83\u53eb\u4f7c\u50ec\u832d\u6322\u564d\u5ce4\u5fbc\u59e3\u7e9f\u656b\u768e\u9e6a\u86df\u91ae\u8de4\u9c9b",
            "jie": "\u7a96\u63ed\u63a5\u7686\u79f8\u8857\u9636\u622a\u52ab\u8282\u6854\u6770\u6377\u776b\u7aed\u6d01\u7ed3\u89e3\u59d0\u6212\u85c9\u82a5\u754c\u501f\u4ecb\u75a5\u8beb\u5c4a\u5048\u8ba6\u8bd8\u5588\u55df\u736c\u5a55\u5b51\u6840\u7352\u78a3\u9534\u7596\u88b7\u9889\u86a7\u7faf\u9c92\u9ab1\u9aeb",
            "jin": "\u5dfe\u7b4b\u65a4\u91d1\u4eca\u6d25\u895f\u7d27\u9526\u4ec5\u8c28\u8fdb\u9773\u664b\u7981\u8fd1\u70ec\u6d78\u5c3d\u537a\u8369\u5807\u5664\u9991\u5ed1\u5997\u7f19\u747e\u69ff\u8d46\u89d0\u9485\u9513\u887f\u77dc",
            "jing": "\u52b2\u8346\u5162\u830e\u775b\u6676\u9cb8\u4eac\u60ca\u7cbe\u7cb3\u7ecf\u4e95\u8b66\u666f\u9888\u9759\u5883\u656c\u955c\u5f84\u75c9\u9756\u7adf\u7ade\u51c0\u522d\u5106\u9631\u83c1\u734d\u61ac\u6cfe\u8ff3\u5f2a\u5a67\u80bc\u80eb\u8148\u65cc",
            "jiong": "\u70af\u7a98\u5182\u8fe5\u6243",
            "jiu": "\u63ea\u7a76\u7ea0\u7396\u97ed\u4e45\u7078\u4e5d\u9152\u53a9\u6551\u65e7\u81fc\u8205\u548e\u5c31\u759a\u50e6\u557e\u9604\u67e9\u6855\u9e6b\u8d73\u9b0f",
            "ju": "\u97a0\u62d8\u72d9\u75bd\u9a79\u83ca\u5c40\u5480\u77e9\u4e3e\u6cae\u805a\u62d2\u636e\u5de8\u5177\u8ddd\u8e1e\u952f\u4ff1\u53e5\u60e7\u70ac\u5267\u5028\u8bb5\u82e3\u82f4\u8392\u63ac\u907d\u5c66\u741a\u67b8\u6910\u6998\u6989\u6a58\u728b\u98d3\u949c\u9514\u7aad\u88fe\u8d84\u91b5\u8e3d\u9f83\u96ce\u97ab",
            "juan": "\u6350\u9e43\u5a1f\u5026\u7737\u5377\u7ee2\u9104\u72f7\u6d93\u684a\u8832\u9529\u954c\u96bd",
            "jue": "\u6485\u652b\u6289\u6398\u5014\u7235\u89c9\u51b3\u8bc0\u7edd\u53a5\u5282\u8c32\u77cd\u8568\u5658\u5d1b\u7357\u5b53\u73cf\u6877\u6a5b\u721d\u9562\u8e76\u89d6",
            "jun": "\u5747\u83cc\u94a7\u519b\u541b\u5cfb\u4fca\u7ae3\u6d5a\u90e1\u9a8f\u6343\u72fb\u76b2\u7b60\u9e87",
            "ka": "\u5580\u5496\u5361\u4f67\u5494\u80e9",
            "ke": "\u54af\u5777\u82db\u67ef\u68f5\u78d5\u9897\u79d1\u58f3\u54b3\u53ef\u6e34\u514b\u523b\u5ba2\u8bfe\u5ca2\u606a\u6e98\u9a92\u7f02\u73c2\u8f72\u6c2a\u778c\u94b6\u75b4\u7aa0\u874c\u9ac1",
            "kai": "\u5f00\u63e9\u6977\u51ef\u6168\u5240\u57b2\u8488\u5ffe\u607a\u94e0\u950e",
            "kan": "\u520a\u582a\u52d8\u574e\u780d\u770b\u4f83\u51f5\u83b0\u83b6\u6221\u9f9b\u77b0",
            "kang": "\u5eb7\u6177\u7ce0\u625b\u6297\u4ea2\u7095\u5751\u4f09\u95f6\u94aa",
            "kao": "\u8003\u62f7\u70e4\u9760\u5c3b\u6832\u7292\u94d0",
            "ken": "\u80af\u5543\u57a6\u6073\u57a0\u88c9\u9880",
            "keng": "\u542d\u5fd0\u94ff",
            "kong": "\u7a7a\u6050\u5b54\u63a7\u5025\u5d06\u7b9c",
            "kou": "\u62a0\u53e3\u6263\u5bc7\u82a4\u853b\u53e9\u770d\u7b58",
            "ku": "\u67af\u54ed\u7a9f\u82e6\u9177\u5e93\u88e4\u5233\u5800\u55be\u7ed4\u9ab7",
            "kua": "\u5938\u57ae\u630e\u8de8\u80ef\u4f89",
            "kuai": "\u5757\u7b77\u4fa9\u5feb\u84af\u90d0\u8489\u72ef\u810d",
            "kuan": "\u5bbd\u6b3e\u9acb",
            "kuang": "\u5321\u7b50\u72c2\u6846\u77ff\u7736\u65f7\u51b5\u8bd3\u8bf3\u909d\u5739\u593c\u54d0\u7ea9\u8d36",
            "kui": "\u4e8f\u76d4\u5cbf\u7aa5\u8475\u594e\u9b41\u5080\u9988\u6127\u6e83\u9997\u532e\u5914\u9697\u63c6\u55b9\u559f\u609d\u6126\u9615\u9035\u668c\u777d\u8069\u8770\u7bd1\u81fe\u8dec",
            "kun": "\u5764\u6606\u6346\u56f0\u6083\u9603\u7428\u951f\u918c\u9cb2\u9ae1",
            "kuo": "\u62ec\u6269\u5ed3\u9614\u86de",
            "la": "\u5783\u62c9\u5587\u8721\u814a\u8fa3\u5566\u524c\u647a\u908b\u65ef\u782c\u760c",
            "lai": "\u83b1\u6765\u8d56\u5d03\u5f95\u6d9e\u6fd1\u8d49\u7750\u94fc\u765e\u7c41",
            "lan": "\u84dd\u5a6a\u680f\u62e6\u7bee\u9611\u5170\u6f9c\u8c30\u63fd\u89c8\u61d2\u7f06\u70c2\u6ee5\u5549\u5c9a\u61d4\u6f24\u6984\u6593\u7f71\u9567\u8934",
            "lang": "\u7405\u6994\u72fc\u5eca\u90ce\u6717\u6d6a\u83a8\u8497\u5577\u9606\u9512\u7a02\u8782",
            "lao": "\u635e\u52b3\u7262\u8001\u4f6c\u59e5\u916a\u70d9\u6d9d\u5520\u5d02\u6833\u94d1\u94f9\u75e8\u91aa",
            "le": "\u52d2\u4e50\u808b\u4ec2\u53fb\u561e\u6cd0\u9cd3",
            "lei": "\u96f7\u956d\u857e\u78ca\u7d2f\u5121\u5792\u64c2\u7c7b\u6cea\u7fb8\u8bd4\u837d\u54a7\u6f2f\u5ad8\u7f27\u6a91\u8012\u9179",
            "ling": "\u68f1\u51b7\u62ce\u73b2\u83f1\u96f6\u9f84\u94c3\u4f36\u7f9a\u51cc\u7075\u9675\u5cad\u9886\u53e6\u4ee4\u9143\u5844\u82d3\u5464\u56f9\u6ce0\u7eeb\u67c3\u68c2\u74f4\u8046\u86c9\u7fce\u9cae",
            "leng": "\u695e\u6123",
            "li": "\u5398\u68a8\u7281\u9ece\u7bf1\u72f8\u79bb\u6f13\u7406\u674e\u91cc\u9ca4\u793c\u8389\u8354\u540f\u6817\u4e3d\u5389\u52b1\u783e\u5386\u5229\u5088\u4f8b\u4fd0\u75e2\u7acb\u7c92\u6ca5\u96b6\u529b\u7483\u54e9\u4fea\u4fda\u90e6\u575c\u82c8\u8385\u84e0\u85dc\u6369\u5456\u5533\u55b1\u7301\u6ea7\u6fa7\u9026\u5a0c\u5ae0\u9a8a\u7f21\u73de\u67a5\u680e\u8f79\u623e\u783a\u8a48\u7f79\u9502\u9e42\u75a0\u75ac\u86ce\u870a\u8821\u7b20\u7be5\u7c9d\u91b4\u8dde\u96f3\u9ca1\u9ce2\u9ee7",
            "lian": "\u4fe9\u8054\u83b2\u8fde\u9570\u5ec9\u601c\u6d9f\u5e18\u655b\u8138\u94fe\u604b\u70bc\u7ec3\u631b\u8539\u5941\u6f4b\u6fc2\u5a08\u740f\u695d\u6b93\u81c1\u81a6\u88e2\u880a\u9ca2",
            "liang": "\u7cae\u51c9\u6881\u7cb1\u826f\u4e24\u8f86\u91cf\u667e\u4eae\u8c05\u589a\u690b\u8e09\u9753\u9b49",
            "liao": "\u64a9\u804a\u50da\u7597\u71ce\u5be5\u8fbd\u6f66\u4e86\u6482\u9563\u5ed6\u6599\u84fc\u5c25\u5639\u7360\u5bee\u7f2d\u948c\u9e69\u8022",
            "lie": "\u5217\u88c2\u70c8\u52a3\u730e\u51bd\u57d2\u6d0c\u8d94\u8e90\u9b23",
            "lin": "\u7433\u6797\u78f7\u9716\u4e34\u90bb\u9cde\u6dcb\u51db\u8d41\u541d\u853a\u5d99\u5eea\u9074\u6aa9\u8f9a\u77b5\u7cbc\u8e8f\u9e9f",
            "liu": "\u6e9c\u7409\u69b4\u786b\u998f\u7559\u5218\u7624\u6d41\u67f3\u516d\u62a1\u507b\u848c\u6cd6\u6d4f\u905b\u9a9d\u7efa\u65d2\u7198\u950d\u954f\u9e68\u938f",
            "long": "\u9f99\u804b\u5499\u7b3c\u7abf\u9686\u5784\u62e2\u9647\u5f04\u5785\u830f\u6cf7\u73d1\u680a\u80e7\u783b\u7643",
            "lou": "\u697c\u5a04\u6402\u7bd3\u6f0f\u964b\u55bd\u5d5d\u9542\u7618\u8027\u877c\u9ac5",
            "lu": "\u82a6\u5362\u9885\u5e90\u7089\u63b3\u5364\u864f\u9c81\u9e93\u788c\u9732\u8def\u8d42\u9e7f\u6f5e\u7984\u5f55\u9646\u622e\u5786\u6445\u64b8\u565c\u6cf8\u6e0c\u6f09\u7490\u680c\u6a79\u8f73\u8f82\u8f98\u6c07\u80ea\u9565\u9e2c\u9e6d\u7c0f\u823b\u9c88",
            "lv": "\u9a74\u5415\u94dd\u4fa3\u65c5\u5c65\u5c61\u7f15\u8651\u6c2f\u5f8b\u7387\u6ee4\u7eff\u634b\u95fe\u6988\u8182\u7a06\u891b",
            "luan": "\u5ce6\u5b6a\u6ee6\u5375\u4e71\u683e\u9e3e\u92ae",
            "lue": "\u63a0\u7565\u950a",
            "lun": "\u8f6e\u4f26\u4ed1\u6ca6\u7eb6\u8bba\u56f5",
            "luo": "\u841d\u87ba\u7f57\u903b\u9523\u7ba9\u9aa1\u88f8\u843d\u6d1b\u9a86\u7edc\u502e\u8366\u645e\u7321\u6cfa\u6924\u8136\u9559\u7630\u96d2",
            "ma": "\u5988\u9ebb\u739b\u7801\u8682\u9a6c\u9a82\u561b\u5417\u551b\u72b8\u5b37\u6769\u9ebd",
            "mai": "\u57cb\u4e70\u9ea6\u5356\u8fc8\u8109\u52a2\u836c\u54aa\u973e",
            "man": "\u7792\u9992\u86ee\u6ee1\u8513\u66fc\u6162\u6f2b\u8c29\u5881\u5e54\u7f26\u71b3\u9558\u989f\u87a8\u9cd7\u9794",
            "mang": "\u8292\u832b\u76f2\u5fd9\u83bd\u9099\u6f2d\u6726\u786d\u87d2",
            "meng": "\u6c13\u840c\u8499\u6aac\u76df\u9530\u731b\u68a6\u5b5f\u52d0\u750d\u77a2\u61f5\u791e\u867b\u8722\u8813\u824b\u8268\u9efe",
            "miao": "\u732b\u82d7\u63cf\u7784\u85d0\u79d2\u6e3a\u5e99\u5999\u55b5\u9088\u7f08\u7f2a\u676a\u6dfc\u7707\u9e4b\u8731",
            "mao": "\u8305\u951a\u6bdb\u77db\u94c6\u536f\u8302\u5192\u5e3d\u8c8c\u8d38\u4f94\u88a4\u52d6\u8306\u5cc1\u7441\u6634\u7266\u8004\u65c4\u61cb\u7780\u86d1\u8765\u87ca\u9ae6",
            "me": "\u4e48",
            "mei": "\u73ab\u679a\u6885\u9176\u9709\u7164\u6ca1\u7709\u5a92\u9541\u6bcf\u7f8e\u6627\u5bd0\u59b9\u5a9a\u5776\u8393\u5d4b\u7338\u6d7c\u6e44\u6963\u9545\u9e5b\u8882\u9b45",
            "men": "\u95e8\u95f7\u4eec\u626a\u739f\u7116\u61d1\u9494",
            "mi": "\u772f\u919a\u9761\u7cdc\u8ff7\u8c1c\u5f25\u7c73\u79d8\u89c5\u6ccc\u871c\u5bc6\u5e42\u8288\u5196\u8c27\u863c\u5627\u7315\u736f\u6c68\u5b93\u5f2d\u8112\u6549\u7cf8\u7e3b\u9e8b",
            "mian": "\u68c9\u7720\u7ef5\u5195\u514d\u52c9\u5a29\u7f05\u9762\u6c94\u6e4e\u817c\u7704",
            "mie": "\u8511\u706d\u54a9\u881b\u7bfe",
            "min": "\u6c11\u62bf\u76bf\u654f\u60af\u95fd\u82e0\u5cb7\u95f5\u6cef\u73c9",
            "ming": "\u660e\u879f\u9e23\u94ed\u540d\u547d\u51a5\u8317\u6e9f\u669d\u7791\u9169",
            "miu": "\u8c2c",
            "mo": "\u6478\u6479\u8611\u6a21\u819c\u78e8\u6469\u9b54\u62b9\u672b\u83ab\u58a8\u9ed8\u6cab\u6f20\u5bde\u964c\u8c1f\u8309\u84e6\u998d\u5aeb\u9546\u79e3\u763c\u8031\u87c6\u8c8a\u8c98",
            "mou": "\u8c0b\u725f\u67d0\u53b6\u54de\u5a7a\u7738\u936a",
            "mu": "\u62c7\u7261\u4ea9\u59c6\u6bcd\u5893\u66ae\u5e55\u52df\u6155\u6728\u76ee\u7766\u7267\u7a46\u4eeb\u82dc\u5452\u6c90\u6bea\u94bc",
            "na": "\u62ff\u54ea\u5450\u94a0\u90a3\u5a1c\u7eb3\u5185\u637a\u80ad\u954e\u8872\u7bac",
            "nai": "\u6c16\u4e43\u5976\u8010\u5948\u9f10\u827f\u8418\u67f0",
            "nan": "\u5357\u7537\u96be\u56ca\u5583\u56e1\u6960\u8169\u877b\u8d67",
            "nao": "\u6320\u8111\u607c\u95f9\u5b6c\u57b4\u7331\u7459\u7847\u94d9\u86f2",
            "ne": "\u6dd6\u5462\u8bb7",
            "nei": "\u9981",
            "nen": "\u5ae9\u80fd\u6798\u6041",
            "ni": "\u59ae\u9713\u502a\u6ce5\u5c3c\u62df\u4f60\u533f\u817b\u9006\u6eba\u4f32\u576d\u730a\u6029\u6ee0\u6635\u65ce\u7962\u615d\u7768\u94cc\u9cb5",
            "nian": "\u852b\u62c8\u5e74\u78be\u64b5\u637b\u5ff5\u5eff\u8f87\u9ecf\u9c87\u9cb6",
            "niang": "\u5a18\u917f",
            "niao": "\u9e1f\u5c3f\u8311\u5b32\u8132\u8885",
            "nie": "\u634f\u8042\u5b7d\u556e\u954a\u954d\u6d85\u4e5c\u9667\u8616\u55eb\u8080\u989e\u81ec\u8e51",
            "nin": "\u60a8\u67e0",
            "ning": "\u72de\u51dd\u5b81\u62e7\u6cde\u4f5e\u84e5\u549b\u752f\u804d",
            "niu": "\u725b\u626d\u94ae\u7ebd\u72c3\u5ff8\u599e\u86b4",
            "nong": "\u8113\u6d53\u519c\u4fac",
            "nu": "\u5974\u52aa\u6012\u5476\u5e11\u5f29\u80ec\u5b65\u9a7d",
            "nv": "\u5973\u6067\u9495\u8844",
            "nuan": "\u6696",
            "nuenue": "\u8650",
            "nue": "\u759f\u8c11",
            "nuo": "\u632a\u61e6\u7cef\u8bfa\u50a9\u6426\u558f\u9518",
            "ou": "\u54e6\u6b27\u9e25\u6bb4\u85d5\u5455\u5076\u6ca4\u6004\u74ef\u8026",
            "pa": "\u556a\u8db4\u722c\u5e15\u6015\u7436\u8469\u7b62",
            "pai": "\u62cd\u6392\u724c\u5f98\u6e43\u6d3e\u4ff3\u848e",
            "pan": "\u6500\u6f58\u76d8\u78d0\u76fc\u7554\u5224\u53db\u723f\u6cee\u88a2\u897b\u87e0\u8e52",
            "pang": "\u4e53\u5e9e\u65c1\u802a\u80d6\u6ec2\u9004",
            "pao": "\u629b\u5486\u5228\u70ae\u888d\u8dd1\u6ce1\u530f\u72cd\u5e96\u812c\u75b1",
            "pei": "\u5478\u80da\u57f9\u88f4\u8d54\u966a\u914d\u4f69\u6c9b\u638a\u8f94\u5e14\u6de0\u65c6\u952b\u9185\u9708",
            "pen": "\u55b7\u76c6\u6e53",
            "peng": "\u7830\u62a8\u70f9\u6f8e\u5f6d\u84ec\u68da\u787c\u7bf7\u81a8\u670b\u9e4f\u6367\u78b0\u576f\u580b\u562d\u6026\u87db",
            "pi": "\u7812\u9739\u6279\u62ab\u5288\u7435\u6bd7\u5564\u813e\u75b2\u76ae\u5339\u75de\u50fb\u5c41\u8b6c\u4e15\u9674\u90b3\u90eb\u572e\u9f19\u64d7\u567c\u5e80\u5ab2\u7eb0\u6787\u7513\u7765\u7f74\u94cd\u75e6\u7656\u758b\u868d\u8c94",
            "pian": "\u7bc7\u504f\u7247\u9a97\u8c1d\u9a88\u728f\u80fc\u890a\u7fe9\u8e41",
            "piao": "\u98d8\u6f02\u74e2\u7968\u527d\u560c\u5ad6\u7f25\u6b8d\u779f\u87b5",
            "pie": "\u6487\u77a5\u4e3f\u82e4\u6c15",
            "pin": "\u62fc\u9891\u8d2b\u54c1\u8058\u62da\u59d8\u5ad4\u6980\u725d\u98a6",
            "ping": "\u4e52\u576a\u82f9\u840d\u5e73\u51ed\u74f6\u8bc4\u5c4f\u4fdc\u5a09\u67b0\u9c86",
            "po": "\u5761\u6cfc\u9887\u5a46\u7834\u9b44\u8feb\u7c95\u53f5\u9131\u6ea5\u73c0\u948b\u94b7\u76a4\u7b38",
            "pou": "\u5256\u88d2\u8e23",
            "pu": "\u6251\u94fa\u4ec6\u8386\u8461\u83e9\u84b2\u57d4\u6734\u5703\u666e\u6d66\u8c31\u66dd\u7011\u530d\u5657\u6fee\u749e\u6c06\u9564\u9568\u8e7c",
            "qi": "\u671f\u6b3a\u6816\u621a\u59bb\u4e03\u51c4\u6f06\u67d2\u6c8f\u5176\u68cb\u5947\u6b67\u7566\u5d0e\u8110\u9f50\u65d7\u7948\u7941\u9a91\u8d77\u5c82\u4e5e\u4f01\u542f\u5951\u780c\u5668\u6c14\u8fc4\u5f03\u6c7d\u6ce3\u8bab\u4e9f\u4e93\u573b\u8291\u840b\u847a\u5601\u5c7a\u5c90\u6c54\u6dc7\u9a90\u7eee\u742a\u7426\u675e\u6864\u69ed\u6b39\u797a\u61a9\u789b\u86f4\u871e\u7da6\u7dae\u8dbf\u8e4a\u9ccd\u9e92",
            "qia": "\u6390\u6070\u6d3d\u845c",
            "qian": "\u7275\u6266\u948e\u94c5\u5343\u8fc1\u7b7e\u4edf\u8c26\u4e7e\u9ed4\u94b1\u94b3\u524d\u6f5c\u9063\u6d45\u8c34\u5811\u5d4c\u6b20\u6b49\u4f65\u9621\u828a\u82a1\u8368\u63ae\u5c8d\u60ad\u614a\u9a9e\u6434\u8930\u7f31\u6920\u80b7\u6106\u94a4\u8654\u7b9d",
            "qiang": "\u67aa\u545b\u8154\u7f8c\u5899\u8537\u5f3a\u62a2\u5af1\u6a2f\u6217\u709d\u9516\u9535\u956a\u8941\u8723\u7f9f\u8deb\u8dc4",
            "qiao": "\u6a47\u9539\u6572\u6084\u6865\u77a7\u4e54\u4fa8\u5de7\u9798\u64ac\u7fd8\u5ced\u4fcf\u7a8d\u5281\u8bee\u8c2f\u835e\u6100\u6194\u7f32\u6a35\u6bf3\u7857\u8df7\u9792",
            "qie": "\u5207\u8304\u4e14\u602f\u7a83\u90c4\u553c\u60ec\u59be\u6308\u9532\u7ba7",
            "qin": "\u94a6\u4fb5\u4eb2\u79e6\u7434\u52e4\u82b9\u64d2\u79bd\u5bdd\u6c81\u82a9\u84c1\u8572\u63ff\u5423\u55ea\u5659\u6eb1\u6a8e\u8793\u887e",
            "qing": "\u9752\u8f7b\u6c22\u503e\u537f\u6e05\u64ce\u6674\u6c30\u60c5\u9877\u8bf7\u5e86\u5029\u82d8\u570a\u6aa0\u78ec\u873b\u7f44\u7b90\u8b26\u9cad\u9ee5",
            "qiong": "\u743c\u7a77\u909b\u8315\u7a79\u7b47\u928e",
            "qiu": "\u79cb\u4e18\u90b1\u7403\u6c42\u56da\u914b\u6cc5\u4fc5\u6c3d\u5def\u827d\u72b0\u6e6b\u9011\u9052\u6978\u8d47\u9e20\u866c\u86af\u8764\u88d8\u7cd7\u9cc5\u9f3d",
            "qu": "\u8d8b\u533a\u86c6\u66f2\u8eaf\u5c48\u9a71\u6e20\u53d6\u5a36\u9f8b\u8da3\u53bb\u8bce\u52ac\u8556\u8627\u5c96\u8862\u9612\u74a9\u89d1\u6c0d\u795b\u78f2\u766f\u86d0\u883c\u9eb4\u77bf\u9ee2",
            "quan": "\u5708\u98a7\u6743\u919b\u6cc9\u5168\u75ca\u62f3\u72ac\u5238\u529d\u8be0\u8343\u737e\u609b\u7efb\u8f81\u754e\u94e8\u8737\u7b4c\u9b08",
            "que": "\u7f3a\u7094\u7638\u5374\u9e4a\u69b7\u786e\u96c0\u9619\u60ab",
            "qun": "\u88d9\u7fa4\u9021",
            "ran": "\u7136\u71c3\u5189\u67d3\u82d2\u9aef",
            "rang": "\u74e4\u58e4\u6518\u56b7\u8ba9\u79b3\u7a70",
            "rao": "\u9976\u6270\u7ed5\u835b\u5a06\u6861",
            "ruo": "\u60f9\u82e5\u5f31",
            "re": "\u70ed\u504c",
            "ren": "\u58ec\u4ec1\u4eba\u5fcd\u97e7\u4efb\u8ba4\u5203\u598a\u7eab\u4ede\u834f\u845a\u996a\u8f6b\u7a14\u887d",
            "reng": "\u6254\u4ecd",
            "ri": "\u65e5",
            "rong": "\u620e\u8338\u84c9\u8363\u878d\u7194\u6eb6\u5bb9\u7ed2\u5197\u5d58\u72e8\u7f1b\u6995\u877e",
            "rou": "\u63c9\u67d4\u8089\u7cc5\u8e42\u97a3",
            "ru": "\u8339\u8815\u5112\u5b7a\u5982\u8fb1\u4e73\u6c5d\u5165\u8925\u84d0\u85b7\u5685\u6d33\u6ebd\u6fe1\u94f7\u8966\u98a5",
            "ruan": "\u8f6f\u962e\u670a",
            "rui": "\u854a\u745e\u9510\u82ae\u8564\u777f\u868b",
            "run": "\u95f0\u6da6",
            "sa": "\u6492\u6d12\u8428\u5345\u4ee8\u6332\u98d2",
            "sai": "\u816e\u9cc3\u585e\u8d5b\u567b",
            "san": "\u4e09\u53c1\u4f1e\u6563\u5f61\u9993\u6c35\u6bf5\u7cc1\u9730",
            "sang": "\u6851\u55d3\u4e27\u6421\u78c9\u98a1",
            "sao": "\u6414\u9a9a\u626b\u5ac2\u57fd\u81ca\u7619\u9ccb",
            "se": "\u745f\u8272\u6da9\u556c\u94e9\u94ef\u7a51",
            "sen": "\u68ee",
            "seng": "\u50e7",
            "sha": "\u838e\u7802\u6740\u5239\u6c99\u7eb1\u50bb\u5565\u715e\u810e\u6b43\u75e7\u88df\u970e\u9ca8",
            "shai": "\u7b5b\u6652\u917e",
            "shan": "\u73ca\u82eb\u6749\u5c71\u5220\u717d\u886b\u95ea\u9655\u64c5\u8d61\u81b3\u5584\u6c55\u6247\u7f2e\u5261\u8baa\u912f\u57cf\u829f\u6f78\u59d7\u9a9f\u81bb\u9490\u759d\u87ee\u8222\u8dda\u9cdd",
            "shang": "\u5892\u4f24\u5546\u8d4f\u664c\u4e0a\u5c1a\u88f3\u57a7\u7ef1\u6b87\u71b5\u89de",
            "shao": "\u68a2\u634e\u7a0d\u70e7\u828d\u52fa\u97f6\u5c11\u54e8\u90b5\u7ecd\u52ad\u82d5\u6f72\u86f8\u7b24\u7b72\u8244",
            "she": "\u5962\u8d4a\u86c7\u820c\u820d\u8d66\u6444\u5c04\u6151\u6d89\u793e\u8bbe\u538d\u4f58\u731e\u7572\u9e9d",
            "shen": "\u7837\u7533\u547b\u4f38\u8eab\u6df1\u5a20\u7ec5\u795e\u6c88\u5ba1\u5a76\u751a\u80be\u614e\u6e17\u8bdc\u8c02\u5432\u54c2\u6e16\u6939\u77e7\u8703",
            "sheng": "\u58f0\u751f\u7525\u7272\u5347\u7ef3\u7701\u76db\u5269\u80dc\u5723\u4e1e\u6e11\u5ab5\u771a\u7b19",
            "shi": "\u5e08\u5931\u72ee\u65bd\u6e7f\u8bd7\u5c38\u8671\u5341\u77f3\u62fe\u65f6\u4ec0\u98df\u8680\u5b9e\u8bc6\u53f2\u77e2\u4f7f\u5c4e\u9a76\u59cb\u5f0f\u793a\u58eb\u4e16\u67ff\u4e8b\u62ed\u8a93\u901d\u52bf\u662f\u55dc\u566c\u9002\u4ed5\u4f8d\u91ca\u9970\u6c0f\u5e02\u6043\u5ba4\u89c6\u8bd5\u8c25\u57d8\u83b3\u84cd\u5f11\u5511\u9963\u8f7c\u8006\u8d33\u70bb\u793b\u94c8\u94ca\u87ab\u8210\u7b6e\u8c55\u9ca5\u9cba",
            "shou": "\u6536\u624b\u9996\u5b88\u5bff\u6388\u552e\u53d7\u7626\u517d\u624c\u72e9\u7ef6\u824f",
            "shu": "\u852c\u67a2\u68b3\u6b8a\u6292\u8f93\u53d4\u8212\u6dd1\u758f\u4e66\u8d4e\u5b70\u719f\u85af\u6691\u66d9\u7f72\u8700\u9ecd\u9f20\u5c5e\u672f\u8ff0\u6811\u675f\u620d\u7ad6\u5885\u5eb6\u6570\u6f31\u6055\u500f\u587e\u83fd\u5fc4\u6cad\u6d91\u6f8d\u59dd\u7ebe\u6bf9\u8167\u6bb3\u956f\u79eb\u9e6c",
            "shua": "\u5237\u800d\u5530\u6dae",
            "shuai": "\u6454\u8870\u7529\u5e05\u87c0",
            "shuan": "\u6813\u62f4\u95e9",
            "shuang": "\u971c\u53cc\u723d\u5b40",
            "shui": "\u8c01\u6c34\u7761\u7a0e",
            "shun": "\u542e\u77ac\u987a\u821c\u6042",
            "shuo": "\u8bf4\u7855\u6714\u70c1\u84b4\u6420\u55cd\u6fef\u5981\u69ca\u94c4",
            "si": "\u65af\u6495\u5636\u601d\u79c1\u53f8\u4e1d\u6b7b\u8086\u5bfa\u55e3\u56db\u4f3a\u4f3c\u9972\u5df3\u53ae\u4fdf\u5155\u83e5\u549d\u6c5c\u6cd7\u6f8c\u59d2\u9a77\u7f0c\u7940\u7960\u9536\u9e36\u801c\u86f3\u7b25",
            "song": "\u677e\u8038\u6002\u9882\u9001\u5b8b\u8bbc\u8bf5\u51c7\u83d8\u5d27\u5d69\u5fea\u609a\u6dde\u7ae6",
            "sou": "\u641c\u8258\u64de\u55fd\u53df\u55d6\u55fe\u998a\u6eb2\u98d5\u778d\u953c\u878b",
            "su": "\u82cf\u9165\u4fd7\u7d20\u901f\u7c9f\u50f3\u5851\u6eaf\u5bbf\u8bc9\u8083\u5919\u8c21\u850c\u55c9\u612b\u7c0c\u89eb\u7a23",
            "suan": "\u9178\u849c\u7b97",
            "sui": "\u867d\u968b\u968f\u7ee5\u9ad3\u788e\u5c81\u7a57\u9042\u96a7\u795f\u84d1\u51ab\u8c07\u6fc9\u9083\u71e7\u772d\u7762",
            "sun": "\u5b59\u635f\u7b0b\u836a\u72f2\u98e7\u69ab\u8de3\u96bc",
            "suo": "\u68ad\u5506\u7f29\u7410\u7d22\u9501\u6240\u5522\u55e6\u5a11\u686b\u7743\u7fa7",
            "ta": "\u584c\u4ed6\u5b83\u5979\u5854\u736d\u631e\u8e4b\u8e0f\u95fc\u6ebb\u9062\u69bb\u6c93",
            "tai": "\u80ce\u82d4\u62ac\u53f0\u6cf0\u915e\u592a\u6001\u6c70\u90b0\u85b9\u80bd\u70b1\u949b\u8dc6\u9c90",
            "tan": "\u574d\u644a\u8d2a\u762b\u6ee9\u575b\u6a80\u75f0\u6f6d\u8c2d\u8c08\u5766\u6bef\u8892\u78b3\u63a2\u53f9\u70ad\u90ef\u8548\u6619\u94bd\u952c\u8983",
            "tang": "\u6c64\u5858\u642a\u5802\u68e0\u819b\u5510\u7cd6\u50a5\u9967\u6e8f\u746d\u94f4\u9557\u8025\u8797\u87b3\u7fb0\u91a3",
            "thang": "\u5018\u8eba\u6dcc",
            "theng": "\u8d9f\u70eb",
            "tao": "\u638f\u6d9b\u6ed4\u7ee6\u8404\u6843\u9003\u6dd8\u9676\u8ba8\u5957\u6311\u9f17\u5555\u97ec\u9955",
            "te": "\u7279",
            "teng": "\u85e4\u817e\u75bc\u8a8a\u6ed5",
            "ti": "\u68af\u5254\u8e22\u9511\u63d0\u9898\u8e44\u557c\u4f53\u66ff\u568f\u60d5\u6d95\u5243\u5c49\u8351\u608c\u9016\u7ee8\u7f07\u9e48\u88fc\u918d",
            "tian": "\u5929\u6dfb\u586b\u7530\u751c\u606c\u8214\u8146\u63ad\u5fdd\u9617\u6b84\u754b\u94bf\u86ba",
            "tiao": "\u6761\u8fe2\u773a\u8df3\u4f7b\u7967\u94eb\u7a95\u9f86\u9ca6",
            "tie": "\u8d34\u94c1\u5e16\u841c\u992e",
            "ting": "\u5385\u542c\u70c3\u6c40\u5ef7\u505c\u4ead\u5ead\u633a\u8247\u839b\u8476\u5a77\u6883\u8713\u9706",
            "tong": "\u901a\u6850\u916e\u77b3\u540c\u94dc\u5f64\u7ae5\u6876\u6345\u7b52\u7edf\u75db\u4f5f\u50ee\u4edd\u833c\u55f5\u6078\u6f7c\u783c",
            "tou": "\u5077\u6295\u5934\u900f\u4ea0",
            "tu": "\u51f8\u79c3\u7a81\u56fe\u5f92\u9014\u6d82\u5c60\u571f\u5410\u5154\u580d\u837c\u83df\u948d\u9174",
            "tuan": "\u6e4d\u56e2\u7583",
            "tui": "\u63a8\u9893\u817f\u8715\u892a\u9000\u5fd2\u717a",
            "tun": "\u541e\u5c6f\u81c0\u9968\u66be\u8c5a\u7a80",
            "tuo": "\u62d6\u6258\u8131\u9e35\u9640\u9a6e\u9a7c\u692d\u59a5\u62d3\u553e\u4e47\u4f57\u5768\u5eb9\u6cb1\u67dd\u7823\u7ba8\u8204\u8dce\u9f0d",
            "wa": "\u6316\u54c7\u86d9\u6d3c\u5a03\u74e6\u889c\u4f64\u5a32\u817d",
            "wai": "\u6b6a\u5916",
            "wan": "\u8c4c\u5f2f\u6e7e\u73a9\u987d\u4e38\u70f7\u5b8c\u7897\u633d\u665a\u7696\u60cb\u5b9b\u5a49\u4e07\u8155\u525c\u8284\u82cb\u83c0\u7ea8\u7efe\u742c\u8118\u7579\u873f\u7ba2",
            "wang": "\u6c6a\u738b\u4ea1\u6789\u7f51\u5f80\u65fa\u671b\u5fd8\u5984\u7f54\u5c22\u60d8\u8f8b\u9b4d",
            "wei": "\u5a01\u5dcd\u5fae\u5371\u97e6\u8fdd\u6845\u56f4\u552f\u60df\u4e3a\u6f4d\u7ef4\u82c7\u840e\u59d4\u4f1f\u4f2a\u5c3e\u7eac\u672a\u851a\u5473\u754f\u80c3\u5582\u9b4f\u4f4d\u6e2d\u8c13\u5c09\u6170\u536b\u502d\u504e\u8bff\u9688\u8473\u8587\u5e0f\u5e37\u5d34\u5d6c\u7325\u732c\u95f1\u6ca9\u6d27\u6da0\u9036\u5a13\u73ae\u97ea\u8ece\u709c\u7168\u71a8\u75ff\u8249\u9c94",
            "wen": "\u761f\u6e29\u868a\u6587\u95fb\u7eb9\u543b\u7a33\u7d0a\u95ee\u520e\u6120\u960c\u6c76\u74ba\u97eb\u6b81\u96ef",
            "weng": "\u55e1\u7fc1\u74ee\u84ca\u8579",
            "wo": "\u631d\u8717\u6da1\u7a9d\u6211\u65a1\u5367\u63e1\u6c83\u83b4\u5e44\u6e25\u674c\u809f\u9f8c",
            "wu": "\u5deb\u545c\u94a8\u4e4c\u6c61\u8bec\u5c4b\u65e0\u829c\u68a7\u543e\u5434\u6bcb\u6b66\u4e94\u6342\u5348\u821e\u4f0d\u4fae\u575e\u620a\u96fe\u6664\u7269\u52ff\u52a1\u609f\u8bef\u5140\u4ef5\u9622\u90ac\u572c\u82b4\u5e91\u6003\u5fe4\u6d6f\u5be4\u8fd5\u59a9\u9a9b\u727e\u7110\u9e49\u9e5c\u8708\u92c8\u9f2f",
            "xi": "\u6614\u7199\u6790\u897f\u7852\u77fd\u6670\u563b\u5438\u9521\u727a\u7a00\u606f\u5e0c\u6089\u819d\u5915\u60dc\u7184\u70ef\u6eaa\u6c50\u7280\u6a84\u88ad\u5e2d\u4e60\u5ab3\u559c\u94e3\u6d17\u7cfb\u9699\u620f\u7ec6\u50d6\u516e\u96b0\u90d7\u831c\u8478\u84f0\u595a\u550f\u5f99\u9969\u960b\u6d60\u6dc5\u5c63\u5b09\u73ba\u6a28\u66e6\u89cb\u6b37\u71b9\u798a\u79a7\u94b8\u7699\u7a78\u8725\u87cb\u823e\u7fb2\u7c9e\u7fd5\u91af\u9f37",
            "xia": "\u778e\u867e\u5323\u971e\u8f96\u6687\u5ce1\u4fa0\u72ed\u4e0b\u53a6\u590f\u5413\u6380\u846d\u55c4\u72ce\u9050\u7455\u7856\u7615\u7f45\u9ee0",
            "xian": "\u9528\u5148\u4ed9\u9c9c\u7ea4\u54b8\u8d24\u8854\u8237\u95f2\u6d8e\u5f26\u5acc\u663e\u9669\u73b0\u732e\u53bf\u817a\u9985\u7fa1\u5baa\u9677\u9650\u7ebf\u51bc\u85d3\u5c98\u7303\u66b9\u5a34\u6c19\u7946\u9e47\u75eb\u86ac\u7b45\u7c7c\u9170\u8df9",
            "xiang": "\u76f8\u53a2\u9576\u9999\u7bb1\u8944\u6e58\u4e61\u7fd4\u7965\u8be6\u60f3\u54cd\u4eab\u9879\u5df7\u6a61\u50cf\u5411\u8c61\u8297\u8459\u9977\u5ea0\u9aa7\u7f03\u87d3\u9c9e\u98e8",
            "xiao": "\u8427\u785d\u9704\u524a\u54ee\u56a3\u9500\u6d88\u5bb5\u6dc6\u6653\u5c0f\u5b5d\u6821\u8096\u5578\u7b11\u6548\u54d3\u54bb\u5d24\u6f47\u900d\u9a81\u7ee1\u67ad\u67b5\u7b71\u7bab\u9b48",
            "xie": "\u6954\u4e9b\u6b47\u874e\u978b\u534f\u631f\u643a\u90aa\u659c\u80c1\u8c10\u5199\u68b0\u5378\u87f9\u61c8\u6cc4\u6cfb\u8c22\u5c51\u5055\u4eb5\u52f0\u71ee\u85a4\u64b7\u5ee8\u7023\u9082\u7ec1\u7f2c\u69ad\u698d\u6b59\u8e9e",
            "xin": "\u85aa\u82af\u950c\u6b23\u8f9b\u65b0\u5ffb\u5fc3\u4fe1\u8845\u56df\u99a8\u8398\u6b46\u94fd\u946b",
            "xing": "\u661f\u8165\u7329\u60fa\u5174\u5211\u578b\u5f62\u90a2\u884c\u9192\u5e78\u674f\u6027\u59d3\u9649\u8347\u8365\u64e4\u60bb\u784e",
            "xiong": "\u5144\u51f6\u80f8\u5308\u6c79\u96c4\u718a\u828e",
            "xiu": "\u4f11\u4fee\u7f9e\u673d\u55c5\u9508\u79c0\u8896\u7ee3\u83a0\u5cab\u9990\u5ea5\u9e3a\u8c85\u9af9",
            "xu": "\u589f\u620c\u9700\u865a\u5618\u987b\u5f90\u8bb8\u84c4\u9157\u53d9\u65ed\u5e8f\u755c\u6064\u7d6e\u5a7f\u7eea\u7eed\u8bb4\u8be9\u5729\u84ff\u6035\u6d2b\u6e86\u987c\u6829\u7166\u7809\u76f1\u80e5\u7cc8\u9191",
            "xuan": "\u8f69\u55a7\u5ba3\u60ac\u65cb\u7384\u9009\u7663\u7729\u7eda\u5107\u8c16\u8431\u63ce\u9994\u6ceb\u6d35\u6e32\u6f29\u7487\u6966\u6684\u70ab\u714a\u78b9\u94c9\u955f\u75c3",
            "xue": "\u9774\u859b\u5b66\u7a74\u96ea\u8840\u5671\u6cf6\u9cd5",
            "xun": "\u52cb\u718f\u5faa\u65ec\u8be2\u5bfb\u9a6f\u5de1\u6b89\u6c5b\u8bad\u8baf\u900a\u8fc5\u5dfd\u57d9\u8340\u85b0\u5ccb\u5f87\u6d54\u66db\u7aa8\u91ba\u9c9f",
            "ya": "\u538b\u62bc\u9e26\u9e2d\u5440\u4e2b\u82bd\u7259\u869c\u5d16\u8859\u6daf\u96c5\u54d1\u4e9a\u8bb6\u4f22\u63e0\u5416\u5c88\u8fd3\u5a05\u740a\u6860\u6c29\u7811\u775a\u75d6",
            "yan": "\u7109\u54bd\u9609\u70df\u6df9\u76d0\u4e25\u7814\u8712\u5ca9\u5ef6\u8a00\u989c\u960e\u708e\u6cbf\u5944\u63a9\u773c\u884d\u6f14\u8273\u5830\u71d5\u538c\u781a\u96c1\u5501\u5f66\u7130\u5bb4\u8c1a\u9a8c\u53a3\u9765\u8d5d\u4fe8\u5043\u5156\u8ba0\u8c33\u90fe\u9122\u82ab\u83f8\u5d26\u6079\u95eb\u960f\u6d07\u6e6e\u6edf\u598d\u5ae3\u7430\u664f\u80ed\u814c\u7131\u7f68\u7b75\u917d\u9b47\u990d\u9f39",
            "yang": "\u6b83\u592e\u9e2f\u79e7\u6768\u626c\u4f6f\u75a1\u7f8a\u6d0b\u9633\u6c27\u4ef0\u75d2\u517b\u6837\u6f3e\u5f89\u600f\u6cf1\u7080\u70ca\u6059\u86d8\u9785",
            "yao": "\u9080\u8170\u5996\u7476\u6447\u5c27\u9065\u7a91\u8c23\u59da\u54ac\u8200\u836f\u8981\u8000\u592d\u723b\u5406\u5d3e\u5fad\u7039\u5e7a\u73e7\u6773\u66dc\u80b4\u9e5e\u7a88\u7e47\u9cd0",
            "ye": "\u6930\u564e\u8036\u7237\u91ce\u51b6\u4e5f\u9875\u6396\u4e1a\u53f6\u66f3\u814b\u591c\u6db2\u8c12\u90ba\u63f6\u9980\u6654\u70e8\u94d8",
            "yi": "\u4e00\u58f9\u533b\u63d6\u94f1\u4f9d\u4f0a\u8863\u9890\u5937\u9057\u79fb\u4eea\u80f0\u7591\u6c82\u5b9c\u59e8\u5f5d\u6905\u8681\u501a\u5df2\u4e59\u77e3\u4ee5\u827a\u6291\u6613\u9091\u5c79\u4ebf\u5f79\u81c6\u9038\u8084\u75ab\u4ea6\u88d4\u610f\u6bc5\u5fc6\u4e49\u76ca\u6ea2\u8be3\u8bae\u8c0a\u8bd1\u5f02\u7ffc\u7fcc\u7ece\u5208\u5293\u4f7e\u8bd2\u572a\u572f\u57f8\u61ff\u82e1\u858f\u5f08\u5955\u6339\u5f0b\u5453\u54a6\u54bf\u566b\u5cc4\u5db7\u7317\u9974\u603f\u6021\u6092\u6f2a\u8fe4\u9a7f\u7f22\u6baa\u8d3b\u65d6\u71a0\u9487\u9552\u9571\u75cd\u7617\u7654\u7fca\u8864\u8734\u8223\u7fbf\u7ff3\u914f\u9edf",
            "yin": "\u8335\u836b\u56e0\u6bb7\u97f3\u9634\u59fb\u541f\u94f6\u6deb\u5bc5\u996e\u5c39\u5f15\u9690\u5370\u80e4\u911e\u5819\u831a\u5591\u72fa\u5924\u6c24\u94df\u763e\u8693\u972a\u9f88",
            "ying": "\u82f1\u6a31\u5a74\u9e70\u5e94\u7f28\u83b9\u8424\u8425\u8367\u8747\u8fce\u8d62\u76c8\u5f71\u9896\u786c\u6620\u5b34\u90e2\u8314\u83ba\u8426\u6484\u5624\u81ba\u6ee2\u6f46\u701b\u745b\u748e\u6979\u9e66\u763f\u988d\u7f42",
            "yo": "\u54df\u5537",
            "yong": "\u62e5\u4f63\u81c3\u75c8\u5eb8\u96cd\u8e0a\u86f9\u548f\u6cf3\u6d8c\u6c38\u607f\u52c7\u7528\u4fd1\u58c5\u5889\u6175\u9095\u955b\u752c\u9cd9\u9954",
            "you": "\u5e7d\u4f18\u60a0\u5fe7\u5c24\u7531\u90ae\u94c0\u72b9\u6cb9\u6e38\u9149\u6709\u53cb\u53f3\u4f51\u91c9\u8bf1\u53c8\u5e7c\u5363\u6538\u4f91\u83b8\u5466\u56ff\u5ba5\u67da\u7337\u7256\u94d5\u75a3\u8763\u9c7f\u9edd\u9f2c",
            "yu": "\u8fc2\u6de4\u4e8e\u76c2\u6986\u865e\u611a\u8206\u4f59\u4fde\u903e\u9c7c\u6109\u6e1d\u6e14\u9685\u4e88\u5a31\u96e8\u4e0e\u5c7f\u79b9\u5b87\u8bed\u7fbd\u7389\u57df\u828b\u90c1\u5401\u9047\u55bb\u5cea\u5fa1\u6108\u6b32\u72f1\u80b2\u8a89\u6d74\u5bd3\u88d5\u9884\u8c6b\u9a6d\u79ba\u6bd3\u4f1b\u4fe3\u8c00\u8c15\u8438\u84e3\u63c4\u5581\u5704\u5709\u5d5b\u72f3\u996b\u5ebe\u9608\u59aa\u59a4\u7ea1\u745c\u6631\u89ce\u8174\u6b24\u65bc\u715c\u71e0\u807f\u94b0\u9e46\u7610\u7600\u7ab3\u8753\u7afd\u8201\u96e9\u9f89",
            "yuan": "\u9e33\u6e0a\u51a4\u5143\u57a3\u8881\u539f\u63f4\u8f95\u56ed\u5458\u5706\u733f\u6e90\u7f18\u8fdc\u82d1\u613f\u6028\u9662\u586c\u6c85\u5a9b\u7457\u6a7c\u7230\u7722\u9e22\u8788\u9f0b",
            "yue": "\u66f0\u7ea6\u8d8a\u8dc3\u94a5\u5cb3\u7ca4\u6708\u60a6\u9605\u9fa0\u6a3e\u5216\u94ba",
            "yun": "\u8018\u4e91\u90e7\u5300\u9668\u5141\u8fd0\u8574\u915d\u6655\u97f5\u5b55\u90d3\u82b8\u72c1\u607d\u7ead\u6b92\u6600\u6c32",
            "za": "\u531d\u7838\u6742\u62f6\u5482",
            "zai": "\u683d\u54c9\u707e\u5bb0\u8f7d\u518d\u5728\u54b1\u5d3d\u753e",
            "zan": "\u6512\u6682\u8d5e\u74d2\u661d\u7c2a\u7ccc\u8db1\u933e",
            "zang": "\u8d43\u810f\u846c\u5958\u6215\u81e7",
            "zao": "\u906d\u7cdf\u51ff\u85fb\u67a3\u65e9\u6fa1\u86a4\u8e81\u566a\u9020\u7682\u7076\u71e5\u5523\u7f2b",
            "ze": "\u8d23\u62e9\u5219\u6cfd\u4ec4\u8d5c\u5567\u8fee\u6603\u7b2e\u7ba6\u8234",
            "zei": "\u8d3c",
            "zen": "\u600e\u8c2e",
            "zeng": "\u589e\u618e\u66fe\u8d60\u7f2f\u7511\u7f7e\u9503",
            "zha": "\u624e\u55b3\u6e23\u672d\u8f67\u94e1\u95f8\u7728\u6805\u69a8\u548b\u4e4d\u70b8\u8bc8\u63f8\u5412\u54a4\u54f3\u600d\u781f\u75c4\u86b1\u9f44",
            "zhai": "\u6458\u658b\u5b85\u7a84\u503a\u5be8\u7826",
            "zhan": "\u77bb\u6be1\u8a79\u7c98\u6cbe\u76cf\u65a9\u8f97\u5d2d\u5c55\u8638\u6808\u5360\u6218\u7ad9\u6e5b\u7efd\u8c35\u640c\u65c3",
            "zhang": "\u6a1f\u7ae0\u5f70\u6f33\u5f20\u638c\u6da8\u6756\u4e08\u5e10\u8d26\u4ed7\u80c0\u7634\u969c\u4ec9\u9123\u5e5b\u5d82\u7350\u5adc\u748b\u87d1",
            "zhao": "\u62db\u662d\u627e\u6cbc\u8d75\u7167\u7f69\u5146\u8087\u53ec\u722a\u8bcf\u68f9\u948a\u7b0a",
            "zhe": "\u906e\u6298\u54f2\u86f0\u8f99\u8005\u9517\u8517\u8fd9\u6d59\u8c2a\u966c\u67d8\u8f84\u78d4\u9e67\u891a\u8707\u8d6d",
            "zhen": "\u73cd\u659f\u771f\u7504\u7827\u81fb\u8d1e\u9488\u4fa6\u6795\u75b9\u8bca\u9707\u632f\u9547\u9635\u7f1c\u6862\u699b\u8f78\u8d48\u80d7\u6715\u796f\u755b\u9e29",
            "zheng": "\u84b8\u6323\u7741\u5f81\u72f0\u4e89\u6014\u6574\u62ef\u6b63\u653f\u5e27\u75c7\u90d1\u8bc1\u8be4\u5ce5\u94b2\u94ee\u7b5d",
            "zhi": "\u829d\u679d\u652f\u5431\u8718\u77e5\u80a2\u8102\u6c41\u4e4b\u7ec7\u804c\u76f4\u690d\u6b96\u6267\u503c\u4f84\u5740\u6307\u6b62\u8dbe\u53ea\u65e8\u7eb8\u5fd7\u631a\u63b7\u81f3\u81f4\u7f6e\u5e1c\u5cd9\u5236\u667a\u79e9\u7a1a\u8d28\u7099\u75d4\u6ede\u6cbb\u7a92\u536e\u965f\u90c5\u57f4\u82b7\u646d\u5e19\u5fee\u5f58\u54ab\u9a98\u6809\u67b3\u6800\u684e\u8f75\u8f7e\u6534\u8d3d\u81a3\u7949\u7957\u9ef9\u96c9\u9e37\u75e3\u86ed\u7d77\u916f\u8dd6\u8e2c\u8e2f\u8c78\u89ef",
            "zhong": "\u4e2d\u76c5\u5fe0\u949f\u8877\u7ec8\u79cd\u80bf\u91cd\u4ef2\u4f17\u51a2\u953a\u87bd\u8202\u822f\u8e35",
            "zhou": "\u821f\u5468\u5dde\u6d32\u8bcc\u7ca5\u8f74\u8098\u5e1a\u5492\u76b1\u5b99\u663c\u9aa4\u5544\u7740\u501c\u8bf9\u836e\u9b3b\u7ea3\u80c4\u78a1\u7c40\u8233\u914e\u9cb7",
            "zhu": "\u73e0\u682a\u86db\u6731\u732a\u8bf8\u8bdb\u9010\u7af9\u70db\u716e\u62c4\u77a9\u5631\u4e3b\u8457\u67f1\u52a9\u86c0\u8d2e\u94f8\u7b51\u4f4f\u6ce8\u795d\u9a7b\u4f2b\u4f8f\u90be\u82ce\u8331\u6d19\u6e1a\u6f74\u9a7a\u677c\u69e0\u6a65\u70b7\u94e2\u75b0\u7603\u86b0\u7afa\u7bb8\u7fe5\u8e85\u9e88",
            "zhua": "\u6293",
            "zhuai": "\u62fd",
            "zhuan": "\u4e13\u7816\u8f6c\u64b0\u8d5a\u7bc6\u629f\u556d\u989b",
            "zhuang": "\u6869\u5e84\u88c5\u5986\u649e\u58ee\u72b6\u4e2c",
            "zhui": "\u690e\u9525\u8ffd\u8d58\u5760\u7f00\u8411\u9a93\u7f12",
            "zhun": "\u8c06\u51c6",
            "zhuo": "\u6349\u62d9\u5353\u684c\u7422\u8301\u914c\u707c\u6d4a\u502c\u8bfc\u5ef4\u855e\u64e2\u555c\u6d5e\u6dbf\u6753\u712f\u799a\u65ab",
            "zi": "\u5179\u54a8\u8d44\u59ff\u6ecb\u6dc4\u5b5c\u7d2b\u4ed4\u7c7d\u6ed3\u5b50\u81ea\u6e0d\u5b57\u8c18\u5d6b\u59ca\u5b73\u7f01\u6893\u8f8e\u8d40\u6063\u7726\u9531\u79ed\u8014\u7b2b\u7ca2\u89dc\u8a3e\u9cbb\u9aed",
            "zong": "\u9b03\u68d5\u8e2a\u5b97\u7efc\u603b\u7eb5\u8159\u7cbd",
            "zou": "\u90b9\u8d70\u594f\u63cd\u9139\u9cb0",
            "zu": "\u79df\u8db3\u5352\u65cf\u7956\u8bc5\u963b\u7ec4\u4fce\u83f9\u5550\u5f82\u9a75\u8e74",
            "zuan": "\u94bb\u7e82\u6525\u7f35",
            "zui": "\u5634\u9189\u6700\u7f6a",
            "zun": "\u5c0a\u9075\u6499\u6a3d\u9cdf",
            "zuo": "\u6628\u5de6\u4f50\u67de\u505a\u4f5c\u5750\u5ea7\u961d\u963c\u80d9\u795a\u9162",
            "cou": "\u85ae\u6971\u8f8f\u8160",
            "nang": "\u652e\u54dd\u56d4\u9995\u66e9",
            "o": "\u5594",
            "dia": "\u55f2",
            "chuai": "\u562c\u81aa\u8e39",
            "cen": "\u5c91\u6d94",
            "diu": "\u94e5",
            "nou": "\u8028",
            "fou": "\u7f36",
            "bia": "\u9adf"
        };
        this.polyphone = {
            "19969": "DZ",
            "19975": "WM",
            "19988": "QJ",
            "20048": "YL",
            "20056": "SC",
            "20060": "NM",
            "20094": "QG",
            "20127": "QJ",
            "20167": "QC",
            "20193": "YG",
            "20250": "KH",
            "20256": "ZC",
            "20282": "SC",
            "20285": "QJG",
            "20291": "TD",
            "20314": "YD",
            "20340": "NE",
            "20375": "TD",
            "20389": "YJ",
            "20391": "CZ",
            "20415": "PB",
            "20446": "YS",
            "20447": "SQ",
            "20504": "TC",
            "20608": "KG",
            "20854": "QJ",
            "20857": "ZC",
            "20911": "PF",
            "20985": "AW",
            "21032": "PB",
            "21048": "XQ",
            "21049": "SC",
            "21089": "YS",
            "21119": "JC",
            "21242": "SB",
            "21273": "SC",
            "21305": "YP",
            "21306": "QO",
            "21330": "ZC",
            "21333": "SDC",
            "21345": "QK",
            "21378": "CA",
            "21397": "SC",
            "21414": "XS",
            "21442": "SC",
            "21477": "JG",
            "21480": "TD",
            "21484": "ZS",
            "21494": "YX",
            "21505": "YX",
            "21512": "HG",
            "21523": "XH",
            "21537": "PB",
            "21542": "PF",
            "21549": "KH",
            "21571": "E",
            "21574": "DA",
            "21588": "TD",
            "21589": "O",
            "21618": "ZC",
            "21621": "KHA",
            "21632": "ZJ",
            "21654": "KG",
            "21679": "LKG",
            "21683": "KH",
            "21710": "A",
            "21719": "YH",
            "21734": "WOE",
            "21769": "A",
            "21780": "WN",
            "21804": "XH",
            "21834": "A",
            "21899": "ZD",
            "21903": "RN",
            "21908": "WO",
            "21939": "ZC",
            "21956": "SA",
            "21964": "YA",
            "21970": "TD",
            "22003": "A",
            "22031": "JG",
            "22040": "XS",
            "22060": "ZC",
            "22066": "ZC",
            "22079": "MH",
            "22129": "XJ",
            "22179": "XA",
            "22237": "NJ",
            "22244": "TD",
            "22280": "JQ",
            "22300": "YH",
            "22313": "XW",
            "22331": "YQ",
            "22343": "YJ",
            "22351": "PH",
            "22395": "DC",
            "22412": "TD",
            "22484": "PB",
            "22500": "PB",
            "22534": "ZD",
            "22549": "DH",
            "22561": "PB",
            "22612": "TD",
            "22771": "KQ",
            "22831": "HB",
            "22841": "JG",
            "22855": "QJ",
            "22865": "XQ",
            "23013": "ML",
            "23081": "WM",
            "23487": "SX",
            "23558": "QJ",
            "23561": "YW",
            "23586": "YW",
            "23614": "YW",
            "23615": "SN",
            "23631": "PB",
            "23646": "ZS",
            "23663": "ZT",
            "23673": "YG",
            "23762": "TD",
            "23769": "ZS",
            "23780": "QJ",
            "23884": "QK",
            "24055": "XH",
            "24113": "DC",
            "24162": "ZC",
            "24191": "GA",
            "24273": "QJ",
            "24324": "NL",
            "24377": "TD",
            "24378": "QJ",
            "24439": "PF",
            "24554": "ZS",
            "24683": "TD",
            "24694": "WE",
            "24733": "LK",
            "24925": "TN",
            "25094": "ZG",
            "25100": "XQ",
            "25103": "XH",
            "25153": "PB",
            "25170": "PB",
            "25179": "KG",
            "25203": "PB",
            "25240": "ZS",
            "25282": "FB",
            "25303": "NA",
            "25324": "KG",
            "25341": "ZY",
            "25373": "WZ",
            "25375": "XJ",
            "25384": "A",
            "25457": "A",
            "25528": "SD",
            "25530": "SC",
            "25552": "TD",
            "25774": "ZC",
            "25874": "ZC",
            "26044": "YW",
            "26080": "WM",
            "26292": "PB",
            "26333": "PB",
            "26355": "ZY",
            "26366": "CZ",
            "26397": "ZC",
            "26399": "QJ",
            "26415": "ZS",
            "26451": "SB",
            "26526": "ZC",
            "26552": "JG",
            "26561": "TD",
            "26588": "JG",
            "26597": "CZ",
            "26629": "ZS",
            "26638": "YL",
            "26646": "XQ",
            "26653": "KG",
            "26657": "XJ",
            "26727": "HG",
            "26894": "ZC",
            "26937": "ZS",
            "26946": "ZC",
            "26999": "KJ",
            "27099": "KJ",
            "27449": "YQ",
            "27481": "XS",
            "27542": "ZS",
            "27663": "ZS",
            "27748": "TS",
            "27784": "SC",
            "27788": "ZD",
            "27795": "TD",
            "27812": "O",
            "27850": "PB",
            "27852": "MB",
            "27895": "SL",
            "27898": "PL",
            "27973": "QJ",
            "27981": "KH",
            "27986": "HX",
            "27994": "XJ",
            "28044": "YC",
            "28065": "WG",
            "28177": "SM",
            "28267": "QJ",
            "28291": "KH",
            "28337": "ZQ",
            "28463": "TL",
            "28548": "DC",
            "28601": "TD",
            "28689": "PB",
            "28805": "JG",
            "28820": "QG",
            "28846": "PB",
            "28952": "TD",
            "28975": "ZC",
            "29100": "A",
            "29325": "QJ",
            "29575": "SL",
            "29602": "FB",
            "30010": "TD",
            "30044": "CX",
            "30058": "PF",
            "30091": "YSP",
            "30111": "YN",
            "30229": "XJ",
            "30427": "SC",
            "30465": "SX",
            "30631": "YQ",
            "30655": "QJ",
            "30684": "QJG",
            "30707": "SD",
            "30729": "XH",
            "30796": "LG",
            "30917": "PB",
            "31074": "NM",
            "31085": "JZ",
            "31109": "SC",
            "31181": "ZC",
            "31192": "MLB",
            "31293": "JQ",
            "31400": "YX",
            "31584": "YJ",
            "31896": "ZN",
            "31909": "ZY",
            "31995": "XJ",
            "32321": "PF",
            "32327": "ZY",
            "32418": "HG",
            "32420": "XQ",
            "32421": "HG",
            "32438": "LG",
            "32473": "GJ",
            "32488": "TD",
            "32521": "QJ",
            "32527": "PB",
            "32562": "ZSQ",
            "32564": "JZ",
            "32735": "ZD",
            "32793": "PB",
            "33071": "PF",
            "33098": "XL",
            "33100": "YA",
            "33152": "PB",
            "33261": "CX",
            "33324": "BP",
            "33333": "TD",
            "33406": "YA",
            "33426": "WM",
            "33432": "PB",
            "33445": "JG",
            "33486": "ZN",
            "33493": "TS",
            "33507": "QJ",
            "33540": "QJ",
            "33544": "ZC",
            "33564": "XQ",
            "33617": "YT",
            "33632": "QJ",
            "33636": "XH",
            "33637": "YX",
            "33694": "WG",
            "33705": "PF",
            "33728": "YW",
            "33882": "SR",
            "34067": "WM",
            "34074": "YW",
            "34121": "QJ",
            "34255": "ZC",
            "34259": "XL",
            "34425": "JH",
            "34430": "XH",
            "34485": "KH",
            "34503": "YS",
            "34532": "HG",
            "34552": "XS",
            "34558": "YE",
            "34593": "ZL",
            "34660": "YQ",
            "34892": "XH",
            "34928": "SC",
            "34999": "QJ",
            "35048": "PB",
            "35059": "SC",
            "35098": "ZC",
            "35203": "TQ",
            "35265": "JX",
            "35299": "JX",
            "35782": "SZ",
            "35828": "YS",
            "35830": "E",
            "35843": "TD",
            "35895": "YG",
            "35977": "MH",
            "36158": "JG",
            "36228": "QJ",
            "36426": "XQ",
            "36466": "DC",
            "36710": "JC",
            "36711": "ZYG",
            "36767": "PB",
            "36866": "SK",
            "36951": "YW",
            "37034": "YX",
            "37063": "XH",
            "37218": "ZC",
            "37325": "ZC",
            "38063": "PB",
            "38079": "TD",
            "38085": "QY",
            "38107": "DC",
            "38116": "TD",
            "38123": "YD",
            "38224": "HG",
            "38241": "XTC",
            "38271": "ZC",
            "38415": "YE",
            "38426": "KH",
            "38461": "YD",
            "38463": "AE",
            "38466": "PB",
            "38477": "XJ",
            "38518": "YT",
            "38551": "WK",
            "38585": "ZC",
            "38704": "XS",
            "38739": "LJ",
            "38761": "GJ",
            "38808": "SQ",
            "39048": "JG",
            "39049": "XJ",
            "39052": "HG",
            "39076": "CZ",
            "39271": "XT",
            "39534": "TD",
            "39552": "TD",
            "39584": "PB",
            "39647": "SB",
            "39730": "LG",
            "39748": "TPB",
            "40109": "ZQ",
            "40479": "ND",
            "40516": "HG",
            "40536": "HG",
            "40583": "QJ",
            "40765": "YQ",
            "40784": "QJ",
            "40840": "YK",
            "40863": "QJG"
        };
    };
    PinyinService.prototype.translateToSimplize = function (char) {
        var index = TraditionalStr.indexOf(char);
        if (index > -1) {
            return SimplizedStr[index];
        }
        else {
            return char;
        }
    };
    /**
     * 获取拼音首字母
     * @param {String} str 输入的中文字符串
     */
    PinyinService.prototype.getCamelChars = function (str) {
        if (typeof (str) != "string")
            throw new Error("函数getCamelChars需要字符串类型参数!");
        var chars = new Array(); //保存中间结果的数组
        for (var i = 0, len = str.length; i < len; i++) {
            //获得unicode码
            var ch = this.translateToSimplize(str.charAt(i));
            //检查该unicode码是否在处理范围之内,在则返回该码对映汉字的拼音首字母,不在则调用其它函数处理
            chars.push(this._getChar(ch));
        }
        //处理arrResult,返回所有可能的拼音首字母串数组
        var result = this._getResult(chars);
        this.options.charCase === 1 ?
            result = result.toLowerCase() :
            this.options.charCase === 2 ?
                result = result.toUpperCase() :
                {};
        return result;
    };
    /**
     * 获取拼音
     * @param {String} str 输入的中文字符串
     */
    PinyinService.prototype.getFullChars = function (str) {
        var len = str.length;
        var result = "";
        // let reg = new RegExp('[a-zA-Z0-9\- ]');
        for (var i = 0; i < len; i++) {
            var ch = str.substr(i, 1);
            ch = this.translateToSimplize(ch);
            var unicode = ch.charCodeAt(0);
            //如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数
            if (unicode > 40869 || unicode < 19968) {
                result += ch;
            }
            else {
                var name_1 = this._getFullChar(ch);
                if (name_1 !== false) {
                    result += name_1;
                }
            }
        }
        this.options.charCase === 1 ?
            result = result.toLowerCase() :
            this.options.charCase === 2 ?
                result = result.toUpperCase() :
                {};
        return result;
    };
    PinyinService.prototype._getFullChar = function (ch) {
        for (var key in this.full_dict) {
            if (this.full_dict[key].indexOf(ch) != -1) {
                return this._capitalize(key);
            }
        }
        return false;
    };
    /**
     * 首字母大写
     */
    PinyinService.prototype._capitalize = function (str) {
        if (str.length > 0) {
            var first = str.substr(0, 1).toUpperCase();
            var spare = str.substr(1, str.length);
            return first + spare;
        }
    };
    PinyinService.prototype._getChar = function (ch) {
        var unicode = ch.charCodeAt(0);
        //如果不在汉字处理范围之内,返回原字符,也可以调用自己的处理函数
        if (unicode > 40869 || unicode < 19968)
            return ch; //dealWithOthers(ch);
        //检查是否是多音字,是按多音字处理,不是就直接在strChineseFirstPY字符串中找对应的首字母
        if (!this.options.checkPolyphone)
            return this.char_dict.charAt(unicode - 19968);
        return this.polyphone[unicode] ? this.polyphone[unicode] : this.char_dict.charAt(unicode - 19968);
    };
    PinyinService.prototype._getResult = function (chars) {
        if (!this.options.checkPolyphone)
            return chars.join('');
        var result = [''];
        for (var i = 0, len = chars.length; i < len; i++) {
            var str = chars[i];
            var strlen = str.length;
            if (strlen == 1) {
                for (var j = 0; j < result.length; j++) {
                    result[j] += str;
                }
            }
            else {
                var swap1 = result.slice(0);
                result = [];
                for (var j = 0; j < strlen; j++) {
                    //复制一个相同的arrRslt
                    var swap2 = swap1.slice(0);
                    //把当前字符str[k]添加到每个元素末尾
                    for (var k = 0; k < swap2.length; k++) {
                        swap2[k] += str.charAt(j);
                    }
                    //把复制并修改后的数组连接到arrRslt上
                    result = result.concat(swap2);
                }
            }
        }
        return result;
    };
    PinyinService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PinyinService);
    return PinyinService;
}());

//# sourceMappingURL=pinyin.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_providers__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SetPasswordPage = (function () {
    function SetPasswordPage(navCtrl, viewCtrl, session, userProvider, authProvider, nativeService, events, formBuilder, translateService, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.session = session;
        this.userProvider = userProvider;
        this.authProvider = authProvider;
        this.nativeService = nativeService;
        this.events = events;
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.modalCtrl = modalCtrl;
        this.word = '';
        this.tipsId = 'tips';
        this.tipsIdes = 'tips';
        this.isConfirmPass = false;
        this.isCorrect = false;
        this.textColr = "defoult";
        this.reminder = this.translateService.instant('SET_PASSWORD_RULE');
        this.aStr = [
            this.translateService.instant('SET_PASSWORD_COEFFICIENT1'),
            this.translateService.instant('SET_PASSWORD_COEFFICIENT2'),
            '', '', ''
            // this.translateService.instant('SET_PASSWORD_COEFFICIENT3'),
            // this.translateService.instant('SET_PASSWORD_COEFFICIENT4'),
            // this.translateService.instant('SET_PASSWORD_COEFFICIENT5') 
        ];
        if (this.session.user != null) {
            this.currentUser = this.session.user;
        }
        this.form = formBuilder.group({
            newPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]
        });
        this.isReadyToSave = false;
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            if (_this.form.valid) {
                _this.veryfy();
            }
        });
    }
    //校验密码复杂系数
    SetPasswordPage.prototype.ionViewDidLoad = function (clack) {
        if (this.form.value.newPassword.length < 1)
            return;
        var num = this.checkStrong(this.form.value.newPassword);
        if (this.form.value.newPassword.length >= 8) {
            switch (num) {
                case 0:
                    this.word = this.aStr[0];
                    this.tipsId = 'tips';
                    break;
                case 1:
                    this.word = this.aStr[1];
                    this.tipsId = 'tips0';
                    break;
                case 2:
                    this.word = this.aStr[2];
                    this.tipsId = 'tips1';
                    break;
                case 3:
                    this.word = this.aStr[2];
                    this.tipsId = 'tips2';
                    break;
                case 4:
                    this.word = this.aStr[2];
                    this.tipsId = 'tips3';
                    break;
            }
            if (num >= 2) {
                this.tipsIdes = 'tips0';
                this.isConfirmPass = true;
                this.textColr = "defoult";
            }
            else {
                this.textColr = "status";
            }
        }
        else {
            if (num >= 2) {
                this.textColr = "place";
            }
            else {
                this.textColr = "invalid";
            }
            this.isConfirmPass = false;
            this.word = "";
            this.tipsId = 'tips';
            this.tipsIdes = 'tips';
            this.wordes = "";
        }
        this.isCorrect = false;
        this.veryfy();
    };
    SetPasswordPage.prototype.checkStrong = function (val) {
        var modes = 0;
        if (/\d/.test(val))
            modes++; //数字
        if (/[a-z]/.test(val))
            modes++; //小写
        if (/[A-Z]/.test(val))
            modes++; //大写
        if (/\W/.test(val))
            modes++; //特殊字符
        return modes;
    };
    //校验密码是否一致
    SetPasswordPage.prototype.veryfy = function () {
        if (this.form.value.confirmPassword == this.form.value.newPassword) {
            this.wordes = this.word;
            this.tipsIdes = this.tipsId;
            this.isCorrect = true;
            this.isReadyToSave = true;
        }
        else {
            this.tipsIdes = 'tips0';
            this.isCorrect = false;
            this.isReadyToSave = false;
        }
    };
    SetPasswordPage.prototype.submit = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        if (this.form.value.confirmPassword != this.form.value.newPassword) {
            this.nativeService.alert(this.translateService.instant("SET_PASSWORD_CONFIRM_INVLID"));
            return;
        }
        this.authProvider.setPassword({
            password: this.form.value.newPassword.toString()
        }).subscribe(function (data) {
            _this.userProvider.getUserInfo().subscribe(function (data) {
                _this.viewCtrl.dismiss();
            });
        });
    };
    SetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-set-password',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\my\set-password\set-password.html"*/'<ion-header >\n\n    <ion-navbar>\n\n        <ion-title>{{ \'MY_INFO_SET_PASSWORD\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="submit()">\n\n        \n\n        <ion-list>\n\n            <!--<ion-item>\n\n                <H3>{{\'SET_PASSWORD_RULE\'|translate}}</H3>\n\n                <div id="tips"><span  background = \'red\'> </span><span></span><span></span><span></span></div>\n\n            </ion-item>-->\n\n            <ion-item class = "tips">\n\n                <ion-label floating>{{ \'CHANGE_PASSWORD_NEW\' | translate }}</ion-label>\n\n                <ion-input type="password" (keyup)="ionViewDidLoad($event)" formControlName="newPassword"></ion-input>\n\n                <ion-icon *ngIf = "isConfirmPass" id = {{tipsId}} name="checkmark-circle" item-end></ion-icon>\n\n                <!-- <ion-icon *ngIf = "!isConfirmPass"  id = {{tipsId}} name = "key" item-end></ion-icon> -->\n\n                <ion-icon id = {{tipsId}} style="font-size: 18px;" item-end>{{word}}</ion-icon>\n\n            </ion-item>\n\n            <ion-item  class = "tips" *ngIf = "isConfirmPass">\n\n                <ion-label floating>{{ \'CHANGE_PASSWORD_CONFIRM\' | translate }}</ion-label>\n\n                <ion-input type="password" (keyup)="veryfy($event)"  formControlName="confirmPassword"></ion-input>\n\n                <ion-icon *ngIf = "isCorrect" id = {{tipsIdes}} name="checkmark-circle" item-end></ion-icon>\n\n                <ion-icon *ngIf = "!isCorrect" id = {{tipsIdes}} name = "lose-circle" item-end></ion-icon>\n\n                <ion-icon id = {{tipsIdes}} style="font-size: 18px;" item-end>{{wordes}}</ion-icon>\n\n            </ion-item>\n\n\n\n            <p padding-left id ={{textColr}} [innerHTML] = \'reminder\'></p> \n\n            \n\n        </ion-list>\n\n        <div padding>\n\n            <button type="submit" [disabled]="!isReadyToSave" ion-button color="primary" round block icon-left>\n\n                {{\'CHANGE_PASSWORD_SUBMIT\' | translate}}\n\n            </button>\n\n        </div>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\my\set-password\set-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["m" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_providers__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ModalController */]])
    ], SetPasswordPage);
    return SetPasswordPage;
}());

//# sourceMappingURL=set-password.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(612);




if (!__WEBPACK_IMPORTED_MODULE_0__services_constants__["t" /* IS_DEBUG */]) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FunDebugErrorHandler */
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_transitions__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_app_version__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_qr_scanner__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_clipboard__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_sim__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_transfer__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_globalization__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_in_app_browser__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_network__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_app_minimize__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_keyboard__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_call_number__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_themeable_browser__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_diagnostic__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_opener__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__jiguang_ionic_jpush__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_user_agent__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_pipes_module__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_helper__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_file_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_file_chooser__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_providers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__app_component__ = __webpack_require__(998);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ng2_dragula__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_angular2_moment__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_fundebug_javascript__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_fundebug_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_46_fundebug_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_workflow_provider__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_contact_provider__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_share_provider__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_blog_provider__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_club_provider__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_sqlite_provider__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_sqlite__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__services_sqlite_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__services_pinyin__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_social_social__ = __webpack_require__(594);
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
















































//参考文档:https://docs.fundebug.com/notifier/javascript/framework/ionic2.html












__WEBPACK_IMPORTED_MODULE_46_fundebug_javascript__["apikey"] = __WEBPACK_IMPORTED_MODULE_34__services_constants__["p" /* FUNDEBUG_API_KEY */];
// fundebug.releasestage = IS_DEBUG ? 'development' : 'production';//应用开发阶段，development:开发;production:生产
//fundebug.silent = !IS_DEBUG;//如果暂时不需要使用Fundebug，将silent属性设为true
var FunDebugErrorHandler = (function () {
    function FunDebugErrorHandler(device, appVersion, session, handleProvider, storageService) {
        this.device = device;
        this.appVersion = appVersion;
        this.session = session;
        this.handleProvider = handleProvider;
        this.storageService = storageService;
        this.isCollectErrorInfo = false;
        this.isGetFlag = false;
    }
    FunDebugErrorHandler.prototype.handleError = function (err) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.error(err);
                        if (!this.isGetFlag) return [3 /*break*/, 1];
                        this.isCollectErrorInfo && this.sendErrorInfo(err);
                        return [3 /*break*/, 3];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.storageService.getItem('isCollectErrorInfo')];
                    case 2:
                        _a.isCollectErrorInfo = _b.sent();
                        this.isGetFlag = true;
                        this.isCollectErrorInfo && this.sendErrorInfo(err);
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FunDebugErrorHandler.prototype.sendErrorInfo = function (err) {
        var _this = this;
        this.handleProvider.generate('error', -1, err['message'] ? { message: err['message'], stack: err['stack'] } : err);
        if (this.session && this.session.userId) {
            __WEBPACK_IMPORTED_MODULE_46_fundebug_javascript__["userid"] = this.session.userId;
        }
        if (this.appversion) {
            __WEBPACK_IMPORTED_MODULE_46_fundebug_javascript__["releasestage"] = this.appversion;
            __WEBPACK_IMPORTED_MODULE_46_fundebug_javascript__["notifyError"](err);
        }
        else {
            this.appVersion.getVersionNumber().then(function (currentVersionNo) {
                _this.appversion = currentVersionNo;
                err.device = _this.device;
                __WEBPACK_IMPORTED_MODULE_46_fundebug_javascript__["releasestage"] = currentVersionNo;
                __WEBPACK_IMPORTED_MODULE_46_fundebug_javascript__["notifyError"](err);
            }).catch(function () {
                __WEBPACK_IMPORTED_MODULE_46_fundebug_javascript__["releasestage"] = 'PC Simulator';
                __WEBPACK_IMPORTED_MODULE_46_fundebug_javascript__["notifyError"](err);
            });
        }
    };
    return FunDebugErrorHandler;
}());

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_42__providers_providers__["l" /* SettingProvider */](storage, {
        optionReceiveNotify: true,
        optionLanguage: 'en-US',
        optionShowFabButton: true,
        optionBrowser: false,
        optionDebug: __WEBPACK_IMPORTED_MODULE_34__services_constants__["t" /* IS_DEBUG */],
        optionTheme: false,
        isCollectErrorInfo: false
    });
}
var AppModule = (function () {
    function AppModule(config) {
        this.config = config;
        this.setCustomTransitions();
    }
    AppModule.prototype.setCustomTransitions = function () {
        this.config.setTransition('modal-from-right-enter', __WEBPACK_IMPORTED_MODULE_2__modal_transitions__["c" /* ModalFromRightEnter */]);
        this.config.setTransition('modal-from-right-leave', __WEBPACK_IMPORTED_MODULE_2__modal_transitions__["d" /* ModalFromRightLeave */]);
        this.config.setTransition('modal-from-bottom-enter', __WEBPACK_IMPORTED_MODULE_2__modal_transitions__["a" /* ModalFromBottomEnter */]);
        this.config.setTransition('modal-from-bottom-leave', __WEBPACK_IMPORTED_MODULE_2__modal_transitions__["b" /* ModalFromBottomLeave */]);
        this.config.setTransition('modal-scale-enter', __WEBPACK_IMPORTED_MODULE_2__modal_transitions__["e" /* ModalScaleEnter */]);
        this.config.setTransition('modal-scale-leave', __WEBPACK_IMPORTED_MODULE_2__modal_transitions__["f" /* ModalScaleLeave */]);
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_43__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_43__app_component__["a" /* MyApp */], {
                    tabsPlacement: 'bottom',
                    pageTransition: 'md-transition',
                    activator: 'ripple',
                    tabsHideOnSubPages: 'true',
                    iconMode: 'ios',
                    mode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    backButtonText: '',
                }, {
                    links: [
                        { loadChildren: '../pages/account/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/identify-code/identify-code.module#IdentifyCodePageModule', name: 'IdentifyCodePage', segment: 'identify-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule', name: 'PrivacyPolicyPage', segment: 'privacy-policy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/select-country/select-country.module#SelectCountryPageModule', name: 'SelectCountryPage', segment: 'select-country', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/wf-login/wf-login.module#WfLoginPageModule', name: 'WfLoginPage', segment: 'wf-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/achievement/achieve-item/achieve-item.module#AchieveItemPageModule', name: 'AchieveItemPage', segment: 'achieve-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/achievement/achieve-task-list/achieve-task-list.module#AchieveTaskListPageModule', name: 'AchieveTaskListPage', segment: 'achieve-task-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/achievement/collection/collection.module#CollectionPageModule', name: 'CollectionPage', segment: 'collection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/achievement/achievement/achievement.module#AchievementPageModule', name: 'AchievementPage', segment: 'achievement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/achievement/my-assets/my-assets.module#MyAssetsPageModule', name: 'MyAssetsPage', segment: 'my-assets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/achievement/leader-board/leader-board.module#LeaderBoardPageModule', name: 'LeaderBoardPage', segment: 'leader-board', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/achievement/my-segment/my-segment.module#MySegmentPageModule', name: 'MySegmentPage', segment: 'my-segment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/achievement/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beta/beta/beta.module#BetaPageModule', name: 'BetaPage', segment: 'beta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beta/community-option/community-option.module#CommunityOptionPageModule', name: 'CommunityOptionPage', segment: 'community-option', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beta/keyboard/keyboard.module#KeyboardPageModule', name: 'KeyboardPage', segment: 'keyboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beta/file/file.module#FilePageModule', name: 'FilePage', segment: 'file', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beta/login-by-wechat/login-by-wechat.module#LoginByWechatPageModule', name: 'LoginByWechatPage', segment: 'login-by-wechat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beta/send-message/send-message.module#SendMessagePageModule', name: 'SendMessagePage', segment: 'send-message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beta/speech/speech.module#SpeechPageModule', name: 'SpeechPage', segment: 'speech', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beta/sqlite-test/sqlite-test.module#SqliteTestPageModule', name: 'SqliteTestPage', segment: 'sqlite-test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beta/storage-key-managment/storage-key-managment.module#StorageKeyManagmentPageModule', name: 'StorageKeyManagmentPage', segment: 'storage-key-managment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beta/test-bindemp/test-bindemp.module#TestBindempPageModule', name: 'TestBindempPage', segment: 'test-bindemp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beta/test-pdf/test-pdf.module#TestPdfPageModule', name: 'TestPdfPage', segment: 'test-pdf', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beta/video/video.module#VideoPageModule', name: 'VideoPage', segment: 'video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common/browser-popover/browser-popover.module#BrowserPopoverPageModule', name: 'BrowserPopoverPage', segment: 'browser-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common/browser/browser.module#BrowserPageModule', name: 'BrowserPage', segment: 'browser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common/handle-history/handle-history.module#HandleHistoryPageModule', name: 'HandleHistoryPage', segment: 'handle-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common/image-modal/image-modal.module#ImageModalPageModule', name: 'ImageModalPage', segment: 'image-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common/img-viewer/img-viewer.module#ImgViewerPageModule', name: 'ImgViewerPage', segment: 'img-viewer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common/pdf-viewer/pdf-viewer.module#PdfViewerPageModule', name: 'PdfViewerPage', segment: 'pdf-viewer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common/handle-details/handle-details.module#HandleDetailsPageModule', name: 'HandleDetailsPage', segment: 'handle-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common/preview-picture/preview-picture.module#PreviewPicturePageModule', name: 'PreviewPicturePage', segment: 'preview-picture', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common/share/share.module#SharePageModule', name: 'SharePage', segment: 'share', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/common/upgrade/upgrade.module#UpgradePageModule', name: 'UpgradePage', segment: 'upgrade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/answer-add/answer-add.module#AnswerAddPageModule', name: 'AnswerAddPage', segment: 'answer-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/at-someone/at-someone.module#AtSomeonePageModule', name: 'AtSomeonePage', segment: 'at-someone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/blog-add/blog-add.module#BlogAddPageModule', name: 'BlogAddPage', segment: 'blog-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/blog-detail/blog-detail.module#BlogDetailPageModule', name: 'BlogDetailPage', segment: 'blog-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/club-all/club-all.module#ClubAllPageModule', name: 'ClubAllPage', segment: 'club-all', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/club-list/club-list.module#ClubListPageModule', name: 'ClubListPage', segment: 'club-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/club-popover/club-popover.module#ClubPopoverPageModule', name: 'ClubPopoverPage', segment: 'club-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/club-detail/club-detail.module#ClubDetailPageModule', name: 'ClubDetailPage', segment: 'club-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/club-talk-add/club-talk-add.module#ClubTalkAddPageModule', name: 'ClubTalkAddPage', segment: 'club-talk-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/comment/comment.module#CommentPageModule', name: 'CommentPage', segment: 'comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/community-iframe/community-iframe.module#CommunityIframePageModule', name: 'CommunityIframePage', segment: 'community-iframe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/community-search-single-item/community-search-single-item.module#CommunitySearchSingleItemPageModule', name: 'CommunitySearchSingleItemPage', segment: 'community-search-single-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/community-searching/community-searching.module#CommunitySearchingPageModule', name: 'CommunitySearchingPage', segment: 'community-searching', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/community-segment/community.module#CommunityPageModule', name: 'CommunityPage', segment: 'community', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/location-chooser/location-chooser.module#LocationChooserPageModule', name: 'LocationChooserPage', segment: 'location-chooser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/member/member.module#MemberPageModule', name: 'MemberPage', segment: 'member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/modal-more/modal-more.module#ModalMorePageModule', name: 'ModalMorePage', segment: 'modal-more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/my/activity-details/activity-details.module#ActivityDetailsPageModule', name: 'ActivityDetailsPage', segment: 'activity-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/my/my-activities/my-activities.module#MyActivitiesPageModule', name: 'MyActivitiesPage', segment: 'my-activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/my/my-comment/my-comment.module#MyCommentPageModule', name: 'MyCommentPage', segment: 'my-comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/my/my-follow/my-follow.module#MyFollowPageModule', name: 'MyFollowPage', segment: 'my-follow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/my/my-publication/my-publication.module#MyPublicationPageModule', name: 'MyPublicationPage', segment: 'my-publication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/person-main/person-main.module#PersonMainPageModule', name: 'PersonMainPage', segment: 'person-main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/person-club-main/person-club-main.module#PersonClubMainPageModule', name: 'PersonClubMainPage', segment: 'person-club-main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/privacy-setting/privacy-setting.module#PrivacySettingPageModule', name: 'PrivacySettingPage', segment: 'privacy-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/question-add/question-add.module#QuestionAddPageModule', name: 'QuestionAddPage', segment: 'question-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/question/question.module#QuestionPageModule', name: 'QuestionPage', segment: 'question', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/topic-chooser/topic-chooser.module#TopicChooserPageModule', name: 'TopicChooserPage', segment: 'topic-chooser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/community/topic/topic.module#TopicPageModule', name: 'TopicPage', segment: 'topic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact-add/contact-add.module#ContactAddPageModule', name: 'ContactAddPage', segment: 'contact-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/black-list/black-list.module#BlackListPageModule', name: 'BlackListPage', segment: 'black-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact-detail/contact-detail.module#ContactDetailModule', name: 'ContactDetailPage', segment: 'contact-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact-chooser/contact-chooser.module#ContactChooserPageModule', name: 'ContactChooserPage', segment: 'contact-chooser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact-group-manage/contact-group-manage.module#ContactGroupManagePageModule', name: 'ContactGroupManagePage', segment: 'contact-group-manage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact-more-modal/contact-more-modal.module#ContactMoreModalPageModule', name: 'ContactMoreModalPage', segment: 'contact-more-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact-tag-chooser/contact-tag-chooser.module#ContactTagChooserPageModule', name: 'ContactTagChooserPage', segment: 'contact-tag-chooser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact-option/contact-option.module#ContactOptionPageModule', name: 'ContactOptionPage', segment: 'contact-option', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact-setremark/contact-setremark.module#ContactSetremarkPageModule', name: 'ContactSetremarkPage', segment: 'contact-setremark', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/article-content/article-content.module#ArticleContentPageModule', name: 'ArticleContentPage', segment: 'article-content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home-main/home-main.module#HomePageModule', name: 'HomePage', segment: 'home-main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/news-list/news-list.module#NewsListPageModule', name: 'NewsListPage', segment: 'news-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/parklife/parklife.module#ParkLifePageModule', name: 'ParkLifePage', segment: 'parklife', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/scan-result/scan-result.module#ScanResultPageModule', name: 'ScanResultPage', segment: 'scan-result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/scan/scan.module#ScanPageModule', name: 'ScanPage', segment: 'scan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/sign/sign.module#SignPageModule', name: 'SignPage', segment: 'sign', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message-image-picker/message-image-picker.module#MessageImagePickerPageModule', name: 'MessageImagePickerPage', segment: 'message-image-picker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message-chat/message-chat.module#MessageChatPageModule', name: 'MessageChatPage', segment: 'message-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message-list/message-list.module#MessageListPageModule', name: 'MessageListPage', segment: 'message-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message-session/message-session.module#MessageSessionPageModule', name: 'MessageSessionPage', segment: 'message-session', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/certificate/certificate.module#CertificatePageModule', name: 'CertificatePage', segment: 'certificate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/employee-identity/employee-identity.module#EmployeeIdentityPageModule', name: 'EmployeeIdentityPage', segment: 'employee-identity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/my-info/my-info.module#MyInfoPageModule', name: 'MyInfoPage', segment: 'my-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/my-list/my-list.module#MyPageModule', name: 'MyListPage', segment: 'my-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/set-password/set-password.module#SetPasswordPageModule', name: 'SetPasswordPage', segment: 'set-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/security/security.module#SecurityPageModule', name: 'SecurityPage', segment: 'security', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/mycode/mycode.module#MycodePageModule', name: 'MycodePage', segment: 'mycode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/updata-nickName/updata-nickName.module#SetPasswordPageModule', name: 'updataNickNamePage', segment: 'updata-nickName', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/updata-phone/updata-phone.module#SetPasswordPageModule', name: 'updataPhonePage', segment: 'updata-phone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my/update-signature/update-signature.module#UpdateSignaturePageModule', name: 'UpdateSignaturePage', segment: 'update-signature', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recruitment/dl-recruitment-list/dl-recruitment-list.module#DlRecruitmentListPageModule', name: 'DlRecruitmentListPage', segment: 'dl-recruitment-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recruitment/dl-recruitment/dl-recruitment.module#DlRecruitmentPageModule', name: 'DlRecruitmentPage', segment: 'dl-recruitment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recruitment/idl-recruitment-list/idl-recruitment-list.module#IdlRecruitmentListPageModule', name: 'IdlRecruitmentListPage', segment: 'idl-recruitment-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recruitment/idl-recruitment/idl-recruitment.module#IdlRecruitmentPageModule', name: 'IdlRecruitmentPage', segment: 'idl-recruitment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recruitment/quick-registration/quick-registration.module#QuickRegistrationPageModule', name: 'QuickRegistrationPage', segment: 'quick-registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/widget/widget-amend/widget-amend.module#WidgetAmendPageModule', name: 'WidgetAmendPage', segment: 'widget-amend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/widget/widget-list/widget-list.module#WidgetListPageModule', name: 'WidgetListPage', segment: 'widget-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/donetask/donetask.module#DonetaskPageModule', name: 'DonetaskPage', segment: 'donetask', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/workflow-agent-setting/setposter.module#SetposterPageModule', name: 'SetposterPage', segment: 'setposter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/undonetask/undonetask.module#UndonetaskPageModule', name: 'UndonetaskPage', segment: 'undonetask', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/workflow-details/workflow-details.module#WorkflowDetailsPageModule', name: 'WorkflowDetailsPage', segment: 'workflow-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/workflow-setting-agentlist/workflow-setting-agentlist.module#WorkflowSettingAgentlistPageModule', name: 'WorkflowSettingAgentlistPage', segment: 'workflow-setting-agentlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/workflow-agent/workflow-agent.module#WorkflowAgentPageModule', name: 'WorkflowAgentPage', segment: 'workflow-agent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/workflow-setting/workflow-setting.module#WorkflowSettingPageModule', name: 'WorkflowSettingPage', segment: 'workflow-setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/workflow-tabs/workflow.module#WorkflowPageModule', name: 'WorkflowPage', segment: 'workflow', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/workflow/workflow-task/workflow-task.module#WorkflowTaskPageModule', name: 'WorkflowTaskPage', segment: 'workflow-task', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_33__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_45_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_44_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_43__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_42__providers_providers__["i" /* MessageProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_providers__["f" /* CountryProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_providers__["m" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_providers__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_providers__["n" /* WidgetProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_providers__["e" /* ContentProvider */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_38__services_native_service__["a" /* NativeService */],
                __WEBPACK_IMPORTED_MODULE_31__jiguang_ionic_jpush__["a" /* JPush */],
                __WEBPACK_IMPORTED_MODULE_36__services_services__["c" /* JPushService */],
                __WEBPACK_IMPORTED_MODULE_42__providers_providers__["d" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_39__services_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_40__services_file_service__["a" /* FileService */],
                __WEBPACK_IMPORTED_MODULE_36__services_services__["a" /* FaceService */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_35__services_logger__["a" /* Logger */],
                __WEBPACK_IMPORTED_MODULE_37__services_helper__["a" /* Helper */],
                __WEBPACK_IMPORTED_MODULE_36__services_services__["f" /* Session */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_app_minimize__["a" /* AppMinimize */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
                __WEBPACK_IMPORTED_MODULE_0__services_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_sim__["a" /* Sim */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_globalization__["a" /* Globalization */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_42__providers_providers__["l" /* SettingProvider */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_14__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_core__["ErrorHandler"], useClass: FunDebugErrorHandler, deps: [__WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_36__services_services__["f" /* Session */], __WEBPACK_IMPORTED_MODULE_52__providers_handle_handle__["a" /* HandleProvider */], __WEBPACK_IMPORTED_MODULE_0__services_storage_service__["a" /* StorageService */]] },
                __WEBPACK_IMPORTED_MODULE_42__providers_providers__["c" /* CacheProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_providers__["k" /* ServerProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_providers__["g" /* DLRecruitingProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_providers__["h" /* IDLRecruitingProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_providers__["j" /* PreloadProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_workflow_provider__["a" /* WorkflowProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_contact_provider__["a" /* ContactProvider */],
                __WEBPACK_IMPORTED_MODULE_49__providers_share_provider__["a" /* ShareProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_blog_provider__["a" /* BlogProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_club_provider__["a" /* ClubProvider */],
                __WEBPACK_IMPORTED_MODULE_52__providers_handle_handle__["a" /* HandleProvider */],
                __WEBPACK_IMPORTED_MODULE_53__providers_sqlite_provider__["a" /* SqliteProvider */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_55__services_sqlite_service__["a" /* SqliteService */],
                __WEBPACK_IMPORTED_MODULE_56__services_pinyin__["a" /* PinyinService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_57__providers_social_social__["a" /* SocialProvider */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_user_agent__["a" /* UserAgent */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_file_chooser__["a" /* FileChooser */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Config */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalFromRightEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ModalFromRightLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFromBottomEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalFromBottomLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ModalScaleEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ModalScaleLeave; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
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

var ModalFromRightEnter = (function (_super) {
    __extends(ModalFromRightEnter, _super);
    function ModalFromRightEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromRightEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'z-index': 0, 'opacity': 0.3, 'visibility': 'visible' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('transform', 'translateX(100%)', 'translateX(20%)');
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-content.content'));
        contentWrapper.beforeStyles({ 'width': '80%' });
        this
            .element(this.enteringView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.25, .1, .25, 1)')
            .add(backdrop)
            .add(wrapper)
            .add(contentWrapper);
    };
    return ModalFromRightEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* PageTransition */]));

var ModalFromRightLeave = (function (_super) {
    __extends(ModalFromRightLeave, _super);
    function ModalFromRightLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromRightLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'visibility': 'hidden' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'translateX(20%)', 'translateX(100%)');
        this
            .element(this.leavingView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.25, .1, .25, 1)')
            .add(backdrop)
            .add(wrapper);
    };
    return ModalFromRightLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* PageTransition */]));

var ModalFromBottomEnter = (function (_super) {
    __extends(ModalFromBottomEnter, _super);
    function ModalFromBottomEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromBottomEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'z-index': 0, 'opacity': 0.3, 'visibility': 'visible' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 1 });
        wrapper.fromTo('transform', 'translateY(100%)', 'translateY(55%)');
        var contentWrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-content.content'));
        contentWrapper.beforeStyles({ 'height': '45%' });
        this
            .element(this.enteringView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.25, .1, .25, 1)')
            .add(backdrop)
            .add(wrapper)
            .add(contentWrapper);
    };
    return ModalFromBottomEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* PageTransition */]));

var ModalFromBottomLeave = (function (_super) {
    __extends(ModalFromBottomLeave, _super);
    function ModalFromBottomLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFromBottomLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.beforeStyles({ 'visibility': 'hidden' });
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.fromTo('transform', 'translateY(55%)', 'translateY(100%)');
        this
            .element(this.leavingView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.25, .1, .25, 1)')
            .add(backdrop)
            .add(wrapper);
    };
    return ModalFromBottomLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* PageTransition */]));

var ModalScaleEnter = (function (_super) {
    __extends(ModalScaleEnter, _super);
    function ModalScaleEnter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleEnter.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        if (event) {
            wrapper.beforeStyles({ 'opacity': 1, 'transformOrigin': event['x'] + "px " + event['y'] + "px", 'transform-origin': event['x'] + "px " + event['y'] + "px" });
        }
        else {
            wrapper.beforeStyles({ 'opacity': 1 });
        }
        wrapper.fromTo('transform', 'scale(0.3)', 'scale(1)');
        this
            .element(this.enteringView.pageRef())
            .duration(300)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalScaleEnter;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* PageTransition */]));

var ModalScaleLeave = (function (_super) {
    __extends(ModalScaleLeave, _super);
    function ModalScaleLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalScaleLeave.prototype.init = function () {
        _super.prototype.init.call(this);
        var ele = this.leavingView.pageRef().nativeElement;
        var backdrop = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('ion-backdrop'));
        backdrop.fromTo('opacity', '1', '0');
        this
            .element(this.leavingView.pageRef())
            .duration(400)
            .add(backdrop);
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'opacity': 0 });
        wrapper.fromTo('transform', 'scale(1) ', 'scale(0) ');
        this
            .element(this.leavingView.pageRef())
            .duration(400)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalScaleLeave;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* PageTransition */]));

//# sourceMappingURL=modal-transitions.js.map

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 279,
	"./af.js": 279,
	"./ar": 280,
	"./ar-dz": 281,
	"./ar-dz.js": 281,
	"./ar-kw": 282,
	"./ar-kw.js": 282,
	"./ar-ly": 283,
	"./ar-ly.js": 283,
	"./ar-ma": 284,
	"./ar-ma.js": 284,
	"./ar-sa": 285,
	"./ar-sa.js": 285,
	"./ar-tn": 286,
	"./ar-tn.js": 286,
	"./ar.js": 280,
	"./az": 287,
	"./az.js": 287,
	"./be": 288,
	"./be.js": 288,
	"./bg": 289,
	"./bg.js": 289,
	"./bm": 290,
	"./bm.js": 290,
	"./bn": 291,
	"./bn.js": 291,
	"./bo": 292,
	"./bo.js": 292,
	"./br": 293,
	"./br.js": 293,
	"./bs": 294,
	"./bs.js": 294,
	"./ca": 295,
	"./ca.js": 295,
	"./cs": 296,
	"./cs.js": 296,
	"./cv": 297,
	"./cv.js": 297,
	"./cy": 298,
	"./cy.js": 298,
	"./da": 299,
	"./da.js": 299,
	"./de": 300,
	"./de-at": 301,
	"./de-at.js": 301,
	"./de-ch": 302,
	"./de-ch.js": 302,
	"./de.js": 300,
	"./dv": 303,
	"./dv.js": 303,
	"./el": 304,
	"./el.js": 304,
	"./en-au": 305,
	"./en-au.js": 305,
	"./en-ca": 306,
	"./en-ca.js": 306,
	"./en-gb": 307,
	"./en-gb.js": 307,
	"./en-ie": 308,
	"./en-ie.js": 308,
	"./en-il": 309,
	"./en-il.js": 309,
	"./en-nz": 310,
	"./en-nz.js": 310,
	"./eo": 311,
	"./eo.js": 311,
	"./es": 312,
	"./es-do": 313,
	"./es-do.js": 313,
	"./es-us": 314,
	"./es-us.js": 314,
	"./es.js": 312,
	"./et": 315,
	"./et.js": 315,
	"./eu": 316,
	"./eu.js": 316,
	"./fa": 317,
	"./fa.js": 317,
	"./fi": 318,
	"./fi.js": 318,
	"./fo": 319,
	"./fo.js": 319,
	"./fr": 320,
	"./fr-ca": 321,
	"./fr-ca.js": 321,
	"./fr-ch": 322,
	"./fr-ch.js": 322,
	"./fr.js": 320,
	"./fy": 323,
	"./fy.js": 323,
	"./gd": 324,
	"./gd.js": 324,
	"./gl": 325,
	"./gl.js": 325,
	"./gom-latn": 326,
	"./gom-latn.js": 326,
	"./gu": 327,
	"./gu.js": 327,
	"./he": 328,
	"./he.js": 328,
	"./hi": 329,
	"./hi.js": 329,
	"./hr": 330,
	"./hr.js": 330,
	"./hu": 331,
	"./hu.js": 331,
	"./hy-am": 332,
	"./hy-am.js": 332,
	"./id": 333,
	"./id.js": 333,
	"./is": 334,
	"./is.js": 334,
	"./it": 335,
	"./it.js": 335,
	"./ja": 336,
	"./ja.js": 336,
	"./jv": 337,
	"./jv.js": 337,
	"./ka": 338,
	"./ka.js": 338,
	"./kk": 339,
	"./kk.js": 339,
	"./km": 340,
	"./km.js": 340,
	"./kn": 341,
	"./kn.js": 341,
	"./ko": 342,
	"./ko.js": 342,
	"./ky": 343,
	"./ky.js": 343,
	"./lb": 344,
	"./lb.js": 344,
	"./lo": 345,
	"./lo.js": 345,
	"./lt": 346,
	"./lt.js": 346,
	"./lv": 347,
	"./lv.js": 347,
	"./me": 348,
	"./me.js": 348,
	"./mi": 349,
	"./mi.js": 349,
	"./mk": 350,
	"./mk.js": 350,
	"./ml": 351,
	"./ml.js": 351,
	"./mn": 352,
	"./mn.js": 352,
	"./mr": 353,
	"./mr.js": 353,
	"./ms": 354,
	"./ms-my": 355,
	"./ms-my.js": 355,
	"./ms.js": 354,
	"./mt": 356,
	"./mt.js": 356,
	"./my": 357,
	"./my.js": 357,
	"./nb": 358,
	"./nb.js": 358,
	"./ne": 359,
	"./ne.js": 359,
	"./nl": 360,
	"./nl-be": 361,
	"./nl-be.js": 361,
	"./nl.js": 360,
	"./nn": 362,
	"./nn.js": 362,
	"./pa-in": 363,
	"./pa-in.js": 363,
	"./pl": 364,
	"./pl.js": 364,
	"./pt": 365,
	"./pt-br": 366,
	"./pt-br.js": 366,
	"./pt.js": 365,
	"./ro": 367,
	"./ro.js": 367,
	"./ru": 368,
	"./ru.js": 368,
	"./sd": 369,
	"./sd.js": 369,
	"./se": 370,
	"./se.js": 370,
	"./si": 371,
	"./si.js": 371,
	"./sk": 372,
	"./sk.js": 372,
	"./sl": 373,
	"./sl.js": 373,
	"./sq": 374,
	"./sq.js": 374,
	"./sr": 375,
	"./sr-cyrl": 376,
	"./sr-cyrl.js": 376,
	"./sr.js": 375,
	"./ss": 377,
	"./ss.js": 377,
	"./sv": 378,
	"./sv.js": 378,
	"./sw": 379,
	"./sw.js": 379,
	"./ta": 380,
	"./ta.js": 380,
	"./te": 381,
	"./te.js": 381,
	"./tet": 382,
	"./tet.js": 382,
	"./tg": 383,
	"./tg.js": 383,
	"./th": 384,
	"./th.js": 384,
	"./tl-ph": 385,
	"./tl-ph.js": 385,
	"./tlh": 386,
	"./tlh.js": 386,
	"./tr": 387,
	"./tr.js": 387,
	"./tzl": 388,
	"./tzl.js": 388,
	"./tzm": 389,
	"./tzm-latn": 390,
	"./tzm-latn.js": 390,
	"./tzm.js": 389,
	"./ug-cn": 391,
	"./ug-cn.js": 391,
	"./uk": 392,
	"./uk.js": 392,
	"./ur": 393,
	"./ur.js": 393,
	"./uz": 394,
	"./uz-latn": 395,
	"./uz-latn.js": 395,
	"./uz.js": 394,
	"./vi": 396,
	"./vi.js": 396,
	"./x-pseudo": 397,
	"./x-pseudo.js": 397,
	"./yo": 398,
	"./yo.js": 398,
	"./zh-cn": 399,
	"./zh-cn.js": 399,
	"./zh-hk": 400,
	"./zh-hk.js": 400,
	"./zh-tw": 401,
	"./zh-tw.js": 401
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 643;

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_setting_provider__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_provider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__country_provider__ = __webpack_require__(966);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_provider__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_provider__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_widget_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_message_provider__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_cache_provider__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_server_provider__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_content_provider__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_dl_recruiting_provider__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_idl_recruiting_provider__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_preload_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__share_provider__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__blog_provider__ = __webpack_require__(214);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__providers_setting_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_1__providers_user_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__country_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__providers_auth_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__config_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__providers_widget_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__providers_content_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__providers_message_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__providers_cache_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__providers_server_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_10__providers_dl_recruiting_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_11__providers_idl_recruiting_provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_12__providers_preload_provider__["a"]; });
/* unused harmony reexport ShareProvider */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_14__blog_provider__["a"]; });
















//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_utility__ = __webpack_require__(32);
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







var ServerProvider = (function () {
    function ServerProvider(storageService, nativeService, logger) {
        this.storageService = storageService;
        this.nativeService = nativeService;
        this.logger = logger;
        this.isDebug = __WEBPACK_IMPORTED_MODULE_4__services_constants__["t" /* IS_DEBUG */];
    }
    ServerProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isdebug_1, version_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.storageService.getItem("isdebug")];
                    case 1:
                        isdebug_1 = _a.sent();
                        return [4 /*yield*/, this.storageService.getItem("version")];
                    case 2:
                        version_1 = _a.sent();
                        this.nativeService.getVersionNumber().subscribe(function (currentVersionNo) {
                            if (__WEBPACK_IMPORTED_MODULE_5__services_utility__["a" /* Utility */].checkNewVersion(currentVersionNo, version_1)) {
                                _this.isDebug = __WEBPACK_IMPORTED_MODULE_4__services_constants__["t" /* IS_DEBUG */];
                            }
                            else if (typeof (isdebug_1) == 'boolean') {
                                _this.isDebug = isdebug_1;
                            }
                        }, function (err) {
                            if (typeof (isdebug_1) == 'boolean') {
                                _this.isDebug = isdebug_1;
                            }
                            _this.logger.log(JSON.stringify(err), "this.nativeService.getVersionNumber()");
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.logger.log(JSON.stringify(err_1), "this.storageService.getItem()");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ServerProvider.prototype.WebServer = function () {
        if (this.isDebug) {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["n" /* DEVELOPMENT_WEB_SERVER */];
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["z" /* PRODUCTION_WEB_SERVER */];
        }
    };
    // 根据this.isDebug标记取得开发或生产环境，API服务器地址
    ServerProvider.prototype.ApiServer = function () {
        return this.BaseApiServer() + "v1/";
    };
    // 根据this.isDebug标记取得开发或生产环境，API服务器地址
    ServerProvider.prototype.BaseApiServer = function () {
        if (this.isDebug) {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["k" /* DEVELOPMENT_API_SERVER */];
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["w" /* PRODUCTION_API_SERVER */];
        }
    };
    // 根据this.isDebug标记取得开发或生产环境, 文件服务器地址
    ServerProvider.prototype.FileServer = function () {
        if (this.isDebug) {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["m" /* DEVELOPMENT_FILE_SERVER */];
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["y" /* PRODUCTION_FILE_SERVER */];
        }
    };
    // 根据this.isDebug标记, 取得App下载页面地址
    ServerProvider.prototype.AppDownloadPage = function () {
        if (this.isDebug) {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["l" /* DEVELOPMENT_APP_DOWNLOAD_PAGE */];
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["x" /* PRODUCTION_APP_DOWNLOAD_PAGE */];
        }
    };
    // 根据this.isDebug标记取得开发或生产环境, 文件服务器地址
    ServerProvider.prototype.ServiceAgreement = function () {
        if (this.isDebug) {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["l" /* DEVELOPMENT_APP_DOWNLOAD_PAGE */].replace('AppClient', '');
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["x" /* PRODUCTION_APP_DOWNLOAD_PAGE */].replace('AppClient', '');
            ;
        }
    };
    // 根据this.isDebug标记, 取得App下载页面地址
    ServerProvider.prototype.PrivacyPolicy = function () {
        if (this.isDebug) {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["l" /* DEVELOPMENT_APP_DOWNLOAD_PAGE */].replace('AppClient', '');
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["x" /* PRODUCTION_APP_DOWNLOAD_PAGE */].replace('AppClient', '');
            ;
        }
    };
    // 根据this.isDebug标记, 取得App下载页面地址
    ServerProvider.prototype.AppStoreId = function () {
        if (this.isDebug) {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["b" /* APPLE_STORE_APPID_TEST */];
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4__services_constants__["a" /* APPLE_STORE_APPID */];
        }
    };
    ServerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_0__services_logger__["a" /* Logger */]])
    ], ServerProvider);
    return ServerProvider;
}());

//# sourceMappingURL=server-provider.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqliteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sqlite_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SqliteProvider = (function () {
    function SqliteProvider(sqliteService, handle) {
        this.sqliteService = sqliteService;
        this.handle = handle;
        this.isInit = false;
        this.table = {
            message: 'message',
            messageChat: 'messageChat',
            friends: 'friends',
            friendsGroups: 'friendsGroups',
            friendInfo: 'friendInfo',
            deleteMessageRecord: 'deleteMessageRecord' //信息删除记录
        };
    }
    /**
     * 初始化db
     * @param userId 用户id
     */
    SqliteProvider.prototype.init = function (userId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var sqls = new Array();
            var createTableMessage = "create table IF NOT EXISTS " + _this.table.message + "(\n        id REAL PRIMARY KEY,\n        messageId REAL, \n        receiveTime REAL, \n        chatId REAL,\n        Extra BLOB\n        )";
            var createTableMessageChat = "create table IF NOT EXISTS " + _this.table.messageChat + "( \n        id REAL PRIMARY KEY, \n        chatId REAL,\n        latestTime REAL ,\n        isTop REAL ,\n        Extra BLOB\n        )";
            var createTableFriends = "create table IF NOT EXISTS " + _this.table.friends + "( \n        FriendId REAL PRIMARY KEY,\n        GroupId REAL,\n        IsStar REAL,\n        Extra BLOB\n        )";
            var createTableFriendsGroups = "create table IF NOT EXISTS " + _this.table.friendsGroups + "( \n        GroupId REAL PRIMARY KEY,\n        GroupName varchar(64)\n        )";
            var createTableFriendsInfo = "create table IF NOT EXISTS " + _this.table.friendInfo + "( \n        FriendId REAL PRIMARY KEY,\n        Extra BLOB\n        )";
            var createTableDeleteMessageRecord = "create table IF NOT EXISTS " + _this.table.deleteMessageRecord + "( \n        messageId REAL PRIMARY KEY,\n        Extra BLOB\n        )";
            sqls.push({ sql: createTableMessage, params: [] }); //创建message表
            sqls.push({ sql: createTableMessageChat, params: [] }); //创建messageChat表
            sqls.push({ sql: createTableFriends, params: [] }); //创建friends表
            sqls.push({ sql: createTableFriendsGroups, params: [] }); //创建friendsGroups表
            sqls.push({ sql: createTableFriendsInfo, params: [] }); //创建friendInfo表
            sqls.push({ sql: createTableDeleteMessageRecord, params: [] }); //创建deleteMessageRecord表
            _this.sqliteService.init(userId, sqls).subscribe(function (res) {
                if (res.result) {
                    _this.isInit = true;
                }
                observe.next(res);
                // this.handle.generate('sqliteService.init',1,res)
            }, function (err) {
                _this.handle.generate('sqliteService.init', -1, err);
                observe.error(err);
            });
        });
    };
    /**
     * 关闭数据库（用户退出登陆时）
     */
    SqliteProvider.prototype.closeUserDataBase = function () {
        this.sqliteService.closeUserDataBase();
        this.isInit = false;
    };
    /**
     * 删除表（测试用）
     */
    SqliteProvider.prototype.dropTable = function () {
        var sql = "drop table " + this.table.message;
        this.sqliteService.executeSql(sql).then(function (data) {
        }).catch(function (err) {
        });
        var sql2 = "drop table " + this.table.messageChat;
        this.sqliteService.executeSql(sql2).then(function (data) {
        }).catch(function (err) {
        });
    };
    /**
     * 清除表数据
     */
    SqliteProvider.prototype.clearALl = function () {
        var sql = "delete from " + this.table.messageChat + " ";
        this.sqliteService.executeSql(sql).then(function (data) {
        }).catch(function (err) {
        });
        var sql1 = "delete from " + this.table.message + " ";
        this.sqliteService.executeSql(sql1).then(function (data) {
        }).catch(function (err) {
        });
    };
    /**
     * 更新聊天会话
     * @param messageSession
     */
    SqliteProvider.prototype.updateMessageChat = function (messageSession) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            if (!messageSession.id && messageSession.id != '0') {
                observe.error(false);
                console.error("insert into Messages failed,cause: ChatId is empty");
                return;
            }
            else if (!messageSession.userId) {
                observe.error(false);
                console.error("insert into Messages failed,cause: userID is empty");
                return;
            }
            var params = [];
            if (isNaN(Number(messageSession.latestTime))) {
                messageSession.latestTime = new Date(messageSession.latestTime).getTime().toString();
            }
            params.push(messageSession.latestTime);
            params.push(messageSession.isTop ? 1 : 0);
            params.push(JSON.stringify(messageSession));
            params.push(messageSession.id); //聊天室ID
            var sql = "update  " + _this.table.messageChat + " set latestTime = ?,  isTop = ?, Extra = ? where id = ? ";
            _this.sqliteService.executeSql(sql, params).then(function (data) {
                observe.next({
                    result: true,
                    message: 'update MessageChat Successfully!'
                });
            }).catch(function (err) {
                observe.error({
                    result: false,
                    message: err
                });
            });
        });
    };
    /**
     * 插入聊天会话
     * @param messageSession
     */
    SqliteProvider.prototype.insertMessageChat = function (messageSession) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            if (!messageSession.userId) {
                observe.error(false);
                console.error("insert into Messages failed,cause: userID is empty");
                return;
            }
            else if (!messageSession.id && messageSession.id != '0') {
                observe.error(false);
                console.error("insert into Messages failed,cause: messageChatId is empty");
                return;
            }
            var params = [];
            if (isNaN(Number(messageSession.latestTime))) {
                messageSession.latestTime = new Date(messageSession.latestTime).getTime().toString();
            }
            params.push(messageSession.id); //聊天室ID
            params.push(messageSession.id);
            params.push(messageSession.latestTime);
            params.push(messageSession.isTop ? 1 : 0);
            params.push(JSON.stringify(messageSession));
            var sql = "insert into " + _this.table.messageChat + " ( id, chatId, latestTime,istop, Extra) values(?,?,?,?,?) ";
            _this.sqliteService.executeSql(sql, params).then(function (data) {
                observe.next(true);
            }).catch(function (err) {
                observe.error(false);
            });
        });
    };
    /**
     * 查询聊天会话
     * @param userId 用户id
     */
    SqliteProvider.prototype.queryMessageChat = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var sql = "select chat.Extra,MAX(message.receiveTime), \n      message.extra as messageExtra from " + _this.table.messageChat + " chat \n      inner join " + _this.table.message + " message on message.chatid = chat.id \n      group by chat.chatid \n      order by isTop DESC,message.receiveTime DESC";
            // let sql = `SELECT * FROM  ${this.table.messageChat}  
            // order by isTop DESC,latestTime DESC  `;
            _this.sqliteService.executeSql(sql, []).then(function (rst) {
                var result = [];
                for (var _i = 0, _a = rst.res.data; _i < _a.length; _i++) {
                    var item = _a[_i];
                    result.push(item);
                }
                observe.next(result);
            }).catch(function (err) {
                observe.error(err);
            });
        });
    };
    /**
   * 删除某一个会话
   * @param meesageId 会话id
   */
    SqliteProvider.prototype.deleteMessageChat = function (messageChatId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            if (!messageChatId && messageChatId != '0') {
                observe.error(false);
                console.error("insert into Messages failed,cause: ChatId is empty");
                return;
            }
            var sql = "delete from " + _this.table.messageChat + " where id = ?";
            _this.sqliteService.executeSql(sql, [messageChatId]).then(function (data) {
                observe.next({
                    result: true,
                    message: 'delete MessageChat successfully!'
                });
            }).catch(function (err) {
                observe.next({
                    result: false,
                    message: err
                });
            });
        });
    };
    /**
     * 插入消息
     * @param message 消息对象
     */
    SqliteProvider.prototype.insertMessage = function (message) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            if (!message.id && message.id != 0) {
                observe.error(false);
                console.error("insert into Messages failed,cause: messageID is empty");
                return;
            }
            else if (!message.userId) {
                observe.error(false);
                console.error("insert into Messages failed,cause: userID is empty");
                return;
            }
            var params = [];
            var queryParam = [];
            if (isNaN(Number(message.receiveTime))) {
                message.receiveTime = new Date(message.receiveTime).getTime().toString();
            }
            queryParam.push(message.id);
            var querysql = "select id from \n      ( select id from " + _this.table.message + " \n        union all \n        select messageid as id from " + _this.table.deleteMessageRecord + ")\n        WHERE ID = ? ";
            _this.sqliteService.executeSql(querysql, queryParam).then(function (data) {
                if (data.res.data.length > 0) {
                    observe.error({
                        result: false,
                        message: 'this message is exist!'
                    });
                }
                else {
                    params.push(message.id);
                    params.push(message.id);
                    params.push(message.receiveTime);
                    params.push(message.extra.senderId || message.widgetId);
                    params.push(JSON.stringify(message));
                    var sql = "insert into " + _this.table.message + " (id, messageId, receiveTime, chatId, Extra) values (?,?,?,?,?) ";
                    _this.sqliteService.executeSql(sql, params).then(function (data) {
                        observe.next({
                            result: true,
                            message: 'insert message successfully!'
                        });
                    }).catch(function (err) {
                        observe.error({
                            result: false,
                            message: err
                        });
                    });
                }
            }).catch(function (err) {
                observe.error({
                    result: false,
                    message: err
                });
            });
        });
    };
    /**
     * 插入消息
     * @param message 消息对象
     */
    SqliteProvider.prototype.insertDeleteMessageRecord = function (id, extras) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            if (!id && id != 0) {
                observe.error(false);
                console.error("insert into DeleteMessageRecord failed,cause: messageID is empty");
                return;
            }
            var params = [id, extras];
            var sql = "insert into " + _this.table.deleteMessageRecord + " (messageId, Extra) values (?,?) ";
            _this.sqliteService.executeSql(sql, params).then(function (data) {
                observe.next({
                    result: true,
                    message: 'insert deleteMessageRecord successfully!'
                });
            }).catch(function (err) {
                observe.next({
                    result: false,
                    message: err
                });
            });
        });
    };
    SqliteProvider.prototype.insertDeleteMessagesRecord = function (chatId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var sql = "SELECT id as id FROM  " + _this.table.message + " \n        where chatId = ?   ";
            _this.sqliteService.executeSql(sql, [chatId.toString()]).then(function (rst) {
                var params = [];
                var valuesStr = '';
                for (var _i = 0, _a = rst.res.data; _i < _a.length; _i++) {
                    var item = _a[_i];
                    params.push(item.id);
                    valuesStr ? valuesStr += ',(?)' : valuesStr += '(?)';
                }
                var insert_sql = "INSERT INTO " + _this.table.deleteMessageRecord + " (messageId) VALUES" + valuesStr + " ";
                _this.sqliteService.executeSql(insert_sql, params).then(function (result) {
                    observe.next({
                        result: true,
                        message: 'insert into deleteMessagesRecord OK'
                    });
                }).catch(function (error) {
                    observe.next({
                        result: false,
                        message: error
                    });
                });
            }).catch(function (err) {
                observe.next({
                    result: false,
                    message: err
                });
            });
        });
    };
    /**
     * 查询消息
     * @param userId 当前用户id
     * @param chatId 聊天id（好友id or 应用id）
     * @param LIMIT 查询数量
     * @param OFFSET 偏移量
     * @param isNotReverse 是否不需要翻转，默认翻转
     */
    SqliteProvider.prototype.queryMessage = function (chatId, LIMIT, OFFSET, isNotReverse) {
        var _this = this;
        if (LIMIT === void 0) { LIMIT = 10; }
        if (OFFSET === void 0) { OFFSET = 0; }
        if (isNotReverse === void 0) { isNotReverse = false; }
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var sql = "SELECT * FROM  " + _this.table.message + " \n        where  chatId = ? \n        order by receiveTime DESC \n        LIMIT " + LIMIT + " OFFSET " + OFFSET + " ";
            _this.sqliteService.executeSql(sql, [chatId.toString()]).then(function (rst) {
                var result = [];
                for (var _i = 0, _a = rst.res.data; _i < _a.length; _i++) {
                    var item = _a[_i];
                    result.push(item);
                }
                isNotReverse ? observe.next(result) : observe.next(result.reverse());
            }).catch(function (err) {
                observe.error(err);
            });
        });
    };
    /**
     * 删除某一条消息
     * @param meesageId 消息id
     */
    SqliteProvider.prototype.deleteMessageByChatId = function (ChatId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            if (!ChatId && ChatId != '0') {
                observe.error(false);
                console.error("insert into Messages failed,cause: ChatId is empty");
                return;
            }
            var sql = "delete from " + _this.table.message + " where chatId = ?";
            _this.sqliteService.executeSql(sql, [ChatId]).then(function (data) {
                observe.next({
                    result: true,
                    message: 'delete message successfully!'
                });
            }).catch(function (err) {
                observe.next({
                    result: false,
                    message: err
                });
            });
        });
    };
    /**
     * 删除某一条消息
     * @param meesageId 消息id
     */
    SqliteProvider.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            if (!messageId) {
                observe.error(false);
                console.error("insert into Messages failed,cause: messageID is empty");
                return;
            }
            var sql = "delete from " + _this.table.message + " where id = ?";
            _this.sqliteService.executeSql(sql, [messageId]).then(function (data) {
                observe.next({
                    result: true,
                    message: 'delete message successfully!'
                });
            }).catch(function (err) {
                observe.error({
                    result: false,
                    message: err
                });
            });
        });
    };
    SqliteProvider.prototype.updateMessageStatus = function (status, message) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            if (!message.id && message.id != 0) {
                observe.error(false);
                console.error("update into Messages failed,cause: messageID is empty");
                return;
            }
            else if (!status) {
                observe.error(false);
                console.error("status is empty");
                return;
            }
            message.status = status;
            var params = [];
            params.push(JSON.stringify(message));
            params.push(message.id);
            var sql = "update " + _this.table.message + " set Extra = ? where id = ?  ";
            _this.sqliteService.executeSql(sql, params).then(function (data) {
                observe.next({ result: true, message: 'update message ok!' });
            }).catch(function (err) {
                observe.error({ result: false, message: err });
            });
        });
    };
    SqliteProvider.prototype.updateMessage = function (message) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            if (!message.id && message.id != 0) {
                observe.error(false);
                console.error("update into Messages failed,cause: messageID is empty");
                return;
            }
            var params = [];
            params.push(Number(message.receiveTime));
            params.push(JSON.stringify(message));
            params.push(message.id);
            var sql = "update " + _this.table.message + " set receiveTime = ? ,Extra = ? where id = ?  ";
            _this.sqliteService.executeSql(sql, params).then(function (data) {
                observe.next({ result: true, message: 'update message ok!' });
            }).catch(function (err) {
                observe.error({ result: false, message: err });
            });
        });
    };
    SqliteProvider.prototype.getTables = function () {
        var keys = Object.keys(this.table);
        var res = [];
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var item = keys_1[_i];
            var obj = {
                name: item,
                value: this.table[item],
                checked: false
            };
            res.push(obj);
        }
        return res;
    };
    /**
      * 查询contacts
      * @param userId 用户id
      */
    SqliteProvider.prototype.queryContacts = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var sql = "SELECT * FROM  " + _this.table.friends;
            _this.sqliteService.executeSql(sql, []).then(function (rst) {
                var result = [];
                for (var _i = 0, _a = rst.res.data; _i < _a.length; _i++) {
                    var item = _a[_i];
                    result.push(item);
                }
                observe.next(result.reverse());
            }).catch(function (err) {
                observe.error(err);
            });
        });
    };
    /**
     * 插入多笔记录，先删除记录
     * @param friends friend数组
     */
    SqliteProvider.prototype.saveContacts = function (friends, GroupId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var querysql = "delete from  " + _this.table.friends;
            var queryParam = [];
            if (GroupId || GroupId === 0 || GroupId === '0') {
                querysql += " where GroupId = ?";
                queryParam.push(GroupId);
            }
            _this.sqliteService.executeSql(querysql, queryParam).then(function (data) {
                if (friends.length == 0) {
                    observe.next({
                        result: true,
                        message: 'insert contacts ok'
                    });
                }
                else {
                    var params = [];
                    var valuesStr = '';
                    for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
                        var friend = friends_1[_i];
                        params.push(friend.FriendId);
                        params.push(friend.GroupId);
                        params.push(friend.IsStar ? 1 : 0);
                        params.push(JSON.stringify(friend.Extra));
                        valuesStr ? valuesStr += ',(?,?,?,?)' : valuesStr += '(?,?,?,?)';
                    }
                    var sql = "INSERT INTO " + _this.table.friends + " (FriendId,GroupId,IsStar,Extra) VALUES" + valuesStr + " ";
                    _this.sqliteService.executeSql(sql, params).then(function (data) {
                        observe.next({
                            result: true,
                            message: 'insert contacts ok'
                        });
                    }).catch(function (err) {
                        observe.error({
                            result: true,
                            message: err
                        });
                    });
                }
            }).catch(function (err) {
                observe.error({
                    result: true,
                    message: err
                });
            });
        });
    };
    /**
    * 插入contact
    * @param friend
    */
    SqliteProvider.prototype.insertContact = function (friend) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var params = [];
            params.push(friend.FriendId);
            params.push(friend.GroupId);
            params.push(friend.IsStar);
            params.push(JSON.stringify(friend.Extra));
            var sql = "insert into " + _this.table.friends + " (FriendId,GroupId,IsStar,Extra) values(?,?,?,?) ";
            _this.sqliteService.executeSql(sql, params).then(function (data) {
                observe.next({
                    result: true,
                    message: 'insert contact ok'
                });
            }).catch(function (err) {
                observe.error({
                    result: true,
                    message: err
                });
            });
        });
    };
    SqliteProvider.prototype.saveContact = function (friend) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var querysql = "SELECT * from  " + _this.table.friends + " where FriendId = ?";
            var params = [];
            params.push(friend.FriendId);
            _this.sqliteService.executeSql(querysql, params).then(function (data) {
                if (data.res.data.length > 0) {
                    _this.updateContact(friend).subscribe(function (res) {
                        observe.next(res);
                    }, function (error) {
                        observe.error(error);
                    });
                }
                else {
                    _this.insertContact(friend).subscribe(function (res) {
                        observe.next(res);
                    }, function (error) {
                        observe.error(error);
                    });
                }
            }).catch(function (err) {
                observe.error({
                    result: true,
                    message: err
                });
            });
        });
    };
    /**
   * 更新contact
   * @param friend
   */
    SqliteProvider.prototype.updateContact = function (friend) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var params = [];
            params.push(friend.GroupId),
                params.push(friend.IsStar),
                params.push(JSON.stringify(friend.Extra)),
                params.push(friend.FriendId);
            var sql = "update  " + _this.table.friends + " set GroupId = ? ,IsStar = ? ,Extra = ? where FriendId = ? ";
            _this.sqliteService.executeSql(sql, params).then(function (data) {
                observe.next({
                    result: true,
                    message: 'update contact ok'
                });
            }).catch(function (err) {
                observe.error({
                    result: true,
                    message: err
                });
            });
        });
    };
    /**
   * 删除contact
   * @param id
   */
    SqliteProvider.prototype.deleteContact = function (friendId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var sql = "delete from " + _this.table.friends + " where FriendId = ?";
            _this.sqliteService.executeSql(sql, [friendId]).then(function (data) {
                observe.next(true);
            }).catch(function (err) {
                observe.next(false);
            });
        });
    };
    /**
     * 查询Tags
     * @param userId 用户id
     */
    SqliteProvider.prototype.queryFriendsGroups = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var sql = "SELECT * FROM  " + _this.table.friendsGroups + " order by GroupId";
            _this.sqliteService.executeSql(sql, []).then(function (rst) {
                var result = [];
                for (var _i = 0, _a = rst.res.data; _i < _a.length; _i++) {
                    var item = _a[_i];
                    result.push(item);
                }
                observe.next(result);
            }).catch(function (err) {
                observe.error(err);
            });
        });
    };
    SqliteProvider.prototype.saveFriendsGroup = function (friendGroups) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var querysql = "DELETE FROM  " + _this.table.friendsGroups + " ";
            _this.sqliteService.executeSql(querysql, []).then(function (data) {
                var params = [];
                var valuesStr = '';
                for (var _i = 0, friendGroups_1 = friendGroups; _i < friendGroups_1.length; _i++) {
                    var friendGroup = friendGroups_1[_i];
                    params.push(friendGroup.GroupId);
                    params.push(friendGroup.GroupName);
                    valuesStr ? valuesStr += ',(?,?)' : valuesStr += '(?,?)';
                }
                var sql = "INSERT INTO " + _this.table.friendsGroups + " (GroupId,GroupName) VALUES " + valuesStr + " ";
                _this.sqliteService.executeSql(sql, params).then(function (data) {
                    observe.next({
                        result: true,
                        message: 'insert Groups Successfully!'
                    });
                }).catch(function (err) {
                    observe.error({
                        result: true,
                        message: err
                    });
                });
            }).catch(function (err) {
                observe.error({
                    result: true,
                    message: err
                });
            });
        });
    };
    /**
    * 插入FriendsGroup
    * @param group
    */
    SqliteProvider.prototype.insertFriendsGroup = function (friendGroups) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var params = [];
            params.push(friendGroups.GroupId);
            params.push(friendGroups.GroupName);
            var sql = "insert into " + _this.table.friendsGroups + " (GroupId,GroupName) values(?,?) ";
            _this.sqliteService.executeSql(sql, params).then(function (data) {
                observe.next({
                    result: true,
                    message: 'insert Group Successfully!'
                });
            }).catch(function (err) {
                observe.error({
                    result: true,
                    message: err
                });
            });
        });
    };
    /**
   * 更新FriendsGroup Name
   * @param group
   */
    SqliteProvider.prototype.updateGroup = function (friendGroups) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var params = [];
            params.push(friendGroups.GroupName);
            params.push(friendGroups.GroupId);
            var sql = "update  " + _this.table.friendsGroups + " set GroupName = ? where GroupId = ? ";
            _this.sqliteService.executeSql(sql, params).then(function (data) {
                observe.next({
                    result: true,
                    message: 'update Group Successfully!'
                });
            }).catch(function (err) {
                observe.error({
                    result: true,
                    message: err
                });
            });
        });
    };
    /**
   * 删除tag
   * @param id
   */
    SqliteProvider.prototype.deleteGroup = function (groupId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var sql = "delete from " + _this.table.friendsGroups + " where GroupId = ?";
            _this.sqliteService.executeSql(sql, [groupId]).then(function (data) {
                observe.next(true);
            }).catch(function (err) {
                observe.next(false);
            });
        });
    };
    /**
   * 查询friend信息
   * @param FriendId
   */
    SqliteProvider.prototype.queryFriendInfo = function (FriendId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var sql = "SELECT * FROM " + _this.table.friendInfo + " where FriendId = ?";
            _this.sqliteService.executeSql(sql, [FriendId]).then(function (rst) {
                var result = [];
                for (var _i = 0, _a = rst.res.data; _i < _a.length; _i++) {
                    var item = _a[_i];
                    result.push(item);
                }
                observe.next(result);
            }).catch(function (err) {
                observe.error(err);
            });
        });
    };
    SqliteProvider.prototype.saveFriendInfo = function (friendInfo) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var querysql = "SELECT * from  " + _this.table.friendInfo + " where FriendId = ?";
            var params = [];
            params.push(friendInfo.id);
            _this.sqliteService.executeSql(querysql, params).then(function (data) {
                if (data.res.data.length > 0) {
                    return _this.updateFriendInfo(friendInfo).subscribe();
                }
                else {
                    return _this.insertFriendInfo(friendInfo).subscribe();
                }
            }).catch(function (err) {
                observe.error({
                    result: true,
                    message: err
                });
            });
        });
    };
    /**
    * 插入contact
    * @param friendInfo
    */
    SqliteProvider.prototype.insertFriendInfo = function (friendInfo) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var params = [];
            params.push(friendInfo.id);
            params.push(JSON.stringify(friendInfo));
            var sql = "insert into " + _this.table.friendInfo + " (FriendId,Extra) values(?,?) ";
            _this.sqliteService.executeSql(sql, params).then(function (data) {
                observe.next({
                    result: true,
                    message: 'insert friendInfo ok'
                });
            }).catch(function (err) {
                observe.error({
                    result: true,
                    message: err
                });
            });
        });
    };
    /**
   * 更新 friendInfo
   * @param friendInfo
   */
    SqliteProvider.prototype.updateFriendInfo = function (friendInfo) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var params = [];
            params.push(JSON.stringify(friendInfo));
            params.push(friendInfo.id);
            var sql = "update  " + _this.table.friendInfo + " set Extra = ? where FriendId = ? ";
            _this.sqliteService.executeSql(sql, params).then(function (data) {
                observe.next({
                    result: true,
                    message: 'update friendInfo ok'
                });
            }).catch(function (err) {
                observe.error({
                    result: true,
                    message: err
                });
            });
        });
    };
    /**
     * 删除friendInfo
     * @param friendId
     */
    SqliteProvider.prototype.deletefriendInfo = function (friendId) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observe) {
            var sql = "delete from " + _this.table.friendInfo + " where FriendId = ?";
            _this.sqliteService.executeSql(sql, [friendId]).then(function (data) {
                observe.error({
                    result: true,
                    message: 'delete friendInfo ok'
                });
            }).catch(function (err) {
                observe.error({
                    result: true,
                    message: err
                });
            });
        });
    };
    SqliteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sqlite_service__["a" /* SqliteService */],
            __WEBPACK_IMPORTED_MODULE_0__handle_handle__["a" /* HandleProvider */]])
    ], SqliteProvider);
    return SqliteProvider;
}());

//# sourceMappingURL=sqlite-provider.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server_provider__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_themeable_browser__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__share_provider__ = __webpack_require__(125);
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

















var WidgetProvider = (function () {
    function WidgetProvider(httpService, session, themeableBrowser, events, nativeService, storageService, translate, clipboard, logger, shareProvider, iab, handler, serverProvider, alertCtrl) {
        this.httpService = httpService;
        this.session = session;
        this.themeableBrowser = themeableBrowser;
        this.events = events;
        this.nativeService = nativeService;
        this.storageService = storageService;
        this.translate = translate;
        this.clipboard = clipboard;
        this.logger = logger;
        this.shareProvider = shareProvider;
        this.iab = iab;
        this.handler = handler;
        this.serverProvider = serverProvider;
        this.alertCtrl = alertCtrl;
        this.browserMenuEvents = {
            shareFriends: 'shareFriends',
            shareMoment: 'shareMoment',
            openInBrowser: 'openInBrowser',
            copyUrl: 'copyUrl',
            Refresh: 'Refresh' //刷新
        };
        this.openBrowserTarget = '_blank'; //打开浏览器方式
        this.getConfig();
    }
    WidgetProvider.prototype.getConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storageService.getItem(this.session.userId + "browserCore")];
                    case 1:
                        _a.innerBrowser = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.storageService.getItem(this.session.userId + "openWay")];
                    case 2:
                        _b.openWay = _c.sent();
                        this.events.subscribe('change:openWay', function (innerBrowser, openWay) {
                            _this.innerBrowser = innerBrowser;
                            _this.openWay = openWay;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    //"iproud://AppPageId=WorkflowDetailsPage?modelname=HandSignLF_New&pid=19697185&taskid=167&app_needSign=false&from=message" 
    // 開啓WebApp 或 WebPage的公共方法
    WidgetProvider.prototype.openWebpage = function (page, navCtrl, isAddAccountId, callback) {
        var _this = this;
        if (isAddAccountId === void 0) { isAddAccountId = false; }
        // page.url =  "AppPageId=WorkflowDetailsPage?modelname=ACKN2_PO_V4&pid=18863436&taskid=3&app_needSign=true"
        // page.url =  "iproud://AppPageId=WorkflowDetailsPage?modelname=HandSignLF_New&pid=19697185&taskid=167&app_needSign=false&from=message" 
        if (!page.url)
            return;
        if (page.url) {
            var tmpurl = page.url;
            tmpurl = tmpurl.split('?')[0];
            if (tmpurl.indexOf('iproud.fihmb.com') > -1 && tmpurl.indexOf('Community') > -1) {
                page.options.useNativeBrowser = 'iframe';
                page.options.canShare = false;
            }
        }
        this.page = page;
        if (!__WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].isUrl(page.url)) {
            var pageItem = __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].parsePageUrl(page.url);
            try {
                if (pageItem.AppPageId) {
                    navCtrl.push(pageItem.AppPageId, pageItem.params);
                }
                else {
                    navCtrl.push(page.url, page);
                }
            }
            catch (error) {
                JSON.stringify(error);
            }
            return;
        }
        /**
         * AppPageId  頁面id(WorkflowDetailsPage)
         * modelname modelname
         * pid pid
         * taskid taskid
         * from 來源(推送: 'message')
         */
        // let str = `iproud://AppPageId=${AppPageId}?modelname=${modelname}&pid=${pid}&taskid=${taskid}&from=${message}"`
        this.getAuthCode(page.appId, page.url).subscribe(function (data) {
            // this.httpService.post('v2/Auth/GetCode', true, { AppId: page.appId || 0 }).subscribe((data: any) => {
            try {
                if (data.errcode == 0) {
                    var code = data.result.code;
                    var completeUrl = __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].completeUrlForBrowser(page.url, code, _this.session, page.appId > '0' ? page.appId.toString() : null, isAddAccountId);
                    _this.InAppBrowserOptions(page);
                    var isShare = __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getBoolean(page.options.canShare, true); //默认为 true
                    var allowCopyLink = __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getBoolean(page.options.allowCopyLink, true); //默认为 true
                    var allowOpenInBrowser = __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getBoolean(page.options.allowOpenInBrowser, true); //默认为 true
                    var useNativeBrowser = page.options.useNativeBrowser || __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].INAPPBROWSER; //默认为 true
                    /** 是否能够分享 */
                    if (isShare) {
                        _this.share = {
                            title: page.title,
                            description: page.description,
                            thumb: page.imageUrl,
                            url: completeUrl
                        };
                        _this.options.menu.items.push({
                            event: _this.browserMenuEvents.shareFriends,
                            label: _this.translate.instant('BROWSER_POPOVER_WECHAT')
                        });
                        _this.options.menu.items.push({
                            event: _this.browserMenuEvents.shareMoment,
                            label: _this.translate.instant('BROWSER_POPOVER_WECHAT_MOMENT')
                        });
                    }
                    else {
                        _this.share = null;
                    }
                    /** 是否能复制链接 */
                    if (allowCopyLink) {
                        _this.options.menu.items.push({
                            event: _this.browserMenuEvents.copyUrl,
                            label: _this.translate.instant('BROWSER_POPOVER_COPYURL'),
                            toast: _this.translate.instant('BROWSER_COPIED')
                        });
                    }
                    /** 是否能在浏览器打开 */
                    if (allowOpenInBrowser) {
                        _this.options.menu.items.push({
                            event: _this.browserMenuEvents.openInBrowser,
                            label: _this.translate.instant('BROWSER_POPOVER_OPENINBROWSER')
                        });
                    }
                    _this.options.menu.items.push({
                        event: _this.browserMenuEvents.Refresh,
                        label: _this.translate.instant('BROWSER_POPOVER_REFRESH')
                    });
                    if (_this.nativeService.isIos()) {
                        _this.options.title.fontSize = 19;
                    }
                    var params = {
                        browser: {
                            appId: page.appId,
                            title: page.title,
                            originUrl: page.url,
                            completeUrl: completeUrl,
                            share: _this.share,
                            description: page.description,
                            options: {
                                allowCopyLink: allowCopyLink,
                                allowOpenInBrowser: allowOpenInBrowser
                            }
                        },
                        callback: callback
                    };
                    if (_this.innerBrowser) {
                        _this.openByBrowser(_this.openWay, completeUrl, navCtrl, params);
                    }
                    else {
                        if (useNativeBrowser && _this.nativeService.isMobile()) {
                            _this.openByBrowser(useNativeBrowser, completeUrl, navCtrl, params);
                        }
                        else {
                            navCtrl.push('BrowserPage', params, { updateUrl: true });
                        }
                    }
                }
            }
            catch (e) {
                alert(JSON.stringify(e));
            }
        });
    };
    WidgetProvider.prototype.openByBrowser = function (browserName, completeUrl, navCtrl, params) {
        var _this = this;
        browserName = browserName ? browserName.toLowerCase() : null;
        if (completeUrl) {
            completeUrl = completeUrl.trim();
        }
        switch (browserName) {
            case __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].INAPPBROWSER.toLowerCase():
                this.runForInAppBrowser(completeUrl);
                break;
            case __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].IFRAME.toLowerCase():
                navCtrl.push('BrowserPage', params, { updateUrl: true });
                break;
            case __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].LOCALBROWSER.toLowerCase():
                this.openOnSystem(completeUrl);
                break;
            case __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].ASK.toLowerCase():
                this.openOptions(function (browserName) {
                    _this.openByBrowser(browserName, completeUrl, navCtrl, params);
                });
                break;
            default:
                navCtrl.push('BrowserPage', params, { updateUrl: true });
        }
    };
    WidgetProvider.prototype.openOptions = function (callback) {
        var alert = this.alertCtrl.create({
            title: 'open browser way',
            inputs: [
                {
                    name: __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].IFRAME,
                    type: 'radio',
                    label: __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].IFRAME,
                    value: __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].IFRAME
                },
                {
                    name: __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].INAPPBROWSER,
                    type: 'radio',
                    label: __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].INAPPBROWSER,
                    value: __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].INAPPBROWSER
                },
                {
                    name: __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].LOCALBROWSER,
                    type: 'radio',
                    label: __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].LOCALBROWSER,
                    value: __WEBPACK_IMPORTED_MODULE_3__services_constants__["v" /* OPEN_WIDGET_WAY */].LOCALBROWSER
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        callback();
                    }
                },
                {
                    text: 'OK',
                    handler: function (data) {
                        callback(data);
                    }
                }
            ]
        });
        alert.present();
    };
    WidgetProvider.prototype.openOnSystem = function (completeUrl) {
        this.iab.create(completeUrl, '_system');
    };
    WidgetProvider.prototype.openWebpageByIFrame = function (page, navCtrl, isShare, callback) {
        var _this = this;
        if (isShare === void 0) { isShare = true; }
        if (!page.url)
            return;
        this.page = page;
        if (!__WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].isUrl(page.url)) {
            var pageItem = __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].parsePageUrl(page.url);
            try {
                if (pageItem.AppPageId) {
                    navCtrl.push(pageItem.AppPageId, pageItem.params);
                }
                else {
                    navCtrl.push(page.url, page);
                }
            }
            catch (error) {
                JSON.stringify(error);
            }
            return;
        }
        this.getAuthCode(page.appId, page.url).subscribe(function (data) {
            // this.httpService.post('v2/Auth/GetCode', true, { AppId: page.appId || 0 }).subscribe((data: any) => {
            if (data.errcode == 0) {
                var code = data.result.code;
                var completeUrl = __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].completeUrlForBrowser(page.url, code, _this.session, page.appId > '0' ? page.appId.toString() : null);
                if (isShare) {
                    _this.share = {
                        title: page.title,
                        description: page.description,
                        thumb: page.imageUrl,
                        url: completeUrl
                    };
                }
                else {
                    _this.share = null;
                }
                navCtrl.push('BrowserPage', {
                    browser: {
                        appId: page.appId,
                        title: page.title,
                        originUrl: page.url,
                        completeUrl: completeUrl,
                        share: _this.share,
                        description: page.description,
                        options: {}
                    },
                    callback: callback
                }, { updateUrl: true });
            }
        });
    };
    WidgetProvider.prototype.buildShareMessage = function (res) {
        var messageBody = {
            title: res.title || this.share.title,
            description: this.share.description,
            thumb: this.share.thumb || __WEBPACK_IMPORTED_MODULE_3__services_constants__["j" /* DEFAULT_LOGO */],
            resource: res.url
        };
        return messageBody;
    };
    // 分享微信朋友圈
    WidgetProvider.prototype.shareWxTimeLine = function (res) {
        this.shareProvider.shareWebPageWxTimeLine(this.buildShareMessage(res)).subscribe(function () {
            // this.browser.show()
        });
    };
    // 分享到微信好友
    WidgetProvider.prototype.shareWxSession = function (res) {
        this.shareProvider.shareWebPageWxSession(this.buildShareMessage(res)).subscribe(function () {
            // this.browser.show()
        });
    };
    WidgetProvider.prototype.runForInAppBrowser = function (completeUrl) {
        var _this = this;
        // this.handler.generate("completeUrl",-1, {
        //   completeUrl:completeUrl,
        //   openBrowserTarget: this.openBrowserTarget,
        //   options: this.options
        // })
        // if (this.browser) {
        //   this.browser = null;
        // }
        this.browser = this.themeableBrowser.create(completeUrl, this.openBrowserTarget, this.options);
        this.browser.on(this.browserMenuEvents.shareFriends).subscribe(function (res) {
            _this.shareWxSession(res);
        }, function (err) {
            alert(JSON.stringify(err));
            _this.logger.log(JSON.stringify(err), _this.browserMenuEvents.shareFriends);
        });
        this.browser.on(this.browserMenuEvents.shareMoment).subscribe(function (res) {
            _this.shareWxTimeLine(res);
        }, function (err) {
            _this.logger.log(JSON.stringify(err), _this.browserMenuEvents.shareMoment);
        });
        this.browser.on(this.browserMenuEvents.Refresh).subscribe(function (res) {
            _this.browser.reload();
        }, function (err) {
            _this.logger.log(JSON.stringify(err), _this.browserMenuEvents.Refresh);
        });
        this.browser.on(this.browserMenuEvents.openInBrowser).subscribe(function (res) {
            var currenturl = __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].removeSessionInfo(res.url || _this.page.url);
            _this.openInBrowser(_this.page.appId, currenturl);
        });
        this.browser.on(this.browserMenuEvents.copyUrl).subscribe(function (res) {
            var url = __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].removeSessionInfoForShareLink(res.url);
            _this.clipboard.copy(url);
        });
    };
    /**
     * 在本地浏览器打开
     * @param appId
     * @param url
     */
    WidgetProvider.prototype.openInBrowser = function (appId, url) {
        var _this = this;
        if (appId === void 0) { appId = 0; }
        this.getAuthCode(appId, url).subscribe(function (data) {
            // this.httpService.post('v2/Auth/GetCode', true, { AppId: appId || 0 }).subscribe((data: any) => {
            if (data.errcode == 0) {
                var code = data.result.code;
                var completeUrl = __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].completeUrlForBrowser(url, code, _this.session, appId > '0' ? appId.toString() : null);
                _this.openOnSystem(completeUrl);
            }
        });
    };
    WidgetProvider.prototype.InAppBrowserOptions = function (page) {
        var isDarkMode = this.session.isDarkMode;
        this.options = {
            statusbar: {
                color: __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getThemeColor(isDarkMode).BG_COLOR,
                isDark: isDarkMode
            },
            toolbar: {
                height: 44,
                color: __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getThemeColor(isDarkMode).BG_COLOR
            },
            title: {
                color: __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getThemeColor(isDarkMode).TEXT_COLOR,
                showPageTitle: true,
                fontSize: 17 //安卓17，ios19
            },
            backButton: {
                wwwImage: __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getThemeColor(isDarkMode).BROWSER_IMG.BACKBUTTON.wwwImage,
                wwwImagePressed: __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getThemeColor(isDarkMode).BROWSER_IMG.BACKBUTTON.wwwImagePressed,
                wwwImageDensity: 2.2,
                align: 'left',
                event: 'backPressed'
            },
            closeButton: {
                wwwImage: __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getThemeColor(isDarkMode).BROWSER_IMG.CLOSEBUTTON.wwwImage,
                wwwImagePressed: __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getThemeColor(isDarkMode).BROWSER_IMG.CLOSEBUTTON.wwwImagePressed,
                align: 'right',
                event: 'closePressed',
                wwwImageDensity: 3.0,
            },
            browserProgress: {
                showProgress: true,
                progressBgColor: __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getThemeColor(isDarkMode).BORDER_COLOR,
                progressColor: "#1A83D4"
            },
            menu: {
                wwwImage: __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getThemeColor(isDarkMode).BROWSER_IMG.MENU.wwwImage,
                wwwImagePressed: __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getThemeColor(isDarkMode).BROWSER_IMG.MENU.wwwImagePressed,
                wwwImageDensity: 3.8,
                cancel: this.translate.instant('APP_COMMON_CANCEL'),
                align: 'right',
                items: []
            },
            backButtonCanClose: true
        };
        var NEWS_WIDGETID = '59907583691776';
        if (page.title && page.appId != NEWS_WIDGETID && page.appId) {
            this.options.title.staticText = page.title;
        }
    };
    WidgetProvider.prototype.getWidgetById = function (id) {
        if (!id)
            return null;
        if (this.session.widget) {
            for (var _i = 0, _a = this.session.widget; _i < _a.length; _i++) {
                var item = _a[_i];
                for (var _b = 0, _c = item.widgets; _b < _c.length; _b++) {
                    var widget = _c[_b];
                    if (widget.id == id) {
                        return widget;
                    }
                }
            }
        }
        if (this.session.homedata && this.session.homedata['widgets']) {
            for (var _d = 0, _e = this.session.homedata['widgets']; _d < _e.length; _d++) {
                var widget = _e[_d];
                if (widget.id == id) {
                    return widget;
                }
            }
        }
        return null;
    };
    WidgetProvider.prototype.clearBrowserCache = function () {
        var options = {
            hidden: true,
            clearcache: true
        };
        this.browser = this.themeableBrowser.create('about:blank', this.openBrowserTarget, options);
        this.browser.close();
        this.browser = null;
    };
    WidgetProvider.prototype.openFeedback = function (navCtrl) {
        var page = {
            url: this.serverProvider.WebServer() + "WebApp/Faq/Index",
            title: this.translate.instant('MY_LIST_HELP'),
            description: "",
            imageUrl: "",
            appId: "",
            options: {
                canShare: false,
                allowCopyLink: false,
                allowOpenInBrowser: false,
            }
        };
        this.openWebpage(page, navCtrl);
    };
    WidgetProvider.prototype.getAllWidget = function (input, isHideLoading) {
        var seq = this.httpService.post('Widget/GetAll', true, input, isHideLoading).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    WidgetProvider.prototype.getAllForEdit = function (input) {
        var seq = this.httpService.post('Widget/GetAllForEdit', true, input).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    WidgetProvider.prototype.getFavorites = function () {
        var seq = this.httpService.post('Widget/Favorites', true, { "Lang": this.session.language }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    WidgetProvider.prototype.setFavorites = function (input) {
        var seq = this.httpService.post('Widget/SetFavorites', true, input).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    //轮播图
    WidgetProvider.prototype.getSlideList = function () {
        var seq = this.httpService.post('Content/SlideList', true, { "Lang": this.session.language }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    //友情链接
    WidgetProvider.prototype.getFriendlyLinkList = function () {
        var seq = this.httpService.post('Content/FriendlyLinkList', true, { "Lang": this.session.language }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    //友情链接
    WidgetProvider.prototype.getHomeData = function (isHideLoading) {
        var seq = this.httpService.post('Content/GetHomeData', true, { "Lang": this.session.language }, isHideLoading).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    //搜素
    WidgetProvider.prototype.getSearch = function (searchInfo) {
        var _this = this;
        var seq = this.httpService.post('Content/Search', true, searchInfo, true).share();
        seq.subscribe(function (data) {
        }, function (err) {
            _this.logger.log(JSON.stringify(err), "Content/Search");
        });
        return seq;
    };
    WidgetProvider.prototype.getPageArticle = function (_SubjectId, _lang) {
        var seq = this.httpService.post('Content/PageArticle', false, {
            SubjectId: _SubjectId,
            lang: _lang
        }).share();
        seq.subscribe(function (data) {
            // alert("save result:" + JSON.stringify(data));
            // this.nativeService.showToast("saveGeolocation completed");
        });
        return seq;
    };
    /**
     * 获取AuthCode，判断传入参数APPID是否为空，若为空则解析URL中APPID，作为接口参数
     * @param AppId
     * @param URL
     */
    WidgetProvider.prototype.getAuthCode = function (AppId, URL) {
        if (!AppId)
            AppId = __WEBPACK_IMPORTED_MODULE_14__services_utility__["a" /* Utility */].getQueryByName(URL, 'appid') || "0";
        return this.httpService.post('v2/Auth/GetCode', true, { AppId: AppId }).share();
    };
    WidgetProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_13__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_themeable_browser__["a" /* ThemeableBrowser */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_7__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_4__services_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_16__share_provider__["a" /* ShareProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1__handle_handle__["a" /* HandleProvider */],
            __WEBPACK_IMPORTED_MODULE_0__server_provider__["a" /* ServerProvider */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* AlertController */]])
    ], WidgetProvider);
    return WidgetProvider;
}());

//# sourceMappingURL=widget-provider.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_logger__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserProvider = (function () {
    function UserProvider(httpService, events, translate, nativeService, storageService, session, logger, loadingCtrl) {
        this.httpService = httpService;
        this.events = events;
        this.translate = translate;
        this.nativeService = nativeService;
        this.storageService = storageService;
        this.session = session;
        this.logger = logger;
        this.loadingCtrl = loadingCtrl;
    }
    /**
     * Log the user out, which forgets the session
     */
    UserProvider.prototype.logout = function () {
        var seq = this.httpService.get('User/Logout', true, {}).share();
        this.storageService.removeItem("userId");
        this.storageService.removeItem('token');
        this.storageService.removeItem('refreshtoken');
        this.storageService.removeItem('tokenObject');
        this.storageService.removeItem('homedata');
        this.session.token = null;
        this.session.userId = null;
        this.session.user = null;
        this.session.refreshToken = null;
        this.session.homedata = null;
        this.session.unionId = null;
        // 不直接做页面跳转，发布事件，由TabsPage接收事件并处理
        this.events.publish('user:reLogin', Date.now());
        return seq;
    };
    UserProvider.prototype.uploadAvatar = function (imageData) {
        var _this = this;
        var seq = this.httpService.post('User/UploadAvatar', true, { "imageData": imageData }).share();
        seq.subscribe(function (data) {
            _this.getUserInfo();
        });
        return seq;
    };
    // getUserInfo(){
    //   return this.httpService.post('User/GetUserInfo',true).map((res: Response) => res.json());
    // }
    UserProvider.prototype.getUserInfo = function (isHideLoading, isRegister) {
        var _this = this;
        var seq = this.httpService.post('User/GetUserInfo', true, { "Lang": this.session.language }, isHideLoading).share();
        seq.subscribe(function (data) {
            _this.session.user = data.result;
            _this.session.isEmployee = data.result.isEmployee;
            // if(this.session.isEmployee) {
            //   this.session.user.extendFields = []
            //   for(let key of Object.keys(this.session.user.employeeInfo)){
            //     let item = {
            //       name: key,
            //       value: this.session.user.employeeInfo[key],
            //       IsLongField: this.session.user.employeeInfo[key] ? this.session.user.employeeInfo[key].length > 10 : false
            //     }
            //     this.session.user.extendFields.push(item)
            //   }
            // }
            _this.storageService.setItem("isEmployee", data.result.isEmployee);
            _this.events.publish('user:info-changed', Date.now());
            if (isRegister) {
                _this.events.publish('register:success', Date.now());
            }
        }, function (error) {
            if (error.errcode === 6101) {
                _this.events.publish('user:reLogin');
            }
        });
        return seq;
    };
    UserProvider.prototype.changePassword = function (input) {
        var _this = this;
        input.oldPassword = __WEBPACK_IMPORTED_MODULE_6__services_services__["h" /* Utility */].md5(input.oldPassword);
        input.newPassword = __WEBPACK_IMPORTED_MODULE_6__services_services__["h" /* Utility */].md5(input.newPassword);
        var seq = this.httpService.post('User/ResetPassword', true, input).share();
        seq.subscribe(function (data) {
        }, function (err) {
            if (err.errcode == 6122) {
                _this.nativeService.alert(_this.translate.instant("SET_PASSWORD_OLD_ERR"));
            }
        });
        return seq;
    };
    //设置昵称
    UserProvider.prototype.setNickname = function (input) {
        var _this = this;
        var seq = this.httpService.post('User/UpdateUserInfo', true, {
            "nickname": input.nickname,
            "Lang": this.session.language
        }).share();
        seq.subscribe(function (data) {
            if (data.errcode == 0) {
                _this.nativeService.showToast(_this.translate.instant("MY_SET_NICKNAME_SUCCEED"));
            }
        }, function (err) {
            _this.nativeService.showToast(_this.translate.instant("MY_SET_NICKNAME_DEFEATED"));
            _this.logger.log(JSON.stringify(err), "User/UpdateUserInfo");
        });
        return seq;
    };
    //重置电话
    UserProvider.prototype.setPhone = function (input) {
        var _this = this;
        var seq = this.httpService.post('User/UpdateMobilePhone', true, {
            "newMobilePhone": input.phoneNo,
            "securityCode": input.securityCode,
            "Lang": this.session.language
        }).share();
        seq.subscribe(function (data) {
            if (data.errcode == 0) {
                _this.nativeService.showToast(_this.translate.instant("MY_SET_PHONE_SUCCEED"));
            }
        }, function (err) {
            _this.nativeService.showToast(_this.translate.instant("MY_SET_PHONE_DEFEATED"));
            _this.logger.log(JSON.stringify(err), "User/UpdateMobilePhone");
        });
        return seq;
    };
    //绑定员工信息
    UserProvider.prototype.BindEmployee = function (input) {
        var _this = this;
        var seq = this.httpService.post('User/BindEmployee', true, {
            "employeeNo": input.employeeNo,
            "idCardNo": input.idCardNo,
            "Lang": this.session.language
        }).share();
        seq.subscribe(function (data) {
            if (data.errcode == 0) {
                _this.nativeService.showToast(_this.translate.instant("MY_BIND_EMPLOYEE_SUCCEED"));
            }
        }, function (err) {
            var errorstr = '';
            switch (err.errcode) {
                case 6143:
                    errorstr = _this.translate.instant("MY_BIND_EMPLOYEE_ALREADY_BIND") + "," + err.errmsg;
                    break;
                case 6141:
                    errorstr = _this.translate.instant("MY_BIND_EMPLOYEE_DEFEATED");
                    break;
                default:
                    errorstr = err.errmsg;
            }
            _this.nativeService.showToast(errorstr);
            _this.logger.log(JSON.stringify(err), "User/BindEmployee");
        });
        return seq;
    };
    //解除员工信息绑定
    UserProvider.prototype.UnbindEmployee = function () {
        var _this = this;
        var seq = this.httpService.post("User/UnbindEmployee", true, { "Lang": this.session.language }).share();
        seq.subscribe(function (data) {
            _this.storageService.removeItem(_this.session.certKey);
            if (data.errcode == 0) {
                _this.nativeService.showToast(_this.translate.instant("MY_UNBIND_EMPLOYEE_SUCCEED"));
            }
        }, function (err) {
            _this.nativeService.showToast(_this.translate.instant("MY_UNBIND_EMPLOYEE_DEFEATED"));
            _this.logger.log(JSON.stringify(err), "User/UnbindEmployee");
        });
        return seq;
    };
    UserProvider.prototype.updateDeviceId = function (deviceId) {
        //this.nativeService.showToast("updateDeviceId begin");
        var seq = this.httpService.post('User/DeviceId', true, { "deviceId": deviceId }, true).share();
        seq.subscribe(function (data) {
            //this.nativeService.showToast("updateDeviceId completed");
        });
        return seq;
    };
    UserProvider.prototype.privateSetting = function (setting) {
        //this.nativeService.showToast("updateDeviceId begin");
        var seq = this.httpService.post('User/PrivateSetting', true, setting, true).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    //取私有設置
    UserProvider.prototype.getPrivateSetting = function () {
        var seq = this.httpService.get('User/Settings', true, {}, true).share();
        seq.subscribe(function (data) {
        }, function (err) {
        });
        return seq;
    };
    /**
     * 保存用户坐标
     * @param location
     */
    UserProvider.prototype.saveGeolocation = function (location) {
        var seq = this.httpService.post('User/Geolocation', true, location, true).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    /**
     * 清除服务器缓存
     */
    UserProvider.prototype.clearMemberCache = function () {
        var seq = this.httpService.post('User/ClearMemberCache', true).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    /**
     * 是否需要sign
     */
    UserProvider.prototype.IsPunchMember = function () {
        var seq = this.httpService.post('User/IsPunchMember', true, null, true).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    UserProvider.prototype.PunchMemberRecords = function () {
        var seq = this.httpService.post('User/PunchMemberRecords', true).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    /**
     * 解绑微信
     */
    UserProvider.prototype.UnBindWechat = function () {
        var _this = this;
        var seq = this.httpService.post('User/UnBindWechat', true, {}).share();
        seq.subscribe(function (data) {
            _this.getUserInfo(true).subscribe();
        });
        return seq;
    };
    /**
     * 绑定微信
     * @param Code 微信code
     */
    UserProvider.prototype.BindWechat = function (Code) {
        var seq = this.httpService.post('User/BindWechat', true, {
            Code: Code
        }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    /**
   * 绑定微信
   * @param UnionId 微信 UnionId
   */
    UserProvider.prototype.BindWechatByUnionId = function (UnionId) {
        var seq = this.httpService.post('User/BindWechatByUnionId', true, {
            UnionId: UnionId
        }).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    /**
     * 注销账号
     */
    UserProvider.prototype.CancelAccount = function () {
        var seq = this.httpService.post('User/Cancel', true, {}).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    // GlobleSettings() {
    //   let seq = this.httpService.get('Config/GlobleSettings', true, null, true).share();
    //   seq.subscribe((data: any) => { 
    //   });
    //   return seq;
    // }
    UserProvider.prototype.getWechatUserInfo = function (_code) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"](function (obersve) {
            var grant_type = 'authorization_code';
            var code = _code;
            var getTokenUrl = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + __WEBPACK_IMPORTED_MODULE_0__services_constants__["G" /* WEIXIN_APPID */] + "&secret=" + __WEBPACK_IMPORTED_MODULE_0__services_constants__["H" /* WEIXIN_APPSECRET */] + "&code=" + code + "&grant_type=" + grant_type;
            _this._getWechatAccessToken(getTokenUrl).subscribe(function (res) {
                if (res.errcode == 0) {
                    var accessTokenResponse = res.result;
                    var accessToken = accessTokenResponse.access_token;
                    var openId = accessTokenResponse.openid;
                    // 3. 获取用户信息
                    var getUserUrl = "https://api.weixin.qq.com/sns/userinfo?access_token=" + accessToken + "&openid=" + openId + "&lang=zh_CN";
                    _this._getWechatUserInfo(getUserUrl).subscribe(function (res) {
                        obersve.next(res);
                    }, function (error) {
                        obersve.error(error);
                    });
                }
            }, function (err) {
                obersve.error(err);
            });
        });
    };
    /**
     * 获取微信Code
     */
    UserProvider.prototype.getWeChatCode = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.nativeService.isInstallWeChat();
            var loading = _this.loadingCtrl.create({
                content: "跳转微信登录中...",
                dismissOnPageChange: true,
                showBackdrop: true //是否显示遮罩层
            });
            loading.present();
            try {
                var scope = "snsapi_userinfo", state = "com.fihmb.iproud";
                // 1. 获取code
                Wechat.auth(scope, state, function (response) {
                    resolve(response.code);
                }, function (reason) {
                    reject(reason);
                });
            }
            catch (error) {
                console.error(error);
                reject(error);
            }
            finally {
                loading.dismiss();
            }
        });
    };
    UserProvider.prototype._getWechatAccessToken = function (getTokenUrl) {
        var seq = this.httpService.post(getTokenUrl).share();
        seq.subscribe(function () {
        }, function (err) {
            alert('Get AccessToken failed,' + JSON.stringify(err, null, 2));
        });
        return seq;
    };
    UserProvider.prototype._getWechatUserInfo = function (getUserUrl) {
        var seq = this.httpService.post(getUserUrl).share();
        seq.subscribe(function () {
        }, function (err) {
            alert('Get WeChatUserInfo failed,' + JSON.stringify(err, null, 2));
        });
        return seq;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_6__services_services__["g" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_1__services_logger__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* LoadingController */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user-provider.js.map

/***/ }),

/***/ 963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingProvider = (function () {
    function SettingProvider(storage, defaults) {
        this.storage = storage;
        this.defaults = defaults;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    SettingProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    SettingProvider.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    SettingProvider.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    SettingProvider.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    SettingProvider.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    SettingProvider.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    SettingProvider.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(SettingProvider.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    SettingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], SettingProvider);
    return SettingProvider;
}());

//# sourceMappingURL=setting-provider.js.map

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Validators */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(33);
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


var Validators = (function (_super) {
    __extends(Validators, _super);
    function Validators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Validators_1 = Validators;
    /*E-mail*/
    Validators.email = function (control) {
        return Validators_1.validatorsByPattern('email', control, '([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?');
    };
    /*手机号码*/
    Validators.phone = function (control) {
        return Validators_1.validatorsByPattern('phone', control, '1[0-9]{10,10}');
    };
    /*中文*/
    Validators.chinese = function (control) {
        return Validators_1.validatorsByPattern('chinese', control, '[(\u4e00-\u9fa5)]+');
    };
    /*英文、数字包括下划线*/
    Validators.legallyNamed = function (control) {
        return Validators_1.validatorsByPattern('legallyNamed', control, '[A-Za-z0-9_]+');
    };
    Validators.validatorsByPattern = function (name, control, pattern) {
        var validatorFn = Validators_1.pattern(pattern)(control);
        if (validatorFn != null) {
            validatorFn[name] = validatorFn['pattern'];
        }
        return validatorFn;
    };
    Validators = Validators_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Validators);
    return Validators;
    var Validators_1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */]));

//# sourceMappingURL=validators.js.map

/***/ }),

/***/ 965:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaceService = (function () {
    function FaceService(httpService) {
        this.httpService = httpService;
    }
    //检测人脸
    FaceService.prototype.Detect = function (image_base64) {
        image_base64 = "";
        var map;
        map.set("app_key", "IVQNF-evjN2A7QlksgR9o6CZZZiW5OsX");
        map.set("api_secret", "D325_MKkIab2REdHMexwdF0glUbcHz1b");
        var seq = this.httpService.postFormData("https://api-cn.faceplusplus.com/facepp/v3/detect", false, map).share();
        // seq.subscribe((data: any) => {
        // });
        return seq;
    };
    //比照人脸
    FaceService.prototype.Compare = function (face_token, image_base64) {
        face_token = "f21304042ccd3b6ea91a2c637ade179a";
        image_base64 = "";
        var map;
        map.set("app_key", "IVQNF-evjN2A7QlksgR9o6CZZZiW5OsX");
        map.set("api_secret", "D325_MKkIab2REdHMexwdF0glUbcHz1b");
        map.set("face_token", face_token);
        map.set("image_base64", image_base64);
        var seq = this.httpService.postFormData('https://api-cn.faceplusplus.com/facepp/v3/compare', false, map).share();
        seq.subscribe(function (data) {
        });
        return seq;
    };
    //搜索人脸
    //获取图片的Base64编码
    FaceService.prototype.getImgBase64 = function () {
        var base64 = "";
        var img = new Image();
        img.src = "";
        img.onload = function () {
            alert(base64);
        };
    };
    //将图片转换成Base64
    FaceService.prototype.image2Base64 = function (img) {
        return null;
    };
    FaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]])
    ], FaceService);
    return FaceService;
}());

//# sourceMappingURL=face-service.js.map

/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryProvider = (function () {
    function CountryProvider(translateService) {
        this.translateService = translateService;
        // this.translateService.instant.get(['COUNTRY_REAGION']).subscribe((values)=>{
        //     this.allCountries = values.COUNTRY_REAGION;
        // }); 
        this.allCountries = this.translateService.instant('COUNTRY_REAGION');
        this.countryHots = this.translateService.instant('COUNTRY_REAGION_HOT');
    }
    CountryProvider.prototype.all = function () {
        return this.allCountries;
    };
    CountryProvider.prototype.getHots = function () {
        return this.countryHots;
    };
    CountryProvider.prototype.query = function (keyword) {
        return this.allCountries.filter(function (item) {
            return item.name.toUpperCase().indexOf(keyword.toUpperCase()) >= 0 || item.code.toUpperCase().indexOf(keyword.toUpperCase()) >= 0 || item.number.indexOf(keyword) >= 0;
        });
    };
    // getByPhoneCode(phonecode: String) {
    //     return this.allCountries.find(item=> item.phoneCode == phonecode);
    CountryProvider.prototype.getCurrentCountry = function () {
        return this._selectCountry;
    };
    CountryProvider.prototype.setCurrentCountry = function (value) {
        this._selectCountry = value;
    };
    CountryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], CountryProvider);
    return CountryProvider;
}());

//# sourceMappingURL=country-provider.js.map

/***/ }),

/***/ 968:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
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
 * Generated class for the DatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var DatePipe = (function () {
    function DatePipe(events, session) {
        var _this = this;
        this.events = events;
        this.session = session;
        this.lang = 'en';
        this.lang = this.session.language;
        this.events.subscribe('lang:changed', function (res) {
            _this.lang = res.language;
        });
    }
    /**
     * Takes a value and makes it lowercase.
     */
    DatePipe.prototype.transform = function (utcDate) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!utcDate)
            return utcDate;
        __WEBPACK_IMPORTED_MODULE_3_moment___default.a.locale(this.lang.toLowerCase());
        var localdatetime = __WEBPACK_IMPORTED_MODULE_3_moment___default.a.utc(utcDate).local().format();
        var currentMiles = __WEBPACK_IMPORTED_MODULE_3_moment___default()().valueOf();
        var targetMiles = __WEBPACK_IMPORTED_MODULE_3_moment___default()(localdatetime).valueOf();
        var devalue = currentMiles - targetMiles;
        if (devalue > 0 && devalue < 1000 * 60 * 60 * 24 * 7) {
            return __WEBPACK_IMPORTED_MODULE_3_moment___default()(localdatetime).fromNow();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_moment___default()(localdatetime).format("LL");
        }
        // alert("enter a time pipe")
    };
    DatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'messageDatePipe',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__services_services__["f" /* Session */]])
    ], DatePipe);
    return DatePipe;
}());

//# sourceMappingURL=message-date.js.map

/***/ }),

/***/ 969:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the CacheFormatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var CacheFormatPipe = (function () {
    function CacheFormatPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    CacheFormatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!(value > 0))
            return '';
        return this._toString(value);
    };
    CacheFormatPipe.prototype._transformToCacheObj = function (value) {
        var result = {
            unit: '',
            value: 0
        };
        if (value > 0 && value < 1024) {
            result.unit = 'B';
            result.value = value;
        }
        else if (value >= 1024 && value < 1024 * 1024) {
            result.unit = 'KB';
            result.value = value / 1024;
        }
        else if (value >= 1024 * 1024 && value < 1024 * 1024 * 1024) {
            result.unit = 'MB';
            result.value = value / 1024 / 1024;
        }
        else if (value >= 1024 * 1024 * 1024) {
            result.unit = 'GB';
            result.value = value / 1024 / 1024 / 1024;
        }
        return result;
    };
    CacheFormatPipe.prototype._toFixed = function (cache) {
        if (cache === void 0) { cache = 0; }
        return cache.toFixed(2);
    };
    CacheFormatPipe.prototype._toString = function (value) {
        var result = this._transformToCacheObj(value);
        return "(" + this._toFixed(result.value) + result.unit + ")";
    };
    CacheFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'cacheFormat',
        })
    ], CacheFormatPipe);
    return CacheFormatPipe;
}());

//# sourceMappingURL=cache-format.js.map

/***/ }),

/***/ 998:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_my_set_password_set_password__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_deeplinks__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_handle_handle__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_globalization__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pages__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_providers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_services__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_sqlite_provider__ = __webpack_require__(90);
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



















var MyApp = (function () {
    function MyApp(ionicApp, translate, platform, config, nativeService, storageService, authProvider, events, jpushService, messageProvider, userProvider, session, configProvider, modalCtrl, globalization, alertCtrl, app, serverProvider, setting, location, cacheProvider, logger, device, handleProvider, sqlprovider, deeplinks, widgetProvider) {
        var _this = this;
        this.ionicApp = ionicApp;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.nativeService = nativeService;
        this.storageService = storageService;
        this.authProvider = authProvider;
        this.events = events;
        this.jpushService = jpushService;
        this.messageProvider = messageProvider;
        this.userProvider = userProvider;
        this.session = session;
        this.configProvider = configProvider;
        this.modalCtrl = modalCtrl;
        this.globalization = globalization;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.serverProvider = serverProvider;
        this.setting = setting;
        this.location = location;
        this.cacheProvider = cacheProvider;
        this.logger = logger;
        this.device = device;
        this.handleProvider = handleProvider;
        this.sqlprovider = sqlprovider;
        this.deeplinks = deeplinks;
        this.widgetProvider = widgetProvider;
        this.isDark = false; //是否为黑夜模式
        this.rootPage = ''; //首页
        this.backButtonPressed = false; //用于判断返回键是否触发 
        this.isLoadInit = false; //是否已经初始化 
        this.count = 0; //重新登录计数器 
        this.isShowLoginPage = false;
        this.isLogin = false;
        this.logArray = [];
        // this.generate('app.component.constructor', 'constructor is crated'); 
        platform.ready().then(function (readySource) {
            // Utility.test()
            // Utility.testRemoveSessionInfo() 
            if (_this.nativeService.isMobile()) {
                var routeObj = {};
                routeObj["/" + __WEBPACK_IMPORTED_MODULE_1__services_constants__["h" /* DEEPLINKS_TYPE */].OPENURL] = __WEBPACK_IMPORTED_MODULE_1__services_constants__["h" /* DEEPLINKS_TYPE */].OPENURL;
                routeObj["/" + __WEBPACK_IMPORTED_MODULE_1__services_constants__["h" /* DEEPLINKS_TYPE */].OPENPAGE] = __WEBPACK_IMPORTED_MODULE_1__services_constants__["h" /* DEEPLINKS_TYPE */].OPENPAGE;
                routeObj["/" + __WEBPACK_IMPORTED_MODULE_1__services_constants__["G" /* WEIXIN_APPID */]] = __WEBPACK_IMPORTED_MODULE_1__services_constants__["G" /* WEIXIN_APPID */];
                _this.deeplinks.route(routeObj).subscribe(function (match) {
                    // match.$route - the route we matched, which is the matched entry from the arguments to route()
                    // match.$args - the args passed in the link
                    // match.$link - the full link data
                    _this.handleProvider.generate('deeplink match', -1, match);
                    var route = match.$route;
                    var args = match.$args;
                    // let link = match.$link;
                    if (__WEBPACK_IMPORTED_MODULE_1__services_constants__["G" /* WEIXIN_APPID */] == route && _this.nativeService.isIos()) {
                        _this.events.publish('wechat-auth', args);
                    }
                    else {
                        _this._openBrowserFromWebLink(args, route);
                    }
                }, function (nomatch) {
                    var link = nomatch.$link;
                    if (__WEBPACK_IMPORTED_MODULE_1__services_constants__["G" /* WEIXIN_APPID */] == link.scheme && _this.nativeService.isIos()) {
                        _this.events.publish('wechat-auth', __WEBPACK_IMPORTED_MODULE_6__services_utility__["a" /* Utility */].parseQuery(link.url));
                    }
                    else {
                        _this.handleProvider.generate('deeplink no match', -1, nomatch);
                    }
                });
            }
            _this.handleProvider.init();
            _this.handleProvider.generate('platform ready success', 0, readySource);
            // this.nativeService.writeLog(JSON.stringify(this.logArray, null, 2)) 
            _this.initNative();
            _this.setting.load(); //初始化设置 
            _this.init(); //是否需要导览 
        }).catch(function (error) {
            _this.handleProvider.generate('platform ready failed', -1, error);
        });
        document.addEventListener("resume", function () {
            _this.resume();
        }, false);
        document.addEventListener("pause", function () {
            _this.pause();
        }, false);
        this.initTranslate();
    }
    MyApp.prototype._openBrowserFromWebLink = function (args, route) {
        var _this = this;
        this.handleProvider.generate('_openBrowserFromWebLink', -1, this.session.userId);
        if (this.session.userId) {
            switch (route) {
                case __WEBPACK_IMPORTED_MODULE_1__services_constants__["h" /* DEEPLINKS_TYPE */].OPENURL:
                    var widget = this.widgetProvider.getWidgetById(args.appId);
                    var page = {
                        url: decodeURIComponent(args.redirectUrl),
                        title: args.title ? decodeURIComponent(args.title) : '',
                        imageUrl: args.imageUrl ? decodeURIComponent(args.imageUrl) : '',
                        description: args.description ? decodeURIComponent(args.description) : '',
                        appId: args.appId,
                        options: {
                            canShare: widget ? widget.canShare : args.canShare,
                            allowCopyLink: widget ? widget.allowCopyLink : true,
                            allowOpenInBrowser: widget ? widget.allowOpenInBrowser : true,
                            useNativeBrowser: widget ? widget.useNativeBrowser : ''
                        }
                    };
                    this.widgetProvider.openWebpage(page, this.nav, __WEBPACK_IMPORTED_MODULE_6__services_utility__["a" /* Utility */].boolean(args.isAddAccountId));
                    break;
                case __WEBPACK_IMPORTED_MODULE_1__services_constants__["h" /* DEEPLINKS_TYPE */].OPENPAGE:
                    this.nav.push(route, args);
                    break;
                default:
            }
        }
        else {
            this.events.unsubscribe('openWidget:logined');
            this.events.subscribe('openWidget:logined', function () {
                _this.handleProvider.generate('openWidget:logined', -1, { args: args, route: route });
                _this._openBrowserFromWebLink(args, route);
            });
        }
    };
    /**
     * app进入前台事件
     */
    MyApp.prototype.resume = function () {
        this.initNative();
        this.handleProvider.generate('platform:resume', 0, "isLoadInit:" + this.isLoadInit);
    };
    /**
     * app进入后台事件
     */
    MyApp.prototype.pause = function () {
        // alert("qidong")
        this.handleProvider.generate('platform:pause', 0);
    };
    MyApp.prototype.generate = function (name, result) {
        var date = new Date();
        var time = date.getTime();
        var item = {
            name: name,
            result: result,
            handleTime: __WEBPACK_IMPORTED_MODULE_6__services_utility__["a" /* Utility */].dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss') + ' ' + time.toString().substr(time.toString().length - 3, 3)
        };
        this.logArray.push(item);
    };
    MyApp.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isHideTutorial, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // if (this.isLoadInit) return;//判断是否已经初始化，若未初始化则进行初始化
                        this.handleProvider.generate('component:init', 0);
                        isHideTutorial = null;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, this.storageService.getItem(__WEBPACK_IMPORTED_MODULE_16__services_constants__["F" /* TUTORIAL_FLAG_NAME */])];
                    case 2:
                        /**是否需要导览 */
                        isHideTutorial = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.storageService.getItem('optionTheme')];
                    case 3:
                        _a.isDark = _b.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        e_1 = _b.sent();
                        isHideTutorial = false;
                        this.isDark = false;
                        return [3 /*break*/, 6];
                    case 5:
                        this.setThemeMode(this.isDark);
                        /**
                         * 隐藏导览
                         */
                        if (__WEBPACK_IMPORTED_MODULE_6__services_utility__["a" /* Utility */].boolean(isHideTutorial)) {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_pages__["c" /* MainPage */];
                            // this.init(); 
                            this.initUserInfo(); //初始化个人信息
                            this.configProvider.init(); //初始化版本信息
                        }
                        else {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_pages__["k" /* TutorialPage */];
                        }
                        /**跳过导览后初始化app */
                        this.events.subscribe('tutorial:init', function () {
                            _this.initUserInfo(); //初始化个人信息
                            _this.configProvider.init(); //初始化版本信息
                            _this.nativeService.statusBarStyle(_this.isDark);
                        });
                        return [7 /*endfinally*/];
                    case 6:
                        this.isLoadInit = true;
                        this.jPushOpenNotification(); //先訂閱消息事件，再初始化極光推送 
                        this.cacheProvider.init(); //初始化缓存信息
                        this.initGlobalization(); // 取得设备端全球化设置，日期格式，时区等
                        this.registerBackButtonAction(); //註冊返回按鍵
                        this.initBrowserBackButton(); //订阅browser返回按钮事件
                        //this.initProductionListener(); //订阅是否为生产环境
                        this.initListeningUserIsActive(); //订阅用户是否活动状态
                        this.initVersionListener(); //订阅有关版本事件
                        this.initGlobalSetting(); //获取全局设置
                        // this.configProvider.ConfigDeeplinks(this.nav);
                        // 订阅重新登录事件
                        this.events.subscribe('user:reLogin', function () {
                            _this.isLogin = false;
                            //用于判断登录页面是否已经显示 
                            _this.openModal(_this.openLoginModal);
                        });
                        /** 主题变更事件 */
                        this.events.subscribe('setting:change-theme', function (isDark) {
                            _this.setThemeMode(isDark);
                        });
                        /**
                         * 登录成功后关闭所有modal
                         */
                        this.events.subscribe('closemodal:login-success', function () {
                            _this.closeAllModalPage();
                        });
                        /**获取键盘高度，并存在session里面 */
                        window.addEventListener('native.keyboardshow', function (e) {
                            _this.session.keyboardHeight = e.keyboardHeight;
                        });
                        // this.handleProvider.generate('events subscribe user:logined',-1,0)
                        this.events.subscribe('user:logined', function () {
                            if (_this.isLogin)
                                return;
                            _this.widgetProvider.getConfig();
                            _this.isLogin = true;
                            _this.events.publish('openWidget:logined'); //通知继续打开应用
                            // this.handleProvider.generate('user:logined',-1,this.session)
                            _this.configProvider.initDatabase();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        this.translate.addLangs(['en-US', 'zh-TW', 'zh-CN', 'vi-VN']);
        this.translate.setDefaultLang('en-US');
        if (this.session.language) {
            this.storageService.setItem("language", this.session.language);
            this.translate.use(this.session.language);
        }
        else {
            this.storageService.getItem("language").then(function (lang) {
                if (lang) {
                    _this.session.language = lang;
                }
                else {
                    _this.session.language = 'en-US';
                    var browserLang = _this.translate.getBrowserLang();
                    if (browserLang) {
                        if (_this.translate.getLangs().indexOf(browserLang) >= 0) {
                            _this.session.language = browserLang;
                        }
                        else if (browserLang === 'zh') {
                            var browserCultureLang = _this.translate.getBrowserCultureLang();
                            if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                                _this.session.language = 'zh-CN';
                            }
                            else {
                                _this.session.language = 'zh-TW';
                            }
                        }
                    }
                }
                _this.storageService.setItem("language", _this.session.language);
                _this.translate.use(_this.session.language);
            });
        }
    };
    /**
     *  进入导览之后设置状态栏颜色
     * @param value 是否为黑夜模式
     * @param isTutorial 是否进入导览
     */
    MyApp.prototype.setThemeMode = function (value) {
        this.session.isDarkMode = __WEBPACK_IMPORTED_MODULE_6__services_utility__["a" /* Utility */].boolean(value);
        this.nativeService.statusBarStyle(__WEBPACK_IMPORTED_MODULE_6__services_utility__["a" /* Utility */].boolean(value));
        var attr = document.createAttribute('class');
        attr.value = __WEBPACK_IMPORTED_MODULE_6__services_utility__["a" /* Utility */].getThemeName(__WEBPACK_IMPORTED_MODULE_6__services_utility__["a" /* Utility */].boolean(value));
        document.body.attributes.setNamedItem(attr);
        /** 安卓添加andorid-header到body，android-header 在theme/variables.scss 中定义 */
        if (this.nativeService.isAndroid()) {
            document.body.classList.add("android-header");
        }
    };
    //检测网络
    MyApp.prototype.assertNetwork = function () {
        var _this = this;
        if (!this.nativeService.isConnecting()) {
            this.translate.stream("APP_NETWORK_DISCONNECT").subscribe(function (text) {
                _this.nativeService.showToast(text);
            });
        }
    };
    // 加載用戶信息，如果用戶登錄過，則直接跳轉到首頁，否則進入歡迎頁面
    MyApp.prototype.initUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tokenObject, language, homedata, data, idshowloading, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.storageService.getItem('tokenObject')];
                    case 1:
                        tokenObject = _a.sent();
                        return [4 /*yield*/, this.storageService.getItem('language')];
                    case 2:
                        language = _a.sent();
                        return [4 /*yield*/, this.storageService.getItem('homedata')];
                    case 3:
                        homedata = _a.sent();
                        if (language)
                            this.session.language = language;
                        if (tokenObject) {
                            data = {
                                result: { userId: '', userToken: '', refreshToken: '' }
                            };
                            if (!tokenObject.userId || !tokenObject.refreshToken) {
                                this.openModal(this.openLoginModal);
                                return [2 /*return*/];
                            }
                            data.result.userId = tokenObject.userId;
                            data.result.userToken = tokenObject.userToken;
                            data.result.refreshToken = tokenObject.refreshToken;
                            idshowloading = false;
                            if (homedata)
                                idshowloading = true;
                            this.handleProvider.generate('initUserInfo', 0, data);
                            this.authProvider.loginSuccessHandle(data, idshowloading);
                        }
                        else {
                            this.openModal(this.openLoginModal);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        this.openModal(this.openLoginModal);
                        this.handleProvider.generate('initUserInfo', -1, err_1);
                        this.logger.log(JSON.stringify(err_1), 'this.storageService.getItem(\'tokenObject\')');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //处理安卓硬件返回按钮 
    MyApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        this.events.subscribe('backbutton:onclick', function () {
            _this._viewDismiss();
        });
        this.platform.registerBackButtonAction(function () {
            _this._viewDismiss();
        }, 1);
    };
    /**
     * 返回上一页
     */
    MyApp.prototype._viewDismiss = function () {
        var _this = this;
        var activePortal = this.ionicApp._modalPortal.getActive() || this.ionicApp._loadingPortal.getActive();
        if (activePortal) {
            var instance = activePortal.instance;
            if (instance.constructor.name == __WEBPACK_IMPORTED_MODULE_12__pages_pages__["b" /* LoginPage */] || instance.constructor.name == __WEBPACK_IMPORTED_MODULE_0__pages_my_set_password_set_password__["a" /* SetPasswordPage */]) {
                //当前页面为登录页面，退出
                return this.showExit();
            }
            else {
                var viewCtrl = instance.view || instance.viewCtrl;
                viewCtrl.dismiss();
                return;
            }
        }
        var overlay = this.app._appRoot._overlayPortal.getActive();
        var nav = this.app.getActiveNavs()[0];
        var currentId = nav.getActive().id;
        if (__WEBPACK_IMPORTED_MODULE_5__pages_pages__["q" /* workflow_tabs */].indexOf(currentId) > -1) {
            this.events.publish('back-to-home');
        }
        else if (currentId == __WEBPACK_IMPORTED_MODULE_12__pages_pages__["a" /* BrowserPage */]) {
            window.history.back();
            setTimeout(function () { _this.events.publish('back_registration'); }, 200);
        }
        else if (overlay && overlay.dismiss) {
            overlay.dismiss();
        }
        else if (nav.canGoBack()) {
            nav.pop();
        }
        else {
            return this.showExit();
        }
    };
    //双击退出提示框
    MyApp.prototype.showExit = function () {
        var _this = this;
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            this.nativeService.showToast("再按一次退出应用", 2000, "top");
            this.backButtonPressed = true;
            setTimeout(function () { return _this.backButtonPressed = false; }, 2000); //2秒内没有再次点击返回则将触发标志标记为false
        }
    };
    /**
     * 收到信息事件訂閱
     */
    MyApp.prototype.jPushOpenNotification = function () {
        var _this = this;
        // 当收到推送消息时（此时将消息存储）
        this.events.subscribe('iProud.receiveNotification', function (extras) {
            extras.widgetId = extras.widgetId || 0;
            var message = {
                id: extras.messageId,
                widgetId: extras.widgetId,
                widgetName: extras.widgetName,
                widgetIcon: extras.widgetIcon,
                title: extras.title,
                abstract: extras.abstract,
                formatType: extras.formatType,
                imageUrl: extras.imageUrl,
                redirectUrl: extras.redirectUrl,
                receiveTime: __WEBPACK_IMPORTED_MODULE_15_moment___default()().utc().format(),
                isRead: false,
                status: 'success',
                extra: {
                    groudId: extras.groudId,
                    senderId: extras.senderId,
                    senderName: extras.senderName,
                    senderAvator: extras.senderAvator,
                    fromType: extras.fromType,
                }
            };
            if ([__WEBPACK_IMPORTED_MODULE_5__pages_pages__["e" /* MessageListPage */], __WEBPACK_IMPORTED_MODULE_5__pages_pages__["d" /* MessageChatPage */]].indexOf(_this.getCurrentPageId()) > -1
                && (message.widgetId == _this.session.messageWidgetId || extras.senderId == _this.session.messageWidgetId)) {
                message.isRead = true;
            }
            _this.handleProvider.generate("component:iProud.receiveNotification", 0, extras);
            _this.messageProvider.addMessage(message);
            setTimeout(function () { _this.events.publish('jpush.notificationReceived', message); }, 100);
        });
        // 收到自定义消息处理
        this.events.subscribe('jpush.receiveCustomizeMessage', function (extras) {
            if (extras && extras.event) {
                switch (extras.event) {
                    case 'version-upgrade':
                        _this.configProvider.init();
                        break;
                    case 'lock-user':
                        _this.events.publish('user-isActive:false');
                        break;
                    case 'execute-javascript':
                        break;
                    default:
                }
            }
        });
        // 当点击极光推送消息跳转到指定页面
        this.events.subscribe('iProud.openNotification', function (content) {
            _this.handleProvider.generate('component:openNotification', 0, content);
            _this.selectdOnMessage();
            setTimeout(function () {
                _this.events.publish('iProud.receiveNotification', content);
            }, 100);
        });
    };
    MyApp.prototype.selectdOnMessage = function () {
        var _this = this;
        try {
            var tabs_1 = this.nav.getActiveChildNav();
            var tab = tabs_1.getSelected();
            var activeVC = tab.getActive();
            if (activeVC.component == __WEBPACK_IMPORTED_MODULE_12__pages_pages__["g" /* Tab2Root */]) {
                return;
            }
            var activeNav = activeVC.getNav();
            activeNav.popToRoot({}).then(function () {
                tabs_1.select(1); // 选中第二个tab 
            });
        }
        catch (e) {
            if (this.selectOnMessageCount < 3) {
                setTimeout(function () {
                    _this.selectdOnMessage();
                }, 1000);
            }
            this.selectOnMessageCount++;
        }
    };
    // 取得设备端全球化设置，日期格式，时区等
    MyApp.prototype.initGlobalization = function () {
        var _this = this;
        this.globalization.getDatePattern({ formatLength: 'short', selector: 'date' }).then(function (result) {
            _this.session.shortDatePattern = result.pattern,
                _this.session.timezone = result.timezone,
                _this.session.utcOffset = result.utc_offset,
                _this.session.dstOffset = result.dst_offset;
        });
        this.globalization.getDatePattern({ formatLength: 'full', selector: 'date' }).then(function (result) {
            _this.session.longDatePattern = result.pattern;
        });
        // 当收到推送消息时（此时将消息存储）
        this.events.subscribe('user:logined', function () {
            _this.count = 0; //登录成功后清空重新登录次数
            _this.isShowLoginPage = false;
            //更新用户全球化设置
            var setting = new Array();
            if (_this.session.language != null) {
                setting.push({ "name": "Lang", "value": _this.session.language });
            }
            if (_this.session.shortDatePattern != null) {
                setting.push({ "name": "ShortDatePattern", "value": _this.session.shortDatePattern });
            }
            if (_this.session.shortDatePattern != null) {
                setting.push({ "name": "LongDatePattern", "value": _this.session.longDatePattern });
            }
            if (_this.session.shortDatePattern != null) {
                setting.push({ "name": "Timezone", "value": _this.session.timezone });
            }
            if (_this.session.shortDatePattern != null) {
                setting.push({ "name": "UtcOffset", "value": _this.session.utcOffset });
            }
            if (_this.session.shortDatePattern != null) {
                setting.push({ "name": "DstOffset", "value": _this.session.dstOffset });
            }
            if (_this.session.userId != null) {
                setting.push({ "name": "userAgent", "value": navigator.userAgent });
                setting.push({ "name": "appVersion", "value": _this.configProvider.currentVersionNo });
                setting.push({ "name": "appTheme", "value": __WEBPACK_IMPORTED_MODULE_6__services_utility__["a" /* Utility */].getThemeName(_this.session.isDarkMode) });
                if (_this.device && _this.device.platform) {
                    setting.push({ "name": "isVirtual", "value": _this.device.isVirtual });
                    setting.push({ "name": "manufacturer", "value": _this.device.manufacturer });
                    setting.push({ "name": "platform", "value": _this.device.platform });
                    setting.push({ "name": "model", "value": _this.device.model });
                    setting.push({ "name": "serial", "value": _this.device.serial });
                    setting.push({ "name": "uuid", "value": _this.device.uuid });
                    setting.push({ "name": "osversion", "value": _this.device.version });
                }
            }
            //先从服务器获取设置进行对比，值不同时在保存，减少API调用
            _this.userProvider.getPrivateSetting().subscribe(function (res) {
                var serverSetting = {};
                if (!res['result'])
                    return;
                for (var _i = 0, _a = res['result']; _i < _a.length; _i++) {
                    var item = _a[_i];
                    serverSetting[item.name.toUpperCase()] = item.value;
                }
                //服务器设置中，已设置ReceiveMsgFromWF的值并且不为false，默认保存为ReceiveMsgFromWF为 true
                if (serverSetting['ReceiveMsgFromWF'.toUpperCase()] !== 'false' && serverSetting['ReceiveMsgFromWF'.toUpperCase()] !== false) {
                    setting.push({ "name": "ReceiveMsgFromWF", "value": true });
                }
                _this.session.setting = serverSetting;
                var saveSetting = new Array();
                for (var _b = 0, setting_1 = setting; _b < setting_1.length; _b++) {
                    var item = setting_1[_b];
                    if (serverSetting[item.name.toUpperCase()] != item.value) {
                        saveSetting.push(item);
                    }
                }
                if (saveSetting.length > 0) {
                    setTimeout(function () {
                        _this.userProvider.privateSetting(saveSetting);
                    }, 200);
                }
            }, function (err) {
                _this.userProvider.privateSetting(setting);
            });
            //登录后再获取地理位置，避免在token无效的情况下保存失败。
            _this.initGeolocation();
        });
    };
    /**获取用户坐标 */
    MyApp.prototype.initGeolocation = function () {
        var _this = this;
        this.nativeService.getCurrentPosition().subscribe(function (location) {
            _this.userProvider.saveGeolocation(location);
        }, function (err) {
            _this.logger.log(JSON.stringify(err), 'this.nativeService.getCurrentPosition()');
        });
    };
    /**浏览界面返回按钮处理 */
    MyApp.prototype.initBrowserBackButton = function () {
        var _this = this;
        this.events.subscribe('back_registration', function () {
            //接收延时的通知事件，判断是否在browser页面，若不是则手动返回上一页
            if (_this.location.path().split('/').pop() != 'browser') {
                _this.app.getActiveNavs()[0].pop();
            }
        });
    };
    /**切换版本 */
    MyApp.prototype.initProductionListener = function () {
        var _this = this;
        this.events.subscribe('release-version-invalid', function () {
            if (!_this.serverProvider.isDebug) {
                var confirm_1 = _this.alertCtrl.create({
                    title: _this.translate.instant('VERSION_EXCHANGE_TIPS'),
                    message: _this.translate.instant('VERSION_EXCHANGE_MESSAGE'),
                    buttons: [
                        {
                            text: _this.translate.instant('APP_COMMON_CANCEL'),
                            handler: function () {
                            }
                        },
                        {
                            text: _this.translate.instant('APP_COMMON_CONFIRM'),
                            handler: function () {
                                _this.serverProvider.isDebug = true;
                                _this.storageService.setItem("isdebug", true);
                                _this.setting.setValue("optionDebug", true);
                                _this.isLoadInit = false;
                                _this.init();
                            }
                        }
                    ]
                });
                confirm_1.present();
            }
        });
    };
    /**用户是否被禁用 */
    MyApp.prototype.initListeningUserIsActive = function () {
        var _this = this;
        this.events.subscribe('user-isActive:false', function () {
            var alert = _this.alertCtrl.create({
                title: _this.translate.instant('ACCOUNT_LOCKED'),
                buttons: [{
                        text: _this.translate.instant('APP_COMMON_CONFIRM'),
                        handler: function () {
                            _this.openLoginModal();
                        }
                    }]
            });
            alert.present();
        });
    };
    /**检测是否有版本有更新 */
    MyApp.prototype.initVersionListener = function () {
        var _this = this;
        /** 获取到全局设置，或接收到有更新提示 */
        this.events.subscribe('version:upgrade-available', function () {
            if (_this.configProvider.canUpgrade && _this.session.globalSetting) {
                _this.openModal(_this.openUpgradePageModal);
            }
        });
        /**忽略更新后重新初始化 */
        this.events.subscribe('upgrade:re-init', function () {
            if (!_this.isShowLoginPage && _this.session.userId) {
                _this.configProvider.isShowUpgraderPage = false;
                _this.count = 0;
                _this.init();
            }
        });
    };
    /**打开登录界面 */
    MyApp.prototype.openLoginModal = function (_that) {
        _that = _that || this;
        var isShowLoginModal = false;
        if (_that.getActivityModalId() == __WEBPACK_IMPORTED_MODULE_12__pages_pages__["b" /* LoginPage */] || _that.getActivityModalId() == __WEBPACK_IMPORTED_MODULE_12__pages_pages__["l" /* UpgradePage */]) {
            isShowLoginModal = true;
        }
        if (!isShowLoginModal && !_that.isShowLoginPage) {
            _that.isShowLoginPage = true;
            _that.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__pages_pages__["b" /* LoginPage */]).present();
        }
    };
    /**打开升级界面 */
    MyApp.prototype.openUpgradePageModal = function (_that) {
        _that = _that || this;
        _that.configProvider.isShowUpgraderPage = true;
        var isUpgradeShow = false;
        if (_that.getActivityModalId() == __WEBPACK_IMPORTED_MODULE_12__pages_pages__["l" /* UpgradePage */]) {
            isUpgradeShow = true;
        }
        if (!isUpgradeShow) {
            _that.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__pages_pages__["l" /* UpgradePage */], null, { showBackdrop: false, enableBackdropDismiss: false }).present();
        }
    };
    MyApp.prototype.openModal = function (func) {
        var _this = this;
        if (!this.configProvider.isShowUpgraderPage) {
            setTimeout(function () {
                func(_this);
            }, 200 * this.count);
            this.count++;
        }
    };
    /**
     * 获取当前活动页面
     */
    MyApp.prototype.getCurrentPageId = function () {
        try {
            var nav = this.app.getActiveNavs()[0];
            var currentId = nav.getActive().id;
            return currentId;
        }
        catch (e) {
            this.handleProvider.generateError('getCurrentPageId', e);
            return '';
        }
    };
    /**
     * 获取当前活动modal
     */
    MyApp.prototype.getActivityModalId = function () {
        var activePortal = this.ionicApp._modalPortal.getActive();
        if (activePortal) {
            var instance = activePortal.instance;
            // this.nativeService.showToast(instance.constructor.name)
            return instance.constructor.name;
        }
        return "";
    };
    MyApp.prototype.initGlobalSetting = function () {
        var _this = this;
        this.configProvider.getGlobalSettings().subscribe(function (res) {
            _this.session.globalSetting = res.result;
            _this.events.publish('version:upgrade-available');
        });
        this.configProvider.getLangContext().subscribe(function (res) {
        });
    };
    MyApp.prototype.initTutorial = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     * 初始化native相关
     */
    MyApp.prototype.initNative = function () {
        var _this = this;
        // 设置userAgent, 加上员宝标识 app/iproud，供网页判断运行环境是否在员宝内
        this.nativeService.getUserAgent().subscribe(function (userAgent) {
            _this.handleProvider.generateInfo("getUserAgent", userAgent);
            if (userAgent && userAgent.indexOf('app/iproud') == -1) {
                _this.nativeService.setUserAgent(userAgent + ' app/iproud').subscribe(function (res) {
                    _this.handleProvider.generateInfo("setUserAgent", res);
                }, function (error) { return _this.handleProvider.generateError("setUserAgent error", error); });
            }
        }, function (err) {
            _this.handleProvider.generateError("getUserAgent error", err);
        });
        setTimeout(function () {
            _this.nativeService.splashScreenHide();
            setTimeout(function () {
                _this.events.publish('homemain:resize-content');
            }, 100);
        }, 500);
        this.nativeService.hideKeyboardAccessoryBar(false);
        //網絡連接時
        this.nativeService.networkOnConnect().subscribe(function (value) {
            _this.nativeService.showLoading();
            setTimeout(function () {
                _this.nativeService.hideLoading();
                if (_this.getCurrentPageId() == __WEBPACK_IMPORTED_MODULE_12__pages_pages__["f" /* Tab1Root */]) {
                    _this.init();
                }
            }, 1000);
        }, function (error) {
            _this.logger.log(JSON.stringify(error), 'this.nativeService.networkOnConnect()');
        });
        //斷開網絡時
        this.nativeService.networkOnDisconnect().subscribe(function (value) {
            _this.nativeService.showToast(_this.translate.instant('APP_NETWORK_ONDISCONNECTED'));
        }, function (error) {
            _this.logger.log(JSON.stringify(error), 'this.nativeService.networkOnDisconnect()');
        });
    };
    /**
     * 关闭所有modal
     */
    MyApp.prototype.closeAllModalPage = function () {
        var views = this.ionicApp._modalPortal._views;
        if (views && views.length > 0) {
            for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
                var item = views_1[_i];
                item.dismiss();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["o" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["o" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
            template: "\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["h" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["e" /* Config */],
            __WEBPACK_IMPORTED_MODULE_14__services_services__["e" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_14__services_services__["g" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_14__services_services__["c" /* JPushService */],
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["i" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["m" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_14__services_services__["f" /* Session */],
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["d" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_globalization__["a" /* Globalization */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["k" /* ServerProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["l" /* SettingProvider */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["e" /* Location */],
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["c" /* CacheProvider */],
            __WEBPACK_IMPORTED_MODULE_14__services_services__["d" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_3__providers_handle_handle__["a" /* HandleProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_sqlite_provider__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_13__providers_providers__["n" /* WidgetProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[607]);
//# sourceMappingURL=main.js.map