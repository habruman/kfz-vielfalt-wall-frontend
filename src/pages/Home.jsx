import { Box, Typography, Button } from "@mui/material";

const colors = {
  black: "#000000",
  yellow: "#FFEB00",
  white: "#FFFFFF",
};

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: colors.black,
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        paddingTop: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
<Box
  sx={{
    display: "flex",
    flexWrap: "nowrap",
    width: "100%",
    maxWidth: "1400px",
    gap: "20px",
    paddingX: "20px",
    alignItems: "stretch",
    height: "680px",       
  }}
>
  {/* LEFT HERO MOSAIC */}
<Box
  sx={{
    flex: "1 1 0",
    minWidth: "0",
    borderRadius: "6px",
    overflow: "hidden",
    height: "100%",       
    backgroundColor: "#111",
    position: "relative",
  }}
>

<img
  src="/vielfalt-hero.png"
  alt="Vielfalt Wall Hero"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.85,
    display: "block",
  }}
/>
    
    
    {/* DARK OVERLAY */}
<Box
  sx={{
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    zIndex: 1,
  }}
/>
    
    
    
    

    {/* TEXT OVERLAY */}
<Box
  sx={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: colors.white,
    width: "85%",
    zIndex: 2,
  }}
>
<Typography
  sx={{
    fontSize: { xs: "26px", sm: "36px", md: "44px", lg: "52px" },
    fontWeight: "900",
    textTransform: "uppercase",
    marginBottom: "20px",
    lineHeight: 1.1,
    fontFamily: "Roboto Condensed, sans-serif",
    textShadow: "0px 3px 8px rgba(0,0,0,0.8)",
  }}
>
  Dein Bild. Dein Beitrag. <br />
  Unsere Vielfalt-Wall.
</Typography>


<Button
  sx={{
    backgroundColor: "#FFEB00",
    color: "#000000",
    fontWeight: "bold",
    padding: "12px 26px",
    fontSize: "18px",
    border: "2px solid transparent",
    ":hover": { backgroundColor: "#FFEB00" },
  }}
  onClick={() => (window.location.href = "/vielfalt-wall")}
>
  Jetzt Teil der Vielfalt werden
</Button>







    </Box>
  </Box>

  {/* RIGHT PROGRAM BOX */}
<Box
  sx={{
    flex: "0 0 350px",
    backgroundColor: colors.yellow,
    padding: "30px",
    borderRadius: "6px",
    height: "100%",
    boxSizing: "border-box",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  }}
>
    
    
<Box>
  <Typography
    variant="h4"
    sx={{
      fontWeight: "900",
      marginBottom: "20px",
      fontFamily: "Roboto Condensed, sans-serif",
    }}
  >
    ENTDECKE UNSER PROGRAMM
  </Typography>

  <Box sx={{ marginBottom: "20px" }}>
    <Typography sx={{ fontWeight: "bold" }}>
      NACHTTANZDEMO
    </Typography>
    <Typography sx={{ marginBottom: "15px" }}>20.6.2026</Typography>

    <Typography sx={{ fontWeight: "bold" }}>
      344. MARBURGER ABEND
    </Typography>
    <Typography sx={{ marginBottom: "15px" }}>21.6.2026</Typography>

    <Typography sx={{ fontWeight: "bold" }}>
      SCHWULE THEKE
    </Typography>
    <Typography sx={{ marginBottom: "15px" }}>22.6.2026</Typography>

    <Typography sx={{ fontWeight: "bold" }}>
      MITTWOCHSTANZPARTY | "ALORS ON DANSE"
    </Typography>
    <Typography>24.6.2026</Typography>
  </Box>
</Box>

<Button
  variant="outlined"
  component="a"
  href="https://www.kfz-marburg.de/programm"
  sx={{
    borderColor: colors.black,
    color: colors.black,
    fontWeight: "bold",
    padding: "10px 20px",
    textDecoration: "none",
    ":hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
      borderColor: "#000",
    },
  }}
>
  ZUM PROGRAMM
</Button>
  </Box>
</Box>

    </Box>
  );
}
