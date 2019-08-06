import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactLazyload from '../../ReactLazyload';
import {LazyImage} from '../LazyImage/LazyImage';

export class LazyWebpPicture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errored: false
    };
  }

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

  // Fallback to src if webp failed to load.
  onError() {
    if (!this.state.errored) {
      this.setState({
        srcSet: this.props.src,
        errored: true
      });
    }
  }

  render() {
    const webp = this.props.webp || `${this.props.src}.webp`;
    const type = this.state.errored ? '' : 'image/webp';

    return (
      <picture>
        <source type={type} data-srcset={webp} srcSet={this.state.srcSet} />
        <LazyImage {...{...this.props, onError: this.onError.bind(this)}} />
      </picture>
    );
  }
}
