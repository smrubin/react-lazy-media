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
    poster: PropTypes.string
  };

  static defaultProps = {
    classes: [],
    controls: true
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
    const {classes, id, controls, width, height, src, poster} = this.props;
    return (
      <video
        className={classNames('lazy', ...classes)}
        id={id}
        controls={controls}
        width={width}
        height={height}
        data-src={src}
        poster={poster}
      ></video>
    );
  }
}
