import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import ScrollTrigger from "@ppasmik/react-scroll-trigger";
import { LeftBox, MainBox, RightBox, TypographyBox } from "components/TbBox";
import TbHeadline from "components/TbHeadline";
import TbSubHeadline from "components/TbSubHeadline";
import { CenteredBodyTypography } from "components/TbTypography";
import { HeadlineContext } from "contexts/HeadlineContext";
import { useContext, useState } from "react";
import welding from "assets/welding.jpg"
import { Typography } from "@mui/material";

export default function Services() {
    const [isUTInView, setIsUTInView] = useState(false);
    const [isMTInView, setIsMTInView] = useState(false);
    const [isVTInView, setIsVTInView] = useState(false);
    const { services } = useContext(HeadlineContext);
    return (
        <>
            <TbHeadline heading="Služby" ref={services} />
            <CenteredBodyTypography margin="auto 10%">
                Kontroly provádím jako certifikovaný technik NDT Level II – multisektor
                dle ČSN EN ISO 9712:2022, v souladu s požadavky norem, projektové dokumentace
                a kontrolních specifikací.
            </CenteredBodyTypography>

            {/* UT – Ultrazvuková kontrola (Level II) */}
            <ScrollTrigger onEnter={() => setIsUTInView(true)} onExit={() => setIsUTInView(false)}>
                <MainBox padding="4% 0 0 0">
                    <Grow in={isUTInView} timeout={2000}>
                        <LeftBox>
                            <Box padding={3}>
                                <TbSubHeadline heading="UT – Ultrazvuková kontrola (Level II)" />
                                <Typography fontWeight="800">Rozsah:</Typography>
                                <Typography component="ul">
                                    <Typography component="li">
                                        vnitřní vady svarů (necelistvosti, póry, vměstky)
                                    </Typography>
                                    <Typography component="li">
                                        nedokonalé provaření
                                    </Typography>
                                    <Typography component="li">
                                        měření tloušťky materiálu
                                    </Typography>
                                    <Typography component="li">
                                        vyhodnocení dle norem
                                    </Typography>
                                </Typography>
                                <Typography fontWeight="800" padding="4% 0 0 0">Použití:</Typography>
                                <Typography component="ul">
                                    <Typography component="li">
                                        plechy, profily, trubky
                                    </Typography>
                                    <Typography component="li">
                                        ocelové konstrukce, tlakové i netlakové díly dle dokumentace
                                    </Typography>
                                </Typography>
                            </Box>
                        </LeftBox>
                    </Grow>
                    <Grow in={isUTInView} timeout={3000}>
                        <RightBox>
                            <Box
                                component="img"
                                src={welding}
                                alt="welding"
                                borderRadius={8}
                                sx={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                            />
                        </RightBox>
                    </Grow>
                </MainBox>
            </ScrollTrigger>

            {/* MT – Magnetická prášková metoda (Level II) */}
            <ScrollTrigger onEnter={() => setIsMTInView(true)} onExit={() => setIsMTInView(false)}>
                <MainBox padding="4% 0 0 0">
                    <Grow in={isMTInView} timeout={3000}>
                        <LeftBox>
                            <Box
                                component="img"
                                src={welding}
                                alt="welding"
                                borderRadius={8}
                                sx={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                            />
                        </LeftBox>
                    </Grow>
                    <Grow in={isMTInView} timeout={2000}>
                        <RightBox>
                            <Box padding={3}>
                                    <TbSubHeadline heading="MT – Magnetická prášková metoda (Level II)" />
                                <Typography fontWeight="800">Rozsah:</Typography>
                                <Typography component="ul">
                                    <Typography component="li">
                                        trhliny
                                    </Typography>
                                    <Typography component="li">
                                        vady svarových spojů
                                    </Typography>
                                    <Typography component="li">
                                        povrchové a podpovrchové diskontinuity
                                    </Typography>
                                </Typography>
                                <Typography fontWeight="800" padding="4% 0 0 0">Použití:</Typography>
                                <Typography component="ul">
                                    <Typography component="li">
                                        svarové spoje
                                    </Typography>
                                    <Typography component="li">
                                        základní materiál
                                    </Typography>
                                    <Typography component="li">
                                        feromagnetické oceli
                                    </Typography>
                                </Typography>
                            </Box>
                        </RightBox>
                    </Grow>
                </MainBox>
            </ScrollTrigger>

            {/* VT – Vizuální kontrola (Level II) */}
            <ScrollTrigger onEnter={() => setIsVTInView(true)} onExit={() => setIsVTInView(false)}>
                <MainBox padding="4% 0 0 0">
                    <Grow in={isVTInView} timeout={2000}>
                        <LeftBox>
                            <Box padding={3}>
                                    <TbSubHeadline heading="VT – Vizuální kontrola (Level II)" />
                                <Typography fontWeight="800">Rozsah:</Typography>
                                <Typography component="ul">
                                    <Typography component="li">
                                        vzhled a geometrie svarů
                                    </Typography>
                                    <Typography component="li">
                                        povrchové vady
                                    </Typography>
                                    <Typography component="li">
                                        značení a shoda s výkresovou dokumentací a normami
                                    </Typography>
                                </Typography>
                                <Typography fontWeight="800" padding="4% 0 0 0">Použití:</Typography>
                                <Typography component="ul">
                                    <Typography component="li">
                                        svary
                                    </Typography>
                                    <Typography component="li">
                                        konstrukční celky
                                    </Typography>
                                    <Typography component="li">
                                        montáže a opravy
                                    </Typography>
                                </Typography>
                            </Box>
                        </LeftBox>
                    </Grow>
                    <Grow in={isVTInView} timeout={3000}>
                        <RightBox>
                            <Box
                                component="img"
                                src={welding}
                                alt="welding"
                                borderRadius={8}
                                sx={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                            />
                        </RightBox>
                    </Grow>
                </MainBox>
            </ScrollTrigger>
        </>
    )
}