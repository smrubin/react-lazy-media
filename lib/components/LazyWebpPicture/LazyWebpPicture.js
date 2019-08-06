'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.LazyWebpPicture = void 0;

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _ReactLazyload = _interopRequireDefault(require('../../ReactLazyload'));

var _LazyImage = require('../LazyImage/LazyImage');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj['default'] = obj;
    return newObj;
  }
}

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {value: subClass, writable: true, configurable: true}
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}

var LazyWebpPicture =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(LazyWebpPicture, _Component);

    function LazyWebpPicture() {
      _classCallCheck(this, LazyWebpPicture);

      return _possibleConstructorReturn(this, _getPrototypeOf(LazyWebpPicture).apply(this, arguments));
    }

    _createClass(LazyWebpPicture, [
      {
        key: 'componentDidMount',
        // Update lazyLoad after first rendering of every image
        value: function componentDidMount() {
          _ReactLazyload['default'].getInstance().update();
        } // Update lazyLoad after re-rendering of every image
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          _ReactLazyload['default'].getInstance().update();
        } // TODO - Don't try to load the webp image if the file does not exist.
      },
      {
        key: 'render',
        value: function render() {
          var webp = this.props.webp || ''.concat(this.props.src, '.webp');
          return _react['default'].createElement(
            'picture',
            null,
            _react['default'].createElement('source', {
              type: 'image/webp',
              'data-srcset': webp
            }),
            _react['default'].createElement(_LazyImage.LazyImage, this.props)
          );
        }
      }
    ]);

    return LazyWebpPicture;
  })(_react.Component);

exports.LazyWebpPicture = LazyWebpPicture;

_defineProperty(LazyWebpPicture, 'propTypes', {
  alt: _propTypes['default'].string,
  classes: _propTypes['default'].arrayOf(_propTypes['default'].string),
  id: _propTypes['default'].string,
  src: _propTypes['default'].string.isRequired,
  width: _propTypes['default'].number,
  height: _propTypes['default'].number,
  webp: _propTypes['default'].string,
  lqip: _propTypes['default'].string // Low-quality image placeholder
});

_defineProperty(LazyWebpPicture, 'defaultProps', {
  classes: []
});
