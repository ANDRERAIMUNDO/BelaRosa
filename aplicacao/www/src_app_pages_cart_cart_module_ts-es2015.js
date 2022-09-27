(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_cart_cart_module_ts"],{

/***/ 10485:
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageRoutingModule": function() { return /* binding */ CartPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page */ 53278);




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartPageRoutingModule);



/***/ }),

/***/ 70313:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageModule": function() { return /* binding */ CartPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-routing.module */ 10485);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page */ 53278);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 59885);








let CartPageModule = class CartPageModule {
};
CartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartPageRoutingModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_2__.ExploreContainerComponentModule
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_1__.CartPage]
    })
], CartPageModule);



/***/ }),

/***/ 53278:
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": function() { return /* binding */ CartPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cart.page.html */ 53516);
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page.scss */ 58365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/config */ 64573);
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/card.service */ 73671);
/* harmony import */ var _services_produto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/produto.service */ 69885);
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/registro.service */ 60023);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage.service */ 71188);










let CartPage = class CartPage {
    constructor(router, route, cardService, produtoService, storageService, registroService) {
        this.router = router;
        this.route = route;
        this.cardService = cardService;
        this.produtoService = produtoService;
        this.storageService = storageService;
        this.registroService = registroService;
    }
    ionViewWillEnter() {
        this.getMyData();
        const cart = this.cardService.getCard();
        this.itens = cart.itens;
        console.log(this.itens);
    }
    getMyData() {
        let localUser = this.storageService.getLocalUser();
        if (localUser && localUser.email) {
            this.registroService.findByEmail(localUser.email)
                .subscribe(response => {
                this.registro = response;
            }, catchError => {
                if (catchError.status == 403) {
                    this.router.navigate(['/dashboard/cart']);
                }
            });
        }
    }
    removeItem(produto) {
        this.itens = this.cardService.removerProduto(produto).itens;
    }
    addQuantidade(produto) {
        this.itens = this.cardService.addQuantidade(produto).itens;
    }
    removerQuantidade(produto) {
        this.itens = this.cardService.removerQuantidade(produto).itens;
    }
    total() {
        return this.cardService.total();
    }
    loadImage() {
        for (var i = 0; i < this.itens.length; i++) {
            let itens = this.itens[i];
            this.produtoService.getSmallImage(itens.produto.id)
                .subscribe(response => {
                itens.produto.imageUrl = `${src_config_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.bukectBaseUrl}/produtos/prod${itens.produto.id}-small.png`;
            }, catchError => {
                if (catchError.status == 0) {
                    itens.produto.imageUrl = '../../assets/Camera.svg';
                }
            });
        }
    }
    navigate() {
        this.router.navigate(['/dashboard/circle-adress']);
    }
};
CartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _services_card_service__WEBPACK_IMPORTED_MODULE_3__.CardService },
    { type: _services_produto_service__WEBPACK_IMPORTED_MODULE_4__.ProdutoService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService },
    { type: _services_registro_service__WEBPACK_IMPORTED_MODULE_5__.RegistroService }
];
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CartPage);



/***/ }),

