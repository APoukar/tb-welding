import { Box, styled, Typography, type BoxProps, type TypographyProps } from "@mui/material";
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import { LeftBox, MainBox, RightBox, TypographyBox } from "components/TbBox";
import TbHeadline from "components/TbHeadline";
import { BodyTypography, CenteredBodyTypography } from "components/TbTypography";
import { HeadlineContext } from "contexts/HeadlineContext"
import { useContext } from "react"

const QualificationHeading = styled(Typography)<TypographyProps>(() => ({
    paddingBottom: '2%'
}));

const IconBox = styled(Box)<BoxProps>(({ theme }) => ({
    marginBottom: "2%",
    backgroundColor: theme.palette.primary.dark,
    borderRadius: theme.spacing(8),
    padding: theme.spacing(1.5),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
}));

const RightBoxWithBP = styled(RightBox)<BoxProps>(() => ({
    marginBottom: "3%"
}));

export default function Qualification() {
    const { qualification } = useContext(HeadlineContext);
    return (
        <>
            <TbHeadline heading="Kvalifikace" ref={qualification} />
            <CenteredBodyTypography>Platné certifikáty a svářečské průkazy jsou k dispozici na vyžádání.</CenteredBodyTypography>
            <MainBox sx={{ alignItems: "flex-start", margin: "auto" }}>
                <LeftBox>
                    <TypographyBox>
                        <IconBox>
                            <ChecklistRtlRoundedIcon fontSize="large" />
                        </IconBox>
                        <QualificationHeading variant="h5">
                            NDT certifikace
                        </QualificationHeading>
                        <RightBox>
                            <RightBoxWithBP>
                                <BodyTypography>EN ISO 9712:2022 – UT Level II (multisektor)</BodyTypography>
                            </RightBoxWithBP>
                            <RightBoxWithBP>
                                <BodyTypography>EN ISO 9712:2022 – MT Level II (multisektor)</BodyTypography>
                            </RightBoxWithBP>
                            <RightBoxWithBP>
                                <BodyTypography>EN ISO 9712:2022 – VT Level II (multisektor)</BodyTypography>
                            </RightBoxWithBP>
                        </RightBox>
                    </TypographyBox>
                </LeftBox>
                <RightBox>
                    <TypographyBox>
                        <IconBox>
                            <DiamondRoundedIcon fontSize="large" />
                        </IconBox>
                        <QualificationHeading variant="h5">
                            Svářečské kvalifikace – EN ISO 9606-1
                        </QualificationHeading>
                        <RightBox>
                            <BodyTypography>111 – svařování obalenou elektrodou</BodyTypography>
                            <RightBoxWithBP>
                                <BodyTypography>Polohy: PA, PB, PC, PE, PF, PH, PH-L045</BodyTypography>
                                <BodyTypography>Plechy i trubky (včetně rotačních)</BodyTypography>
                            </RightBoxWithBP>
                            <BodyTypography>135 – MAG svařování (plný / trubičkový drát)</BodyTypography>
                            <RightBoxWithBP>
                                <BodyTypography>Polohy: PA, PB, PF</BodyTypography>
                            </RightBoxWithBP>
                        </RightBox>
                    </TypographyBox>
                </RightBox>
            </MainBox>
        </>
    )
}