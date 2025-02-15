(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_produto-detail_produto-detail_module_ts"],{

/***/ 42745:
/*!***********************************************************************!*\
  !*** ./src/app/pages/produto-detail/produto-detail-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutoDetailPageRoutingModule": function() { return /* binding */ ProdutoDetailPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _produto_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produto-detail.page */ 65340);




const routes = [
    {
        path: '',
        component: _produto_detail_page__WEBPACK_IMPORTED_MODULE_0__.ProdutoDetailPage
    }
];
let ProdutoDetailPageRoutingModule = class ProdutoDetailPageRoutingModule {
};
ProdutoDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProdutoDetailPageRoutingModule);



/***/ }),

/***/ 42470:
/*!***************************************************************!*\
  !*** ./src/app/pages/produto-detail/produto-detail.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutoDetailPageModule": function() { return /* binding */ ProdutoDetailPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _produto_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./produto-detail-routing.module */ 42745);
/* harmony import */ var _produto_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produto-detail.page */ 65340);







let ProdutoDetailPageModule = class ProdutoDetailPageModule {
};
ProdutoDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _produto_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProdutoDetailPageRoutingModule
        ],
        declarations: [_produto_detail_page__WEBPACK_IMPORTED_MODULE_1__.ProdutoDetailPage]
    })
], ProdutoDetailPageModule);



/***/ }),

/***/ 65340:
/*!*************************************************************!*\
  !*** ./src/app/pages/produto-detail/produto-detail.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutoDetailPage": function() { return /* binding */ ProdutoDetailPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_produto_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./produto-detail.page.html */ 196);
/* harmony import */ var _produto_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produto-detail.page.scss */ 64650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/config */ 64573);
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/card.service */ 73671);
/* harmony import */ var _services_descricao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/descricao.service */ 89709);
/* harmony import */ var _services_produto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/produto.service */ 69885);
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/registro.service */ 60023);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/storage.service */ 71188);












let ProdutoDetailPage = class ProdutoDetailPage {
    constructor(cardService, storageService, route, produtoService, descricaoservice, registroService, router, actionSheetController) {
        this.cardService = cardService;
        this.storageService = storageService;
        this.route = route;
        this.produtoService = produtoService;
        this.descricaoservice = descricaoservice;
        this.registroService = registroService;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.item = {
            id: "",
            name: "",
            price: 0,
            imageUrl: ""
        };
        this.codRegistro = false;
        this.produtoDisponivel = false;
    }
    ngOnInit() {
        this.getProduto();
        this.getDescricaoProduto();
        this.getMyData();
    }
    getMyData() {
        let localUser = this.storageService.getLocalUser();
        if (localUser && localUser.email) {
            this.registroService.findByEmail(localUser.email)
                .subscribe(response => {
                this.registro = response;
                this.codRegistro = true;
            }, catchError => {
                if (catchError.status == 403) {
                    this.router.navigate(['/home']);
                }
            });
        }
    }
    getProduto() {
        let produto_id = this.route.snapshot.paramMap.get('produto_id');
        this.produtoService.findById(produto_id)
            .subscribe(response => {
            this.item = response;
            this.getImage();
        }, catchError => {
            console.log(catchError);
        });
    }
    getDescricaoProduto() {
        let produto_id = this.route.snapshot.paramMap.get('produto_id');
        this.descricaoservice.findById(produto_id)
            .subscribe(response => {
            this.detail = response;
        }, catchError => {
            console.log(catchError);
        });
    }
    getImage() {
        this.produtoService.getProdutoImage(this.item.id)
            .subscribe(response => {
            this.item.imageUrl = `${src_config_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.bukectBaseUrl}/produtos/prod${this.item.id}.png`;
        }, catchError => {
            console.log(catchError);
        });
    }
    addToCard(produto) {
        this.cardService.addProduto(produto);
        this.presentActionSheet();
    }
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Suas compras. ',
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Ir ao carrinho',
                        role: 'destructive',
                        icon: 'cart-outline',
                        handler: () => {
                            this.router.navigate(["/dashboard/cart"]);
                        }
                    }, {
                        text: 'Continuar comprando',
                        icon: 'home-outline',
                        handler: () => {
                            this.router.navigate(["/dashboard/index"]);
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
ProdutoDetailPage.ctorParameters = () => [
    { type: _services_card_service__WEBPACK_IMPORTED_MODULE_3__.CardService },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _services_produto_service__WEBPACK_IMPORTED_MODULE_5__.ProdutoService },
    { type: _services_descricao_service__WEBPACK_IMPORTED_MODULE_4__.DescricaoService },
    { type: _services_registro_service__WEBPACK_IMPORTED_MODULE_6__.RegistroService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController }
];
ProdutoDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-produto-detail',
        template: _raw_loader_produto_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_produto_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProdutoDetailPage);



