import IntersectionObserverPolyfill from 'intersection-observer';
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  var LazyLoad = require('vanilla-lazyload');
}

export default class ReactLazyload {
  static instance;

  constructor(selector = '.lazy') {
    if (!window.IntersectionObserver) {
      window.IntersectionObserver = IntersectionObserverPolyfill;
    }

    if (ReactLazyload.instance) {
      return ReactLazyload.instance;
    }

    const config = {
      elements_selector: selector
    };

    ReactLazyload.instance = new LazyLoad(config);
  }

  static getInstance() {
    if (!ReactLazyload.instance) {
      new this();
    }

    return ReactLazyload.instance;
  }
}
