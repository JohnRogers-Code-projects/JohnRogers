'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Shield, AlertTriangle, Target } from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { engineeringPhilosophy } from '@/data/projects';

const icons = [
  Target,      // Correctness Over Confidence
  Shield,      // Refusal is a Feature
  AlertTriangle, // Explicit Boundaries
  Lightbulb,   // Failure as Signal
];

function PhilosophyCard({ point, index }: { point: typeof engineeringPhilosophy[0]; index: number }) {
  const Icon = icons[index] || Lightbulb;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-accent/10 text-accent">
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {point.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              {point.description}
            </p>
            {point.example && (
              <div className="p-3 rounded-lg bg-card-border/30 border-l-2 border-accent">
                <p className="text-sm text-muted italic">
                  <span className="text-foreground font-medium">Example: </span>
                  {point.example}
                </p>
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Philosophy() {
  return (
    <Section id="philosophy" className="bg-gradient-to-b from-transparent via-card-bg/30 to-transparent">
      <SectionHeader
        title="How I Think"
        subtitle="Engineering principles that guide my work. These aren't abstract ideals—they're constraints I build into every system."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {engineeringPhilosophy.map((point, index) => (
          <PhilosophyCard key={index} point={point} index={index} />
        ))}
      </div>

      {/* Summary quote */}
      <motion.blockquote
        className="mt-12 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-xl md:text-2xl text-muted italic leading-relaxed">
          &ldquo;A system that fails explicitly is infinitely more valuable than one that succeeds ambiguously.&rdquo;
        </p>
      </motion.blockquote>
    </Section>
  );
}
