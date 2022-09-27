(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_circle_circle_module_ts"],{

/***/ 58116:
/*!*******************************************************!*\
  !*** ./src/app/pages/circle/circle-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CirclePageRoutingModule": function() { return /* binding */ CirclePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _circle_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle.page */ 47906);




const routes = [
    {
        path: '',
        component: _circle_page__WEBPACK_IMPORTED_MODULE_0__.CirclePage
    }
];
let CirclePageRoutingModule = class CirclePageRoutingModule {
};
CirclePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CirclePageRoutingModule);



/***/ }),

/***/ 26163:
/*!***********************************************!*\
  !*** ./src/app/pages/circle/circle.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CirclePageModule": function() { return /* binding */ CirclePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _circle_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle-routing.module */ 58116);
/* harmony import */ var _circle_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle.page */ 47906);







let CirclePageModule = class CirclePageModule {
};
CirclePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _circle_routing_module__WEBPACK_IMPORTED_MODULE_0__.CirclePageRoutingModule
        ],
        declarations: [_circle_page__WEBPACK_IMPORTED_MODULE_1__.CirclePage]
    })
], CirclePageModule);



/***/ }),

/***/ 47906:
/*!*********************************************!*\
  !*** ./src/app/pages/circle/circle.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CirclePage": function() { return /* binding */ CirclePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_circle_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./circle.page.html */ 90283);
/* harmony import */ var _circle_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle.page.scss */ 26461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let CirclePage = class CirclePage {
    constructor(router) {
        this.router = router;
        this.animation = true;
    }
    ionViewDidEnter() {
        this.animationAddressPage();
    }
    animationAddressPage() {
        setTimeout(() => {
            if (this.animation == true) {
                this.router.navigate(['/dashboard/address']);
            }
        }, 3000);
        console.log('enable animation');
    }
};
CirclePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CirclePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-circle',
        template: _raw_loader_circle_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_circle_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CirclePage);



/***/ }),

/***/ 26461:
/*!***********************************************!*\
  !*** ./src/app/pages/circle/circle.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 200px;\n  line-height: 26px;\n}\n\n.content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nion-spinner {\n  color: #d35db9;\n  width: 50px;\n  height: 50px;\n  transform: scale(3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmNsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLDBDQUFBO0FBQUo7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImNpcmNsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gIC5jb250ZW50IHsgIFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIzOSwgMjUwKTtcbiAgfVxuaW9uLXNwaW5uZXIge1xuICAgIGNvbG9yOnJnYigyMTEsIDkzLCAxODUpO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xufSJdfQ== */");

/***/ }),

/***/ 90283:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/circle/circle.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-content class=\"content\" [fullscreen]=\"true\">\n    <div id=\"container\">\n      <strong>\n        <ion-spinner name=\"bubbles\"></ion-spinner>\n      </strong>\n    </div>\n  </ion-content>\n  ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_circle_circle_module_ts-es2015.js.map