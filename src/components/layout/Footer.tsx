import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";

const socialLinks = [
  { icon: Github, href: "https://github.com/HirulaAbesignha", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hirulaabesignha", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-3xl font-bold tracking-tight">
              <span className="text-gradient">Hirula</span>
              <span className="text-foreground">.</span>
            </Link>
            <p className="mt-4 max-w-md font-body text-muted-foreground">
              Creative designer & developer crafting digital experiences that inspire and engage.
              Let's build something extraordinary together.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CustomButton variant="icon" size="icon">
                    <social.icon className="h-5 w-5" />
                  </CustomButton>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-body text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground">Get in Touch</h4>
            <ul className="mt-4 space-y-3 font-body text-muted-foreground">
              <li>hirulapinibinda01@gmail.com</li>
              <li>+94 (76) 175 2211</li>
              <li>Kandana, Sri Lanka</li>
            </ul>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 font-body text-primary transition-colors hover:text-primary/80">
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} Hirula. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Crafted with passion & precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
