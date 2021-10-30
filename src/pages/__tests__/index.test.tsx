/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../index';

it('check if is render properly', () => {
  render(<Home />);

  const btn = screen.getByText('HELLO WORLD');

  expect(btn).toBeTruthy();
});
