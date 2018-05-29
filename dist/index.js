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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Server = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _errorhandler = __webpack_require__(/*! errorhandler */ \"errorhandler\");\n\nvar _errorhandler2 = _interopRequireDefault(_errorhandler);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressStatusMonitor = __webpack_require__(/*! express-status-monitor */ \"express-status-monitor\");\n\nvar _expressStatusMonitor2 = _interopRequireDefault(_expressStatusMonitor);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _methodOverride = __webpack_require__(/*! method-override */ \"method-override\");\n\nvar _methodOverride2 = _interopRequireDefault(_methodOverride);\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _index = __webpack_require__(/*! ./routes/index */ \"./routes/index.js\");\n\nvar _index2 = __webpack_require__(/*! ./services/index */ \"./services/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * The server.\n *\n * @class Server\n */\nvar Server = exports.Server = function () {\n  _createClass(Server, null, [{\n    key: 'bootstrap',\n\n\n    /**\n     * Bootstrap the application.\n     *\n     * @class Server\n     * @method bootstrap\n     * @static\n     */\n    value: function bootstrap() {\n      return new Server();\n    }\n\n    /**\n     * Constructor.\n     *\n     * @class Server\n     * @constructor\n     */\n\n  }]);\n\n  function Server() {\n    _classCallCheck(this, Server);\n\n    // create express application\n    this.app = (0, _express2.default)();\n\n    // configure application\n    this.config();\n\n    // add routes\n    this.routes();\n  }\n\n  /**\n   * Configure application\n   *\n   * @class Server\n   * @method config\n   */\n\n\n  _createClass(Server, [{\n    key: 'config',\n    value: function config() {\n      // add static paths\n      this.app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));\n\n      // mount logger\n      this.app.use((0, _morgan2.default)('tiny', {\n        stream: {\n          write: function write(message) {\n            return _index2.logger.info(message.trim());\n          }\n        }\n      }));\n\n      // mount json form parser\n      this.app.use(_bodyParser2.default.json({ limit: '50mb' }));\n\n      // mount query string parser\n      this.app.use(_bodyParser2.default.urlencoded({\n        extended: true\n      }));\n\n      // mount override?\n      this.app.use((0, _helmet2.default)());\n      this.app.use((0, _cors2.default)());\n      this.app.use((0, _compression2.default)());\n      this.app.use((0, _methodOverride2.default)());\n      this.app.use((0, _expressStatusMonitor2.default)());\n\n      // catch 404 and forward to error handler\n      this.app.use(function (err, req, res, next) {\n        err.status = 404;\n        next(err);\n      });\n\n      // error handling\n      this.app.use((0, _errorhandler2.default)());\n    }\n\n    /**\n     * Create and return Router.\n     *\n     * @class Server\n     * @method routes\n     * @return void\n     */\n\n  }, {\n    key: 'routes',\n    value: function routes() {\n      // use router middleware\n      this.app.use(_index.ApiRoutes.path, _index.ApiRoutes.router);\n    }\n  }]);\n\n  return Server;\n}();\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/MjRiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlNlcnZlciA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9ib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcblxudmFyIF9ib2R5UGFyc2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JvZHlQYXJzZXIpO1xuXG52YXIgX2NvbXByZXNzaW9uID0gcmVxdWlyZSgnY29tcHJlc3Npb24nKTtcblxudmFyIF9jb21wcmVzc2lvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wcmVzc2lvbik7XG5cbnZhciBfY29ycyA9IHJlcXVpcmUoJ2NvcnMnKTtcblxudmFyIF9jb3JzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvcnMpO1xuXG52YXIgX2Vycm9yaGFuZGxlciA9IHJlcXVpcmUoJ2Vycm9yaGFuZGxlcicpO1xuXG52YXIgX2Vycm9yaGFuZGxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lcnJvcmhhbmRsZXIpO1xuXG52YXIgX2V4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5cbnZhciBfZXhwcmVzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHByZXNzKTtcblxudmFyIF9leHByZXNzU3RhdHVzTW9uaXRvciA9IHJlcXVpcmUoJ2V4cHJlc3Mtc3RhdHVzLW1vbml0b3InKTtcblxudmFyIF9leHByZXNzU3RhdHVzTW9uaXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHByZXNzU3RhdHVzTW9uaXRvcik7XG5cbnZhciBfaGVsbWV0ID0gcmVxdWlyZSgnaGVsbWV0Jyk7XG5cbnZhciBfaGVsbWV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hlbG1ldCk7XG5cbnZhciBfbWV0aG9kT3ZlcnJpZGUgPSByZXF1aXJlKCdtZXRob2Qtb3ZlcnJpZGUnKTtcblxudmFyIF9tZXRob2RPdmVycmlkZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXRob2RPdmVycmlkZSk7XG5cbnZhciBfbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJyk7XG5cbnZhciBfbW9yZ2FuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vcmdhbik7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZSgnLi9yb3V0ZXMvaW5kZXgnKTtcblxudmFyIF9pbmRleDIgPSByZXF1aXJlKCcuL3NlcnZpY2VzL2luZGV4Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogVGhlIHNlcnZlci5cbiAqXG4gKiBAY2xhc3MgU2VydmVyXG4gKi9cbnZhciBTZXJ2ZXIgPSBleHBvcnRzLlNlcnZlciA9IGZ1bmN0aW9uICgpIHtcbiAgX2NyZWF0ZUNsYXNzKFNlcnZlciwgbnVsbCwgW3tcbiAgICBrZXk6ICdib290c3RyYXAnLFxuXG5cbiAgICAvKipcbiAgICAgKiBCb290c3RyYXAgdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqXG4gICAgICogQGNsYXNzIFNlcnZlclxuICAgICAqIEBtZXRob2QgYm9vdHN0cmFwXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gICAgICByZXR1cm4gbmV3IFNlcnZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQGNsYXNzIFNlcnZlclxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuXG4gIH1dKTtcblxuICBmdW5jdGlvbiBTZXJ2ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcnZlcik7XG5cbiAgICAvLyBjcmVhdGUgZXhwcmVzcyBhcHBsaWNhdGlvblxuICAgIHRoaXMuYXBwID0gKDAsIF9leHByZXNzMi5kZWZhdWx0KSgpO1xuXG4gICAgLy8gY29uZmlndXJlIGFwcGxpY2F0aW9uXG4gICAgdGhpcy5jb25maWcoKTtcblxuICAgIC8vIGFkZCByb3V0ZXNcbiAgICB0aGlzLnJvdXRlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZSBhcHBsaWNhdGlvblxuICAgKlxuICAgKiBAY2xhc3MgU2VydmVyXG4gICAqIEBtZXRob2QgY29uZmlnXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFNlcnZlciwgW3tcbiAgICBrZXk6ICdjb25maWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25maWcoKSB7XG4gICAgICAvLyBhZGQgc3RhdGljIHBhdGhzXG4gICAgICB0aGlzLmFwcC51c2UoX2V4cHJlc3MyLmRlZmF1bHQuc3RhdGljKF9wYXRoMi5kZWZhdWx0LmpvaW4oX19kaXJuYW1lLCAncHVibGljJykpKTtcblxuICAgICAgLy8gbW91bnQgbG9nZ2VyXG4gICAgICB0aGlzLmFwcC51c2UoKDAsIF9tb3JnYW4yLmRlZmF1bHQpKCd0aW55Jywge1xuICAgICAgICBzdHJlYW06IHtcbiAgICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9pbmRleDIubG9nZ2VyLmluZm8obWVzc2FnZS50cmltKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkpO1xuXG4gICAgICAvLyBtb3VudCBqc29uIGZvcm0gcGFyc2VyXG4gICAgICB0aGlzLmFwcC51c2UoX2JvZHlQYXJzZXIyLmRlZmF1bHQuanNvbih7IGxpbWl0OiAnNTBtYicgfSkpO1xuXG4gICAgICAvLyBtb3VudCBxdWVyeSBzdHJpbmcgcGFyc2VyXG4gICAgICB0aGlzLmFwcC51c2UoX2JvZHlQYXJzZXIyLmRlZmF1bHQudXJsZW5jb2RlZCh7XG4gICAgICAgIGV4dGVuZGVkOiB0cnVlXG4gICAgICB9KSk7XG5cbiAgICAgIC8vIG1vdW50IG92ZXJyaWRlP1xuICAgICAgdGhpcy5hcHAudXNlKCgwLCBfaGVsbWV0Mi5kZWZhdWx0KSgpKTtcbiAgICAgIHRoaXMuYXBwLnVzZSgoMCwgX2NvcnMyLmRlZmF1bHQpKCkpO1xuICAgICAgdGhpcy5hcHAudXNlKCgwLCBfY29tcHJlc3Npb24yLmRlZmF1bHQpKCkpO1xuICAgICAgdGhpcy5hcHAudXNlKCgwLCBfbWV0aG9kT3ZlcnJpZGUyLmRlZmF1bHQpKCkpO1xuICAgICAgdGhpcy5hcHAudXNlKCgwLCBfZXhwcmVzc1N0YXR1c01vbml0b3IyLmRlZmF1bHQpKCkpO1xuXG4gICAgICAvLyBjYXRjaCA0MDQgYW5kIGZvcndhcmQgdG8gZXJyb3IgaGFuZGxlclxuICAgICAgdGhpcy5hcHAudXNlKGZ1bmN0aW9uIChlcnIsIHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIGVyci5zdGF0dXMgPSA0MDQ7XG4gICAgICAgIG5leHQoZXJyKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBlcnJvciBoYW5kbGluZ1xuICAgICAgdGhpcy5hcHAudXNlKCgwLCBfZXJyb3JoYW5kbGVyMi5kZWZhdWx0KSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIHJldHVybiBSb3V0ZXIuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgU2VydmVyXG4gICAgICogQG1ldGhvZCByb3V0ZXNcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncm91dGVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcm91dGVzKCkge1xuICAgICAgLy8gdXNlIHJvdXRlciBtaWRkbGV3YXJlXG4gICAgICB0aGlzLmFwcC51c2UoX2luZGV4LkFwaVJvdXRlcy5wYXRoLCBfaW5kZXguQXBpUm91dGVzLnJvdXRlcik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNlcnZlcjtcbn0oKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.server = exports.app = undefined;\n\nvar _config = __webpack_require__(/*! config */ \"config\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _app = __webpack_require__(/*! ./app */ \"./app.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// create http server\nvar app = exports.app = _app.Server.bootstrap().app;\nvar server = exports.server = app.listen(_config2.default.get('port'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzI2MTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZXJ2ZXIgPSBleHBvcnRzLmFwcCA9IHVuZGVmaW5lZDtcblxudmFyIF9jb25maWcgPSByZXF1aXJlKCdjb25maWcnKTtcblxudmFyIF9jb25maWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29uZmlnKTtcblxudmFyIF9hcHAgPSByZXF1aXJlKCcuL2FwcCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBjcmVhdGUgaHR0cCBzZXJ2ZXJcbnZhciBhcHAgPSBleHBvcnRzLmFwcCA9IF9hcHAuU2VydmVyLmJvb3RzdHJhcCgpLmFwcDtcbnZhciBzZXJ2ZXIgPSBleHBvcnRzLnNlcnZlciA9IGFwcC5saXN0ZW4oX2NvbmZpZzIuZGVmYXVsdC5nZXQoJ3BvcnQnKSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./routes/atm/atm.controller.js":
/*!**************************************!*\
  !*** ./routes/atm/atm.controller.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NoteUnavailableException = function (_Error) {\n  _inherits(NoteUnavailableException, _Error);\n\n  function NoteUnavailableException() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, NoteUnavailableException);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NoteUnavailableException.__proto__ || Object.getPrototypeOf(NoteUnavailableException)).call.apply(_ref, [this].concat(args))), _this), _this.message = 'NoteUnavailableException', _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return NoteUnavailableException;\n}(Error);\n\nvar InvalidArgumentException = function (_Error2) {\n  _inherits(InvalidArgumentException, _Error2);\n\n  function InvalidArgumentException() {\n    var _ref2;\n\n    var _temp2, _this2, _ret2;\n\n    _classCallCheck(this, InvalidArgumentException);\n\n    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = InvalidArgumentException.__proto__ || Object.getPrototypeOf(InvalidArgumentException)).call.apply(_ref2, [this].concat(args))), _this2), _this2.message = 'InvalidArgumentException', _temp2), _possibleConstructorReturn(_this2, _ret2);\n  }\n\n  return InvalidArgumentException;\n}(Error);\n\nvar ATMController = exports.ATMController = function () {\n  function ATMController() {\n    _classCallCheck(this, ATMController);\n\n    this.notes = [100, 50, 20, 10];\n  }\n\n  _createClass(ATMController, [{\n    key: 'setNotes',\n    value: function setNotes(notes) {\n      if (Array.isArray(notes)) {\n        this.notes = notes;\n      }\n    }\n  }, {\n    key: 'withdraw',\n    value: function withdraw(value) {\n      if (!value) {\n        return [];\n      } else if (value % 10 !== 0) {\n        throw new NoteUnavailableException();\n      } else if (value < 0) {\n        throw new InvalidArgumentException();\n      }\n\n      return this.notes.reduce(function (acc, note) {\n        if (value >= note) {\n          var n = Math.floor(value / note);\n          value -= n * note;\n          return acc.concat(new Array(n).fill(note));\n        }\n        return acc;\n      }, []);\n    }\n  }]);\n\n  return ATMController;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvYXRtL2F0bS5jb250cm9sbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcm91dGVzL2F0bS9hdG0uY29udHJvbGxlci5qcz9hODE0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTm90ZVVuYXZhaWxhYmxlRXhjZXB0aW9uID0gZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHMoTm90ZVVuYXZhaWxhYmxlRXhjZXB0aW9uLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIE5vdGVVbmF2YWlsYWJsZUV4Y2VwdGlvbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90ZVVuYXZhaWxhYmxlRXhjZXB0aW9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBOb3RlVW5hdmFpbGFibGVFeGNlcHRpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOb3RlVW5hdmFpbGFibGVFeGNlcHRpb24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5tZXNzYWdlID0gJ05vdGVVbmF2YWlsYWJsZUV4Y2VwdGlvbicsIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgcmV0dXJuIE5vdGVVbmF2YWlsYWJsZUV4Y2VwdGlvbjtcbn0oRXJyb3IpO1xuXG52YXIgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uID0gZnVuY3Rpb24gKF9FcnJvcjIpIHtcbiAgX2luaGVyaXRzKEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiwgX0Vycm9yMik7XG5cbiAgZnVuY3Rpb24gSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uKCkge1xuICAgIHZhciBfcmVmMjtcblxuICAgIHZhciBfdGVtcDIsIF90aGlzMiwgX3JldDI7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uKTtcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQyID0gKF90ZW1wMiA9IChfdGhpczIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZjIgPSBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24pKS5jYWxsLmFwcGx5KF9yZWYyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzMiksIF90aGlzMi5tZXNzYWdlID0gJ0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbicsIF90ZW1wMiksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzMiwgX3JldDIpO1xuICB9XG5cbiAgcmV0dXJuIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbjtcbn0oRXJyb3IpO1xuXG52YXIgQVRNQ29udHJvbGxlciA9IGV4cG9ydHMuQVRNQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQVRNQ29udHJvbGxlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQVRNQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLm5vdGVzID0gWzEwMCwgNTAsIDIwLCAxMF07XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQVRNQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdzZXROb3RlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldE5vdGVzKG5vdGVzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShub3RlcykpIHtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dpdGhkcmF3JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2l0aGRyYXcodmFsdWUpIHtcbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAlIDEwICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBOb3RlVW5hdmFpbGFibGVFeGNlcHRpb24oKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMubm90ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vdGUpIHtcbiAgICAgICAgaWYgKHZhbHVlID49IG5vdGUpIHtcbiAgICAgICAgICB2YXIgbiA9IE1hdGguZmxvb3IodmFsdWUgLyBub3RlKTtcbiAgICAgICAgICB2YWx1ZSAtPSBuICogbm90ZTtcbiAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChuZXcgQXJyYXkobikuZmlsbChub3RlKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQVRNQ29udHJvbGxlcjtcbn0oKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./routes/atm/atm.controller.js\n");

/***/ }),

