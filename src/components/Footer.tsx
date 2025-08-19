import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = [
    { label: "Home", href: "hero" },
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: portfolioData.social.github,
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: portfolioData.social.linkedin,
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: portfolioData.social.twitter,
      label: "Twitter"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              {portfolioData.personal.name}
            </h3>
            <p className="text-muted-foreground">
              {portfolioData.personal.tagline}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{portfolioData.personal.email}</p>
              <p>{portfolioData.personal.location}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} {portfolioData.personal.name}. Made with{" "}
            <Heart className="h-4 w-4 text-red-500 fill-current" /> using React & Tailwind
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;