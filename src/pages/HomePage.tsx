import PageTransition from '../components/ui/PageTransition';
import Hero from '../components/features/Hero';
import FeatureCard from '../components/features/FeatureCard';
import TestimonialCard from '../components/features/TestimonialCard';
import CTA from '../components/features/CTA';
import { features } from '../data/features';
import { testimonials } from '../data/testimonials';

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">主な機能</h2>
          <p className="text-zinc-500 text-center mb-12">チームの生産性を向上させる豊富な機能</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.slice(0, 4).map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">お客様の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </PageTransition>
  );
}
