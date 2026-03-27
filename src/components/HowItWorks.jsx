import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Code2, Rocket } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    icon: <Search size={24} strokeWidth={1.5} />,
    step: '01',
    color: '#1A6CFF',
    title: 'Discover & Architect',
    description: 'We analyze your business needs and plan the perfect web, app, and tech stack tailored to your goals.',
    details: ['Business Analysis', 'Tech Stack Planning', 'Architecture Design'],
  },
  {
    icon: <Code2 size={24} strokeWidth={1.5} />,
    step: '02',
    color: '#8B5CF6',
    title: 'Build & Integrate',
    description: 'Our team develops high-performance platforms, integrating smart tools and automation workflows.',
    details: ['Agile Development', 'System Integration', 'Quality Assurance'],
  },
  {
    icon: <Rocket size={24} strokeWidth={1.5} />,
    step: '03',
    color: '#F97316',
    title: 'Launch & Automate',
    description: 'We deploy your solution and set up continuous automation for lead generation and growth acceleration.',
    details: ['Deployment', 'Automation Setup', 'Growth Tracking'],
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="how-it-works" id="how-it-works" ref={ref}>
      <div className="container">
        <div className="how-it-works__header">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="dot" />
            Our Process
          </motion.div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            How <span className="highlight">Gradix</span> Works
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A transparent, 3-step roadmap of how we build, scale, and deliver smart tech solutions.
          </motion.p>
        </div>

        <div className="how-it-works__grid">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="how-it-works__card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="how-it-works__card-top">
                <div className="how-it-works__icon" style={{ color: step.color }}>
                  {step.icon}
                </div>
                <span
                  className="how-it-works__step-num"
                  style={{ color: step.color, opacity: 0.15 }}
                >
                  {step.step}
                </span>
              </div>
              <h3 className="how-it-works__card-title">{step.title}</h3>
              <p className="how-it-works__card-desc">{step.description}</p>
              <div className="how-it-works__tags">
                {step.details.map((detail, j) => (
                  <span key={j} className="how-it-works__tag">{detail}</span>
                ))}
              </div>

              {i < steps.length - 1 && (
                <div className="how-it-works__connector" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
