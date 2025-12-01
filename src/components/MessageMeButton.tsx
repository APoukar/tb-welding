import Button from "@mui/material/Button";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function MessageMeButton() {
    return (
        <Button variant="outlined" sx={{ borderRadius: 8 }} endIcon={<ArrowForwardIosIcon />}>
            Napište mi
        </Button>
    )
}