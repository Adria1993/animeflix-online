(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\animeflix\src\main.ts */"zUnb");


/***/ }),

/***/ "A62U":
/*!*************************************************************************!*\
  !*** ./src/app/modals/timeout-exception/timeout-exception.component.ts ***!
  \*************************************************************************/
/*! exports provided: TimeoutExceptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutExceptionComponent", function() { return TimeoutExceptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






var TimeoutExceptionComponent = /** @class */ (function () {
    function TimeoutExceptionComponent(_router, data) {
        this._router = _router;
        this.data = data;
    }
    TimeoutExceptionComponent.prototype.ngOnInit = function () {
    };
    TimeoutExceptionComponent.prototype.refrescar = function () {
        this._router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this._router.onSameUrlNavigation = 'reload';
        if (this.data != null && this.data.from != "" && this.data.id != "") {
            this._router.navigate(["/" + this.data.from, this.data.id]);
        }
        else {
            this._router.navigate(['/']);
        }
    };
    TimeoutExceptionComponent.prototype.volverInicio = function () {
        this._router.navigate(['/']);
    };
    TimeoutExceptionComponent.ɵfac = function TimeoutExceptionComponent_Factory(t) { return new (t || TimeoutExceptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    TimeoutExceptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeoutExceptionComponent, selectors: [["app-timeout-exception"]], decls: 12, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", "cdkFocusInitial", "", 3, "mat-dialog-close", "click"], ["mat-button", "", "color", "warn", 3, "mat-dialog-close", "click"]], template: function TimeoutExceptionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error de conexion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Servidor reiniciandose, por favor, espere.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Puede reintentar conectarse pulsando el boton Refrescar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeoutExceptionComponent_Template_button_click_8_listener() { return ctx.refrescar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Refrescar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeoutExceptionComponent_Template_button_click_10_listener() { return ctx.volverInicio(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inicio");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy90aW1lb3V0LWV4Y2VwdGlvbi90aW1lb3V0LWV4Y2VwdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return TimeoutExceptionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeoutExceptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeout-exception',
                templateUrl: './timeout-exception.component.html',
                styleUrls: ['./timeout-exception.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "CZqF":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.message = '';
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
    SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { message: ["init", "message"] }, decls: 14, vars: 1, consts: [[1, "container"], [1, "row"], ["id", "loader"], [1, "dot"], [1, "loading"], [1, "spinner-message"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
        } }, styles: ["#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 87.5px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]::before {\n  border-radius: 100%;\n  content: \"\";\n  height: 87.5px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: scale(0);\n  width: 87.5px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1) {\n  transform: rotate(45deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1)::before {\n  animation: 0.8s linear 0.1s normal none infinite running load;\n  background: #00ff80 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2) {\n  transform: rotate(90deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2)::before {\n  animation: 0.8s linear 0.2s normal none infinite running load;\n  background: #00ffea none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3) {\n  transform: rotate(135deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3)::before {\n  animation: 0.8s linear 0.3s normal none infinite running load;\n  background: #00aaff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4) {\n  transform: rotate(180deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4)::before {\n  animation: 0.8s linear 0.4s normal none infinite running load;\n  background: #0040ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5) {\n  transform: rotate(225deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5)::before {\n  animation: 0.8s linear 0.5s normal none infinite running load;\n  background: #2a00ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6) {\n  transform: rotate(270deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6)::before {\n  animation: 0.8s linear 0.6s normal none infinite running load;\n  background: #9500ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7) {\n  transform: rotate(315deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7)::before {\n  animation: 0.8s linear 0.7s normal none infinite running load;\n  background: magenta none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8) {\n  transform: rotate(360deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8)::before {\n  animation: 0.8s linear 0.8s normal none infinite running load;\n  background: #ff0095 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  bottom: -40px;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: 180px;\n}\n\n@keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n\n@keyframes load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n\n.spinner-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSx3QkFBQTtBQUNKOztBQUVFO0VBQ0UsNkRBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVFO0VBQ0Usd0JBQUE7QUFDSjs7QUFFRTtFQUNFLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSw2REFBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsNkRBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSw2REFBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsNkRBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFRTtFQUNFLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQUNKO0FBQ0Y7O0FBRUU7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQUFKO0FBQ0Y7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2FkZXIge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiAxNzVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICB9XHJcbiAgXHJcbiAgI2xvYWRlciB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Qge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDg3LjVweDtcclxuICB9XHJcbiAgXHJcbiAgI2xvYWRlciAuZG90OjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDg3LjVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB3aWR0aDogODcuNXB4O1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzEpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisxKTo6YmVmb3JlIHtcclxuICAgIGFuaW1hdGlvbjogMC44cyBsaW5lYXIgMC4xcyBub3JtYWwgbm9uZSBpbmZpbml0ZSBydW5uaW5nIGxvYWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBmZjgwIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMikge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzIpOjpiZWZvcmUge1xyXG4gICAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjJzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcclxuICAgIGJhY2tncm91bmQ6ICMwMGZmZWEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3biszKSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzMpOjpiZWZvcmUge1xyXG4gICAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjNzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcclxuICAgIGJhY2tncm91bmQ6ICMwMGFhZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis0KSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzQpOjpiZWZvcmUge1xyXG4gICAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjRzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDQwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis1KSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzUpOjpiZWZvcmUge1xyXG4gICAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjVzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcclxuICAgIGJhY2tncm91bmQ6ICMyYTAwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis2KSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzYpOjpiZWZvcmUge1xyXG4gICAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjZzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcclxuICAgIGJhY2tncm91bmQ6ICM5NTAwZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis3KSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzcpOjpiZWZvcmUge1xyXG4gICAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjdzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcclxuICAgIGJhY2tncm91bmQ6IG1hZ2VudGEgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bis4KSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzgpOjpiZWZvcmUge1xyXG4gICAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjhzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjAwOTUgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgI2xvYWRlciAubG9hZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvdHRvbTogLTQwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgbG9hZCB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBsb2FkIHtcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc3Bpbm5lci1tZXNzYWdlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9Il19 */"] });
    return SpinnerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.scss']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['init']
        }] }); })();


/***/ }),

/***/ "DRUN":
/*!*****************************************************************!*\
  !*** ./src/app/services/anime-service/anime-service.service.ts ***!
  \*****************************************************************/
