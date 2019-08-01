## react-lazy-media

[![npm](https://img.shields.io/npm/v/react-lazy-media.svg)](https://www.npmjs.com/package/react-lazy-media)
[![Build Status](https://travis-ci.com/smrubin/react-lazy-media.svg?branch=master)](https://travis-ci.com/smrubin/react-lazy-media)
[![GitHub license](https://img.shields.io/github/license/smrubin/react-lazy-media.svg)](https://github.com/smrubin/react-lazy-media/blob/master/LICENSE)

Lazy load image, picture, video, and iframe media React components. react-lazy-media uses [vanilla-lazyload](https://github.com/verlok/lazyload) under the hood to handle lazy loading.

Polyfilled with the [Intersection Observer Polyfill](https://www.npmjs.com/package/intersection-observer)

### Installation and Usage:

```
npm i -S react-lazy-media
```

#### Include the Component:

```
import React from 'react'
import { LazyImage } from 'react-lazy-media'

class Component extends React.Component {

  render() {
    return (
      <LazyImage
        classes={['myLazyImage']}
        src={'./hero.png'}
      />
    );
  }
}
```

You can import `LazyImage` `LazyVideo` `LazyIframe` `LazyBackground` `LazyWebpPicture` respectively.

### Component Examples

Every component has `id` and `classes` as props to pass down to the media element.

#### LazyImage

Lazy load an image.

#### LazyBackground

Lazy load a background image on a div.

#### LazyVideo

Lazy load an HTML5 video.

#### LazyIframe

Lazy load an IFrame.

#### LazyWebpPicture

Lazy load an HTML5 picture that attempts to load a Webp format of an image.

#### Todo

[] Add tests
[] Add code example for each component in readme
