/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';

describe('home page integration testing', () => {
  it('check if is render properly', () => {
    render(<Home />);
    const input = screen.getByLabelText('Add todo') as HTMLInputElement;
    const button = screen.getByRole('button', { name: 'Add Task' });

    const todos = ['go', 'come'];
    todos.forEach((t) => {
      fireEvent.change(input, {
        target: { value: t },
      });

      fireEvent.click(button);
      const todo = screen.getByText(t);
      expect(todo).toBeInTheDocument();
    });
  });
});
