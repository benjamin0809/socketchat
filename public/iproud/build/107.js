webpackJsonp([107],{

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechPageModule", function() { return SpeechPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speech__ = __webpack_require__(1197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpeechPageModule = (function () {
    function SpeechPageModule() {
    }
    SpeechPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__speech__["a" /* SpeechPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__speech__["a" /* SpeechPage */]),
            ],
        })
    ], SpeechPageModule);
    return SpeechPageModule;
}());

//# sourceMappingURL=speech.module.js.map

/***/ }),

/***/ 1197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(129);
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
 * Generated class for the SpeechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpeechPage = (function () {
    function SpeechPage(navCtrl, navParams, httpService, session, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.session = session;
        this.file = file;
        this.fileName = 'myfile';
        this.replace = false;
        this.len = 0;
        this.format = 'pcm';
        this.directorys = [{
                name: 'dataDirectory',
                path: this.file.dataDirectory
            }, {
                name: 'cacheDirectory',
                path: this.file.cacheDirectory
            }, {
                name: 'externalApplicationStorageDirectory',
                path: this.file.externalApplicationStorageDirectory
            }, {
                name: 'externalDataDirectory',
                path: this.file.externalDataDirectory
            }, {
                name: 'externalCacheDirectory',
                path: this.file.externalCacheDirectory
            }, {
                name: 'externalRootDirectory',
                path: this.file.externalRootDirectory
            }];
        this.directory = this.file.externalRootDirectory;
        this.formats = [{
                name: 'pcm'
            }, {
                name: 'wav'
            }, {
                name: 'amr'
            }];
    }
    SpeechPage.prototype.ionViewDidLoad = function () {
    };
    SpeechPage.prototype.getToken = function () {
        var _this = this;
        var grant_type = 'client_credentials';
        var client_id = 'mp1tCx8l9n3gaBfAZqcoOV5j';
        var client_secret = 'eoqmIbUX9Oht9uXmoeSZZnHLHRfeznc4';
        var url = "https://aip.baidubce.com/oauth/2.0/token?grant_type=" + grant_type + "&client_id=" + client_id + "&client_secret=" + client_secret;
        var seq = this.httpService.post(url, false, null, true).share();
        seq.subscribe(function (result) {
            // alert(JSON.stringify(result))
            if (result.errcode == 0) {
                _this.token = result.result.access_token;
            }
            else {
                alert('http error');
            }
        }, function (error) {
            alert(JSON.stringify(error));
        });
        return seq;
    };
    SpeechPage.prototype.goAnalysis = function () {
        var index = this.speech.indexOf('base64,');
        var prestr = this.speech.substring(0, index);
        this.speech = this.speech.replace(prestr + 'base64,', '');
        var body = {
            format: this.format,
            rate: "16000",
            channel: "1",
            token: this.token,
            cuid: "465551225465",
            len: this.len,
            speech: this.speech
        };
        alert("body : " + JSON.stringify(body));
        this.httpService.post('https://vop.baidu.com/server_api', false, body).subscribe(function (res) {
            alert(JSON.stringify(res));
            if (res.errcode == 0) {
            }
            else {
                alert('request error');
            }
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    SpeechPage.prototype.toBase64 = function () {
        alert(this.directory);
        var directory = this.directory;
        if (this.replace) {
            directory = this.directory.replace(/^file:\/\//, '');
        }
        var _this = this;
        this.file.resolveLocalFilesystemUrl(directory + this.fileName + "." + this.format).then(function (fileEnter) {
            fileEnter.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                    // alert(this.result);
                    _this.speech = this.result.toString();
                };
                reader.readAsDataURL(file);
                var reader2 = new FileReader();
                reader2.onloadend = function (e) {
                    // alert(this.result.toString().length);
                    _this.len = this.result.toString().length;
                };
                reader2.readAsBinaryString(file);
            });
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    SpeechPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-speech',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\beta\speech\speech.html"*/'<!--\n\n  Generated template for the SpeechPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header >\n\n\n\n  <ion-navbar>\n\n    <ion-title>speech</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content  >\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>\n\n          token : \n\n      </ion-label>\n\n\n\n      <ion-input type="text" [(ngModel)]="token">\n\n\n\n        </ion-input>\n\n    </ion-item>\n\n  \n\n \n\n      <ion-item>\n\n        <ion-label>\n\n            speech : \n\n        </ion-label>\n\n\n\n        <ion-input type="text" [(ngModel)]="speech">\n\n\n\n          </ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label>\n\n              len :  \n\n          </ion-label>\n\n\n\n          <ion-input type="number" [(ngModel)]="len">\n\n\n\n          </ion-input>\n\n        </ion-item>\n\n      \n\n\n\n  <ion-item>\n\n      <ion-label stacked>fileName</ion-label>\n\n      <ion-input type="text" [(ngModel)]="fileName"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n        <ion-label>format</ion-label>\n\n        <ion-select [(ngModel)]="format">\n\n          <ion-option *ngFor="let item of formats" [value]="item.name">{{item.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>replace</ion-label>\n\n      <ion-toggle [(ngModel)]="replace"></ion-toggle>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>directory</ion-label>\n\n      <ion-select [(ngModel)]="directory">\n\n        <ion-option *ngFor="let item of directorys" [value]="item.path">{{item.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n    <button ion-button block (click)="getToken()">getToken</button>\n\n    <button ion-button block (click)="toBase64()">toBase64</button>\n\n    <button ion-button block (click)="goAnalysis()">goAnalysis</button>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\beta\speech\speech.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_0__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */]])
    ], SpeechPage);
    return SpeechPage;
}());

//# sourceMappingURL=speech.js.map

/***/ })

});
//# sourceMappingURL=107.js.map