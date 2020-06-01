webpackJsonp([102],{

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video__ = __webpack_require__(1202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VideoPageModule = (function () {
    function VideoPageModule() {
    }
    VideoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */]),
            ],
        })
    ], VideoPageModule);
    return VideoPageModule;
}());

//# sourceMappingURL=video.module.js.map

/***/ }),

/***/ 1202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_http_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoPage = (function () {
    function VideoPage(navCtrl, navParams, nativeService, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.http = http;
        this.accessToken = '';
        this.httpRes = '';
        this.camera = '';
        this.facedetect = '';
        this.base64 = '';
    }
    VideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
    };
    VideoPage.prototype.getToken = function () {
        var _this = this;
        var getTokenUrl = 'https://aip.baidubce.com/oauth/2.0/token';
        var body = {
            grant_type: 'client_credentials',
            client_id: 'b31wn9iriKgKjb6OLLqZzYrh',
            client_secret: 'yLVpKUaK5v4h4LaIufOH8XuxGeytDAlo'
        };
        var url = getTokenUrl + "?";
        Object.keys(body).forEach(function (key) {
            url += (key + "=" + body[key] + '&');
        });
        this.http.post(url, false, body).subscribe(function (res) {
            // this.httpRes = JSON.stringify(res)
            if (res.errcode == 0) {
                _this.accessToken = res.result.access_token;
            }
        }, function (err) {
            _this.httpRes = JSON.stringify(err);
        });
    };
    VideoPage.prototype.gofacedetect = function () {
        var _this = this;
        var url = "https://aip.baidubce.com/rest/2.0/face/v3/detect?access_token=" + this.accessToken;
        var body = {
            "image": "",
            "image_type": "BASE64",
            "liveness_control": "NORMAL"
        };
        body.image = this.base64;
        this.http.post(url, false, body).subscribe(function (res) {
            _this.facedetect = JSON.stringify(res, null, 2);
        }, function (err) {
            _this.facedetect = JSON.stringify(err, null, 2);
        });
    };
    VideoPage.prototype.gofacedetectByUrl = function () {
        var _this = this;
        var url = "https://aip.baidubce.com/rest/2.0/face/v3/detect?access_token=" + this.accessToken;
        var body = {
            "image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=319355629,491062307&fm=26&gp=0.jpg",
            "image_type": "URL",
            "face_field": "age,beauty,expression,face_shape,gender,glasses,landmark,race,quality,face_type",
            "liveness_control": "NORMAL"
        };
        this.http.post(url, false, body).subscribe(function (res) {
            _this.facedetect = JSON.stringify(res, null, 2);
        }, function (err) {
            _this.facedetect = JSON.stringify(err, null, 2);
        });
    };
    VideoPage.prototype.livenessCheckBase64 = function () {
        var _this = this;
        var url = "https://aip.baidubce.com/rest/2.0/face/v3/faceverify?access_token=" + this.accessToken;
        var body = {
            "image": "",
            "image_type": "BASE64",
            "face_field": "age,beauty,expression,face_shape,gender,glasses,landmark,race,quality,face_type"
        };
        body.image = this.base64;
        this.http.post(url, false, body).subscribe(function (res) {
            _this.facedetect = JSON.stringify(res, null, 2);
        }, function (err) {
            _this.facedetect = JSON.stringify(err, null, 2);
        });
    };
    VideoPage.prototype.livenessCheck = function () {
        var _this = this;
        var url = "https://aip.baidubce.com/rest/2.0/face/v3/faceverify?access_token=" + this.accessToken;
        var body = {
            "image": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=319355629,491062307&fm=26&gp=0.jpg",
            "image_type": "URL"
        };
        this.http.post(url, false, body).subscribe(function (res) {
            _this.facedetect = JSON.stringify(res, null, 2);
        }, function (err) {
            _this.facedetect = JSON.stringify(err, null, 2);
        });
    };
    VideoPage.prototype.getPic = function () {
        var _this = this;
        this.nativeService.getPictureByCamera().subscribe(function (res) {
            _this.base64 = res;
            alert(_this.base64.indexOf('base64'));
        }, function (err) {
            alert('哦豁' + JSON.stringify(err, null, 2));
        });
    };
    VideoPage.prototype.getVideo = function () {
        var _this = this;
        this.nativeService.getVideoCapture().subscribe(function (res) {
            _this.camera = JSON.stringify(res, null, 2);
        }, function (err) {
            _this.camera = JSON.stringify(err, null, 2);
        });
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-video',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\beta\video\video.html"*/'<!--\n\n  Generated template for the VideoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>video</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div>token: {{accessToken}}</div>\n\n  <div>httpRes: {{httpRes}}</div>\n\n  <div>camera: {{camera}}</div> \n\n  <div>facedetect: {{facedetect}}</div>  \n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar >\n\n     <button ion-button (click)="getToken()">getToken</button>\n\n     <button ion-button (click)="gofacedetect()">gofacedetect</button>\n\n     <button ion-button (click)="getPic()">getPic</button>\n\n     <button ion-button (click)="getVideo()">getVideo</button>\n\n     <button ion-button (click)="gofacedetectByUrl()">gofacedetectByUrl</button>\n\n     <button ion-button (click)="livenessCheck()">livenessCheck</button>\n\n     <button ion-button (click)="livenessCheckBase64()">livenessCheckBase64</button>\n\n     \n\n     \n\n     \n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\beta\video\video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_0__services_http_service__["a" /* HttpService */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ })

});
//# sourceMappingURL=102.js.map