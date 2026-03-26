import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Zap, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import ThemeColorPicker from '../ui/ThemeColorPicker';

const links = [
  { to: '/', label: 'ホーム' },
  { to: '/features', label: '機能' },
  { to: '/pricing', label: '料金' },
  { to: '/contact', label: 'お問い合わせ' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header data-fc-id="Header-root" className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-accent-500" />
          <span className="text-lg font-bold text-white">SaaSify</span>
        </NavLink>
        <nav data-fc-id="Header-nav-desktop" className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-accent-400 bg-accent-500/10' : 'text-zinc-400 hover:text-white'}`
            }>{label}</NavLink>
          ))}
          <ThemeColorPicker />
          <button onClick={toggleTheme} className="p-2 text-zinc-400 hover:text-white transition-colors" title="テーマ切替">
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-zinc-400 hover:text-white">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div data-fc-id="Header-mobile-menu" className="md:hidden border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} onClick={() => setMenuOpen(false)} className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-accent-400 bg-accent-500/10' : 'text-zinc-400 hover:text-white'}`
            }>{label}</NavLink>
          ))}
          <ThemeColorPicker />
          <button onClick={() => { toggleTheme(); setMenuOpen(false); }} className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-400 hover:text-white">
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {theme === 'dark' ? 'ライトモード' : 'ダークモード'}
          </button>
        </div>
      )}
    </header>
  );
}
