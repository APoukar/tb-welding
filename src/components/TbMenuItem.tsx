import { Button } from "@mui/material";
import type { IButtonProps } from "types/IButtonProps";

export default function MenuItem({ text }: IButtonProps) {
    return (
        <Button sx={{ borderRadius: 8 }} variant="text">
            {text}
        </Button>
    )
}