(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_sniper-orde-confirmation_sniper-orde-confirmation_module_ts"],{

/***/ 20905:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/sniper-orde-confirmation/sniper-orde-confirmation-routing.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SniperOrdeConfirmationPageRoutingModule": function() { return /* binding */ SniperOrdeConfirmationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sniper_orde_confirmation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sniper-orde-confirmation.page */ 9724);




const routes = [
    {
        path: '',
        component: _sniper_orde_confirmation_page__WEBPACK_IMPORTED_MODULE_0__.SniperOrdeConfirmationPage
    }
];
let SniperOrdeConfirmationPageRoutingModule = class SniperOrdeConfirmationPageRoutingModule {
};
SniperOrdeConfirmationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SniperOrdeConfirmationPageRoutingModule);



/***/ }),

/***/ 33755:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/sniper-orde-confirmation/sniper-orde-confirmation.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SniperOrdeConfirmationPageModule": function() { return /* binding */ SniperOrdeConfirmationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sniper_orde_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sniper-orde-confirmation-routing.module */ 20905);
/* harmony import */ var _sniper_orde_confirmation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sniper-orde-confirmation.page */ 9724);







let SniperOrdeConfirmationPageModule = class SniperOrdeConfirmationPageModule {
};
SniperOrdeConfirmationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sniper_orde_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__.SniperOrdeConfirmationPageRoutingModule
        ],
        declarations: [_sniper_orde_confirmation_page__WEBPACK_IMPORTED_MODULE_1__.SniperOrdeConfirmationPage]
    })
], SniperOrdeConfirmationPageModule);



/***/ }),

/***/ 9724:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/sniper-orde-confirmation/sniper-orde-confirmation.page.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SniperOrdeConfirmationPage": function() { return /* binding */ SniperOrdeConfirmationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sniper_orde_confirmation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sniper-orde-confirmation.page.html */ 42212);
/* harmony import */ var _sniper_orde_confirmation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sniper-orde-confirmation.page.scss */ 11529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let SniperOrdeConfirmationPage = class SniperOrdeConfirmationPage {
    constructor() { }
    ngOnInit() {
    }
};
SniperOrdeConfirmationPage.ctorParameters = () => [];
SniperOrdeConfirmationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sniper-orde-confirmation',
        template: _raw_loader_sniper_orde_confirmation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sniper_orde_confirmation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SniperOrdeConfirmationPage);



/***/ }),

/***/ 11529:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/sniper-orde-confirmation/sniper-orde-confirmation.page.scss ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 200px;\n  line-height: 26px;\n}\n\n.content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nion-spinner {\n  color: #d35db9;\n  width: 50px;\n  height: 50px;\n  transform: scale(3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuaXBlci1vcmRlLWNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLDBDQUFBO0FBQUo7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InNuaXBlci1vcmRlLWNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gIC5jb250ZW50IHsgIFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIzOSwgMjUwKTtcbiAgfVxuaW9uLXNwaW5uZXIge1xuICAgIGNvbG9yOnJnYigyMTEsIDkzLCAxODUpO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xufSJdfQ== */");

/***/ }),

/***/ 42212:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sniper-orde-confirmation/sniper-orde-confirmation.page.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"content\" [fullscreen]=\"true\">\n  <div id=\"container\">\n    <strong>\n      <ion-spinner name=\"dots\"></ion-spinner>\n    </strong>\n    <br>\n    <br>\n    <h6>Um momento, finalizando ...</h6>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sniper-orde-confirmation_sniper-orde-confirmation_module_ts-es2015.js.map