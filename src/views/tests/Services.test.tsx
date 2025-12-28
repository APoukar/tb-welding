import { render, screen } from '@testing-library/react';
import { HeadlineContext } from 'contexts/HeadlineContext';
import { GetHeadlineContextMock } from 'utils/TestUtils';
import Services from 'views/Services';
import { vi } from 'vitest';

vi.mock('@ppasmik/react-scroll-trigger', () => ({
  default: ({ children, onEnter }: any) => {
    if (onEnter) {
      onEnter();
    }
    return children;
  }
}));

describe('Services', () => {
  it('renders main heading and intro paragraph', () => {
    const servicesRef = { current: null } as any;
    render(
      <HeadlineContext.Provider value={GetHeadlineContextMock({ services: servicesRef })}>
        <Services />
      </HeadlineContext.Provider>
    );
    expect(screen.getByText(/Služby/)).toBeInTheDocument();
    expect(screen.getByText(/Kontroly provádím jako certifikovaný technik NDT Level II/)).toBeInTheDocument();
  });

  it('renders all service headings', () => {
    const servicesRef = { current: null } as any;
    render(
      <HeadlineContext.Provider value={GetHeadlineContextMock({ services: servicesRef })}>
        <Services />
      </HeadlineContext.Provider>
    );
    expect(screen.getByText(/UT – Ultrazvuková kontrola/)).toBeInTheDocument();
    expect(screen.getByText(/MT – Magnetická prášková metoda/)).toBeInTheDocument();
    expect(screen.getByText(/VT – Vizuální kontrola/)).toBeInTheDocument();
    expect(screen.getByText(/Svářečské práce/)).toBeInTheDocument();
  });

  it('renders images with accessible alt text for UT', () => {
    const servicesRef = { current: null } as any;
    render(
      <HeadlineContext.Provider value={GetHeadlineContextMock({ services: servicesRef })}>
        <Services />
      </HeadlineContext.Provider>
    );
    const image = screen.getByRole('img', { name: /Ultrazvuková kontrola/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Ultrazvuková kontrola');
    expect(image).toHaveAttribute('src');
  });

  it('renders images with accessible alt text for MT', () => {
    const servicesRef = { current: null } as any;
    render(
      <HeadlineContext.Provider value={GetHeadlineContextMock({ services: servicesRef })}>
        <Services />
      </HeadlineContext.Provider>
    );
    const image = screen.getByRole('img', { name: /Magnetická prášková metoda/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Magnetická prášková metoda');
    expect(image).toHaveAttribute('src');
  });

  it('renders images with accessible alt text for VT', () => {
    const servicesRef = { current: null } as any;
    render(
      <HeadlineContext.Provider value={GetHeadlineContextMock({ services: servicesRef })}>
        <Services />
      </HeadlineContext.Provider>
    );
    const image = screen.getByRole('img', { name: /Vizuální kontrola/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Vizuální kontrola');
    expect(image).toHaveAttribute('src');
  });

  it('renders list items for UT section', () => {
    const servicesRef = { current: null } as any;
    render(
      <HeadlineContext.Provider value={GetHeadlineContextMock({ services: servicesRef })}>
        <Services />
      </HeadlineContext.Provider>
    );
    expect(screen.getByText(/měření tloušťky materiálu/)).toBeInTheDocument();
    expect(screen.getByText(/vnitřní vady svarů/)).toBeInTheDocument();
  });
});