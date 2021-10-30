import { render, screen } from '@testing-library/react';
import Header from '../header';
it('test header GET', () => {
  render(<Header>Home Page</Header>);
  expect(
    screen.getByRole('heading', { name: 'Home Page' })
  ).toBeInTheDocument();
});

// it('test header FIND', async () => {
//   render(<Header>Landing Page2</Header>);
//   const header = await screen.findByRole('heading', { name: 'Landing Page2' });
//   expect(header).toBeInTheDocument();
// });

// it('test header QUERY', () => {
//   render(<Header>Landing Page</Header>);
//   const header = screen.queryByRole('heading', { name: 'ndie' });
//   expect(header).not.toBeInTheDocument();
// });
// it('test header GETALL', () => {
//   render(<Header>Landing </Header>);
//   const headers = screen.queryAllByRole('heading');
//   expect(headers.length).toBe(2);
// });
