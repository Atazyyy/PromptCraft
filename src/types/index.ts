// Types for PromptCraft

export interface Lesson {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  order: number;
  content: ContentBlock[];
  keyTakeaways: string[];
}

export interface ContentBlock {
  type: 'text' | 'code' | 'example' | 'tip' | 'warning' | 'interactive';
  title?: string;
  content: string;
  language?: string;
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: 'starter' | 'social-media' | 'business' | 'creative' | 'website' | 'analysis';
  template: string;
  variables: string[];
}

export interface SavedPrompt {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: (progress: UserProgress) => boolean;
  xpReward: number;
}

export interface UserProgress {
  completedLessons: string[];
  quizScores: Record<string, number>;
  savedPrompts: SavedPrompt[];
  achievements: string[];
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string;
  quizAttempts: Record<string, number>;
}

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export const difficultyColors: Record<Difficulty, string> = {
  beginner: 'text-accent-success',
  intermediate: 'text-accent-warning',
  advanced: 'text-accent-error',
};

export const difficultyBgColors: Record<Difficulty, string> = {
  beginner: 'bg-accent-success/20',
  intermediate: 'bg-accent-warning/20',
  advanced: 'bg-accent-error/20',
};
