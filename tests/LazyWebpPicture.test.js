import React from 'react';
import renderer from 'react-test-renderer';
import {LazyWebpPicture} from '../src/components/LazyWebpPicture/LazyWebpPicture';

test('LazyWebpPicture should require a src prop', () => {
  expect(() => {
    renderer.create(<LazyWebpPicture />);
  }).toThrowErrorMatchingSnapshot();
});

test('LazyWebpPicture should have default props and children', () => {
  const component = renderer.create(<LazyWebpPicture src={'/image.jpeg'} />);

  const tree = component.toJSON();

  const srcChild = tree.children.shift();

  expect(srcChild.type).toBe('source');

  expect(srcChild.props).toEqual({
    'data-srcset': '/image.jpeg.webp',
    type: 'image/webp'
  });

  const lazyImageChild = tree.children.shift();

  expect(lazyImageChild.type).toBe('img');

  expect(lazyImageChild.props).toMatchObject({
    'data-src': '/image.jpeg',
    className: 'lazy'
  });
});

test('LazyWebpPicture should render an picture with a src', () => {
  const component = renderer.create(<LazyWebpPicture src={'/image.jpeg'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyWebpPicture should render a picture with a src and specified webp src', () => {
  const component = renderer.create(<LazyWebpPicture src={'/image.jpeg'} webp={'/image.webp'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
