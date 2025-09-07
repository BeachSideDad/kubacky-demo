'use client';

import { useTheme } from '@/app/contexts/ThemeContext';

export default function PrivacyPolicyPage() {
  const { theme } = useTheme();
  
  const getThemeClasses = () => {
    switch(theme) {
      case 'mystical':
        return {
          bg: 'bg-mystical-neutral-50',
          text: 'text-mystical-neutral-900',
          heading: 'text-mystical-primary-900',
          subheading: 'text-mystical-primary-700',
          accent: 'text-mystical-secondary-600',
          card: 'bg-mystical-neutral-100',
          border: 'border-mystical-neutral-200'
        };
      case 'calming':
        return {
          bg: 'bg-calming-neutral-50',
          text: 'text-calming-neutral-900',
          heading: 'text-calming-primary-900',
          subheading: 'text-calming-primary-700',
          accent: 'text-calming-secondary-600',
          card: 'bg-calming-neutral-100',
          border: 'border-calming-neutral-200'
        };
      case 'earthy':
        return {
          bg: 'bg-earthy-neutral-50',
          text: 'text-earthy-neutral-900',
          heading: 'text-earthy-primary-900',
          subheading: 'text-earthy-primary-700',
          accent: 'text-earthy-secondary-600',
          card: 'bg-earthy-neutral-100',
          border: 'border-earthy-neutral-200'
        };
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-900',
          heading: 'text-gray-900',
          subheading: 'text-gray-700',
          accent: 'text-blue-600',
          card: 'bg-white',
          border: 'border-gray-200'
        };
    }
  };

  const styles = getThemeClasses();
  const lastUpdated = "September 7, 2025";

  return (
    <div className={`min-h-screen ${styles.bg} ${styles.text}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className={`text-4xl sm:text-5xl font-serif ${styles.heading} mb-6`}>
              Privacy Policy
            </h1>
            <p className={`text-lg ${styles.subheading} mb-4`}>
              Dr. Gretchen Kubacky, Psy.D. - Dual Practice Model
            </p>
            <p className={`text-sm ${styles.accent}`}>
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Important Notice */}
          <div className={`${styles.card} border-2 ${styles.border} rounded-lg p-6 mb-8`}>
            <h2 className={`text-xl font-semibold ${styles.heading} mb-4`}>
              Important: Dual Practice Privacy Framework
            </h2>
            <p className={`${styles.text} mb-4`}>
              Dr. Gretchen Kubacky operates under a dual practice model with different privacy protections:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Clinical Psychology Services</h3>
                <p className="text-sm text-red-700">
                  Full HIPAA compliance with maximum privacy protections for licensed psychological services.
                </p>
              </div>
              <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Transpersonal Wellness Services</h3>
                <p className="text-sm text-blue-700">
                  Standard privacy practices for complementary wellness services, coaching, and community programs.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className={`${styles.card} rounded-lg p-6 mb-8`}>
            <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>Table of Contents</h2>
            <ol className={`space-y-2 ${styles.text}`}>
              <li><a href="#information-collection" className={`${styles.accent} hover:underline`}>1. Information We Collect</a></li>
              <li><a href="#hipaa-compliance" className={`${styles.accent} hover:underline`}>2. HIPAA Compliance (Clinical Services)</a></li>
              <li><a href="#wellness-privacy" className={`${styles.accent} hover:underline`}>3. Wellness Services Privacy</a></li>
              <li><a href="#data-usage" className={`${styles.accent} hover:underline`}>4. How We Use Your Information</a></li>
              <li><a href="#data-sharing" className={`${styles.accent} hover:underline`}>5. Information Sharing</a></li>
              <li><a href="#cookies" className={`${styles.accent} hover:underline`}>6. Cookies and Tracking</a></li>
              <li><a href="#security" className={`${styles.accent} hover:underline`}>7. Data Security</a></li>
              <li><a href="#rights" className={`${styles.accent} hover:underline`}>8. Your Privacy Rights</a></li>
              <li><a href="#california-privacy" className={`${styles.accent} hover:underline`}>9. California Privacy Rights (CCPA)</a></li>
              <li><a href="#gdpr-compliance" className={`${styles.accent} hover:underline`}>10. GDPR Compliance (EU Residents)</a></li>
              <li><a href="#minors" className={`${styles.accent} hover:underline`}>11. Minors Privacy</a></li>
              <li><a href="#changes" className={`${styles.accent} hover:underline`}>12. Policy Changes</a></li>
              <li><a href="#contact" className={`${styles.accent} hover:underline`}>13. Contact Information</a></li>
            </ol>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Section 1: Information Collection */}
            <section id="information-collection">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>1. Information We Collect</h2>
              
              <h3 className={`text-xl ${styles.subheading} mb-3`}>Clinical Psychology Services (HIPAA Protected)</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Personal health information (PHI) including medical history, mental health records</li>
                <li>Treatment notes, assessments, and psychological evaluations</li>
                <li>Insurance information and billing records</li>
                <li>Emergency contact information</li>
                <li>Communication records (secure messaging, session recordings if consented)</li>
              </ul>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Wellness Services & Website</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Contact information (name, email, phone number)</li>
                <li>Demographic information voluntarily provided</li>
                <li>Website usage data and analytics</li>
                <li>Newsletter subscription preferences</li>
                <li>Community program participation records</li>
                <li>Payment information for wellness services</li>
                <li>Feedback and testimonials (with explicit consent)</li>
              </ul>
            </section>

            {/* Section 2: HIPAA Compliance */}
            <section id="hipaa-compliance">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>2. HIPAA Compliance (Clinical Services)</h2>
              
              <div className={`${styles.card} rounded-lg p-6 mb-6`}>
                <p className={`${styles.text} mb-4`}>
                  Dr. Gretchen Kubacky is a HIPAA-covered entity for clinical psychology services. 
                  All protected health information (PHI) is handled according to HIPAA Privacy and Security Rules.
                </p>
                
                <h3 className={`text-lg ${styles.subheading} mb-3`}>Your HIPAA Rights Include:</h3>
                <ul className={`space-y-2 ${styles.text} ml-6 list-disc`}>
                  <li>Right to access your health records</li>
                  <li>Right to request amendments to your health information</li>
                  <li>Right to request restrictions on uses and disclosures</li>
                  <li>Right to request alternative communications</li>
                  <li>Right to an accounting of disclosures</li>
                  <li>Right to file a complaint with HHS if you believe your privacy rights have been violated</li>
                </ul>
              </div>

              <p className={`${styles.text} mb-4`}>
                <strong>Notice of Privacy Practices:</strong> A complete Notice of Privacy Practices for clinical services 
                is provided separately and available upon request.
              </p>
            </section>

            {/* Section 3: Wellness Privacy */}
            <section id="wellness-privacy">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>3. Wellness Services Privacy</h2>
              <p className={`${styles.text} mb-4`}>
                Transpersonal wellness services, community healing salons, and educational programs are not clinical 
                services and therefore not subject to HIPAA. However, we maintain strong privacy protections:
              </p>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Information is collected only with your consent</li>
                <li>We do not share personal information without permission</li>
                <li>Participation in group activities requires separate consent for any shared information</li>
                <li>You may request deletion of your information at any time</li>
              </ul>
            </section>

            {/* Section 4: Data Usage */}
            <section id="data-usage">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>4. How We Use Your Information</h2>
              
              <h3 className={`text-xl ${styles.subheading} mb-3`}>Clinical Services</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Providing psychological treatment and care</li>
                <li>Treatment planning and clinical documentation</li>
                <li>Insurance billing and payment processing</li>
                <li>Required reporting (only as mandated by law)</li>
                <li>Coordination with other healthcare providers (with authorization)</li>
              </ul>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Wellness Services & Website</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Delivering requested wellness services and programs</li>
                <li>Sending newsletters and educational content (opt-in only)</li>
                <li>Improving website functionality and user experience</li>
                <li>Analyzing usage patterns to enhance services</li>
                <li>Processing payments and managing registrations</li>
              </ul>
            </section>

            {/* Section 5: Information Sharing */}
            <section id="data-sharing">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>5. Information Sharing</h2>
              
              <div className={`${styles.card} rounded-lg p-6 mb-6`}>
                <h3 className={`text-lg ${styles.subheading} mb-3`}>We Never Sell Your Information</h3>
                <p className={`${styles.text}`}>
                  Neither clinical nor wellness information is ever sold, rented, or traded to third parties.
                </p>
              </div>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Limited Sharing May Occur For:</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li><strong>Legal Requirements:</strong> Court orders, subpoenas, mandatory reporting</li>
                <li><strong>Emergency Situations:</strong> Imminent danger to self or others</li>
                <li><strong>Service Providers:</strong> HIPAA-compliant billing, secure hosting (Business Associate Agreements in place)</li>
                <li><strong>With Your Consent:</strong> Coordination with other providers, testimonials, referrals</li>
              </ul>
            </section>

            {/* Section 6: Cookies */}
            <section id="cookies">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>6. Cookies and Tracking</h2>
              <p className={`${styles.text} mb-4`}>
                Our website uses cookies to enhance user experience and analyze usage. You can control cookie preferences 
                through our consent banner and browser settings.
              </p>
              
              <h3 className={`text-xl ${styles.subheading} mb-3`}>Types of Cookies:</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li><strong>Essential:</strong> Required for website functionality</li>
                <li><strong>Analytics:</strong> Google Analytics (anonymized data)</li>
                <li><strong>Preferences:</strong> Theme selection, language preferences</li>
                <li><strong>Marketing:</strong> Newsletter signup tracking (opt-in only)</li>
              </ul>
            </section>

            {/* Section 7: Security */}
            <section id="security">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>7. Data Security</h2>
              <p className={`${styles.text} mb-4`}>
                We implement comprehensive security measures appropriate to the sensitivity of the information:
              </p>
              
              <h3 className={`text-xl ${styles.subheading} mb-3`}>Clinical Data Security (HIPAA Compliant)</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>End-to-end encryption for all PHI transmission and storage</li>
                <li>Multi-factor authentication for all clinical systems</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Business Associate Agreements with all vendors</li>
                <li>Encrypted backups with secure access controls</li>
              </ul>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>General Security Measures</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>SSL/TLS encryption for all website communications</li>
                <li>Secure payment processing (PCI DSS compliant)</li>
                <li>Regular software updates and security patches</li>
                <li>Access controls and audit logging</li>
                <li>Employee training on privacy and security practices</li>
              </ul>
            </section>

            {/* Section 8: Your Rights */}
            <section id="rights">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>8. Your Privacy Rights</h2>
              <p className={`${styles.text} mb-4`}>You have the following rights regarding your personal information:</p>
              
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li><strong>Access:</strong> Request copies of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request transfer of your data in a common format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restrict Processing:</strong> Limit how we use your information</li>
              </ul>

              <p className={`${styles.text}`}>
                To exercise these rights, contact us using the information in Section 13.
              </p>
            </section>

            {/* Section 9: California Privacy Rights */}
            <section id="california-privacy">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>9. California Privacy Rights (CCPA)</h2>
              <p className={`${styles.text} mb-4`}>
                California residents have additional privacy rights under the California Consumer Privacy Act (CCPA):
              </p>
              
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Right to know what personal information is collected and how it's used</li>
                <li>Right to delete personal information (subject to exceptions)</li>
                <li>Right to opt-out of the sale of personal information (we don't sell information)</li>
                <li>Right to non-discrimination for exercising CCPA rights</li>
              </ul>

              <p className={`${styles.text}`}>
                <strong>Note:</strong> HIPAA-protected clinical information may have different deletion requirements 
                due to professional and legal record-keeping obligations.
              </p>
            </section>

            {/* Section 10: GDPR */}
            <section id="gdpr-compliance">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>10. GDPR Compliance (EU Residents)</h2>
              <p className={`${styles.text} mb-4`}>
                While we primarily serve California residents, we extend GDPR protections to all users:
              </p>
              
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li><strong>Lawful Basis:</strong> Consent, legitimate interest, or legal obligation</li>
                <li><strong>Data Protection Officer:</strong> Available upon request for EU inquiries</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
                <li><strong>Right to Erasure:</strong> "Right to be forgotten" (subject to legal obligations)</li>
                <li><strong>Data Protection Impact Assessment:</strong> Conducted for high-risk processing</li>
              </ul>
            </section>

            {/* Section 11: Minors */}
            <section id="minors">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>11. Minors Privacy</h2>
              <p className={`${styles.text} mb-4`}>
                Special protections apply to information from individuals under 18:
              </p>
              
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Parental consent required for individuals under 13</li>
                <li>Clinical services for minors follow California psychology licensing requirements</li>
                <li>Enhanced privacy protections for all minor information</li>
                <li>Limited data collection from minor participants in wellness programs</li>
              </ul>
            </section>

            {/* Section 12: Changes */}
            <section id="changes">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>12. Policy Changes</h2>
              <p className={`${styles.text} mb-4`}>
                We may update this Privacy Policy periodically. Material changes will be communicated through:
              </p>
              
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Email notification to registered users</li>
                <li>Prominent notice on our website</li>
                <li>Updated "Last Modified" date at the top of this policy</li>
              </ul>

              <p className={`${styles.text}`}>
                Continued use of our services after notification constitutes acceptance of changes, 
                except for clinical services which may require separate consent for material changes.
              </p>
            </section>

            {/* Section 13: Contact */}
            <section id="contact">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>13. Contact Information</h2>
              
              <div className={`${styles.card} rounded-lg p-6`}>
                <h3 className={`text-lg ${styles.subheading} mb-3`}>Privacy Questions & Requests</h3>
                <p className={`${styles.text} mb-4`}>
                  <strong>Dr. Gretchen Kubacky, Psy.D.</strong><br />
                  Privacy Officer<br />
                  Email: privacy@gretchenkubacky.com<br />
                  Phone: (555) 123-4567<br />
                  Response Time: 30 days for general requests, 60 days for complex requests
                </p>

                <h3 className={`text-lg ${styles.subheading} mb-3`}>HIPAA Complaints</h3>
                <p className={`${styles.text}`}>
                  You may also file complaints with:<br />
                  <strong>U.S. Department of Health and Human Services</strong><br />
                  Office for Civil Rights<br />
                  Website: www.hhs.gov/hipaa/filing-a-complaint/
                </p>
              </div>
            </section>

          </div>

          {/* Footer Notice */}
          <div className={`mt-12 p-6 ${styles.card} rounded-lg border-2 ${styles.border}`}>
            <p className={`text-sm ${styles.text} text-center`}>
              This Privacy Policy was last updated on {lastUpdated}. This policy applies to both 
              Dr. Kubacky's clinical psychology practice (HIPAA-covered) and transpersonal wellness services (non-clinical).
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}