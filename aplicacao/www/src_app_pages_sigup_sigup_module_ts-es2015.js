(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_sigup_sigup_module_ts"],{

/***/ 93655:
/*!*****************************************************!*\
  !*** ./src/app/pages/sigup/sigup-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigupPageRoutingModule": function() { return /* binding */ SigupPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sigup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sigup.page */ 49167);




const routes = [
    {
        path: '',
        component: _sigup_page__WEBPACK_IMPORTED_MODULE_0__.SigupPage
    }
];
let SigupPageRoutingModule = class SigupPageRoutingModule {
};
SigupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SigupPageRoutingModule);



/***/ }),

/***/ 82802:
/*!*********************************************!*\
  !*** ./src/app/pages/sigup/sigup.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigupPageModule": function() { return /* binding */ SigupPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sigup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sigup-routing.module */ 93655);
/* harmony import */ var _sigup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sigup.page */ 49167);







let SigupPageModule = class SigupPageModule {
};
SigupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _sigup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigupPageRoutingModule
        ],
        declarations: [_sigup_page__WEBPACK_IMPORTED_MODULE_1__.SigupPage]
    })
], SigupPageModule);



/***/ }),

/***/ 49167:
/*!*******************************************!*\
  !*** ./src/app/pages/sigup/sigup.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigupPage": function() { return /* binding */ SigupPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sigup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sigup.page.html */ 81198);
/* harmony import */ var _sigup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sigup.page.scss */ 11381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cliente.service */ 70932);
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/registro.service */ 60023);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 71188);










