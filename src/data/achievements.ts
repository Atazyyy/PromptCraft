import { Achievement, UserProgress } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'first-lesson',
    title: 'First Step',
    description: 'Complete your first lesson',
    icon: '🌟',
    requirement: (progress: UserProgress) => progress.completedLessons.length >= 1,
    xpReward: 50,
  },
  {
    id: 'three-lessons',
    title: 'Getting Started',
    description: 'Complete 3 lessons',
    icon: '🚀',
    requirement: (progress: UserProgress) => progress.completedLessons.length >= 3,
    xpReward: 100,
  },
  {
    id: 'halfway',
    title: 'Halfway Hero',
    description: 'Complete 6 lessons',
    icon: '🏆',
    requirement: (progress: UserProgress) => progress.completedLessons.length >= 6,
    xpReward: 200,
  },
  {
    id: 'complete-course',
    title: 'Prompt Master',
    description: 'Complete all 12 lessons',
    icon: '👑',
    requirement: (progress: UserProgress) => progress.completedLessons.length >= 12,
    xpReward: 500,
  },
  {
    id: 'first-quiz',
    title: 'Quiz Taker',
    description: 'Pass your first quiz',
    icon: '📝',
    requirement: (progress: UserProgress) => {
      const passedQuizzes = Object.values(progress.quizScores).filter(score => score >= 80);
      return passedQuizzes.length >= 1;
    },
    xpReward: 75,
  },
  {
    id: 'perfect-score',
    title: 'Perfect Score',
    description: 'Get 100% on any quiz',
    icon: '💯',
    requirement: (progress: UserProgress) => {
      return Object.values(progress.quizScores).some(score => score === 100);
    },
    xpReward: 150,
  },
  {
    id: 'streak-3',
    title: 'On Fire',
    description: 'Maintain a 3-day streak',
    icon: '🔥',
    requirement: (progress: UserProgress) => progress.currentStreak >= 3,
    xpReward: 100,
  },
  {
    id: 'streak-7',
    title: 'Streak Master',
    description: 'Maintain a 7-day streak',
    icon: '⚡',
    requirement: (progress: UserProgress) => progress.currentStreak >= 7,
    xpReward: 250,
  },
  {
    id: 'first-prompt',
    title: 'Prompt Creator',
    description: 'Save your first prompt in the playground',
    icon: '💾',
    requirement: (progress: UserProgress) => progress.savedPrompts.length >= 1,
    xpReward: 50,
  },
  {
    id: 'five-prompts',
    title: 'Prompt Architect',
    description: 'Save 5 prompts in the playground',
    icon: '🏗️',
    requirement: (progress: UserProgress) => progress.savedPrompts.length >= 5,
    xpReward: 150,
  },
  {
    id: 'xp-500',
    title: 'Rising Star',
    description: 'Earn 500 XP total',
    icon: '⭐',
    requirement: (progress: UserProgress) => progress.totalXP >= 500,
    xpReward: 0,
  },
  {
    id: 'xp-1000',
    title: 'XP Hunter',
    description: 'Earn 1000 XP total',
    icon: '💎',
    requirement: (progress: UserProgress) => progress.totalXP >= 1000,
    xpReward: 0,
  },
];
