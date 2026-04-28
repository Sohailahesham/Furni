import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShopSection from "./components/ShopSection";
import WhySection from "./components/WhySection";
import HelpSection from "./components/HelpSection";
import ProductHighlights from "./components/ProductHighlightSection";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShopSection />
      <WhySection />
      <HelpSection />
      <ProductHighlights/>
    </>
  );
}
