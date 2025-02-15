(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 57994)).then(m => m.HomePageModule) },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'registration',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_registration_registration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registration/registration.module */ 50015)).then(m => m.RegistrationPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgot-password/forgot-password.module */ 65638)).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 71659)).then(m => m.DashboardPageModule)
    },
    {
        path: 'sigup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_sigup_sigup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/sigup/sigup.module */ 82802)).then(m => m.SigupPageModule)
    },
    {
        path: 'registration-authentication',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_registration-authentication_registration-authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registration-authentication/registration-authentication.module */ 84051)).then(m => m.RegistrationAuthenticationPageModule)
    },
    {
        path: 'circle-login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_circle-login_circle-login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/circle-login/circle-login.module */ 94111)).then(m => m.CircleLoginPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _interceptors_httpError_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/httpError.interceptor */ 16540);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/storage.service */ 71188);
/* harmony import */ var _services_categoria_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/categoria.service */ 1875);
/* harmony import */ var _services_registro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/registro.service */ 60023);
/* harmony import */ var _interceptors_httpAuth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/httpAuth.interceptor */ 23469);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_cliente_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/cliente.service */ 70932);
/* harmony import */ var _services_produto_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/produto.service */ 69885);
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/card.service */ 73671);
/* harmony import */ var _services_endereco_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/endereco.service */ 61478);
/* harmony import */ var _services_pedido_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/pedido.service */ 93778);
/* harmony import */ var _services_descricao_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/descricao.service */ 89709);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/photo.service */ 61957);
/* harmony import */ var _services_ImageUtilService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/ ImageUtilService */ 62483);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/service-worker */ 72249);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var ngx_mercadopago__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-mercadopago */ 68160);
/* harmony import */ var _services_mp_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/mp.service */ 5435);
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ 69390);





























let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__.environment.production,
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__.environment.production
            }),
            ngx_mercadopago__WEBPACK_IMPORTED_MODULE_27__.NgxMercadopagoModule.forRoot({
                publishKey: 'TEST-1ce60a51-a522-46a6-ac55-f1858b6699ff',
                pathSDK: 'https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js'
            })
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonicRouteStrategy
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HTTP_INTERCEPTORS,
                useClass: _interceptors_httpError_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorInterceptor,
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HTTP_INTERCEPTORS,
                useClass: _interceptors_httpAuth_interceptor__WEBPACK_IMPORTED_MODULE_7__.httpAuthInterceptor,
                multi: true
            },
            {
                provide: Window,
                useValue: window
            },
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService,
            _services_categoria_service__WEBPACK_IMPORTED_MODULE_5__.CategoriaService,
            _services_registro_service__WEBPACK_IMPORTED_MODULE_6__.RegistroService,
            _services_cliente_service__WEBPACK_IMPORTED_MODULE_8__.ClienteService,
            _services_produto_service__WEBPACK_IMPORTED_MODULE_9__.ProdutoService,
            _services_card_service__WEBPACK_IMPORTED_MODULE_10__.CardService,
            _services_endereco_service__WEBPACK_IMPORTED_MODULE_11__.EnderecoService,
            _services_pedido_service__WEBPACK_IMPORTED_MODULE_12__.PedidoService,
            _services_descricao_service__WEBPACK_IMPORTED_MODULE_13__.DescricaoService,
            _services_photo_service__WEBPACK_IMPORTED_MODULE_14__.PhotoService,
            _services_ImageUtilService__WEBPACK_IMPORTED_MODULE_15__.ImageUtilService,
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_17__.Camera,
            _services_mp_service__WEBPACK_IMPORTED_MODULE_18__.MpService,
            _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_19__.Clipboard
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 23469:
/*!******************************************************!*\
  !*** ./src/app/interceptors/httpAuth.interceptor.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpAuthInterceptor": function() { return /* binding */ httpAuthInterceptor; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/config */ 64573);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/storage.service */ 71188);




