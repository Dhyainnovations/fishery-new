(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_tab3_tab3_module_ts"], {
    /***/
    39399:
    /*!******************************************!*\
      !*** ./src/app/modal/modal.component.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalComponent": function ModalComponent() {
          return (
            /* binding */
            _ModalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./modal.component.html */
      33889);
      /* harmony import */


      var _modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modal.component.scss */
      56235);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ModalComponent = /*#__PURE__*/function () {
        function ModalComponent(router, http, toastCtrl, route) {
          _classCallCheck(this, ModalComponent);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          route.params.subscribe(function (val) {});
        }

        _createClass(ModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ModalComponent;
      }();

      _ModalComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _ModalComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-modal',
        template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ModalComponent);
      /***/
    },

    /***/
    99818:
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab3PageRoutingModule": function Tab3PageRoutingModule() {
          return (
            /* binding */
            _Tab3PageRoutingModule
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab3.page */
      78592);

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page
      }];

      var _Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      _Tab3PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab3PageRoutingModule);
      /***/
    },

    /***/
    53746:
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab3PageModule": function Tab3PageModule() {
          return (
            /* binding */
            _Tab3PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab3.page */
      78592);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab3-routing.module */
      99818);
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../modal/modal.component */
      39399);

      var _Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      _Tab3PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page, _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent]
      })], _Tab3PageModule);
      /***/
    },

    /***/
    78592:
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab3Page": function Tab3Page() {
          return (
            /* binding */
            _Tab3Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab3.page.html */
      64255);
      /* harmony import */


      var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab3.page.scss */
      90943);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../modal/modal.component */
      39399);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      88259);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

      var _Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(popoverController, router, http, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, Tab3Page);

          this.popoverController = popoverController;
          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.selectedFile = null;
          this.userdetails = JSON.parse(window.atob(localStorage.getItem("24hrs-user-data")));
          this.date = new Date().toISOString();
          this.Category = '';
          this.subcategory = '';
          this.productname = '';
          this.description = '';
          this.cost = '';
          this.weight = '';
          this.categoryName = '';
          this.subcategoryName = '';
          this.categoryList = [];
          this.subcategoryList = [];
          this.unitList = [];
          this.PopupModel = false;
          this.subcategoryPopupModel = false;
          this.subCategoryNotfound = false;
          this.category_tbid = " ";
          route.params.subscribe(function (val) {
            _this.PopupModel = false;

            _this.getCategoryList(); //this.getSubcategoryList()


            _this.getUnitList();
          });
        }

        _createClass(Tab3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "MediaFileSelected",
          value: function MediaFileSelected(event) {
            this.selectedFile = event.target.files[0];
          }
        }, {
          key: "upload",
          value: function upload(ev) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover, _yield$popover$onDidD, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__.ModalComponent,
                        cssClass: 'my-custom-class',
                        event: ev,
                        translucent: true
                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                      _context.next = 7;
                      return popover.onDidDismiss();

                    case 7:
                      _yield$popover$onDidD = _context.sent;
                      role = _yield$popover$onDidD.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "backToprivious",
          value: function backToprivious() {
            this.PopupModel = false;
            this.Category = '';
          }
        }, {
          key: "ScBackToprivious",
          value: function ScBackToprivious() {
            this.subcategoryPopupModel = false;
            this.subcategory = '';
          }
        }, {
          key: "addproduct",
          value: function addproduct() {
            this.router.navigate(['/myproducts']);
          }
        }, {
          key: "createCategory",
          value: function createCategory() {
            var _this2 = this;

            this.PopupModel = false;
            var catData = {
              category_name: this.categoryName,
              token: this.userdetails.id,
              created_at: this.date
            };
            this.http.post('/create_category', catData).subscribe(function (response) {
              console.log(response);

              if (response.success == "true") {
                _this2.Category = '';
                _this2.categoryName = '';

                _this2.getCategoryList();
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "popupModel",
          value: function popupModel(data) {
            var _this3 = this;

            if (data.category == "categoryPopup") {
              this.PopupModel = true;
            }

            if (data.subcategory == "subcategoryPopup") {
              this.subcategoryPopupModel = true;
            }

            var formdata = new FormData();
            formdata.append("category", data.category);
            console.log(data.category);
            this.category_tbid = data.category;
            var obj = {
              category: data.category
            };
            this.http.post('/read_subcategory', obj).subscribe(function (response) {
              console.log(response.records);
              _this3.subcategoryList = response.records;
              console.log(_this3.subcategoryList);
              _this3.subCategoryNotfound = false;
            }, function (error) {
              console.log(error);
              _this3.subCategoryNotfound = true;
              _this3.subcategoryList = [];
            });
          }
        }, {
          key: "createSubcategory",
          value: function createSubcategory() {
            var _this4 = this;

            this.subcategoryPopupModel = false;
            var subcatData = {
              category: this.Category,
              subcategory_name: this.subcategoryName
            };
            this.http.post('/create_subcategory', subcatData).subscribe(function (response) {
              console.log(response);

              if (response.success == "true") {
                console.log("test");
                _this4.Category = '';
                _this4.subcategory = '';
                _this4.subcategoryName = '';
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getCategoryList",
          value: function getCategoryList() {
            var _this5 = this;

            this.http.get('/read_all_category').subscribe(function (response) {
              console.log(response.records);
              _this5.categoryList = response.records;
              console.log(response.records);
              console.log(_this5.categoryList);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "addToProduct",
          value: function addToProduct() {
            var _this6 = this;

            var productData = {
              category: this.Category,
              subcategory: this.subcategory,
              product_name: this.productname,
              description: this.description,
              cost: this.cost
            };
            this.http.post('/update_product', productData).subscribe(function (response) {
              console.log(response);

              if (response.success == "true") {
                // const Toast = Swal.mixin({
                //   toast: true,
                //   position: 'top-end',
                //   showConfirmButton: false,
                //   timer: 1000,
                //   timerProgressBar: true,
                //   didOpen: (toast) => {
                //     toast.addEventListener('mouseenter', Swal.stopTimer)
                //     toast.addEventListener('mouseleave', Swal.resumeTimer)
                //   }
                // })
                // Toast.fire({
                //   icon: 'success',
                //   title: 'Signed in successfully'
                // })
                _this6.addproduct();
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getUnitList",
          value: function getUnitList() {
            var _this7 = this;

            this.http.post('/read_unit', '').subscribe(function (response) {
              console.log(response);
              _this7.unitList = response.records;
              console.log(_this7.unitList);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "onClickSubmit",
          value: function onClickSubmit(data) {
            var _this8 = this;

            this.image = this.selectedFile;
            console.log(this.image);
            var formdata = new FormData();
            formdata.append("category", this.category_tbid);
            formdata.append("subcategory", data.subcategory);
            formdata.append("product_name", data.product_name);
            formdata.append("cost", data.cost);
            formdata.append("unit", data.unit);
            formdata.append("description", data.description);
            formdata.append("product_image", this.image);
            formdata.append("weight", data.weight);
            console.log('formData: ', formdata.getAll('category'), formdata.getAll('product_image')); // var body = "category = " + data.category + "subcategory = " + data.subcategory + "product_name = " + data.product_name + "cost = " + data.cost + "unit = " + data.unit + "product_image = " + this.image + "description = " + data.description;
            // console.log(body);

            this.http.postFormData("/create_product", formdata).subscribe(function (response) {
              console.log(response);

              if (response.success == "true") {
                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: function didOpen(toast) {
                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().stopTimer);
                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().resumeTimer);
                  }
                });
                Toast.fire({
                  icon: 'success',
                  title: 'Product Added Successfully '
                });

                _this8.router.navigate(['/myproducts']);
              }

              if (response.success == "false" || response.message == "Product Already Exist.") {
                var _Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1000,
                  timerProgressBar: true,
                  didOpen: function didOpen(toast) {
                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().stopTimer);
                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().resumeTimer);
                  }
                });

                _Toast.fire({
                  icon: 'success',
                  title: 'Product Already Exist'
                });

                _this8.router.navigate(['/myproducts']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return Tab3Page;
      }();

      _Tab3Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }];
      };

      _Tab3Page = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab3Page);
      /***/
    },

    /***/
    56235:
    /*!********************************************!*\
      !*** ./src/app/modal/modal.component.scss ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#card {\n  background-color: transparent !important;\n  border-radius: 0px !important;\n  border: 1px solid #fff;\n}\n\n.items {\n  align-items: center !important;\n  margin: 5px !important;\n}\n\n.gallary-btn, .upload-btn {\n  font-size: smaller;\n  margin: 6px;\n  background-color: darkturquoise;\n  border: 1px solid darkturquoise;\n}\n\n#close {\n  color: red;\n  cursor: pointer;\n}\n\n#close:hover {\n  color: #7e0202;\n}\n\nlottie-player {\n  cursor: pointer;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSw4QkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFFQSwrQkFBQTtFQUNBLCtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQURBO0VBQ0ksaUNBQUE7RUFLQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUNJO0VBQ0ksYUFBQTtBQUNSIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG59XG4uaXRlbXN7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjo1cHggIWltcG9ydGFudDtcbn1cbi5nYWxsYXJ5LWJ0biwgLnVwbG9hZC1idG57XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgIG1hcmdpbjogNnB4O1xuICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjpkYXJrdHVycXVvaXNlO1xuICAgIGJvcmRlcjoxcHggc29saWQgZGFya3R1cnF1b2lzZTtcbiAgICBcbn1cbiNjbG9zZXtcbiAgICBjb2xvcjpyZWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2Nsb3NlOmhvdmVye1xuICAgIGNvbG9yOiByZ2IoMTI2LCAyLCAyKTtcbn1cbmxvdHRpZS1wbGF5ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmXG4gICAgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOGNkYmUyXG4gICAgLy8gMCUsICNkMWYyZTdcbiAgICAvLyAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0iXX0= */";
      /***/
    },

    /***/
    90943:
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".addproduct-btn {\n  border-radius: 5px !important;\n  width: 50%;\n  height: 35px;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%) !important;\n  border: 1px solid #fff;\n  margin: 5px;\n  color: #fff;\n}\n\ninput[type=text] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 90%;\n  box-sizing: border-box;\n  background-color: #fff;\n  border-bottom: 2px solid #23d5ab;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 1px solid #23d5ab !important;\n  box-shadow: 0 0 8px #23d5ab;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlFQUFBO0VBR0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQURGOztBQVFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBTEE7O0FBT0E7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QUFKQTs7QUFPQTtFQUNFLG9DQUFBO0VBS0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFSRjs7QUFTRTtFQUNJLGFBQUE7QUFQTiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRwcm9kdWN0LWJ0bntcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDozNXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIzYTZkNVxuICAwJSwgIzIzZDVhYlxuICAxMDAlKSAhaW1wb3J0YW50O1xuICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbjo1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLy8gLmFkZHByb2R1Y3QtYnRuOmhvdmVye1xuLy8gICAgIC0tYmFja2dyb3VuZDogIzIzZDVhYiAhaW1wb3J0YW50O1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOjFweCBzb2xpZCAjMjNkNWFiICFpbXBvcnRhbnQ7XG4vLyB9XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuZm9udC1zaXplOiAxNXB4O1xubWFyZ2luOiAwIDVweDtcbndpZHRoOiA5MCU7XG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjNkNWFiO1xufVxuaW5wdXQ6Zm9jdXMge1xub3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuYm9yZGVyOjFweCBzb2xpZCAjMjNkNWFiICFpbXBvcnRhbnQ7XG5ib3gtc2hhZG93OiAwIDAgOHB4ICMyM2Q1YWI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjojRjRGN0ZBICAhaW1wb3J0YW50O1xuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXG4gIC8vIDAlLCAjZDFmMmU3XG4gIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG5cbiAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdzogYXV0bztcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    33889:
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content >\n\n  <div  class=\"row mt-3\" >\n    <div class=\"col-4 items\">\n      <lottie-player  src=\"https://assets5.lottiefiles.com/packages/lf20_GZxjzF.json\" background=\"transparent\"\n      speed=\"1.5\" style=\"width:100%;margin-left:15px;\" loop autoplay></lottie-player>          \n    </div>\n    <div  class=\"col-4 items \" >\n      <lottie-player (click)=\"getPicture()\" src=\"https://assets2.lottiefiles.com/packages/lf20_b0shjbsq.json\" background=\"transparent\"\n      speed=\"1.5\" style=\"width:100%;margin-left:35px;\" loop autoplay></lottie-player>\n    </div>\n\n    <div  class=\"col-4 items ion-text-right\">\n      <p style=\"width:100%;margin-left:15px;\" >Gallery</p>         \n    </div>\n    <div  class=\"col-4 items ion-text-right\" >\n      <p style=\"width:100%;margin-left:25px;\">Upload</p>\n    </div>\n\n    <div>\n      <p style=\"font-size: 9px;color:red; text-align:center;\">Image will be uploaded after successful verification</p>\n    </div>\n\n  </div> \n</ion-content>\n";
      /***/
    },

    /***/
    64255:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n\n        <h5 style=\"color:#fff;margin-top:30px\">24HRS</h5>\n      </div>\n      <div class=\"col-7\" style=\"text-align: right;width: 90%;margin-top: -40px;\">\n        <svg style=\"margin:5px;text-align:right\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\"\n            fill=\"white\" />\n        </svg>\n      </div>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"bg-class\" [fullscreen]=\"true\">\n  <div class=\"container\">\n    <form #addproduct=\"ngForm\" (ngSubmit)=\"onClickSubmit(addproduct.value)\">\n      <div class=\"signin-div mt-2\">\n        <div class=\"row mt-2\" style=\"padding: 10px;\">\n          <div class=\"col-12\">\n\n            <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Add Your Product</b></h5>\n            <p class=\"name mt-2 ion-text-left\" style=\"color:hsl(0, 0%, 25%);\">Category :</p>\n          </div>\n\n        <form  #categoryselect=\"ngForm\"  (change)=\"popupModel(categoryselect.value)\">\n          <div class=\"col-12 \">\n            <div class=\"select\" >\n              <select  ngModel  name=\"category\">\n                <option value=\"\" disabled selected>Select Your Category</option>\n                <option *ngFor=\"let cat of categoryList\" value=\"{{cat.tbid}}\" >{{cat.category}}</option>\n                 <option style=\"background-color: #23d5ab;\" value=\"categoryPopup\" >+ add new</option>\n              </select>\n            </div>\n          </div>\n        </form>\n\n          <div class=\"col-12 mt-2\">\n            <div class=\"select\">\n              <select  ngModel name=\"subcategory\">\n                <option value=\"\" disabled selected>Select Your Subcategory</option>\n                <option  *ngFor=\"let subcat of subcategoryList\" value=\"{{subcat.tbid}}\">\n                  {{subcat.subsubcategory}}\n                </option>\n                <option  disabled *ngIf=\"subCategoryNotfound\">No Sub Category Found</option>\n               <option style=\"background-color:#23d5ab;\" value=\"subcategoryPopup\" >+ add new</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"col-6 mt-3\">\n            <p class=\"name\" style=\"color:#404040;\">Product Name :</p>\n          </div>\n          <div class=\"col-6 mt-2\">\n            <input ngModel name=\"product_name\" type=\"text\" placeholder=\"\" id=\"offer\">\n          </div>\n\n          <div class=\"col-6\">\n            <p class=\"name\" style=\"color:#404040;\">Cost:</p>\n          </div>\n          <div class=\"col-6\">\n            <input ngModel name=\"cost\" type=\"text\"  id=\"offer\">\n          </div>\n\n          <div class=\"col-6\">\n            <p class=\"name\" style=\"color:#404040;\">Weight:</p>\n            <input ngModel name=\"weight\" type=\"text\"  id=\"offer\">\n          </div>\n\n\n          <div class=\"col-6\">\n            <div class=\"select mt-4\" id=\"kg-dropdwon\">\n              <select ngModel name=\"unit\">\n                <option value=\"\" disabled selected>Select</option>\n                <option *ngFor=\"let item of unitList\" value=\"{{item.unit}}\">{{item.unit}}</option>\n              </select>\n            </div>\n          </div>\n\n          <!-- <div class=\"col-6 mt-3\">\n            <p class=\"name\" style=\"color:#404040;\">Product picture:</p>\n          </div>\n          <div class=\"col-6 mt-3\">\n            <svg style=\"margin:10px;cursor:pointer;\" (click)=\"upload()\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\"\n              height=\"16\" fill=\"#23d5ab\" class=\"bi bi-upload\" viewBox=\"0 0 16 16\">\n              <path\n                d=\"M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z\" />\n              <path\n                d=\"M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z\" />\n            </svg>\n          </div> -->\n\n          <label class=\"btn btn-default\">\n            <input type=\"file\" class=\"\" (change)=\"MediaFileSelected($event)\" name=\"image\">\n          </label>\n          <!-- <button class=\"btn btn-primary\" (click)=\"uploadMedia()\">Submit</button> -->\n\n\n        </div>\n\n        <div class=\"form-group \">\n          <label style=\"color:#404040;\" for=\"exampleFormControlTextarea1\">Product Description :</label>\n          <textarea maxlength=\"80\" ngModel name=\"description\" style=\"background-color: #fff;\" class=\"form-control\"\n            id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n        </div>\n\n        <div style=\"width:100%; text-align: center;\">\n          <button type=\"submit\" class=\"btn addproduct-btn mt-2\">Add Product </button>\n        </div>\n      </div>\n\n\n    </form>\n  </div>\n\n\n</ion-content>\n\n<div class=\"card\" *ngIf=\"PopupModel\" style=\"margin-top: 20px;\" id=\"card\">\n  <div class=\"row\" style=\"margin:10%\" id=\"modal\">\n    <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n      <svg (click)=\"backToprivious()\" style=\"color: black;margin-top:-8px;cursor:pointer\"\n        xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\"\n        viewBox=\"0 0 16 16\">\n        <path fill-rule=\"evenodd\"\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n      </svg>\n    </div>\n    <div class=\"col-12\">\n      <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Type Your Category Name</b></h5>\n    </div>\n    <div class=\"col-12\">\n      <input [(ngModel)]=\"categoryName\" type=\"text\">\n    </div>\n\n    <div style=\"width:100%; text-align: center;\">\n      <button type=\"button\" (click)=\"createCategory()\" class=\"btn  submit-btn mt-2\">Submit</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"subcategoryPopupModel\" style=\"margin-top: 20px;\" id=\"card\">\n  <div class=\"row\" style=\"margin:10%\" id=\"modal\">\n    <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n      <svg (click)=\"ScBackToprivious()\" style=\"color: black;margin-top:-8px;cursor:pointer\"\n        xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\"\n        viewBox=\"0 0 16 16\">\n        <path fill-rule=\"evenodd\"\n          d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n      </svg>\n    </div>\n    <div class=\"col-12\">\n      <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Type Your Subcategory Name</b></h5>\n    </div>\n    <div class=\"col-12\">\n      <input [(ngModel)]=\"subcategoryName\" type=\"text\">\n    </div>\n\n    <div style=\"width:100%; text-align: center;\">\n      <button type=\"button\" (click)=\"createSubcategory()\" class=\"btn  submit-btn mt-2\">Submit</button>\n    </div>\n  </div>\n</div> ";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab3_tab3_module_ts-es5.js.map