(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 31021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 28781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 37556);







let LoginPage = class LoginPage {
    constructor(router, authService, loadingController) {
        this.router = router;
        this.authService = authService;
        this.loadingController = loadingController;
        this.senha = "password";
        this.credenciais = {
            email: "",
            password: ""
        };
        this.button = false;
    }
    ionViewWillEnter() {
        this.erroLogin = null;
        this.refresh();
    }
    refresh() {
        this.authService.refreshToken()
            .subscribe(response => {
            this.authService.sucessLogin(response.headers.get('Authorization'));
            this.router.navigate(['/dashboard/index']);
        }), catchError => {
            console.log(catchError);
            this.router.navigate(['/login']);
        };
    }
    ;
    login() {
        this.button = true;
        this.sniper = "ok";
        this.authService.authetocation(this.credenciais)
            .subscribe(response => {
            this.button = true;
            this.sniper = "ok";
            this.authService.sucessLogin(response.headers.get('Authorization'));
            this.router.navigate(['/dashboard/index']);
        }, catchError => {
            //if (catchError.status == 401)
            //    {
            this.erroLogin = "erro";
            this.button = false;
            this.sniper = null;
            //  }
        });
    }
    showPassword() {
        let show = "text";
        let hide = "password";
        this.senha = show;
        setTimeout(() => {
            this.senha = hide;
        }, 3000);
    }
    reload() {
        this.erroLogin = null;
        this.button = false;
        this.sniper = null;
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 28781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container-button {\n  text-align: left;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #f39ce7;\n}\n\nion-spinner {\n  text-align: center;\n  position: absolute;\n  left: auto;\n  right: auto;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#imagem-visao {\n  width: 20px;\n  height: 20px;\n}\n\n.content {\n  --ion-background-color: rgb(243, 156, 231);\n}\n\n.ion-padding-top {\n  padding-top: 50 px;\n}\n\n.ion-text-center {\n  text-align: center;\n}\n\n.ion-padding-top {\n  padding-top: 50 px;\n}\n\n.ion-padding {\n  padding: 30px;\n}\n\nion-header {\n  --ion-background-color: rgb(231, 163, 203);\n}\n\nh5 {\n  font-family: \"sans-serif\";\n  font-size: medium;\n  font-weight: bolder;\n  font-style: italic;\n  color: white;\n  text-align: left;\n}\n\nion-buttons {\n  color: white;\n}\n\nion-input {\n  font-family: \"sans-serif\";\n  font-style: italic;\n  color: white;\n  font-size: small;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n\n.my-custom-class {\n  color: #e7490a;\n  font-size: xx-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0ksMENBQUE7QUFBSjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLDBDQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBREYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lci1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiByZ2IoMjQzLCAxNTYsIDIzMSk7XG59XG5cbmlvbi1zcGlubmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiBhdXRvO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jaW1hZ2VtLXZpc2FvIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDE1NiwgMjMxKTtcbn0gXG5cbi5pb24tcGFkZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogNTAgcHg7IFxufVxuXG4uaW9uLXRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyXG4gfVxuICBcbi5pb24tcGFkZGluZy10b3Age1xuICAgIHBhZGRpbmctdG9wOiA1MCBweDsgXG59XG5cbi5pb24tcGFkZGluZ1x0e1xuICBwYWRkaW5nOiAzMHB4OyBcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDE2MywgMjAzKTtcbn1cblxuaDUge1xuICBmb250LWZhbWlseTogXCJzYW5zLXNlcmlmXCI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHRleHQtYWxpZ246IGxlZnQ7IFxufVxuXG5pb24tYnV0dG9ucyB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcInNhbnMtc2VyaWZcIjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgY29sb3I6IHJnYigyNDAsIDE5MSwgMjMzKTtcbn1cblxuXG4ubXktY3VzdG9tLWNsYXNzIHtcbiAgY29sb3I6IHJnYigyMzEsIDczLCAxMCk7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ 31021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button>back</ion-back-button>\n    </ion-buttons>\n    <ion-title><h5>Retornar</h5></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"erroLogin\" class=\"content\" [fullscreen]=\"true\">\n  <div class=\"ion-padding-top\">\n    <div class=\"ion-padding\">\n      <div class=\"ion-text-center\">\n          <img src=\"../../assets/logobelarosa.png\" />\n          <br>\n          <br>\n          <br>\n          <br>\n          <br> \n          <ion-label> Email ou senha estão incorretos. </ion-label>\n          <br>\n          <br>\n          <br>\n          <ion-button color=\"light\" expand=\"block\" (click)=\"reload()\" > Entrar novamente </ion-button>\n      </div>\n    </div>\n  </div>\n    <ion-list>\n      <ion-item>\n        <a class=\"ion-text-center\" [routerLink]=\"['/forgot-password']\" class=\"small-text\">Recupera sua senha?</a>\n      </ion-item>\n    </ion-list>\n</ion-content >\n\n<ion-content *ngIf=\"!erroLogin\" class=\"content\"[fullscreen]=\"true\">\n<div class=\"ion-padding-top\">\n<div class=\"ion-padding\">\n<div class=\"ion-text-center\">\n  <img src=\"../../assets/logobelarosa.png\" />\n  <br>\n  <br>\n  <br>\n  <br>\n  <br> \n  <form>\n    <div class=\"form-group\">\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"text\" autocomplete=\"email\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"credenciais.email\" name=\"email\"> </ion-input>\n      </ion-item>\n    </div>\n    <div class=\"form-group\">\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type={{senha}} class=\"form-control\" id=\"password\" required [(ngModel)]=\"credenciais.password\" name=\"password\"></ion-input>\n     \n      <ion-button id=\"container-button\" color=\"light\" fill=\"clear\" slot=\"end\" (click)=\"showPassword()\">\n         <img id=\"imagem-visao\" src=\"../../assets/visao.png\"/>\n      </ion-button>\n      </ion-item>\n    </div>\n    <ion-row>\n      <ion-col>\n        <ion-button disabled = \"{{button}}\" type=\"submit\" color=\"light\" expand=\"block\" (click)=\"login()\">\n          Entrar\n          <ion-spinner *ngIf=\"sniper\" color=\"secondary\" duration = 3 > </ion-spinner>\n        </ion-button>\n          <a [routerLink]=\"['/forgot-password']\" class=\"small-text\">Recupera sua senha?</a>\n      </ion-col>\n    </ion-row>\n  </form>\n</div>\n</div>\n</div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts-es2015.js.map