/***/ "./routes/atm/atm.route.js":
/*!*********************************!*\
  !*** ./routes/atm/atm.route.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ATMRoute = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _index = __webpack_require__(/*! ../../services/index */ \"./services/index.js\");\n\nvar _route = __webpack_require__(/*! ../route */ \"./routes/route.js\");\n\nvar _atm = __webpack_require__(/*! ./atm.controller */ \"./routes/atm/atm.controller.js\");\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * @api {get} /atm ATM endpoint\n * @apiName ATM\n * @apiGroup ATM\n *\n * @apiSuccess {String} type Json Type.\n */\nvar ATMRoute = exports.ATMRoute = function (_BaseRoute) {\n  _inherits(ATMRoute, _BaseRoute);\n\n  /**\n   * @class ATMRoute\n   * @constructor\n   */\n  function ATMRoute() {\n    _classCallCheck(this, ATMRoute);\n\n    var _this = _possibleConstructorReturn(this, (ATMRoute.__proto__ || Object.getPrototypeOf(ATMRoute)).call(this));\n\n    _this.controller = new _atm.ATMController();\n\n    _this.getNotes = _this.getNotes.bind(_this);\n    _this.init();\n    return _this;\n  }\n\n  _createClass(ATMRoute, [{\n    key: 'init',\n    value: function init() {\n      // log\n      _index.logger.info('[ATMRoute] Creating atm route.');\n\n      // add index page route\n      this.router.get('/withdraw/:value', this.getNotes);\n    }\n\n    /**\n     * @class ATMRoute\n     * @method get\n     * @param req {Request} The express Request object.\n     * @param res {Response} The express Response object.\n     * @param next {NextFunction} Execute the next method.\n     */\n\n  }, {\n    key: 'getNotes',\n    value: function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log(req.param);\n                res.json(this.controller.withdraw(req.params.value));\n                next();\n\n              case 3:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getNotes(_x, _x2, _x3) {\n        return _ref.apply(this, arguments);\n      }\n\n      return getNotes;\n    }()\n  }], [{\n    key: 'router',\n    get: function get() {\n      if (!ATMRoute.instance) {\n        ATMRoute.instance = new ATMRoute();\n      }\n      return ATMRoute.instance.router;\n    }\n  }]);\n\n  return ATMRoute;\n}(_route.BaseRoute);\n\nATMRoute.path = '/atm';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvYXRtL2F0bS5yb3V0ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JvdXRlcy9hdG0vYXRtLnJvdXRlLmpzPzkyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5BVE1Sb3V0ZSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoJy4uLy4uL3NlcnZpY2VzL2luZGV4Jyk7XG5cbnZhciBfcm91dGUgPSByZXF1aXJlKCcuLi9yb3V0ZScpO1xuXG52YXIgX2F0bSA9IHJlcXVpcmUoJy4vYXRtLmNvbnRyb2xsZXInKTtcblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIEBhcGkge2dldH0gL2F0bSBBVE0gZW5kcG9pbnRcbiAqIEBhcGlOYW1lIEFUTVxuICogQGFwaUdyb3VwIEFUTVxuICpcbiAqIEBhcGlTdWNjZXNzIHtTdHJpbmd9IHR5cGUgSnNvbiBUeXBlLlxuICovXG52YXIgQVRNUm91dGUgPSBleHBvcnRzLkFUTVJvdXRlID0gZnVuY3Rpb24gKF9CYXNlUm91dGUpIHtcbiAgX2luaGVyaXRzKEFUTVJvdXRlLCBfQmFzZVJvdXRlKTtcblxuICAvKipcbiAgICogQGNsYXNzIEFUTVJvdXRlXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZnVuY3Rpb24gQVRNUm91dGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFUTVJvdXRlKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBVE1Sb3V0ZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFUTVJvdXRlKSkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5jb250cm9sbGVyID0gbmV3IF9hdG0uQVRNQ29udHJvbGxlcigpO1xuXG4gICAgX3RoaXMuZ2V0Tm90ZXMgPSBfdGhpcy5nZXROb3Rlcy5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFUTVJvdXRlLCBbe1xuICAgIGtleTogJ2luaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgLy8gbG9nXG4gICAgICBfaW5kZXgubG9nZ2VyLmluZm8oJ1tBVE1Sb3V0ZV0gQ3JlYXRpbmcgYXRtIHJvdXRlLicpO1xuXG4gICAgICAvLyBhZGQgaW5kZXggcGFnZSByb3V0ZVxuICAgICAgdGhpcy5yb3V0ZXIuZ2V0KCcvd2l0aGRyYXcvOnZhbHVlJywgdGhpcy5nZXROb3Rlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGNsYXNzIEFUTVJvdXRlXG4gICAgICogQG1ldGhvZCBnZXRcbiAgICAgKiBAcGFyYW0gcmVxIHtSZXF1ZXN0fSBUaGUgZXhwcmVzcyBSZXF1ZXN0IG9iamVjdC5cbiAgICAgKiBAcGFyYW0gcmVzIHtSZXNwb25zZX0gVGhlIGV4cHJlc3MgUmVzcG9uc2Ugb2JqZWN0LlxuICAgICAqIEBwYXJhbSBuZXh0IHtOZXh0RnVuY3Rpb259IEV4ZWN1dGUgdGhlIG5leHQgbWV0aG9kLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXROb3RlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXEucGFyYW0pO1xuICAgICAgICAgICAgICAgIHJlcy5qc29uKHRoaXMuY29udHJvbGxlci53aXRoZHJhdyhyZXEucGFyYW1zLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldE5vdGVzKF94LCBfeDIsIF94Mykge1xuICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0Tm90ZXM7XG4gICAgfSgpXG4gIH1dLCBbe1xuICAgIGtleTogJ3JvdXRlcicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoIUFUTVJvdXRlLmluc3RhbmNlKSB7XG4gICAgICAgIEFUTVJvdXRlLmluc3RhbmNlID0gbmV3IEFUTVJvdXRlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gQVRNUm91dGUuaW5zdGFuY2Uucm91dGVyO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBVE1Sb3V0ZTtcbn0oX3JvdXRlLkJhc2VSb3V0ZSk7XG5cbkFUTVJvdXRlLnBhdGggPSAnL2F0bSc7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./routes/atm/atm.route.js\n");

