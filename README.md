# 🪑 Furni — Modern Interior Design Website

A pixel-perfect React implementation of the [Furni](https://themewagon.github.io/furni/) furniture landing page, built with **Material UI (MUI v5)**.

---

## 🖼️ Preview

> Based on the original Furni template by [Untree.co](https://untree.co)

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/furni-mui.git
cd furni-mui

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Dependencies

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

| Package | Version | Purpose |
|---|---|---|
| `@mui/material` | ^5.x | Core UI components |
| `@mui/icons-material` | ^5.x | Icons |
| `@emotion/react` | ^11.x | MUI styling engine |
| `@emotion/styled` | ^11.x | MUI styled components |

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx                  # Sticky navbar with mobile drawer
│   ├── Hero.jsx                    # Hero banner with sofa image & CTA
│   ├── ShopSection.jsx             # "Crafted with excellent material" + product cards
│   ├── WhySection.jsx              # "Why Choose Us" features + room photo
│   ├── HelpSection.jsx             # "We Help You Make Modern Interior Design" + image collage
│   └── ProductHighlightSecrion.jsx # Horizontal product cards with Read More links
├── App.jsx                         # Assembles all sections + ThemeProvider
└── main.jsx                        # React entry point
```

---

## 🧩 Components

### `<Navbar />`
Sticky top navigation bar with:
- Logo, nav links with active underline animation
- Account & cart icon buttons
- Responsive mobile drawer with close button

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `activeLink` | `string` | `"Home"` | Which nav link appears highlighted |

```jsx
<Navbar activeLink="Home" />
```

---

### `<Hero />`
Full-width hero section with:
- Bold heading, subtitle text
- "Shop Now" (amber) and "Explore" (outlined) CTA buttons
- Sofa product image with drop shadow
- Decorative dot grid (top right)

```jsx
<Hero />
```

---

### `<ShopSection />`
Product showcase with:
- Left text block ("Crafted with excellent material") + Explore button
- 3 product cards in a responsive CSS grid (1 → 2 → 3 columns)
- Hover zoom effect on product images

```jsx
<ShopSection />
```

---

### `<WhySection />`
Two-column section with:
- Heading + description
- 2×2 feature grid (Fast Shipping, Easy to Shop, 24/7 Support, Free Returns) with double-circle icon style
- Room photo with amber dot grid decoration (top right)

```jsx
<WhySection />
```

---

### `<HelpSection />`
Two-column section with:
- Left: 3-image collage (large left image + top-right + overlapping bottom-right)
- Right: heading, description, 2-column checklist, Explore button
- Green dot grid decoration (top left)

```jsx
<HelpSection />
```

---

### `<ProductHighlights />`
Horizontal product cards row with:
- Thumbnail in rounded beige box
- Product name, short description, "Read More" link
- Responsive: 1 → 2 → 3 columns

```jsx
<ProductHighlights />
```

---




## 🙏 Credits

- Original design: [Furni by Untree.co](https://themewagon.github.io/furni/)
- Icons: [MUI Icons](https://mui.com/material-ui/material-icons/)
- Images: Furni template assets

---

## 📄 License

This project is for **educational purposes** only. Original design credits go to Untree.co.
