import IntersectionObserverPolyfill from 'intersection-observer';
import yall from 'yall-js';

export class ReactLazyMedia {
  static instance;

  constructor() {
    if (!window.IntersectionObserver) {
      window.IntersectionObserver = IntersectionObserverPolyfill;
    }

    if (ReactLazyMedia.instance) {
      return ReactLazyMedia.instance;
    }

    const config = {
      threshold: 300
    };

    ReactLazyMedia.instance = yall(config);
  }

  static getInstance() {
    if (!ReactLazyMedia.instance) {
      new this();
    }

    return ReactLazyMedia.instance;
  }
}
