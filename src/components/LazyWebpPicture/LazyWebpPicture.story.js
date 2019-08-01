import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {LazyWebpPicture} from './LazyWebpPicture';
import './LazyWebpPicture.story.css';
import png from './Hero.png';
import webp from './Hero.png.webp';
import lqip from './LQIP.jpeg';

storiesOf('Lazy', module)
  .addDecorator(withKnobs)
  .add('LazyWebpPicture', () => {
    return <LazyWebpPicture classes={['lazyWebpPicture']} src={png} webp={webp} lqip={lqip} />;
  });
