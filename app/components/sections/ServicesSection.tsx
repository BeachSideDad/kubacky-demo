'use client';

import { useTheme } from '@/app/contexts/ThemeContext';

export default function ServicesSection() {
  const { theme } = useTheme();

  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          bg: 'bg-mystical-neutral-50',
          card: 'bg-white hover:shadow-mystical-primary-200',
          icon: 'text-mystical-primary-600',
          heading: 'text-mystical-neutral-900',
          text: 'text-mystical-neutral-600',
          badge: 'bg-mystical-secondary-100 text-mystical-secondary-800',
        };
      case 'calming':
        return {
          bg: 'bg-calming-neutral-50',
          card: 'bg-white hover:shadow-calming-primary-200',
          icon: 'text-calming-primary-600',
          heading: 'text-calming-neutral-900',
          text: 'text-calming-neutral-600',
          badge: 'bg-calming-secondary-100 text-calming-secondary-800',
        };
      case 'earthy':
        return {
          bg: 'bg-earthy-neutral-50',
          card: 'bg-white hover:shadow-earthy-primary-200',
          icon: 'text-earthy-primary-600',
          heading: 'text-earthy-neutral-900',
          text: 'text-earthy-neutral-600',
          badge: 'bg-earthy-accent/20 text-earthy-secondary-800',
        };
      default:
        return {
          bg: 'bg-gray-50',
          card: 'bg-white hover:shadow-blue-200',
          icon: 'text-blue-600',
          heading: 'text-gray-900',
          text: 'text-gray-600',
          badge: 'bg-blue-100 text-blue-800',
        };
    }
  };

  const styles = getThemeClasses();

  const services = [
    {
      category: 'Clinical Psychology',
      badge: 'Licensed Services',
      items: [
        {
          title: 'Individual Therapy',
          description: 'Evidence-based treatment for anxiety, depression, trauma, and life transitions',
          icon: '🧠',
        },
        {
          title: 'PCOS Specialist',
          description: 'Expert psychological support for PCOS-related mental health challenges',
          icon: '💚',
        },
        {
          title: 'Professional Supervision',
          description: 'Clinical supervision for pre-licensed therapists and consultation',
          icon: '👥',
        },
      ],
    },
    {
      category: 'Transpersonal Wellness',
      badge: 'Holistic Offerings',
      items: [
        {
          title: 'Energy Healing',
          description: 'Reiki, chakra balancing, and energetic clearing for spiritual wellness',
          icon: '✨',
        },
        {
          title: 'Psychic Consultation',
          description: 'Intuitive guidance and spiritual insights for life direction',
          icon: '🔮',
        },
        {
          title: 'Community Healing Salon',
          description: 'Group healing circles with sliding scale accessibility',
          icon: '🌟',
        },
      ],
    },
  ];

  return (
    <section className={`py-16 ${styles.bg}`} id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-serif ${styles.heading} mb-4`}>
            Dual Practice Model
          </h2>
          <p className={`${styles.text} max-w-2xl mx-auto`}>
            Choose the path that resonates with your needs: evidence-based clinical psychology 
            or spiritually-integrated wellness practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((category) => (
            <div key={category.category} className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-xl font-semibold ${styles.heading}`}>
                  {category.category}
                </h3>
                <span className={`${styles.badge} px-3 py-1 rounded-full text-xs font-medium`}>
                  {category.badge}
                </span>
              </div>

              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.title}
                    className={`${styles.card} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start">
                      <span className="text-2xl mr-4">{item.icon}</span>
                      <div>
                        <h4 className={`font-semibold ${styles.heading} mb-2`}>
                          {item.title}
                        </h4>
                        <p className={`text-sm ${styles.text}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-6 ${styles.card} rounded-lg text-center`}>
          <p className={`text-sm ${styles.text}`}>
            <strong>Important Note:</strong> Clinical psychology services are provided under California state licensure. 
            Transpersonal wellness services are offered as complementary practices and are not medical or psychological treatment.
          </p>
        </div>
      </div>
    </section>
  );
}