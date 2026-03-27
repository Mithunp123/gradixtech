import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { useRef } from 'react';
import './Hero.css';

const marqueeWords = ['Innovation', '•', 'Strategy', '•', 'Design', '•', 'Development', '•', 'Automation', '•', 'Growth', '•', 'Performance', '•'];

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Abstract shapes */}
      <div className="hero__shapes">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
      </div>

      {/* Grid lines */}
      <div className="hero__grid-lines" />

      <motion.div
        className="container hero__container"
        style={{ y: yText, opacity: opacityFade, scale }}
      >
        {/* Eyebrow */}
        <motion.div
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Star size={12} fill="currentColor" />
          <span>Trusted by 50+ businesses worldwide</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero__title-line-1">We Craft Digital</span>
          <span className="hero__title-line-2">
            <span className="hero__title-stroke">Products</span>
            {' '}That
          </span>
          <span className="hero__title-line-3">
            Drive <span className="hero__title-gradient">Results.</span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          From intelligent web platforms to automated workflows — we build
          technology ecosystems that transform how businesses operate, engage, and grow.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          className="hero__cta-row"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          <a href="#contact" className="hero__btn-primary">
            <span>Start a Project</span>
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <a href="#case-studies" className="hero__btn-outline">
            <div className="hero__play-circle">
              <Play size={10} fill="currentColor" />
            </div>
            <span>See Our Work</span>
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="hero__metrics"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25 }}
        >
          <div className="hero__metric">
            <span className="hero__metric-num">200+</span>
            <span className="hero__metric-text">Projects Delivered</span>
          </div>
          <div className="hero__metric-sep" />
          <div className="hero__metric">
            <span className="hero__metric-num">99%</span>
            <span className="hero__metric-text">Client Satisfaction</span>
          </div>
          <div className="hero__metric-sep" />
          <div className="hero__metric">
            <span className="hero__metric-num">24/7</span>
            <span className="hero__metric-text">Dedicated Support</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scrolling Marquee */}
      <motion.div
        className="hero__marquee"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="hero__marquee-track">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className={`hero__marquee-word ${w === '•' ? 'hero__marquee-dot' : ''}`}>
              {w}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
