import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import ScrollTrigger from "@ppasmik/react-scroll-trigger";
import { LeftBox, MainBox, RightBox } from "components/TbBox";
import TbHeadline from "components/TbHeadline";
import { BodyTypography, CenteredBodyTypography, ListHeadline, TbH3, TbH4 } from "components/TbTypography";
import { HeadlineContext } from "contexts/HeadlineContext";
import { useContext, useState } from "react";
import welding from "assets/welding.jpg"
import ut from "assets/ut.jpg"
import mt from "assets/mt.jpg"
import vt from "assets/vt.jpg"

export default function Services() {
    const [isUTInView, setIsUTInView] = useState(false);
    const [isMTInView, setIsMTInView] = useState(false);
    const [isVTInView, setIsVTInView] = useState(false);
    const [isWeldingInView, setIsWeldingInView] = useState(false);
    const { services } = useContext(HeadlineContext);
    return (
        <>
            <TbHeadline heading="Služby" ref={services} />
            <CenteredBodyTypography margin="auto 10%">
                Kontroly provádím jako certifikovaný technik NDT Level II – multisektor
                dle ČSN EN ISO 9712:2022, v souladu s požadavky norem, projektové dokumentace
                a kontrolních specifikací.
            </CenteredBodyTypography>

            {/* UT – Ultrazvuková kontrola */}
            <ScrollTrigger onEnter={() => setIsUTInView(true)} onExit={() => setIsUTInView(false)}>
                <MainBox padding="4% 0 0 0">
                    <Grow in={isUTInView} timeout={2000}>
                        <LeftBox>
                            <Box padding={3}>
                                <TbH3 variant="h3">UT – Ultrazvuková kontrola</TbH3>
                                <TbH4 variant="h4">Level II</TbH4>
                                <ListHeadline>Rozsah:</ListHeadline>
                                <BodyTypography component="ul">
                                    <BodyTypography component="li">
                                        vnitřní vady svarů (necelistvosti, póry, vměstky)
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        nedokonalé provaření
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        měření tloušťky materiálu
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        vyhodnocení dle norem
                                    </BodyTypography>
                                </BodyTypography>
                                <ListHeadline padding="4% 0 0 0">Použití:</ListHeadline>
                                <BodyTypography component="ul">
                                    <BodyTypography component="li">
                                        plechy, profily, trubky
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        ocelové konstrukce, tlakové i netlakové díly dle dokumentace
                                    </BodyTypography>
                                </BodyTypography>
                            </Box>
                        </LeftBox>
                    </Grow>
                    <Grow in={isUTInView} timeout={3000}>
                        <RightBox>
                            <Box
                                component="img"
                                src={ut}
                                alt="Ultrazvuková kontrola"
                                borderRadius={8}
                                sx={{
                                    width: "100%",
                                    height: { xs: '220px', sm: '300px', md: '360px' },
                                    display: "block",
                                    objectFit: "cover"
                                }}
                            />
                        </RightBox>
                    </Grow>
                </MainBox>
            </ScrollTrigger>

            {/* MT – Magnetická prášková metoda */}
            <ScrollTrigger onEnter={() => setIsMTInView(true)} onExit={() => setIsMTInView(false)}>
                <MainBox padding="4% 0 0 0">
                    <Grow in={isMTInView} timeout={3000}>
                        <LeftBox>
                            <Box
                                component="img"
                                src={mt}
                                alt="Magnetická prášková metoda"
                                borderRadius={8}
                                sx={{
                                    width: "100%",
                                    height: { xs: '220px', sm: '300px', md: '360px' },
                                    display: "block",
                                    objectFit: "cover"
                                }}
                            />
                        </LeftBox>
                    </Grow>
                    <Grow in={isMTInView} timeout={2000}>
                        <RightBox>
                            <Box padding={3}>
                                <TbH3 variant="h3">MT – Magnetická prášková metoda</TbH3>
                                <TbH4 variant="h4">Level II</TbH4>
                                <ListHeadline>Rozsah:</ListHeadline>
                                <BodyTypography component="ul">
                                    <BodyTypography component="li">
                                        trhliny
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        vady svarových spojů
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        povrchové a podpovrchové diskontinuity
                                    </BodyTypography>
                                </BodyTypography>
                                <ListHeadline padding="4% 0 0 0">Použití:</ListHeadline>
                                <BodyTypography component="ul">
                                    <BodyTypography component="li">
                                        svarové spoje
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        základní materiál
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        feromagnetické oceli
                                    </BodyTypography>
                                </BodyTypography>
                            </Box>
                        </RightBox>
                    </Grow>
                </MainBox>
            </ScrollTrigger>

            {/* VT – Vizuální kontrola */}
            <ScrollTrigger onEnter={() => setIsVTInView(true)} onExit={() => setIsVTInView(false)}>
                <MainBox padding="4% 0 0 0">
                    <Grow in={isVTInView} timeout={2000}>
                        <LeftBox>
                            <Box padding={3}>
                                <TbH3 variant="h3">VT – Vizuální kontrola</TbH3>
                                <TbH4 variant="h4">Level II</TbH4>
                                <ListHeadline>Rozsah:</ListHeadline>
                                <BodyTypography component="ul">
                                    <BodyTypography component="li">
                                        vzhled a geometrie svarů
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        povrchové vady
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        značení a shoda s výkresovou dokumentací a normami
                                    </BodyTypography>
                                </BodyTypography>
                                <ListHeadline padding="4% 0 0 0">Použití:</ListHeadline>
                                <BodyTypography component="ul">
                                    <BodyTypography component="li">
                                        svary
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        konstrukční celky
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        montáže a opravy
                                    </BodyTypography>
                                </BodyTypography>
                            </Box>
                        </LeftBox>
                    </Grow>
                    <Grow in={isVTInView} timeout={3000}>
                        <RightBox>
                            <Box
                                component="img"
                                src={vt}
                                alt="Vizuální kontrola"
                                borderRadius={8}
                                sx={{
                                    width: "100%",
                                    height: { xs: '220px', sm: '300px', md: '360px' },
                                    display: "block",
                                    objectFit: "cover"
                                }}
                            />
                        </RightBox>
                    </Grow>
                </MainBox>
            </ScrollTrigger>

            {/* Svářečské práce */}
            <ScrollTrigger onEnter={() => setIsWeldingInView(true)} onExit={() => setIsWeldingInView(false)}>
                <MainBox padding="4% 0 0 0">
                    <Grow in={isWeldingInView} timeout={3000}>
                        <LeftBox>
                            <Box
                                component="img"
                                src={welding}
                                alt="Svařování"
                                borderRadius={8}
                                sx={{
                                    width: "100%",
                                    height: { xs: '220px', sm: '300px', md: '360px' },
                                    display: "block",
                                    objectFit: "cover"
                                }}
                            />
                        </LeftBox>
                    </Grow>
                    <Grow in={isWeldingInView} timeout={2000}>
                        <RightBox>
                            <Box padding={3}>
                                <TbH3 variant="h3">Svářečské práce</TbH3>
                                <TbH4 variant="h4">Svařování dle EN ISO 9606-1 – metody 111 a 135</TbH4>
                                <BodyTypography component="ul">
                                    <BodyTypography component="li">
                                        svařování ocelových konstrukcí dle výkresové dokumentace
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        zakázková výroba a úpravy svařenců
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        montáže a opravy ocelových konstrukcí
                                    </BodyTypography>
                                    <BodyTypography component="li">
                                        práce na stavbách, mostních objektech a průmyslových celcích
                                    </BodyTypography>
                                </BodyTypography>
                            </Box>
                        </RightBox>
                    </Grow>
                </MainBox>
            </ScrollTrigger>
        </>
    )
}