let httpAuthInterceptor = class httpAuthInterceptor {
    constructor(storageService) {
        this.storageService = storageService;
    }
    intercept(httpRquest, next) {
        const token = src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl.length;
        const requestToApi = httpRquest.url.substring(0) == src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl;
        const localUser = this.storageService.getLocalUser();
        if (localUser && requestToApi) {
            const authHttpRequest = httpRquest.clone({
                headers: httpRquest.headers.set('Authorization', 'Bearer' + localUser.token)
            });
            return next.handle(authHttpRequest);
        }
        else {
            return next.handle(httpRquest);
        }
    }
};
httpAuthInterceptor.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService }
];
httpAuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], httpAuthInterceptor);



/***/ }),

/***/ 16540:
/*!*******************************************************!*\
  !*** ./src/app/interceptors/httpError.interceptor.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": function() { return /* binding */ ErrorInterceptor; },
/* harmony export */   "ErrorInterceptorProvider": function() { return /* binding */ ErrorInterceptorProvider; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/storage.service */ 71188);








let ErrorInterceptor = class ErrorInterceptor {
    constructor(storageService, alertController, router) {
        this.storageService = storageService;
        this.alertController = alertController;
        this.router = router;
    }
    intercept(httpRquest, next) {
        return next.handle(httpRquest)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((error) => {
            let erroMsg = '';
            if (error.error instanceof ErrorEvent) {
                erroMsg = `Error: ${error.error.message}`;
            }
            else {
                erroMsg = `Error Code: ${error.status}, Message: ${error.message}`;
            }
            switch (error.status) {
                case 403:
                    this.handle403();
                    break;
                case 401:
                    this.handle401();
                    break;
                case 422:
                    this.handle422();
                    break;
                case 400:
                    this.handle400();
                    break;
                case 500:
                    this.handle500();
                    break;
                case 0:
                    this.handle0();
                    break;
                default: this.handleDefaultError(error);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(erroMsg);
        }));
    }
    handle403() {
        this.storageService.getLocalUser();
    }
    handle401() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: 'Atenção!',
                message: 'Email ou senha podem está errado. ',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log(role);
        });
    }
    handle422() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: 'Erro ao validar. ',
                message: 'Verique os campos, obrigatorio',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log(role);
        });
    }
    handle400() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: 'ops!',
                message: 'Ação não permitida. ',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log(role);
        });
    }
    handle500() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: 'Ops! Algo inesperado aconteceu',
                message: 'Para sua segurança você seja redirecinado para pagina inicial',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log(role);
            this.router.navigate(['/home']);
        });
    }
    handle0() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: 'Ops!',
                message: 'Parece que algo deu errado.',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log(role);
            this.router.navigate(['/dashboard/circle-login']);
        });
    }
    handleDefaultError(error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                subHeader: 'Erro: ' + error.status + ': ' + error.error,
                message: error.message,
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log(role);
        });
    }
    listErrors(messages) {
        let s = '';
        for (var i = 0; i < messages.length; i++) {
            s = s + '<p><strong>' + messages[i].fieldName + "</strong>: " + messages[i].messagem + '</p>';
        }
        return s;
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ErrorInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], ErrorInterceptor);

const ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};


/***/ }),

/***/ 62483:
/*!***********************************************!*\
  !*** ./src/app/services/ ImageUtilService.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageUtilService": function() { return /* binding */ ImageUtilService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let ImageUtilService = class ImageUtilService {
    dataUriToBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }
};
ImageUtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], ImageUtilService);



/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 6686);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/config */ 64573);
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.service */ 73671);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ 71188);







