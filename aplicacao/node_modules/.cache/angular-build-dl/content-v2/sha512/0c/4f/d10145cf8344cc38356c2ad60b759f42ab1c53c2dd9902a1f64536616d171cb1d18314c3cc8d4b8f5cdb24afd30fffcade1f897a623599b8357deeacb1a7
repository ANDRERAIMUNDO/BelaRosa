(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 41474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": function() { return /* binding */ ProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 64629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    },
    {
        path: 'profile-photo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile-photo_profile-photo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../profile-photo/profile-photo.module */ 93747)).then(m => m.ProfilePhotoPageModule)
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 88558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": function() { return /* binding */ ProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 41474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 64629);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 59885);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_2__.ExploreContainerComponentModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_2__.ExploreContainerComponentModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 64629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 79291);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 2777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/config/config */ 64573);
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cliente.service */ 70932);
/* harmony import */ var _services_endereco_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/endereco.service */ 61478);
/* harmony import */ var _services_pedido_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/pedido.service */ 93778);
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/registro.service */ 60023);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/storage.service */ 71188);














let ProfilePage = class ProfilePage {
    constructor(storageService, registroService, clienteService, enderecoService, pedidoService, loadingController, alertController, formBuilder, route, authService, router) {
        this.storageService = storageService;
        this.registroService = registroService;
        this.clienteService = clienteService;
        this.enderecoService = enderecoService;
        this.pedidoService = pedidoService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.animation = true;
        this.id = "";
        this.senha = "password";
        this.registroUpdateEmailDTO = {
            email: ""
        };
        this.registroUpdatePassowordDTO = {
            password: ""
        };
        this.phone = "";
        this.button = false;
    }
    ionViewWillEnter() {
        this.successUpdate = null;
        this.button = false;
        this.sniper = null;
        this.getMyData();
        this.formUpdateEmail();
        this.formUpdatePassword();
        this.formUpdateCliente();
        this.formUpdateAddress();
    }
    getMyData() {
        let localUser = this.storageService.getLocalUser();
        if (localUser && localUser.email) {
            this.registroService.findByEmail(localUser.email)
                .subscribe(response => {
                this.registro = response;
                this.cliente = response;
                this.getImageIfExists();
                this.getEndereco();
                this.sliceTypeCliente();
            }, catchError => {
                if (catchError.status == 403) {
                    this.router.navigate(['/home']);
                }
            });
        }
    }
    sliceTypeCliente() {
        this.email = this.registro.email;
        this.phoneSlice = this.registro.cliente.phone;
        this.area = this.phoneSlice.slice(0, 2);
        this.num = this.phoneSlice.slice(2, 11);
        this.DateSlice = this.registro.cliente.dateNasc;
        this.dia = this.DateSlice.slice(0, 2);
        this.mes = this.DateSlice.slice(2, 4);
        this.ano = this.DateSlice.slice(4, 8);
        this.CPFSlice = this.registro.cliente.cpf;
        this.firstDigits = this.CPFSlice.slice(0, 3);
        this.secundDigits = this.CPFSlice.slice(3, 6);
        this.thirdDigist = this.CPFSlice.slice(6, 9);
        this.lastDigits = this.CPFSlice.slice(9, 11);
    }
    getImageIfExists() {
        this.registroService.getImageFromBucket(this.registro.id)
            .subscribe(response => {
            this.registro.imageUrl = `${src_config_config__WEBPACK_IMPORTED_MODULE_3__.API_CONFIG.bukectBaseUrl}/profiles/cp${this.registro.id}.png`;
        }, catchError => { console.log(catchError); });
    }
    getEndereco() {
        this.enderecoService.findById(this.registro.id)
            .subscribe(response => {
            this.endereco = response;
        }, catchError => {
            if (catchError.status == 403) {
                this.router.navigate(['/address']);
            }
        });
    }
    formUpdateEmail() {
        this.id = this.route.snapshot.params['id'];
        this.formGroupUpdateEmail = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email],
            emailConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email]
        });
    }
    formUpdatePassword() {
        this.formGroupUpdatePassword = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5)],
            passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(5)]
        });
    }
    formUpdateCliente() {
        this.id = this.route.snapshot.params['id'];
        this.formGroupUpdateCliente = this.formBuilder.group({
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(11)]]
        });
    }
    formUpdateAddress() {
        this.id = this.route.snapshot.params['id'];
        this.formGroupUpdateAddress = this.formBuilder.group({
            cep: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            logradouro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            numero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            complemento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            bairro: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            localidade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            uf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        });
    }
    onChangeEmail() {
        let email;
        this.newEmail = this.formGroupUpdateEmail.get('email').value;
        this.emailConfirm = this.formGroupUpdateEmail.get('emailConfirm').value;
        if (this.newEmail == this.emailConfirm) {
            email = this.newEmail;
            this.registroUpdateEmailDTO.email = email;
            this.emailMsg = null;
            this.validEmailMsg = null;
        }
        else {
            this.emailMsg = "ok";
        }
    }
    updateEmail(registroform) {
        this.button = true;
        this.sniper = "ok";
        this.registroService.updateEmail(this.registro.id, registroform)
            .subscribe(response => {
            console.log(response);
            this.authService.logout();
            this.successUpdate = "ok";
        }, catchError => {
            this.button = false;
            this.sniper = null;
            this.successUpdate = null;
            console.log(catchError);
            this.updateRegistroValue = null;
            this.presentErrorUpdate();
        });
    }
    onChangePassword() {
        let password;
        this.newPassword = this.formGroupUpdatePassword.get('password').value;
        this.passwordConfirm = this.formGroupUpdatePassword.get('passwordConfirm').value;
        if (this.newPassword == this.passwordConfirm) {
            password = this.newPassword;
            this.registroUpdatePassowordDTO.password = password;
            this.passwordMsg = null;
            this.validPasswordMsg = null;
        }
        else {
            this.passwordMsg = "ok";
        }
    }
    updatePassword(registroform) {
        this.button = true;
        this.sniper = "ok";
        this.registroService.updatePassword(this.registro.id, registroform)
            .subscribe(response => {
            console.log(response);
            this.emailUpdateAccount();
            this.authService.logout();
        }, catchError => {
            this.button = false;
            this.sniper = null;
            this.successUpdate = null;
            console.log(catchError);
            this.updateRegistroValue = null;
            this.presentErrorUpdate();
        });
    }
    updateCliente(clienteform) {
        this.button = true;
        this.sniper = "ok";
        this.clienteService.update(this.cliente.id, clienteform)
            .subscribe(response => {
            console.log(response);
            this.emailUpdateAccount();
        }, catchError => {
            this.button = false;
            this.sniper = null;
            this.successUpdate = null;
            console.log(catchError);
            this.presentErrorUpdate();
        });
    }
    updateAddress(addressform) {
        this.button = true;
        this.sniper = "ok";
        this.enderecoService.update(this.registro.id, addressform)
            .subscribe(response => {
            console.log(response);
            this.emailUpdateAccount();
        }, catchError => {
            this.button = false;
            this.sniper = null;
            this.successUpdate = null;
            console.log(catchError);
            this.presentErrorUpdate();
        });
    }
    updateOnRegistro() {
        this.updateRegistroValue = true;
        this.button = false;
        this.validEmailMsg = "ok";
        this.validPasswordMsg = "ok";
    }
    updateOnCliente() {
        this.updateClienteValue = true;
        this.button = false;
    }
    updateOnAddress() {
        this.updateAddressValue = true;
        this.button = false;
    }
    getViaCep() {
        let cep = this.formGroupUpdateAddress.get('cep').value;
        this.clienteService.viaCep(cep)
            .subscribe(response => {
            this.endereco = response;
        }, catchError => {
            this.presentEnderecoConfirm();
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
    emailUpdateAccount() {
        let email = this.registro.email;
        console.log(this.registro.email);
        this.registroService.emailUpdateAccount(email)
            .subscribe(response => {
            this.successUpdate = "ok";
        }, catchError => {
            this.button = false;
            this.sniper = null;
            this.successUpdate = null;
            console.log(catchError);
        });
    }
    presentEnderecoConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atenção!',
                subHeader: 'Não encontramos o cep que voce colocou',
                message: 'Caso erro continue insira os dados manualmente.',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentErrorUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atenção!',
                subHeader: 'Erro ao tenta atualizar',
                message: 'Caso erro continue, reinicei o app.',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    reload() {
        this.sniper = null;
        this.updateRegistroValue = null;
        this.updateClienteValue = null;
        this.updateAddressValue = null;
    }
    sucess() {
        this.successUpdate = null;
        this.router.navigate(['/home']);
        //this.button = false;
        //this.sniper = null;
        //this.successUpdate = null;
    }
    ShowPedidos() {
        this.router.navigate(['/dashboard/pedidos']);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__.StorageService },
    { type: _services_registro_service__WEBPACK_IMPORTED_MODULE_7__.RegistroService },
    { type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_4__.ClienteService },
    { type: _services_endereco_service__WEBPACK_IMPORTED_MODULE_5__.EnderecoService },
    { type: _services_pedido_service__WEBPACK_IMPORTED_MODULE_6__.PedidoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 2777:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container-button {\n  text-align: left;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #f39ce7;\n}\n\n#imagem-visao {\n  width: 20px;\n  height: 20px;\n}\n\nion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: length;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\ndiv {\n  text-align: center;\n}\n\n#container ion-card {\n  width: auto;\n  height: auto;\n}\n\nion-card-title {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  color: #080808;\n  text-align: center;\n  width: 75;\n  height: 75;\n}\n\nion-avatar {\n  left: auto;\n  right: auto;\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n\nion-card-title {\n  font-family: \"Lucida Sans Regular\";\n  font-size: smaller;\n  color: #080808;\n  text-align: center;\n}\n\nion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: center;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\nion-content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nh6 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  color: #0f0f0f;\n}\n\nh5 {\n  color: #f063db;\n}\n\nion-icon {\n  width: 20px;\n  height: 20px;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n\n.ion-text-uppercase {\n  text-transform: uppercase;\n}\n\nion-input {\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdFO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0U7RUFFRSxVQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlFO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFETjs7QUFJRTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJRTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQURKOztBQUlFO0VBQ0UsMENBQUE7QUFESjs7QUFJRTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO09BQUEsdUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBR0U7RUFDRSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtBQUFKOztBQUdFO0VBQ0UseUJBQUE7QUFBSjs7QUFHRztFQUNDLGdCQUFBO0FBQUoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cblxuICAjY29udGFpbmVyLWJ1dHRvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGNvbG9yOiByZ2IoMjQzLCAxNTYsIDIzMSk7XG4gIH1cbiAgXG4gICNpbWFnZW0tdmlzYW8ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxuXG4gIGlvbi1oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgY29sb3I6IHJnYig4LCA4LCA4KTtcbiAgICB0ZXh0LWFsaWduOiBsZW5ndGg7IFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE5MSwgMjMzKTtcbiAgfVxuICBcbiAgZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gICNjb250YWluZXIgaW9uLWNhcmQgIHtcbiAgICB3aWR0aDogYXV0bzsgXG4gICAgaGVpZ2h0OiBhdXRvO1xuICBcbiAgfVxuICBcbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICB3aWR0aDogNzU7IFxuICAgIGhlaWdodDogNzU7XG4gICAgfVxuICBcbiAgaW9uLWF2YXRhciB7XG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbiAgfVxuXG4gIGlvbi1pbWcgeyBcbiAgICAgIHdpZHRoOiBhdXRvOyBcbiAgICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgY29sb3I6IHJnYig4LCA4LCA4KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICB9XG4gIFxuICBpb24taGVhZGVyIHtcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxOTEsIDIzMyk7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IHsgIFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIzOSwgMjUwKTtcbiAgfSBcbiAgXG4gIGg2IHtcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7IFxuICAgIGNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XG4gIH1cbiAgaDUge1xuICAgIGNvbG9yOiAgcmdiKDI0MCwgOTksIDIxOSk7XG4gIH1cbiAgXG4gIGlvbi1pY29uIHtcbiAgICB3aWR0aDogMjBweDsgXG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICBpb24tYnV0dG9uIHtcbiAgICBjb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xuICB9XG5cbiAgLmlvbi10ZXh0LXVwcGVyY2FzZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gICBpb24taW5wdXQge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH0iXX0= */");

/***/ }),

/***/ 79291:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-item>\n      <ion-avatar slot=\"end\">\n        <img [src]=\"registro?.imageUrl || '../../assets/person.svg'\">\n      </ion-avatar>\n      <ion-label>\n        <h3>{{registro?.cliente?.name}}</h3>\n        <p>{{dia}}/{{mes}}/{{ano}}</p>\n        <p>{{registro?.email}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"successUpdate\" id=\"container\" padding>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <p> Suas informações foram atualizadas. </p>\n  <p> Faça login novamente</p>\n  <ion-button color=\"light\" expand=\"block\" (click)=\"sucess()\"> Continuar </ion-button>\n  <app-explore-container> </app-explore-container>\n</ion-content>\n\n<ion-content *ngIf=\"!successUpdate\" padding>\n\n    <div *ngIf=\"updateRegistroValue == boolean  && updateClienteValue==boolean && updateAddressValue == boolean\">\n      <ion-item lines=\"none\">\n        <ion-label>\n          <h3>Nome: {{registro?.cliente?.name}}</h3>\n          <h3>Contato: ({{area}}) {{num}}</h3>\n          <p>Data de Nascimento: {{dia}}/{{mes}}/{{ano}}</p>\n          <p>CPF: {{firstDigits}}.{{secundDigits}}.{{thirdDigist}}-{{lastDigits}}</p>\n          <p>Email: {{registro?.email}}</p>\n          <ion-button color=\"light\" (click)=\"updateOnCliente()\">Informações pessoais</ion-button>\n        </ion-label>\n        <ion-thumbnail>\n        <img [src]=\"registro?.imageUrl || '../../assets/person.svg'\">\n        </ion-thumbnail>\n      </ion-item>\n    <ion-button color=\"light\" (click)=\"updateOnRegistro()\">Atualização segurança</ion-button>\n    </div>\n     <!--update Registro-->\n    <div *ngIf=\"updateRegistroValue == true\">\n      <!--atualizacao de email-->\n      <form [formGroup]=\"formGroupUpdateEmail\" (ngSubmit)=\"updateEmail(formGroupUpdateEmail.value)\">\n        <ion-list>\n        <!--email-->\n            <ion-label>\n              <h5>Novo Email</h5>\n            </ion-label>\n            <ion-item>\n              <ion-input formControlName=\"email\" class=\"email\" placeholder=\"{{email}}\" type=\"email\" required></ion-input>\n            </ion-item>\n            <p *ngIf=\"formGroupUpdateEmail.controls.email.dirty && formGroupUpdateEmail.controls.email.errors\" margin-left>Email invalido. </p>\n            <p *ngIf=\"emailMsg\">Emails estão diferentes. </p>\n          <!--emailConfirm-->\n            <ion-label>\n              <h5>Confirmar novo Email</h5>\n            </ion-label>\n            <ion-item>\n              <ion-input formControlName=\"emailConfirm\" class=\"email\" placeholder=\"{{email}}\" type=\"email\" (ionChange)=\"onChangeEmail($event)\" required></ion-input>\n            </ion-item>\n            <p *ngIf=\"formGroupUpdateEmail.controls.emailConfirm.dirty && formGroupUpdateEmail.controls.emailConfirm.errors\" margin-left>Email invalido. </p>\n            <p *ngIf=\"emailMsg\">Emails estão diferentes. </p>\n          <ion-button disabled = \"{{button}}\" *ngIf=\"!validEmailMsg\" type=\"submit\" color=\"light\">\n            <ion-spinner *ngIf=\"sniper\" color=\"secondary\" > </ion-spinner>\n              <p *ngIf=\"sniper\"> Atualizando ... </p>\n              <p *ngIf=\"!sniper\"> Alterar informações </p>\n          </ion-button>\n        </ion-list>\n      </form>\n       <!--atualizacao de senha-->\n      <form [formGroup]=\"formGroupUpdatePassword\" (ngSubmit)=\"updatePassword(formGroupUpdatePassword.value)\">\n        <ion-list>\n            <!--password-->\n            <ion-label>\n              <h5>Nova senha</h5>\n            </ion-label>\n           <ion-item>\n             <ion-input formControlName=\"password\" placeholder=\"*************\" type={{senha}} required ></ion-input>\n             <ion-button id=\"container-button\" color=\"light\" fill=\"clear\" slot=\"end\" (click)=\"showPassword()\">\n               <img id=\"imagem-visao\" src=\"../../assets/visao.png\"/>\n            </ion-button>\n          </ion-item>\n             <p *ngIf=\"formGroupUpdatePassword.controls.password.dirty && formGroupUpdatePassword.controls.password.errors\" margin-left>Senha não atende os requisitos minimos.</p>\n             <p *ngIf=\"passwordMsg\">Senhas estão diferentes. </p>\n          <!--password Confirm-->\n            <ion-label>\n             <h5>Repetir nova senha</h5>\n            </ion-label>\n            <ion-item>\n               <ion-input formControlName=\"passwordConfirm\" placeholder=\"*************\" type={{senha}} (ionChange)=\"onChangePassword($event)\" required ></ion-input>\n               <ion-button id=\"container-button\" color=\"light\" fill=\"clear\" slot=\"end\" (click)=\"showPassword()\">\n                <img id=\"imagem-visao\" src=\"../../assets/visao.png\"/>\n               </ion-button>\n            </ion-item>\n              <p *ngIf=\"formGroupUpdatePassword.controls.passwordConfirm.dirty && formGroupUpdatePassword.controls.passwordConfirm.errors\" margin-left>Senha não atende os requisitos minimos.</p>\n              <p *ngIf=\"passwordMsg\">Senhas estão diferentes. </p>\n            <ion-button disabled = \"{{button}}\" *ngIf=\"!validPasswordMsg\" type=\"submit\" color=\"light\">\n              <ion-spinner *ngIf=\"sniper\" color=\"secondary\" > </ion-spinner>\n              <p *ngIf=\"sniper\"> Atualizando ... </p>\n              <p *ngIf=\"!sniper\"> Alterar informações </p>\n            </ion-button>\n         </ion-list>\n      </form>\n        <ion-button [disabled]=\"formGroupUpdateEmail.valid ||formGroupUpdatePassword.valid\" (click)=\"reload()\"type=\"submit\" color=\"light\">Cancelar</ion-button>\n     </div>\n     <!--updateImageClient-->\n    <div *ngIf=\"updateRegistroValue == boolean  && updateClienteValue==boolean && updateAddressValue == boolean\">\n      <ion-label>\n        <p>Carregar imagem perfil</p>\n        <ion-button [routerLink]=\"['./profile-photo']\" color=\"light\">Enviar imagem</ion-button>\n      </ion-label>\n      <ion-item>\n        <ion-label>\n          <h3>Endereço: {{endereco?.logradouro}}, {{endereco?.numero}}</h3>\n          <h3>{{endereco?.complemento}} {{endereco?.bairro}} CEP {{endereco?.cep}}</h3>\n          <p>Cidade: {{endereco?.localidade}}, {{endereco?.uf}}</p>\n          <ion-button color=\"light\" (click)=\"updateOnAddress()\">Atualizar endereco</ion-button>\n        </ion-label>\n      </ion-item>\n    </div>\n    <!--updateCliente-->\n    <div *ngIf=\"updateClienteValue == true\">\n      <form [formGroup]=\"formGroupUpdateCliente\" (ngSubmit)=\"updateCliente(formGroupUpdateCliente.value)\">\n        <ion-list>\n        <!--Nome-->\n        <ion-label>\n          <h5>Cliente</h5>\n        </ion-label>\n        <ion-item>\n          <ion-input type=\"text\" class=\"ion-text-uppercase\" disabled>{{registro?.cliente?.name}}</ion-input>\n        </ion-item>\n        <!--cpf-->\n        <ion-label>\n          <h5>CPF</h5>\n        </ion-label>\n        <ion-item>\n          <ion-input type=\"text\" disabled>{{firstDigits}}.{{secundDigits}}.{{thirdDigist}}-{{lastDigits}}</ion-input>\n        </ion-item>\n        <!--data de nascimento-->\n        <ion-label>\n          <h5>Data de Nascimento</h5>\n        </ion-label>\n        <ion-item>\n          <ion-input disabled>{{dia}}/{{mes}}/{{ano}}</ion-input>\n        </ion-item>\n        <!--telefone-->\n        <ion-label>\n          <h5>Celular</h5>\n        </ion-label>\n        <ion-item>\n          <ion-input formControlName =\"phone\" placeholder=\"({{area}}) {{num}}\" maxlength=\"11\" inputmode=\"numeric\" type=\"tel\" clear-input required></ion-input>\n        </ion-item>\n        <p *ngIf=\"formGroupUpdateCliente.controls.phone.dirty && formGroupUpdateCliente.controls.phone.errors\" margin-left>Digite o número do celular.</p>\n      </ion-list>\n      <ion-button disabled = \"{{button}}\" [disabled]=\"formGroupUpdateCliente.invalid\" type=\"submit\" color=\"light\">\n        <ion-spinner *ngIf=\"sniper\" color=\"secondary\" duration = 3 > </ion-spinner>\n        <p *ngIf=\"sniper\"> Atualizando ... </p>\n        <p *ngIf=\"!sniper\"> Alterar informações </p>\n      </ion-button>\n      </form>\n      <ion-button disabled = \"{{button}}\" [disabled]=\"formGroupUpdateCliente.valid\" type=\"submit\" color=\"light\" (click)=\"reload()\">Cancelar</ion-button>\n     </div>\n      <!--update Addrress-->\n    <div *ngIf=\"updateAddressValue == true\">\n        <form [formGroup]=\"formGroupUpdateAddress\" (ngSubmit)=\"updateAddress(formGroupUpdateAddress.value)\">\n        <ion-list>\n          <ion-label>\n            <h5>Cep</h5>\n          </ion-label>\n        <ion-item>\n          <ion-input formControlName=\"cep\" placeholder=\"{{endereco?.cep}}\" type=\"number\" required ></ion-input>\n        </ion-item>\n        <p>Digite ou insira seu endereço nanualmente <ion-button color=\"light\" (click)=\"getViaCep()\">buscar</ion-button></p>\n        <p *ngIf=\"formGroupUpdateAddress.controls.cep.dirty && formGroupUpdateAddress.controls.cep.errors\" margin-left>Digite um cep valido. </p>\n        <!--logradouro-->\n        <ion-label>\n        <h5>Endereço</h5>\n        </ion-label>\n        <ion-item>\n          <ion-input formControlName=\"logradouro\"  placeholder=\"{{endereco?.logradouro}}\" type=\"text\" value='{{endereco?.logradouro}}' required> </ion-input>\n        </ion-item>\n        <p *ngIf=\"formGroupUpdateAddress.controls.logradouro.dirty && formGroupUpdateAddress.controls.logradouro.errors\" margin-left>Obrigatório. </p>\n        <!--numero-->\n        <ion-label>\n          <h5>Número</h5>\n        </ion-label>\n        <ion-item>\n          <ion-input formControlName=\"numero\"  placeholder=\"{{endereco?.numero}}\" type=\"text\" required></ion-input>\n        </ion-item>\n        <p *ngIf=\"formGroupUpdateAddress.controls.numero.dirty && formGroupUpdateAddress.controls.numero.errors\" margin-left>Obrigatório. </p>\n        <!--complemento-->\n        <ion-label>\n          <h5>Complemento</h5>\n        </ion-label>\n        <ion-item>\n          <ion-input formControlName=\"complemento\" placeholder=\"{{endereco?.complemento}}\" type=\"text\" value='{{endereco?.complemento}}' required> </ion-input>\n        </ion-item>\n        <p *ngIf=\"formGroupUpdateAddress.controls.complemento.dirty && formGroupUpdateAddress.controls.complemento.errors\" margin-left>Obrigatório. </p>\n        <!--bairro-->\n        <ion-label>\n          <h5>Bairro</h5>\n        </ion-label>\n        <ion-item>\n          <ion-input formControlName=\"bairro\"  placeholder=\"{{endereco?.bairro}}\" type=\"text\" value='{{endereco?.bairro}}' required> </ion-input>\n        </ion-item>\n        <p *ngIf=\"formGroupUpdateAddress.controls.bairro.dirty && formGroupUpdateAddress.controls.bairro.errors\" margin-left>Obrigatório. </p>\n         <!--localidade-->\n         <ion-label>\n          <h5>Cidade</h5>\n        </ion-label>\n        <ion-item>\n          <ion-input formControlName=\"localidade\"  placeholder=\"{{endereco?.localidade}}\" type=\"text\" value='{{endereco?.localidade}}' required> </ion-input>\n        </ion-item>\n        <p *ngIf=\"formGroupUpdateAddress.controls.localidade.dirty && formGroupUpdateAddress.controls.localidade.errors\" margin-left>Obrigatório. </p>\n        <!--uf-->\n        <ion-label>\n          <h5>Estado</h5>\n        </ion-label>\n        <ion-item>\n          <ion-input formControlName=\"uf\"  placeholder=\"{{endereco?.uf}}\" type=\"text\" value='{{endereco?.uf}}' required> </ion-input>\n        </ion-item>\n        <p *ngIf=\"formGroupUpdateAddress.controls.uf.dirty && formGroupUpdateAddress.controls.uf.errors\" margin-left>Obrigatório. </p>\n        <ion-button disabled = \"{{button}}\" [disabled]=\"formGroupUpdateAddress.invalid\" type=\"submit\" color=\"light\">\n          <ion-spinner *ngIf=\"sniper\" color=\"secondary\" > </ion-spinner>\n          <p *ngIf=\"sniper\"> Atualizando ... </p>\n          <p *ngIf=\"!sniper\"> Alterar informações </p>\n        </ion-button>\n      </ion-list>\n      </form>\n      <ion-button type=\"submit\" color=\"light\" (click)=\"reload()\">Cancelar</ion-button>\n    </div>\n  \n    <div *ngIf=\"updateRegistroValue == boolean  && updateClienteValue==boolean && updateAddressValue == boolean\">\n      <h4 slot=\"start\">Meus pedidos</h4>\n      <ion-button (click)=\"ShowPedidos()\" color=\"light\">Lista completa</ion-button>\n    </div>\n  \n<app-explore-container> </app-explore-container>\n</ion-content>\n\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts-es2015.js.map