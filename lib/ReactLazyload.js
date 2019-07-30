'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _lazyloadEsm = _interopRequireDefault(require('vanilla-lazyload/dist/lazyload.esm.js'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
  } else {
    obj[key] = value;
  }
  return obj;
}

var ReactLazyload =
  /*#__PURE__*/
  (function() {
    function ReactLazyload() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.lazy';

      _classCallCheck(this, ReactLazyload);

      if (ReactLazyload.instance) {
        return ReactLazyload.instance;
      }

      var config = {
        elements_selector: selector
      };
      ReactLazyload.instance = new _lazyloadEsm['default'](config);
    }

    _createClass(ReactLazyload, null, [
      {
        key: 'getInstance',
        value: function getInstance() {
          if (!ReactLazyload.instance) {
            new this();
          }

          return ReactLazyload.instance;
        }
      }
    ]);

    return ReactLazyload;
  })();

exports['default'] = ReactLazyload;

_defineProperty(ReactLazyload, 'instance', void 0);
