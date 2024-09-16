import { FeaturedProducts } from "../featuredProducts";
import { Footer } from "../footer";
import { Hero } from "../hero";
import { SubsribeSection } from "../subscribeSection";

export const MainPage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <SubsribeSection />
      <Footer />
    </main>
  );
};
