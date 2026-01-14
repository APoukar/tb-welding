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

    it('renders hamburger menu icon', () => {
        render(
            <HeadlineContext.Provider value={GetHeadlineContextMock()}>
                <Menu />
            </HeadlineContext.Provider>
        );

        const hamburgerButton = screen.getByTestId('MenuIcon');
        expect(hamburgerButton).toBeInTheDocument();
    });

    it('opens drawer when hamburger icon is clicked', () => {
        render(
            <HeadlineContext.Provider value={GetHeadlineContextMock()}>
                <Menu />
            </HeadlineContext.Provider>
        );

        const hamburgerButton = screen.getByTestId('MenuIcon').closest('button');
        fireEvent.click(hamburgerButton!);

        const drawer = screen.getByRole('presentation');
        expect(drawer).toBeInTheDocument();
    });

    it('closes drawer when close button is clicked', () => {
        render(
            <HeadlineContext.Provider value={GetHeadlineContextMock()}>
                <Menu />
            </HeadlineContext.Provider>
        );

        const hamburgerButton = screen.getByTestId('MenuIcon').closest('button');
        fireEvent.click(hamburgerButton!);

        const closeButton = screen.getByTestId('CloseIcon').closest('button');
        fireEvent.click(closeButton!);

        expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
    });

    it('drawer contains all menu items', () => {
        render(
            <HeadlineContext.Provider value={GetHeadlineContextMock()}>
                <Menu />
            </HeadlineContext.Provider>
        );

        const hamburgerButton = screen.getByTestId('MenuIcon').closest('button');
        fireEvent.click(hamburgerButton!);

        const drawer = screen.getByRole('presentation');
        expect(drawer).toHaveTextContent('Služby');
        expect(drawer).toHaveTextContent('O mně');
        expect(drawer).toHaveTextContent('Kvalifikace');
        expect(drawer).toHaveTextContent('Kontakt');
    });

    it('closes drawer when menu item is clicked', () => {
        render(
            <HeadlineContext.Provider value={GetHeadlineContextMock()}>
                <Menu />
            </HeadlineContext.Provider>
        );

        const hamburgerButton = screen.getByTestId('MenuIcon').closest('button');
        fireEvent.click(hamburgerButton!);

        const drawer = screen.getByRole('presentation');
        const menuItem = drawer.querySelector('li');
        fireEvent.click(menuItem!);

        expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
    });
});