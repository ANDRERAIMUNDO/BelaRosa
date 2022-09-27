(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_circle-reload_circle-reload_module_ts"], {
    /***/
    20440:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/circle-reload/circle-reload-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CircleReloadPageRoutingModule": function CircleReloadPageRoutingModule() {
          return (
            /* binding */
            _CircleReloadPageRoutingModule
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


      var _circle_reload_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./circle-reload.page */
      12676);

      var routes = [{
        path: '',
        component: _circle_reload_page__WEBPACK_IMPORTED_MODULE_0__.CircleReloadPage
      }];

      var _CircleReloadPageRoutingModule = function CircleReloadPageRoutingModule() {
        _classCallCheck(this, CircleReloadPageRoutingModule);
      };

      _CircleReloadPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CircleReloadPageRoutingModule);
      /***/
    },

    /***/
    71469:
    /*!*************************************************************!*\
      !*** ./src/app/pages/circle-reload/circle-reload.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CircleReloadPageModule": function CircleReloadPageModule() {
          return (
            /* binding */
            _CircleReloadPageModule
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


      var _circle_reload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./circle-reload-routing.module */
      20440);
      /* harmony import */


      var _circle_reload_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./circle-reload.page */
      12676);

      var _CircleReloadPageModule = function CircleReloadPageModule() {
        _classCallCheck(this, CircleReloadPageModule);
      };

      _CircleReloadPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _circle_reload_routing_module__WEBPACK_IMPORTED_MODULE_0__.CircleReloadPageRoutingModule],
        declarations: [_circle_reload_page__WEBPACK_IMPORTED_MODULE_1__.CircleReloadPage]
      })], _CircleReloadPageModule);
      /***/
    },

    /***/
    12676:
    /*!***********************************************************!*\
      !*** ./src/app/pages/circle-reload/circle-reload.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CircleReloadPage": function CircleReloadPage() {
          return (
            /* binding */
            _CircleReloadPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_circle_reload_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./circle-reload.page.html */
      58288);
      /* harmony import */


      var _circle_reload_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./circle-reload.page.scss */
      53701);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _CircleReloadPage = /*#__PURE__*/function () {
        function CircleReloadPage(router) {
          _classCallCheck(this, CircleReloadPage);

          this.router = router;
          this.animation = true;
        }

        _createClass(CircleReloadPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.animationAddressPage();
          }
        }, {
          key: "animationAddressPage",
          value: function animationAddressPage() {
            var _this = this;

            setTimeout(function () {
              if (_this.animation == true) {
                _this.router.navigate(['/dashboard/profile']);
              }
            }, 4000);
            console.log('enable animation');
          }
        }]);

        return CircleReloadPage;
      }();

      _CircleReloadPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _CircleReloadPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-circle-reload',
        template: _raw_loader_circle_reload_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_circle_reload_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CircleReloadPage);
      /***/
    },

    /***/
    53701:
    /*!*************************************************************!*\
      !*** ./src/app/pages/circle-reload/circle-reload.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 200px;\n  line-height: 26px;\n}\n\n.content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nion-spinner {\n  color: #d35db9;\n  width: 50px;\n  height: 50px;\n  transform: scale(3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpcmNsZS1yZWxvYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSwwQ0FBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJjaXJjbGUtcmVsb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIFxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMDBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICBcbiAgLmNvbnRlbnQgeyAgXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjM5LCAyNTApO1xuICB9XG5pb24tc3Bpbm5lciB7XG4gICAgY29sb3I6cmdiKDIxMSwgOTMsIDE4NSk7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XG59Il19 */";
      /***/
    },

    /***/
    58288:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/circle-reload/circle-reload.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"content\" [fullscreen]=\"true\">\n  <div id=\"container\">\n    <strong>\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n    </strong>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_circle-reload_circle-reload_module_ts-es5.js.map