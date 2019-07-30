import {configure, addDecorator} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

addDecorator(withKnobs);
addDecorator(centered);

const req = require.context('../src/components', true, /\.?story\.js$/);
const loadStories = () => req.keys().forEach(filename => req(filename));

configure(loadStories, module);