/***/ }),

/***/ "./routes/atm/index.js":
/*!*****************************!*\
  !*** ./routes/atm/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _atm = __webpack_require__(/*! ./atm.route */ \"./routes/atm/atm.route.js\");\n\nObject.keys(_atm).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _atm[key];\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvYXRtL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcm91dGVzL2F0bS9pbmRleC5qcz8xZThhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9hdG0gPSByZXF1aXJlKCcuL2F0bS5yb3V0ZScpO1xuXG5PYmplY3Qua2V5cyhfYXRtKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfYXRtW2tleV07XG4gICAgfVxuICB9KTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./routes/atm/index.js\n");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ApiRoutes = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _index = __webpack_require__(/*! ../services/index */ \"./services/index.js\");\n\nvar _index2 = __webpack_require__(/*! ./atm/index */ \"./routes/atm/index.js\");\n\nvar _route = __webpack_require__(/*! ./route */ \"./routes/route.js\");\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * / route\n *\n * @class User\n */\nvar ApiRoutes = exports.ApiRoutes = function (_BaseRoute) {\n  _inherits(ApiRoutes, _BaseRoute);\n\n  /**\n   * @class ApiRoutes\n   * @constructor\n   */\n  function ApiRoutes() {\n    _classCallCheck(this, ApiRoutes);\n\n    var _this = _possibleConstructorReturn(this, (ApiRoutes.__proto__ || Object.getPrototypeOf(ApiRoutes)).call(this));\n\n    _this.get = _this.get.bind(_this);\n    _this.init();\n    return _this;\n  }\n\n  /**\n   * @class ApiRoute\n   * @method getRouter\n   * @returns {Router}\n   */\n\n\n  _createClass(ApiRoutes, [{\n    key: 'init',\n\n\n    /**\n     * @class ApiRoute\n     * @method init\n     */\n    value: function init() {\n      // log\n      _index.logger.info('[ApiRoute] Creating api routes.');\n\n      // add index page route\n      this.router.get('/', this.get);\n      this.router.use(_index2.ATMRoute.path, _index2.ATMRoute.router);\n    }\n\n    /**\n     * @class ApiRoute\n     * @method index\n     * @param req {Request} The express Request object.\n     * @param res {Response} The express Response object.\n     */\n\n  }, {\n    key: 'get',\n    value: function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                res.status(200).json({ online: true });\n\n              case 1:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function get(_x, _x2) {\n        return _ref.apply(this, arguments);\n      }\n\n      return get;\n    }()\n  }], [{\n    key: 'router',\n    get: function get() {\n      if (!ApiRoutes.instance) {\n        ApiRoutes.instance = new ApiRoutes();\n      }\n      return ApiRoutes.instance.router;\n    }\n  }]);\n\n  return ApiRoutes;\n}(_route.BaseRoute);\n\nApiRoutes.path = '/api';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMvaW5kZXguanM/MGRjNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkFwaVJvdXRlcyA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL2luZGV4Jyk7XG5cbnZhciBfaW5kZXgyID0gcmVxdWlyZSgnLi9hdG0vaW5kZXgnKTtcblxudmFyIF9yb3V0ZSA9IHJlcXVpcmUoJy4vcm91dGUnKTtcblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHsgc3RlcChcIm5leHRcIiwgdmFsdWUpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHN0ZXAoXCJ0aHJvd1wiLCBlcnIpOyB9KTsgfSB9IHJldHVybiBzdGVwKFwibmV4dFwiKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIC8gcm91dGVcbiAqXG4gKiBAY2xhc3MgVXNlclxuICovXG52YXIgQXBpUm91dGVzID0gZXhwb3J0cy5BcGlSb3V0ZXMgPSBmdW5jdGlvbiAoX0Jhc2VSb3V0ZSkge1xuICBfaW5oZXJpdHMoQXBpUm91dGVzLCBfQmFzZVJvdXRlKTtcblxuICAvKipcbiAgICogQGNsYXNzIEFwaVJvdXRlc1xuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIEFwaVJvdXRlcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBpUm91dGVzKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBcGlSb3V0ZXMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBcGlSb3V0ZXMpKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLmdldCA9IF90aGlzLmdldC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBjbGFzcyBBcGlSb3V0ZVxuICAgKiBAbWV0aG9kIGdldFJvdXRlclxuICAgKiBAcmV0dXJucyB7Um91dGVyfVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhBcGlSb3V0ZXMsIFt7XG4gICAga2V5OiAnaW5pdCcsXG5cblxuICAgIC8qKlxuICAgICAqIEBjbGFzcyBBcGlSb3V0ZVxuICAgICAqIEBtZXRob2QgaW5pdFxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgLy8gbG9nXG4gICAgICBfaW5kZXgubG9nZ2VyLmluZm8oJ1tBcGlSb3V0ZV0gQ3JlYXRpbmcgYXBpIHJvdXRlcy4nKTtcblxuICAgICAgLy8gYWRkIGluZGV4IHBhZ2Ugcm91dGVcbiAgICAgIHRoaXMucm91dGVyLmdldCgnLycsIHRoaXMuZ2V0KTtcbiAgICAgIHRoaXMucm91dGVyLnVzZShfaW5kZXgyLkFUTVJvdXRlLnBhdGgsIF9pbmRleDIuQVRNUm91dGUucm91dGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAY2xhc3MgQXBpUm91dGVcbiAgICAgKiBAbWV0aG9kIGluZGV4XG4gICAgICogQHBhcmFtIHJlcSB7UmVxdWVzdH0gVGhlIGV4cHJlc3MgUmVxdWVzdCBvYmplY3QuXG4gICAgICogQHBhcmFtIHJlcyB7UmVzcG9uc2V9IFRoZSBleHByZXNzIFJlc3BvbnNlIG9iamVjdC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUocmVxLCByZXMpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgb25saW5lOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcyk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldChfeCwgX3gyKSB7XG4gICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXQ7XG4gICAgfSgpXG4gIH1dLCBbe1xuICAgIGtleTogJ3JvdXRlcicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoIUFwaVJvdXRlcy5pbnN0YW5jZSkge1xuICAgICAgICBBcGlSb3V0ZXMuaW5zdGFuY2UgPSBuZXcgQXBpUm91dGVzKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gQXBpUm91dGVzLmluc3RhbmNlLnJvdXRlcjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXBpUm91dGVzO1xufShfcm91dGUuQmFzZVJvdXRlKTtcblxuQXBpUm91dGVzLnBhdGggPSAnL2FwaSc7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./routes/index.js\n");

