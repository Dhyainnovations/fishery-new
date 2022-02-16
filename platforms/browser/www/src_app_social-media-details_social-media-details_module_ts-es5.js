(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_social-media-details_social-media-details_module_ts"], {
    /***/
    1657:
    /*!*****************************************************************************!*\
      !*** ./src/app/social-media-details/social-media-details-routing.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SocialMediaDetailsPageRoutingModule": function SocialMediaDetailsPageRoutingModule() {
          return (
            /* binding */
            _SocialMediaDetailsPageRoutingModule
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


      var _social_media_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./social-media-details.page */
      47589);

      var routes = [{
        path: '',
        component: _social_media_details_page__WEBPACK_IMPORTED_MODULE_0__.SocialMediaDetailsPage
      }];

      var _SocialMediaDetailsPageRoutingModule = function SocialMediaDetailsPageRoutingModule() {
        _classCallCheck(this, SocialMediaDetailsPageRoutingModule);
      };

      _SocialMediaDetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SocialMediaDetailsPageRoutingModule);
      /***/
    },

    /***/
    20930:
    /*!*********************************************************************!*\
      !*** ./src/app/social-media-details/social-media-details.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SocialMediaDetailsPageModule": function SocialMediaDetailsPageModule() {
          return (
            /* binding */
            _SocialMediaDetailsPageModule
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


      var _social_media_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./social-media-details-routing.module */
      1657);
      /* harmony import */


      var _social_media_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./social-media-details.page */
      47589);

      var _SocialMediaDetailsPageModule = function SocialMediaDetailsPageModule() {
        _classCallCheck(this, SocialMediaDetailsPageModule);
      };

      _SocialMediaDetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _social_media_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.SocialMediaDetailsPageRoutingModule],
        declarations: [_social_media_details_page__WEBPACK_IMPORTED_MODULE_1__.SocialMediaDetailsPage]
      })], _SocialMediaDetailsPageModule);
      /***/
    },

    /***/
    47589:
    /*!*******************************************************************!*\
      !*** ./src/app/social-media-details/social-media-details.page.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SocialMediaDetailsPage": function SocialMediaDetailsPage() {
          return (
            /* binding */
            _SocialMediaDetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_social_media_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./social-media-details.page.html */
      56106);
      /* harmony import */


      var _social_media_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./social-media-details.page.scss */
      12739);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

      var _SocialMediaDetailsPage = /*#__PURE__*/function () {
        function SocialMediaDetailsPage(router, http, route) {
          _classCallCheck(this, SocialMediaDetailsPage);

          this.router = router;
          this.http = http;
          this.userdetails = atob(localStorage.getItem("24hrs-user-data"));
          this.parsedObj = JSON.parse(this.userdetails);
          this.Deliveryavailability = true;
          this.delivery_availability = '';
          this.Deliveryavailabilitytoggle = true;
          route.params.subscribe(function (val) {});
        }

        _createClass(SocialMediaDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.parsedObj);
          }
        }, {
          key: "deliveryStatus",
          value: function deliveryStatus(event) {
            console.log(event);
            this.Deliveryavailability = !this.Deliveryavailability;
            console.log(this.Deliveryavailability);

            if (this.Deliveryavailability == true || this.Deliveryavailability == null) {
              this.delivery_availability = false;
            } else {
              this.delivery_availability = true;
            }
          }
        }, {
          key: "sellerContact",
          value: function sellerContact() {
            var _this = this;

            console.log(this.delivery_availability);
            var contactData = {
              tbid: this.parsedObj.id,
              website: this.website,
              whatsapp: this.whatsapp,
              instagram: this.instagram,
              facebook: this.facebook,
              youtube: this.youtube,
              contact_number: this.mobilenumber,
              delivery_availability: this.delivery_availability
            };
            console.log(contactData);
            this.http.post('/seller_contact', contactData).subscribe(function (response) {
              if (response.success == "true") {
                console.log(response);
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
                  title: 'updated successfully'
                });

                _this.router.navigate(['/tabs']);
              } else {}
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "navigateHome",
          value: function navigateHome() {
            this.router.navigate(['/tabs']);
          }
        }]);

        return SocialMediaDetailsPage;
      }();

      _SocialMediaDetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }];
      };

      _SocialMediaDetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-social-media-details',
        template: _raw_loader_social_media_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_social_media_details_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SocialMediaDetailsPage);
      /***/
    },

    /***/
    12739:
    /*!*********************************************************************!*\
      !*** ./src/app/social-media-details/social-media-details.page.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".myproduct-div {\n  position: absolute;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: 5px;\n}\n\ninput[type=text] {\n  font-size: 15px;\n  margin: 0 5px;\n  margin-top: 25px !important;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #23d5ab;\n}\n\ninput:focus {\n  outline: none !important;\n  border-bottom: 2px solid blue;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%) !important;\n  color: #fff;\n  height: 25px;\n  width: 55%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 5px !important;\n  margin-left: 35px !important;\n}\n\n.skip-btn {\n  border-radius: 5px !important;\n  background-color: #fff;\n  color: #23d5ab;\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 13px !important;\n  padding: 3px;\n  margin: 5px !important;\n}\n\nlottie-player {\n  cursor: pointer;\n}\n\nselect {\n  border: 1px solid #fff;\n}\n\n.row {\n  margin-bottom: 10px !important;\n}\n\nion-content {\n  --background:#F4F7FA !important;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1tZWRpYS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUNFO0VBQ0Usd0JBQUE7RUFHQSw2QkFBQTtBQUFKOztBQUVFO0VBQ0UsNkJBQUE7RUFDQSx5RUFBQTtFQUdBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBREo7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0ksOEJBQUE7QUFDSjs7QUFDQTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQURFO0VBQ0ksYUFBQTtBQUdOIiwiZmlsZSI6InNvY2lhbC1tZWRpYS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teXByb2R1Y3QtZGl2e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNlYmU2ZTY7XG4gICAgd2lkdGg6OTYlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOjVweDtcbiAgICBcbiAgfVxuICBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjNkNWFiOztcbiAgfVxuICBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlcjoxcHggc29saWQgIzIzZDVhYiAhaW1wb3J0YW50O1xuICAgIC8vIGJveC1zaGFkb3c6IDAgMCAycHggIzIzZDVhYjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmx1ZTs7XG4gIH1cbiAgLnVwZGF0ZS1idG57XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgICAwJSwgIzIzZDVhYlxuICAgIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBoZWlnaHQ6MjVweDtcbiAgICB3aWR0aDo1NSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgbWFyZ2luOjVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQgO1xufVxuLnNraXAtYnRue1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IzIzZDVhYjtcbiAgaGVpZ2h0OjI1cHg7XG4gIHdpZHRoOjI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjo1cHggIWltcG9ydGFudDtcbn1cbmxvdHRpZS1wbGF5ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zZWxlY3R7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gXG59XG4ucm93e1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiNGNEY3RkEgICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */";
      /***/
    },

    /***/
    56106:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social-media-details/social-media-details.page.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"mt-2\">\n  <div class=\"myproduct-div mt-5 \">\n\n    <div class=\"row\">\n      <div class=\"col-7\">\n        <ion-icon (click)=\"navigateHome()\" style=\"margin:20px;cursor:pointer;color:#23d5ab\" name=\"close\"></ion-icon>\n\n      </div>\n\n      <div class=\"col-5 ion-text-center\">\n        <span class=\"seller\"><b>24hrs</b></span>\n        <!-- <img id=\"logo\" height=\"100px\" width=\"120px\" src=\"assets/logo.jpeg\" alt=\"\"> -->\n      </div>\n\n    </div>\n    <p style=\"font-size:20px;margin-left:25px;color: #5C5C5C;\"> Provide Your Contact Details :</p>\n\n    <div class=\"row\" >\n      <div class=\"col-4 ion-text-center\">\n        <lottie-player src=\"https://assets3.lottiefiles.com/packages/lf20_5zopqcem.json\" background=\"transparent\"\n        speed=\"1.5\" style=\"width:50%;margin-left:15px;\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" id=\"edit-field\" placeholder=\"Mobile number\" [(ngModel)]=\"mobilenumber\" >\n      </div>\n    </div>\n\n    <div class=\"row\" >\n      <div class=\"col-4 ion-text-center\">\n        <lottie-player src=\"https://assets8.lottiefiles.com/packages/lf20_bonw2hvu.json\" background=\"transparent\"\n        speed=\"1.5\" style=\"width:70%;margin-left:5px;\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <input type=\"text\" id=\"edit-field\" placeholder=\"Website link\" [(ngModel)]=\"website\">\n      </div>\n    </div>\n   \n\n      <div class=\"row\">\n        <div class=\"col-4\">\n          <lottie-player src=\"https://assets2.lottiefiles.com/private_files/lf30_f5ytlpiy.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:90%;\"  autoplay></lottie-player>\n        </div>\n        <div class=\"col-8\">\n          <input type=\"text\" id=\"edit-field\"  placeholder=\"Instagram id\" [(ngModel)]=\"instagram\">\n        </div>\n      </div>\n\n      <div class=\"row ion-text-center\" >\n        <div class=\"col-4\">\n          <lottie-player src=\"https://assets3.lottiefiles.com/private_files/lf30_vfaddvqs.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:60%;margin-left: 10px;\"  autoplay></lottie-player>\n        </div>\n        <div class=\"col-8\">\n          <input type=\"text\" id=\"edit-field\"  placeholder=\"Whatsapp number\" [(ngModel)]=\"whatsapp\">\n        </div>\n      </div>\n      \n      <div class=\"row\" >\n        <div class=\"col-4\">\n          <lottie-player src=\"https://assets4.lottiefiles.com/private_files/lf30_cwyafad8.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:90%;\"  autoplay></lottie-player>\n        </div>\n        <div class=\"col-8\">\n          <input type=\"text\" id=\"edit-field\" placeholder=\"youtube link\" [(ngModel)]=\"youtube\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4\">\n          <lottie-player src=\"https://assets7.lottiefiles.com/private_files/lf30_pb3we3yk.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:90%;\" autoplay></lottie-player>\n        </div>\n        <div class=\"col-8\">\n          <input type=\"text\" id=\"edit-field\"  placeholder=\"Facebook id\" [(ngModel)]=\"facebook\">\n        </div>\n      </div>\n\n      \n  <div class=\"mt-1\">\n    <div class=\"row ion-text-center mt-1\">\n      <div class=\"col-8 mt-1\">\n        <p style=\"font-size: 14px;\">\n          <svg style=\"padding-right: 10px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"26\" fill=\"currentColor\"\n            class=\"bi bi-truck\" viewBox=\"0 0 16 16\">\n            <path\n              d=\"M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\" />\n          </svg>\n          Delivery Avilability:\n        </p>\n      </div>\n      <div class=\"col-4 mt-1\">\n       <input type=\"checkbox\" (click)=\"deliveryStatus($event)\" value=\"null\" ng-checked={{Deliveryavailability}}>\n      </div>\n    </div>\n  </div>\n      <div class=\"row \">\n        <div class=\"col-7\">\n         <button (click)=\"navigateHome()\" type=\"button\" class=\"btn btn-success btn-sm skip-btn\">Skip</button>\n        </div>\n        <div class=\"col-5\">\n         <button (click)=\"sellerContact()\" type=\"button\" class=\"btn btn-success btn-sm update-btn\">Next</button>\n       </div>\n     </div>\n    </div>   \n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_social-media-details_social-media-details_module_ts-es5.js.map