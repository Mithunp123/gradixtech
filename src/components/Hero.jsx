import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const stats = [
  { value: '200+', label: 'Projects' },
  { value: '50+', label: 'Clients' },
  { value: '99%', label: 'Retention' },
  { value: '24/7', label: 'Support' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Ambient gradient */}
      <div className="hero__ambient" />
      <div className="hero__grid-pattern" />

      <div className="container hero__container">
        {/* Overline */}
        <motion.div
          className="hero__overline"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero__overline-dot" />
          Transforming Businesses with Smart Tech
        </motion.div>

        {/* Title */}
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          We Build Digital
          <br />
          <span className="hero__title-outline">Experiences</span>{' '}
          That
          <br />
          <span className="hero__title-gradient">Scale.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Intelligent platforms that automate workflows, drive growth,
          and transform your business operations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a href="#contact" className="hero__btn-primary">
            <span>Start Your Project</span>
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a href="#products" className="hero__btn-ghost">
            <div className="hero__btn-play-icon">
              <Play size={10} fill="currentColor" />
            </div>
            <span>View Our Work</span>
          </a>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          {stats.map((s, i) => (
            <div key={i} className="hero__stat">
              <span className="hero__stat-num">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="hero__bottom-fade" />
    </section>
  );
}
