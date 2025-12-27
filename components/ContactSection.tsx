import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
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
                  placeholder="Jane & John Doe"
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
                placeholder="+1 (555) 000-0000"
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
