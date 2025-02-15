(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_address_address_module_ts"], {
    /***/
    12653:
    /*!*********************************************************!*\
      !*** ./src/app/pages/address/address-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddressPageRoutingModule": function AddressPageRoutingModule() {
          return (
            /* binding */
            _AddressPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _address_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./address.page */
      4429);

      var routes = [{
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_0__.AddressPage
      }];

      var _AddressPageRoutingModule = function AddressPageRoutingModule() {
        _classCallCheck(this, AddressPageRoutingModule);
      };

      _AddressPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddressPageRoutingModule);
      /***/
    },

    /***/
    95633:
    /*!*************************************************!*\
      !*** ./src/app/pages/address/address.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddressPageModule": function AddressPageModule() {
          return (
            /* binding */
            _AddressPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _address_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./address-routing.module */
      12653);
      /* harmony import */


      var _address_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./address.page */
      4429);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AddressPageModule = function AddressPageModule() {
        _classCallCheck(this, AddressPageModule);
      };

      _AddressPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _address_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddressPageRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_address_page__WEBPACK_IMPORTED_MODULE_1__.AddressPage]
      })], _AddressPageModule);
      /***/
    },

    /***/
    4429:
    /*!***********************************************!*\
      !*** ./src/app/pages/address/address.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddressPage": function AddressPage() {
          return (
            /* binding */
            _AddressPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_address_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./address.page.html */
      83822);
      /* harmony import */


      var _address_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./address.page.scss */
      96965);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/card.service */
      73671);
      /* harmony import */


      var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/cliente.service */
      70932);
      /* harmony import */


      var _services_endereco_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/endereco.service */
      61478);
      /* harmony import */


      var _services_registro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/registro.service */
      60023);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/storage.service */
      71188);

      var _AddressPage = /*#__PURE__*/function () {
        function AddressPage(storageService, registroService, router, clienteService, enderecoService, cardService) {
          _classCallCheck(this, AddressPage);

          this.storageService = storageService;
          this.registroService = registroService;
          this.router = router;
          this.clienteService = clienteService;
          this.enderecoService = enderecoService;
          this.cardService = cardService;
        }

        _createClass(AddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this = this;

            var localUser = this.storageService.getLocalUser();

            if (localUser && localUser.email) {
              this.registroService.findByEmail(localUser.email).subscribe(function (response) {
                _this.registro = response;

                _this.getEndereco();

                var card = _this.cardService.getCard();

                _this.pedido = {
                  registro: {
                    id: response['id']
                  },
                  cliente: {
                    id: response['id']
                  },
                  enderecoDeEntrega: null,
                  pagamento: null,
                  itens: card.itens.map(function (x) {
                    return {
                      quantidade: x.quantidade,
                      produto: {
                        id: x.produto.id
                      }
                    };
                  })
                };
              }, function (catchError) {
                if (catchError.status == 403) {
                  _this.router.navigate(['/address']);
                }
              });
            }
          }
        }, {
          key: "getEndereco",
          value: function getEndereco() {
            var _this2 = this;

            this.enderecoService.findById(this.registro.id).subscribe(function (response) {
              _this2.endereco = response;
            }, function (catchError) {
              if (catchError.status == 403) {
                _this2.router.navigate(['/address']);
              }
            });
          }
        }, {
          key: "nextPage",
          value: function nextPage(endereco) {
            var navigationExtras = {
              state: {
                pedido: this.pedido
              }
            };
            this.pedido.enderecoDeEntrega = {
              id: endereco.id
            };
            this.router.navigate(['/dashboard/payment-form'], navigationExtras);
          }
        }]);

        return AddressPage;
      }();

      _AddressPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
        }, {
          type: _services_registro_service__WEBPACK_IMPORTED_MODULE_5__.RegistroService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__.ClienteService
        }, {
          type: _services_endereco_service__WEBPACK_IMPORTED_MODULE_4__.EnderecoService
        }, {
          type: _services_card_service__WEBPACK_IMPORTED_MODULE_2__.CardService
        }];
      };

      _AddressPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-address',
        template: _raw_loader_address_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_address_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddressPage);
      /***/
    },

    /***/
    96965:
    /*!*************************************************!*\
      !*** ./src/app/pages/address/address.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  width: auto;\n  height: auto;\n}\n\nion-card-title {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  color: #080808;\n  text-align: length;\n  width: 75;\n  height: 75;\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n\nion-card-title {\n  font-family: \"Lucida Sans Regular\";\n  font-size: smaller;\n  color: #080808;\n  text-align: length;\n}\n\nion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: length;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\nion-content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nh6 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: left;\n  -moz-text-align-last: left;\n       text-align-last: left;\n  color: #0f0f0f;\n}\n\nh5 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: medium;\n  text-align: left;\n  -moz-text-align-last: left;\n       text-align-last: left;\n  color: #0f0f0f;\n}\n\nion-icon {\n  width: 20px;\n  height: 20px;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVFO0VBQ0UsMENBQUE7QUFDSjs7QUFFRTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO09BQUEscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtPQUFBLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSiIsImZpbGUiOiJhZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkICB7XG4gICAgd2lkdGg6IGF1dG87IFxuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gICAgdGV4dC1hbGlnbjogbGVuZ3RoOyBcbiAgICB3aWR0aDogNzU7IFxuICAgIGhlaWdodDogNzU7XG4gICAgfVxuICBcbiAgaW9uLWltZyB7XG4gICAgd2lkdGg6IGF1dG87IFxuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgY29sb3I6IHJnYig4LCA4LCA4KTtcbiAgICB0ZXh0LWFsaWduOiBsZW5ndGg7IFxuICB9XG4gIFxuICBpb24taGVhZGVyIHtcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gICAgdGV4dC1hbGlnbjogbGVuZ3RoOyBcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxOTEsIDIzMyk7XG4gIH1cblxuICBpb24tY29udGVudCB7ICBcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyMzksIDI1MCk7XG4gIH0gXG4gIFxuICBoNiB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGxlZnQ7IFxuICAgIGNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XG4gIH1cblxuICBoNSB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdGV4dC1hbGlnbi1sYXN0OiBsZWZ0OyBcbiAgICBjb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xuICB9XG4gIFxuICBpb24taWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7IFxuICAgIGhlaWdodDogMjBweDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIGNvbG9yOiByZ2IoMjQwLCAxOTEsIDIzMyk7XG4gIH1cbiJdfQ== */";
      /***/
    },

    /***/
    83822:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>address</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-card lines=\"none\">\n  <ion-card-header>\n    <ion-card-subtitle> <h5>Seu email: </h5> <h6>{{registro?.email}}</h6></ion-card-subtitle> \n    <ion-card-title> <h5>Seu nome: </h5> <h6>{{registro?.cliente?.name}}</h6></ion-card-title>\n    <ion-card-subtitle> <h5>Seu cpf: </h5> <h6>{{registro?.cliente?.cpf}}</h6></ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    <h6>Anteção: entregamos somente na região com com cep 68655-000 </h6> \n  </ion-card-content>\n</ion-card>\n\n<ion-card lines=\"none\">\n  <ion-card-header>\n    <ion-card-title> <h6> Endereço: {{endereco?.logradouro}}</h6></ion-card-title>\n    <ion-card-title> <h6>Número: {{endereco?.numero}}</h6></ion-card-title>\n    <ion-card-title> <h6>Complemento: {{endereco?.complemento}}</h6></ion-card-title>\n    <ion-card-title> <h6>Bairro: {{endereco?.bairro}}</h6></ion-card-title>\n    <ion-card-title> <h6>Cidade: {{endereco?.localidade}}</h6></ion-card-title>\n    <ion-card-title> <h6>Estado: {{endereco?.uf}}</h6></ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <h6>Anteção: entregamos somente na região com com cep 68655-000 </h6> \n  </ion-card-content>\n</ion-card>\n  <ion-button (click)=\"nextPage(endereco)\"color=\"light\" expand=\"block\">Avançar</ion-button>\n  <ion-button [routerLink]=\"['/dashboard/cart']\"color=\"light\" expand=\"block\">Voltar</ion-button>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_address_address_module_ts-es5.js.map