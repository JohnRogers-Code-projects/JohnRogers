'use client';

import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Building } from 'lucide-react';
import { Section, SectionHeader, Card, Button, TechBadge } from '@/components/ui';
import { experiences } from '@/data/projects';

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hoverable>
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

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export function Experience() {
  return (
    <Section id="cv">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <SectionHeader
          title="Experience"
          subtitle="Work history. See CV for details."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button href="/cv.pdf" variant="secondary" external>
            <Download className="w-4 h-4" />
            Download CV
          </Button>
        </motion.div>
      </div>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>

      <motion.p
        className="mt-8 text-sm text-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        I use side projects to explore architectural ideas in more depth than day jobs usually allow.
      </motion.p>
    </Section>
  );
}
