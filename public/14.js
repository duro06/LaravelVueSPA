(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Order.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/Order.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
>>>>>>> ryuuuu/test
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue */ "./resources/js/views/products/Form.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
=======
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/http_service */ "./resources/js/services/http_service.js");
>>>>>>> ryuuuu/test
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EditProduct',
  created: function created() {
    //SEBELUM COMPONENT DI-RENDER KITA MELAKUKAN REQUEST KESERVER
    //BERDASARKAN CODE YANG ADA DI URL
    this.editProduct(this.$route.params.id);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('product', ['editProduct', 'updateProduct']), {
    submit: function submit() {
      var _this = this;

      //KETIKA TOMBOL UPDATE DI MAKA AKAN MENGIRIMKAN PERMINTAAN
      //UNTUK MENGUBAH DATA BERDASARKAN CODE YANG DIKIRIMKAN
      this.updateProduct(this.$route.params.id).then(function () {
        //APABILA BERHASIL MAKA AKAN DI-DIRECT KEMBALI
        //KE HALAMAN /products
        _this.$router.push({
          name: 'products.data'
        });
      });
    }
  }),
  components: {
    'product-form': _Form_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
=======
//  import { mapActions, mapState } from 'vuex'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'OrderProduct',
  created: function created() {
    this.getProductById(this.$route.params.id);
  },
  data: function data() {
    return {
      id: '',
      name: '',
      harga: '',
      qty: ''
    };
  },
  methods: {
    getProductById: function getProductById(id) {
      var _this = this;

      //MELAKUKAN REQUEST DENGAN MENGIRIMKAN CODE product DI URL
      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("user/products/".concat(id, "/edit")).then(function (response) {
        console.log(response);
        var getData = response.data.data;
        _this.id = getData.id;
        _this.name = getData.name;
        _this.harga = getData.harga;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    purchaseOrder: function purchaseOrder() {
      var formData = new FormData();
      formData.append("name", this.name);
      formData.append("harga", this.harga);
      formData.append("qty", this.qty);
      Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post("/user/orders", formData).then(function (response) {
        //APABILA BERHASIL KITA MELAKUKAN REQUEST LAGI
        //UNTUK MENGAMBIL DATA TERBARU
        dispatch('getProducts').then(function () {
          resolve(response.data);
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
>>>>>>> ryuuuu/test
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Edit.vue?vue&type=template&id=34b19b06&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/Edit.vue?vue&type=template&id=34b19b06& ***!
  \***********************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Order.vue?vue&type=template&id=87f77ffc&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/products/Order.vue?vue&type=template&id=87f77ffc& ***!
  \************************************************************************************************************************************************************************************************************/
>>>>>>> ryuuuu/test
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
<<<<<<< HEAD
  return _c("div", { staticClass: "col-md-12" }, [
    _c("div", { staticClass: "panel" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "panel-body" },
        [
          _c("product-form"),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-sm btn-flat",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.submit($event)
                  }
                }
              },
              [
                _c("i", { staticClass: "fa fa-save" }),
                _vm._v(" Update\n                ")
              ]
            )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h3", { staticClass: "panel-title" }, [_vm._v("Edit Product")])
    ])
  }
]
=======
  return _c(
    "div",
    { staticClass: "col-md-6", staticStyle: { padding: "20px" } },
    [
      _c("h1", [_vm._v("id: " + _vm._s(this.id))]),
      _vm._v(" "),
      _c("h1", [_vm._v("name: " + _vm._s(this.name))]),
      _vm._v(" "),
      _c("h1", [_vm._v("harga: " + _vm._s(this.harga))]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.qty,
            expression: "qty"
          }
        ],
        staticClass: "form-control",
        attrs: { type: "number" },
        domProps: { value: _vm.qty },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.qty = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.purchaseOrder($event)
            }
          }
        },
        [_vm._v("Order")]
      )
    ]
  )
}
var staticRenderFns = []
>>>>>>> ryuuuu/test
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/products/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/products/Edit.vue ***!
  \**********************************************/
=======
/***/ "./resources/js/views/products/Order.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/products/Order.vue ***!
  \***********************************************/
>>>>>>> ryuuuu/test
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Edit_vue_vue_type_template_id_34b19b06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=34b19b06& */ "./resources/js/views/products/Edit.vue?vue&type=template&id=34b19b06&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/products/Edit.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _Order_vue_vue_type_template_id_87f77ffc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Order.vue?vue&type=template&id=87f77ffc& */ "./resources/js/views/products/Order.vue?vue&type=template&id=87f77ffc&");
/* harmony import */ var _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.vue?vue&type=script&lang=js& */ "./resources/js/views/products/Order.vue?vue&type=script&lang=js&");
>>>>>>> ryuuuu/test
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_34b19b06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_34b19b06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Order_vue_vue_type_template_id_87f77ffc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Order_vue_vue_type_template_id_87f77ffc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> ryuuuu/test
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/products/Edit.vue"
=======
component.options.__file = "resources/js/views/products/Order.vue"
>>>>>>> ryuuuu/test
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/products/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/products/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
=======
/***/ "./resources/js/views/products/Order.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/products/Order.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
>>>>>>> ryuuuu/test
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/products/Edit.vue?vue&type=template&id=34b19b06&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/products/Edit.vue?vue&type=template&id=34b19b06& ***!
  \*****************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/products/Order.vue?vue&type=template&id=87f77ffc&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/products/Order.vue?vue&type=template&id=87f77ffc& ***!
  \******************************************************************************/
>>>>>>> ryuuuu/test
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_34b19b06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=34b19b06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Edit.vue?vue&type=template&id=34b19b06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_34b19b06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_34b19b06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_87f77ffc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Order.vue?vue&type=template&id=87f77ffc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/products/Order.vue?vue&type=template&id=87f77ffc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_87f77ffc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Order_vue_vue_type_template_id_87f77ffc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> ryuuuu/test



/***/ })

}]);