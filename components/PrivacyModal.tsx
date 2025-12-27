import React from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-serif text-gray-900">Privacy Policy</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-8 space-y-6 text-gray-600 font-sans">
            <p className="text-sm text-gray-500">Last Updated: December 27, 2025</p>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Information We Collect</h3>
              <p className="mb-2">When you contact us or book our services, we collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name and contact information (email, phone number)</li>
                <li>Event details (date, venue, type of service)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. How We Use Your Information</h3>
              <p className="mb-2">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide photography services and deliver your images</li>
                <li>Communicate about bookings, schedules, and deliveries</li>
                <li>Process payments and maintain records</li>
                <li>Send promotional offers (only with your consent)</li>
                <li>Improve our services and customer experience</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Image Usage and Consent</h3>
              <p className="mb-2">3.1. We may use photographs taken during your event for marketing, portfolio, and social media purposes.</p>
              <p className="mb-2">3.2. If you prefer your images not be used publicly, please inform us in writing.</p>
              <p className="mb-2">3.3. We respect your privacy and will remove images upon request.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Data Storage and Security</h3>
              <p className="mb-2">4.1. Your personal information is stored securely and protected against unauthorized access.</p>
              <p className="mb-2">4.2. Images are backed up on secure cloud storage and external drives.</p>
              <p className="mb-2">4.3. We retain client data for a minimum of 2 years for legal and business purposes.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">5. Third-Party Services</h3>
              <p className="mb-2">We use trusted third-party services including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Formspree for contact form submissions</li>
                <li>Payment processors for secure transactions</li>
                <li>Cloud storage providers for image backup</li>
                <li>Social media platforms for marketing</li>
              </ul>
              <p className="mt-2">These services have their own privacy policies which we encourage you to review.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">6. Cookies and Analytics</h3>
              <p className="mb-2">6.1. Our website may use cookies to improve user experience.</p>
              <p className="mb-2">6.2. We use analytics tools to understand website traffic and visitor behavior.</p>
              <p className="mb-2">6.3. You can disable cookies in your browser settings.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">7. Your Rights</h3>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal data we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
                <li>Opt-out of marketing communications</li>
                <li>Request removal of your images from public platforms</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">8. Children's Privacy</h3>
              <p>We do not knowingly collect personal information from children under 13. Parents/guardians provide consent for baby and children photography shoots.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">9. Changes to Privacy Policy</h3>
              <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">10. Contact Us</h3>
              <p className="mb-2">For privacy-related questions or requests, contact us at:</p>
              <p className="mb-1"><strong>Email:</strong> maxpixlsphotography@gmail.com</p>
              <p className="mb-1"><strong>Phone:</strong> +91 99899 65562</p>
              <p><strong>Address:</strong> Jarajapupeta, Andhra Pradesh</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
