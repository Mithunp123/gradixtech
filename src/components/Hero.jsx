import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useRef } from 'react';

import './Hero.css';
import mailchimpImg from '../assets/mali.png';
import atlassianImg from '../assets/atlassian.png';

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

      {/* Floating Brand Icons */}
      <motion.div className="hero__floating-icons">
        {/* ChatGPT - Top Left */}
        <motion.div 
          className="hero__icon hero__icon--chatgpt"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
          </svg>
        </motion.div>

        {/* Facebook - Left */}
        <motion.div 
          className="hero__icon hero__icon--facebook"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </motion.div>

        {/* Google Sheets - Bottom Left */}
        <motion.div 
          className="hero__icon hero__icon--sheets"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.318 12.545H7.91v-1.909h3.41v1.91zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.91h3.41v-1.91zm0 3.273h-3.41v1.91h3.41v-1.91zM20.727 6.5v15.864c0 .904-.732 1.636-1.636 1.636H4.909a1.636 1.636 0 0 1-1.636-1.636V1.636C3.273.732 4.005 0 4.909 0h9.318v6.5h6.5zm-3.273 2.773H6.545v7.909h10.91v-7.91zm-6.136 4.636H7.91v1.91h3.41v-1.91z"/>
          </svg>
        </motion.div>

        {/* Slack - Top Right */}
        <motion.div 
          className="hero__icon hero__icon--slack"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <svg viewBox="0 0 24 24">
            <path fill="#e01e5a" d="M6.527 14.514c0 1.16-.937 2.097-2.097 2.097-1.16 0-2.097-.937-2.097-2.097 0-1.16.937-2.097 2.097-2.097h2.097v2.097zm1.06 0c0-1.16.937-2.097 2.097-2.097s2.097.937 2.097 2.097v5.258c0 1.16-.937 2.097-2.097 2.097s-2.097-.937-2.097-2.097v-5.258z"/>
            <path fill="#36c5f0" d="M9.684 6.027c-1.16 0-2.097-.937-2.097-2.097C7.587 2.77 8.524 1.833 9.684 1.833s2.097.937 2.097 2.097v2.097H9.684zm0 1.06c1.16 0 2.097.937 2.097 2.097s-.937 2.097-2.097 2.097H4.43c-1.16 0-2.097-.937-2.097-2.097 0-1.16.937-2.097 2.097-2.097h5.254z"/>
            <path fill="#2eb67d" d="M18.171 9.184c0-1.16.937-2.097 2.097-2.097 1.16 0 2.097.937 2.097 2.097s-.937 2.097-2.097 2.097h-2.097V9.184zm-1.06 0c0 1.16-.937 2.097-2.097 2.097s-2.097-.937-2.097-2.097V3.93c0-1.16.937-2.097 2.097-2.097s2.097.937 2.097 2.097v5.254z"/>
            <path fill="#ecb22e" d="M15.014 17.671c1.16 0 2.097.937 2.097 2.097 0 1.16-.937 2.097-2.097 2.097s-2.097-.937-2.097-2.097v-2.097h2.097zm0-1.06c-1.16 0-2.097-.937-2.097-2.097s.937-2.097 2.097-2.097h5.258c1.16 0 2.097.937 2.097 2.097s-.937 2.097-2.097 2.097h-5.258z"/>
          </svg>
        </motion.div>

        {/* Mailchimp - Right */}
        <motion.div 
          className="hero__icon hero__icon--mailchimp"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img src={mailchimpImg} alt="Mailchimp" />
        </motion.div>

        {/* Atlassian - Bottom Right */}
        <motion.div 
          className="hero__icon hero__icon--atlassian"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <img src={atlassianImg} alt="Atlassian" />
        </motion.div>
      </motion.div>

      <motion.div
        className="container hero__container"
        style={{ opacity: opacityFade, scale }}
      >

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
          <a href="#contact" className="hero__btn-primary rounded-full px-8 py-6 text-[0.9rem]">
            <span>Start a Project</span>
            <ArrowRight size={16} strokeWidth={2.5} className="ml-2" />
          </a>
          <a href="#case-studies" className="hero__btn-outline rounded-full px-8 py-6 text-[0.9rem] hover:bg-transparent">
            <div className="hero__play-circle mr-2">
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
    </section>
  );
}
