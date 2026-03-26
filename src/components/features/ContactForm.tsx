import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl mb-2">✉️</p>
        <p className="text-white font-semibold">送信完了</p>
        <p className="text-zinc-500 text-sm mt-1">3営業日以内にご返信いたします。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input required placeholder="お名前" className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent-500/50" />
        <input required type="email" placeholder="メールアドレス" className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent-500/50" />
      </div>
      <input placeholder="件名" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent-500/50" />
      <textarea required rows={5} placeholder="メッセージ" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent-500/50 resize-none" />
      <button type="submit" className="bg-accent-600 hover:bg-accent-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2">
        <Send className="w-4 h-4" /> 送信する
      </button>
    </form>
  );
}
