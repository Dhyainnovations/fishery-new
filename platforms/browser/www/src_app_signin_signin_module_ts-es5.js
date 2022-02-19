(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_signin_signin_module_ts"], {
    /***/
    11644:
    /*!*************************************************!*\
      !*** ./src/app/signin/signin-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SigninPageRoutingModule": function SigninPageRoutingModule() {
          return (
            /* binding */
            _SigninPageRoutingModule
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


      var _signin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signin.page */
      61895);

      var routes = [{
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_0__.SigninPage
      }];

      var _SigninPageRoutingModule = function SigninPageRoutingModule() {
        _classCallCheck(this, SigninPageRoutingModule);
      };

      _SigninPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SigninPageRoutingModule);
      /***/
    },

    /***/
    87445:
    /*!*****************************************!*\
      !*** ./src/app/signin/signin.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SigninPageModule": function SigninPageModule() {
          return (
            /* binding */
            _SigninPageModule
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


      var _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./signin-routing.module */
      11644);
      /* harmony import */


      var _signin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signin.page */
      61895);

      var _SigninPageModule = function SigninPageModule() {
        _classCallCheck(this, SigninPageModule);
      };

      _SigninPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninPageRoutingModule],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_1__.SigninPage]
      })], _SigninPageModule);
      /***/
    },

    /***/
    61895:
    /*!***************************************!*\
      !*** ./src/app/signin/signin.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SigninPage": function SigninPage() {
          return (
            /* binding */
            _SigninPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./signin.page.html */
      13746);
      /* harmony import */


      var _signin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./signin.page.scss */
      49180);
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

      var _SigninPage = /*#__PURE__*/function () {
        function SigninPage(router, http, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, SigninPage);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.loginstatus = "";
          this.signinemailid = '';
          this.signinpassword = '';
          route.params.subscribe(function (val) {
            // setTimeout(()=>{
            //   if(userdetails != ''){
            //     this.router.navigate(['/tabs'])
            //   }
            // },100)
            console.log(_this.loginstatus);
          });
        }

        _createClass(SigninPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signin",
          value: function signin() {
            var _this2 = this;

            var Data = {
              email_id: this.signinemailid,
              password: this.signinpassword
            };
            this.http.login('/seller_login', Data).subscribe(function (response) {
              console.log(response);

              if (response.success == "true") {
                var obj = {
                  id: response.tbid,
                  storename: response.store_name,
                  mobile: response.store_number,
                  email: response.email_id,
                  token: response.token
                };
                _this2.loginstatus = response.seller_status;
                console.log(obj);
                var encodeText = btoa(JSON.stringify(obj));
                localStorage.setItem("24hrs-user-data", encodeText);
                localStorage.setItem("token", response.token);
                localStorage.setItem("loginstatus", response.seller_status);
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
                  icon: 'success',
                  title: 'Signed in successfully'
                });

                if (_this2.loginstatus != "First Login") {
                  _this2.signinemailid = '';
                  _this2.signinpassword = '';

                  _this2.router.navigate(['/sellerdetailpage']);
                } else {
                  _this2.router.navigate(['/tabs']);
                }
              } else {
                var _Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: function didOpen(toast) {
                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer);
                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer);
                  }
                });

                _Toast.fire({
                  icon: 'error',
                  title: 'Please enter the valid email & password'
                });
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "signupPage",
          value: function signupPage() {
            this.router.navigate(['/signuppage']);
          }
        }]);

        return SigninPage;
      }();

      _SigninPage.ctorParameters = function () {
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

      _SigninPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-signin',
        template: _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signin_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SigninPage);
      /***/
    },

    /***/
    49180:
    /*!*****************************************!*\
      !*** ./src/app/signin/signin.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#logo {\n  margin-top: -35px;\n}\n\n.signin-btn {\n  background-color: #23d5ab;\n  color: #fff;\n  text-align: right;\n  margin: 10%;\n  padding: 5px;\n}\n\n@media screen and (max-width: 300px) {\n  .signin-btn {\n    text-align: center;\n    margin-left: -15px !important;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .signin-btn {\n    margin-left: 55px !important;\n  }\n}\n\nion-label {\n  font-size: 12px !important;\n  color: #4c4c4d !important;\n}\n\nion-item {\n  --background: transparent !important;\n}\n\nion-input:focus {\n  --border-bottom: 2px solid #23d5ab !important;\n}\n\n.facebook-btn {\n  background-color: #fff;\n  color: #23d5ab;\n  text-align: center;\n  width: 90%;\n  border: none;\n  margin: 10px;\n  font-size: 15px;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLDZCQUFBO0VBRU47QUFDRjs7QUFDRTtFQUNFO0lBQ0ksNEJBQUE7RUFDTjtBQUNGOztBQUNBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksb0NBQUE7QUFFSjs7QUFBQTtFQUNJLDZDQUFBO0FBR0o7O0FBQUE7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNJLGlDQUFBO0VBSUEsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFDSTtFQUNJLGFBQUE7QUFDUiIsImZpbGUiOiJzaWduaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ297XG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XG4gICBcbn1cbi5zaWduaW4tYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2Q1YWI7XG4gICAgY29sb3I6I2ZmZjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46MTAlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgLnNpZ25pbi1idG4ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNpZ25pbi1idG4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZToxMnB4ICAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiM0YzRjNGQgIWltcG9ydGFudDs7XG59XG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5pb24taW5wdXQ6Zm9jdXN7XG4gICAgLS1ib3JkZXItYm90dG9tOiAycHggc29saWQgIzIzZDVhYiAhaW1wb3J0YW50O1xufVxuXG4uZmFjZWJvb2stYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IzIzZDVhYjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBtYXJnaW46MTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmYgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXG4gICAgLy8gMCUsICNkMWYyZTdcbiAgICAvLyAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0iXX0= */";
      /***/
    },

    /***/
    13746:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content class=\"bg-class\" >\n  <div class=\"container\" >\n    <div class=\"row title\">\n      <div class=\"col-12 ion-text-center\">\n        <img id=\"logo\" height=\"125px\" width=\"125px\" src=\"assets/logo.jpeg\" alt=\"\">\n      </div>\n       \n          \n      <div class=\"col-12 ion-text-center\">\n        <span class=\"welcome\">Welcome to</span> <br>\n        <span class=\"seller\"><b>24hrs Seller</b></span>\n      </div>\n    </div>\n  \n    <div class=\"signin-div mt-4 \">\n      <div class=\"row \"style=\"padding:15px;\">\n        <div class=\"col-6 signin\">\n          Sign in\n        </div>\n        <div style=\"cursor: pointer;\" (click)=\"signupPage()\" class=\"col-6 signup\">\n          Sign up\n        </div>\n      </div>\n      <p class=\"signin-seller\"><b>Sign in to  24hrs Seller</b></p>\n      <p class=\"emailTo-continue\">Enter email & password to continue</p>\n  \n      <div class=\"input-field\" >\n        <ion-item>\n          <ion-label position=\"floating\">  <ion-icon name=\"mail\"></ion-icon> EMAIL</ion-label>\n          <ion-input [(ngModel)]=\"signinemailid\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-lock2-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"M7 6a1 1 0 0 1 2 0v1H7V6z\"/>\n            <path d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z\"/>\n          </svg> PASSWORD</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"signinpassword\"> </ion-input>\n        </ion-item>   \n      </div>\n  \n      <div class=\"row\">\n        <div class=\"col-8 forgot-pw\">\n          Forgot password?\n        </div>\n        <div class=\"col-2\">\n          <button  (click)=\"signin()\" class=\"btn btn-success btn-sm signin-btn mt-1\">SIGNIN</button>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n  </ion-content>\n  ";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_signin_signin_module_ts-es5.js.map