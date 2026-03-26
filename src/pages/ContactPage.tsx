import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/features/ContactForm';

export default function ContactPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">お問い合わせ</h1>
          <p className="text-zinc-500">お気軽にご連絡ください。</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <ContactForm />
          </div>
          <div className="space-y-6">
            {[
              { icon: Mail, label: 'メール', value: 'hello@saasify.jp' },
              { icon: Phone, label: '電話', value: '03-1234-5678' },
              { icon: MapPin, label: '住所', value: '東京都渋谷区\n1-2-3' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                <Icon className="w-5 h-5 text-accent-400 mb-2" />
                <p className="text-xs text-zinc-500">{label}</p>
                <p className="text-sm text-white whitespace-pre-line">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
