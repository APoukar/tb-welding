import { Typography } from "@mui/material";
import type { IBaseHeadlineProps, IHeadlineProps } from "types/IHeadlineProps";
import { BodyTypography } from "./TbTypography";

export default function TbHeadline({ heading, ref }: IHeadlineProps) {
    return (
        <div ref={ref}>
            <Typography variant="h2" textAlign="center" margin={4} paddingTop={4} fontWeight="500" fontSize="2.75em">
                {heading}
            </Typography>
        </div>
    )
}

export function TbH3({ heading }: IBaseHeadlineProps) {
    return (
        <Typography variant="h3" fontWeight="500" fontSize="1.7em">
            {heading}
        </Typography>
    )
}

export function TbH4({ heading }: IBaseHeadlineProps) {
    return (
        <BodyTypography variant="h4" paddingTop={1} paddingBottom={3} fontSize="1.2em" fontStyle="italic">
            {heading}
        </BodyTypography>
    )
}