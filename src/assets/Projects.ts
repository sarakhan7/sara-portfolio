import { IconType } from 'react-icons';
import {
  FaCodeBranch, FaCommentAlt, FaHeart, FaStar,
} from 'react-icons/fa';
import {
  FiFigma, FiGithub,
} from 'react-icons/fi';
import { SiResearchgate } from 'react-icons/si';
import { TbBrandDeviantart } from 'react-icons/tb';

export const platforms = ['github', 'figma', 'deviantart', 'researchgate'] as const;
export type Platform = (typeof platforms)[number]

export const platformDetails: Record<Platform, {
  label: string,
  sublabel: string,
  icon: IconType }> = {
    github: {
      label: 'GitHub',
      icon: FiGithub,
      sublabel: 'Code repository',
    },
    figma: {
      label: 'Figma',
      icon: FiFigma,
      sublabel: 'Design prototype',
    },
    deviantart: {
      label: 'DeviantArt',
      icon: TbBrandDeviantart,
      sublabel: 'Artwork',
    },
    researchgate: {
      label: 'ResearchGate',
      sublabel: 'Research paper',
      icon: SiResearchgate,
    },
  };

export const interactions = ['stars', 'forks', 'comments', 'likes'] as const;
export type Interaction = (typeof interactions)[number];

export const interactionDetails: Record<Interaction, { label: string, icon: IconType }> = {
  stars: { label: 'Stars', icon: FaStar },
  forks: { label: 'Forks', icon: FaCodeBranch },
  comments: { label: 'Comments', icon: FaCommentAlt },
  likes: { label: 'Likes', icon: FaHeart },
};

export interface Project {
  title: string;
  description?: string;
  thumbnail?: string;
  source: string;
  demo?: string;
  language?: string;
  createdAt?: string;
  updatedAt?: string;
  interactions?: Partial<Record<Interaction, number>>;
  platform: Platform;
}

