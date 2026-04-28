import {
  Typography,
  Button,
  Box,
  Container,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";

const PRODUCTS = [
  {
    name: "Nordic Chair",
    price: "$50.00",
    img: "https://themewagon.github.io/furni/images/product-1.png",
  },
  {
    name: "Kruzo Aero Chair",
    price: "$78.00",
    img: "https://themewagon.github.io/furni/images/product-2.png",
  },
  {
    name: "Ergonomic Chair",
    price: "$43.00",
    img: "https://themewagon.github.io/furni/images/product-3.png",
  },
];

const ProductCard = ({ name, price, img }) => (
  <Card
    sx={{
      backgroundColor: "transparent",
      boxShadow: "none",
      borderRadius: 2,
      "&:hover img": { transform: "scale(1.06)" },
    }}
  >
    <CardActionArea>
      <Box sx={{ p: 3, overflow: "hidden" }}>
        <Box
          component="img"
          src={img}
          alt={name}
          sx={{
            width: "100%",
            height: 200,
            objectFit: "contain",
            transition: "transform 0.35s ease",
            display: "block",
          }}
        />
      </Box>
      <CardContent sx={{ textAlign: "center", pb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            fontFamily: "'Lato', sans-serif",
            color: "#2f2f2f",
            mb: 0.5,
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 800,
            fontFamily: "'Lato', sans-serif",
            color: "#2f2f2f",
          }}
        >
          {price}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default function ShopSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: "#F5F5F0" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: { md: "flex-start" },
          }}
        >
          {/* Left: text block */}
          <Box
            sx={{
              flex: "0 0 auto",
              width: { xs: "100%", md: "22%" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Playfair Display', sans-serif",
                fontWeight: 700,
                color: "#2f2f2f",
                fontSize: { xs: "1.6rem", md: "1.8rem" },
                lineHeight: 1.3,
                mb: 2,
              }}
            >
              Crafted with excellent material.
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
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </Typography>
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

          {/* Right: product cards grid */}
          <Box
            sx={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 3,
            }}
          >
            {PRODUCTS.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
