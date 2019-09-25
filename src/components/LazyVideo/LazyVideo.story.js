import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import {LazyVideo} from './LazyVideo';
import './LazyVideo.story.css';

storiesOf('Lazy', module)
  .addDecorator(withKnobs)
  .add('LazyVideo mp4 without poster', () => {
    return (
      <LazyVideo
        classes={['lazyVideo']}
        src={
          'https://d2v9y0dukr6mq2.cloudfront.net/video/preview/Btw9Lp04ipguag6m/videoblocks-puppies-of-a-golden-retriever-are-playing-in-the-park_h2uzyqqaz__SB_PM.mp4'
        }
      />
    );
  })
  .add('LazyVideo mp4 with poster', () => {
    return (
      <LazyVideo
        classes={['lazyVideo']}
        src={
          'https://d2v9y0dukr6mq2.cloudfront.net/video/preview/Btw9Lp04ipguag6m/videoblocks-puppies-of-a-golden-retriever-are-playing-in-the-park_h2uzyqqaz__SB_PM.mp4'
        }
        poster={'http://placekitten.com/200/300'}
        preload={false}
        height={300}
        width={300}
      />
    );
  })
  .add('LazyVideo webm with poster', () => {
    return (
      <LazyVideo
        classes={['lazyVideo']}
        src={'https://d1ow200m9i3wyh.cloudfront.net/videos/MP_BG_Video_06.webm'}
        poster={'http://placekitten.com/200/300'}
        preload={false}
      />
    );
  });
