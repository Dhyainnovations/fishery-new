(self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_myproduct-edit_myproduct-edit_module_ts"],{

/***/ 57676:
/*!*****************************************************************!*\
  !*** ./src/app/myproduct-edit/myproduct-edit-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductEditPageRoutingModule": function() { return /* binding */ MyproductEditPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _myproduct_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myproduct-edit.page */ 67591);




const routes = [
    {
        path: '',
        component: _myproduct_edit_page__WEBPACK_IMPORTED_MODULE_0__.MyproductEditPage
    }
];
let MyproductEditPageRoutingModule = class MyproductEditPageRoutingModule {
};
MyproductEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyproductEditPageRoutingModule);



/***/ }),

/***/ 86093:
/*!*********************************************************!*\
  !*** ./src/app/myproduct-edit/myproduct-edit.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductEditPageModule": function() { return /* binding */ MyproductEditPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _myproduct_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myproduct-edit-routing.module */ 57676);
/* harmony import */ var _myproduct_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myproduct-edit.page */ 67591);







let MyproductEditPageModule = class MyproductEditPageModule {
};
MyproductEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _myproduct_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyproductEditPageRoutingModule
        ],
        declarations: [_myproduct_edit_page__WEBPACK_IMPORTED_MODULE_1__.MyproductEditPage]
    })
], MyproductEditPageModule);



/***/ }),

/***/ 67591:
/*!*******************************************************!*\
  !*** ./src/app/myproduct-edit/myproduct-edit.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductEditPage": function() { return /* binding */ MyproductEditPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_myproduct_edit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./myproduct-edit.page.html */ 47009);
/* harmony import */ var _myproduct_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myproduct-edit.page.scss */ 52677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);








