(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_tab1_tab1_module_ts"], {
    /***/
    86640:
    /*!****************************************************************************************!*\
      !*** ./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgSelectComponent": function NgSelectComponent() {
          return (
            /* binding */
            _NgSelectComponent
          );
        },

        /* harmony export */
        "NgSelectConfig": function NgSelectConfig() {
          return (
            /* binding */
            _NgSelectConfig
          );
        },

        /* harmony export */
        "NgSelectModule": function NgSelectModule() {
          return (
            /* binding */
            _NgSelectModule
          );
        },

        /* harmony export */
        "SELECTION_MODEL_FACTORY": function SELECTION_MODEL_FACTORY() {
          return (
            /* binding */
            _SELECTION_MODEL_FACTORY
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            DefaultSelectionModelFactory
          );
        },

        /* harmony export */
        "ɵc": function ɵc() {
          return (
            /* binding */
            DefaultSelectionModel
          );
        },

        /* harmony export */
        "ɵd": function ɵd() {
          return (
            /* binding */
            NgDropdownPanelService
          );
        },

        /* harmony export */
        "ɵe": function ɵe() {
          return (
            /* binding */
            NgItemLabelDirective
          );
        },

        /* harmony export */
        "ɵf": function ɵf() {
          return (
            /* binding */
            NgOptionTemplateDirective
          );
        },

        /* harmony export */
        "ɵg": function ɵg() {
          return (
            /* binding */
            NgOptgroupTemplateDirective
          );
        },

        /* harmony export */
        "ɵh": function ɵh() {
          return (
            /* binding */
            NgLabelTemplateDirective
          );
        },

        /* harmony export */
        "ɵi": function ɵi() {
          return (
            /* binding */
            NgMultiLabelTemplateDirective
          );
        },

        /* harmony export */
        "ɵj": function ɵj() {
          return (
            /* binding */
            NgHeaderTemplateDirective
          );
        },

        /* harmony export */
        "ɵk": function ɵk() {
          return (
            /* binding */
            NgFooterTemplateDirective
          );
        },

        /* harmony export */
        "ɵl": function ɵl() {
          return (
            /* binding */
            NgNotFoundTemplateDirective
          );
        },

        /* harmony export */
        "ɵm": function ɵm() {
          return (
            /* binding */
            NgTypeToSearchTemplateDirective
          );
        },

        /* harmony export */
        "ɵn": function ɵn() {
          return (
            /* binding */
            NgLoadingTextTemplateDirective
          );
        },

        /* harmony export */
        "ɵo": function ɵo() {
          return (
            /* binding */
            NgTagTemplateDirective
          );
        },

        /* harmony export */
        "ɵp": function ɵp() {
          return (
            /* binding */
            NgLoadingSpinnerTemplateDirective
          );
        },

        /* harmony export */
        "ɵq": function ɵq() {
          return (
            /* binding */
            NgDropdownPanelComponent
          );
        },

        /* harmony export */
        "ɵr": function ɵr() {
          return (
            /* binding */
            NgOptionComponent
          );
        },

        /* harmony export */
        "ɵs": function ɵs() {
          return (
            /* binding */
            ConsoleService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      45697);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      39761);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      68307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      54857);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      58571);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      22759);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      66682);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = ["content"];
      var _c1 = ["scroll"];
      var _c2 = ["padding"];

      var _c3 = function _c3(a0) {
        return {
          searchTerm: a0
        };
      };

      function NgDropdownPanelComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r0.filterValue));
        }
      }

      function NgDropdownPanelComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r4.filterValue));
        }
      }

      var _c4 = ["*"];
      var _c5 = ["searchInput"];

      function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.unselect(item_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
        }

        if (rf & 2) {
          var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r7.label)("escape", ctx_r9.escapeHTML);
        }
      }

      function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) {}

      var _c6 = function _c6(a0, a1, a2) {
        return {
          item: a0,
          clear: a1,
          label: a2
        };
      };

      function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-value-disabled", item_r7.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.labelTemplate || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c6, item_r7.value, ctx_r6.clearItem, item_r7.label));
        }
      }

      function NgSelectComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedItems)("ngForTrackBy", ctx_r0.trackByOption);
        }
      }

      function NgSelectComponent_5_ng_template_0_Template(rf, ctx) {}

      var _c7 = function _c7(a0, a1) {
        return {
          items: a0,
          clear: a1
        };
      };

      function NgSelectComponent_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c7, ctx_r1.selectedValues, ctx_r1.clearItem));
        }
      }

      function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
        }
      }

      function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.loadingSpinnerTemplate || _r16);
        }
      }

      function NgSelectComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.clearAllText);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
        }

        if (rf & 2) {
          var item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r24.label)("escape", ctx_r26.escapeHTML);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) {}

      var _c8 = function _c8(a0, a1, a2, a3) {
        return {
          item: a0,
          item$: a1,
          index: a2,
          searchTerm: a3
        };
      };

      function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var item_r24 = restoredCtx.$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.toggleItem(item_r24);
          })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var item_r24 = restoredCtx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.onItemHover(item_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r24 = ctx.$implicit;

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-disabled", item_r24.disabled)("ng-option-selected", item_r24.selected)("ng-optgroup", item_r24.children)("ng-option", !item_r24.children)("ng-option-child", !!item_r24.parent)("ng-option-marked", item_r24 === ctx_r19.itemsList.markedItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", item_r24.children ? "group" : "option")("aria-selected", item_r24.selected)("id", item_r24 == null ? null : item_r24.htmlId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r24.children ? ctx_r19.optgroupTemplate || _r25 : ctx_r19.optionTemplate || _r25)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c8, item_r24.value, item_r24, item_r24.index, ctx_r19.searchTerm));
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.addTagText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r33.searchTerm, "\"");
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r35.itemsList.unmarkItem();
          })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r37.selectTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-marked", !ctx_r20.itemsList.markedItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.tagTemplate || _r32)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r20.searchTerm));
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.notFoundText);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.notFoundTemplate || _r38)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r21.searchTerm));
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.typeToSearchText);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.typeToSearchTemplate || _r41);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.loadingText);
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) {}

      function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.loadingTextTemplate || _r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r23.searchTerm));
        }
      }

      function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.viewPortItems = $event;
          })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r49.scroll.emit($event);
          })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.scrollToEnd.emit($event);
          })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r51.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-multiple", ctx_r5.multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("virtualScroll", ctx_r5.virtualScroll)("bufferAmount", ctx_r5.bufferAmount)("appendTo", ctx_r5.appendTo)("position", ctx_r5.dropdownPosition)("headerTemplate", ctx_r5.headerTemplate)("footerTemplate", ctx_r5.footerTemplate)("filterValue", ctx_r5.searchTerm)("items", ctx_r5.itemsList.filteredItems)("markedItem", ctx_r5.itemsList.markedItem)("ngClass", ctx_r5.appendTo ? ctx_r5.classes : null)("id", ctx_r5.dropdownId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.viewPortItems)("ngForTrackBy", ctx_r5.trackByOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showAddTag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showNoItemsFound());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showTypeToSearch());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading && ctx_r5.itemsList.filteredItems.length === 0);
        }
      }

      var unescapedHTMLExp = /[&<>"']/g;
      var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
      var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;'
      };

      function escapeHTML(string) {
        return string && hasUnescapedHTMLExp.test(string) ? string.replace(unescapedHTMLExp, function (chr) {
          return htmlEscapes[chr];
        }) : string;
      }

      function isDefined(value) {
        return value !== undefined && value !== null;
      }

      function isObject(value) {
        return typeof value === 'object' && isDefined(value);
      }

      function isPromise(value) {
        return value instanceof Promise;
      }

      function isFunction(value) {
        return value instanceof Function;
      }

      var NgItemLabelDirective = /*#__PURE__*/function () {
        function NgItemLabelDirective(element) {
          _classCallCheck(this, NgItemLabelDirective);

          this.element = element;
          this.escape = true;
        }

        _createClass(NgItemLabelDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
          }
        }]);

        return NgItemLabelDirective;
      }();

      NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) {
        return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      NgItemLabelDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgItemLabelDirective,
        selectors: [["", "ngItemLabel", ""]],
        inputs: {
          escape: "escape",
          ngItemLabel: "ngItemLabel"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      NgItemLabelDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      NgItemLabelDirective.propDecorators = {
        ngItemLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        escape: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgItemLabelDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngItemLabel]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, {
          escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          ngItemLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var NgOptionTemplateDirective = function NgOptionTemplateDirective(template) {
        _classCallCheck(this, NgOptionTemplateDirective);

        this.template = template;
      };

      NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) {
        return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgOptionTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgOptionTemplateDirective,
        selectors: [["", "ng-option-tmp", ""]]
      });

      NgOptionTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-option-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgOptgroupTemplateDirective = function NgOptgroupTemplateDirective(template) {
        _classCallCheck(this, NgOptgroupTemplateDirective);

        this.template = template;
      };

      NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) {
        return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgOptgroupTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgOptgroupTemplateDirective,
        selectors: [["", "ng-optgroup-tmp", ""]]
      });

      NgOptgroupTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-optgroup-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgLabelTemplateDirective = function NgLabelTemplateDirective(template) {
        _classCallCheck(this, NgLabelTemplateDirective);

        this.template = template;
      };

      NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) {
        return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgLabelTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgLabelTemplateDirective,
        selectors: [["", "ng-label-tmp", ""]]
      });

      NgLabelTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-label-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgMultiLabelTemplateDirective = function NgMultiLabelTemplateDirective(template) {
        _classCallCheck(this, NgMultiLabelTemplateDirective);

        this.template = template;
      };

      NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) {
        return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgMultiLabelTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgMultiLabelTemplateDirective,
        selectors: [["", "ng-multi-label-tmp", ""]]
      });

      NgMultiLabelTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-multi-label-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgHeaderTemplateDirective = function NgHeaderTemplateDirective(template) {
        _classCallCheck(this, NgHeaderTemplateDirective);

        this.template = template;
      };

      NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) {
        return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgHeaderTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgHeaderTemplateDirective,
        selectors: [["", "ng-header-tmp", ""]]
      });

      NgHeaderTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-header-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgFooterTemplateDirective = function NgFooterTemplateDirective(template) {
        _classCallCheck(this, NgFooterTemplateDirective);

        this.template = template;
      };

      NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) {
        return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgFooterTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgFooterTemplateDirective,
        selectors: [["", "ng-footer-tmp", ""]]
      });

      NgFooterTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-footer-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgNotFoundTemplateDirective = function NgNotFoundTemplateDirective(template) {
        _classCallCheck(this, NgNotFoundTemplateDirective);

        this.template = template;
      };

      NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) {
        return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgNotFoundTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgNotFoundTemplateDirective,
        selectors: [["", "ng-notfound-tmp", ""]]
      });

      NgNotFoundTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-notfound-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgTypeToSearchTemplateDirective = function NgTypeToSearchTemplateDirective(template) {
        _classCallCheck(this, NgTypeToSearchTemplateDirective);

        this.template = template;
      };

      NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) {
        return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgTypeToSearchTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgTypeToSearchTemplateDirective,
        selectors: [["", "ng-typetosearch-tmp", ""]]
      });

      NgTypeToSearchTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-typetosearch-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgLoadingTextTemplateDirective = function NgLoadingTextTemplateDirective(template) {
        _classCallCheck(this, NgLoadingTextTemplateDirective);

        this.template = template;
      };

      NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) {
        return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgLoadingTextTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgLoadingTextTemplateDirective,
        selectors: [["", "ng-loadingtext-tmp", ""]]
      });

      NgLoadingTextTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-loadingtext-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgTagTemplateDirective = function NgTagTemplateDirective(template) {
        _classCallCheck(this, NgTagTemplateDirective);

        this.template = template;
      };

      NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) {
        return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgTagTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgTagTemplateDirective,
        selectors: [["", "ng-tag-tmp", ""]]
      });

      NgTagTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-tag-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var NgLoadingSpinnerTemplateDirective = function NgLoadingSpinnerTemplateDirective(template) {
        _classCallCheck(this, NgLoadingSpinnerTemplateDirective);

        this.template = template;
      };

      NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) {
        return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
      };

      NgLoadingSpinnerTemplateDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgLoadingSpinnerTemplateDirective,
        selectors: [["", "ng-loadingspinner-tmp", ""]]
      });

      NgLoadingSpinnerTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ng-loadingspinner-tmp]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }];
        }, null);
      })();

      var ConsoleService = /*#__PURE__*/function () {
        function ConsoleService() {
          _classCallCheck(this, ConsoleService);
        }

        _createClass(ConsoleService, [{
          key: "warn",
          value: function warn(message) {
            console.warn(message);
          }
        }]);

        return ConsoleService;
      }();

      ConsoleService.ɵfac = function ConsoleService_Factory(t) {
        return new (t || ConsoleService)();
      };

      ConsoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function ConsoleService_Factory() {
          return new ConsoleService();
        },
        token: ConsoleService,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();

      function newId() {
        // First character is an 'a', it's good practice to tag id to begin with a letter
        return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
          // tslint:disable-next-line:no-bitwise
          var val = Math.random() * 16 | 0;
          return val.toString(16);
        });
      }

      var diacritics = {
        "\u24B6": 'A',
        "\uFF21": 'A',
        "\xC0": 'A',
        "\xC1": 'A',
        "\xC2": 'A',
        "\u1EA6": 'A',
        "\u1EA4": 'A',
        "\u1EAA": 'A',
        "\u1EA8": 'A',
        "\xC3": 'A',
        "\u0100": 'A',
        "\u0102": 'A',
        "\u1EB0": 'A',
        "\u1EAE": 'A',
        "\u1EB4": 'A',
        "\u1EB2": 'A',
        "\u0226": 'A',
        "\u01E0": 'A',
        "\xC4": 'A',
        "\u01DE": 'A',
        "\u1EA2": 'A',
        "\xC5": 'A',
        "\u01FA": 'A',
        "\u01CD": 'A',
        "\u0200": 'A',
        "\u0202": 'A',
        "\u1EA0": 'A',
        "\u1EAC": 'A',
        "\u1EB6": 'A',
        "\u1E00": 'A',
        "\u0104": 'A',
        "\u023A": 'A',
        "\u2C6F": 'A',
        "\uA732": 'AA',
        "\xC6": 'AE',
        "\u01FC": 'AE',
        "\u01E2": 'AE',
        "\uA734": 'AO',
        "\uA736": 'AU',
        "\uA738": 'AV',
        "\uA73A": 'AV',
        "\uA73C": 'AY',
        "\u24B7": 'B',
        "\uFF22": 'B',
        "\u1E02": 'B',
        "\u1E04": 'B',
        "\u1E06": 'B',
        "\u0243": 'B',
        "\u0182": 'B',
        "\u0181": 'B',
        "\u24B8": 'C',
        "\uFF23": 'C',
        "\u0106": 'C',
        "\u0108": 'C',
        "\u010A": 'C',
        "\u010C": 'C',
        "\xC7": 'C',
        "\u1E08": 'C',
        "\u0187": 'C',
        "\u023B": 'C',
        "\uA73E": 'C',
        "\u24B9": 'D',
        "\uFF24": 'D',
        "\u1E0A": 'D',
        "\u010E": 'D',
        "\u1E0C": 'D',
        "\u1E10": 'D',
        "\u1E12": 'D',
        "\u1E0E": 'D',
        "\u0110": 'D',
        "\u018B": 'D',
        "\u018A": 'D',
        "\u0189": 'D',
        "\uA779": 'D',
        "\u01F1": 'DZ',
        "\u01C4": 'DZ',
        "\u01F2": 'Dz',
        "\u01C5": 'Dz',
        "\u24BA": 'E',
        "\uFF25": 'E',
        "\xC8": 'E',
        "\xC9": 'E',
        "\xCA": 'E',
        "\u1EC0": 'E',
        "\u1EBE": 'E',
        "\u1EC4": 'E',
        "\u1EC2": 'E',
        "\u1EBC": 'E',
        "\u0112": 'E',
        "\u1E14": 'E',
        "\u1E16": 'E',
        "\u0114": 'E',
        "\u0116": 'E',
        "\xCB": 'E',
        "\u1EBA": 'E',
        "\u011A": 'E',
        "\u0204": 'E',
        "\u0206": 'E',
        "\u1EB8": 'E',
        "\u1EC6": 'E',
        "\u0228": 'E',
        "\u1E1C": 'E',
        "\u0118": 'E',
        "\u1E18": 'E',
        "\u1E1A": 'E',
        "\u0190": 'E',
        "\u018E": 'E',
        "\u24BB": 'F',
        "\uFF26": 'F',
        "\u1E1E": 'F',
        "\u0191": 'F',
        "\uA77B": 'F',
        "\u24BC": 'G',
        "\uFF27": 'G',
        "\u01F4": 'G',
        "\u011C": 'G',
        "\u1E20": 'G',
        "\u011E": 'G',
        "\u0120": 'G',
        "\u01E6": 'G',
        "\u0122": 'G',
        "\u01E4": 'G',
        "\u0193": 'G',
        "\uA7A0": 'G',
        "\uA77D": 'G',
        "\uA77E": 'G',
        "\u24BD": 'H',
        "\uFF28": 'H',
        "\u0124": 'H',
        "\u1E22": 'H',
        "\u1E26": 'H',
        "\u021E": 'H',
        "\u1E24": 'H',
        "\u1E28": 'H',
        "\u1E2A": 'H',
        "\u0126": 'H',
        "\u2C67": 'H',
        "\u2C75": 'H',
        "\uA78D": 'H',
        "\u24BE": 'I',
        "\uFF29": 'I',
        "\xCC": 'I',
        "\xCD": 'I',
        "\xCE": 'I',
        "\u0128": 'I',
        "\u012A": 'I',
        "\u012C": 'I',
        "\u0130": 'I',
        "\xCF": 'I',
        "\u1E2E": 'I',
        "\u1EC8": 'I',
        "\u01CF": 'I',
        "\u0208": 'I',
        "\u020A": 'I',
        "\u1ECA": 'I',
        "\u012E": 'I',
        "\u1E2C": 'I',
        "\u0197": 'I',
        "\u24BF": 'J',
        "\uFF2A": 'J',
        "\u0134": 'J',
        "\u0248": 'J',
        "\u24C0": 'K',
        "\uFF2B": 'K',
        "\u1E30": 'K',
        "\u01E8": 'K',
        "\u1E32": 'K',
        "\u0136": 'K',
        "\u1E34": 'K',
        "\u0198": 'K',
        "\u2C69": 'K',
        "\uA740": 'K',
        "\uA742": 'K',
        "\uA744": 'K',
        "\uA7A2": 'K',
        "\u24C1": 'L',
        "\uFF2C": 'L',
        "\u013F": 'L',
        "\u0139": 'L',
        "\u013D": 'L',
        "\u1E36": 'L',
        "\u1E38": 'L',
        "\u013B": 'L',
        "\u1E3C": 'L',
        "\u1E3A": 'L',
        "\u0141": 'L',
        "\u023D": 'L',
        "\u2C62": 'L',
        "\u2C60": 'L',
        "\uA748": 'L',
        "\uA746": 'L',
        "\uA780": 'L',
        "\u01C7": 'LJ',
        "\u01C8": 'Lj',
        "\u24C2": 'M',
        "\uFF2D": 'M',
        "\u1E3E": 'M',
        "\u1E40": 'M',
        "\u1E42": 'M',
        "\u2C6E": 'M',
        "\u019C": 'M',
        "\u24C3": 'N',
        "\uFF2E": 'N',
        "\u01F8": 'N',
        "\u0143": 'N',
        "\xD1": 'N',
        "\u1E44": 'N',
        "\u0147": 'N',
        "\u1E46": 'N',
        "\u0145": 'N',
        "\u1E4A": 'N',
        "\u1E48": 'N',
        "\u0220": 'N',
        "\u019D": 'N',
        "\uA790": 'N',
        "\uA7A4": 'N',
        "\u01CA": 'NJ',
        "\u01CB": 'Nj',
        "\u24C4": 'O',
        "\uFF2F": 'O',
        "\xD2": 'O',
        "\xD3": 'O',
        "\xD4": 'O',
        "\u1ED2": 'O',
        "\u1ED0": 'O',
        "\u1ED6": 'O',
        "\u1ED4": 'O',
        "\xD5": 'O',
        "\u1E4C": 'O',
        "\u022C": 'O',
        "\u1E4E": 'O',
        "\u014C": 'O',
        "\u1E50": 'O',
        "\u1E52": 'O',
        "\u014E": 'O',
        "\u022E": 'O',
        "\u0230": 'O',
        "\xD6": 'O',
        "\u022A": 'O',
        "\u1ECE": 'O',
        "\u0150": 'O',
        "\u01D1": 'O',
        "\u020C": 'O',
        "\u020E": 'O',
        "\u01A0": 'O',
        "\u1EDC": 'O',
        "\u1EDA": 'O',
        "\u1EE0": 'O',
        "\u1EDE": 'O',
        "\u1EE2": 'O',
        "\u1ECC": 'O',
        "\u1ED8": 'O',
        "\u01EA": 'O',
        "\u01EC": 'O',
        "\xD8": 'O',
        "\u01FE": 'O',
        "\u0186": 'O',
        "\u019F": 'O',
        "\uA74A": 'O',
        "\uA74C": 'O',
        "\u01A2": 'OI',
        "\uA74E": 'OO',
        "\u0222": 'OU',
        "\u24C5": 'P',
        "\uFF30": 'P',
        "\u1E54": 'P',
        "\u1E56": 'P',
        "\u01A4": 'P',
        "\u2C63": 'P',
        "\uA750": 'P',
        "\uA752": 'P',
        "\uA754": 'P',
        "\u24C6": 'Q',
        "\uFF31": 'Q',
        "\uA756": 'Q',
        "\uA758": 'Q',
        "\u024A": 'Q',
        "\u24C7": 'R',
        "\uFF32": 'R',
        "\u0154": 'R',
        "\u1E58": 'R',
        "\u0158": 'R',
        "\u0210": 'R',
        "\u0212": 'R',
        "\u1E5A": 'R',
        "\u1E5C": 'R',
        "\u0156": 'R',
        "\u1E5E": 'R',
        "\u024C": 'R',
        "\u2C64": 'R',
        "\uA75A": 'R',
        "\uA7A6": 'R',
        "\uA782": 'R',
        "\u24C8": 'S',
        "\uFF33": 'S',
        "\u1E9E": 'S',
        "\u015A": 'S',
        "\u1E64": 'S',
        "\u015C": 'S',
        "\u1E60": 'S',
        "\u0160": 'S',
        "\u1E66": 'S',
        "\u1E62": 'S',
        "\u1E68": 'S',
        "\u0218": 'S',
        "\u015E": 'S',
        "\u2C7E": 'S',
        "\uA7A8": 'S',
        "\uA784": 'S',
        "\u24C9": 'T',
        "\uFF34": 'T',
        "\u1E6A": 'T',
        "\u0164": 'T',
        "\u1E6C": 'T',
        "\u021A": 'T',
        "\u0162": 'T',
        "\u1E70": 'T',
        "\u1E6E": 'T',
        "\u0166": 'T',
        "\u01AC": 'T',
        "\u01AE": 'T',
        "\u023E": 'T',
        "\uA786": 'T',
        "\uA728": 'TZ',
        "\u24CA": 'U',
        "\uFF35": 'U',
        "\xD9": 'U',
        "\xDA": 'U',
        "\xDB": 'U',
        "\u0168": 'U',
        "\u1E78": 'U',
        "\u016A": 'U',
        "\u1E7A": 'U',
        "\u016C": 'U',
        "\xDC": 'U',
        "\u01DB": 'U',
        "\u01D7": 'U',
        "\u01D5": 'U',
        "\u01D9": 'U',
        "\u1EE6": 'U',
        "\u016E": 'U',
        "\u0170": 'U',
        "\u01D3": 'U',
        "\u0214": 'U',
        "\u0216": 'U',
        "\u01AF": 'U',
        "\u1EEA": 'U',
        "\u1EE8": 'U',
        "\u1EEE": 'U',
        "\u1EEC": 'U',
        "\u1EF0": 'U',
        "\u1EE4": 'U',
        "\u1E72": 'U',
        "\u0172": 'U',
        "\u1E76": 'U',
        "\u1E74": 'U',
        "\u0244": 'U',
        "\u24CB": 'V',
        "\uFF36": 'V',
        "\u1E7C": 'V',
        "\u1E7E": 'V',
        "\u01B2": 'V',
        "\uA75E": 'V',
        "\u0245": 'V',
        "\uA760": 'VY',
        "\u24CC": 'W',
        "\uFF37": 'W',
        "\u1E80": 'W',
        "\u1E82": 'W',
        "\u0174": 'W',
        "\u1E86": 'W',
        "\u1E84": 'W',
        "\u1E88": 'W',
        "\u2C72": 'W',
        "\u24CD": 'X',
        "\uFF38": 'X',
        "\u1E8A": 'X',
        "\u1E8C": 'X',
        "\u24CE": 'Y',
        "\uFF39": 'Y',
        "\u1EF2": 'Y',
        "\xDD": 'Y',
        "\u0176": 'Y',
        "\u1EF8": 'Y',
        "\u0232": 'Y',
        "\u1E8E": 'Y',
        "\u0178": 'Y',
        "\u1EF6": 'Y',
        "\u1EF4": 'Y',
        "\u01B3": 'Y',
        "\u024E": 'Y',
        "\u1EFE": 'Y',
        "\u24CF": 'Z',
        "\uFF3A": 'Z',
        "\u0179": 'Z',
        "\u1E90": 'Z',
        "\u017B": 'Z',
        "\u017D": 'Z',
        "\u1E92": 'Z',
        "\u1E94": 'Z',
        "\u01B5": 'Z',
        "\u0224": 'Z',
        "\u2C7F": 'Z',
        "\u2C6B": 'Z',
        "\uA762": 'Z',
        "\u24D0": 'a',
        "\uFF41": 'a',
        "\u1E9A": 'a',
        "\xE0": 'a',
        "\xE1": 'a',
        "\xE2": 'a',
        "\u1EA7": 'a',
        "\u1EA5": 'a',
        "\u1EAB": 'a',
        "\u1EA9": 'a',
        "\xE3": 'a',
        "\u0101": 'a',
        "\u0103": 'a',
        "\u1EB1": 'a',
        "\u1EAF": 'a',
        "\u1EB5": 'a',
        "\u1EB3": 'a',
        "\u0227": 'a',
        "\u01E1": 'a',
        "\xE4": 'a',
        "\u01DF": 'a',
        "\u1EA3": 'a',
        "\xE5": 'a',
        "\u01FB": 'a',
        "\u01CE": 'a',
        "\u0201": 'a',
        "\u0203": 'a',
        "\u1EA1": 'a',
        "\u1EAD": 'a',
        "\u1EB7": 'a',
        "\u1E01": 'a',
        "\u0105": 'a',
        "\u2C65": 'a',
        "\u0250": 'a',
        "\uA733": 'aa',
        "\xE6": 'ae',
        "\u01FD": 'ae',
        "\u01E3": 'ae',
        "\uA735": 'ao',
        "\uA737": 'au',
        "\uA739": 'av',
        "\uA73B": 'av',
        "\uA73D": 'ay',
        "\u24D1": 'b',
        "\uFF42": 'b',
        "\u1E03": 'b',
        "\u1E05": 'b',
        "\u1E07": 'b',
        "\u0180": 'b',
        "\u0183": 'b',
        "\u0253": 'b',
        "\u24D2": 'c',
        "\uFF43": 'c',
        "\u0107": 'c',
        "\u0109": 'c',
        "\u010B": 'c',
        "\u010D": 'c',
        "\xE7": 'c',
        "\u1E09": 'c',
        "\u0188": 'c',
        "\u023C": 'c',
        "\uA73F": 'c',
        "\u2184": 'c',
        "\u24D3": 'd',
        "\uFF44": 'd',
        "\u1E0B": 'd',
        "\u010F": 'd',
        "\u1E0D": 'd',
        "\u1E11": 'd',
        "\u1E13": 'd',
        "\u1E0F": 'd',
        "\u0111": 'd',
        "\u018C": 'd',
        "\u0256": 'd',
        "\u0257": 'd',
        "\uA77A": 'd',
        "\u01F3": 'dz',
        "\u01C6": 'dz',
        "\u24D4": 'e',
        "\uFF45": 'e',
        "\xE8": 'e',
        "\xE9": 'e',
        "\xEA": 'e',
        "\u1EC1": 'e',
        "\u1EBF": 'e',
        "\u1EC5": 'e',
        "\u1EC3": 'e',
        "\u1EBD": 'e',
        "\u0113": 'e',
        "\u1E15": 'e',
        "\u1E17": 'e',
        "\u0115": 'e',
        "\u0117": 'e',
        "\xEB": 'e',
        "\u1EBB": 'e',
        "\u011B": 'e',
        "\u0205": 'e',
        "\u0207": 'e',
        "\u1EB9": 'e',
        "\u1EC7": 'e',
        "\u0229": 'e',
        "\u1E1D": 'e',
        "\u0119": 'e',
        "\u1E19": 'e',
        "\u1E1B": 'e',
        "\u0247": 'e',
        "\u025B": 'e',
        "\u01DD": 'e',
        "\u24D5": 'f',
        "\uFF46": 'f',
        "\u1E1F": 'f',
        "\u0192": 'f',
        "\uA77C": 'f',
        "\u24D6": 'g',
        "\uFF47": 'g',
        "\u01F5": 'g',
        "\u011D": 'g',
        "\u1E21": 'g',
        "\u011F": 'g',
        "\u0121": 'g',
        "\u01E7": 'g',
        "\u0123": 'g',
        "\u01E5": 'g',
        "\u0260": 'g',
        "\uA7A1": 'g',
        "\u1D79": 'g',
        "\uA77F": 'g',
        "\u24D7": 'h',
        "\uFF48": 'h',
        "\u0125": 'h',
        "\u1E23": 'h',
        "\u1E27": 'h',
        "\u021F": 'h',
        "\u1E25": 'h',
        "\u1E29": 'h',
        "\u1E2B": 'h',
        "\u1E96": 'h',
        "\u0127": 'h',
        "\u2C68": 'h',
        "\u2C76": 'h',
        "\u0265": 'h',
        "\u0195": 'hv',
        "\u24D8": 'i',
        "\uFF49": 'i',
        "\xEC": 'i',
        "\xED": 'i',
        "\xEE": 'i',
        "\u0129": 'i',
        "\u012B": 'i',
        "\u012D": 'i',
        "\xEF": 'i',
        "\u1E2F": 'i',
        "\u1EC9": 'i',
        "\u01D0": 'i',
        "\u0209": 'i',
        "\u020B": 'i',
        "\u1ECB": 'i',
        "\u012F": 'i',
        "\u1E2D": 'i',
        "\u0268": 'i',
        "\u0131": 'i',
        "\u24D9": 'j',
        "\uFF4A": 'j',
        "\u0135": 'j',
        "\u01F0": 'j',
        "\u0249": 'j',
        "\u24DA": 'k',
        "\uFF4B": 'k',
        "\u1E31": 'k',
        "\u01E9": 'k',
        "\u1E33": 'k',
        "\u0137": 'k',
        "\u1E35": 'k',
        "\u0199": 'k',
        "\u2C6A": 'k',
        "\uA741": 'k',
        "\uA743": 'k',
        "\uA745": 'k',
        "\uA7A3": 'k',
        "\u24DB": 'l',
        "\uFF4C": 'l',
        "\u0140": 'l',
        "\u013A": 'l',
        "\u013E": 'l',
        "\u1E37": 'l',
        "\u1E39": 'l',
        "\u013C": 'l',
        "\u1E3D": 'l',
        "\u1E3B": 'l',
        "\u017F": 'l',
        "\u0142": 'l',
        "\u019A": 'l',
        "\u026B": 'l',
        "\u2C61": 'l',
        "\uA749": 'l',
        "\uA781": 'l',
        "\uA747": 'l',
        "\u01C9": 'lj',
        "\u24DC": 'm',
        "\uFF4D": 'm',
        "\u1E3F": 'm',
        "\u1E41": 'm',
        "\u1E43": 'm',
        "\u0271": 'm',
        "\u026F": 'm',
        "\u24DD": 'n',
        "\uFF4E": 'n',
        "\u01F9": 'n',
        "\u0144": 'n',
        "\xF1": 'n',
        "\u1E45": 'n',
        "\u0148": 'n',
        "\u1E47": 'n',
        "\u0146": 'n',
        "\u1E4B": 'n',
        "\u1E49": 'n',
        "\u019E": 'n',
        "\u0272": 'n',
        "\u0149": 'n',
        "\uA791": 'n',
        "\uA7A5": 'n',
        "\u01CC": 'nj',
        "\u24DE": 'o',
        "\uFF4F": 'o',
        "\xF2": 'o',
        "\xF3": 'o',
        "\xF4": 'o',
        "\u1ED3": 'o',
        "\u1ED1": 'o',
        "\u1ED7": 'o',
        "\u1ED5": 'o',
        "\xF5": 'o',
        "\u1E4D": 'o',
        "\u022D": 'o',
        "\u1E4F": 'o',
        "\u014D": 'o',
        "\u1E51": 'o',
        "\u1E53": 'o',
        "\u014F": 'o',
        "\u022F": 'o',
        "\u0231": 'o',
        "\xF6": 'o',
        "\u022B": 'o',
        "\u1ECF": 'o',
        "\u0151": 'o',
        "\u01D2": 'o',
        "\u020D": 'o',
        "\u020F": 'o',
        "\u01A1": 'o',
        "\u1EDD": 'o',
        "\u1EDB": 'o',
        "\u1EE1": 'o',
        "\u1EDF": 'o',
        "\u1EE3": 'o',
        "\u1ECD": 'o',
        "\u1ED9": 'o',
        "\u01EB": 'o',
        "\u01ED": 'o',
        "\xF8": 'o',
        "\u01FF": 'o',
        "\u0254": 'o',
        "\uA74B": 'o',
        "\uA74D": 'o',
        "\u0275": 'o',
        "\u01A3": 'oi',
        "\u0223": 'ou',
        "\uA74F": 'oo',
        "\u24DF": 'p',
        "\uFF50": 'p',
        "\u1E55": 'p',
        "\u1E57": 'p',
        "\u01A5": 'p',
        "\u1D7D": 'p',
        "\uA751": 'p',
        "\uA753": 'p',
        "\uA755": 'p',
        "\u24E0": 'q',
        "\uFF51": 'q',
        "\u024B": 'q',
        "\uA757": 'q',
        "\uA759": 'q',
        "\u24E1": 'r',
        "\uFF52": 'r',
        "\u0155": 'r',
        "\u1E59": 'r',
        "\u0159": 'r',
        "\u0211": 'r',
        "\u0213": 'r',
        "\u1E5B": 'r',
        "\u1E5D": 'r',
        "\u0157": 'r',
        "\u1E5F": 'r',
        "\u024D": 'r',
        "\u027D": 'r',
        "\uA75B": 'r',
        "\uA7A7": 'r',
        "\uA783": 'r',
        "\u24E2": 's',
        "\uFF53": 's',
        "\xDF": 's',
        "\u015B": 's',
        "\u1E65": 's',
        "\u015D": 's',
        "\u1E61": 's',
        "\u0161": 's',
        "\u1E67": 's',
        "\u1E63": 's',
        "\u1E69": 's',
        "\u0219": 's',
        "\u015F": 's',
        "\u023F": 's',
        "\uA7A9": 's',
        "\uA785": 's',
        "\u1E9B": 's',
        "\u24E3": 't',
        "\uFF54": 't',
        "\u1E6B": 't',
        "\u1E97": 't',
        "\u0165": 't',
        "\u1E6D": 't',
        "\u021B": 't',
        "\u0163": 't',
        "\u1E71": 't',
        "\u1E6F": 't',
        "\u0167": 't',
        "\u01AD": 't',
        "\u0288": 't',
        "\u2C66": 't',
        "\uA787": 't',
        "\uA729": 'tz',
        "\u24E4": 'u',
        "\uFF55": 'u',
        "\xF9": 'u',
        "\xFA": 'u',
        "\xFB": 'u',
        "\u0169": 'u',
        "\u1E79": 'u',
        "\u016B": 'u',
        "\u1E7B": 'u',
        "\u016D": 'u',
        "\xFC": 'u',
        "\u01DC": 'u',
        "\u01D8": 'u',
        "\u01D6": 'u',
        "\u01DA": 'u',
        "\u1EE7": 'u',
        "\u016F": 'u',
        "\u0171": 'u',
        "\u01D4": 'u',
        "\u0215": 'u',
        "\u0217": 'u',
        "\u01B0": 'u',
        "\u1EEB": 'u',
        "\u1EE9": 'u',
        "\u1EEF": 'u',
        "\u1EED": 'u',
        "\u1EF1": 'u',
        "\u1EE5": 'u',
        "\u1E73": 'u',
        "\u0173": 'u',
        "\u1E77": 'u',
        "\u1E75": 'u',
        "\u0289": 'u',
        "\u24E5": 'v',
        "\uFF56": 'v',
        "\u1E7D": 'v',
        "\u1E7F": 'v',
        "\u028B": 'v',
        "\uA75F": 'v',
        "\u028C": 'v',
        "\uA761": 'vy',
        "\u24E6": 'w',
        "\uFF57": 'w',
        "\u1E81": 'w',
        "\u1E83": 'w',
        "\u0175": 'w',
        "\u1E87": 'w',
        "\u1E85": 'w',
        "\u1E98": 'w',
        "\u1E89": 'w',
        "\u2C73": 'w',
        "\u24E7": 'x',
        "\uFF58": 'x',
        "\u1E8B": 'x',
        "\u1E8D": 'x',
        "\u24E8": 'y',
        "\uFF59": 'y',
        "\u1EF3": 'y',
        "\xFD": 'y',
        "\u0177": 'y',
        "\u1EF9": 'y',
        "\u0233": 'y',
        "\u1E8F": 'y',
        "\xFF": 'y',
        "\u1EF7": 'y',
        "\u1E99": 'y',
        "\u1EF5": 'y',
        "\u01B4": 'y',
        "\u024F": 'y',
        "\u1EFF": 'y',
        "\u24E9": 'z',
        "\uFF5A": 'z',
        "\u017A": 'z',
        "\u1E91": 'z',
        "\u017C": 'z',
        "\u017E": 'z',
        "\u1E93": 'z',
        "\u1E95": 'z',
        "\u01B6": 'z',
        "\u0225": 'z',
        "\u0240": 'z',
        "\u2C6C": 'z',
        "\uA763": 'z',
        "\u0386": "\u0391",
        "\u0388": "\u0395",
        "\u0389": "\u0397",
        "\u038A": "\u0399",
        "\u03AA": "\u0399",
        "\u038C": "\u039F",
        "\u038E": "\u03A5",
        "\u03AB": "\u03A5",
        "\u038F": "\u03A9",
        "\u03AC": "\u03B1",
        "\u03AD": "\u03B5",
        "\u03AE": "\u03B7",
        "\u03AF": "\u03B9",
        "\u03CA": "\u03B9",
        "\u0390": "\u03B9",
        "\u03CC": "\u03BF",
        "\u03CD": "\u03C5",
        "\u03CB": "\u03C5",
        "\u03B0": "\u03C5",
        "\u03C9": "\u03C9",
        "\u03C2": "\u03C3"
      };

      function stripSpecialChars(text) {
        var match = function match(a) {
          return diacritics[a] || a;
        };

        return text.replace(/[^\u0000-\u007E]/g, match);
      }

      var ItemsList = /*#__PURE__*/function () {
        function ItemsList(_ngSelect, _selectionModel) {
          _classCallCheck(this, ItemsList);

          this._ngSelect = _ngSelect;
          this._selectionModel = _selectionModel;
          this._items = [];
          this._filteredItems = [];
          this._markedIndex = -1;
        }

        _createClass(ItemsList, [{
          key: "items",
          get: function get() {
            return this._items;
          }
        }, {
          key: "filteredItems",
          get: function get() {
            return this._filteredItems;
          }
        }, {
          key: "markedIndex",
          get: function get() {
            return this._markedIndex;
          }
        }, {
          key: "selectedItems",
          get: function get() {
            return this._selectionModel.value;
          }
        }, {
          key: "markedItem",
          get: function get() {
            return this._filteredItems[this._markedIndex];
          }
        }, {
          key: "noItemsToSelect",
          get: function get() {
            return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
          }
        }, {
          key: "maxItemsSelected",
          get: function get() {
            return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
          }
        }, {
          key: "lastSelectedItem",
          get: function get() {
            var i = this.selectedItems.length - 1;

            for (; i >= 0; i--) {
              var item = this.selectedItems[i];

              if (!item.disabled) {
                return item;
              }
            }

            return null;
          }
        }, {
          key: "setItems",
          value: function setItems(items) {
            var _this = this;

            this._items = items.map(function (item, index) {
              return _this.mapItem(item, index);
            });

            if (this._ngSelect.groupBy) {
              this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
              this._items = this._flatten(this._groups);
            } else {
              this._groups = new Map();

              this._groups.set(undefined, this._items);
            }

            this._filteredItems = _toConsumableArray(this._items);
          }
        }, {
          key: "select",
          value: function select(item) {
            if (item.selected || this.maxItemsSelected) {
              return;
            }

            var multiple = this._ngSelect.multiple;

            if (!multiple) {
              this.clearSelected();
            }

            this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);

            if (this._ngSelect.hideSelected) {
              this._hideSelected(item);
            }
          }
        }, {
          key: "unselect",
          value: function unselect(item) {
            if (!item.selected) {
              return;
            }

            this._selectionModel.unselect(item, this._ngSelect.multiple);

            if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
              this._showSelected(item);
            }
          }
        }, {
          key: "findItem",
          value: function findItem(value) {
            var _this2 = this;

            var findBy;

            if (this._ngSelect.compareWith) {
              findBy = function findBy(item) {
                return _this2._ngSelect.compareWith(item.value, value);
              };
            } else if (this._ngSelect.bindValue) {
              findBy = function findBy(item) {
                return !item.children && _this2.resolveNested(item.value, _this2._ngSelect.bindValue) === value;
              };
            } else {
              findBy = function findBy(item) {
                return item.value === value || !item.children && item.label && item.label === _this2.resolveNested(value, _this2._ngSelect.bindLabel);
              };
            }

            return this._items.find(function (item) {
              return findBy(item);
            });
          }
        }, {
          key: "addItem",
          value: function addItem(item) {
            var option = this.mapItem(item, this._items.length);

            this._items.push(option);

            this._filteredItems.push(option);

            return option;
          }
        }, {
          key: "clearSelected",
          value: function clearSelected() {
            var keepDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this._selectionModel.clear(keepDisabled);

            this._items.forEach(function (item) {
              item.selected = keepDisabled && item.selected && item.disabled;
              item.marked = false;
            });

            if (this._ngSelect.hideSelected) {
              this.resetFilteredItems();
            }
          }
        }, {
          key: "findByLabel",
          value: function findByLabel(term) {
            term = stripSpecialChars(term).toLocaleLowerCase();
            return this.filteredItems.find(function (item) {
              var label = stripSpecialChars(item.label).toLocaleLowerCase();
              return label.substr(0, term.length) === term;
            });
          }
        }, {
          key: "filter",
          value: function filter(term) {
            var _this3 = this;

            if (!term) {
              this.resetFilteredItems();
              return;
            }

            this._filteredItems = [];
            term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
            var match = this._ngSelect.searchFn || this._defaultSearchFn;
            var hideSelected = this._ngSelect.hideSelected;

            for (var _i = 0, _Array$from = Array.from(this._groups.keys()); _i < _Array$from.length; _i++) {
              var key = _Array$from[_i];
              var matchedItems = [];

              var _iterator = _createForOfIteratorHelper(this._groups.get(key)),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var item = _step.value;

                  if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                    continue;
                  }

                  var searchItem = this._ngSelect.searchFn ? item.value : item;

                  if (match(term, searchItem)) {
                    matchedItems.push(item);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (matchedItems.length > 0) {
                (function () {
                  var _this3$_filteredItems;

                  var _matchedItems$slice = matchedItems.slice(-1),
                      _matchedItems$slice2 = _slicedToArray(_matchedItems$slice, 1),
                      last = _matchedItems$slice2[0];

                  if (last.parent) {
                    var head = _this3._items.find(function (x) {
                      return x === last.parent;
                    });

                    _this3._filteredItems.push(head);
                  }

                  (_this3$_filteredItems = _this3._filteredItems).push.apply(_this3$_filteredItems, matchedItems);
                })();
              }
            }
          }
        }, {
          key: "resetFilteredItems",
          value: function resetFilteredItems() {
            if (this._filteredItems.length === this._items.length) {
              return;
            }

            if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
              this._filteredItems = this._items.filter(function (x) {
                return !x.selected;
              });
            } else {
              this._filteredItems = this._items;
            }
          }
        }, {
          key: "unmarkItem",
          value: function unmarkItem() {
            this._markedIndex = -1;
          }
        }, {
          key: "markNextItem",
          value: function markNextItem() {
            this._stepToItem(+1);
          }
        }, {
          key: "markPreviousItem",
          value: function markPreviousItem() {
            this._stepToItem(-1);
          }
        }, {
          key: "markItem",
          value: function markItem(item) {
            this._markedIndex = this._filteredItems.indexOf(item);
          }
        }, {
          key: "markSelectedOrDefault",
          value: function markSelectedOrDefault(markDefault) {
            if (this._filteredItems.length === 0) {
              return;
            }

            var lastMarkedIndex = this._getLastMarkedIndex();

            if (lastMarkedIndex > -1) {
              this._markedIndex = lastMarkedIndex;
            } else {
              this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) {
                return !x.disabled;
              }) : -1;
            }
          }
        }, {
          key: "resolveNested",
          value: function resolveNested(option, key) {
            if (!isObject(option)) {
              return option;
            }

            if (key.indexOf('.') === -1) {
              return option[key];
            } else {
              var keys = key.split('.');
              var value = option;

              for (var i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                  return null;
                }

                value = value[keys[i]];
              }

              return value;
            }
          }
        }, {
          key: "mapItem",
          value: function mapItem(item, index) {
            var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
            var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
            return {
              index: index,
              label: isDefined(label) ? label.toString() : '',
              value: value,
              disabled: item.disabled,
              htmlId: "".concat(this._ngSelect.dropdownId, "-").concat(index)
            };
          }
        }, {
          key: "mapSelectedItems",
          value: function mapSelectedItems() {
            var _this4 = this;

            var multiple = this._ngSelect.multiple;

            var _iterator2 = _createForOfIteratorHelper(this.selectedItems),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var selected = _step2.value;
                var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
                var item = isDefined(value) ? this.findItem(value) : null;

                this._selectionModel.unselect(selected, multiple);

                this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (this._ngSelect.hideSelected) {
              this._filteredItems = this.filteredItems.filter(function (x) {
                return _this4.selectedItems.indexOf(x) === -1;
              });
            }
          }
        }, {
          key: "_showSelected",
          value: function _showSelected(item) {
            this._filteredItems.push(item);

            if (item.parent) {
              var parent = item.parent;

              var parentExists = this._filteredItems.find(function (x) {
                return x === parent;
              });

              if (!parentExists) {
                this._filteredItems.push(parent);
              }
            } else if (item.children) {
              var _iterator3 = _createForOfIteratorHelper(item.children),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var child = _step3.value;
                  child.selected = false;

                  this._filteredItems.push(child);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            this._filteredItems = _toConsumableArray(this._filteredItems.sort(function (a, b) {
              return a.index - b.index;
            }));
          }
        }, {
          key: "_hideSelected",
          value: function _hideSelected(item) {
            this._filteredItems = this._filteredItems.filter(function (x) {
              return x !== item;
            });

            if (item.parent) {
              var children = item.parent.children;

              if (children.every(function (x) {
                return x.selected;
              })) {
                this._filteredItems = this._filteredItems.filter(function (x) {
                  return x !== item.parent;
                });
              }
            } else if (item.children) {
              this._filteredItems = this.filteredItems.filter(function (x) {
                return x.parent !== item;
              });
            }
          }
        }, {
          key: "_defaultSearchFn",
          value: function _defaultSearchFn(search, opt) {
            var label = stripSpecialChars(opt.label).toLocaleLowerCase();
            return label.indexOf(search) > -1;
          }
        }, {
          key: "_getNextItemIndex",
          value: function _getNextItemIndex(steps) {
            if (steps > 0) {
              return this._markedIndex >= this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
            }

            return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
          }
        }, {
          key: "_stepToItem",
          value: function _stepToItem(steps) {
            if (this._filteredItems.length === 0 || this._filteredItems.every(function (x) {
              return x.disabled;
            })) {
              return;
            }

            this._markedIndex = this._getNextItemIndex(steps);

            if (this.markedItem.disabled) {
              this._stepToItem(steps);
            }
          }
        }, {
          key: "_getLastMarkedIndex",
          value: function _getLastMarkedIndex() {
            if (this._ngSelect.hideSelected) {
              return -1;
            }

            if (this._markedIndex > -1 && this.markedItem === undefined) {
              return -1;
            }

            var selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);

            if (this.lastSelectedItem && selectedIndex < 0) {
              return -1;
            }

            return Math.max(this.markedIndex, selectedIndex);
          }
        }, {
          key: "_groupBy",
          value: function _groupBy(items, prop) {
            var _this5 = this;

            var groups = new Map();

            if (items.length === 0) {
              return groups;
            } // Check if items are already grouped by given key.


            if (Array.isArray(items[0].value[prop])) {
              var _iterator4 = _createForOfIteratorHelper(items),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var item = _step4.value;
                  var children = (item.value[prop] || []).map(function (x, index) {
                    return _this5.mapItem(x, index);
                  });
                  groups.set(item, children);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              return groups;
            }

            var isFnKey = isFunction(this._ngSelect.groupBy);

            var keyFn = function keyFn(item) {
              var key = isFnKey ? prop(item.value) : item.value[prop];
              return isDefined(key) ? key : undefined;
            }; // Group items by key.


            var _iterator5 = _createForOfIteratorHelper(items),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _item = _step5.value;
                var key = keyFn(_item);
                var group = groups.get(key);

                if (group) {
                  group.push(_item);
                } else {
                  groups.set(key, [_item]);
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return groups;
          }
        }, {
          key: "_flatten",
          value: function _flatten(groups) {
            var _this6 = this;

            var isGroupByFn = isFunction(this._ngSelect.groupBy);
            var items = [];

            var _loop = function _loop() {
              var key = _Array$from2[_i2];
              var i = items.length;

              if (key === undefined) {
                var withoutGroup = groups.get(undefined) || [];
                items.push.apply(items, _toConsumableArray(withoutGroup.map(function (x) {
                  x.index = i++;
                  return x;
                })));
                return "continue";
              }

              var isObjectKey = isObject(key);
              var parent = {
                label: isObjectKey ? '' : String(key),
                children: undefined,
                parent: null,
                index: i++,
                disabled: !_this6._ngSelect.selectableGroup,
                htmlId: newId()
              };
              var groupKey = isGroupByFn ? _this6._ngSelect.bindLabel : _this6._ngSelect.groupBy;

              var groupValue = _this6._ngSelect.groupValue || function () {
                if (isObjectKey) {
                  return key.value;
                }

                return _defineProperty({}, groupKey, key);
              };

              var children = groups.get(key).map(function (x) {
                x.parent = parent;
                x.children = undefined;
                x.index = i++;
                return x;
              });
              parent.children = children;
              parent.value = groupValue(key, children.map(function (x) {
                return x.value;
              }));
              items.push(parent);
              items.push.apply(items, _toConsumableArray(children));
            };

            for (var _i2 = 0, _Array$from2 = Array.from(groups.keys()); _i2 < _Array$from2.length; _i2++) {
              var _ret = _loop();

              if (_ret === "continue") continue;
            }

            return items;
          }
        }]);

        return ItemsList;
      }();

      var KeyCode;

      (function (KeyCode) {
        KeyCode[KeyCode["Tab"] = 9] = "Tab";
        KeyCode[KeyCode["Enter"] = 13] = "Enter";
        KeyCode[KeyCode["Esc"] = 27] = "Esc";
        KeyCode[KeyCode["Space"] = 32] = "Space";
        KeyCode[KeyCode["ArrowUp"] = 38] = "ArrowUp";
        KeyCode[KeyCode["ArrowDown"] = 40] = "ArrowDown";
        KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
      })(KeyCode || (KeyCode = {}));

      var NgDropdownPanelService = /*#__PURE__*/function () {
        function NgDropdownPanelService() {
          _classCallCheck(this, NgDropdownPanelService);

          this._dimensions = {
            itemHeight: 0,
            panelHeight: 0,
            itemsPerViewport: 0
          };
        }

        _createClass(NgDropdownPanelService, [{
          key: "dimensions",
          get: function get() {
            return this._dimensions;
          }
        }, {
          key: "calculateItems",
          value: function calculateItems(scrollPos, itemsLength, buffer) {
            var d = this._dimensions;
            var scrollHeight = d.itemHeight * itemsLength;
            var scrollTop = Math.max(0, scrollPos);
            var indexByScrollTop = scrollTop / scrollHeight * itemsLength;
            var end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
            var maxStartEnd = end;
            var maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
            var start = Math.min(maxStart, Math.floor(indexByScrollTop));
            var topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
            topPadding = !isNaN(topPadding) ? topPadding : 0;
            start = !isNaN(start) ? start : -1;
            end = !isNaN(end) ? end : -1;
            start -= buffer;
            start = Math.max(0, start);
            end += buffer;
            end = Math.min(itemsLength, end);
            return {
              topPadding: topPadding,
              scrollHeight: scrollHeight,
              start: start,
              end: end
            };
          }
        }, {
          key: "setDimensions",
          value: function setDimensions(itemHeight, panelHeight) {
            var itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
            this._dimensions = {
              itemHeight: itemHeight,
              panelHeight: panelHeight,
              itemsPerViewport: itemsPerViewport
            };
          }
        }, {
          key: "getScrollTo",
          value: function getScrollTo(itemTop, itemHeight, lastScroll) {
            var panelHeight = this.dimensions.panelHeight;
            var itemBottom = itemTop + itemHeight;
            var top = lastScroll;
            var bottom = top + panelHeight;

            if (panelHeight >= itemBottom && lastScroll === itemTop) {
              return null;
            }

            if (itemBottom > bottom) {
              return top + itemBottom - bottom;
            } else if (itemTop <= top) {
              return itemTop;
            }

            return null;
          }
        }]);

        return NgDropdownPanelService;
      }();

      NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) {
        return new (t || NgDropdownPanelService)();
      };

      NgDropdownPanelService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NgDropdownPanelService,
        factory: NgDropdownPanelService.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], function () {
          return [];
        }, null);
      })();

      var TOP_CSS_CLASS = 'ng-select-top';
      var BOTTOM_CSS_CLASS = 'ng-select-bottom';
      var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_1__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_2__.asapScheduler;

      var NgDropdownPanelComponent = /*#__PURE__*/function () {
        function NgDropdownPanelComponent(_renderer, _zone, _panelService, _elementRef, _document) {
          _classCallCheck(this, NgDropdownPanelComponent);

          this._renderer = _renderer;
          this._zone = _zone;
          this._panelService = _panelService;
          this._document = _document;
          this.items = [];
          this.position = 'auto';
          this.virtualScroll = false;
          this.filterValue = null;
          this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this._scrollToEndFired = false;
          this._updateScrollHeight = false;
          this._lastScrollPosition = 0;
          this._dropdown = _elementRef.nativeElement;
        }

        _createClass(NgDropdownPanelComponent, [{
          key: "currentPosition",
          get: function get() {
            return this._currentPosition;
          }
        }, {
          key: "itemsLength",
          get: function get() {
            return this._itemsLength;
          },
          set: function set(value) {
            if (value !== this._itemsLength) {
              this._itemsLength = value;

              this._onItemsLengthChanged();
            }
          }
        }, {
          key: "_startOffset",
          get: function get() {
            if (this.markedItem) {
              var _this$_panelService$d = this._panelService.dimensions,
                  itemHeight = _this$_panelService$d.itemHeight,
                  panelHeight = _this$_panelService$d.panelHeight;
              var offset = this.markedItem.index * itemHeight;
              return panelHeight > offset ? 0 : offset;
            }

            return 0;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._select = this._dropdown.parentElement;
            this._virtualPadding = this.paddingElementRef.nativeElement;
            this._scrollablePanel = this.scrollElementRef.nativeElement;
            this._contentPanel = this.contentElementRef.nativeElement;

            this._handleScroll();

            this._handleOutsideClick();

            this._appendDropdown();

            this._setupMousedownListener();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.items) {
              var change = changes.items;

              this._onItemsChange(change.currentValue, change.firstChange);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroy$.next();

            this._destroy$.complete();

            this._destroy$.unsubscribe();

            if (this.appendTo) {
              this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
            }
          }
        }, {
          key: "scrollTo",
          value: function scrollTo(option) {
            var startFromOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!option) {
              return;
            }

            var index = this.items.indexOf(option);

            if (index < 0 || index >= this.itemsLength) {
              return;
            }

            var scrollTo;

            if (this.virtualScroll) {
              var itemHeight = this._panelService.dimensions.itemHeight;
              scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
            } else {
              var item = this._dropdown.querySelector("#".concat(option.htmlId));

              var lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
              scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
            }

            if (isDefined(scrollTo)) {
              this._scrollablePanel.scrollTop = scrollTo;
            }
          }
        }, {
          key: "scrollToTag",
          value: function scrollToTag() {
            var panel = this._scrollablePanel;
            panel.scrollTop = panel.scrollHeight - panel.clientHeight;
          }
        }, {
          key: "adjustPosition",
          value: function adjustPosition() {
            this._updateYPosition();
          }
        }, {
          key: "_handleDropdownPosition",
          value: function _handleDropdownPosition() {
            this._currentPosition = this._calculateCurrentPosition(this._dropdown);

            if (this._currentPosition === 'top') {
              this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);

              this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);

              this._renderer.addClass(this._select, TOP_CSS_CLASS);

              this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
            } else {
              this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);

              this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);

              this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);

              this._renderer.removeClass(this._select, TOP_CSS_CLASS);
            }

            if (this.appendTo) {
              this._updateYPosition();
            }

            this._dropdown.style.opacity = '1';
          }
        }, {
          key: "_handleScroll",
          value: function _handleScroll() {
            var _this7 = this;

            this._zone.runOutsideAngular(function () {
              (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(_this7.scrollElementRef.nativeElement, 'scroll').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(_this7._destroy$), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(0, SCROLL_SCHEDULER)).subscribe(function (e) {
                var path = e.path || e.composedPath && e.composedPath();
                var scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;

                _this7._onContentScrolled(scrollTop);
              });
            });
          }
        }, {
          key: "_handleOutsideClick",
          value: function _handleOutsideClick() {
            var _this8 = this;

            if (!this._document) {
              return;
            }

            this._zone.runOutsideAngular(function () {
              (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)((0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(_this8._document, 'touchstart', {
                capture: true
              }), (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(_this8._document, 'mousedown', {
                capture: true
              })).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(_this8._destroy$)).subscribe(function ($event) {
                return _this8._checkToClose($event);
              });
            });
          }
        }, {
          key: "_checkToClose",
          value: function _checkToClose($event) {
            var _this9 = this;

            if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
              return;
            }

            var path = $event.path || $event.composedPath && $event.composedPath();

            if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
              return;
            }

            this._zone.run(function () {
              return _this9.outsideClick.emit();
            });
          }
        }, {
          key: "_onItemsChange",
          value: function _onItemsChange(items, firstChange) {
            this.items = items || [];
            this._scrollToEndFired = false;
            this.itemsLength = items.length;

            if (this.virtualScroll) {
              this._updateItemsRange(firstChange);
            } else {
              this._setVirtualHeight();

              this._updateItems(firstChange);
            }
          }
        }, {
          key: "_updateItems",
          value: function _updateItems(firstChange) {
            var _this10 = this;

            this.update.emit(this.items);

            if (firstChange === false) {
              return;
            }

            this._zone.runOutsideAngular(function () {
              Promise.resolve().then(function () {
                var panelHeight = _this10._scrollablePanel.clientHeight;

                _this10._panelService.setDimensions(0, panelHeight);

                _this10._handleDropdownPosition();

                _this10.scrollTo(_this10.markedItem, firstChange);
              });
            });
          }
        }, {
          key: "_updateItemsRange",
          value: function _updateItemsRange(firstChange) {
            var _this11 = this;

            this._zone.runOutsideAngular(function () {
              _this11._measureDimensions().then(function () {
                if (firstChange) {
                  _this11._renderItemsRange(_this11._startOffset);

                  _this11._handleDropdownPosition();
                } else {
                  _this11._renderItemsRange();
                }
              });
            });
          }
        }, {
          key: "_onContentScrolled",
          value: function _onContentScrolled(scrollTop) {
            if (this.virtualScroll) {
              this._renderItemsRange(scrollTop);
            }

            this._lastScrollPosition = scrollTop;

            this._fireScrollToEnd(scrollTop);
          }
        }, {
          key: "_updateVirtualHeight",
          value: function _updateVirtualHeight(height) {
            if (this._updateScrollHeight) {
              this._virtualPadding.style.height = "".concat(height, "px");
              this._updateScrollHeight = false;
            }
          }
        }, {
          key: "_setVirtualHeight",
          value: function _setVirtualHeight() {
            if (!this._virtualPadding) {
              return;
            }

            this._virtualPadding.style.height = "0px";
          }
        }, {
          key: "_onItemsLengthChanged",
          value: function _onItemsLengthChanged() {
            this._updateScrollHeight = true;
          }
        }, {
          key: "_renderItemsRange",
          value: function _renderItemsRange() {
            var _this12 = this;

            var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (scrollTop && this._lastScrollPosition === scrollTop) {
              return;
            }

            scrollTop = scrollTop || this._scrollablePanel.scrollTop;

            var range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);

            this._updateVirtualHeight(range.scrollHeight);

            this._contentPanel.style.transform = "translateY(".concat(range.topPadding, "px)");

            this._zone.run(function () {
              _this12.update.emit(_this12.items.slice(range.start, range.end));

              _this12.scroll.emit({
                start: range.start,
                end: range.end
              });
            });

            if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
              this._scrollablePanel.scrollTop = scrollTop;
              this._lastScrollPosition = scrollTop;
            }
          }
        }, {
          key: "_measureDimensions",
          value: function _measureDimensions() {
            var _this13 = this;

            if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
              return Promise.resolve(this._panelService.dimensions);
            }

            var _this$items = _slicedToArray(this.items, 1),
                first = _this$items[0];

            this.update.emit([first]);
            return Promise.resolve().then(function () {
              var option = _this13._dropdown.querySelector("#".concat(first.htmlId));

              var optionHeight = option.clientHeight;
              _this13._virtualPadding.style.height = "".concat(optionHeight * _this13.itemsLength, "px");
              var panelHeight = _this13._scrollablePanel.clientHeight;

              _this13._panelService.setDimensions(optionHeight, panelHeight);

              return _this13._panelService.dimensions;
            });
          }
        }, {
          key: "_fireScrollToEnd",
          value: function _fireScrollToEnd(scrollTop) {
            var _this14 = this;

            if (this._scrollToEndFired || scrollTop === 0) {
              return;
            }

            var padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;

            if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight - 1) {
              this._zone.run(function () {
                return _this14.scrollToEnd.emit();
              });

              this._scrollToEndFired = true;
            }
          }
        }, {
          key: "_calculateCurrentPosition",
          value: function _calculateCurrentPosition(dropdownEl) {
            if (this.position !== 'auto') {
              return this.position;
            }

            var selectRect = this._select.getBoundingClientRect();

            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var offsetTop = selectRect.top + window.pageYOffset;
            var height = selectRect.height;
            var dropdownHeight = dropdownEl.getBoundingClientRect().height;

            if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
              return 'top';
            } else {
              return 'bottom';
            }
          }
        }, {
          key: "_appendDropdown",
          value: function _appendDropdown() {
            if (!this.appendTo) {
              return;
            }

            this._parent = document.querySelector(this.appendTo);

            if (!this._parent) {
              throw new Error("appendTo selector ".concat(this.appendTo, " did not found any parent element"));
            }

            this._updateXPosition();

            this._parent.appendChild(this._dropdown);
          }
        }, {
          key: "_updateXPosition",
          value: function _updateXPosition() {
            var select = this._select.getBoundingClientRect();

            var parent = this._parent.getBoundingClientRect();

            var offsetLeft = select.left - parent.left;
            this._dropdown.style.left = offsetLeft + 'px';
            this._dropdown.style.width = select.width + 'px';
            this._dropdown.style.minWidth = select.width + 'px';
          }
        }, {
          key: "_updateYPosition",
          value: function _updateYPosition() {
            var select = this._select.getBoundingClientRect();

            var parent = this._parent.getBoundingClientRect();

            var delta = select.height;

            if (this._currentPosition === 'top') {
              var offsetBottom = parent.bottom - select.bottom;
              this._dropdown.style.bottom = offsetBottom + delta + 'px';
              this._dropdown.style.top = 'auto';
            } else if (this._currentPosition === 'bottom') {
              var offsetTop = select.top - parent.top;
              this._dropdown.style.top = offsetTop + delta + 'px';
              this._dropdown.style.bottom = 'auto';
            }
          }
        }, {
          key: "_setupMousedownListener",
          value: function _setupMousedownListener() {
            var _this15 = this;

            this._zone.runOutsideAngular(function () {
              (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(_this15._dropdown, 'mousedown').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(_this15._destroy$)).subscribe(function (event) {
                var target = event.target;

                if (target.tagName === 'INPUT') {
                  return;
                }

                event.preventDefault();
              });
            });
          }
        }]);

        return NgDropdownPanelComponent;
      }();

      NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) {
        return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT, 8));
      };

      NgDropdownPanelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgDropdownPanelComponent,
        selectors: [["ng-dropdown-panel"]],
        viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
          }
        },
        inputs: {
          items: "items",
          position: "position",
          virtualScroll: "virtualScroll",
          filterValue: "filterValue",
          markedItem: "markedItem",
          appendTo: "appendTo",
          bufferAmount: "bufferAmount",
          headerTemplate: "headerTemplate",
          footerTemplate: "footerTemplate"
        },
        outputs: {
          update: "update",
          scroll: "scroll",
          scrollToEnd: "scrollToEnd",
          outsideClick: "outsideClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c4,
        decls: 9,
        vars: 6,
        consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]],
        template: function NgDropdownPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerTemplate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
        encapsulation: 2,
        changeDetection: 0
      });

      NgDropdownPanelComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: NgDropdownPanelService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
          }]
        }];
      };

      NgDropdownPanelComponent.propDecorators = {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        markedItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        bufferAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        virtualScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        footerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        filterValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        scrollToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        outsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        contentElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['content', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
            "static": true
          }]
        }],
        scrollElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['scroll', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
            "static": true
          }]
        }],
        paddingElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['padding', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            selector: 'ng-dropdown-panel',
            template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: NgDropdownPanelService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
            }]
          }];
        }, {
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          filterValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          markedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          contentElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['content', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
              "static": true
            }]
          }],
          scrollElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['scroll', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
              "static": true
            }]
          }],
          paddingElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['padding', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
              "static": true
            }]
          }]
        });
      })();

      var NgOptionComponent = /*#__PURE__*/function () {
        function NgOptionComponent(elementRef) {
          _classCallCheck(this, NgOptionComponent);

          this.elementRef = elementRef;
          this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this._disabled = false;
        }

        _createClass(NgOptionComponent, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = this._isDisabled(value);
          }
        }, {
          key: "label",
          get: function get() {
            return (this.elementRef.nativeElement.textContent || '').trim();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.disabled) {
              this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
              });
            }
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            if (this.label !== this._previousLabel) {
              this._previousLabel = this.label;
              this.stateChange$.next({
                value: this.value,
                disabled: this._disabled,
                label: this.elementRef.nativeElement.innerHTML
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChange$.complete();
          }
        }, {
          key: "_isDisabled",
          value: function _isDisabled(value) {
            return value != null && "".concat(value) !== 'false';
          }
        }]);

        return NgOptionComponent;
      }();

      NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) {
        return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      NgOptionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgOptionComponent,
        selectors: [["ng-option"]],
        inputs: {
          disabled: "disabled",
          value: "value"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c4,
        decls: 1,
        vars: 0,
        template: function NgOptionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });

      NgOptionComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      NgOptionComponent.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'ng-option',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            template: "<ng-content></ng-content>"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _NgSelectConfig = function _NgSelectConfig() {
        _classCallCheck(this, _NgSelectConfig);

        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
        this.appearance = 'underline';
      };

      _NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) {
        return new (t || _NgSelectConfig)();
      };

      _NgSelectConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function NgSelectConfig_Factory() {
          return new _NgSelectConfig();
        },
        token: _NgSelectConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgSelectConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var _SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ng-select-selection-model');

      var _NgSelectComponent = /*#__PURE__*/function () {
        function _NgSelectComponent(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
          var _this16 = this;

          _classCallCheck(this, _NgSelectComponent);

          this.classes = classes;
          this.autoFocus = autoFocus;
          this.config = config;
          this._cd = _cd;
          this._console = _console;
          this.markFirst = true;
          this.dropdownPosition = 'auto';
          this.loading = false;
          this.closeOnSelect = true;
          this.hideSelected = false;
          this.selectOnTab = false;
          this.bufferAmount = 4;
          this.selectableGroup = false;
          this.selectableGroupAsModel = true;
          this.searchFn = null;
          this.trackByFn = null;
          this.clearOnBackspace = true;
          this.labelForId = null;
          this.inputAttrs = {};
          this.readonly = false;
          this.searchWhileComposing = true;
          this.minTermLength = 0;
          this.editableSearchTerm = false;

          this.keyDownFn = function (_) {
            return true;
          };

          this.multiple = false;
          this.addTag = false;
          this.searchable = true;
          this.clearable = true;
          this.isOpen = false; // output events

          this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.viewPortItems = [];
          this.searchTerm = null;
          this.dropdownId = newId();
          this.escapeHTML = true;
          this.useDefaultClass = true;
          this._items = [];
          this._defaultLabel = 'label';
          this._pressedKeys = [];
          this._isComposing = false;
          this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();

          this._onChange = function (_) {};

          this._onTouched = function () {};

          this.clearItem = function (item) {
            var option = _this16.selectedItems.find(function (x) {
              return x.value === item;
            });

            _this16.unselect(option);
          };

          this.trackByOption = function (_, item) {
            if (_this16.trackByFn) {
              return _this16.trackByFn(item.value);
            }

            return item;
          };

          this._mergeGlobalConfig(config);

          this.itemsList = new ItemsList(this, newSelectionModel());
          this.element = _elementRef.nativeElement;
        }

        _createClass(_NgSelectComponent, [{
          key: "items",
          get: function get() {
            return this._items;
          },
          set: function set(value) {
            if (value === null) {
              value = [];
            }

            this._itemsAreUsed = true;
            this._items = value;
          }
        }, {
          key: "compareWith",
          get: function get() {
            return this._compareWith;
          },
          set: function set(fn) {
            if (fn !== undefined && fn !== null && !isFunction(fn)) {
              throw Error('`compareWith` must be a function.');
            }

            this._compareWith = fn;
          }
        }, {
          key: "clearSearchOnAdd",
          get: function get() {
            if (isDefined(this._clearSearchOnAdd)) {
              return this._clearSearchOnAdd;
            } else if (isDefined(this.config.clearSearchOnAdd)) {
              return this.config.clearSearchOnAdd;
            }

            return this.closeOnSelect;
          },
          set: function set(value) {
            this._clearSearchOnAdd = value;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this.readonly || this._disabled;
          }
        }, {
          key: "filtered",
          get: function get() {
            return !!this.searchTerm && this.searchable || this._isComposing;
          }
        }, {
          key: "_editableSearchTerm",
          get: function get() {
            return this.editableSearchTerm && !this.multiple;
          }
        }, {
          key: "selectedItems",
          get: function get() {
            return this.itemsList.selectedItems;
          }
        }, {
          key: "selectedValues",
          get: function get() {
            return this.selectedItems.map(function (x) {
              return x.value;
            });
          }
        }, {
          key: "hasValue",
          get: function get() {
            return this.selectedItems.length > 0;
          }
        }, {
          key: "currentPanelPosition",
          get: function get() {
            if (this.dropdownPanel) {
              return this.dropdownPanel.currentPosition;
            }

            return undefined;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._handleKeyPresses();

            this._setInputAttributes();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.multiple) {
              this.itemsList.clearSelected();
            }

            if (changes.items) {
              this._setItems(changes.items.currentValue || []);
            }

            if (changes.isOpen) {
              this._manualOpen = isDefined(changes.isOpen.currentValue);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (!this._itemsAreUsed) {
              this.escapeHTML = false;

              this._setItemsFromNgOptions();
            }

            if (isDefined(this.autoFocus)) {
              this.focus();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroy$.next();

            this._destroy$.complete();
          }
        }, {
          key: "handleKeyDown",
          value: function handleKeyDown($event) {
            var keyCode = KeyCode[$event.which];

            if (keyCode) {
              if (this.keyDownFn($event) === false) {
                return;
              }

              this.handleKeyCode($event);
            } else if ($event.key && $event.key.length === 1) {
              this._keyPress$.next($event.key.toLocaleLowerCase());
            }
          }
        }, {
          key: "handleKeyCode",
          value: function handleKeyCode($event) {
            switch ($event.which) {
              case KeyCode.ArrowDown:
                this._handleArrowDown($event);

                break;

              case KeyCode.ArrowUp:
                this._handleArrowUp($event);

                break;

              case KeyCode.Space:
                this._handleSpace($event);

                break;

              case KeyCode.Enter:
                this._handleEnter($event);

                break;

              case KeyCode.Tab:
                this._handleTab($event);

                break;

              case KeyCode.Esc:
                this.close();
                $event.preventDefault();
                break;

              case KeyCode.Backspace:
                this._handleBackspace();

                break;
            }
          }
        }, {
          key: "handleMousedown",
          value: function handleMousedown($event) {
            var target = $event.target;

            if (target.tagName !== 'INPUT') {
              $event.preventDefault();
            }

            if (target.classList.contains('ng-clear-wrapper')) {
              this.handleClearClick();
              return;
            }

            if (target.classList.contains('ng-arrow-wrapper')) {
              this.handleArrowClick();
              return;
            }

            if (target.classList.contains('ng-value-icon')) {
              return;
            }

            if (!this.focused) {
              this.focus();
            }

            if (this.searchable) {
              this.open();
            } else {
              this.toggle();
            }
          }
        }, {
          key: "handleArrowClick",
          value: function handleArrowClick() {
            if (this.isOpen) {
              this.close();
            } else {
              this.open();
            }
          }
        }, {
          key: "handleClearClick",
          value: function handleClearClick() {
            if (this.hasValue) {
              this.itemsList.clearSelected(true);

              this._updateNgModel();
            }

            this._clearSearch();

            this.focus();
            this.clearEvent.emit();

            this._onSelectionChanged();
          }
        }, {
          key: "clearModel",
          value: function clearModel() {
            if (!this.clearable) {
              return;
            }

            this.itemsList.clearSelected();

            this._updateNgModel();
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.itemsList.clearSelected();

            this._handleWriteValue(value);

            this._cd.markForCheck();
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(state) {
            this._disabled = state;

            this._cd.markForCheck();
          }
        }, {
          key: "toggle",
          value: function toggle() {
            if (!this.isOpen) {
              this.open();
            } else {
              this.close();
            }
          }
        }, {
          key: "open",
          value: function open() {
            if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
              return;
            }

            if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
              return;
            }

            this.isOpen = true;
            this.itemsList.markSelectedOrDefault(this.markFirst);
            this.openEvent.emit();

            if (!this.searchTerm) {
              this.focus();
            }

            this.detectChanges();
          }
        }, {
          key: "close",
          value: function close() {
            if (!this.isOpen || this._manualOpen) {
              return;
            }

            this.isOpen = false;
            this._isComposing = false;

            if (!this._editableSearchTerm) {
              this._clearSearch();
            } else {
              this.itemsList.resetFilteredItems();
            }

            this.itemsList.unmarkItem();

            this._onTouched();

            this.closeEvent.emit();

            this._cd.markForCheck();
          }
        }, {
          key: "toggleItem",
          value: function toggleItem(item) {
            if (!item || item.disabled || this.disabled) {
              return;
            }

            if (this.multiple && item.selected) {
              this.unselect(item);
            } else {
              this.select(item);
            }

            if (this._editableSearchTerm) {
              this._setSearchTermFromItems();
            }

            this._onSelectionChanged();
          }
        }, {
          key: "select",
          value: function select(item) {
            if (!item.selected) {
              this.itemsList.select(item);

              if (this.clearSearchOnAdd && !this._editableSearchTerm) {
                this._clearSearch();
              }

              this._updateNgModel();

              if (this.multiple) {
                this.addEvent.emit(item.value);
              }
            }

            if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
              this.close();
            }
          }
        }, {
          key: "focus",
          value: function focus() {
            this.searchInput.nativeElement.focus();
          }
        }, {
          key: "blur",
          value: function blur() {
            this.searchInput.nativeElement.blur();
          }
        }, {
          key: "unselect",
          value: function unselect(item) {
            if (!item) {
              return;
            }

            this.itemsList.unselect(item);
            this.focus();

            this._updateNgModel();

            this.removeEvent.emit(item);
          }
        }, {
          key: "selectTag",
          value: function selectTag() {
            var _this17 = this;

            var tag;

            if (isFunction(this.addTag)) {
              tag = this.addTag(this.searchTerm);
            } else {
              tag = this._primitive ? this.searchTerm : _defineProperty({}, this.bindLabel, this.searchTerm);
            }

            var handleTag = function handleTag(item) {
              return _this17._isTypeahead || !_this17.isOpen ? _this17.itemsList.mapItem(item, null) : _this17.itemsList.addItem(item);
            };

            if (isPromise(tag)) {
              tag.then(function (item) {
                return _this17.select(handleTag(item));
              })["catch"](function () {});
            } else if (tag) {
              this.select(handleTag(tag));
            }
          }
        }, {
          key: "showClear",
          value: function showClear() {
            return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
          }
        }, {
          key: "showAddTag",
          get: function get() {
            if (!this._validTerm) {
              return false;
            }

            var term = this.searchTerm.toLowerCase().trim();
            return this.addTag && !this.itemsList.filteredItems.some(function (x) {
              return x.label.toLowerCase() === term;
            }) && (!this.hideSelected && this.isOpen || !this.selectedItems.some(function (x) {
              return x.label.toLowerCase() === term;
            })) && !this.loading;
          }
        }, {
          key: "showNoItemsFound",
          value: function showNoItemsFound() {
            var empty = this.itemsList.filteredItems.length === 0;
            return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
          }
        }, {
          key: "showTypeToSearch",
          value: function showTypeToSearch() {
            var empty = this.itemsList.filteredItems.length === 0;
            return empty && this._isTypeahead && !this._validTerm && !this.loading;
          }
        }, {
          key: "onCompositionStart",
          value: function onCompositionStart() {
            this._isComposing = true;
          }
        }, {
          key: "onCompositionEnd",
          value: function onCompositionEnd(term) {
            this._isComposing = false;

            if (this.searchWhileComposing) {
              return;
            }

            this.filter(term);
          }
        }, {
          key: "filter",
          value: function filter(term) {
            if (this._isComposing && !this.searchWhileComposing) {
              return;
            }

            this.searchTerm = term;

            if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
              this.typeahead.next(term);
            }

            if (!this._isTypeahead) {
              this.itemsList.filter(this.searchTerm);

              if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
              }
            }

            this.searchEvent.emit({
              term: term,
              items: this.itemsList.filteredItems.map(function (x) {
                return x.value;
              })
            });
            this.open();
          }
        }, {
          key: "onInputFocus",
          value: function onInputFocus($event) {
            if (this.focused) {
              return;
            }

            if (this._editableSearchTerm) {
              this._setSearchTermFromItems();
            }

            this.element.classList.add('ng-select-focused');
            this.focusEvent.emit($event);
            this.focused = true;
          }
        }, {
          key: "onInputBlur",
          value: function onInputBlur($event) {
            this.element.classList.remove('ng-select-focused');
            this.blurEvent.emit($event);

            if (!this.isOpen && !this.disabled) {
              this._onTouched();
            }

            if (this._editableSearchTerm) {
              this._setSearchTermFromItems();
            }

            this.focused = false;
          }
        }, {
          key: "onItemHover",
          value: function onItemHover(item) {
            if (item.disabled) {
              return;
            }

            this.itemsList.markItem(item);
          }
        }, {
          key: "detectChanges",
          value: function detectChanges() {
            if (!this._cd.destroyed) {
              this._cd.detectChanges();
            }
          }
        }, {
          key: "_setSearchTermFromItems",
          value: function _setSearchTermFromItems() {
            var selected = this.selectedItems && this.selectedItems[0];
            this.searchTerm = selected && selected.label || null;
          }
        }, {
          key: "_setItems",
          value: function _setItems(items) {
            var firstItem = items[0];
            this.bindLabel = this.bindLabel || this._defaultLabel;
            this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
            this.itemsList.setItems(items);

            if (items.length > 0 && this.hasValue) {
              this.itemsList.mapSelectedItems();
            }

            if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
              this.itemsList.filter(this.searchTerm);
            }

            if (this._isTypeahead || this.isOpen) {
              this.itemsList.markSelectedOrDefault(this.markFirst);
            }
          }
        }, {
          key: "_setItemsFromNgOptions",
          value: function _setItemsFromNgOptions() {
            var _this18 = this;

            var mapNgOptions = function mapNgOptions(options) {
              _this18.items = options.map(function (option) {
                return {
                  $ngOptionValue: option.value,
                  $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                  disabled: option.disabled
                };
              });

              _this18.itemsList.setItems(_this18.items);

              if (_this18.hasValue) {
                _this18.itemsList.mapSelectedItems();
              }

              _this18.detectChanges();
            };

            var handleOptionChange = function handleOptionChange() {
              var changedOrDestroyed = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(_this18.ngOptions.changes, _this18._destroy$);
              (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.merge).apply(void 0, _toConsumableArray(_this18.ngOptions.map(function (option) {
                return option.stateChange$;
              }))).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(changedOrDestroyed)).subscribe(function (option) {
                var item = _this18.itemsList.findItem(option.value);

                item.disabled = option.disabled;
                item.label = option.label || item.label;

                _this18._cd.detectChanges();
              });
            };

            this.ngOptions.changes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.ngOptions), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(function (options) {
              _this18.bindLabel = _this18._defaultLabel;
              mapNgOptions(options);
              handleOptionChange();
            });
          }
        }, {
          key: "_isValidWriteValue",
          value: function _isValidWriteValue(value) {
            var _this19 = this;

            if (!isDefined(value) || this.multiple && value === '' || Array.isArray(value) && value.length === 0) {
              return false;
            }

            var validateBinding = function validateBinding(item) {
              if (!isDefined(_this19.compareWith) && isObject(item) && _this19.bindValue) {
                _this19._console.warn("Setting object(".concat(JSON.stringify(item), ") as your model with bindValue is not allowed unless [compareWith] is used."));

                return false;
              }

              return true;
            };

            if (this.multiple) {
              if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');

                return false;
              }

              return value.every(function (item) {
                return validateBinding(item);
              });
            } else {
              return validateBinding(value);
            }
          }
        }, {
          key: "_handleWriteValue",
          value: function _handleWriteValue(ngModel) {
            var _this20 = this;

            if (!this._isValidWriteValue(ngModel)) {
              return;
            }

            var select = function select(val) {
              var item = _this20.itemsList.findItem(val);

              if (item) {
                _this20.itemsList.select(item);
              } else {
                var isValObject = isObject(val);
                var isPrimitive = !isValObject && !_this20.bindValue;

                if (isValObject || isPrimitive) {
                  _this20.itemsList.select(_this20.itemsList.mapItem(val, null));
                } else if (_this20.bindValue) {
                  var _item2;

                  item = (_item2 = {}, _defineProperty(_item2, _this20.bindLabel, null), _defineProperty(_item2, _this20.bindValue, val), _item2);

                  _this20.itemsList.select(_this20.itemsList.mapItem(item, null));
                }
              }
            };

            if (this.multiple) {
              ngModel.forEach(function (item) {
                return select(item);
              });
            } else {
              select(ngModel);
            }
          }
        }, {
          key: "_handleKeyPresses",
          value: function _handleKeyPresses() {
            var _this21 = this;

            if (this.searchable) {
              return;
            }

            this._keyPress$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (letter) {
              return _this21._pressedKeys.push(letter);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(200), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(function () {
              return _this21._pressedKeys.length > 0;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(function () {
              return _this21._pressedKeys.join('');
            })).subscribe(function (term) {
              var item = _this21.itemsList.findByLabel(term);

              if (item) {
                if (_this21.isOpen) {
                  _this21.itemsList.markItem(item);

                  _this21._scrollToMarked();

                  _this21._cd.markForCheck();
                } else {
                  _this21.select(item);
                }
              }

              _this21._pressedKeys = [];
            });
          }
        }, {
          key: "_setInputAttributes",
          value: function _setInputAttributes() {
            var input = this.searchInput.nativeElement;
            var attributes = Object.assign({
              type: 'text',
              autocorrect: 'off',
              autocapitalize: 'off',
              autocomplete: this.labelForId ? 'off' : this.dropdownId
            }, this.inputAttrs);

            for (var _i3 = 0, _Object$keys = Object.keys(attributes); _i3 < _Object$keys.length; _i3++) {
              var key = _Object$keys[_i3];
              input.setAttribute(key, attributes[key]);
            }
          }
        }, {
          key: "_updateNgModel",
          value: function _updateNgModel() {
            var model = [];

            var _iterator6 = _createForOfIteratorHelper(this.selectedItems),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var item = _step6.value;

                if (this.bindValue) {
                  var value = null;

                  if (item.children) {
                    var groupKey = this.groupValue ? this.bindValue : this.groupBy;
                    value = item.value[groupKey || this.groupBy];
                  } else {
                    value = this.itemsList.resolveNested(item.value, this.bindValue);
                  }

                  model.push(value);
                } else {
                  model.push(item.value);
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            var selected = this.selectedItems.map(function (x) {
              return x.value;
            });

            if (this.multiple) {
              this._onChange(model);

              this.changeEvent.emit(selected);
            } else {
              this._onChange(isDefined(model[0]) ? model[0] : null);

              this.changeEvent.emit(selected[0]);
            }

            this._cd.markForCheck();
          }
        }, {
          key: "_clearSearch",
          value: function _clearSearch() {
            if (!this.searchTerm) {
              return;
            }

            this._changeSearch(null);

            this.itemsList.resetFilteredItems();
          }
        }, {
          key: "_changeSearch",
          value: function _changeSearch(searchTerm) {
            this.searchTerm = searchTerm;

            if (this._isTypeahead) {
              this.typeahead.next(searchTerm);
            }
          }
        }, {
          key: "_scrollToMarked",
          value: function _scrollToMarked() {
            if (!this.isOpen || !this.dropdownPanel) {
              return;
            }

            this.dropdownPanel.scrollTo(this.itemsList.markedItem);
          }
        }, {
          key: "_scrollToTag",
          value: function _scrollToTag() {
            if (!this.isOpen || !this.dropdownPanel) {
              return;
            }

            this.dropdownPanel.scrollToTag();
          }
        }, {
          key: "_onSelectionChanged",
          value: function _onSelectionChanged() {
            if (this.isOpen && this.multiple && this.appendTo) {
              // Make sure items are rendered.
              this._cd.detectChanges();

              this.dropdownPanel.adjustPosition();
            }
          }
        }, {
          key: "_handleTab",
          value: function _handleTab($event) {
            if (this.isOpen === false && !this.addTag) {
              return;
            }

            if (this.selectOnTab) {
              if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
              } else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
              } else {
                this.close();
              }
            } else {
              this.close();
            }
          }
        }, {
          key: "_handleEnter",
          value: function _handleEnter($event) {
            if (this.isOpen || this._manualOpen) {
              if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
              } else if (this.showAddTag) {
                this.selectTag();
              }
            } else if (this.openOnEnter) {
              this.open();
            } else {
              return;
            }

            $event.preventDefault();
          }
        }, {
          key: "_handleSpace",
          value: function _handleSpace($event) {
            if (this.isOpen || this._manualOpen) {
              return;
            }

            this.open();
            $event.preventDefault();
          }
        }, {
          key: "_handleArrowDown",
          value: function _handleArrowDown($event) {
            if (this._nextItemIsTag(+1)) {
              this.itemsList.unmarkItem();

              this._scrollToTag();
            } else {
              this.itemsList.markNextItem();

              this._scrollToMarked();
            }

            this.open();
            $event.preventDefault();
          }
        }, {
          key: "_handleArrowUp",
          value: function _handleArrowUp($event) {
            if (!this.isOpen) {
              return;
            }

            if (this._nextItemIsTag(-1)) {
              this.itemsList.unmarkItem();

              this._scrollToTag();
            } else {
              this.itemsList.markPreviousItem();

              this._scrollToMarked();
            }

            $event.preventDefault();
          }
        }, {
          key: "_nextItemIsTag",
          value: function _nextItemIsTag(nextStep) {
            var nextIndex = this.itemsList.markedIndex + nextStep;
            return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
          }
        }, {
          key: "_handleBackspace",
          value: function _handleBackspace() {
            if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
              return;
            }

            if (this.multiple) {
              this.unselect(this.itemsList.lastSelectedItem);
            } else {
              this.clearModel();
            }
          }
        }, {
          key: "_isTypeahead",
          get: function get() {
            return this.typeahead && this.typeahead.observers.length > 0;
          }
        }, {
          key: "_validTerm",
          get: function get() {
            var term = this.searchTerm && this.searchTerm.trim();
            return term && term.length >= this.minTermLength;
          }
        }, {
          key: "_mergeGlobalConfig",
          value: function _mergeGlobalConfig(config) {
            this.placeholder = this.placeholder || config.placeholder;
            this.notFoundText = this.notFoundText || config.notFoundText;
            this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
            this.addTagText = this.addTagText || config.addTagText;
            this.loadingText = this.loadingText || config.loadingText;
            this.clearAllText = this.clearAllText || config.clearAllText;
            this.virtualScroll = isDefined(this.virtualScroll) ? this.virtualScroll : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
            this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
            this.appendTo = this.appendTo || config.appendTo;
            this.bindValue = this.bindValue || config.bindValue;
            this.bindLabel = this.bindLabel || config.bindLabel;
            this.appearance = this.appearance || config.appearance;
          }
        }]);

        return _NgSelectComponent;
      }();

      _NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) {
        return new (t || _NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConsoleService));
      };

      _NgSelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NgSelectComponent,
        selectors: [["ng-select"]],
        contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
          }
        },
        viewQuery: function NgSelectComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgDropdownPanelComponent, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
          }
        },
        hostVars: 20,
        hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
              return ctx.handleKeyDown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select", ctx.useDefaultClass)("ng-select-single", !ctx.multiple)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-typeahead", ctx.typeahead);
          }
        },
        inputs: {
          markFirst: "markFirst",
          dropdownPosition: "dropdownPosition",
          loading: "loading",
          closeOnSelect: "closeOnSelect",
          hideSelected: "hideSelected",
          selectOnTab: "selectOnTab",
          bufferAmount: "bufferAmount",
          selectableGroup: "selectableGroup",
          selectableGroupAsModel: "selectableGroupAsModel",
          searchFn: "searchFn",
          trackByFn: "trackByFn",
          clearOnBackspace: "clearOnBackspace",
          labelForId: "labelForId",
          inputAttrs: "inputAttrs",
          readonly: "readonly",
          searchWhileComposing: "searchWhileComposing",
          minTermLength: "minTermLength",
          editableSearchTerm: "editableSearchTerm",
          keyDownFn: "keyDownFn",
          multiple: "multiple",
          addTag: "addTag",
          searchable: "searchable",
          clearable: "clearable",
          isOpen: "isOpen",
          items: "items",
          compareWith: "compareWith",
          clearSearchOnAdd: "clearSearchOnAdd",
          bindLabel: "bindLabel",
          placeholder: "placeholder",
          notFoundText: "notFoundText",
          typeToSearchText: "typeToSearchText",
          addTagText: "addTagText",
          loadingText: "loadingText",
          clearAllText: "clearAllText",
          virtualScroll: "virtualScroll",
          openOnEnter: "openOnEnter",
          appendTo: "appendTo",
          bindValue: "bindValue",
          appearance: "appearance",
          maxSelectedItems: "maxSelectedItems",
          groupBy: "groupBy",
          groupValue: "groupValue",
          tabIndex: "tabIndex",
          typeahead: "typeahead"
        },
        outputs: {
          blurEvent: "blur",
          focusEvent: "focus",
          changeEvent: "change",
          openEvent: "open",
          closeEvent: "close",
          searchEvent: "search",
          clearEvent: "clear",
          addEvent: "add",
          removeEvent: "remove",
          scroll: "scroll",
          scrollToEnd: "scrollToEnd"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
          useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
            return _NgSelectComponent;
          }),
          multi: true
        }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 14,
        vars: 19,
        consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], ["role", "combobox", "aria-haspopup", "listbox", 1, "ng-input"], ["aria-autocomplete", "list", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", "role", "listbox", "aria-label", "Options list", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], ["role", "listbox", "aria-label", "Options list", 1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]],
        template: function NgSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
              return ctx.handleMousedown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, undefined, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              return ctx.filter(_r2.value);
            })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() {
              return ctx.onCompositionStart();
            })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              return ctx.onCompositionEnd(_r2.value);
            })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) {
              return ctx.onInputFocus($event);
            })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) {
              return ctx.onInputBlur($event);
            })("change", function NgSelectComponent_Template_input_change_7_listener($event) {
              return $event.stopPropagation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.multiLabelTemplate || !ctx.multiple) && ctx.selectedItems.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple && ctx.multiLabelTemplate && ctx.selectedValues.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen ? ctx.dropdownId : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClear());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass],
        styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);-webkit-animation:load8 .8s infinite linear;animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:bold;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      _NgSelectComponent.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
            args: ['class']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
            args: ['autofocus']
          }]
        }, {
          type: _NgSelectConfig
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_SELECTION_MODEL_FACTORY]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: ConsoleService
        }];
      };

      _NgSelectComponent.propDecorators = {
        bindLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        bindValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        markFirst: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        notFoundText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        typeToSearchText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        addTagText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        loadingText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        clearAllText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        dropdownPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        closeOnSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        hideSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectOnTab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        openOnEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        maxSelectedItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        groupBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        groupValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        bufferAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        virtualScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectableGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selectableGroupAsModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        searchFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        trackByFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        clearOnBackspace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        labelForId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        inputAttrs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        searchWhileComposing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        minTermLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        editableSearchTerm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        keyDownFn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        typeahead: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-typeahead']
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-multiple']
        }],
        addTag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-taggable']
        }],
        searchable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-searchable']
        }],
        clearable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-clearable']
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-opened']
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        clearSearchOnAdd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        blurEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['blur']
        }],
        focusEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['focus']
        }],
        changeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['change']
        }],
        openEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['open']
        }],
        closeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['close']
        }],
        searchEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['search']
        }],
        clearEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['clear']
        }],
        addEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['add']
        }],
        removeEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['remove']
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['scroll']
        }],
        scrollToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['scrollToEnd']
        }],
        optionTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgOptionTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        optgroupTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgOptgroupTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        labelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgLabelTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        multiLabelTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgMultiLabelTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        headerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgHeaderTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        footerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgFooterTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        notFoundTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgNotFoundTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        typeToSearchTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgTypeToSearchTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        loadingTextTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgLoadingTextTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        tagTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgTagTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        loadingSpinnerTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [NgLoadingSpinnerTemplateDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }]
        }],
        dropdownPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
            return NgDropdownPanelComponent;
          })]
        }],
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['searchInput', {
            "static": true
          }]
        }],
        ngOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [NgOptionComponent, {
            descendants: true
          }]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-disabled']
        }],
        filtered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
          args: ['class.ng-select-filtered']
        }],
        handleKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['keydown', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgSelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'ng-select',
            template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"(!multiLabelTemplate  || !multiple ) && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\xD7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiple && multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\"\n            role=\"combobox\" \n            [attr.aria-expanded]=\"isOpen\" \n            [attr.aria-owns]=\"isOpen ? dropdownId : null\" \n            aria-haspopup=\"listbox\">\n\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\"\n                   aria-autocomplete=\"list\"\n                   [attr.aria-controls]=\"isOpen ? dropdownId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\xD7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\"\n                   role=\"listbox\"\n                   aria-label=\"Options list\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
              useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
                return _NgSelectComponent;
              }),
              multi: true
            }, NgDropdownPanelService],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            host: {
              '[class.ng-select]': 'useDefaultClass',
              '[class.ng-select-single]': '!multiple'
            },
            styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);-webkit-animation:load8 .8s infinite linear;animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:bold;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"]
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
              args: ['class']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
              args: ['autofocus']
            }]
          }, {
            type: _NgSelectConfig
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_SELECTION_MODEL_FACTORY]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: ConsoleService
          }];
        }, {
          markFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dropdownPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          closeOnSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          hideSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectOnTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectableGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selectableGroupAsModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          searchFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          trackByFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          clearOnBackspace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          labelForId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          inputAttrs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          searchWhileComposing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          minTermLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          editableSearchTerm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          keyDownFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-multiple']
          }],
          addTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-taggable']
          }],
          searchable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-searchable']
          }],
          clearable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-clearable']
          }],
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-opened']
          }],
          blurEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['blur']
          }],
          focusEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['focus']
          }],
          changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['change']
          }],
          openEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['open']
          }],
          closeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['close']
          }],
          searchEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['search']
          }],
          clearEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['clear']
          }],
          addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['add']
          }],
          removeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['remove']
          }],
          scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['scroll']
          }],
          scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['scrollToEnd']
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          clearSearchOnAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-disabled']
          }],
          filtered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-filtered']
          }],
          handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['keydown', ['$event']]
          }],
          bindLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          notFoundText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          typeToSearchText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          addTagText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          loadingText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          clearAllText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          openOnEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          bindValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          maxSelectedItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          groupBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          groupValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          typeahead: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-typeahead']
          }],
          optionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgOptionTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          optgroupTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgOptgroupTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          labelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgLabelTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          multiLabelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgMultiLabelTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgHeaderTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgFooterTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          notFoundTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgNotFoundTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          typeToSearchTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgTypeToSearchTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          loadingTextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgLoadingTextTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          tagTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgTagTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          loadingSpinnerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgLoadingSpinnerTemplateDirective, {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
            }]
          }],
          dropdownPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
              return NgDropdownPanelComponent;
            })]
          }],
          searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['searchInput', {
              "static": true
            }]
          }],
          ngOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [NgOptionComponent, {
              descendants: true
            }]
          }]
        });
      })();

      function DefaultSelectionModelFactory() {
        return new DefaultSelectionModel();
      }

      var DefaultSelectionModel = /*#__PURE__*/function () {
        function DefaultSelectionModel() {
          _classCallCheck(this, DefaultSelectionModel);

          this._selected = [];
        }

        _createClass(DefaultSelectionModel, [{
          key: "value",
          get: function get() {
            return this._selected;
          }
        }, {
          key: "select",
          value: function select(item, multiple, groupAsModel) {
            item.selected = true;

            if (!item.children || !multiple && groupAsModel) {
              this._selected.push(item);
            }

            if (multiple) {
              if (item.parent) {
                var childrenCount = item.parent.children.length;
                var selectedCount = item.parent.children.filter(function (x) {
                  return x.selected;
                }).length;
                item.parent.selected = childrenCount === selectedCount;
              } else if (item.children) {
                this._setChildrenSelectedState(item.children, true);

                this._removeChildren(item);

                if (groupAsModel && this._activeChildren(item)) {
                  this._selected = [].concat(_toConsumableArray(this._selected.filter(function (x) {
                    return x.parent !== item;
                  })), [item]);
                } else {
                  this._selected = [].concat(_toConsumableArray(this._selected), _toConsumableArray(item.children.filter(function (x) {
                    return !x.disabled;
                  })));
                }
              }
            }
          }
        }, {
          key: "unselect",
          value: function unselect(item, multiple) {
            this._selected = this._selected.filter(function (x) {
              return x !== item;
            });
            item.selected = false;

            if (multiple) {
              if (item.parent && item.parent.selected) {
                var _this$_selected;

                var children = item.parent.children;

                this._removeParent(item.parent);

                this._removeChildren(item.parent);

                (_this$_selected = this._selected).push.apply(_this$_selected, _toConsumableArray(children.filter(function (x) {
                  return x !== item && !x.disabled;
                })));

                item.parent.selected = false;
              } else if (item.children) {
                this._setChildrenSelectedState(item.children, false);

                this._removeChildren(item);
              }
            }
          }
        }, {
          key: "clear",
          value: function clear(keepDisabled) {
            this._selected = keepDisabled ? this._selected.filter(function (x) {
              return x.disabled;
            }) : [];
          }
        }, {
          key: "_setChildrenSelectedState",
          value: function _setChildrenSelectedState(children, selected) {
            var _iterator7 = _createForOfIteratorHelper(children),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var child = _step7.value;

                if (child.disabled) {
                  continue;
                }

                child.selected = selected;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }, {
          key: "_removeChildren",
          value: function _removeChildren(parent) {
            this._selected = [].concat(_toConsumableArray(this._selected.filter(function (x) {
              return x.parent !== parent;
            })), _toConsumableArray(parent.children.filter(function (x) {
              return x.parent === parent && x.disabled && x.selected;
            })));
          }
        }, {
          key: "_removeParent",
          value: function _removeParent(parent) {
            this._selected = this._selected.filter(function (x) {
              return x !== parent;
            });
          }
        }, {
          key: "_activeChildren",
          value: function _activeChildren(item) {
            return item.children.every(function (x) {
              return !x.disabled || x.selected;
            });
          }
        }]);

        return DefaultSelectionModel;
      }();

      var ɵ0 = DefaultSelectionModelFactory;

      var _NgSelectModule = function _NgSelectModule() {
        _classCallCheck(this, _NgSelectModule);
      };

      _NgSelectModule.ɵfac = function NgSelectModule_Factory(t) {
        return new (t || _NgSelectModule)();
      };

      _NgSelectModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _NgSelectModule
      });
      _NgSelectModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: _SELECTION_MODEL_FACTORY,
          useValue: ɵ0
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgSelectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [NgDropdownPanelComponent, NgOptionComponent, _NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule],
            exports: [_NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective],
            providers: [{
              provide: _SELECTION_MODEL_FACTORY,
              useValue: ɵ0
            }]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_NgSelectModule, {
          declarations: function declarations() {
            return [NgDropdownPanelComponent, NgOptionComponent, _NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule];
          },
          exports: function exports() {
            return [_NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective];
          }
        });
      })();
      /*
       * Public API Surface of ng-select
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-select-ng-select.js.map

      /***/

    },

    /***/
    2217:
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Scheduler": function Scheduler() {
          return (
            /* binding */
            _Scheduler
          );
        }
        /* harmony export */

      });

      var _Scheduler = /*#__PURE__*/function () {
        function _Scheduler(SchedulerAction) {
          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler.now;

          _classCallCheck(this, _Scheduler);

          this.SchedulerAction = SchedulerAction;
          this.now = now;
        }

        _createClass(_Scheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;
            return new this.SchedulerAction(this, work).schedule(state, delay);
          }
        }]);

        return _Scheduler;
      }();

      _Scheduler.now = function () {
        return Date.now();
      }; //# sourceMappingURL=Scheduler.js.map

      /***/

    },

    /***/
    46797:
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "timer": function timer() {
          return (
            /* binding */
            _timer
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Observable */
      69165);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../scheduler/async */
      33637);
      /* harmony import */


      var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/isNumeric */
      26561);
      /* harmony import */


      var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isScheduler */
      54869);

      function _timer() {
        var dueTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var periodOrScheduler = arguments.length > 1 ? arguments[1] : undefined;
        var scheduler = arguments.length > 2 ? arguments[2] : undefined;
        var period = -1;

        if ((0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
          period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
        } else if ((0, _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
          scheduler = periodOrScheduler;
        }

        if (!(0, _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(function (subscriber) {
          var due = (0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime) ? dueTime : +dueTime - scheduler.now();
          return scheduler.schedule(dispatch, due, {
            index: 0,
            period: period,
            subscriber: subscriber
          });
        });
      }

      function dispatch(state) {
        var index = state.index,
            period = state.period,
            subscriber = state.subscriber;
        subscriber.next(index);

        if (subscriber.closed) {
          return;
        } else if (period === -1) {
          return subscriber.complete();
        }

        state.index = index + 1;
        this.schedule(state, period);
      } //# sourceMappingURL=timer.js.map

      /***/

    },

    /***/
    49732:
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/audit.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "audit": function audit() {
          return (
            /* binding */
            _audit
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../innerSubscribe */
      85345);

      function _audit(durationSelector) {
        return function auditOperatorFunction(source) {
          return source.lift(new AuditOperator(durationSelector));
        };
      }

      var AuditOperator = /*#__PURE__*/function () {
        function AuditOperator(durationSelector) {
          _classCallCheck(this, AuditOperator);

          this.durationSelector = durationSelector;
        }

        _createClass(AuditOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
          }
        }]);

        return AuditOperator;
      }();

      var AuditSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP) {
        _inherits(AuditSubscriber, _innerSubscribe__WEBP);

        var _super = _createSuper(AuditSubscriber);

        function AuditSubscriber(destination, durationSelector) {
          var _this22;

          _classCallCheck(this, AuditSubscriber);

          _this22 = _super.call(this, destination);
          _this22.durationSelector = durationSelector;
          _this22.hasValue = false;
          return _this22;
        }

        _createClass(AuditSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this.value = value;
            this.hasValue = true;

            if (!this.throttled) {
              var duration;

              try {
                var durationSelector = this.durationSelector;
                duration = durationSelector(value);
              } catch (err) {
                return this.destination.error(err);
              }

              var innerSubscription = (0, _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(duration, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(this));

              if (!innerSubscription || innerSubscription.closed) {
                this.clearThrottle();
              } else {
                this.add(this.throttled = innerSubscription);
              }
            }
          }
        }, {
          key: "clearThrottle",
          value: function clearThrottle() {
            var value = this.value,
                hasValue = this.hasValue,
                throttled = this.throttled;

            if (throttled) {
              this.remove(throttled);
              this.throttled = undefined;
              throttled.unsubscribe();
            }

            if (hasValue) {
              this.value = undefined;
              this.hasValue = false;
              this.destination.next(value);
            }
          }
        }, {
          key: "notifyNext",
          value: function notifyNext() {
            this.clearThrottle();
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete() {
            this.clearThrottle();
          }
        }]);

        return AuditSubscriber;
      }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber); //# sourceMappingURL=audit.js.map

      /***/

    },

    /***/
    45697:
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/auditTime.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "auditTime": function auditTime() {
          return (
            /* binding */
            _auditTime
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      33637);
      /* harmony import */


      var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./audit */
      49732);
      /* harmony import */


      var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../observable/timer */
      46797);

      function _auditTime(duration) {
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        return (0, _audit__WEBPACK_IMPORTED_MODULE_1__.audit)(function () {
          return (0, _observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler);
        });
      } //# sourceMappingURL=auditTime.js.map

      /***/

    },

    /***/
    54395:
    /*!***********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "debounceTime": function debounceTime() {
          return (
            /* binding */
            _debounceTime
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscriber */
      77393);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      33637);

      function _debounceTime(dueTime) {
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        return function (source) {
          return source.lift(new DebounceTimeOperator(dueTime, scheduler));
        };
      }

      var DebounceTimeOperator = /*#__PURE__*/function () {
        function DebounceTimeOperator(dueTime, scheduler) {
          _classCallCheck(this, DebounceTimeOperator);

          this.dueTime = dueTime;
          this.scheduler = scheduler;
        }

        _createClass(DebounceTimeOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
          }
        }]);

        return DebounceTimeOperator;
      }();

      var DebounceTimeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(DebounceTimeSubscriber, _Subscriber__WEBPACK_);

        var _super2 = _createSuper(DebounceTimeSubscriber);

        function DebounceTimeSubscriber(destination, dueTime, scheduler) {
          var _this23;

          _classCallCheck(this, DebounceTimeSubscriber);

          _this23 = _super2.call(this, destination);
          _this23.dueTime = dueTime;
          _this23.scheduler = scheduler;
          _this23.debouncedSubscription = null;
          _this23.lastValue = null;
          _this23.hasValue = false;
          return _this23;
        }

        _createClass(DebounceTimeSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this.clearDebounce();
            this.lastValue = value;
            this.hasValue = true;
            this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.debouncedNext();
            this.destination.complete();
          }
        }, {
          key: "debouncedNext",
          value: function debouncedNext() {
            this.clearDebounce();

            if (this.hasValue) {
              var lastValue = this.lastValue;
              this.lastValue = null;
              this.hasValue = false;
              this.destination.next(lastValue);
            }
          }
        }, {
          key: "clearDebounce",
          value: function clearDebounce() {
            var debouncedSubscription = this.debouncedSubscription;

            if (debouncedSubscription !== null) {
              this.remove(debouncedSubscription);
              debouncedSubscription.unsubscribe();
              this.debouncedSubscription = null;
            }
          }
        }]);

        return DebounceTimeSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber);

      function dispatchNext(subscriber) {
        subscriber.debouncedNext();
      } //# sourceMappingURL=debounceTime.js.map

      /***/

    },

    /***/
    46782:
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "takeUntil": function takeUntil() {
          return (
            /* binding */
            _takeUntil
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../innerSubscribe */
      85345);

      function _takeUntil(notifier) {
        return function (source) {
          return source.lift(new TakeUntilOperator(notifier));
        };
      }

      var TakeUntilOperator = /*#__PURE__*/function () {
        function TakeUntilOperator(notifier) {
          _classCallCheck(this, TakeUntilOperator);

          this.notifier = notifier;
        }

        _createClass(TakeUntilOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
            var notifierSubscription = (0, _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));

            if (notifierSubscription && !takeUntilSubscriber.seenValue) {
              takeUntilSubscriber.add(notifierSubscription);
              return source.subscribe(takeUntilSubscriber);
            }

            return takeUntilSubscriber;
          }
        }]);

        return TakeUntilOperator;
      }();

      var TakeUntilSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP2) {
        _inherits(TakeUntilSubscriber, _innerSubscribe__WEBP2);

        var _super3 = _createSuper(TakeUntilSubscriber);

        function TakeUntilSubscriber(destination) {
          var _this24;

          _classCallCheck(this, TakeUntilSubscriber);

          _this24 = _super3.call(this, destination);
          _this24.seenValue = false;
          return _this24;
        }

        _createClass(TakeUntilSubscriber, [{
          key: "notifyNext",
          value: function notifyNext() {
            this.seenValue = true;
            this.complete();
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete() {}
        }]);

        return TakeUntilSubscriber;
      }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber); //# sourceMappingURL=takeUntil.js.map

      /***/

    },

    /***/
    22901:
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Action": function Action() {
          return (
            /* binding */
            _Action
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscription */
      10826);

      var _Action = /*#__PURE__*/function (_Subscription__WEBPAC) {
        _inherits(_Action, _Subscription__WEBPAC);

        var _super4 = _createSuper(_Action);

        function _Action(scheduler, work) {
          _classCallCheck(this, _Action);

          return _super4.call(this);
        }

        _createClass(_Action, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this;
          }
        }]);

        return _Action;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription); //# sourceMappingURL=Action.js.map

      /***/

    },

    /***/
    27589:
    /*!*******************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AnimationFrameAction": function AnimationFrameAction() {
          return (
            /* binding */
            _AnimationFrameAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncAction */
      401);

      var _AnimationFrameAction = /*#__PURE__*/function (_AsyncAction__WEBPACK) {
        _inherits(_AnimationFrameAction, _AsyncAction__WEBPACK);

        var _super5 = _createSuper(_AnimationFrameAction);

        function _AnimationFrameAction(scheduler, work) {
          var _this25;

          _classCallCheck(this, _AnimationFrameAction);

          _this25 = _super5.call(this, scheduler, work);
          _this25.scheduler = scheduler;
          _this25.work = work;
          return _this25;
        }

        _createClass(_AnimationFrameAction, [{
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0) {
              return _get(_getPrototypeOf(_AnimationFrameAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
            }

            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () {
              return scheduler.flush(null);
            }));
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
              return _get(_getPrototypeOf(_AnimationFrameAction.prototype), "recycleAsyncId", this).call(this, scheduler, id, delay);
            }

            if (scheduler.actions.length === 0) {
              cancelAnimationFrame(id);
              scheduler.scheduled = undefined;
            }

            return undefined;
          }
        }]);

        return _AnimationFrameAction;
      }(_AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction); //# sourceMappingURL=AnimationFrameAction.js.map

      /***/

    },

    /***/
    28644:
    /*!**********************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AnimationFrameScheduler": function AnimationFrameScheduler() {
          return (
            /* binding */
            _AnimationFrameScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      4548);

      var _AnimationFrameScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP) {
        _inherits(_AnimationFrameScheduler, _AsyncScheduler__WEBP);

        var _super6 = _createSuper(_AnimationFrameScheduler);

        function _AnimationFrameScheduler() {
          _classCallCheck(this, _AnimationFrameScheduler);

          return _super6.apply(this, arguments);
        }

        _createClass(_AnimationFrameScheduler, [{
          key: "flush",
          value: function flush(action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();

            do {
              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            } while (++index < count && (action = actions.shift()));

            this.active = false;

            if (error) {
              while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return _AnimationFrameScheduler;
      }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler); //# sourceMappingURL=AnimationFrameScheduler.js.map

      /***/

    },

    /***/
    57339:
    /*!*********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsapAction": function AsapAction() {
          return (
            /* binding */
            _AsapAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _util_Immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/Immediate */
      66239);
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncAction */
      401);

      var _AsapAction = /*#__PURE__*/function (_AsyncAction__WEBPACK2) {
        _inherits(_AsapAction, _AsyncAction__WEBPACK2);

        var _super7 = _createSuper(_AsapAction);

        function _AsapAction(scheduler, work) {
          var _this26;

          _classCallCheck(this, _AsapAction);

          _this26 = _super7.call(this, scheduler, work);
          _this26.scheduler = scheduler;
          _this26.work = work;
          return _this26;
        }

        _createClass(_AsapAction, [{
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0) {
              return _get(_getPrototypeOf(_AsapAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
            }

            scheduler.actions.push(this);
            return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
              return _get(_getPrototypeOf(_AsapAction.prototype), "recycleAsyncId", this).call(this, scheduler, id, delay);
            }

            if (scheduler.actions.length === 0) {
              _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.clearImmediate(id);

              scheduler.scheduled = undefined;
            }

            return undefined;
          }
        }]);

        return _AsapAction;
      }(_AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction); //# sourceMappingURL=AsapAction.js.map

      /***/

    },

    /***/
    75899:
    /*!************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsapScheduler": function AsapScheduler() {
          return (
            /* binding */
            _AsapScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      4548);

      var _AsapScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP2) {
        _inherits(_AsapScheduler, _AsyncScheduler__WEBP2);

        var _super8 = _createSuper(_AsapScheduler);

        function _AsapScheduler() {
          _classCallCheck(this, _AsapScheduler);

          return _super8.apply(this, arguments);
        }

        _createClass(_AsapScheduler, [{
          key: "flush",
          value: function flush(action) {
            this.active = true;
            this.scheduled = undefined;
            var actions = this.actions;
            var error;
            var index = -1;
            var count = actions.length;
            action = action || actions.shift();

            do {
              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            } while (++index < count && (action = actions.shift()));

            this.active = false;

            if (error) {
              while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return _AsapScheduler;
      }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler); //# sourceMappingURL=AsapScheduler.js.map

      /***/

    },

    /***/
    401:
    /*!**********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncAction": function AsyncAction() {
          return (
            /* binding */
            _AsyncAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Action */
      22901);

      var _AsyncAction = /*#__PURE__*/function (_Action__WEBPACK_IMPO) {
        _inherits(_AsyncAction, _Action__WEBPACK_IMPO);

        var _super9 = _createSuper(_AsyncAction);

        function _AsyncAction(scheduler, work) {
          var _this27;

          _classCallCheck(this, _AsyncAction);

          _this27 = _super9.call(this, scheduler, work);
          _this27.scheduler = scheduler;
          _this27.work = work;
          _this27.pending = false;
          return _this27;
        }

        _createClass(_AsyncAction, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (this.closed) {
              return this;
            }

            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
            }

            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
          }
        }, {
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && this.delay === delay && this.pending === false) {
              return id;
            }

            clearInterval(id);
            return undefined;
          }
        }, {
          key: "execute",
          value: function execute(state, delay) {
            if (this.closed) {
              return new Error('executing a cancelled action');
            }

            this.pending = false;

            var error = this._execute(state, delay);

            if (error) {
              return error;
            } else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
          }
        }, {
          key: "_execute",
          value: function _execute(state, delay) {
            var errored = false;
            var errorValue = undefined;

            try {
              this.work(state);
            } catch (e) {
              errored = true;
              errorValue = !!e && e || new Error(e);
            }

            if (errored) {
              this.unsubscribe();
              return errorValue;
            }
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = null;
            this.state = null;
            this.pending = false;
            this.scheduler = null;

            if (index !== -1) {
              actions.splice(index, 1);
            }

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, null);
            }

            this.delay = null;
          }
        }]);

        return _AsyncAction;
      }(_Action__WEBPACK_IMPORTED_MODULE_0__.Action); //# sourceMappingURL=AsyncAction.js.map

      /***/

    },

    /***/
    4548:
    /*!*************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncScheduler": function AsyncScheduler() {
          return (
            /* binding */
            _AsyncScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Scheduler */
      2217);

      var _AsyncScheduler = /*#__PURE__*/function (_Scheduler__WEBPACK_I) {
        _inherits(_AsyncScheduler, _Scheduler__WEBPACK_I);

        var _super10 = _createSuper(_AsyncScheduler);

        function _AsyncScheduler(SchedulerAction) {
          var _this28;

          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now;

          _classCallCheck(this, _AsyncScheduler);

          _this28 = _super10.call(this, SchedulerAction, function () {
            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== _assertThisInitialized(_this28)) {
              return _AsyncScheduler.delegate.now();
            } else {
              return now();
            }
          });
          _this28.actions = [];
          _this28.active = false;
          _this28.scheduled = undefined;
          return _this28;
        }

        _createClass(_AsyncScheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;

            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== this) {
              return _AsyncScheduler.delegate.schedule(work, delay, state);
            } else {
              return _get(_getPrototypeOf(_AsyncScheduler.prototype), "schedule", this).call(this, work, delay, state);
            }
          }
        }, {
          key: "flush",
          value: function flush(action) {
            var actions = this.actions;

            if (this.active) {
              actions.push(action);
              return;
            }

            var error;
            this.active = true;

            do {
              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            } while (action = actions.shift());

            this.active = false;

            if (error) {
              while (action = actions.shift()) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return _AsyncScheduler;
      }(_Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler); //# sourceMappingURL=AsyncScheduler.js.map

      /***/

    },

    /***/
    54857:
    /*!*************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "animationFrameScheduler": function animationFrameScheduler() {
          return (
            /* binding */
            _animationFrameScheduler
          );
        },

        /* harmony export */
        "animationFrame": function animationFrame() {
          return (
            /* binding */
            _animationFrame
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AnimationFrameAction */
      27589);
      /* harmony import */


      var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AnimationFrameScheduler */
      28644);

      var _animationFrameScheduler = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__.AnimationFrameScheduler(_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__.AnimationFrameAction);

      var _animationFrame = _animationFrameScheduler; //# sourceMappingURL=animationFrame.js.map

      /***/
    },

    /***/
    58571:
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/asap.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "asapScheduler": function asapScheduler() {
          return (
            /* binding */
            _asapScheduler
          );
        },

        /* harmony export */
        "asap": function asap() {
          return (
            /* binding */
            _asap
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsapAction */
      57339);
      /* harmony import */


      var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsapScheduler */
      75899);

      var _asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);

      var _asap = _asapScheduler; //# sourceMappingURL=asap.js.map

      /***/
    },

    /***/
    33637:
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "asyncScheduler": function asyncScheduler() {
          return (
            /* binding */
            _asyncScheduler
          );
        },

        /* harmony export */
        "async": function async() {
          return (
            /* binding */
            _async
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsyncAction */
      401);
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      4548);

      var _asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);

      var _async = _asyncScheduler; //# sourceMappingURL=async.js.map

      /***/
    },

    /***/
    66239:
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/util/Immediate.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Immediate": function Immediate() {
          return (
            /* binding */
            _Immediate
          );
        },

        /* harmony export */
        "TestTools": function TestTools() {
          return (
            /* binding */
            _TestTools
          );
        }
        /* harmony export */

      });

      var nextHandle = 1;

      var RESOLVED = function () {
        return Promise.resolve();
      }();

      var activeHandles = {};

      function findAndClearHandle(handle) {
        if (handle in activeHandles) {
          delete activeHandles[handle];
          return true;
        }

        return false;
      }

      var _Immediate = {
        setImmediate: function setImmediate(cb) {
          var handle = nextHandle++;
          activeHandles[handle] = true;
          RESOLVED.then(function () {
            return findAndClearHandle(handle) && cb();
          });
          return handle;
        },
        clearImmediate: function clearImmediate(handle) {
          findAndClearHandle(handle);
        }
      };
      var _TestTools = {
        pending: function pending() {
          return Object.keys(activeHandles).length;
        }
      }; //# sourceMappingURL=Immediate.js.map

      /***/
    },

    /***/
    26561:
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "isNumeric": function isNumeric() {
          return (
            /* binding */
            _isNumeric
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isArray */
      59796);

      function _isNumeric(val) {
        return !(0, _isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && val - parseFloat(val) + 1 >= 0;
      } //# sourceMappingURL=isNumeric.js.map

      /***/

    },

    /***/
    28191:
    /*!****************************************!*\
      !*** ./src/app/shared/http.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpService": function HttpService() {
          return (
            /* binding */
            _HttpService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
        }

        _createClass(HttpService, [{
          key: "get",
          value: function get(serviceName) {
            var userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders() // .set("Access-Control-Allow-Origin", "*")
            // .set("Access-Control-Allow-Methods", "GET,POST")
            // .set('Accept','application/json')
            // .set('Content-Type','application/json')
            // .set("Access-Control-Allow-Headers", "Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            .set("Token", userdetails.token); //   let httpOptions = {
            //     headers: new HttpHeaders({
            //       "Access-Control-Allow-Origin": "*",
            //       "Access-Control-Allow-Methods": "*",
            //       "Access-Control-Allow-Headers":"Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            //       'Authorization':userdetails.token,
            //       "Content-Type": "application/json"
            //     })
            // };

            var options = {
              headers: header,
              withCredentials: true
            };
            return this.http.get(url, {
              headers: header
            });
          }
        }, {
          key: "login",
          value: function login(serviceName, data) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
            var options = {
              headers: headers,
              withCredentials: false
            };
            console.log(data);
            return this.http.post(url, JSON.stringify(data), options);
          }
        }, {
          key: "post",
          value: function post(serviceName, data) {
            var token = localStorage.getItem("token");
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;

            if (serviceName == '/user_login' || serviceName == '/user_register') {// const headers = new HttpHeaders()
              // const options = { headers: headers, withCredentials: false };
              // return this.http.post(url, JSON.stringify(data), { headers: headers });
            } else {
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Token", token);
              var options = {
                headers: headers,
                withCredentials: true
              };
              return this.http.post(url, JSON.stringify(data), {
                headers: headers
              });
            }
          }
        }, {
          key: "postFormData",
          value: function postFormData(serviceName, data) {
            var token = localStorage.getItem("token");
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var headers = {
              // 'enctype': 'multipart/form-data',
              // 'Content-Type': 'multipart/form-data',
              // 'Accept': 'plain/text',
              // 'Access-Control-Allow-Origin': '*',
              // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
              // 'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
              'Token': token
            }; // const headers = new HttpHeaders().set("Token", token );
            //  headers.set('Content-Type', 'multipart/form-data'); 

            var options = {
              headers: headers,
              withCredentials: true
            };
            return this.http.post(url, data, {
              headers: headers
            });
          }
        }]);

        return HttpService;
      }();

      _HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _HttpService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _HttpService);
      /***/
    },

    /***/
    42580:
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageRoutingModule": function Tab1PageRoutingModule() {
          return (
            /* binding */
            _Tab1PageRoutingModule
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      46923);

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
      }];

      var _Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      _Tab1PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab1PageRoutingModule);
      /***/
    },

    /***/
    2168:
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageModule": function Tab1PageModule() {
          return (
            /* binding */
            _Tab1PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      46923);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      86640);
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1-routing.module */
      42580);

      var _Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      _Tab1PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
      })], _Tab1PageModule);
      /***/
    },

    /***/
    46923:
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1Page": function Tab1Page() {
          return (
            /* binding */
            _Tab1Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab1.page.html */
      5683);
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab1.page.scss */
      99474);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);

      var _Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(platform, toastCtrl, http, router, menu, route, navCtrl) {
          var _this29 = this;

          _classCallCheck(this, Tab1Page);

          this.platform = platform;
          this.toastCtrl = toastCtrl;
          this.http = http;
          this.router = router;
          this.menu = menu;
          this.navCtrl = navCtrl;
          this.userdetails = atob(localStorage.getItem("24hrs-user-data"));
          this.parsedObj = JSON.parse(this.userdetails);
          this.listOfCat = [];
          this.listOfProduct = [];
          this.offerCount = 0;
          this.viewsCount = 0;
          this.offerObj = {
            card: "false",
            form: "true"
          };
          route.params.subscribe(function (val) {
            _this29.userdetails = JSON.parse(window.atob(localStorage.getItem("24hrs-user-data")));

            _this29.offersCount();

            _this29.viewCount();

            _this29.list();
          });
        }

        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "NavigatetoNotification",
          value: function NavigatetoNotification() {
            this.router.navigate(['/notification']);
          }
        }, {
          key: "showToast",
          value: function showToast(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        duration: 2000,
                        position: 'middle'
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "myproducts",
          value: function myproducts() {
            this.router.navigate(['/myproducts']);
          }
        }, {
          key: "list",
          value: function list() {
            var _this30 = this;

            this.http.get('/read_all_category').subscribe(function (response) {
              _this30.listOfCat = response.records;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "offers",
          value: function offers() {
            this.router.navigate(['/tabs/tab4']);
          }
        }, {
          key: "offersCount",
          value: function offersCount() {
            var _this31 = this;

            this.http.get('/read_all_offer').subscribe(function (response) {
              _this31.offerCount = response.records.length;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "viewCount",
          value: function viewCount() {
            var _this32 = this;

            this.http.get('/alarm_count').subscribe(function (response) {
              _this32.viewsCount = response.store_alarm_count + response.product_alarm_count;
              console.log(_this32.viewsCount);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "views",
          value: function views() {
            this.router.navigate(['/tabs/tab2']);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.backButtonSubscription = this.platform.backButton.subscribe(function () {
              navigator['app'].exitApp();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return Tab1Page;
      }();

      _Tab1Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
        }];
      };

      _Tab1Page = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab1Page);
      /***/
    },

    /***/
    99474:
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Quicksand&display=swap\");\n.dot {\n  margin: 15px;\n  margin-top: 0 !important;\n  height: 60%;\n  width: 75%;\n  background-color: #fffcfa;\n  border-radius: 50%;\n  display: inline-block;\n  box-shadow: 0px 5px 17px -7px black;\n}\n#map_canvas {\n  width: 100%;\n  height: 80vh;\n}\n.count {\n  padding: 25px;\n  text-align: center;\n  color: #23d5ab;\n  font-size: 25px;\n  font-family: \"Quicksand\", sans-serif !important;\n}\n.views {\n  margin-top: -10px !important;\n  text-align: center;\n  color: #5C5C5C;\n}\n.offer-btn {\n  margin: 15px;\n  margin-top: 0 !important;\n  background-color: #23d5ab;\n  border: 1px solid #fff;\n}\n.myproducts-btn {\n  margin: 15px;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%) !important;\n  border: 1px solid #fff;\n  border-radius: 5px;\n}\nion-list {\n  background-color: #ebf9f9 !important;\n}\nion-item {\n  background-color: #ebf9f9 !important;\n}\n.card {\n  background-color: #fff;\n  height: 35px;\n  text-align: center;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  width: 96% !important;\n  margin: 5px;\n}\n.myproduct-div {\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  width: 96% !important;\n  margin: 5px;\n  box-shadow: 0 0 3px #ccc;\n  border: 1px solid #fff;\n}\nion-chip {\n  box-shadow: 0px 5px 17px -7px black;\n}\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/* Always set the map height explicitly to define the size of the div\n     * element that contains the map. */\n#map {\n  height: 100%;\n}\n/* Optional: Makes the sample page fill the window. */\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n#description {\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n}\n#infowindow-content .title {\n  font-weight: bold;\n}\n#infowindow-content {\n  display: none;\n}\n#map #infowindow-content {\n  display: inline;\n}\n.pac-card {\n  background-color: #fff;\n  border: 0;\n  border-radius: 2px;\n  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);\n  margin: 10px;\n  padding: 0 0.5em;\n  font: 400 18px Roboto, Arial, sans-serif;\n  overflow: hidden;\n  font-family: Roboto;\n  padding: 0;\n}\n#pac-container {\n  padding-bottom: 12px;\n  margin-right: 12px;\n}\n.pac-controls {\n  display: inline-block;\n  padding: 5px 11px;\n}\n.pac-controls label {\n  font-family: Roboto;\n  font-size: 13px;\n  font-weight: 300;\n}\n#pac-input {\n  background-color: #fff;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  margin-left: 12px;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 400px;\n}\n#pac-input:focus {\n  border-color: #4d90fe;\n}\n#title {\n  color: #fff;\n  background-color: #4d90fe;\n  font-size: 25px;\n  font-weight: 500;\n  padding: 6px 12px;\n}\n#target {\n  width: 345px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhFQUFBO0FBRVI7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0FBREo7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREo7QUFHRTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7QUFBTjtBQUVFO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDTjtBQUNFO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtBQUNKO0FBQ0U7RUFDRSxZQUFBO0VBQ0EseUVBQUE7RUFHQSxzQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFRTtFQUNFLG9DQUFBO0FBQ0o7QUFDRTtFQUNFLG9DQUFBO0FBRUo7QUFBRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBR0o7QUFERTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBR0Esd0JBQUE7RUFDQSxzQkFBQTtBQUlKO0FBREU7RUFDRSxtQ0FBQTtBQUlKO0FBRkU7RUFDRSxvQ0FBQTtFQUtBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7QUFFUjtBQUdFO3VDQUFBO0FBRUY7RUFDRSxZQUFBO0FBQUY7QUFHQSxxREFBQTtBQUNBOztFQUVFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFGO0FBR0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7QUFBRjtBQUdBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFBRjtBQUdBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQUFGO0FBR0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQUY7QUFHQTtFQUNFLHFCQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1aWNrc2FuZCZkaXNwbGF5PXN3YXAnKTtcblxuLmRvdCB7XG4gICAgbWFyZ2luOjE1cHg7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNjAlO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmNmYVxuICAgIDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtN3B4IHJnYmEoMCwgMCwgMCwgNS41KTtcbiAgfVxuXG4gICNtYXBfY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gIH1cbiAgLmNvdW50e1xuICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjMjNkNWFiO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnZpZXdze1xuICAgICAgbWFyZ2luLXRvcDogIC0xMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzVDNUM1QztcbiAgfVxuICAub2ZmZXItYnRue1xuICAgIG1hcmdpbjoxNXB4O1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkNWFiXG4gICAgO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgfVxuICAubXlwcm9kdWN0cy1idG57XG4gICAgbWFyZ2luOjE1cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgICAwJSwgIzIzZDVhYlxuICAgIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICBpb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmOWY5ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWl0ZW17XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZjlmOSAhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OjM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNjY2M7XG4gICAgd2lkdGg6OTYlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOjVweDtcbiAgfVxuICAubXlwcm9kdWN0LWRpdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNjY2M7XG4gICAgd2lkdGg6OTYlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOjVweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI2NjYztcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4ICNjY2M7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgIFxuICB9XG4gIGlvbi1jaGlwe1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMTdweCAtN3B4IHJnYmEoMCwgMCwgMCwgNS41KTtcbiAgfVxuICBpb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjRGN0ZBICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZlxuICAgIC8vIDAlLCAjZDFmMmU3XG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcblxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuXG4gIC8qIEFsd2F5cyBzZXQgdGhlIG1hcCBoZWlnaHQgZXhwbGljaXRseSB0byBkZWZpbmUgdGhlIHNpemUgb2YgdGhlIGRpdlxuICAgICAgICogZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBtYXAuICovXG4jbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBPcHRpb25hbDogTWFrZXMgdGhlIHNhbXBsZSBwYWdlIGZpbGwgdGhlIHdpbmRvdy4gKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNkZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuI2luZm93aW5kb3ctY29udGVudCAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2luZm93aW5kb3ctY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtYXAgI2luZm93aW5kb3ctY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnBhYy1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAwIDAuNWVtO1xuICBmb250OiA0MDAgMThweCBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBwYWRkaW5nOiAwO1xufVxuXG4jcGFjLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5wYWMtY29udHJvbHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xufVxuXG4ucGFjLWNvbnRyb2xzIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4jcGFjLWlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgcGFkZGluZzogMCAxMXB4IDAgMTNweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuI3BhYy1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzRkOTBmZTtcbn1cblxuI3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDkwZmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG59XG5cbiN0YXJnZXQge1xuICB3aWR0aDogMzQ1cHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    5683:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n        <!-- <img  id=\"logo\"  src=\"assets/logo.jpeg\" alt=\"\"> -->\n        <h5 style=\"color:#fff;margin-top:30px\">24HRS</h5>\n      </div>\n      <div class=\"col-7\" style=\"text-align: right;width: 90%;margin-top: -40px;\" (click)=\"NavigatetoNotification()\">\n\n        <svg style=\"margin:5px;text-align:right\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\"\n            fill=\"white\" />\n        </svg>\n      </div>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"bg-class\" [fullscreen]=\"true\">\n  <div class=\"container\">\n    <div class=\"signin-div mt-3 \">\n      <h5 style=\"text-align: center; color:#676767\"><b>Welcome back to {{userdetails.storename}} store!</b></h5>\n      <div class=\"row\">\n        <div (click)=\"offers()\" style=\"cursor: pointer;\" class=\"col-6 \">\n          <span class=\"dot\">\n            <p class=\"count\"><b>{{offerCount}}</b></p>\n          </span>\n          <p class=\"views\">offers</p>\n        </div>\n        <div (click)=\"views()\" style=\"cursor: pointer;\" class=\"col-6\">\n          <span class=\"dot\">\n            <p class=\"count\"><b>{{viewsCount}}</b></p>\n          </span>\n          <p class=\"views\"> views</p>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"signin-div mt-1 \">\n      <h5 style=\"margin: 20px;color: #5C5C5C;\"> <b>My Products:</b></h5>\n\n\n   \n\n      <div class=\"container mt-4\">\n        <ion-chip *ngFor=\"let list of listOfCat\" style=\"color: #122112;background-color: #fffcfa; font-size: 12px;font-weight: 450;\">\n          <ion-label>{{list.category}} <span style=\"color:#122112\">({{list.status}})</span></ion-label>\n        </ion-chip>\n      </div>\n\n      <div class=\"col-12 mt-2\" style=\"text-align: center;\">\n        <button (click)=\"myproducts()\" class=\"btn btn-success btn-sm  myproducts-btn mt-1\">\n          <svg width=\"31\" height=\"20\" viewBox=\"0 0 31 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path\n              d=\"M29.7606 2.81348C29.5818 2.63049 29.3427 2.53248 29.0851 2.53831C28.8215 2.54381 28.5672 2.66225 28.4026 2.84696L24.6701 6.51102L22.726 1.63676C22.654 1.38425 22.4787 1.17397 22.2446 1.05981C22.0168 0.948576 21.7476 0.936732 21.5049 1.02702C21.0182 1.21259 20.7521 1.75297 20.899 2.25731L21.0043 2.61386L18.521 6.0975L15.9089 2.20392C15.789 1.98282 15.5814 1.82095 15.3391 1.76001C15.1032 1.70079 14.8478 1.74096 14.6364 1.87536C14.2216 2.14727 14.0914 2.70568 14.3398 3.14667L17.3772 8.53553C16.7616 8.81525 16.1352 9.42149 15.9446 10.704C15.9328 10.7386 15.922 10.7739 15.922 10.8123C15.922 10.8207 15.9264 10.8278 15.927 10.836C15.9266 10.8387 15.9264 10.8416 15.9261 10.8443C15.0874 10.2682 14.0894 9.95228 13.0456 9.95228C12.1077 9.95228 11.1947 10.2118 10.4076 10.6861V10.4576C10.4076 9.69359 10.1014 8.97691 9.54551 8.43944C8.98641 7.89906 8.24531 7.60158 7.4588 7.60158C5.92516 7.60158 4.66154 8.73839 4.51959 10.1863C4.15773 9.96063 3.71796 9.85591 3.27047 9.92207L2.64467 10.016C2.16432 10.0855 1.74109 10.3313 1.45338 10.7079C1.16567 11.0844 1.04718 11.5468 1.11955 12.0103L1.66624 15.5082H1.33276C1.13196 15.5082 0.969482 15.6656 0.969482 15.8598V20.1337V24.4075V28.6815C0.969482 28.8757 1.13196 29.0331 1.33276 29.0331H25.2005C25.4013 29.0331 25.5638 28.8757 25.5638 28.6815V24.4075V20.1337V15.8598C25.5638 15.6656 25.4013 15.5082 25.2005 15.5082H25.1925C25.2886 15.2425 25.3815 14.9809 25.4655 14.7313L25.4662 14.7292C25.7596 13.8736 25.9739 13.1665 26.0853 12.6842C26.1542 12.3878 26.2007 12.1032 26.2249 11.8379L26.2254 11.8366C26.3644 10.3934 25.8348 9.60561 25.2467 9.1775L29.7656 4.18006C30.12 3.78628 30.1189 3.18667 29.7606 2.81348ZM1.69604 20.4853H24.8372V24.056H1.69604V20.4853ZM24.8372 16.2113V19.7822H1.69604V16.2113H2.0884H5.35506H8.30313H8.53728H16.6787H20.259H24.679H24.8372ZM6.28383 12.3353C6.5726 12.2932 6.8589 12.3622 7.09339 12.5289C7.32789 12.6957 7.48079 12.941 7.52372 13.2198L7.8807 15.5082H5.66787L5.36073 13.5352C5.3257 13.3041 5.36956 13.0718 5.48694 12.8635C5.64907 12.5828 5.92871 12.3924 6.2558 12.3383C6.26538 12.3377 6.2746 12.3366 6.28383 12.3353ZM20.0027 14.638C20.0004 14.6611 19.9983 14.686 19.996 14.7093C19.9739 14.933 19.9528 15.1662 19.9324 15.4054C19.9294 15.4407 19.926 15.4725 19.923 15.5082H16.9934C16.9881 15.4726 16.9827 15.4372 16.9774 15.4014C16.9459 15.1866 16.9153 14.9693 16.8864 14.7502C16.8832 14.726 16.8797 14.7021 16.8765 14.6778C16.8442 14.4301 16.8141 14.1814 16.7858 13.9339C16.7831 13.9109 16.7807 13.8881 16.7781 13.8651H20.0873C20.0838 13.894 20.0807 13.9272 20.0773 13.9565C20.0516 14.1751 20.0265 14.4002 20.0027 14.638ZM20.5421 11.1893C20.5165 11.2794 20.4935 11.3726 20.4701 11.4704C20.4478 11.5661 20.4253 11.6732 20.4028 11.7865C20.4001 11.7995 20.3976 11.8117 20.3949 11.825C20.3732 11.9359 20.3513 12.0554 20.3294 12.1815C20.3261 12.2004 20.3228 12.2195 20.3195 12.2388C20.2977 12.3666 20.2757 12.5006 20.2539 12.6422C20.2512 12.6601 20.2484 12.6788 20.2457 12.6969C20.2231 12.8457 20.2005 12.9997 20.1781 13.162H16.7048C16.7004 13.1153 16.6955 13.0671 16.6913 13.0213C16.6852 12.9527 16.6793 12.8851 16.6738 12.8187C16.6653 12.717 16.6579 12.6192 16.6511 12.5232C16.6467 12.4608 16.642 12.3978 16.6383 12.338C16.632 12.2378 16.6274 12.144 16.6231 12.0519C16.621 12.0061 16.6182 11.9574 16.6166 11.9138C16.6118 11.7819 16.6088 11.658 16.6088 11.5475C16.6088 11.4169 16.6134 11.2885 16.6223 11.1638H20.5403C20.541 11.1723 20.5414 11.1807 20.5421 11.1893ZM25.3764 12.5306C25.2831 12.934 25.1121 13.5097 24.8783 14.2077L23.5919 13.9296L20.8863 13.3447C20.8868 13.3409 20.8874 13.3369 20.8879 13.333C20.9101 13.1698 20.9326 13.0131 20.9552 12.8625C20.958 12.8435 20.9609 12.8246 20.9637 12.8059C20.9857 12.6613 21.0078 12.5233 21.0298 12.3931C21.0329 12.3751 21.0359 12.3578 21.0389 12.3401C21.0612 12.2104 21.0834 12.0876 21.1053 11.975C21.1072 11.9648 21.1092 11.9555 21.1112 11.9453C21.134 11.8292 21.1566 11.7214 21.1785 11.6268C21.2034 11.5221 21.2282 11.4217 21.2605 11.3146C21.2733 11.2663 21.2867 11.2191 21.3009 11.1731L25.4641 12.0776C25.4417 12.2233 25.4123 12.3747 25.3764 12.5306ZM22.7847 8.64102C22.1943 8.76002 21.5388 9.11192 21.0403 9.96693C20.7598 9.17825 20.2709 8.75914 19.79 8.53999L21.7346 5.08621L22.7847 8.64102ZM15.039 2.46055C15.0855 2.43103 15.1284 2.43343 15.1564 2.44047C15.2015 2.4518 15.2402 2.48373 15.2824 2.55857L18.207 6.92077C18.273 7.01914 18.3855 7.07922 18.5065 7.08093C18.6239 7.0775 18.742 7.02583 18.8108 6.92901L21.2626 3.48965L21.3013 3.61934L21.45 4.12262L19.0787 8.33405C19.0662 8.33218 19.0522 8.33295 19.0395 8.33123C18.8928 8.31109 18.7419 8.29901 18.588 8.29879C18.585 8.29879 18.5822 8.29817 18.5792 8.29817C18.5588 8.29817 18.5395 8.30203 18.5192 8.30237C18.3933 8.30463 18.2677 8.31291 18.1427 8.32883C18.1255 8.33102 18.1074 8.33005 18.0903 8.3325L14.9776 2.80988C14.9088 2.68748 14.939 2.52613 15.039 2.46055ZM17.985 9.06823C18.2763 8.99884 18.5992 8.98322 18.8934 9.01858C18.9919 9.03047 19.0875 9.04806 19.178 9.07132C19.8311 9.2344 20.2444 9.69033 20.4342 10.4607H16.7284C16.9185 9.68758 17.3329 9.23028 17.985 9.06823ZM15.8833 11.7022C15.8834 11.7088 15.884 11.7172 15.8841 11.7238C15.8859 11.8246 15.8896 11.934 15.8948 12.0502C15.8959 12.0739 15.8969 12.0976 15.8981 12.1219C15.9038 12.2392 15.9111 12.3627 15.92 12.4928C15.9218 12.5205 15.9239 12.5488 15.926 12.5771C15.9356 12.7116 15.9465 12.8508 15.9592 12.9962C15.9611 13.0184 15.9633 13.0413 15.9653 13.0638C15.9791 13.2178 15.9942 13.3759 16.0112 13.5393C16.0115 13.5427 16.0118 13.5457 16.0121 13.5491C16.0427 13.841 16.0776 14.1374 16.1142 14.4339C16.121 14.4885 16.1274 14.5422 16.1344 14.5968C16.171 14.8848 16.2098 15.1709 16.2508 15.4531C16.2535 15.4712 16.2557 15.4901 16.2583 15.5082H8.83922C8.83049 15.46 8.81896 15.413 8.812 15.3641C8.8061 15.3228 8.79989 15.2816 8.79528 15.2399C8.77896 15.0924 8.76787 14.9431 8.76787 14.7914C8.76787 14.6392 8.77648 14.4882 8.79342 14.3388C8.91195 13.293 9.43864 12.3278 10.2799 11.6399C11.0501 11.0051 12.0324 10.6554 13.0456 10.6554C14.0985 10.6554 15.1004 11.026 15.8833 11.7022ZM5.23195 10.4576C5.23195 9.27045 6.23097 8.30469 7.4588 8.30469C8.05161 8.30469 8.61 8.52922 9.03182 8.93691C9.45044 9.34151 9.68103 9.88156 9.68103 10.4576V11.2128C9.64582 11.2436 9.61686 11.2794 9.58267 11.3111C9.48485 11.4018 9.39075 11.495 9.30153 11.5923C9.2515 11.6468 9.20281 11.7017 9.15563 11.7581C9.07022 11.8601 8.99075 11.9657 8.91461 12.0736C8.87616 12.1281 8.8359 12.1811 8.7998 12.237C8.70845 12.3786 8.6257 12.5247 8.55014 12.6744C8.53754 12.6993 8.52193 12.7227 8.50983 12.7478C8.42499 12.9236 8.35293 13.1049 8.29054 13.2897C8.28628 13.3024 8.27963 13.3141 8.27551 13.3268L8.24247 13.1151C8.17045 12.6504 7.91502 12.241 7.52372 11.9624C7.43561 11.8997 7.34217 11.8474 7.24599 11.8016C7.21419 11.7864 7.18106 11.7753 7.14851 11.762C7.08169 11.7348 7.01433 11.7102 6.94493 11.691C6.90714 11.6805 6.86927 11.6722 6.83087 11.6642C6.76151 11.6497 6.69162 11.6396 6.62067 11.633C6.58387 11.6297 6.5475 11.6257 6.5103 11.6246C6.49012 11.6239 6.47043 11.6199 6.45021 11.6199C6.36719 11.6199 6.28347 11.6256 6.19939 11.6368C6.18839 11.6373 6.1774 11.6385 6.1664 11.64C6.09713 11.6502 6.02911 11.6642 5.96259 11.6816C5.94046 11.6873 5.91948 11.6957 5.89775 11.7022C5.85403 11.7153 5.81 11.7279 5.76769 11.7441C5.7429 11.7536 5.71958 11.7657 5.69527 11.7762C5.6574 11.7926 5.61909 11.8081 5.58259 11.8269C5.55949 11.8388 5.53794 11.8531 5.51541 11.8659C5.48224 11.8848 5.44827 11.9025 5.41643 11.9234L5.33271 11.3896C5.31293 11.2781 5.281 11.1714 5.24308 11.0671C5.23843 11.0543 5.23692 11.0397 5.23195 11.027V10.4576ZM1.83794 11.9054C1.79466 11.628 1.86561 11.3513 2.03767 11.1261C2.21009 10.9004 2.46374 10.7531 2.75429 10.711L3.38116 10.6169C3.86505 10.5455 4.33937 10.7996 4.53414 11.2317C4.57139 11.3168 4.59906 11.41 4.61573 11.5017L4.79276 12.6348C4.77892 12.6637 4.77023 12.694 4.75799 12.7235C4.74345 12.7587 4.72864 12.7936 4.71648 12.8295C4.69839 12.8826 4.68478 12.9365 4.67205 12.9908C4.66402 13.025 4.65449 13.0587 4.64864 13.0933C4.63826 13.1542 4.63369 13.2157 4.63001 13.2774C4.62824 13.3063 4.62385 13.3348 4.62358 13.3638C4.62278 13.455 4.6281 13.5467 4.64198 13.6385L4.93284 15.5082H2.40095L1.83794 11.9054ZM24.8372 28.33H1.69604V24.7591H24.8372V28.33ZM20.6526 15.5082C20.6545 15.4862 20.6562 15.4636 20.6581 15.4417C20.6774 15.2159 20.6974 14.9961 20.7183 14.7845C20.7197 14.7699 20.7211 14.7541 20.7225 14.7395C20.7449 14.5148 20.7682 14.3001 20.7921 14.0929C20.794 14.0769 20.7959 14.062 20.7978 14.0461L24.6492 14.8787C24.5772 15.084 24.5016 15.2947 24.4232 15.5082H20.6526ZM21.5638 10.5095C21.9537 9.71264 22.5121 9.31319 23.2642 9.29173C23.4724 9.2847 23.68 9.30564 23.9145 9.35696C24.1319 9.40125 24.3363 9.47198 24.5282 9.57051C25.1838 9.89065 25.5166 10.4949 25.5212 11.3693L21.5638 10.5095ZM29.2182 3.71744L24.5981 8.82671C24.5718 8.81632 24.5443 8.80866 24.5177 8.79896C24.4895 8.78869 24.4613 8.77907 24.4327 8.76961C24.3141 8.73028 24.1936 8.6953 24.0698 8.67015C23.94 8.64155 23.8149 8.62318 23.6912 8.60939C23.664 8.60638 23.6364 8.60336 23.6094 8.60104C23.5819 8.59866 23.5537 8.59422 23.5264 8.59256L22.1903 4.06471L21.5986 2.06659C21.5521 1.90798 21.6298 1.73529 21.7685 1.68225C21.8334 1.65804 21.8856 1.67178 21.9175 1.68774C21.9697 1.71298 22.008 1.76121 22.0371 1.85683L24.1951 7.27216C24.2394 7.38357 24.3391 7.46545 24.4597 7.48983C24.5821 7.51437 24.7063 7.47747 24.7925 7.39249L28.9358 3.32417C28.9826 3.27199 29.0411 3.24246 29.1007 3.24126C29.1341 3.23834 29.1862 3.24933 29.2306 3.29447C29.3352 3.40348 29.3296 3.59316 29.2182 3.71744Z\"\n              fill=\"white\" />\n          </svg>\n          My Products</button>\n      </div>\n    </div>\n  </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab1_tab1_module_ts-es5.js.map