(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_loand_loand_module_ts"], {
    /***/
    50047:
    /*!*****************************************************!*\
      !*** ./src/app/pages/loand/loand-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoandPageRoutingModule": function LoandPageRoutingModule() {
          return (
            /* binding */
            _LoandPageRoutingModule
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


      var _loand_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./loand.page */
      94932);

      var routes = [{
        path: '',
        component: _loand_page__WEBPACK_IMPORTED_MODULE_0__.LoandPage
      }];

      var _LoandPageRoutingModule = function LoandPageRoutingModule() {
        _classCallCheck(this, LoandPageRoutingModule);
      };

      _LoandPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoandPageRoutingModule);
      /***/
    },

    /***/
    62474:
    /*!*********************************************!*\
      !*** ./src/app/pages/loand/loand.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoandPageModule": function LoandPageModule() {
          return (
            /* binding */
            _LoandPageModule
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


      var _loand_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./loand-routing.module */
      50047);
      /* harmony import */


      var _loand_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./loand.page */
      94932);

      var _LoandPageModule = function LoandPageModule() {
        _classCallCheck(this, LoandPageModule);
      };

      _LoandPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _loand_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoandPageRoutingModule],
        declarations: [_loand_page__WEBPACK_IMPORTED_MODULE_1__.LoandPage]
      })], _LoandPageModule);
      /***/
    },

    /***/
    94932:
    /*!*******************************************!*\
      !*** ./src/app/pages/loand/loand.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoandPage": function LoandPage() {
          return (
            /* binding */
            _LoandPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_loand_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./loand.page.html */
      33178);
      /* harmony import */


      var _loand_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./loand.page.scss */
      29646);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _LoandPage = /*#__PURE__*/function () {
        function LoandPage(router) {
          _classCallCheck(this, LoandPage);

          this.router = router;
          this.animation = true;
        }

        _createClass(LoandPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setTimeout(function () {
              if (_this.animation == true) {
                _this.router.navigate(['/dashboard/index']);
              }
            }, 7000);
            console.log('enable animation');
          }
        }]);

        return LoandPage;
      }();

      _LoandPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _LoandPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-loand',
        template: _raw_loader_loand_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_loand_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoandPage);
      /***/
    },

    /***/
    29646:
    /*!*********************************************!*\
      !*** ./src/app/pages/loand/loand.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 200px;\n  line-height: 26px;\n}\n\n.content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nion-spinner {\n  color: #d35db9;\n  width: 50px;\n  height: 50px;\n  transform: scale(3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsMENBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQUYiLCJmaWxlIjoibG9hbmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4uY29udGVudCB7ICBcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjM5LCAyNTApO1xufVxuXG5pb24tc3Bpbm5lciB7XG4gIGNvbG9yOnJnYigyMTEsIDkzLCAxODUpO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xufSJdfQ== */";
      /***/
    },

    /***/
    33178:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loand/loand.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"content\" [fullscreen]=\"true\">\n  <div id=\"container\">\n    <strong>\n      <ion-spinner name=\"dots\"></ion-spinner>\n    </strong>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_loand_loand_module_ts-es5.js.map