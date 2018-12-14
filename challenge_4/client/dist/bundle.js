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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/Index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/Index.jsx":
/*!******************************!*\
  !*** ./client/src/Index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.jsx */ \"./client/src/components/App.jsx\");\n\nReactDOM.render(React.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL0luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvSW5kZXguanN4PzBlZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLmpzeCc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/Index.jsx\n");

/***/ }),

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.jsx */ \"./client/src/components/Board.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      win: false,\n      tie: false,\n      player: 1,\n      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]\n    };\n    _this.checkForWin = _this.checkForWin.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.checkForTie = _this.checkForTie.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"checkForWin\",\n    value: function checkForWin(player, board) {\n      var win = false; //VERTICAL\n\n      for (var c = 0; c < 7; c++) {\n        for (var r = 0; r < 3; r++) {\n          if (board[r + 3][c] === player && board[r + 2][c] === player && board[r + 1][c] === player && board[r][c] === player) {\n            win = true;\n          }\n        }\n      } //HORIZONTAL\n\n\n      for (var _c = 0; _c < 4; _c++) {\n        for (var _r = 0; _r < 6; _r++) {\n          if (board[_r][_c] === player && board[_r][_c + 1] === player && board[_r][_c + 2] === player && board[_r][_c + 3] === player) {\n            win = true;\n          }\n        }\n      } //LEFT-SIDE DIAGONALS\n\n\n      for (var _c2 = 3; _c2 < 7; _c2++) {\n        for (var _r2 = 0; _r2 < 3; _r2++) {\n          if (board[_r2][_c2] === player && board[_r2 + 1][_c2 - 1] === player && board[_r2 + 2][_c2 - 2] === player && board[_r2 + 3][_c2 - 3] === player) {\n            win = true;\n          }\n        }\n      } //RIGHT DIAGONALS\n\n\n      for (var _c3 = 3; _c3 < 7; _c3++) {\n        for (var _r3 = 3; _r3 < 6; _r3++) {\n          if (board[_r3][_c3] === player && board[_r3 - 1][_c3 - 1] === player && board[_r3 - 2][_c3 - 2] === player && board[_r3 - 3][_c3 - 3] === player) {\n            win = true;\n          }\n        }\n      }\n\n      return win;\n    }\n  }, {\n    key: \"checkForTie\",\n    value: function checkForTie(board) {\n      var spacesTakenCount = 0;\n\n      for (var r = board.length - 1; r >= 0; r--) {\n        for (var c = board[r].length - 1; c >= 0; c--) {\n          if (board[r][c] !== 0) {\n            spacesTakenCount++;\n          }\n        }\n      }\n\n      return spacesTakenCount === 42 ? true : false;\n    }\n  }, {\n    key: \"handleMove\",\n    value: function handleMove(evt) {\n      var col = evt.target.dataset.y;\n      var board = this.state.board.slice();\n      var currentPlayer = this.state.player === 1 ? 1 : 2;\n      var nextPlayer = currentPlayer === 1 ? 2 : 1;\n      var spaceFound = false;\n      var tie = this.state.tie;\n      var win = this.state.win;\n\n      for (var r = board.length - 1; r >= 0; r--) {\n        if (board[r][col] === 0 && !spaceFound) {\n          board[r][col] = this.state.player === 1 ? 1 : 2;\n          win = this.checkForWin(currentPlayer, board);\n          tie = this.checkForTie(board);\n          spaceFound = true;\n        }\n      }\n\n      this.setState({\n        win: win,\n        tie: tie,\n        player: nextPlayer,\n        board: board\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var prevPlayer = this.state.player === 1 ? 2 : 1;\n      return React.createElement(\"div\", null, React.createElement(\"h1\", null, \"Connect 4!\"), React.createElement(_Board_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board,\n        cols: 7,\n        rows: 6,\n        handleMove: this.handleMove\n      }), React.createElement(\"p\", null, this.state.win ? \"Player \".concat(prevPlayer, \" Win!\") : \"Player 1 : Red // Player 2 : Blue\"), React.createElement(\"p\", null, this.state.tie ? \"TIE GAME\" : \"\"));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4P2U1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQuanN4JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2luOiBmYWxzZSxcbiAgICAgIHRpZTogZmFsc2UsXG4gICAgICBwbGF5ZXI6IDEsXG4gICAgICBib2FyZDogW1xuICAgICAgICBbMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDBdXG4gICAgICBdXG4gICAgfVxuXG4gICAgdGhpcy5jaGVja0ZvcldpbiA9IHRoaXMuY2hlY2tGb3JXaW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrRm9yVGllID0gdGhpcy5jaGVja0ZvclRpZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTW92ZSA9IHRoaXMuaGFuZGxlTW92ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2hlY2tGb3JXaW4ocGxheWVyLCBib2FyZCkge1xuICAgIGxldCB3aW4gPSBmYWxzZTtcblxuICAgIC8vVkVSVElDQUxcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDc7IGMrKykge1xuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCAzOyByKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3IrM11bY10gPT09IHBsYXllciAmJiBib2FyZFtyKzJdW2NdID09PSBwbGF5ZXIgJiYgXG4gICAgICAgICAgYm9hcmRbcisxXVtjXSA9PT0gcGxheWVyICAmJiBib2FyZFtyXVtjXSA9PT0gcGxheWVyKSB7XG4gICAgICAgICAgd2luID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vSE9SSVpPTlRBTFxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgNDsgYysrKSB7XG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IDY7IHIrKykge1xuICAgICAgICBpZiAoYm9hcmRbcl1bY10gPT09IHBsYXllciAmJiBib2FyZFtyXVtjKzFdID09PSBwbGF5ZXIgJiYgXG4gICAgICAgICAgYm9hcmRbcl1bYysyXSA9PT0gcGxheWVyICYmIGJvYXJkW3JdW2MrM10gPT09IHBsYXllcikge1xuICAgICAgICAgIHdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL0xFRlQtU0lERSBESUFHT05BTFNcbiAgICBmb3IgKGxldCBjID0gMzsgYyA8IDc7IGMrKykge1xuICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCAzOyByKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3JdW2NdID09PSBwbGF5ZXIgJiYgYm9hcmRbcisxXVtjLTFdID09PSBwbGF5ZXIgJiYgXG4gICAgICAgICAgYm9hcmRbcisyXVtjLTJdID09PSBwbGF5ZXIgJiYgYm9hcmRbciszXVtjLTNdID09PSBwbGF5ZXIpIHtcbiAgICAgICAgICB3aW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9SSUdIVCBESUFHT05BTFNcbiAgICBmb3IgKGxldCBjID0gMzsgYyA8IDc7IGMrKykge1xuICAgICAgZm9yIChsZXQgciA9IDM7IHIgPCA2OyByKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW3JdW2NdID09PSBwbGF5ZXIgJiYgYm9hcmRbci0xXVtjLTFdID09PSBwbGF5ZXIgJiYgXG4gICAgICAgICAgYm9hcmRbci0yXVtjLTJdID09PSBwbGF5ZXIgJiYgYm9hcmRbci0zXVtjLTNdID09PSBwbGF5ZXIpIHtcbiAgICAgICAgICB3aW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbjtcbiAgfVxuXG4gIGNoZWNrRm9yVGllKGJvYXJkKSB7XG4gICAgbGV0IHNwYWNlc1Rha2VuQ291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgciA9IGJvYXJkLmxlbmd0aCAtIDE7IHIgPj0gMDsgci0tKSB7XG4gICAgICBmb3IgKGxldCBjID0gYm9hcmRbcl0ubGVuZ3RoIC0gMTsgYyA+PSAwOyBjLS0pIHtcbiAgICAgICAgaWYgKGJvYXJkW3JdW2NdICE9PSAwKSB7XG4gICAgICAgICAgc3BhY2VzVGFrZW5Db3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwYWNlc1Rha2VuQ291bnQgPT09IDQyID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlTW92ZShldnQpIHtcbiAgICBsZXQgY29sID0gZXZ0LnRhcmdldC5kYXRhc2V0Lnk7XG4gICAgbGV0IGJvYXJkID0gdGhpcy5zdGF0ZS5ib2FyZC5zbGljZSgpO1xuICAgIGxldCBjdXJyZW50UGxheWVyID0gdGhpcy5zdGF0ZS5wbGF5ZXIgPT09IDEgPyAxIDogMjtcbiAgICBsZXQgbmV4dFBsYXllciA9IGN1cnJlbnRQbGF5ZXIgPT09IDEgPyAyIDogMTtcbiAgICBsZXQgc3BhY2VGb3VuZCA9IGZhbHNlO1xuICAgIGxldCB0aWUgPSB0aGlzLnN0YXRlLnRpZTtcbiAgICBsZXQgd2luID0gdGhpcy5zdGF0ZS53aW47XG5cbiAgICBmb3IgKGxldCByID0gYm9hcmQubGVuZ3RoIC0gMTsgciA+PSAwOyByLS0pIHtcbiAgICAgICAgaWYgKGJvYXJkW3JdW2NvbF0gPT09IDAgJiYgIXNwYWNlRm91bmQpIHtcbiAgICAgICAgICBib2FyZFtyXVtjb2xdID0gKHRoaXMuc3RhdGUucGxheWVyID09PSAxID8gMSA6IDIpO1xuICAgICAgICAgIHdpbiA9IHRoaXMuY2hlY2tGb3JXaW4oY3VycmVudFBsYXllciwgYm9hcmQpO1xuICAgICAgICAgIHRpZSA9IHRoaXMuY2hlY2tGb3JUaWUoYm9hcmQpO1xuICAgICAgICAgIHNwYWNlRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB3aW4sXG4gICAgICB0aWUsXG4gICAgICBwbGF5ZXI6IG5leHRQbGF5ZXIsXG4gICAgICBib2FyZFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IHByZXZQbGF5ZXIgPSB0aGlzLnN0YXRlLnBsYXllciA9PT0gMSA/IDIgOiAxO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8aDE+Q29ubmVjdCA0ITwvaDE+XG4gICAgICAgIDxCb2FyZCBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0gY29scz17N30gcm93cz17Nn0gaGFuZGxlTW92ZT17dGhpcy5oYW5kbGVNb3ZlfSAvPlxuICAgICAgICA8cD57dGhpcy5zdGF0ZS53aW4gPyBgUGxheWVyICR7cHJldlBsYXllcn0gV2luIWAgOiBgUGxheWVyIDEgOiBSZWQgLy8gUGxheWVyIDIgOiBCbHVlYH08L3A+XG4gICAgICAgIDxwPnt0aGlzLnN0YXRlLnRpZSA/IGBUSUUgR0FNRWAgOiBgYH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFjQTtBQUNBO0FBQ0E7QUFsQkE7QUFtQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7O0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7O0FBeEhBO0FBQ0E7QUEwSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/App.jsx\n");

