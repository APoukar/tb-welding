import { Box, styled, type BoxProps } from "@mui/material";

export const MainBox = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    margin: 'auto 10%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}));

export const LeftBox = styled(Box)<BoxProps>(({ theme }) => ({
    flex: 1,
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        paddingRight: 0,
        width: '100%',
    },
}));

export const RightBox = styled(Box)<BoxProps>(({ theme }) => ({
    flex: 1,
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
        width: '100%',
    },
}));

export const TypographyBox = styled(Box)<BoxProps>(({ theme }) => ({
    padding: theme.spacing(3),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
}));