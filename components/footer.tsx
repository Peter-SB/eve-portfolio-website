export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eve Dod. All rights reserved.
          </span>
        </div>
        
        <nav className="flex gap-6">
          <a 
            href="#about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a 
            href="#case-studies" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </a>
          <a 
            href="#contact" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
