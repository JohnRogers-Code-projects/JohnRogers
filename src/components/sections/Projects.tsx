'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { Section, SectionHeader, Card, Button, Badge, TechBadge } from '@/components/ui';
import { projects, Project } from '@/data/projects';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden" hoverable={false}>
        {/* Card Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
              <Badge variant="success">
                {project.status === 'live' ? 'Live' : project.status === 'beta' ? 'Beta' : 'Dev'}
              </Badge>
            </div>
            <p className="text-accent font-medium">{project.tagline}</p>
          </div>

          <div className="flex gap-3">
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary" size="sm" external>
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            )}
            <Button href={project.githubUrl} variant="secondary" size="sm" external>
              <Github className="w-4 h-4" />
              Code
            </Button>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted mb-6 leading-relaxed">{project.description}</p>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {project.highlights.map((highlight, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Expand/Collapse button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm text-accent hover:text-accent-muted transition-colors mb-4"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Less detail
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Technical depth
            </>
          )}
        </button>

        {/* Expandable content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-card-border space-y-6">
                {/* Problem */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                    The Problem
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">{project.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                    The Solution
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">{project.solution}</p>
                </div>

                {/* Differentiator */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                    Why This Is Different
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">{project.differentiator}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech stack */}
        <div className="pt-4 border-t border-card-border mt-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        title="Flagship Projects"
        subtitle="Systems built with intention. Each project demonstrates specific engineering principles—not just what was built, but why it matters."
      />

      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
