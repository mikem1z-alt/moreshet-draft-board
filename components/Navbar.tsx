export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a className="flex items-center gap-3" href="#top" aria-label="Moreshet Draft Board home">
          <span className="h-3 w-3 rounded-full bg-red-500 glow-red" />
          <span className="font-black tracking-wide text-white">ESPN MORESHET</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-semibold text-zinc-300 sm:flex">
          <a className="transition hover:text-white" href="#rankings">Rankings</a>
          <a className="transition hover:text-white" href="#analytics">Analytics</a>
        </div>
      </div>
    </nav>
  );
}
