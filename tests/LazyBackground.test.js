import React from 'react';
import renderer from 'react-test-renderer';
import {LazyBackground} from '../src/components/LazyBackground/LazyBackground';

test('LazyBackground should require a src prop', () => {
  expect(() => {
    renderer.create(<LazyBackground />);
  }).toThrowErrorMatchingSnapshot();
});

test('LazyBackground should have default props', () => {
  const component = renderer.create(<LazyBackground src={'/img.jpeg'} />);

  const tree = component.toJSON();

  expect(tree.props).toEqual({
    'data-bg': 'url(/img.jpeg)',
    className: 'lazy'
  });
});

test('LazyBackground should render a div with a background image with a src', () => {
  const component = renderer.create(<LazyBackground src={'/img.jpeg'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyBackground should render children', () => {
  const component = renderer.create(
    <LazyBackground src={'/img.jpeg'}>
      <span>Hello World</span>
    </LazyBackground>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const child = tree.children.pop();
  expect(child.type).toBe('span');
});

test('LazyBackground should have an id', () => {
  const component = renderer.create(<LazyBackground src={'/img.jpeg'} id={'lazyBackground'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyBackground should have classes', () => {
  const component = renderer.create(<LazyBackground src={'/img.jpeg'} classes={['class1', 'class2']} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
