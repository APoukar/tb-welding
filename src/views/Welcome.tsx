import { IconButton, Typography } from "@mui/material"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Box from "@mui/material/Box"
import welding from "assets/welding.jpg"
import type { RefObject } from "react";

export default function Welcome({ menuRef }: { menuRef: RefObject<null | HTMLDivElement> }) {
    function scrollToMenu() {
        if (!menuRef || !menuRef.current) {
            return;
        }
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Box sx={{ minHeight: "100vh" }}>
            <Box
                component="img"
                src={welding}
                alt="welding"
                sx={{ width: "100%", height: "100vh", objectFit: "cover", filter: "brightness(0.3)" }}
            />
            <Typography
                variant="h1"
                fontSize="4em"
                fontWeight={700}
                noWrap
                lineHeight={1.5}
                sx={{
                    position: "absolute",
                    top: "25%",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                KONTROLA SVARŮ A NDT ZKOUŠKY
            </Typography>
            <Typography
                variant="h2"
                sx={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                UT • MT • VT
            </Typography>
            <Typography
                sx={{
                    position: "absolute",
                    top: "5%",
                    left: "5%",
                    padding: 2,
                    borderRadius: 8,
                    border: 1
                }}
            >
                TB Welding
            </Typography>
            <IconButton
                size="large"
                color="primary"
                onClick={scrollToMenu}
                sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "85%",
                    border: 3
                }}
            >
                <ArrowDownwardIcon fontSize="inherit" />
            </IconButton>
        </Box>
    )
}