export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  differentiator: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  highlights: string[];
  status: 'live' | 'beta' | 'development';
}

export const projects: Project[] = [
  {
    id: 'forgebreaker',
    name: 'ForgeBreaker',
    tagline: 'MTG Arena deck analysis with trust and explainability',
    description: 'A Magic: The Gathering Arena deck analysis tool built on principles of trust, legality, and explainability. Designed for real player value without compromising game integrity.',
    problem: 'MTG Arena players need deck insights, but most tools either violate ToS, provide opaque recommendations, or prioritize engagement over actual improvement.',
    solution: 'ForgeBreaker analyzes publicly available data through legitimate channels, providing transparent reasoning for every recommendation. No black boxes, no ToS violations.',
    differentiator: 'Every recommendation comes with clear reasoning. The system explicitly states its confidence levels and explains when it doesn\'t have enough data—because honest uncertainty beats false confidence.',
    techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Railway'],
    liveUrl: 'https://frontend-production-57a1.up.railway.app/',
    githubUrl: 'https://github.com/RogersJohn/ForgeBreaker',
    highlights: [
      'Fully ToS-compliant data collection',
      'Explainable AI recommendations',
      'Confidence-bounded predictions',
      'Real-time meta analysis'
    ],
    status: 'live'
  },
  {
    id: 'mlforge',
    name: 'MLForge',
    tagline: 'ML pipeline orchestration with failure as a first-class citizen',
    description: 'An ML pipeline framework that treats failure modes and commitment boundaries as core architectural concerns, not afterthoughts.',
    problem: 'Most ML pipelines are optimistic by default. They assume data is clean, models will converge, and deployments will succeed. Reality is messier.',
    solution: 'MLForge builds failure handling into the pipeline definition. Every stage declares its failure modes, rollback strategies, and commitment points. The system knows what can fail and how to recover.',
    differentiator: 'Pipeline integrity is enforced at the framework level. You can\'t deploy a model without defining what happens when it drifts. You can\'t process data without declaring validation boundaries.',
    techStack: ['Python', 'Kubernetes', 'PostgreSQL', 'Redis', 'Prometheus'],
    liveUrl: 'https://frontend-production-30a6b.up.railway.app/',
    githubUrl: 'https://github.com/JohnRogers-Code-projects/MLForge',
    highlights: [
      'Explicit failure mode declarations',
      'Automatic rollback orchestration',
      'Commitment boundary enforcement',
      'Observable pipeline state'
    ],
    status: 'live'
  },
  {
    id: 'mcp-demo',
    name: 'MCP-Demo',
    tagline: 'AI tool invocation with principled refusal',
    description: 'A demonstration of the Model Context Protocol with a focus on constrained tool invocation and principled refusal patterns.',
    problem: 'AI systems with tool access often fail silently, hallucinate capabilities, or execute actions they shouldn\'t. The failure modes are poorly defined.',
    solution: 'MCP-Demo implements strict tool boundaries with explicit refusal semantics. When the system can\'t do something, it says why—clearly and consistently.',
    differentiator: 'Refusal is a feature, not a bug. The demo includes examples of the system correctly declining requests that fall outside its defined capabilities, with clear explanations.',
    techStack: ['TypeScript', 'MCP Protocol', 'Node.js', 'React'],
    liveUrl: 'https://mcp-demo-production-ddc8.up.railway.app/',
    githubUrl: 'https://github.com/JohnRogers-Code-projects/MCP-Demo',
    highlights: [
      'Explicit capability boundaries',
      'Principled refusal patterns',
      'Clear error semantics',
      'Live refusal examples'
    ],
    status: 'live'
  }
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Current Company',
    role: 'Senior Backend Engineer',
    period: '2022 - Present',
    location: 'Remote / Ireland',
    description: 'Leading backend architecture for distributed systems handling millions of daily transactions.',
    highlights: [
      'Designed and implemented event-driven architecture reducing system latency by 40%',
      'Led migration from monolith to microservices, improving deployment frequency 10x',
      'Established observability practices across 15+ services',
      'Mentored junior engineers on systems design principles'
    ],
    technologies: ['Python', 'Go', 'PostgreSQL', 'Kafka', 'Kubernetes', 'AWS']
  },
  {
    company: 'Previous Company',
    role: 'Backend Engineer',
    period: '2019 - 2022',
    location: 'Dublin, Ireland',
    description: 'Built and maintained core platform services for a high-growth fintech.',
    highlights: [
      'Implemented real-time fraud detection pipeline processing 100k+ events/second',
      'Designed API gateway handling 50M+ requests/day',
      'Reduced infrastructure costs by 35% through optimization',
      'Led technical interviews and onboarding for backend team'
    ],
    technologies: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'GCP']
  },
  {
    company: 'Earlier Company',
    role: 'Software Engineer',
    period: '2017 - 2019',
    location: 'Dublin, Ireland',
    description: 'Full-stack development with a focus on backend services and data pipelines.',
    highlights: [
      'Built ETL pipelines processing 10TB+ daily data volume',
      'Developed internal tooling that reduced manual operations by 80%',
      'Contributed to open-source data processing libraries'
    ],
    technologies: ['Python', 'Java', 'Apache Spark', 'MySQL', 'AWS']
  }
];

export interface PhilosophyPoint {
  title: string;
  description: string;
  example?: string;
}

export const engineeringPhilosophy: PhilosophyPoint[] = [
  {
    title: 'Correctness Over Confidence',
    description: 'Systems should know their limits. A system that says "I don\'t know" when it genuinely doesn\'t is more valuable than one that guesses with false confidence.',
    example: 'ForgeBreaker explicitly reports confidence intervals and refuses to make recommendations when data is insufficient.'
  },
  {
    title: 'Refusal is a Feature',
    description: 'A well-designed system knows what it can\'t do and communicates that clearly. Silent failures or hallucinated capabilities are worse than explicit refusal.',
    example: 'MCP-Demo demonstrates principled refusal with clear explanations for why certain requests cannot be fulfilled.'
  },
  {
    title: 'Explicit Boundaries',
    description: 'System boundaries, failure modes, and commitment points should be declared upfront—not discovered in production. If you can\'t articulate where your system ends, you don\'t understand it.',
    example: 'MLForge requires explicit failure mode declarations for every pipeline stage.'
  },
  {
    title: 'Failure as Signal',
    description: 'Failures aren\'t bugs to be hidden—they\'re information about system boundaries. Embrace failure as a core part of system design, not an exception to it.',
    example: 'All three projects treat failure handling as architectural concerns, not afterthoughts.'
  }
];
