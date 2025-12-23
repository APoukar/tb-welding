import TbHeadline from "components/TbHeadline";
import { CenteredBodyTypography } from "components/TbTypography";
import { HeadlineContext } from "contexts/HeadlineContext";
import { useContext } from "react";

export default function Services() {
    const { services } = useContext(HeadlineContext);
    return (
        <>
            <TbHeadline heading="Služby" ref={services} />
            <CenteredBodyTypography padding="20% auto">
                Kontroly provádím jako certifikovaný technik NDT Level II – multisektor
                dle ČSN EN ISO 9712:2022, v souladu s požadavky norem, projektové dokumentace
                a kontrolních specifikací.
            </CenteredBodyTypography>
        </>
    )
}