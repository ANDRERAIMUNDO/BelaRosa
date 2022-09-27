(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_registration-authentication_registration-authentication_module_ts"],{

/***/ 86440:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/registration-authentication/registration-authentication-routing.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationAuthenticationPageRoutingModule": function() { return /* binding */ RegistrationAuthenticationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _registration_authentication_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-authentication.page */ 78708);




const routes = [
    {
        path: '',
        component: _registration_authentication_page__WEBPACK_IMPORTED_MODULE_0__.RegistrationAuthenticationPage
    }
];
let RegistrationAuthenticationPageRoutingModule = class RegistrationAuthenticationPageRoutingModule {
};
RegistrationAuthenticationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistrationAuthenticationPageRoutingModule);



/***/ }),

/***/ 84051:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/registration-authentication/registration-authentication.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationAuthenticationPageModule": function() { return /* binding */ RegistrationAuthenticationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _registration_authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-authentication-routing.module */ 86440);
/* harmony import */ var _registration_authentication_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-authentication.page */ 78708);







let RegistrationAuthenticationPageModule = class RegistrationAuthenticationPageModule {
};
RegistrationAuthenticationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registration_authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrationAuthenticationPageRoutingModule
        ],
        declarations: [_registration_authentication_page__WEBPACK_IMPORTED_MODULE_1__.RegistrationAuthenticationPage]
    })
], RegistrationAuthenticationPageModule);



/***/ }),

/***/ 78708:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/registration-authentication/registration-authentication.page.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationAuthenticationPage": function() { return /* binding */ RegistrationAuthenticationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_registration_authentication_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registration-authentication.page.html */ 51357);
/* harmony import */ var _registration_authentication_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-authentication.page.scss */ 12701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 37556);







let RegistrationAuthenticationPage = class RegistrationAuthenticationPage {
    constructor(router, autheService, alertController) {
        this.router = router;
        this.autheService = autheService;
        this.alertController = alertController;
        this.senha = "password";
        this.credenciais = {
            email: "",
            password: ""
        };
        this.button = false;
    }
    ngOnInit() {
    }
    login() {
        this.button = true;
        this.sniper = "ok";
        this.autheService.authetocation(this.credenciais)
            .subscribe(response => {
            this.autheService.sucessLogin(response.headers.get(('Authorization')));
            this.router.navigate(['/sigup']);
        }, catchError => {
            this.presentError();
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
    presentError() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.button = false;
            this.sniper = null;
            const alert = yield this.alertController.create({
                header: 'Atenção!',
                subHeader: 'Email ou senha incorreto. ',
                message: 'Verifique se senha o email estão corretos. ',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
            this.router.navigate(['/registration-authentication']);
        });
    }
};
RegistrationAuthenticationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
RegistrationAuthenticationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-registration-authentication',
        template: _raw_loader_registration_authentication_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registration_authentication_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistrationAuthenticationPage);



/***/ }),

