(self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_myproducts_myproducts_module_ts"],{

/***/ 61441:
/*!*********************************************************!*\
  !*** ./src/app/myproducts/myproducts-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductsPageRoutingModule": function() { return /* binding */ MyproductsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _myproducts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myproducts.page */ 6329);




const routes = [
    {
        path: '',
        component: _myproducts_page__WEBPACK_IMPORTED_MODULE_0__.MyproductsPage
    }
];
let MyproductsPageRoutingModule = class MyproductsPageRoutingModule {
};
MyproductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyproductsPageRoutingModule);



/***/ }),

/***/ 13363:
/*!*************************************************!*\
  !*** ./src/app/myproducts/myproducts.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductsPageModule": function() { return /* binding */ MyproductsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _myproducts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myproducts-routing.module */ 61441);
/* harmony import */ var _myproducts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myproducts.page */ 6329);







let MyproductsPageModule = class MyproductsPageModule {
};
MyproductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _myproducts_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyproductsPageRoutingModule
        ],
        declarations: [_myproducts_page__WEBPACK_IMPORTED_MODULE_1__.MyproductsPage]
    })
], MyproductsPageModule);



/***/ }),

/***/ 6329:
/*!***********************************************!*\
  !*** ./src/app/myproducts/myproducts.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyproductsPage": function() { return /* binding */ MyproductsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_myproducts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./myproducts.page.html */ 89238);
/* harmony import */ var _myproducts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myproducts.page.scss */ 25961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);







let MyproductsPage = class MyproductsPage {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.userdetails = atob(localStorage.getItem("24hrs-user-data"));
        this.parsedObj = JSON.parse(this.userdetails);
        this.showReadData = "";
        this.productlist = [];
        this.displayReadData = "";
        route.params.subscribe(val => {
            this.ProductList();
        });
    }
    ngOnInit() {
    }
    exit() {
        this.router.navigate(['/tabs']);
    }
    NavigatetoNotification() {
        this.router.navigate(['/notification']);
    }
    ProductList() {
        this.http.get('/read_all_product').subscribe((response) => {
            this.productlist = response.records;
        }, (error) => {
            console.log(error);
        });
    }
    editDetails(product_name) {
        const p = product_name;
        console.log(p);
        this.http.get('/read_one_product?p=' + p).subscribe((response) => {
            this.displayReadData = response.records.tbid;
            this.showReadData = response.records.product_name;
            this.router.navigate(['/myproductEditPage'], { queryParams: { tbid: this.displayReadData, product_name: this.showReadData } });
        }, (error) => {
            console.log(error);
        });
    }
    searchPage() {
        this.router.navigate(['/searchpage']);
    }
    navigateTo() {
        this.router.navigate(['/tabs/tab3']);
    }
};
MyproductsPage.ctorParameters = () => [
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
MyproductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-myproducts',
        template: _raw_loader_myproducts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_myproducts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyproductsPage);



/***/ }),

