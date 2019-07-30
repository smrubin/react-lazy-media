import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactLazyload from '../../ReactLazyload';

export class LazyIframe extends Component {
  static propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    src: PropTypes.string.isRequired
  };

  static defaultProps = {
    classes: []
  };

  // Update lazyLoad after first rendering of every iframe
  componentDidMount() {
    ReactLazyload.getInstance().update();
  }

  // Update lazyLoad after re-rendering of every iframe
  componentDidUpdate() {
    ReactLazyload.getInstance().update();
  }

  render() {
    const {src, classes, id} = this.props;
    return <iframe className={classNames('lazy', ...classes)} id={id} data-src={src}></iframe>;
  }
}
