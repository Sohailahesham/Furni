import { Box, Container, Grid, Typography, Button, Stack } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: "#3b5d50",
        minHeight: { xs: 480, md: 580 },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        paddingY: { xs: 6, md: 0 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 40,
          right: 20,
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></Box>

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Grid container alignItems="center" spacing={4}>
          {/* ── Left: Text ── */}
          <Grid item xs={12} md={6} sx={{ maxWidth: "42%" }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                color: "white",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                letterSpacing: 1,
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
                fontSize: "1.1rem",
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
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
                  "&:hover": {
                    backgroundColor: "#ffc107de",
                    boxShadow: "none",
                  },
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
          </Grid>

          {/* ── Right: Sofa image ── */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: { xs: "flex-start", md: "center" },
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box
              component="img"
              src="https://themewagon.github.io/furni/images/couch.png"
              alt="Modern sofa"
              sx={{
                width: { xs: "100%", md: "auto" },
                maxWidth: { xs: 320, md: 520, lg: 620 },
                height: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