/***/ }),

/***/ "./routes/route.js":
/*!*************************!*\
  !*** ./routes/route.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.BaseRoute = undefined;\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BaseRoute = exports.BaseRoute = function BaseRoute() {\n  _classCallCheck(this, BaseRoute);\n\n  this.router = (0, _express.Router)();\n}\n/**\n * Constructor\n *\n * @class BaseRoute\n * @constructor\n */\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXMvcm91dGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMvcm91dGUuanM/NjJmNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkJhc2VSb3V0ZSA9IHVuZGVmaW5lZDtcblxudmFyIF9leHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQmFzZVJvdXRlID0gZXhwb3J0cy5CYXNlUm91dGUgPSBmdW5jdGlvbiBCYXNlUm91dGUoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCYXNlUm91dGUpO1xuXG4gIHRoaXMucm91dGVyID0gKDAsIF9leHByZXNzLlJvdXRlcikoKTtcbn1cbi8qKlxuICogQ29uc3RydWN0b3JcbiAqXG4gKiBAY2xhc3MgQmFzZVJvdXRlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./routes/route.js\n");

/***/ }),

/***/ "./services/index.js":
/*!***************************!*\
  !*** ./services/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _logger = __webpack_require__(/*! ./logger */ \"./services/logger.js\");\n\nObject.keys(_logger).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _logger[key];\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZpY2VzL2luZGV4LmpzP2E5MTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2xvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XG5cbk9iamVjdC5rZXlzKF9sb2dnZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9sb2dnZXJba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/index.js\n");

