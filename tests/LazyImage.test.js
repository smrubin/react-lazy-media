import React from 'react';
import renderer from 'react-test-renderer';
import {LazyImage} from '../src/components/LazyImage/LazyImage';

test('LazyImage should require a src prop', () => {
  expect(() => {
    renderer.create(<LazyImage />);
  }).toThrowErrorMatchingSnapshot();
});

test('LazyImage should have default props', () => {
  const component = renderer.create(<LazyImage src={'/image.jpeg'} />);

  const tree = component.toJSON();

  expect(tree.props).toEqual({
    'data-src': '/image.jpeg',
    className: 'lazy'
  });
});

test('LazyImage should render an image with a src', () => {
  const component = renderer.create(<LazyImage src={'/image.jpeg'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyImage should render an image with a src and alt text', () => {
  const component = renderer.create(<LazyImage src={'/image.jpeg'} alt={'My image'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyImage render an image with a low quality image placeholder (lqip)', () => {
  const component = renderer.create(<LazyImage src={'/image.jpeg'} lqip={'/lqip.jpeg'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyImage should have 300px width', () => {
  const component = renderer.create(<LazyImage src={'/image.jpeg'} width={300} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyImage should have 300px height', () => {
  const component = renderer.create(<LazyImage src={'/image.jpeg'} height={300} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyImage should have an id', () => {
  const component = renderer.create(<LazyImage src={'/image.jpeg'} id={'lazyImage'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyImage should have classes', () => {
  const component = renderer.create(<LazyImage src={'/image.jpeg'} classes={['class1', 'class2']} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyImage should have onError', () => {
  const component = renderer.create(<LazyImage src={'/image.jpeg'} onError={console.log('Error!')} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