/*! exports provided: AnimeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeServiceService", function() { return AnimeServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






var TIMEOUT = 25000;
var AnimeServiceService = /** @class */ (function () {
    function AnimeServiceService(httpClient) {
        this.httpClient = httpClient;
        this.REST_API_SERVER = "https://anime-express.glitch.me/";
    }
    AnimeServiceService.prototype.getAllAnimes = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var promise;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(this.REST_API_SERVER + "allAnime").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(TIMEOUT)).toPromise()];
                    case 1:
                        promise = _a.sent();
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    AnimeServiceService.prototype.postAnime = function (body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var myHeaders, animeCasted, obj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                        myHeaders.set('Content-Type', 'application/json');
                        animeCasted = JSON.stringify(body, function (key, value) {
                            if (value !== null && key != "show_more")
                                return value;
                        });
                        obj = JSON.parse(animeCasted);
                        return [4 /*yield*/, this.httpClient.post(this.REST_API_SERVER + "anime", obj, { headers: myHeaders }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(TIMEOUT)).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AnimeServiceService.prototype.getAnime = function (body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(this.REST_API_SERVER + "animeById/" + body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(TIMEOUT)).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AnimeServiceService.prototype.deleteAnime = function (body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.delete(this.REST_API_SERVER + "deleteAnime/" + body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(TIMEOUT)).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AnimeServiceService.ɵfac = function AnimeServiceService_Factory(t) { return new (t || AnimeServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    AnimeServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AnimeServiceService, factory: AnimeServiceService.ɵfac, providedIn: 'root' });
    return AnimeServiceService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnimeServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "DzxV":
/*!**********************************!*\
  !*** ./src/app/models/Animes.ts ***!
  \**********************************/
/*! exports provided: Animes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animes", function() { return Animes; });
var Animes = /** @class */ (function () {
    function Animes(_name, _description, _urls, _image, _id) {
        this.show_more = true;
        this.name = _name;
        this.urls = _urls;
        this.image = _image;
        this._id = _id;
        this.description = _description;
    }
    return Animes;
}());



/***/ }),

/***/ "EApE":
/*!****************************************************!*\
  !*** ./src/app/anime-vide/anime-vide.component.ts ***!
  \****************************************************/
/*! exports provided: AnimeVideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeVideComponent", function() { return AnimeVideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_downloads_service_downloads_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/downloads-service/downloads.service */ "RuBp");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









var _c0 = function () { return { "display": "none" }; };
var _c1 = function () { return { "display": "block" }; };
var AnimeVideComponent = /** @class */ (function () {
    function AnimeVideComponent(route, httpDownloads, router, sanitizer, _location) {
        this.route = route;
        this.httpDownloads = httpDownloads;
        this.router = router;
        this.sanitizer = sanitizer;
        this._location = _location;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    AnimeVideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.megaLink = _this.sanitizer.bypassSecurityTrustResourceUrl('https://mega.nz/embed' + params['link']);
        });
        this.anime_id = localStorage.getItem('anime_id');
        this.max_episodes = +localStorage.getItem('max_episodes');
        this.current_episodes = +localStorage.getItem('current_episode');
    };
    AnimeVideComponent.prototype.goBack = function () {
        this.router.navigate(['anime-detail', this.anime_id]);
    };
    AnimeVideComponent.prototype.hasPreviousEpisode = function () {
        return (this.current_episodes == 1);
    };
    AnimeVideComponent.prototype.hasNextEpisode = function () {
        return (this.current_episodes < this.max_episodes);
    };
    AnimeVideComponent.prototype.goToPreviousEpisode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var episode;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.current_episodes--;
                        return [4 /*yield*/, this.httpDownloads.getEpisodeByNumberAndId(this.anime_id, this.current_episodes + "")];
                    case 1:
                        episode = _a.sent();
                        localStorage.setItem('current_episode', this.current_episodes + '');
                        this.router.navigate(['/video', episode.link.split('/')[3]]);
                        return [2 /*return*/];
                }
            });
        });
    };
    AnimeVideComponent.prototype.goToNextEpisode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var episode;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.current_episodes++;
                        return [4 /*yield*/, this.httpDownloads.getEpisodeByNumberAndId(this.anime_id, this.current_episodes + "")];
                    case 1:
                        episode = _a.sent();
                        localStorage.setItem('current_episode', this.current_episodes + '');
                        this.router.navigate(['/video', episode.link.split('/')[3]]);
                        return [2 /*return*/];
                }
            });
        });
    };
    AnimeVideComponent.ɵfac = function AnimeVideComponent_Factory(t) { return new (t || AnimeVideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_downloads_service_downloads_service__WEBPACK_IMPORTED_MODULE_3__["DownloadsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
    AnimeVideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnimeVideComponent, selectors: [["app-anime-vide"]], decls: 16, vars: 7, consts: [[1, "container"], [1, "action-buttons"], ["mat-raised-button", "", 1, "large", 3, "ngStyle", "click"], ["mat-raised-button", "", "color", "primary", 1, "large", 3, "click"], [1, "video"], ["webkitallowfullscreen", "", "mozallowfullscreen", "", "allowfullscreen", "", "scrolling", "no", "allowfullscreen", "", "width", "800", "height", "600", "frameborder", "0", 3, "src"]], template: function AnimeVideComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeVideComponent_Template_button_click_2_listener() { return ctx.goToPreviousEpisode(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "skip_previous");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Anterior episodio");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeVideComponent_Template_button_click_6_listener() { return ctx.goBack(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "exit_to_app");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Volver");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeVideComponent_Template_button_click_10_listener() { return ctx.goToNextEpisode(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "skip_next");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Siguiente episodio");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "iframe", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.hasPreviousEpisode() ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.hasNextEpisode() ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.megaLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 120px;\n  padding: 10px 0px 10px 0px;\n  border-radius: 3px;\n  background: rgba(192, 192, 192, 0.7);\n  display: flex;\n  flex-direction: column;\n  animation-name: fadein;\n  animation-fill-mode: both;\n  animation-duration: 0.5s;\n}\n.container[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 90%;\n  margin: 0 auto;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWUtdmlkZS9hbmltZS12aWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL2FuaW1lLXZpZGUvYW5pbWUtdmlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjEyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTkyLCAxOTIsIDE5MiwgLjcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gICAgLnZpZGVve1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1idXR0b25ze1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
    return AnimeVideComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnimeVideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-anime-vide',
                templateUrl: './anime-vide.component.html',
                styleUrls: ['./anime-vide.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_downloads_service_downloads_service__WEBPACK_IMPORTED_MODULE_3__["DownloadsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }]; }, null); })();


/***/ }),

/***/ "HQNm":
/*!************************************************!*\
  !*** ./src/app/root-nav/root-nav.component.ts ***!
  \************************************************/
/*! exports provided: RootNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootNavComponent", function() { return RootNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _modals_add_anime_add_anime_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/add-anime/add-anime.component */ "VOa8");
/* harmony import */ var _modals_timeout_exception_timeout_exception_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/timeout-exception/timeout-exception.component */ "A62U");
/* harmony import */ var _services_anime_service_anime_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/anime-service/anime-service.service */ "DRUN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");

















