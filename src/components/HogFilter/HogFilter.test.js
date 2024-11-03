import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HogFilter from './HogFilter';

describe('<HogFilter />', () => {
  test('it should mount', () => {
    render(<HogFilter />);

    const HogFilter = screen.getByTestId('HogFilter');

    expect(HogFilter).toBeInTheDocument();
  });
});