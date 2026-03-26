import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const footerLinks = {
  プロダクト: [
    { label: '機能一覧', to: '/features' },
    { label: '料金プラン', to: '/pricing' },
    { label: 'セキュリティ', to: '/features' },
    { label: 'ロードマップ', to: '/features' },
  ],
  リソース: [
    { label: 'ドキュメント', to: '/features' },
    { label: 'API リファレンス', to: '/features' },
    { label: 'ブログ', to: '/features' },
    { label: 'チュートリアル', to: '/features' },
  ],
  会社情報: [
    { label: '会社概要', to: '/contact' },
    { label: '採用情報', to: '/contact' },
    { label: 'お問い合わせ', to: '/contact' },
    { label: 'パートナー', to: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer data-fc-id="Footer-root" className="border-t border-zinc-800/50 pt-16 pb-10 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div data-fc-id="Footer-inner" className="max-w-6xl mx-auto">
        <div data-fc-id="Footer-grid" className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div data-fc-id="Footer-brand" className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-accent-500" />
              <span className="text-lg font-bold text-foreground">SaaSify</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mb-6">
              チームの生産性を最大化する<br />次世代プラットフォーム。
            </p>
            {/* Newsletter */}
            <div data-fc-id="Footer-newsletter" className="flex gap-2">
              <input
                placeholder="メールアドレス"
                className="flex-1 bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-foreground placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-accent-500/40"
              />
              <button className="bg-accent-600 hover:bg-accent-500 text-on-accent px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0">
                登録
              </button>
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} data-fc-id={`Footer-col-${category}`}>
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-zinc-500 hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div data-fc-id="Footer-bottom" className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-800/50">
          <p className="text-xs text-zinc-600">© 2024 SaaSify Inc. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-zinc-600">
            <a href="#" className="hover:text-foreground transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-foreground transition-colors">利用規約</a>
            <a href="#" className="hover:text-foreground transition-colors">特定商取引法</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
