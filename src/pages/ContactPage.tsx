import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import ContactForm from '../components/features/ContactForm';

const contactInfo = [
  { icon: Mail, label: 'メール', value: 'hello@saasify.jp', action: 'mailto:hello@saasify.jp' },
  { icon: Phone, label: '電話', value: '03-1234-5678', action: 'tel:0312345678' },
  { icon: MapPin, label: '住所', value: '東京都渋谷区\n道玄坂1-2-3', action: undefined },
];

export default function ContactPage() {
  return (
    <PageTransition>
      <div data-fc-id="ContactPage-root" className="py-28 px-6 md:px-10 lg:px-16 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-accent-500/5 blur-[120px] pointer-events-none" />

        <div data-fc-id="ContactPage-inner" className="max-w-5xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} data-fc-id="ContactPage-header" className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-500/10 mb-5">
              <MessageCircle className="w-7 h-7 text-accent-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">お問い合わせ</h1>
            <p className="text-zinc-500 text-lg">お気軽にご連絡ください。専門チームが対応いたします。</p>
          </motion.div>

          <div data-fc-id="ContactPage-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              data-fc-id="ContactPage-form-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 glass-strong rounded-2xl p-8"
            >
              <ContactForm />
            </motion.div>

            <div data-fc-id="ContactPage-info" className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, action }, i) => (
                <motion.div
                  key={label}
                  data-fc-id={`ContactPage-info-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  {action ? (
                    <a href={action} className="block glass rounded-2xl p-5 group hover:border-zinc-600 transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent-400 mb-3 group-hover:scale-110 transition-transform" />
                      <p className="text-xs text-zinc-500 mb-0.5 uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-medium text-foreground whitespace-pre-line">{value}</p>
                    </a>
                  ) : (
                    <div className="glass rounded-2xl p-5">
                      <Icon className="w-5 h-5 text-accent-400 mb-3" />
                      <p className="text-xs text-zinc-500 mb-0.5 uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-medium text-foreground whitespace-pre-line">{value}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
