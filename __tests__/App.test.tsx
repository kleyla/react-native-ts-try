import { App } from '../src/app';
import React from 'react';
import { it } from '@jest/globals';
import renderer from 'react-test-renderer';
import 'react-native';

it('renders correctly', () => {
  renderer.create(<App />);
});
