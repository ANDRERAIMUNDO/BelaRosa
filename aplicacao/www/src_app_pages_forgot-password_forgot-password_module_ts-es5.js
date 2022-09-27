(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_forgot-password_forgot-password_module_ts"], {
    /***/
    6177:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/forgot-password/forgot-password-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordPageRoutingModule": function ForgotPasswordPageRoutingModule() {
          return (
            /* binding */
            _ForgotPasswordPageRoutingModule
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


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot-password.page */
      22032);

      var routes = [{
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
      }];

      var _ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
        _classCallCheck(this, ForgotPasswordPageRoutingModule);
      };

      _ForgotPasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ForgotPasswordPageRoutingModule);
      /***/
    },

    /***/
    65638:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordPageModule": function ForgotPasswordPageModule() {
          return (
            /* binding */
            _ForgotPasswordPageModule
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


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      6177);
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgot-password.page */
      22032);

      var _ForgotPasswordPageModule = function ForgotPasswordPageModule() {
        _classCallCheck(this, ForgotPasswordPageModule);
      };

      _ForgotPasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
      })], _ForgotPasswordPageModule);
      /***/
    },

    /***/
    22032:
    /*!***************************************************************!*\
      !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordPage": function ForgotPasswordPage() {
          return (
            /* binding */
            _ForgotPasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./forgot-password.page.html */
      63399);
      /* harmony import */


      var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgot-password.page.scss */
      80287);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      37556);

      var _ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(formBuilder, authService, alertController, router) {
          _classCallCheck(this, ForgotPasswordPage);

          this.formBuilder = formBuilder;
          this.authService = authService;
          this.alertController = alertController;
          this.router = router;
          this.newPasswordDTO = {
            email: ""
          };
          this.button = false;
        }

        _createClass(ForgotPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadForm();
          }
        }, {
          key: "loadForm",
          value: function loadForm() {
            this.formGroup = this.formBuilder.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]]
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this = this;

            this.button = true;
            this.sniper = "ok";
            this.newPasswordDTO.email = this.formGroup.get('email').value;
            this.authService.sendNewPassword(this.newPasswordDTO).subscribe(function (response) {
              _this.presentConfirm();
            }, function (catchError) {
              _this.button = false;
              _this.sniper = null;

              _this.presentError();
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(['/home']);
          }
        }, {
          key: "presentError",
          value: function presentError() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert, _yield$alert$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Atenção!',
                        message: 'Confirme se o email digitado está correto.',
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
                      console.log('onDidDismiss resolved with role', role);
                      this.router.navigate(['/forgot-password']);

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentConfirm",
          value: function presentConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert, _yield$alert$onDidDis2, role;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Atenção!',
                        subHeader: 'Eviamos um nova senha',
                        message: 'Por favor verifique seu email.',
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
                      console.log('onDidDismiss resolved with role', role);
                      this.router.navigate(['/home']);

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ForgotPasswordPage;
      }();

      _ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }];
      };

      _ForgotPasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ForgotPasswordPage);
      /***/
    },

    /***/
    80287:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/forgot-password/forgot-password.page.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  --ion-background-color: rgb(243, 156, 231);\n}\n\n.ion-padding-top {\n  padding-top: 50 px;\n}\n\n.ion-text-center {\n  text-align: center;\n}\n\n.ion-padding-top {\n  padding-top: 50 px;\n}\n\n.ion-padding {\n  padding: 30px;\n}\n\nion-header {\n  --ion-background-color: rgb(231, 163, 203);\n}\n\nh5 {\n  font-family: \"sans-serif\";\n  font-size: medium;\n  font-weight: bolder;\n  font-style: italic;\n  color: white;\n  text-align: left;\n}\n\np {\n  font-family: \"sans-serif\";\n  font-style: italic;\n  text-align: center;\n  color: #e5ff00;\n  font-size: small;\n}\n\nion-buttons {\n  color: white;\n}\n\nion-input {\n  font-family: \"sans-serif\";\n  font-style: italic;\n  text-align: center;\n  color: white;\n  font-size: small;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0Esa0JBQUE7QUFDQTs7QUFFQTtFQUNBLGtCQUFBO0FBQ0E7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0EsYUFBQTtBQUNBOztBQUVBO0VBQ0EsMENBQUE7QUFDQTs7QUFFQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0E7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNBLFlBQUE7QUFDQTs7QUFFQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNBOztBQUVBO0VBQ0EsY0FBQTtBQUNBIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDE1NiwgMjMxKTtcbn0gXG5cbi5pb24tcGFkZGluZy10b3Age1xucGFkZGluZy10b3A6IDUwIHB4OyBcbn1cblxuLmlvbi10ZXh0LWNlbnRlciB7XG50ZXh0LWFsaWduOiBjZW50ZXJcbn1cblxuLmlvbi1wYWRkaW5nLXRvcCB7XG4gIHBhZGRpbmctdG9wOiA1MCBweDsgXG59XG5cbi5pb24tcGFkZGluZ1x0e1xucGFkZGluZzogMzBweDsgXG59XG5cbmlvbi1oZWFkZXIge1xuLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMTYzLCAyMDMpO1xufVxuXG5oNSB7XG5mb250LWZhbWlseTogXCJzYW5zLXNlcmlmXCI7XG5mb250LXNpemU6IG1lZGl1bTtcbmZvbnQtd2VpZ2h0OiBib2xkZXI7XG5mb250LXN0eWxlOiBpdGFsaWM7XG5jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xudGV4dC1hbGlnbjogbGVmdDsgXG59XG5cbnAge1xuICBmb250LWZhbWlseTogXCJzYW5zLXNlcmlmXCI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiKDIyOSwgMjU1LCAwKTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuaW9uLWJ1dHRvbnMge1xuY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuaW9uLWlucHV0IHtcbmZvbnQtZmFtaWx5OiBcInNhbnMtc2VyaWZcIjtcbmZvbnQtc3R5bGU6IGl0YWxpYztcbnRleHQtYWxpZ246IGNlbnRlcjtcbmNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5mb250LXNpemU6IHNtYWxsO1xufVxuXG5pb24tYnV0dG9uIHtcbmNvbG9yOiByZ2IoMjQwLCAxOTEsIDIzMyk7XG59XG4iXX0= */";
      /***/
    },

    /***/
    63399:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button>back</ion-back-button>\n    </ion-buttons>\n    <ion-title><h5>Retornar</h5></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content\"[fullscreen]=\"true\">\n<div class=\"ion-padding-top\">\n<div class=\"ion-padding\">\n<div class=\"ion-text-center\">\n  <img src=\"../../assets/logobelarosa.png\" />\n  <br>\n  <br>\n  <br>\n  <br>\n  <br> \n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"submitForm()\">\n    <div class=\"form-group\">\n      <ion-item lines=\"full\">\n        <ion-label class=\"ion-text-center\" position=\"floating\">Email</ion-label>\n        <ion-input formControlName=\"email\" inputmode=\"text\" maxlength=\"50\" type=\"text\" required></ion-input>\n      </ion-item>\n      <p *ngIf=\"formGroup.controls.email.dirty && formGroup.controls.email.errors\" margin-left>Obrigatório. </p>\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <ion-button disabled = \"{{button}}\" *ngIf=\"formGroup.controls.email.valid && formGroup.controls.email.valid\" type=\"submit\" color=\"light\" expand=\"block\">\n          <ion-spinner *ngIf=\"sniper\" color=\"secondary\" duration = 3 > </ion-spinner>\n          <p *ngIf=\"sniper\"> aguarde ...</p>\n          <p *ngIf=\"!sniper\">Enviar nova senha</p>\n        </ion-button>\n      </ion-col>\n      <small>\n      Atenção caro cliente, enviaremos uma senha temporaria para seu email,\n      por favor, crier uma nova para manter seus dados ainda mais protegidos.\n    </small>\n    </ion-row>\n  </form>\n\n  <ion-row>\n    <ion-col>\n      <ion-button type=\"submit\" color=\"light\" expand=\"block\" (click)=\"back()\">Voltar</ion-button>\n    </ion-col>\n  </ion-row>\n</div>\n</div>\n</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_forgot-password_forgot-password_module_ts-es5.js.map