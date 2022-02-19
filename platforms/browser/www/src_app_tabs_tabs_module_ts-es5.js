(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_tabs_tabs_module_ts"], {
    /***/
    80530:
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageRoutingModule": function TabsPageRoutingModule() {
          return (
            /* binding */
            _TabsPageRoutingModule
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs.page */
      7942);

      var routes = [{
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [{
          path: 'tab1',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tab1/tab1.module */
            2168)).then(function (m) {
              return m.Tab1PageModule;
            });
          }
        }, {
          path: 'tab2',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tab2/tab2.module */
            14608)).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }, {
          path: 'tab3',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tab3/tab3.module */
            53746)).then(function (m) {
              return m.Tab3PageModule;
            });
          }
        }, {
          path: 'tab4',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab4_tab4_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tab4/tab4.module */
            32486)).then(function (m) {
              return m.Tab4PageModule;
            });
          }
        }, {
          path: 'tab5',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab5_tab5_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../tab5/tab5.module */
            5184)).then(function (m) {
              return m.Tab5PageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tabs/tab1',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }];

      var _TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      _TabsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
      })], _TabsPageRoutingModule);
      /***/
    },

    /***/
    15564:
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageModule": function TabsPageModule() {
          return (
            /* binding */
            _TabsPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs-routing.module */
      80530);
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page */
      7942);

      var _TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      _TabsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
      })], _TabsPageModule);
      /***/
    },

    /***/
    7942:
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPage": function TabsPage() {
          return (
            /* binding */
            _TabsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tabs.page.html */
      97665);
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page.scss */
      24427);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TabsPage = function TabsPage() {
        _classCallCheck(this, TabsPage);
      };

      _TabsPage.ctorParameters = function () {
        return [];
      };

      _TabsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TabsPage);
      /***/
    },

    /***/
    24427:
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  font-size: 9px !important;\n}\n\nion-tab-bar {\n  --color-selected: #23d5ab\n  !important;\n}\n\nion-label {\n  --color-selected: aqua !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJO1lBQUE7QUFHSjs7QUFDQTtFQUNJLGlDQUFBO0FBRUoiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcbn1cbmlvbi10YWItYmFye1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6ICMyM2Q1YWJcblxuICAgICFpbXBvcnRhbnQ7XG59XG5pb24tbGFiZWx7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogYXF1YSAhaW1wb3J0YW50O1xufVxuIl19 */";
      /***/
    },

    /***/
    97665:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-tabs >\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label >Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"megaphone-outline\"></ion-icon>\n      <ion-label>Promotion</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"cart-outline\"></ion-icon>\n      <ion-label>Product</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab4\">\n\n      <ion-icon name=\"heart-outline\"></ion-icon>\n\n      <!-- <svg  width=\"25\" height=\"20\" viewBox=\"0 0 30 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g clip-path=\"url(#clip0_1184:922)\">\n        <path d=\"M27.8985 10.0753V6.01443L23.5249 3.97193L19.2724 0L15 0.997154L10.7276 0L6.47506 3.97193L2.10147 6.01443V10.0753L0 14.0009L2.10147 17.9265V21.9874L6.47506 24.0299L10.7276 28.0019L15 27.0047L19.2724 28.0019L23.5249 24.0299L27.8985 21.9874V17.9265L30 14.0009L27.8985 10.0753ZM25.9141 17.4891V20.842L22.4931 22.4397L18.6652 25.9482L15 25.0919L11.3348 25.9482L7.76293 22.612L4.08387 20.8401V17.4891L2.21855 14.0009L4.08586 10.5127V7.15986L7.50695 5.56219L11.3368 2.05176L15.002 2.90806L18.6672 2.05176L22.2391 5.38797L25.9181 7.15986V10.5127L27.7815 14.0009L25.9141 17.4891Z\" fill=\"#9B9B9B\"/>\n        <path d=\"M20.2507 7.78612L8.34497 18.9066L9.74817 20.2172L21.6539 9.09668L20.2507 7.78612Z\" fill=\"#9B9B9B\"/>\n        <path d=\"M11.0313 13.0741C12.6724 13.0741 14.0079 11.8268 14.0079 10.294C14.0079 8.76116 12.6724 7.51379 11.0313 7.51379C9.39018 7.51379 8.05469 8.76116 8.05469 10.294C8.05469 11.8268 9.39018 13.0741 11.0313 13.0741ZM11.0313 9.36724C11.579 9.36724 12.0235 9.78241 12.0235 10.294C12.0235 10.8055 11.579 11.2207 11.0313 11.2207C10.4836 11.2207 10.0391 10.8055 10.0391 10.294C10.0391 9.78241 10.4836 9.36724 11.0313 9.36724ZM18.9688 14.9276C17.3277 14.9276 15.9922 16.1749 15.9922 17.7077C15.9922 19.2405 17.3277 20.4879 18.9688 20.4879C20.6099 20.4879 21.9454 19.2405 21.9454 17.7077C21.9454 16.1749 20.6099 14.9276 18.9688 14.9276ZM18.9688 18.6345C18.4211 18.6345 17.9766 18.2193 17.9766 17.7077C17.9766 17.1962 18.4211 16.781 18.9688 16.781C19.5165 16.781 19.961 17.1962 19.961 17.7077C19.961 18.2193 19.5165 18.6345 18.9688 18.6345Z\" fill=\"#9B9B9B\"/>\n        </g>\n        <defs>\n        <clipPath id=\"clip0_1184:922\">\n        <rect width=\"30\" height=\"28\" fill=\"white\"/>\n        </clipPath>\n        </defs>\n        </svg> -->\n        \n      <!-- <ion-badge >4</ion-badge> -->\n      <ion-label>Offer</ion-label>\n    </ion-tab-button>\n    \n\n    <ion-tab-button tab=\"tab5\" >\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es5.js.map