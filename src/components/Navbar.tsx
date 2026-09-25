import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/#about", label: "About" },
  { to: "/#experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/#skills", label: "Skills" },
  { to: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (to: string) => to === pathname;
  const linkCls = (to: string) => `nav-link ${isActive(to) ? "text-foreground" : ""}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || open || pathname !== "/" ? "border-b border-border bg-background/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="section-container">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex min-h-11 items-center gap-2 text-base font-semibold tracking-tight text-foreground">
            <span className="font-mono text-primary">~/</span>zohaib
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={linkCls(l.to)} aria-current={isActive(l.to) ? "page" : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <a href="/Zohaib_CV_v1.pdf" download="Muhammad_Zohaib_CV.pdf" className="btn-secondary hidden md:inline-flex">Résumé</a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="-mr-2 flex h-11 w-11 items-center justify-center text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <ul id="mobile-menu" className="flex flex-col pb-4 md:hidden">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpen(false)} className={`${linkCls(l.to)} flex min-h-11 items-center`} aria-current={isActive(l.to) ? "page" : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
