webpackJsonp([106],{

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqliteTestPageModule", function() { return SqliteTestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sqlite_test__ = __webpack_require__(1198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SqliteTestPageModule = (function () {
    function SqliteTestPageModule() {
    }
    SqliteTestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sqlite_test__["a" /* SqliteTestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sqlite_test__["a" /* SqliteTestPage */]),
            ],
        })
    ], SqliteTestPageModule);
    return SqliteTestPageModule;
}());

//# sourceMappingURL=sqlite-test.module.js.map

/***/ }),

/***/ 1198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqliteTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_storage_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sqlite_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_provider__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
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






/**
 * Generated class for the SqliteTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SqliteTestPage = (function () {
    function SqliteTestPage(navCtrl, navParams, sqlite, sqliteService, storageService, alertCtrl, sqlprovider, session) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.sqliteService = sqliteService;
        this.storageService = storageService;
        this.alertCtrl = alertCtrl;
        this.sqlprovider = sqlprovider;
        this.session = session;
        this.input = "select * from ...";
        this.tables = this.sqlprovider.getTables();
        this.userId = this.session.userId;
    }
    SqliteTestPage.prototype.removeUserToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var tokenObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.getItem('tokenObject')];
                    case 1:
                        tokenObject = _a.sent();
                        tokenObject.userToken = '';
                        this.storageService.setItem('tokenObject', tokenObject);
                        setTimeout(function () {
                            _this.storageService.getItem('tokenObject').then(function (res) {
                                _this.result = JSON.stringify(res, null, 2);
                            }).catch(function (err) {
                                _this.result = JSON.stringify(err, null, 2);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SqliteTestPage.prototype.dropTable = function () {
        this.sqlite.dropTable();
    };
    SqliteTestPage.prototype.clearTableData = function () {
        this.sqlite.clearALl();
    };
    SqliteTestPage.prototype.initDB = function () {
        var _this = this;
        this.sqlite.init(this.userId).subscribe(function (res) {
            _this.result = JSON.stringify(res, null, 2);
        }, function (err) {
            _this.result = JSON.stringify(err, null, 2);
        });
    };
    SqliteTestPage.prototype.storageKeysManagement = function () {
        this.navCtrl.push('StorageKeyManagmentPage');
    };
    SqliteTestPage.prototype.executeSql = function () {
        var _this = this;
        this.sqliteService.executeSql(this.input).then(function (res) {
            for (var _i = 0, _a = res.res.data; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item) {
                    item.Extra = JSON.parse(item.Extra);
                }
            }
            _this.result = _this.syntaxHighlight(res);
        }).catch(function (error) {
            _this.result = JSON.stringify({ code: error.err.code, message: error.err.message });
        });
    };
    SqliteTestPage.prototype.showClearTable = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Which table would you clear?');
        for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
            var item = _a[_i];
            alert.addInput({
                type: 'checkbox',
                label: item.name,
                value: item.value,
                checked: item.checked
            });
        }
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    var sql = "delete from " + item;
                    _this.sqliteService.executeSql(sql);
                }
            }
        });
        alert.present();
    };
    SqliteTestPage.prototype.queryTableData = function () {
    };
    SqliteTestPage.prototype.showDropTable = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Which table would you drop?');
        for (var _i = 0, _a = this.tables; _i < _a.length; _i++) {
            var item = _a[_i];
            alert.addInput({
                type: 'checkbox',
                label: item.name,
                value: item.value,
                checked: item.checked
            });
        }
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    var sql = "drop table " + item;
                    _this.sqliteService.executeSql(sql);
                }
            }
        });
        alert.present();
    };
    SqliteTestPage.prototype.syntaxHighlight = function (json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                }
                else {
                    cls = 'string';
                }
            }
            else if (/true|false/.test(match)) {
                cls = 'boolean';
            }
            else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    };
    SqliteTestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-sqlite-test',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\beta\sqlite-test\sqlite-test.html"*/'<!--\n\n  Generated template for the SqliteTestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>sqlite-test</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content  >\n\n  <ion-list>\n\n    <ion-item>\n\n       <ion-label>UserId:{{userId}}</ion-label>\n\n    </ion-item>\n\n    <button ion-item (click)="showDropTable()"   > \n\n      <h2>DropTable</h2> \n\n    </button>\n\n    <button ion-item (click)="showClearTable()"   > \n\n      <h2>ClearTable</h2> \n\n    </button> \n\n    <!-- <button ion-item (click)="queryTableData()"   > \n\n      <h2>queryTableData</h2> \n\n    </button>  -->\n\n    <button ion-item (click)="initDB()"   > \n\n        <h2>initDB</h2> \n\n      </button>  \n\n    <button ion-item (click)="storageKeysManagement()"   > \n\n      <h2>storageKeysManagement</h2> \n\n    </button> \n\n    <button ion-item (click)="removeUserToken()"   > \n\n      <h2>removeUserToken</h2> \n\n    </button> \n\n     \n\n  </ion-list>\n\n  \n\n  <div padding>\n\n      <ion-input type="text" placeholder="sql" [(ngModel)]="input"></ion-input>\n\n  </div>\n\n   \n\n  <pre padding [innerHtml]="result"></pre>\n\n</ion-content>\n\n<ion-footer >\n\n  <ion-toolbar >\n\n    <button  ion-button outline round (click)="executeSql()"> Execute SQL</button> \n\n  </ion-toolbar> \n\n</ion-footer>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\beta\sqlite-test\sqlite-test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_provider__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_2__services_sqlite_service__["a" /* SqliteService */],
            __WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_provider__["a" /* SqliteProvider */],
            __WEBPACK_IMPORTED_MODULE_0__services_session__["a" /* Session */]])
    ], SqliteTestPage);
    return SqliteTestPage;
}());

//# sourceMappingURL=sqlite-test.js.map

/***/ })

});
//# sourceMappingURL=106.js.map