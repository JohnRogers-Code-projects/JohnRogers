'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Profile photo */}
          <motion.div
            className="mb-8 lg:mb-0 lg:order-2 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-card-border">
              <Image
                src="/profile.jpg"
                alt="John Rogers"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="lg:order-1 flex-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="text-foreground">John Rogers</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-muted mb-6">
              Backend engineer, Dublin
            </h2>

            {/* Value proposition */}
            <p className="text-lg text-muted max-w-xl mb-10 leading-relaxed">
              Over seven years building data analytics systems in regulated healthcare
              environments. Most of my work has involved handling PHI under HIPAA and GDPR,
              where correctness and auditability matter more than speed. Side projects let
              me explore failure modes and system boundaries in more depth.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button href="#projects" size="lg">
                Projects
              </Button>
              <Button href="#cv" variant="secondary" size="lg">
                CV
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/RogersJohn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/john-rogers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rogersjoh@gmail.com"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a
          href="#projects"
          className="flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
