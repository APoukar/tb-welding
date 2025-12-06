import { Link, styled, Typography, type LinkProps, type TypographyProps } from "@mui/material";
import TbHeadline from "components/TbHeadline";
import { HeadlineContext } from "contexts/HeadlineContext";
import { useContext } from "react";

const ContactTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ContactLink = styled(Link)<LinkProps>(() => ({
    textAlign: 'center',
    width: '100%',
    display: 'block'
}))

export default function Contacts() {
    const { contacts } = useContext(HeadlineContext)
    return (
        <>
            <TbHeadline heading="Kontakt" ref={contacts} />
            <ContactTypography>
                TB Welding - Tomáš Bičej
            </ContactTypography>
            <ContactTypography>
                Ostrava – Poruba
            </ContactTypography>
            <ContactLink href="tel:+420775492685" margin="1% 0 0 0">
                +420 775 492 685
            </ContactLink>
            <ContactLink href="mailto:tbwelding@seznam.cz">
                tbwelding@seznam.cz
            </ContactLink>
            <ContactTypography>
                IČO: 000000000
            </ContactTypography>
            <ContactTypography margin="1% 0 0 0">
                Zakázky po celé ČR - po domluvě
            </ContactTypography>
            <ContactTypography>
                Možnost realizace zakázek i v zahraničí
            </ContactTypography>
        </>
    )
}