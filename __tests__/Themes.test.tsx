'use strict';

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Main } from '../src/screens/MainScreen';

it('renders correctly', () => {
  const tree = renderer.create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();
});
