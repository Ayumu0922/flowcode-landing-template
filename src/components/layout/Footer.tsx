import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-zinc-500">
          <Zap className="w-4 h-4" />
          <span className="text-sm">© 2024 SaaSify. All rights reserved.</span>
        </div>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">プライバシー</a>
          <a href="#" className="hover:text-white transition-colors">利用規約</a>
        </div>
      </div>
    </footer>
  );
}
