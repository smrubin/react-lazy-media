import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {LazyVideo} from './LazyVideo';
import './LazyVideo.story.css';

storiesOf('Lazy', module)
  .addDecorator(withKnobs)
  .add('LazyVideo', () => {
    return (
      <LazyVideo
        classes={['lazyVideo']}
        src={
          'https://d2v9y0dukr6mq2.cloudfront.net/video/preview/BLOmnPQpWj8vjeh8v/videoblocks-woman-taking-selfie-with-french-bulldog-on-sofa-at-home-girl-technology-animal-beautiful-pet-happy-love-beauty-portrait-puppy-tongue-white-caucasian-cute-fun-young-camera-close-up_hz8kwqmjf__SB_PM.mp4'
        }
      />
    );
  });
