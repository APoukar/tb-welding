import { Typography } from "@mui/material";
import type { IHeadlineProps } from "types/IHeadlineProps";

export default function TbHeadline({ heading, ref }: IHeadlineProps) {
    return (
        <div ref={ref}>
            <Typography variant="h2" textAlign="center" margin={4} paddingTop={4} fontWeight="500" fontSize="2.75em">
                {heading}
            </Typography>
        </div>
    )
}