let AuthService = class AuthService {
    constructor(httpClient, storageService, cardService) {
        this.httpClient = httpClient;
        this.storageService = storageService;
        this.cardService = cardService;
        this.jwtHelp = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService();
    }
    authetocation(credenciais) {
        return this.httpClient.post(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/login`, credenciais, {
            observe: 'response',
            responseType: 'text'
        });
    }
    refreshToken() {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.post(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/0auth/refresh_token`, {}, {
            'headers': authHeader,
            observe: 'response',
            responseType: 'text'
        });
    }
    sendNewPassword(newPass) {
        return this.httpClient.post(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/0auth/forgot`, newPass, {
            observe: 'response',
            responseType: 'text'
        });
    }
    sucessLogin(authorizationValue) {
        let tok = authorizationValue.substring(7);
        let user = {
            token: tok,
            email: this.jwtHelp.decodeToken(tok).sub
        };
        this.storageService.setLocalUser(user);
        this.cardService.createrOrClearCard();
    }
    logout() {
        this.storageService.setLocalUser(null);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _card_service__WEBPACK_IMPORTED_MODULE_1__.CardService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], AuthService);



/***/ }),

/***/ 73671:
/*!******************************************!*\
  !*** ./src/app/services/card.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardService": function() { return /* binding */ CardService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 71188);



let CardService = class CardService {
    constructor(storageService) {
        this.storageService = storageService;
    }
    createrOrClearCard() {
        let card = { itens: [] };
        this.storageService.setCard(card);
        return card;
    }
    getCard() {
        let card = this.storageService.getCard();
        if (card == null) {
            card = this.createrOrClearCard();
        }
        return card;
    }
    addProduto(produto) {
        let card = this.getCard();
        let position = card.itens.findIndex(x => x.produto.id == produto.id);
        if (position == -1) {
            card.itens.push({ quantidade: 1, produto: produto });
        }
        this.storageService.setCard(card);
        return card;
    }
    removerProduto(produto) {
        let card = this.getCard();
        let position = card.itens.findIndex(x => x.produto.id == produto.id);
        if (position != -1) {
            card.itens.splice(position, 1);
        }
        this.storageService.setCard(card);
        return card;
    }
    addQuantidade(produto) {
        let card = this.getCard();
        let position = card.itens.findIndex(x => x.produto.id == produto.id);
        if (position != -1) {
            card.itens[position].quantidade++;
        }
        this.storageService.setCard(card);
        return card;
    }
    removerQuantidade(produto) {
        let card = this.getCard();
        let position = card.itens.findIndex(x => x.produto.id == produto.id);
        if (position != -1) {
            card.itens[position].quantidade--;
            if (card.itens[position].quantidade < 1) {
                card = this.removerProduto(produto);
            }
        }
        this.storageService.setCard(card);
        return card;
    }
    total() {
        let card = this.getCard();
        let sum = 0;
        for (var i = 0; i < card.itens.length; i++) {
            sum += card.itens[i].produto.price * card.itens[i].quantidade;
        }
        return sum;
    }
};
CardService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
CardService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], CardService);



/***/ }),

/***/ 1875:
/*!***********************************************!*\
  !*** ./src/app/services/categoria.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriaService": function() { return /* binding */ CategoriaService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/config */ 64573);




let CategoriaService = class CategoriaService {
    constructor(http) {
        this.http = http;
    }
    findById(id) {
        return this.http.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/categorias/${id}`);
    }
    findAll() {
        return this.http.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/categorias`);
    }
};
CategoriaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CategoriaService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], CategoriaService);



/***/ }),

/***/ 70932:
/*!*********************************************!*\
  !*** ./src/app/services/cliente.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteService": function() { return /* binding */ ClienteService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/config */ 64573);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 71188);





let ClienteService = class ClienteService {
    constructor(httpClient, storageService) {
        this.httpClient = httpClient;
        this.storageService = storageService;
    }
    findById(id) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/clientes/${id}`, { 'headers': authHeader });
    }
    insert(obj) {
        return this.httpClient.post(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/clientes`, obj, { observe: 'response', responseType: 'text' });
    }
    update(id, ClienteUpdateDTO) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.put(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/clientes/${id}`, ClienteUpdateDTO, { 'headers': authHeader });
    }
    viaCep(cep) {
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.viaCepUrl}/${cep}/json`);
    }
};
ClienteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService }
];
ClienteService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], ClienteService);

//https://viacep.com.br/ws/66123120/json/


/***/ }),

/***/ 89709:
/*!***********************************************!*\
  !*** ./src/app/services/descricao.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescricaoService": function() { return /* binding */ DescricaoService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/config */ 64573);




let DescricaoService = class DescricaoService {
    constructor(http) {
        this.http = http;
    }
    findById(id) {
        return this.http.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/descricoes/${id}`);
    }
};
DescricaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
DescricaoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], DescricaoService);



/***/ }),

/***/ 61478:
/*!**********************************************!*\
  !*** ./src/app/services/endereco.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnderecoService": function() { return /* binding */ EnderecoService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/config */ 64573);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 71188);





