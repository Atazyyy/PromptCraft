import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { Container, Section } from '../components/layout';
import { Card, Button } from '../components/ui';
import { ProgressBar } from '../components/ui/Progress';
import { useProgress } from '../context/ProgressContext';
import { quizzes } from '../data/quizzes';
import { lessons } from '../data/lessons';

export function QuizPage() {
  const { quizId } = useParams<{ quizId: string }>();
  const { completeQuiz } = useProgress();

  const quiz = quizzes.find(q => q.id === quizId);
  const lesson = quiz ? lessons.find(l => l.id === quiz.lessonId) : null;
  const lessonIndex = quiz ? lessons.findIndex(l => l.id === quiz.lessonId) : -1;
  const nextLesson = lessonIndex >= 0 && lessonIndex < lessons.length - 1 ? lessons[lessonIndex + 1] : null;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  if (!quiz || !lesson) {
    return (
      <Container className="py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Quiz tidak ditemukan</h1>
        <Link to="/lessons">
          <Button>Kembali ke Lessons</Button>
        </Link>
      </Container>
    );
  }

  const question = quiz.questions[currentQuestion];
  const totalQuestions = quiz.questions.length;
  const correctAnswers = answers.filter((answer, index) =>
    answer === quiz.questions[index].correctIndex
  ).length;
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  const passed = score >= 80;

  const handleSelectAnswer = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setShowExplanation(true);
    setAnswers([...answers, selectedAnswer]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      completeQuiz(quiz.id, score);
      setTimeout(() => setShowResults(true), 1000);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers([]);
    setShowResults(false);
  };

  const isCorrect = selectedAnswer === question.correctIndex;

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
              to={`/lessons/${lesson.id}`}
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke {lesson.title}
            </Link>
          </motion.div>

          {/* Quiz Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-text-secondary">Quiz</span>
            </div>
            <h1 className="text-3xl font-heading font-bold mb-2">
              {lesson.title}
            </h1>
            <p className="text-text-secondary">
              Selesaikan quiz untuk menguji pemahamanmu. Perlu 80% untuk lulus!
            </p>
          </motion.div>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-text-secondary">Question {currentQuestion + 1} of {totalQuestions}</span>
              <span className="font-medium">{Math.round(((currentQuestion + (showExplanation ? 1 : 0)) / totalQuestions) * 100)}%</span>
            </div>
            <ProgressBar
              value={currentQuestion + (showExplanation ? 1 : 0)}
              max={totalQuestions}
              size="md"
            />
          </motion.div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="mb-6">
                <h2 className="text-xl font-semibold mb-6">
                  {question.question}
                </h2>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrectOption = index === question.correctIndex;
                    const showCorrect = showExplanation && isCorrectOption;
                    const showIncorrect = showExplanation && isSelected && !isCorrectOption;

                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleSelectAnswer(index)}
                        disabled={showExplanation}
                        className={`
                          w-full text-left p-4 rounded-xl border-2 transition-all
                          ${isSelected && !showExplanation ? 'border-accent-primary bg-accent-primary/10' : 'border-bg-tertiary hover:border-white/20'}
                          ${showCorrect ? 'border-accent-success bg-accent-success/10' : ''}
                          ${showIncorrect ? 'border-accent-error bg-accent-error/10' : ''}
                        `}
                        whileHover={!showExplanation ? { scale: 1.01 } : undefined}
                        whileTap={!showExplanation ? { scale: 0.99 } : undefined}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`
                            w-8 h-8 rounded-full border-2 flex items-center justify-center font-medium text-sm
                            ${isSelected && !showExplanation ? 'border-accent-primary text-accent-primary' : 'border-bg-tertiary'}
                            ${showCorrect ? 'border-accent-success text-accent-success' : ''}
                            ${showIncorrect ? 'border-accent-error text-accent-error' : ''}
                          `}>
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span className="flex-1">{option}</span>
                          {showCorrect && <CheckCircle className="w-5 h-5 text-accent-success" />}
                          {showIncorrect && <XCircle className="w-5 h-5 text-accent-error" />}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <Card className={`${isCorrect ? 'bg-accent-success/10 border-accent-success/30' : 'bg-accent-error/10 border-accent-error/30'}`}>
                        <div className="flex items-start gap-3">
                          {isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-accent-success flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-5 h-5 text-accent-error flex-shrink-0 mt-0.5" />
                          )}
                          <div>
                            <p className={`font-medium mb-2 ${isCorrect ? 'text-accent-success' : 'text-accent-error'}`}>
                              {isCorrect ? 'Benar!' : 'Kurang tepat'}
                            </p>
                            <p className="text-text-secondary text-sm">
                              {question.explanation}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>

              {/* Actions */}
              <div className="flex justify-between">
                {!showExplanation ? (
                  <Button
                    onClick={handleCheckAnswer}
                    disabled={selectedAnswer === null}
                    className="flex-1"
                  >
                    Cek Jawaban
                  </Button>
                ) : (
                  <Button
                    onClick={handleNextQuestion}
                    rightIcon={currentQuestion < totalQuestions - 1 ? <ArrowRight className="w-5 h-5" /> : undefined}
                    className="flex-1"
                  >
                    {currentQuestion < totalQuestions - 1 ? 'Pertanyaan Selanjutnya' : 'Lihat Hasil'}
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Results Modal */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-bg-secondary rounded-2xl border border-bg-tertiary w-full max-w-md p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15, delay: 0.3 }}
                    className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      passed ? 'bg-accent-success/20' : 'bg-accent-error/20'
                    }`}
                  >
                    {passed ? (
                      <Trophy className="w-12 h-12 text-accent-success" />
                    ) : (
                      <XCircle className="w-12 h-12 text-accent-error" />
                    )}
                  </motion.div>

                  <h2 className="text-2xl font-heading font-bold mb-2">
                    {passed ? 'Selamat! 🎉' : 'Coba Lagi!'}
                  </h2>
                  <p className="text-text-secondary mb-4">
                    {passed
                      ? 'Kamu lulus quiz ini!'
                      : 'Perlu 80% untuk lulus. Jangan menyerah!'}
                  </p>

                  <div className="mb-8">
                    <div className="text-5xl font-bold mb-2">
                      <span className={passed ? 'gradient-text' : 'text-accent-error'}>
                        {score}%
                      </span>
                    </div>
                    <p className="text-text-secondary">
                      {correctAnswers} dari {totalQuestions} benar
                    </p>
                  </div>

                  {passed && (
                    <div className="mb-6 p-4 rounded-xl bg-accent-success/10 border border-accent-success/30">
                      <p className="text-accent-success font-medium">
                        +{score === 100 ? '200' : '150'} XP earned!
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col gap-3">
                    <Button onClick={handleRetry} variant="secondary" className="w-full">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Coba Lagi
                    </Button>
                    <Link to={`/lessons/${lesson.id}`}>
                      <Button variant="ghost" className="w-full">
                        Kembali ke Lesson
                      </Button>
                    </Link>
                    {passed && nextLesson && (
                      <Link to={`/lessons/${nextLesson.id}`}>
                        <Button className="w-full">
                          Lanjut ke: {nextLesson.title}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </Section>
    </div>
  );
}
