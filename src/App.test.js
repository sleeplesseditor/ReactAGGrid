import React from 'react';
import { render } from './testing/custom-render';
import { screen } from '@testing-library/react';
import App from './App';

test('uses React Router and renders the App component as the default page', () => {
  const title = 'React CryptoCoin AG-Grid';
  render(<App />);
  expect(screen.getByText(title)).toBeInTheDocument();
});
