import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Globe, MessageCircle, Mail, Share2 } from 'lucide-react';
import './Footer.css';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Smart Automation', href: '#services' },
    { label: 'App Development', href: '#services' },
    { label: 'Cloud Solutions', href: '#services' },
  ],
  Products: [
    { label: 'Password Manager', href: '#products' },
    { label: 'Proposal Generator', href: '#products' },
    { label: 'Influencer Platform', href: '#products' },
    { label: 'Custom Solutions', href: '#products' },
  ],
};

const socialLinks = [
  { icon: <Globe size={16} />, href: '#', label: 'Website' },
  { icon: <MessageCircle size={16} />, href: '#', label: 'Chat' },
  { icon: <Mail size={16} />, href: '#', label: 'Email' },
  { icon: <Share2 size={16} />, href: '#', label: 'Share' },
];

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <motion.div
          className="footer__main"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Brand Column */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <span>Gradix</span>
            </a>
            <p className="footer__tagline">
              Transforming businesses with smart web, app, and digital ecosystems built for growth.
            </p>
            <div className="footer__socials">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="footer__social"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer__column">
              <h4 className="footer__column-title">{title}</h4>
              <ul className="footer__column-links">
                {links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Gradix Technologies. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
