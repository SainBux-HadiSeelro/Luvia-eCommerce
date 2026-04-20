import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  variant = 'light',
  ...props 
}) => {
  return (
    <motion.div
      className={cn(
        variant === 'light' ? 'glass' : 'glass-dark',
        'rounded-2xl p-6 transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
