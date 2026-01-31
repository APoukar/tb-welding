import { Typography } from "@mui/material";
import { useMemo } from "react";
import type { IHeadlineProps } from "types/IHeadlineProps";

function generateSectionId(heading: string): string {
    return heading
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
}

export default function TbHeadline({ heading, ref }: IHeadlineProps) {
    const sectionId = useMemo(() => generateSectionId(heading), [heading]);
    const headingId = `${sectionId}-heading`;

    return (
        <section ref={ref} id={sectionId} aria-labelledby={headingId}>
            <Typography id={headingId} variant="h2" textAlign="center" margin={4} paddingTop={4} fontWeight="500" fontSize="2.75em">
                {heading}
            </Typography>
        </section>
    )
}