import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NAV_LINKS = [
  "Home",
  "Shop",
  "About us",
  "Services",
  "Blog",
  "Contact us",
];

export default function Navbar({ activeLink = "Home" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <AppBar
        sx={{
          position: "relative",
          backgroundColor: "#3b5d50 ",
          margin: 0,
          boxShadow: "none",
          padding: "10px",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", py: 0.5 }}
          >
            {/* Logo */}
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontFamily: "'Ariel', sans-serif",
                fontWeight: 700,
                letterSpacing: 1,
                cursor: "pointer",
              }}
            >
              Furni.
            </Typography>

            {/* Desktop Nav */}
            {isMd ? (
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                {NAV_LINKS.map((link) => (
                  <Button
                    key={link}
                    sx={{
                      paddingBlock: "15px",
                      color:
                        link === activeLink
                          ? "white"
                          : "rgba(255,255,255,0.75)",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 4,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: link === activeLink ? "70%" : "0%",
                        height: "6px",
                        backgroundColor: "#ffc107",
                        transition: "width 0.2s ease",
                      },
                      "&:hover": { color: "#fff" },
                      "&:hover::after": { width: "70%" },
                    }}
                  >
                    {link}
                  </Button>
                ))}

                <IconButton
                  sx={{
                    color: "rgba(255,255,255,0.75)",
                    "&:hover": {
                      color: "#fff",
                      background: "none",
                    },
                  }}
                >
                  <PersonOutlineIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "rgba(255,255,255,0.75)",
                    "&:hover": {
                      color: "#fff",
                      background: "none",
                    },
                  }}
                >
                  <ShoppingCartOutlinedIcon />
                </IconButton>
              </Stack>
            ) : (
              /* Mobile hamburger */
              <IconButton
                sx={{ color: "#fff" }}
                onClick={() => setMobileOpen(true)}
                aria-label="open menu"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 260, backgroundColor: "#2C5040" } }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 3,
            py: 2,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
            }}
          >
            Furni.
          </Typography>
          <IconButton
            sx={{ color: "rgba(255,255,255,0.7)" }}
            onClick={() => setMobileOpen(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Drawer Links */}
        <List sx={{ pt: 1 }}>
          {NAV_LINKS.map((link) => (
            <ListItem
              button
              key={link}
              onClick={() => setMobileOpen(false)}
              sx={{
                px: 3,
                py: 1.25,
                borderLeft:
                  link === activeLink
                    ? "3px solid #E4A100"
                    : "3px solid transparent",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.06)" },
              }}
            >
              <ListItemText
                primary={link}
                primaryTypographyProps={{
                  sx: {
                    color:
                      link === activeLink ? "#E4A100" : "rgba(255,255,255,0.8)",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: link === activeLink ? 700 : 400,
                    fontSize: "0.95rem",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        {/* Drawer Footer Icons */}
        <Box
          sx={{
            mt: "auto",
            px: 3,
            py: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Stack direction="row" spacing={2}>
            <IconButton
              sx={{
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <PersonOutlineIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
