import LazyLoad from 'vanilla-lazyload/dist/lazyload.esm.js';

export default class ReactLazyload {
  static instance;

  constructor(selector = '.lazy') {
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
