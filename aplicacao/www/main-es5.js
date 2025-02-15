(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/home/home.module */
          57994)).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/login/login.module */
          21053)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'registration',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_registration_registration_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/registration/registration.module */
          50015)).then(function (m) {
            return m.RegistrationPageModule;
          });
        }
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/forgot-password/forgot-password.module */
          65638)).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        }
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/dashboard/dashboard.module */
          71659)).then(function (m) {
            return m.DashboardPageModule;
          });
        }
      }, {
        path: 'sigup',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_sigup_sigup_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/sigup/sigup.module */
          82802)).then(function (m) {
            return m.SigupPageModule;
          });
        }
      }, {
        path: 'registration-authentication',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_registration-authentication_registration-authentication_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/registration-authentication/registration-authentication.module */
          84051)).then(function (m) {
            return m.RegistrationAuthenticationPageModule;
          });
        }
      }, {
        path: 'circle-login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_circle-login_circle-login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/circle-login/circle-login.module */
          94111)).then(function (m) {
            return m.CircleLoginPageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      _AppComponent.ctorParameters = function () {
        return [];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _interceptors_httpError_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./interceptors/httpError.interceptor */
      16540);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/auth.service */
      37556);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/storage.service */
      71188);
      /* harmony import */


      var _services_categoria_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/categoria.service */
      1875);
      /* harmony import */


      var _services_registro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/registro.service */
      60023);
      /* harmony import */


      var _interceptors_httpAuth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./interceptors/httpAuth.interceptor */
      23469);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_cliente_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/cliente.service */
      70932);
      /* harmony import */


      var _services_produto_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/produto.service */
      69885);
      /* harmony import */


      var _services_card_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/card.service */
      73671);
      /* harmony import */


      var _services_endereco_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./services/endereco.service */
      61478);
      /* harmony import */


      var _services_pedido_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/pedido.service */
      93778);
      /* harmony import */


      var _services_descricao_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/descricao.service */
      89709);
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/photo.service */
      61957);
      /* harmony import */


      var _services_ImageUtilService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/ ImageUtilService */
      62483);
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/service-worker */
      72249);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../environments/environment */
      92340);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var ngx_mercadopago__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ngx-mercadopago */
      68160);
      /* harmony import */


      var _services_mp_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/mp.service */
      5435);
      /* harmony import */


      var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/clipboard/ngx */
      69390);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_21__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__.ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__.environment.production
        }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__.ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__.environment.production
        }), ngx_mercadopago__WEBPACK_IMPORTED_MODULE_27__.NgxMercadopagoModule.forRoot({
          publishKey: 'TEST-1ce60a51-a522-46a6-ac55-f1858b6699ff',
          pathSDK: 'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'
        })],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonicRouteStrategy
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HTTP_INTERCEPTORS,
          useClass: _interceptors_httpError_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorInterceptor,
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HTTP_INTERCEPTORS,
          useClass: _interceptors_httpAuth_interceptor__WEBPACK_IMPORTED_MODULE_7__.httpAuthInterceptor,
          multi: true
        }, {
          provide: Window,
          useValue: window
        }, _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService, _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService, _services_categoria_service__WEBPACK_IMPORTED_MODULE_5__.CategoriaService, _services_registro_service__WEBPACK_IMPORTED_MODULE_6__.RegistroService, _services_cliente_service__WEBPACK_IMPORTED_MODULE_8__.ClienteService, _services_produto_service__WEBPACK_IMPORTED_MODULE_9__.ProdutoService, _services_card_service__WEBPACK_IMPORTED_MODULE_10__.CardService, _services_endereco_service__WEBPACK_IMPORTED_MODULE_11__.EnderecoService, _services_pedido_service__WEBPACK_IMPORTED_MODULE_12__.PedidoService, _services_descricao_service__WEBPACK_IMPORTED_MODULE_13__.DescricaoService, _services_photo_service__WEBPACK_IMPORTED_MODULE_14__.PhotoService, _services_ImageUtilService__WEBPACK_IMPORTED_MODULE_15__.ImageUtilService, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__.Camera, _services_mp_service__WEBPACK_IMPORTED_MODULE_18__.MpService, _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_19__.Clipboard],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    23469:
    /*!******************************************************!*\
      !*** ./src/app/interceptors/httpAuth.interceptor.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "httpAuthInterceptor": function httpAuthInterceptor() {
          return (
            /* binding */
            _httpAuthInterceptor
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


      var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/config/config */
      64573);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/storage.service */
      71188);

      var _httpAuthInterceptor = /*#__PURE__*/function () {
        function httpAuthInterceptor(storageService) {
          _classCallCheck(this, httpAuthInterceptor);

          this.storageService = storageService;
        }

        _createClass(httpAuthInterceptor, [{
          key: "intercept",
          value: function intercept(httpRquest, next) {
            var token = src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl.length;
            var requestToApi = httpRquest.url.substring(0) == src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl;
            var localUser = this.storageService.getLocalUser();

            if (localUser && requestToApi) {
              var authHttpRequest = httpRquest.clone({
                headers: httpRquest.headers.set('Authorization', 'Bearer' + localUser.token)
              });
              return next.handle(authHttpRequest);
            } else {
              return next.handle(httpRquest);
            }
          }
        }]);

        return httpAuthInterceptor;
      }();

      _httpAuthInterceptor.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
        }];
      };

      _httpAuthInterceptor = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _httpAuthInterceptor);
      /***/
    },

    /***/
    16540:
    /*!*******************************************************!*\
      !*** ./src/app/interceptors/httpError.interceptor.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ErrorInterceptor": function ErrorInterceptor() {
          return (
            /* binding */
            _ErrorInterceptor
          );
        },

        /* harmony export */
        "ErrorInterceptorProvider": function ErrorInterceptorProvider() {
          return (
            /* binding */
            _ErrorInterceptorProvider
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/storage.service */
      71188);

      var _ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(storageService, alertController, router) {
          _classCallCheck(this, ErrorInterceptor);

          this.storageService = storageService;
          this.alertController = alertController;
          this.router = router;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(httpRquest, next) {
            var _this = this;

            return next.handle(httpRquest).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              var erroMsg = '';

              if (error.error instanceof ErrorEvent) {
                erroMsg = "Error: ".concat(error.error.message);
              } else {
                erroMsg = "Error Code: ".concat(error.status, ", Message: ").concat(error.message);
              }

              switch (error.status) {
                case 403:
                  _this.handle403();

                  break;

                case 401:
                  _this.handle401();

                  break;

                case 422:
                  _this.handle422();

                  break;

                case 400:
                  _this.handle400();

                  break;

                case 500:
                  _this.handle500();

                  break;

                case 0:
                  _this.handle0();

                  break;

                default:
                  _this.handleDefaultError(error);

              }

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(erroMsg);
            }));
          }
        }, {
          key: "handle403",
          value: function handle403() {
            this.storageService.getLocalUser();
          }
        }, {
          key: "handle401",
          value: function handle401() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        subHeader: 'Atenção!',
                        message: 'Email ou senha podem está errado. ',
                        buttons: ['OK']
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
                      console.log(role);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "handle422",
          value: function handle422() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert, _yield$alert$onDidDis2, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        subHeader: 'Erro ao validar. ',
                        message: 'Verique os campos, obrigatorio',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                      _context2.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis2 = _context2.sent;
                      role = _yield$alert$onDidDis2.role;
                      console.log(role);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "handle400",
          value: function handle400() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert, _yield$alert$onDidDis3, role;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        subHeader: 'ops!',
                        message: 'Ação não permitida. ',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                      _context3.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis3 = _context3.sent;
                      role = _yield$alert$onDidDis3.role;
                      console.log(role);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "handle500",
          value: function handle500() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert, _yield$alert$onDidDis4, role;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        subHeader: 'Ops! Algo inesperado aconteceu',
                        message: 'Para sua segurança você seja redirecinado para pagina inicial',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                      _context4.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis4 = _context4.sent;
                      role = _yield$alert$onDidDis4.role;
                      console.log(role);
                      this.router.navigate(['/home']);

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "handle0",
          value: function handle0() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert, _yield$alert$onDidDis5, role;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        subHeader: 'Ops!',
                        message: 'Parece que algo deu errado.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                      _context5.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis5 = _context5.sent;
                      role = _yield$alert$onDidDis5.role;
                      console.log(role);
                      this.router.navigate(['/dashboard/circle-login']);

                    case 11:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "handleDefaultError",
          value: function handleDefaultError(error) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert, _yield$alert$onDidDis6, role;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        subHeader: 'Erro: ' + error.status + ': ' + error.error,
                        message: error.message,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                      _context6.next = 7;
                      return alert.onDidDismiss();

                    case 7:
                      _yield$alert$onDidDis6 = _context6.sent;
                      role = _yield$alert$onDidDis6.role;
                      console.log(role);

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "listErrors",
          value: function listErrors(messages) {
            var s = '';

            for (var i = 0; i < messages.length; i++) {
              s = s + '<p><strong>' + messages[i].fieldName + "</strong>: " + messages[i].messagem + '</p>';
            }

            return s;
          }
        }]);

        return ErrorInterceptor;
      }();

      _ErrorInterceptor.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }];
      };

      _ErrorInterceptor = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], _ErrorInterceptor);
      var _ErrorInterceptorProvider = {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
        useClass: _ErrorInterceptor,
        multi: true
      };
      /***/
    },

    /***/
    62483:
    /*!***********************************************!*\
      !*** ./src/app/services/ ImageUtilService.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImageUtilService": function ImageUtilService() {
          return (
            /* binding */
            _ImageUtilService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ImageUtilService = /*#__PURE__*/function () {
        function ImageUtilService() {
          _classCallCheck(this, ImageUtilService);
        }

        _createClass(ImageUtilService, [{
          key: "dataUriToBlob",
          value: function dataUriToBlob(dataURI) {
            var byteString = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);

            for (var i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ab], {
              type: mimeString
            });
          }
        }]);

        return ImageUtilService;
      }();

      _ImageUtilService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], _ImageUtilService);
      /***/
    },

    /***/
    37556:
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      6686);
      /* harmony import */


      var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/config/config */
      64573);
      /* harmony import */


      var _card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./card.service */
      73671);
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./storage.service */
      71188);

      var _AuthService = /*#__PURE__*/function () {
        function AuthService(httpClient, storageService, cardService) {
          _classCallCheck(this, AuthService);

          this.httpClient = httpClient;
          this.storageService = storageService;
          this.cardService = cardService;
          this.jwtHelp = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService();
        }

        _createClass(AuthService, [{
          key: "authetocation",
          value: function authetocation(credenciais) {
            return this.httpClient.post("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/login"), credenciais, {
              observe: 'response',
              responseType: 'text'
            });
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.post("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/0auth/refresh_token"), {}, {
              'headers': authHeader,
              observe: 'response',
              responseType: 'text'
            });
          }
        }, {
          key: "sendNewPassword",
          value: function sendNewPassword(newPass) {
            return this.httpClient.post("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/0auth/forgot"), newPass, {
              observe: 'response',
              responseType: 'text'
            });
          }
        }, {
          key: "sucessLogin",
          value: function sucessLogin(authorizationValue) {
            var tok = authorizationValue.substring(7);
            var user = {
              token: tok,
              email: this.jwtHelp.decodeToken(tok).sub
            };
            this.storageService.setLocalUser(user);
            this.cardService.createrOrClearCard();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.storageService.setLocalUser(null);
          }
        }]);

        return AuthService;
      }();

      _AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService
        }, {
          type: _card_service__WEBPACK_IMPORTED_MODULE_1__.CardService
        }];
      };

      _AuthService = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], _AuthService);
      /***/
    },

    /***/
    73671:
    /*!******************************************!*\
      !*** ./src/app/services/card.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CardService": function CardService() {
          return (
            /* binding */
            _CardService
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


      var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./storage.service */
      71188);

      var _CardService = /*#__PURE__*/function () {
        function CardService(storageService) {
          _classCallCheck(this, CardService);

          this.storageService = storageService;
        }

        _createClass(CardService, [{
          key: "createrOrClearCard",
          value: function createrOrClearCard() {
            var card = {
              itens: []
            };
            this.storageService.setCard(card);
            return card;
          }
        }, {
          key: "getCard",
          value: function getCard() {
            var card = this.storageService.getCard();

            if (card == null) {
              card = this.createrOrClearCard();
            }

            return card;
          }
        }, {
          key: "addProduto",
          value: function addProduto(produto) {
            var card = this.getCard();
            var position = card.itens.findIndex(function (x) {
              return x.produto.id == produto.id;
            });

            if (position == -1) {
              card.itens.push({
                quantidade: 1,
                produto: produto
              });
            }

            this.storageService.setCard(card);
            return card;
          }
        }, {
          key: "removerProduto",
          value: function removerProduto(produto) {
            var card = this.getCard();
            var position = card.itens.findIndex(function (x) {
              return x.produto.id == produto.id;
            });

            if (position != -1) {
              card.itens.splice(position, 1);
            }

            this.storageService.setCard(card);
            return card;
          }
        }, {
          key: "addQuantidade",
          value: function addQuantidade(produto) {
            var card = this.getCard();
            var position = card.itens.findIndex(function (x) {
              return x.produto.id == produto.id;
            });

            if (position != -1) {
              card.itens[position].quantidade++;
            }

            this.storageService.setCard(card);
            return card;
          }
        }, {
          key: "removerQuantidade",
          value: function removerQuantidade(produto) {
            var card = this.getCard();
            var position = card.itens.findIndex(function (x) {
              return x.produto.id == produto.id;
            });

            if (position != -1) {
              card.itens[position].quantidade--;

              if (card.itens[position].quantidade < 1) {
                card = this.removerProduto(produto);
              }
            }

            this.storageService.setCard(card);
            return card;
          }
        }, {
          key: "total",
          value: function total() {
            var card = this.getCard();
            var sum = 0;

            for (var i = 0; i < card.itens.length; i++) {
              sum += card.itens[i].produto.price * card.itens[i].quantidade;
            }

            return sum;
          }
        }]);

        return CardService;
      }();

      _CardService.ctorParameters = function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService
        }];
      };

      _CardService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _CardService);
      /***/
    },

    /***/
    1875:
    /*!***********************************************!*\
      !*** ./src/app/services/categoria.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriaService": function CategoriaService() {
          return (
            /* binding */
            _CategoriaService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/config/config */
      64573);

      var _CategoriaService = /*#__PURE__*/function () {
        function CategoriaService(http) {
          _classCallCheck(this, CategoriaService);

          this.http = http;
        }

        _createClass(CategoriaService, [{
          key: "findById",
          value: function findById(id) {
            return this.http.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/categorias/").concat(id));
          }
        }, {
          key: "findAll",
          value: function findAll() {
            return this.http.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/categorias"));
          }
        }]);

        return CategoriaService;
      }();

      _CategoriaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _CategoriaService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _CategoriaService);
      /***/
    },

    /***/
    70932:
    /*!*********************************************!*\
      !*** ./src/app/services/cliente.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClienteService": function ClienteService() {
          return (
            /* binding */
            _ClienteService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/config/config */
      64573);
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./storage.service */
      71188);

      var _ClienteService = /*#__PURE__*/function () {
        function ClienteService(httpClient, storageService) {
          _classCallCheck(this, ClienteService);

          this.httpClient = httpClient;
          this.storageService = storageService;
        }

        _createClass(ClienteService, [{
          key: "findById",
          value: function findById(id) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/clientes/").concat(id), {
              'headers': authHeader
            });
          }
        }, {
          key: "insert",
          value: function insert(obj) {
            return this.httpClient.post("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/clientes"), obj, {
              observe: 'response',
              responseType: 'text'
            });
          }
        }, {
          key: "update",
          value: function update(id, ClienteUpdateDTO) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.put("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/clientes/").concat(id), ClienteUpdateDTO, {
              'headers': authHeader
            });
          }
        }, {
          key: "viaCep",
          value: function viaCep(cep) {
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.viaCepUrl, "/").concat(cep, "/json"));
          }
        }]);

        return ClienteService;
      }();

      _ClienteService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
        }];
      };

      _ClienteService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], _ClienteService); //https://viacep.com.br/ws/66123120/json/

      /***/
    },

    /***/
    89709:
    /*!***********************************************!*\
      !*** ./src/app/services/descricao.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DescricaoService": function DescricaoService() {
          return (
            /* binding */
            _DescricaoService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/config/config */
      64573);

      var _DescricaoService = /*#__PURE__*/function () {
        function DescricaoService(http) {
          _classCallCheck(this, DescricaoService);

          this.http = http;
        }

        _createClass(DescricaoService, [{
          key: "findById",
          value: function findById(id) {
            return this.http.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/descricoes/").concat(id));
          }
        }]);

        return DescricaoService;
      }();

      _DescricaoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _DescricaoService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _DescricaoService);
      /***/
    },

    /***/
    61478:
    /*!**********************************************!*\
      !*** ./src/app/services/endereco.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnderecoService": function EnderecoService() {
          return (
            /* binding */
            _EnderecoService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/config/config */
      64573);
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./storage.service */
      71188);

      var _EnderecoService = /*#__PURE__*/function () {
        function EnderecoService(httpClient, storageService) {
          _classCallCheck(this, EnderecoService);

          this.httpClient = httpClient;
          this.storageService = storageService;
        }

        _createClass(EnderecoService, [{
          key: "findById",
          value: function findById(id) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/enderecos/").concat(id), {
              'headers': authHeader
            });
          }
        }, {
          key: "update",
          value: function update(id, EnderecoUpdateDTO) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.put("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/enderecos/").concat(id), EnderecoUpdateDTO, {
              'headers': authHeader
            });
          }
        }]);

        return EnderecoService;
      }();

      _EnderecoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
        }];
      };

      _EnderecoService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], _EnderecoService);
      /***/
    },

    /***/
    5435:
    /*!****************************************!*\
      !*** ./src/app/services/mp.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MpService": function MpService() {
          return (
            /* binding */
            _MpService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/config/config */
      64573);
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./storage.service */
      71188);

      var _MpService = /*#__PURE__*/function () {
        function MpService(httpClient, storageService) {
          _classCallCheck(this, MpService);

          this.httpClient = httpClient;
          this.storageService = storageService;
        }

        _createClass(MpService, [{
          key: "insert",
          value: function insert(obj) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.post("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/process_payment/"), obj, {
              'headers': authHeader,
              observe: 'response',
              responseType: 'text'
            });
          }
        }, {
          key: "pix",
          value: function pix(obj) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.post("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/pix_process_payment/"), obj, {
              'headers': authHeader,
              observe: 'response',
              responseType: 'text'
            });
          }
        }, {
          key: "findById",
          value: function findById(id) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/process_payment/statuspayment/").concat(id), {
              'headers': authHeader
            });
          }
        }, {
          key: "pixFindById",
          value: function pixFindById(id) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/pix_process_payment/").concat(id), {
              'headers': authHeader
            });
          }
        }, {
          key: "findAll",
          value: function findAll() {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/process_payment/statuspayment/all"), {
              'headers': authHeader
            });
          }
        }]);

        return MpService;
      }();

      _MpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
        }];
      };

      _MpService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], _MpService);
      /***/
    },

    /***/
    93778:
    /*!********************************************!*\
      !*** ./src/app/services/pedido.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PedidoService": function PedidoService() {
          return (
            /* binding */
            _PedidoService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/config/config */
      64573);
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./storage.service */
      71188);

      var _PedidoService = /*#__PURE__*/function () {
        function PedidoService(httpClient, storageService) {
          _classCallCheck(this, PedidoService);

          this.httpClient = httpClient;
          this.storageService = storageService;
        }

        _createClass(PedidoService, [{
          key: "findById",
          value: function findById(id) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/pedidos/").concat(id), {
              'headers': authHeader
            });
          }
        }, {
          key: "findAll",
          value: function findAll() {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/pedidos"), {
              'headers': authHeader
            });
          }
        }, {
          key: "searchAll",
          value: function searchAll(name) {
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var linesPerPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/pedidos/?name=").concat(name, "&page=").concat(page, "&linesPerPage=").concat(linesPerPage), {
              'headers': authHeader
            });
          }
        }, {
          key: "get",
          value: function get(name) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/pedidos/?name=").concat(name), {
              'headers': authHeader
            });
          }
        }, {
          key: "insert",
          value: function insert(obj) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.post("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/pedidos"), obj, {
              'headers': authHeader,
              observe: 'response',
              responseType: 'text'
            });
          }
        }]);

        return PedidoService;
      }();

      _PedidoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
        }];
      };

      _PedidoService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], _PedidoService);
      /***/
    },

    /***/
    61957:
    /*!*******************************************!*\
      !*** ./src/app/services/photo.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PhotoService": function PhotoService() {
          return (
            /* binding */
            _PhotoService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ImageUtilService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ ImageUtilService */
      62483);
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./storage.service */
      71188);
      /* harmony import */


      var src_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/config/config */
      64573);

      var _PhotoService = /*#__PURE__*/function () {
        function PhotoService(http, storageService, imageUtilService) {
          _classCallCheck(this, PhotoService);

          this.http = http;
          this.storageService = storageService;
          this.imageUtilService = imageUtilService;
        }

        _createClass(PhotoService, [{
          key: "getImageFromBucket",
          value: function getImageFromBucket(id) {
            var url = "".concat(src_config_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.bukectBaseUrl, "/profiles/cp").concat(id, ".png");
            return this.http.get(url, {
              responseType: 'blob'
            });
          }
        }, {
          key: "uploadPicture",
          value: function uploadPicture(picture) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            var pictureBlod = this.imageUtilService.dataUriToBlob(picture);
            var formData = new FormData();
            formData.set('file', pictureBlod, 'file.png');
            return this.http.post("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseUrl, "/clientes/imageprofile"), formData, {
              'headers': authHeader,
              observe: 'response',
              responseType: 'text'
            });
          }
        }]);

        return PhotoService;
      }();

      _PhotoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
        }, {
          type: _ImageUtilService__WEBPACK_IMPORTED_MODULE_0__.ImageUtilService
        }];
      };

      _PhotoService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _PhotoService);
      /***/
    },

    /***/
    69885:
    /*!*********************************************!*\
      !*** ./src/app/services/produto.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProdutoService": function ProdutoService() {
          return (
            /* binding */
            _ProdutoService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/config/config */
      64573);

      var _ProdutoService = /*#__PURE__*/function () {
        function ProdutoService(httpCliente) {
          _classCallCheck(this, ProdutoService);

          this.httpCliente = httpCliente;
        }

        _createClass(ProdutoService, [{
          key: "findById",
          value: function findById(produto_id) {
            return this.httpCliente.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/produtos/").concat(produto_id));
          }
        }, {
          key: "findByCategoria",
          value: function findByCategoria(categoria_id) {
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var linesPerPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 24;
            return this.httpCliente.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/produtos/?categorias=").concat(categoria_id, "&page=").concat(page, "&linesPerPage=").concat(linesPerPage));
          }
        }, {
          key: "search",
          value: function search(name, categorias) {
            var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var linesPerPages = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 12;
            return this.httpCliente.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/produtos/?name=").concat(name, "&categorias=").concat(categorias, "&page=").concat(page, "&linesPerPages=").concat(linesPerPages));
          }
        }, {
          key: "searchAll",
          value: function searchAll(name) {
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var linesPerPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
            return this.httpCliente.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/produtos/all/?name=").concat(name, "&page=").concat(page, "&linesPerPage=").concat(linesPerPage));
          }
        }, {
          key: "getSmallImage",
          value: function getSmallImage(id) {
            var url = "".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.bukectBaseUrl, "/produtos/prod").concat(id, "-small.png");
            return this.httpCliente.get(url, {
              responseType: 'blob'
            });
          }
        }, {
          key: "getProdutoImage",
          value: function getProdutoImage(id) {
            var url = "".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.bukectBaseUrl, "/produtos/prod").concat(id, ".png");
            return this.httpCliente.get(url, {
              responseType: 'blob'
            });
          }
        }]);

        return ProdutoService;
      }();

      _ProdutoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _ProdutoService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _ProdutoService);
      /***/
    },

    /***/
    60023:
    /*!**********************************************!*\
      !*** ./src/app/services/registro.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistroService": function RegistroService() {
          return (
            /* binding */
            _RegistroService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/config/config */
      64573);
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./storage.service */
      71188);

      var _RegistroService = /*#__PURE__*/function () {
        function RegistroService(httpClient, storageService) {
          _classCallCheck(this, RegistroService);

          this.httpClient = httpClient;
          this.storageService = storageService;
        }

        _createClass(RegistroService, [{
          key: "findById",
          value: function findById(id) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/registros/").concat(id), {
              'headers': authHeader
            });
          }
        }, {
          key: "insert",
          value: function insert(obj) {
            return this.httpClient.post("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/registros/"), obj, {
              observe: 'response',
              responseType: 'text'
            });
          }
        }, {
          key: "updateEmail",
          value: function updateEmail(id, RegistroUpdateEmailDTO) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.put("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/registros/").concat(id), RegistroUpdateEmailDTO, {
              'headers': authHeader
            });
          }
        }, {
          key: "updatePassword",
          value: function updatePassword(id, RegistroUpdatePassowordDTO) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.put("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/registros/newpass/").concat(id), RegistroUpdatePassowordDTO, {
              'headers': authHeader
            });
          }
        }, {
          key: "findByEmail",
          value: function findByEmail(email) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/registros/email?value=").concat(email), {
              'headers': authHeader
            });
          }
        }, {
          key: "getImageFromBucket",
          value: function getImageFromBucket(id) {
            var url = "".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.bukectBaseUrl, "/profiles/cp").concat(id, ".png");
            return this.httpClient.get(url, {
              responseType: 'blob'
            });
          }
        }, {
          key: "emailNewAccount",
          value: function emailNewAccount(email) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/registros/send_email_new_account/?value=").concat(email), {
              'headers': authHeader
            });
          }
        }, {
          key: "emailUpdateAccount",
          value: function emailUpdateAccount(email) {
            var token = this.storageService.getLocalUser().token;
            var authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return this.httpClient.get("".concat(src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl, "/registros/send_email_update/?value=").concat(email), {
              'headers': authHeader
            });
          }
        }]);

        return RegistroService;
      }();

      _RegistroService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
        }];
      };

      _RegistroService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], _RegistroService);
      /***/
    },

    /***/
    71188:
    /*!*********************************************!*\
      !*** ./src/app/services/storage.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StorageService": function StorageService() {
          return (
            /* binding */
            _StorageService
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


      var src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/config/storage_keys.config */
      32825);

      var _StorageService = /*#__PURE__*/function () {
        function StorageService() {
          _classCallCheck(this, StorageService);
        }

        _createClass(StorageService, [{
          key: "getLocalUser",
          value: function getLocalUser() {
            var usr = localStorage.getItem(src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser);

            if (usr == null) {
              return null;
            } else {
              return JSON.parse(usr);
            }
          }
        }, {
          key: "setLocalUser",
          value: function setLocalUser(obj) {
            if (obj == null) {
              localStorage.removeItem(src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser);
            } else {
              localStorage.setItem(src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser, JSON.stringify(obj));
            }
          }
        }, {
          key: "getCard",
          value: function getCard() {
            var storageCard = localStorage.getItem(src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.card);

            if (storageCard != null) {
              return JSON.parse(storageCard);
            } else {
              return null;
            }
          }
        }, {
          key: "setCard",
          value: function setCard(obj) {
            if (obj != null) {
              localStorage.setItem(src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.card, JSON.stringify(obj));
            } else {
              localStorage.removeItem(src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.card);
            }
          }
        }]);

        return StorageService;
      }();

      _StorageService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _StorageService);
      /***/
    },

    /***/
    64573:
    /*!******************************!*\
      !*** ./src/config/config.ts ***!
      \******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "API_CONFIG": function API_CONFIG() {
          return (
            /* binding */
            _API_CONFIG
          );
        }
        /* harmony export */

      });

      var _API_CONFIG = {
        baseUrl: "https://bela-rosa.herokuapp.com",
        bukectBaseUrl: "https://belarosa-v1-2021.s3.sa-east-1.amazonaws.com",
        viaCepUrl: "https://viacep.com.br/ws",
        mercadopagoUrl: "https://api.mercadopago.com/v1"
      }; //    baseUrl : "http://localhost:8080", 

      /***/
    },

    /***/
    32825:
    /*!*******************************************!*\
      !*** ./src/config/storage_keys.config.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "STORAGE_KEYS": function STORAGE_KEYS() {
          return (
            /* binding */
            _STORAGE_KEYS
          );
        }
        /* harmony export */

      });

      var _STORAGE_KEYS = {
        localUser: "localUser",
        card: "belarosaIonicCard"
      };
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      32404);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      (0, _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    55899:
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \**************************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": [79437, "node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"],
        "./pwa-camera-modal-instance.entry.js": [18025, "node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"],
        "./pwa-camera-modal.entry.js": [64262, "node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"],
        "./pwa-camera.entry.js": [58206, "node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"],
        "./pwa-toast.entry.js": [24297, "node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 55899;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map