(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_index_index_module_ts"],{

/***/ 80513:
/*!*****************************************************!*\
  !*** ./src/app/pages/index/index-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageRoutingModule": function() { return /* binding */ IndexPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.page */ 95957);




const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_0__.IndexPage
    }
];
let IndexPageRoutingModule = class IndexPageRoutingModule {
};
IndexPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IndexPageRoutingModule);



/***/ }),

/***/ 61023:
/*!*********************************************!*\
  !*** ./src/app/pages/index/index.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageModule": function() { return /* binding */ IndexPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-routing.module */ 80513);
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.page */ 95957);







let IndexPageModule = class IndexPageModule {
};
IndexPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _index_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndexPageRoutingModule
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_1__.IndexPage]
    })
], IndexPageModule);



/***/ }),

/***/ 95957:
/*!*******************************************!*\
  !*** ./src/app/pages/index/index.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPage": function() { return /* binding */ IndexPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./index.page.html */ 96782);
/* harmony import */ var _index_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.page.scss */ 39834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/config */ 64573);
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cliente.service */ 70932);
/* harmony import */ var _services_endereco_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/endereco.service */ 61478);
/* harmony import */ var _services_produto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/produto.service */ 69885);
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/registro.service */ 60023);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/storage.service */ 71188);












let IndexPage = class IndexPage {
    constructor(produtoService, router, storageService, registroService, enderecoService, clienteService, alertController) {
        this.produtoService = produtoService;
        this.router = router;
        this.storageService = storageService;
        this.registroService = registroService;
        this.enderecoService = enderecoService;
        this.clienteService = clienteService;
        this.alertController = alertController;
        this.itens = [];
        this.page = 0;
    }
    ngOnInit() {
        this.data = null;
        this.getProduto();
        this.getMyData();
    }
    getProduto() {
        const name = '';
        this.produtoService.searchAll(name, this.page, 12)
            .subscribe(response => {
            let start = this.itens.length;
            this.itens = this.itens.concat(response['content']);
            let end = this.itens.length - 1;
            this.loadImage(start, end);
        }, catchError => {
            console.log(catchError);
        });
    }
    getMyData() {
        let localUser = this.storageService.getLocalUser();
        if (localUser && localUser.email) {
            this.registroService.findByEmail(localUser.email)
                .subscribe(response => {
                this.registro = response;
                this.data = null;
                this.getCliente();
            }, catchError => {
                if (catchError.status == 403) {
                    this.router.navigate(['/home']);
                }
            });
        }
    }
    getCliente() {
        this.clienteService.findById(this.registro.id)
            .subscribe(response => {
            this.cliente = response;
            this.getEndereco();
        }, catchError => {
            this.alertRegistro();
        });
    }
    getEndereco() {
        this.enderecoService.findById(this.cliente.id)
            .subscribe(response => {
            this.endereco = response;
        }, catchError => {
            if (catchError.status == 403) {
                this.router.navigate(['/home']);
            }
        });
    }
    loadImage(start, end) {
        for (var i = start; i <= end; i++) {
            let item = this.itens[i];
            this.produtoService.getProdutoImage(item.id)
                .subscribe(response => {
                item.imageUrl = `${src_config_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.bukectBaseUrl}/produtos/prod${item.id}-small.png`;
            }, catchError => {
                if (catchError) {
                    console.log("not image");
                    item.imageUrl = '../../assets/Camera.svg';
                }
            });
        }
    }
    produtoDetails(produto_id) {
        this.router.navigate(['/dashboard/produto-detail', { produto_id: produto_id }]);
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
            this.loadImage(start, end);
        });
        this.getProduto();
        setTimeout(() => {
            event.target.complete();
        }, 3000);
    }
    loadData(event) {
        this.getProduto();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    onInput(event) {
        this.page = 0;
        this.itens = [];
        const name = event.target.value;
        this.produtoService.searchAll(name, this.page, 0)
            .subscribe(response => {
            let start = this.itens.length;
            this.itens = this.itens.concat(response['content']);
            let end = this.itens.length - 1;
            this.loadImage(start, end);
        });
    }
    alertRegistro() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'registration-success',
                header: 'ops!',
                subHeader: 'Você não finalizou seu cadastro',
                message: 'Termine seu cadastro para acessar nossos conteudos. ',
                buttons: [
                    {
                        text: 'Clique aqui',
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
IndexPage.ctorParameters = () => [
    { type: _services_produto_service__WEBPACK_IMPORTED_MODULE_5__.ProdutoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService },
    { type: _services_registro_service__WEBPACK_IMPORTED_MODULE_6__.RegistroService },
    { type: _services_endereco_service__WEBPACK_IMPORTED_MODULE_4__.EnderecoService },
    { type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__.ClienteService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController }
];
IndexPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-index',
        template: _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_index_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IndexPage);



/***/ }),

