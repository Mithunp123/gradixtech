import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Globe, Smartphone, MessageSquare, TrendingUp, Database, ArrowUpRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Bot size={24} />,
    title: 'Smart Automation',
    description: 'WhatsApp bots, lead nurturing workflows, and intelligent automation systems running 24/7 for your business.',
    color: '#14B8A6',
  },
  {
    icon: <Globe size={24} />,
    title: 'Web Platforms',
    description: 'High-performance websites with live social feed syncs, SEO optimization, and conversion-focused designs.',
    color: '#0EA5E9',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Custom Applications',
    description: 'Influencer SaaS tools, internal dashboards, and bespoke mobile applications built for scale.',
    color: '#0D9488',
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Chatbot Solutions',
    description: 'Intelligent conversational interfaces that handle customer queries, bookings, and support around the clock.',
    color: '#2DD4BF',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Growth Analytics',
    description: 'Comprehensive dashboards tracking KPIs, user behavior, and ROI metrics to drive data-led decisions.',
    color: '#06B6D4',
  },
  {
    icon: <Database size={24} />,
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure cloud architecture with automated deployment pipelines and 99.9% uptime guarantee.',
    color: '#14B8A6',
  },
];

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services__accent-line" />
      <div className="container">
        <div className="services__layout">
          <div className="services__left">
            <motion.div
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="dot" />
              Services
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Intelligent Platforms{' '}
              <span className="highlight">& Smart Solutions</span>
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              High-value tech solutions designed to transform how your business operates, engages customers, and scales revenue.
            </motion.p>
            <motion.a
              href="#contact"
              className="services__cta"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight size={16} />
            </motion.a>
          </div>

          <div className="services__grid">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="service-card"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="service-card__icon"
                  style={{ '--icon-color': service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <div className="service-card__hover-line" style={{ background: service.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
