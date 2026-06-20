import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "../styles/headerIcons.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/kfz-logo.png";

// Eigene Icons
import SpotifyIcon from "../assets/icons/SpotifyIcon";
import TiktokBoxIcon from "../assets/icons/TiktokBoxIcon";
import TranslateIcon from "@mui/icons-material/Translate";


import MenuIcon from "@mui/icons-material/Menu";


const colors = {
  black: "#000000",
  yellow: "#FFEB00",
  red: "#E5282A",
  white: "#FFFFFF",
};






export default function Header() {
  const [anchorKfz, setAnchorKfz] = useState(null);
  const [anchorKontakt, setAnchorKontakt] = useState(null);

const [anchorSpenden, setAnchorSpenden] = useState(null);
const openSpenden = Boolean(anchorSpenden); 
    
const [anchorMobile, setAnchorMobile] = useState(null);
const openMobile = Boolean(anchorMobile);
    
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: colors.black,
        height: "95px",
        display: "flex",
        justifyContent: "center",
        boxShadow: "none",
        paddingX: 3,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
{/* LOGO */}
<Box
  component={Link}
  to="/"
  sx={{
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    cursor: "pointer",
  }}
>
  <img
    src={logo}
    alt="KFZ"
    style={{
      height: "120px",
      width: "auto",
    }}
  />
</Box>
          
          
   <IconButton
  sx={{
    display: { xs: "flex", md: "none" },
    color: colors.white,
  }}
  onClick={(e) => setAnchorMobile(e.currentTarget)}
>
  <MenuIcon fontSize="large" />
</IconButton>       
          
          
         <Menu
  anchorEl={anchorMobile}
  open={openMobile}
  onClose={() => setAnchorMobile(null)}
  PaperProps={{
    sx: {
      backgroundColor: colors.black,
      color: colors.white,
      border: "1px solid #333",
      minWidth: "220px",
    },
  }}
>
  <MenuItem
    onClick={() => {
      window.location.href = "https://www.kfz-marburg.de/programm";
      setAnchorMobile(null);
    }}
  >
    PROGRAMM
  </MenuItem>

  <MenuItem
    onClick={() => {
      window.location.href = "https://www.kfz-marburg.de/location";
      setAnchorMobile(null);
    }}
  >
    LOCATION
  </MenuItem>

  <MenuItem
    onClick={() => {
      window.location.href = "https://www.kfz-marburg.de/team";
      setAnchorMobile(null);
    }}
  >
    TEAM
  </MenuItem>

  <MenuItem
    onClick={() => {
      window.location.href = "https://www.kfz-marburg.de/merch";
      setAnchorMobile(null);
    }}
  >
    MERCH
  </MenuItem>

  <MenuItem
    onClick={() => {
      window.location.href = "/vielfalt-wall";
      setAnchorMobile(null);
    }}
  >
    VIELFALT-WALL
  </MenuItem>

  <MenuItem
    onClick={() => {
      window.location.href = "https://www.kfz-marburg.de/spenden/";
      setAnchorMobile(null);
    }}
    sx={{
      backgroundColor: colors.red,
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#c41f22",
      },
    }}
  >
    SPENDEN
  </MenuItem>
</Menu>
          
          
          
          
          
          

        {/* NAVIGATION */}
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1.5,                // Buttons näher zueinander
    fontSize: "20px",
    fontWeight: 900,         // viel fetter
        
  }}
>
          <Button
            sx={{ color: colors.white, fontWeight: "bold" }}
            onClick={(e) => setAnchorKfz(e.currentTarget)}
          >
            DAS KFZ ▾
          </Button>

          <Menu
            anchorEl={anchorKfz}
            open={Boolean(anchorKfz)}
            onClose={() => setAnchorKfz(null)}
          >
            <MenuItem onClick={() => setAnchorKfz(null)}>Geschichte</MenuItem>
            <MenuItem onClick={() => setAnchorKfz(null)}>Team</MenuItem>
            <MenuItem onClick={() => setAnchorKfz(null)}>Über uns</MenuItem>
          </Menu>

<Button
  sx={{ color: colors.white }}
  component="a"
  href="https://www.kfz-marburg.de/programm"
>
  PROGRAMM
</Button>

<Button
  sx={{ color: colors.white }}
  component="a"
  href="https://www.kfz-marburg.de/die-location"
>
  LOCATION
</Button>

