import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Lightbulb, AlertTriangle, Code, FileText, BookOpen } from 'lucide-react';
import { Container, Section } from '../components/layout';
import { Card, Button, DifficultyBadge } from '../components/ui';
import { Modal } from '../components/ui/Modal';
import { useProgress } from '../context/ProgressContext';
import { lessons } from '../data/lessons';
import { quizzes } from '../data/quizzes';

export function LessonDetailPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { progress, completeLesson } = useProgress();
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const lesson = lessons.find(l => l.id === lessonId);
  const lessonIndex = lessons.findIndex(l => l.id === lessonId);
  const isCompleted = progress.completedLessons.includes(lessonId || '');
  const nextLesson = lessons[lessonIndex + 1];
  const quiz = quizzes.find(q => q.lessonId === lessonId);

  if (!lesson) {
    return (
      <Container className="py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Lesson tidak ditemukan</h1>
        <Link to="/lessons">
          <Button>Kembali ke Lessons</Button>
        </Link>
      </Container>
    );
  }

  const handleComplete = () => {
    completeLesson(lesson.id);
    setShowCompleteModal(true);
  };

  const renderContentBlock = (block: typeof lesson.content[0], index: number) => {
    const icons = {
      text: FileText,
      code: Code,
      example: BookOpen,
      tip: Lightbulb,
      warning: AlertTriangle,
      interactive: Lightbulb,
    };

    const colors = {
      text: 'border-l-accent-primary',
      code: 'border-l-accent-secondary',
      example: 'border-l-accent-success',
      tip: 'border-l-accent-warning',
      warning: 'border-l-accent-error',
      interactive: 'border-l-accent-primary',
    };

    const bgColors = {
      text: '',
      code: 'bg-bg-primary',
      example: 'bg-accent-success/5',
      tip: 'bg-accent-warning/5',
      warning: 'bg-accent-error/5',
      interactive: 'bg-accent-primary/5',
    };

    const Icon = icons[block.type];

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
        className={`border-l-4 ${colors[block.type]} ${bgColors[block.type]} rounded-r-xl p-6`}
      >
        {block.title && (
          <div className="flex items-center gap-2 mb-3">
            <Icon className={`w-5 h-5 ${
              block.type === 'tip' ? 'text-accent-warning' :
              block.type === 'warning' ? 'text-accent-error' :
              block.type === 'example' ? 'text-accent-success' :
              block.type === 'code' ? 'text-accent-secondary' :
              'text-accent-primary'
            }`} />
            <h3 className="font-heading font-semibold">{block.title}</h3>
          </div>
        )}
        <div className="text-text-secondary leading-relaxed whitespace-pre-wrap">
          {block.content.split('\n').map((line, i) => {
            // Simple markdown-like rendering
            let content = line;
            const parts: JSX.Element[] = [];
            let lastIndex = 0;
            const regex = /\*\*(.*?)\*\*/g;
            let match;

            while ((match = regex.exec(content)) !== null) {
              if (match.index > lastIndex) {
                parts.push(<span key={`text-${i}-${lastIndex}`}>{content.slice(lastIndex, match.index)}</span>);
              }
              parts.push(<strong key={`bold-${i}-${match.index}`} className="text-text-primary font-semibold">{match[1]}</strong>);
              lastIndex = match.index + match[0].length;
            }

            if (lastIndex < content.length) {
              parts.push(<span key={`text-${i}-${lastIndex}`}>{content.slice(lastIndex)}</span>);
            }

            return (
              <div key={i} className={parts.length > 0 ? '' : 'text-text-secondary'}>
                {parts.length > 0 ? parts : line || ' '}
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen">
      <Section className="pb-8">
        <Container size="md">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <Link
              to="/lessons"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Lessons
            </Link>
          </motion.div>

          {/* Lesson Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-text-secondary">Lesson {lesson.order}</span>
              <DifficultyBadge difficulty={lesson.difficulty} />
              {isCompleted && (
                <span className="flex items-center gap-1 text-accent-success text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Completed
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-3">
              {lesson.title}
            </h1>
            <p className="text-text-secondary text-lg">
              {lesson.description}
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-text-secondary">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {lesson.duration}
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-6 mb-12">
            {lesson.content.map((block, index) => renderContentBlock(block, index))}
          </div>

          {/* Key Takeaways */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <Card className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border-accent-primary/30">
              <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-accent-warning" />
                Key Takeaways
              </h3>
              <ul className="space-y-2">
                {lesson.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {!isCompleted && (
              <Button onClick={handleComplete} className="flex-1">
                <CheckCircle className="w-5 h-5 mr-2" />
                Tandai Selesai (+100 XP)
              </Button>
            )}
            {quiz && (
              <Link to={`/quiz/${quiz.id}`} className="flex-1">
                <Button variant="secondary" className="w-full">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Ambil Quiz
                </Button>
              </Link>
            )}
            {nextLesson && (
              <Link to={`/lessons/${nextLesson.id}`} className="flex-1">
                <Button variant="ghost" className="w-full">
                  {nextLesson.title}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            )}
          </motion.div>
        </Container>
      </Section>

      {/* Completion Modal */}
      <Modal
        isOpen={showCompleteModal}
        onClose={() => setShowCompleteModal(false)}
        size="sm"
      >
        <div className="text-center py-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="w-20 h-20 rounded-full bg-accent-success/20 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-accent-success" />
          </motion.div>
          <h2 className="text-2xl font-heading font-bold mb-2">Selamat! 🎉</h2>
          <p className="text-text-secondary mb-4">
            Kamu telah menyelesaikan lesson ini!
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-3xl font-bold gradient-text">+100 XP</span>
          </div>
          <div className="flex flex-col gap-3">
            {quiz && (
              <Link to={`/quiz/${quiz.id}`} onClick={() => setShowCompleteModal(false)}>
                <Button className="w-full">Ambil Quiz</Button>
              </Link>
            )}
            {nextLesson ? (
              <Link to={`/lessons/${nextLesson.id}`} onClick={() => setShowCompleteModal(false)}>
                <Button variant="secondary" className="w-full">
                  Lanjut ke: {nextLesson.title}
                </Button>
              </Link>
            ) : (
              <Link to="/lessons" onClick={() => setShowCompleteModal(false)}>
                <Button variant="ghost" className="w-full">
                  Kembali ke Lessons
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
