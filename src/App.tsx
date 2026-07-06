import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout';
import { ProgressProvider } from './context/ProgressContext';
import {
  HomePage,
  LessonsPage,
  LessonDetailPage,
  PlaygroundPage,
  QuizPage,
  ProgressPage,
} from './pages';

function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/lessons" element={<LessonsPage />} />
              <Route path="/lessons/:lessonId" element={<LessonDetailPage />} />
              <Route path="/playground" element={<PlaygroundPage />} />
              <Route path="/quiz/:quizId" element={<QuizPage />} />
              <Route path="/progress" element={<ProgressPage />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </BrowserRouter>
    </ProgressProvider>
  );
}

export default App;
