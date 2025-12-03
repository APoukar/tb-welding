import { Typography } from "@mui/material";
import type { IHeadlineProps } from "types/IHeadlineProps";

export default function TbHeadline({ heading }: IHeadlineProps) {
    return (
        <Typography variant="h2" textAlign="center" margin={4} fontWeight="500">
            {heading}
        </Typography>
    )
}