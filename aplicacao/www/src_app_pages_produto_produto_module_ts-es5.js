(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_produto_produto_module_ts"], {
    /***/
    84246:
    /*!*********************************************************!*\
      !*** ./src/app/pages/produto/produto-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProdutoPageRoutingModule": function ProdutoPageRoutingModule() {
          return (
            /* binding */
            _ProdutoPageRoutingModule
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


      var _produto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./produto.page */
      37166);

      var routes = [{
        path: '',
        component: _produto_page__WEBPACK_IMPORTED_MODULE_0__.ProdutoPage
      }];

      var _ProdutoPageRoutingModule = function ProdutoPageRoutingModule() {
        _classCallCheck(this, ProdutoPageRoutingModule);
      };

      _ProdutoPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProdutoPageRoutingModule);
      /***/
    },

    /***/
    10900:
    /*!*************************************************!*\
      !*** ./src/app/pages/produto/produto.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProdutoPageModule": function ProdutoPageModule() {
          return (
            /* binding */
            _ProdutoPageModule
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


      var _produto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./produto-routing.module */
      84246);
      /* harmony import */


      var _produto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./produto.page */
      37166);

      var _ProdutoPageModule = function ProdutoPageModule() {
        _classCallCheck(this, ProdutoPageModule);
      };

      _ProdutoPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _produto_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProdutoPageRoutingModule],
        declarations: [_produto_page__WEBPACK_IMPORTED_MODULE_1__.ProdutoPage]
      })], _ProdutoPageModule);
      /***/
    },

    /***/
    37166:
    /*!***********************************************!*\
      !*** ./src/app/pages/produto/produto.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProdutoPage": function ProdutoPage() {
          return (
            /* binding */
            _ProdutoPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_produto_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./produto.page.html */
      19512);
      /* harmony import */


      var _produto_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./produto.page.scss */
      80660);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/config/config */
      64573);
      /* harmony import */


      var _services_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/categoria.service */
      1875);
      /* harmony import */


      var _services_produto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/produto.service */
      69885);

      var _ProdutoPage = /*#__PURE__*/function () {
        function ProdutoPage(route, router, produtoService, categoriaService) {
          _classCallCheck(this, ProdutoPage);

          this.route = route;
          this.router = router;
          this.produtoService = produtoService;
          this.categoriaService = categoriaService;
          this.itens = [];
          this.page = 0;
        }

        _createClass(ProdutoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCategorias();
            this.getProdutos();
          }
        }, {
          key: "getProdutos",
          value: function getProdutos() {
            var _this = this;

            var categoria_id = this.route.snapshot.paramMap.get('categoria_id');
            this.produtoService.findByCategoria(categoria_id, this.page, 10).subscribe(function (response) {
              var start = _this.itens.length;
              _this.itens = _this.itens.concat(response['content']);
              var end = _this.itens.length - 1;
              console.log(_this.page);
              console.log(_this.itens);

              _this.loadImage(start, end);
            }, function (catchError) {
              console.log(catchError);
            });
          }
        }, {
          key: "getCategorias",
          value: function getCategorias() {
            var _this2 = this;

            var categoria_id = this.route.snapshot.paramMap.get('categoria_id');
            this.categoriaService.findById(categoria_id).subscribe(function (response) {
              _this2.categoria = response;
              console.log(categoria_id);
            });
          }
        }, {
          key: "loadImage",
          value: function loadImage(start, end) {
            var _this3 = this;

            var _loop = function _loop() {
              var item = _this3.itens[i];

              _this3.produtoService.getProdutoImage(item.id).subscribe(function (response) {
                item.imageUrl = "".concat(src_config_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.bukectBaseUrl, "/produtos/prod").concat(item.id, "-small.png");
              });
            };

            for (var i = start; i <= end; i++) {
              _loop();
            }
          }
        }, {
          key: "produtoDetails",
          value: function produtoDetails(produto_id) {
            this.router.navigate(['/dashboard/produto-detail', {
              produto_id: produto_id
            }]);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.page = 0;
            this.itens = [];
            this.getProdutos();
            setTimeout(function () {
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this4 = this;

            setTimeout(function () {
              _this4.page++;

              _this4.getProdutos();

              event.target.complete();

              if (_this4.itens.length == 12) {
                event.target.disabled = true;
              }
            }, 500);
          }
        }, {
          key: "onInput",
          value: function onInput(event) {
            var _this5 = this;

            var categoria_id = this.route.snapshot.paramMap.get('categoria_id');
            this.page = 0;
            this.itens = [];
            var name = event.target.value;
            this.produtoService.search(name, categoria_id, this.page, 12).subscribe(function (response) {
              var start = _this5.itens.length;
              _this5.itens = _this5.itens.concat(response['content']);
              var end = _this5.itens.length - 1;

              _this5.loadImage(start, end);
            });
          }
        }]);

        return ProdutoPage;
      }();

      _ProdutoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _services_produto_service__WEBPACK_IMPORTED_MODULE_4__.ProdutoService
        }, {
          type: _services_categoria_service__WEBPACK_IMPORTED_MODULE_3__.CategoriaService
        }];
      };

      _ProdutoPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-produto',
        template: _raw_loader_produto_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams],
        styles: [_produto_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProdutoPage);
      /***/
    },

    /***/
    80660:
    /*!*************************************************!*\
      !*** ./src/app/pages/produto/produto.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: length;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\nion-card {\n  width: 160px;\n  height: 230px;\n}\n\nion-card-title {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  color: #080808;\n  text-align: length;\n  width: 75;\n  height: 75;\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n\nion-card-title {\n  font-family: \"Lucida Sans Regular\";\n  font-size: smaller;\n  color: #080808;\n  text-align: length;\n}\n\nion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: length;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\nion-content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nh6 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: left;\n  -moz-text-align-last: left;\n       text-align-last: left;\n  color: #0f0f0f;\n}\n\nion-icon {\n  width: 20px;\n  height: 20px;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1dG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBRUU7RUFDRSwwQ0FBQTtBQUNKOztBQUVFO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7T0FBQSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0FBQ0oiLCJmaWxlIjoicHJvZHV0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gIHRleHQtYWxpZ246IGxlbmd0aDsgXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE5MSwgMjMzKTtcbn1cblxuaW9uLWNhcmQgIHtcbiAgICB3aWR0aDogMTYwcHg7IFxuICAgIGhlaWdodDogMjMwcHg7XG4gIH1cbiAgXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvcjogcmdiKDgsIDgsIDgpO1xuICAgIHRleHQtYWxpZ246IGxlbmd0aDsgXG4gICAgd2lkdGg6IDc1OyBcbiAgICBoZWlnaHQ6IDc1O1xuICAgIH1cbiAgXG4gIGlvbi1pbWcge1xuICAgIHdpZHRoOiBhdXRvOyBcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gICAgdGV4dC1hbGlnbjogbGVuZ3RoOyBcbiAgfVxuICBcbiAgaW9uLWhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICBjb2xvcjogcmdiKDgsIDgsIDgpO1xuICAgIHRleHQtYWxpZ246IGxlbmd0aDsgXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xuICB9XG5cbiAgaW9uLWNvbnRlbnQgeyAgXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjM5LCAyNTApO1xuICB9IFxuICBcbiAgaDYge1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdGV4dC1hbGlnbi1sYXN0OiBsZWZ0OyBcbiAgICBjb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xuICB9XG4gIFxuICBpb24taWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7IFxuICAgIGhlaWdodDogMjBweDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIGNvbG9yOiByZ2IoMjQwLCAxOTEsIDIzMyk7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    19512:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/produto/produto.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button>back</ion-back-button>\n    </ion-buttons>\n    <h6 class=\"ion-text-center\">categoria->{{categoria?.name}}</h6>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar animated=\"true\" (ionInput)=\"onInput($event)\"></ion-searchbar>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n  <ion-refresher-content refreshingSpinner=\"circular\"></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-row>\n  <ion-card lines=\"none\" *ngFor=\"let item of itens\" (click)=\"produtoDetails(item.id)\">\n      <ion-img [src]=\"item.imageUrl || '../../assets/Camera.svg'\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle> <h6>{{item.name}}</h6></ion-card-subtitle>\n      <ion-card-title>{{item.price | currency}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <h6>é a  descrição de um produto.. </h6> \n    </ion-card-content>\n  </ion-card>\n  </ion-row>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Carregando mais produtos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_produto_produto_module_ts-es5.js.map