import { ShoppingBag } from "lucide-react";

export interface Plant {
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
}

export function PlantCard({ plant }: { plant: Plant }) {
  return (
    <article className="group glass relative overflow-hidden rounded-2xl p-5 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
      {plant.tag && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-primary/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
          {plant.tag}
        </span>
      )}
      <div className="plant-glow relative mb-4 grid h-56 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-secondary/50 to-transparent">
        <img
          src={plant.image}
          alt={plant.name}
          loading="lazy"
          className="relative z-10 h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <h3 className="font-display text-lg font-semibold">{plant.name}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{plant.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-display text-xl font-bold text-primary">Rs. {plant.price.toFixed(0)}</span>
        <button
          aria-label={`Add ${plant.name} to cart`}
          className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-110"
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
