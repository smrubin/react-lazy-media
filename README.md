## react-lazy-media

[![npm](https://img.shields.io/npm/v/react-lazy-media.svg)](https://www.npmjs.com/package/react-lazy-media)
[![Build Status](https://travis-ci.com/smrubin/react-lazy-media.svg?branch=master)](https://travis-ci.com/smrubin/react-lazy-media)
[![GitHub license](https://img.shields.io/github/license/smrubin/react-lazy-media.svg)](https://github.com/smrubin/react-lazy-media/blob/master/LICENSE)

Lazy load image, picture, video, and iframe media React components. react-lazy-media uses [vanilla-lazyload](https://github.com/verlok/lazyload) under the hood to handle lazy loading.

Polyfilled with the [Intersection Observer Polyfill](https://www.npmjs.com/package/intersection-observer)

<table>
  <tr>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/chrome/chrome_48x48.png" alt="Chrome"><br>
      ✔
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/firefox/firefox_48x48.png" alt="Firefox"><br>
      ✔
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/safari/safari_48x48.png" alt="Safari"><br>
      6+
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/edge/edge_48x48.png" alt="Edge"><br>
      ✔
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/archive/internet-explorer_7-8/internet-explorer_7-8_48x48.png" alt="Internet Explorer"><br>
      10+
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/opera/opera_48x48.png" alt="Opera"><br>
      ✔
    </td>
    <td align="center">
      <img src="https://raw.github.com/alrra/browser-logos/39.2.2/src/android/android_48x48.png" alt="Android"><br>
      4.4+
    </td>
  </tr>
</table>

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

#### Common

The following APIs are shared by every component.

| Name    | Type          | Default | Description                                                                              |
| ------- | ------------- | ------- | ---------------------------------------------------------------------------------------- |
| classes | Array<string> | `[]`    | Additional CSS classes (in addition to 'lazy' for the media element (img, video, iframe) |
| id      | string        | `''`    | id for the media element (img, video, iframe)                                            |

#### LazyImage

Lazy loads an image element. Supports loading a low-quality image placeholder.

| Name   | Type              | Default          | Description                                                                                          |
| ------ | ----------------- | ---------------- | ---------------------------------------------------------------------------------------------------- |
| alt    | string            | `[]`             | Alt text for the img                                                                                 |
| src    | string (Required) | `N/A - Required` | src for the img                                                                                      |
| width  | string            | `''`             | width for the img                                                                                    |
| height | string            | `''`             | height for the img                                                                                   |
| lqip   | string            | `''`             | src for a loq quality image placeholder. will always be loaded and then replaced with actual src img |

#### LazyBackground

Lazy loads a background image for a div.

| Name | Type              | Default          | Description                  |
| ---- | ----------------- | ---------------- | ---------------------------- |
| src  | string (Required) | `N/A - Required` | src for the background image |

#### LazyVideo

Lazy loads an HTML5 video.

| Name     | Type              | Default          | Description                                        |
| -------- | ----------------- | ---------------- | -------------------------------------------------- |
| src      | string (Required) | `N/A - Required` | src for the video                                  |
| width    | string            | `''`             | width for the video                                |
| height   | string            | `''`             | height for the video                               |
| poster   | string            | `''`             | poster image for the video (before it loads/plays) |
| controls | bool              | `true`           | whether or not the video should display controls   |
| preload  | bool              | `false`          | whether or not the video should be preloaded       |
| autoplay | bool              | `false`          | whether or not the video should autoplay           |
| loop     | bool              | `false`          | whether or not the video should loop               |
| muted    | bool              | `false`          | whether or not the video should be muted           |

#### LazyIframe

Lazy loads an iframe.

| Name | Type              | Default          | Description        |
| ---- | ----------------- | ---------------- | ------------------ |
| src  | string (Required) | `N/A - Required` | src for the iframe |

#### LazyWebpPicture

Lazy loads an HTML5 picture. Attempts to load a Webp version of the asset first, and falls back to original src. Most of the props are passed down to the `LazyImage` child of this component.

| Name   | Type              | Default          | Description                                                                                          |
| ------ | ----------------- | ---------------- | ---------------------------------------------------------------------------------------------------- |
| alt    | string            | `[]`             | Alt text for the img                                                                                 |
| src    | string (Required) | `N/A - Required` | src for the img                                                                                      |
| width  | string            | `''`             | width for the img                                                                                    |
| height | string            | `''`             | height for the img                                                                                   |
| lqip   | string            | `''`             | src for a loq quality image placeholder. will always be loaded and then replaced with actual src img |
| webp   | string            | `''`             | The webp src for the img. Will suffix the src prop of not provided (e.g. hero.png => hero.png.webp)  |

#### Todo

[] Add more configurable component: LazyPicture
[] Add code example for each component in readme
