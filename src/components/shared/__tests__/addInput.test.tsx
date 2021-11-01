import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

describe('test add input', () => {
  it('check if is render properly', () => {
    render(<AddInput setTodos={jest.fn()} />);

    expect(screen.getByLabelText('Add todo')).toBeInTheDocument();
  });
  it('check if is render properly', () => {
    render(<AddInput setTodos={jest.fn()} />);
    const input = screen.getByLabelText('Add todo') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    fireEvent.change(input, {
      target: { value: 'complete test' },
    });
    expect(input.value).toBe('complete test');

    fireEvent.click(screen.getByRole('button', { name: 'Add Task' }));
    expect(input.value).toBe('');
  });
});
