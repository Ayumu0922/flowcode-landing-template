import { type InputHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export default function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent-500/50',
        className
      )}
      {...props}
    />
  );
}