<Button
  sx={{ color: colors.white }}
  component="a"
  href="https://www.kfz-marburg.de/team"
>
  TEAM
</Button>

<Button
  sx={{ color: colors.white }}
  component="a"
  href="https://shop.kfz-marburg.de/"
>
  MERCH
</Button>

          <Button
            sx={{ color: colors.white }}
            onClick={(e) => setAnchorKontakt(e.currentTarget)}
          >
            KONTAKT ▾
          </Button>

          <Menu
            anchorEl={anchorKontakt}
            open={Boolean(anchorKontakt)}
            onClose={() => setAnchorKontakt(null)}
          >
            <MenuItem>Allgemeine Anfrage</MenuItem>
            <MenuItem>Vermietung</MenuItem>
            <MenuItem>Presse</MenuItem>
          </Menu>

<Button
  sx={{
    backgroundColor: colors.red,
    color: colors.white,      // <<< ganz wichtig: Text weiß
    fontWeight: "bold",
    paddingX: 3,
    ":hover": { backgroundColor: "#c41f22" },
  }}
  onClick={(e) => setAnchorSpenden(e.currentTarget)}
>
  SPENDEN ▾
</Button>
<Menu
  anchorEl={anchorSpenden}
  open={openSpenden}
  onClose={() => setAnchorSpenden(null)}
  PaperProps={{
    sx: {
      backgroundColor: "#000",          // <<< Menü schwarz
      color: "#FFF",                    // <<< Schrift weiß
      border: "1px solid #333",
    },
  }}
>
<MenuItem
  component="a"
  href="https://www.kfz-marburg.de/jetzt-spenden"
  sx={{
    color: "#FFF",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#222",
    },
  }}
  onClick={() => setAnchorSpenden(null)}
>
  Jetzt Spenden
</MenuItem>

<MenuItem
  component="a"
  href="https://www.kfz-marburg.de/foerderkreis"
  sx={{
    color: "#FFF",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#222",
    },
  }}
  onClick={() => setAnchorSpenden(null)}
>
  Förderkreis
</MenuItem>

<MenuItem
  component={Link}
  to="/vielfalt-wall"
  sx={{
    color: "#FFF",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#222",
    },
  }}
  onClick={() => setAnchorSpenden(null)}
>
  Unsere Vielfalt-Wall
</MenuItem>
</Menu>
        </Box>

        {/* SOCIAL MEDIA & TRANSLATE ICONS */}
{/* SOCIAL MEDIA & TRANSLATE ICONS */}
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 0.4,
    color: colors.white,
  }}
>
  {/* Facebook */}
<IconButton
  component="a"
  href="https://www.facebook.com/kfzmarburg/?locale=de_DE"
  target="_blank"
  rel="noopener noreferrer"
  sx={{ color: colors.white, padding: "2px", minWidth: 0 }}
>
  <FacebookIcon sx={{ fontSize: 38 }} />
</IconButton>

<IconButton
  component="a"
  href="https://open.spotify.com/user/7t54jgajypb2yck89sl1w3vz0?si=ae11a9a4a488414d&nd=1&dlsi=ce6bfa46b4d842f4"
  target="_blank"
  rel="noopener noreferrer"
  sx={{ color: colors.white, padding: "2px", minWidth: 0 }}
>
  <SpotifyIcon size={36} />
</IconButton>

<IconButton
  component="a"
  href="https://www.instagram.com/kfzmarburg/?hl=de"
  target="_blank"
  rel="noopener noreferrer"
  sx={{ color: colors.white, padding: "2px", minWidth: 0 }}
>
  <InstagramIcon sx={{ fontSize: 38 }} />
</IconButton>

<IconButton
  component="a"
  href="https://www.tiktok.com/@kfzmarburg"
  target="_blank"
  rel="noopener noreferrer"
  sx={{ color: colors.white, padding: "2px", minWidth: 0 }}
>
  <TiktokBoxIcon size={34} />
</IconButton>

  {/* Divider */}
  <Divider
    orientation="vertical"
    flexItem
    sx={{ borderColor: colors.white, marginX: 1 }}
  />

  {/* Übersetzungs-Icon */}
  <IconButton sx={{ color: colors.white, padding: "2px", minWidth: 0 }}>
    <TranslateIcon sx={{ fontSize: 32 }} />
  </IconButton>
</Box>
      </Toolbar>
    </AppBar>
  );
}
