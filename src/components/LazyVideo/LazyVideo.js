import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactLazyload from '../../ReactLazyload';
import classNames from 'classnames';

export class LazyVideo extends Component {
  static propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
    controls: PropTypes.bool,
    id: PropTypes.string,
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    poster: PropTypes.string,
    autoplay: PropTypes.bool,
    preload: PropTypes.bool,
    muted: PropTypes.bool,
    loop: PropTypes.bool
  };

  static defaultProps = {
    classes: [],
    controls: true,
    autoplay: false,
    preload: false,
    loop: false,
    muted: true
  };

  // Update lazyLoad after first rendering of every image
  componentDidMount() {
    ReactLazyload.getInstance().update();
  }

  // Update lazyLoad after re-rendering of every image
  componentDidUpdate() {
    ReactLazyload.getInstance().update();
  }

  // TODO - Add dynamic support for other video sources
  render() {
    const {classes, id, controls, width, height, src, poster, autoplay, preload, muted, loop} = this.props;
    return (
      <video
        className={classNames('lazy', ...classes)}
        id={id}
        width={width}
        height={height}
        data-src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        preload={preload ? 'auto' : 'none'}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }
}
