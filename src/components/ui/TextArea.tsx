import { HTMLAttributes, forwardRef } from 'react';

interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-secondary mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-xl
            bg-bg-primary border border-bg-tertiary
            text-text-primary font-mono text-sm
            placeholder:text-text-secondary/50
            focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20
            resize-none transition-all duration-200
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

TextArea.displayName = 'TextArea';
