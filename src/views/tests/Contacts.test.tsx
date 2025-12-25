import { render, screen } from '@testing-library/react';
import { HeadlineContext } from 'contexts/HeadlineContext';
import Contacts from 'views/Contacts';

describe('Contacts', () => {
    it('renders heading and contact lines', () => {
        const contactsRef = { current: null } as any;
        render(
            <HeadlineContext.Provider value={{
                contacts: contactsRef,
                aboutMe: null,
                services: null
            }}>
                <Contacts />
            </HeadlineContext.Provider>
        );
        expect(screen.getByText(/Kontakt/)).toBeInTheDocument();
        expect(screen.getByText(/TB Welding - Tomáš Bičej/)).toBeInTheDocument();
        expect(screen.getByText(/Ostrava/)).toBeInTheDocument();
        expect(screen.getByText(/IČO:/)).toBeInTheDocument();
        expect(screen.getByText(/Zakázky po celé ČR/)).toBeInTheDocument();
    });

    it('renders phone and email links with correct hrefs', () => {
        const contactsRef = { current: null } as any;
        render(
            <HeadlineContext.Provider value={{
                contacts: contactsRef,
                aboutMe: null,
                services: null
            }}>
                <Contacts />
            </HeadlineContext.Provider>
        );
        const phone = screen.getByRole('link', { name: '+420 775 492 685' });
        expect(phone).toHaveAttribute('href', 'tel:+420775492685');
        const email = screen.getByRole('link', { name: 'tbwelding@seznam.cz' });
        expect(email).toHaveAttribute('href', 'mailto:tbwelding@seznam.cz');
    });
});