import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Target, BookOpen, Gamepad2 } from 'lucide-react';
import { Container, Section } from '../components/layout';
import { Button, Card } from '../components/ui';
import { lessons } from '../data/lessons';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function HomePage() {
  const featuredLessons = lessons.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Section className="relative min-h-[90vh] flex items-center">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Interactive Learning Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
            >
              Belajar{' '}
              <span className="gradient-text">Prompt Engineering</span>
              <br />
              dengan Cara Interaktif
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
            >
              Kuasai seni menyusun instruksi untuk AI melalui kursus interaktif,
              latihan langsung, dan proyek nyata. Tidak perlu coding!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/lessons">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Mulai Belajar
                </Button>
              </Link>
              <Link to="/playground">
                <Button size="lg" variant="secondary" leftIcon={<Gamepad2 className="w-5 h-5" />}>
                  Coba Playground
                </Button>
              </Link>
            </motion.div>

            {/* Code Preview */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 max-w-2xl mx-auto"
            >
              <div className="code-block text-left relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-accent-error" />
                  <div className="w-3 h-3 rounded-full bg-accent-warning" />
                  <div className="w-3 h-3 rounded-full bg-accent-success" />
                </div>
                <pre className="font-mono text-sm overflow-x-auto">
                  <code>
                    <span className="text-text-secondary">// Prompt yang efektif</span>{'\n'}
                    <span className="syntax-keyword">Role:</span> <span className="syntax-string">Social Media Strategist</span>{'\n'}
                    <span className="syntax-keyword">Task:</span> <span className="syntax-string">Buat 5 ide konten</span>{'\n'}
                    <span className="syntax-keyword">Format:</span>{'\n'}
                    {'  '}<span className="syntax-variable">1.</span> <span className="syntax-function">Ide + Brief</span>{'\n'}
                    <span className="syntax-comment">// Hasil yang lebih baik! ✨</span>
                  </code>
                </pre>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Stats Bar */}
      <Section className="py-8 -mt-8 relative z-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="flex flex-wrap justify-center gap-8 sm:gap-16 py-6">
              {[
                { value: '12', label: 'Lessons Interaktif' },
                { value: '60+', label: 'Quiz Questions' },
                { value: '15+', label: 'Prompt Templates' },
                { value: '100%', label: 'Gratis & Online' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Featured Lessons */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                Mulai dari Sini
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Pelajari dasar-dasar prompt engineering melalui lessons yang dirancang
                untuk pemula sampai level lanjutan.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredLessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/lessons/${lesson.id}`}>
                    <Card hoverable className="h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-8 rounded-lg bg-accent-primary/20 flex items-center justify-center text-accent-primary font-bold">
                          {lesson.order}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          lesson.difficulty === 'beginner' ? 'bg-accent-success/20 text-accent-success' :
                          lesson.difficulty === 'intermediate' ? 'bg-accent-warning/20 text-accent-warning' :
                          'bg-accent-error/20 text-accent-error'
                        }`}>
                          {lesson.difficulty}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-accent-primary transition-colors">
                        {lesson.title}
                      </h3>
                      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                        {lesson.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-secondary">{lesson.duration}</span>
                        <span className="text-accent-primary flex items-center gap-1">
                          Mulai <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/lessons">
                <Button variant="secondary">
                  Lihat Semua Lessons
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Why Learn Section */}
      <Section className="bg-bg-secondary/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                Kenapa Harus Belajar di Sini?
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Platform pembelajaran yang dirancang khusus untuk membantu kamu menguasai prompt engineering dengan cepat.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: 'Pembelajaran Interaktif',
                  description: 'Lessons dengan contoh nyata, latihan langsung, dan feedback instan.',
                },
                {
                  icon: Zap,
                  title: 'Cepat & Efisien',
                  description: 'Kuasai dasar-dasar dalam hitungan jam, bukan hari.',
                },
                {
                  icon: Target,
                  title: 'Fokus Praktis',
                  description: 'Langsung terapkan untuk work, social media, atau project pribadi.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card variant="gradient" className="text-center py-16 px-8">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                Siap Memulai Perjalananmu?
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto mb-8">
                Bergabung dengan learner lain dan mulai kuasai prompt engineering hari ini.
                Tidak perlu pengalaman sebelumnya!
              </p>
              <Link to="/lessons">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Mulai Belajar Sekarang
                </Button>
              </Link>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="py-8 border-t border-bg-tertiary">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-secondary text-sm">
              Made with ❤️ for learning Prompt Engineering
            </p>
            <p className="text-text-secondary text-sm">
              © 2024 PromptCraft. Portfolio project by @Atazyyy
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
