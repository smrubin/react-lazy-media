import IntersectionObserverPolyfill from 'intersection-observer';
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  var LazyLoad = require('vanilla-lazyload');
}

export class ReactLazyMedia {
  static instance;

  constructor(selector = '.lazy') {
    if (!window.IntersectionObserver) {
      window.IntersectionObserver = IntersectionObserverPolyfill;
    }

    if (ReactLazyMedia.instance) {
      return ReactLazyMedia.instance;
    }

    const config = {
      elements_selector: selector
    };

    ReactLazyMedia.instance = new LazyLoad(config);
  }

  static getInstance() {
    if (!ReactLazyMedia.instance) {
      new this();
    }

    return ReactLazyMedia.instance;
  }
}
