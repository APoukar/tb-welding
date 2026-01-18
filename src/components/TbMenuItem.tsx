import { Button } from "@mui/material";
import type { IButtonProps } from "types/IButtonProps";

export default function MenuItem({ text, ref, color = "primary" }: IButtonProps) {

    function scrollToView() {
        if (!ref || !ref.current) {
            return;
        }
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Button sx={{ borderRadius: 8 }} variant="text" color={color} onClick={scrollToView}>
            {text}
        </Button>
    )
}