let MyproductEditPage = class MyproductEditPage {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.subCategoryNotfound = false;
        this.Category_value = 1;
        this.product_name = "";
        this.tbid = "";
        this.DisplayImage = "";
        this.tbid_value = "";
        this.displayreaddata = [];
        this.showProducts = [];
        this.date = new Date().toISOString();
        this.Category = '';
        this.subcategory = '';
        this.productname = '';
        this.description = '';
        this.cost = '';
        this.showimage = '';
        this.showImageDisplay = false;
        this.categoryName = '';
        this.subcategoryName = '';
        this.categoryList = [];
        this.subcategoryList = [];
        this.hideImageDisplay = true;
        this.PopupModel = false;
        this.subcategoryPopupModel = false;
        this.readunitvalue = "";
        this.selectedFile = null;
        this.isvisible = false;
        this.addnewcategorypopup = false;
        this.addnewsubcategorypopup = false;
        route.params.subscribe(val => {
            this.getCategoryList();
            //this.getSubcategoryList();
            this.getUnit();
            this.LoadReadData();
            this.appendReadData();
            console.log(this.subcategory);
        });
    }
    LoadReadData() {
        this.route.queryParams.subscribe(params => {
            //console.log(params.product_name);
            this.product_name = params.product_name;
            this.tbid_value = params.tbid;
        });
    }
    ngOnInit() {
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
    appendReadData() {
        const p = this.product_name;
        //console.log(p);
        this.http.get('/read_one_product?p=' + p).subscribe((response) => {
            this.description = response.records.description;
            this.Category = response.records.category;
            this.subcategory = response.records.subcategory;
            this.productname = response.records.product_name;
            this.cost = response.records.cost;
            this.DisplayImage = response.records.product_image;
            this.tbid = response.records.tbid;
            this.weight = response.records.weight;
            this.unit = response.records.unit;
            console.log(response.records);
        }, (error) => {
            console.log(error);
        });
    }
    showselecteditems() {
        const updateItems = {
            tbid: this.tbid_value,
            category: this.Category,
            subcategory: this.subcategory,
            product_name: this.productname,
            description: this.description,
            cost: this.cost + this.readunitvalue
        };
        console.log(updateItems);
    }
    MediaFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
    onClickSubmit(data) {
        this.image = this.selectedFile;
        console.log(this.image);
        const formdata = new FormData();
        formdata.append("tbid", this.tbid_value);
        formdata.append("category", this.category_tbid);
        formdata.append("subcategory", this.subcategory_tbid);
        formdata.append("product_name", data.product_name);
        formdata.append("cost", data.cost);
        formdata.append("unit", data.unit);
        formdata.append("description", data.description);
        formdata.append("product_image", this.image);
        formdata.append("weight", data.weight);
        // console.log('formData: ', formdata.getAll('category'), formdata.getAll('product_image'));
        // var body = "category = " + data.category + "subcategory = " + data.subcategory + "product_name = " + data.product_name + "cost = " + data.cost + "unit = " + data.unit + "product_image = " + this.image + "description = " + data.description;
        // console.log(body);
        this.http.postFormData("/update_product", formdata).subscribe((response) => {
            console.log(response);
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
                title: 'Updated successfully'
            });
            this.router.navigate(['/myproducts']);
        }, (error) => {
            console.log(error);
        });
    }
    backToprivious() {
        this.PopupModel = false;
        this.Category = '';
    }
    deleteProduct() {
        const obj = {
            tbid: this.tbid_value
        };
        this.http.post('/delete_product', obj).subscribe((response) => {
            //console.log(response);
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
                this.router.navigate(['/myproducts']);
            }
        }, (error) => {
            //console.log(error);
        });
    }
    NavigatetoNotification() {
        this.router.navigate(['/notification']);
    }
    ScBackToprivious() {
        this.subcategoryPopupModel = false;
        this.subcategory = '';
    }
    addproduct() {
        this.router.navigate(['/myproducts']);
    }
    createCategory() {
        this.PopupModel = false;
        const catData = {
            category_name: this.categoryName,
            created_at: this.date
        };
        this.http.post('/create_category', catData).subscribe((response) => {
            //console.log(response);
            if (response.success == "true") {
                this.Category = '';
                this.categoryName = '';
                this.getCategoryList();
            }
        }, (error) => {
            //console.log(error);
        });
    }
    getUnit() {
        this.http.get('/read_unit').subscribe((response) => {
            //console.log(response.records);
            this.readunit = response.records;
        }, (error) => {
            //console.log(error);
        });
    }
    createSubcategory() {
        this.subcategoryPopupModel = false;
        const subcatData = {
            category: this.Category,
            subcategory_name: this.subcategoryName
        };
        this.http.post('/create_subcategory', subcatData).subscribe((response) => {
            //console.log(response);
            if (response.success == "true") {
                //console.log("test");
                this.Category = '';
                this.subcategory = '';
                this.subcategoryName = '';
                //this.getSubcategoryList()
            }
        }, (error) => {
            console.log(error);
        });
    }
    getCategoryList() {
        this.http.get('/read_all_category').subscribe((response) => {
            //console.log(response.records);
            this.categoryList = response.records;
            console.log(response.records);
            //console.log(this.categoryList);
        }, (error) => {
            //console.log(error);
        });
    }
    // getSubcategoryList() {
    //   this.http.get('/read_all_subcategory',).subscribe((response: any) => {
    //     //console.log(response.records);
    //     this.subcategoryList = response.records
    //     //console.log(response.records);
    //     //console.log(this.subcategoryList);
    //   }, (error: any) => {
    //     console.log(error);
    //   }
    //   );
    // }
    backToMyproducts() {
        this.router.navigate(['/myproducts']);
    }
    hidepopup() {
        this.isvisible = false;
    }
    showPopup() {
        this.isvisible = true;
        this.http.get('/product_image_list').subscribe((response) => {
            console.log(response);
            this.showProducts = response.records;
        }, (error) => {
            console.log(error);
        });
    }
    displayImage(i) {
        this.showImageDisplay = true;
        this.showimage = this.showProducts[i];
        console.log(this.showimage);
        this.isvisible = false;
        this.hideImageDisplay = false;
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
    categorysubmit() {
        const obj = {
            category: this.category_tbid
        };
        console.log(obj);
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
};
MyproductEditPage.ctorParameters = () => [
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
MyproductEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-myproduct-edit',
        template: _raw_loader_myproduct_edit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_myproduct_edit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyproductEditPage);



/***/ }),

