export type PageRoute = 'home' | 'case-study' | 'our-work' | 'about' | 'contact' | 'service-detail' | 'industry-detail' | 'privacy-policy' | 'terms-&-conditions' | 'blogs' | 'blog-detail' | 'opportunities';

export interface GoalItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FrameworkStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface ProjectCard {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  industry: string;
  goal: string;
  service: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  items: string;
  status: 'Completed' | 'In-Progress' | 'Next' | 'Future';
}
