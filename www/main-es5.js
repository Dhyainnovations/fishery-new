(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./tabs/tabs.module */
          15564)).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'signinpage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("src_app_signin_signin_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./signin/signin.module */
          87445)).then(function (m) {
            return m.SigninPageModule;
          });
        }
      }, {
        path: 'signuppage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./signup/signup.module */
          77648)).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'store',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_store_store_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./store/store.module */
          76770)).then(function (m) {
            return m.StorePageModule;
          });
        }
      }, {
        path: 'myproducts',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_myproducts_myproducts_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./myproducts/myproducts.module */
          13363)).then(function (m) {
            return m.MyproductsPageModule;
          });
        }
      }, {
        path: 'support',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("src_app_support_support_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./support/support.module */
          96758)).then(function (m) {
            return m.SupportPageModule;
          });
        }
      }, {
        path: 'sellerdetailpage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_sellerdetails_sellerdetails_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./sellerdetails/sellerdetails.module */
          76516)).then(function (m) {
            return m.SellerdetailsPageModule;
          });
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_splashscreen_splashscreen_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./splashscreen/splashscreen.module */
          85481)).then(function (m) {
            return m.SplashscreenPageModule;
          });
        }
      }, {
        path: 'myproductEditPage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("src_app_myproduct-edit_myproduct-edit_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./myproduct-edit/myproduct-edit.module */
          86093)).then(function (m) {
            return m.MyproductEditPageModule;
          });
        }
      }, {
        path: 'addofferEditPage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("src_app_addoffer-edit_addoffer-edit_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./addoffer-edit/addoffer-edit.module */
          74329)).then(function (m) {
            return m.AddofferEditPageModule;
          });
        }
      }, {
        path: 'searchpage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_searchpage_searchpage_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./searchpage/searchpage.module */
          31895)).then(function (m) {
            return m.SearchpagePageModule;
          });
        }
      }, {
        path: 'terms-and-condition',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_terms-and-condition_terms-and-condition_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./terms-and-condition/terms-and-condition.module */
          97756)).then(function (m) {
            return m.TermsAndConditionPageModule;
          });
        }
      }, {
        path: 'social-media-details',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("src_app_social-media-details_social-media-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./social-media-details/social-media-details.module */
          20930)).then(function (m) {
            return m.SocialMediaDetailsPageModule;
          });
        }
      }, {
        path: 'notification',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./notification/notification.module */
          22154)).then(function (m) {
            return m.NotificationPageModule;
          });
        }
      }, {
        path: 'otpverification',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_shared_http_service_ts"), __webpack_require__.e("src_app_otpverification_otpverification_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./otpverification/otpverification.module */
          86309)).then(function (m) {
            return m.OtpverificationPageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, route, platform) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.router = router;
          this.platform = platform;
          this.activeItem = "home";
          route.params.subscribe(function (val) {
            //  const userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
            _this.activeItem = "home";
          });
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.router.navigate(['/']);
          }
        }, {
          key: "home",
          value: function home() {
            this.activeItem = "home";
            this.router.navigate(['/tabs']);
          }
        }, {
          key: "myproducts",
          value: function myproducts() {
            this.activeItem = "myproducts";
            this.router.navigate(['/myproducts']);
          }
        }, {
          key: "promotion",
          value: function promotion() {
            this.activeItem = "promotion";
            this.router.navigate(['/tabs/tab2']);
          }
        }, {
          key: "Offers",
          value: function Offers() {
            this.activeItem = "offers";
            this.router.navigate(['/tabs/tab4']);
          }
        }, {
          key: "myprofile",
          value: function myprofile() {
            this.activeItem = "myprofile";
            this.router.navigate(['/tabs/tab5']);
          }
        }, {
          key: "support",
          value: function support() {
            this.activeItem = "support";
            this.router.navigate(['/support']);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.activeItem = "home";
            localStorage.removeItem("24hrs-user-data");
            this.router.navigate(['/signinpage']);
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot({
          swipeBackEnabled: false
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        baseUrl: 'https://dhya.in/24Hrs/api'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list {\n  color: #272A3F;\n  font-size: 15px;\n  margin: 18px -5px;\n}\n\n#icon {\n  background-color: #c5f893 !important;\n  border-radius: 15px !important;\n  width: 25px;\n  height: 30px;\n}\n\nion-item {\n  --border-color: #fff;\n  margin-bottom: 5px;\n}\n\nimg:hover {\n  cursor: pointer;\n}\n\nion-menu-button:hover {\n  --color:#fff;\n}\n\n.close {\n  margin-left: 30px;\n  color: #676767;\n}\n\n.close:hover {\n  color: #23d5ab;\n}\n\n.row {\n  margin-bottom: 8px;\n}\n\n#sideMenuList .active {\n  color: #23d5ab;\n  font-weight: 700;\n}\n\n.dot {\n  margin: 35% !important;\n  margin-bottom: 5px !important;\n  text-align: center;\n  margin-top: 0 !important;\n  height: 95%;\n  width: 80%;\n  background-color: #fff;\n  border-radius: 20%;\n  display: inline-block;\n  box-shadow: 3px -2px 11px 3px #ccc;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0EsZUFBQTtBQUlBOztBQUZBO0VBQ0ksWUFBQTtBQUtKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtBQU9KOztBQUpBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7QUFRSjs7QUFOQTtFQUNJLGlDQUFBO0VBSUEsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFMSTtFQUNJLGFBQUE7QUFPUiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdHtcbiAgICBjb2xvcjogIzI3MkEzRjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiAxOHB4IC01cHg7XG59XG4jaWNvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAyNDgsIDE0NykgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6MjVweDtcbiAgICBoZWlnaHQ6MzBweFxufVxuaW9uLWl0ZW17XG4gICAgLS1ib3JkZXItY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuaW1nOmhvdmVye1xuY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLW1lbnUtYnV0dG9uOmhvdmVye1xuICAgIC0tY29sb3I6I2ZmZjtcbiAgIFxufVxuLmNsb3Nle1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGNvbG9yOiM2NzY3Njc7XG59XG4uY2xvc2U6aG92ZXJ7XG4gICAgY29sb3I6ICMyM2Q1YWI7XG59XG4ucm93e1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuI3NpZGVNZW51TGlzdCAuYWN0aXZle1xuICAgIGNvbG9yOiAjMjNkNWFiO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZG90IHtcbiAgICBtYXJnaW46MzUlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICB3aWR0aDogODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3gtc2hhZG93OiAzcHggLTJweCAxMXB4IDNweCNjY2M7XG59XG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZGFya3R1cnF1b2lzZVxuICAgIC8vIDAlLCAjZDFmMmU3XG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4iXX0= */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-menu swipeGesture=\"false\"   side=\"start\" type=\"push\" contentId=\"main\">\n  <ion-toolbar>\n    <div class=\"row mt-5\">\n      <div class=\"col-4 mt-2\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <ion-icon style=\"margin-left: 20px;\" class=\"close\"  name=\"close\"></ion-icon>\n        </ion-menu-button>\n      </div>\n      <div class=\"col-8 ion-text-center\" style=\"margin-left: -90px;\">\n        <span class=\"dot ion-text-center\">\n          <img  height=\"110px\" width=\"110px\" style=\"text-align: center;\" src=\"assets/logo.jpeg\" alt=\"\">\n        </span>                \n      </div>\n    </div>\n  </ion-toolbar>\n\n<ion-content >\n  \n  <ion-list id=\"sideMenuList\"   >\n    <div class=\"row \">\n      <div class=\"col-5\">\n          <ion-item>\n            <img  height=\"50px\"  width=\"50px\" src=\"assets/icon/home.PNG\" alt=\"\">\n          </ion-item>\n      </div>\n      <div class=\"col-4\" style=\"margin-left: -15px;\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <p [class]=\"activeItem == 'home' ? 'active list': 'list' \"  (click)=\"home()\">Home</p> \n        </ion-menu-button>\n        \n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n          <ion-item>\n            <img  height=\"50px\"  width=\"50px\" src=\"assets/icon/myproducts.png\" alt=\"\">\n          </ion-item>\n      </div>\n      <div class=\"col-4\" style=\"margin-left: -15px;\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <p [class]=\"activeItem == 'myproducts' ? 'active list': 'list' \"  (click)=\"myproducts()\">My Products</p> \n        </ion-menu-button>\n       \n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n          <ion-item>\n            <img  height=\"50px\"  width=\"50px\" src=\"assets/icon/promotion.png\" alt=\"\">\n          </ion-item>\n      </div>\n      <div class=\"col-4\" style=\"margin-left: -15px;\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <p [class]=\"activeItem == 'promotion' ? 'active list': 'list' \"  (click)=\"promotion()\">Promotion</p>\n        </ion-menu-button>\n         \n      </div>\n    </div>\n      \n    <div class=\"row\">\n      <div class=\"col-5\">\n          <ion-item>\n            <img  height=\"50px\"  width=\"50px\" src=\"assets/icon/offers.png\" alt=\"\">\n          </ion-item>\n      </div>\n      <div class=\"col-4\" style=\"margin-left: -15px;\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <p [class]=\"activeItem == 'offers' ? 'active list': 'list' \"(click)=\"Offers()\">Offers</p>\n        </ion-menu-button>\n        \n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n          <ion-item>\n            <img  height=\"50px\"  width=\"50px\" src=\"assets/icon/myprofile.png\" alt=\"\">\n          </ion-item>\n      </div>\n      <div class=\"col-4\" style=\"margin-left: -15px;\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <p [class]=\"activeItem == 'myprofile' ? 'active list': 'list' \"  (click)=\"myprofile()\">My Profile</p> \n        </ion-menu-button>\n       \n      </div>\n    </div>\n\n      \n    <div class=\"row\">\n      <div class=\"col-5\">\n          <ion-item>\n            <img  height=\"50px\"  width=\"50px\" src=\"assets/icon/support.png\" alt=\"\">\n          </ion-item>\n      </div>\n      <div class=\"col-4\" style=\"margin-left: -15px;\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <p [class]=\"activeItem == 'support' ? 'active list': 'list' \"  (click)=\"support()\">Support</p> \n        </ion-menu-button>\n       \n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n          <ion-item>\n            <img height=\"50px\" width=\"50px\" src=\"assets/icon/logout.png\" alt=\"\">\n            \n          </ion-item>\n      </div>\n      <div class=\"col-4\" style=\"margin-left: -15px;\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <p [class]=\"activeItem == 'logout' ? 'active list': 'list' \" style=\"cursor: pointer;\" (click)=\"logout()\" class=\"list\">Log out </p>\n        </ion-menu-button>\n       \n      </div>\n    </div>\n    \n  \n    \n  </ion-list>\n\n  \n</ion-content>\n</ion-menu>\n\n<ion-router-outlet  id=\"main\"></ion-router-outlet>";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map