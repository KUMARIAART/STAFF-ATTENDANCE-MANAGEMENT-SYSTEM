import { render, cleanup } from '@testing-library/react';
import React from 'react';
import App from './App';

afterEach(cleanup)
it('should render correctly', () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});

