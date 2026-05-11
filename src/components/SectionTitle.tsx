interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionTitle({ eyebrow, title, description, align = "center" }: Props) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow && (
        <span className="glass inline-block rounded-full px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </div>
  );
}