let SigupPage = class SigupPage {
    constructor(clienteService, registroService, storageService, router, formBuilder, alertController) {
        this.clienteService = clienteService;
        this.registroService = registroService;
        this.storageService = storageService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.button = false;
        this.clienteNewDto = {
            registroId: "",
            name: "",
            cpf: "",
            dateNasc: "",
            phone: "",
            cep: "",
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            localidade: "",
            uf: ""
        };
    }
    ngOnInit() {
        let localUser = this.storageService.getLocalUser();
        if (localUser && localUser.email) {
            this.registroService.findByEmail(localUser.email)
                .subscribe(response => {
                this.registro = response;
                this._registroId = this.registro.id;
                this.clienteNewDto.registroId = this._registroId;
                this.email = this.registro.email;
            }, catchError => {
                if (catchError.status == 403) {
                    this.router.navigate(['/sigup']);
                }
            });
        }
        this.formGroup = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]],
            cpf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(11)]],
            dateNasc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(8)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(11)]],
            cep: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]],
            logradouro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]],
            numero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(6)]],
            complemento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]],
            bairro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]],
            localidade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]],
            uf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(2)]],
        });
    }
    getEndereco() {
        let cep = this.formGroup.get('cep').value;
        this.clienteService.viaCep(cep)
            .subscribe(response => {
            this.endereco = response;
        }, catchError => {
            this.errorCep();
        });
    }
    submitForm() {
        this.button = true;
        this.sniper = "ok";
        let name = this.formGroup.get('name').value;
        let cpf = this.formGroup.get('cpf').value;
        let dateNasc = this.formGroup.get('dateNasc').value;
        let phone = this.formGroup.get('phone').value;
        let cep = this.formGroup.get('cep').value;
        let logradouro = this.formGroup.get('logradouro').value;
        let numero = this.formGroup.get('numero').value;
        let complemento = this.formGroup.get('complemento').value;
        let bairro = this.formGroup.get('bairro').value;
        let localidade = this.formGroup.get('localidade').value;
        let uf = this.formGroup.get('uf').value;
        this.clienteNewDto.name = name;
        this.clienteNewDto.cpf = cpf;
        this.clienteNewDto.dateNasc = dateNasc;
        this.clienteNewDto.phone = phone;
        this.clienteNewDto.cep = cep;
        this.clienteNewDto.logradouro = logradouro;
        this.clienteNewDto.numero = numero;
        this.clienteNewDto.complemento = complemento;
        this.clienteNewDto.bairro = bairro;
        this.clienteNewDto.localidade = localidade;
        this.clienteNewDto.uf = uf;
        this.clienteService.insert(this.clienteNewDto)
            .subscribe(response => {
            this.emailNewAccount();
        }, catchError => {
            this.button = false;
            this.sniper = null;
            this.router.navigate(['/sigup']);
        });
    }
    emailNewAccount() {
        this.registroService.emailNewAccount(this.email)
            .subscribe(response => {
            this.successUpdate = "ok";
        }, catchError => {
            this.button = false;
            this.sniper = null;
            this.successUpdate = null;
            console.log(catchError);
        });
    }
    errorCep() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'registration-success',
                subHeader: 'Endereço não encontrado !',
                message: 'Tente digita manualmente. ',
                buttons: [
                    {
                        text: 'Continuar ',
                        cssClass: 'secondary',
                        handler: () => {
                            this.router.navigate(['/sigup']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
SigupPage.ctorParameters = () => [
    { type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_2__.ClienteService },
    { type: _services_registro_service__WEBPACK_IMPORTED_MODULE_3__.RegistroService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
SigupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-sigup',
        template: _raw_loader_sigup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sigup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SigupPage);



/***/ }),

/***/ 11381:
/*!*********************************************!*\
  !*** ./src/app/pages/sigup/sigup.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  --ion-background-color: rgb(243, 156, 231);\n}\n\n.ion-padding-top {\n  padding-top: 50 px;\n}\n\n.ion-text-center {\n  text-align: center;\n}\n\n.ion-padding-top {\n  padding-top: 50 px;\n}\n\n.ion-padding {\n  padding: 30px;\n}\n\n.ion-text-uppercase {\n  text-transform: uppercase;\n}\n\nion-header {\n  --ion-background-color: rgb(231, 163, 203);\n}\n\nh5 {\n  font-family: \"sans-serif\";\n  font-size: medium;\n  font-weight: bolder;\n  font-style: italic;\n  color: white;\n  text-align: left;\n}\n\nh4 {\n  font-family: \"sans-serif\";\n  text-align: center;\n  font-size: small;\n}\n\np {\n  font-family: \"sans-serif\";\n  font-style: italic;\n  text-align: center;\n  color: #e5ff00;\n  font-size: small;\n}\n\nion-buttons {\n  color: white;\n}\n\nion-input {\n  font-family: \"sans-serif\";\n  font-style: italic;\n  text-align: center;\n  color: white;\n  font-size: small;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ3VwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDQSxrQkFBQTtBQUNBOztBQUVBO0VBQ0Esa0JBQUE7QUFDQTs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDQSxhQUFBO0FBQ0E7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0EsMENBQUE7QUFDQTs7QUFFQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0E7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0EsWUFBQTtBQUNBOztBQUVBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0E7O0FBRUE7RUFDQSxjQUFBO0FBQ0EiLCJmaWxlIjoic2lndXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxNTYsIDIzMSk7XG59IFxuXG4uaW9uLXBhZGRpbmctdG9wIHtcbnBhZGRpbmctdG9wOiA1MCBweDsgXG59XG5cbi5pb24tdGV4dC1jZW50ZXIge1xudGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi5pb24tcGFkZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogNTAgcHg7IFxufVxuXG4uaW9uLXBhZGRpbmdcdHtcbnBhZGRpbmc6IDMwcHg7IFxufVxuXG4uaW9uLXRleHQtdXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaW9uLWhlYWRlciB7XG4tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAxNjMsIDIwMyk7XG59XG5cbmg1IHtcbmZvbnQtZmFtaWx5OiBcInNhbnMtc2VyaWZcIjtcbmZvbnQtc2l6ZTogbWVkaXVtO1xuZm9udC13ZWlnaHQ6IGJvbGRlcjtcbmZvbnQtc3R5bGU6IGl0YWxpYztcbmNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG50ZXh0LWFsaWduOiBsZWZ0OyBcbn1cblxuaDQge1xuICBmb250LWZhbWlseTogXCJzYW5zLXNlcmlmXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBcInNhbnMtc2VyaWZcIjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoMjI5LCAyNTUsIDApO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5pb24tYnV0dG9ucyB7XG5jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG5pb24taW5wdXQge1xuZm9udC1mYW1pbHk6IFwic2Fucy1zZXJpZlwiO1xuZm9udC1zdHlsZTogaXRhbGljO1xudGV4dC1hbGlnbjogY2VudGVyO1xuY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbmZvbnQtc2l6ZTogc21hbGw7XG59XG5cbmlvbi1idXR0b24ge1xuY29sb3I6IHJnYigyNDAsIDE5MSwgMjMzKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 81198:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sigup/sigup.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!successUpdate\" >\n  <ion-toolbar>\n    <ion-title><h5>Finalize seu cadastro</h5></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header *ngIf=\"successUpdate\" >\n  <ion-toolbar>\n    <ion-title><h5>Tudo certo</h5></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"successUpdate\" class=\"content\" [fullscreen]=\"true\">\n  <div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <h4> Tudo certo, seu registro foi finalizado. </h4>\n    <br>\n    <br>\n    <br>\n    <ion-button [routerLink]=\"['/home']\" color=\"light\" expand=\"block\"> Continuar </ion-button>\n  </div>\n</ion-content >\n\n<ion-content *ngIf=\"!successUpdate\" class=\"content\" [fullscreen]=\"true\">\n  <div id=\"container\">\n    <br>\n    <h5 class=\"ion-text-center\" >Passo 3 de 3</h5>\n\n    <ion-item lines=\"full\">\n      <ion-label class=\"ion-text-center\" position=\"floating\" >Email</ion-label>\n      <br>\n      <ion-input type=\"text\" disabled> {{registro?.email}} </ion-input>\n    </ion-item>\n\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"submitForm()\">\n\n    <ion-item lines=\"full\">\n      <ion-label class=\"ion-text-center\" position=\"floating\">Nome completo</ion-label>\n      <ion-input formControlName=\"name\" class=\"ion-text-uppercase\" inputmode=\"text\" maxlength=\"50\" type=\"text\" required></ion-input>\n    </ion-item>\n    <p *ngIf=\"formGroup.controls.name.dirty && formGroup.controls.name.errors\" margin-left>Obrigatório. </p>\n    \n    <ion-item lines=\"full\">\n      <ion-label class=\"ion-text-center\" position=\"floating\">CPF</ion-label>\n      <ion-input formControlName=\"cpf\" placeholder=\"ex:11122233344\" inputmode=\"tel\" type=\"numeric\" maxlength=\"11\" required> </ion-input>\n    </ion-item>\n    <p *ngIf=\"formGroup.controls.cpf.dirty && formGroup.controls.cpf.errors\" margin-left>Informe um CPF valido. </p>\n\n    <ion-item lines=\"full\">\n      <ion-label class=\"ion-text-center\" position=\"floating\">Data de Nascimento</ion-label>\n      <ion-input formControlName=\"dateNasc\" placeholder=\"ex:01022022\" inputmode=\"tel\" type=\"numeric\" maxlength=\"8\" required></ion-input>\n    </ion-item>\n    <p *ngIf=\"formGroup.controls.dateNasc.dirty && formGroup.controls.dateNasc.errors\" margin-left>Use somente números. </p>\n\n    <ion-item lines=\"full\">\n      <ion-label class=\"ion-text-center\" position=\"floating\">Celular</ion-label>\n      <ion-input formControlName=\"phone\" placeholder=\"ex:91988776655\" inputmode=\"tel\" type=\"numeric\" maxlength=\"11\" required></ion-input>\n    </ion-item>\n    <p *ngIf=\"formGroup.controls.phone.dirty && formGroup.controls.phone.errors\" margin-left>Use somente números. </p>\n\n    <ion-item lines=\"full\">\n      <ion-label class=\"ion-text-center\" position=\"floating\">Cep</ion-label>\n      <ion-input  formControlName=\"cep\" inputmode=\"tel\" type=\"numeric\" maxlength=\"8\" required ></ion-input>\n    </ion-item>\n    <ion-button *ngIf=\"formGroup.controls.cep.valid && formGroup.controls.cep.valid\" (click)=\"getEndereco()\" color=\"light\"expand=\"block\"> pesquisar ou digite manualmente</ion-button>\n    <p *ngIf=\"formGroup.controls.cep.dirty && formGroup.controls.cep.errors\" margin-left>Use somente números. </p>\n\n    <ion-item lines=\"full\">\n      <ion-label class=\"ion-text-center\" position=\"floating\">Endereço</ion-label>\n      <ion-input formControlName=\"logradouro\" class=\"ion-text-uppercase\" inputmode=\"text\" type=\"text\" maxlength=\"50\" value='{{endereco?.logradouro}}' required> </ion-input>\n    </ion-item>\n    <p *ngIf=\"formGroup.controls.logradouro.dirty && formGroup.controls.logradouro.errors\" margin-left>Obrigatório. </p>\n\n    <ion-item lines=\"full\">\n      <ion-label class=\"ion-text-center\" position=\"floating\">Numero</ion-label>\n      <ion-input formControlName=\"numero\" inputmode=\"tel\" type=\"numeric\" maxlength=\"6\" required></ion-input>\n    </ion-item>\n    <p *ngIf=\"formGroup.controls.numero.dirty && formGroup.controls.numero.errors\" margin-left>Obrigatório. </p>\n\n    <ion-item lines=\"full\">\n      <ion-label class=\"ion-text-center\" position=\"floating\">Complemento</ion-label>\n      <ion-input formControlName=\"complemento\" class=\"ion-text-uppercase\" inputmode=\"text\" type=\"text\" maxlength=\"50\" value='{{endereco?.complemento}}' required> </ion-input>\n    </ion-item>\n    <p *ngIf=\"formGroup.controls.complemento.dirty && formGroup.controls.complemento.errors\" margin-left>Obrigatório. </p>\n\n    <ion-item lines=\"full\">\n      <ion-label class=\"ion-text-center\" position=\"floating\">Bairro</ion-label>\n      <ion-input formControlName=\"bairro\" class=\"ion-text-uppercase\" inputmode=\"text\" type=\"text\" maxlength=\"50\" value='{{endereco?.bairro}}' required> </ion-input>\n    </ion-item>\n    <p *ngIf=\"formGroup.controls.bairro.dirty && formGroup.controls.bairro.errors\" margin-left>Obrigatório. </p>\n\n    <ion-item lines=\"full\">\n      <ion-label class=\"ion-text-center\" position=\"floating\">Cidade</ion-label>\n      <ion-input formControlName=\"localidade\" class=\"ion-text-uppercase\" inputmode=\"text\" type=\"text\" maxlength=\"50\" value='{{endereco?.localidade}}' required> </ion-input>\n    </ion-item>\n    <p *ngIf=\"formGroup.controls.localidade.dirty && formGroup.controls.localidade.errors\" margin-left>Obrigatório. </p>\n\n    <ion-item lines=\"full\">\n      <ion-label class=\"ion-text-center\" position=\"floating\">Estado</ion-label>\n      <ion-input formControlName=\"uf\" class=\"ion-text-uppercase\" inputmode=\"text\" type=\"text\" maxlength=\"2\" value='{{endereco?.uf}}' required> </ion-input>\n    </ion-item>\n    <p *ngIf=\"formGroup.controls.uf.dirty && formGroup.controls.uf.errors\" margin-left>Obrigatório. </p>\n\n    <ion-row>\n      <ion-col>\n        <ion-button disabled = \"{{button}}\" *ngIf=\"formGroup.valid\" type=\"submit\" color=\"light\" expand=\"block\">\n          <ion-spinner *ngIf=\"sniper\" color=\"secondary\" > </ion-spinner>\n            <h4 *ngIf=\"sniper\"> aguarde ... </h4>\n            <h4 *ngIf=\"!sniper\"> Cadastrar </h4>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-row>\n    <ion-col>\n      <ion-button disabled = \"{{button}}\" [routerLink]=\"['/home']\" color=\"light\" expand=\"block\">Cancelar</ion-button>\n    </ion-col>\n  </ion-row>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sigup_sigup_module_ts-es2015.js.map