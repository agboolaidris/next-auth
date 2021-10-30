import { render, screen } from '@testing-library/react';
import Footer from '../footer';

describe('test footer', () => {
  it('test footer', () => {
    render(<Footer value={20}></Footer>);
    //expect(screen.getByText('20 todos')).toBeTruthy();
    expect(screen.getByText(/20 todos/i)).toBeInTheDocument();
  });
  it('test footer for a single task', () => {
    render(<Footer value={1}></Footer>);

    //expect(screen.getByText('1 todo')).toBeInTheDocument();
    expect(screen.getByText(/1 todo/i)).toBeTruthy();
  });
});
// it('test footer for a single task is visible', () => {
//   render(<Footer value={1}></Footer>);

//   //expect(screen.getByText('1 todo')).toBeInTheDocument();
//   expect(screen.getByText('1 todo')).toBeVisible();
// });
// it('test footer for a single task is contain tag', () => {
//   render(<Footer value={1}></Footer>);

//   //expect(screen.getByText('1 todo')).toBeInTheDocument();
//   expect(screen.getByText('1 todo')).toContainHTML('div');
// });
