import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          data-fc-id="ContactForm-success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 mb-5">
            <CheckCircle className="w-8 h-8 text-emerald-400" />
          </div>
          <p className="text-xl font-bold text-foreground mb-2">送信完了しました</p>
          <p className="text-zinc-500 text-sm">3営業日以内にご返信いたします。</p>
          <button
            data-fc-id="ContactForm-reset"
            onClick={() => setSent(false)}
            className="mt-6 text-sm text-accent-400 hover:text-accent-300 transition-colors"
          >
            もう一度送信する
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          data-fc-id="ContactForm-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-5"
        >
          <div data-fc-id="ContactForm-row-1" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label data-fc-id="ContactForm-label-name" className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">お名前 *</label>
              <input
                required
                placeholder="山田太郎"
                className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/40 transition-all"
              />
            </div>
            <div>
              <label data-fc-id="ContactForm-label-email" className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">メール *</label>
              <input
                required
                type="email"
                placeholder="taro@example.com"
                className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/40 transition-all"
              />
            </div>
          </div>
          <div>
            <label data-fc-id="ContactForm-label-subject" className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">件名</label>
            <input
              placeholder="お問い合わせ内容"
              className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/40 transition-all"
            />
          </div>
          <div>
            <label data-fc-id="ContactForm-label-message" className="block text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">メッセージ *</label>
            <textarea
              required
              rows={5}
              placeholder="お気軽にご記入ください..."
              className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3.5 text-sm text-foreground placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/40 transition-all resize-none"
            />
          </div>
          <button
            data-fc-id="ContactForm-submit"
            type="submit"
            disabled={sending}
            className="bg-accent-600 hover:bg-accent-500 disabled:opacity-60 text-on-accent px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent-600/20 hover:shadow-accent-500/30"
          >
            {sending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> 送信中...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> 送信する
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
