import { render, screen } from '@testing-library/react'
import Welcome from 'views/Welcome'

describe('Welcome', () => {
  it('renders hero headings', () => {
    render(<Welcome />);
    expect(screen.getByText(/NDT ZKOUŠKY/)).toBeInTheDocument();
    expect(screen.getByText(/SVAŘOVÁNÍ/)).toBeInTheDocument();
    expect(screen.getByText(/VT • MT • UT/)).toBeInTheDocument();
    expect(screen.getByText(/TB Welding/)).toBeInTheDocument();
  })

  it('renders background image with accessible alt', () => {
    render(<Welcome />);
    const img = screen.getByRole('img', { name: /welding/i });
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('alt')).toBe('welding');
  })
})