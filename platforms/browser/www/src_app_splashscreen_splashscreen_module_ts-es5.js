(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_splashscreen_splashscreen_module_ts"], {
    /***/
    53860:
    /*!*************************************************************!*\
      !*** ./src/app/splashscreen/splashscreen-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SplashscreenPageRoutingModule": function SplashscreenPageRoutingModule() {
          return (
            /* binding */
            _SplashscreenPageRoutingModule
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


      var _splashscreen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./splashscreen.page */
      39836);

      var routes = [{
        path: '',
        component: _splashscreen_page__WEBPACK_IMPORTED_MODULE_0__.SplashscreenPage
      }];

      var _SplashscreenPageRoutingModule = function SplashscreenPageRoutingModule() {
        _classCallCheck(this, SplashscreenPageRoutingModule);
      };

      _SplashscreenPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SplashscreenPageRoutingModule);
      /***/
    },

    /***/
    85481:
    /*!*****************************************************!*\
      !*** ./src/app/splashscreen/splashscreen.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SplashscreenPageModule": function SplashscreenPageModule() {
          return (
            /* binding */
            _SplashscreenPageModule
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


      var _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./splashscreen-routing.module */
      53860);
      /* harmony import */


      var _splashscreen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./splashscreen.page */
      39836);

      var _SplashscreenPageModule = function SplashscreenPageModule() {
        _classCallCheck(this, SplashscreenPageModule);
      };

      _SplashscreenPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__.SplashscreenPageRoutingModule],
        declarations: [_splashscreen_page__WEBPACK_IMPORTED_MODULE_1__.SplashscreenPage]
      })], _SplashscreenPageModule);
      /***/
    },

    /***/
    39836:
    /*!***************************************************!*\
      !*** ./src/app/splashscreen/splashscreen.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SplashscreenPage": function SplashscreenPage() {
          return (
            /* binding */
            _SplashscreenPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_splashscreen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./splashscreen.page.html */
      61608);
      /* harmony import */


      var _splashscreen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./splashscreen.page.scss */
      5733);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _SplashscreenPage = /*#__PURE__*/function () {
        function SplashscreenPage(router, route) {
          var _this = this;

          _classCallCheck(this, SplashscreenPage);

          this.router = router;
          route.params.subscribe(function (val) {
            console.log(localStorage.getItem("24hrs-user-data"));
            var userdetails = localStorage.getItem("24hrs-user-data");
            console.log(userdetails);
            setTimeout(function () {
              if (userdetails) {
                _this.router.navigate(['/tabs']);
              } else {
                _this.router.navigate(['/signinpage']);
              }
            }, 2200);
          });
        }

        _createClass(SplashscreenPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SplashscreenPage;
      }();

      _SplashscreenPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
        }];
      };

      _SplashscreenPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-splashscreen',
        template: _raw_loader_splashscreen_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_splashscreen_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SplashscreenPage);
      /***/
    },

    /***/
    5733:
    /*!*****************************************************!*\
      !*** ./src/app/splashscreen/splashscreen.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cover {\n  background: #fff;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-animation: fade-out 4s;\n          animation: fade-out 4s;\n}\n\n.cover #icon {\n  position: absolute;\n  top: 35%;\n  left: 50%;\n  width: 100px;\n  height: 100px;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  -webkit-animation: zoom-in 2s;\n          animation: zoom-in 2s;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n\n@-webkit-keyframes zoom-in {\n  50% {\n    width: var(--size);\n  }\n  60% {\n    width: calc(var(--size) * 0.9);\n  }\n  100% {\n    width: 250%;\n  }\n}\n\n@keyframes zoom-in {\n  50% {\n    width: var(--size);\n  }\n  60% {\n    width: calc(var(--size) * 0.9);\n  }\n  100% {\n    width: 250%;\n  }\n}\n\n@-webkit-keyframes fade-out {\n  0%, 85% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fade-out {\n  0%, 85% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.content {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaHNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0Q7O0FBRUE7RUFFQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDRCxnQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUFERDs7QUFJQTtFQUNDO0lBQ0Msa0JBQUE7RUFEQTtFQUdEO0lBQ0MsOEJBQUE7RUFEQTtFQUdEO0lBQ0MsV0FBQTtFQURBO0FBQ0Y7O0FBUkE7RUFDQztJQUNDLGtCQUFBO0VBREE7RUFHRDtJQUNDLDhCQUFBO0VBREE7RUFHRDtJQUNDLFdBQUE7RUFEQTtBQUNGOztBQUdBO0VBQ0M7SUFDQyxVQUFBO0VBREE7RUFHRDtJQUNDLFVBQUE7RUFEQTtBQUNGOztBQUxBO0VBQ0M7SUFDQyxVQUFBO0VBREE7RUFHRDtJQUNDLFVBQUE7RUFEQTtBQUNGOztBQUlBO0VBQ0MsV0FBQTtBQUZEIiwiZmlsZSI6InNwbGFzaHNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY292ZXIge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG9wYWNpdHk6IDA7XG5cdGFuaW1hdGlvbjogZmFkZS1vdXQgNHMgLyppbmZpbml0ZSovO1xufVxuXG4uY292ZXIgI2ljb24ge1xuXHQvLyAtLXNpemU6IDEwMHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMzUlO1xuXHRsZWZ0OiA1MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OjEwMHB4O1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuXHQvLyB3aWR0aDogdmFyKC0tc2l6ZSk7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YW5pbWF0aW9uOiB6b29tLWluIDJzIC8qaW5maW5pdGUqLztcblx0YW5pbWF0aW9uLWRlbGF5OiAycztcbn1cblxuQGtleWZyYW1lcyB6b29tLWluIHtcblx0NTAlIHtcblx0XHR3aWR0aDogdmFyKC0tc2l6ZSk7XG5cdH1cblx0NjAlIHtcblx0XHR3aWR0aDogY2FsYyh2YXIoLS1zaXplKSAqIDAuOSk7XG5cdH1cblx0MTAwJSB7XG5cdFx0d2lkdGg6IDI1MCU7XG5cdH1cbn1cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuXHQwJSwgODUlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cdDEwMCUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cbn1cblxuLmNvbnRlbnQge1xuXHR3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    61608:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splashscreen/splashscreen.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  \n  <div class=\"row\">\n   \n    <div class=\"col-12\">\n      <div style=\"text-align: center;\" class=\"cover ion-text-center\">\n        <lottie-player src=\"https://assets4.lottiefiles.com/packages/lf20_uqv7etbo.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:75%;margin:10%;margin-top: 5px;\" loop autoplay></lottie-player>\n      </div>\n    </div>\n    \n  </div>\n   \n  </ion-content>\n  ";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_splashscreen_splashscreen_module_ts-es5.js.map