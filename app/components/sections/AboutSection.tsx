'use client';

import { useTheme } from '@/app/contexts/ThemeContext';

export default function AboutSection() {
  const { theme } = useTheme();

  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          bg: 'bg-mystical-neutral-900',
          card: 'bg-mystical-neutral-800/50 border-mystical-primary-400/30',
          heading: 'text-mystical-primary-200',
          text: 'text-mystical-neutral-200',
          accent: 'text-mystical-secondary-400',
          quote: 'border-mystical-primary-400 bg-mystical-primary-900/30',
        };
      case 'calming':
        return {
          bg: 'bg-calming-neutral-900',
          card: 'bg-calming-neutral-800/50 border-calming-primary-400/30',
          heading: 'text-calming-primary-200',
          text: 'text-calming-neutral-200',
          accent: 'text-calming-secondary-400',
          quote: 'border-calming-primary-400 bg-calming-primary-900/30',
        };
      case 'earthy':
        return {
          bg: 'bg-earthy-neutral-900',
          card: 'bg-earthy-neutral-800/50 border-earthy-primary-400/30',
          heading: 'text-earthy-primary-200',
          text: 'text-earthy-neutral-200',
          accent: 'text-earthy-secondary-400',
          quote: 'border-earthy-primary-400 bg-earthy-primary-900/30',
        };
      default:
        return {
          bg: 'bg-gray-900',
          card: 'bg-gray-800/50 border-blue-400/30',
          heading: 'text-blue-200',
          text: 'text-gray-200',
          accent: 'text-blue-400',
          quote: 'border-blue-400 bg-blue-900/30',
        };
    }
  };

  const styles = getThemeClasses();

  return (
    <section className={`py-20 ${styles.bg}`} id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-serif ${styles.heading} mb-4`}>
              Meet Dr. Kubacky
            </h2>
            <p className={`text-lg ${styles.accent} font-medium`}>
              The Irreverent Transpersonal Psychologist
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Bio Column */}
            <div className={`md:col-span-2 ${styles.card} p-8 rounded-lg border backdrop-blur-sm`}>
              <div className="space-y-6">
                <p className={`${styles.text} leading-relaxed`}>
                  I'm not your typical psychologist. While I hold a doctorate in Clinical Psychology and am 
                  licensed in California, I've never been one to color inside the lines of conventional practice. 
                  My journey has taken me from the sterile halls of academia into the mystical realms where 
                  psychology meets spirituality.
                </p>
                
                <p className={`${styles.text} leading-relaxed`}>
                  For over a decade, I've been bridging two worlds that many say don't belong together: 
                  evidence-based clinical psychology and transpersonal healing practices. I specialize in 
                  PCOS-related mental health challenges, having lived the experience myself and understanding 
                  the unique intersection of hormones, identity, and psychological wellbeing.
                </p>
                
                <p className={`${styles.text} leading-relaxed`}>
                  My practice operates on a dual model because I believe healing isn't one-size-fits-all. 
                  Some need the structure and evidence base of traditional therapy. Others are ready to 
                  explore the deeper mysteries of consciousness and energy. Many need both, at different 
                  times in their journey.
                </p>
              </div>
            </div>

            {/* Credentials Column */}
            <div className="space-y-6">
              <div className={`${styles.card} p-6 rounded-lg border backdrop-blur-sm`}>
                <h3 className={`${styles.heading} font-semibold mb-4 text-center`}>Clinical Credentials</h3>
                <ul className={`${styles.text} space-y-2 text-sm`}>
                  <li>• Ph.D. Clinical Psychology</li>
                  <li>• Licensed California Psychologist</li>
                  <li>• PCOS Mental Health Specialist</li>
                  <li>• Clinical Supervisor</li>
                  <li>• Published Researcher</li>
                </ul>
              </div>

              <div className={`${styles.card} p-6 rounded-lg border backdrop-blur-sm`}>
                <h3 className={`${styles.heading} font-semibold mb-4 text-center`}>Mystical Arts</h3>
                <ul className={`${styles.text} space-y-2 text-sm`}>
                  <li>• Reiki Master Teacher</li>
                  <li>• Energy Healer</li>
                  <li>• Intuitive Guide</li>
                  <li>• Community Healing Facilitator</li>
                  <li>• Consciousness Explorer</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className={`${styles.quote} border-l-4 bg-opacity-20 p-6 rounded-r-lg`}>
            <blockquote className={`${styles.text} text-lg italic font-light mb-4`}>
              "I don't believe we have to choose between rigorous science and profound spirituality. 
              The most transformative healing happens when we honor both the complexity of the human 
              psyche and the mystery of consciousness itself."
            </blockquote>
            <cite className={`${styles.accent} font-medium`}>— Dr. Kubacky</cite>
          </div>

          {/* Personal Touch */}
          <div className="mt-12 text-center">
            <p className={`${styles.text} max-w-2xl mx-auto`}>
              When I'm not in session or writing, you'll find me exploring the intersections of 
              consciousness, diving deep into the latest research on trauma and resilience, or 
              facilitating healing circles where science meets soul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}