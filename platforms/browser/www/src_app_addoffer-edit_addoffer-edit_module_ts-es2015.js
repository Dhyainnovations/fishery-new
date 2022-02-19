(self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_addoffer-edit_addoffer-edit_module_ts"],{

/***/ 52444:
/*!***************************************************************!*\
  !*** ./src/app/addoffer-edit/addoffer-edit-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddofferEditPageRoutingModule": function() { return /* binding */ AddofferEditPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _addoffer_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addoffer-edit.page */ 65776);




const routes = [
    {
        path: '',
        component: _addoffer_edit_page__WEBPACK_IMPORTED_MODULE_0__.AddofferEditPage
    }
];
let AddofferEditPageRoutingModule = class AddofferEditPageRoutingModule {
};
AddofferEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddofferEditPageRoutingModule);



/***/ }),

/***/ 74329:
/*!*******************************************************!*\
  !*** ./src/app/addoffer-edit/addoffer-edit.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddofferEditPageModule": function() { return /* binding */ AddofferEditPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _addoffer_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addoffer-edit-routing.module */ 52444);
/* harmony import */ var _addoffer_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addoffer-edit.page */ 65776);







let AddofferEditPageModule = class AddofferEditPageModule {
};
AddofferEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addoffer_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddofferEditPageRoutingModule
        ],
        declarations: [_addoffer_edit_page__WEBPACK_IMPORTED_MODULE_1__.AddofferEditPage]
    })
], AddofferEditPageModule);



/***/ }),

/***/ 65776:
/*!*****************************************************!*\
  !*** ./src/app/addoffer-edit/addoffer-edit.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddofferEditPage": function() { return /* binding */ AddofferEditPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_addoffer_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addoffer-edit.page.html */ 12529);
/* harmony import */ var _addoffer_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addoffer-edit.page.scss */ 97446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);








let AddofferEditPage = class AddofferEditPage {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.subcategoryList = [];
        this.Category = '';
        this.subcategory = '';
        this.productName = '';
        this.offer = '';
        this.totalCost = '';
        this.offerPrice = '';
        this.offerTime = '';
        this.description = '';
        this.otheroffer = "";
        this.category_tbid = 1;
        this.subCategoryNotfound = false;
        this.addnewcategorypopup = false;
        this.addnewsubcategorypopup = false;
        this.addnewproductpopup = false;
        route.params.subscribe(val => {
            this.getCategoryList();
            this.getProductList();
            //this.getsubCategoryList()
            this.gettBid();
            this.readOneOffer();
            console.log(this.productName);
        });
    }
    ngOnInit() {
    }
    backAddoffer() {
        this.router.navigate(['/tabs/tab4']);
    }
    getCategoryList() {
        this.http.get('/read_all_category').subscribe((response) => {
            this.categoryList = response.records;
            console.log(response.records);
        }, (error) => {
            console.log(error);
        });
    }
    gettBid() {
        this.route.queryParams.subscribe(params => {
            console.log(params.tbid);
            this.tbid_value = params.tbid;
        });
    }
    readOneOffer() {
        this.http.get('/read_one_offer?o=' + this.tbid_value).subscribe((response) => {
            this.description = response.records.description;
            this.Category = response.records.category;
            this.subcategory = response.records.subcategory;
            this.productName = response.records.product;
            this.offer = response.records.offer;
            this.otheroffer = response.records.other_offer;
            this.totalCost = response.records.total_cost;
            this.offerPrice = response.records.offer_price;
            this.offerTime = response.records.offer_time;
            this.tbid = response.records.tbid;
        }, (error) => {
            console.log(error);
        });
    }
    popupModel(data) {
        const formdata = new FormData();
        formdata.append("category", data.category);
        this.category_tbid = data.category;
        this.Category = data.category;
        console.log(data.category);
        const c = data.category;
        this.http.get('/read_one_category?c=' + c).subscribe((response) => {
            this.category_tbid = response.records.tbid;
            console.log(response.records.tbid);
        }, (error) => {
            console.log(error);
        });
    }
    categorysubmit() {
        const obj = {
            category: this.category_tbid
        };
        this.http.post('/read_subcategory', obj).subscribe((response) => {
            console.log(response.records);
            this.subcategoryList = response.records;
            console.log(this.subcategoryList);
            this.subCategoryNotfound = false;
        }, (error) => {
            console.log(error);
            this.subCategoryNotfound = true;
            this.subcategoryList = [];
        });
    }
    offerDelete() {
        const obj = {
            tbid: this.tbid_value
        };
        this.http.post('/delete_offer', obj).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Deleted successfully'
                });
            }
        }, (error) => {
            console.log(error);
        });
    }
    // getsubCategoryList() {
    //   this.http.get('/read_all_subcategory',).subscribe((response: any) => {
    //     this.subcategoryList = response.records
    //     console.log(response.records);
    //   }, (error: any) => {
    //     console.log(error);
    //   }
    //   );
    // }
    getProductList() {
        this.http.get('/read_all_product').subscribe((response) => {
            this.productList = response.records;
            console.log(response.records);
        }, (error) => {
            console.log(error);
        });
    }
    addoffer() {
        const productData = {
            tbid: this.tbid,
            category: this.category_tbid,
            subcategory: this.subcategory_tbid,
            product: this.product_tbid,
            description: this.description,
            offer: this.offer,
            other_offer: this.otheroffer,
            total_cost: this.totalCost,
            offer_price: this.offerPrice,
            offer_time: this.offerTime
        };
        this.http.post('/update_offer', productData).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                console.log(response);
                console.log(productData);
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Offer updated Successfully'
                });
                this.router.navigate(['/tabs/tab4']);
            }
        }, (error) => {
            console.log(error);
        });
    }
    hideaddnewcategorypopup() {
        this.addnewcategorypopup = false;
    }
    showaddnewcategorypopup() {
        this.addnewcategorypopup = true;
    }
    showaddnewsubcategorypopup() {
        this.addnewsubcategorypopup = true;
    }
    hideaddnewsubcategorypopup() {
        this.addnewsubcategorypopup = false;
    }
    subcategorysubmit(value) {
        console.log(value.subcategory);
        this.subcategory = value.subcategory;
        const s = value.subcategory;
        this.http.get('/read_one_subcategory?s=' + s).subscribe((response) => {
            this.subcategory_tbid = response.records.tbid;
        }, (error) => {
            console.log(error);
        });
    }
    showaddproductpopup() {
        this.addnewproductpopup = true;
    }
    hideaddproductpopup() {
        this.addnewproductpopup = false;
    }
    productselectform(value) {
        this.productName = value.productName;
        console.log(this.productName);
        const p = this.productName;
        this.http.get('/read_one_product?p=' + p).subscribe((response) => {
            this.product_tbid = response.records.tbid;
            console.log(this.product_tbid);
        }, (error) => {
            console.log(error);
        });
    }
};
AddofferEditPage.ctorParameters = () => [
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
AddofferEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-addoffer-edit',
        template: _raw_loader_addoffer_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addoffer_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddofferEditPage);



