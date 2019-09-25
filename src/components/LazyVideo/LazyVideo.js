import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactLazyMedia} from '../../ReactLazyMedia';
import yall from 'yall-js';

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // var LazyLoad = require('vanilla-lazyload');
}

// document.addEventListener("DOMContentLoaded", function() {
//   yall();
//   console.log("Is this loading?");
// });

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

  // // Update lazyLoad after first rendering of every image
  componentDidMount() {
    ReactLazyMedia.getInstance();
  }
  //
  // // Update lazyLoad after re-rendering of every image
  // componentDidUpdate() {
  //   ReactLazyMedia.getInstance().update();
  // }

  // TODO - Add dynamic support for other video sources
  render() {
    const {classes, id, controls, width, height, src, poster, autoplay, preload, muted, loop} = this.props;
    const mediaType = src.split('.').pop();

    //Only supporting mp4 and webm (for now?)
    if (mediaType !== 'mp4' && mediaType !== 'webm') {
      return null;
    }

    return (
      <video
        className={classNames('lazy', ...classes)}
        id={id}
        width={width}
        height={height}
        data-poster={poster}
        controls={controls}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        preload={preload ? 'auto' : 'none'}
      >
        <source src={src} type={`video/${mediaType}`} />
      </video>
    );
  }
}
