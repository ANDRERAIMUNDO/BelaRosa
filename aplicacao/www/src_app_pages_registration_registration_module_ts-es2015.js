(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_registration_registration_module_ts"],{

/***/ 27863:
/*!*******************************************************************!*\
  !*** ./src/app/pages/registration/registration-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageRoutingModule": function() { return /* binding */ RegistrationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.page */ 48010);




const routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_0__.RegistrationPage
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistrationPageRoutingModule);



/***/ }),

/***/ 50015:
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPageModule": function() { return /* binding */ RegistrationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-routing.module */ 27863);
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.page */ 48010);







let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrationPageRoutingModule
        ],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_1__.RegistrationPage]
    })
], RegistrationPageModule);



/***/ }),

/***/ 48010:
/*!*********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPage": function() { return /* binding */ RegistrationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registration.page.html */ 71279);
/* harmony import */ var _registration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.page.scss */ 45563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/registro.service */ 60023);








let RegistrationPage = class RegistrationPage {
    constructor(router, registroService, formBuilder, alertController, loadingController) {
        this.router = router;
        this.registroService = registroService;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.senha = "password";
        this.button = false;
        this.registrationDTO = {
            email: "",
            password: ""
        };
    }
    ngOnInit() {
        this.validEmailMsg = "ok";
        this.validPasswordMsg = "ok";
        this.presentLoading();
        this.formGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            emailConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    submitForm() {
        this.button = true;
        this.sniper = "ok";
        this.registroService.insert(this.registrationDTO)
            .subscribe(response => {
            this.registrationSuccess();
        }, catchError => {
            console.log(catchError);
            this.presentFindByEmail();
            this.router.navigate(['/registration']);
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
    onChangeEmail() {
        this.email = this.formGroup.get('email').value;
        this.emailConfirm = this.formGroup.get('emailConfirm').value;
        let email = this.email;
        let emailConfirm = this.emailConfirm;
        if (email == emailConfirm) {
            this.registrationDTO.email = this.email;
            this.validEmailMsg = null;
            this.emailMsg = null;
        }
        else {
            this.emailMsg = "ok";
        }
    }
    onChangePassword() {
        this.password = this.formGroup.get('password').value;
        this.passwordConfirm = this.formGroup.get('passwordConfirm').value;
        let password = this.password;
        let passwordConfirm = this.passwordConfirm;
        if (password == passwordConfirm) {
            this.registrationDTO.password = this.password;
            this.validPasswordMsg = null;
            this.passwordMsg = null;
        }
        else {
            this.passwordMsg = "ok ";
        }
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Carregando serviços ...',
                duration: 7000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    presentEmailConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atenção!',
                subHeader: 'Voce digitou dois emails direfentes',
                message: 'Antes de confirmar verifique se os email estão iguais.',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
            this.button = false;
            this.sniper = null;
            this.router.navigate(['/registration']);
        });
    }
    presentErrorPasswordConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atenção!',
                subHeader: 'Voce digitou senhas direfentes',
                message: 'Antes de confirmar verifique se as senhas estão iguais.',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
            this.button = false;
            this.sniper = null;
            this.router.navigate(['/registration']);
        });
    }
    presentFindByEmail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Não é possivel usar este email',
                subHeader: 'Se o email digitado for seu',
                message: 'click em "Possui uma conta e não consegue acessar"',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
            this.button = false;
            this.sniper = null;
            this.router.navigate(['/registration']);
        });
    }
    registrationSuccess() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'registration-success',
                header: 'Ok',
                subHeader: 'Sucesso no Registro',
                message: 'Agora confirme se é você mesmo.',
                buttons: [
                    {
                        text: 'Continuar',
                        cssClass: 'secondary',
                        handler: () => {
                            this.router.navigate(['/registration-authentication']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
RegistrationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_registro_service__WEBPACK_IMPORTED_MODULE_2__.RegistroService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
RegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistrationPage);



/***/ }),

/***/ 45563:
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container-button {\n  text-align: left;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #f39ce7;\n}\n\n#imagem-visao {\n  width: 20px;\n  height: 20px;\n}\n\n.content {\n  --ion-background-color: rgb(243, 156, 231);\n}\n\n.ion-padding-top {\n  padding-top: 50 px;\n}\n\n.ion-text-center {\n  text-align: center;\n}\n\n.ion-padding-top {\n  padding-top: 50 px;\n}\n\n.ion-padding {\n  padding: 30px;\n}\n\nion-header {\n  --ion-background-color: rgb(231, 163, 203);\n}\n\nh5 {\n  font-family: \"sans-serif\";\n  font-size: medium;\n  font-weight: bolder;\n  font-style: italic;\n  color: white;\n  text-align: left;\n}\n\nh4 {\n  font-family: \"sans-serif\";\n  text-align: center;\n  font-size: small;\n}\n\np {\n  font-family: \"sans-serif\";\n  font-style: italic;\n  text-align: center;\n  color: #e5ff00;\n  font-size: small;\n}\n\nion-buttons {\n  color: white;\n}\n\nion-input {\n  font-family: \"sans-serif\";\n  font-style: italic;\n  color: white;\n  font-size: small;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLDBDQUFBO0FBQUY7O0FBR0E7RUFDQSxrQkFBQTtBQUFBOztBQUdBO0VBQ0Esa0JBQUE7QUFBQTs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDQSxhQUFBO0FBQUE7O0FBR0E7RUFDQSwwQ0FBQTtBQUFBOztBQUdBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBQTs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDQSxZQUFBO0FBQUE7O0FBR0E7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQUE7O0FBR0E7RUFDQSxjQUFBO0FBQUEiLCJmaWxlIjoicmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXItYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvL2xlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjb2xvcjogcmdiKDI0MywgMTU2LCAyMzEpO1xufVxuXG4jaW1hZ2VtLXZpc2FvIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxNTYsIDIzMSk7XG59IFxuXG4uaW9uLXBhZGRpbmctdG9wIHtcbnBhZGRpbmctdG9wOiA1MCBweDsgXG59XG5cbi5pb24tdGV4dC1jZW50ZXIge1xudGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi5pb24tcGFkZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogNTAgcHg7IFxufVxuXG4uaW9uLXBhZGRpbmdcdHtcbnBhZGRpbmc6IDMwcHg7IFxufVxuXG5pb24taGVhZGVyIHtcbi0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDE2MywgMjAzKTtcbn1cblxuaDUge1xuZm9udC1mYW1pbHk6IFwic2Fucy1zZXJpZlwiO1xuZm9udC1zaXplOiBtZWRpdW07XG5mb250LXdlaWdodDogYm9sZGVyO1xuZm9udC1zdHlsZTogaXRhbGljO1xuY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbnRleHQtYWxpZ246IGxlZnQ7IFxufVxuXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBcInNhbnMtc2VyaWZcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwic2Fucy1zZXJpZlwiO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyMjksIDI1NSwgMCk7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbmlvbi1idXR0b25zIHtcbmNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbmlvbi1pbnB1dCB7XG5mb250LWZhbWlseTogXCJzYW5zLXNlcmlmXCI7XG5mb250LXN0eWxlOiBpdGFsaWM7XG5jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuZm9udC1zaXplOiBzbWFsbDtcbn1cblxuaW9uLWJ1dHRvbiB7XG5jb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xufVxuIl19 */");

/***/ }),

