import type { RefObject } from "react";

export interface IHeadlineProps {
    heading: string;
    ref: HeadlineRef;
}

export type HeadlineRef = RefObject<null> | RefObject<HTMLDivElement> | null;