import { Box, Container, Typography, Button, Stack } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: "#3b5d50",
        minHeight: { xs: "auto", md: 580 },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 0 },
      }}
    >

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 5, md: 4 },
          }}
        >
          {/* ── Left: Text ── */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                color: "white",
                fontFamily: "'Playfair Display', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem", lg: "3.2rem" },
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Modern Interior Design Studio
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 400,
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.8,
                mb: 4,
                maxWidth: 440,
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#ffc107",
                  color: "#222",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  px: 4,
                  py: 1.5,
                  borderRadius: "50px",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#e6ac00", boxShadow: "none" },
                }}
              >
                Shop Now
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.6)",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  px: 4,
                  py: 1.5,
                  borderRadius: "50px",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#fff",
                    backgroundColor: "rgba(255,255,255,0.06)",
                  },
                }}
              >
                Explore
              </Button>
            </Stack>
          </Box>

          {/* ── Right: Sofa image ── */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "flex-end",
            }}
          >
            <Box
              component="img"
              src="https://themewagon.github.io/furni/images/couch.png"
              alt="Modern sofa"
              sx={{
                width: "100%",
                maxWidth: { xs: 320, sm: 420, md: 520, lg: 620 },
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.2))",
                transform: "translateY(8px)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}