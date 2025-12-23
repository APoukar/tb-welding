import { styled, Typography, type TypographyProps } from "@mui/material";

export const BodyTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
    color: theme.palette.text.secondary
}));

export const CenteredBodyTypography = styled(BodyTypography)<TypographyProps>(() => ({
    textAlign: 'center'
}));