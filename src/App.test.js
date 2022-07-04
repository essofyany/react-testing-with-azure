import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("learn-link");
  expect(linkElement).toBeInTheDocument();
});
test('is link has correct href', () => {
  render(<App />);
  const linkElement = screen.getByTestId("learn-link");
  expect(linkElement.href).toContain("reactjs.org");
});