/***/ 28191:
/*!****************************************!*\
  !*** ./src/app/shared/http.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": function() { return /* binding */ HttpService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    get(serviceName) {
        const userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            // .set("Access-Control-Allow-Origin", "*")
            // .set("Access-Control-Allow-Methods", "GET,POST")
            // .set('Accept','application/json')
            // .set('Content-Type','application/json')
            // .set("Access-Control-Allow-Headers", "Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            .set("Token", userdetails.token);
        //   let httpOptions = {
        //     headers: new HttpHeaders({
        //       "Access-Control-Allow-Origin": "*",
        //       "Access-Control-Allow-Methods": "*",
        //       "Access-Control-Allow-Headers":"Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        //       'Authorization':userdetails.token,
        //       "Content-Type": "application/json"
        //     })
        // };
        const options = { headers: header, withCredentials: true };
        return this.http.get(url, { headers: header });
    }
    login(serviceName, data) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        const options = { headers: headers, withCredentials: false };
        console.log(data);
        return this.http.post(url, JSON.stringify(data), options);
    }
    post(serviceName, data) {
        const token = ((localStorage.getItem("token")));
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        if (serviceName == '/user_login' || serviceName == '/user_register') {
            // const headers = new HttpHeaders()
            // const options = { headers: headers, withCredentials: false };
            // return this.http.post(url, JSON.stringify(data), { headers: headers });
        }
        else {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Token", token);
            const options = { headers: headers, withCredentials: true };
            return this.http.post(url, JSON.stringify(data), { headers: headers });
        }
    }
    postFormData(serviceName, data) {
        const token = ((localStorage.getItem("token")));
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        const headers = {
            // 'enctype': 'multipart/form-data',
            // 'Content-Type': 'multipart/form-data',
            // 'Accept': 'plain/text',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            // 'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
            'Token': token
        };
        // const headers = new HttpHeaders().set("Token", token );
        //  headers.set('Content-Type', 'multipart/form-data'); 
        const options = { headers: headers, withCredentials: true };
        return this.http.post(url, data, { headers: headers });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ 25961:
/*!*************************************************!*\
  !*** ./src/app/myproducts/myproducts.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".myproduct-div {\n  background-color: #F4F7FA;\n  border: 1px solid #fff;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 0 0 3px #ccc;\n  border: 1px solid #fff;\n}\n\nimg {\n  margin-left: 10px !important;\n  height: 80px;\n  width: 95px;\n}\n\n.card {\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  width: 100% !important;\n  margin-bottom: 13px !important;\n}\n\nspan {\n  font-size: smaller;\n}\n\n.price {\n  margin-top: -2px !important;\n  text-align: center;\n}\n\n.product-name {\n  margin-top: 1px !important;\n  margin-left: 5% !important;\n}\n\n#cross {\n  cursor: pointer;\n  margin-top: 20px;\n}\n\n#cross:hover {\n  color: red;\n}\n\n.addproduct-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%) !important;\n  border: 1px solid #fff;\n  color: #fff;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFHQSx3QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBR0E7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0FBSUY7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7QUFNSjs7QUFJQTtFQUNFLDZCQUFBO0VBQ0EseUVBQUE7RUFHQSxzQkFBQTtFQUVBLFdBQUE7QUFKRjs7QUFNQTtFQUNFLG9DQUFBO0VBS0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFQRjs7QUFRRTtFQUNJLGFBQUE7QUFOTiIsImZpbGUiOiJteXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teXByb2R1Y3QtZGl2e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGN0ZBO1xuICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNjY2M7XG4gIHdpZHRoOjk2JSAhaW1wb3J0YW50O1xuICBtYXJnaW46NXB4O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICBcbn1cblxuaW1ne1xuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6ODBweDtcbiAgd2lkdGg6IDk1cHg7XG59XG4uY2FyZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjY2NjO1xuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206MTNweCAhaW1wb3J0YW50O1xufVxuc3BhbntcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG59XG4ucHJpY2V7XG4gICAgbWFyZ2luLXRvcDogLTJweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9kdWN0LW5hbWV7XG4gIG1hcmdpbi10b3A6IDFweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNSUgIWltcG9ydGFudDtcbn1cbiNjcm9zc3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xufVxuI2Nyb3NzOmhvdmVye1xuICAgIGNvbG9yOnJlZDtcbn1cbi8vIC5leGl0LWJ0bntcbi8vICAgd2lkdGg6IDcwJTtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgLy8gbWFyZ2luOiAxMHB4O1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkNWFiO1xuLy8gICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4vLyAgIGNvbG9yOiAjZmZmO1xuLy8gfVxuLmFkZHByb2R1Y3QtYnRue1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgMCUsICMyM2Q1YWJcbiAgMTAwJSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuIFxuICBjb2xvcjogI2ZmZjtcbn1cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjojRjRGN0ZBICFpbXBvcnRhbnQ7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM4Y2RiZTJcbiAgLy8gMCUsICNkMWYyZTdcbiAgLy8gMTAwJSkgIWltcG9ydGFudDtcblxuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuXG4iXX0= */");

/***/ }),

