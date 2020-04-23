/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./src/attributes.json":
/*!*****************************!*\
  !*** ./src/attributes.json ***!
  \*****************************/
/*! exports provided: aosData, aosMirror, aosOnce, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"aosData\":{\"type\":\"string\",\"default\":\"\",\"aos-attribute\":\"data-aos\"},\"aosMirror\":{\"type\":\"boolean\",\"default\":false,\"aos-attribute\":\"data-aos-mirror\"},\"aosOnce\":{\"type\":\"boolean\",\"default\":false,\"aos-attribute\":\"data-aos-once\"}}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./options */ "./src/options.js");
/* harmony import */ var _attributes_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributes.json */ "./src/attributes.json");
var _attributes_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./attributes.json */ "./src/attributes.json", 1);









var allowedBlocks = ['core/image', 'core/paragraph'];


/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */

function addAttributes(settings) {
  //add allowedBlocks restriction
  if (allowedBlocks.includes(settings.name)) {
    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["assign"])(settings.attributes, _attributes_json__WEBPACK_IMPORTED_MODULE_9__);
  }

  return settings;
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('blocks.registerBlockType', 'aos/custom-attributes', addAttributes);
/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {Function} BlockEdit Block edit component.
 *
 * @return {Function} BlockEdit Modified block edit component.
 */

var withAdvancedControls = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["createHigherOrderComponent"])(function (BlockEdit) {
  return function (props) {
    var name = props.name,
        attributes = props.attributes,
        setAttributes = props.setAttributes;
    var aosData = attributes.aosData,
        aosMirror = attributes.aosMirror,
        aosOnce = attributes.aosOnce;

    if (!allowedBlocks.includes(name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('AOS'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('aos-data'),
      value: aosData,
      options: _options__WEBPACK_IMPORTED_MODULE_8__["default"].data,
      onChange: function onChange(selectedAOSData) {
        setAttributes({
          aosData: selectedAOSData
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('aos-mirror'),
      checked: aosMirror,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('whether elements should animate out while scrolling past them'),
      onChange: function onChange(selectedAOSMirror) {
        setAttributes({
          aosMirror: selectedAOSMirror
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('aos-once'),
      checked: aosOnce,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('whether animation should happen only once - while scrolling down'),
      onChange: function onChange(selected) {
        setAttributes({
          aosOnce: selected
        });
      }
    }))));
  };
}, 'withAdvancedControls');
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('editor.BlockEdit', 'aos/blockeditor', withAdvancedControls);
/**
 * Override props assigned to save component to inject AOS Data.
 * This is only applied if the block's save result is an
 * element and not a markup string.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */

function addSaveProps(extraProps, blockType, attributes) {
  if (!allowedBlocks.includes(blockType.name)) {
    return extraProps;
  }

  var aosData = attributes.aosData;

  if (aosData) {
    // Loop through all AOS attributes
    // if they are different than the default value save them.
    Object.entries(_attributes_json__WEBPACK_IMPORTED_MODULE_9__).forEach(function (entry) {
      var key = entry[0];

      if (attributes[key] !== _attributes_json__WEBPACK_IMPORTED_MODULE_9__[key].default) {
        var aosAttribute = entry[1]['aos-attribute'];
        Object(lodash__WEBPACK_IMPORTED_MODULE_2__["assign"])(extraProps, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, aosAttribute, attributes[key]));
      }
    });
  }

  return extraProps;
}

wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'aos/add-extraProps', addSaveProps);

/***/ }),

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var options = {};
options.data = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('None'),
  value: ''
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('fade'),
  value: 'fade'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('fade-up'),
  value: 'fade-up'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('fade-down'),
  value: 'fade-down'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('fade-left'),
  value: 'fade-left'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('fade-right'),
  value: 'fade-right'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('fade-up-right'),
  value: 'fade-up-right'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('fade-up-left'),
  value: 'fade-up-left'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('fade-down-right'),
  value: 'fade-down-right'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('fade-down-left'),
  value: 'fade-down-left'
}];
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!*****************************************!*\
  !*** external {"this":["wp","editor"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map