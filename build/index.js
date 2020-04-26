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
/*! exports provided: aosData, aosOffset, aosDelay, aosDuration, aosEasing, aosMirror, aosOnce, aosAnchorPlacement, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"aosData\":{\"type\":\"string\",\"default\":\"\",\"aos-attribute\":\"data-aos\"},\"aosOffset\":{\"type\":\"number\",\"default\":120,\"aos-attribute\":\"data-aos-offset\"},\"aosDelay\":{\"type\":\"number\",\"default\":0,\"aos-attribute\":\"data-aos-delay\"},\"aosDuration\":{\"type\":\"number\",\"default\":1000,\"aos-attribute\":\"data-aos-duration\"},\"aosEasing\":{\"type\":\"string\",\"default\":\"ease-out-back\",\"aos-attribute\":\"data-aos-easing\"},\"aosMirror\":{\"type\":\"boolean\",\"default\":false,\"aos-attribute\":\"data-aos-mirror\"},\"aosOnce\":{\"type\":\"boolean\",\"default\":false,\"aos-attribute\":\"data-aos-once\"},\"aosAnchorPlacement\":{\"type\":\"string\",\"default\":\"top-center\",\"aos-attribute\":\"data-aos-anchor-placement\"}}");

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
  console.log('ADD addAttributes');

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
        setAttributes = props.setAttributes,
        isselected = props.isselected;

    if (!allowedBlocks.includes(name)) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props);
    }

    var aosData = attributes.aosData,
        aosOffset = attributes.aosOffset,
        aosDelay = attributes.aosDelay,
        aosDuration = attributes.aosDuration,
        aosEasing = attributes.aosEasing,
        aosMirror = attributes.aosMirror,
        aosOnce = attributes.aosOnce,
        aosAnchorPlacement = attributes.aosAnchorPlacement;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('AOS'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('aos-data'),
      value: aosData,
      options: _options__WEBPACK_IMPORTED_MODULE_8__["default"].data,
      onChange: function onChange(aosData) {
        setAttributes({
          aosData: aosData
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('aos-data-offset'),
      value: aosOffset,
      onChange: function onChange(selectedAOSOffset) {
        return setAttributes({
          aosOffset: selectedAOSOffset
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])(' offset (in px) from the original trigger point'),
      type: "number"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('aos-data-delay'),
      value: aosDelay,
      onChange: function onChange(aosDelay) {
        return setAttributes({
          aosDelay: aosDelay
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('values from 0 to 3000, with step 50ms'),
      type: "number",
      step: "50",
      min: "0",
      max: "3000"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('aos-data-duration'),
      value: aosDuration,
      onChange: function onChange(aosDuration) {
        return setAttributes({
          aosDuration: aosDuration
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('values from 0 to 3000, with step 50ms'),
      type: "number",
      step: "50",
      min: "0",
      max: "3000"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('aos-easing'),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('easing for AOS animations'),
      value: aosEasing,
      options: _options__WEBPACK_IMPORTED_MODULE_8__["default"].easing,
      onChange: function onChange(aosEasing) {
        setAttributes({
          aosEasing: aosEasing
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('aos-mirror'),
      checked: aosMirror,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('whether elements should animate out while scrolling past them'),
      onChange: function onChange(selectedAOSMirror) {
        setAttributes({
          aosMirror: selectedAOSMirror
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('aos-anchor-placement'),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('defines which position of the element regarding to window should trigger the animation'),
      value: aosAnchorPlacement,
      options: _options__WEBPACK_IMPORTED_MODULE_8__["default"].anchorPlacement,
      onChange: function onChange(aosAnchorPlacement) {
        setAttributes({
          aosAnchorPlacement: aosAnchorPlacement
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
      var key = entry[0]; // console.log( key );
      // console.log( attributes[ key ] );
      // console.log( aosAttributes[ key ].default );

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
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('flip-up'),
  value: 'flip-up'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('flip-down'),
  value: 'flip-down'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('flip-down'),
  value: 'flip-down'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('flip-right'),
  value: 'flip-right'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('slide-up'),
  value: 'slide-up'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('slide-down'),
  value: 'slide-down'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('slide-down'),
  value: 'slide-down'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('slide-right'),
  value: 'slide-right'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('zoom-in'),
  value: 'zoom-in'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('zoom-in-up'),
  value: 'zoom-in-up'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('zoom-in-down'),
  value: 'zoom-in-down'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('zoom-in-left'),
  value: 'zoom-in-left'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('zoom-in-right'),
  value: 'zoom-in-right'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('zoom-out'),
  value: 'zoom-out'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('zoom-out-up'),
  value: 'zoom-out-up'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('zoom-out-down'),
  value: 'zoom-out-down'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('zoom-out-left'),
  value: 'zoom-out-left'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('zoom-out-right'),
  value: 'zoom-out-right'
}];
options.easing = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('linear'),
  value: 'linear'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease'),
  value: 'ease'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-in'),
  value: 'ease-in'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-out'),
  value: 'ease-out'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-in-out'),
  value: 'ease-in-out'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-out-back'),
  value: 'ease-out-back'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-in-out-back'),
  value: 'ease-in-out-back'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-in-sine'),
  value: 'ease-in-sine'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-out-sine'),
  value: 'ease-out-sine'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-in-out-sine'),
  value: 'ease-in-out-sine'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-in-quad'),
  value: 'ease-in-quad'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-out-quad'),
  value: 'ease-out-quad'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-in-out-quad'),
  value: 'ease-in-out-quad'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-in-cubic'),
  value: 'ease-in-cubic'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-out-cubic'),
  value: 'ease-out-cubic'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-in-out-cubic'),
  value: 'ease-in-out-cubic'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-in-quart'),
  value: 'ease-in-quart'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-out-quart'),
  value: 'ease-out-quart'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('ease-in-out-quart'),
  value: 'ease-in-out-quart'
}];
options.anchorPlacement = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('top-bottom'),
  value: 'top-bottom'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('top-center'),
  value: 'top-center'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('top-top'),
  value: 'top-top'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('center-bottom'),
  value: 'center-bottom'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('center-center'),
  value: 'center-center'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('center-top'),
  value: 'center-top'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('bottom-bottom'),
  value: 'bottom-bottom'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('bottom-center'),
  value: 'bottom-center'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('bottom-top'),
  value: 'bottom-top'
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