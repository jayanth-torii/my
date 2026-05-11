import { ArrowRight, Wind, Droplets, Sun } from "lucide-react";
import featured from "@/assets/featured-o2.png";

export function FeaturedPlant() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20">
      <div className="glass-strong relative overflow-hidden rounded-3xl p-6 shadow-soft md:p-12">
        <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-accent/25 blur-[120px]" />

        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div className="plant-glow relative grid h-[420px] place-items-center md:h-[520px]">
            <img
              src={featured}
              alt="O2 Oxygen Plant"
              loading="lazy"
              className="relative z-10 h-full w-auto object-contain animate-float drop-shadow-[0_40px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div>
            <span className="glass inline-block rounded-full px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Featured
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              We Have Great And Best <span className="text-gradient">O₂ Plants</span> Collection
            </h2>
            <p className="mt-4 text-muted-foreground">
              Oxygen-releasing plants, even after sunset. A statement piece for bedrooms, studios and living rooms — quietly transforming the air you breathe.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: Wind, label: "Air purify" },
                { icon: Droplets, label: "Low water" },
                { icon: Sun, label: "Indirect light" },
              ].map((f) => (
                <div key={f.label} className="glass rounded-xl p-3 text-center">
                  <f.icon className="mx-auto h-5 w-5 text-primary" />
                  <div className="mt-1 text-xs text-muted-foreground">{f.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button className="group inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.03]">
                Shop O₂ Plant
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <div>
                <div className="font-display text-2xl font-bold text-primary">Rs. 899</div>
                <div className="text-xs text-muted-foreground line-through">Rs. 1200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
