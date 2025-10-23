import { useState, useCallback } from 'react';
import { QueueTicket, DeskStatus } from '../types/queue';

export const useQueueManagement = () => {
  const [tickets, setTickets] = useState<QueueTicket[]>([]);
  const [desks] = useState<DeskStatus[]>([
    { deskNumber: 1, isActive: true, servingAgent: 'John Mwangi' },
    { deskNumber: 2, isActive: true, servingAgent: 'Mary Njeri' },
    { deskNumber: 3, isActive: true, servingAgent: 'Peter Kamau' },
    { deskNumber: 4, isActive: true, servingAgent: 'Grace Akinyi' }
  ]);

  const generateTicket = useCallback((name: string, phone: string, serviceType: string, averageTime: number) => {
    const ticketNumber = `S${Math.floor(1000 + Math.random() * 9000)}`;
    const waitingTickets = tickets.filter(t => t.status === 'waiting' && t.serviceType === serviceType);
    const position = waitingTickets.length + 1;

    const newTicket: QueueTicket = {
      id: Date.now().toString(),
      ticketNumber,
      customerName: name,
      phoneNumber: phone,
      serviceType,
      status: 'waiting',
      position,
      estimatedWaitTime: position * averageTime,
      timestamp: new Date()
    };

    setTickets(prev => [...prev, newTicket]);
    return newTicket;
  }, [tickets]);

  const callNext = useCallback((deskNumber: number) => {
    const nextTicket = tickets.find(t => t.status === 'waiting');
    if (nextTicket) {
      setTickets(prev => prev.map(t => 
        t.id === nextTicket.id 
          ? { ...t, status: 'serving' as const, deskNumber }
          : t
      ));
    }
  }, [tickets]);

  const completeTicket = useCallback((ticketId: string) => {
    setTickets(prev => prev.map(t => 
      t.id === ticketId ? { ...t, status: 'completed' as const } : t
    ));
  }, []);

  const cancelTicket = useCallback((ticketId: string) => {
    setTickets(prev => prev.map(t => 
      t.id === ticketId ? { ...t, status: 'cancelled' as const } : t
    ));
  }, []);

  return {
    tickets,
    desks,
    generateTicket,
    callNext,
    completeTicket,
    cancelTicket
  };
};
