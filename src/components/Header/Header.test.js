import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the Header component', () => {
    const title = 'React CryptoCoin AG-Grid';
    render(<Header />);
    expect(screen.getByText(title)).toBeInTheDocument();
});
