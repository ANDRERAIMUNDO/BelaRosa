(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_cashpayment_cashpayment_module_ts"], {
    /***/
    9459:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/cashpayment/cashpayment-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CashpaymentPageRoutingModule": function CashpaymentPageRoutingModule() {
          return (
            /* binding */
            _CashpaymentPageRoutingModule
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


      var _cashpayment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cashpayment.page */
      23245);

      var routes = [{
        path: '',
        component: _cashpayment_page__WEBPACK_IMPORTED_MODULE_0__.CashpaymentPage
      }];

      var _CashpaymentPageRoutingModule = function CashpaymentPageRoutingModule() {
        _classCallCheck(this, CashpaymentPageRoutingModule);
      };

      _CashpaymentPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CashpaymentPageRoutingModule);
      /***/
    },

    /***/
    2907:
    /*!*********************************************************!*\
      !*** ./src/app/pages/cashpayment/cashpayment.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CashpaymentPageModule": function CashpaymentPageModule() {
          return (
            /* binding */
            _CashpaymentPageModule
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


      var _cashpayment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cashpayment-routing.module */
      9459);
      /* harmony import */


      var _cashpayment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cashpayment.page */
      23245);

      var _CashpaymentPageModule = function CashpaymentPageModule() {
        _classCallCheck(this, CashpaymentPageModule);
      };

      _CashpaymentPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _cashpayment_routing_module__WEBPACK_IMPORTED_MODULE_0__.CashpaymentPageRoutingModule],
        declarations: [_cashpayment_page__WEBPACK_IMPORTED_MODULE_1__.CashpaymentPage]
      })], _CashpaymentPageModule);
      /***/
    },

    /***/
    23245:
    /*!*******************************************************!*\
      !*** ./src/app/pages/cashpayment/cashpayment.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CashpaymentPage": function CashpaymentPage() {
          return (
            /* binding */
            _CashpaymentPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_cashpayment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cashpayment.page.html */
      81094);
      /* harmony import */


      var _cashpayment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cashpayment.page.scss */
      75318);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/card.service */
      73671);
      /* harmony import */


      var src_app_services_endereco_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/endereco.service */
      61478);
      /* harmony import */


      var src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/pedido.service */
      93778);
      /* harmony import */


      var src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/registro.service */
      60023);
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/storage.service */
      71188);

      var _CashpaymentPage = /*#__PURE__*/function () {
        function CashpaymentPage(formBuilder, router, route, alertController, loadingController, pedidoService, cardService, storageService, registroService, enderecoService) {
          var _this = this;

          _classCallCheck(this, CashpaymentPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.route = route;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.pedidoService = pedidoService;
          this.cardService = cardService;
          this.storageService = storageService;
          this.registroService = registroService;
          this.enderecoService = enderecoService;
          this.button = false;
          this.route.queryParams.subscribe(function (params) {
            var getNav = _this.router.getCurrentNavigation();

            if (getNav.extras.state) {
              _this.pedido = getNav.extras.state.pedido;
            }
          });
        }

        _createClass(CashpaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.loadFormDate();
            this.transation_id = null;
            this.registroId = this.pedido.registro.id;
            this.cardItems = this.cardService.getCard().itens;
            var localUser = this.storageService.getLocalUser();

            if (localUser && localUser.email) {
              this.registroService.findById(this.registroId).subscribe(function (response) {
                _this2.registro = response;

                _this2.getEndereco();
              }, function (catchError) {
                console.log('algo deu errado');
              });
            }
          }
        }, {
          key: "loadFormDate",
          value: function loadFormDate() {
            this.formGroupDate = this.formBuilder.group({
              informacaoDeEntrega: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
              "@type": ["reservaDePedido"]
            });
          }
        }, {
          key: "getEndereco",
          value: function getEndereco() {
            var _this3 = this;

            this.enderecoService.findById(this.registroId).subscribe(function (response) {
              _this3.endereco = response;
            }, function (catchError) {
              if (catchError.status == 403) {
                _this3.router.navigate(['/address']);
              }
            });
          }
        }, {
          key: "checkout",
          value: function checkout() {
            var _this4 = this;

            this.button = true;
            this.sniper = "ok";
            this.pedido.pagamento = this.formGroupDate.value;
            this.pedidoService.insert(this.pedido).subscribe(function (response) {
              _this4.transation_id = _this4.extrairId(response.headers.get('location'));

              _this4.findById();

              _this4.cardService.createrOrClearCard();
            }, function (catchError) {
              if (catchError.status == 403) {
                _this4.errrorPresentAlert();
              }
            });
          }
        }, {
          key: "findById",
          value: function findById() {
            var _this5 = this;

            this.pedidoService.findById(this.transation_id).subscribe(function (response) {
              _this5.pedido = response;
            }, function (catchError) {
              if (catchError.status == 403) {
                _this5.errrorPresentAlert();
              }
            });
          }
        }, {
          key: "onChangeDataTime",
          value: function onChangeDataTime() {
            var informacaoDeEntrega = this.formGroupDate.get('informacaoDeEntrega').value;
            this.informacaoDeEntrega = informacaoDeEntrega;
          }
        }, {
          key: "onChangeTerm",
          value: function onChangeTerm() {
            var term = "ok";
            this.term = term;
          }
        }, {
          key: "total",
          value: function total() {
            return this.cardService.total();
          }
        }, {
          key: "extrairId",
          value: function extrairId(location) {
            var position = location.lastIndexOf('/');
            return location.substring(position + 1, location.length);
          }
        }, {
          key: "errrorPresentAlert",
          value: function errrorPresentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Atenção',
                        subHeader: 'Falha ao processar pagamento ou conexão internet falhou',
                        message: 'Você não será cobrado!',
                        buttons: ['Continuar']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      _context.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis = _context.sent;
                      role = _yield$alert$onDidDis.role;
                      console.log('onDidDismiss resolved with role', role);
                      this.router.navigate(['/dashboard/cart']);

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return CashpaymentPage;
      }();

      _CashpaymentPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
        }, {
          type: src_app_services_pedido_service__WEBPACK_IMPORTED_MODULE_4__.PedidoService
        }, {
          type: src_app_services_card_service__WEBPACK_IMPORTED_MODULE_2__.CardService
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService
        }, {
          type: src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_5__.RegistroService
        }, {
          type: src_app_services_endereco_service__WEBPACK_IMPORTED_MODULE_3__.EnderecoService
        }];
      };

      _CashpaymentPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-cashpayment',
        template: _raw_loader_cashpayment_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cashpayment_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CashpaymentPage);
      /***/
    },

    /***/
    75318:
    /*!*********************************************************!*\
      !*** ./src/app/pages/cashpayment/cashpayment.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: length;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\ndiv {\n  text-align: center;\n}\n\nion-icon {\n  width: 30px;\n  height: 30px;\n}\n\n#container ion-card {\n  width: auto;\n  height: auto;\n}\n\nion-card-title {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  color: #080808;\n  text-align: center;\n  width: 75;\n  height: 75;\n}\n\nimg {\n  height: 6vh !important;\n  width: 6 !important;\n  align-items: center;\n}\n\ndiv-img {\n  width: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nion-card-title {\n  font-family: \"Lucida Sans Regular\";\n  font-size: smaller;\n  color: #080808;\n  text-align: center;\n}\n\nion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: center;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\nion-content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\n.ion-text-center {\n  text-align: center;\n}\n\nh6 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: medium;\n  text-align: center;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  color: #0f0f0f;\n}\n\nh5 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  overflow: auto;\n  left: 100px;\n  right: 100px;\n  color: #0f0f0f;\n}\n\nion-icon {\n  width: 20px;\n  height: 20px;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2hwYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNFO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBRUU7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVFO0VBQ0UsMENBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtPQUFBLHVCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSiIsImZpbGUiOiJjYXNocGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIGlvbi1oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgY29sb3I6IHJnYig4LCA4LCA4KTtcbiAgICB0ZXh0LWFsaWduOiBsZW5ndGg7IFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE5MSwgMjMzKTtcbiAgfVxuICBcbiAgZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgd2lkdGg6IDMwcHg7IFxuICAgIGhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBpb24tY2FyZCAge1xuICAgIHdpZHRoOiBhdXRvOyBcbiAgICBoZWlnaHQ6IGF1dG87XG4gIFxuICB9XG4gIFxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgY29sb3I6IHJnYig4LCA4LCA4KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIHdpZHRoOiA3NTsgXG4gICAgaGVpZ2h0OiA3NTtcbiAgICB9XG4gIFxuICBpbWcge1xuICAgIGhlaWdodDogNnZoICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDYgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgZGl2LWltZyB7XG4gICAgd2lkdGg6IGF1dG87IFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gIH1cbiAgXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgfVxuICBcbiAgaW9uLWhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICBjb2xvcjogcmdiKDgsIDgsIDgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xuICB9XG4gIFxuICBpb24tY29udGVudCB7ICBcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyMzksIDI1MCk7XG4gIH0gXG4gIFxuICAuaW9uLXRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBoNiB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjsgXG4gICAgY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcbiAgfVxuICBcbiAgaDUge1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbGVmdDogMTAwcHg7XG4gICAgcmlnaHQ6IDEwMHB4O1xuICAgIGNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XG4gIH1cbiAgXG4gIGlvbi1pY29uIHtcbiAgICB3aWR0aDogMjBweDsgXG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICBpb24tYnV0dG9uIHtcbiAgICBjb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xuICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    81094:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cashpayment/cashpayment.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *ngIf=\"!transation_id\">\n  <ion-toolbar>\n    <ion-title>Finalizar Pedido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header *ngIf=\"transation_id\">\n  <ion-toolbar>\n    <ion-title>Pedido finalizado</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!transation_id\" id=\"container\">\n  <div class=\"div-img\"> <strong> Iformações adicionais</strong> </div>\n  <h5>Iformações:</h5>\n    <ion-item>\n      <p>Cliente: {{registro?.cliente?.name}} </p>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <p>Email: {{registro?.email}} </p>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <p>Phone: {{registro?.cliente.phone}} </p>\n    </ion-item>\n  <h5>Endereço:</h5>\n      <ion-item>\n      <p>Localidade: {{endereco?.logradouro}}, {{endereco?.numero}}, Bairro: {{endereco?.bairro}}, Ref: {{endereco?.complemento}}, {{endereco?.cep}} - {{endereco?.localidade}} - {{endereco?.uf}}</p>\n      </ion-item>\n\n    <ion-list>\n      <h5>Pedido(s): </h5>\n        <ion-item lines=\"full\" *ngFor=\"let item of cardItems\">\n          <ion-label> {{item.quantidade}} {{item.produto.name}} : R{{item.produto.price | currency}}</ion-label>\n        </ion-item>\n    </ion-list>\n\n  <strong>Total: </strong> <ion-label> R{{total() | currency}}</ion-label>\n\n  <div>\n    <ion-checkbox color=\"primary\" (ionChange)=\"onChangeTerm($event)\" > </ion-checkbox> <ion-label> Irei retirar na loja dentro do periodo informado. </ion-label>\n  </div>\n  <ion-item></ion-item>\n  <div class=\"div-img\"> <strong> Data de retirada do pedido</strong>\n    <form [formGroup]=\"formGroupDate\">\n      <ion-label class=\"ion-text-center\" position=\"floating\">  <ion-icon name=\"calendar\"></ion-icon> Click aqui <ion-icon name=\"arrow-down\"></ion-icon> </ion-label>\n        <div class=\"div-img\">\n          <ion-item lines=\"full\">\n            <ion-input slot=\"start\" locale=\"pt-BR\" id=\"date\" type=\"date\" formControlName=\"informacaoDeEntrega\" value=\"2032-12-01\" (ionChange)=\"onChangeDataTime($event)\" required > </ion-input>\n          </ion-item>\n        </div>\n        <p *ngIf=\"formGroupDate.controls.informacaoDeEntrega.dirty && formGroupDate.controls.informacaoDeEntrega.errors\" margin-left>Selecinar data. </p>    \n    </form>\n  </div>   \n\n  <ion-button disabled = \"{{button}}\" *ngIf =\"term && informacaoDeEntrega\" type=\"submit\" color=\"light\" expand=\"block\" (click)=\"checkout()\">\n    <ion-spinner *ngIf=\"sniper\" color=\"secondary\" > </ion-spinner>\n    <p *ngIf=\"sniper\"> aguarde ...</p>\n    <p *ngIf=\"!sniper\">Finalizar pedido</p>\n  </ion-button>\n  <br>\n  <ion-button [routerLink]=\"['/dashboard/index']\" color=\"light\" expand=\"block\">Voltar</ion-button>\n  <a> Retire na loja, você pode pagar avista, via Pix, nos cartões de credito ou debido. </a>\n  <div class=\"div-img\">\n    <ion-item></ion-item>\n    <img src=\"../../../assets/icon/visa.png\"/>\n    <img src=\"../../../assets/icon/master-card.png\"/>\n    <img src=\"../../../assets/icon/elo.png\"/>\n    <img src=\"../../../assets/icon/american-express.png\"/>\n    <ion-item></ion-item>\n    <img src=\"../../../assets/icon/hipercard.png\"/>\n    <img src=\"../../../assets/icon/mestro.png\"/>\n    <img src=\"../../../assets/icon/pix.png\"/>\n    <img src=\"../../../assets/icon/maquina-de-cartao-de-credito.png\"/>\n  </div>\n\n</ion-content>\n\n<ion-content *ngIf=\"transation_id\">\n  <div  class=\"div-img\">\n\n    <h5>A BelaRosa agradece sua preferência. </h5>\n    <h5>Tudo certo, estamos separando seu pedido.</h5>\n \n  <a> Retire na loja, você pode pagar avista, via Pix, nos cartões de credito ou debido. </a>\n  <div class=\"div-img\">\n    <ion-item></ion-item>\n    <img src=\"../../../assets/icon/visa.png\"/>\n    <img src=\"../../../assets/icon/master-card.png\"/>\n    <img src=\"../../../assets/icon/elo.png\"/>\n    <img src=\"../../../assets/icon/american-express.png\"/>\n    <ion-item></ion-item>\n    <img src=\"../../../assets/icon/hipercard.png\"/>\n    <img src=\"../../../assets/icon/mestro.png\"/>\n    <img src=\"../../../assets/icon/pix.png\"/>\n    <img src=\"../../../assets/icon/maquina-de-cartao-de-credito.png\"/>\n  </div>\n    <ion-button [routerLink]=\"['/dashboard/index']\" color=\"light\" block outline expand=\"block\" > Inicio </ion-button>\n</div> \n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cashpayment_cashpayment_module_ts-es5.js.map