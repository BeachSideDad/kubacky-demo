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
      <ServicesSection />
      <AboutSection />
      <ContentHub />
      <NewsletterSignup />
      <ContactSection />
    </>
  );
}