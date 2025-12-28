import { render, screen } from '@testing-library/react';
import { HeadlineContext } from 'contexts/HeadlineContext';
import { GetHeadlineContextMock } from 'utils/TestUtils';
import Qualification from 'views/Qualification';

describe('Qualification', () => {
  it('renders main heading and intro text', () => {
    const qualificationRef = { current: null } as any;
    render(
      <HeadlineContext.Provider value={GetHeadlineContextMock({ qualification: qualificationRef })}>
        <Qualification />
      </HeadlineContext.Provider>
    );
    expect(screen.getByText(/Kvalifikace/)).toBeInTheDocument();
    expect(screen.getByText(/Platné certifikáty a svářečské průkazy jsou k dispozici na vyžádání/)).toBeInTheDocument();
  });

  it('renders NDT and welding qualification sections and example items', () => {
    const qualificationRef = { current: null } as any;
    render(
      <HeadlineContext.Provider value={GetHeadlineContextMock({ qualification: qualificationRef })}>
        <Qualification />
      </HeadlineContext.Provider>
    );
    expect(screen.getByText(/NDT certifikace/)).toBeInTheDocument();
    expect(screen.getByText(/Svářečské kvalifikace/)).toBeInTheDocument();
    expect(screen.getByText(/EN ISO 9712:2022 – UT Level II/)).toBeInTheDocument();
    expect(screen.getByText(/111 – svařování obalenou elektrodou/)).toBeInTheDocument();
  });

  it('attaches provided ref to the headline element', () => {
    const qualificationRef = { current: null } as any;
    render(
      <HeadlineContext.Provider value={GetHeadlineContextMock({ qualification: qualificationRef })}>
        <Qualification />
      </HeadlineContext.Provider>
    );
    expect(qualificationRef.current).toBeTruthy();
    expect(qualificationRef.current).toBeInstanceOf(HTMLDivElement);
  });
});