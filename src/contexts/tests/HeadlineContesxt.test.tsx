import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { HeadlineContext, HeadlineProvider } from 'contexts/HeadlineContext';

function TestConsumer() {
  const { services, aboutMe, contacts } = useContext(HeadlineContext);
  return (
    <>
      <div data-testid="services">{String(services)}</div>
      <div data-testid="about">{String(aboutMe)}</div>
      <div data-testid="contacts">{String(contacts)}</div>
      <div data-testid="services-current">{String(services?.current)}</div>
    </>
  );
}

describe('HeadlineContext', () => {
  it('provides null defaults when no provider is used', () => {
    render(<TestConsumer />);
    expect(screen.getByTestId('services').textContent).toBe('null');
    expect(screen.getByTestId('about').textContent).toBe('null');
    expect(screen.getByTestId('contacts').textContent).toBe('null');
  });

  it('HeadlineProvider renders children', () => {
    render(
      <HeadlineProvider>
        <div data-testid="child">ok</div>
      </HeadlineProvider>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('HeadlineProvider supplies ref objects with current initially null', () => {
    render(
      <HeadlineProvider>
        <TestConsumer />
      </HeadlineProvider>
    );
    // refs are objects when provided
    expect(screen.getByTestId('services').textContent).toBe('[object Object]');
    expect(screen.getByTestId('about').textContent).toBe('[object Object]');
    expect(screen.getByTestId('contacts').textContent).toBe('[object Object]');
    // current should be null initially
    expect(screen.getByTestId('services-current').textContent).toBe('null');
  });
});