/***/ }),

/***/ 97446:
/*!*******************************************************!*\
  !*** ./src/app/addoffer-edit/addoffer-edit.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  background-color: #fff;\n  border: 1px solid #bfbfbf;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc !important;\n  width: 96% !important;\n  margin: 5px;\n}\n\n#offer:focus {\n  outline: none !important;\n  border: 1px solid #fff;\n  box-shadow: 0 0 2px #e9f3ff;\n}\n\n.confirm-btn {\n  border-radius: 5px !important;\n  width: 50%;\n  height: 35px;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  border: 1px solid #fff;\n  margin: 5px;\n}\n\n#kg-dropdwon {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 3em;\n  border-radius: 0.25em;\n  overflow: hidden;\n}\n\ninput[type=text] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #23d5ab;\n}\n\ninput[type=text]:focus {\n  border-color: #23d5ab !important;\n  box-shadow: 0 0 8px 0 #23d5ab !important;\n}\n\n#edit {\n  cursor: pointer;\n}\n\n.myproduct-div {\n  position: absolute;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: 5px;\n}\n\n.select {\n  width: 95% !important;\n  text-align: center !important;\n}\n\n.repost-btn {\n  background-color: #23d5ab;\n  color: #fff;\n  text-align: center;\n}\n\n.pop-up-model {\n  background-color: white;\n}\n\n.delete-btn {\n  background: linear-gradient(to right, #ff80a0 0%, #eb154b 100%);\n  color: #fff;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.update-btn {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%) !important;\n  color: #fff;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZG9mZmVyLWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUFBOztBQUdBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhEQUFBO0VBR0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUZBOztBQUtBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRkE7O0FBSUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBREE7O0FBUUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0FBTEE7O0FBT0E7RUFDQSxlQUFBO0FBSkE7O0FBTUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBSEE7O0FBTUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBSEE7O0FBTUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBQUpBOztBQU9BO0VBQ0UsdUJBQUE7QUFKRjs7QUFNQTtFQUNFLCtEQUFBO0VBR0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFPRTtFQUNBLHlFQUFBO0VBR0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFRQTtFQUNBLG9DQUFBO0VBS0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFUQTs7QUFVQTtFQUNJLGFBQUE7QUFSSiIsImZpbGUiOiJhZGRvZmZlci1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcmR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjoxcHggc29saWQgI2JmYmZiZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2NjYyAhaW1wb3J0YW50O1xuICB3aWR0aDo5NiUgIWltcG9ydGFudDtcbiAgbWFyZ2luOjVweDtcbn1cblxuI29mZmVyOmZvY3VzIHtcbm91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbmJvcmRlcjoxcHggc29saWQgI2ZmZjtcbmJveC1zaGFkb3c6IDAgMCAycHggI2U5ZjNmZjtcbn1cblxuLmNvbmZpcm0tYnRue1xuYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG53aWR0aDogNTAlO1xuaGVpZ2h0OjM1cHg7XG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIzYTZkNVxuICAwJSwgIzIzZDVhYlxuICAxMDAlKTtcbmNvbG9yOiNmZmY7XG5ib3JkZXI6MXB4IHNvbGlkICNmZmY7XG5tYXJnaW46NXB4O1xufVxuXG4ja2ctZHJvcGR3b24ge1xucG9zaXRpb246IHJlbGF0aXZlO1xuZGlzcGxheTogZmxleDtcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAzZW07XG5ib3JkZXItcmFkaXVzOiAuMjVlbTtcbm92ZXJmbG93OiBoaWRkZW47XG59XG5pbnB1dFt0eXBlPXRleHRdIHtcbmZvbnQtc2l6ZTogMTVweDtcbm1hcmdpbjogMCA1cHg7XG53aWR0aDogOTAlO1xuYm94LXNpemluZzogYm9yZGVyLWJveDtcbmJvcmRlcjogbm9uZTtcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5ib3JkZXItYm90dG9tOiAycHggc29saWQgIzIzZDVhYjtcbn1cbi8vIGlucHV0OmZvY3VzIHtcbi8vICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuLy8gICBib3JkZXI6MXB4IHNvbGlkICNlOWYzZmYgIWltcG9ydGFudDtcbi8vICAgYm94LXNoYWRvdzogMCAwIDJweCAjOGI4ZDkxO1xuLy8gfVxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xuYm9yZGVyLWNvbG9yOiAjMjNkNWFiICFpbXBvcnRhbnQ7XG5ib3gtc2hhZG93OiAwIDAgOHB4IDAgIzIzZDVhYiAhaW1wb3J0YW50O1xufVxuI2VkaXR7XG5jdXJzb3I6IHBvaW50ZXI7XG59XG4ubXlwcm9kdWN0LWRpdntcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5ib3JkZXI6MXB4IHNvbGlkICNjY2M7XG5ib3JkZXItcmFkaXVzOiA4cHg7XG5ib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2ViZTZlNjtcbndpZHRoOjk2JSAhaW1wb3J0YW50O1xubWFyZ2luOjVweDtcblxufVxuLnNlbGVjdHtcbndpZHRoOjk1JSAhaW1wb3J0YW50O1xudGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5yZXBvc3QtYnRue1xuYmFja2dyb3VuZC1jb2xvcjogIzIzZDVhYjtcbmNvbG9yOiNmZmY7XG4vLyBtYXJnaW4tdG9wOiAtNXB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG4ucG9wLXVwLW1vZGVse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5kZWxldGUtYnRuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY4MGEwXG4gIDAlLCAjZWIxNTRiXG4gIDEwMCUpO1xuICBjb2xvcjojZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgLnVwZGF0ZS1idG57XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gIDAlLCAjMjNkNWFiXG4gIDEwMCUpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuaW9uLWNvbnRlbnQge1xuYmFja2dyb3VuZC1jb2xvcjojRjRGN0ZBICAhaW1wb3J0YW50O1xuLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZGFya3R1cnF1b2lzZVxuLy8gMCUsICNkMWYyZTdcbi8vIDEwMCUpICFpbXBvcnRhbnQ7XG5cbi0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4tLW92ZXJmbG93OiBoaWRkZW47XG5vdmVyZmxvdzogYXV0bztcbiY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxufSJdfQ== */");