/***/ }),

/***/ "./client/src/components/Board.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Board.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Square_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square.jsx */ \"./client/src/components/Square.jsx\");\n\n\nvar Board = function Board(props) {\n  var spaces = [];\n\n  var _loop = function _loop(row) {\n    var row = props.board[row].map(function (place, index) {\n      return React.createElement(_Square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: props.board,\n        x: row,\n        y: index,\n        handleMove: props.handleMove\n      });\n    });\n    spaces.push(row);\n  };\n\n  for (var row = 0; row < props.board.length; row++) {\n    _loop(row);\n  }\n\n  return React.createElement(\"div\", {\n    className: \"board\"\n  }, spaces[0], spaces[1], spaces[2], spaces[3], spaces[4], spaces[5]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0JvYXJkLmpzeD8zNGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcXVhcmUgZnJvbSAnLi9TcXVhcmUuanN4JztcblxuY29uc3QgQm9hcmQgPSAocHJvcHMpID0+IHtcbiAgbGV0IHNwYWNlcyA9IFtdO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHByb3BzLmJvYXJkLmxlbmd0aDsgcm93KyspIHtcbiAgICBsZXQgcm93ID0gcHJvcHMuYm9hcmRbcm93XS5tYXAoKHBsYWNlLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNxdWFyZSBib2FyZD17cHJvcHMuYm9hcmR9IHg9e3Jvd30geT17aW5kZXh9IGhhbmRsZU1vdmU9e3Byb3BzLmhhbmRsZU1vdmV9IC8+XG4gICAgICApO1xuICAgIH0pO1xuICAgIHNwYWNlcy5wdXNoKHJvdyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgIHtzcGFjZXNbMF19XG4gICAgICB7c3BhY2VzWzFdfVxuICAgICAge3NwYWNlc1syXX1cbiAgICAgIHtzcGFjZXNbM119XG4gICAgICB7c3BhY2VzWzRdfVxuICAgICAge3NwYWNlc1s1XX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQVRBO0FBQ0E7QUFFQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/Board.jsx\n");

