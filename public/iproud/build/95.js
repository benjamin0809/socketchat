webpackJsonp([95],{

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfViewerPageModule", function() { return PdfViewerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf_viewer__ = __webpack_require__(1208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PdfViewerPageModule = (function () {
    function PdfViewerPageModule() {
    }
    PdfViewerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pdf_viewer__["a" /* PdfViewerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pdf_viewer__["a" /* PdfViewerPage */]),
            ],
        })
    ], PdfViewerPageModule);
    return PdfViewerPageModule;
}());

//# sourceMappingURL=pdf-viewer.module.js.map

/***/ }),

/***/ 1208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfViewerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_workflow_provider__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the PdfViewerPage page.
 * 1. 若参数中含有 pid ，则调用 workflow api GetProcessPDF，获取 pdf 字符在渲染页面
 * 2. 若不是第一种情况，判断参数中是否含有 base64str，若有直接渲染页面
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PdfViewerPage = (function () {
    function PdfViewerPage(navCtrl, navParams, wfprovider, element, params) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wfprovider = wfprovider;
        this.element = element;
        this.params = params;
        this.pdfDoc = null;
        this.scale = 1; // 缩放倍数
        this.currentWidth = 0; // canvas宽度
        this.saturation = 100;
        this.title = ""; // PDF标题
        this.loading = false; // 是否加载中
    }
    PdfViewerPage.prototype.initPDFJSConfig = function () {
        PDFJS.cMapUrl = "cmaps/";
        PDFJS.cMapPacked = true;
    };
    PdfViewerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.title = this.params.data.title || 'PDF';
        this.initPDFJSConfig();
        if (this.params.data.pid) {
            this.loading = true;
            this.wfprovider
                .GetProcessPDF(this.params.data.pid)
                .subscribe(function (res) {
                var data = res.result.base64Str;
                _this.getDocAndRenderPage(data);
            }, function (err) { }, function () {
                _this.loading = false;
            });
        }
        else if (this.params.data.base64str) {
            this.getDocAndRenderPage(this.params.data.base64str);
        }
        else {
            throw new Error('undefined params');
        }
    };
    PdfViewerPage.prototype.rangeChange = function () {
        if (this.loading) {
            return;
        }
        this.scale = this.saturation * 0.01;
        this.scaleContainer(this.scale);
    };
    /**
     *
     * @param data
     */
    PdfViewerPage.prototype.getDocAndRenderPage = function (data) {
        var _this = this;
        data = data && data.replace("data:application/pdf;base64,", "");
        var array = this.converData(data);
        PDFJS.getDocument(array).then(function (pdf) {
            _this.pdfDoc = pdf;
            for (var i = 1; i <= _this.pdfDoc.numPages; i++) {
                _this.renderPage(i);
            }
            var box = document.querySelector("#canvas-container");
            var boxGesture = _this.setGesture(box); //得到一个对象
            boxGesture.gesturestart = function () {
                //双指开始
            };
            boxGesture.gesturemove = function (e) {
                //双指移动
                _this.scale = e.scale;
                // box.style.transform = `scale(${e.scale})`  ;//改变目标元素的大小和角度
                // box.style.width = this.getTransformString(e.scale);
            };
            boxGesture.gestureend = function () {
                //双指结束
                _this.currentWidth = box.clientWidth;
            };
        });
    };
    PdfViewerPage.prototype.getTransformString = function (scale) {
        var width = this.currentWidth || window.screen.width;
        width = scale * width;
        width = Math.min(3 * window.screen.width, width);
        width = Math.max(window.screen.width, width);
        return width + "px";
    };
    /**
     * 创建canvas页面
     * @param num 页码
     */
    PdfViewerPage.prototype.createPage = function (num) {
        var canvas = document.createElement("canvas");
        var div = document.createElement("div");
        div.textContent = num;
        div.setAttribute("class", "page");
        var canvasContainer = this.element.nativeElement.querySelector("#canvas-container");
        canvasContainer.appendChild(canvas);
        canvasContainer.appendChild(div);
        return canvas;
    };
    /**
     * 将 Base64 转成 Uint8Array
     * @param data base64
     */
    PdfViewerPage.prototype.converData = function (data) {
        data = data.replace(/[\n\r]/g, "");
        var raw = window.atob(data);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));
        for (var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    };
    /**
     * 渲染 PDF 页面（单页）
     * @param num
     */
    PdfViewerPage.prototype.renderPage = function (num) {
        var _this = this;
        this.pdfDoc.getPage(num).then(function (page) {
            var viewport = page.getViewport(2.0);
            var canvas = _this.createPage(num);
            var ctx = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            page.render({
                canvasContext: ctx,
                viewport: viewport
            });
        });
    };
    PdfViewerPage.prototype.ionViewWillLeave = function () {
        // this.restoreScale()
    };
    PdfViewerPage.prototype.clickScale = function () {
        var box = document.querySelector("#canvas-container");
        var str = "scale(1.5) ";
        box.style.width = 1.5 * window.screen.width + "px";
    };
    PdfViewerPage.prototype.scaleContainer = function (scale) {
        var box = document.querySelector("#canvas-container");
        box.style.width = this.getTransformString(scale);
    };
    PdfViewerPage.prototype.increase = function () {
        if (this.loading) {
            return;
        }
        if (this.saturation > 0) {
            this.saturation += 40;
            this.saturation = Math.min(300, this.saturation);
        }
        this.scale = this.saturation * 0.01;
        this.scaleContainer(this.scale);
    };
    PdfViewerPage.prototype.decrease = function () {
        if (this.loading) {
            return;
        }
        if (this.saturation > 0) {
            this.saturation -= 40;
            this.saturation = Math.max(100, this.saturation);
        }
        this.scale = this.saturation * 0.01;
        this.scaleContainer(this.scale);
    };
    PdfViewerPage.prototype.setGesture = function (el) {
        var _this = this;
        var obj = {}; //定义一个对象
        var istouch = false;
        var start = [];
        el.addEventListener("touchstart", function (e) {
            if (e.touches.length >= 2) {
                //判断是否有两个点在屏幕上
                istouch = true;
                start = e.touches; //得到第一组两个点
                obj["gesturestart"] && obj["gesturestart"].call(el); //执行gesturestart方法
            }
        }, false);
        document.addEventListener("touchmove", function (e) {
            e.preventDefault();
            if (e.touches.length >= 2 && istouch) {
                var now = e.touches; //得到第二组两个点
                var scale = _this.getDistance(now[0], now[1]) /
                    _this.getDistance(start[0], start[1]); //得到缩放比例，getDistance是勾股定理的一个方法
                var rotation = _this.getAngle(now[0], now[1]) - _this.getAngle(start[0], start[1]); //得到旋转角度，getAngle是得到夹角的一个方法
                e.scale = scale.toFixed(2);
                e.rotation = rotation.toFixed(2);
                obj["gesturemove"] && obj["gesturemove"].call(el, e); //执行gesturemove方法
            }
        }, false);
        document.addEventListener("touchend", function (e) {
            if (istouch) {
                istouch = false;
                obj["gestureend"] && obj["gestureend"].call(el); //执行gestureend方法
            }
        }, false);
        return obj;
    };
    PdfViewerPage.prototype.getDistance = function (p1, p2) {
        var x = p2.pageX - p1.pageX, y = p2.pageY - p1.pageY;
        return Math.sqrt(x * x + y * y);
    };
    PdfViewerPage.prototype.getAngle = function (p1, p2) {
        var x = p1.pageX - p2.pageX, y = p1.pageY - p2.pageY;
        return (Math.atan2(y, x) * 180) / Math.PI;
    };
    PdfViewerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-pdf-viewer",template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\common\pdf-viewer\pdf-viewer.html"*/'<!--\n\n  Generated template for the PdfViewerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar>\n\n    <ion-range min="100" max="300" [(ngModel)]="saturation" (ngModelChange)="rangeChange()">\n\n      <ion-label range-left><ion-icon name="remove-outline" (click)="decrease()"></ion-icon></ion-label>\n\n      <ion-label range-right><ion-icon name="add-outline" (click)="increase()"></ion-icon></ion-label>\n\n    </ion-range>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content > \n\n  <div id="container">\n\n    <div text-center *ngIf="loading" padding>\n\n      <ion-spinner name="ios"></ion-spinner>\n\n    </div> \n\n    <div id="canvas-container" >\n\n    \n\n    </div>\n\n  </div>\n\n\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\common\pdf-viewer\pdf-viewer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_workflow_provider__["a" /* WorkflowProvider */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavParams */]])
    ], PdfViewerPage);
    return PdfViewerPage;
}());

//# sourceMappingURL=pdf-viewer.js.map

/***/ })

});
//# sourceMappingURL=95.js.map