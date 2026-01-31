import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import hero from "assets/hero.jpg"

export default function Welcome() {
    return (
        <Box sx={{ minHeight: "83vh" }}>
            <Box
                component="img"
                src={hero}
                alt="welding"
                sx={{ width: "100%", height: "83vh", objectFit: "cover", filter: "brightness(0.3)" }}
            />
            <Typography
                variant="h1"
                fontWeight={700}
                lineHeight={1.5}
                sx={{
                    fontSize: { xs: '2em', sm: '2.5em', md: '3.5em' },
                    position: "absolute",
                    top: "25%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                    width: { xs: '90%', sm: '80%', md: 'auto' },
                }}
            >
                NDT ZKOUŠKY
                <br />
                A
                <br />
                SVAŘOVÁNÍ
            </Typography>
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: '1.5em', sm: '1.8em', md: '2.5em' },
                    position: "absolute",
                    top: { xs: "46%", sm: "50%", md: "70%", lg: '65%'  },
                    left: "50%",
                    transform: "translateX(-50%)",
                    textAlign: "center",
                }}
            >
                VT • MT • UT
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