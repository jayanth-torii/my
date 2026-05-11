import { Leaf, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl gradient-primary shadow-glow">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display text-lg font-semibold">PlantsNation</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              We have always grown vibrant indoor plants, all delivered with care to bring quiet luxury into your home.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="grid h-9 w-9 place-items-center rounded-xl glass text-muted-foreground transition-all hover:text-primary hover:scale-110">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {["Home", "Products", "About", "Contact", "Privacy"].map((l) => (
                <li key={l}><a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Get Every Updates</h4>
            <p className="mt-4 text-sm text-muted-foreground">Plant care tips & 10% off your first order.</p>
            <form className="glass mt-4 flex items-center rounded-full p-1.5">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 bg-transparent px-4 text-sm placeholder:text-muted-foreground focus:outline-none"
                aria-label="Email"
              />
              <button aria-label="Subscribe" className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-primary-foreground transition-transform hover:scale-110">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} PlantsNation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
