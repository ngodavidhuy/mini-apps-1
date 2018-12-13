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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.jsx */ \"./client/src/components/Board.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      win: false,\n      tie: false,\n      piece: 'X',\n      turn: 1,\n      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]\n    };\n    _this.checkForWin = _this.checkForWin.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.checkForTie = _this.checkForTie.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.changeTurn = _this.changeTurn.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleMove = _this.handleMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"checkForWin\",\n    value: function checkForWin() {}\n  }, {\n    key: \"checkForTie\",\n    value: function checkForTie() {}\n  }, {\n    key: \"changeTurn\",\n    value: function changeTurn() {\n      if (this.state.turn === 1) {\n        this.setState(function (prevState) {\n          return {\n            turn: 2,\n            piece: 'O'\n          };\n        });\n      } else {\n        this.setState(function (prevState) {\n          return {\n            turn: 1,\n            piece: 'X'\n          };\n        });\n      }\n    }\n  }, {\n    key: \"handleMove\",\n    value: function handleMove(e) {\n      var col = e.target.dataset.y;\n      console.log(\"\".concat(col));\n      e.target.innerHTML = this.state.piece;\n      this.changeTurn(); // if ()\n      // this.checkForWin();\n      // this.checkForTie();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"h1\", null, \"Connect 4!\"), React.createElement(_Board_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board,\n        cols: 7,\n        rows: 6,\n        handleMove: this.handleMove\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4P2U1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQuanN4JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2luOiBmYWxzZSxcbiAgICAgIHRpZTogZmFsc2UsXG4gICAgICBwaWVjZTogJ1gnLFxuICAgICAgdHVybjogMSxcbiAgICAgIGJvYXJkOiBbXG4gICAgICAgIFswLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgIFswLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgWzAsMCwwLDAsMCwwLDBdLFxuICAgICAgICBbMCwwLDAsMCwwLDAsMF1cbiAgICAgIF1cbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrRm9yV2luID0gdGhpcy5jaGVja0Zvcldpbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tGb3JUaWUgPSB0aGlzLmNoZWNrRm9yVGllLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VUdXJuID0gdGhpcy5jaGFuZ2VUdXJuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVNb3ZlID0gdGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjaGVja0ZvcldpbigpIHtcblxuICB9XG5cbiAgY2hlY2tGb3JUaWUoKSB7XG5cbiAgfVxuXG4gIGNoYW5nZVR1cm4oKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudHVybiA9PT0gMSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR1cm46IDIsXG4gICAgICAgICAgcGllY2U6ICdPJ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR1cm46IDEsXG4gICAgICAgICAgcGllY2U6ICdYJ1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVNb3ZlKGUpIHtcbiAgICBsZXQgY29sID0gZS50YXJnZXQuZGF0YXNldC55O1xuXG5cbiAgICBjb25zb2xlLmxvZyhgJHtjb2x9YCk7XG4gICAgZS50YXJnZXQuaW5uZXJIVE1MID0gdGhpcy5zdGF0ZS5waWVjZTtcbiAgICB0aGlzLmNoYW5nZVR1cm4oKTtcbiAgICAvLyBpZiAoKVxuICAgIC8vIHRoaXMuY2hlY2tGb3JXaW4oKTtcbiAgICAvLyB0aGlzLmNoZWNrRm9yVGllKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8aDE+Q29ubmVjdCA0ITwvaDE+XG4gICAgICAgIDxCb2FyZCBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0gY29scz17N30gcm93cz17Nn0gaGFuZGxlTW92ZT17dGhpcy5oYW5kbGVNb3ZlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQXFCQTtBQUNBOzs7QUFDQTs7O0FBSUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7QUFyRUE7QUFDQTtBQXVFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/App.jsx\n");

/***/ }),

