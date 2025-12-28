import { Box } from "@mui/material";
import MenuButton from "components/TbMenuButton";
import MenuItem from "components/TbMenuItem";
import { HeadlineContext } from "contexts/HeadlineContext";
import { useContext } from "react";

function Menu() {
    const { aboutMe, contacts, services, qualification } = useContext(HeadlineContext);

    function getEmailLink() {
        const email = "tbwelding@seznam.cz";
        const subject = "Poptávka služeb";
        return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    }

    return (
        <Box display="flex" justifyContent="space-between" margin={4}>
            <Box flex={1}>
            </Box>
            <Box display="flex" gap={6} border={0.5} borderColor="#90caf9" borderRadius={8} padding={1.5}>
                <MenuItem text="Služby" ref={services} />
                <MenuItem text="O mně" ref={aboutMe} />
                <MenuItem text="Kvalifikace" ref={qualification} />
                <MenuItem text="Kontakt" ref={contacts} />
            </Box>
            <Box flex={1} display="flex" justifyContent="flex-end">
                <MenuButton text="Napište mi" href={getEmailLink()} />
            </Box>
        </Box>
    )
}

export default Menu;