var _c0 = function () { return [""]; };
var _c1 = ["*"];
var RootNavComponent = /** @class */ (function () {
    function RootNavComponent(httpAnime, breakpointObserver, dialog) {
        this.httpAnime = httpAnime;
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        console.log(this.isHandset$);
    }
    RootNavComponent.prototype.AddAnime = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_modals_add_anime_add_anime_component__WEBPACK_IMPORTED_MODULE_4__["AddAnimeComponent"], {
            width: '250px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var anime, error_1, dialogRef_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(result != undefined)) return [3 /*break*/, 4];
                        anime = result.anime;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpAnime.postAnime(anime)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1.name == "TimeoutError") {
                            dialogRef_1 = this.dialog.open(_modals_timeout_exception_timeout_exception_component__WEBPACK_IMPORTED_MODULE_5__["TimeoutExceptionComponent"], {
                                width: '250px',
                                disableClose: true,
                            });
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    RootNavComponent.ɵfac = function RootNavComponent_Factory(t) { return new (t || RootNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_anime_service_anime_service_service__WEBPACK_IMPORTED_MODULE_6__["AnimeServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
    RootNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RootNavComponent, selectors: [["app-root-nav"]], ngContentSelectors: _c1, decls: 20, vars: 10, consts: [[1, "sidenav-container", 3, "hasBackdrop"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", 3, "routerLink"], ["mat-list-item", "", 3, "click"], ["color", "primary"], ["aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"]], template: function RootNavComponent_Template(rf, ctx) { if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Anime");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootNavComponent_Template_a_click_10_listener() { return ctx.AddAnime(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "A\u00F1adir Anime");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-sidenav-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-toolbar", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootNavComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r0.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "more_vert");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Animeflix");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hasBackdrop", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, ctx.isHandset$) ? "over" : "side")("opened", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx.isHandset$) ? "dialog" : "navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
        } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n  color: white;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vdC1uYXYvcm9vdC1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Jvb3QtbmF2L3Jvb3QtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWF0LWxpc3QtaXRlbXtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });
    return RootNavComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RootNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root-nav',
                templateUrl: './root-nav.component.html',
                styleUrls: ['./root-nav.component.scss']
            }]
    }], function () { return [{ type: _services_anime_service_anime_service_service__WEBPACK_IMPORTED_MODULE_6__["AnimeServiceService"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "M2Vo":
/*!****************************************************!*\
  !*** ./src/app/anime-view/anime-view.component.ts ***!
  \****************************************************/
/*! exports provided: AnimeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeViewComponent", function() { return AnimeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modals_add_anime_add_anime_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/add-anime/add-anime.component */ "VOa8");
/* harmony import */ var _modals_timeout_exception_timeout_exception_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/timeout-exception/timeout-exception.component */ "A62U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_anime_service_anime_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/anime-service/anime-service.service */ "DRUN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_downloads_service_downloads_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/downloads-service/downloads.service */ "RuBp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../spinner/spinner.component */ "CZqF");
























function AnimeViewComponent_div_5_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeViewComponent_div_5_mat_option_16_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); var option_r7 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.viewLinks(option_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", "data:image/png;base64," + option_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", option_r7.name, " | Ep: ", option_r7.total_episodes, "");
} }
function AnimeViewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-button-toggle-group", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-button-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeViewComponent_div_5_Template_mat_button_toggle_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.changeSelection("cards"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " view_carousel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-button-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeViewComponent_div_5_Template_mat_button_toggle_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.changeSelection("lists"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "pagination-controls", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function AnimeViewComponent_div_5_Template_pagination_controls_pageChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-autocomplete", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AnimeViewComponent_div_5_mat_option_16_Template, 4, 4, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r0.selectedVal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.myControl)("matAutocomplete", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 4, ctx_r0.filteredOptions));
} }
function AnimeViewComponent_div_6_div_1_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeViewComponent_div_6_div_1_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); var anime_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.showMore(anime_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var anime_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](anime_r15.show_more ? "Mostrar menos" : "Mostrar m\u00E1s");
} }
function AnimeViewComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AnimeViewComponent_div_6_div_1_button_10_Template, 2, 1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeViewComponent_div_6_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); var anime_r15 = ctx.$implicit; var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.viewLinks(anime_r15._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeViewComponent_div_6_div_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); var anime_r15 = ctx.$implicit; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.deleteAnime(anime_r15._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var anime_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](anime_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", "data:image/png;base64," + anime_r15.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", anime_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", anime_r15.show_more ? anime_r15.description : anime_r15.brief_desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", anime_r15.description.length > 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", anime_r15.total_episodes, ") ");
} }
function AnimeViewComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AnimeViewComponent_div_6_div_1_Template, 21, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r1.collection.data, ctx_r1.config));
} }
function AnimeViewComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeViewComponent_div_7_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); var anime_r25 = ctx.$implicit; var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.viewLinks(anime_r25._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var anime_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", "data:image/png;base64," + anime_r25.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](anime_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", anime_r25.total_episodes, ") ");
} }
function AnimeViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AnimeViewComponent_div_7_div_1_Template, 10, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r2.collection.data, ctx_r2.config));
} }
function AnimeViewComponent_app_spinner_8_Template(rf, ctx) { if (rf & 1) {
    var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-spinner", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("initChange", function AnimeViewComponent_app_spinner_8_Template_app_spinner_initChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.message = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("init", ctx_r3.message);
} }
var AnimeViewComponent = /** @class */ (function () {
    function AnimeViewComponent(httpAnime, dialog, httpEpisodes, route, router) {
        this.httpAnime = httpAnime;
        this.dialog = dialog;
        this.httpEpisodes = httpEpisodes;
        this.route = route;
        this.router = router;
        this.message = "";
        this.pageSize = 5;
        this.collection = { count: 60, data: [] };
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.options = [];
    }
    AnimeViewComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.firstEntryInterval = false;
                this.initInterval();
                if (localStorage.getItem("animes") != null || localStorage.getItem("animes") != undefined) {
                    this.animes = JSON.parse(localStorage.getItem('animes'));
                    this.collection.data = this.animes;
                    this.collection.count = this.collection.data.length;
                    this.config = {
                        itemsPerPage: 5,
                        currentPage: 1,
                        totalItems: this.collection.count
                    };
                    this.animes.forEach(function (x) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var value;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    x.brief_desc = x.description.substr(0, 120) + "...";
                                    if (x.description.length < 120) {
                                        x.brief_desc = x.description;
                                        x.show_more = false;
                                    }
                                    return [4 /*yield*/, this.httpEpisodes.getNumberEpisodes(x._id)];
                                case 1:
                                    value = _a.sent();
                                    x.total_episodes = value.length;
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    this.options = this.animes;
                }
                this.loadAnimes();
                this.selectedVal = "cards";
                this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) { return state ? _this._filter(state) : _this.options.slice(); }));
                return [2 /*return*/];
            });
        });
    };
    AnimeViewComponent.prototype.initInterval = function () {
        var _this = this;
        setInterval(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var animesRefreshed, error_1, dialogRef;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.httpAnime.getAllAnimes()];
                    case 1:
                        animesRefreshed = _a.sent();
                        if (animesRefreshed.length != this.animes.length) {
                            this.loadAnimes();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1.name == "TimeoutError" && !this.firstEntryInterval) {
                            this.firstEntryInterval = true;
                            dialogRef = this.dialog.open(_modals_timeout_exception_timeout_exception_component__WEBPACK_IMPORTED_MODULE_3__["TimeoutExceptionComponent"], {
                                width: '250px',
                                disableClose: true
                            });
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); }, 1800000);
    };
    AnimeViewComponent.prototype.changeSelection = function (selected) {
        this.selectedVal = selected;
        if (this.selectedVal == 'cards') {
            this.config = {
                itemsPerPage: 5,
                currentPage: 1,
                totalItems: this.collection.count
            };
        }
        else {
            this.config = {
                itemsPerPage: 7,
                currentPage: 1,
                totalItems: this.collection.count
            };
        }
    };
    AnimeViewComponent.prototype.loadAnimes = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, error_2, dialogRef;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.message = "Cargando todos los Animes";
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.httpAnime.getAllAnimes()];
                    case 2:
                        _a.animes = _b.sent();
                        this.options = this.animes;
                        if (this.animes != null) {
                            localStorage.setItem('animes', JSON.stringify(this.animes));
                            this.collection.data = this.animes;
                            this.collection.count = this.collection.data.length;
                            this.config = {
                                itemsPerPage: 5,
                                currentPage: 1,
                                totalItems: this.collection.count
                            };
                            this.animes.forEach(function (x) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var value;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            x.brief_desc = x.description.substr(0, 120) + "...";
                                            if (x.description.length < 120) {
                                                x.brief_desc = x.description;
                                                x.show_more = false;
                                            }
                                            return [4 /*yield*/, this.httpEpisodes.getNumberEpisodes(x._id)];
                                        case 1:
                                            value = _a.sent();
                                            x.total_episodes = value.length;
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        if (error_2.name == "TimeoutError") {
                            dialogRef = this.dialog.open(_modals_timeout_exception_timeout_exception_component__WEBPACK_IMPORTED_MODULE_3__["TimeoutExceptionComponent"], {
                                width: '250px',
                                disableClose: true
                            });
                            this.firstEntryInterval = true;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AnimeViewComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (anime) { return anime.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AnimeViewComponent.prototype.showMore = function (anime) {
        anime.show_more = !anime.show_more;
    };
    AnimeViewComponent.prototype.viewLinks = function (id) {
        this.router.navigate(['/anime-detail', id]);
    };
    AnimeViewComponent.prototype.deleteAnime = function (id) {
        var _this = this;
        this.httpAnime.deleteAnime(id).then(function (x) {
            _this.loadAnimes();
        }).catch(function (error) {
            if (error.name == "TimeoutError") {
                var dialogRef = _this.dialog.open(_modals_timeout_exception_timeout_exception_component__WEBPACK_IMPORTED_MODULE_3__["TimeoutExceptionComponent"], {
                    width: '250px',
                    disableClose: true
                });
            }
        });
    };
    AnimeViewComponent.prototype.AddAnime = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_modals_add_anime_add_anime_component__WEBPACK_IMPORTED_MODULE_2__["AddAnimeComponent"], {
            width: '250px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                var anime = result.anime;
                _this.animes = null;
                try {
                    _this.httpAnime.postAnime(anime).then(function (x) {
                        _this.loadAnimes();
                    });
                }
                catch (error) {
                    if (error.name == "TimeoutError") {
                        var dialogRef_1 = _this.dialog.open(_modals_timeout_exception_timeout_exception_component__WEBPACK_IMPORTED_MODULE_3__["TimeoutExceptionComponent"], {
                            width: '250px',
                            disableClose: true
                        });
                    }
                }
            }
        });
    };
    AnimeViewComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    AnimeViewComponent.prototype.onValChange = function (val) {
        this.selectedVal = val;
    };
    AnimeViewComponent.ɵfac = function AnimeViewComponent_Factory(t) { return new (t || AnimeViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_anime_service_anime_service_service__WEBPACK_IMPORTED_MODULE_6__["AnimeServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_downloads_service_downloads_service__WEBPACK_IMPORTED_MODULE_8__["DownloadsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
    AnimeViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnimeViewComponent, selectors: [["app-anime-view"]], decls: 9, vars: 4, consts: [[1, "buttons-headers"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["class", "paginator", 4, "ngIf"], ["class", "content-anime", 4, "ngIf"], ["class", "list-anime", 4, "ngIf"], [3, "init", "initChange", 4, "ngIf"], [1, "paginator"], [1, "display-buttons"], ["appearance", "legacy", "name", "fontStyle", "aria-label", "Font Style", 3, "value"], ["group", "matButtonToggleGroup"], ["value", "cards", 3, "click"], [1, "material-icons"], ["value", "lists", 3, "click"], ["autoHide", "true", "responsive", "true", "previousLabel", "Anterior", "nextLabel", "Siguiente", 3, "pageChange"], [1, "example-form"], [1, "mat-search"], ["type", "text", "placeholder", "Buscar anime", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], ["aria-hidden", "", "height", "50", 1, "example-option-img", 3, "src"], [2, "margin-left", "10px"], [1, "content-anime"], ["class", "mat-card-container-anime", 4, "ngFor", "ngForOf"], [1, "mat-card-container-anime"], [1, "example-card"], ["mat-card-image", "", 3, "src", "alt"], [1, "description-anime", "panel", "panel-default"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], [1, "button-box"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "list-anime"], ["class", "mat-list-anime", 4, "ngFor", "ngForOf"], [1, "mat-list-anime"], ["aria-hidden", "", "height", "90", 1, "example-option-img", 3, "src"], [3, "init", "initChange"]], template: function AnimeViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeViewComponent_Template_button_click_1_listener() { return ctx.AddAnime(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "add_box");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " A\u00F1adir Anime ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AnimeViewComponent_div_5_Template, 18, 6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AnimeViewComponent_div_6_Template, 3, 4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AnimeViewComponent_div_7_Template, 3, 4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AnimeViewComponent_app_spinner_8_Template, 1, 1, "app-spinner", 5);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.animes != null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.animes != null && ctx.selectedVal == "cards");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.animes != null && ctx.selectedVal == "lists");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.animes);
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggle"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardActions"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListItem"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginatePipe"]], styles: [".buttons-headers[_ngcontent-%COMP%] {\n  margin: 70px 0px 0px 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.buttons-headers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 50%;\n}\n.paginator[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 98%;\n  display: flex;\n  justify-content: center;\n  margin-top: 10px !important;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 3px;\n}\n.paginator[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%] {\n  line-height: 32px !important;\n}\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  width: 290px;\n}\n.mat-search[_ngcontent-%COMP%] {\n  width: 285px;\n}\n.content-anime[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n}\n.content-anime[_ngcontent-%COMP%]   .mat-card-container-anime[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n  position: relative;\n  padding: 10px;\n  box-sizing: border-box;\n  opacity: 0;\n  animation-name: fadein;\n  animation-fill-mode: both;\n  animation-duration: 0.5s;\n  padding: 0 10px;\n}\n.content-anime[_ngcontent-%COMP%]   .mat-card-container-anime[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.5s;\n}\n.content-anime[_ngcontent-%COMP%]   .mat-card-container-anime[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.7s;\n}\n.content-anime[_ngcontent-%COMP%]   .mat-card-container-anime[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.9s;\n}\n.content-anime[_ngcontent-%COMP%]   .mat-card-container-anime[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 1.1s;\n}\n.content-anime[_ngcontent-%COMP%]   .mat-card-container-anime[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 1.3s;\n}\n.content-anime[_ngcontent-%COMP%]   .mat-card-container-anime[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 1.5s;\n}\n.content-anime[_ngcontent-%COMP%]   .mat-card-container-anime[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 1.7s;\n}\n.content-anime[_ngcontent-%COMP%]   .mat-card-container-anime[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: 1.9s;\n}\n.content-anime[_ngcontent-%COMP%]   .mat-card-container-anime[_ngcontent-%COMP%]:nth-child(9) {\n  animation-delay: 2.1s;\n}\n.content-anime[_ngcontent-%COMP%]   .mat-card-container-anime[_ngcontent-%COMP%]:nth-child(10) {\n  animation-delay: 2.3s;\n}\n.content-anime[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);\n  max-width: 250px;\n  height: 635px;\n}\n.content-anime[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   .description-anime[_ngcontent-%COMP%] {\n  max-height: 250px;\n  border-radius: 5px;\n}\n.content-anime[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .button-box[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.content-anime[_ngcontent-%COMP%]   .example-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   .button-box[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n.mat-list-item[_ngcontent-%COMP%] {\n  height: unset !important;\n}\n.list-anime[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.6);\n  margin-top: 20px;\n  border-radius: 3px;\n  margin: 20px auto 0px auto;\n  width: 98%;\n}\n.list-anime[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.list-anime[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 5px;\n}\n.list-anime[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.list-anime[_ngcontent-%COMP%]   .mat-list-anime[_ngcontent-%COMP%] {\n  animation-name: fadein;\n  animation-fill-mode: both;\n  animation-duration: 0.5s;\n}\n.list-anime[_ngcontent-%COMP%]   .mat-list-anime[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.4s;\n}\n.list-anime[_ngcontent-%COMP%]   .mat-list-anime[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.5s;\n}\n.list-anime[_ngcontent-%COMP%]   .mat-list-anime[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.6s;\n}\n.list-anime[_ngcontent-%COMP%]   .mat-list-anime[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.7s;\n}\n.list-anime[_ngcontent-%COMP%]   .mat-list-anime[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.8s;\n}\n.list-anime[_ngcontent-%COMP%]   .mat-list-anime[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.9s;\n}\n.list-anime[_ngcontent-%COMP%]   .mat-list-anime[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 1s;\n}\n.list-anime[_ngcontent-%COMP%]   .mat-list-anime[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: 1.1s;\n}\n.list-anime[_ngcontent-%COMP%]   .mat-list-anime[_ngcontent-%COMP%]:nth-child(9) {\n  animation-delay: 1.2s;\n}\n.list-anime[_ngcontent-%COMP%]   .mat-list-anime[_ngcontent-%COMP%]:nth-child(10) {\n  animation-delay: 1.3s;\n}\n.mat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.mat-card-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.mat-card-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWUtdmlldy9hbmltZS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQUk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFFUjtBQUNBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUNJLDRCQUFBO0FBR1I7QUFDQTtFQUNJLFlBQUE7QUFFSjtBQUFBO0VBQ0ksWUFBQTtBQUdKO0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUdKO0FBREk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQUdSO0FBQ1E7RUFDSSxxQkFBQTtBQUNaO0FBRlE7RUFDSSxxQkFBQTtBQUlaO0FBTFE7RUFDSSxxQkFBQTtBQU9aO0FBUlE7RUFDSSxxQkFBQTtBQVVaO0FBWFE7RUFDSSxxQkFBQTtBQWFaO0FBZFE7RUFDSSxxQkFBQTtBQWdCWjtBQWpCUTtFQUNJLHFCQUFBO0FBbUJaO0FBcEJRO0VBQ0kscUJBQUE7QUFzQlo7QUF2QlE7RUFDSSxxQkFBQTtBQXlCWjtBQTFCUTtFQUNJLHFCQUFBO0FBNEJaO0FBekJJO0VBQ0ksZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQTJCUjtBQXpCUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUEyQlo7QUF4Qlk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUEwQmhCO0FBekJnQjtFQUNJLG9CQUFBO0FBMkJwQjtBQXJCQTtFQUNJLHdCQUFBO0FBd0JKO0FBdEJBO0VBQ0ksMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FBeUJKO0FBeEJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBMEJSO0FBeEJZO0VBQ0ksa0JBQUE7QUEwQmhCO0FBeEJZO0VBQ0ksaUJBQUE7QUEwQmhCO0FBdEJJO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBd0JSO0FBcEJRO0VBQ0kscUJBQUE7QUFzQlo7QUF2QlE7RUFDSSxxQkFBQTtBQXlCWjtBQTFCUTtFQUNJLHFCQUFBO0FBNEJaO0FBN0JRO0VBQ0kscUJBQUE7QUErQlo7QUFoQ1E7RUFDSSxxQkFBQTtBQWtDWjtBQW5DUTtFQUNJLHFCQUFBO0FBcUNaO0FBdENRO0VBQ0ksbUJBQUE7QUF3Q1o7QUF6Q1E7RUFDSSxxQkFBQTtBQTJDWjtBQTVDUTtFQUNJLHFCQUFBO0FBOENaO0FBL0NRO0VBQ0kscUJBQUE7QUFpRFo7QUE1Q0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUErQ0o7QUE1Q0E7RUFDSSxjQUFBO0FBK0NKO0FBNUNBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUErQ0oiLCJmaWxlIjoic3JjL2FwcC9hbmltZS12aWV3L2FuaW1lLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ucy1oZWFkZXJzIHtcclxuICAgIG1hcmdpbjogNzBweCAwcHggMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxufVxyXG4ucGFnaW5hdG9yIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jZGstb3ZlcmxheS1wYW5le1xyXG4gICAgd2lkdGg6MjkwcHg7XHJcbn1cclxuLm1hdC1zZWFyY2h7XHJcbiAgICB3aWR0aDoyODVweDtcclxufVxyXG5cclxuLmNvbnRlbnQtYW5pbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgLm1hdC1jYXJkLWNvbnRhaW5lci1hbmltZSB7XHJcbiAgICAgICAgZmxleC1iYXNpczogMjAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxuICAgICRhbmltYXRpb25EZWxheTogMTtcclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggMTAge1xyXG4gICAgICAgIC5tYXQtY2FyZC1jb250YWluZXItYW5pbWU6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogI3swLjMrICgkaSkvNX1zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5leGFtcGxlLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MzVweDtcclxuXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uLWFuaW1lIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIC5idXR0b24tYm94IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm1hdC1saXN0LWl0ZW17XHJcbiAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3QtYW5pbWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMHB4IGF1dG87XHJcbiAgICB3aWR0aDo5OCU7XHJcbiAgICBtYXQtbGlzdHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWF0LWxpc3QtaXRlbXtcclxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWF0LWxpc3QtYW5pbWUge1xyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XHJcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICB9XHJcbiAgICAkYW5pbWF0aW9uRGVsYXk6IDE7XHJcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEwIHtcclxuICAgICAgICAubWF0LWxpc3QtYW5pbWU6bnRoLWNoaWxkKCN7JGl9KSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogI3swLjMrICgkaSkvMTB9cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */"] });
    return AnimeViewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnimeViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-anime-view',
                templateUrl: './anime-view.component.html',
                styleUrls: ['./anime-view.component.scss']
            }]
    }], function () { return [{ type: _services_anime_service_anime_service_service__WEBPACK_IMPORTED_MODULE_6__["AnimeServiceService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _services_downloads_service_downloads_service__WEBPACK_IMPORTED_MODULE_8__["DownloadsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, null); })();


/***/ }),

