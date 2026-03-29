import { motion } from 'framer-motion';
import './TrustedBrands.css';

const brands = [
  { name: 'Great Deal', logo: '/company-logo/greatdeal.png' },
  { name: 'Izzat Council', logo: '/company-logo/izzatcouncil.png' },
  { name: 'Manjalvanam', logo: '/company-logo/manjalvanam.png' },
  { name: 'OTL Holidays', logo: '/company-logo/OTL Holidays.png' },
  { name: 'Producer Bazzar', logo: '/company-logo/pb.png' },
  { name: 'Sastra', logo: '/company-logo/sastra.png' },
  { name: 'Zaktron', logo: '/company-logo/zaktron.png' },
  { name: 'Zein Fashion', logo: '/company-logo/zenin.png' },
];

export default function TrustedBrands() {
  return (
    <section className="trusted-brands">
      <div className="trusted-brands__wrapper">
        {/* Left Side - Text */}
        <motion.div
          className="trusted-brands__text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="trusted-brands__title">
            Brands That Trust
          </h2>
          <h3 className="trusted-brands__brand-name">
            Gradix
          </h3>
          <p className="trusted-brands__subtitle">
            to Automate, Scale, and Grow.
          </p>
        </motion.div>

        {/* Right Side - Scrolling Logos */}
        <div className="trusted-brands__marquee-wrapper">
          <div className="trusted-brands__marquee">
            <div className="trusted-brands__marquee-track">
              {/* First set */}
              {brands.map((brand, index) => (
                <div key={`brand-1-${index}`} className="trusted-brands__item">
                  <div className="trusted-brands__logo-circle">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="trusted-brands__logo"
                    />
                  </div>
                  <p className="trusted-brands__name">{brand.name}</p>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <div key={`brand-2-${index}`} className="trusted-brands__item">
                  <div className="trusted-brands__logo-circle">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="trusted-brands__logo"
                    />
                  </div>
                  <p className="trusted-brands__name">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
