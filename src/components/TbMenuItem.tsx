import { Button } from "@mui/material";
import type { IButtonProps } from "types/IButtonProps";

export default function MenuItem({ text, ref }: IButtonProps) {

    function scrollToView() {
        if (!ref || !ref.current) {
            return;
        }
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <Button sx={{ borderRadius: 8 }} variant="text" onClick={scrollToView}>
            {text}
        </Button>
    )
}