/***/ "RuBp":
/*!*****************************************************************!*\
  !*** ./src/app/services/downloads-service/downloads.service.ts ***!
  \*****************************************************************/
/*! exports provided: DownloadsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsService", function() { return DownloadsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




var TIMEOUT = 25000;
var DownloadsService = /** @class */ (function () {
    function DownloadsService(httpClient) {
        this.httpClient = httpClient;
        this.REST_API_SERVER = "https://anime-express.glitch.me/";
    }
    DownloadsService.prototype.getNumberEpisodes = function (body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var promise;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(this.REST_API_SERVER + "countEpisodesById/" + body).toPromise()];
                    case 1:
                        promise = _a.sent();
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    DownloadsService.prototype.getAllEpisodesByAnimeId = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var promise;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(this.REST_API_SERVER + "animeEpisodes/" + id).toPromise()];
                    case 1:
                        promise = _a.sent();
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    DownloadsService.prototype.getEpisodeByNumberAndId = function (anime_id, episode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(this.REST_API_SERVER + "getEpisodeByNumberAndId/" + anime_id + "/" + episode).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DownloadsService.ɵfac = function DownloadsService_Factory(t) { return new (t || DownloadsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
    DownloadsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DownloadsService, factory: DownloadsService.ɵfac, providedIn: 'root' });
    return DownloadsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DownloadsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _root_nav_root_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root-nav/root-nav.component */ "HQNm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'animeflix';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-root-nav");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_root_nav_root_nav_component__WEBPACK_IMPORTED_MODULE_1__["RootNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "VCE4":
/*!********************************************************!*\
  !*** ./src/app/anime-detail/anime-detail.component.ts ***!
  \********************************************************/
/*! exports provided: AnimeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeDetailComponent", function() { return AnimeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_Animes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Animes */ "DzxV");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modals_timeout_exception_timeout_exception_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/timeout-exception/timeout-exception.component */ "A62U");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_anime_service_anime_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/anime-service/anime-service.service */ "DRUN");
/* harmony import */ var _services_downloads_service_downloads_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/downloads-service/downloads.service */ "RuBp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


















function AnimeDetailComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", "data:image/png;base64," + ctx_r1.anime.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r1.anime.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.anime.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.anime.description);
} }
function AnimeDetailComponent_div_0_mat_list_option_21_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeDetailComponent_div_0_mat_list_option_21_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); var episode_r3 = ctx.$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.viewMegaFrame(episode_r3.link, episode_r3.episode, ctx_r4.anime._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var episode_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "episode", episode_r3.episode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", episode_r3.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Episodio ", episode_r3.episode, " ");
} }
function AnimeDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AnimeDetailComponent_div_0_div_1_Template, 7, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeDetailComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.unselectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "cancel_presentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Desmarcar Todos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeDetailComponent_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.copiarCortapapeles(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Copiar Marcados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeDetailComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.selectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "select_all");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Marcar Todos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnimeDetailComponent_div_0_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Volver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-selection-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AnimeDetailComponent_div_0_Template_mat_selection_list_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.selectedOptions = $event; })("ngModelChange", function AnimeDetailComponent_div_0_Template_mat_selection_list_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onNgModelChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AnimeDetailComponent_div_0_mat_list_option_21_Template, 8, 3, "mat-list-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.anime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.selectedOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.episodes);
} }
var AnimeDetailComponent = /** @class */ (function () {
    function AnimeDetailComponent(_snackBar, dialog, clipboard, route, httpAnimes, httpDownloads, router) {
        this._snackBar = _snackBar;
        this.dialog = dialog;
        this.clipboard = clipboard;
        this.route = route;
        this.httpAnimes = httpAnimes;
        this.httpDownloads = httpDownloads;
        this.router = router;
    }
    AnimeDetailComponent.prototype.ngAfterContentChecked = function () {
        var isDefined = jquery__WEBPACK_IMPORTED_MODULE_3__('.lateral-anime-detail')[0] != null;
        if (isDefined) {
            var lateral = jquery__WEBPACK_IMPORTED_MODULE_3__('.lateral-anime-detail').height();
            var top_1 = jquery__WEBPACK_IMPORTED_MODULE_3__('.action-buttons').height();
            var toSet = lateral - top_1;
            jquery__WEBPACK_IMPORTED_MODULE_3__('.matselection').css('max-height', toSet + "px");
        }
    };
    AnimeDetailComponent.prototype.ngOnInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, _b, error_1, dialogRef;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.sub = this.route.params.subscribe(function (params) {
                            _this.id = params['anime-id']; // (+) converts string 'id' to a number
                        });
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        _a = this;
                        return [4 /*yield*/, this.getAllEpisodesFromAnime()];
                    case 2:
                        _a.episodes = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.httpAnimes.getAnime(this.id)];
                    case 3:
                        _b.anime = _c.sent();
                        this.anime = new _models_Animes__WEBPACK_IMPORTED_MODULE_2__["Animes"](this.anime.name, this.anime.description, this.anime.urls, this.anime.image, this.anime._id);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _c.sent();
                        if (error_1.name == "TimeoutError") {
                            dialogRef = this.dialog.open(_modals_timeout_exception_timeout_exception_component__WEBPACK_IMPORTED_MODULE_4__["TimeoutExceptionComponent"], {
                                width: '250px',
                                disableClose: true,
                                data: { from: 'anime-detail', id: this.id }
                            });
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AnimeDetailComponent.prototype.getAllEpisodesFromAnime = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var episodes;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpDownloads.getAllEpisodesByAnimeId(this.id)];
                    case 1:
                        episodes = _a.sent();
                        episodes.sort(function (a, b) {
                            return a.episode - b.episode;
                        });
                        return [2 /*return*/, episodes];
                }
            });
        });
    };
    AnimeDetailComponent.prototype.goBack = function () {
        this.router.navigate(['']);
    };
    AnimeDetailComponent.prototype.viewMegaFrame = function (link, episode, anime_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var max_episodes, id_mega;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpDownloads.getNumberEpisodes(anime_id)];
                    case 1:
                        max_episodes = _a.sent();
                        console.log(max_episodes);
                        id_mega = link.split('/')[3];
                        localStorage.setItem('max_episodes', max_episodes.length + '');
                        localStorage.setItem('current_episode', episode);
                        localStorage.setItem('anime_id', anime_id + '');
                        this.router.navigate(['/video', id_mega]);
                        return [2 /*return*/];
                }
            });
        });
    };
    AnimeDetailComponent.prototype.copiarCortapapeles = function () {
        var string_to_copy = '';
        this.selectedOptions.forEach(function (x) {
            string_to_copy += x + " ";
        });
        this.clipboard.copy(string_to_copy);
        this._snackBar.open('LINKS MEGA COPIADOS', 'OK', {
            duration: 5000
        });
        this.unselectAll();
    };
    AnimeDetailComponent.prototype.onNgModelChange = function (evt) {
        if (evt.length > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#boton_copiar').show();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#boton_copiar').hide();
        }
    };
    AnimeDetailComponent.prototype.unselectAll = function () {
        var element = jquery__WEBPACK_IMPORTED_MODULE_3__('.mat-pseudo-checkbox');
        element.each(function (x) {
            if (element[x].className.includes('mat-pseudo-checkbox-checked')) {
                element[x].click();
            }
        });
    };
    AnimeDetailComponent.prototype.selectAll = function () {
        var element = jquery__WEBPACK_IMPORTED_MODULE_3__('.mat-pseudo-checkbox');
        element.each(function (x) {
            if (!element[x].className.includes('mat-pseudo-checkbox-checked')) {
                element[x].click();
            }
        });
    };
    AnimeDetailComponent.ɵfac = function AnimeDetailComponent_Factory(t) { return new (t || AnimeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_anime_service_anime_service_service__WEBPACK_IMPORTED_MODULE_9__["AnimeServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_downloads_service_downloads_service__WEBPACK_IMPORTED_MODULE_10__["DownloadsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
    AnimeDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnimeDetailComponent, selectors: [["app-anime-detail"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], ["class", "lateral-anime-detail", 4, "ngIf"], [1, "lateral-anime-downloads"], [1, "action-buttons"], ["mat-raised-button", "", 1, "large", 3, "click"], ["id", "boton_copiar", "mat-raised-button", "", "color", "primary", 1, "large", 2, "display", "none", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "large", 3, "click"], ["role", "list", 1, "matselection", 3, "ngModel", "ngModelChange"], ["class", "list-detail", 3, "id", "value", 4, "ngFor", "ngForOf"], [1, "lateral-anime-detail"], ["mat-card-image", "", 1, "image-container", 3, "src", "alt"], [1, "detail-content"], [1, "title"], [1, "description"], [1, "list-detail", 3, "id", "value"], [1, "video-button"], ["color", "primary", "mat-raised-button", "", 1, "large", 3, "click"]], template: function AnimeDetailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AnimeDetailComponent_div_0_Template, 22, 3, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.anime);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatSelectionList"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardImage"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListOption"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  padding: 10px 0px 10px 0px;\n  border-radius: 3px;\n  background: rgba(192, 192, 192, 0.7);\n  display: flex;\n  flex-direction: row;\n  animation-name: fadein;\n  animation-fill-mode: both;\n  animation-duration: 0.5s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-detail[_ngcontent-%COMP%] {\n  width: 30%;\n  border-right: 1px solid rgba(255, 255, 255, 0.3);\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-detail[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  width: 75%;\n  border-radius: 3px;\n  margin: 0 auto;\n  max-width: 260px;\n  animation: createBox 0.5s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-detail[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-detail[_ngcontent-%COMP%]   .detail-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 80%;\n  max-height: 300px;\n  overflow-y: auto;\n  margin-top: 12px;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%] {\n  max-height: 600px;\n  overflow-y: auto;\n  animation-name: fadein;\n  animation-fill-mode: both;\n  animation-duration: 1s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]   .list-detail[_ngcontent-%COMP%]   .video-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.3333333333s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.3666666667s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.4333333333s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.4666666667s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.5s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 0.5333333333s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: 0.5666666667s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(9) {\n  animation-delay: 0.6s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(10) {\n  animation-delay: 0.6333333333s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(11) {\n  animation-delay: 0.6666666667s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(12) {\n  animation-delay: 0.7s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(13) {\n  animation-delay: 0.7333333333s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(14) {\n  animation-delay: 0.7666666667s;\n}\n.container[_ngcontent-%COMP%]   .lateral-anime-downloads[_ngcontent-%COMP%]   .matselection[_ngcontent-%COMP%]:nth-child(15) {\n  animation-delay: 0.8s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWUtZGV0YWlsL2FuaW1lLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBQ0o7QUFBSTtFQUNJLFVBQUE7RUFDQSxnREFBQTtBQUVSO0FBRFE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBR1o7QUFBWTtFQUNJLGtCQUFBO0FBRWhCO0FBQVk7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUVJO0VBQ0ksVUFBQTtBQUFSO0FBQ1E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBQ1o7QUFDUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFDWjtBQUNnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ3BCO0FBS1k7RUFDSSw4QkFBQTtBQUhoQjtBQUVZO0VBQ0ksOEJBQUE7QUFBaEI7QUFEWTtFQUNJLHFCQUFBO0FBR2hCO0FBSlk7RUFDSSw4QkFBQTtBQU1oQjtBQVBZO0VBQ0ksOEJBQUE7QUFTaEI7QUFWWTtFQUNJLHFCQUFBO0FBWWhCO0FBYlk7RUFDSSw4QkFBQTtBQWVoQjtBQWhCWTtFQUNJLDhCQUFBO0FBa0JoQjtBQW5CWTtFQUNJLHFCQUFBO0FBcUJoQjtBQXRCWTtFQUNJLDhCQUFBO0FBd0JoQjtBQXpCWTtFQUNJLDhCQUFBO0FBMkJoQjtBQTVCWTtFQUNJLHFCQUFBO0FBOEJoQjtBQS9CWTtFQUNJLDhCQUFBO0FBaUNoQjtBQWxDWTtFQUNJLDhCQUFBO0FBb0NoQjtBQXJDWTtFQUNJLHFCQUFBO0FBdUNoQiIsImZpbGUiOiJzcmMvYXBwL2FuaW1lLWRldGFpbC9hbmltZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDo4MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTkyLCAxOTIsIDE5MiwgLjcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZWluO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xyXG4gICAgLmxhdGVyYWwtYW5pbWUtZGV0YWlse1xyXG4gICAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcclxuICAgICAgICAuaW1hZ2UtY29udGFpbmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6NzUlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGNyZWF0ZUJveCAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZXRhaWwtY29udGVudHtcclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGF0ZXJhbC1hbmltZS1kb3dubG9hZHN7XHJcbiAgICAgICAgd2lkdGg6NzAlO1xyXG4gICAgICAgIC5hY3Rpb24tYnV0dG9uc3tcclxuICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdHNlbGVjdGlvbntcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICAgIC5saXN0LWRldGFpbHtcclxuICAgICAgICAgICAgICAgIC52aWRlby1idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRhbmltYXRpb25EZWxheTogMTtcclxuICAgICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDE1IHtcclxuICAgICAgICAgICAgLm1hdHNlbGVjdGlvbjpudGgtY2hpbGQoI3skaX0pIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogI3swLjMrKCRpKS8zMH1zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
    return AnimeDetailComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnimeDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-anime-detail',
                templateUrl: './anime-detail.component.html',
                styleUrls: ['./anime-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["Clipboard"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _services_anime_service_anime_service_service__WEBPACK_IMPORTED_MODULE_9__["AnimeServiceService"] }, { type: _services_downloads_service_downloads_service__WEBPACK_IMPORTED_MODULE_10__["DownloadsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "VOa8":
/*!*********************************************************!*\
  !*** ./src/app/modals/add-anime/add-anime.component.ts ***!
  \*********************************************************/
/*! exports provided: AddAnimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAnimeComponent", function() { return AddAnimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_Animes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/Animes */ "DzxV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








var AddAnimeComponent = /** @class */ (function () {
    function AddAnimeComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.anime = new src_app_models_Animes__WEBPACK_IMPORTED_MODULE_1__["Animes"]("", "", "", "");
    }
    AddAnimeComponent.prototype.onNoClick = function () {
        this.dialogRef.close({
            anime: this.anime
        });
    };
    AddAnimeComponent.ɵfac = function AddAnimeComponent_Factory(t) { return new (t || AddAnimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
    AddAnimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddAnimeComponent, selectors: [["app-add-anime"]], decls: 24, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function AddAnimeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add anime");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nombre del anime");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAnimeComponent_Template_input_ngModelChange_6_listener($event) { return ctx.anime.name = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Descripcion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAnimeComponent_Template_input_ngModelChange_10_listener($event) { return ctx.anime.description = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "URL AnimeFLV");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAnimeComponent_Template_input_ngModelChange_14_listener($event) { return ctx.anime.urls = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "URL de imagen png del anime");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddAnimeComponent_Template_input_ngModelChange_18_listener($event) { return ctx.anime.image = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAnimeComponent_Template_button_click_20_listener() { return ctx.onNoClick(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "A\u00F1adir");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cerrar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.anime.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.anime.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.anime.urls);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.anime.image);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9hZGQtYW5pbWUvYWRkLWFuaW1lLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return AddAnimeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddAnimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-anime',
                templateUrl: './add-anime.component.html',
                styleUrls: ['./add-anime.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _root_nav_root_nav_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./root-nav/root-nav.component */ "HQNm");
/* harmony import */ var _anime_view_anime_view_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./anime-view/anime-view.component */ "M2Vo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./spinner/spinner.component */ "CZqF");
/* harmony import */ var _modals_add_anime_add_anime_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modals/add-anime/add-anime.component */ "VOa8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _anime_detail_anime_detail_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./anime-detail/anime-detail.component */ "VCE4");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _anime_vide_anime_vide_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./anime-vide/anime-vide.component */ "EApE");
/* harmony import */ var _modals_timeout_exception_timeout_exception_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./modals/timeout-exception/timeout-exception.component */ "A62U");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! jw-angular-pagination */ "P9+s");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ngx-pagination */ "oOf3");




//Angular Material Components













































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_38__["HttpClientModule"],
                _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_43__["ClipboardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_41__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_35__["LayoutModule"],
                jw_angular_pagination__WEBPACK_IMPORTED_MODULE_46__["JwPaginationModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_47__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_41__["ReactiveFormsModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _root_nav_root_nav_component__WEBPACK_IMPORTED_MODULE_36__["RootNavComponent"],
        _anime_view_anime_view_component__WEBPACK_IMPORTED_MODULE_37__["AnimeViewComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_39__["SpinnerComponent"],
        _modals_add_anime_add_anime_component__WEBPACK_IMPORTED_MODULE_40__["AddAnimeComponent"],
        _anime_detail_anime_detail_component__WEBPACK_IMPORTED_MODULE_42__["AnimeDetailComponent"],
        _anime_vide_anime_vide_component__WEBPACK_IMPORTED_MODULE_44__["AnimeVideComponent"],
        _modals_timeout_exception_timeout_exception_component__WEBPACK_IMPORTED_MODULE_45__["TimeoutExceptionComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_38__["HttpClientModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_43__["ClipboardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_41__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_35__["LayoutModule"],
        jw_angular_pagination__WEBPACK_IMPORTED_MODULE_46__["JwPaginationModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_47__["NgxPaginationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_41__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _root_nav_root_nav_component__WEBPACK_IMPORTED_MODULE_36__["RootNavComponent"],
                    _anime_view_anime_view_component__WEBPACK_IMPORTED_MODULE_37__["AnimeViewComponent"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_39__["SpinnerComponent"],
                    _modals_add_anime_add_anime_component__WEBPACK_IMPORTED_MODULE_40__["AddAnimeComponent"],
                    _anime_detail_anime_detail_component__WEBPACK_IMPORTED_MODULE_42__["AnimeDetailComponent"],
                    _anime_vide_anime_vide_component__WEBPACK_IMPORTED_MODULE_44__["AnimeVideComponent"],
                    _modals_timeout_exception_timeout_exception_component__WEBPACK_IMPORTED_MODULE_45__["TimeoutExceptionComponent"],
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_38__["HttpClientModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_43__["ClipboardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_41__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_35__["LayoutModule"],
                    jw_angular_pagination__WEBPACK_IMPORTED_MODULE_46__["JwPaginationModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_47__["NgxPaginationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_41__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _anime_view_anime_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anime-view/anime-view.component */ "M2Vo");
/* harmony import */ var _anime_detail_anime_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anime-detail/anime-detail.component */ "VCE4");
/* harmony import */ var _anime_vide_anime_vide_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anime-vide/anime-vide.component */ "EApE");







var routes = [{
        path: '',
        component: _anime_view_anime_view_component__WEBPACK_IMPORTED_MODULE_2__["AnimeViewComponent"],
    },
    {
        path: 'anime-detail/:anime-id',
        component: _anime_detail_anime_detail_component__WEBPACK_IMPORTED_MODULE_3__["AnimeDetailComponent"]
    },
    {
        path: 'video/:link',
        component: _anime_vide_anime_vide_component__WEBPACK_IMPORTED_MODULE_4__["AnimeVideComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map