/***/ "./client/src/components/Board.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Board.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Square_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Square.jsx */ \"./client/src/components/Square.jsx\");\n\n\nvar Board = function Board(props) {\n  // JAVASCRIPT HERE\n  //props.rows === 6 AND props.cols === 7\n  // for (let r = 0; r < props.rows; r++) {\n  //   for (let c = 0; c < props.cols; c++) {\n  //   }\n  // }\n  var spaces = [];\n\n  var _loop = function _loop(row) {\n    var row = props.board[row].map(function (place, index) {\n      return React.createElement(_Square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: row,\n        y: index,\n        handleMove: props.handleMove\n      });\n    });\n    spaces.push(row);\n  };\n\n  for (var row = 0; row < props.board.length; row++) {\n    _loop(row);\n  } // console.log(spaces);\n  // let row1 = props.board[0].map( (place, index) => {\n  //   return (\n  //     <Square x={0} y={index} handleMove={props.handleMove} />\n  //   );\n  // });\n  // props.board.map\n  //HARDCODE TEST FIRST\n\n\n  return React.createElement(\"div\", {\n    className: \"board\"\n  }, spaces[0], spaces[1], spaces[2], spaces[3], spaces[4], spaces[5]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board); // <Square x={0} y={0} handleMove={props.handleMove}/>\n// <Square x={0} y={1} handleMove={props.handleMove}/>\n// <Square x={0} y={2} handleMove={props.handleMove}/>\n// <Square x={0} y={3} handleMove={props.handleMove}/>\n// <Square x={0} y={4} handleMove={props.handleMove}/>\n// <Square x={0} y={5} handleMove={props.handleMove}/>\n// <Square x={0} y={6} handleMove={props.handleMove}/>\n// <Square x={1} y={0} />\n// <Square x={1} y={1} />\n// <Square x={1} y={2} />\n// <Square x={1} y={3} />\n// <Square x={1} y={4} />\n// <Square x={1} y={5} />\n// <Square x={1} y={6} />\n// <Square x={2} y={0} />\n// <Square x={2} y={1} />\n// <Square x={2} y={2} />\n// <Square x={2} y={3} />\n// <Square x={2} y={4} />\n// <Square x={2} y={5} />\n// <Square x={2} y={6} />\n// <Square x={3} y={0} />\n// <Square x={3} y={1} />\n// <Square x={3} y={2} />\n// <Square x={3} y={3} />\n// <Square x={3} y={4} />\n// <Square x={3} y={5} />\n// <Square x={3} y={6} />\n// <Square x={4} y={0} />\n// <Square x={4} y={1} />\n// <Square x={4} y={2} />\n// <Square x={4} y={3} />\n// <Square x={4} y={4} />\n// <Square x={4} y={5} />\n// <Square x={4} y={6} />\n// <Square x={5} y={0} />\n// <Square x={5} y={1} />\n// <Square x={5} y={2} />\n// <Square x={5} y={3} />\n// <Square x={5} y={4} />\n// <Square x={5} y={5} />\n// <Square x={5} y={6} />//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0JvYXJkLmpzeD8zNGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcXVhcmUgZnJvbSAnLi9TcXVhcmUuanN4JztcblxuY29uc3QgQm9hcmQgPSAocHJvcHMpID0+IHtcblxuICAvLyBKQVZBU0NSSVBUIEhFUkVcbiAgLy9wcm9wcy5yb3dzID09PSA2IEFORCBwcm9wcy5jb2xzID09PSA3XG4gIC8vIGZvciAobGV0IHIgPSAwOyByIDwgcHJvcHMucm93czsgcisrKSB7XG4gIC8vICAgZm9yIChsZXQgYyA9IDA7IGMgPCBwcm9wcy5jb2xzOyBjKyspIHtcblxuICAvLyAgIH1cbiAgLy8gfVxuICBsZXQgc3BhY2VzID0gW107XG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcHJvcHMuYm9hcmQubGVuZ3RoOyByb3crKykge1xuICAgIGxldCByb3cgPSBwcm9wcy5ib2FyZFtyb3ddLm1hcCgocGxhY2UsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3F1YXJlIHg9e3Jvd30geT17aW5kZXh9IGhhbmRsZU1vdmU9e3Byb3BzLmhhbmRsZU1vdmV9IC8+XG4gICAgICApO1xuICAgIH0pO1xuICAgIHNwYWNlcy5wdXNoKHJvdyk7XG4gIH1cblxuICAvLyBjb25zb2xlLmxvZyhzcGFjZXMpO1xuXG4gIC8vIGxldCByb3cxID0gcHJvcHMuYm9hcmRbMF0ubWFwKCAocGxhY2UsIGluZGV4KSA9PiB7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIDxTcXVhcmUgeD17MH0geT17aW5kZXh9IGhhbmRsZU1vdmU9e3Byb3BzLmhhbmRsZU1vdmV9IC8+XG4gIC8vICAgKTtcbiAgLy8gfSk7XG5cbiAgLy8gcHJvcHMuYm9hcmQubWFwXG5cbiAgLy9IQVJEQ09ERSBURVNUIEZJUlNUXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgIHtzcGFjZXNbMF19XG4gICAgICB7c3BhY2VzWzFdfVxuICAgICAge3NwYWNlc1syXX1cbiAgICAgIHtzcGFjZXNbM119XG4gICAgICB7c3BhY2VzWzRdfVxuICAgICAge3NwYWNlc1s1XX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG5cbi8vIDxTcXVhcmUgeD17MH0geT17MH0gaGFuZGxlTW92ZT17cHJvcHMuaGFuZGxlTW92ZX0vPlxuLy8gPFNxdWFyZSB4PXswfSB5PXsxfSBoYW5kbGVNb3ZlPXtwcm9wcy5oYW5kbGVNb3ZlfS8+XG4vLyA8U3F1YXJlIHg9ezB9IHk9ezJ9IGhhbmRsZU1vdmU9e3Byb3BzLmhhbmRsZU1vdmV9Lz5cbi8vIDxTcXVhcmUgeD17MH0geT17M30gaGFuZGxlTW92ZT17cHJvcHMuaGFuZGxlTW92ZX0vPlxuLy8gPFNxdWFyZSB4PXswfSB5PXs0fSBoYW5kbGVNb3ZlPXtwcm9wcy5oYW5kbGVNb3ZlfS8+XG4vLyA8U3F1YXJlIHg9ezB9IHk9ezV9IGhhbmRsZU1vdmU9e3Byb3BzLmhhbmRsZU1vdmV9Lz5cbi8vIDxTcXVhcmUgeD17MH0geT17Nn0gaGFuZGxlTW92ZT17cHJvcHMuaGFuZGxlTW92ZX0vPlxuXG5cbi8vIDxTcXVhcmUgeD17MX0geT17MH0gLz5cbi8vIDxTcXVhcmUgeD17MX0geT17MX0gLz5cbi8vIDxTcXVhcmUgeD17MX0geT17Mn0gLz5cbi8vIDxTcXVhcmUgeD17MX0geT17M30gLz5cbi8vIDxTcXVhcmUgeD17MX0geT17NH0gLz5cbi8vIDxTcXVhcmUgeD17MX0geT17NX0gLz5cbi8vIDxTcXVhcmUgeD17MX0geT17Nn0gLz5cblxuXG4vLyA8U3F1YXJlIHg9ezJ9IHk9ezB9IC8+XG4vLyA8U3F1YXJlIHg9ezJ9IHk9ezF9IC8+XG4vLyA8U3F1YXJlIHg9ezJ9IHk9ezJ9IC8+XG4vLyA8U3F1YXJlIHg9ezJ9IHk9ezN9IC8+XG4vLyA8U3F1YXJlIHg9ezJ9IHk9ezR9IC8+XG4vLyA8U3F1YXJlIHg9ezJ9IHk9ezV9IC8+XG4vLyA8U3F1YXJlIHg9ezJ9IHk9ezZ9IC8+XG5cbi8vIDxTcXVhcmUgeD17M30geT17MH0gLz5cbi8vIDxTcXVhcmUgeD17M30geT17MX0gLz5cbi8vIDxTcXVhcmUgeD17M30geT17Mn0gLz5cbi8vIDxTcXVhcmUgeD17M30geT17M30gLz5cbi8vIDxTcXVhcmUgeD17M30geT17NH0gLz5cbi8vIDxTcXVhcmUgeD17M30geT17NX0gLz5cbi8vIDxTcXVhcmUgeD17M30geT17Nn0gLz5cblxuLy8gPFNxdWFyZSB4PXs0fSB5PXswfSAvPlxuLy8gPFNxdWFyZSB4PXs0fSB5PXsxfSAvPlxuLy8gPFNxdWFyZSB4PXs0fSB5PXsyfSAvPlxuLy8gPFNxdWFyZSB4PXs0fSB5PXszfSAvPlxuLy8gPFNxdWFyZSB4PXs0fSB5PXs0fSAvPlxuLy8gPFNxdWFyZSB4PXs0fSB5PXs1fSAvPlxuLy8gPFNxdWFyZSB4PXs0fSB5PXs2fSAvPlxuXG4vLyA8U3F1YXJlIHg9ezV9IHk9ezB9IC8+XG4vLyA8U3F1YXJlIHg9ezV9IHk9ezF9IC8+XG4vLyA8U3F1YXJlIHg9ezV9IHk9ezJ9IC8+XG4vLyA8U3F1YXJlIHg9ezV9IHk9ezN9IC8+XG4vLyA8U3F1YXJlIHg9ezV9IHk9ezR9IC8+XG4vLyA8U3F1YXJlIHg9ezV9IHk9ezV9IC8+XG4vLyA8U3F1YXJlIHg9ezV9IHk9ezZ9IC8+Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQWpCQTtBQUNBO0FBVUE7QUFBQTtBQU9BO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/Board.jsx\n");

/***/ }),

/***/ "./client/src/components/Square.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Square.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Square = function Square(props) {\n  return React.createElement(\"div\", {\n    className: \"row\",\n    \"data-x\": props.x,\n    \"data-y\": props.y,\n    onClick: props.handleMove\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvU3F1YXJlLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TcXVhcmUuanN4PzczYTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3F1YXJlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBkYXRhLXg9e3Byb3BzLnh9IGRhdGEteT17cHJvcHMueX0gb25DbGljaz17cHJvcHMuaGFuZGxlTW92ZX0+PC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Square.jsx\n");

/***/ })

/******/ });