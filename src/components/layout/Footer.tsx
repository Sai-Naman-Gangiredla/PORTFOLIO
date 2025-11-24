import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";

const socialLinks = [
  { name: "GitHub", icon: Github, href: personalInfo.socialLinks.github },
  { name: "LinkedIn", icon: Linkedin, href: personalInfo.socialLinks.linkedin },
  { name: "Email", icon: Mail, href: personalInfo.socialLinks.email },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Skills", href: "/skills" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-heading font-bold text-primary mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-foreground/60 text-sm">
              {personalInfo.title}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks
                .filter((link) => Boolean(link.href))
                .map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-primary transition-colors"
                      aria-label={link.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-foreground/10 text-center text-sm text-foreground/60">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

