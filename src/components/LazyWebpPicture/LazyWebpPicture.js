import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactLazyload from '../../ReactLazyload';
import {LazyImage} from '../LazyImage/LazyImage';

export class LazyWebpPicture extends Component {
  static propTypes = {
    alt: PropTypes.string,
    classes: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    webp: PropTypes.string,
    lqip: PropTypes.string // Low-quality image placeholder
  };

  static defaultProps = {
    classes: []
  };

  // Update lazyLoad after first rendering of every image
  componentDidMount() {
    ReactLazyload.getInstance().update();
  }

  // Update lazyLoad after re-rendering of every image
  componentDidUpdate() {
    ReactLazyload.getInstance().update();
  }

  // TODO - Don't try to load the webp image if the file does not exist.
  render() {
    const webp = this.props.webp || `${this.props.src}.webp`;

    return (
      <picture>
        <source type="image/webp" data-srcset={webp} />
        <LazyImage {...this.props} />
      </picture>
    );
  }
}
