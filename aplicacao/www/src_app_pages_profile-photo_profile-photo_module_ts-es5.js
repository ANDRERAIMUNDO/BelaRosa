(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_profile-photo_profile-photo_module_ts"], {
    /***/
    71439:
    /*!****************************************************************************!*\
      !*** ./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MediaCapture": function MediaCapture() {
          return (
            /* binding */
            _MediaCapture
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


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/core */
      60399);

      var _MediaCapture =
      /** @class */
      function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MediaCapture, _super);

        function MediaCapture() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        MediaCapture.prototype.captureAudio = function (options) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "captureAudio", {
            "callbackOrder": "reverse"
          }, arguments);
        };

        MediaCapture.prototype.captureImage = function (options) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "captureImage", {
            "callbackOrder": "reverse"
          }, arguments);
        };

        MediaCapture.prototype.captureVideo = function (options) {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "captureVideo", {
            "callbackOrder": "reverse"
          }, arguments);
        };

        MediaCapture.prototype.onPendingCaptureResult = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "onPendingCaptureResult", {
            "eventObservable": true,
            "event": "pendingcaptureresult"
          }, arguments);
        };

        MediaCapture.prototype.onPendingCaptureError = function () {
          return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "onPendingCaptureError", {
            "eventObservable": true,
            "event": "pendingcaptureerror"
          }, arguments);
        };

        Object.defineProperty(MediaCapture.prototype, "supportedImageModes", {
          get: function get() {
            return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "supportedImageModes");
          },
          set: function set(value) {
            (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "supportedImageModes", value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(MediaCapture.prototype, "supportedAudioModes", {
          get: function get() {
            return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "supportedAudioModes");
          },
          set: function set(value) {
            (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "supportedAudioModes", value);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(MediaCapture.prototype, "supportedVideoModes", {
          get: function get() {
            return (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "supportedVideoModes");
          },
          set: function set(value) {
            (0, _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "supportedVideoModes", value);
          },
          enumerable: false,
          configurable: true
        });
        MediaCapture.pluginName = "MediaCapture";
        MediaCapture.plugin = "cordova-plugin-media-capture";
        MediaCapture.pluginRef = "navigator.device.capture";
        MediaCapture.repo = "https://github.com/apache/cordova-plugin-media-capture";
        MediaCapture.platforms = ["Android", "Browser", "iOS", "Windows"];

        MediaCapture.ɵfac = /*@__PURE__*/function () {
          var ɵMediaCapture_BaseFactory;
          return function MediaCapture_Factory(t) {
            return (ɵMediaCapture_BaseFactory || (ɵMediaCapture_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MediaCapture)))(t || MediaCapture);
          };
        }();

        MediaCapture.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
          token: MediaCapture,
          factory: function factory(t) {
            return MediaCapture.ɵfac(t);
          }
        });

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MediaCapture, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
          }], null, null);
        })();

        return MediaCapture;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvbWVkaWEtY2FwdHVyZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUNsQztBQUdzQixJQXVKWSxnQ0FBaUI7QUFBQztBQUU5QjtBQUNLO0FBQU0sSUEyQi9CLG1DQUFZLGFBQUMsT0FBNkI7QUFLcEIsSUFPdEIsbUNBQVksYUFBQyxPQUE2QjtBQUtwQixJQU90QixtQ0FBWSxhQUFDLE9BQTZCO0FBS3BCLElBT3RCLDZDQUFzQjtBQU1jLElBTXBDLDRDQUFxQjtBQUltRSwwQkE1RXhGLDZDQUFtQjtBQUFJO0FBSXZCO0FBRzRCO0FBR3hCO0FBQTJCO0FBQVEsMEJBSHZDLDZDQUFtQjtBQUFJO0FBR21DO0FBSTlDO0FBQTJCO0FBR3hCO0FBQVEsMEJBSHZCLDZDQUFtQjtBQUFJO0FBR21DO0FBRTNCO0FBRzdCO0FBQ0g7QUFDRztBQUE4QztBQUtsRDtBQUF5RDtBQUV2QjtnREF0Q2pDLFVBQVU7Ozs7MEJBQ0w7QUFBQyx1QkE3SlA7QUFBRSxFQTZKZ0MsaUJBQWlCO0FBQ2xELFNBRFksWUFBWTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUZpbGUge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGZpbGUsIHdpdGhvdXQgcGF0aCBpbmZvcm1hdGlvbi5cbiAgICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmdWxsIHBhdGggb2YgdGhlIGZpbGUsIGluY2x1ZGluZyB0aGUgbmFtZS5cbiAgICovXG4gIGZ1bGxQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZmlsZSdzIG1pbWUgdHlwZVxuICAgKi9cbiAgdHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSBmaWxlIHdhcyBsYXN0IG1vZGlmaWVkLlxuICAgKi9cbiAgbGFzdE1vZGlmaWVkRGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGZpbGUsIGluIGJ5dGVzLlxuICAgKi9cbiAgc2l6ZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGZvcm1hdCBpbmZvcm1hdGlvbiBvZiB0aGUgbWVkaWEgZmlsZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gc3VjY2Vzc0NhbGxiYWNrXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVycm9yQ2FsbGJhY2tcbiAgICovXG4gIGdldEZvcm1hdERhdGEoc3VjY2Vzc0NhbGxiYWNrOiAoZGF0YTogTWVkaWFGaWxlRGF0YSkgPT4gYW55LCBlcnJvckNhbGxiYWNrPzogKGVycjogYW55KSA9PiBhbnkpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhRmlsZURhdGEge1xuICAvKipcbiAgICogVGhlIGFjdHVhbCBmb3JtYXQgb2YgdGhlIGF1ZGlvIGFuZCB2aWRlbyBjb250ZW50LlxuICAgKi9cbiAgY29kZWNzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgYXZlcmFnZSBiaXRyYXRlIG9mIHRoZSBjb250ZW50LiBUaGUgdmFsdWUgaXMgemVybyBmb3IgaW1hZ2VzLlxuICAgKi9cbiAgYml0cmF0ZTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgaW1hZ2Ugb3IgdmlkZW8gaW4gcGl4ZWxzLiBUaGUgdmFsdWUgaXMgemVybyBmb3IgYXVkaW8gY2xpcHMuXG4gICAqL1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgaW1hZ2Ugb3IgdmlkZW8gaW4gcGl4ZWxzLiBUaGUgdmFsdWUgaXMgemVybyBmb3IgYXVkaW8gY2xpcHMuXG4gICAqL1xuICB3aWR0aDogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGxlbmd0aCBvZiB0aGUgdmlkZW8gb3Igc291bmQgY2xpcCBpbiBzZWNvbmRzLiBUaGUgdmFsdWUgaXMgemVybyBmb3IgaW1hZ2VzLlxuICAgKi9cbiAgZHVyYXRpb246IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXB0dXJlRXJyb3Ige1xuICBjb2RlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdHVyZUF1ZGlvT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBhdWRpbyBjbGlwcy4gRGVmYXVsdHMgdG8gMS5cbiAgICogT24gaU9TIHlvdSBjYW4gb25seSByZWNvcmQgb25lIGZpbGUuXG4gICAqL1xuICBsaW1pdD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE1heGltdW0gZHVyYXRpb24gb2YgYW4gYXVkaW8gc291bmQgY2xpcCwgaW4gc2Vjb25kcy4gVGhpcyBkb2VzIG5vdCB3b3JrIG9uIEFuZHJvaWQgZGV2aWNlcy5cbiAgICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcHR1cmVJbWFnZU9wdGlvbnMge1xuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgaW1hZ2VzIHRvIGNhcHR1cmUuIFRoaXMgbGltaXQgaXMgbm90IHN1cHBvcnRlZCBvbiBpT1MsIG9ubHkgb25lIGltYWdlIHdpbGwgYmUgdGFrZW4gcGVyIGludm9jYXRpb24uXG4gICAqL1xuICBsaW1pdD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXB0dXJlVmlkZW9PcHRpb25zIHtcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHZpZGVvIGNsaXBzIHRvIHJlY29yZC4gVGhpcyB2YWx1ZSBpcyBpZ25vcmVkIG9uIGlPUywgb25seSBvbmUgdmlkZW8gY2xpcCBjYW4gYmUgdGFrZW4gcGVyIGludm9jYXRpb24uXG4gICAqL1xuICBsaW1pdD86IG51bWJlcjtcbiAgLyoqXG4gICAqIE1heGltdW0gZHVyYXRpb24gcGVyIHZpZGVvIGNsaXAuIFRoaXMgd2lsbCBiZSBpZ25vcmVkIG9uIEJsYWNrQmVycnkuXG4gICAqL1xuICBkdXJhdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIFF1YWxpdHkgb2YgdGhlIHZpZGVvLiBUaGlzIHBhcmFtZXRlciBjYW4gb25seSBiZSB1c2VkIHdpdGggQW5kcm9pZC5cbiAgICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbkRhdGEge1xuICAvKipcbiAgICogVGhlIEFTQ0lJLWVuY29kZWQgbG93ZXJjYXNlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG1lZGlhIHR5cGUuXG4gICAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBpbWFnZSBvciB2aWRlbyBpbiBwaXhlbHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBzb3VuZCBjbGlwcy5cbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBpbWFnZSBvciB2aWRlbyBpbiBwaXhlbHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBzb3VuZCBjbGlwcy5cbiAgICovXG4gIHdpZHRoOiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgTWVkaWEgQ2FwdHVyZVxuICogQHByZW1pZXIgbWVkaWEtY2FwdHVyZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGRldmljZSdzIGF1ZGlvLCBpbWFnZSwgYW5kIHZpZGVvIGNhcHR1cmUgY2FwYWJpbGl0aWVzLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tbWVkaWEtY2FwdHVyZWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtNZWRpYSBDYXB0dXJlIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW1lZGlhLWNhcHR1cmUpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTWVkaWFDYXB0dXJlLCBNZWRpYUZpbGUsIENhcHR1cmVFcnJvciwgQ2FwdHVyZUltYWdlT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbWVkaWEtY2FwdHVyZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lZGlhQ2FwdHVyZTogTWVkaWFDYXB0dXJlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogbGV0IG9wdGlvbnM6IENhcHR1cmVJbWFnZU9wdGlvbnMgPSB7IGxpbWl0OiAzIH1cbiAqIHRoaXMubWVkaWFDYXB0dXJlLmNhcHR1cmVJbWFnZShvcHRpb25zKVxuICogICAudGhlbihcbiAqICAgICAoZGF0YTogTWVkaWFGaWxlW10pID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICogICAgIChlcnI6IENhcHR1cmVFcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnIpXG4gKiAgICk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogTWVkaWFGaWxlXG4gKiBNZWRpYUZpbGVEYXRhXG4gKiBDYXB0dXJlRXJyb3JcbiAqIENhcHR1cmVBdWRpb09wdGlvbnNcbiAqIENhcHR1cmVJbWFnZU9wdGlvbnNcbiAqIENhcHR1cmVWaWRlb09wdGlvbnNcbiAqIENvbmZpZ3VyYXRpb25EYXRhXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTWVkaWFDYXB0dXJlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEtY2FwdHVyZScsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5kZXZpY2UuY2FwdHVyZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW1lZGlhLWNhcHR1cmUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lZGlhQ2FwdHVyZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoZSByZWNvcmRpbmcgaW1hZ2Ugc2l6ZXMgYW5kIGZvcm1hdHMgc3VwcG9ydGVkIGJ5IHRoZSBkZXZpY2UuXG4gICAqIEByZXR1cm5zIHtDb25maWd1cmF0aW9uRGF0YVtdfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHN1cHBvcnRlZEltYWdlTW9kZXM6IENvbmZpZ3VyYXRpb25EYXRhW107XG5cbiAgLyoqXG4gICAqIFRoZSBhdWRpbyByZWNvcmRpbmcgZm9ybWF0cyBzdXBwb3J0ZWQgYnkgdGhlIGRldmljZS5cbiAgICogQHJldHVybnMge0NvbmZpZ3VyYXRpb25EYXRhW119XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc3VwcG9ydGVkQXVkaW9Nb2RlczogQ29uZmlndXJhdGlvbkRhdGFbXTtcblxuICAvKipcbiAgICogVGhlIHJlY29yZGluZyB2aWRlbyByZXNvbHV0aW9ucyBhbmQgZm9ybWF0cyBzdXBwb3J0ZWQgYnkgdGhlIGRldmljZS5cbiAgICogQHJldHVybnMge0NvbmZpZ3VyYXRpb25EYXRhW119XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc3VwcG9ydGVkVmlkZW9Nb2RlczogQ29uZmlndXJhdGlvbkRhdGFbXTtcblxuICAvKipcbiAgICogU3RhcnQgdGhlIGF1ZGlvIHJlY29yZGVyIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgYXVkaW8gY2xpcCBmaWxlcy5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FwdHVyZUF1ZGlvKG9wdGlvbnM/OiBDYXB0dXJlQXVkaW9PcHRpb25zKTogUHJvbWlzZTxNZWRpYUZpbGVbXSB8IENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgY2FtZXJhIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgaW1hZ2UgZmlsZXMuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE1lZGlhRmlsZVtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGNhcHR1cmVJbWFnZShvcHRpb25zPzogQ2FwdHVyZUltYWdlT3B0aW9ucyk6IFByb21pc2U8TWVkaWFGaWxlW10gfCBDYXB0dXJlRXJyb3I+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHZpZGVvIHJlY29yZGVyIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgdmlkZW8gY2xpcCBmaWxlcy5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FwdHVyZVZpZGVvKG9wdGlvbnM/OiBDYXB0dXJlVmlkZW9PcHRpb25zKTogUHJvbWlzZTxNZWRpYUZpbGVbXSB8IENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBpcyBmaXJlZCBpZiB0aGUgY2FwdHVyZSBjYWxsIGlzIHN1Y2Nlc3NmdWxcbiAgICogQHJldHVybnMge09ic2VydmFibGU8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ3BlbmRpbmdjYXB0dXJlcmVzdWx0JyxcbiAgfSlcbiAgb25QZW5kaW5nQ2FwdHVyZVJlc3VsdCgpOiBPYnNlcnZhYmxlPE1lZGlhRmlsZVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGlzIGZpcmVkIGlmIHRoZSBjYXB0dXJlIGNhbGwgaXMgdW5zdWNjZXNzZnVsXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENhcHR1cmVFcnJvcj59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAncGVuZGluZ2NhcHR1cmVlcnJvcicsXG4gIH0pXG4gIG9uUGVuZGluZ0NhcHR1cmVFcnJvcigpOiBPYnNlcnZhYmxlPENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

      /***/

    },

    /***/
    74038:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/profile-photo/profile-photo-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePhotoPageRoutingModule": function ProfilePhotoPageRoutingModule() {
          return (
            /* binding */
            _ProfilePhotoPageRoutingModule
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


      var _profile_photo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-photo.page */
      79033);

      var routes = [{
        path: '',
        component: _profile_photo_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePhotoPage
      }];

      var _ProfilePhotoPageRoutingModule = function ProfilePhotoPageRoutingModule() {
        _classCallCheck(this, ProfilePhotoPageRoutingModule);
      };

      _ProfilePhotoPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProfilePhotoPageRoutingModule);
      /***/
    },

    /***/
    93747:
    /*!*************************************************************!*\
      !*** ./src/app/pages/profile-photo/profile-photo.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePhotoPageModule": function ProfilePhotoPageModule() {
          return (
            /* binding */
            _ProfilePhotoPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _profile_photo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-photo-routing.module */
      74038);
      /* harmony import */


      var _profile_photo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile-photo.page */
      79033);
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      71439);

      var _ProfilePhotoPageModule = function ProfilePhotoPageModule() {
        _classCallCheck(this, ProfilePhotoPageModule);
      };

      _ProfilePhotoPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _profile_photo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePhotoPageRoutingModule],
        providers: [_ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_2__.MediaCapture],
        declarations: [_profile_photo_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePhotoPage]
      })], _ProfilePhotoPageModule);
      /***/
    },

    /***/
    79033:
    /*!***********************************************************!*\
      !*** ./src/app/pages/profile-photo/profile-photo.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePhotoPage": function ProfilePhotoPage() {
          return (
            /* binding */
            _ProfilePhotoPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_profile_photo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./profile-photo.page.html */
      22805);
      /* harmony import */


      var _profile_photo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile-photo.page.scss */
      19473);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/config/config */
      64573);
      /* harmony import */


      var _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/cliente.service */
      70932);
      /* harmony import */


      var _services_endereco_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/endereco.service */
      61478);
      /* harmony import */


      var _services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/photo.service */
      61957);
      /* harmony import */


      var _services_registro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/registro.service */
      60023);
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/storage.service */
      71188);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);

      var _ProfilePhotoPage = /*#__PURE__*/function () {
        function ProfilePhotoPage(storageService, registroService, clienteService, enderecoService, loadingController, alertController, route, router, photoService, camera) {
          _classCallCheck(this, ProfilePhotoPage);

          this.storageService = storageService;
          this.registroService = registroService;
          this.clienteService = clienteService;
          this.enderecoService = enderecoService;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.route = route;
          this.router = router;
          this.photoService = photoService;
          this.camera = camera;
          this.animation = true;
          this.id = "";
        }

        _createClass(ProfilePhotoPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getMyData();
          }
        }, {
          key: "getMyData",
          value: function getMyData() {
            var _this = this;

            var localUser = this.storageService.getLocalUser();

            if (localUser && localUser.email) {
              this.registroService.findByEmail(localUser.email).subscribe(function (response) {
                _this.registro = response;
                _this.cliente = response;

                _this.getImageIfExists();

                _this.sliceTypeCliente();
              }, function (catchError) {
                if (catchError.status == 403) {
                  _this.router.navigate(['/home']);
                }
              });
            }
          }
        }, {
          key: "getImageIfExists",
          value: function getImageIfExists() {
            var _this2 = this;

            this.registroService.getImageFromBucket(this.registro.id).subscribe(function (response) {
              _this2.registro.imageUrl = "".concat(src_config_config__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.bukectBaseUrl, "/profiles/cp").concat(_this2.registro.id, ".png");
            }, function (catchError) {
              console.log(catchError);
            });
          }
        }, {
          key: "sliceTypeCliente",
          value: function sliceTypeCliente() {
            this.DateSlice = this.registro.cliente.dateNasc;
            this.dia = this.DateSlice.slice(0, 2);
            this.mes = this.DateSlice.slice(2, 4);
            this.ano = this.DateSlice.slice(4, 8);
          }
        }, {
          key: "blobToDataURL",
          value: function blobToDataURL(blob) {
            return new Promise(function (fulfill, reject) {
              var reader = new FileReader();
              reader.onerror = reject;

              reader.onload = function (e) {
                return fulfill(reader.result);
              };

              reader.readAsDataURL(blob);
            });
          }
        }, {
          key: "getCameraPicture",
          value: function getCameraPicture() {
            var _this3 = this;

            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.PNG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this3.picture = 'data:image/png;base64,' + imageData;
            }, function (catchError) {
              _this3.presentGetPicture();

              console.log(catchError);
            });
          }
        }, {
          key: "sendPicture",
          value: function sendPicture() {
            var _this4 = this;

            this.photoService.uploadPicture(this.picture).subscribe(function (response) {
              _this4.picture = null;

              _this4.getImageIfExists();

              setTimeout(function () {
                if (_this4.animation == true) {
                  _this4.router.navigate(['/dashboard/circle-upload-image']);
                }
              }, 1000);
            }, function (catchError) {
              console.log("error" + catchError);

              _this4.router.navigate(['/dashboard/profile']);
            });
          }
        }, {
          key: "presentGetPicture",
          value: function presentGetPicture() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Atenção!',
                        message: 'Erro ao carregar imagem.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.picture = null;
          }
        }]);

        return ProfilePhotoPage;
      }();

      _ProfilePhotoPage.ctorParameters = function () {
        return [{
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService
        }, {
          type: _services_registro_service__WEBPACK_IMPORTED_MODULE_6__.RegistroService
        }, {
          type: _services_cliente_service__WEBPACK_IMPORTED_MODULE_3__.ClienteService
        }, {
          type: _services_endereco_service__WEBPACK_IMPORTED_MODULE_4__.EnderecoService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _services_photo_service__WEBPACK_IMPORTED_MODULE_5__.PhotoService
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__.Camera
        }];
      };

      _ProfilePhotoPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-profile-photo',
        template: _raw_loader_profile_photo_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_photo_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProfilePhotoPage);
      /***/
    },

    /***/
    19473:
    /*!*************************************************************!*\
      !*** ./src/app/pages/profile-photo/profile-photo.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.ion-text-center {\n  text-align: center;\n  left: 0;\n  right: 0;\n}\n\nion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: length;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\nion-avatar {\n  left: auto;\n  right: auto;\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n\n#img-client {\n  margin-top: 30px;\n}\n\nion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: center;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\nion-content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nh6 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  color: #0f0f0f;\n}\n\nh5 {\n  color: #f063db;\n}\n\nion-icon {\n  width: 20px;\n  height: 20px;\n}\n\nion-button {\n  margin-right: 10px;\n  margin-left: 10px;\n  color: #f0bfe9;\n}\n\nion-item {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n#ion-button-update {\n  width: auto;\n  height: 50px;\n}\n\n#ion-icon-button {\n  width: 30px;\n  height: 30px;\n}\n\nion-spinner {\n  color: #d35db9;\n  width: 20px;\n  height: 20px;\n  transform: scale(3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGhvdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUVJLFVBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDTSxXQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUdFO0VBQ0ksZ0JBQUE7QUFBTjs7QUFHRTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUFKOztBQUdFO0VBQ0UsMENBQUE7QUFBSjs7QUFHRTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO09BQUEsdUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUU7RUFDRSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJwcm9maWxlLXBob3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cblxuLmlvbi10ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7IFxufVxuXG5pb24taGVhZGVyIHtcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gICAgdGV4dC1hbGlnbjogbGVuZ3RoOyBcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxOTEsIDIzMyk7XG59XG4gIFxuaW9uLWF2YXRhciB7XG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogYXV0bztcbn1cblxuaW9uLWltZyB7IFxuICAgICAgd2lkdGg6IGF1dG87IFxuICAgICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgI2ltZy1jbGllbnQge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuXG4gIGlvbi1oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgY29sb3I6IHJnYig4LCA4LCA4KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE5MSwgMjMzKTtcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQgeyAgXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjM5LCAyNTApO1xuICB9IFxuICBcbiAgaDYge1xuICAgIGZvbnQtZmFtaWx5OidMdWNpZGEgU2FucyBSZWd1bGFyJztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjsgXG4gICAgY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcbiAgfVxuICBoNSB7XG4gICAgY29sb3I6ICByZ2IoMjQwLCA5OSwgMjE5KTtcbiAgfVxuICBcbiAgaW9uLWljb24ge1xuICAgIHdpZHRoOiAyMHB4OyBcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xuICB9XG5cbiAgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gICNpb24tYnV0dG9uLXVwZGF0ZSB7XG4gICAgd2lkdGg6IGF1dG87IFxuICAgIGhlaWdodDogNTBweDtcbiAgfVxuICAgIFxuICAjaW9uLWljb24tYnV0dG9uIHtcbiAgICB3aWR0aDogMzBweDsgXG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG4gIFxuICBpb24tc3Bpbm5lciB7XG4gICAgY29sb3I6cmdiKDIxMSwgOTMsIDE4NSk7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XG59XG4gIC8vICAgIG1hcmdpbi1yaWdodDogOTBweDtcbiAgIC8vICAgICBtYXJnaW4tbGVmdDogMHB4OyJdfQ== */";
      /***/
    },

    /***/
    22805:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-photo/profile-photo.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-item>\n      <div class=\"positon\">\n        <ion-avatar slot=\"end\">\n          <img [src]=\"registro?.imageUrl || '../../assets/person.svg'\">\n        </ion-avatar>\n      </div>\n      <ion-label>\n        <h3>{{registro?.cliente?.name}}</h3>\n        <p>{{dia}}/{{mes}}/{{ano}}</p>\n        <p>{{registro?.email}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <div class=\"ion-text-center\">\n      <ion-card>\n        <img *ngIf=\"!picture\" id=\"img-client\" [src]=\"registro?.imageUrl || '../../assets/person.svg'\">\n        <ion-img *ngIf=\"picture\" [src]=\"picture\"></ion-img>\n      </ion-card>\n    </div>\n\n    <ion-item id=\"ion-button-update\" (click)=\"getCameraPicture()\">\n      <ion-icon id=\"ion-icon-button\" name=\"camera-outline\"></ion-icon>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n      <ion-label class=\"ion-text-center\">\n      <h2>Carrerar Imagem</h2>\n      </ion-label>\n    </ion-item>\n    \n    <ion-item *ngIf=\"picture\" id=\"ion-button-update\" (click)=\"sendPicture()\" > \n      <ion-icon id=\"ion-icon-button\" name=\"folder-open-outline\"></ion-icon>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n      <ion-label class=\"ion-text-center\">\n      <h2>Enviar Imagem</h2>\n      </ion-label>\n    </ion-item>\n\n    <ion-item *ngIf=\"myImage\" id=\"ion-button-update\" (click)=\"cancel()\" > \n      <ion-icon id=\"ion-icon-button\" name=\"remove-circle-outline\"></ion-icon>\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      <ion-label class=\"ion-text-center\">\n      <h2>Cancelar</h2>\n      </ion-label>\n    </ion-item>\n\n    <ion-item [routerLink]=\"['../../profile']\" id=\"ion-button-update\">\n      <ion-icon id=\"ion-icon-button\" name=\"person-outline\"></ion-icon> \n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      <ion-label class=\"ion-text-center\">\n      <h2>Voltar</h2>\n      </ion-label>\n    </ion-item>\n    \n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_profile-photo_profile-photo_module_ts-es5.js.map