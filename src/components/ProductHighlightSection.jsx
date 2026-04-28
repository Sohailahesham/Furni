import { Typography, Box, Container, Link } from "@mui/material";

const PRODUCTS = [
  {
    name: "Nordic Chair",
    desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    img: "https://themewagon.github.io/furni/images/product-1.png",
  },
  {
    name: "Kruzo Aero Chair",
    desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    img: "https://themewagon.github.io/furni/images/product-2.png",
  },
  {
    name: "Ergonomic Chair",
    desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    img: "https://themewagon.github.io/furni/images/product-3.png",
  },
];

const ProductHighlightCard = ({ name, desc, img }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 2.5,
    }}
  >
    {/* Thumbnail */}
    <Box
      sx={{
        flexShrink: 0,
        width: 100,
        height: 100,
        borderRadius: 3,
        backgroundColor: "#E8EDE9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        p: 1,
      }}
    >
      <Box
        component="img"
        src={img}
        alt={name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transition: "transform 0.35s ease",
          "&:hover": { transform: "scale(1.08)" },
        }}
      />
    </Box>

    {/* Text */}
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          color: "#2f2f2f",
          mb: 0.5,
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "'Lato', sans-serif",
          color: "#6a6a6a",
          fontSize: "0.875rem",
          lineHeight: 1.6,
          mb: 1,
        }}
      >
        {desc}
      </Typography>
      <Link
        href="#"
        underline="hover"
        sx={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 700,
          fontSize: "0.875rem",
          color: "#2f2f2f",
          "&:hover": { color: "#3D6B4F" },
        }}
      >
        Read More
      </Link>
    </Box>
  </Box>
);

export default function ProductHighlights() {
  return (
    <Box sx={{ py: { xs: 5, md: 7 }}}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: { xs: 4, md: 6 },
          }}
        >
          {PRODUCTS.map((p) => (
            <ProductHighlightCard key={p.name} {...p} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}