let EnderecoService = class EnderecoService {
    constructor(httpClient, storageService) {
        this.httpClient = httpClient;
        this.storageService = storageService;
    }
    findById(id) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/enderecos/${id}`, { 'headers': authHeader });
    }
    update(id, EnderecoUpdateDTO) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.put(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/enderecos/${id}`, EnderecoUpdateDTO, { 'headers': authHeader });
    }
};
EnderecoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService }
];
EnderecoService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], EnderecoService);



/***/ }),

/***/ 5435:
/*!****************************************!*\
  !*** ./src/app/services/mp.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MpService": function() { return /* binding */ MpService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/config */ 64573);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 71188);





let MpService = class MpService {
    constructor(httpClient, storageService) {
        this.httpClient = httpClient;
        this.storageService = storageService;
    }
    insert(obj) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.post(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/process_payment/`, obj, { 'headers': authHeader, observe: 'response', responseType: 'text' });
    }
    pix(obj) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.post(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/pix_process_payment/`, obj, { 'headers': authHeader, observe: 'response', responseType: 'text' });
    }
    findById(id) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/process_payment/statuspayment/${id}`, { 'headers': authHeader });
    }
    pixFindById(id) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/pix_process_payment/${id}`, { 'headers': authHeader });
    }
    findAll() {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/process_payment/statuspayment/all`, { 'headers': authHeader });
    }
};
MpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService }
];
MpService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], MpService);



/***/ }),

/***/ 93778:
/*!********************************************!*\
  !*** ./src/app/services/pedido.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoService": function() { return /* binding */ PedidoService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/config */ 64573);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 71188);





let PedidoService = class PedidoService {
    constructor(httpClient, storageService) {
        this.httpClient = httpClient;
        this.storageService = storageService;
    }
    findById(id) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/pedidos/${id}`, { 'headers': authHeader });
    }
    findAll() {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/pedidos`, { 'headers': authHeader });
    }
    searchAll(name, page = 0, linesPerPage = 12) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/pedidos/?name=${name}&page=${page}&linesPerPage=${linesPerPage}`, { 'headers': authHeader });
    }
    get(name) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/pedidos/?name=${name}`, { 'headers': authHeader });
    }
    insert(obj) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.post(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/pedidos`, obj, { 'headers': authHeader, observe: 'response', responseType: 'text' });
    }
};
PedidoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService }
];
PedidoService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], PedidoService);



/***/ }),

/***/ 61957:
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": function() { return /* binding */ PhotoService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ImageUtilService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ ImageUtilService */ 62483);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 71188);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/config */ 64573);






let PhotoService = class PhotoService {
    constructor(http, storageService, imageUtilService) {
        this.http = http;
        this.storageService = storageService;
        this.imageUtilService = imageUtilService;
    }
    getImageFromBucket(id) {
        let url = `${src_config_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.bukectBaseUrl}/profiles/cp${id}.png`;
        return this.http.get(url, { responseType: 'blob' });
    }
    uploadPicture(picture) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        let pictureBlod = this.imageUtilService.dataUriToBlob(picture);
        let formData = new FormData();
        formData.set('file', pictureBlod, 'file.png');
        return this.http.post(`${src_config_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.baseUrl}/clientes/imageprofile`, formData, {
            'headers': authHeader,
            observe: 'response',
            responseType: 'text'
        });
    }
};
PhotoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _ImageUtilService__WEBPACK_IMPORTED_MODULE_0__.ImageUtilService }
];
PhotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PhotoService);



/***/ }),

/***/ 69885:
/*!*********************************************!*\
  !*** ./src/app/services/produto.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutoService": function() { return /* binding */ ProdutoService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/config */ 64573);




