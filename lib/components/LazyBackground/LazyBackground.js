"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyBackground = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ReactLazyMedia = require("../../ReactLazyMedia");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LazyBackground =
/*#__PURE__*/
function (_Component) {
  _inherits(LazyBackground, _Component);

  function LazyBackground() {
    _classCallCheck(this, LazyBackground);

    return _possibleConstructorReturn(this, _getPrototypeOf(LazyBackground).apply(this, arguments));
  }

  _createClass(LazyBackground, [{
    key: "componentDidMount",
    // Update lazyLoad after first rendering of every image
    value: function componentDidMount() {
      _ReactLazyMedia.ReactLazyMedia.getInstance();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          id = _this$props.id,
          src = _this$props.src,
          backgroundClass = _this$props.backgroundClass;
      var css = ".".concat(backgroundClass, ".lazy-bg-loaded {\n                    background: url(\"").concat(src, "\")\n                }");
      return (//TODO: Revisit this to remove the extra dom elements
        _react["default"].createElement("div", null, _react["default"].createElement("style", null, css), _react["default"].createElement("div", {
          className: _classnames["default"].apply(void 0, ['lazy-bg'].concat(_toConsumableArray(classes), [backgroundClass])),
          id: id
        }, this.props.children))
      );
    }
  }]);

  return LazyBackground;
}(_react.Component);

exports.LazyBackground = LazyBackground;

_defineProperty(LazyBackground, "propTypes", {
  classes: _propTypes["default"].arrayOf(_propTypes["default"].string),
  id: _propTypes["default"].string,
  backgroundClass: _propTypes["default"].string.isRequired,
  src: _propTypes["default"].string.isRequired
});

_defineProperty(LazyBackground, "defaultProps", {
  classes: []
});