/***/ 39834:
/*!*********************************************!*\
  !*** ./src/app/pages/index/index.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: auto;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.ion-text-center {\n  font-family: \"Lucida Sans Regular\";\n  font-size: medium;\n  text-align: right;\n  position: absolute;\n  left: 100px;\n  right: 50px;\n  position: absolute;\n}\n\np {\n  font-family: \"Lucida Sans Regular\";\n  font-size: medium;\n  text-align: center;\n  position: fixed;\n  left: 100px;\n  right: 100px;\n  position: absolute;\n}\n\n.ion-thumbnail {\n  width: 100px;\n  height: 100px;\n}\n\nimg {\n  width: auto;\n  height: auto;\n}\n\nh6 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  overflow: auto;\n  color: #0f0f0f;\n}\n\nh5 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  overflow: auto;\n  position: absolute;\n  left: 100px;\n  right: 100px;\n  color: #0f0f0f;\n}\n\nion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: length;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\n.content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNBOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBR0E7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUFGOztBQUVBO0VBQ0ksMENBQUE7QUFDSjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiaW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uaW9uLXRleHQtY2VudGVyIHtcbiAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAwcHg7XG4gIHJpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbnB7XG4gIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAxMDBweDtcbiAgcmlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pb24tdGh1bWJuYWlsIHtcbndpZHRoOiAxMDBweDsgXG5oZWlnaHQ6IDEwMHB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogYXV0bzsgXG4gIGhlaWdodDogYXV0bztcbn1cblxuaDYge1xuICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gIG92ZXJmbG93OiBhdXRvO1xuICBjb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xufVxuXG5cbmg1IHtcbiAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDBweDtcbiAgcmlnaHQ6IDEwMHB4O1xuICBjb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xufVxuXG5pb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gIHRleHQtYWxpZ246IGxlbmd0aDsgXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE5MSwgMjMzKTtcbn1cbi5jb250ZW50IHsgIFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDIzOSwgMjUwKTtcbn0gXG5cbmlvbi1pbWcge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4iXX0= */");

/***/ }),

/***/ 96782:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header *ngIf=\"!data\">\n  <ion-toolbar>\n    <h6> <ion-icon name=\"person\"></ion-icon> Olá {{registro?.cliente?.name}}-{{endereco?.cep}}, {{endereco?.localidade}}, {{endereco?.uf}}</h6>\n  </ion-toolbar>\n  <ion-searchbar (ionInput)=\"onInput($event)\"  placeholder=\"o que procura?\" ></ion-searchbar>\n</ion-header> \n\n<ion-content *ngIf=\"!data\" class=\"content\" padding >   \n  <div>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content refreshingSpinner=\"circular\"></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list>\n      <ion-item *ngFor=\"let item of itens\" (click)=\"produtoDetails(item.id)\">\n        <ion-thumbnail class=\"ion-thumbnail\" item-start>\n          <img [src]=\"item.imageUrl || '../../assets/Camera.svg'\">\n        </ion-thumbnail>\n        <div>\n          <h2 class=\"ion-text-center\">{{item.name}}</h2>\n        </div>\n        <p *ngIf=\"!item?.price == 0.0\">R{{item.price | currency}}</p>\n        <br>\n        <h5 id=\"\" *ngIf=\"item?.price == 0.0\"> indisponivel no momento.</h5>\n      </ion-item>\n    </ion-list>  \n\n  </div>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Carregando mais produtos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n\n<ion-header *ngIf=\"data\">\n  <ion-toolbar>\n    <h6> <ion-icon name=\"person\"></ion-icon> <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text> </h6>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content *ngIf=\"data\" class=\"content\" padding >   \n  <div>\n\n    <ion-list>\n      <ion-item *ngFor=\"let item of itens\" (click)=\"produtoDetails(item.id)\">\n        <ion-thumbnail class=\"ion-thumbnail\" item-start>\n          <img [src]=\"item.imageUrl || '../../assets/Camera.svg'\">\n        </ion-thumbnail>\n        <div>\n          <h2 class=\"ion-text-center\">  <ion-skeleton-text animated></ion-skeleton-text> </h2>\n        </div>\n        <p>  <ion-skeleton-text animated></ion-skeleton-text></p>\n        <br>\n        <h5> <ion-skeleton-text animated> </ion-skeleton-text> </h5>\n      </ion-item>\n    </ion-list>  \n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_index_index_module_ts-es2015.js.map