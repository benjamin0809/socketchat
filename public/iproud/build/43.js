webpackJsonp([43],{

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in__ = __webpack_require__(1188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignInPageModule = (function () {
    function SignInPageModule() {
    }
    SignInPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sign_in__["a" /* SignInPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__sign_in__["a" /* SignInPage */]),
            ],
        })
    ], SignInPageModule);
    return SignInPageModule;
}());

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 1151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievePage; });
var AchievePage = (function () {
    function AchievePage(session, nativeService) {
        this.session = session;
        this.nativeService = nativeService;
    }
    AchievePage.prototype.ionViewWillEnter = function () {
        if (!this.session.isDarkMode)
            this.nativeService.setStyleLightContent();
    };
    AchievePage.prototype.ionViewWillLeave = function () {
        this.nativeService.statusBarStyle(this.session.isDarkMode);
    };
    return AchievePage;
}());

//# sourceMappingURL=achieve-page.js.map

/***/ }),

/***/ 1188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utility__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_social_social__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__achieve_page__ = __webpack_require__(1151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_native_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_node_calendar__ = __webpack_require__(1189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_node_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_node_calendar__);
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
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInPage = (function (_super) {
    __extends(SignInPage, _super);
    function SignInPage(navCtrl, navParams, modal, nativeService, session, socialProvider, translate, events) {
        var _this = _super.call(this, session, nativeService) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modal = modal;
        _this.nativeService = nativeService;
        _this.session = session;
        _this.socialProvider = socialProvider;
        _this.translate = translate;
        _this.events = events;
        _this.isSigned = false;
        _this.weeksDisplay = [];
        _this.monthDays = [];
        _this.currentYearMonth = "";
        _this.CheckInRecordList = [];
        _this.totalCheckedCount = 0;
        _this.isIos = false;
        _this.isDataLoading = false;
        var Keys = ['SOCIAL_CALENDAR_SUNDAY',
            'SOCIAL_CALENDAR_MONDAY',
            'SOCIAL_CALENDAR_TUESDAY',
            'SOCIAL_CALENDAR_WEDNESDAY',
            'SOCIAL_CALENDAR_THURSDAY',
            'SOCIAL_CALENDAR_FRIDAY',
            'SOCIAL_CALENDAR_SATURDAY'];
        Keys.forEach(function (key) {
            _this.weeksDisplay.push(_this.translate.instant(key));
        });
        _this.currentYearMonth = __WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].dateFormat(new Date());
        _this.monthDays = _this.createCalendar(_this.currentYearMonth);
        _this.getCheckInRecord();
        _this.isIos = _this.nativeService.isIos();
        return _this;
    }
    SignInPage.prototype.chooseDate = function (currentYearMonth) {
        var monthyear = new Date(currentYearMonth.substr(0, 7));
        this.monthDays = this.createCalendar(monthyear);
        this.getCheckInRecord(monthyear.getFullYear().toString(), (monthyear.getMonth() + 1).toString());
    };
    SignInPage.prototype._getLastYearAndMonth = function (originDate) {
        var result = { year: 0, month: 0 };
        var date = new Date(originDate);
        if (date.getMonth() == 0) {
            result.year = date.getFullYear() - 1;
            result.month = 12;
        }
        else {
            result.year = date.getFullYear();
            result.month = date.getMonth();
        }
        return new Date(result.year + "-" + (result.month >= 10 ? result.month : '0' + result.month.toString()) + "-01");
    };
    SignInPage.prototype._getNextYearAndMonth = function (originDate) {
        var result = { year: 0, month: 0 };
        var date = new Date(originDate);
        if (date.getMonth() == 11) {
            result.year = date.getFullYear() + 1;
            result.month = 1;
        }
        else {
            result.year = date.getFullYear();
            result.month = date.getMonth() + 2;
        }
        return new Date(result.year + "-" + (result.month >= 10 ? result.month : '0' + result.month.toString()) + "-01");
    };
    SignInPage.prototype.createCalendar = function (currentYearMonth) {
        var currentMonthyear = new Date(currentYearMonth);
        var lastMonthyear = this._getLastYearAndMonth(currentMonthyear);
        var nextMonthyear = this._getNextYearAndMonth(currentMonthyear);
        var currentMonthDays = new __WEBPACK_IMPORTED_MODULE_8_node_calendar___default.a.Calendar(6).monthdayscalendar(currentMonthyear.getFullYear(), currentMonthyear.getMonth() + 1);
        var lastMonthDays = new __WEBPACK_IMPORTED_MODULE_8_node_calendar___default.a.Calendar(6).monthdayscalendar(lastMonthyear.getFullYear(), lastMonthyear.getMonth() + 1);
        var nextMonthDays = new __WEBPACK_IMPORTED_MODULE_8_node_calendar___default.a.Calendar(6).monthdayscalendar(nextMonthyear.getFullYear(), nextMonthyear.getMonth() + 1);
        var result = [];
        var i = 0;
        for (var _i = 0, currentMonthDays_1 = currentMonthDays; _i < currentMonthDays_1.length; _i++) {
            var weeks = currentMonthDays_1[_i];
            var week = [];
            var j = 0;
            for (var _a = 0, weeks_1 = weeks; _a < weeks_1.length; _a++) {
                var day = weeks_1[_a];
                var item = {
                    day: day,
                    isCurrentMonth: true,
                    isToday: false
                };
                if (day != 0) {
                    currentMonthyear.setDate(day);
                    item['date'] = __WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].dateFormat(currentMonthyear);
                    item['isToday'] = __WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].dateFormat(currentMonthyear) == __WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].dateFormat(new Date());
                    item;
                }
                else if (i == 0) {
                    day = lastMonthDays[lastMonthDays.length - 1][j];
                    item.day = day;
                    lastMonthyear.setDate(day);
                    item['date'] = __WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].dateFormat(lastMonthyear);
                    item.isCurrentMonth = false;
                }
                else if (i == currentMonthDays.length - 1) {
                    day = nextMonthDays[0][j];
                    item.day = day;
                    item.isCurrentMonth = false;
                    nextMonthyear.setDate(day);
                    item['date'] = __WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].dateFormat(nextMonthyear);
                }
                week.push(item);
                j++;
            }
            result.push(week);
            i++;
        }
        return result;
    };
    SignInPage.prototype.doSign = function () {
        this.currentYearMonth = __WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].dateFormat(new Date());
        this.CheckIn();
    };
    SignInPage.prototype.getCheckInRecord = function (Year, Month) {
        var _this = this;
        if (!Year || !Month) {
            var today = new Date();
            Year = today.getFullYear().toString();
            Month = (today.getMonth() + 1).toString();
        }
        this.isDataLoading = true;
        this.socialProvider.CheckInRecord_New(Year, Month).subscribe(function (res) {
            _this.CheckInRecordList = res.result.checkInRecords;
            _this.totalCheckedCount = res.result.continueDays;
            _this.isDataLoading = false;
            for (var _i = 0, _a = res.result.checkInRecords; _i < _a.length; _i++) {
                var checkedin = _a[_i];
                if (__WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].dateFormat(new Date(checkedin.time)) == __WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].dateFormat(new Date()) && checkedin.isChecked) {
                    _this.isSigned = true;
                }
                for (var _b = 0, _c = _this.monthDays; _b < _c.length; _b++) {
                    var weeks = _c[_b];
                    for (var _d = 0, weeks_2 = weeks; _d < weeks_2.length; _d++) {
                        var week = weeks_2[_d];
                        if (__WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].dateFormat(new Date(checkedin.time)) == __WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].dateFormat(new Date(week.date))) {
                            Object.assign(week, checkedin);
                        }
                    }
                }
            }
            // this.calcTotalCheckedCount()
        });
    };
    SignInPage.prototype.calcTotalCheckedCount = function () {
        this.totalCheckedCount = 0;
        for (var _i = 0, _a = this.monthDays; _i < _a.length; _i++) {
            var weeks = _a[_i];
            for (var _b = 0, weeks_3 = weeks; _b < weeks_3.length; _b++) {
                var day = weeks_3[_b];
                if (day.isChecked) {
                    this.totalCheckedCount++;
                }
            }
        }
    };
    SignInPage.prototype.setDateToSigned = function (date) {
        for (var _i = 0, _a = this.monthDays; _i < _a.length; _i++) {
            var weeks = _a[_i];
            for (var _b = 0, weeks_4 = weeks; _b < weeks_4.length; _b++) {
                var week = weeks_4[_b];
                if (date == week.date) {
                    week.isSigned = true;
                }
            }
        }
    };
    SignInPage.prototype.CheckIn = function () {
        var _this = this;
        this.socialProvider.CheckIn(__WEBPACK_IMPORTED_MODULE_1__services_utility__["a" /* Utility */].dateFormat(new Date())).subscribe(function (res) {
            if (res.errcode == 0) {
                _this.events.publish('achievement:refresh-assets');
                _this.getCheckInRecord();
                var imageModal = {
                    title: _this.translate.instant('SOCIAL_CHECKIN_CHECKINREWARD_TITLE'),
                    subtitle: "<span style=\"font-size: 2.5rem;\">" + res.result.score + "</span>" + _this.translate.instant('SOCIAL_IPROUD_POINTS'),
                    imageUrl: 'assets/img/achievement/sign_bg.png',
                    buttonText: _this.translate.instant('SOCIAL_CHECKIN_CHECKINREWARD_BUTTON_TEXT'),
                    isShowCloseButton: false
                };
                _this.modal.create('ImageModalPage', {
                    details: imageModal
                }, {
                    showBackdrop: true,
                    cssClass: 'sp-backdrop',
                    enterAnimation: 'modal-scale-enter',
                    leaveAnimation: 'modal-scale-leave'
                }).present();
                _this.isSigned = true;
                // this.setDateToSigned(res.result.time)
            }
        });
    };
    SignInPage.prototype.getNextContinousDayObject = function (iconUrl) {
        if (!iconUrl)
            return false;
        return iconUrl.split('|');
    };
    SignInPage.prototype.ionViewWillEnter = function () {
        _super.prototype.ionViewWillEnter.call(this);
    };
    SignInPage.prototype.ionViewWillLeave = function () {
        _super.prototype.ionViewWillLeave.call(this);
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'page-sign-in',template:/*ion-inline-start:"F:\iproud2.5-pwa\src\pages\achievement\sign-in\sign-in.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{\'SOCIAL_CHECKIN_TITLE\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content fullscreen no-bounce>\n\n  <!-- <div class="sign">\n\n    <table>\n\n       <tr>\n\n         <td>\n\n            <span class="span">本月已签到10天</span>\n\n         </td>\n\n         <td>\n\n          <button ion-button clear (click)="openSignCalendar()" color="dark">\n\n              <img src="assets/img/calendar.png"/><span>签到日历</span>\n\n          </button>\n\n        </td>\n\n       </tr>        \n\n    </table>\n\n     \n\n     <ion-card>\n\n        <h1 class="card-title" text-center>12月12日</h1>\n\n        <div>\n\n            <button *ngIf="!isSigned" ion-button  clear (click)="doSign()" >签到</button>\n\n            <h2 *ngIf="isSigned">已签</h2>\n\n        </div>\n\n       \n\n        \n\n     </ion-card>\n\n      \n\n   </div> -->\n\n\n\n   \n\n\n\n  <ion-card class="calendar">\n\n  \n\n\n\n\n\n    <ion-grid text-center>  \n\n       <div class="sign-button-wrapper">\n\n         <div class="sign-button-container" *ngIf="!isDataLoading">\n\n           <div *ngIf="!isSigned" class="can-click sign-button"  (click)="doSign()">\n\n             <div class="button-text">\n\n              {{\'SOCIAL_CHECKIN_BUTTON\' | translate}}\n\n             </div> \n\n           </div>\n\n           <div *ngIf="isSigned" class=" sign-button"  >\n\n            <div class="button-text">\n\n             {{\'SOCIAL_CHECKIN_ALREADY_SIGN\' | translate}}\n\n            </div> \n\n          </div>\n\n           \n\n         </div>\n\n       </div>\n\n      <ion-row class="calendar-datetime">\n\n        <ion-col>\n\n           <span class="signed-record">\n\n               {{\'SOCIAL_CHECKIN_ACCUMULATE_DAYS\' | translate}}\n\n               {{totalCheckedCount}}\n\n               {{\'SOCIAL_CHECKIN_ACCUMULATE_DAY\' | translate}}\n\n           </span> \n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-datetime displayFormat="YYYY-MM" pickerFormat="YYYY/MM" [(ngModel)]="currentYearMonth" (ngModelChange)="chooseDate(currentYearMonth)"></ion-datetime>\n\n        </ion-col>\n\n        <ion-col>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row class="calendar-header">\n\n        <ion-col *ngFor="let item of weeksDisplay">\n\n          {{item}}\n\n        </ion-col>\n\n        \n\n      </ion-row>\n\n      <div class="header-border"></div>\n\n      <ion-row *ngFor="let week of monthDays">\n\n        <ion-col class="day-col" *ngFor="let day of week">\n\n          <div class="day" [ngClass]="{\'today-color\': day.isToday}" >\n\n\n\n            <div class="today" *ngIf="day.isToday" [ngClass]="{\'today-ios\': isIos}"></div>\n\n\n\n            <span [ngClass]="{\'not-current-month\': !day.isCurrentMonth}" class="date" *ngIf="!day.nextContinousDayIcon || day.isChecked">{{day.day}} \n\n                  <img class="sign-logo" *ngIf="day.isChecked" src="assets/img/correct.png">\n\n            </span>\n\n            <span class="extra" *ngIf="day.nextContinousDayIcon && !day.isChecked">\n\n              <img class="lastly" [src]="getNextContinousDayObject(day.nextContinousDayIcon)[1]" >\n\n              <span class="coins-persent"> \n\n                <img class="coins" src="assets/img/points.png"> \n\n                <span class="persent">{{getNextContinousDayObject(day.nextContinousDayIcon)[0]}}</span>\n\n              </span>\n\n              \n\n            </span>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n  </ion-card>\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\iproud2.5-pwa\src\pages\achievement\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["p" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["n" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__services_native_service__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_4__services_session__["a" /* Session */],
            __WEBPACK_IMPORTED_MODULE_2__providers_social_social__["a" /* SocialProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* Events */]])
    ], SignInPage);
    return SignInPage;
}(__WEBPACK_IMPORTED_MODULE_3__achieve_page__["a" /* AchievePage */]));

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 1189:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * node-calendar
 * Copyright(c) 2013 Armin Tamzarian <tamzarian1989@gmail.com>
 * MIT Licensed
 */

(function() {

    var _DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var _DAYS_BEFORE_MONTH = [-1, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

    try {
      var cldr = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"cldr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
    }
    catch(err) {
      cldr = false;
    }

    /**
     * Adjust the provided weekday index from the Javascript index scheme
     * (SUN=0, MON=1, ...) to the Python scheme (MON=0, TUE=1, ...)
     *
     * @api private
     */
    function _adjustWeekday(weekday) {
      return weekday > 0 ? weekday - 1 : 6
    };

    /**
     * Extracts the wide or abbreviated day names for a specified locale.
     * If cldr is not installed values default to that for locale en_US.
     *
     * @param {Boolean} abbr
     * @param {String} locale
     * @api private
     */
    function _extractLocaleDays(abbr, locale) {
      if(abbr) {
        return cldr ? cldr.extractDayNames(locale).format.abbreviated : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      }
      else {
        return cldr ? cldr.extractDayNames(locale).format.wide : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      }
    };

    /**
     * Extracts the wide or abbreviated month names for a specified locale.
     * If cldr is not installed values default to that for locale en_US.
     *
     * @param {Boolean} abbr
     * @param {String} locale
     * @api private
     */
    function _extractLocaleMonths(abbr, locale) {
      var months = []
      if(abbr) {
        months = cldr ? cldr.extractMonthNames(locale).format.abbreviated : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      }
      else {
        months = cldr ? cldr.extractMonthNames(locale).format.wide : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      }

      months.unshift('');
      return months;
    };

    /**
     * Calculates the ordinal time from given year, month, day values.
     *
     * @param {Number} year
     * @param {Number} month
     * @param {Number} day
     * @api private
     */
    function _toordinal(year, month, day) {
      var days_before_year = ((year - 1) * 365) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400);
      var days_before_month = _DAYS_BEFORE_MONTH[month] + (month > 2 && isleap(year) ? 1 : 0);
      return (days_before_year + days_before_month + day);
    }

    /**
     * Return true for leap years, false for non-leap years.
     *
     * @param {Number} year
     * @api public
     */
    function isleap(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    };

    /**
     * Return number of leap years in range [y1, y2).
     * Assumes y1 <= y2.
     *
     * @param {Number} y1
     * @param {Number} y2
     * @api public
     */
    function leapdays(y1, y2) {
      y1--;
      y2--;
      return (Math.floor(y2/4) - Math.floor(y1/4)) - (Math.floor(y2/100) - Math.floor(y1/100)) + (Math.floor(y2/400) - Math.floor(y1/400));
    };

    /**
     * Return starting weekday (0-6 ~ Mon-Sun) and number of days (28-31) for
     * year, month.
     *
     * @param {Number} year
     * @param {Number} month
     * @throws {IllegalMonthError} If the provided month is invalid.
     * @api public
     */
    function monthrange(year, month) {
      if(month < 1 || month > 12) {
        throw new IllegalMonthError();
      }

      var day1 = weekday(year, month, 1);
      var ndays = _DAYS_IN_MONTH[month] + (month === 2 && isleap(year));

      return [day1, ndays];
    };

    /**
     * Sets the locale for use in extracting month and weekday names.
     *
     * @param {String} locale
     * @throws {IllegalLocaleError} If the provided locale is invalid.
     * @api public
     */
    function setlocale(locale) {
      locale = typeof(locale) === "undefined" ? "en_US" : locale;

      if((cldr && (cldr.localeIds.indexOf(locale.replace(/-/g, '_').toLowerCase()) === -1)) || (!cldr && ((locale.replace(/-/g, '_').toLowerCase() !== "en_us")))) {
         throw new IllegalLocaleError();
      }

      this.day_name   = _extractLocaleDays(false, locale);
      this.day_abbr   = _extractLocaleDays(true, locale);
      this.month_name = _extractLocaleMonths(false, locale);
      this.month_abbr = _extractLocaleMonths(true, locale);
    };

    /**
      * Unrelated but handy function to calculate Unix timestamp from GMT.
      *
      * @param {Array} tuple
      * @throws {IllegalMonthError} If the provided month element is invalid.
      * @throws {IllegalDayError} If the provided day element is invalid.
      * @api public
      */
    function timegm(timegmt) {
      var year   = timegmt[0];
      var month  = timegmt[1];
      var day    = timegmt[2];
      var hour   = timegmt[3];
      var minute = timegmt[4];
      var second = timegmt[5];

      if(month < 1 || month > 12) {
        throw new IllegalMonthError();
      }

      if(day < 1 || day > (_DAYS_IN_MONTH[month] + (month === 2 && isleap(year)))) {
        throw new IllegalDayError();
      }

      if(hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59) {
        throw new IllegalTimeError();
      }

      var days = _toordinal(year, month, 1) - 719163 + day - 1;
      var hours = (days * 24) + hour;
      var minutes = (hours * 60) + minute;
      var seconds = (minutes * 60) + second;

      return seconds;
    }

    /**
     * Return weekday (0-6 ~ Mon-Sun) for year (1970-...), month (1-12),
     * day (1-31).
     *
     * @param {Number} year
     * @param {Number} month
     * @param {Number} day
     * @throws {IllegalMonthError} If the provided month element is invalid.
     * @throws {IllegalDayError} If the provided day element is invalid.
     * @api public
     */
    function weekday(year, month, day) {
      if(month < 1 || month > 12) {
        throw new IllegalMonthError();
      }

      if(day < 1 || day > (_DAYS_IN_MONTH[month] + (month === 2 && isleap(year)))) {
        throw new IllegalDayError();
      }

      var date = new Date(year, month - 1, day);
      return _adjustWeekday(date.getDay());
    };


    /**
     * Base calendar class. This class doesn't do any formatting. It simply
     * provides data to subclasses.
     *
     * @param {Number} firstweekday
     * @throws {IllegalWeekdayError} If the provided firstweekday is invalid.
     * @api public
     */
    function Calendar(firstweekday) {
      this._firstweekday = typeof(firstweekday) === "undefined" ? 0 : firstweekday;

      if(firstweekday < 0 || firstweekday > 6) {
        throw new IllegalWeekdayError();
      }

      this._oneday = 1000 * 60 * 60 * 24;
      this._onehour = 1000 * 60 * 60;
    };

    /**
     * GET-er for firstweekday
     *
     * @api public
     */
    Calendar.prototype.getfirstweekday = function() {
      return this._firstweekday;
    };

    /**
     * SET-er for firstweekday
     *
     * @param {Number} firstweekday
     * @throws {IllegalWeekdayError} If the provided firstweekday is invalid.
     * @api public
     */
    Calendar.prototype.setfirstweekday = function(firstweekday) {
      if(firstweekday < 0 || firstweekday > 6) {
        throw new IllegalWeekdayError();
      }

      this._firstweekday = firstweekday;
    };

    /**
     * Return an array for one week of weekday numbers starting with the
     * configured first one.
     *
     * @api public
     */
    Calendar.prototype.iterweekdays = function() {
      var weekdays = [];
      for(var i = this._firstweekday; i < this._firstweekday + 7; i++) {
        weekdays.push(i % 7);
      }

      return weekdays;
    };

    /**
     * Return an array for one month. The array will contain Date
     * values and will always iterate through complete weeks, so it will yield
     * dates outside the specified month.
     *
     * @param {Number} year
     * @param {Number} month
     * @api public
     */

    Calendar.prototype.itermonthdates = function(year, month) {
      if(month < 1 || month > 12) {
        throw new IllegalMonthError();
      }

      var date = new Date(year, month - 1, 1);
      var day = _adjustWeekday(date.getDay());
      var days = (day - this._firstweekday)  >= 0 ? (day - this._firstweekday) % 7 : 7 + (day - this._firstweekday);

      date.setTime(date.getTime() - (days * this._oneday));

      var dates = [];
      while(true) {
        dates.push(new Date(date.getTime()));

        var currentDate = date.getDate();
        date.setTime(date.getTime() + this._oneday);

        // Hack to account for DST
        while(date.getDate() === currentDate) {
          date.setTime(date.getTime() + this._onehour);
        }

        if(date.getMonth() !== month - 1 && _adjustWeekday(date.getDay()) === this._firstweekday) {
          break;
        }
      }

      return dates;
    };
    /**
     * Like itermonthdates(), but will yield day numbers. For days outside
     * the specified month the day number is 0.
     *
     * @param {Number} year
     * @param {Number} month
     * @api public
     */
    Calendar.prototype.itermonthdays = function(year, month) {
      return this.itermonthdates(year, month).map(function(value){
        return value.getMonth() === month - 1 ? value.getDate() : 0;
      });
    };

    /**
     * Like itermonthdates(), but will yield [day number, weekday number]
     * arrays. For days outside the specified month the day number is 0.
     *
     * @param {Number} year
     * @param {Number} month
     * @api public
     */
    Calendar.prototype.itermonthdays2 = function(year, month) {
      return this.itermonthdates(year, month).map(function(value){
        return value.getMonth() === month - 1 ? [value.getDate(), _adjustWeekday(value.getDay())] : [0, _adjustWeekday(value.getDay())];
      }, this);
    };

    /**
     * Return a matrix (array of array) representing a month's calendar.
     * Each row represents a week; week entries are Date values.
     *
     * @param {Number} year
     * @param {Number} month
     * @api public
     */
    Calendar.prototype.monthdatescalendar = function(year, month) {
      var days = [];
      dates = this.itermonthdates(year, month);
      for(var i = 0; i < dates.length; i += 7) {
        days.push(dates.slice(i, i + 7));
      }

      return days;
    };

    /**
     * Return a matrix representing a month's calendar.
     * Each row represents a week; days outside this month are zero.
     *
     * @param {Number} year
     * @param {Number} month
     * @api public
     */
    Calendar.prototype.monthdayscalendar = function(year, month) {
      var days = [];
      dates = this.itermonthdays(year, month);
      for(var i = 0; i < dates.length; i += 7) {
        days.push(dates.slice(i, i + 7));
      }

      return days;
    };

    /**
     * Return a matrix representing a month's calendar.
     * Each row represents a week; week entries are
     * [day number, weekday number] arrays. Day numbers outside this month
     * are zero.
     *
     * @param {Number} year
     * @param {Number} month
     * @api public
     */
    Calendar.prototype.monthdays2calendar = function(year, month) {
      var days = [];
      dates = this.itermonthdays2(year, month);
      for(var i = 0; i < dates.length; i += 7) {
        days.push(dates.slice(i, i + 7));
      }

      return days;
    };

    /**
     * Return the data for the specified year ready for formatting. The return
     * value is an array of month rows. Each month row contains up to width months.
     * Each month contains between 4 and 6 weeks and each week contains 1-7
     * days. Days are Date objects.
     *
     * @param {Number} year
     * @param {Number} width
     * @api public
     */
    Calendar.prototype.yeardatescalendar = function(year, width) {
      width = typeof(width) === "undefined" ? 3 : width;

      var months = [];
      for(var month = 1; month <= 12; month++) {
        months.push(this.monthdatescalendar(year, month));
      }

      var rows = [];
      for(var i = 0; i < months.length; i += width) {
        rows.push(months.slice(i, i + width));
      }
      return rows;
    };

    /**
     * Return the data for the specified year ready for formatting (similar to
     * yeardatescalendar()). Entries in the week arrays are day numbers.
     * Day numbers outside this month are zero.
     *
     * @param {Number} year
     * @param {Number} width
     * @api public
     */
    Calendar.prototype.yeardayscalendar = function(year, width) {
      width = typeof(width) === "undefined" ? 3 : width;

      var months = [];
      for(var month = 1; month <= 12; month++) {
        months.push(this.monthdayscalendar(year, month));
      }

      var rows = [];
      for(var i = 0; i < months.length; i += width) {
        rows.push(months.slice(i, i + width));
      }
      return rows;
    };

    /**
     * Return the data for the specified year ready for formatting (similar to
     * yeardatescalendar()). Entries in the week arrays are
     * [day number, weekday number] arrays. Day numbers outside this month are
     * zero.
     *
     * @param {Number} year
     * @param {Number} width
     * @api public
     */
    Calendar.prototype.yeardays2calendar = function(year, width) {
      width = typeof(width) === "undefined" ? 3 : width;

      var months = [];
      for(var month = 1; month <= 12; month++) {
        months.push(this.monthdays2calendar(year, month));
      }

      var rows = [];
      for(var i = 0; i < months.length; i += width) {
        rows.push(months.slice(i, i + width));
      }
      return rows;
    };

    /**
     * Error indicating a nonexistent or unsupported locale specified.
     *
     * @param {String} message
     * @api public
     */
    function IllegalLocaleError(message) {
      this.name = "IllegalLocaleError";
      this.message = typeof(message) === "undefined" ? "Invalid locale specified." : message;
    };
    IllegalLocaleError.prototype = new Error();
    IllegalLocaleError.prototype.constructor = IllegalLocaleError;

    /**
     * Error indicating a day index specified outside of the valid range.
     *
     * @param {String} message
     * @api public
     */
    function IllegalDayError(message) {
      this.name = "IllegalDayError";
      this.message = typeof(message) === "undefined" ? "Invalid day specified." : message;
    };
    IllegalDayError.prototype = new Error();
    IllegalDayError.prototype.constructor = IllegalDayError;

    /**
     * Error indicating a month index specified outside of the expected range (1-12 ~ Jan-Dec).
     *
     * @param {String} message
     * @api public
     */
    function IllegalMonthError(message) {
      this.name = "IllegalMonthError";
      this.message = typeof(message) === "undefined" ? "Invalid month specified." : message;
    };
    IllegalMonthError.prototype = new Error();
    IllegalMonthError.prototype.constructor = IllegalMonthError;

    /**
     * Error indicating a time element is outside of the valid range.
     *
     * @param {String} message
     * @api public
     */
    function IllegalTimeError(message) {
      this.name = "IllegalTimeError";
      this.message = typeof(message) === "undefined" ? "Invalid time element specified." : message;
    };
    IllegalTimeError.prototype = new Error();
    IllegalTimeError.prototype.constructor = IllegalTimeError;

    /**
     * Error indicating a weekday index specified outside of the expected range (0-6 ~ Mon-Sun).
     *
     * @param {String} message
     * @api public
     */
    function IllegalWeekdayError(message) {
      this.name = "IllegalWeekdayError";
      this.message = typeof(message) === "undefined" ? "Invalid weekday specified." : message;
    };
    IllegalWeekdayError .prototype = new Error();
    IllegalWeekdayError .prototype.constructor = IllegalWeekdayError ;

    // export of package-like object with explicit public API
    var calendar = function() {};

    calendar.isleap     = isleap;
    calendar.leapdays   = leapdays;
    calendar.monthrange = monthrange;
    calendar.weekday    = weekday;
    calendar.setlocale  = setlocale;
    calendar.timegm     = timegm;
    calendar.Calendar   = Calendar;

    calendar.IllegalLocaleError  = IllegalLocaleError;
    calendar.IllegalDayError     = IllegalDayError;
    calendar.IllegalMonthError   = IllegalMonthError;
    calendar.IllegalTimeError    = IllegalTimeError;
    calendar.IllegalWeekdayError = IllegalWeekdayError;

    calendar.MONDAY     = 0;
    calendar.TUESDAY    = 1;
    calendar.WEDNESDAY  = 2;
    calendar.THURSDAY   = 3;
    calendar.FRIDAY     = 4;
    calendar.SATURDAY   = 5;
    calendar.SUNDAY     = 6;

    calendar.JANUARY    =  1;
    calendar.FEBRUARY   =  2;
    calendar.MARCH      =  3;
    calendar.APRIL      =  4;
    calendar.MAY        =  5;
    calendar.JUNE       =  6;
    calendar.JULY       =  7;
    calendar.AUGUST     =  8;
    calendar.SEPTEMBER  =  9;
    calendar.OCTOBER    = 10;
    calendar.NOVEMBER   = 11;
    calendar.DECEMBER   = 12;

    calendar.setlocale();

    // Initialization methodology and noConflict courtesy node-uuid:
    // https://github.com/broofa/node-uuid

    var _global = this;

    // Publish as node.js module
    if (typeof(module) != 'undefined' && module.exports) {
      module.exports = calendar;
    }

    // Publish as global (in browsers)
    else {
      var _previousRoot = _global.calendar;

      /**
        * Reset global 'calendar' variable
        *
        * @api public
        */
      calendar.noconflict = function() {
        _global.calendar = _previousRoot;
        return calendar;
      };

      _global.calendar = calendar;
    }

}).call(this);


/***/ })

});
//# sourceMappingURL=43.js.map