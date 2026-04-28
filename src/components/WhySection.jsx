import { Typography, Box, Container, Stack } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

const FEATURES = [
  {
    icon: <LocalShippingOutlinedIcon sx={{ fontSize: 36 }} />,
    title: "Fast & Free Shipping",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: <ShoppingBagOutlinedIcon sx={{ fontSize: 36 }} />,
    title: "Easy to Shop",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: <SupportOutlinedIcon sx={{ fontSize: 36 }} />,
    title: "24/7 Support",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: <AutorenewOutlinedIcon sx={{ fontSize: 36 }} />,
    title: "Hassle Free Returns",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
];

const FeatureIcon = ({ children }) => (
  <Box
    sx={{ position: "relative", width: 60, height: 52, mb: 1, flexShrink: 0 }}
  >
    <Box
      sx={{
        width: 34,
        height: 34,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        color: "#333",
      }}
    >
      {children}
    </Box>
    <Box
      sx={{
        width:34,
        height: 34,
        borderRadius: "50%",
        backgroundColor: "rgba(59, 93, 80, 0.2)",
        position: "absolute",
        top: 6,
        left: 10,
        zIndex: 0,
      }}
    />
  </Box>
);

export default function WhySection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Outer two-column layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 8 },
            alignItems: { md: "center" },
          }}
        >
          {/* LEFT: Text + 2x2 features */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                mb: 1.5,
                fontFamily: "'Playfair Display', sans-serif",
                color: "#212121",
              }}
            >
              Why Choose Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 5,
                fontFamily: "'Lato', sans-serif",
                color: "#6a6a6a",
                lineHeight: 1.8,
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </Typography>

            {/* 2x2 features — always two columns */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: 4,
                rowGap: 5,
              }}
            >
              {FEATURES.map((f) => (
                <Stack
                  key={f.title}
                  direction="column"
                  spacing={1}
                  alignItems="flex-start"
                >
                  <FeatureIcon>{f.icon}</FeatureIcon>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "0.95rem",
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 700,
                      color: "#212121",
                    }}
                  >
                    {f.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#6a6a6a",
                      fontFamily: "'Lato', sans-serif",
                      lineHeight: 1.7,
                    }}
                  >
                    {f.desc}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Box>

          {/* RIGHT: Image */}
          <Box sx={{ flex: 1, minWidth: 0, position: "relative" }}>
            <Box
              component="img"
              src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg"
              alt="Why choose us"
              sx={{
                display: "block",
                width: "100%",
                height: { xs: "100%", md: 580 },
                objectFit: "cover",
                borderRadius: 4,
                position: "relative",
                zIndex: 1,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
