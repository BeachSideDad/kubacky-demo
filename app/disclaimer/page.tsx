'use client';

import { useTheme } from '@/app/contexts/ThemeContext';

export default function ProfessionalDisclaimerPage() {
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
          border: 'border-mystical-neutral-200',
          warning: 'bg-mystical-secondary-100 border-mystical-secondary-300 text-mystical-secondary-900'
        };
      case 'calming':
        return {
          bg: 'bg-calming-neutral-50',
          text: 'text-calming-neutral-900',
          heading: 'text-calming-primary-900',
          subheading: 'text-calming-primary-700',
          accent: 'text-calming-secondary-600',
          card: 'bg-calming-neutral-100',
          border: 'border-calming-neutral-200',
          warning: 'bg-calming-secondary-100 border-calming-secondary-300 text-calming-secondary-900'
        };
      case 'earthy':
        return {
          bg: 'bg-earthy-neutral-50',
          text: 'text-earthy-neutral-900',
          heading: 'text-earthy-primary-900',
          subheading: 'text-earthy-primary-700',
          accent: 'text-earthy-secondary-600',
          card: 'bg-earthy-neutral-100',
          border: 'border-earthy-neutral-200',
          warning: 'bg-earthy-secondary-100 border-earthy-secondary-300 text-earthy-secondary-900'
        };
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-900',
          heading: 'text-gray-900',
          subheading: 'text-gray-700',
          accent: 'text-blue-600',
          card: 'bg-white',
          border: 'border-gray-200',
          warning: 'bg-yellow-100 border-yellow-300 text-yellow-900'
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
              Professional Disclaimer
            </h1>
            <p className={`text-lg ${styles.subheading} mb-4`}>
              Dr. Gretchen Kubacky, Psy.D.
            </p>
            <p className={`text-sm ${styles.accent} mb-2`}>
              California Licensed Psychologist - License #PSY12345
            </p>
            <p className={`text-sm ${styles.accent}`}>
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Critical Distinction Notice */}
          <div className={`bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8`}>
            <h2 className={`text-xl font-semibold text-red-800 mb-4`}>
              🚨 CRITICAL: Understand Your Service Type
            </h2>
            <p className={`text-red-700 mb-4`}>
              Dr. Kubacky operates two distinct practices with different professional standards, regulations, and protections. 
              It is essential that you understand which type of service you are receiving:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border-2 border-red-300 bg-red-100 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">🏥 Clinical Psychology Services</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Licensed professional services</li>
                  <li>• California Board of Psychology regulated</li>
                  <li>• HIPAA protected</li>
                  <li>• Professional liability insurance</li>
                  <li>• Diagnosis and treatment of mental health conditions</li>
                </ul>
              </div>
              
              <div className="p-4 border-2 border-blue-300 bg-blue-100 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🌟 Transpersonal Wellness Services</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Non-clinical complementary practices</li>
                  <li>• Not regulated by licensing boards</li>
                  <li>• Standard privacy practices</li>
                  <li>• No medical/psychological diagnosis</li>
                  <li>• Spiritual guidance and holistic wellness</li>
                </ul>
              </div>
            </div>

            <p className={`text-red-800 font-semibold mt-4`}>
              If you are uncertain which service you need, please contact Dr. Kubacky directly before proceeding.
            </p>
          </div>

          {/* Licensing Information */}
          <section className="mb-8">
            <h2 className={`text-2xl font-serif ${styles.heading} mb-6`}>Professional Licensing & Credentials</h2>
            
            <div className={`${styles.card} rounded-lg p-6 mb-6`}>
              <h3 className={`text-xl ${styles.subheading} mb-4`}>California Psychology License</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className={`space-y-2 ${styles.text}`}>
                    <li><strong>License Number:</strong> PSY12345</li>
                    <li><strong>License Status:</strong> Active and in good standing</li>
                    <li><strong>Issue Date:</strong> [License Issue Date]</li>
                    <li><strong>Renewal Date:</strong> [Next Renewal Date]</li>
                    <li><strong>Jurisdiction:</strong> State of California</li>
                  </ul>
                </div>
                <div>
                  <p className={`${styles.text} text-sm`}>
                    License verification available through the California Board of Psychology:<br />
                    <a href="https://www.psychology.ca.gov" className={`${styles.accent} hover:underline`}>
                      www.psychology.ca.gov
                    </a><br />
                    Phone: (916) 574-7720
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.card} rounded-lg p-6 mb-6`}>
              <h3 className={`text-xl ${styles.subheading} mb-4`}>Education & Training</h3>
              <ul className={`space-y-2 ${styles.text}`}>
                <li><strong>Doctorate:</strong> Doctor of Psychology (Psy.D.) in Clinical Psychology</li>
                <li><strong>Specialized Training:</strong> Transpersonal Psychology, Trauma-Informed Care</li>
                <li><strong>Additional Certifications:</strong> Reiki Master, Energy Healing Practitioner</li>
                <li><strong>Continuing Education:</strong> Ongoing professional development as required by California law</li>
              </ul>
            </div>

            <div className={`${styles.card} rounded-lg p-6`}>
              <h3 className={`text-xl ${styles.subheading} mb-4`}>Professional Memberships & Insurance</h3>
              <ul className={`space-y-2 ${styles.text}`}>
                <li><strong>Professional Liability Insurance:</strong> Maintained through [Insurance Provider]</li>
                <li><strong>Coverage Limits:</strong> $X,XXX,XXX per incident / $X,XXX,XXX aggregate</li>
                <li><strong>Professional Associations:</strong> California Psychological Association, American Psychological Association</li>
              </ul>
            </div>
          </section>

          {/* Clinical Services Disclaimer */}
          <section className="mb-8">
            <h2 className={`text-2xl font-serif ${styles.heading} mb-6`}>Clinical Psychology Services Disclaimer</h2>
            
            <div className={`${styles.card} rounded-lg p-6 mb-6`}>
              <h3 className={`text-lg ${styles.subheading} mb-3`}>Scope of Clinical Practice</h3>
              <p className={`${styles.text} mb-4`}>
                Clinical psychology services are provided under California state licensure and include:
              </p>
              <ul className={`space-y-2 ${styles.text} ml-6 list-disc`}>
                <li>Individual psychotherapy and counseling</li>
                <li>Psychological assessment and evaluation</li>
                <li>Treatment planning and case management</li>
                <li>Crisis intervention during business hours</li>
                <li>Professional consultations</li>
              </ul>
            </div>

            <div className={`${styles.warning} border-2 rounded-lg p-6 mb-6`}>
              <h3 className={`text-lg font-semibold mb-3`}>⚠️ Clinical Service Limitations</h3>
              <ul className={`space-y-2 ml-6 list-disc`}>
                <li><strong>No 24/7 Availability:</strong> Emergency services not available outside business hours</li>
                <li><strong>Telehealth Restrictions:</strong> Services limited to California residents per state regulations</li>
                <li><strong>Scope Boundaries:</strong> Referrals provided when issues exceed training or competence</li>
                <li><strong>No Guarantees:</strong> Treatment outcomes cannot be guaranteed</li>
                <li><strong>Mandatory Reporting:</strong> Required disclosures for safety and legal compliance</li>
              </ul>
            </div>

            <div className={`${styles.card} rounded-lg p-6`}>
              <h3 className={`text-lg ${styles.subheading} mb-3`}>Emergency Procedures for Clinical Clients</h3>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Immediate Crisis</h4>
                  <p className="text-red-700">Call 911 or go to nearest emergency room</p>
                </div>
                
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Suicide & Crisis Support</h4>
                  <p className="text-blue-700">988 Suicide & Crisis Lifeline (24/7)</p>
                </div>
                
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Crisis Text Support</h4>
                  <p className="text-green-700">Text HOME to 741741</p>
                </div>
              </div>
            </div>
          </section>

          {/* Wellness Services Disclaimer */}
          <section className="mb-8">
            <h2 className={`text-2xl font-serif ${styles.heading} mb-6`}>Transpersonal Wellness Services Disclaimer</h2>
            
            <div className={`bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6`}>
              <h3 className={`text-lg font-semibold text-blue-800 mb-3`}>⚠️ NOT MEDICAL OR PSYCHOLOGICAL TREATMENT</h3>
              <p className={`text-blue-700 mb-4`}>
                Transpersonal wellness services are complementary practices designed to support personal growth, 
                spiritual development, and overall well-being. These services are:
              </p>
              <ul className={`space-y-2 text-blue-700 ml-6 list-disc`}>
                <li><strong>NOT therapy or counseling</strong></li>
                <li><strong>NOT medical treatment or advice</strong></li>
                <li><strong>NOT regulated by professional licensing boards</strong></li>
                <li><strong>NOT covered by professional liability insurance for clinical services</strong></li>
                <li><strong>NOT intended to diagnose, treat, or cure any medical or psychological condition</strong></li>
              </ul>
            </div>

            <div className={`${styles.card} rounded-lg p-6 mb-6`}>
              <h3 className={`text-lg ${styles.subheading} mb-3`}>Wellness Services Include</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className={`space-y-2 ${styles.text} ml-6 list-disc`}>
                  <li>Energy healing and Reiki</li>
                  <li>Spiritual guidance and coaching</li>
                  <li>Meditation instruction</li>
                  <li>Community healing salons</li>
                  <li>Holistic wellness consultations</li>
                </ul>
                <ul className={`space-y-2 ${styles.text} ml-6 list-disc`}>
                  <li>Educational workshops</li>
                  <li>Group spiritual practices</li>
                  <li>Personal development coaching</li>
                  <li>Intuitive guidance</li>
                  <li>Wellness program coordination</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.warning} border-2 rounded-lg p-6 mb-6`}>
              <h3 className={`text-lg font-semibold mb-3`}>⚠️ Wellness Service Limitations & Risks</h3>
              <ul className={`space-y-2 ml-6 list-disc`}>
                <li><strong>No Scientific Validation:</strong> Effectiveness of energy healing and spiritual practices is not scientifically proven</li>
                <li><strong>Individual Results Vary:</strong> No guarantee of specific outcomes or benefits</li>
                <li><strong>Not Regulated:</strong> Services not overseen by professional licensing boards</li>
                <li><strong>Personal Responsibility:</strong> You remain responsible for your medical and mental health care</li>
                <li><strong>Complementary Only:</strong> Should supplement, not replace, professional healthcare</li>
              </ul>
            </div>

            <div className={`${styles.card} rounded-lg p-6`}>
              <h3 className={`text-lg ${styles.subheading} mb-3`}>Participant Responsibilities for Wellness Services</h3>
              <ul className={`space-y-2 ${styles.text} ml-6 list-disc`}>
                <li>Maintain appropriate medical and mental health care</li>
                <li>Consult healthcare providers before starting any new wellness practices</li>
                <li>Disclose relevant health conditions and medications</li>
                <li>Understand the experimental and unproven nature of some practices</li>
                <li>Take responsibility for your own safety and well-being</li>
                <li>Discontinue services if you experience adverse effects</li>
              </ul>
            </div>
          </section>

          {/* Website & Information Disclaimer */}
          <section className="mb-8">
            <h2 className={`text-2xl font-serif ${styles.heading} mb-6`}>Website & Information Disclaimer</h2>
            
            <div className={`${styles.card} rounded-lg p-6 mb-6`}>
              <h3 className={`text-lg ${styles.subheading} mb-3`}>Educational Content Only</h3>
              <p className={`${styles.text} mb-4`}>
                Information provided on this website, in newsletters, blog posts, and other materials is for 
                educational and informational purposes only. This information:
              </p>
              <ul className={`space-y-2 ${styles.text} ml-6 list-disc`}>
                <li>Does not constitute professional advice or create therapeutic relationships</li>
                <li>Should not be used as a substitute for professional consultation</li>
                <li>May not apply to your specific situation or circumstances</li>
                <li>Is subject to change without notice</li>
                <li>Is provided "as is" without warranties of any kind</li>
              </ul>
            </div>

            <div className={`${styles.card} rounded-lg p-6 mb-6`}>
              <h3 className={`text-lg ${styles.subheading} mb-3`}>No Doctor-Patient Relationship</h3>
              <p className={`${styles.text}`}>
                Use of this website, reading content, or participating in online programs does not create a 
                doctor-patient or therapist-client relationship. Such relationships are established only through 
                formal intake processes and signed agreements for specific clinical or wellness services.
              </p>
            </div>

            <div className={`${styles.card} rounded-lg p-6`}>
              <h3 className={`text-lg ${styles.subheading} mb-3`}>Third-Party Links & Resources</h3>
              <p className={`${styles.text}`}>
                Links to third-party websites, resources, or services are provided for convenience only. 
                Dr. Kubacky does not endorse, control, or take responsibility for the content, products, 
                or services of linked sites.
              </p>
            </div>
          </section>

          {/* Legal & Regulatory Compliance */}
          <section className="mb-8">
            <h2 className={`text-2xl font-serif ${styles.heading} mb-6`}>Legal & Regulatory Compliance</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`${styles.card} rounded-lg p-6`}>
                <h3 className={`text-lg ${styles.subheading} mb-3`}>California Regulatory Compliance</h3>
                <ul className={`space-y-2 ${styles.text} text-sm ml-4 list-disc`}>
                  <li>Licensed under California Business & Professions Code</li>
                  <li>Adheres to California Board of Psychology regulations</li>
                  <li>Follows California psychology ethics codes</li>
                  <li>Maintains required continuing education</li>
                </ul>
              </div>
              
              <div className={`${styles.card} rounded-lg p-6`}>
                <h3 className={`text-lg ${styles.subheading} mb-3`}>Federal Compliance</h3>
                <ul className={`space-y-2 ${styles.text} text-sm ml-4 list-disc`}>
                  <li>HIPAA Privacy and Security Rules (clinical services)</li>
                  <li>Americans with Disabilities Act accommodation</li>
                  <li>Anti-discrimination laws compliance</li>
                  <li>Tax and business licensing requirements</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.card} rounded-lg p-6 mt-6`}>
              <h3 className={`text-lg ${styles.subheading} mb-3`}>Professional Ethics & Standards</h3>
              <p className={`${styles.text} mb-4`}>
                Clinical services adhere to:
              </p>
              <ul className={`space-y-2 ${styles.text} ml-6 list-disc`}>
                <li>American Psychological Association (APA) Ethical Principles of Psychologists</li>
                <li>California Association of Marriage and Family Therapists (CAMFT) ethics</li>
                <li>California psychological practice standards</li>
                <li>Informed consent and client welfare principles</li>
              </ul>
            </div>
          </section>

          {/* Complaints & Grievances */}
          <section className="mb-8">
            <h2 className={`text-2xl font-serif ${styles.heading} mb-6`}>Complaints & Grievance Procedures</h2>
            
            <div className={`${styles.card} rounded-lg p-6 mb-6`}>
              <h3 className={`text-lg ${styles.subheading} mb-3`}>Clinical Services Complaints</h3>
              <p className={`${styles.text} mb-4`}>
                If you have concerns about clinical psychology services, you may:
              </p>
              <ol className={`space-y-2 ${styles.text} ml-6 list-decimal`}>
                <li>Discuss concerns directly with Dr. Kubacky</li>
                <li>Request mediation through a neutral third party</li>
                <li>File a complaint with the California Board of Psychology</li>
                <li>Contact your insurance company (if applicable)</li>
                <li>Consult with an attorney regarding potential legal issues</li>
              </ol>
            </div>

            <div className={`${styles.card} rounded-lg p-6`}>
              <h3 className={`text-lg ${styles.subheading} mb-3`}>California Board of Psychology Contact</h3>
              <div className="space-y-2">
                <p className={`${styles.text}`}>
                  <strong>California Board of Psychology</strong><br />
                  1625 North Market Boulevard, Suite N-215<br />
                  Sacramento, CA 95834
                </p>
                <p className={`${styles.text}`}>
                  Phone: (916) 574-7720<br />
                  Website: 
                  <a href="https://www.psychology.ca.gov" className={`${styles.accent} hover:underline ml-1`}>
                    www.psychology.ca.gov
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className={`text-2xl font-serif ${styles.heading} mb-6`}>Limitation of Liability</h2>
            
            <div className={`${styles.warning} border-2 rounded-lg p-6`}>
              <h3 className={`text-lg font-semibold mb-3`}>Important Legal Disclaimers</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`font-semibold mb-2`}>Clinical Services</h4>
                  <ul className={`space-y-1 text-sm ml-4 list-disc`}>
                    <li>Covered by professional liability insurance</li>
                    <li>Subject to California professional standards</li>
                    <li>No guarantee of specific treatment outcomes</li>
                    <li>Limited to scope of psychological practice</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className={`font-semibold mb-2`}>Wellness Services</h4>
                  <ul className={`space-y-1 text-sm ml-4 list-disc`}>
                    <li>Provided "as is" without warranties</li>
                    <li>Participant assumes risk of participation</li>
                    <li>No liability for indirect or consequential damages</li>
                    <li>Total liability limited to amount paid</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className={`text-2xl font-serif ${styles.heading} mb-6`}>Contact Information for Disclaimer Questions</h2>
            
            <div className={`${styles.card} rounded-lg p-6`}>
              <p className={`${styles.text} mb-4`}>
                <strong>Dr. Gretchen Kubacky, Psy.D.</strong><br />
                Licensed Psychologist (PSY12345)<br />
                Email: disclaimer@gretchenkubacky.com<br />
                Phone: (555) 123-4567<br />
                Business Hours: Monday-Friday, 9:00 AM - 5:00 PM PST
              </p>

              <p className={`${styles.text} text-sm`}>
                For emergency situations, please refer to emergency resources listed in the Clinical Services section above.
              </p>
            </div>
          </section>

          {/* Acknowledgment Footer */}
          <div className={`mt-12 p-6 ${styles.card} rounded-lg border-2 ${styles.border}`}>
            <h3 className={`text-lg font-semibold ${styles.heading} mb-3 text-center`}>
              Professional Disclaimer Acknowledgment
            </h3>
            <p className={`text-sm ${styles.text} text-center mb-4`}>
              By using this website or receiving services from Dr. Gretchen Kubacky, you acknowledge that you have 
              read and understood this Professional Disclaimer. You understand the distinction between licensed clinical 
              psychology services and non-clinical transpersonal wellness services.
            </p>
            <p className={`text-sm ${styles.text} text-center`}>
              <strong>Last Updated:</strong> {lastUpdated} | 
              <strong> License #:</strong> PSY12345 | 
              <strong> Jurisdiction:</strong> California
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}