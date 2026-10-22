export interface Project {
  index?: string;
  title: string;
  url?: string;
  github?: string;
  images: string[];
  videos?: string[];
  date: string;
  tech: string[];
  /** Paragraphs split by a blank line; **text** renders bold. */
  description?: string;
  /** Small print shown under the description. */
  disclaimer?: string;
  challenges?: string[];
  results?: string[];
}