/***/ }),

/***/ "./services/logger.js":
/*!****************************!*\
  !*** ./services/logger.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.logger = undefined;\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _winston = __webpack_require__(/*! winston */ \"winston\");\n\nvar _winston2 = _interopRequireDefault(_winston);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PATHS = {\n  LOG: process.cwd() + '/logs',\n  LOG_ERROR: process.cwd() + '/logs/_error.log',\n  LOG_INFO: process.cwd() + '/logs/_info.log'\n};\n// ensure log directory exists\n(function () {\n  return _fs2.default.existsSync(PATHS.LOG) || _fs2.default.mkdirSync(PATHS.LOG);\n})();\n\nvar logger = exports.logger = new _winston2.default.Logger({\n  exitOnError: false,\n  transports: [new _winston2.default.transports.File({\n    colorize: false,\n    filename: PATHS.LOG_INFO,\n    handleExceptions: true,\n    json: true,\n    level: 'info',\n    maxFiles: 2,\n    maxsize: 5242880, // 5MB\n    name: 'info'\n  }), new _winston2.default.transports.File({\n    colorize: false,\n    filename: PATHS.LOG_ERROR,\n    handleExceptions: true,\n    json: true,\n    level: 'error',\n    maxFiles: 2,\n    maxsize: 5242880, // 5MB\n    name: 'error'\n  }), new _winston2.default.transports.Console({\n    colorize: true,\n    handleExceptions: true,\n    json: false,\n    level: 'debug',\n    name: 'debug'\n  })]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9sb2dnZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9sb2dnZXIuanM/NDMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmxvZ2dlciA9IHVuZGVmaW5lZDtcblxudmFyIF9mcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbnZhciBfZnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnMpO1xuXG52YXIgX3dpbnN0b24gPSByZXF1aXJlKCd3aW5zdG9uJyk7XG5cbnZhciBfd2luc3RvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aW5zdG9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFBBVEhTID0ge1xuICBMT0c6IHByb2Nlc3MuY3dkKCkgKyAnL2xvZ3MnLFxuICBMT0dfRVJST1I6IHByb2Nlc3MuY3dkKCkgKyAnL2xvZ3MvX2Vycm9yLmxvZycsXG4gIExPR19JTkZPOiBwcm9jZXNzLmN3ZCgpICsgJy9sb2dzL19pbmZvLmxvZydcbn07XG4vLyBlbnN1cmUgbG9nIGRpcmVjdG9yeSBleGlzdHNcbihmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfZnMyLmRlZmF1bHQuZXhpc3RzU3luYyhQQVRIUy5MT0cpIHx8IF9mczIuZGVmYXVsdC5ta2RpclN5bmMoUEFUSFMuTE9HKTtcbn0pKCk7XG5cbnZhciBsb2dnZXIgPSBleHBvcnRzLmxvZ2dlciA9IG5ldyBfd2luc3RvbjIuZGVmYXVsdC5Mb2dnZXIoe1xuICBleGl0T25FcnJvcjogZmFsc2UsXG4gIHRyYW5zcG9ydHM6IFtuZXcgX3dpbnN0b24yLmRlZmF1bHQudHJhbnNwb3J0cy5GaWxlKHtcbiAgICBjb2xvcml6ZTogZmFsc2UsXG4gICAgZmlsZW5hbWU6IFBBVEhTLkxPR19JTkZPLFxuICAgIGhhbmRsZUV4Y2VwdGlvbnM6IHRydWUsXG4gICAganNvbjogdHJ1ZSxcbiAgICBsZXZlbDogJ2luZm8nLFxuICAgIG1heEZpbGVzOiAyLFxuICAgIG1heHNpemU6IDUyNDI4ODAsIC8vIDVNQlxuICAgIG5hbWU6ICdpbmZvJ1xuICB9KSwgbmV3IF93aW5zdG9uMi5kZWZhdWx0LnRyYW5zcG9ydHMuRmlsZSh7XG4gICAgY29sb3JpemU6IGZhbHNlLFxuICAgIGZpbGVuYW1lOiBQQVRIUy5MT0dfRVJST1IsXG4gICAgaGFuZGxlRXhjZXB0aW9uczogdHJ1ZSxcbiAgICBqc29uOiB0cnVlLFxuICAgIGxldmVsOiAnZXJyb3InLFxuICAgIG1heEZpbGVzOiAyLFxuICAgIG1heHNpemU6IDUyNDI4ODAsIC8vIDVNQlxuICAgIG5hbWU6ICdlcnJvcidcbiAgfSksIG5ldyBfd2luc3RvbjIuZGVmYXVsdC50cmFuc3BvcnRzLkNvbnNvbGUoe1xuICAgIGNvbG9yaXplOiB0cnVlLFxuICAgIGhhbmRsZUV4Y2VwdGlvbnM6IHRydWUsXG4gICAganNvbjogZmFsc2UsXG4gICAgbGV2ZWw6ICdkZWJ1ZycsXG4gICAgbmFtZTogJ2RlYnVnJ1xuICB9KV1cbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/logger.js\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "errorhandler":
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-status-monitor":
/*!*****************************************!*\
  !*** external "express-status-monitor" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-status-monitor");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "method-override":
/*!**********************************!*\
  !*** external "method-override" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });