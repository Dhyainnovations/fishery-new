(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_store_store_module_ts"], {
    /***/
    38092:
    /*!***********************************************!*\
      !*** ./src/app/store/store-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StorePageRoutingModule": function StorePageRoutingModule() {
          return (
            /* binding */
            _StorePageRoutingModule
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


      var _store_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./store.page */
      84300);

      var routes = [{
        path: '',
        component: _store_page__WEBPACK_IMPORTED_MODULE_0__.StorePage
      }];

      var _StorePageRoutingModule = function StorePageRoutingModule() {
        _classCallCheck(this, StorePageRoutingModule);
      };

      _StorePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StorePageRoutingModule);
      /***/
    },

    /***/
    76770:
    /*!***************************************!*\
      !*** ./src/app/store/store.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StorePageModule": function StorePageModule() {
          return (
            /* binding */
            _StorePageModule
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


      var _store_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./store-routing.module */
      38092);
      /* harmony import */


      var _store_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./store.page */
      84300);

      var _StorePageModule = function StorePageModule() {
        _classCallCheck(this, StorePageModule);
      };

      _StorePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _store_routing_module__WEBPACK_IMPORTED_MODULE_0__.StorePageRoutingModule],
        declarations: [_store_page__WEBPACK_IMPORTED_MODULE_1__.StorePage]
      })], _StorePageModule);
      /***/
    },

    /***/
    84300:
    /*!*************************************!*\
      !*** ./src/app/store/store.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StorePage": function StorePage() {
          return (
            /* binding */
            _StorePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_store_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./store.page.html */
      27843);
      /* harmony import */


      var _store_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./store.page.scss */
      56799);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _StorePage = /*#__PURE__*/function () {
        function StorePage() {
          _classCallCheck(this, StorePage);
        }

        _createClass(StorePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StorePage;
      }();

      _StorePage.ctorParameters = function () {
        return [];
      };

      _StorePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-store',
        template: _raw_loader_store_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_store_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StorePage);
      /***/
    },

    /***/
    56799:
    /*!***************************************!*\
      !*** ./src/app/store/store.page.scss ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".store-name {\n  font-size: 20px;\n  margin: 10px;\n}\n\n.getstarted {\n  font-size: 14px;\n  color: #6E7989;\n  margin: 10px;\n}\n\n.tearmsAndCondition {\n  font-size: 10px;\n  margin: 12px;\n  padding: 10px;\n}\n\n.continue-btn {\n  background-color: #29C17E;\n  border: 1px solid #fff;\n  margin: 10px;\n}\n\n.profile-sts {\n  font-size: 13px;\n  color: #334D6E;\n  margin: 10px;\n}\n\n.progress {\n  margin: 5px;\n  height: 10px;\n}\n\n.progress-bar {\n  background-color: #29C17E;\n  font-size: smaller;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFJSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLG9DQUFBO0VBS0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFBSTtFQUNJLGFBQUE7QUFFUiIsImZpbGUiOiJzdG9yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvcmUtbmFtZXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOjEwcHg7XG59XG4uZ2V0c3RhcnRlZHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IzZFNzk4OTtcbiAgICBtYXJnaW46MTBweDtcblxufVxuLnRlYXJtc0FuZENvbmRpdGlvbntcbiAgICBmb250LXNpemU6MTBweDtcbiAgICBtYXJnaW46MTJweDtcbiAgICBwYWRkaW5nOjEwcHg7XG59XG4uY29udGludWUtYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOUMxN0U7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBcbn1cbi5wcm9maWxlLXN0c3tcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6IzMzNEQ2RTtcbiAgICBtYXJnaW46MTBweDtcbn1cbi5wcm9ncmVzc3tcbiAgICBtYXJnaW46NXB4O1xuICAgIGhlaWdodDoxMHB4O1xuICAgIFxufVxuLnByb2dyZXNzLWJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyOUMxN0U7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I0Y0RjdGQSAgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXG4gICAgLy8gMCUsICNkMWYyZTdcbiAgICAvLyAxMDAlKSAhaW1wb3J0YW50O1xuICBcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9Il19 */";
      /***/
    },

    /***/
    27843:
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store/store.page.html ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"new-background-color\">\n  <div class=\"container\">\n\n\n    <div class=\"signin-div mt-5 \">\n      <p class=\"store-name\"><b>abc store </b></p>\n      <p class=\"getstarted\">Let's get started</p>\n\n\n      <ion-list>\n        <ion-item>\n          <ion-label>Store Location </ion-label>\n          <svg style=\"margin:10px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-geo-alt\" viewBox=\"0 0 16 16\">\n            <path d=\"M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z\"/>\n            <path d=\"M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n          </svg>\n\n          <svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-plus-circle-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z\"/>\n          </svg>\n\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>Store category</ion-label>\n          <ion-select value=\"Categories\" okText=\"Okay\" cancelText=\"Dismiss\">\n            <ion-select-option value=\"brown\">Grocery</ion-select-option>\n            <ion-select-option value=\"blonde\">Pharmacy</ion-select-option>\n            <ion-select-option value=\"black\">Vegetables</ion-select-option>\n            <ion-select-option value=\"red\">Household</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n\n      <ion-chip color=\"dark\">\n        <ion-label>Grocery </ion-label>\n        <ion-icon name=\"close-circle\"></ion-icon>\n      </ion-chip>\n      <ion-chip color=\"dark\">\n        <ion-label>Pharmacy</ion-label>\n        <ion-icon name=\"close-circle\"></ion-icon>\n      </ion-chip>\n      <ion-chip color=\"dark\">\n        <ion-label>Meat</ion-label>\n        <ion-icon name=\"close-circle\"></ion-icon>\n      </ion-chip>\n      <ion-chip color=\"dark\">\n        <ion-label>Grocery </ion-label>\n        <ion-icon name=\"close-circle\"></ion-icon>\n      </ion-chip>\n      <ion-chip color=\"dark\">\n        <ion-label>Pharmacy</ion-label>\n        <ion-icon name=\"close-circle\"></ion-icon>\n      </ion-chip>\n      <ion-chip color=\"dark\">\n        <ion-label>Meat</ion-label>\n        <ion-icon name=\"close-circle\"></ion-icon>\n      </ion-chip>\n\n      <p class=\"tearmsAndCondition mt-3\" >By clicking continue, you agree to our \n        <b style=\"color:blue\"> Data Policy</b></p>\n\n        <div class=\"col-12\" style=\"text-align: right;\">\n          <button class=\"btn btn-success btn-sm continue-btn mt-1\"> Continue</button>\n        </div>\n\n      \n    </div>\n\n    <div class=\"signin-div mt-2 \">\n      <p class=\"profile-sts\" >Profile Completion Status</p>\n\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\"\n        aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:40%\">\n          40%\n        </div>\n\n      </div>\n\n\n      <div>\n        <p></p>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_store_store_module_ts-es5.js.map