/***/ }),

/***/ "./client/src/components/Square.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Square.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Square = function Square(props) {\n  var squareValue = props.board[props.x][props.y];\n  var squareStatus;\n\n  if (squareValue === 0) {\n    squareStatus = 'row';\n  } else if (squareValue === 1) {\n    squareStatus = 'row Player1';\n  } else if (squareValue === 2) {\n    squareStatus = 'row Player2';\n  }\n\n  return React.createElement(\"div\", {\n    className: squareStatus,\n    \"data-x\": props.x,\n    \"data-y\": props.y,\n    onClick: props.handleMove\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvU3F1YXJlLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TcXVhcmUuanN4PzczYTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3F1YXJlID0gKHByb3BzKSA9PiB7XG4gIGxldCBzcXVhcmVWYWx1ZSA9IHByb3BzLmJvYXJkW3Byb3BzLnhdW3Byb3BzLnldO1xuICBsZXQgc3F1YXJlU3RhdHVzO1xuXG4gIGlmIChzcXVhcmVWYWx1ZSA9PT0gMCkge1xuICAgIHNxdWFyZVN0YXR1cyA9ICdyb3cnO1xuICB9IGVsc2UgaWYgKHNxdWFyZVZhbHVlID09PSAxKSB7XG4gICAgc3F1YXJlU3RhdHVzID0gJ3JvdyBQbGF5ZXIxJztcbiAgfSBlbHNlIGlmIChzcXVhcmVWYWx1ZSA9PT0gMikge1xuICAgIHNxdWFyZVN0YXR1cyA9ICdyb3cgUGxheWVyMic7XG4gIH1cblxuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3NxdWFyZVN0YXR1c30gZGF0YS14PXtwcm9wcy54fSBkYXRhLXk9e3Byb3BzLnl9IG9uQ2xpY2s9e3Byb3BzLmhhbmRsZU1vdmV9PjwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/Square.jsx\n");

/***/ })

/******/ });