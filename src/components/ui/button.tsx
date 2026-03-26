import { type ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-6 py-3 rounded-xl font-semibold transition-colors',
        variant === 'primary' ? 'bg-accent-600 hover:bg-accent-500 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
