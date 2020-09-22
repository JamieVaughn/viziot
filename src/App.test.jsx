import * as React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Streams List', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Ping Things Streams!/i);
  expect(titleElement).toBeInTheDocument();
});
