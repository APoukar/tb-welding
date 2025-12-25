import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import welding from "assets/welding.jpg"

export default function Welcome() {
    return (
        <Box sx={{ minHeight: "83vh" }}>
            <Box
                component="img"
                src={welding}
                alt="welding"
                sx={{ width: "100%", height: "83vh", objectFit: "cover", filter: "brightness(0.3)" }}
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
        </Box>
    )
}