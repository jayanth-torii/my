import { ArrowUpRight } from "lucide-react";
import type { Plant } from "./PlantCard";

export function TopSellingCard({ plant }: { plant: Plant & { sold?: string } }) {
  return (
    <article className="glass-strong group relative overflow-hidden rounded-3xl p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-opacity group-hover:opacity-80" />
      <div className="relative grid grid-cols-[1fr_auto] items-end gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-primary">{plant.tag ?? "Bestseller"}</span>
          <h3 className="mt-2 font-display text-2xl font-bold leading-tight">{plant.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{plant.description}</p>
          <div className="mt-5 flex items-center gap-4">
            <span className="font-display text-2xl font-bold text-primary">Rs. {plant.price.toFixed(0)}</span>
            {plant.sold && <span className="text-xs text-muted-foreground">{plant.sold} sold</span>}
          </div>
        </div>
        <div className="plant-glow relative h-44 w-32 sm:h-56 sm:w-44">
          <img
            src={plant.image}
            alt={plant.name}
            loading="lazy"
            className="relative z-10 h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
      <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground">
        View Details <ArrowUpRight className="h-4 w-4" />
      </button>
    </article>
  );
}
