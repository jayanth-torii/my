import { ArrowRight, Sparkles, Leaf } from "lucide-react";
import heroPlant from "@/assets/hero-plant.png";
import snake from "@/assets/plant-snake.png";
import pothos from "@/assets/plant-pothos.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" aria-hidden />
      <div className="absolute -left-20 top-40 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" aria-hidden />
      <div className="absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[140px]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 pt-16 md:grid-cols-2 md:pt-24 lg:gap-8">
        <div className="animate-fade-up">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Indoor Plant Studio
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            <span className="text-gradient">Earth's</span>
            <br />
            <span className="text-foreground">Exhale.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Bring home the calm of a forest. Hand-picked indoor plants that breathe life, oxygen and quiet luxury into every corner.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="group inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.03]">
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary/60">
              Explore
            </button>
          </div>

          <div className="mt-12 flex gap-8">
            {[["120+", "Species"], ["15K", "Happy Homes"], ["4.9★", "Rated"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-bold text-foreground">{n}</div>
                <div className="text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[520px] md:h-[640px]">
          {/* glow */}
          <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[80px] animate-glow" />
          <img
            src={heroPlant}
            alt="Featured monstera plant"
            width={1024}
            height={1280}
            className="relative z-10 mx-auto h-full w-auto object-contain animate-float drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
          />

          {/* Floating glass cards */}
          <div className="glass absolute left-0 top-12 z-20 hidden w-52 rounded-2xl p-3 shadow-card animate-fade-up sm:block">
            <div className="flex items-center gap-3">
              <img src={snake} alt="" width={48} height={48} loading="lazy" className="h-12 w-12 rounded-xl bg-secondary/60 object-contain p-1" />
              <div>
                <div className="text-sm font-semibold">Snake Plant</div>
                <div className="text-xs text-primary">$24.00</div>
              </div>
            </div>
          </div>

          <div className="glass absolute bottom-20 right-0 z-20 hidden w-56 rounded-2xl p-3 shadow-card animate-fade-up sm:block" style={{ animationDelay: "150ms" }}>
            <div className="flex items-center gap-3">
              <img src={pothos} alt="" width={48} height={48} loading="lazy" className="h-12 w-12 rounded-xl bg-secondary/60 object-contain p-1" />
              <div>
                <div className="text-sm font-semibold">Golden Pothos</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Leaf className="h-3 w-3 text-primary" /> Air purifying
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
