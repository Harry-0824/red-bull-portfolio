export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectCaseStudy {
  scope: string[];
  architecture: string[];
  problems: string[];
  solutions: string[];
}

export interface Project {
  slug?: string;
  title: string;
  category: string;
  description: string;
  objective: string;
  task: string;
  result: string;
  highlights: string[];
  stack: string[];
  metrics: ProjectMetric[];
  image: ProjectImage;
  links: {
    live?: string;
    github?: string;
    githubBackend?: string;
  };
  tags: string[];
  readinessNote?: string;
  caseStudy?: ProjectCaseStudy;
}
