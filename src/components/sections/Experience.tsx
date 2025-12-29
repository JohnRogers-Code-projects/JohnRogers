'use client';

import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Building } from 'lucide-react';
import { Section, SectionHeader, Card, Button, TechBadge } from '@/components/ui';
import { experiences } from '@/data/projects';

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < experiences.length - 1 && (
        <div className="absolute left-[11px] top-14 bottom-0 w-[2px] bg-card-border hidden md:block" />
      )}

      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="hidden md:flex flex-col items-center">
          <div className="w-6 h-6 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-accent" />
          </div>
        </div>

        <Card className="flex-1" hoverable>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{experience.role}</h3>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <Building className="w-4 h-4" />
                  {experience.company}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {experience.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {experience.location}
                </span>
              </div>
            </div>
          </div>

          <p className="text-muted mb-4">{experience.description}</p>

          <ul className="space-y-2 mb-6">
            {experience.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                <span className="text-accent mt-1.5">-</span>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <Section id="cv">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <SectionHeader
          title="Experience"
          subtitle="Backend-focused roles building distributed systems, data pipelines, and platform infrastructure."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button href="/cv.pdf" variant="secondary" external>
            <Download className="w-4 h-4" />
            Download CV (PDF)
          </Button>
        </motion.div>
      </div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>

      {/* Education note */}
      <motion.div
        className="mt-12 p-6 rounded-xl bg-card-bg/50 border border-card-border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h4 className="font-semibold text-foreground mb-2">Education</h4>
        <p className="text-muted">
          BSc Computer Science - Trinity College Dublin
        </p>
      </motion.div>
    </Section>
  );
}