/***/ 12701:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/registration-authentication/registration-authentication.page.scss ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container-button {\n  text-align: left;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #f39ce7;\n}\n\n#imagem-visao {\n  width: 20px;\n  height: 20px;\n}\n\n.content {\n  --ion-background-color: rgb(243, 156, 231);\n}\n\n.ion-padding-top {\n  padding-top: 50 px;\n}\n\n.ion-text-center {\n  text-align: center;\n}\n\n.ion-padding-top {\n  padding-top: 50 px;\n}\n\n.ion-padding {\n  padding: 30px;\n}\n\nion-header {\n  --ion-background-color: rgb(231, 163, 203);\n}\n\nh5 {\n  font-family: \"sans-serif\";\n  font-size: medium;\n  font-weight: bolder;\n  font-style: italic;\n  color: white;\n  text-align: left;\n}\n\nion-buttons {\n  color: white;\n}\n\nion-input {\n  font-family: \"sans-serif\";\n  font-style: italic;\n  color: white;\n  font-size: small;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi1hdXRoZW50aWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLDBDQUFBO0FBQUY7O0FBR0E7RUFDQSxrQkFBQTtBQUFBOztBQUdBO0VBQ0Esa0JBQUE7QUFBQTs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDQSxhQUFBO0FBQUE7O0FBR0E7RUFDQSwwQ0FBQTtBQUFBOztBQUdBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBQTs7QUFHQTtFQUNBLFlBQUE7QUFBQTs7QUFHQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBQTs7QUFHQTtFQUNBLGNBQUE7QUFBQSIsImZpbGUiOiJyZWdpc3RyYXRpb24tYXV0aGVudGljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lci1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiByZ2IoMjQzLCAxNTYsIDIzMSk7XG59XG5cbiNpbWFnZW0tdmlzYW8ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDE1NiwgMjMxKTtcbn0gXG5cbi5pb24tcGFkZGluZy10b3Age1xucGFkZGluZy10b3A6IDUwIHB4OyBcbn1cblxuLmlvbi10ZXh0LWNlbnRlciB7XG50ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLmlvbi1wYWRkaW5nLXRvcCB7XG4gIHBhZGRpbmctdG9wOiA1MCBweDsgXG59XG5cbi5pb24tcGFkZGluZ1x0e1xucGFkZGluZzogMzBweDsgXG59XG5cbmlvbi1oZWFkZXIge1xuLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMTYzLCAyMDMpO1xufVxuXG5oNSB7XG5mb250LWZhbWlseTogXCJzYW5zLXNlcmlmXCI7XG5mb250LXNpemU6IG1lZGl1bTtcbmZvbnQtd2VpZ2h0OiBib2xkZXI7XG5mb250LXN0eWxlOiBpdGFsaWM7XG5jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xudGV4dC1hbGlnbjogbGVmdDsgXG59XG5cbmlvbi1idXR0b25zIHtcbmNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbmlvbi1pbnB1dCB7XG5mb250LWZhbWlseTogXCJzYW5zLXNlcmlmXCI7XG5mb250LXN0eWxlOiBpdGFsaWM7XG5jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuZm9udC1zaXplOiBzbWFsbDtcbn1cblxuaW9uLWJ1dHRvbiB7XG5jb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xufVxuIl19 */");

/***/ }),

/***/ 51357:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration-authentication/registration-authentication.page.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><h5>Finalizar Cadastro</h5></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\"[fullscreen]=\"true\">\n  <div id=\"container\">\n    <img src=\"../../assets/logobelarosa.png\" />\n    <br>\n    <br>\n    <h5 class=\"ion-text-center\">Passo 2 de 3</h5>\n    <div class=\"ion-padding-top\">\n      <div class=\"ion-padding\">\n        <div class=\"ion-text-center\"> \n          <form>\n            <div class=\"form-group\">\n              <ion-item lines=\"full\">\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input type=\"text\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"credenciais.email\" name=\"email\"> </ion-input>\n              </ion-item>\n              </div>\n\n             <div class=\"form-group\">\n                <ion-item lines=\"full\">\n                <ion-label position=\"floating\">Password</ion-label>\n                <ion-input type={{senha}} class=\"form-control\" id=\"password\" required [(ngModel)]=\"credenciais.password\" name=\"password\"> </ion-input>\n\n                <ion-button id=\"container-button\" color=\"light\" fill=\"clear\" slot=\"end\" (click)=\"showPassword()\">\n                  <img id=\"imagem-visao\" src=\"../../assets/visao.png\"/>\n               </ion-button>\n              </ion-item>\n            </div>\n\n            <ion-row>\n              <ion-col>\n                <ion-button disabled = \"{{button}}\" type=\"submit\" color=\"light\" expand=\"block\" (click)=\"login()\">\n                  <ion-spinner *ngIf=\"sniper\" color=\"secondary\"> </ion-spinner>\n                    <p *ngIf=\"sniper\"> validando usuario ...</p>\n                    <p *ngIf=\"!sniper\">Avançar</p>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registration-authentication_registration-authentication_module_ts-es2015.js.map