import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Home, LayoutGrid, Trophy, Sparkles } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { CircularProgress } from '../ui/Progress';

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/lessons', label: 'Lessons', icon: BookOpen },
  { to: '/playground', label: 'Playground', icon: LayoutGrid },
  { to: '/progress', label: 'Progress', icon: Trophy },
];

export function Navbar() {
  const { progress } = useProgress();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <span className="font-heading font-bold text-xl text-text-primary group-hover:text-white transition-colors">
              Prompt<span className="gradient-text">Craft</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-accent-primary/10 text-accent-primary'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-secondary border border-bg-tertiary">
                <span className="text-sm font-medium gradient-text">{progress.totalXP} XP</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-secondary border border-bg-tertiary">
                <span className="text-sm">🔥</span>
                <span className="text-sm font-medium">{progress.currentStreak}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
