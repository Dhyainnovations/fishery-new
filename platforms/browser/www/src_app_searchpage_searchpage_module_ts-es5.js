(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_searchpage_searchpage_module_ts"], {
    /***/
    56432:
    /*!*********************************************************!*\
      !*** ./src/app/searchpage/searchpage-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchpagePageRoutingModule": function SearchpagePageRoutingModule() {
          return (
            /* binding */
            _SearchpagePageRoutingModule
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


      var _searchpage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./searchpage.page */
      59992);

      var routes = [{
        path: '',
        component: _searchpage_page__WEBPACK_IMPORTED_MODULE_0__.SearchpagePage
      }];

      var _SearchpagePageRoutingModule = function SearchpagePageRoutingModule() {
        _classCallCheck(this, SearchpagePageRoutingModule);
      };

      _SearchpagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SearchpagePageRoutingModule);
      /***/
    },

    /***/
    31895:
    /*!*************************************************!*\
      !*** ./src/app/searchpage/searchpage.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchpagePageModule": function SearchpagePageModule() {
          return (
            /* binding */
            _SearchpagePageModule
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


      var _searchpage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./searchpage-routing.module */
      56432);
      /* harmony import */


      var _searchpage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./searchpage.page */
      59992); // import { Ng2SearchPipeModule } from 'ng2-search-filter';


      var _SearchpagePageModule = function SearchpagePageModule() {
        _classCallCheck(this, SearchpagePageModule);
      };

      _SearchpagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, // Ng2SearchPipeModule,
        _searchpage_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchpagePageRoutingModule],
        declarations: [_searchpage_page__WEBPACK_IMPORTED_MODULE_1__.SearchpagePage]
      })], _SearchpagePageModule);
      /***/
    },

    /***/
    59992:
    /*!***********************************************!*\
      !*** ./src/app/searchpage/searchpage.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchpagePage": function SearchpagePage() {
          return (
            /* binding */
            _SearchpagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_searchpage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./searchpage.page.html */
      23437);
      /* harmony import */


      var _searchpage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./searchpage.page.scss */
      93082);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);

      var _SearchpagePage = /*#__PURE__*/function () {
        function SearchpagePage(router, activatedRoute, http, route) {
          _classCallCheck(this, SearchpagePage);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.http = http;
          this.isVisible = false;
          this.isShown = true;
          this.list = [{
            "id": "1",
            "firstName": "onion",
            "lastName": "Cruise"
          }, {
            "id": "2",
            "firstName": "tomato",
            "lastName": "Sharapova"
          }, {
            "id": "3",
            "firstName": "apple",
            "lastName": "Bond"
          }, {
            "id": "4",
            "firstName": "banana",
            "lastName": "Bond"
          }, {
            "id": "5",
            "firstName": "jack fruits",
            "lastName": "Bond"
          }, {
            "id": "6",
            "firstName": "mango",
            "lastName": "Bond"
          }, {
            "id": "7",
            "firstName": "ginger",
            "lastName": "Bond"
          }, {
            "id": "8",
            "firstName": "orange",
            "lastName": "Bond"
          }];
        }

        _createClass(SearchpagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "searchProduct",
          value: function searchProduct() {
            this.isVisible = true;
            this.isShown = false;
          }
        }, {
          key: "backToHome",
          value: function backToHome() {
            this.router.navigate(['/homepage']);
          }
        }]);

        return SearchpagePage;
      }();

      _SearchpagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _SearchpagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-searchpage',
        template: _raw_loader_searchpage_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_searchpage_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SearchpagePage);
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
    93082:
    /*!*************************************************!*\
      !*** ./src/app/searchpage/searchpage.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-searchbar {\n  margin-top: 10px !important;\n  --background: #fff !important;\n  width: 98% !important;\n}\n\n.input {\n  margin-top: 4px !important;\n  height: 40px;\n  border-radius: 5px;\n  width: 95% !important;\n}\n\n.input:focus {\n  outline: none;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaHBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxvQ0FBQTtFQUtBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBRUk7RUFDSSxhQUFBO0FBQVIiLCJmaWxlIjoic2VhcmNocGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFye1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgICB3aWR0aDogOTglICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dHtcbiAgICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6NDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xufVxuLmlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjRGN0ZBICAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGRhcmt0dXJxdW9pc2VcbiAgICAvLyAwJSwgI2QxZjJlN1xuICAgIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG4gIFxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0iXX0= */";
      /***/
    },

    /***/
    23437:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searchpage/searchpage.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-1 mt-4 \">\n        <ion-icon (click)=\"backToHome()\" style=\"width:30px;height:25px;color:#fff;margin-top:11px;cursor: pointer;\" name=\"arrow-back-outline\"></ion-icon>\n      </div>\n      <div class=\"col-11 mt-4 \">\n        <ion-searchbar (keypress)=\"searchProduct()\"  [(ngModel)]=\"term\" type=\"text\"></ion-searchbar>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list *ngIf=\"isVisible\" >\n  <ion-item  *ngFor=\"let search of list |filter:term\">\n    <ion-label >{{search.firstName}}</ion-label>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-up-left\" viewBox=\"0 0 16 16\">\n      <path fill-rule=\"evenodd\" d=\"M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z\"/>\n    </svg>\n  </ion-item>\n</ion-list>\n\n<lottie-player *ngIf=\"isShown\" (click)=\"getPicture()\" src=\"https://assets6.lottiefiles.com/packages/lf20_e2zcy5pu.json\" background=\"transparent\"\nspeed=\"1.5\" style=\"width:100%;margin-left:0px;\" loop autoplay></lottie-player>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_searchpage_searchpage_module_ts-es5.js.map