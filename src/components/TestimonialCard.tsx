import { Star } from "lucide-react";

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="glass rounded-2xl p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full gradient-primary font-display text-lg font-bold text-primary-foreground shadow-glow">
          {t.avatar}
        </div>
        <div>
          <div className="font-semibold">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </div>
      <div className="mt-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-primary text-primary" : "text-muted"}`} />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
    </article>
  );
}
