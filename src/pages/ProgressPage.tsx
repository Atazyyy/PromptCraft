import { motion } from 'framer-motion';
import { Trophy, Flame, Star, BookOpen, Target, Award, RotateCcw, Download } from 'lucide-react';
import { Container, Section } from '../components/layout';
import { Card, Button } from '../components/ui';
import { CircularProgress, ProgressBar } from '../components/ui/Progress';
import { useProgress } from '../context/ProgressContext';
import { lessons } from '../data/lessons';
import { achievements } from '../data/achievements';

export function ProgressPage() {
  const { progress, resetProgress } = useProgress();

  const completedLessons = progress.completedLessons.length;
  const totalLessons = lessons.length;
  const lessonProgress = (completedLessons / totalLessons) * 100;

  const totalQuizzes = 12;
  const passedQuizzes = Object.values(progress.quizScores).filter(score => score >= 80).length;

  const unlockedAchievements = achievements.filter(a => progress.achievements.includes(a.id));
  const lockedAchievements = achievements.filter(a => !progress.achievements.includes(a.id));

  const handleReset = () => {
    if (window.confirm('Apakah kamu yakin ingin reset semua progress? Tindakan ini tidak bisa diundo.')) {
      resetProgress();
    }
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(progress, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportName = `promptcraft-progress-${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportName);
    linkElement.click();
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
              Progress & <span className="gradient-text">Achievements</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Lacak perjalanan belajarmu dan unlock achievements baru!
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            <Card className="text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-primary/20 flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-accent-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">{progress.totalXP}</div>
              <div className="text-text-secondary text-sm">Total XP</div>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-warning/20 flex items-center justify-center mx-auto mb-3">
                <Flame className="w-6 h-6 text-accent-warning" />
              </div>
              <div className="text-3xl font-bold mb-1">{progress.currentStreak}</div>
              <div className="text-text-secondary text-sm">Day Streak</div>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-success/20 flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-accent-success" />
              </div>
              <div className="text-3xl font-bold mb-1">{completedLessons}/{totalLessons}</div>
              <div className="text-text-secondary text-sm">Lessons</div>
            </Card>

            <Card className="text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-secondary/20 flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-accent-secondary" />
              </div>
              <div className="text-3xl font-bold mb-1">{passedQuizzes}/{totalQuizzes}</div>
              <div className="text-text-secondary text-sm">Quizzes Passed</div>
            </Card>
          </motion.div>

          {/* Progress Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <Card>
              <h3 className="font-heading font-semibold text-lg mb-6">Lesson Progress</h3>
              <div className="flex items-center gap-8 mb-6">
                <CircularProgress value={lessonProgress} size={120} strokeWidth={10} />
                <div>
                  <p className="text-text-secondary text-sm mb-2">Selesaikan semua 12 lessons untuk menjadi Prompt Master!</p>
                  <p className="text-sm">
                    <span className="text-accent-success">{completedLessons} completed</span>
                    <span className="text-text-secondary"> • {totalLessons - completedLessons} remaining</span>
                  </p>
                </div>
              </div>
              <ProgressBar value={lessonProgress} showLabel />
            </Card>

            <Card>
              <h3 className="font-heading font-semibold text-lg mb-6">Streak Info</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-bg-primary">
                  <div className="flex items-center gap-3">
                    <Flame className="w-6 h-6 text-accent-warning" />
                    <div>
                      <p className="font-medium">Current Streak</p>
                      <p className="text-text-secondary text-sm">Hari berturut-turut belajar</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold">{progress.currentStreak} 🔥</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-bg-primary">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-accent-secondary" />
                    <div>
                      <p className="font-medium">Longest Streak</p>
                      <p className="text-text-secondary text-sm">Rekor terbaikmu</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold">{progress.longestStreak} 🏆</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
              <Award className="w-7 h-7 text-accent-warning" />
              Achievements
              <span className="text-text-secondary text-lg font-normal">
                ({unlockedAchievements.length}/{achievements.length})
              </span>
            </h2>

            {/* Unlocked */}
            {unlockedAchievements.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 text-accent-success">Unlocked</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {unlockedAchievements.map((achievement) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="relative"
                    >
                      <Card className="text-center h-full border-accent-success/30 bg-gradient-to-br from-accent-success/5 to-transparent">
                        <motion.div
                          className="text-5xl mb-3"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {achievement.icon}
                        </motion.div>
                        <h4 className="font-semibold mb-1">{achievement.title}</h4>
                        <p className="text-text-secondary text-sm">{achievement.description}</p>
                        {achievement.xpReward > 0 && (
                          <span className="inline-block mt-2 px-2 py-1 rounded-full bg-accent-success/20 text-accent-success text-xs">
                            +{achievement.xpReward} XP
                          </span>
                        )}
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Locked */}
            {lockedAchievements.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-4 text-text-secondary">Locked</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {lockedAchievements.map((achievement) => (
                    <Card key={achievement.id} className="text-center h-full opacity-50">
                      <div className="text-5xl mb-3 grayscale">🔒</div>
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-text-secondary text-sm">{achievement.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            <Button variant="secondary" leftIcon={<Download className="w-4 h-4" />} onClick={handleExport}>
              Export Progress
            </Button>
            <Button variant="ghost" leftIcon={<RotateCcw className="w-4 h-4" />} onClick={handleReset}>
              Reset Progress
            </Button>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
