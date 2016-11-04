/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************!*\
  !*** ./src/js/spinner.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _spinner = __webpack_require__(/*! ./spinner.controller */ 1);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = {
	  init: function init() {
	    var spinbox = new _spinner2.default();
	    spinbox.init();
	  }
	};
	
	App.init();

/***/ },
/* 1 */
/*!**************************************!*\
  !*** ./src/js/spinner.controller.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _spinner = __webpack_require__(/*! ./spinner.model */ 2);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _spinner3 = __webpack_require__(/*! ./spinner.view */ 3);
	
	var _spinner4 = _interopRequireDefault(_spinner3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SpinnerController = function () {
	    function SpinnerController() {
	        _classCallCheck(this, SpinnerController);
	
	        this.addHandler();
	    }
	
	    _createClass(SpinnerController, [{
	        key: 'init',
	        value: function init() {
	            this.spinnerModel = new _spinner2.default();
	            this.spinnerView = new _spinner4.default();
	
	            this.spinnerView.render(this.spinnerModel.getData());
	        }
	    }, {
	        key: 'addHandler',
	        value: function addHandler() {
	            document.querySelector('.spinner__increase').addEventListener('click', function (e) {
	                e.preventDefault();
	
	                this.onClickIncrease();
	            }.bind(this));
	
	            document.querySelector('.spinner__decrease').addEventListener('click', function (e) {
	                e.preventDefault();
	
	                this.onClickDecrease();
	            }.bind(this));
	
	            document.getElementById('frmSpinner').addEventListener('submit', function (e) {
	                e.preventDefault();
	
	                this.onSubmit();
	            }.bind(this));
	
	            document.querySelector('.function__getvalue').addEventListener('click', function (e) {
	                e.preventDefault();
	
	                alert(e.target.innerHTML);
	            }.bind(this));
	
	            document.querySelector('.function__setvalue').addEventListener('click', function (e) {
	                e.preventDefault();
	
	                alert(e.target.innerHTML);
	            }.bind(this));
	        }
	    }, {
	        key: 'onClickIncrease',
	        value: function onClickIncrease() {
	            this.spinnerModel.increase();
	            this.spinnerView.render(this.spinnerModel.getData());
	        }
	    }, {
	        key: 'onClickDecrease',
	        value: function onClickDecrease() {
	            this.spinnerModel.decrease();
	            this.spinnerView.render(this.spinnerModel.getData());
	        }
	    }, {
	        key: 'onSubmit',
	        value: function onSubmit() {
	            this.spinnerView.showData(this.spinnerModel.getData());
	        }
	    }]);
	
	    return SpinnerController;
	}();
	
	exports.default = SpinnerController;

/***/ },
/* 2 */
/*!*********************************!*\
  !*** ./src/js/spinner.model.js ***!
  \*********************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SpinnerModel = function () {
	    function SpinnerModel(value) {
	        _classCallCheck(this, SpinnerModel);
	
	        value = value || 100;
	        this.data = value;
	    }
	
	    _createClass(SpinnerModel, [{
	        key: "increase",
	        value: function increase(value) {
	            value = value || 1;
	            this.data += value;
	        }
	    }, {
	        key: "decrease",
	        value: function decrease(value) {
	            value = value || 1;
	            this.data -= value;
	        }
	    }, {
	        key: "getData",
	        value: function getData() {
	            return this.data;
	        }
	    }]);
	
	    return SpinnerModel;
	}();
	
	exports.default = SpinnerModel;

/***/ },
/* 3 */
/*!********************************!*\
  !*** ./src/js/spinner.view.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SpinnerView = function () {
	  function SpinnerView() {
	    _classCallCheck(this, SpinnerView);
	  }
	
	  _createClass(SpinnerView, [{
	    key: 'render',
	    value: function render(value) {
	      document.querySelector('.spinner__result').value = value;
	    }
	  }, {
	    key: 'showData',
	    value: function showData(value) {
	      alert(value);
	    }
	  }]);
	
	  return SpinnerView;
	}();
	
	exports.default = SpinnerView;
	;

/***/ }
/******/ ]);
//# sourceMappingURL=spinner.bundle.js.map