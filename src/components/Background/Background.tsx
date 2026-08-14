export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-bg-primary" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(99, 102, 241, 0.08), transparent),
            radial-gradient(ellipse 50% 30% at 20% 80%, rgba(59, 130, 246, 0.06), transparent)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
    </div>
  );
}
