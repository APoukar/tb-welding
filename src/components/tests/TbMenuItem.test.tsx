import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import TbMenuItem from 'components/TbMenuItem';

describe('MenuItem', () => {
  it('renders button with provided text', () => {
    render(<TbMenuItem text="Služby" ref={null as any} />);
    expect(screen.getByText(/Služby/)).toBeInTheDocument();
  });

  it('clicking calls scrollIntoView when ref.current exists', () => {
    const scrollMock = vi.fn();
    const ref = { current: { scrollIntoView: scrollMock } } as any;
    render(<TbMenuItem text="Služby" ref={ref} />);
    const btn = screen.getByText(/Služby/);
    fireEvent.click(btn);
    expect(scrollMock).toHaveBeenCalled();
  });

  it('clicking does nothing when ref.current is null', () => {
    const refNull = { current: null } as any;
    render(<TbMenuItem text="Služby" ref={refNull} />);
    const btn = screen.getByText(/Služby/);
    expect(() => fireEvent.click(btn)).not.toThrow();
  });
});