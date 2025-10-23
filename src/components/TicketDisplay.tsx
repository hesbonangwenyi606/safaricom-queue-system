import React from 'react';
import { QueueTicket } from '../types/queue';

interface TicketDisplayProps {
  ticket: QueueTicket;
  onClose: () => void;
  language: 'en' | 'sw';
}

export const TicketDisplay: React.FC<TicketDisplayProps> = ({ ticket, onClose, language }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            {language === 'en' ? 'Ticket Generated!' : 'Tiketi Imetengenezwa!'}
          </h2>

          <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
            <p className="text-sm text-gray-600 mb-2">{language === 'en' ? 'Your Ticket Number' : 'Nambari ya Tiketi'}</p>
            <p className="text-5xl font-bold text-green-600">{ticket.ticketNumber}</p>
          </div>

          <div className="space-y-3 text-left bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between">
              <span className="text-gray-600">{language === 'en' ? 'Service' : 'Huduma'}:</span>
              <span className="font-semibold">{ticket.serviceType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{language === 'en' ? 'Position' : 'Nafasi'}:</span>
              <span className="font-semibold">{ticket.position}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{language === 'en' ? 'Est. Wait' : 'Muda'}:</span>
              <span className="font-semibold">{ticket.estimatedWaitTime} min</span>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            {language === 'en' 
              ? 'You will receive an SMS notification when it\'s your turn' 
              : 'Utapokea ujumbe wakati wako unakuja'}
          </p>

          <button
            onClick={onClose}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            {language === 'en' ? 'Close' : 'Funga'}
          </button>
        </div>
      </div>
    </div>
  );
};
