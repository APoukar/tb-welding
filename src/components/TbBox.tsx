import { Box, styled, type BoxProps } from "@mui/material";

export const MainBox = styled(Box)<BoxProps>(() => ({
    display: 'flex',
    alignItems: 'center',
    margin: 'auto 10%'
}));

export const LeftBox = styled(Box)<BoxProps>(({ theme }) => ({
    flex: 1,
    paddingRight: theme.spacing(2)
}));

export const RightBox = styled(Box)<BoxProps>(({ theme }) => ({
    flex: 1,
    paddingLeft: theme.spacing(2)
}));

export const TypographyBox = styled(Box)<BoxProps>(({ theme }) => ({
    padding: theme.spacing(3),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
}));