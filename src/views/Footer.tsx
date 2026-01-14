import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box component="footer" sx={{ textAlign: 'center', padding: 4, marginTop: 4 }}>
            <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} TB Welding. Created by Adam Poukar.
            </Typography>
        </Box>
    )
}
