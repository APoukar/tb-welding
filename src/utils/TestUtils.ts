import type { IHeadlineContext } from "types/IHeadlineContext";
import type { HeadlineRef } from "types/IHeadlineProps";

export function GetHeadlineContextMock(
    {
        aboutMe = null,
        contacts = null,
        services = null,
        qualification = null }:
        {
            aboutMe?: HeadlineRef;
            contacts?: HeadlineRef;
            services?: HeadlineRef;
            qualification?: HeadlineRef;
        } = {}): IHeadlineContext {
    return ({
        aboutMe,
        contacts,
        services,
        qualification
    })
}