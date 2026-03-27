import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles } from 'lucide-react';
import './CTA.css';

export default function CTA() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="cta-section" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background Effects */}
          <div className="cta-card__orb cta-card__orb--1" />
          <div className="cta-card__orb cta-card__orb--2" />
          <div className="cta-card__grid" />

          <div className="cta-card__content">
            <motion.div
              className="cta-card__badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles size={14} />
              <span>Let&apos;s Build Something Great</span>
            </motion.div>

            <motion.h2
              className="cta-card__title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Ready to Upgrade
              <br />
              <span className="cta-card__title-gradient">Your Business?</span>
            </motion.h2>

            <motion.p
              className="cta-card__desc"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Tell us about your biggest challenge. Let&apos;s discuss how smart tech 
              can transform your business operations and accelerate growth.
            </motion.p>

            <motion.div
              className="cta-card__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <a href="#contact" className="cta-card__btn-primary">
                <span>Book a Strategy Call</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="cta-card__btn-secondary">
                Let&apos;s Talk Growth
              </a>
            </motion.div>

            <motion.div
              className="cta-card__stats"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="cta-card__stat">
                <strong>Free</strong>
                <span>Strategy Session</span>
              </div>
              <div className="cta-card__stat-divider" />
              <div className="cta-card__stat">
                <strong>48h</strong>
                <span>Response Time</span>
              </div>
              <div className="cta-card__stat-divider" />
              <div className="cta-card__stat">
                <strong>100%</strong>
                <span>Custom Solutions</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
