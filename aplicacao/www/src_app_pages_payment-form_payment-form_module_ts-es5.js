(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_payment-form_payment-form_module_ts"], {
    /***/
    96938:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/payment-form/payment-form-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentPageRoutingModule": function PaymentPageRoutingModule() {
          return (
            /* binding */
            _PaymentPageRoutingModule
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


      var _payment_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./payment-form.page */
      23112);

      var routes = [{
        path: '',
        component: _payment_form_page__WEBPACK_IMPORTED_MODULE_0__.PaymentFormPage
      }, {
        path: 'pagamentocartao',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_pagamentocartao_pagamentocartao_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../pagamentocartao/pagamentocartao.module */
          94404)).then(function (m) {
            return m.PagamentocartaoPageModule;
          });
        }
      }, {
        path: 'pagamentopix',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_pagamentopix_pagamentopix_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../pagamentopix/pagamentopix.module */
          64851)).then(function (m) {
            return m.PagamentopixPageModule;
          });
        }
      }, {
        path: 'cashpayment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_cashpayment_cashpayment_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../cashpayment/cashpayment.module */
          2907)).then(function (m) {
            return m.CashpaymentPageModule;
          });
        }
      }, {
        path: 'order-confirmation-page',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_order-confirmation-page_order-confirmation-page_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ../order-confirmation-page/order-confirmation-page.module */
          60268)).then(function (m) {
            return m.OrderConfirmationPagePageModule;
          });
        }
      }];

      var _PaymentPageRoutingModule = function PaymentPageRoutingModule() {
        _classCallCheck(this, PaymentPageRoutingModule);
      };

      _PaymentPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PaymentPageRoutingModule);
      /***/
    },

    /***/
    34287:
    /*!***********************************************************!*\
      !*** ./src/app/pages/payment-form/payment-form.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentFormPageModule": function PaymentFormPageModule() {
          return (
            /* binding */
            _PaymentFormPageModule
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


      var _payment_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./payment-form-routing.module */
      96938);
      /* harmony import */


      var _payment_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./payment-form.page */
      23112);

      var _PaymentFormPageModule = function PaymentFormPageModule() {
        _classCallCheck(this, PaymentFormPageModule);
      };

      _PaymentFormPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _payment_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule],
        declarations: [_payment_form_page__WEBPACK_IMPORTED_MODULE_1__.PaymentFormPage]
      })], _PaymentFormPageModule);
      /***/
    },

    /***/
    23112:
    /*!*********************************************************!*\
      !*** ./src/app/pages/payment-form/payment-form.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentFormPage": function PaymentFormPage() {
          return (
            /* binding */
            _PaymentFormPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_payment_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./payment-form.page.html */
      71426);
      /* harmony import */


      var _payment_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./payment-form.page.scss */
      62353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_registro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/registro.service */
      60023);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/storage.service */
      71188);

      var _PaymentFormPage = /*#__PURE__*/function () {
        function PaymentFormPage(storageService, registroService, router, route, loadingController) {
          var _this = this;

          _classCallCheck(this, PaymentFormPage);

          this.storageService = storageService;
          this.registroService = registroService;
          this.router = router;
          this.route = route;
          this.loadingController = loadingController;
          this.route.queryParams.subscribe(function (params) {
            var getNav = _this.router.getCurrentNavigation();

            if (getNav.extras.state) {
              _this.pedido = getNav.extras.state.pedido;
            }
          });
        }

        _createClass(PaymentFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadData();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this2 = this;

            var localUser = this.storageService.getLocalUser();

            if (localUser && localUser.email) {
              this.registroService.findByEmail(localUser.email).subscribe(function (response) {
                _this2.registro = response;
              }, function (catchError) {
                if (catchError.status == 403) {
                  _this2.router.navigate(['/address']);
                }
              });
            }
          }
        }, {
          key: "pagamentoCartao",
          value: function pagamentoCartao() {
            var navigationExtras = {
              state: {
                pedido: this.pedido
              }
            };
            this.router.navigate(['/dashboard/payment-form/pagamentocartao'], navigationExtras);
          }
        }, {
          key: "loand",
          value: function loand() {
            this.presentLoading();
          }
        }, {
          key: "pagamentoPix",
          value: function pagamentoPix() {
            var navigationExtras = {
              state: {
                pedido: this.pedido
              }
            };
            this.router.navigate(['/dashboard/payment-form/pagamentopix'], navigationExtras);
          }
        }, {
          key: "pagamentoVistaLoja",
          value: function pagamentoVistaLoja() {
            var navigationExtras = {
              state: {
                pedido: this.pedido
              }
            };
            this.router.navigateByUrl('/dashboard/payment-form/cashpayment', navigationExtras);
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Aguarde...',
                        keyboardClose: true,
                        spinner: "lines-small",
                        cssClass: 'my-custom-class',
                        duration: 5000
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      _context.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return PaymentFormPage;
      }();

      _PaymentFormPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
        }, {
          type: _services_registro_service__WEBPACK_IMPORTED_MODULE_2__.RegistroService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
        }];
      };

      _PaymentFormPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-payment',
        template: _raw_loader_payment_form_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_payment_form_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PaymentFormPage);
      /***/
    },

    /***/
    62353:
    /*!***********************************************************!*\
      !*** ./src/app/pages/payment-form/payment-form.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: center;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\nion-content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nion-list {\n  font-feature-settings: \"sups\";\n  font-variant-position: super;\n}\n\n.ion-text-center {\n  text-align: center;\n}\n\nion-card-title {\n  font-family: \"Lucida Sans Regular\";\n  font-size: smaller;\n  color: #080808;\n  text-align: center;\n}\n\nh5 {\n  color: #080808;\n  font-style: oblique;\n}\n\nh6 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  color: #0f0f0f;\n}\n\nh1 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  color: #0f0f0f;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFRTtFQUNFLDBDQUFBO0FBQ0o7O0FBRUU7RUFDRSw2QkFBQTtFQUFBLDRCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtPQUFBLHVCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7T0FBQSx1QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSiIsImZpbGUiOiJwYXltZW50LWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICBjb2xvcjogcmdiKDgsIDgsIDgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xuICB9XG5cbiAgaW9uLWNvbnRlbnQgeyAgXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjM5LCAyNTApO1xuICB9IFxuXG4gIGlvbi1saXN0e1xuICAgIGZvbnQtdmFyaWFudC1wb3NpdGlvbjogc3VwZXI7XG4gIH1cbiAgLmlvbi10ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICBjb2xvcjogcmdiKDgsIDgsIDgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gIH1cbiAgXG5cbiAgaDUge1xuICAgIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbn1cblxuICBoNiB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyOyBcbiAgICBjb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjsgXG4gICAgY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcbiAgfVxuICBcbiAgaW9uLWJ1dHRvbiB7XG4gICAgY29sb3I6IHJnYigyNDAsIDE5MSwgMjMzKTtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    71426:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-form/payment-form.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Formas de Pagamento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-label> \n      <h6>Pagamento com cartão de credito</h6>\n      <br>\n      <ion-button color=\"light\"  expand=\"block\" (click)=\"pagamentoCartao(endereco)\" >Cartão de credito</ion-button>\n    </ion-label>\n\n    <ion-label> \n      <h6>Pagamento com PIX</h6>\n      <br>\n      <ion-button color=\"light\"(click)=\"pagamentoPix()\" expand=\"block\">Pix</ion-button>\n    </ion-label>\n\n    <ion-label> \n      <h6>Pagamento a vista</h6>\n      <br>\n      <ion-button color=\"light\" (click)=\"pagamentoVistaLoja()\"  expand=\"block\">Pagamento a vista retirar na loja</ion-button>\n    </ion-label>\n  \n    <ion-card-content>\n      Escolha a forma de pagamento, lembre-se entregas somente para região\n      com cep <p>68655-000</p>.\n    </ion-card-content>\n  </ion-card>\n\n<ion-button [routerLink]=\"['/dashboard/cards']\"color=\"light\" expand=\"block\">Voltar</ion-button>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_payment-form_payment-form_module_ts-es5.js.map