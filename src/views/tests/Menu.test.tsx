import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { HeadlineContext } from 'contexts/HeadlineContext';
import Menu from 'views/Menu';
import { GetHeadlineContextMock } from 'utils/TestUtils';

describe('Menu', () => {
    it('renders menu items and action button', () => {
        render(
            <HeadlineContext.Provider value={GetHeadlineContextMock()}>
                <Menu />
            </HeadlineContext.Provider>
        );

        expect(screen.getByText(/Služby/)).toBeInTheDocument();
        expect(screen.getByText(/O mně/)).toBeInTheDocument();
        expect(screen.getByText(/Kvalifikace/)).toBeInTheDocument();
        expect(screen.getByText(/Kontakt/)).toBeInTheDocument();
        expect(screen.getByText(/Napište mi/)).toBeInTheDocument();
    });

    it('renders mailto link with encoded subject', () => {
        render(
            <HeadlineContext.Provider value={GetHeadlineContextMock()}>
                <Menu />
            </HeadlineContext.Provider>
        );

        const button = screen.getByText(/Napište mi/);
        const anchor = button.closest('a');
        expect(anchor).toBeTruthy();
        expect(anchor).toHaveAttribute('href');
        const href = anchor?.getAttribute('href') || '';
        expect(href).toContain('mailto:tbwelding@seznam.cz');
        expect(href).toContain('subject=');
        expect(href).toContain('Popt%C3%A1vka');
    });

    it('clicking "Služby" calls scrollIntoView on services ref', () => {
        const scrollMock = vi.fn();
        const servicesRef = {
            current: { scrollIntoView: scrollMock }
        } as any;

        render(
            <HeadlineContext.Provider value={GetHeadlineContextMock({ services: servicesRef })}>
                <Menu />
            </HeadlineContext.Provider>
        );

        const servicesItem = screen.getByText(/Služby/);
        fireEvent.click(servicesItem);
        expect(scrollMock).toHaveBeenCalled();
    });

    it('clicking "O mně" calls scrollIntoView on about ref', () => {
        const scrollMock = vi.fn();
        const aboutRef = {
            current: { scrollIntoView: scrollMock }
        } as any;

        render(
            <HeadlineContext.Provider value={GetHeadlineContextMock({ aboutMe: aboutRef })}>
                <Menu />
            </HeadlineContext.Provider>
        );

        const aboutItem = screen.getByText(/O mně/);
        fireEvent.click(aboutItem);
        expect(scrollMock).toHaveBeenCalled();
    });

    it('clicking "Kontakt" calls scrollIntoView on contacts ref', () => {
        const scrollMock = vi.fn();
        const contactsRef = {
            current: { scrollIntoView: scrollMock }
        } as any;

        render(
            <HeadlineContext.Provider value={GetHeadlineContextMock({ contacts: contactsRef })}>
                <Menu />
            </HeadlineContext.Provider>
        );

        const contactItem = screen.getByText(/Kontakt/);
        fireEvent.click(contactItem);
        expect(scrollMock).toHaveBeenCalled();
    });
});