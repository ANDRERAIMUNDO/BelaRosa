(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_circle-login_circle-login_module_ts"],{

/***/ 24734:
/*!*******************************************************************!*\
  !*** ./src/app/pages/circle-login/circle-login-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleLoginPageRoutingModule": function() { return /* binding */ CircleLoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _circle_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle-login.page */ 48475);




const routes = [
    {
        path: '',
        component: _circle_login_page__WEBPACK_IMPORTED_MODULE_0__.CircleLoginPage
    }
];
let CircleLoginPageRoutingModule = class CircleLoginPageRoutingModule {
};
CircleLoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CircleLoginPageRoutingModule);



/***/ }),

/***/ 94111:
/*!***********************************************************!*\
  !*** ./src/app/pages/circle-login/circle-login.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleLoginPageModule": function() { return /* binding */ CircleLoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _circle_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle-login-routing.module */ 24734);
/* harmony import */ var _circle_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle-login.page */ 48475);







let CircleLoginPageModule = class CircleLoginPageModule {
};
CircleLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _circle_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.CircleLoginPageRoutingModule
        ],
        declarations: [_circle_login_page__WEBPACK_IMPORTED_MODULE_1__.CircleLoginPage]
    })
], CircleLoginPageModule);



/***/ }),

/***/ 48475:
/*!*********************************************************!*\
  !*** ./src/app/pages/circle-login/circle-login.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleLoginPage": function() { return /* binding */ CircleLoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_circle_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./circle-login.page.html */ 34797);
/* harmony import */ var _circle_login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle-login.page.scss */ 34655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categoria.service */ 1875);







let CircleLoginPage = class CircleLoginPage {
    constructor(categoriaService, alertController, router) {
        this.categoriaService = categoriaService;
        this.alertController = alertController;
        this.router = router;
        this.animation = false;
    }
    ionViewDidEnter() {
        this.time = "undefined";
        this.animationLoginPage();
        this.wakeup();
    }
    wakeup() {
        this.categoriaService.findAll()
            .subscribe(response => {
            this.time = 2;
        }, catchError => {
            this.errrorPresentAlert();
            console.log(catchError);
        });
    }
    animationLoginPage() {
        setTimeout(() => {
            if (this.animation == false) {
                this.router.navigate(['/login']);
            }
        }, this.time);
    }
    errrorPresentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Ops!',
                subHeader: 'Falha na conexão com nossos servidores. ',
                message: 'Verificar sua conexão de internet. ',
                buttons: ['Continuar']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
            this.router.navigate(['/home']);
        });
    }
};
CircleLoginPage.ctorParameters = () => [
    { type: src_app_services_categoria_service__WEBPACK_IMPORTED_MODULE_2__.CategoriaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
CircleLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-circle-login',
        template: _raw_loader_circle_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_circle_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CircleLoginPage);



/***/ }),

/***/ 34655:
/*!***********************************************************!*\
  !*** ./src/app/pages/circle-login/circle-login.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 200px;\n  line-height: 26px;\n}\n\n.content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nion-spinner {\n  color: #d35db9;\n  width: 50px;\n  height: 50px;\n  transform: scale(2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmNsZS1sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLDBDQUFBO0FBQUo7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImNpcmNsZS1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gIC5jb250ZW50IHsgIFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIzOSwgMjUwKTtcbiAgfVxuaW9uLXNwaW5uZXIge1xuICAgIGNvbG9yOnJnYigyMTEsIDkzLCAxODUpO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xufSJdfQ== */");

/***/ }),

/***/ 34797:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/circle-login/circle-login.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"content\" [fullscreen]=\"true\">\n  <div id=\"container\">\n    <strong>\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n    </strong>\n    <br>\n    <br>\n    <h6>Carregando ...</h6>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_circle-login_circle-login_module_ts-es2015.js.map