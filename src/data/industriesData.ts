export interface IndustryCard {
  title: string;
  description: string;
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface IndustryData {
  slug: string;
  navLabel: string;
  title: string;
  eyebrow?: string;
  lead: string;
  introTitle?: string;
  intro?: string;
  sectionTitle?: string;
  cards?: IndustryCard[];
  challenges?: IndustryCard[];
  caseStudies?: IndustryCard[];
  techStack?: string[];
  faqs?: IndustryFaq[];
  office?: { address: string; phone: string; email: string; hours: string };
  ctaTitle?: string;
  ctaText?: string;
  ctaButton?: string;
}

// Add verified industry content if Gargi Linux Access publishes these pages.
export const industriesData: IndustryData[] = [];

export const industryBySlug = (slug: string) =>
  industriesData.find((industry) => industry.slug === slug);
