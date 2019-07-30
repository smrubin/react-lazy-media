import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {LazyBackground} from './LazyBackground';
import './LazyBackground.story.css';

storiesOf('Lazy', module)
  .addDecorator(withKnobs)
  .add('LazyBackground', () => {
    return (
      <LazyBackground src={'http://placekitten.com/200/300'} classes={['lazyBackground']}>
        <span>Hello there!</span>
      </LazyBackground>
    );
  });
