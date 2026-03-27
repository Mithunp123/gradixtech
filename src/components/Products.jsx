import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, FileText, Users, ArrowUpRight, Lock, Zap, BarChart3 } from 'lucide-react';
import './Products.css';

const products = [
  {
    icon: <Shield size={28} />,
    title: 'Secure Password Manager',
    hook: 'Stop risking company data on WhatsApp.',
    description: 'Enterprise-grade encrypted password manager for teams to store and share credentials securely. Built with zero-knowledge architecture.',
    features: ['End-to-End Encryption', 'Team Sharing', 'Audit Logs', 'SSO Integration'],
    gradient: 'linear-gradient(135deg, #0044CC, #0066FF)',
    accentIcon: <Lock size={16} />,
    tag: 'Security',
  },
  {
    icon: <FileText size={28} />,
    title: 'Dynamic Proposal Generator',
    hook: 'Spending hours drafting client quotes?',
    description: 'Automate your sales pipeline. Generate professional, dynamic PDF proposals in seconds with automated data fetching and rendering.',
    features: ['Auto Data Fetch', 'PDF Generation', 'Template Engine', 'CRM Sync'],
    gradient: 'linear-gradient(135deg, #0066FF, #00B4FF)',
    accentIcon: <Zap size={16} />,
    tag: 'Automation',
  },
  {
    icon: <Users size={28} />,
    title: 'Influencer Marketing SaaS',
    hook: 'Struggling to find the right content creators?',
    description: 'A centralized platform that seamlessly bridges the gap between brands and influencers with campaign tracking and ROI analytics.',
    features: ['Creator Discovery', 'Campaign Tracking', 'ROI Dashboard', 'Brand Matching'],
    gradient: 'linear-gradient(135deg, #00B4FF, #66D4FF)',
    accentIcon: <BarChart3 size={16} />,
    tag: 'Marketing',
  },
];

export default function Products() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="products" id="products" ref={ref}>
      <div className="products__bg-glow" />
      <div className="container">
        <div className="products__header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Powerful Products to{' '}
            <span className="highlight">Supercharge</span> Your Business
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Enterprise-ready solutions built to solve real business challenges and accelerate growth.
          </motion.p>
        </div>

        <div className="products__grid">
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="product-card"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="product-card__header">
                <div className="product-card__icon" style={{ background: product.gradient }}>
                  {product.icon}
                </div>
                <span className="product-card__tag">
                  {product.accentIcon}
                  {product.tag}
                </span>
              </div>

              <h3 className="product-card__title">{product.title}</h3>
              <p className="product-card__hook">{product.hook}</p>
              <p className="product-card__desc">{product.description}</p>

              <div className="product-card__features">
                {product.features.map((feature, j) => (
                  <span key={j} className="product-card__feature">
                    <span className="product-card__feature-dot" />
                    {feature}
                  </span>
                ))}
              </div>

              <a href="#contact" className="product-card__link">
                <span>Learn More</span>
                <ArrowUpRight size={16} />
              </a>

              {/* Hover glow effect */}
              <div className="product-card__glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
