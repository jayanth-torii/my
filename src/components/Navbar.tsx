import { useState } from "react";
import { Leaf, Search, ShoppingBag, User, Menu, X } from "lucide-react";

const links = ["Home", "Products", "About", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3 shadow-soft">
          <a href="#" className="flex items-center gap-2 group">
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-primary shadow-glow">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">PlantsNation</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button aria-label="Search" className="hidden h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-all hover:bg-secondary/60 hover:text-primary md:grid">
              <Search className="h-4 w-4" />
            </button>
            <button aria-label="Profile" className="hidden h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-all hover:bg-secondary/60 hover:text-primary md:grid">
              <User className="h-4 w-4" />
            </button>
            <button aria-label="Cart" className="relative grid h-10 w-10 place-items-center rounded-xl bg-secondary/60 text-foreground transition-all hover:bg-secondary">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full gradient-primary text-[10px] font-semibold text-primary-foreground">3</span>
            </button>
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl text-foreground md:hidden">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="glass-strong mt-2 rounded-2xl p-4 md:hidden animate-fade-up">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l}><a href="#" className="block py-1 text-sm text-foreground/90">{l}</a></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
