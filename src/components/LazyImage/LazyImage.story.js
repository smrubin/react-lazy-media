import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {LazyImage} from './LazyImage';
import './LazyImage.story.css';
import lqip from './LQIP.jpeg';

storiesOf('Lazy', module)
  .addDecorator(withKnobs)
  .add('LazyImage', () => {
    return <LazyImage classes={['lazyImage']} src={'http://placekitten.com/200/300'} lqip={lqip} />;
  });
