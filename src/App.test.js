import { render, cleanup, toMatchSnapshot} from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App component', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app')).toBeInTheDocument();
  });
})