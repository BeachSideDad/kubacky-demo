import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gretchenkubacky.com'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // Blog posts - these would typically be generated dynamically
    {
      url: `${baseUrl}/blog/integrating-psychology-mysticism`,
      lastModified,
      changeFrequency: 'never',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/pcos-holistic-approach`,
      lastModified,
      changeFrequency: 'never',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/trauma-informed-energy-work`,
      lastModified,
      changeFrequency: 'never',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/boundaries-spiritual-practice`,
      lastModified,
      changeFrequency: 'never',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/irreverent-approach-healing`,
      lastModified,
      changeFrequency: 'never',
      priority: 0.6,
    },
  ]
}