import { HTMLAttributes, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './Button';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, title, size = 'md', className = '', children, ...props }, ref) => {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              ref={ref}
              className={`
                fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                w-[90%] ${sizeStyles[size]}
                bg-bg-secondary rounded-2xl border border-bg-tertiary
                shadow-2xl shadow-black/50 z-50
                ${className}
              `}
              initial={{ opacity: 0, scale: 0.95, y: '-50%' }}
              animate={{ opacity: 1, scale: 1, y: '-50%' }}
              exit={{ opacity: 0, scale: 0.95, y: '-50%' }}
              transition={{ duration: 0.2 }}
              {...props}
            >
              {/* Header */}
              {title && (
                <div className="flex items-center justify-between p-6 border-b border-bg-tertiary">
                  <h2 className="text-xl font-heading font-semibold text-text-primary">{title}</h2>
                  <Button variant="ghost" size="sm" onClick={onClose} className="!p-1">
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              )}

              {/* Content */}
              <div className={title ? 'p-6' : 'p-6'}>
                {children}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }
);

Modal.displayName = 'Modal';
