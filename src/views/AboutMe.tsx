import { Typography, Box, Grow } from "@mui/material";
import welding from "assets/welding.jpg"
import TbHeadline from "components/TbHeadline";

export default function AboutMe() {
    return (
        <>
            <TbHeadline heading="O mně" />
            <Box display="flex" alignItems="stretch" sx={{ margin: "auto 10%" }}>
                <Grow in>
                    <Box flex={1} sx={{ pr: 2 }}>
                        <Box
                            component="img"
                            src={welding}
                            alt="welding"
                            borderRadius={8}
                            sx={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                        />
                    </Box>
                </Grow>
                <Grow in timeout={1000}>
                    <Box flex={1} sx={{ pl: 2 }}>
                        <Box padding={3} sx={{ width: "100%", height: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <Typography color="textSecondary">
                                Jmenuji se Tomáš Bičej a jsem certifikovaný technik NDT (UT, MT, VT – Level II),
                                multisektor dle ČSN EN ISO 9712:2022, a zároveň certifikovaný svářeč s více než 13 lety praxe ve svařování a montážích ocelových konstrukcí.
                            </Typography>
                            <Typography color="textSecondary" padding="4% 0">
                                Během své praxe jsem se podílel na svařování, montážích a kontrolách svarů u průmyslových a infrastrukturních projektů
                                (ocelové konstrukce, průmyslové celky, mostní objekty).
                            </Typography>
                            <Typography color="textSecondary">
                                Zakládám si na kvalitně odvedené práci, technické přesnosti, dodržování norem a spolehlivosti.
                            </Typography>
                        </Box>
                    </Box>
                </Grow>
            </Box>
        </>
    )
}