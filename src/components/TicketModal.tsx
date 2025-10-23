import React, { useState } from 'react';
import { ServiceCategory } from '../types/queue';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceCategory | null;
  onSubmit: (name: string, phone: string) => void;
  language: 'en' | 'sw';
}

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose, service, onSubmit, language }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({ name: '', phone: '' });

  if (!isOpen || !service) return null;

  const validateForm = () => {
    const newErrors = { name: '', phone: '' };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = language === 'en' ? 'Name is required' : 'Jina linahitajika';
      isValid = false;
    }

    if (!phone.match(/^(07|01)\d{8}$/)) {
      newErrors.phone = language === 'en' ? 'Invalid phone number' : 'Nambari si sahihi';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(name, phone);
      setName('');
      setPhone('');
      setErrors({ name: '', phone: '' });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {language === 'en' ? 'Get Your Ticket' : 'Pata Tiketi Yako'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'en' ? 'Full Name' : 'Jina Kamili'}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder={language === 'en' ? 'Enter your name' : 'Weka jina lako'}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'en' ? 'Phone Number' : 'Nambari ya Simu'}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="0712345678"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            {language === 'en' ? 'Get Ticket' : 'Pata Tiketi'}
          </button>
        </form>
      </div>
    </div>
  );
};