/***/ 71279:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button>back</ion-back-button>\n    </ion-buttons>\n    <ion-title><h5>Criar sua conta</h5></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\" [fullscreen]=\"true\">\n  <div id=\"container\"> \n    <img src=\"../../assets/logobelarosa.png\" />\n    <br>\n    <br>\n    <h5 class=\"ion-text-center\">Passo 1 de 3</h5>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <form [formGroup]=\"formGroup\" (ngSubmit)=\"submitForm()\">\n\n              <ion-item lines=\"full\">\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input formControlName=\"email\" type=\"text\" required></ion-input>\n              </ion-item>\n              <p *ngIf=\"formGroup.controls.email.dirty && formGroup.controls.email.errors\" margin-left>Email em formato invalido. </p>\n              <p *ngIf=\"emailMsg\">Emails estão diferentes. </p>\n              \n              <ion-item lines=\"full\">\n                <ion-label position=\"floating\">Repetir email</ion-label>\n                <ion-input formControlName=\"emailConfirm\" type=\"text\" (ionChange)=\"onChangeEmail($event)\" required ></ion-input>\n              </ion-item>\n              <p *ngIf=\"formGroup.controls.emailConfirm.dirty && formGroup.controls.emailConfirm.errors\" margin-left>Email em formato invalido. </p>\n              <p *ngIf=\"emailMsg\">Emails estão diferentes. </p>\n\n              <ion-item lines=\"full\">\n                <ion-label position=\"floating\">Senha</ion-label>\n                <ion-input formControlName=\"password\" type={{senha}} required ></ion-input>\n\n                <ion-button id=\"container-button\" color=\"light\" fill=\"clear\" slot=\"end\" (click)=\"showPassword()\">\n                  <img id=\"imagem-visao\" src=\"../../assets/visao.png\"/>\n               </ion-button>\n              </ion-item>\n              <p *ngIf=\"formGroup.controls.password.dirty && formGroup.controls.password.errors\" margin-left>Valor invalido. </p>\n              <p *ngIf=\"passwordMsg\">Senhas estão diferentes.</p>\n             \n              <ion-item lines=\"full\">\n                <ion-label position=\"floating\">Repetir Senha</ion-label>\n                <ion-input formControlName=\"passwordConfirm\" type={{senha}} (ionChange)=\"onChangePassword($event)\" required ></ion-input>\n              </ion-item>\n              <p *ngIf=\"formGroup.controls.passwordConfirm.dirty && formGroup.controls.passwordConfirm.errors\" margin-left>Valor invalido. </p>\n              <p *ngIf=\"passwordMsg\">Senhas estão diferentes.</p>\n             \n              <ion-row>\n                <ion-col>\n                  <ion-button disabled = \"{{button}}\" *ngIf=\"!validEmailMsg && !validPasswordMsg\" type=\"submit\" color=\"light\" expand=\"block\">\n                    <ion-spinner *ngIf=\"sniper\" color=\"secondary\" > </ion-spinner>\n                    <h4 *ngIf=\"sniper\"> aguarde ...</h4>\n                    <h4 *ngIf=\"!sniper\">Criar nova conta</h4>\n                  </ion-button>\n                  <a class=\"small-text\">Criar nova conta ? </a>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-button [routerLink]=\"['/login']\" color=\"light\" expand=\"block\"> Voltar </ion-button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <a class=\"small-text\" [routerLink]=\"['/forgot-password']\" > Possui uma conta e não consegue acessar ? </a> \n                </ion-col>\n            </ion-row>\n            </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registration_registration_module_ts-es2015.js.map