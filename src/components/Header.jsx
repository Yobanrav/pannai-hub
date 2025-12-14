import { useState } from "react";
import { Menu, X, GraduationCap, Phone, Mail, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const schools = [
    { name: "Pannai Engineering College", href: "#engineering" },
    { name: "Pannai Arts & Science College", href: "#arts" },
    { name: "Pannai Polytechnic", href: "#polytechnic" },
    { name: "Pannai Higher Secondary School", href: "#school" },
  ];

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Schools", href: "#schools", dropdown: schools },
    { name: "Admissions", href: "#admissions" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card shadow-lg">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
            <a href="mailto:info@pannai.edu.in" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">info@pannai.edu.in</span>
            </a>
          </div>
          <a href="/admin" className="btn-secondary text-xs py-1 px-3 rounded">
            Admin Login
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
              <GraduationCap className="text-primary-foreground" size={32} />
            </div>
            <div>
              <h1 className="font-serif text-xl md:text-2xl font-bold text-primary leading-tight">
                Pannai Group
              </h1>
              <p className="text-sm text-muted-foreground">of Institutions</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <li 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-foreground hover:text-primary font-medium transition-colors py-2"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={16} />}
                </a>
                {item.dropdown && activeDropdown === item.name && (
                  <ul className="absolute top-full left-0 bg-card shadow-lg rounded-lg py-2 min-w-[240px] animate-fade-in">
                    {item.dropdown.map((school) => (
                      <li key={school.name}>
                        <a
                          href={school.href}
                          className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {school.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-in">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 px-4 text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
                    onClick={() => !item.dropdown && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <ul className="ml-4 mt-1">
                      {item.dropdown.map((school) => (
                        <li key={school.name}>
                          <a
                            href={school.href}
                            className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {school.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
