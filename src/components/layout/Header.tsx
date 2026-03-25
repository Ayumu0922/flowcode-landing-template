import { NavLink } from 'react-router-dom';
import { Zap } from 'lucide-react';

const links = [
  { to: '/', label: 'ホーム' },
  { to: '/features', label: '機能' },
  { to: '/pricing', label: '料金' },
  { to: '/contact', label: 'お問い合わせ' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-violet-500" />
          <span className="text-lg font-bold text-white">SaaSify</span>
        </div>
        <nav className="flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'text-violet-400 bg-violet-500/10' : 'text-zinc-400 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
