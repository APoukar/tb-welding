import { render, screen } from '@testing-library/react';
import { HeadlineContext } from 'contexts/HeadlineContext';
import { GetHeadlineContextMock } from 'utils/TestUtils';
import AboutMe from 'views/AboutMe';
import { vi } from 'vitest';

vi.mock('@ppasmik/react-scroll-trigger', () => ({
  default: ({ children, onEnter }: any) => {
    if (onEnter) {
      onEnter();
    }
    return children;
  }
}));

describe('AboutMe', () => {
  it('renders heading and profile paragraphs', () => {
    const aboutRef = { current: null } as any;
    render(
        <HeadlineContext.Provider value={GetHeadlineContextMock({ aboutMe: aboutRef })}>
        <AboutMe />
      </HeadlineContext.Provider>
    );
    expect(screen.getByText(/O mně/)).toBeInTheDocument();
    expect(screen.getByText(/Jmenuji se Tomáš Bičej/)).toBeInTheDocument();
    expect(screen.getByText(/Zakládám si na kvalitně odvedené práci/)).toBeInTheDocument();
  });

  it('renders image with accessible alt', () => {
    const aboutRef = { current: null } as any;
    render(
        <HeadlineContext.Provider value={GetHeadlineContextMock({ aboutMe: aboutRef })}>
        <AboutMe />
      </HeadlineContext.Provider>
    );
    const img = screen.getByRole('img', { name: /welding/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'welding');
    expect(img).toHaveAttribute('src');
  });
});