import { cn } from '../../lib/utils';

export default function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('bg-zinc-900/50 border border-zinc-800 rounded-xl', className)} {...props}>
      {children}
    </div>
  );
}
