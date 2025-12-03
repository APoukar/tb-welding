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
            <Box flex={1}>
            </Box>
            <Box display="flex" gap={6} border={0.5} borderColor="#90caf9" borderRadius={8} padding={1.5}>
                <MenuItem text="Služby" />
                <MenuItem text="O mně" />
                <MenuItem text="Kontakt" />
            </Box>
            <Box flex={1} display="flex" justifyContent="flex-end">
                <MenuButton text="Napište mi" href={getEmailLink()} />
            </Box>
        </Box>
    )
}

export default Menu;