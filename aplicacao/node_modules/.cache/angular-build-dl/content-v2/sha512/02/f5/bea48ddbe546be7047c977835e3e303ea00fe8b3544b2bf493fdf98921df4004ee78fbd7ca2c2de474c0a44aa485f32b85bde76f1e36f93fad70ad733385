(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_pedidos_pedidos_module_ts"],{

/***/ 55259:
/*!*********************************************************!*\
  !*** ./src/app/pages/pedidos/pedidos-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidosPageRoutingModule": function() { return /* binding */ PedidosPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedidos.page */ 3712);




const routes = [
    {
        path: '',
        component: _pedidos_page__WEBPACK_IMPORTED_MODULE_0__.PedidosPage
    }
];
let PedidosPageRoutingModule = class PedidosPageRoutingModule {
};
PedidosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PedidosPageRoutingModule);



/***/ }),

/***/ 87332:
/*!*************************************************!*\
  !*** ./src/app/pages/pedidos/pedidos.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidosPageModule": function() { return /* binding */ PedidosPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedidos-routing.module */ 55259);
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedidos.page */ 3712);







let PedidosPageModule = class PedidosPageModule {
};
PedidosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_0__.PedidosPageRoutingModule
        ],
        declarations: [_pedidos_page__WEBPACK_IMPORTED_MODULE_1__.PedidosPage]
    })
], PedidosPageModule);



/***/ }),

/***/ 3712:
/*!***********************************************!*\
  !*** ./src/app/pages/pedidos/pedidos.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidosPage": function() { return /* binding */ PedidosPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pedidos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pedidos.page.html */ 61537);
/* harmony import */ var _pedidos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedidos.page.scss */ 86386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_pedido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pedido.service */ 93778);
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/registro.service */ 60023);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ 71188);
/* harmony import */ var _services_produto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/produto.service */ 69885);
/* harmony import */ var src_app_services_mp_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mp.service */ 5435);










let PedidosPage = class PedidosPage {
    constructor(pedidoService, mpService, storageService, registroService, produtoService, router) {
        this.pedidoService = pedidoService;
        this.mpService = mpService;
        this.storageService = storageService;
        this.registroService = registroService;
        this.produtoService = produtoService;
        this.router = router;
        this.itens = [];
        this.page = 0;
        this.statusPayment = [];
    }
    ngOnInit() {
        let localUser = this.storageService.getLocalUser();
        if (localUser && localUser.email) {
            this.registroService.findByEmail(localUser.email)
                .subscribe(response => {
                this.registro = response;
                this.getPedido();
                //     this.getPedidos();
                //    this.getStatusPaymenty();
            }, catchError => {
                console.log("erro");
            });
        }
    }
    getPedido() {
        const name = '';
        this.pedidoService.searchAll(name, this.page, 12)
            .subscribe(response => {
            let start = this.itens.length;
            this.itens = this.itens.concat(response['content']);
            let end = this.itens.length - 1;
        }, catchError => {
            console.log(catchError);
        });
    }
    getPedidos() {
        this.pedidoService.findAll().subscribe(response => {
            let start = this.itens.length;
            this.itens = this.itens.concat(response['content']);
            console.log(this.itens[0].itens);
            let end = this.itens.length - 1;
            console.log(start);
            console.log(end);
        });
    }
    getStatusPaymenty() {
        this.mpService.findAll().subscribe(response => {
            let start = this.statusPayment.length;
            this.statusPayment = this.statusPayment.concat(response['content']);
            let end = this.statusPayment.length - 1;
        });
    }
    doRefresh(event) {
        this.page = 0;
        this.itens = [];
        const name = event.target.value;
        this.produtoService.searchAll(name, this.page, 0)
            .subscribe(response => {
            let start = this.itens.length;
            this.itens = this.itens.concat(response['content']);
            let end = this.itens.length - 1;
        });
        this.getPedidos();
        setTimeout(() => {
            event.target.complete();
        }, 3000);
    }
};
PedidosPage.ctorParameters = () => [
    { type: _services_pedido_service__WEBPACK_IMPORTED_MODULE_2__.PedidoService },
    { type: src_app_services_mp_service__WEBPACK_IMPORTED_MODULE_6__.MpService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _services_registro_service__WEBPACK_IMPORTED_MODULE_3__.RegistroService },
    { type: _services_produto_service__WEBPACK_IMPORTED_MODULE_5__.ProdutoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
PedidosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-pedidos',
        template: _raw_loader_pedidos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pedidos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PedidosPage);



/***/ }),

/***/ 86386:
/*!*************************************************!*\
  !*** ./src/app/pages/pedidos/pedidos.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: center;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\n.content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\n.widfh {\n  --min-height: 3;\n}\n\nh6 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  color: #0f0f0f;\n}\n\nstrong {\n  font-family: \"Lucida Sans Regular\";\n  font-size: medium;\n  text-align: center;\n  font-style: italic;\n  color: #0f0f0f;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlZGlkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBQ0U7RUFDSSwwQ0FBQTtBQUVOOztBQUNFO0VBQ0UsZUFBQTtBQUVKOztBQUNFO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNFO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0FBRUoiLCJmaWxlIjoicGVkaWRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW9uLWhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICBjb2xvcjogcmdiKDgsIDgsIDgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xuICB9XG4gIC5jb250ZW50IHsgIFxuICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjM5LCAyNTApO1xuICB9IFxuXG4gIC53aWRmaCB7XG4gICAgLS1taW4taGVpZ2h0OiAzO1xuICB9XG5cbiAgaDYge1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcbiAgfVxuXG4gIHN0cm9uZyB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcbiAgfVxuICBcbiAgaW9uLWJ1dHRvbiB7XG4gICAgY29sb3I6IHJnYigyNDAsIDE5MSwgMjMzKTtcbiAgfSJdfQ== */");

/***/ }),

/***/ 61537:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedidos/pedidos.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Meus pedidos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\">\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content refreshingSpinner=\"circular\"></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list *ngFor=\"let item of itens\">\n    <ion-item class=\"widfh\" lines=\"none\">\n      <strong>{{item.instante}}</strong>\n    </ion-item>\n\n    <ion-item class=\"widfh\" lines=\"none\">\n      <h6> Situação: {{item.pagamento.situacaoPedido | json}} </h6>\n    </ion-item>\n\n    <ion-item class=\"widfh\" lines=\"none\">\n      <h6> Pedido: {{item.itens[0].quantidade | json}} {{item.itens[0].produto.name | json}} </h6>\n    </ion-item>\n\n    <ion-item class=\"widfh\">\n      <h6> Valor: {{item.valorTotal |currency}} </h6>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pedidos_pedidos_module_ts-es2015.js.map