import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { PlantCard, type Plant } from "@/components/PlantCard";
import { TopSellingCard } from "@/components/TopSelling";
import { TestimonialCard, type Testimonial } from "@/components/TestimonialCard";
import { FeaturedPlant } from "@/components/FeaturedPlant";
import { Footer } from "@/components/Footer";

import snake from "@/assets/plant-snake.png";
import fiddle from "@/assets/plant-fiddle.png";
import zz from "@/assets/plant-zz.png";
import pothos from "@/assets/plant-pothos.png";
import palm from "@/assets/plant-palm.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PlantsNation — Premium Indoor Plants" },
      { name: "description", content: "Earth's Exhale. Curated indoor plants and desk decorations delivered to your door." },
      { property: "og:title", content: "PlantsNation — Earth's Exhale" },
      { property: "og:description", content: "Premium indoor plants for trendy homes and desks." },
    ],
  }),
});

const trending: (Plant & { sold?: string })[] = [
  { name: "Areca Palm", description: "Tropical fronds that purify the air all day long.", price: 599, image: palm, tag: "Trendy", sold: "1.2k" },
  { name: "For Your Desks Decorations", description: "Compact greens, designed to elevate your workspace aesthetic.", price: 399, image: fiddle, tag: "Desk Pick", sold: "860" },
];

const products: Plant[] = [
  { name: "Aglaonema Plant", description: "Vibrant patterned leaves, low maintenance.", price: 350, image: pothos, tag: "Easy" },
  { name: "Phantom Lilies", description: "Elegant white blooms with deep green leaves.", price: 450, image: fiddle },
  { name: "Cactus", description: "Sculptural, drought-loving and effortless.", price: 250, image: zz, tag: "New" },
  { name: "Cebu Cheese Plant", description: "Perforated leaves with a tropical attitude.", price: 410, image: snake },
  { name: "Sansevieria", description: "The ultimate beginner plant — purifies all night.", price: 480, image: snake, tag: "Hardy" },
  { name: "Agave Plant", description: "Architectural rosettes for a desert vibe.", price: 380, image: zz },
];

const testimonials: Testimonial[] = [
  { name: "Riya Bansal", role: "Interior Designer", rating: 5, avatar: "R", text: "PlantsNation transformed my studio. Plants arrived perfectly packed and have flourished for months." },
  { name: "Karan Mehta", role: "Architect", rating: 5, avatar: "K", text: "Quality is on another level. Premium pots, careful packaging — exactly what my clients expect." },
];

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />

        {/* Our Trendy Plants */}
        <section className="relative mx-auto max-w-7xl px-4 py-20">
          <SectionTitle eyebrow="Collection" title="Our Trendy Plants" description="Hand-picked greens loved across thousands of homes and desks." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {trending.map((p) => <TopSellingCard key={p.name} plant={p} />)}
          </div>
        </section>

        {/* Product Grid */}
        <section className="relative mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => <PlantCard key={p.name} plant={p} />)}
          </div>
        </section>

        {/* Customer Review */}
        <section className="relative mx-auto max-w-7xl px-4 py-20">
          <SectionTitle eyebrow="Reviews" title="Customer Review" description="Real homes. Real growth. Real love." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => <TestimonialCard key={t.name} t={t} />)}
          </div>
        </section>

        {/* Our Best o2 */}
        <section className="relative mx-auto max-w-7xl px-4 pt-4">
          <SectionTitle eyebrow="Featured" title="Our Best O₂" description="The plants that release oxygen even at night — collected for you." />
        </section>
        <FeaturedPlant />
      </main>
      <Footer />
    </div>
  );
}
