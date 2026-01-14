import type { HeadlineRef } from "./IHeadlineProps";

export interface IButtonProps {
    text: string;
    ref: HeadlineRef;
    color?: "inherit" | "primary" | "secondary";
}

export interface ILinkButtonProps {
    text: string;
    href: string;
}