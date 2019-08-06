import React from 'react';
import renderer from 'react-test-renderer';
import {LazyVideo} from '../src/components/LazyVideo/LazyVideo';

test('LazyVideo should require a src prop', () => {
  expect(() => {
    renderer.create(<LazyVideo />);
  }).toThrowErrorMatchingSnapshot();
});

test('LazyVideo should have default props', () => {
  const component = renderer.create(<LazyVideo src={'/video.mp4'} />);

  const tree = component.toJSON();

  expect(tree.props).toEqual({
    'data-src': '/video.mp4',
    autoPlay: false,
    controls: true,
    loop: false,
    muted: true,
    preload: 'none',
    className: 'lazy'
  });

  const child = tree.children.pop();

  expect(child.type).toBe('source');

  expect(child.props).toEqual({
    src: '/video.mp4',
    type: 'video/mp4'
  });
});

test('LazyVideo should render a video with a src', () => {
  const component = renderer.create(<LazyVideo src={'/video.mp4'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyVideo should render a video with a src and poster', () => {
  const component = renderer.create(<LazyVideo src={'/video.mp4'} poster={'/poster.jpg'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyVideo should be preloaded', () => {
  const component = renderer.create(<LazyVideo src={'/video.mp4'} preload={true} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyVideo should not be preloaded', () => {
  const component = renderer.create(<LazyVideo src={'/video.mp4'} preload={false} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyVideo should not be muted', () => {
  const component = renderer.create(<LazyVideo videoUrl={'/video.mp4'} mute={false} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyVideo should not show controls', () => {
  const component = renderer.create(<LazyVideo src={'/video.mp4'} showControls={false} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyVideo should autoplay', () => {
  const component = renderer.create(<LazyVideo src={'/video.mp4'} autoPlay={true} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyVideo should have 300px width', () => {
  const component = renderer.create(<LazyVideo src={'/video.mp4'} width={300} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyVideo should have 300px height', () => {
  const component = renderer.create(<LazyVideo src={'/video.mp4'} height={300} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyVideo should have an id', () => {
  const component = renderer.create(<LazyVideo src={'/video.mp4'} id={'lazyVideo'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyVideo should have classes', () => {
  const component = renderer.create(<LazyVideo src={'/video.mp4'} classes={['class1', 'class2']} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
