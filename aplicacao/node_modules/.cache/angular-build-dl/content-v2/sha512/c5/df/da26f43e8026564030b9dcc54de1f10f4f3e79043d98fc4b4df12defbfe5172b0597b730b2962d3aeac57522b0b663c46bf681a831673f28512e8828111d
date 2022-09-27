(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_order-confirmation-page_order-confirmation-page_module_ts"],{

/***/ 52937:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/order-confirmation-page/order-confirmation-page-routing.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderConfirmationPagePageRoutingModule": function() { return /* binding */ OrderConfirmationPagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _order_confirmation_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-confirmation-page.page */ 75311);




const routes = [
    {
        path: '',
        component: _order_confirmation_page_page__WEBPACK_IMPORTED_MODULE_0__.OrderConfirmationPagePage
    }
];
let OrderConfirmationPagePageRoutingModule = class OrderConfirmationPagePageRoutingModule {
};
OrderConfirmationPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderConfirmationPagePageRoutingModule);



/***/ }),

/***/ 60268:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/order-confirmation-page/order-confirmation-page.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderConfirmationPagePageModule": function() { return /* binding */ OrderConfirmationPagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _order_confirmation_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-confirmation-page-routing.module */ 52937);
/* harmony import */ var _order_confirmation_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-confirmation-page.page */ 75311);







let OrderConfirmationPagePageModule = class OrderConfirmationPagePageModule {
};
OrderConfirmationPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_confirmation_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderConfirmationPagePageRoutingModule
        ],
        declarations: [_order_confirmation_page_page__WEBPACK_IMPORTED_MODULE_1__.OrderConfirmationPagePage]
    })
], OrderConfirmationPagePageModule);



/***/ }),

/***/ 75311:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/order-confirmation-page/order-confirmation-page.page.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderConfirmationPagePage": function() { return /* binding */ OrderConfirmationPagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_order_confirmation_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-confirmation-page.page.html */ 74862);
/* harmony import */ var _order_confirmation_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-confirmation-page.page.scss */ 28850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ngx_mercadopago__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-mercadopago */ 68160);
/* harmony import */ var src_app_services_mp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mp.service */ 5435);
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/card.service */ 73671);
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cliente.service */ 70932);
/* harmony import */ var _services_endereco_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/endereco.service */ 61478);
/* harmony import */ var _services_pedido_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/pedido.service */ 93778);
/* harmony import */ var _services_produto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/produto.service */ 69885);
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/registro.service */ 60023);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/storage.service */ 71188);
















