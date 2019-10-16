"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactLazyMedia = void 0;

var _intersectionObserver = _interopRequireDefault(require("intersection-observer"));

var _yallJs = _interopRequireDefault(require("yall-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReactLazyMedia =
/*#__PURE__*/
function () {
  function ReactLazyMedia() {
    _classCallCheck(this, ReactLazyMedia);

    if (!window.IntersectionObserver) {
      window.IntersectionObserver = _intersectionObserver["default"];
    }

    if (ReactLazyMedia.instance) {
      return ReactLazyMedia.instance;
    }

    var config = {
      threshold: 300
    };
    ReactLazyMedia.instance = (0, _yallJs["default"])(config);
  }

  _createClass(ReactLazyMedia, null, [{
    key: "getInstance",
    value: function getInstance() {
      if (!ReactLazyMedia.instance) {
        new this();
      }

      return ReactLazyMedia.instance;
    }
  }]);

  return ReactLazyMedia;
}();

exports.ReactLazyMedia = ReactLazyMedia;

_defineProperty(ReactLazyMedia, "instance", void 0);