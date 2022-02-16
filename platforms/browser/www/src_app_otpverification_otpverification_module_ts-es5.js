(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_otpverification_otpverification_module_ts"], {
    /***/
    78013:
    /*!*******************************************************************!*\
      !*** ./src/app/otpverification/otpverification-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpverificationPageRoutingModule": function OtpverificationPageRoutingModule() {
          return (
            /* binding */
            _OtpverificationPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _otpverification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./otpverification.page */
      81989);

      var routes = [{
        path: '',
        component: _otpverification_page__WEBPACK_IMPORTED_MODULE_0__.OtpverificationPage
      }];

      var _OtpverificationPageRoutingModule = function OtpverificationPageRoutingModule() {
        _classCallCheck(this, OtpverificationPageRoutingModule);
      };

      _OtpverificationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OtpverificationPageRoutingModule);
      /***/
    },

    /***/
    86309:
    /*!***********************************************************!*\
      !*** ./src/app/otpverification/otpverification.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpverificationPageModule": function OtpverificationPageModule() {
          return (
            /* binding */
            _OtpverificationPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _otpverification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./otpverification-routing.module */
      78013);
      /* harmony import */


      var _otpverification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otpverification.page */
      81989);

      var _OtpverificationPageModule = function OtpverificationPageModule() {
        _classCallCheck(this, OtpverificationPageModule);
      };

      _OtpverificationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _otpverification_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpverificationPageRoutingModule],
        declarations: [_otpverification_page__WEBPACK_IMPORTED_MODULE_1__.OtpverificationPage]
      })], _OtpverificationPageModule);
      /***/
    },

    /***/
    81989:
    /*!*********************************************************!*\
      !*** ./src/app/otpverification/otpverification.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpverificationPage": function OtpverificationPage() {
          return (
            /* binding */
            _OtpverificationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_otpverification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./otpverification.page.html */
      31473);
      /* harmony import */


      var _otpverification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otpverification.page.scss */
      7718);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _OtpverificationPage = /*#__PURE__*/function () {
        function OtpverificationPage(router, http, toastCtrl, route) {
          _classCallCheck(this, OtpverificationPage);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.mail = atob(localStorage.getItem("mailId"));
          this.parsedObj = JSON.parse(this.mail);
          this.OneTimePassword = "";
          this.phonenumber = "";
          this.OTPSent = false;
        }

        _createClass(OtpverificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.parsedObj);
          }
        }, {
          key: "sendOtp",
          value: function sendOtp() {
            var _this = this;

            alert("hello");
            var obj = {
              store_number: this.phonenumber
            };
            this.http.post('/seller_send_otp', obj).subscribe(function (response) {
              _this.OTPSent = true;
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "verifyOTP",
          value: function verifyOTP() {
            var _this2 = this;

            alert(this.parsedObj.email);
            var obj = {
              email_id: this.parsedObj.email,
              verify_otp: this.OneTimePassword
            };
            console.log(obj);
            this.http.post('/seller_verify_otp', obj).subscribe(function (response) {
              console.log(response);

              if (response.success == "true") {
                _this2.router.navigate(['/signinpage']);
              } else {
                _this2.OneTimePassword = "";
                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: function didOpen(toast) {
                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                  }
                });
                Toast.fire({
                  icon: 'error',
                  title: 'Incorrect OTP'
                });
              }
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return OtpverificationPage;
      }();

      _OtpverificationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }];
      };

      _OtpverificationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-otpverification',
        template: _raw_loader_otpverification_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_otpverification_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OtpverificationPage);
      /***/
    },

    /***/
    7718:
    /*!***********************************************************!*\
      !*** ./src/app/otpverification/otpverification.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  font-size: 12px !important;\n  color: #4c4c4d !important;\n}\n\nion-item {\n  --background: transparent !important;\n}\n\nion-input:focus {\n  --border-bottom: 2px solid #23d5ab !important;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.welcome {\n  font-size: 15px;\n}\n\n.OTPmessage {\n  color: #23d5ab;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cHZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBR0E7RUFDSSxvQ0FBQTtBQUFKOztBQUVBO0VBQ0ksNkNBQUE7QUFDSjs7QUFJQTtFQUNJLGlDQUFBO0VBSUEsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKSjs7QUFLSTtFQUNJLGFBQUE7QUFIUjs7QUFPRTtFQUNJLGVBQUE7QUFKTjs7QUFPRTtFQUNJLGNBQUE7QUFKTiIsImZpbGUiOiJvdHB2ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6MTJweCAgIWltcG9ydGFudDtcbiAgICBjb2xvcjojNGM0YzRkICFpbXBvcnRhbnQ7O1xufVxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuaW9uLWlucHV0OmZvY3Vze1xuICAgIC0tYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyM2Q1YWIgIWltcG9ydGFudDtcbn1cblxuXG5cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmYgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXG4gICAgLy8gMCUsICNkMWYyZTdcbiAgICAvLyAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAud2VsY29tZXtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG4gIC5PVFBtZXNzYWdle1xuICAgICAgY29sb3I6ICMyM2Q1YWI7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    31473:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otpverification/otpverification.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"bg-class\">\n  <div class=\"container\">\n\n    <div class=\"col-12 ion-text-center\">\n      <img id=\"logo\" height=\"150px\" width=\"150px\" style=\"margin-top: 80px;\" src=\"assets/logo.jpeg\" alt=\"\">\n    </div>\n\n\n    <div class=\"col-12 ion-text-center\">\n      <span class=\"welcome\">OTP VERIFICATION</span> <br>\n    </div>\n\n\n    <div class=\"signin-div mt-5 p-2\">\n      <div class=\"input-field mb-5\">\n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-icon name=\"call\"></ion-icon> Enter Your Phone number\n          </ion-label>\n          <ion-input [(ngModel)]=\"phonenumber\"></ion-input>\n        </ion-item>\n        <ion-button (click)=\"sendOtp()\" class=\"btn btn-sm text-white\" color=\"success\" >Send OTP</ion-button>\n        <p *ngIf=\"OTPSent\" class=\"small text-center OTPmessage\" ><i>OTP Sent To Your Mobile</i></p>\n        <ion-item>\n          <ion-label position=\"floating\">\n            <ion-icon name=\"call\"></ion-icon> Enter Your OTP\n          </ion-label>\n          <ion-input [(ngModel)]=\"OneTimePassword\" placeholder=\"- - - - - -\"></ion-input>\n        </ion-item>\n        <ion-button class=\"btn btn-sm text-white\" color=\"success\" (click)=\"verifyOTP()\">Verify OTP</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_otpverification_otpverification_module_ts-es5.js.map