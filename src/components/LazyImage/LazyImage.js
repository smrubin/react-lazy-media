import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactLazyload from '../../ReactLazyload';

export class LazyImage extends Component {
  static propTypes = {
    alt: PropTypes.string,
    classes: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
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

  render() {
    const {alt, classes, id, lqip, src, width, height} = this.props;
    return (
      <img
        alt={alt}
        className={classNames('lazy', ...classes)}
        src={lqip}
        data-src={src}
        height={height}
        id={id}
        width={width}
      />
    );
  }
}

export default LazyImage;
