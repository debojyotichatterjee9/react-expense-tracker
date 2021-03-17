import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Random Content', () => {
  render(<App />);
  const linkElement = screen.getByText(/React App Page/i);
  expect(linkElement).toBeInTheDocument();
});
