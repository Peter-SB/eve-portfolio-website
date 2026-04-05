export function Footer() {
  return (
    <footer className="py-6 px-6 md:px-12 lg:px-20 bg-[#1C1C1A] border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-body text-xs tracking-widest text-white/30 uppercase">
          © {new Date().getFullYear()} Eve Dodd. All rights reserved.
        </span>

        <nav className="flex gap-8">
          {["About", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="font-body text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
