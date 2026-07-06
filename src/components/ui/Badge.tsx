import { HTMLAttributes } from 'react';
import { Difficulty } from '../../types';

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'primary' | 'secondary';
type BadgeSize = 'sm' | 'md';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-bg-tertiary text-text-secondary',
  success: 'bg-accent-success/20 text-accent-success',
  warning: 'bg-accent-warning/20 text-accent-warning',
  error: 'bg-accent-error/20 text-accent-error',
  primary: 'bg-accent-primary/20 text-accent-primary',
  secondary: 'bg-accent-secondary/20 text-accent-secondary',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export function Badge({ variant = 'default', size = 'sm', className = '', children, ...props }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}

interface DifficultyBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  difficulty: Difficulty;
}

export function DifficultyBadge({ difficulty, className = '', ...props }: DifficultyBadgeProps) {
  const config: Record<Difficulty, { variant: BadgeVariant; label: string }> = {
    beginner: { variant: 'success', label: 'Beginner' },
    intermediate: { variant: 'warning', label: 'Intermediate' },
    advanced: { variant: 'error', label: 'Advanced' },
  };

  const { variant, label } = config[difficulty];

  return (
    <Badge variant={variant} className={className} {...props}>
      {label}
    </Badge>
  );
}
