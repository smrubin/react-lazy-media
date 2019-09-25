import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactLazyMedia} from '../../ReactLazyMedia';

export class LazyIframe extends Component {
  static propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    src: PropTypes.string.isRequired
  };

  static defaultProps = {
    classes: []
  };

  componentDidMount() {
    ReactLazyMedia.getInstance();
  }

  render() {
    const {src, classes, id} = this.props;
    return <iframe className={classNames('lazy', ...classes)} id={id} data-src={src}></iframe>;
  }
}