// Sara's Projects Data
export const saraProjects: Project[] = [
  {
    title: "Aurify",
    description: "AI communication coach that gives real-time feedback and guidance to help users become better communicators.",
    source: "https://github.com/sarakhan7/aurify",
    demo: "https://aurify.vercel.app",
    language: "React, OpenAI API, Firebase, Tailwind",
    platform: "github",
    interactions: {
      stars: 15,
      forks: 3,
    },
  },
  {
    title: "GlobalPulse",
    description: "Real-time AI sentiment dashboard that analyzes public opinion on topics across different countries and regions.",
    source: "https://github.com/sarakhan7/globalpulse",
    demo: "https://globalpulse.vercel.app",
    language: "Next.js, Gemini, Tailwind, Chart.js",
    platform: "github",
    interactions: {
      stars: 12,
      forks: 2,
    },
  },
  {
    title: "StudyFi",
    description: "AI flashcards, vocab extractor, note parser - Hackathon project from HSHacks",
    source: "https://github.com/sarakhan7/studyfi",
    demo: "https://studyfi.vercel.app",
    language: "React, AI, Tailwind",
    platform: "github",
    interactions: {
      stars: 8,
      forks: 1,
    },
  },
  {
    title: "SafeRoute",
    description: "Safety-based route generator using crime data to help users find the safest path to their destination.",
    source: "https://github.com/sarakhan7/saferoute",
    demo: "https://saferoute.vercel.app",
    language: "React, Mapbox, Crime Data API",
    platform: "github",
    interactions: {
      stars: 10,
      forks: 2,
    },
  },
  {
    title: "ChemoPal",
    description: "Companion app for young chemotherapy patients - UncommonHacks project",
    source: "https://github.com/sarakhan7/chemopal",
    demo: "https://chemopal.vercel.app",
    language: "React, Firebase, Tailwind",
    platform: "github",
    interactions: {
      stars: 6,
      forks: 1,
    },
  },
  {
    title: "BugBot",
    description: "AI debugging assistant - HawkHacks project",
    source: "https://github.com/sarakhan7/bugbot",
    demo: "https://bugbot.vercel.app",
    language: "React, OpenAI API, Tailwind",
    platform: "github",
    interactions: {
      stars: 7,
      forks: 1,
    },
  },
  {
    title: "FitPets",
    description: "Pet health and wellness tracker - WildHacks project",
    source: "https://github.com/sarakhan7/fitpets",
    demo: "https://fitpets.vercel.app",
    language: "React, Firebase, Tailwind",
    platform: "github",
    interactions: {
      stars: 5,
      forks: 1,
    },
  },
  {
    title: "CollabNet",
    description: "MVP platform for developer collaboration and project management.",
    source: "https://github.com/sarakhan7/collabnet",
    demo: "https://collabnet.vercel.app",
    language: "Next.js, TypeScript, Tailwind",
    platform: "github",
    interactions: {
      stars: 11,
      forks: 4,
    },
  },
  {
    title: "Knowly",
    description: "Smart flashcard + spaced repetition app for effective learning.",
    source: "https://github.com/sarakhan7/knowly",
    demo: "https://knowly.vercel.app",
    language: "React, Spaced Repetition Algorithm",
    platform: "github",
    interactions: {
      stars: 11,
      forks: 3,
    },
  },
  {
    title: "Wandr",
    description: "Lifestyle-based city recommender that suggests cities based on user preferences.",
    source: "https://github.com/sarakhan7/wandr",
    demo: "https://wandr.vercel.app",
    language: "React, City Data API, Tailwind",
    platform: "github",
    interactions: {
      stars: 14,
      forks: 3,
    },
  },
  {
    title: "Reccy",
    description: "AI-based movie/music recommendation tool with personalized suggestions.",
    source: "https://github.com/sarakhan7/reccy",
    demo: "https://reccy.vercel.app",
    language: "React, AI, Recommendation Engine",
    platform: "github",
    interactions: {
      stars: 13,
      forks: 2,
    },
  },
  {
    title: "Recipe Finder App",
    description: "My earliest baby dev projects 🐣 - Simple recipe finder application",
    source: "https://github.com/sarakhan7/recipe-finder",
    demo: "https://recipe-finder-sarakhan7.vercel.app",
    language: "HTML, CSS, JavaScript",
    platform: "github",
    interactions: {
      stars: 3,
      forks: 0,
    },
  },
  {
    title: "WeatherDashboard",
    description: "My earliest baby dev projects 🐣 - Weather dashboard with API integration",
    source: "https://github.com/sarakhan7/weather-dashboard",
    demo: "https://weather-dashboard-sarakhan7.vercel.app",
    language: "HTML, CSS, JavaScript, Weather API",
    platform: "github",
    interactions: {
      stars: 2,
      forks: 0,
    },
  },
  {
    title: "Cyberia",
    description: "My earliest baby dev projects 🐣 - First website ever created",
    source: "https://github.com/sarakhan7/cyberia",
    demo: "https://first-website-ever-j85vq6sq6-sarakhan7-projects.vercel.app",
    language: "HTML, CSS",
    platform: "github",
    interactions: {
      stars: 1,
      forks: 0,
    },
  },
];

const rankingCoefficients = {
  content: 0.5,
  thumbnail: 0.5,
  demo: 1,
  rarity: 2,
  interactions: 0.5,
};

/**
 * Rank a project based on its content, thumbnail, demo and rarity.
 * @param project the project to rank
 * @param catalog the catalog of projects to compare rarity
 * @returns the rank of the project
 */
export function rank(project: Project, catalog: Project[]): number {
  const contentLength = project.title.length + (project.description?.length || 0);
  const contentPertinence = contentLength > 150
    ? rankingCoefficients.content - (contentLength - 150) / 350
    : contentLength / 150;

  const hasThumbnail = project.thumbnail ? rankingCoefficients.thumbnail : 0;
  const hasDemo = project.demo ? rankingCoefficients.demo : 0;

  const minorityCoefficient = rankingCoefficients.rarity
   * (catalog.filter((item) => item.platform === project.platform).length / catalog.length);

  const interactionCoefficient = Object.values(project.interactions ?? {})
    .reduce((acc, value) => acc + value, 0) * rankingCoefficients.interactions;

  return contentPertinence + hasThumbnail + hasDemo + minorityCoefficient + interactionCoefficient;
}
