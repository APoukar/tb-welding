import { render, screen } from '@testing-library/react';
import Footer from 'views/Footer';

describe('Footer', () => {
    it('renders copyright text with TB Welding', () => {
        render(<Footer />);
        expect(screen.getByText(/TB Welding/)).toBeInTheDocument();
    });

    it('renders author credit', () => {
        render(<Footer />);
        expect(screen.getByText(/Created by Adam Poukar/)).toBeInTheDocument();
    });

    it('displays current year in copyright', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear().toString();
        expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
    });

    it('renders as a footer element', () => {
        render(<Footer />);
        const footer = screen.getByRole('contentinfo');
        expect(footer).toBeInTheDocument();
    });
});
