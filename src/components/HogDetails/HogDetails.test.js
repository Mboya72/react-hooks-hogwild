import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HogDetails from './HogDetails';

describe('<HogDetails />', () => {
  test('it should mount', () => {
    render(<HogDetails />);

    const HogDetails = screen.getByTestId('HogDetails');

    expect(HogDetails).toBeInTheDocument();
  });
});