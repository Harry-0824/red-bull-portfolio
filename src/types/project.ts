// src/types/project.ts
// 共用 Project 型別定義

export interface Project {
  title: string;
  category: string;
  description: string;
  objective: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  image: string;
  links: {
    live?: string;
    github?: string;
    githubBackend?: string;
  };
  tags: string[];
}
