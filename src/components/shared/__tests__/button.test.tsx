import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../button';

it('check if is render properly', () => {
  render(<Button>Submit</Button>);

  expect(screen.getByText('Submit')).toBeInTheDocument();
  expect(screen.getByText('Submit')).toBeTruthy();
});
