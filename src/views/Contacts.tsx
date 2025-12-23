import { Link, styled, type LinkProps } from "@mui/material";
import TbHeadline from "components/TbHeadline";
import { CenteredBodyTypography } from "components/TbTypography";
import { HeadlineContext } from "contexts/HeadlineContext";
import { useContext } from "react";

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
            <CenteredBodyTypography>
                TB Welding - Tomáš Bičej
            </CenteredBodyTypography>
            <CenteredBodyTypography>
                Ostrava – Poruba
            </CenteredBodyTypography>
            <ContactLink href="tel:+420775492685" margin="1% 0 0 0">
                +420 775 492 685
            </ContactLink>
            <ContactLink href="mailto:tbwelding@seznam.cz">
                tbwelding@seznam.cz
            </ContactLink>
            <CenteredBodyTypography>
                IČO: 000000000
            </CenteredBodyTypography>
            <CenteredBodyTypography margin="1% 0 0 0">
                Zakázky po celé ČR - po domluvě
            </CenteredBodyTypography>
            <CenteredBodyTypography>
                Možnost realizace zakázek i v zahraničí
            </CenteredBodyTypography>
        </>
    )
}