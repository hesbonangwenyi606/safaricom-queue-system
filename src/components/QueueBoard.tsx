import React from 'react';
import { QueueTicket } from '../types/queue';

interface QueueBoardProps {
  tickets: QueueTicket[];
  language: 'en' | 'sw';
}

export const QueueBoard: React.FC<QueueBoardProps> = ({ tickets, language }) => {
  const servingTickets = tickets.filter(t => t.status === 'serving');
  const waitingTickets = tickets.filter(t => t.status === 'waiting').slice(0, 10);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {language === 'en' ? 'Current Queue Status' : 'Hali ya Foleni Sasa'}
      </h2>

      {servingTickets.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-green-600 mb-4">
            {language === 'en' ? 'Now Serving' : 'Tunahudumia Sasa'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servingTickets.map(ticket => (
              <div key={ticket.id} className="bg-green-50 border-2 border-green-500 rounded-lg p-4 animate-pulse">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-bold text-green-600">{ticket.ticketNumber}</p>
                    <p className="text-sm text-gray-600">{ticket.serviceType}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">Desk {ticket.deskNumber}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          {language === 'en' ? 'Waiting Queue' : 'Foleni ya Kusubiri'}
        </h3>
        <div className="space-y-2">
          {waitingTickets.map(ticket => (
            <div key={ticket.id} className="flex items-center justify-between bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="font-bold text-gray-700">{ticket.position}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{ticket.ticketNumber}</p>
                  <p className="text-sm text-gray-600">{ticket.serviceType}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">{language === 'en' ? 'Est. Wait' : 'Muda'}</p>
                <p className="font-semibold text-gray-900">{ticket.estimatedWaitTime} min</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
