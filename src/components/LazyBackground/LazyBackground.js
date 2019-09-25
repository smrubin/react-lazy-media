import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactLazyMedia} from '../../ReactLazyMedia';

export class LazyBackground extends Component {
  static propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
    backgroundClass: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  };

  static defaultProps = {
    classes: []
  };

  // Update lazyLoad after first rendering of every image
  componentDidMount() {
    ReactLazyMedia.getInstance();
  }

  render() {
    const {classes, id, src, backgroundClass} = this.props;
    const css = `.${backgroundClass}.lazy-bg-loaded {
                    background: url("${src}")
                }`;
    return (
      //TODO: Revisit this to remove the extra dom elements
      <div>
        <style>{css}</style>
        <div className={classNames('lazy-bg', ...classes, backgroundClass)} id={id}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
