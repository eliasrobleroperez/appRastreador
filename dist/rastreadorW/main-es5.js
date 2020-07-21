function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _visualizar_ubicacion_mapa_visualizar_ubicacion_mapa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component */
    "./src/app/visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component.ts");
    /* harmony import */


    var _colocar_marcadores_colocar_marcadores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./colocar-marcadores/colocar-marcadores.component */
    "./src/app/colocar-marcadores/colocar-marcadores.component.ts");

    var routes = [{
      path: 'visualizar',
      component: _visualizar_ubicacion_mapa_visualizar_ubicacion_mapa_component__WEBPACK_IMPORTED_MODULE_2__["VisualizarUbicacionMapaComponent"]
    }, {
      path: 'insertar',
      component: _colocar_marcadores_colocar_marcadores_component__WEBPACK_IMPORTED_MODULE_3__["ColocarMarcadoresComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./service/crud.service */
    "./src/app/service/crud.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(crudService) {
      _classCallCheck(this, AppComponent);

      this.crudService = crudService;
      this.title = 'rastreadorW';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "navbar", "navbar-dark"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Home\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _service_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./service/crud.service */
    "./src/app/service/crud.service.ts");
    /* harmony import */


    var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @asymmetrik/ngx-leaflet */
    "./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/index.js");
    /* harmony import */


    var pubnub_angular2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! pubnub-angular2 */
    "./node_modules/pubnub-angular2/lib/pubnub-angular4.js");
    /* harmony import */


    var pubnub_angular2__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(pubnub_angular2__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _visualizar_ubicacion_mapa_visualizar_ubicacion_mapa_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component */
    "./src/app/visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _colocar_marcadores_colocar_marcadores_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./colocar-marcadores/colocar-marcadores.component */
    "./src/app/colocar-marcadores/colocar-marcadores.component.ts"); //service
    //Leaflet
    //Pubnub


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_service_crud_service__WEBPACK_IMPORTED_MODULE_7__["CrudService"], pubnub_angular2__WEBPACK_IMPORTED_MODULE_9__["PubNubAngular"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__["LeafletModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _visualizar_ubicacion_mapa_visualizar_ubicacion_mapa_component__WEBPACK_IMPORTED_MODULE_11__["VisualizarUbicacionMapaComponent"], _colocar_marcadores_colocar_marcadores_component__WEBPACK_IMPORTED_MODULE_13__["ColocarMarcadoresComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__["LeafletModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _visualizar_ubicacion_mapa_visualizar_ubicacion_mapa_component__WEBPACK_IMPORTED_MODULE_11__["VisualizarUbicacionMapaComponent"], _colocar_marcadores_colocar_marcadores_component__WEBPACK_IMPORTED_MODULE_13__["ColocarMarcadoresComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__["LeafletModule"]],
          providers: [_service_crud_service__WEBPACK_IMPORTED_MODULE_7__["CrudService"], pubnub_angular2__WEBPACK_IMPORTED_MODULE_9__["PubNubAngular"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/colocar-marcadores/colocar-marcadores.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/colocar-marcadores/colocar-marcadores.component.ts ***!
    \********************************************************************/

  /*! exports provided: ColocarMarcadoresComponent */

  /***/
  function srcAppColocarMarcadoresColocarMarcadoresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColocarMarcadoresComponent", function () {
      return ColocarMarcadoresComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/crud.service */
    "./src/app/service/crud.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ColocarMarcadoresComponent =
    /*#__PURE__*/
    function () {
      function ColocarMarcadoresComponent(crudService) {
        _classCallCheck(this, ColocarMarcadoresComponent);

        this.crudService = crudService;
      }

      _createClass(ColocarMarcadoresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "crearUbicacion",
        value: function crearUbicacion() {
          var _this = this;

          var Record = {};
          Record['latitud'] = this.latitud;
          Record['longitud'] = this.longitud;
          this.crudService.create_newUbication(Record).then(function (res) {
            _this.latitud = undefined;
            _this.longitud = undefined;
            console.log(res);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }]);

      return ColocarMarcadoresComponent;
    }();

    ColocarMarcadoresComponent.ɵfac = function ColocarMarcadoresComponent_Factory(t) {
      return new (t || ColocarMarcadoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]));
    };

    ColocarMarcadoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ColocarMarcadoresComponent,
      selectors: [["app-colocar-marcadores"]],
      decls: 11,
      vars: 3,
      consts: [[1, "container"], [1, "row", "justify-content-center", "p-2"], [1, "form-group"], ["type", "number", "placeholder", "Latitud", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", "Longitud", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "disabled", "click"]],
      template: function ColocarMarcadoresComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rastreo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColocarMarcadoresComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.latitud = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColocarMarcadoresComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.longitud = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColocarMarcadoresComponent_Template_button_click_9_listener() {
            return ctx.crearUbicacion();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Aceptar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.latitud);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.longitud);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.latitud || !ctx.longitud);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: [".navbar[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0.5rem 1rem;\r\n    background: black;\r\n    color: white;\r\n    font-size: 22px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sb2Nhci1tYXJjYWRvcmVzL2NvbG9jYXItbWFyY2Fkb3Jlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29sb2Nhci1tYXJjYWRvcmVzL2NvbG9jYXItbWFyY2Fkb3Jlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColocarMarcadoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-colocar-marcadores',
          templateUrl: './colocar-marcadores.component.html',
          styleUrls: ['./colocar-marcadores.component.css']
        }]
      }], function () {
        return [{
          type: _service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/crud.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/crud.service.ts ***!
    \*****************************************/

  /*! exports provided: CrudService */

  /***/
  function srcAppServiceCrudServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrudService", function () {
      return CrudService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var CrudService =
    /*#__PURE__*/
    function () {
      function CrudService(fireservice) {
        _classCallCheck(this, CrudService);

        this.fireservice = fireservice;
      }

      _createClass(CrudService, [{
        key: "create_newUbication",
        value: function create_newUbication(Record) {
          return this.fireservice.collection('ubicacion').add(Record);
        }
      }]);

      return CrudService;
    }();

    CrudService.ɵfac = function CrudService_Factory(t) {
      return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    CrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CrudService,
      factory: CrudService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrudService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/visualizar-ubicacion-mapa/visualizar-ubicacion-mapa.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: VisualizarUbicacionMapaComponent */

  /***/
  function srcAppVisualizarUbicacionMapaVisualizarUbicacionMapaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisualizarUbicacionMapaComponent", function () {
      return VisualizarUbicacionMapaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var pubnub_angular2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! pubnub-angular2 */
    "./node_modules/pubnub-angular2/lib/pubnub-angular4.js");
    /* harmony import */


    var pubnub_angular2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(pubnub_angular2__WEBPACK_IMPORTED_MODULE_2__);

    var VisualizarUbicacionMapaComponent =
    /*#__PURE__*/
    function () {
      function VisualizarUbicacionMapaComponent(pubnub) {
        _classCallCheck(this, VisualizarUbicacionMapaComponent);

        this.pnChannel = "raspi-tracker";
        this.urlOpenLayers = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png';
        this.urlAPIMapa = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';

        this.cambiarPosMarcador = function (payload) {
          var marcador = null;

          if (payload.message.lat) {
            var lat = payload.message.lat;
            var lng = payload.message.lng;

            if (this.marcador) {
              this.mapa.removeLayer(this.marcador);
            }

            console.log(payload);
            this.marcador = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([lat, lng], {
              icon: this.iconoMarcador
            }).addTo(this.mapa);
          }
        };

        this.ejecutar = function () {//var messages = this.pubnub.getMessage("raspi-tracker");
          // console.log(messages);
          //setInterval(this.ejecutar,10000);
        };

        this.iconoMarcador = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
          iconSize: [60, 60],
          iconAnchor: [30, 60],
          iconUrl: 'assets/vaca.png'
        });
        this.pubnub = pubnub;
        this.pubnub.init({
          publishKey: 'pub-c-6e70a79c-7af6-4177-bfb5-b7eaf484a510',
          subscribeKey: 'sub-c-b1ea6414-c791-11ea-b3f2-c27cb65b13f4'
        });
        this.pubnub.subscribe({
          channels: [this.pnChannel]
        });
      }

      _createClass(VisualizarUbicacionMapaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.inicializarMapa();
          this.pubnub.addListener({
            message: function message(_message) {
              console.log(_message);
            }
          }); //this.ejecutar()
        }
      }, {
        key: "inicializarMapa",
        value: function inicializarMapa() {
          this.mapa = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('mapa').setView([0, 0], 5);
          leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"](this.urlAPIMapa, {
            maxZoom: 18,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(this.mapa);
        }
      }, {
        key: "medirDistancia",
        value: function medirDistancia() {
          var distance = this.mapa.distance([16.752706, -93.133080], [16.752434, -93.131710]);
          console.log(distance);
          console.log('Distancia 1');
        }
      }]);

      return VisualizarUbicacionMapaComponent;
    }();

    VisualizarUbicacionMapaComponent.ɵfac = function VisualizarUbicacionMapaComponent_Factory(t) {
      return new (t || VisualizarUbicacionMapaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](pubnub_angular2__WEBPACK_IMPORTED_MODULE_2__["PubNubAngular"]));
    };

    VisualizarUbicacionMapaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VisualizarUbicacionMapaComponent,
      selectors: [["app-visualizar-ubicacion-mapa"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([pubnub_angular2__WEBPACK_IMPORTED_MODULE_2__["PubNubAngular"]])],
      decls: 4,
      vars: 0,
      consts: [[1, "map-container"], [1, "map-frame"], ["id", "mapa"], [3, "click"]],
      template: function VisualizarUbicacionMapaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizarUbicacionMapaComponent_Template_button_click_3_listener() {
            return ctx.ejecutar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".map-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: 30px;\r\n  }\r\n  \r\n  .map-frame[_ngcontent-%COMP%] {\r\n    border: 2px solid black;\r\n    height: 100%;\r\n  }\r\n  \r\n  #mapa[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzdWFsaXphci11YmljYWNpb24tbWFwYS92aXN1YWxpemFyLXViaWNhY2lvbi1tYXBhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC92aXN1YWxpemFyLXViaWNhY2lvbi1tYXBhL3Zpc3VhbGl6YXItdWJpY2FjaW9uLW1hcGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hcC1mcmFtZSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI21hcGEge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisualizarUbicacionMapaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-visualizar-ubicacion-mapa',
          templateUrl: './visualizar-ubicacion-mapa.component.html',
          styleUrls: ['./visualizar-ubicacion-mapa.component.css'],
          providers: [pubnub_angular2__WEBPACK_IMPORTED_MODULE_2__["PubNubAngular"]]
        }]
      }], function () {
        return [{
          type: pubnub_angular2__WEBPACK_IMPORTED_MODULE_2__["PubNubAngular"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyAlDYtum9Txc2zqZaP9GEaF1UFrbHDNrUk",
        authDomain: "rastreador-ef6fe.firebaseapp.com",
        databaseURL: "https://rastreador-ef6fe.firebaseio.com",
        projectId: "rastreador-ef6fe",
        storageBucket: "rastreador-ef6fe.appspot.com",
        messagingSenderId: "455383615386",
        appId: "1:455383615386:web:71b09d614a8e72ba5d1c23",
        measurementId: "G-BXHWWZM1VC"
      }
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\elias\Documents\angularRastreador\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map