let ProdutoService = class ProdutoService {
    constructor(httpCliente) {
        this.httpCliente = httpCliente;
    }
    findById(produto_id) {
        return this.httpCliente.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/produtos/${produto_id}`);
    }
    findByCategoria(categoria_id, page = 0, linesPerPage = 24) {
        return this.httpCliente.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}&page=${page}&linesPerPage=${linesPerPage}`);
    }
    search(name, categorias, page = 0, linesPerPages = 12) {
        return this.httpCliente.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/produtos/?name=${name}&categorias=${categorias}&page=${page}&linesPerPages=${linesPerPages}`);
    }
    searchAll(name, page = 0, linesPerPage = 12) {
        return this.httpCliente.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/produtos/all/?name=${name}&page=${page}&linesPerPage=${linesPerPage}`);
    }
    getSmallImage(id) {
        let url = `${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.bukectBaseUrl}/produtos/prod${id}-small.png`;
        return this.httpCliente.get(url, { responseType: 'blob' });
    }
    getProdutoImage(id) {
        let url = `${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.bukectBaseUrl}/produtos/prod${id}.png`;
        return this.httpCliente.get(url, { responseType: 'blob' });
    }
};
ProdutoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ProdutoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], ProdutoService);



/***/ }),

/***/ 60023:
/*!**********************************************!*\
  !*** ./src/app/services/registro.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroService": function() { return /* binding */ RegistroService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/config */ 64573);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 71188);





let RegistroService = class RegistroService {
    constructor(httpClient, storageService) {
        this.httpClient = httpClient;
        this.storageService = storageService;
    }
    findById(id) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/registros/${id}`, { 'headers': authHeader });
    }
    insert(obj) {
        return this.httpClient.post(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/registros/`, obj, { observe: 'response', responseType: 'text' });
    }
    updateEmail(id, RegistroUpdateEmailDTO) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.put(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/registros/${id}`, RegistroUpdateEmailDTO, { 'headers': authHeader });
    }
    updatePassword(id, RegistroUpdatePassowordDTO) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.put(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/registros/newpass/${id}`, RegistroUpdatePassowordDTO, { 'headers': authHeader });
    }
    findByEmail(email) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/registros/email?value=${email}`, { 'headers': authHeader });
    }
    getImageFromBucket(id) {
        let url = `${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.bukectBaseUrl}/profiles/cp${id}.png`;
        return this.httpClient.get(url, { responseType: 'blob' });
    }
    emailNewAccount(email) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/registros/send_email_new_account/?value=${email}`, { 'headers': authHeader });
    }
    emailUpdateAccount(email) {
        let token = this.storageService.getLocalUser().token;
        let authHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Authorization': 'Bearer ' + token });
        return this.httpClient.get(`${src_config_config__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.baseUrl}/registros/send_email_update/?value=${email}`, { 'headers': authHeader });
    }
};
RegistroService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService }
];
RegistroService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], RegistroService);



/***/ }),

/***/ 71188:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": function() { return /* binding */ StorageService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/storage_keys.config */ 32825);



let StorageService = class StorageService {
    getLocalUser() {
        let usr = localStorage.getItem(src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser);
        if (usr == null) {
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    }
    setLocalUser(obj) {
        if (obj == null) {
            localStorage.removeItem(src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }
    getCard() {
        let storageCard = localStorage.getItem(src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.card);
        if (storageCard != null) {
            return JSON.parse(storageCard);
        }
        else {
            return null;
        }
    }
    setCard(obj) {
        if (obj != null) {
            localStorage.setItem(src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.card, JSON.stringify(obj));
        }
        else {
            localStorage.removeItem(src_config_storage_keys_config__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.card);
        }
    }
};
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], StorageService);



/***/ }),

/***/ 64573:
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_CONFIG": function() { return /* binding */ API_CONFIG; }
/* harmony export */ });
const API_CONFIG = {
    baseUrl: "https://bela-rosa.herokuapp.com",
    bukectBaseUrl: "https://belarosa-v1-2021.s3.sa-east-1.amazonaws.com",
    viaCepUrl: "https://viacep.com.br/ws",
    mercadopagoUrl: "https://api.mercadopago.com/v1"
};
//    baseUrl : "http://localhost:8080", 


/***/ }),

/***/ 32825:
/*!*******************************************!*\
  !*** ./src/config/storage_keys.config.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STORAGE_KEYS": function() { return /* binding */ STORAGE_KEYS; }
/* harmony export */ });
const STORAGE_KEYS = {
    localUser: "localUser",
    card: "belarosaIonicCard",
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 32404);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		79437,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		18025,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		64262,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		58206,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		24297,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map