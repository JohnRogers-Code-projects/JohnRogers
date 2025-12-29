'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader, Card } from '@/components/ui';
import { engineeringPhilosophy } from '@/data/projects';

function PhilosophyCard({ point, index }: { point: typeof engineeringPhilosophy[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <h3 className="text-lg font-semibold text-foreground mb-3">
          {point.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed">
          {point.description}
        </p>
      </Card>
    </motion.div>
  );
}

export function Philosophy() {
  return (
    <Section id="philosophy">
      <SectionHeader
        title="Things I care about"
        subtitle="Ideas that show up in how I build things."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {engineeringPhilosophy.map((point, index) => (
          <PhilosophyCard key={index} point={point} index={index} />
        ))}
      </div>
    </Section>
  );
}
