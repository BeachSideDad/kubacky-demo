'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import LoadingSpinner from '@/app/components/ui/LoadingSpinner';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  category: 'clinical' | 'transpersonal' | 'research' | 'personal';
  tags: string[];
  featured: boolean;
  image?: string;
}

// Mock blog posts for demo
const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'integrating-psychology-and-mysticism',
    title: 'The Art of Integrating Clinical Psychology with Mystical Practice',
    excerpt: 'How I navigate the delicate balance between evidence-based practice and spiritual wisdom in my therapeutic work.',
    content: `
      <h2>The Professional Dilemma</h2>
      <p>As a licensed clinical psychologist who also practices energy healing and Reiki, I often find myself navigating two worlds that don't always speak the same language. The clinical world demands evidence, research, and measurable outcomes. The mystical world speaks in intuition, energy, and transformation that can't always be quantified.</p>
      
      <p>But here's what I've learned: they don't have to be mutually exclusive.</p>
      
      <h2>Finding the Integration</h2>
      <p>In my practice, I've discovered that the most profound healing often happens in the space between the two. My clinical training provides the foundation—the safety, the structure, the ethical framework that protects my clients. My mystical practice provides the expansion—the intuitive insights, the energetic awareness, the spiritual context that traditional therapy sometimes misses.</p>
      
      <h2>Practical Applications</h2>
      <p>Here's how this integration looks in practice:</p>
      
      <ul>
        <li><strong>Grounding in Evidence:</strong> Every technique I use, mystical or not, must serve the client's therapeutic goals. I'm not here to impose my spiritual beliefs—I'm here to facilitate healing in whatever form it takes.</li>
        
        <li><strong>Transparent Communication:</strong> I'm always clear about what I'm offering. Clinical therapy happens in one container, energy work in another. Clients know exactly what they're receiving and can consent accordingly.</li>
        
        <li><strong>Honoring Both Perspectives:</strong> Sometimes the research validates what ancient wisdom has always known. Sometimes mystical insights point toward areas that need more scientific exploration.</li>
      </ul>
      
      <h2>The Controversial Truth</h2>
      <p>Not everyone in either field appreciates this integration. Some colleagues think I've gone too "woo-woo." Some spiritual practitioners think I'm too rigid. But my clients tell a different story.</p>
      
      <p>They tell me about breakthrough moments that combined cognitive insights with energetic shifts. They describe healing that addressed not just their symptoms, but their soul. They speak of transformation that honored both their psychological patterns and their spiritual journey.</p>
      
      <h2>Moving Forward</h2>
      <p>The future of mental health, I believe, lies in this integration—not in choosing one approach over another, but in skillfully weaving together the best of both worlds. It requires practitioners who are deeply trained in both domains, who understand the ethics and boundaries of each, and who can hold space for healing that transcends traditional categories.</p>
      
      <p>This isn't about replacing evidence-based practice with mystical thinking. It's about expanding our understanding of what evidence might include, and recognizing that human beings are beautifully complex creatures who can't always be reduced to diagnostic criteria.</p>
    `,
    author: 'Dr. Gretchen Kubacky',
    publishedAt: '2024-03-15',
    readTime: 8,
    category: 'clinical',
    tags: ['integration', 'clinical psychology', 'mysticism', 'ethics'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
  },
  {
    id: '2',
    slug: 'pcos-mental-health-connection',
    title: 'The Hidden Mental Health Impact of PCOS',
    excerpt: 'Why polycystic ovary syndrome affects far more than just reproductive health—and what we can do about it.',
    content: `
      <h2>Beyond the Physical Symptoms</h2>
      <p>When we talk about PCOS (Polycystic Ovary Syndrome), the conversation usually centers on irregular periods, weight gain, and fertility challenges. But there's a crucial aspect that's often overlooked: the profound impact on mental health.</p>
      
      <p>Research shows that women with PCOS are at significantly higher risk for depression, anxiety, and eating disorders. This isn't just correlation—there are real physiological mechanisms at play.</p>
      
      <h2>The Hormone-Mood Connection</h2>
      <p>PCOS disrupts multiple hormone systems that directly affect mood regulation:</p>
      
      <ul>
        <li><strong>Insulin Resistance:</strong> The blood sugar rollercoaster affects neurotransmitter production, particularly serotonin.</li>
        <li><strong>Androgen Excess:</strong> Higher levels of male hormones can impact mood stability and increase aggression or irritability.</li>
        <li><strong>Inflammation:</strong> PCOS creates a chronic inflammatory state that affects brain function and mood.</li>
      </ul>
      
      <h2>The Shame Spiral</h2>
      <p>But it's not just biological. The symptoms of PCOS—weight gain, acne, excess hair growth—often trigger intense shame and body image issues in a culture that has very narrow beauty standards. This psychological burden compounds the physiological challenges.</p>
      
      <p>Many of my clients with PCOS describe feeling "broken" or "less feminine." They've often internalized messages about their worth being tied to their appearance or fertility, and PCOS challenges both.</p>
      
      <h2>A Holistic Treatment Approach</h2>
      <p>Effective treatment for PCOS-related mental health issues requires addressing both the physical and psychological aspects:</p>
      
      <h3>Medical Support</h3>
      <p>Working with healthcare providers who understand the PCOS-mental health connection is crucial. This might include endocrinologists, gynecologists, and psychiatrists who can address the hormonal aspects.</p>
      
      <h3>Therapeutic Intervention</h3>
      <p>Therapy can help with body image issues, develop healthy coping strategies, and process the grief that often comes with a PCOS diagnosis—grief for the body you expected to have, the ease others seem to experience, the timeline you thought your life would follow.</p>
      
      <h3>Lifestyle Medicine</h3>
      <p>Anti-inflammatory diets, stress management, and appropriate exercise can significantly impact both PCOS symptoms and mood. But this isn't about quick fixes or perfect adherence—it's about finding sustainable approaches that work for your life.</p>
      
      <h2>You're Not Alone</h2>
      <p>If you're struggling with PCOS and mental health challenges, please know that you're not alone, and your struggles are valid. The intersection of physical and mental health is complex, and healing often requires a multi-faceted approach.</p>
      
      <p>Your worth isn't determined by your hormones, your weight, or your fertility. You deserve care, support, and treatment that addresses all aspects of your experience—not just the parts that show up on lab tests.</p>
    `,
    author: 'Dr. Gretchen Kubacky',
    publishedAt: '2024-03-08',
    readTime: 6,
    category: 'clinical',
    tags: ['PCOS', 'womens health', 'hormones', 'mental health', 'body image'],
    featured: false
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { theme } = useTheme();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          bg: 'bg-mystical-neutral-50',
          container: 'bg-white',
          heading: 'text-mystical-neutral-900',
          text: 'text-mystical-neutral-700',
          accent: 'text-mystical-primary-600',
          border: 'border-mystical-primary-200',
          meta: 'text-mystical-neutral-500',
          tag: 'bg-mystical-primary-100 text-mystical-primary-800',
          link: 'text-mystical-primary-600 hover:text-mystical-primary-700'
        };
      case 'calming':
        return {
          bg: 'bg-calming-neutral-50',
          container: 'bg-white',
          heading: 'text-calming-neutral-900',
          text: 'text-calming-neutral-700',
          accent: 'text-calming-primary-600',
          border: 'border-calming-primary-200',
          meta: 'text-calming-neutral-500',
          tag: 'bg-calming-primary-100 text-calming-primary-800',
          link: 'text-calming-primary-600 hover:text-calming-primary-700'
        };
      case 'earthy':
        return {
          bg: 'bg-earthy-neutral-50',
          container: 'bg-white',
          heading: 'text-earthy-neutral-900',
          text: 'text-earthy-neutral-700',
          accent: 'text-earthy-primary-600',
          border: 'border-earthy-primary-200',
          meta: 'text-earthy-neutral-500',
          tag: 'bg-earthy-primary-100 text-earthy-primary-800',
          link: 'text-earthy-primary-600 hover:text-earthy-primary-700'
        };
      default:
        return {
          bg: 'bg-gray-50',
          container: 'bg-white',
          heading: 'text-gray-900',
          text: 'text-gray-700',
          accent: 'text-blue-600',
          border: 'border-gray-200',
          meta: 'text-gray-500',
          tag: 'bg-blue-100 text-blue-800',
          link: 'text-blue-600 hover:text-blue-700'
        };
    }
  };

  const styles = getThemeClasses();

  useEffect(() => {
    // Simulate API call
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const post = mockBlogPosts.find(p => p.slug === params.slug);
        
        if (!post) {
          setError('Blog post not found');
          return;
        }

        setBlogPost(post);
      } catch {
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className={`min-h-screen ${styles.bg} py-16`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center py-32">
              <LoadingSpinner size="lg" text="Loading blog post..." />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className={`min-h-screen ${styles.bg} py-16`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`${styles.container} rounded-lg shadow-sm p-12 border ${styles.border}`}>
              <h1 className={`text-2xl font-bold ${styles.heading} mb-4`}>
                {error || 'Blog post not found'}
              </h1>
              <p className={`${styles.text} mb-6`}>
                The blog post you&apos;re looking for doesn&apos;t exist or couldn&apos;t be loaded.
              </p>
              <Link href="/" className={`${styles.link} font-medium`}>
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className={`min-h-screen ${styles.bg} py-16`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`${styles.container} rounded-lg shadow-sm border ${styles.border} overflow-hidden`}>
            {/* Hero Image */}
            {blogPost.image && (
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8 lg:p-12">
              {/* Meta Information */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles.tag}`}>
                    {blogPost.category}
                  </span>
                  <span className={`${styles.meta} text-sm`}>
                    {blogPost.readTime} min read
                  </span>
                </div>
                <time className={`${styles.meta} text-sm`} dateTime={blogPost.publishedAt}>
                  {new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>

              {/* Title */}
              <h1 className={`text-3xl lg:text-4xl font-serif ${styles.heading} mb-4`}>
                {blogPost.title}
              </h1>

              {/* Author */}
              <div className="flex items-center mb-8">
                <div>
                  <p className={`font-medium ${styles.text}`}>
                    By {blogPost.author}
                  </p>
                </div>
              </div>

              {/* Excerpt */}
              <div className={`text-lg ${styles.text} mb-8 pb-8 border-b ${styles.border}`}>
                {blogPost.excerpt}
              </div>

              {/* Content */}
              <div 
                className={`prose prose-lg max-w-none ${styles.text}`}
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                style={{
                  '--tw-prose-headings': styles.heading.split(' ')[0],
                  '--tw-prose-links': styles.link.split(' ')[0],
                  '--tw-prose-bold': styles.heading.split(' ')[0],
                } as React.CSSProperties}
              />

              {/* Tags */}
              {blogPost.tags && blogPost.tags.length > 0 && (
                <div className={`mt-12 pt-8 border-t ${styles.border}`}>
                  <h3 className={`text-sm font-medium ${styles.meta} mb-4`}>
                    Topics:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-sm ${styles.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className={`mt-12 pt-8 border-t ${styles.border} text-center`}>
                <a
                  href="/#content"
                  className={`${styles.link} font-medium inline-flex items-center`}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Content Hub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}