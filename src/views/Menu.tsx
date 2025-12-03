import { Box } from "@mui/material";
import MenuButton from "components/TbMenuButton";
import MenuItem from "components/TbMenuItem";

function Menu() {
    function getEmailLink() {
        const email = "adam@poukar.net";
        const subject = "Poptávka služeb";
        return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    }
    return (
        <Box display="flex" justifyContent="space-between" margin={4}>
            <Box>
            </Box>
            <Box display="flex" gap={6}>
                <MenuItem text="Služby" />
                <MenuItem text="O mně" />
                <MenuItem text="Kontakt" />
            </Box>
            <MenuButton text="Napište mi" href={getEmailLink()} />
        </Box>
    )
}

export default Menu;