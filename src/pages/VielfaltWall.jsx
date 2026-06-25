import { useRef, useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
  FormGroup,
  CircularProgress,
} from "@mui/material";

const kfz = {
  black: "#000000",
  yellow: "#FFED00",
  red: "#E5282A",
  white: "#FFFFFF",
};

const AVATAR_API_URL =
  import.meta.env.VITE_AVATAR_API_URL || "http://localhost:5000/api/avatar";

// FESTE WERTE
const FIXED_STYLE = "cartoon";
const FIXED_VIEW_TYPE = "fullbody";

export default function VielfaltWall() {
  const generatorRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [avatarImage, setAvatarImage] = useState(null);

  const [background, setBackground] = useState("clean");
  const [mood, setMood] = useState("friendly");
  const [outfit, setOutfit] = useState("keep");
  const [extraPrompt, setExtraPrompt] = useState("");
  const [accessories, setAccessories] = useState([]);

  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const scrollToGenerator = () => {
    generatorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Bitte wähle eine Bilddatei aus.");
      return;
    }

    setSelectedFile(file);
    setPreviewImage(URL.createObjectURL(file));
    setAvatarImage(null);
    setStatus("");
    setError("");
  };

  const handleAccessoryChange = (value) => {
    setAccessories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleGenerateAvatar = async () => {
    if (!selectedFile) {
      setError("Bitte lade zuerst ein Bild hoch.");
      return;
    }

    try {
      setIsGenerating(true);
      setStatus("Bild wird verarbeitet...");
      setError("");
      setAvatarImage(null);

      const formData = new FormData();

      formData.append("image", selectedFile);

      // Fest eingebaut: immer Cartoon und immer Ganzkörper
      formData.append("style", FIXED_STYLE);
      formData.append("viewType", FIXED_VIEW_TYPE);

      // Optionen bleiben
      formData.append("background", background);
      formData.append("mood", mood);
      formData.append("outfit", outfit);

      // Qualität/Ähnlichkeit immer hoch
      formData.append("likeness", "veryHigh");

      // Wichtig für mehrere Personen
      formData.append("peopleMode", "allPeople");

      const wallPrompt =
        "Create a friendly, colorful full-body cartoon avatar suitable for a public diversity wall. Use one consistent cartoon style for all visible people. If there are multiple people in the uploaded photo, every visible person must appear in the final image. Keep the same number of people, preserve facial likeness, hairstyle, skin tone, age, expression, pose, and relative positions. Do not remove, merge, replace, or add people. The avatar should be clean, positive, printable, and suitable for being displayed on a community wall.";

      formData.append(
        "extraPrompt",
        `${wallPrompt} ${extraPrompt.trim()}`
      );

      accessories.forEach((item) => {
        formData.append("accessories", item);
      });

      const response = await fetch(AVATAR_API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || data.details || "Avatar konnte nicht erstellt werden."
        );
      }

      if (!data.imageUrl) {
        throw new Error("Backend hat keine Bild-URL zurückgegeben.");
      }

      setAvatarImage(data.imageUrl);
      setStatus("Fertig! Dein Avatar wurde erstellt.");
    } catch (err) {
      setError(err.message || "Es ist ein Fehler passiert.");
      setStatus("");
    } finally {
      setIsGenerating(false);
    }
  };

  const inputStyle = {
    backgroundColor: kfz.white,
    borderRadius: "8px",
  };

  return (
    <Box
      sx={{
        backgroundColor: kfz.black,
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        paddingTop: "40px",
        paddingBottom: "80px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
          paddingX: "20px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {/* OBERE SECTION */}
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: "20px",
            alignItems: "stretch",
            height: { xs: "auto", md: "750px" },
          }}
        >
          {/* LINKS: FESTES ORIGINALBILD */}
          <Box
            sx={{
              flex: "1 1 0",
              minWidth: "0",
              height: { xs: "420px", md: "100%" },
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#111",
            }}
          >
            <Box
              component="img"
              src="/vielfalt-hero.png"
              alt="Vielfalt Wall"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.45)",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: kfz.white,
                width: "85%",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "32px",
                    sm: "42px",
                    md: "54px",
                    lg: "64px",
                  },
                  fontWeight: "900",
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  fontFamily: "Roboto Condensed, sans-serif",
                  textShadow: "0px 4px 14px rgba(0,0,0,0.9)",
                }}
              >
                Dein Avatar.
                <br />
                Dein Beitrag.
                <br />
                Unsere Vielfalt-Wall.
              </Typography>
            </Box>
          </Box>

          {/* RECHTS: INFOBOX */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 380px" },
              height: { xs: "auto", md: "100%" },
              backgroundColor: kfz.yellow,
              color: kfz.black,
              borderRadius: "10px",
              padding: "34px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "900",
                fontFamily: "Roboto Condensed, sans-serif",
                lineHeight: 1,
                marginBottom: 3,
              }}
            >
              Die Vielfalt-Wall des KFZ
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: 1.55,
                marginBottom: 3,
              }}
            >
              Erstelle deinen eigenen Cartoon-Avatar. Wir drucken ihn aus und
              hängen ihn an unsere Vielfalt-Wall im KFZ.
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: 1.5,
                marginBottom: 3,
              }}
            >
              So entsteht eine bunte Wand voller Gesichter, Geschichten und
              Menschen, die gemeinsam ein Zeichen für Vielfalt setzen.
            </Typography>

            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.45)",
                border: "2px solid rgba(0,0,0,0.15)",
                borderRadius: "10px",
                padding: "18px",
                marginBottom: 3,
              }}
            >
              <Typography sx={{ fontWeight: "900", marginBottom: 1 }}>
                Ablauf:
              </Typography>

              <Typography sx={{ marginBottom: 1 }}>1. Foto hochladen</Typography>
              <Typography sx={{ marginBottom: 1 }}>
                2. Cartoon-Avatar erstellen
              </Typography>
              <Typography sx={{ marginBottom: 1 }}>3. Avatar prüfen</Typography>
              <Typography>4. Ausdruck kommt an die Wall</Typography>
            </Box>

            <Button
              onClick={scrollToGenerator}
              sx={{
                backgroundColor: kfz.black,
                color: kfz.white,
                fontWeight: "900",
                padding: "14px 22px",
                marginTop: "auto",
                ":hover": {
                  backgroundColor: kfz.red,
                },
              }}
            >
              Avatar erstellen
            </Button>
          </Box>
        </Box>

        {/* AVATAR GENERATOR UNTEN */}
        <Box
          ref={generatorRef}
          sx={{
            backgroundColor: "#111",
            borderRadius: "10px",
            padding: { xs: "24px", md: "36px" },
            border: "1px solid #222",
          }}
        >
          <Box sx={{ textAlign: "center", marginBottom: 5 }}>
            <Typography
              variant="h3"
              sx={{
                color: kfz.white,
                fontWeight: "900",
                fontFamily: "Roboto Condensed, sans-serif",
                marginBottom: 1,
              }}
            >
              Erstelle deinen Avatar
            </Typography>

            <Typography sx={{ color: "#ccc", fontSize: "18px" }}>
              Lade ein Bild hoch. Der Avatar wird automatisch als Cartoon im
              Ganzkörper-Stil erstellt.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: "24px",
            }}
          >
            {/* LINKS: FORMULAR */}
            <Box
              sx={{
                backgroundColor: kfz.yellow,
                borderRadius: "10px",
                padding: "28px",
                color: kfz.black,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "900",
                  fontFamily: "Roboto Condensed, sans-serif",
                  marginBottom: 3,
                }}
              >
                1. Bild & Details auswählen
              </Typography>

              <Button
                variant="contained"
                component="label"
                sx={{
                  backgroundColor: kfz.black,
                  color: kfz.white,
                  width: "100%",
                  padding: "13px",
                  fontWeight: "900",
                  marginBottom: 2,
                  ":hover": {
                    backgroundColor: "#222",
                  },
                }}
              >
                Bild hochladen
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleUpload}
                />
              </Button>

              {previewImage && (
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: 3,
                    backgroundColor: "rgba(255,255,255,0.55)",
                    padding: "12px",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={previewImage}
                    alt="Upload Vorschau"
                    sx={{
                      width: "95px",
                      height: "95px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      border: "2px solid #000",
                    }}
                  />

                  <Typography sx={{ fontSize: "14px", lineHeight: 1.4 }}>
                  Am besten funktioniert ein helles Bild, auf dem alle Personen gut sichtbar sind. Ideal sind Ganzkörperbilder mit guter Beleuchtung und klar erkennbaren Gesichtern.
                  </Typography>
                </Box>
              )}



              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 2,
                  marginBottom: 2,
                }}
              >
                <FormControl fullWidth size="small" sx={inputStyle}>
                  <InputLabel>Hintergrund</InputLabel>
                  <Select
                    value={background}
                    label="Hintergrund"
                    onChange={(e) => setBackground(e.target.value)}
                  >
                    <MenuItem value="clean">
                      Sauberer heller Hintergrund
                    </MenuItem>
                    <MenuItem value="studio">Studio</MenuItem>
                    <MenuItem value="city">Stadt</MenuItem>
                    <MenuItem value="restaurant">Restaurant / Café</MenuItem>
                    <MenuItem value="fantasy">Fantasy</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth size="small" sx={inputStyle}>
                  <InputLabel>Stimmung</InputLabel>
                  <Select
                    value={mood}
                    label="Stimmung"
                    onChange={(e) => setMood(e.target.value)}
                  >
                    <MenuItem value="friendly">Freundlich</MenuItem>
                    <MenuItem value="professional">Professionell</MenuItem>
                    <MenuItem value="funny">Lustig</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth size="small" sx={inputStyle}>
                  <InputLabel>Outfit</InputLabel>
                  <Select
                    value={outfit}
                    label="Outfit"
                    onChange={(e) => setOutfit(e.target.value)}
                  >
                    <MenuItem value="keep">
                      Aktuelles Outfit beibehalten
                    </MenuItem>
                    <MenuItem value="casual">Casual</MenuItem>
                    <MenuItem value="formal">Elegant / Formal</MenuItem>
                    <MenuItem value="sporty">Sportlich</MenuItem>
                    <MenuItem value="traditional">Traditionell</MenuItem>
                    <MenuItem value="creative">Kreativ / Trendy</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.55)",
                  borderRadius: "10px",
                  padding: "14px",
                  marginBottom: 2,
                }}
              >
                <Typography sx={{ fontWeight: "900", marginBottom: 1 }}>
                  Accessoires
                </Typography>

                <FormGroup
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={accessories.includes("glasses")}
                        onChange={() => handleAccessoryChange("glasses")}
                      />
                    }
                    label="Brille"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={accessories.includes("crown")}
                        onChange={() => handleAccessoryChange("crown")}
                      />
                    }
                    label="Krone"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={accessories.includes("flowers")}
                        onChange={() => handleAccessoryChange("flowers")}
                      />
                    }
                    label="Blumen"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={accessories.includes("headphones")}
                        onChange={() => handleAccessoryChange("headphones")}
                      />
                    }
                    label="Kopfhörer"
                  />
                </FormGroup>
              </Box>

              <TextField
                fullWidth
                multiline
                minRows={3}
                label="Zusätzlicher Wunsch optional"
                placeholder="z. B. warmes Licht, leichtes Lächeln, moderne Pose..."
                value={extraPrompt}
                onChange={(e) => setExtraPrompt(e.target.value)}
                sx={{
                  ...inputStyle,
                  marginBottom: 3,
                }}
              />

              <Button
                onClick={handleGenerateAvatar}
                disabled={!selectedFile || isGenerating}
                sx={{
                  backgroundColor: kfz.black,
                  color: kfz.white,
                  width: "100%",
                  padding: "14px",
                  fontWeight: "900",
                  ":hover": {
                    backgroundColor: kfz.red,
                  },
                  "&.Mui-disabled": {
                    backgroundColor: "#999",
                    color: "#eee",
                  },
                }}
              >
                {isGenerating ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CircularProgress size={20} sx={{ color: kfz.white }} />
                    Avatar wird erstellt...
                  </Box>
                ) : (
                  "Avatar erstellen"
                )}
              </Button>

              {status && (
                <Typography
                  sx={{
                    marginTop: 2,
                    backgroundColor: "rgba(255,255,255,0.6)",
                    padding: "12px",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: status.includes("Fertig") ? "green" : kfz.black,
                  }}
                >
                  {status}
                </Typography>
              )}

              {error && (
                <Typography
                  sx={{
                    marginTop: 2,
                    backgroundColor: "#fde7e7",
                    color: "#9b0000",
                    padding: "12px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {error}
                </Typography>
              )}
            </Box>

            {/* RECHTS: ERGEBNIS */}
            <Box
              sx={{
                backgroundColor: kfz.white,
                borderRadius: "10px",
                padding: "28px",
                color: kfz.black,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "900",
                  fontFamily: "Roboto Condensed, sans-serif",
                  marginBottom: 3,
                }}
              >
                2. Ergebnis
              </Typography>

              <Box
                sx={{
                  flex: 1,
                  minHeight: "460px",
                  borderRadius: "10px",
                  border: "2px dashed #bbb",
                  background:
                    "linear-gradient(135deg, rgba(255,237,0,0.25), transparent 35%), linear-gradient(315deg, rgba(229,40,42,0.12), transparent 40%), #fafafa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "24px",
                }}
              >
                {!avatarImage ? (
                  <Box sx={{ maxWidth: "320px", color: "#666" }}>
                    <Typography sx={{ fontSize: "58px", marginBottom: 2 }}>
                      🎭
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "25px",
                        fontWeight: "900",
                        color: kfz.black,
                        marginBottom: 1,
                      }}
                    >
                      Noch kein Avatar
                    </Typography>

                    <Typography sx={{ lineHeight: 1.5 }}>
                      Nach dem Erstellen erscheint dein fertiger Cartoon-Avatar
                      hier.
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    component="img"
                    src={avatarImage}
                    alt="Dein Avatar"
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "520px",
                      borderRadius: "14px",
                      boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
                      backgroundColor: kfz.white,
                    }}
                  />
                )}
              </Box>

              {avatarImage && (
                <Box sx={{ marginTop: 2, display: "grid", gap: 1.5 }}>
                  <Button
                    component="a"
                    href={avatarImage}
                    download="vielfalt-wall-avatar.png"
                    sx={{
                      backgroundColor: kfz.red,
                      color: kfz.white,
                      padding: "12px",
                      fontWeight: "900",
                      ":hover": {
                        backgroundColor: kfz.black,
                      },
                    }}
                  >
                    Avatar herunterladen
                  </Button>
                </Box>
              )}

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
                  gap: 1.5,
                  marginTop: 3,
                }}
              >
                {[
                  ["📸", "Bild hochladen"],
                  ["🎨", "Avatar erstellen"],
                  ["🖨️", "Drucken"],
                ].map(([icon, text]) => (
                  <Box
                    key={text}
                    sx={{
                      backgroundColor: "#f5f5f5",
                      borderRadius: "10px",
                      padding: "14px",
                      textAlign: "center",
                      border: "1px solid #ddd",
                    }}
                  >
                    <Typography sx={{ fontSize: "26px" }}>{icon}</Typography>
                    <Typography sx={{ fontWeight: "900", fontSize: "14px" }}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Typography
            sx={{
              color: "#999",
              textAlign: "center",
              fontSize: "30px",
              marginTop: 4,
            }}
          >
            Prototyp im Rahmen eines universitären Projekts. Keine offizielle
            Webseite des KFZ Marburg.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}