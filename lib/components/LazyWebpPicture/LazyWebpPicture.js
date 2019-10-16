"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyWebpPicture = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ReactLazyMedia = require("../../ReactLazyMedia");

var _LazyImage = require("../LazyImage/LazyImage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LazyWebpPicture =
/*#__PURE__*/
function (_Component) {
  _inherits(LazyWebpPicture, _Component);

  function LazyWebpPicture(props) {
    var _this;

    _classCallCheck(this, LazyWebpPicture);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LazyWebpPicture).call(this, props));
    _this.state = {
      errored: false
    };
    return _this;
  }

  _createClass(LazyWebpPicture, [{
    key: "componentDidMount",
    // Update lazyLoad after first rendering of every image
    value: function componentDidMount() {
      _ReactLazyMedia.ReactLazyMedia.getInstance();
    } // Fallback to src if webp failed to load.

  }, {
    key: "onError",
    value: function onError() {
      if (!this.state.errored) {
        this.setState({
          srcSet: this.props.src,
          errored: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var webp = this.props.webp || "".concat(this.props.src, ".webp");
      var type = this.state.errored ? '' : 'image/webp';
      return _react["default"].createElement("picture", null, _react["default"].createElement("source", {
        type: type,
        "data-srcset": webp,
        srcSet: this.state.srcSet
      }), _react["default"].createElement(_LazyImage.LazyImage, _objectSpread({}, this.props, {
        onError: this.onError.bind(this)
      })));
    }
  }]);

  return LazyWebpPicture;
}(_react.Component);

exports.LazyWebpPicture = LazyWebpPicture;

_defineProperty(LazyWebpPicture, "propTypes", {
  alt: _propTypes["default"].string,
  classes: _propTypes["default"].arrayOf(_propTypes["default"].string),
  id: _propTypes["default"].string,
  src: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  webp: _propTypes["default"].string,
  lqip: _propTypes["default"].string // Low-quality image placeholder

});

_defineProperty(LazyWebpPicture, "defaultProps", {
  classes: []
});