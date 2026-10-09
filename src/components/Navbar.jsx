import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");
  const [activeSection, setActiveSection] = useState(window.location.hash || "#home");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark");
  }

  const themeToggle = (
    <button
      type="button"
      className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-neon-cyan/50 hover:text-neon-cyan"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "light"}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );

  useEffect(() => {
    function updateActiveSection() {
      const sectionIds = ["#contact", "#skills", "#projects", "#experience", "#about", "#home"];

      for (const id of sectionIds) {
        const section = document.querySelector(id);

        if (!section) {
          continue;
        }

        const rect = section.getBoundingClientRect();

        if (rect.top <= 160 && rect.bottom >= 160) {
          setActiveSection(id);
          return;
        }
      }

      setActiveSection("#home");
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#121212]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="font-display text-lg tracking-[0.28em] text-white">
          NIKET
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${activeSection === link.href ? "nav-link-active" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-neon-cyan/40 bg-gradient-to-r from-neon-cyan/15 to-neon-violet/15 px-5 py-2 text-sm font-medium text-neon-cyan transition duration-300 hover:-translate-y-0.5 hover:border-neon-cyan hover:shadow-neon"
          >
            Let&apos;s Talk
          </a>
          {themeToggle}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {themeToggle}
          <button
            type="button"
            className="inline-flex rounded-full border border-white/10 p-2 text-white"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#121212]/90 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm transition duration-300 hover:text-neon-cyan ${
                  activeSection === link.href ? "text-neon-cyan" : "text-white/75"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
