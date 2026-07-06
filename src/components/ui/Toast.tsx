import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
}

const variantStyles = {
  success: 'border-accent-success/50 bg-accent-success/10',
  error: 'border-accent-error/50 bg-accent-error/10',
  warning: 'border-accent-warning/50 bg-accent-warning/10',
  info: 'border-accent-primary/50 bg-accent-primary/10',
};

const iconColors = {
  success: 'text-accent-success',
  error: 'text-accent-error',
  warning: 'text-accent-warning',
  info: 'text-accent-primary',
};

export function Toast({ variant = 'info', title, className = '', children, ...props }: ToastProps) {
  return (
    <motion.div
      className={`
        p-4 rounded-xl border backdrop-blur-sm
        ${variantStyles[variant]}
        ${className}
      `}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      {...props}
    >
      {title && (
        <h4 className={`font-medium mb-1 ${iconColors[variant]}`}>{title}</h4>
      )}
      <div className="text-sm text-text-secondary">{children}</div>
    </motion.div>
  );
}
