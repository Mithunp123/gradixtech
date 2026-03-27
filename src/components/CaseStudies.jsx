import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, ChevronRight, Target, Lightbulb, TrendingUp } from 'lucide-react';
import './CaseStudies.css';

const caseStudies = [
  {
    id: 1,
    client: 'Golden Steel',
    industry: 'Industrial Manufacturing',
    challenge: 'Outdated static website with zero search visibility and no digital lead generation. Manual quoting process losing potential customers.',
    solution: 'Built a high-performance catalog website with SEO-optimized product pages, automated search indexing, and integrated inquiry forms.',
    impact: ['300% increase in organic traffic', 'Automated product catalog management', '40+ qualified leads per month'],
    tags: ['E-Commerce', 'SEO', 'Catalog'],
  },
  {
    id: 2,
    client: 'JOTHI PLATES',
    industry: 'Manufacturing & Retail',
    challenge: 'No online presence, relying solely on word-of-mouth. Competitors gaining market share through digital channels.',
    solution: 'Created a visually stunning brand website with product showcase, social media integration, and Google Business optimization.',
    impact: ['First page Google rankings', 'Brand visibility increased 5x', 'New customer acquisition up 60%'],
    tags: ['Branding', 'Web Design', 'Social'],
  },
  {
    id: 3,
    client: 'SMR Nutz',
    industry: 'Food & Beverage',
    challenge: 'Manual order processing, no scalable e-commerce solution. Growing demand couldn\'t be served efficiently.',
    solution: 'Deployed a scalable e-commerce platform with automated order management, payment integration, and delivery tracking.',
    impact: ['200% revenue growth in 6 months', 'Zero order processing errors', 'Customer satisfaction up 90%'],
    tags: ['E-Commerce', 'Automation', 'Scaling'],
  },
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="case-studies" id="case-studies" ref={ref}>
      <div className="case-studies__bg-line" />
      <div className="container">
        <div className="case-studies__header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Result-Driven{' '}
            <span className="highlight">Success Stories</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Real-world deployments proving expertise across industries.
          </motion.p>
        </div>

        <motion.div
          className="case-studies__content"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Tabs */}
          <div className="case-studies__tabs">
            {caseStudies.map((cs, i) => (
              <button
                key={cs.id}
                className={`case-tab ${activeCase === i ? 'case-tab--active' : ''}`}
                onClick={() => setActiveCase(i)}
              >
                <span className="case-tab__name">{cs.client}</span>
                <span className="case-tab__industry">{cs.industry}</span>
                <ChevronRight size={16} className="case-tab__arrow" />
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase}
              className="case-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="case-detail__tags">
                {caseStudies[activeCase].tags.map((tag, i) => (
                  <span key={i} className="case-detail__tag">{tag}</span>
                ))}
              </div>

              <h3 className="case-detail__client">{caseStudies[activeCase].client}</h3>

              <div className="case-detail__sections">
                <div className="case-detail__section">
                  <div className="case-detail__section-header">
                    <Target size={18} />
                    <span>The Challenge</span>
                  </div>
                  <p>{caseStudies[activeCase].challenge}</p>
                </div>

                <div className="case-detail__section">
                  <div className="case-detail__section-header">
                    <Lightbulb size={18} />
                    <span>The Solution</span>
                  </div>
                  <p>{caseStudies[activeCase].solution}</p>
                </div>

                <div className="case-detail__section case-detail__section--impact">
                  <div className="case-detail__section-header">
                    <TrendingUp size={18} />
                    <span>The Impact</span>
                  </div>
                  <ul className="case-detail__impacts">
                    {caseStudies[activeCase].impact.map((item, i) => (
                      <li key={i} className="case-detail__impact">
                        <span className="case-detail__impact-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
