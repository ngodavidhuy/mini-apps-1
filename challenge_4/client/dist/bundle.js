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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.jsx */ \"./client/src/components/Board.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      win: false,\n      tie: false,\n      turn: 1,\n      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]\n    };\n    _this.checkForWin = _this.checkForWin.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.checkForTie = _this.checkForTie.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"checkForWin\",\n    value: function checkForWin(player) {\n      var board = this.state.board;\n      var win = false; //VERTICAL\n\n      for (var c = 0; c < 7; c++) {\n        for (var r = 0; r < 3; r++) {\n          if (board[r + 3][c] === player && board[r + 2][c] === player && board[r + 1][c] === player && board[r][c] === player) {\n            win = true;\n          }\n        }\n      } //HORIZONTAL\n\n\n      for (var _c = 0; _c < 4; _c++) {\n        for (var _r = 0; _r < 6; _r++) {\n          if (board[_r][_c] === player && board[_r][_c + 1] === player && board[_r][_c + 2] === player && board[_r][_c + 3] === player) {\n            win = true;\n          }\n        }\n      } //MAJOR DIAGONAL\n      //MINOR DIAGONAL\n\n\n      console.log('check win');\n      console.log(win);\n    }\n  }, {\n    key: \"checkForTie\",\n    value: function checkForTie() {\n      var board = this.state.board;\n      var spacesTakenCount = 0;\n\n      for (var r = board.length - 1; r >= 0; r--) {\n        for (var c = board[r].length - 1; c >= 0; c--) {\n          if (board[r][c] !== 0) {\n            spacesTakenCount++;\n          }\n        }\n      }\n\n      if (spacesTakenCount === 42) {\n        this.setState({\n          tie: true\n        }, function () {\n          console.log('GAME IS A TIE'); // console.log(this.state.tie);\n        });\n      } else {// console.log('GAME ON!')\n      }\n    }\n  }, {\n    key: \"handleMove\",\n    value: function handleMove(evt) {\n      var _this2 = this;\n\n      var col = evt.target.dataset.y;\n      var board = this.state.board.slice();\n      var currentPlayer = this.state.turn === 1 ? 1 : 2;\n      var nextPlayer = currentPlayer === 1 ? 2 : 1;\n      var spaceFound = false;\n\n      for (var r = board.length - 1; r >= 0; r--) {\n        if (board[r][col] === 0 && !spaceFound) {\n          board[r][col] = this.state.turn === 1 ? 1 : 2;\n          this.setState({\n            board: board,\n            turn: nextPlayer\n          }, function () {\n            _this2.checkForWin(currentPlayer);\n\n            _this2.checkForTie();\n          });\n          spaceFound = true;\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"h1\", null, \"Connect 4!\"), React.createElement(_Board_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board,\n        cols: 7,\n        rows: 6,\n        handleMove: this.handleMove\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4P2U1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQuanN4JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2luOiBmYWxzZSxcbiAgICAgIHRpZTogZmFsc2UsXG4gICAgICB0dXJuOiAxLFxuICAgICAgYm9hcmQ6IFtcbiAgICAgICAgWzAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwXVxuICAgICAgXVxuICAgIH1cblxuICAgIHRoaXMuY2hlY2tGb3JXaW4gPSB0aGlzLmNoZWNrRm9yV2luLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGVja0ZvclRpZSA9IHRoaXMuY2hlY2tGb3JUaWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU1vdmUgPSB0aGlzLmhhbmRsZU1vdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNoZWNrRm9yV2luKHBsYXllcikge1xuICAgIGxldCBib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQ7XG4gICAgbGV0IHdpbiA9IGZhbHNlO1xuXG4gICAgLy9WRVJUSUNBTFxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgNzsgYysrKSB7XG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IDM7IHIrKykge1xuICAgICAgICBpZiAoYm9hcmRbciszXVtjXSA9PT0gcGxheWVyICYmIGJvYXJkW3IrMl1bY10gPT09IHBsYXllciAmJiBib2FyZFtyKzFdW2NdID09PSBwbGF5ZXIgICYmIGJvYXJkW3JdW2NdID09PSBwbGF5ZXIpIHtcbiAgICAgICAgICB3aW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9IT1JJWk9OVEFMXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCA0OyBjKyspIHtcbiAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgNjsgcisrKSB7XG4gICAgICAgIGlmIChib2FyZFtyXVtjXSA9PT0gcGxheWVyICYmIGJvYXJkW3JdW2MrMV0gPT09IHBsYXllciAmJiBib2FyZFtyXVtjKzJdID09PSBwbGF5ZXIgJiYgYm9hcmRbcl1bYyszXSA9PT0gcGxheWVyKSB7XG4gICAgICAgICAgd2luID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vTUFKT1IgRElBR09OQUxcblxuICAgIC8vTUlOT1IgRElBR09OQUxcblxuXG4gICAgY29uc29sZS5sb2coJ2NoZWNrIHdpbicpO1xuICAgIGNvbnNvbGUubG9nKHdpbik7XG4gIH1cblxuICBjaGVja0ZvclRpZSgpIHtcbiAgICBsZXQgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIGxldCBzcGFjZXNUYWtlbkNvdW50ID0gMDtcblxuICAgIGZvciAobGV0IHIgPSBib2FyZC5sZW5ndGggLSAxOyByID49IDA7IHItLSkge1xuICAgICAgZm9yIChsZXQgYyA9IGJvYXJkW3JdLmxlbmd0aCAtIDE7IGMgPj0gMDsgYy0tKSB7XG4gICAgICAgIGlmIChib2FyZFtyXVtjXSAhPT0gMCkge1xuICAgICAgICAgIHNwYWNlc1Rha2VuQ291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzcGFjZXNUYWtlbkNvdW50ID09PSA0Mikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRpZTogdHJ1ZVxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnR0FNRSBJUyBBIFRJRScpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRpZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ0dBTUUgT04hJylcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb3ZlKGV2dCkge1xuICAgIGxldCBjb2wgPSBldnQudGFyZ2V0LmRhdGFzZXQueTtcbiAgICBsZXQgYm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkLnNsaWNlKCk7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXIgPSB0aGlzLnN0YXRlLnR1cm4gPT09IDEgPyAxIDogMjtcbiAgICBsZXQgbmV4dFBsYXllciA9IGN1cnJlbnRQbGF5ZXIgPT09IDEgPyAyIDogMTtcbiAgICBsZXQgc3BhY2VGb3VuZCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgciA9IGJvYXJkLmxlbmd0aCAtIDE7IHIgPj0gMDsgci0tKSB7XG4gICAgICAgIGlmIChib2FyZFtyXVtjb2xdID09PSAwICYmICFzcGFjZUZvdW5kKSB7XG4gICAgICAgICAgYm9hcmRbcl1bY29sXSA9ICh0aGlzLnN0YXRlLnR1cm4gPT09IDEgPyAxIDogMik7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBib2FyZDogYm9hcmQsXG4gICAgICAgICAgICB0dXJuOiBuZXh0UGxheWVyXG4gICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGVja0ZvcldpbihjdXJyZW50UGxheWVyKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JUaWUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzcGFjZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxoMT5Db25uZWN0IDQhPC9oMT5cbiAgICAgICAgPEJvYXJkIGJvYXJkPXt0aGlzLnN0YXRlLmJvYXJkfSBjb2xzPXs3fSByb3dzPXs2fSBoYW5kbGVNb3ZlPXt0aGlzLmhhbmRsZU1vdmV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFjQTtBQUNBO0FBQ0E7QUFsQkE7QUFtQkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUExR0E7QUFDQTtBQTRHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/App.jsx\n");

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