/***/ 89238:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myproducts/myproducts.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" >\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    \n    <div class=\"row\">\n      <div class=\"col-5\">\n        <h5 style=\"color:#fff;margin-top:30px\">24HRS</h5>\n      </div>\n      <div class=\"col-7\" style=\"text-align: right;width: 90%;margin-top: -40px;\" (click)=\"NavigatetoNotification()\" >\n        <!-- <svg (click)=\"searchPage()\" style=\"margin:5px;\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M14.2998 12.5863H13.3974L13.0775 12.2779C14.3299 10.8187 14.9685 8.93097 14.8587 7.01111C14.749 5.09124 13.8996 3.28856 12.489 1.98152C11.0785 0.674474 9.21659 -0.0352438 7.29394 0.00134777C5.3713 0.0379394 3.53754 0.817948 2.17778 2.17771C0.818015 3.53748 0.0379393 5.37125 0.00134789 7.2939C-0.0352436 9.21655 0.674402 11.0786 1.98144 12.4891C3.28848 13.8996 5.09129 14.7489 7.01115 14.8586C8.93101 14.9683 10.8187 14.33 12.2779 13.0775L12.5864 13.3974V14.2998L18.298 20L20 18.298L14.2998 12.5863ZM7.44594 12.5863C6.42926 12.5863 5.43548 12.2849 4.59014 11.72C3.7448 11.1552 3.08585 10.3523 2.69678 9.41302C2.30772 8.47373 2.20589 7.44016 2.40423 6.44301C2.60258 5.44586 3.09231 4.52992 3.81121 3.81102C4.53011 3.09211 5.44592 2.60259 6.44306 2.40424C7.44021 2.20589 8.47391 2.30765 9.4132 2.69672C10.3525 3.08579 11.1553 3.74468 11.7201 4.59002C12.285 5.43536 12.5864 6.42921 12.5864 7.44589C12.5873 8.1212 12.4551 8.79006 12.197 9.41414C11.939 10.0382 11.5604 10.6052 11.0829 11.0827C10.6054 11.5602 10.0381 11.9389 9.41404 12.1969C8.78996 12.4549 8.12124 12.5872 7.44594 12.5863Z\" fill=\"white\"/>\n          </svg> -->\n          <svg style=\"margin:5px;text-align:right\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\" fill=\"white\"/>\n            </svg>\n          </div>     \n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content   [scrollEvents]=\"true\" >\n  <div class=\"container\" >\n    <div class=\"row\">\n      <div class=\"col-12 ion-text-right\">\n        <button (click)=\"navigateTo()\" class=\"btn btn-sm addproduct-btn \">+ Add Product</button>\n      </div>\n      <div class=\"col-12\">\n        <h2 style=\"color: #404040;\">\n          <ion-icon  (click)=\"exit()\" style=\"margin-left: 3%;margin:5px;cursor:pointer;color:#23d5ab\"  name=\"arrow-back\"></ion-icon>\n          <svg width=\"25\" height=\"25\" viewBox=\"0 0 43 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M42.2008 2.28244C41.9412 2.06895 41.5941 1.9546 41.2203 1.96141C40.8376 1.96781 40.4684 2.106 40.2294 2.32149L34.8114 6.59624L31.9893 0.909592C31.8847 0.614996 31.6303 0.369667 31.2905 0.236488C30.9598 0.106713 30.569 0.0928946 30.2167 0.198236C29.5102 0.414727 29.1239 1.04517 29.3371 1.63357L29.49 2.04955L25.8852 6.11379L22.0935 1.57128C21.9194 1.31333 21.6181 1.12448 21.2664 1.05339C20.9239 0.984293 20.5532 1.03116 20.2462 1.18797C19.6442 1.50519 19.4552 2.15667 19.8157 2.67116L24.2248 8.95816C23.3313 9.2845 22.422 9.99177 22.1453 11.4881C22.1282 11.5284 22.1125 11.5696 22.1125 11.6144C22.1125 11.6242 22.1188 11.6324 22.1197 11.6421C22.1192 11.6452 22.119 11.6486 22.1184 11.6517C20.901 10.9797 19.4523 10.611 17.9371 10.611C16.5755 10.611 15.2503 10.9138 14.1077 11.4671V11.2006C14.1077 10.3092 13.6633 9.4731 12.8563 8.84606C12.0447 8.21561 10.9689 7.86855 9.8272 7.86855C7.60095 7.86855 5.76667 9.19483 5.56061 10.8841C5.03533 10.6208 4.39695 10.4986 3.74737 10.5758L2.83895 10.6853C2.14167 10.7664 1.5273 11.0532 1.10966 11.4926C0.692009 11.9318 0.520007 12.4713 0.625062 13.0121L1.41864 17.0929H0.934564C0.643086 17.0929 0.407227 17.2766 0.407227 17.5031V22.4894V27.4755V32.4618C0.407227 32.6883 0.643086 32.8719 0.934564 32.8719H35.5812C35.8727 32.8719 36.1086 32.6883 36.1086 32.4618V27.4755V22.4894V17.5031C36.1086 17.2766 35.8727 17.0929 35.5812 17.0929H35.5697C35.7092 16.783 35.844 16.4777 35.9659 16.1866C35.9659 16.1866 35.9659 16.1866 35.9659 16.1865C35.9661 16.1862 35.9662 16.186 35.9663 16.1857C35.9665 16.1852 35.9667 16.1846 35.967 16.1841C35.967 16.1841 35.967 16.1841 35.967 16.1841C36.3929 15.1859 36.704 14.361 36.8656 13.7983C36.9656 13.4525 37.0332 13.1205 37.0684 12.8109C37.0684 12.8104 37.069 12.8099 37.069 12.8094C37.2709 11.1257 36.502 10.2066 35.6483 9.70712L42.208 3.87678C42.208 3.87638 42.2085 3.87618 42.2085 3.87598C42.723 3.41656 42.7209 2.71782 42.2008 2.28244ZM1.4619 22.8995H35.0539V27.0653H1.4619V22.8995ZM35.0539 17.9132V22.0792H1.4619V17.9132H2.03147H6.77338H11.0529H11.3927H23.211H28.4081H34.8242H35.0539ZM8.1216 13.3912C8.54079 13.3421 8.95638 13.4226 9.29678 13.6171C9.63718 13.8117 9.85913 14.0979 9.92144 14.4232L10.4396 17.0929H7.22747L6.78162 14.791C6.73077 14.5214 6.79443 14.2504 6.96483 14.0074C7.20017 13.68 7.6061 13.4578 8.08091 13.3948C8.09482 13.394 8.10821 13.3928 8.1216 13.3912ZM28.0361 16.0777C28.0328 16.1046 28.0297 16.1337 28.0264 16.1608C27.9943 16.4218 27.9637 16.6939 27.9341 16.973C27.9297 17.0142 27.9247 17.0513 27.9204 17.0929H23.6678C23.66 17.0514 23.6522 17.0102 23.6446 16.9684C23.5989 16.7177 23.5545 16.4642 23.5124 16.2086C23.5077 16.1803 23.5027 16.1525 23.4981 16.1242C23.4511 15.8352 23.4075 15.545 23.3664 15.2562C23.3625 15.2294 23.359 15.2028 23.3552 15.176H28.1589C28.1539 15.2097 28.1493 15.2484 28.1443 15.2826C28.1071 15.5376 28.0707 15.8002 28.0361 16.0777ZM28.8191 12.0542C28.782 12.1593 28.7485 12.2681 28.7145 12.3822C28.6822 12.4938 28.6496 12.6187 28.6168 12.751C28.613 12.7662 28.6093 12.7804 28.6055 12.7958C28.5739 12.9253 28.5421 13.0647 28.5103 13.2118C28.5055 13.2339 28.5008 13.2561 28.4959 13.2787C28.4643 13.4278 28.4325 13.5841 28.4008 13.7493C28.3968 13.7702 28.3928 13.792 28.3888 13.8131C28.356 13.9867 28.3232 14.1663 28.2907 14.3557H23.2488C23.2424 14.3012 23.2353 14.2449 23.2292 14.1915C23.2203 14.1115 23.2117 14.0326 23.2038 13.9552C23.1915 13.8366 23.1808 13.7224 23.1709 13.6105C23.1644 13.5377 23.1577 13.4641 23.1523 13.3944C23.1432 13.2775 23.1364 13.168 23.1302 13.0605C23.1272 13.0072 23.1231 12.9503 23.1208 12.8994C23.1138 12.7456 23.1095 12.601 23.1095 12.4721C23.1095 12.3197 23.1162 12.1699 23.1291 12.0245H28.8165C28.8175 12.0343 28.818 12.0442 28.8191 12.0542ZM35.8367 13.6191C35.7012 14.0897 35.453 14.7614 35.1136 15.5757L33.2462 15.2513L29.3187 14.5689C29.3195 14.5644 29.3203 14.5597 29.321 14.5552C29.3532 14.3648 29.3859 14.182 29.4188 14.0062C29.4229 13.9841 29.427 13.9621 29.4311 13.9402C29.4631 13.7716 29.4951 13.6106 29.5271 13.4586C29.5315 13.4377 29.5359 13.4175 29.5403 13.3969C29.5726 13.2455 29.6048 13.1022 29.6366 12.9709C29.6394 12.9589 29.6423 12.9481 29.6452 12.9363C29.6783 12.8008 29.7111 12.675 29.7429 12.5647C29.779 12.4425 29.815 12.3253 29.8619 12.2004C29.8804 12.1441 29.9 12.089 29.9206 12.0353L35.9639 13.0906C35.9314 13.2606 35.8887 13.4372 35.8367 13.6191ZM32.0745 9.08123C31.2175 9.22006 30.2659 9.63061 29.5422 10.6281C29.1351 9.70799 28.4254 9.21904 27.7273 8.96337L30.5502 4.93395L32.0745 9.08123ZM20.8307 1.87068C20.8982 1.83624 20.9605 1.83904 21.0012 1.84725C21.0666 1.86047 21.1227 1.89772 21.184 1.98504L25.4295 7.07428C25.5253 7.18903 25.6885 7.25913 25.8641 7.26113C26.0346 7.25712 26.2061 7.19684 26.306 7.08389L29.865 3.0713L29.9212 3.2226L30.137 3.80976L26.6948 8.72309C26.6766 8.72092 26.6563 8.72182 26.6379 8.71981C26.4249 8.69631 26.2059 8.68221 25.9824 8.68196C25.9781 8.68196 25.9741 8.68124 25.9697 8.68124C25.9402 8.68124 25.9122 8.68574 25.8827 8.68614C25.6999 8.68877 25.5175 8.69844 25.336 8.71701C25.3112 8.71956 25.2848 8.71844 25.2601 8.72129L20.7416 2.27823C20.6417 2.13544 20.6855 1.94719 20.8307 1.87068ZM25.1071 9.57965C25.53 9.49869 25.9987 9.48046 26.4258 9.52172C26.5688 9.53559 26.7075 9.55611 26.839 9.58325C27.7871 9.77351 28.387 10.3054 28.6625 11.2042H23.2831C23.5591 10.3022 24.1606 9.7687 25.1071 9.57965ZM22.0564 12.6526C22.0565 12.6603 22.0573 12.67 22.0574 12.6779C22.0601 12.7954 22.0655 12.9231 22.073 13.0586C22.0745 13.0863 22.0761 13.1139 22.0778 13.1423C22.0861 13.2791 22.0967 13.4232 22.1096 13.5749C22.1123 13.6073 22.1153 13.6403 22.1182 13.6733C22.1322 13.8303 22.148 13.9926 22.1665 14.1622C22.1693 14.1882 22.1725 14.2149 22.1754 14.2411C22.1954 14.4208 22.2173 14.6052 22.242 14.7959C22.2425 14.7998 22.2428 14.8034 22.2433 14.8073C22.2877 15.1479 22.3383 15.4937 22.3915 15.8396C22.4014 15.9033 22.4107 15.9659 22.4208 16.0296C22.4739 16.3657 22.5303 16.6994 22.5898 17.0286C22.5936 17.0498 22.5969 17.0718 22.6007 17.0929H11.831C11.8184 17.0367 11.8016 16.9818 11.7915 16.9248C11.783 16.8767 11.7739 16.8286 11.7673 16.7799C11.7436 16.6078 11.7275 16.4337 11.7275 16.2566C11.7275 16.0792 11.74 15.9029 11.7646 15.7286C11.9366 14.5086 12.7012 13.3825 13.9223 12.5799C15.0403 11.8393 16.4663 11.4313 17.9371 11.4313C19.4655 11.4313 20.9198 11.8637 22.0564 12.6526ZM6.59469 11.2006C6.59469 9.81556 8.04486 8.68885 9.8272 8.68885C10.6877 8.68885 11.4983 8.9508 12.1106 9.42644C12.7183 9.89847 13.053 10.5285 13.053 11.2006V12.0816C13.0019 12.1176 12.9599 12.1594 12.9102 12.1964C12.7682 12.3022 12.6316 12.4109 12.5021 12.5244C12.4295 12.588 12.3588 12.652 12.2903 12.7178C12.1664 12.8368 12.051 12.96 11.9405 13.0859C11.8847 13.1495 11.8262 13.2114 11.7738 13.2766C11.6412 13.4418 11.5211 13.6121 11.4114 13.7868C11.3931 13.8159 11.3705 13.8432 11.3529 13.8725C11.2297 14.0776 11.1251 14.2891 11.0346 14.5047C11.0284 14.5195 11.0187 14.5332 11.0127 14.548L10.9648 14.301C10.8602 13.7589 10.4895 13.2812 9.92144 12.9562C9.79354 12.883 9.6579 12.8221 9.51828 12.7686C9.47213 12.7508 9.42404 12.7379 9.37679 12.7224C9.27978 12.6906 9.182 12.662 9.08126 12.6395C9.02641 12.6273 8.97144 12.6176 8.91569 12.6083C8.81501 12.5913 8.71356 12.5795 8.61057 12.5719C8.55714 12.568 8.50435 12.5634 8.45035 12.562C8.42106 12.5613 8.39247 12.5566 8.36312 12.5566C8.24262 12.5566 8.12108 12.5633 7.99903 12.5763C7.98307 12.5769 7.9671 12.5783 7.95114 12.5801C7.85059 12.592 7.75184 12.6083 7.65528 12.6285C7.62316 12.6352 7.59271 12.645 7.56117 12.6526C7.4977 12.6679 7.43378 12.6826 7.37237 12.7015C7.33638 12.7125 7.30252 12.7267 7.26725 12.7389C7.21227 12.758 7.15666 12.7761 7.10368 12.7981C7.07014 12.8119 7.03886 12.8286 7.00615 12.8436C6.958 12.8657 6.90869 12.8863 6.86247 12.9107L6.74094 12.2879C6.71223 12.1578 6.66588 12.0333 6.61084 11.9117C6.60408 11.8967 6.6019 11.8797 6.59469 11.8649V11.2006ZM1.66789 12.8897C1.60507 12.5661 1.70806 12.2432 1.95783 11.9805C2.2081 11.7171 2.57631 11.5453 2.99808 11.4962L3.90805 11.3865C4.61048 11.3032 5.299 11.5996 5.58172 12.1036C5.6358 12.203 5.67597 12.3117 5.70017 12.4187L5.95714 13.7406C5.93706 13.7744 5.92444 13.8098 5.90668 13.8441C5.88556 13.8852 5.86406 13.9259 5.84642 13.9678C5.82016 14.0298 5.8004 14.0926 5.78192 14.1559C5.77027 14.1958 5.75643 14.2352 5.74793 14.2755C5.73287 14.3466 5.72624 14.4183 5.7209 14.4904C5.71832 14.5241 5.71195 14.5573 5.71156 14.5912C5.7104 14.6976 5.71813 14.8045 5.73828 14.9116L6.1605 17.0929H2.48516L1.66789 12.8897ZM35.0539 32.0516H1.4619V27.8856H35.0539V32.0516ZM28.9795 17.0929C28.9822 17.0673 28.9848 17.0409 28.9875 17.0154C29.0155 16.7519 29.0446 16.4955 29.0748 16.2487C29.0769 16.2315 29.0789 16.2132 29.081 16.1962C29.1134 15.934 29.1472 15.6835 29.182 15.4417C29.1847 15.423 29.1875 15.4057 29.1902 15.3872L34.781 16.3586C34.6764 16.5981 34.5667 16.8438 34.4529 17.0929H28.9795ZM30.3022 11.2611C30.8682 10.3315 31.6787 9.86543 32.7705 9.8404C33.0728 9.83218 33.3741 9.85662 33.7145 9.9165C34.0301 9.96817 34.3268 10.0507 34.6054 10.1656C35.557 10.5391 36.0401 11.2441 36.0468 12.2643L30.3022 11.2611ZM41.4134 3.33705L34.7068 9.29787C34.6687 9.28575 34.6288 9.27681 34.5902 9.2655C34.5492 9.25351 34.5082 9.24229 34.4667 9.23125C34.2946 9.18537 34.1197 9.14456 33.94 9.11522C33.7516 9.08185 33.5699 9.06042 33.3904 9.04433C33.3509 9.04082 33.3108 9.03729 33.2716 9.03459C33.2317 9.03181 33.1907 9.02663 33.1511 9.0247L31.2117 3.7422L30.3527 1.41107C30.2852 1.22602 30.398 1.02455 30.5994 0.962664C30.6936 0.934426 30.7693 0.950447 30.8156 0.969072C30.8913 0.998512 30.947 1.05479 30.9892 1.16634L34.1218 7.48423C34.1862 7.6142 34.3309 7.70973 34.506 7.73817C34.6836 7.76681 34.8639 7.72375 34.989 7.62462L41.0035 2.87824C41.0714 2.81736 41.1564 2.78291 41.2429 2.78151C41.2913 2.7781 41.367 2.79092 41.4314 2.84359C41.5833 2.97076 41.5751 3.19206 41.4134 3.33705Z\"\n              fill=\"#222222\" />\n          </svg>\n          My Products\n        </h2>\n      </div>\n    </div>\n\n    <div *ngFor=\"let product of productlist\" class=\"card\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <svg style=\"padding:2px !important;\" width=\"20\" height=\"20\" viewBox=\"0 0 21 20\" fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M17.9246 12.9289C16.781 11.8398 15.4198 11.0335 13.9346 10.5454C15.5253 9.50199 16.5703 7.75578 16.5703 5.78125C16.5703 2.59348 13.8472 0 10.5 0C7.15284 0 4.42969 2.59348 4.42969 5.78125C4.42969 7.75578 5.47472 9.50199 7.06543 10.5454C5.58026 11.0335 4.21903 11.8398 3.07539 12.9289C1.09221 14.8177 0 17.3289 0 20H1.64062C1.64062 15.3475 5.61492 11.5625 10.5 11.5625C15.3851 11.5625 19.3594 15.3475 19.3594 20H21C21 17.3289 19.9078 14.8177 17.9246 12.9289ZM10.5 10C8.05748 10 6.07031 8.1075 6.07031 5.78125C6.07031 3.455 8.05748 1.5625 10.5 1.5625C12.9425 1.5625 14.9297 3.455 14.9297 5.78125C14.9297 8.1075 12.9425 10 10.5 10Z\"\n              fill=\"#5C5C5C\" />\n          </svg>\n          <span>Views : 1024</span>\n        </div>\n        <div class=\"col-6\">\n          <svg style=\"padding:2px !important;\" width=\"20\" height=\"23\" viewBox=\"0 0 25 23\" fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M23.0058 6.00409C22.8742 6.00485 22.7437 5.97963 22.6219 5.92986C22.5001 5.8801 22.3892 5.80677 22.2958 5.71409L18.2958 1.71409C18.1075 1.52579 18.0017 1.27039 18.0017 1.00409C18.0017 0.73779 18.1075 0.482395 18.2958 0.294092C18.4841 0.105788 18.7395 0 19.0058 0C19.2721 0 19.5275 0.105788 19.7158 0.294092L23.7158 4.29409C23.8095 4.38705 23.8839 4.49766 23.9347 4.61951C23.9855 4.74137 24.0116 4.87208 24.0116 5.00409C24.0116 5.1361 23.9855 5.26681 23.9347 5.38867C23.8839 5.51053 23.8095 5.62113 23.7158 5.71409C23.6224 5.80677 23.5115 5.8801 23.3897 5.92986C23.2679 5.97963 23.1374 6.00485 23.0058 6.00409ZM1.7158 5.71409L5.7158 1.71409C5.9041 1.52579 6.00989 1.27039 6.00989 1.00409C6.00989 0.73779 5.9041 0.482395 5.7158 0.294092C5.52749 0.105788 5.2721 0 5.0058 0C4.7395 0 4.4841 0.105788 4.2958 0.294092L0.295798 4.29409C0.20207 4.38705 0.127676 4.49766 0.0769072 4.61951C0.0261385 4.74137 0 4.87208 0 5.00409C0 5.1361 0.0261385 5.26681 0.0769072 5.38867C0.127676 5.51053 0.20207 5.62113 0.295798 5.71409C0.388761 5.80782 0.499362 5.88221 0.621222 5.93298C0.743081 5.98375 0.873786 6.00989 1.0058 6.00989C1.13781 6.00989 1.26852 5.98375 1.39038 5.93298C1.51223 5.88221 1.62284 5.80782 1.7158 5.71409ZM12.0058 13.0041C11.808 13.0041 11.6147 13.0627 11.4502 13.1726C11.2858 13.2825 11.1576 13.4387 11.0819 13.6214C11.0062 13.8041 10.9864 14.0052 11.025 14.1992C11.0636 14.3932 11.1588 14.5713 11.2987 14.7112C11.4385 14.8511 11.6167 14.9463 11.8107 14.9849C12.0047 15.0235 12.2058 15.0037 12.3885 14.928C12.5712 14.8523 12.7274 14.7241 12.8373 14.5597C12.9472 14.3952 13.0058 14.2019 13.0058 14.0041C13.0058 13.7389 12.9004 13.4845 12.7129 13.297C12.5254 13.1094 12.271 13.0041 12.0058 13.0041ZM22.0058 12.0041C22.0058 13.9819 21.4193 15.9153 20.3205 17.5598C19.2217 19.2043 17.6599 20.486 15.8326 21.2429C14.0054 21.9998 11.9947 22.1978 10.0549 21.8119C8.11509 21.4261 6.33326 20.4737 4.93473 19.0752C3.53621 17.6766 2.5838 15.8948 2.19795 13.955C1.81209 12.0152 2.01013 10.0045 2.767 8.17726C3.52388 6.35 4.8056 4.78821 6.4501 3.6894C8.09459 2.59058 10.028 2.00409 12.0058 2.00409C14.658 2.00409 17.2015 3.05766 19.0769 4.93302C20.9522 6.80839 22.0058 9.35193 22.0058 12.0041ZM15.0058 14.0041C15.0041 13.3851 14.8109 12.7819 14.4529 12.277C14.0948 11.7722 13.5893 11.3904 13.0058 11.1841V7.00409C13.0058 6.73888 12.9004 6.48452 12.7129 6.29699C12.5254 6.10945 12.271 6.00409 12.0058 6.00409C11.7406 6.00409 11.4862 6.10945 11.2987 6.29699C11.1112 6.48452 11.0058 6.73888 11.0058 7.00409V11.1841C10.4869 11.3675 10.0285 11.6902 9.68072 12.1167C9.33294 12.5433 9.10919 13.0573 9.03397 13.6025C8.95874 14.1476 9.03494 14.703 9.25421 15.2078C9.47349 15.7126 9.8274 16.1473 10.2772 16.4644C10.727 16.7816 11.2554 16.9688 11.8045 17.0058C12.3536 17.0427 12.9023 16.9279 13.3905 16.6738C13.8787 16.4198 14.2877 16.0364 14.5726 15.5655C14.8575 15.0946 15.0073 14.5544 15.0058 14.0041Z\"\n              fill=\"#5F5F5F\" />\n          </svg>\n          <span>Alarm set : 500</span>\n        </div>\n      </div>\n      <div style=\"cursor: pointer;\" (click)=\"editDetails(product.product_name)\" class=\"row\" >\n        <div class=\"col-4\">\n          <img src=\"{{product.product_image}}\" alt=\"\">\n        </div>\n        <div class=\"col-8\">\n          <p class=\"mx-1 mt-1\" style=\"font-size:10px;justify-content: center;\">{{product.description}}</p>\n        </div>\n        <div class=\"col-6\">\n          <h6 class=\"product-name\">{{product.product_name}}</h6>\n        </div>\n        <div class=\"col-6\">\n          <h6 class=\"price\">Rs.{{product.cost}}/kg</h6>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_myproducts_myproducts_module_ts-es2015.js.map