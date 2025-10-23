import React from 'react';
import { QueueTicket, DeskStatus } from '../types/queue';

interface AdminPanelProps {
  tickets: QueueTicket[];
  desks: DeskStatus[];
  onCallNext: (deskNumber: number) => void;
  onCompleteTicket: (ticketId: string) => void;
  onCancelTicket: (ticketId: string) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ 
  tickets, 
  desks, 
  onCallNext, 
  onCompleteTicket,
  onCancelTicket 
}) => {
  const waitingCount = tickets.filter(t => t.status === 'waiting').length;
  const servingCount = tickets.filter(t => t.status === 'serving').length;
  const completedCount = tickets.filter(t => t.status === 'completed').length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-4">
          <p className="text-sm text-yellow-700">Waiting</p>
          <p className="text-3xl font-bold text-yellow-600">{waitingCount}</p>
        </div>
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
          <p className="text-sm text-green-700">Serving</p>
          <p className="text-3xl font-bold text-green-600">{servingCount}</p>
        </div>
        <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4">
          <p className="text-sm text-blue-700">Completed</p>
          <p className="text-3xl font-bold text-blue-600">{completedCount}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Service Desks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {desks.map(desk => (
            <div key={desk.deskNumber} className={`border-2 rounded-lg p-4 ${desk.isActive ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-50'}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-lg">Desk {desk.deskNumber}</h4>
                  <p className="text-sm text-gray-600">{desk.servingAgent}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${desk.isActive ? 'bg-green-600 text-white' : 'bg-gray-400 text-white'}`}>
                  {desk.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
              
              {desk.currentTicket ? (
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm text-gray-600">Current Ticket</p>
                    <p className="text-xl font-bold text-green-600">{desk.currentTicket.ticketNumber}</p>
                    <p className="text-sm text-gray-700">{desk.currentTicket.customerName}</p>
                  </div>
                  <button
                    onClick={() => onCompleteTicket(desk.currentTicket!.id)}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Complete Service
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => onCallNext(desk.deskNumber)}
                  disabled={!desk.isActive || waitingCount === 0}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Call Next Customer
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