/***/ }),

/***/ 12529:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addoffer-edit/addoffer-edit.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n        <h5 style=\"color:#fff;margin-top:30px\">24HRS</h5>\n      </div>\n      <div class=\"col-7\" style=\"text-align: right;width: 90%;margin-top: -40px;\">\n        <svg style=\"margin:5px;text-align:right\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\"\n            fill=\"white\" />\n        </svg>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"signin-div mb-2\" style=\"margin-top: 20px;\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n\n            <svg (click)=\"backAddoffer()\" style=\"margin-top:-8px;cursor:pointer;margin:5px;\"\n              xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"20\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\"\n              viewBox=\"0 0 16 16\">\n              <path fill-rule=\"evenodd\"\n                d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n            </svg>\n          </div>\n          <div class=\"col-12\">\n            <h5 class=\"name  ion-text-center\" style=\"color:#676767;\"><b>Edit Your Offer</b></h5>\n          </div>\n          <div class=\"col-6\">\n            <p class=\"name mt-3 ion-text-left\" style=\"color:#404040;\">Category :</p>\n          </div>\n          <div class=\"col-6 mt-3\">\n            <button class=\"btn btn-sm btn-primary\" style=\"font-size: 10px;\" (click)=\"showaddnewcategorypopup()\">Change\n              Category</button>\n          </div>\n          <div class=\"col-12\">\n            <input type=\"text\" disabled [(ngModel)]=\"Category\">\n          </div>\n          <!-- <form  #categoryselect=\"ngForm\"  (change)=\"popupModel(categoryselect.value)\">\n            <div class=\"col-12 \">\n              <div class=\"select\" >\n                <select (change)=\"popupModelOpen()\" [(ngModel)]=\"category\" name=\"category\">\n                  <option value=\"\" disabled selected>Select Your Category</option>\n                  <option *ngFor=\"let cat of categoryList\" value=\"{{cat.tbid}}\">{{cat.category}}</option>\n                </select>\n              </div>\n            </div>\n          </form> -->\n\n          <div class=\"col-6\">\n            <p class=\"name mt-3 ion-text-left\" style=\"color:#404040;\">Sub Category :</p>\n          </div>\n          <div class=\"col-6 mt-3\">\n            <button class=\"btn btn-sm btn-primary\" style=\"font-size: 9px;\" (click)=\"showaddnewsubcategorypopup()\">Change\n              Sub Category</button>\n          </div>\n          <div class=\"col-12\">\n            <input type=\"text\" disabled [(ngModel)]=\"subcategory\">\n          </div>\n          <!-- <div class=\"col-12\">\n            <div class=\"select\" id=\"kg-dropdwon\">\n              <select [(ngModel)]=\"subcategory\">\n                <option value=\"\" disabled selected>Select Your Sub Category</option>\n                <option *ngFor=\"let subcat of subcategoryList\" value=\"{{subcat.tbid}}\">{{subcat.subsubcategory}}\n                </option>\n                <option  disabled *ngIf=\"subCategoryNotfound\">No Sub Category Found</option>\n              </select>\n            </div>\n          </div> -->\n\n\n\n\n          <div class=\"col-6 ion-text-left\">\n            <p class=\"name mt-2\" style=\"color:#404040;\">Product:</p>\n          </div>\n          <div class=\"col-6 mt-3\">\n            <button class=\"btn btn-sm btn-primary\" style=\"font-size: 10px;\" (click)=\"showaddproductpopup()\">Change\n              Product</button>\n          </div>\n          <div class=\"col-12\">\n            <input type=\"text\" disabled [(ngModel)]=\"productName\">\n          </div>\n          <!-- <div class=\"col-12\">\n          <div class=\"select\" id=\"kg-dropdwon\">\n            <select [(ngModel)]=\"productName\">\n              <option value=\"\" disabled selected>Select Your Product</option>\n              <option *ngFor=\"let product of productList\" value=\"{{product.tbid}}\">{{product.product_name}}\n              </option>\n            </select>\n          </div>\n        </div> -->\n\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col-6\">\n            <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Offer:</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"offer\" type=\"text\" placeholder=\"10%\" id=\"offer\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Other Offer:</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"otheroffer\" type=\"text\" placeholder=\"10%\" id=\"offer\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Total Cost :</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"totalCost\" type=\"text\" placeholder=\"130\" id=\"offer\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Offer Price :</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"offerPrice\" type=\"text\" placeholder=\"117\" id=\"offer\">\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <p class=\"edit-name ion-text-left\" style=\"color:#404040;\">Offer Time :</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"offerTime\" type=\"text\" placeholder=\"2:00:00\" id=\"offer\">\n          </div>\n        </div>\n\n        <div class=\"form-group mt-3 ion-text-center\">\n          <label for=\"exampleFormControlTextarea1\" style=\"color:#404040;\"> Description </label>\n          <textarea style=\"background-color: #fff;margin-top: 5px;\" class=\"form-control\" [(ngModel)]=\"description\"\n            description id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-6 ion-text-center\">\n            <button (click)=\"offerDelete()\" class=\"btn btn-sm delete-btn mt-2\">Delete</button>\n          </div>\n          <div class=\"col-6 ion-text-center\">\n            <button class=\"btn btn-sm update-btn mt-2\" (click)=\"addoffer() \">Update</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n\n<div *ngIf=\"addnewcategorypopup\" class=\"container pop-up-model\">\n  <div class=\"card pop-up-card ion-text-center\" style=\"padding: 10px;\">\n    <div class=\"row ion-text-center\" style=\"padding-bottom: 400px;padding-top:20px ;\">\n      <ion-icon name=\"chevron-back-outline\" style=\"font-size: larger; position: absolute; right: 100px; top: 15px;\"\n        class=\"ion-text-left\" (click)=\"hideaddnewcategorypopup()\"></ion-icon>\n      <div class=\"col-12\">\n        <p class=\"name ion-text-left\" style=\"color:hsl(0, 0%, 25%); margin-left: 25px; margin-top: 40px;\">Add New\n          Category </p>\n      </div>\n      <form #categoryselect=\"ngForm\" (change)=\"popupModel(categoryselect.value)\" (ngSubmit)=\"categorysubmit()\">\n        <div class=\"col-12 \">\n          <div class=\"select\">\n            <select (change)=\"popupModelOpen()\" ngModel name=\"category\">\n              <option value=\"\" disabled selected>Select Your Category</option>\n              <option *ngFor=\"let cat of categoryList\" value=\"{{cat.category}}\">{{cat.category}}</option>\n            </select>\n          </div>\n        </div>\n        <button class=\"btn btn-success btn-sm mt-4\" type=\"submit\"> Update Category</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<div *ngIf=\"addnewsubcategorypopup\" class=\"container pop-up-model\">\n  <div class=\"card pop-up-card ion-text-center\" style=\"padding: 7px;\">\n    <div class=\"row ion-text-center\" style=\"padding-bottom: 400px;padding-top:20px ;\">\n      <ion-icon name=\"chevron-back-outline\" style=\"font-size: larger; position: absolute; right: 100px; top: 15px;\"\n        class=\"ion-text-left\" (click)=\"hideaddnewsubcategorypopup()\"></ion-icon>\n      <div class=\"col-12\">\n        <p class=\"name ion-text-left\" style=\"color:hsl(0, 0%, 25%); margin-left: 25px; margin-top: 40px;\">Sub Category\n        </p>\n      </div>\n      <form #subcategoryselect=\"ngForm\" (ngSubmit)=\"subcategorysubmit(subcategoryselect.value)\">\n        <div class=\"col-12 mt-2\">\n          <div class=\"select\">\n            <select ngModel name=\"subcategory\">\n              <option value=\"\" disabled selected>Select Your Sub Category</option>\n              <option *ngFor=\"let subcat of subcategoryList; let i = index\" value=\"{{subcat.subsubcategory}}\">\n                {{subcat.subsubcategory}}\n              </option>\n              <option disabled *ngIf=\"subCategoryNotfound\">No Sub Category Found</option>\n              <option style=\"background-color: #23d5ab;\" value=\"1\">+ add new</option>\n\n            </select>\n          </div>\n        </div>\n        <button class=\"btn btn-success btn-sm mt-4\" type=\"submit\"> Update Sub Category</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"addnewproductpopup\" class=\"container pop-up-model\">\n  <div class=\"card pop-up-card ion-text-center\" style=\"padding: 7px;\">\n    <div class=\"row ion-text-center\" style=\"padding-bottom: 400px;padding-top:20px ;\">\n      <form #productselect=\"ngForm\" (ngSubmit)=\"productselectform(productselect.value)\">\n        <ion-icon name=\"chevron-back-outline\" style=\"font-size: larger; position: absolute; right: 100px; top: 15px;\"\n          class=\"ion-text-left\" (click)=\"hideaddproductpopup()\"></ion-icon>\n        <div class=\"select mt-4\" id=\"kg-dropdwon\">\n          <select ngModel name=\"productName\">\n            <option value=\"\" disabled selected>Select Your Product</option>\n            <option *ngFor=\"let product of productList\" value=\"{{product.product_name}}\">{{product.product_name}}\n            </option>\n          </select>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <button class=\"btn btn-success btn-sm mt-3\" type=\"submit\"> Update Sub Category</button>\n          </div>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_addoffer-edit_addoffer-edit_module_ts-es2015.js.map