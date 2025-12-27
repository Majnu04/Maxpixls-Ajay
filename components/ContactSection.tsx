import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Check if Formspree is configured
    if (CONTACT_INFO.formspreeEndpoint === 'YOUR_FORM_ID') {
      setStatus('error');
      setErrorMessage('Form service not configured. Please set up Formspree endpoint in constants.ts');
      return;
    }

    try {
      // Send form data to Formspree
      const response = await fetch(`https://formspree.io/f/${CONTACT_INFO.formspreeEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Formspree Error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact us via WhatsApp.');
    }
  };

  return (
    <div id="book" className="py-16 md:py-24 bg-white relative scroll-mt-24 md:scroll-mt-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-brand-gold font-serif italic text-lg md:text-xl">Inquiries</span>
          <h2 className="font-serif text-3xl md:text-5xl text-gray-900 mt-2">Let's Create Magic</h2>
          <p className="mt-4 md:mt-6 text-gray-600 font-sans text-sm md:text-base max-w-2xl mx-auto">
             Whether it's a wedding, baby shoot, fashion portrait, or special event - we'd love to hear about your vision. 
             Fill out the form below and let's create something beautiful together.
          </p>
          <a 
            href={`https://wa.me/${CONTACT_INFO.phoneNumber}?text=Hi!%20I%20would%20like%20to%20inquire%20about%20your%20photography%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-sans text-sm font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Quick Chat on WhatsApp
          </a>
        </div>

        {status === 'success' ? (
          <div className="bg-green-50 border border-green-100 p-8 text-center rounded-sm">
            <h3 className="font-serif text-2xl text-green-800 mb-2">Message Sent</h3>
            <p className="font-sans text-green-700 mb-6">Thank you for contacting us. We will get back to you within 24 hours.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b border-gray-900 pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : status === 'error' ? (
          <div className="bg-red-50 border border-red-100 p-8 text-center rounded-sm">
            <h3 className="font-serif text-2xl text-red-800 mb-2">Error</h3>
            <p className="font-sans text-red-700 mb-6">{errorMessage}</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b border-gray-900 pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              Try again
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="group">
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-brand-gold transition-colors">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 py-2 font-serif text-lg md:text-xl focus:outline-none focus:border-brand-gold transition-colors bg-transparent"
                  placeholder="Majnu"
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-brand-gold transition-colors">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 py-2 font-serif text-lg md:text-xl focus:outline-none focus:border-brand-gold transition-colors bg-transparent"
                  placeholder="hello@example.com"
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-brand-gold transition-colors">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 py-2 font-serif text-lg md:text-xl focus:outline-none focus:border-brand-gold transition-colors bg-transparent"
                placeholder="+91-1234567890"
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-brand-gold transition-colors">Tell us about your story</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border-b border-gray-300 py-2 font-serif text-lg md:text-xl focus:outline-none focus:border-brand-gold transition-colors bg-transparent resize-none"
                placeholder="Date, venue, and your vision..."
              ></textarea>
            </div>

            <div className="text-center pt-4 md:pt-8">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-gray-900 text-white w-full md:w-auto px-10 py-4 md:px-16 md:py-5 font-sans text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-300 disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
