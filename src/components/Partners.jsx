import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Partners.css';

const words = [
  'DESIGN',
  'DEVELOPMENT',
  'AUTOMATION',
  'GROWTH',
  'PERFORMANCE',
  'INNOVATION',
  'STRATEGY',
];

export default function Partners() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="partners" ref={ref}>
      <div className="partners__marquee">
        <div className="partners__track">
          {[...words, ...words, ...words, ...words].map((word, i) => (
            <div key={i} className="partner-word">
              <span>{word}</span>
              <span className="dot" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
