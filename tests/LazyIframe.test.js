import React from 'react';
import renderer from 'react-test-renderer';
import {LazyIframe} from '../src/components/LazyIframe/LazyIframe';

test('LazyIframe should require a src prop', () => {
  expect(() => {
    renderer.create(<LazyIframe />);
  }).toThrowErrorMatchingSnapshot();
});

test('LazyIframe should have default props', () => {
  const component = renderer.create(<LazyIframe src={'/page.html'} />);

  const tree = component.toJSON();

  expect(tree.props).toEqual({
    'data-src': '/page.html',
    className: 'lazy'
  });
});

test('LazyIframe should render a iframe with a src', () => {
  const component = renderer.create(<LazyIframe src={'/page.html'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyIframe should have an id', () => {
  const component = renderer.create(<LazyIframe src={'/page.html'} id={'lazyIframe'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('LazyIframe should have classes', () => {
  const component = renderer.create(<LazyIframe src={'/page.html'} classes={['class1', 'class2']} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
