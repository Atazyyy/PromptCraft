import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { UserProgress, SavedPrompt, Achievement } from '../types';
import { achievements } from '../data/achievements';

interface ProgressContextType {
  progress: UserProgress;
  completeLesson: (lessonId: string) => void;
  completeQuiz: (quizId: string, score: number) => void;
  savePrompt: (prompt: SavedPrompt) => void;
  deletePrompt: (promptId: string) => void;
  updatePrompt: (promptId: string, updates: Partial<SavedPrompt>) => void;
  checkAchievements: () => Achievement[];
  resetProgress: () => void;
  addXP: (amount: number) => void;
}

const initialProgress: UserProgress = {
  completedLessons: [],
  quizScores: {},
  savedPrompts: [],
  achievements: [],
  totalXP: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastActivityDate: '',
  quizAttempts: {},
};

type ProgressAction =
  | { type: 'COMPLETE_LESSON'; lessonId: string }
  | { type: 'COMPLETE_QUIZ'; quizId: string; score: number }
  | { type: 'SAVE_PROMPT'; prompt: SavedPrompt }
  | { type: 'DELETE_PROMPT'; promptId: string }
  | { type: 'UPDATE_PROMPT'; promptId: string; updates: Partial<SavedPrompt> }
  | { type: 'UNLOCK_ACHIEVEMENT'; achievementId: string }
  | { type: 'ADD_XP'; amount: number }
  | { type: 'UPDATE_STREAK' }
  | { type: 'RESET' }
  | { type: 'LOAD_PROGRESS'; progress: UserProgress };

function progressReducer(state: UserProgress, action: ProgressAction): UserProgress {
  switch (action.type) {
    case 'COMPLETE_LESSON':
      if (state.completedLessons.includes(action.lessonId)) {
        return state;
      }
      return {
        ...state,
        completedLessons: [...state.completedLessons, action.lessonId],
        totalXP: state.totalXP + 100,
      };

    case 'COMPLETE_QUIZ':
      const currentBest = state.quizScores[action.quizId] || 0;
      const xpGain = action.score === 100 ? 200 : action.score >= 80 ? 150 : 0;
      const isNewBest = action.score > currentBest;
      return {
        ...state,
        quizScores: {
          ...state.quizScores,
          [action.quizId]: Math.max(currentBest, action.score),
        },
        quizAttempts: {
          ...state.quizAttempts,
          [action.quizId]: (state.quizAttempts[action.quizId] || 0) + 1,
        },
        totalXP: isNewBest ? state.totalXP + xpGain : state.totalXP,
      };

    case 'SAVE_PROMPT':
      return {
        ...state,
        savedPrompts: [...state.savedPrompts, action.prompt],
      };

    case 'DELETE_PROMPT':
      return {
        ...state,
        savedPrompts: state.savedPrompts.filter(p => p.id !== action.promptId),
      };

    case 'UPDATE_PROMPT':
      return {
        ...state,
        savedPrompts: state.savedPrompts.map(p =>
          p.id === action.promptId ? { ...p, ...action.updates, updatedAt: new Date().toISOString() } : p
        ),
      };

    case 'UNLOCK_ACHIEVEMENT':
      if (state.achievements.includes(action.achievementId)) {
        return state;
      }
      return {
        ...state,
        achievements: [...state.achievements, action.achievementId],
      };

    case 'ADD_XP':
      return {
        ...state,
        totalXP: state.totalXP + action.amount,
      };

    case 'UPDATE_STREAK': {
      const today = new Date().toDateString();
      const lastActivity = state.lastActivityDate ? new Date(state.lastActivityDate).toDateString() : null;
      const yesterday = new Date(Date.now() - 86400000).toDateString();

      let newStreak = state.currentStreak;
      if (lastActivity === today) {
        return state;
      } else if (lastActivity === yesterday) {
        newStreak = state.currentStreak + 1;
      } else {
        newStreak = 1;
      }
      return {
        ...state,
        currentStreak: newStreak,
        longestStreak: Math.max(state.longestStreak, newStreak),
        lastActivityDate: new Date().toISOString(),
      };
    }

    case 'RESET':
      return initialProgress;

    case 'LOAD_PROGRESS':
      return action.progress;

    default:
      return state;
  }
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'promptcraft-progress';

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, dispatch] = useReducer(progressReducer, initialProgress);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        dispatch({ type: 'LOAD_PROGRESS', progress: parsed });
      } catch (e) {
        console.error('Failed to load progress:', e);
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeLesson = (lessonId: string) => {
    dispatch({ type: 'COMPLETE_LESSON', lessonId });
    dispatch({ type: 'UPDATE_STREAK' });
  };

  const completeQuiz = (quizId: string, score: number) => {
    dispatch({ type: 'COMPLETE_QUIZ', quizId, score });
    dispatch({ type: 'UPDATE_STREAK' });
  };

  const savePrompt = (prompt: SavedPrompt) => {
    dispatch({ type: 'SAVE_PROMPT', prompt });
  };

  const deletePrompt = (promptId: string) => {
    dispatch({ type: 'DELETE_PROMPT', promptId });
  };

  const updatePrompt = (promptId: string, updates: Partial<SavedPrompt>) => {
    dispatch({ type: 'UPDATE_PROMPT', promptId, updates });
  };

  const addXP = (amount: number) => {
    dispatch({ type: 'ADD_XP', amount });
  };

  const checkAchievements = (): Achievement[] => {
    const newAchievements: Achievement[] = [];

    achievements.forEach(achievement => {
      if (!progress.achievements.includes(achievement.id) && achievement.requirement(progress)) {
        dispatch({ type: 'UNLOCK_ACHIEVEMENT', achievementId: achievement.id });
        if (achievement.xpReward > 0) {
          dispatch({ type: 'ADD_XP', amount: achievement.xpReward });
        }
        newAchievements.push(achievement);
      }
    });

    return newAchievements;
  };

  const resetProgress = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        completeLesson,
        completeQuiz,
        savePrompt,
        deletePrompt,
        updatePrompt,
        checkAchievements,
        resetProgress,
        addXP,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
