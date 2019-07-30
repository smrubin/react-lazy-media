import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactLazyload from '../../ReactLazyload';

export class LazyBackground extends Component {
  static propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    src: PropTypes.string.isRequired
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
    const {classes, id, src} = this.props;
    return (
      <div className={classNames('lazy', ...classes)} id={id} data-bg={`url(${src})`}>
        {this.props.children}
      </div>
    );
  }
}
