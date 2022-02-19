(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_tab5_tab5_module_ts"], {
    /***/
    26672:
    /*!*********************************************!*\
      !*** ./src/app/tab5/tab5-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab5PageRoutingModule": function Tab5PageRoutingModule() {
          return (
            /* binding */
            _Tab5PageRoutingModule
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


      var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab5.page */
      32584);

      var routes = [{
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page
      }];

      var _Tab5PageRoutingModule = function Tab5PageRoutingModule() {
        _classCallCheck(this, Tab5PageRoutingModule);
      };

      _Tab5PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab5PageRoutingModule);
      /***/
    },

    /***/
    5184:
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab5PageModule": function Tab5PageModule() {
          return (
            /* binding */
            _Tab5PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab5.page */
      32584);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab5-routing.module */
      26672);

      var _Tab5PageModule = function Tab5PageModule() {
        _classCallCheck(this, Tab5PageModule);
      };

      _Tab5PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
          path: '',
          component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page
        }]), _tab5_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab5PageRoutingModule],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page]
      })], _Tab5PageModule);
      /***/
    },

    /***/
    32584:
    /*!***********************************!*\
      !*** ./src/app/tab5/tab5.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab5Page": function Tab5Page() {
          return (
            /* binding */
            _Tab5Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab5.page.html */
      66717);
      /* harmony import */


      var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab5.page.scss */
      84966);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
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

      var _Tab5Page = /*#__PURE__*/function () {
        function Tab5Page(router, http, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, Tab5Page);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
          this.InstagramToggle = " ";
          this.Deliveryavailability = true;
          this.PopupModel = false;
          this.userDetailstVisible = true;
          this.contactVisible = true;
          this.userdetail = atob(localStorage.getItem("24hrs-user-data"));
          this.parsedObj = JSON.parse(this.userdetail);
          route.params.subscribe(function (val) {
            _this.PopupModel = false;

            _this.DisplayUserDetails();

            console.log(_this.contact_number, _this.instagram, _this.whatsapp, _this.website);
          });
        }

        _createClass(Tab5Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "DisplayUserDetails",
          value: function DisplayUserDetails() {
            var _this2 = this;

            var obj = {
              store_name: this.userdetails.storename
            };
            this.http.post('/seller_store_details', obj).subscribe(function (response) {
              console.log(obj);

              if (response.success == "true") {
                console.log(response);
                _this2.store_number = response.records.store_number;
                _this2.contact_number = response.records.contact_number;
                _this2.instagram = response.records.instagram;
                _this2.whatsapp = response.records.whatsapp;
                _this2.website = response.records.website;
                _this2.facebook = response.records.facebook;
                _this2.store_address = response.records.store_address;
                _this2.youtube = response.records.youtube;
                _this2.delivery_availability = response.records.delivery_availability;

                if (_this2.instagram != "") {
                  _this2.InstagramToggle = true;
                  _this2.InstagramCheck = false;
                } else {
                  _this2.InstagramToggle = false;
                  _this2.InstagramCheck = true;
                }

                if (_this2.whatsapp != "") {
                  _this2.WhatsappToggle = true;
                  _this2.WhatsappCheck = false;
                } else {
                  _this2.WhatsappToggle = false;
                  _this2.WhatsappCheck = true;
                }
              }

              if (_this2.delivery_availability == true) {
                _this2.delivery_availability_toggle = true;
              } else {
                _this2.delivery_availability_toggle = false;
              }

              if (_this2.contact_number != "") {
                _this2.ContactNumberToggle = true;
                _this2.ContactNumberCheck = false;
              } else {
                _this2.ContactNumberToggle = false;
                _this2.ContactNumberCheck = true;
              }

              if (_this2.website != "") {
                _this2.WebsiteToggle = true;
                _this2.WebsiteCheck = false;
              } else {
                _this2.WebsiteToggle = false;
                _this2.WebsiteCheck = true;
              }

              if (_this2.youtube != "") {
                _this2.YoutubeToggle = true;
                _this2.YoutubeCheck = false;
              } else {
                _this2.YoutubeToggle = false;
                _this2.YoutubeCheck = true;
              }

              if (_this2.facebook != "") {
                _this2.FacebookToggle = true;
                _this2.Facebookcheck = false;
              } else {
                _this2.FacebookToggle = false;
                _this2.Facebookcheck = true;
              }
            }, function (error) {
              console.log(error);
            });
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
          key: "support",
          value: function support() {
            this.router.navigate(['/support']);
          }
        }, {
          key: "backToprivious",
          value: function backToprivious() {
            this.PopupModel = false;
          }
        }, {
          key: "popupModelOpen",
          value: function popupModelOpen() {
            this.PopupModel = true;
            this.userDetailstVisible = true;
            this.contactVisible = false;
          }
        }, {
          key: "contactEdit",
          value: function contactEdit() {
            this.PopupModel = true;
            this.contactVisible = true;
            this.userDetailstVisible = false;
          }
        }, {
          key: "updateProfile",
          value: function updateProfile() {
            var _this3 = this;

            var contactData = {
              tbid: this.parsedObj.id,
              website: this.website,
              whatsapp: this.whatsapp,
              instagram: this.instagram,
              facebook: this.facebook,
              youtube: this.youtube,
              contact_number: this.contact_number,
              delivery_availability: this.delivery_availability
            };
            console.log(contactData);
            this.http.post('/seller_contact', contactData).subscribe(function (response) {
              if (response.success == "true") {
                console.log(response);

                _this3.DisplayUserDetails();

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

                _this3.router.navigate(['/tabs']);
              }

              _this3.backToprivious();

              _this3.router.navigate(['/tabs/tab5']);
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return Tab5Page;
      }();

      _Tab5Page.ctorParameters = function () {
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

      _Tab5Page = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab5',
        template: _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab5Page);
      /***/
    },

    /***/
    84966:
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  color: #5C5C5C;\n}\n\n.myproduct-div {\n  position: relative;\n  left: 2%;\n  background-color: #fff;\n  border: 1px solid #ebe6e6;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n}\n\n.support-btn {\n  border-radius: 5px !important;\n  background: transparent;\n  margin: 10px;\n  width: 50%;\n  text-align: center;\n  border: 1px solid #ebe6e6;\n  font-size: 12px !important;\n  margin-top: 17% !important;\n  color: #fff;\n}\n\nimg {\n  border-radius: 25px;\n  margin: 10px;\n}\n\n.name {\n  font-size: 16px;\n  color: #5C5C5C;\n  text-align: left;\n  font-style: bold;\n  font-weight: 550;\n}\n\n.edit-name {\n  font-size: 13px;\n  margin-top: 5px;\n}\n\ninput[type=text] {\n  font-size: 13px;\n  margin-top: -12px;\n  margin-left: -20px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #23d5ab;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 2px solid #23d5ab !important;\n  box-shadow: 0 0 2px #e9f3ff;\n}\n\n.error-message {\n  font-size: 12px;\n  margin-left: 25px;\n}\n\n#edit {\n  cursor: pointer;\n}\n\n#social-icon {\n  margin-bottom: 5px;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%) !important;\n  color: #fff;\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n\nion-toggle {\n  --handle-box-shadow: 0 3px 12px #23d5ab, 0 3px 1px #23a6d5;\n  overflow: visible;\n  contain: none;\n  color: red !important;\n}\n\nion-badge {\n  border-radius: 3px !important;\n  margin-left: -10px !important;\n}\n\n#card {\n  position: absolute;\n  height: 150%;\n  width: 1500px !important;\n  margin-left: -10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  margin-top: -285px !important;\n  z-index: 5;\n}\n\n#modal {\n  position: fixed;\n  top: 18% !important;\n  margin: 5%;\n  background-color: #fff;\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  width: 94% !important;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes example {\n  from {\n    top: 0px;\n  }\n  to {\n    top: 200px;\n    background-color: #fff;\n  }\n}\n\n@keyframes example {\n  from {\n    top: 0px;\n  }\n  to {\n    top: 200px;\n    background-color: #fff;\n  }\n}\n\n.top-container {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  height: 200px;\n}\n\n.profile {\n  position: absolute;\n  width: 155px;\n  height: 150px;\n  position: absolute;\n  top: -5%;\n  left: -3%;\n  margin-top: 50%;\n  margin-left: 6%;\n  border: 6px solid #ffffff;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n.editprofile {\n  width: 155px;\n  height: 150px;\n  border-radius: 5%;\n}\n\n.upload-proff {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff !important;\n}\n\n@media (max-width: 300px) {\n  .name {\n    font-size: 15px !important;\n  }\n\n  .profile {\n    width: 135px !important;\n    height: 130px !important;\n    position: absolute;\n    top: 55% !important;\n    left: -3%;\n    margin-top: 50%;\n    margin-left: 6%;\n    border: 6px solid #ffffff;\n    border-radius: 50%;\n    z-index: 1;\n  }\n}\n\n@media (max-width: 325px) {\n  .upload-proof {\n    margin-top: 10px !important;\n    background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n    color: #fff;\n  }\n\n  .profile {\n    width: 155px;\n    height: 150px;\n    position: absolute;\n    top: -5% !important;\n    left: -3%;\n    margin-top: 50%;\n    margin-left: 6%;\n    border: 6px solid #ffffff;\n    border-radius: 50%;\n    z-index: 1;\n  }\n}\n\n@media (max-width: 420px) {\n  .upload-proof {\n    margin-top: 25px !important;\n    background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n    color: #fff;\n  }\n\n  .profile {\n    width: 155px;\n    height: 150px;\n    position: absolute;\n    top: -10%;\n    left: -3%;\n    margin-top: 50%;\n    margin-left: 6%;\n    border: 6px solid #ffffff;\n    border-radius: 50%;\n    z-index: 1;\n  }\n}\n\n@media (min-width: 540px) {\n  .upload-proof {\n    margin-top: 25px !important;\n    background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n    color: #fff;\n  }\n\n  .profile {\n    width: 155px;\n    height: 150px;\n    position: absolute;\n    top: -17%;\n    left: -3%;\n    margin-top: 50%;\n    margin-left: 6%;\n    border: 6px solid #ffffff;\n    border-radius: 50%;\n    z-index: 1;\n  }\n}\n\n@media (min-width: 768px) {\n  .profile {\n    width: 155px;\n    height: 150px;\n    position: absolute;\n    top: -26% !important;\n    left: -3%;\n    margin-top: 50%;\n    margin-left: 6%;\n    border: 6px solid #ffffff;\n    border-radius: 50%;\n    z-index: 1;\n  }\n}\n\n@media (min-width: 1024px) {\n  .upload-proof {\n    margin-top: 75px !important;\n    background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n    color: #fff;\n  }\n\n  .profile {\n    width: 155px;\n    height: 150px;\n    position: absolute;\n    top: -36% !important;\n    left: -3%;\n    margin-top: 50%;\n    margin-left: 6%;\n    border: 6px solid #ffffff;\n    border-radius: 50%;\n    z-index: 1;\n  }\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,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OERBQUE7SUFHQSxXQUFBO0VBbkJGOztFQXFCQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFFQSxrQkFBQTtJQUNBLFVBQUE7RUFuQkY7QUFDRjs7QUFzQkE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsOERBQUE7SUFHQSxXQUFBO0VBdEJGOztFQXdCQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFFQSxrQkFBQTtJQUNBLFVBQUE7RUF0QkY7QUFDRjs7QUF5QkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQkFBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLHlCQUFBO0lBRUEsa0JBQUE7SUFDQSxVQUFBO0VBeEJGO0FBQ0Y7O0FBMkJBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLDhEQUFBO0lBR0EsV0FBQTtFQTNCRjs7RUE2QkE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7SUFDQSxTQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSx5QkFBQTtJQUVBLGtCQUFBO0lBQ0EsVUFBQTtFQTNCRjtBQUNGOztBQStCQTtFQUNFLGlDQUFBO0VBSUEsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFoQ0Y7O0FBaUNFO0VBQ0ksYUFBQTtBQS9CTiIsImZpbGUiOiJ0YWI1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGNvbG9yOiM1QzVDNUM7XG59XG4ubXlwcm9kdWN0LWRpdntcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbmxlZnQ6MiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjoxcHggc29saWQgI2ViZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2ViZTZlNjtcbiAgd2lkdGg6OTYlICFpbXBvcnRhbnQ7XG59XG4uc3VwcG9ydC1idG57XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOjEwcHg7XG4gIHdpZHRoOjUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6MXB4IHNvbGlkICNlYmU2ZTY7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOjE3JSAhaW1wb3J0YW50O1xuICBjb2xvcjojZmZmO1xuIFxufVxuaW1ne1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW46MTBweDtcbn1cbi5uYW1le1xuZm9udC1zaXplOiAxNnB4O1xuY29sb3I6ICM1QzVDNUM7XG50ZXh0LWFsaWduOiBsZWZ0O1xuZm9udC1zdHlsZTogYm9sZDtcbmZvbnQtd2VpZ2h0OiA1NTA7XG59XG5cblxuLmVkaXQtbmFtZXtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4vLyAjZWRpdC1maWVsZHtcbi8vICAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4vLyAgICAgd2lkdGg6MTAwJTtcbi8vICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4vLyAgICAgZm9udC1zaXplOiAxMXB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gfVxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyM2Q1YWI7XG59XG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOjJweCBzb2xpZCAjMjNkNWFiICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggI2U5ZjNmZjtcbn1cblxuLmVycm9yLW1lc3NhZ2V7XG5mb250LXNpemU6IDEycHg7XG5tYXJnaW4tbGVmdDogMjVweDtcblxufVxuXG4jZWRpdHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3NvY2lhbC1pY29ue1xubWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udXBkYXRlLWJ0bntcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gIDAlLCAjMjNkNWFiXG4gIDEwMCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiNmZmY7XG4gIGhlaWdodDoyNXB4O1xuICB3aWR0aDoyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW46MTVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9nZ2xlIHtcbi0taGFuZGxlLWJveC1zaGFkb3c6IDAgM3B4IDEycHggIzIzZDVhYiwgMCAzcHggMXB4ICMyM2E2ZDU7XG5vdmVyZmxvdzogdmlzaWJsZTtcbmNvbnRhaW46IG5vbmU7XG5jb2xvcjpyZWQgIWltcG9ydGFudDtcblxufVxuaW9uLWJhZGdle1xuYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG5tYXJnaW4tbGVmdDogLTEwcHggIWltcG9ydGFudDtcblxufVxuXG4jY2FyZHtcbnBvc2l0aW9uOmFic29sdXRlO1xuaGVpZ2h0OjE1MCU7XG53aWR0aDoxNTAwcHggIWltcG9ydGFudDtcbm1hcmdpbi1sZWZ0OiAtMTBweDtcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbmJvcmRlcjoxcHggc29saWQgI2ViZTZlNjtcbmJvcmRlci1yYWRpdXM6IDVweDtcbmJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjY2NjO1xubWFyZ2luLXRvcDogLTI4NXB4ICFpbXBvcnRhbnQ7XG56LWluZGV4OiA1O1xufVxuI21vZGFse1xucG9zaXRpb246Zml4ZWQ7XG50b3A6MTglICFpbXBvcnRhbnQ7XG5tYXJnaW46NSU7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuYm9yZGVyOjFweCBzb2xpZCAjZWJlNmU2O1xuYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNjY2M7XG53aWR0aDo5NCUgIWltcG9ydGFudDtcbmFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xuYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsgIFxuYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG5cbn1cbkBrZXlmcmFtZXMgZXhhbXBsZSB7XG5mcm9tIHt0b3A6IDBweDt9XG50byB7dG9wOiAyMDBweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjt9XG59XG5cblxuLnRvcC1jb250YWluZXJ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gIDAlLCAjMjNkNWFiXG4gIDEwMCUpO1xuICBoZWlnaHQ6MjAwcHg7XG5cbn1cbi5wcm9maWxle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOjE1NXB4O1xuICBoZWlnaHQ6MTUwcHg7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6LTUlO1xuICBsZWZ0Oi0zJTtcbiAgbWFyZ2luLXRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDo2JTtcbiAgYm9yZGVyOiA2cHggc29saWQgI2ZmZmZmZlxuICA7XG4gIGJvcmRlci1yYWRpdXM6NTAlO1xuICB6LWluZGV4OiAxO1xuXG59XG5cbi5lZGl0cHJvZmlsZXtcbiAgd2lkdGg6MTU1cHg7XG4gIGhlaWdodDoxNTBweDtcbiAgYm9yZGVyLXJhZGl1czo1JTtcbn1cblxuLnVwbG9hZC1wcm9mZntcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgMCUsICMyM2Q1YWJcbiAgMTAwJSk7XG4gIGNvbG9yOiNmZmYgIWltcG9ydGFudCA7XG4gXG59XG4gIFxuXG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpICB7XG4gIC5uYW1le1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIFxuICB9XG4gXG4gIC5wcm9maWxle1xuICAgIHdpZHRoOjEzNXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjEzMHB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjU1JSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6LTMlO1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDo2JTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjZmZmZmZmXG4gICAgO1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIHotaW5kZXg6IDE7XG4gIFxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzI1cHgpICB7XG4gIFxuICAudXBsb2FkLXByb29me1xuICAgIG1hcmdpbi10b3A6MTBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gIDAlLCAjMjNkNWFiXG4gIDEwMCUpO1xuICAgIGNvbG9yOiNmZmY7XG4gIH1cbiAgLnByb2ZpbGV7XG4gICAgd2lkdGg6MTU1cHg7XG4gICAgaGVpZ2h0OjE1MHB4O1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDotNSUgIWltcG9ydGFudDtcbiAgICBsZWZ0Oi0zJTtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6NiU7XG4gICAgYm9yZGVyOiA2cHggc29saWQgI2ZmZmZmZlxuICAgIDtcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICB6LWluZGV4OiAxO1xuICBcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSAge1xuICAudXBsb2FkLXByb29me1xuICAgIG1hcmdpbi10b3A6MjVweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gICAgMCUsICMyM2Q1YWJcbiAgICAxMDAlKTtcbiAgICBjb2xvcjojZmZmO1xuICB9XG4gIC5wcm9maWxle1xuICAgIHdpZHRoOjE1NXB4O1xuICAgIGhlaWdodDoxNTBweDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6LTEwJTtcbiAgICBsZWZ0Oi0zJTtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6NiU7XG4gICAgYm9yZGVyOiA2cHggc29saWQgI2ZmZmZmZlxuICAgIDtcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICB6LWluZGV4OiAxO1xuICBcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU0MHB4KSAge1xuICAudXBsb2FkLXByb29me1xuICAgIG1hcmdpbi10b3A6MjVweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gICAgMCUsICMyM2Q1YWJcbiAgICAxMDAlKTtcbiAgICBjb2xvcjojZmZmO1xuICB9XG4gIC5wcm9maWxle1xuICAgIHdpZHRoOjE1NXB4O1xuICAgIGhlaWdodDoxNTBweDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6LTE3JTtcbiAgICBsZWZ0Oi0zJTtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6NiU7XG4gICAgYm9yZGVyOiA2cHggc29saWQgI2ZmZmZmZlxuICAgIDtcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICB6LWluZGV4OiAxO1xuICBcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSAge1xuICAucHJvZmlsZXtcbiAgICB3aWR0aDoxNTVweDtcbiAgICBoZWlnaHQ6MTUwcHg7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOi0yNiUgIWltcG9ydGFudDtcbiAgICBsZWZ0Oi0zJTtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6NiU7XG4gICAgYm9yZGVyOiA2cHggc29saWQgI2ZmZmZmZlxuICAgIDtcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICB6LWluZGV4OiAxO1xuICBcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgIHtcbiAgLnVwbG9hZC1wcm9vZntcbiAgICBtYXJnaW4tdG9wOjc1cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIzYTZkNVxuICAwJSwgIzIzZDVhYlxuICAxMDAlKTtcbiAgICBjb2xvcjojZmZmO1xuICB9XG4gIC5wcm9maWxle1xuICAgIHdpZHRoOjE1NXB4O1xuICAgIGhlaWdodDoxNTBweDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6LTM2JSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6LTMlO1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDo2JTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjZmZmZmZmXG4gICAgO1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIHotaW5kZXg6IDE7XG4gIFxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcbiAgLy8gMCUsICNkMWYyZTdcbiAgLy8gMTAwJSkgIWltcG9ydGFudDtcbiAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdzogYXV0bztcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    66717:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"top-container\">\n    <div class=\"row\">\n      <div class=\"col-6 mt-1\">\n        <ion-buttons slot=\"start\">\n          <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n      </div>\n      <div class=\"col-6 ion-text-center mt-1\">\n        <button type=\"button\" (click)=\"support()\" class=\"btn btn-primary btn-sm  support-btn \">Support </button>\n      </div>\n    </div>\n\n    <div class=\"row \">\n      <div class=\"col-6\">\n        <img class=\"profile\" src=\"assets/sparrow.JPG\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div style=\"width:100%;text-align: center;\">\n    <div class=\"myproduct-div mt-1 \">\n\n      <!-- <div class=\"row\">\n        <div class=\"col-8\">\n          <h4 style=\"text-align: left;margin:6%;margin-top:7%; color: #5C5C5C;\"> <b>My Profile</b></h4>\n        </div>\n        <div class=\"col-4\">\n          <button type=\"button\" (click)=\"support()\" class=\"btn btn-primary  support-btn \">Support </button>\n        </div>\n      </div> -->\n\n      <div class=\"row mt-3\">\n        <div class=\"col-4 ion-text-center\">\n\n        </div>\n        <div class=\"col-12 ion-text-right\" style=\"margin-top: -10px;\">\n          <svg (click)=\"popupModelOpen()\" style=\"margin: 5px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"18\"\n            fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n            <path\n              d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\n            <path fill-rule=\"evenodd\"\n              d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\n          </svg>\n        </div>\n      </div>\n\n\n      <div class=\"row mt-4\" style=\"padding: 10px;\">\n        <div class=\"col-6\">\n          <p class=\"name\">Username :</p>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" id=\"edit-field\" disabled [value]=\"userdetails.storename\">\n        </div>\n\n        <div class=\"col-6\">\n          <p class=\"name\">Store name:</p>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" id=\"edit-field\" disabled value=\"Dhya\">\n        </div>\n\n        <div class=\"col-6\">\n          <p class=\"name\">Email:</p>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" id=\"edit-field\" disabled [value]=\"userdetails.email\">\n        </div>\n\n        <div class=\"col-6\">\n          <p class=\"name\">Store number :</p>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" id=\"edit-field\" [(ngModel)]=\"store_number\">\n        </div>\n\n        <div class=\"col-6\">\n          <p class=\"name\">Mobile number :</p>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" id=\"edit-field\"  [(ngModel)]=\"contact_number\">\n        </div>\n\n        <div class=\"col-6\">\n          <p class=\"name\">Store location :</p>\n        </div>\n        <div class=\"col-6\">\n          <input type=\"text\" id=\"edit-field\" placeholder=\"coimbatore\" [(ngModel)]=\"store_address\">\n        </div>\n\n\n\n        <div class=\"row\" style=\"padding-left: 10px;\">\n          <div class=\"col-6\">\n            <p class=\"name mt-2\">Id Proof:</p>\n          </div>\n          <div class=\"col-3\">\n            <img\n              src=\"https://media.istockphoto.com/vectors/format-file-isolated-on-white-background-vector-id1226002079?b=1&k=20&m=1226002079&s=170667a&w=0&h=QyCTGPkTl8uZDjpFH8TJMYigtx2JmJW9EFCB-xFJ044=\"\n              alt=\"\">\n          </div>\n          <div class=\"col-3 ion-text-right\">\n            <lottie-player src=\"https://assets3.lottiefiles.com/packages/lf20_uywti8w5.json\" background=\"transparent\"\n              speed=\"1.5\" style=\"width:80%;margin-left:25px;\" autoplay></lottie-player>\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"padding-left: 10px;\">\n          <div class=\"col-6\">\n            <p class=\"name mt-2\">Address Proof:</p>\n          </div>\n          <div class=\"col-3\">\n            <img\n              src=\"https://media.istockphoto.com/vectors/format-file-isolated-on-white-background-vector-id1226002079?b=1&k=20&m=1226002079&s=170667a&w=0&h=QyCTGPkTl8uZDjpFH8TJMYigtx2JmJW9EFCB-xFJ044=\"\n              alt=\"\">\n          </div>\n          <div class=\"col-3 ion-text-right\">\n            <lottie-player src=\"https://assets5.lottiefiles.com/packages/lf20_slGFhN.json\" background=\"transparent\"\n              speed=\"1.5\" style=\"width:80%;margin-left:25px;\" autoplay></lottie-player>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"myproduct-div mt-1\">\n    <div class=\"row ion-text-center mt-1\">\n      <div class=\"col-8 mt-1\">\n        <p style=\"font-size: 14px;\">\n          <svg style=\"padding-right: 10px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"26\" fill=\"currentColor\"\n            class=\"bi bi-truck\" viewBox=\"0 0 16 16\">\n            <path\n              d=\"M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\" />\n          </svg>\n          Delivery Avilability:\n        </p>\n      </div>\n      <div class=\"col-4 \">\n        <ion-toggle  color=\"primary\" style=\"padding-right: 15px !important; \" checked=\"{{delivery_availability_toggle}}\"></ion-toggle>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"myproduct-div mt-1 mb-3\">\n    <p style=\"font-size:16px;margin-left:10px;margin-top:10px; color: #5C5C5C;\">Select how customers can reach you :\n      Edit\n      <svg (click)=\"contactEdit()\"  id=\"edit\" style=\"margin: 5px;\" width=\"20\" height=\"15\" viewBox=\"0 0 20 17\" fill=\"none\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M0 13.6571V16.5278C0 16.7923 0.244411 17 0.555478 17H3.93279C4.07721 17 4.22164 16.9528 4.32162 16.8584L16.4533 6.55589L12.2872 3.01472L0.166644 13.3172C0.0555479 13.4116 0 13.5249 0 13.6571ZM19.675 3.81739C20.1083 3.4491 20.1083 2.85419 19.675 2.4859L17.0754 0.276212C16.6421 -0.0920705 15.9422 -0.0920705 15.509 0.276212L13.4759 2.0043L17.642 5.54548L19.675 3.81739Z\"\n          fill=\"black\" />\n      </svg>\n    </p>\n    <div class=\"row\">\n      <div class=\"col-2 ion\">\n        <lottie-player src=\"https://assets3.lottiefiles.com/packages/lf20_5zopqcem.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:100%; margin-left:15px\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <p style=\"margin-top:12px;margin-left:20%;font-size: 15px; color:#5C5C5C;\">{{contact_number}}</p>\n        <p class=\"error-message\" *ngIf=\"ContactNumberCheck\">Contact Number Not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px\" checked=\"{{ContactNumberToggle}}\" color=\"primary\"></ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <lottie-player src=\"https://assets5.lottiefiles.com/packages/lf20_wN134d.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:100%; margin-left:15px\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <p style=\"margin-top:12px;margin-left:20%;font-size: 15px;color:#5C5C5C;\">{{instagram}}</p>\n        <p class=\"error-message\" *ngIf=\"InstagramCheck\">Instagram Not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px\" color=\"primary\" checked=\"{{InstagramToggle}}\"></ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\" >\n      <div class=\"col-2\">\n        <lottie-player src=\"https://assets7.lottiefiles.com/datafiles/0t1ESTur6hOdome/data.json\"\n          background=\"transparent\" speed=\"1.5\" style=\"width:100%; margin-left:15px\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <p style=\"margin-top:12px;margin-left:20%;font-size: 15px;color:#5C5C5C;\">{{whatsapp}}</p>\n        <p class=\"error-message\" *ngIf=\"WhatsappCheck\">Whatsapp Not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px\" checked=\"{{WhatsappToggle}}\" color=\"primary\"></ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <lottie-player src=\"https://assets5.lottiefiles.com/private_files/lf30_e9pt4vym.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:100%; margin-left:15px\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <p style=\"margin-top:12px;margin-left:20%;font-size: 15px;color:#5C5C5C;\"> {{website}}</p>\n        <p class=\"error-message\" *ngIf=\"WebsiteCheck\">Website Link not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px\" checked=\"{{WebsiteToggle}}\" color=\"primary\"></ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <lottie-player src=\"https://assets9.lottiefiles.com/packages/lf20_xtuje6sh.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:100%; margin-left:15px\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <p style=\"margin-top:12px;margin-left:20%;font-size: 15px;color:#5C5C5C;\">{{youtube}}</p>\n        <p class=\"error-message\" *ngIf=\"YoutubeCheck\">Youtube  not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px\" checked=\"{{YoutubeToggle}}\" color=\"primary\"></ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row mb-2\">\n      <div class=\"col-2\">\n        <lottie-player src=\"https://assets6.lottiefiles.com/private_files/lf30_hazkrlss.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:100%; margin-left:15px\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-8\">\n        <p style=\"margin-top:12px;margin-left:20%;font-size: 15px;color:#5C5C5C;\"> {{facebook}}</p>\n        <p class=\"error-message\" *ngIf=\"Facebookcheck\">Facebook Not Availabale</p>\n      </div>\n      <div class=\"col-2 \">\n        <ion-toggle style=\"margin-left:-25px\" checked=\"{{FacebookToggle}}\" color=\"primary\" ></ion-toggle>\n      </div>\n    </div>\n\n\n  </div>\n\n  <div class=\"card\" *ngIf=\"PopupModel\" style=\"margin-top: 20px;\" id=\"card\">\n    <div class=\"row\" id=\"modal\">\n      <div class=\"hidden\">\n        <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n          <svg (click)=\"backToprivious()\" style=\"margin-top:-8px;cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"16\" height=\"16\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n            <path fill-rule=\"evenodd\"\n              d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n          </svg>\n        </div>\n        <h5 style=\"text-align: center; color: #5C5C5C;margin-top: -20px;\"> <b>Edit Here:</b></h5>\n\n\n        <div *ngIf=\"userDetailstVisible\">\n          <div class=\"row\" style=\"padding-left: 10px;\">\n            <div class=\"col-12 ion-text-center\">\n              <img class=\"editprofile\" src=\"assets/sparrow.JPG\" alt=\"\">\n            </div>\n            <div class=\"col-6\">\n              <p class=\"edit-name\">Mobile number :</p>\n            </div>\n            <div class=\"col-6\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"userdetails.mobile\">\n            </div>\n          </div>\n\n          <div class=\"row\" style=\"padding-left: 10px;\">\n            <div class=\"col-6\">\n              <p class=\"edit-name\">Email:</p>\n            </div>\n            <div class=\"col-6\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"userdetails.email\">\n            </div>\n          </div>\n\n          <!-- <div class=\"row\" style=\"padding-left: 10px;\">\n            <div class=\"col-6\">\n              <p class=\"edit-name\">Password:</p>\n            </div>\n            <div class=\"col-6\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"userdetails.username\">\n            </div>\n          </div> -->\n\n          <div class=\"row\" style=\"padding-left: 10px;\">\n            <div class=\"col-6\">\n              <p class=\"edit-name\">Store Location :</p>\n            </div>\n            <div class=\"col-6\">\n              <input type=\"text\" id=\"edit-field\" value=\"Peelamedu\">\n\n              <!-- <svg style=\"margin-left: -5px;margin-top:5px\" width=\"30\" height=\"36\" viewBox=\"0 0 22 28\" fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\">\n                <g filter=\"url(#filter0_d_1176:710)\">\n                  <path\n                    d=\"M17 6C17 4.4087 16.3679 2.88254 15.2426 1.75732C14.1174 0.632106 12.5913 0 11 0C9.4087 0 7.88258 0.632106 6.75736 1.75732C5.63214 2.88254 5 4.4087 5 6C5 10.5 11 17 11 17C11 17 17 10.5 17 6ZM9 6C9 5.60444 9.1173 5.21781 9.33706 4.88892C9.55682 4.56002 9.86918 4.3036 10.2346 4.15222C10.6001 4.00085 11.0022 3.96128 11.3902 4.03845C11.7781 4.11562 12.1345 4.30611 12.4142 4.58582C12.6939 4.86552 12.8844 5.2219 12.9616 5.60986C13.0387 5.99783 12.9991 6.39993 12.8478 6.76538C12.6964 7.13083 12.44 7.4432 12.1111 7.66296C11.7822 7.88273 11.3956 8 11 8C10.4701 7.99842 9.96227 7.78721 9.58754 7.41248C9.21281 7.03775 9.00158 6.52995 9 6ZM4 18V20H18V18H4Z\"\n                    fill=\"white\" />\n                  <path\n                    d=\"M11 16.2471C10.8514 16.0761 10.6636 15.8562 10.4477 15.5953C9.89187 14.9237 9.15161 13.9828 8.41236 12.9047C7.67214 11.8252 6.93926 10.6173 6.39298 9.41093C5.84386 8.19829 5.5 7.02331 5.5 6C5.5 4.54131 6.07946 3.14233 7.11091 2.11088C8.14236 1.07943 9.5413 0.5 11 0.5C12.4587 0.5 13.8576 1.07943 14.8891 2.11088C15.9205 3.14233 16.5 4.54131 16.5 6C16.5 7.02331 16.1561 8.19829 15.607 9.41093C15.0607 10.6173 14.3279 11.8252 13.5876 12.9047C12.8484 13.9828 12.1081 14.9237 11.5523 15.5953C11.3364 15.8562 11.1486 16.0761 11 16.2471ZM8.5 6L8.5 6.00149C8.50198 6.66353 8.76585 7.29789 9.23398 7.76603C9.70212 8.23417 10.3365 8.49802 10.9985 8.5H11C11.4944 8.5 11.9778 8.35341 12.3889 8.0787C12.8001 7.80399 13.1205 7.41353 13.3097 6.95672C13.4989 6.49991 13.5484 5.99727 13.452 5.51232C13.3555 5.02737 13.1174 4.5819 12.7678 4.23226C12.4181 3.88263 11.9727 3.64452 11.4877 3.54806C11.0028 3.4516 10.5001 3.50105 10.0433 3.69028C9.58643 3.87952 9.196 4.20005 8.92132 4.61113C8.64663 5.02224 8.5 5.50553 8.5 6ZM17.5 19.5H4.5V18.5H17.5V19.5Z\"\n                    stroke=\"black\" />\n                </g>\n                <defs>\n                  <filter id=\"filter0_d_1176:710\" x=\"0\" y=\"0\" width=\"22\" height=\"28\" filterUnits=\"userSpaceOnUse\"\n                    color-interpolation-filters=\"sRGB\">\n                    <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n                    <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n                      result=\"hardAlpha\" />\n                    <feOffset dy=\"4\" />\n                    <feGaussianBlur stdDeviation=\"2\" />\n                    <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\" />\n                    <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1176:710\" />\n                    <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1176:710\" result=\"shape\" />\n                  </filter>\n                </defs>\n              </svg> -->\n\n            </div>\n          </div>\n\n          <div style=\"width: 100%; text-align: center;\">\n            <button type=\"button\" (click)=\"updateProfile()\" class=\"btn btn-success btn-sm update-btn\">Update</button>\n          </div>\n        </div>\n\n        <div *ngIf=\"contactVisible\">\n          \n          <div class=\"row\" id=\"social-icon\">\n            <div class=\"col-5\">\n              <lottie-player src=\"https://assets3.lottiefiles.com/packages/lf20_5zopqcem.json\" background=\"transparent\"\n                speed=\"1.5\" style=\"width:30%; margin-left:25px\" autoplay></lottie-player>\n      \n            </div>\n            <div class=\"col-7\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"contact_number\" [(ngModel)]=\"contact_number\">\n            </div>\n            \n          </div>\n      \n          <div class=\"row\" id=\"social-icon\" >\n            <div class=\"col-5\">\n              <lottie-player src=\"https://assets5.lottiefiles.com/packages/lf20_wN134d.json\" background=\"transparent\"\n                speed=\"1.5\" style=\"width:30%; margin-left:25px\" autoplay></lottie-player>\n            </div>\n            <div class=\"col-7\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"instagram\" [(ngModel)]=\"instagram\">\n            </div>\n          </div>\n      \n          <div class=\"row\" id=\"social-icon\">\n            <div class=\"col-5\">\n              <lottie-player src=\"https://assets7.lottiefiles.com/datafiles/0t1ESTur6hOdome/data.json\"\n                background=\"transparent\" speed=\"1.5\" style=\"width:30%; margin-left:25px\" autoplay></lottie-player>\n            </div>\n            <div class=\"col-7\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"whatsapp\" [(ngModel)]=\"whatsapp\">\n            </div>\n          </div>\n      \n          <div class=\"row\" id=\"social-icon\">\n            <div class=\"col-5\">\n              <lottie-player src=\"https://assets5.lottiefiles.com/private_files/lf30_e9pt4vym.json\" background=\"transparent\"\n                speed=\"1.5\" style=\"width:30%; margin-left:25px\" autoplay></lottie-player>\n            </div>\n            <div class=\"col-7\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"website\" [(ngModel)]=\"website\">\n            </div>\n          </div>\n      \n          <div class=\"row\" id=\"social-icon\">\n            <div class=\"col-5\">\n              <lottie-player src=\"https://assets9.lottiefiles.com/packages/lf20_xtuje6sh.json\" background=\"transparent\"\n                speed=\"1.5\" style=\"width:30%; margin-left:25px\" autoplay></lottie-player>\n            </div>\n            <div class=\"col-7\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"youtube\" [(ngModel)]=\"youtube\">\n            </div>\n          </div>\n      \n          <div class=\"row\" id=\"social-icon\">\n            <div class=\"col-5\">\n              <lottie-player src=\"https://assets6.lottiefiles.com/private_files/lf30_hazkrlss.json\" background=\"transparent\"\n                speed=\"1.5\" style=\"width:30%; margin-left:25px\" autoplay></lottie-player>\n            </div>\n            <div class=\"col-7\">\n              <input type=\"text\" id=\"edit-field\" [value]=\"facebook\" [(ngModel)]=\"facebook\">\n            </div>\n          </div>\n      \n          <div class=\"mt-1\">\n            <div class=\"row ion-text-center mt-1\">\n              <div class=\"col-8 mt-1\">\n                <p style=\"font-size: 14px;\">\n                  <svg style=\"padding-right: 10px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"26\" fill=\"currentColor\"\n                    class=\"bi bi-truck\" viewBox=\"0 0 16 16\">\n                    <path\n                      d=\"M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\" />\n                  </svg>\n                  Delivery Avilability:\n                </p>\n              </div>\n              <div class=\"col-4 mt-1\">\n               <input type=\"checkbox\" (click)=\"deliveryStatus($event)\" value=\"null\" ng-checked={{Deliveryavailability}}>\n              </div>\n            </div>\n          </div>\n          <div style=\"width: 100%; text-align: center;\">\n            <button type=\"button\" (click)=\"updateProfile()\" class=\"btn btn-success btn-sm update-btn\">Update</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab5_tab5_module_ts-es5.js.map