/***/ }),

/***/ 64650:
/*!***************************************************************!*\
  !*** ./src/app/pages/produto-detail/produto-detail.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: length;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\ndiv {\n  text-align: center;\n}\n\n#container ion-card {\n  width: auto;\n  height: auto;\n}\n\nion-card-title {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  color: #080808;\n  text-align: center;\n  width: 75;\n  height: 75;\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n\nion-card-title {\n  font-family: \"Lucida Sans Regular\";\n  font-size: smaller;\n  color: #080808;\n  text-align: center;\n}\n\nion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: center;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\nion-content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nh6 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: medium;\n  text-align: center;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  color: #0f0f0f;\n}\n\nh5 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  overflow: auto;\n  left: 100px;\n  right: 100px;\n  color: #0f0f0f;\n}\n\nion-icon {\n  width: 20px;\n  height: 20px;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1dG8tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO09BQUEsdUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InByb2R1dG8tZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5pb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gIHRleHQtYWxpZ246IGxlbmd0aDsgXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE5MSwgMjMzKTtcbn1cblxuZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY29udGFpbmVyIGlvbi1jYXJkICB7XG4gIHdpZHRoOiBhdXRvOyBcbiAgaGVpZ2h0OiBhdXRvO1xuXG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogcmdiKDgsIDgsIDgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICB3aWR0aDogNzU7IFxuICBoZWlnaHQ6IDc1O1xuICB9XG5cbmlvbi1pbWcge1xuICB3aWR0aDogYXV0bzsgXG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgY29sb3I6IHJnYig4LCA4LCA4KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn1cblxuaW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xuICBjb2xvcjogcmdiKDgsIDgsIDgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxOTEsIDIzMyk7XG59XG5cbmlvbi1jb250ZW50IHsgIFxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyMzksIDI1MCk7XG59IFxuXG5oNiB7XG4gIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7IFxuICBjb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xufVxuXG5oNSB7XG4gIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGxlZnQ6IDEwMHB4O1xuICByaWdodDogMTAwcHg7XG4gIGNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XG59XG5cbmlvbi1pY29uIHtcbiAgd2lkdGg6IDIwcHg7IFxuICBoZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xufVxuIl19 */");

/***/ }),

/***/ 196:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/produto-detail/produto-detail.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button>back</ion-back-button>\n    </ion-buttons>\n    <h6>Informações do produto</h6>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content *ngIf=\"codRegistro\" padding [fullscreen]=\"true\">\n  <div>\n    <ion-card>\n      <ion-img  [src]=\"item?.imageUrl || '../../assets/Camera.svg'\"></ion-img>\n    </ion-card>\n  \n    <div class=\"ion-text-center\">\n      <ion-label>{{detail?.name}}</ion-label>\n      <h6> {{item?.name}}</h6>\n      <p *ngIf=\"!item?.price == 0.0\"> R{{item.price | currency}}</p>\n      <h5 *ngIf=\"item?.price == 0.0\"> Produto indisponivel no momento. </h5>\n    </div>\n      <ion-button *ngIf=\"!item?.price == 0.0\" block outline expand=\"block\" color=\"light\" (click)=\"addToCard(item)\">Adicionar ao carrinho</ion-button>\n      <ion-button [routerLink]=\"['/dashboard/index']\" block outline expand=\"block\" color=\"light\">Continue comprando</ion-button>\n  </div>\n</ion-content>\n\n<ion-content *ngIf=\"!codRegistro\" padding [fullscreen]=\"true\">\n  <div>\n      <ion-card>\n        <ion-img  [src]=\"item?.imageUrl || '../../assets/Camera.svg'\"></ion-img>\n      </ion-card>\n    \n      <div class=\"ion-text-center\">\n        <ion-label>{{detail?.name}}</ion-label>\n        <h6> {{item?.name}}</h6>\n        <p>\n          R$ {{item?.price}}\n        </p>\n      </div>\n      \n      <div>\n          <ion-label>Já tem conta ? </ion-label>\n          <ion-button block outline expand=\"block\" color=\"light\" [routerLink]=\"['/login']\">Entrar na conta</ion-button>\n      </div>\n     \n      <div>\n          <ion-label> Não possui um conta ? </ion-label>\n          <ion-button [routerLink]=\"['/registration']\" block outline expand=\"block\" color=\"light\">Criar nova conta</ion-button>\n      </div>\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_produto-detail_produto-detail_module_ts-es2015.js.map