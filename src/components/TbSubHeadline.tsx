import { Typography } from "@mui/material";
import type { IBaseHeadlineProps } from "types/IHeadlineProps";

export default function TbHeadline({ heading }: IBaseHeadlineProps) {
    return (
        <Typography variant="h3" paddingBottom={3} fontWeight="500" fontSize="2em">
            {heading}
        </Typography>
    )
}