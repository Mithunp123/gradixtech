import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MapPin, Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';
import './Contact.css';

const contactInfo = [
  { icon: <Mail size={18} />, label: 'Email', value: 'hello@gradixtech.com' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+91 98765 43210' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Chennai, India' },
  { icon: <Clock size={18} />, label: 'Working Hours', value: 'Mon - Sat, 9AM - 7PM' },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    challenge: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact__glow" />
      <div className="container">
        <div className="contact__header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Let&apos;s Start <span className="highlight">Building</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Tell us about your project and we&apos;ll get back within 24 hours.
          </motion.p>
        </div>

        <div className="contact__layout">
          {/* Form */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-business">Business Type</label>
              <input
                type="text"
                id="contact-business"
                name="business"
                placeholder="E-commerce, SaaS, Manufacturing..."
                value={formData.business}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-challenge">Biggest Challenge</label>
              <textarea
                id="contact-challenge"
                name="challenge"
                placeholder="Tell us about your project needs or biggest business challenge..."
                rows="5"
                value={formData.challenge}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact__submit">
              <span>Let&apos;s Talk Growth</span>
              <Send size={16} />
            </button>
          </motion.form>

          {/* Info Side */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="contact__info-cards">
              {contactInfo.map((item, i) => (
                <div key={i} className="contact__info-card">
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    <span className="contact__info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__quick-links">
              <h4>Quick Actions</h4>
              <a href="#" className="contact__quick-link">
                <span>Schedule a Meeting</span>
                <ArrowUpRight size={14} />
              </a>
              <a href="#" className="contact__quick-link">
                <span>View Our Portfolio</span>
                <ArrowUpRight size={14} />
              </a>
              <a href="#" className="contact__quick-link">
                <span>Download Company Profile</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
