'use strict';

import * as Enzyme from 'enzyme';
import { mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Main } from '../src/screens/MainScreen';

// Enzyme.configure({ adapter: new Adapter() });
Enzyme.configure({ adapter: new Adapter() });

it('default light theme', () => {
  const wrapper = mount(<Main />);
  expect(wrapper.html()).toMatchSnapshot();
});

it('change to dark theme should work', () => {
  const wrapper = mount(<Main />);
  wrapper.find('button').simulate('click');
  expect(wrapper.html()).toMatchSnapshot();
});
