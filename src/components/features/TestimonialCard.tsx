interface Props { name: string; role: string; content: string; avatar: string; }

export default function TestimonialCard({ name, role, content, avatar }: Props) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
      <p className="text-sm text-zinc-300 leading-relaxed mb-4">"{content}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-accent-500/20 text-accent-400 flex items-center justify-center text-sm font-bold">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-zinc-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
