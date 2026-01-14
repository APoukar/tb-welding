import { Box, Drawer, IconButton, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MenuButton from "components/TbMenuButton";
import MenuItem from "components/TbMenuItem";
import { HeadlineContext } from "contexts/HeadlineContext";
import { useContext, useState } from "react";

function Menu() {
    const { aboutMe, contacts, services, qualification } = useContext(HeadlineContext);
    const [drawerOpen, setDrawerOpen] = useState(false);

    function getEmailLink() {
        const email = "tbwelding@seznam.cz";
        const subject = "Poptávka služeb";
        return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    }

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleMenuItemClick = () => {
        setDrawerOpen(false);
    };

    return (
        <Box display="flex" justifyContent="space-between" margin={4}>
            {/* Hamburger icon - mobile only */}
            <Box sx={{ display: { xs: "flex", sm: "none" }, flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                <IconButton onClick={handleDrawerToggle} sx={{ color: "text.primary" }}>
                    <MenuIcon />
                </IconButton>
            </Box>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: "block", sm: "none" } }}
            >
                <Box sx={{ width: 250, padding: 2 }}>
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton onClick={handleDrawerToggle}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List sx={{ color: "text.primary" }}>
                        <ListItem onClick={handleMenuItemClick}>
                            <MenuItem text="Služby" ref={services} color="inherit" />
                        </ListItem>
                        <ListItem onClick={handleMenuItemClick}>
                            <MenuItem text="O mně" ref={aboutMe} color="inherit" />
                        </ListItem>
                        <ListItem onClick={handleMenuItemClick}>
                            <MenuItem text="Kvalifikace" ref={qualification} color="inherit" />
                        </ListItem>
                        <ListItem onClick={handleMenuItemClick}>
                            <MenuItem text="Kontakt" ref={contacts} color="inherit" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            {/* Desktop menu - hidden on mobile */}
            <Box sx={{ display: { xs: "none", sm: "flex" }, flex: 1 }}>
            </Box>
            <Box
                sx={{
                    display: { xs: "none", sm: "flex" },
                    gap: 6,
                    border: 0.5,
                    borderColor: "#90caf9",
                    borderRadius: 8,
                    padding: 1.5,
                }}
            >
                <MenuItem text="Služby" ref={services} />
                <MenuItem text="O mně" ref={aboutMe} />
                <MenuItem text="Kvalifikace" ref={qualification} />
                <MenuItem text="Kontakt" ref={contacts} />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" }, flex: 1, justifyContent: "flex-end" }}>
                <MenuButton text="Napište mi" href={getEmailLink()} />
            </Box>
        </Box>
    )
}

export default Menu;