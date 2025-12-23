import { createContext, useRef, type ReactNode } from "react";
import type { IHeadlineContext } from "types/IHeadlineContext";

export const HeadlineContext = createContext<IHeadlineContext>({
    services: null, aboutMe: null, contacts: null
});

export function HeadlineProvider({ children }: { children: ReactNode }) {
    const aboutMe = useRef(null);
    const contacts = useRef(null);
    const services = useRef(null);

    return (
        <HeadlineContext value={{ aboutMe, contacts, services }}>
            { children }
        </HeadlineContext>
    )
}
