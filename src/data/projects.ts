export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  limitations: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  status: 'live' | 'beta' | 'development';
}

export const projects: Project[] = [
  {
    id: 'forgebreaker',
    name: 'ForgeBreaker',
    tagline: 'Deck analysis for MTG Arena',
    description: 'A tool for looking at Magic: The Gathering Arena decks. It pulls publicly available card and deck data and tries to surface useful patterns without pretending to know more than it does.',
    problem: 'I wanted a way to analyze decks without using tools that scrape private data or violate the game\'s terms of service. Most existing tools are either shady about where their data comes from or they present guesses as facts.',
    approach: 'ForgeBreaker only uses public data. When it shows you something, it tells you where that information came from. If it doesn\'t have enough data to say something useful, it says so instead of making something up.',
    limitations: 'This is a side project, not a production service. The data updates when I run the scraper. It doesn\'t predict wins or tell you what deck to play—it just shows you what\'s in the data.',
    techStack: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    liveUrl: 'https://frontend-production-57a1.up.railway.app/',
    githubUrl: 'https://github.com/RogersJohn/ForgeBreaker',
    status: 'live'
  },
  {
    id: 'mlforge',
    name: 'MLForge',
    tagline: 'ML pipeline tool with explicit failure handling',
    description: 'A framework for defining ML pipelines where you have to declare what happens when things go wrong. The idea is that failure modes should be part of the pipeline definition, not something you bolt on later.',
    problem: 'Most ML pipeline tools assume everything will work. You define the happy path, and error handling is an afterthought. I wanted to try the opposite: make failure handling a required part of defining a pipeline stage.',
    approach: 'Each stage in the pipeline has to declare what kinds of failures it can produce and what should happen for each one. The framework won\'t let you skip this step.',
    limitations: 'This is an experiment in API design, not a battle-tested framework. I use it to think through how failure handling could work, not to run production workloads.',
    techStack: ['Python', 'PostgreSQL', 'Redis'],
    liveUrl: 'https://frontend-production-30a6b.up.railway.app/',
    githubUrl: 'https://github.com/JohnRogers-Code-projects/MLForge',
    status: 'live'
  },
  {
    id: 'mcp-demo',
    name: 'MCP-Demo',
    tagline: 'Demo of AI tool constraints using MCP',
    description: 'A demo application showing how to use the Model Context Protocol to give an AI access to tools while being explicit about what it can and can\'t do.',
    problem: 'When you give an AI system access to tools, it\'s not always clear what happens when the AI tries to do something it shouldn\'t, or asks for something that doesn\'t exist. I wanted to see what explicit refusal looks like in practice.',
    approach: 'The demo defines a set of tools with clear boundaries. When the AI asks for something outside those boundaries, the system refuses and explains why. The point is to make the "no" as clear as the "yes".',
    limitations: 'This is a demo, not a security tool. It shows one way to handle tool boundaries, but it\'s not a comprehensive solution to AI safety or anything like that.',
    techStack: ['TypeScript', 'Node.js', 'React'],
    liveUrl: 'https://mcp-demo-production-ddc8.up.railway.app/',
    githubUrl: 'https://github.com/JohnRogers-Code-projects/MCP-Demo',
    status: 'live'
  }
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Merative (formerly IBM Watson Health)',
    role: 'Software Engineer – Data Analytics',
    period: '2022 – 2024',
    location: 'Dublin',
    description: 'Healthcare analytics applications for US and EU clients in HIPAA/GDPR-regulated environments. Built React frontends connected to Snowflake, implemented data access controls for PHI compliance, maintained MDX queries for healthcare analysis.',
    technologies: ['React', 'Snowflake', 'MDX', 'HIPAA', 'GDPR']
  },
  {
    company: 'IBM Watson Health',
    role: 'Software Engineer – Healthcare Analytics',
    period: '2018 – 2022',
    location: 'Dublin',
    description: 'Data analytics and reporting on regulated healthcare datasets. Built Cognos reports against PHI-containing datasets, implemented access controls and audit logging, developed Java test suites for data integrity validation.',
    technologies: ['Java', 'Cognos', 'SQL', 'JUnit', 'HIPAA']
  },
  {
    company: 'IBM',
    role: 'Software Engineer – Watson Workspace',
    period: '2016 – 2018',
    location: 'Dublin',
    description: 'Backend automation and data pipelines for IBM\'s collaboration platform. Built automated localisation pipeline in Ruby, implemented pagination for ETL pipelines, added test coverage with Selenium and JUnit.',
    technologies: ['Ruby', 'Java', 'Selenium', 'JUnit', 'ETL']
  }
];

export interface PhilosophyPoint {
  title: string;
  description: string;
}

export const engineeringPhilosophy: PhilosophyPoint[] = [
  {
    title: 'Say "I don\'t know"',
    description: 'If a system doesn\'t have enough information to answer, it should say so. Guessing with false confidence is worse than admitting uncertainty.'
  },
  {
    title: 'Refusal should be clear',
    description: 'When a system can\'t or won\'t do something, it should say why. Silent failures and vague errors make debugging impossible.'
  },
  {
    title: 'Define failure modes upfront',
    description: 'If you can\'t describe how your system fails, you don\'t understand it well enough. Failure handling shouldn\'t be an afterthought.'
  }
];
