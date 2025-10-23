export interface QueueTicket {
  id: string;
  ticketNumber: string;
  customerName: string;
  phoneNumber: string;
  serviceType: string;
  status: 'waiting' | 'serving' | 'completed' | 'cancelled';
  position: number;
  estimatedWaitTime: number;
  timestamp: Date;
  deskNumber?: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  nameSwahili: string;
  description: string;
  icon: string;
  averageTime: number;
  currentQueue: number;
}

export interface DeskStatus {
  deskNumber: number;
  isActive: boolean;
  currentTicket?: QueueTicket;
  servingAgent: string;
}
