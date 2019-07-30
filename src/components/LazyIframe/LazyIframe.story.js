import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {LazyIframe} from './LazyIframe';
import './LazyIframe.story.css';

storiesOf('Lazy', module)
  .addDecorator(withKnobs)
  .add('LazyIframe', () => {
    return (
      <LazyIframe
        classes={['lazyIframe']}
        src={
          'https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik'
        }
      />
    );
  });
