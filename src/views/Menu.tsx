import { Box, Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MessageMeButton from "../components/MessageMeButton";

function Menu() {
    return (
        <Box display="flex" justifyContent="space-between" margin={4}>
            <Box>
                Tomáš Bičej
            </Box>
            <Box>
                Menu
            </Box>
            <MessageMeButton />
        </Box>
    )
}

export default Menu;