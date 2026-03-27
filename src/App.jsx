import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ProblemSolution from './components/ProblemSolution';
import Products from './components/Products';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <HowItWorks />
        <ProblemSolution />
        <Products />
        <Services />
        <CaseStudies />
        <CTA />
        <Partners />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
