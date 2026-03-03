export interface Project {
  id: string;
  title: string;
  tagline: string;
  context: string;
  hypothesis: string;
  analysis: string;
  decision: string;
  impact: string;
  tags: string[];
}

export interface Skill {
  name: string;
  impact: string;
  icon: string;
}
