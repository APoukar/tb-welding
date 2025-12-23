import { styled, Typography, type TypographyProps } from "@mui/material";

export const BodyTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: theme.palette.text.secondary
}));

export const CenteredBodyTypography = styled(BodyTypography)<TypographyProps>(() => ({
    textAlign: 'center'
}));

export const ListHeadline = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontWeight: 800,
    paddingBottom: theme.spacing(1)
}));

export const TbH3 = styled(Typography)<TypographyProps>(() => ({
    fontWeight: '500',
    fontSize: "1.7em",
}));

export const TbH4 = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: theme.palette.text.secondary,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    fontSize: '1.2em',
    fontStyle: 'italic'
}));