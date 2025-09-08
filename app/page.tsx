import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import ContentHub from './components/sections/ContentHub';
import NewsletterSignup from './components/sections/NewsletterSignup';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="clinical" className="scroll-mt-20">
        <ServicesSection />
      </div>
      <div id="wellness" className="scroll-mt-20" />
      <div id="salon" className="scroll-mt-20" />
      <div id="about" className="scroll-mt-20">
        <AboutSection />
      </div>
      <div id="content" className="scroll-mt-20">
        <ContentHub />
      </div>
      <NewsletterSignup />
      <div id="contact" className="scroll-mt-20">
        <ContactSection />
      </div>
    </>
  );
}