let OrderConfirmationPagePage = class OrderConfirmationPagePage {
    //  statusPayment: any [] = [];
    constructor(router, formBuilder, route, registroService, cardService, storageService, enderecoService, pedidoService, loadingController, clienteService, produtoService, ngxMpService, mpService, alertController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.registroService = registroService;
        this.cardService = cardService;
        this.storageService = storageService;
        this.enderecoService = enderecoService;
        this.pedidoService = pedidoService;
        this.loadingController = loadingController;
        this.clienteService = clienteService;
        this.produtoService = produtoService;
        this.ngxMpService = ngxMpService;
        this.mpService = mpService;
        this.alertController = alertController;
        this.button = false;
        this.processPayment = {
            transaction_amount: 0,
            token: "",
            description: "",
            installments: 0,
            payment_method_id: "",
            issuer_id: 0,
            payer: {
                email: ""
            }
        };
        this.processPaymentDTO = {
            registroId: "",
            transaction_amount: 0,
            token: "",
            description: "",
            installments: 0,
            payment_method_id: "",
            issuer_id: 0,
            email: ""
        };
        this.responseStatusPayment = {
            id: "",
            status: "",
            status_detail: "",
            id_process: "",
            date_approved: "",
            payment_method_id: "",
            payment_type_id: "",
            process_payment_id: 0
        };
        this.route.queryParams.subscribe(params => {
            let getNav = this.router.getCurrentNavigation();
            let getNavCartao = this.router.getCurrentNavigation();
            let getNavPayment = this.router.getCurrentNavigation();
            let getNavInstallment = this.router.getCurrentNavigation();
            if (getNav.extras.state) {
                this.pedido = getNav.extras.state.pedido;
            }
            ;
            if (getNavCartao.extras.state) {
                this.dataCartao = getNavCartao.extras.state.dataCartao;
            }
            ;
            if (getNavPayment.extras.state) {
                this.payment = getNavPayment.extras.state.payment;
            }
            ;
            if (getNavInstallment.extras.state) {
                this.installment = getNavInstallment.extras.state.installment;
            }
        });
    }
    ngOnInit() {
        this.pedido = this.pedido;
        this.pagamento = this.pedido.pagamento;
        this.payment = this.payment;
        this.cardItems = this.cardService.getCard().itens;
        this.quantidade_de_parcelas = this.pagamento.numerosDeParcelas;
        let localUser = this.storageService.getLocalUser();
        if (localUser && localUser.email) {
            this.registroService.findById(this.pedido.registro.id)
                .subscribe(response => {
                this.registro = response;
                this.registroId = this.registro.id;
                this.getEndereco();
            }, catchError => {
                console.log('algo deu errado');
            });
        }
        this.loadForm();
        this.startNumeroCartao = this.dataCartao.numero.slice(0, 3);
        this.endNumeroCartao = this.dataCartao.numero.slice(14, 16);
        let validadeDoCartão = this.dataCartao.validade;
        this.startValidCartao = validadeDoCartão.slice(5, 7);
        this.endValidCartao = validadeDoCartão.slice(0, 4);
    }
    loadForm() {
        this.formGroup = this.formBuilder.group({
            card_cvv: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(3)]]
        });
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
    checkoutMp() {
        this.button = true;
        this.sniper = "ok";
        this.loandPayment();
    }
    loandPayment() {
        var x = this.payment.installments;
        var y = +x;
        this.pedido.pagamento.numerosDeParcelas = y.toString();
        this.payment.docType = "CPF";
        this.payment.docNumber = this.registro.cliente.cpf;
        this.payment.email = this.registro.email;
        this.payment.securityCode = this.formGroup.get('card_cvv').value;
        this.generateToken();
    }
    generateToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const cardToken = yield this.ngxMpService.createToken(this.payment).toPromise();
            this.processPayment.transaction_amount = this.payment.transactionAmount;
            this.processPayment.token = cardToken;
            this.processPayment.description = this.payment.description;
            this.processPayment.installments = this.payment.installments;
            this.processPayment.payment_method_id = this.payment.paymentMethodId;
            this.processPayment.issuer_id = this.payment.issuer;
            this.processPayment.payer.email = this.payment.email;
            this.processPaymentDTO.registroId = this.registroId;
            this.processPaymentDTO.transaction_amount = this.payment.transactionAmount;
            this.processPaymentDTO.token = cardToken.data.id;
            this.processPaymentDTO.description = this.payment.description;
            this.processPaymentDTO.installments = this.payment.installments;
            this.processPaymentDTO.payment_method_id = this.payment.paymentMethodId;
            this.processPaymentDTO.issuer_id = this.payment.issuer;
            this.processPaymentDTO.email = this.payment.email;
            this.mpService.insert(this.processPaymentDTO)
                .subscribe(response => {
                if (response.status == 201 || response.status == 200) {
                    this.mpcodpedido = this.extrairId(response.headers.get('location'));
                    this.getMpPedidoStatus();
                }
            }, catchError => {
                if (catchError.status == 403) {
                    this.errrorPresentAlert();
                }
            });
        });
    }
    checkout() {
        this.pedidoService.insert(this.pedido)
            .subscribe(response => {
            console.log("antes do createOrClearCard");
            console.log(this.pedido);
            this.cardService.createrOrClearCard();
            console.log(this.pedido);
            this.codpedido = this.extrairPedidoId(response.headers.get('location'));
        }, catchError => {
            if (catchError.status == 403) {
                this.router.navigate(['/address']); //criar um alert controller e redirecionar pagina
            }
        });
    }
    home() {
        this.router.navigate(['/dashboard']);
    }
    total() {
        return this.payment.transactionAmount;
    }
    extrairId(location) {
        let position = location.lastIndexOf('/');
        return location.substring(position + 1, location.length);
    }
    extrairPedidoId(location) {
        let position = location.lastIndexOf('/');
        return location.substring(position + 1, location.length);
    }
    getProdutoCliente() {
        let card = this.cardService.getCard();
        this.itens = card.itens;
        for (var i = 0; i < this.itens.length; i++) {
            let item = this.itens[i];
            this.produtoService.findById(item.produto.id)
                .subscribe(response => {
                this.produto = response;
            }, catchError => {
                console.log(catchError);
            });
        }
    }
    getMpPedidoStatus() {
        let status1 = "accredited";
        let status2 = "pending_contingency";
        let status3 = "pending_review_manual";
        let status4 = "cc_rejected_bad_filled_card_number";
        let status5 = "cc_rejected_bad_filled_date";
        let status6 = "cc_rejected_bad_filled_other";
        let status7 = "cc_rejected_bad_filled_security_code";
        let status8 = "cc_rejected_blacklist";
        let status9 = "cc_rejected_call_for_authorize";
        let status10 = "cc_rejected_card_disabled";
        let status11 = "cc_rejected_card_error";
        let status12 = "cc_rejected_duplicated_payment";
        let status13 = "cc_rejected_high_risk";
        let status14 = "cc_rejected_insufficient_amount";
        let status15 = "cc_rejected_invalid_installments";
        let status16 = "cc_rejected_max_attempts";
        let status17 = "cc_rejected_other_reason";
        let status18 = "cc_rejected_card_type_not_allowed";
        this.mpService.findById(this.mpcodpedido)
            .subscribe(response => {
            this.responseStatusPayment = response;
            let resultPayment = this.responseStatusPayment.status_detail;
            //****
            if (resultPayment == status1) {
                this.paymentAccredited = "Pronto, seu pagamento foi aprovado!";
                this.checkout(); //no backend getStausPayment, apos confirma recebimento, sendEmailConfirmationpayment no backend
            }
            else if (resultPayment == status2) {
                this.paymentRejected = "Estamos processando o pagamento.";
            }
            else if (resultPayment == status3) {
                this.paymentRejected = "Não se preocupe, em menos de 2 dias úteis informaremos por e-mail se foi creditado ou se necessitamos de mais informação.";
            }
            else if (resultPayment == status4) {
                this.paymentRejected = "Revise o número do cartão.";
            }
            else if (resultPayment == status5) {
                this.paymentRejected = "Revise a data de vencimento.";
            }
            else if (resultPayment == status6) {
                this.paymentRejected = "Revise seus dados.";
            }
            else if (resultPayment == status7) {
                this.paymentRejected = "Revise o código de segurança do cartão.";
            }
            else if (resultPayment == status8) {
                this.paymentRejected = "Não pudemos processar seu pagamento. Você não sera cobrado.";
            }
            else if (resultPayment == status9) {
                this.paymentRejected = "Você deve autorizar o pagamento com seu cartão.";
            }
            else if (resultPayment == status10) {
                this.paymentRejected = "Ligue para o bando de seu cartão para ativar seu cartão. O telefone está no verso do seu cartão.";
            }
            else if (resultPayment == status11) {
                this.paymentRejected = "Não conseguimos processar seu pagamento, você não sera cobrado no futuro. ";
            }
            else if (resultPayment == status12) {
                this.paymentRejected = "Você já efetuou um pagamento com esse valor. Caso precise pagar novamente, utilize outro cartão ou escolha outra forma de pagamento.";
            }
            else if (resultPayment == status13) {
                this.paymentRejected = "Seu pagamento foi recusado.";
            }
            else if (resultPayment == status14) {
                this.paymentRejected = "O saldo é insuficiente. Não processamos seu pedido. ";
            }
            else if (resultPayment == status15) {
                this.paymentRejected = "O metodo de pagamento não processa pagamentos parcelados.";
            }
            else if (resultPayment == status16) {
                this.paymentRejected = "Você atingiu o limite de tentativas permitido.";
            }
            else if (resultPayment == status17) {
                this.paymentRejected = "Metodo de pagamento não processa o pagamento.";
            }
            else if (resultPayment == status18) {
                this.paymentRejected = "O pagamento foi rejeitado porque o usuário não tem a função crédito habilitada em seu cartão multiplo (débito e crédito). ";
            }
            else {
                this.errrorPresentAlert();
            }
            //**** */
        }, catchError => {
            console.log(catchError);
        });
    }
    errrorPresentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Atenção',
                subHeader: 'Falha ao processar pagamento ou conexão internet falhou',
                message: 'Você não será cobrado!',
                buttons: ['Continuar']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
            this.router.navigate(['/dashboard/cart']);
        });
    }
};
OrderConfirmationPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _services_registro_service__WEBPACK_IMPORTED_MODULE_8__.RegistroService },
    { type: _services_card_service__WEBPACK_IMPORTED_MODULE_3__.CardService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_9__.StorageService },
    { type: _services_endereco_service__WEBPACK_IMPORTED_MODULE_5__.EnderecoService },
    { type: _services_pedido_service__WEBPACK_IMPORTED_MODULE_6__.PedidoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController },
    { type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_4__.ClienteService },
    { type: _services_produto_service__WEBPACK_IMPORTED_MODULE_7__.ProdutoService },
    { type: ngx_mercadopago__WEBPACK_IMPORTED_MODULE_14__.NgxMercadopagoService },
    { type: src_app_services_mp_service__WEBPACK_IMPORTED_MODULE_2__.MpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController }
];
OrderConfirmationPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-order-confirmation-page',
        template: _raw_loader_order_confirmation_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_confirmation_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderConfirmationPagePage);



/***/ }),

/***/ 28850:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/order-confirmation-page/order-confirmation-page.page.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: center;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\nion-content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nion-list {\n  font-feature-settings: \"sups\";\n  font-variant-position: super;\n}\n\nion-select {\n  color: #0b21e0;\n  --placeholder-color: #971e49;\n  --placeholder-opacity: 1;\n  width: 100%;\n  justify-content: left;\n}\n\nion-card {\n  width: auto;\n  height: auto;\n}\n\nion-card-title {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  color: #080808;\n  text-align: length;\n  width: 75;\n  height: 75;\n}\n\nion-label {\n  font-family: \"Lucida Sans Regular\";\n  font-size: medium;\n  color: #080808;\n  text-align: left;\n}\n\nh6 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: left;\n  -moz-text-align-last: left;\n       text-align-last: left;\n  color: #0f0f0f;\n}\n\nh5 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: medium;\n  text-align: left;\n  -moz-text-align-last: left;\n       text-align-last: left;\n  color: #0f0f0f;\n}\n\nh1 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  color: #0f0f0f;\n}\n\n.ion-text-center {\n  text-align: center;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQUEsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDQSxrQ0FBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtPQUFBLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7T0FBQSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO09BQUEsdUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0EsY0FBQTtBQUNBIiwiZmlsZSI6Im9yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgY29sb3I6IHJnYig4LCA4LCA4KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xufVxuXG5pb24tY29udGVudCB7ICBcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjM5LCAyNTApO1xufSBcblxuaW9uLWxpc3R7XG4gIGZvbnQtdmFyaWFudC1wb3NpdGlvbjogc3VwZXI7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBjb2xvcjogIzBiMjFlMDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzk3MWU0OTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuXG5pb24tY2FyZCAge1xuICB3aWR0aDogYXV0bzsgXG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gIHRleHQtYWxpZ246IGxlbmd0aDsgXG4gIHdpZHRoOiA3NTsgXG4gIGhlaWdodDogNzU7XG4gIH1cblxuaW9uLWxhYmVsIHtcbmZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmg2IHtcbiAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LWFsaWduLWxhc3Q6IGxlZnQ7IFxuICBjb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xufVxuXG5oNSB7XG4gIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtYWxpZ24tbGFzdDogbGVmdDsgXG4gIGNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyOyBcbiAgY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcbn1cblxuLmlvbi10ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG5jb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xufVxuIl19 */");

/***/ }),

/***/ 74862:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-confirmation-page/order-confirmation-page.page.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><h6>Confirme os dados antes de finalizar pedido</h6></ion-title>\n    <ion-title *ngIf=\"!mpcodpedido\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngIf=\"!mpcodpedido\">\n  \n  <ion-card>\n      <ion-card-subtitle>Seu pedido</ion-card-subtitle>\n      <ion-card-content *ngFor=\"let item of cardItems\">\n        <h5>{{item.quantidade}} {{item.produto.name}} : </h5> <h6>{{item.produto.price * item.quantidade| currency}}</h6>\n      </ion-card-content>\n      <ion-card-content>\n       <h5> Valor total de: </h5> <h6> R{{payment.transactionAmount + installment.installment_rate | currency}}</h6>\n      </ion-card-content>\n    \n    <ion-card-content>\n      <h6>\n        {{endereco?.logradouro}}, {{endereco?.numero}}\n        {{endereco?.complemento}} {{endereco?.bairro}} CEP {{endereco?.cep}}\n        {{endereco?.localidade}}, {{endereco?.uf}}\n      </h6>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-content><h5>Cliente: </h5> <h6>{{registro?.cliente?.name}}</h6> </ion-card-content>\n    <ion-card-content><h5>CPF: </h5> <h6>{{startcpf}}******{{endcpf}}</h6> </ion-card-content>\n    <ion-card-content><h5>Email: </h5> <h6>{{registro?.email}}</h6> </ion-card-content>\n    <ion-card-content *ngIf=\"pedido.pagamento['@type']=='pagamentoCartao'\">\n      <h6> Compras em {{ payment.installments }} de {{ installment.installment_rate / payment.installments + payment.transactionAmount / payment.installments | currency }} </h6>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"pedido.pagamento['@type']=='pagamentoCartao'\">\n    <ion-card-subtitle> <h5>Titular do cartão</h5> </ion-card-subtitle>\n    <ion-card-content class=\"ion-text-uppercase\"><h6>{{dataCartao?.titular}}</h6> </ion-card-content>\n    <ion-card-content><h5>Número do cartão: </h5> <h6>{{startNumeroCartao}}***-***{{endNumeroCartao}}</h6> </ion-card-content>\n    <ion-card-content><h5>Validade: </h5> <h6>{{startValidCartao}}/{{endValidCartao}}</h6> </ion-card-content>\n    </ion-card-content>\n    \n    <ion-card-content>\n      <form [formGroup]=\"formGroup\">\n        <ion-label>codigo de segurança</ion-label>\n        <ion-item>\n          <ion-input formControlName=\"card_cvv\" color=\"danger\" inputmode=\"tel\" type=\"numeric\" maxlength=\"3\" required></ion-input>\n          <p *ngIf=\"formGroup.controls.card_cvv.dirty && formGroup.controls.card_cvv.errors\" margin-left>Insira codigo. </p>\n        </ion-item>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <h1>Finalizar pedido.</h1>\n  <ion-button disabled = \"{{button}}\" *ngIf=\"formGroup.controls.card_cvv.valid && formGroup.controls.card_cvv.valid\" type=\"submit\" color=\"light\" expand=\"block\" (click)=\"checkoutMp()\">\n    <ion-spinner *ngIf=\"sniper\" color=\"secondary\" duration = 3 > </ion-spinner>\n    <p *ngIf=\"sniper\"> aguarde ...</p>\n    <p *ngIf=\"!sniper\">Finalizar compra</p>\n  </ion-button>\n  <h6>Após confirmação você redirecionado a pagina inicial</h6>\n\n</div>\n\n<div ion-text-center *ngIf=\"mpcodpedido\">\n  <ion-card>\n    <ion-card-header> \n      <ion-card-subtitle> <h5>A BelaRosa agradece sua preferência</h5> </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <h6>\n        Em breve você receberá um email com processamento de seu pedido.\n      </h6>\n    </ion-card-content>\n    <ion-card-content>\n      <h6 *ngIf=\"codpedido\">Codigo do pedido:</h6> {{codpedido}}\n      <h6 *ngIf=\"codpedido\">Sua compra foi aprovada.</h6>\n      <h6>Status do pedido:</h6> {{paymentAccredited}} {{paymentRejected}}\n    </ion-card-content>\n  </ion-card>\n  <ion-button *ngIf=\"paymentRejected\"[routerLink]=\"['/dashboard/cart']\" color=\"light\" block outline expand=\"block\" > Tentar comprar novamente </ion-button>\n  <ion-button [routerLink]=\"['/dashboard/index']\" color=\"light\" block outline expand=\"block\" > Inicio </ion-button>    \n</div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_order-confirmation-page_order-confirmation-page_module_ts-es2015.js.map