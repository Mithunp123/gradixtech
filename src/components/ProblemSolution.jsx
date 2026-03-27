import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, CheckCircle, ArrowRight, X, Check } from 'lucide-react';
import './ProblemSolution.css';

const problems = [
  'Manual processes slowing your team down',
  'Scattered data across multiple platforms',
  'Outdated websites losing potential leads',
  'No automation in sales pipeline',
  'Lack of real-time analytics and insights',
];

const solutions = [
  'Custom AI workflows on autopilot',
  'Unified dashboard for all your data',
  'High-converting modern web platforms',
  'Automated proposal & lead generation',
  'Real-time ROI and performance tracking',
];

export default function ProblemSolution() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="problem-solution" ref={ref}>
      <div className="container">
        <div className="problem-solution__header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The Problem?{' '}
            <span className="highlight">We Have the Solution.</span>
          </motion.h2>
        </div>

        <div className="problem-solution__grid">
          {/* Problem Side */}
          <motion.div
            className="ps-card ps-card--problem"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="ps-card__header">
              <div className="ps-card__icon ps-card__icon--problem">
                <AlertTriangle size={22} />
              </div>
              <h3 className="ps-card__title">The Problem</h3>
            </div>
            <p className="ps-card__subtitle">
              Manual processes, scattered data, and outdated websites holding you back?
            </p>
            <ul className="ps-card__list">
              {problems.map((item, i) => (
                <motion.li
                  key={i}
                  className="ps-card__item ps-card__item--problem"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                >
                  <X size={14} className="ps-card__item-icon ps-card__item-icon--problem" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow / Divider */}
          <motion.div
            className="ps-divider"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="ps-divider__circle">
              <ArrowRight size={20} />
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            className="ps-card ps-card--solution"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="ps-card__header">
              <div className="ps-card__icon ps-card__icon--solution">
                <CheckCircle size={22} />
              </div>
              <h3 className="ps-card__title">The Gradix Solution</h3>
            </div>
            <p className="ps-card__subtitle">
              Custom web architecture + AI workflows to put operations on autopilot.
            </p>
            <ul className="ps-card__list">
              {solutions.map((item, i) => (
                <motion.li
                  key={i}
                  className="ps-card__item ps-card__item--solution"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                >
                  <Check size={14} className="ps-card__item-icon ps-card__item-icon--solution" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
