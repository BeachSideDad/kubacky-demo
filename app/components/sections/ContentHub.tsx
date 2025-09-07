'use client';

import { useTheme } from '@/app/contexts/ThemeContext';

export default function ContentHub() {
  const { theme } = useTheme();

  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          bg: 'bg-mystical-neutral-50',
          card: 'bg-white border-mystical-primary-200/30 hover:shadow-mystical-primary-200',
          heading: 'text-mystical-neutral-900',
          text: 'text-mystical-neutral-600',
          accent: 'text-mystical-primary-600',
          category: 'bg-mystical-primary-100 text-mystical-primary-800',
          button: 'text-mystical-primary-600 hover:text-mystical-primary-800',
        };
      case 'calming':
        return {
          bg: 'bg-calming-neutral-50',
          card: 'bg-white border-calming-primary-200/30 hover:shadow-calming-primary-200',
          heading: 'text-calming-neutral-900',
          text: 'text-calming-neutral-600',
          accent: 'text-calming-primary-600',
          category: 'bg-calming-primary-100 text-calming-primary-800',
          button: 'text-calming-primary-600 hover:text-calming-primary-800',
        };
      case 'earthy':
        return {
          bg: 'bg-earthy-neutral-50',
          card: 'bg-white border-earthy-primary-200/30 hover:shadow-earthy-primary-200',
          heading: 'text-earthy-neutral-900',
          text: 'text-earthy-neutral-600',
          accent: 'text-earthy-primary-600',
          category: 'bg-earthy-accent/20 text-earthy-secondary-800',
          button: 'text-earthy-primary-600 hover:text-earthy-primary-800',
        };
      default:
        return {
          bg: 'bg-gray-50',
          card: 'bg-white border-blue-200/30 hover:shadow-blue-200',
          heading: 'text-gray-900',
          text: 'text-gray-600',
          accent: 'text-blue-600',
          category: 'bg-blue-100 text-blue-800',
          button: 'text-blue-600 hover:text-blue-800',
        };
    }
  };

  const styles = getThemeClasses();

  const posts = [
    {
      category: 'Clinical Insights',
      title: 'The PCOS-Anxiety Connection: What Your Doctor Isn\'t Telling You',
      excerpt: 'Living with PCOS isn\'t just about irregular periods and weight gain. The psychological impact runs deep, creating a perfect storm of anxiety, depression, and identity confusion that most medical professionals barely acknowledge.',
      readTime: '8 min read',
      date: 'March 15, 2024',
      type: 'clinical'
    },
    {
      category: 'Transpersonal Wisdom',
      title: 'When Your Chakras Need Therapy: Integrating Energy Work with Psychology',
      excerpt: 'Can blocked chakras cause actual psychological symptoms? As someone who straddles both worlds, I\'ve seen remarkable healing happen when we address both the energetic and psychological aspects of trauma.',
      readTime: '6 min read',
      date: 'March 8, 2024',
      type: 'mystical'
    },
    {
      category: 'Professional Musings',
      title: 'Why I Left Traditional Practice (And Why I Came Back)',
      excerpt: 'The story of how I went from burned-out clinician to full-time energy healer and back to a dual practice that honors both science and spirit. Spoiler alert: it wasn\'t a linear journey.',
      readTime: '12 min read',
      date: 'February 28, 2024',
      type: 'personal'
    },
    {
      category: 'Clinical Research',
      title: 'Trauma-Informed Energy Healing: A Case Study Approach',
      excerpt: 'What happens when we apply trauma-informed principles to energy healing? This research explores the intersection of somatic psychology and Reiki in treating complex PTSD.',
      readTime: '15 min read',
      date: 'February 20, 2024',
      type: 'research'
    },
    {
      category: 'Community Healing',
      title: 'The Sliding Scale Salon: Making Healing Accessible',
      excerpt: 'Healing shouldn\'t be a privilege reserved for the wealthy. Here\'s how our monthly community healing salon creates sacred space for transformation regardless of financial means.',
      readTime: '5 min read',
      date: 'February 12, 2024',
      type: 'community'
    },
    {
      category: 'Controversial Takes',
      title: 'The Shadow Side of Spiritual Bypassing in Therapy',
      excerpt: 'Love and light isn\'t always the answer. Sometimes we need to sit with the darkness, feel the rage, and honor the complexity of human experience. Here\'s why spiritual bypassing is dangerous in therapeutic settings.',
      readTime: '10 min read',
      date: 'February 5, 2024',
      type: 'clinical'
    }
  ];

  return (
    <section className={`py-16 ${styles.bg}`} id="content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-serif ${styles.heading} mb-4`}>
            Content Hub
          </h2>
          <p className={`${styles.text} max-w-2xl mx-auto text-lg`}>
            Where clinical psychology meets mystical wisdom. Explore thoughts, research, 
            and reflections from the intersection of science and spirituality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article 
              key={index}
              className={`${styles.card} border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`${styles.category} px-3 py-1 rounded-full text-xs font-medium`}>
                    {post.category}
                  </span>
                  <span className={`${styles.text} text-xs`}>
                    {post.date}
                  </span>
                </div>

                <h3 className={`${styles.heading} font-semibold text-lg mb-3 line-clamp-2`}>
                  {post.title}
                </h3>

                <p className={`${styles.text} text-sm mb-4 line-clamp-3`}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`${styles.text} text-xs`}>
                    {post.readTime}
                  </span>
                  <button className={`${styles.button} text-sm font-medium hover:underline transition-colors`}>
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Teaser */}
        <div className={`${styles.card} border rounded-lg p-8 text-center`}>
          <h3 className={`${styles.heading} text-xl font-semibold mb-3`}>
            The Irreverent Newsletter
          </h3>
          <p className={`${styles.text} mb-4 max-w-xl mx-auto`}>
            Weekly insights on psychology, spirituality, and the messy beautiful intersection of both. 
            No spiritual bypassing, no clinical jargon – just honest explorations of consciousness and healing.
          </p>
          <button className={`${styles.accent} border-2 border-current px-6 py-2 rounded-md font-medium hover:bg-current hover:text-white transition-all`}>
            Subscribe for Free
          </button>
        </div>

        {/* Content Categories */}
        <div className="mt-16">
          <h3 className={`${styles.heading} text-xl font-semibold text-center mb-8`}>
            Explore by Topic
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Clinical Psychology', 'PCOS & Mental Health', 'Energy Healing', 
              'Transpersonal Psychology', 'Research & Evidence', 'Professional Development',
              'Community Healing', 'Controversial Takes', 'Case Studies'
            ].map((topic) => (
              <button
                key={topic}
                className={`${styles.category} px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}