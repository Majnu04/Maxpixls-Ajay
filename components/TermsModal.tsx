import React from 'react';
import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
            <h2 className="text-2xl font-serif text-gray-900">Terms and Conditions</h2>
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Services</h3>
              <p className="mb-2">MAXPIXLS Photography provides professional photography services including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Wedding Photography</li>
                <li>Destination Weddings</li>
                <li>Baby Shoots</li>
                <li>Fashion Portraits</li>
                <li>Event Photography</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Booking and Payment</h3>
              <p className="mb-2">2.1. A booking is confirmed only after receipt of the agreed deposit (typically 30-50% of total fee).</p>
              <p className="mb-2">2.2. The remaining balance must be paid before or on the day of the shoot.</p>
              <p className="mb-2">2.3. All payments are non-refundable unless the photographer cancels the booking.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Cancellation Policy</h3>
              <p className="mb-2">3.1. If the client cancels more than 30 days before the event, 50% of the deposit will be refunded.</p>
              <p className="mb-2">3.2. Cancellations within 30 days of the event are non-refundable.</p>
              <p className="mb-2">3.3. If MAXPIXLS cancels due to unforeseen circumstances, the full amount paid will be refunded.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Delivery of Images</h3>
              <p className="mb-2">4.1. Edited images will be delivered within 4-6 weeks for weddings and 2-3 weeks for other shoots.</p>
              <p className="mb-2">4.2. Images will be provided via online gallery or USB drive.</p>
              <p className="mb-2">4.3. Raw/unedited images will not be provided.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">5. Copyright and Usage</h3>
              <p className="mb-2">5.1. MAXPIXLS retains full copyright to all images taken.</p>
              <p className="mb-2">5.2. Clients are granted personal use rights for digital sharing and printing.</p>
              <p className="mb-2">5.3. Images may not be used for commercial purposes without written permission.</p>
              <p className="mb-2">5.4. MAXPIXLS reserves the right to use images for portfolio, marketing, and promotional purposes.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">6. Liability</h3>
              <p className="mb-2">6.1. MAXPIXLS will take utmost care with equipment but is not liable for equipment failure.</p>
              <p className="mb-2">6.2. In the unlikely event of complete data loss, liability is limited to a refund of fees paid.</p>
              <p className="mb-2">6.3. The photographer is not responsible for missed shots due to obstructions or poor lighting.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">7. Force Majeure</h3>
              <p>MAXPIXLS is not liable for failure to perform services due to circumstances beyond our control, including but not limited to natural disasters, illness, accidents, or government restrictions.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">8. Client Responsibilities</h3>
              <p className="mb-2">8.1. Clients must provide accurate venue details and timings.</p>
              <p className="mb-2">8.2. Clients are responsible for obtaining permissions at private venues.</p>
              <p className="mb-2">8.3. Clients must inform about any special requirements in advance.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">9. Contact</h3>
              <p>For questions about these terms, please contact us at maxpixlsphotography@gmail.com or +91 99899 65562.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
