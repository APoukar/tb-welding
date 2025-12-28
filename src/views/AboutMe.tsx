import { Box, Grow } from "@mui/material";
import ScrollTrigger from "@ppasmik/react-scroll-trigger";
import tb from "assets/tb.jpg"
import { LeftBox, MainBox, RightBox, TypographyBox } from "components/TbBox";
import TbHeadline from "components/TbHeadline";
import { BodyTypography } from "components/TbTypography";
import { HeadlineContext } from "contexts/HeadlineContext";
import { useContext, useState } from "react";

export default function AboutMe() {
    const [isInView, setIsInView] = useState(false);
    const { aboutMe } = useContext(HeadlineContext)

    return (
        <>
            <ScrollTrigger onEnter={() => setIsInView(true)} onExit={() => setIsInView(false)}>
                <TbHeadline heading="O mně" ref={aboutMe} />
                <MainBox>
                    <Grow in={isInView} timeout={2000}>
                        <LeftBox>
                            <Box
                                component="img"
                                src={tb}
                                alt="Tomáš Bičej"
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
                    <Grow in={isInView} timeout={3000}>
                        <RightBox>
                            <TypographyBox>
                                <BodyTypography>
                                    Jmenuji se Tomáš Bičej a jsem certifikovaný technik NDT (UT, MT, VT – Level II),
                                    multisektor dle ČSN EN ISO 9712:2022, a zároveň certifikovaný svářeč s více než 13 lety praxe ve svařování a montážích ocelových konstrukcí.
                                </BodyTypography>
                                <BodyTypography padding="4% 0">
                                    Během své praxe jsem se podílel na svařování, montážích a kontrolách svarů u průmyslových a infrastrukturních projektů
                                    (ocelové konstrukce, průmyslové celky, mostní objekty).
                                </BodyTypography>
                                <BodyTypography>
                                    Zakládám si na kvalitně odvedené práci, technické přesnosti, dodržování norem a spolehlivosti.
                                </BodyTypography>
                            </TypographyBox>
                        </RightBox>
                    </Grow>
                </MainBox>
            </ScrollTrigger>
        </>
    )
}