/***/ 52677:
/*!*********************************************************!*\
  !*** ./src/app/myproduct-edit/myproduct-edit.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=text] {\n  font-size: 15px;\n  margin: 0 5px;\n  width: 90%;\n  box-sizing: border-box;\n  border-radius: 5px;\n  background-color: #fff;\n  border: 2px solid #ccc;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 1px solid #FF6000 !important;\n  box-shadow: 0 0 2px #8b8d91;\n}\n\n.card {\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-radius: 8px;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc !important;\n  border: 1px solid #fff;\n}\n\n.delete-btn {\n  background-color: #f7391b !important;\n  color: #fff;\n  text-align: center;\n}\n\n.update-btn {\n  background-color: #29C17E;\n  color: #fff;\n  text-align: center;\n}\n\n.btn {\n  margin: 10px 0 !important;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto !important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.pop-up-card {\n  box-shadow: none !important;\n  position: absolute;\n  top: 10%;\n  z-index: 1;\n  right: 3px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cHJvZHVjdC1lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUdBLDJDQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBS0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFLRTtFQUNFLGFBQUE7QUFISjs7QUFPQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUpGIiwiZmlsZSI6Im15cHJvZHVjdC1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0ge1xuICBmb250LXNpemUgICAgICAgOiAxNXB4O1xuICBtYXJnaW4gICAgICAgICAgOiAwIDVweDtcbiAgd2lkdGggICAgICAgICAgIDogOTAlO1xuICBib3gtc2l6aW5nICAgICAgOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzICAgOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlciAgICAgICAgICA6IDJweCBzb2xpZCAjY2NjO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmUgICA6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyICAgIDogMXB4IHNvbGlkICNGRjYwMDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDJweCAjOGI4ZDkxO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3IgIDogI2ZmZjtcbiAgYm9yZGVyICAgICAgICAgICAgOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1cyAgICAgOiA4cHg7XG4gIHdpZHRoICAgICAgICAgICAgIDogOTYlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbiAgICAgICAgICAgIDogNXB4O1xuICAtbW96LWJveC1zaGFkb3cgICA6IDAgMCAzcHggI2NjYztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gIGJveC1zaGFkb3cgICAgICAgIDogMnB4IDJweCAycHggMnB4ICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyICAgICAgICAgICAgOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLmRlbGV0ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjczOTFiICFpbXBvcnRhbnQ7XG4gIGNvbG9yICAgICAgICAgICA6ICNmZmY7XG4gIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcbn1cblxuLnVwZGF0ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlDMTdFO1xuICBjb2xvciAgICAgICAgICAgOiAjZmZmO1xuICB0ZXh0LWFsaWduICAgICAgOiBjZW50ZXI7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY3RkEgIWltcG9ydGFudDtcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZGFya3R1cnF1b2lzZVxuICAvLyAwJSwgI2QxZjJlN1xuICAvLyAxMDAlKSAhaW1wb3J0YW50O1xuXG4gIC0tb2Zmc2V0LWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICAtLW92ZXJmbG93ICAgICA6IGhpZGRlbjtcbiAgb3ZlcmZsb3cgICAgICAgOiBhdXRvO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5wb3AtdXAtY2FyZCB7XG4gIGJveC1zaGFkb3cgICA6IG5vbmUgIWltcG9ydGFudDtcbiAgcG9zaXRpb24gICAgIDogYWJzb2x1dGU7XG4gIHRvcCAgICAgICAgICA6IDEwJTtcbiAgei1pbmRleCAgICAgIDogMTtcbiAgcmlnaHQgICAgICAgIDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 47009:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myproduct-edit/myproduct-edit.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" [ngStyle]=\"{'opacity':addnewcategorypopup ? '0.52' : '1' }\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n        <h5 style=\"color:#fff;margin-top:30px\">24HRS</h5>\n      </div>\n      <div class=\"col-7\" style=\"text-align: right;width: 90%;margin-top: -40px;\" (click)=\"NavigatetoNotification()\">\n        <svg style=\"margin:5px;text-align:right\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\"\n            fill=\"white\" />\n        </svg>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg-class\" [fullscreen]=\"true\" [ngStyle]=\"{'opacity':isvisible ? '0.52' : '1' }\">\n  <form #addproduct=\"ngForm\" (ngSubmit)=\"onClickSubmit(addproduct.value)\"\n    [ngStyle]=\"{'opacity':isvisible ? '0.52' : '1' }\">\n    <div class=\"container\">\n      <div class=\"signin-div mt-2\">\n        <div class=\"row mt-2\" style=\"padding: 10px;\">\n          <h5 class=\"name  ion-text-left\" style=\"color:#676767;\"><b>\n              <svg (click)=\"backToMyproducts()\" style=\"margin-top:-8px;cursor:pointer;margin:5px;\"\n                xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"20\" fill=\"#29C17E\" class=\"bi bi-arrow-left\"\n                viewBox=\"0 0 16 16\">\n                <path fill-rule=\"evenodd\"\n                  d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n              </svg>\n              Edit Your Product</b></h5>\n          <div class=\"col-12  ion-text-center\">\n            <p>Product Image:</p>\n            <img height=\"95px\" width=\"95px\" src=\"{{DisplayImage}}\" alt=\"\" (click)=\"showPopup()\"\n              *ngIf=\"hideImageDisplay\">\n            <img height=\"95px\" width=\"95px\" src=\"{{showimage.image}}\" alt=\"\" (click)=\"showPopup()\"\n              *ngIf=\"showImageDisplay\">\n            <label class=\"btn btn-default\">\n              <input type=\"file\" class=\"\" (change)=\"MediaFileSelected($event)\" name=\"image\">\n            </label>\n\n          </div>\n\n          <!-- <div class=\"col-12\">\n            <p class=\"name mt-2 ion-text-left\" style=\"color:hsl(0, 0%, 25%);\">Category </p>\n          </div> -->\n\n          <!-- <form #categoryselect=\"ngForm\" (change)=\"popupModel(categoryselect.value)\">\n            <div class=\"col-12 mt-2\">\n              <div class=\"select\">\n                <select ngModel name=\"category\">\n                  <option value=\"\" disabled selected>Select Your Category</option>\n                 <option *ngFor=\"let cat of categoryList;\" value=\"{{cat.tbid}}\">\n                    {{cat.category}}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </form>\n\n          <div class=\"col-12  mt-2\">\n            <p class=\"name mt-2 ion-text-left\" style=\"color:hsl(0, 0%, 25%);\">Sub Category </p>\n          </div>\n         <div class=\"col-12\">\n            <div class=\"select\">\n              <select ngModel name=\"subcategory\">\n                <option value=\"\" disabled selected>Select Your Sub Category</option>\n                <option *ngFor=\"let subcat of subcategoryList; let i = index\" value=\"{{subcat.tbid}}\">\n                  {{subcat.subsubcategory}}\n                </option>\n                  <option  disabled *ngIf=\"subCategoryNotfound\">No Sub Category Found</option>\n              </select>\n            </div>\n          </div> -->\n\n          <div class=\"col-5 mt-4\">\n            <p class=\"name\" style=\"color:#404040;\">Category :</p>\n          </div>\n          <div class=\"col-7 mt-3\">\n            <button class=\"btn btn-sm btn-primary\" style=\"font-size: 10px;\" (click)=\"showaddnewcategorypopup()\">Change\n              Category</button>\n          </div>\n          <div class=\"col-12 \">\n            <input [(ngModel)]=\"Category\" type=\"text\" name=\"category\" disabled>\n          </div>\n\n          <div class=\"col-5 mt-4\">\n            <p class=\"name\" style=\"color:#404040;\">Sub Category :</p>\n          </div>\n          <div class=\"col-7 mt-3\">\n            <button class=\"btn btn-sm btn-primary\" style=\"font-size: 9px;\" (click)=\"showaddnewsubcategorypopup()\">Change\n              Sub Category</button>\n          </div>\n          <div class=\"col-12\">\n            <input [(ngModel)]=\"subcategory\" type=\"text\" name=\"subcategory\" disabled>\n          </div>\n\n\n\n          <div class=\"col-6 mt-5\">\n            <p class=\"name\" style=\"color:#404040;\">Product Name :</p>\n          </div>\n          <div class=\"col-6 mt-5\">\n            <input [(ngModel)]=\"productname\" type=\"text\" id=\"offer\" name=\"product_name\">\n          </div>\n\n          <div class=\"col-6\">\n            <p class=\"name\" style=\"color:#404040;\">Cost:</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"cost\" type=\"text\" id=\"offer\" name=\"cost\">\n          </div>\n\n          <div class=\"col-6\">\n            <p class=\"name\" style=\"color:#404040;\">Weight:</p>\n\n          </div>\n          <div class=\"col-6\"><input [(ngModel)]=\"weight\" type=\"text\" id=\"offer\" name=\"weight\"></div>\n\n          <div class=\"col-6\">\n            <p class=\"name\" style=\"color:#404040;\">Unit:</p>\n\n          </div>\n          <div class=\"col-6\"><input [(ngModel)]=\"unit\" type=\"text\" id=\"offer\" name=\"unit\" disabled></div>\n       \n        </div>\n        <div class=\"form-group \">\n          <label style=\"color:#404040;\" for=\"exampleFormControlTextarea1\">Product Description :</label>\n          <textarea [(ngModel)]=\"description\" style=\"background-color: #fff;\" class=\"form-control\"\n            id=\"exampleFormControlTextarea1\" rows=\"3\" name=\"description\"></textarea>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-6 ion-text-center\">\n            <button (click)=\"deleteProduct()\" class=\"btn btn-sm delete-btn mt-2\">Delete</button>\n          </div>\n          <div class=\"col-6 ion-text-center\">\n            <button class=\"btn btn-sm update-btn\" (click)=\"showselecteditems()\">Update</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</ion-content>\n\n\n<div *ngIf=\"isvisible\" class=\"container\">\n  <div class=\"card pop-up-card ion-text-center\">\n    <div class=\"row ion-text-center\">\n      <ion-icon name=\"chevron-back-outline\" style=\"font-size: larger; position: absolute; right: 120px; top: 10px;\"\n        class=\"ion-text-left\" (click)=\"hidepopup()\"></ion-icon>\n      <p class=\"mt-1\">Select Any One Item</p>\n      <div *ngFor=\"let items of showProducts; let i = index\" class=\"mt-1 mb-2\">\n        <img src=\"{{items.image}}\" height=\"90px\" width=\"90px\" class=\"m-1\" style=\"border-radius: 5px;\"\n          (click)=displayImage(i)>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div *ngIf=\"addnewcategorypopup\" class=\"container\">\n  <div class=\"card pop-up-card ion-text-center\">\n    <div class=\"row ion-text-center\" style=\"padding-bottom: 400px;padding-top:20px ;\">\n      <ion-icon name=\"chevron-back-outline\" style=\"font-size: larger; position: absolute; right: 100px; top: 15px;\"\n        class=\"ion-text-left\" (click)=\"hideaddnewcategorypopup()\"></ion-icon>\n      <div class=\"col-12\">\n        <p class=\"name ion-text-left\" style=\"color:hsl(0, 0%, 25%); margin-left: 25px; margin-top: 40px;\">Add New\n          Category </p>\n      </div>\n      <form #categoryselect=\"ngForm\" (change)=\"popupModel(categoryselect.value)\" (ngSubmit)=\"categorysubmit()\">\n        <div class=\"col-12 mt-2\">\n          <div class=\"select\">\n            <select ngModel name=\"category\">\n              <option value=\"\" disabled selected>Select Your Category</option>\n              <option *ngFor=\"let cat of categoryList;\" value=\"{{cat.category}}\">\n                {{cat.category}}\n              </option>\n              <option style=\"background-color: #23d5ab;\" value=\"1\">+ add new</option>\n            </select>\n          </div>\n        </div>\n        <button class=\"btn btn-success btn-sm\" type=\"submit\"> Update Category</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n<div *ngIf=\"addnewsubcategorypopup\" class=\"container\">\n  <div class=\"card pop-up-card ion-text-center\">\n    <div class=\"row ion-text-center\" style=\"padding-bottom: 400px;padding-top:20px ;\">\n      <ion-icon name=\"chevron-back-outline\" style=\"font-size: larger; position: absolute; right: 100px; top: 15px;\"\n        class=\"ion-text-left\" (click)=\"hideaddnewsubcategorypopup()\"></ion-icon>\n      <div class=\"col-12\">\n        <p class=\"name ion-text-left\" style=\"color:hsl(0, 0%, 25%); margin-left: 25px; margin-top: 40px;\">Sub Category\n        </p>\n      </div>\n      <form #subcategoryselect=\"ngForm\" (ngSubmit)=\"subcategorysubmit(subcategoryselect.value)\">\n        <div class=\"col-12 mt-2\">\n          <div class=\"select\">\n            <select ngModel name=\"subcategory\">\n              <option value=\"\" disabled selected>Select Your Sub Category</option>\n              <option *ngFor=\"let subcat of subcategoryList; let i = index\" value=\"{{subcat.subsubcategory}}\">\n                {{subcat.subsubcategory}}\n              </option>\n              <option disabled *ngIf=\"subCategoryNotfound\">No Sub Category Found</option>\n              <option style=\"background-color: #23d5ab;\" value=\"1\">+ add new</option>\n\n            </select>\n          </div>\n        </div>\n        <button class=\"btn btn-success btn-sm\" type=\"submit\"> Update Sub Category</button>\n      </form>\n    </div>\n  </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_myproduct-edit_myproduct-edit_module_ts-es2015.js.map