import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactLazyMedia} from '../../ReactLazyMedia';

export class LazyImage extends Component {
  static propTypes = {
    alt: PropTypes.string,
    classes: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    lqip: PropTypes.string, // Low-quality image placeholder
    onError: PropTypes.func
  };

  static defaultProps = {
    classes: []
  };

  componentDidMount() {
    ReactLazyMedia.getInstance();
  }

  render() {
    const {alt, classes, id, lqip, src, width, height, onError} = this.props;
    return (
      <img
        alt={alt}
        className={classNames('lazy', ...classes)}
        src={lqip}
        data-src={src}
        height={height}
        id={id}
        width={width}
        onError={onError}
      />
    );
  }
}
