import { HTMLAttributes, forwardRef } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-secondary mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-xl
            bg-bg-primary border border-bg-tertiary
            text-text-primary
            placeholder:text-text-secondary/50
            focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20
            transition-all duration-200
            ${error ? 'border-accent-error focus:border-accent-error focus:ring-accent-error/20' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-accent-error">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-text-secondary">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
