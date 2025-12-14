import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Admissions", href: "#admissions" },
    { name: "Courses", href: "#courses" },
    { name: "Faculty", href: "#faculty" },
    { name: "Events", href: "#events" },
    { name: "Contact Us", href: "#contact" },
  ];

  const institutions = [
    { name: "Engineering College", href: "#engineering" },
    { name: "Arts & Science College", href: "#arts" },
    { name: "Polytechnic", href: "#polytechnic" },
    { name: "Higher Secondary School", href: "#school" },
  ];

  const resources = [
    { name: "Student Portal", href: "#" },
    { name: "Library", href: "#" },
    { name: "E-Learning", href: "#" },
    { name: "Exam Results", href: "#" },
    { name: "Downloads", href: "#" },
    { name: "Career Portal", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <GraduationCap className="text-secondary-foreground" size={28} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Pannai Group</h3>
                <p className="text-sm text-primary-foreground/70">of Institutions</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4 leading-relaxed">
              Established in 1985, Pannai Group of Institutions has been a beacon of 
              educational excellence, nurturing generations of leaders and professionals.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors" aria-label="Youtube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary flex items-center gap-2 text-sm transition-colors"
                  >
                    <ArrowRight size={14} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Institutions */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Our Institutions</h4>
            <ul className="space-y-2 mb-6">
              {institutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary flex items-center gap-2 text-sm transition-colors"
                  >
                    <ArrowRight size={14} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-serif text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary flex items-center gap-2 text-sm transition-colors"
                  >
                    <ArrowRight size={14} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={20} className="text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Pannai Nagar, NH-45,<br />
                  Sivakasi - 626124,<br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <a href="mailto:info@pannai.edu.in" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@pannai.edu.in
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Mon - Sat: 8:00 AM - 5:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© 2024 Pannai Group of Institutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
