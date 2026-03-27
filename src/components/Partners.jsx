import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Partners.css';

const partners = [
  { name: 'Lumi', wordMark: true },
  { name: 'KNITFITS', wordMark: true },
  { name: 'Golden Steel', wordMark: true },
  { name: 'JOTHI PLATES', wordMark: true },
  { name: 'SMR Nutz', wordMark: true },
  { name: 'Lumi', wordMark: true },
  { name: 'KNITFITS', wordMark: true },
  { name: 'Golden Steel', wordMark: true },
];

export default function Partners() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="partners" ref={ref}>
      <div className="container">
        <motion.div
          className="partners__header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">
            <span className="dot" />
            Trusted By Industry Leaders
          </div>
          <h2 className="partners__title">Our Partners & Clients</h2>
        </motion.div>

        <motion.div
          className="partners__marquee"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="partners__track">
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="partner-logo">
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
