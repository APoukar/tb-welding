import type { RefObject } from "react";

export interface IHeadlineProps extends IBaseHeadlineProps {
    ref: HeadlineRef;
}

export interface IBaseHeadlineProps {
    heading: string;
}

export type HeadlineRef = RefObject<null> | RefObject<HTMLDivElement> | null;