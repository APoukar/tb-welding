import Button from "@mui/material/Button";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import type { ILinkButtonProps } from "types/IButtonProps";

export default function MenuButton({ text, href }: ILinkButtonProps) {
    return (
        <Button variant="outlined" href={href} sx={{ borderRadius: 8 }} endIcon={<ArrowForwardIosIcon />}>
            {text}
        </Button>
    )
}