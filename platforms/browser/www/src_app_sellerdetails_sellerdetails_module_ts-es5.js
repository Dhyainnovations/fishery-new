(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_sellerdetails_sellerdetails_module_ts"], {
    /***/
    92779:
    /*!***************************************************************!*\
      !*** ./src/app/sellerdetails/sellerdetails-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SellerdetailsPageRoutingModule": function SellerdetailsPageRoutingModule() {
          return (
            /* binding */
            _SellerdetailsPageRoutingModule
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


      var _sellerdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sellerdetails.page */
      51783);

      var routes = [{
        path: '',
        component: _sellerdetails_page__WEBPACK_IMPORTED_MODULE_0__.SellerdetailsPage
      }];

      var _SellerdetailsPageRoutingModule = function SellerdetailsPageRoutingModule() {
        _classCallCheck(this, SellerdetailsPageRoutingModule);
      };

      _SellerdetailsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SellerdetailsPageRoutingModule);
      /***/
    },

    /***/
    76516:
    /*!*******************************************************!*\
      !*** ./src/app/sellerdetails/sellerdetails.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SellerdetailsPageModule": function SellerdetailsPageModule() {
          return (
            /* binding */
            _SellerdetailsPageModule
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


      var _sellerdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sellerdetails-routing.module */
      92779);
      /* harmony import */


      var _sellerdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sellerdetails.page */
      51783);

      var _SellerdetailsPageModule = function SellerdetailsPageModule() {
        _classCallCheck(this, SellerdetailsPageModule);
      };

      _SellerdetailsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _sellerdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.SellerdetailsPageRoutingModule],
        declarations: [_sellerdetails_page__WEBPACK_IMPORTED_MODULE_1__.SellerdetailsPage]
      })], _SellerdetailsPageModule);
      /***/
    },

    /***/
    51783:
    /*!*****************************************************!*\
      !*** ./src/app/sellerdetails/sellerdetails.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SellerdetailsPage": function SellerdetailsPage() {
          return (
            /* binding */
            _SellerdetailsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_sellerdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./sellerdetails.page.html */
      69762);
      /* harmony import */


      var _sellerdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sellerdetails.page.scss */
      22912);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _SellerdetailsPage = /*#__PURE__*/function () {
        function SellerdetailsPage(router, http, route) {
          var _this = this;

          _classCallCheck(this, SellerdetailsPage);

          this.router = router;
          this.http = http;
          this.categoryList = [];
          this.selectedFile = null;
          this.selectedaddressproof = null;
          this.listOfCat = [];
          this.idproof = null;
          this.addressproof = null;
          this.userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
          this.store_name = this.userdetails.storename;
          route.params.subscribe(function (val) {
            _this.getCategoryList();

            _this.list();
          });
        }

        _createClass(SellerdetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "list",
          value: function list() {
            var _this2 = this;

            this.http.get('/read_all_category').subscribe(function (response) {
              _this2.listOfCat = response.records;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "navigateHome",
          value: function navigateHome() {
            this.router.navigate(['/social-media-details']);
          }
        }, {
          key: "getCategoryList",
          value: function getCategoryList() {
            var _this3 = this;

            this.http.get('/read_category').subscribe(function (response) {
              console.log(response.records);
              _this3.categoryList = response.records;
              console.log(response.records);
              console.log(_this3.categoryList);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "MediaFileSelected",
          value: function MediaFileSelected(event) {
            this.selectedFile = event.target.files[0];
          }
        }, {
          key: "MediaFileSelected_addressproof",
          value: function MediaFileSelected_addressproof(event1) {
            this.addressproof = event1.target.files[0];
          }
        }, {
          key: "MediaFileSelected_idproof",
          value: function MediaFileSelected_idproof(event2) {
            this.idproof = event2.target.files[0];
          }
        }, {
          key: "onClickSubmit",
          value: function onClickSubmit(data) {
            var _this4 = this;

            this.image = this.selectedFile;
            var formdata = new FormData(); //formdata.append("category", data.category);

            formdata.append("tbid", this.userdetails.id);
            formdata.append("store_name", this.store_name);
            formdata.append("address_line_1", data.address_line_1);
            formdata.append("address_line_2", data.address_line_2);
            formdata.append("city", data.city);
            formdata.append("state", data.state);
            formdata.append("pincode", data.pincode);
            formdata.append("seller_name", data.category);
            formdata.append("unit", data.username);
            formdata.append("store_logo", this.image);
            formdata.append("address_proof", this.addressproof);
            formdata.append("id_proof", this.idproof);
            this.http.postFormData("/seller_update_profile", formdata).subscribe(function (response) {
              console.log(response);

              _this4.router.navigate(['/social-media-details']);
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return SellerdetailsPage;
      }();

      _SellerdetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _SellerdetailsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sellerdetails',
        template: _raw_loader_sellerdetails_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sellerdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SellerdetailsPage);
      /***/
    },

    /***/
    28191:
    /*!****************************************!*\
      !*** ./src/app/shared/http.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpService": function HttpService() {
          return (
            /* binding */
            _HttpService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
        }

        _createClass(HttpService, [{
          key: "get",
          value: function get(serviceName) {
            var userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders() // .set("Access-Control-Allow-Origin", "*")
            // .set("Access-Control-Allow-Methods", "GET,POST")
            // .set('Accept','application/json')
            // .set('Content-Type','application/json')
            // .set("Access-Control-Allow-Headers", "Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            .set("Token", userdetails.token); //   let httpOptions = {
            //     headers: new HttpHeaders({
            //       "Access-Control-Allow-Origin": "*",
            //       "Access-Control-Allow-Methods": "*",
            //       "Access-Control-Allow-Headers":"Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            //       'Authorization':userdetails.token,
            //       "Content-Type": "application/json"
            //     })
            // };

            var options = {
              headers: header,
              withCredentials: true
            };
            return this.http.get(url, {
              headers: header
            });
          }
        }, {
          key: "login",
          value: function login(serviceName, data) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
            var options = {
              headers: headers,
              withCredentials: false
            };
            console.log(data);
            return this.http.post(url, JSON.stringify(data), options);
          }
        }, {
          key: "post",
          value: function post(serviceName, data) {
            var token = localStorage.getItem("token");
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;

            if (serviceName == '/user_login' || serviceName == '/user_register') {// const headers = new HttpHeaders()
              // const options = { headers: headers, withCredentials: false };
              // return this.http.post(url, JSON.stringify(data), { headers: headers });
            } else {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Token", token);
              var options = {
                headers: headers,
                withCredentials: true
              };
              return this.http.post(url, JSON.stringify(data), {
                headers: headers
              });
            }
          }
        }, {
          key: "postFormData",
          value: function postFormData(serviceName, data) {
            var token = localStorage.getItem("token");
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var headers = {
              // 'enctype': 'multipart/form-data',
              // 'Content-Type': 'multipart/form-data',
              // 'Accept': 'plain/text',
              // 'Access-Control-Allow-Origin': '*',
              // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
              // 'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
              'Token': token
            }; // const headers = new HttpHeaders().set("Token", token );
            //  headers.set('Content-Type', 'multipart/form-data'); 

            var options = {
              headers: headers,
              withCredentials: true
            };
            return this.http.post(url, data, {
              headers: headers
            });
          }
        }]);

        return HttpService;
      }();

      _HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _HttpService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _HttpService);
      /***/
    },

    /***/
    22912:
    /*!*******************************************************!*\
      !*** ./src/app/sellerdetails/sellerdetails.page.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".myproduct-div {\n  position: absolute;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: 5px;\n}\n\ninput[type=text] {\n  font-size: 11px;\n  margin: 0 5px;\n  margin-top: -12px;\n  margin-left: -20px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #23d5ab;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 1px solid #23d5ab !important;\n  box-shadow: 0 0 2px #23d5ab;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%) !important;\n  color: #fff;\n  height: 25px;\n  width: 55%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 10px !important;\n  margin-left: 35px !important;\n}\n\n.skip-btn {\n  border-radius: 5px !important;\n  background-color: #fff;\n  color: #23d5ab;\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 13px !important;\n  padding: 3px;\n  margin: 10px !important;\n}\n\nlottie-player {\n  cursor: pointer;\n}\n\nselect {\n  border: 1px solid #fff;\n}\n\nion-content {\n  --background:#F4F7FA !important;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n/* Always set the map height explicitly to define the size of the div\n     * element that contains the map. */\n\n#map {\n  height: 100%;\n}\n\n/* Optional: Makes the sample page fill the window. */\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.controls {\n  background-color: #fff;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  box-sizing: border-box;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  height: 29px;\n  margin-left: 17px;\n  margin-top: 10px;\n  outline: none;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 400px;\n}\n\n.controls:focus {\n  border-color: #4d90fe;\n}\n\n.title {\n  font-weight: bold;\n}\n\n#infowindow-content {\n  display: none;\n}\n\n#map #infowindow-content {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGxlcmRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtBQUVGOztBQUFBO0VBQ0UsNkJBQUE7RUFDQSx5RUFBQTtFQUdBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBQ0E7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBRUE7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBQUE7RUFDQSxzQkFBQTtBQUdBOztBQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FBR0E7O0FBRkE7RUFDSSxhQUFBO0FBSUo7O0FBQ0E7dUNBQUE7O0FBRUs7RUFDQyxZQUFBO0FBRU47O0FBQ0kscURBQUE7O0FBQ0E7O0VBRUUsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRU47O0FBQ0k7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUVOOztBQUNJO0VBQ0UscUJBQUE7QUFFTjs7QUFDSTtFQUNFLGlCQUFBO0FBRU47O0FBQ0k7RUFDRSxhQUFBO0FBRU47O0FBQ0k7RUFDRSxlQUFBO0FBRU4iLCJmaWxlIjoic2VsbGVyZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlwcm9kdWN0LWRpdntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNlYmU2ZTY7XG4gIHdpZHRoOjk2JSAhaW1wb3J0YW50O1xuICBtYXJnaW46NXB4O1xuICBcbn1cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyM2Q1YWI7O1xufVxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjoxcHggc29saWQgIzIzZDVhYiAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMnB4ICMyM2Q1YWI7XG59XG4udXBkYXRlLWJ0bntcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gIDAlLCAjMjNkNWFiXG4gIDEwMCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiNmZmY7XG4gIGhlaWdodDoyNXB4O1xuICB3aWR0aDo1NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW46MTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50IDtcbn1cbi5za2lwLWJ0bntcbmJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbmNvbG9yOiMyM2Q1YWI7XG5oZWlnaHQ6MjVweDtcbndpZHRoOjI1JTtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmJvcmRlcjoxcHggc29saWQgI2ZmZjtcbmZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xucGFkZGluZzogM3B4O1xubWFyZ2luOjEwcHggIWltcG9ydGFudDtcbn1cbmxvdHRpZS1wbGF5ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc2VsZWN0e1xuYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcblxufVxuaW9uLWNvbnRlbnQge1xuLS1iYWNrZ3JvdW5kOiNGNEY3RkEgICFpbXBvcnRhbnQ7XG5vdmVyZmxvdzogYXV0bztcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxufVxuXG5cbi8qIEFsd2F5cyBzZXQgdGhlIG1hcCBoZWlnaHQgZXhwbGljaXRseSB0byBkZWZpbmUgdGhlIHNpemUgb2YgdGhlIGRpdlxuICAgICAqIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgbWFwLiAqL1xuICAgICAjbWFwIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLyogT3B0aW9uYWw6IE1ha2VzIHRoZSBzYW1wbGUgcGFnZSBmaWxsIHRoZSB3aW5kb3cuICovXG4gICAgaHRtbCwgXG4gICAgYm9keSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICBcbiAgICAuY29udHJvbHMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGhlaWdodDogMjlweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwIDExcHggMCAxM3B4O1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB3aWR0aDogNDAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5jb250cm9sczpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICM0ZDkwZmU7XG4gICAgfVxuICAgIFxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgXG4gICAgI2luZm93aW5kb3ctY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgICAjbWFwICNpbmZvd2luZG93LWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH0iXX0= */";
      /***/
    },

    /***/
    69762:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerdetails/sellerdetails.page.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"mt-2\">\n  <div class=\"myproduct-div mt-5 \">\n\n    <div class=\"row\">\n      <div class=\"col-7\">\n        <ion-icon (click)=\"navigateHome()\" style=\"margin:20px;cursor:pointer;color:#23d5ab\" name=\"close\"></ion-icon>\n\n      </div>\n      <div class=\"col-5 ion-text-center\">\n        <!-- <img id=\"logo\" height=\"100px\" width=\"120px\" src=\"assets/logo.jpeg\" alt=\"\"> -->\n        <span class=\"seller\"><b>24hrs</b></span>\n      </div>\n\n    </div>\n    <p style=\"font-size:20px;margin-left:10px;margin-top:10px; color: #5C5C5C;\"> Provide Your Details:</p>\n    <form #sellerdetailform=\"ngForm\" (ngSubmit)=\"onClickSubmit(sellerdetailform.value)\">\n      <div class=\"row\" style=\"padding-left: 10px;\">\n        <div class=\"col-6\">\n          <p class=\"edit-name\">Store logo:</p>\n        </div>\n        <!-- <div class=\"col-6\">\n        <lottie-player src=\"https://assets5.lottiefiles.com/packages/lf20_GZxjzF.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:40%;margin-left:5px;\" loop autoplay></lottie-player>\n      </div> -->\n\n        <label class=\"btn btn-default\" style=\"font-size: 13px;\">\n          <input type=\"file\" class=\"\" (change)=\"MediaFileSelected($event)\" name=\"image\">\n        </label>\n      </div>\n\n      <div class=\"row mt-4\" style=\"padding-left: 10px;\">\n        <div class=\"col-6\">\n          <p class=\"edit-name\">Store Name:</p>\n        </div>\n        <div class=\"col-6\">\n          <input  type=\"text\" id=\"edit-field\"  name=\"store_name\" [(ngModel)]=\"store_name\">\n        </div>\n      </div>\n\n      <div class=\"row\" style=\"padding-left: 10px;\">\n        <div class=\"col-12\">\n          <p class=\"edit-name\">Store Address:</p>\n        </div>\n        <div class=\"col-6\">Address Line 1</div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"address_line_1\">\n        </div>\n        <div class=\"col-6\">Address Line 2</div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"address_line_2\">\n        </div>\n        <div class=\"col-6\">City</div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"city\">\n        </div>\n        <div class=\"col-6\">State</div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"state\">\n        </div>\n        <div class=\"col-6\">Pincode</div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"pincode\">\n        </div>\n      </div>\n\n      <div class=\"row\" style=\"padding-left: 10px;\">\n        <div class=\"col-6 mt-3\">\n          <p class=\"edit-name\">Store category:</p>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"select\">\n            <select ngModel placeholder=\"category\"  name=\"category\">\n              <option *ngFor=\"let cat of listOfCat\" value=\"{{cat.category}}\">{{cat.category}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" style=\"padding-left: 10px;\">\n        <div class=\"col-6\">\n          <p class=\"edit-name\">User Name:</p>\n        </div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"username\">\n        </div>\n      </div>\n\n      <div class=\"row\" style=\"padding-left: 10px;\">\n        <div class=\"col-6\">\n          <p class=\"edit-name\">User Number:</p>\n        </div>\n        <div class=\"col-6\">\n          <input ngModel type=\"text\" id=\"edit-field\" name=\"usernumber\" >\n        </div>\n      </div>\n\n      <div class=\"row\" style=\"padding-left: 10px;\">\n        <div class=\"col-6\">\n          <p class=\"edit-name\">Id Proof:</p>\n        </div>\n        <!-- <div class=\"col-6\">\n          <lottie-player src=\"https://assets5.lottiefiles.com/private_files/lf30_0pkhkmwj.json\" background=\"transparent\"\n            speed=\"1.5\" style=\"width:50%;margin-left:5px;\" loop autoplay></lottie-player>\n        </div> -->\n        <label class=\"btn btn-default\"  style=\"font-size: 13px;\">\n          <input type=\"file\" class=\"\" (change)=\"MediaFileSelected_addressproof($event)\" name=\"image\">\n        </label>\n      </div>\n\n      <div class=\"row\" style=\"padding-left: 10px;\">\n        <div class=\"col-6\">\n          <p class=\"edit-name\">Address Proff:</p>\n        </div>\n        <!-- <div class=\"col-6\">\n          <lottie-player src=\"https://assets5.lottiefiles.com/packages/lf20_jxgqawba.json\" background=\"transparent\"\n            speed=\"1.5\" style=\"width:50%;margin-left:5px;\" loop autoplay></lottie-player>\n        </div> -->\n        <label class=\"btn btn-default\" style=\"font-size: 13px;\" >\n          <input type=\"file\" class=\"\" (change)=\"MediaFileSelected_idproof($event)\" name=\"image\">\n        </label>\n      </div>\n\n      <div class=\"row \">\n        <div class=\"col-7\">\n          <button (click)=\"navigateHome()\" type=\"button\" class=\"btn btn-success btn-sm skip-btn\">Skip</button>\n        </div>\n        <div class=\"col-5\">\n          <button  type=\"submit\" class=\"btn btn-success btn-sm update-btn\">Next</button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_sellerdetails_sellerdetails_module_ts-es5.js.map