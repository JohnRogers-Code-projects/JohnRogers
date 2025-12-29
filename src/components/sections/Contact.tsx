'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Section, Button } from '@/components/ui';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/RogersJohn',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/john-rogers',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:rogersjoh@gmail.com',
    icon: Mail,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-muted mb-6">
            Based in Ireland. Open to remote work in EU timezones.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              href={link.href}
              variant="secondary"
              external
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </Button>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} John Rogers</p>
        <nav className="flex gap-6">
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#cv" className="hover:text-foreground transition-colors">
            CV
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
