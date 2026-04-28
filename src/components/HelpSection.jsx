import { Typography, Button, Box, Container } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";

const CHECK_ITEMS = [
  "Donec vitae odio quis nisl dapibus malesuada",
  "Nullam ac aliquet velit aliquam vulputate velit",
  "Pessimistic habitant morbi tristique senectus",
  "Aliquam vulputate velit imperdiet dolor tempor",
];

export default function HelpSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 8 },
            alignItems: { md: "center" },
          }}
        >
          {/* ── LEFT: Image collage ── */}
          <Box sx={{ flex: 1, minWidth: 0, position: "relative" }}>
            {/*
              Layout:
              [ big left image    ] [ top-right small ]
              [ big left image    ] [ bottom-right overlapping ]
            */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto",
                gap: 2,
              }}
            >
              {/* Big left image — spans 2 rows */}
              <Box
                sx={{
                  gridColumn: "1 / 2",
                  gridRow: "1 / 3",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="https://themewagon.github.io/furni/images/img-grid-1.jpg"
                  alt="Living room"
                  sx={{
                    width: "100%",
                    height: { xs: 320, md: 500 },
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.35s ease",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                />
              </Box>

              {/* Top-right small image */}
              <Box
                sx={{
                  gridColumn: "2 / 3",
                  gridRow: "1 / 2",
                  borderRadius: 3,
                  overflow: "hidden",
                  alignSelf: "start",
                }}
              >
                <Box
                  component="img"
                  src="https://themewagon.github.io/furni/images/img-grid-2.jpg"
                  alt="Interior design"
                  sx={{
                    width: "100%",
                    height: { xs: 150, md: 220 },
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.35s ease",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                />
              </Box>

              {/* Bottom-right image — offset to overlap left image */}
              <Box
                sx={{
                  gridColumn: "2 / 3",
                  gridRow: "2 / 3",
                  borderRadius: 3,
                  overflow: "hidden",
                  alignSelf: "end",
                  ml: { xs: "-40%", md: "-50%" },
                  width: { xs: "140%", md: "150%" },
                }}
              >
                <Box
                  component="img"
                  src="https://themewagon.github.io/furni/images/img-grid-3.jpg"
                  alt="Modern chair"
                  sx={{
                    width: "100%",
                    height: { xs: 220, md: 340 },
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.35s ease",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* ── RIGHT: Text content ── */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Playfair Display', sans-serif",
                fontWeight: 700,
                color: "#2f2f2f",
                fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2.2rem" },
                lineHeight: 1.3,
                mb: 2,
              }}
            >
              We Help You Make Modern Interior Design
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#6a6a6a",
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada.
            </Typography>

            {/* Checklist — 2 columns */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                mb: 4,
              }}
            >
              {CHECK_ITEMS.map((item, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                >
                  <CheckCircleOutlineIcon
                    sx={{
                      color: "#2f2f2f",
                      fontSize: 18,
                      mt: "2px",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#5a5a5a",
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#2f2f2f",
                color: "white",
                borderRadius: "50px",
                px: 4,
                textTransform: "none",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                "&:hover": { backgroundColor: "#111" },
              }}
            >
              Explore
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
