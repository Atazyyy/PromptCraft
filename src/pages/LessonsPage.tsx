import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, Lock, Play, ChevronRight } from 'lucide-react';
import { Container, Section } from '../components/layout';
import { Card, DifficultyBadge } from '../components/ui';
import { CircularProgress } from '../components/ui/Progress';
import { useProgress } from '../context/ProgressContext';
import { lessons } from '../data/lessons';

export function LessonsPage() {
  const { progress } = useProgress();
  const [filter, setFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const filteredLessons = filter === 'all'
    ? lessons
    : lessons.filter(l => l.difficulty === filter);

  const completedCount = progress.completedLessons.length;
  const totalLessons = lessons.length;
  const progressPercentage = (completedCount / totalLessons) * 100;

  const isLessonUnlocked = (lessonId: string) => {
    const lessonIndex = lessons.findIndex(l => l.id === lessonId);
    if (lessonIndex === 0) return true;
    const prevLesson = lessons[lessonIndex - 1];
    return progress.completedLessons.includes(prevLesson.id);
  };

  return (
    <div className="min-h-screen">
      <Section className="pb-8">
        <Container>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-heading font-bold mb-4">
              Learning Path
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Ikuti learning path dari awal sampai akhir. Selesaikan setiap lesson untuk unlock yang selanjutnya.
            </p>
          </motion.div>

          {/* Progress Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="flex items-center gap-6">
              <CircularProgress value={progressPercentage} size={100} strokeWidth={8} />
              <div>
                <p className="text-text-secondary text-sm mb-1">Overall Progress</p>
                <p className="text-2xl font-bold">{completedCount}/{totalLessons} Lessons</p>
              </div>
            </Card>

            <Card className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-accent-success/20 flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-accent-success" />
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Completed</p>
                <p className="text-2xl font-bold">{completedCount} Lessons</p>
              </div>
            </Card>

            <Card className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-accent-primary/20 flex items-center justify-center">
                <Clock className="w-7 h-7 text-accent-primary" />
              </div>
              <div>
                <p className="text-text-secondary text-sm mb-1">Total XP Earned</p>
                <p className="text-2xl font-bold gradient-text">{progress.totalXP} XP</p>
              </div>
            </Card>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {[
              { value: 'all', label: 'Semua' },
              { value: 'beginner', label: 'Beginner' },
              { value: 'intermediate', label: 'Intermediate' },
              { value: 'advanced', label: 'Advanced' },
            ].map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setFilter(value as typeof filter)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  filter === value
                    ? 'bg-accent-primary text-white'
                    : 'bg-bg-secondary text-text-secondary hover:text-text-primary'
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-bg-tertiary hidden md:block" />

            <div className="space-y-4">
              {filteredLessons.map((lesson, index) => {
                const isCompleted = progress.completedLessons.includes(lesson.id);
                const isUnlocked = isLessonUnlocked(lesson.id);

                return (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link to={isUnlocked ? `/lessons/${lesson.id}` : '#'}>
                      <Card
                        hoverable={isUnlocked}
                        className={`relative flex items-center gap-4 md:gap-6 ${
                          !isUnlocked ? 'opacity-60' : ''
                        }`}
                      >
                        {/* Timeline dot */}
                        <div className={`
                          hidden md:flex w-12 h-12 rounded-full items-center justify-center flex-shrink-0
                          ${isCompleted ? 'bg-accent-success' : isUnlocked ? 'bg-accent-primary' : 'bg-bg-tertiary'}
                        `}>
                          {isCompleted ? (
                            <CheckCircle className="w-6 h-6 text-white" />
                          ) : isUnlocked ? (
                            <Play className="w-5 h-5 text-white ml-0.5" />
                          ) : (
                            <Lock className="w-5 h-5 text-text-secondary" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-text-secondary text-sm font-medium">
                              Lesson {lesson.order}
                            </span>
                            <DifficultyBadge difficulty={lesson.difficulty} />
                          </div>
                          <h3 className="font-heading font-semibold text-lg mb-1">
                            {lesson.title}
                          </h3>
                          <p className="text-text-secondary text-sm line-clamp-1">
                            {lesson.description}
                          </p>
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-4">
                          <div className="hidden sm:flex items-center gap-2 text-text-secondary text-sm">
                            <Clock className="w-4 h-4" />
                            {lesson.duration}
                          </div>
                          {isUnlocked && (
                            <ChevronRight className="w-5 h-5 text-text-secondary" />
                          )}
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
