import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders h1 text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/General Kenobi meets Grevious/i);
  expect(textElement).toBeInTheDocument();
})


