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
        paddingTop: { xs: "24px", md: "40px" },
        paddingBottom: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          maxWidth: "1400px",
          gap: "20px",
          paddingX: { xs: "14px", md: "20px" },
          alignItems: "stretch",
          height: { xs: "auto", md: "680px" },
          boxSizing: "border-box",
        }}
      >
        {/* LEFT HERO MOSAIC */}
        <Box
          sx={{
            flex: { xs: "none", md: "1 1 0" },
            width: "100%",
            minWidth: "0",
            borderRadius: "6px",
            overflow: "hidden",
            height: { xs: "380px", sm: "460px", md: "100%" },
            backgroundColor: "#111",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="/vielfalt-hero.png"
            alt="Vielfalt Wall Hero"
            sx={{
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
              width: { xs: "90%", md: "85%" },
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "34px",
                  md: "44px",
                  lg: "52px",
                },
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
                padding: { xs: "10px 18px", md: "12px 26px" },
                fontSize: { xs: "14px", md: "18px" },
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
            flex: { xs: "none", md: "0 0 350px" },
            width: "100%",
            backgroundColor: colors.yellow,
            padding: { xs: "24px", md: "30px" },
            borderRadius: "6px",
            height: { xs: "auto", md: "100%" },
            boxSizing: "border-box",
            overflowY: { xs: "visible", md: "auto" },
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
                fontSize: { xs: "28px", md: "34px" },
                lineHeight: 1.1,
              }}
            >
              ENTDECKE UNSER PROGRAMM
            </Typography>

            <Box sx={{ marginBottom: "24px" }}>
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
              marginTop: { xs: "10px", md: "auto" },
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

      <Typography
        sx={{
          color: "#999",
          textAlign: "center",
          fontSize: { xs: "13px", md: "30px" },
          marginTop: 4,
          paddingX: "20px",
          maxWidth: "900px",
          lineHeight: 1.5,
        }}
      >
        Prototyp im Rahmen eines universitären Projekts. Keine offizielle
        Webseite des KFZ Marburg.
      </Typography>
    </Box>
  );
}