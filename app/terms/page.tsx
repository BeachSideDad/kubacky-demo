'use client';

import { useTheme } from '@/app/contexts/ThemeContext';

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className={`text-lg ${styles.subheading} mb-4`}>
              Dr. Gretchen Kubacky, Psy.D. - Dual Practice Model
            </p>
            <p className={`text-sm ${styles.accent}`}>
              Last Updated: {lastUpdated}
            </p>
          </div>

          {/* Critical Notice */}
          <div className={`${styles.warning} border-2 rounded-lg p-6 mb-8`}>
            <h2 className={`text-xl font-semibold mb-4`}>
              🚨 CRITICAL: Two Separate Service Models
            </h2>
            <p className={`mb-4`}>
              Dr. Gretchen Kubacky operates under a dual practice model with different terms, regulations, and protections:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">Clinical Psychology Services</h3>
                <p className="text-sm text-red-700">
                  <strong>Licensed Services:</strong> Therapy, assessments, clinical treatment under California Psychology Board regulation (PSY12345). Full professional liability coverage and HIPAA compliance.
                </p>
              </div>
              <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Transpersonal Wellness Services</h3>
                <p className="text-sm text-blue-700">
                  <strong>Non-Clinical Services:</strong> Coaching, energy work, community programs, spiritual guidance. Not therapy or medical treatment. No diagnosis or clinical interventions.
                </p>
              </div>
            </div>
            <p className={`mt-4 font-semibold`}>
              YOU MUST UNDERSTAND which service you are receiving before proceeding.
            </p>
          </div>

          {/* Table of Contents */}
          <div className={`${styles.card} rounded-lg p-6 mb-8`}>
            <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>Table of Contents</h2>
            <ol className={`space-y-2 ${styles.text}`}>
              <li><a href="#acceptance" className={`${styles.accent} hover:underline`}>1. Acceptance of Terms</a></li>
              <li><a href="#clinical-terms" className={`${styles.accent} hover:underline`}>2. Clinical Psychology Services Terms</a></li>
              <li><a href="#wellness-terms" className={`${styles.accent} hover:underline`}>3. Transpersonal Wellness Services Terms</a></li>
              <li><a href="#website-terms" className={`${styles.accent} hover:underline`}>4. Website and Content Terms</a></li>
              <li><a href="#payment-terms" className={`${styles.accent} hover:underline`}>5. Payment and Billing</a></li>
              <li><a href="#cancellation" className={`${styles.accent} hover:underline`}>6. Cancellation and Refund Policy</a></li>
              <li><a href="#confidentiality" className={`${styles.accent} hover:underline`}>7. Confidentiality and Privacy</a></li>
              <li><a href="#limitations" className={`${styles.accent} hover:underline`}>8. Limitations and Disclaimers</a></li>
              <li><a href="#emergency" className={`${styles.accent} hover:underline`}>9. Emergency Procedures</a></li>
              <li><a href="#intellectual-property" className={`${styles.accent} hover:underline`}>10. Intellectual Property</a></li>
              <li><a href="#prohibited-conduct" className={`${styles.accent} hover:underline`}>11. Prohibited Conduct</a></li>
              <li><a href="#liability" className={`${styles.accent} hover:underline`}>12. Limitation of Liability</a></li>
              <li><a href="#governing-law" className={`${styles.accent} hover:underline`}>13. Governing Law and Disputes</a></li>
              <li><a href="#modifications" className={`${styles.accent} hover:underline`}>14. Modifications and Termination</a></li>
              <li><a href="#contact" className={`${styles.accent} hover:underline`}>15. Contact Information</a></li>
            </ol>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Section 1: Acceptance */}
            <section id="acceptance">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>1. Acceptance of Terms</h2>
              <p className={`${styles.text} mb-4`}>
                By accessing this website, scheduling appointments, or receiving services from Dr. Gretchen Kubacky, 
                you acknowledge that you have read, understood, and agree to be bound by these Terms of Service 
                and our Privacy Policy.
              </p>
              
              <div className={`${styles.card} rounded-lg p-6 mb-6`}>
                <h3 className={`text-lg ${styles.subheading} mb-3`}>Age and Capacity Requirements</h3>
                <ul className={`space-y-2 ${styles.text} ml-6 list-disc`}>
                  <li>You must be 18 years or older to enter into these terms independently</li>
                  <li>Minors require parental/guardian consent and involvement</li>
                  <li>You represent that you have the legal capacity to enter into these agreements</li>
                  <li>For clinical services, additional informed consent procedures apply</li>
                </ul>
              </div>
            </section>

            {/* Section 2: Clinical Terms */}
            <section id="clinical-terms">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>2. Clinical Psychology Services Terms</h2>
              
              <div className={`${styles.card} rounded-lg p-6 mb-6`}>
                <h3 className={`text-lg ${styles.subheading} mb-3`}>Licensed Professional Services</h3>
                <p className={`${styles.text} mb-4`}>
                  Dr. Gretchen Kubacky is a licensed psychologist in California (PSY12345). Clinical services include:
                </p>
                <ul className={`space-y-2 ${styles.text} mb-4 ml-6 list-disc`}>
                  <li>Individual psychotherapy and counseling</li>
                  <li>Psychological assessments and evaluations</li>
                  <li>Treatment planning and case management</li>
                  <li>Crisis intervention (during business hours)</li>
                  <li>Professional consultations with other providers</li>
                </ul>
              </div>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Clinical Service Agreement Requirements</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li><strong>Informed Consent:</strong> Separate clinical informed consent required before treatment begins</li>
                <li><strong>Treatment Goals:</strong> Collaborative development of treatment objectives</li>
                <li><strong>Regular Attendance:</strong> Consistent participation required for effective treatment</li>
                <li><strong>Between-Session Contact:</strong> Limited to crisis situations and appointment scheduling</li>
                <li><strong>Medical Clearance:</strong> May be required for certain conditions or medications</li>
              </ul>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Clinical Boundaries and Limitations</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Services provided within scope of California psychology license</li>
                <li>No dual relationships (business, social, romantic) permitted</li>
                <li>Mandatory reporting requirements apply (abuse, neglect, danger to self/others)</li>
                <li>Treatment records maintained according to California and HIPAA requirements</li>
                <li>Referrals provided when services exceed scope of practice</li>
              </ul>
            </section>

            {/* Section 3: Wellness Terms */}
            <section id="wellness-terms">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>3. Transpersonal Wellness Services Terms</h2>
              
              <div className={`bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6`}>
                <h3 className={`text-lg font-semibold text-blue-800 mb-3`}>⚠️ NOT THERAPY OR MEDICAL TREATMENT</h3>
                <p className={`text-blue-700 mb-4`}>
                  Transpersonal wellness services are complementary practices that support personal growth and spiritual development. 
                  They are NOT psychological treatment, therapy, or medical care.
                </p>
              </div>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Wellness Services Include</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Energy healing and Reiki sessions</li>
                <li>Spiritual guidance and transpersonal coaching</li>
                <li>Community healing salons and group programs</li>
                <li>Meditation instruction and mindfulness practices</li>
                <li>Educational workshops and seminars</li>
                <li>Holistic wellness consultations</li>
              </ul>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Wellness Service Limitations</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li><strong>No Diagnosis:</strong> Cannot diagnose mental health conditions</li>
                <li><strong>No Clinical Treatment:</strong> Does not treat psychological disorders</li>
                <li><strong>No Medical Advice:</strong> Cannot provide medical recommendations</li>
                <li><strong>Complementary Only:</strong> Designed to supplement, not replace, professional healthcare</li>
                <li><strong>Personal Responsibility:</strong> You remain responsible for your medical and mental health care</li>
              </ul>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Wellness Participant Responsibilities</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Maintain appropriate medical and mental health care</li>
                <li>Disclose any relevant health conditions or medications</li>
                <li>Understand the non-clinical nature of services</li>
                <li>Participate voluntarily and at your own risk</li>
                <li>Respect community guidelines in group settings</li>
              </ul>
            </section>

            {/* Section 4: Website Terms */}
            <section id="website-terms">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>4. Website and Content Terms</h2>
              
              <h3 className={`text-xl ${styles.subheading} mb-3`}>Acceptable Use</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Use website only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Do not attempt to hack, disrupt, or damage the website</li>
                <li>Maintain confidentiality of any login credentials</li>
                <li>Report security vulnerabilities responsibly</li>
              </ul>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Content and Information</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Website content is for informational and educational purposes only</li>
                <li>Does not constitute professional advice or create therapeutic relationships</li>
                <li>Information should not replace professional consultation</li>
                <li>Content may be updated without notice</li>
                <li>Third-party links are provided for convenience only</li>
              </ul>
            </section>

            {/* Section 5: Payment Terms */}
            <section id="payment-terms">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>5. Payment and Billing</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className={`${styles.card} rounded-lg p-6`}>
                  <h3 className={`text-lg ${styles.subheading} mb-3`}>Clinical Services Payment</h3>
                  <ul className={`space-y-2 ${styles.text} text-sm ml-4 list-disc`}>
                    <li>Insurance billing available for covered services</li>
                    <li>Payment due at time of service unless pre-arranged</li>
                    <li>Co-pays collected at each session</li>
                    <li>Deductibles and co-insurance as required by insurance</li>
                    <li>Self-pay rates available upon request</li>
                  </ul>
                </div>
                
                <div className={`${styles.card} rounded-lg p-6`}>
                  <h3 className={`text-lg ${styles.subheading} mb-3`}>Wellness Services Payment</h3>
                  <ul className={`space-y-2 ${styles.text} text-sm ml-4 list-disc`}>
                    <li>Payment required in advance</li>
                    <li>Sliding scale rates available based on need</li>
                    <li>Package discounts for multiple sessions</li>
                    <li>Community program scholarships available</li>
                    <li>No insurance billing (non-clinical services)</li>
                  </ul>
                </div>
              </div>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Payment Processing</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Secure payment processing through PCI DSS compliant systems</li>
                <li>Credit cards, debit cards, and HSA/FSA cards accepted (where applicable)</li>
                <li>Payment plans available for extended services (pre-approval required)</li>
                <li>Late fees may apply to overdue accounts (clinical services only)</li>
                <li>Collections procedures follow California professional standards</li>
              </ul>
            </section>

            {/* Section 6: Cancellation */}
            <section id="cancellation">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>6. Cancellation and Refund Policy</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className={`${styles.card} rounded-lg p-6`}>
                  <h3 className={`text-lg ${styles.subheading} mb-3`}>Clinical Appointments</h3>
                  <ul className={`space-y-2 ${styles.text} text-sm ml-4 list-disc`}>
                    <li><strong>24-Hour Notice:</strong> Required for cancellations</li>
                    <li><strong>Late Cancellation Fee:</strong> Full session fee for &lt;24 hours notice</li>
                    <li><strong>No-Show Fee:</strong> Full session fee charged</li>
                    <li><strong>Emergency Exceptions:</strong> Medical emergencies considered case-by-case</li>
                    <li><strong>Insurance:</strong> Late fees not billable to insurance</li>
                  </ul>
                </div>
                
                <div className={`${styles.card} rounded-lg p-6`}>
                  <h3 className={`text-lg ${styles.subheading} mb-3`}>Wellness Services</h3>
                  <ul className={`space-y-2 ${styles.text} text-sm ml-4 list-disc`}>
                    <li><strong>48-Hour Notice:</strong> Required for individual sessions</li>
                    <li><strong>7-Day Notice:</strong> Required for workshop cancellations</li>
                    <li><strong>Refund Policy:</strong> Full refund with proper notice</li>
                    <li><strong>Group Programs:</strong> 50% refund up to 7 days before start</li>
                    <li><strong>Transfer Option:</strong> Sessions may be transferred to future dates</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7: Confidentiality */}
            <section id="confidentiality">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>7. Confidentiality and Privacy</h2>
              
              <h3 className={`text-xl ${styles.subheading} mb-3`}>Clinical Services Confidentiality</h3>
              <div className={`${styles.card} rounded-lg p-6 mb-6`}>
                <p className={`${styles.text} mb-4`}>
                  Clinical services are protected by psychotherapist-patient privilege and HIPAA regulations. 
                  Information may only be disclosed:
                </p>
                <ul className={`space-y-2 ${styles.text} ml-6 list-disc`}>
                  <li>With your written authorization</li>
                  <li>When required by law (mandated reporting, court orders)</li>
                  <li>To prevent imminent harm to self or others</li>
                  <li>For insurance billing and treatment coordination (with authorization)</li>
                </ul>
              </div>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Wellness Services Privacy</h3>
              <p className={`${styles.text} mb-4`}>
                Wellness services maintain confidentiality as a professional courtesy but are not protected by 
                psychotherapist-patient privilege. Group activities may involve shared experiences with other participants.
              </p>
            </section>

            {/* Section 8: Limitations */}
            <section id="limitations">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>8. Limitations and Disclaimers</h2>
              
              <div className={`bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-6`}>
                <h3 className={`text-lg font-semibold text-yellow-800 mb-3`}>⚠️ IMPORTANT DISCLAIMERS</h3>
                <ul className={`space-y-2 text-yellow-700 ml-4 list-disc`}>
                  <li><strong>No Guarantee of Results:</strong> Neither clinical nor wellness services guarantee specific outcomes</li>
                  <li><strong>Professional Judgment:</strong> Treatment recommendations based on clinical training and experience</li>
                  <li><strong>Scope Limitations:</strong> Services limited to practitioner's areas of competence</li>
                  <li><strong>Emergency Limitations:</strong> Not available for 24/7 crisis intervention</li>
                </ul>
              </div>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Service-Specific Limitations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`${styles.card} rounded-lg p-6`}>
                  <h4 className={`font-semibold ${styles.heading} mb-3`}>Clinical Services</h4>
                  <ul className={`space-y-2 ${styles.text} text-sm ml-4 list-disc`}>
                    <li>Limited to California residents (telehealth regulations)</li>
                    <li>Not appropriate for severe psychiatric emergencies</li>
                    <li>May require coordination with medical providers</li>
                    <li>Effectiveness depends on client participation</li>
                  </ul>
                </div>
                
                <div className={`${styles.card} rounded-lg p-6`}>
                  <h4 className={`font-semibold ${styles.heading} mb-3`}>Wellness Services</h4>
                  <ul className={`space-y-2 ${styles.text} text-sm ml-4 list-disc`}>
                    <li>Not regulated by professional licensing boards</li>
                    <li>Results vary significantly among individuals</li>
                    <li>Should not replace medical or mental health treatment</li>
                    <li>Effectiveness not scientifically validated</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 9: Emergency */}
            <section id="emergency">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>9. Emergency Procedures</h2>
              
              <div className={`bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-6`}>
                <h3 className={`text-lg font-semibold text-red-800 mb-3`}>🚨 EMERGENCY CONTACTS</h3>
                <div className="space-y-2 text-red-700">
                  <p><strong>Immediate Crisis:</strong> Call 911 or go to nearest emergency room</p>
                  <p><strong>Suicide & Crisis Lifeline:</strong> 988 (24/7 support)</p>
                  <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
                  <p><strong>California Mental Health Crisis Line:</strong> 1-800-854-7771</p>
                </div>
              </div>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Emergency Response Limitations</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Dr. Kubacky is not available for 24/7 emergency response</li>
                <li>Email and voicemail are not monitored continuously</li>
                <li>For urgent needs between sessions, use crisis resources above</li>
                <li>Clinical clients will receive emergency procedures information separately</li>
                <li>Wellness service participants should maintain their own crisis support systems</li>
              </ul>
            </section>

            {/* Section 10: Intellectual Property */}
            <section id="intellectual-property">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>10. Intellectual Property</h2>
              
              <h3 className={`text-xl ${styles.subheading} mb-3`}>Content Ownership</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>All website content, materials, and resources are owned by Dr. Kubacky</li>
                <li>Protected by copyright, trademark, and other intellectual property laws</li>
                <li>May not be reproduced, distributed, or modified without written permission</li>
                <li>Educational and personal use permitted with proper attribution</li>
              </ul>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>User-Generated Content</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Testimonials and feedback become property of Dr. Kubacky when submitted</li>
                <li>May be used for marketing purposes with client consent</li>
                <li>Clients retain ownership of their personal therapeutic content</li>
                <li>Workshop contributions may be used for educational purposes</li>
              </ul>
            </section>

            {/* Section 11: Prohibited Conduct */}
            <section id="prohibited-conduct">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>11. Prohibited Conduct</h2>
              
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li><strong>Harassment or Discrimination:</strong> Any form of harassment, discrimination, or hate speech</li>
                <li><strong>Disruptive Behavior:</strong> Actions that interfere with services or other clients</li>
                <li><strong>Illegal Activities:</strong> Using services for any illegal purposes</li>
                <li><strong>Misrepresentation:</strong> Providing false information or impersonating others</li>
                <li><strong>Boundary Violations:</strong> Inappropriate contact or relationship attempts</li>
                <li><strong>Technology Misuse:</strong> Hacking, unauthorized access, or system abuse</li>
                <li><strong>Recording:</strong> Recording sessions without explicit written consent</li>
              </ul>

              <p className={`${styles.text} font-semibold`}>
                Violation of these terms may result in immediate termination of services and potential legal action.
              </p>
            </section>

            {/* Section 12: Liability */}
            <section id="liability">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>12. Limitation of Liability</h2>
              
              <div className={`${styles.card} rounded-lg p-6 mb-6`}>
                <p className={`${styles.text} mb-4`}>
                  To the fullest extent permitted by California law:
                </p>
                <ul className={`space-y-2 ${styles.text} ml-6 list-disc`}>
                  <li>Clinical services are covered by professional liability insurance</li>
                  <li>Wellness services are provided "as is" without warranties</li>
                  <li>Total liability limited to amount paid for services</li>
                  <li>Not liable for indirect, consequential, or punitive damages</li>
                  <li>Force majeure events exempt from liability</li>
                </ul>
              </div>

              <p className={`${styles.text} text-sm`}>
                <em>Some states do not allow limitations on implied warranties or liability for incidental damages, 
                so these limitations may not apply to you.</em>
              </p>
            </section>

            {/* Section 13: Governing Law */}
            <section id="governing-law">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>13. Governing Law and Disputes</h2>
              
              <h3 className={`text-xl ${styles.subheading} mb-3`}>Applicable Law</h3>
              <p className={`${styles.text} mb-4`}>
                These terms are governed by the laws of the State of California, without regard to conflict of law principles.
              </p>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Dispute Resolution</h3>
              <ol className={`space-y-2 ${styles.text} mb-6 ml-6 list-decimal`}>
                <li><strong>Direct Communication:</strong> Initial attempt to resolve disputes through direct dialogue</li>
                <li><strong>Mediation:</strong> Good faith participation in mediation if direct resolution fails</li>
                <li><strong>Arbitration:</strong> Binding arbitration for disputes over $10,000</li>
                <li><strong>Jurisdiction:</strong> California state courts for matters not subject to arbitration</li>
              </ol>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Professional Complaints</h3>
              <p className={`${styles.text}`}>
                Clinical service complaints may also be filed with the California Board of Psychology: 
                <br />Website: www.psychology.ca.gov | Phone: (916) 574-7720
              </p>
            </section>

            {/* Section 14: Modifications */}
            <section id="modifications">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>14. Modifications and Termination</h2>
              
              <h3 className={`text-xl ${styles.subheading} mb-3`}>Terms Updates</h3>
              <ul className={`space-y-2 ${styles.text} mb-6 ml-6 list-disc`}>
                <li>Terms may be updated periodically with 30-day notice</li>
                <li>Material changes require explicit consent for ongoing services</li>
                <li>Continued use of website constitutes acceptance of minor modifications</li>
                <li>Clinical service changes subject to additional professional requirements</li>
              </ul>

              <h3 className={`text-xl ${styles.subheading} mb-3`}>Service Termination</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`${styles.card} rounded-lg p-6`}>
                  <h4 className={`font-semibold ${styles.heading} mb-3`}>Clinical Services</h4>
                  <ul className={`space-y-2 ${styles.text} text-sm ml-4 list-disc`}>
                    <li>Either party may terminate with appropriate notice</li>
                    <li>Referrals provided for continuity of care</li>
                    <li>Records retained per California requirements</li>
                    <li>Outstanding balances remain due</li>
                  </ul>
                </div>
                
                <div className={`${styles.card} rounded-lg p-6`}>
                  <h4 className={`font-semibold ${styles.heading} mb-3`}>Wellness Services</h4>
                  <ul className={`space-y-2 ${styles.text} text-sm ml-4 list-disc`}>
                    <li>Services may be terminated immediately for cause</li>
                    <li>Refunds subject to cancellation policy</li>
                    <li>Access to materials may be revoked</li>
                    <li>No ongoing obligations after termination</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 15: Contact */}
            <section id="contact">
              <h2 className={`text-2xl font-serif ${styles.heading} mb-4`}>15. Contact Information</h2>
              
              <div className={`${styles.card} rounded-lg p-6`}>
                <h3 className={`text-lg ${styles.subheading} mb-3`}>Terms of Service Questions</h3>
                <p className={`${styles.text} mb-4`}>
                  <strong>Dr. Gretchen Kubacky, Psy.D.</strong><br />
                  Licensed Psychologist (PSY12345)<br />
                  Email: terms@gretchenkubacky.com<br />
                  Phone: (555) 123-4567<br />
                  Business Hours: Monday-Friday, 9:00 AM - 5:00 PM PST
                </p>

                <p className={`${styles.text} text-sm`}>
                  For clinical emergencies, refer to Section 9. For general inquiries, 
                  please allow 2-3 business days for response.
                </p>
              </div>
            </section>

          </div>

          {/* Acknowledgment Footer */}
          <div className={`mt-12 p-6 ${styles.card} rounded-lg border-2 ${styles.border}`}>
            <h3 className={`text-lg font-semibold ${styles.heading} mb-3 text-center`}>
              Acknowledgment of Understanding
            </h3>
            <p className={`text-sm ${styles.text} text-center mb-4`}>
              By using our services, you acknowledge that you have read, understood, and agree to these Terms of Service. 
              You understand the distinction between clinical psychology services (licensed, HIPAA-protected) and 
              transpersonal wellness services (complementary, non-clinical).
            </p>
            <p className={`text-sm ${styles.text} text-center`}>
              <strong>Last Updated:</strong> {lastUpdated} | 
              <strong> Effective Date:</strong> {lastUpdated}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}