/***/ 58365:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 60%;\n  transform: translateY(-50%);\n}\n\n#container-no-cart {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 40%;\n  transform: translateY(-50%);\n}\n\n#ion-icon-nolinebreak-remove {\n  width: 40px;\n  height: 40px;\n  font-size: 100px;\n  color: #bd1198;\n}\n\n#ion-icon-nolinebreak-add {\n  width: 40px;\n  height: 40px;\n  font-size: 100px;\n  color: #023d14;\n}\n\nion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: center;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\nion-content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nion-list {\n  font-feature-settings: \"sups\";\n  font-variant-position: super;\n}\n\n.ion-text-center {\n  text-align: center;\n}\n\nh5 {\n  color: #080808;\n  font-style: oblique;\n}\n\nh6 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  color: #0f0f0f;\n}\n\nh1 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  color: #0f0f0f;\n}\n\np {\n  font-family: \"Lucida Sans Regular\";\n  font-size: larger;\n}\n\nion-img {\n  top: 40%;\n  height: 200px;\n  width: 300px;\n  margin: auto;\n  display: block;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdFO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBQUo7O0FBR0U7RUFDRSwwQ0FBQTtBQUFKOztBQUdFO0VBQ0UsNkJBQUE7RUFBQSw0QkFBQTtBQUFKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7T0FBQSx1QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO09BQUEsdUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0E7RUFDRSxrQ0FBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0U7RUFDRSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtBQUFKIiwiZmlsZSI6ImNhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA2MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lci1uby1jYXJ0e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNpb24taWNvbi1ub2xpbmVicmVhay1yZW1vdmUge1xuICB3aWR0aDogNDBweDsgXG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxMDBweDtcblxuICBjb2xvcjogcmdiKDE4OSwgMTcsIDE1Mik7XG59XG5cbiNpb24taWNvbi1ub2xpbmVicmVhay1hZGQge1xuICB3aWR0aDogNDBweDsgXG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgY29sb3I6IHJnYigyLCA2MSwgMjApO1xufVxuXG4gIGlvbi1oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgY29sb3I6IHJnYig4LCA4LCA4KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE5MSwgMjMzKTtcbiAgfVxuXG4gIGlvbi1jb250ZW50IHsgIFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIzOSwgMjUwKTtcbiAgfSBcblxuICBpb24tbGlzdHtcbiAgICBmb250LXZhcmlhbnQtcG9zaXRpb246IHN1cGVyO1xuICB9XG4gIC5pb24tdGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuICBoNSB7XG4gICAgY29sb3I6IHJnYig4LCA4LCA4KTtcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xufVxuXG4gIGg2IHtcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7IFxuICAgIGNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyOyBcbiAgICBjb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xuICB9XG5cblxucHtcbiAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cbiAgXG4gIGlvbi1pbWcge1xuICAgIHRvcDogNDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIGNvbG9yOiByZ2IoMjQwLCAxOTEsIDIzMyk7XG4gIH1cblxuICAvLy0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC8vLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbiJdfQ== */");

/***/ }),

/***/ 53516:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><h6>Seus pedidos</h6></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"total() <= 0\">\n  <div  id=\"container-no-cart\" >\n    <ion-label>\n      <ion-img [src]=\"'../../assets/emoji-no-cart.svg'\"></ion-img>\n    </ion-label>\n    <br>\n    <ion-label class=\"ion-text-center\"> \n      <strong>Seu carrinho está vazio</strong>\n    </ion-label>\n    <br>\n    <ion-button [routerLink]=\"['/dashboard/index']\" color=\"light\" block outline expand=\"block\" >Inicio</ion-button>  \n  </div>\n</ion-content>\n\n<ion-content *ngIf=\"total() > 0\">\n  <div id=\"container\">\n    <ion-list >\n      <ion-item *ngFor=\"let itens of itens\">\n        <ion-avatar slot=\"start\"> <img [src]=\"itens.produto.imageUrl || '../../assets/Camera.svg'\"> </ion-avatar>\n        <ion-label>\n          <h2>{{itens.produto.name}}</h2>\n          <h3>R{{itens.produto.price | currency}}</h3>\n          <p>{{itens.quantidade}}</p>\n        </ion-label>\n          <ion-icon id=\"ion-icon-nolinebreak-remove\" class=\"nolinebreak\" name=\"remove-circle\" (click)=\"removerQuantidade(itens.produto)\"></ion-icon>\n          <br>\n          <p class=\"nolinebreak\">{{itens.quantidade}}</p>\n          <br>\n          <ion-icon id=\"ion-icon-nolinebreak-add\" name=\"add-circle\" color=\"primary\" (click)=\"addQuantidade(itens.produto)\"></ion-icon>\n          <br>\n          <ion-icon id=\"ion-icon-nolinebreak\" name=\"trash\" item-end color=\"danger\" (click)=\"removeItem(itens.produto)\"></ion-icon>\n      </ion-item>\n    </ion-list>\n    <ion-item *ngIf=\"total() > 0\">\n      <h3>Total: </h3>\n      <h3 item-right> R{{total() | currency}}</h3>\n    </ion-item>\n      <ion-button *ngIf =\"total() > 0\" color=\"light\" block outline expand=\"block\" (click)=\"navigate()\">Finalize seu pedido</ion-button>\n      <ion-button [routerLink]=\"['/dashboard/index']\" color=\"light\" block outline expand=\"block\" >Continue comprando</ion-button>  \n  </div>\n</ion-content>\n\n<app-explore-container> </app-explore-container>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cart_cart_module_ts-es2015.js.map