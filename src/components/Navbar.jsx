import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/image.png';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo">
          <img src={logoImg} alt="Gradix Technologies" className="navbar__logo-img" />
        </a>

        <a href="#contact" className="navbar__cta">
          <span>Book a Call</span>
          <div className="navbar__cta-arrow">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </div>
        </a>
      </div>
    </motion.nav>
  );
}
