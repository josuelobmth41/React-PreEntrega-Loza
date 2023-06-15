import {
  Button,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import { CartWidget } from "../../pages/CartWidget/CartWidget";

const navLinks = [
  { title: "Inicio", path: "#", icon: <HomeIcon /> },
  { title: "Productos", path: "#", icon: <InboxIcon /> },
  { title: "Contactos", path: "#", icon: <DraftsIcon /> },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar sx={{ bgcolor: "primary" }}>
        <Toolbar>
          <IconButton
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Canela Pet Shop
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component="a"
                href={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <CartWidget />
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} />
        <CartWidget />
      </Drawer>
    </>
  );
}
