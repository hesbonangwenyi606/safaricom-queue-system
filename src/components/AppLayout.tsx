import React, { useState } from 'react';
import { serviceCategories } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { TicketModal } from './TicketModal';
import { TicketDisplay } from './TicketDisplay';
import { QueueBoard } from './QueueBoard';
import { AdminPanel } from './AdminPanel';
import { useQueueManagement } from '../hooks/useQueueManagement';
import { ServiceCategory, QueueTicket } from '../types/queue';

export default function AppLayout() {
  const [language, setLanguage] = useState<'en' | 'sw'>('en');
  const [view, setView] = useState<'customer' | 'admin'>('customer');
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState<QueueTicket | null>(null);
  
  const { tickets, desks, generateTicket, callNext, completeTicket, cancelTicket } = useQueueManagement();

  const handleServiceClick = (service: ServiceCategory) => {
    setSelectedService(service);
    setShowTicketModal(true);
  };

  const handleTicketSubmit = (name: string, phone: string) => {
    if (selectedService) {
      const ticket = generateTicket(name, phone, selectedService.name, selectedService.averageTime);
      setGeneratedTicket(ticket);
      setShowTicketModal(false);
    }
  };

  const totalWaiting = tickets.filter(t => t.status === 'waiting').length;
  const totalServing = tickets.filter(t => t.status === 'serving').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl md:text-3xl font-bold">Safaricom Queue</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
                className="px-4 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {language === 'en' ? 'Swahili' : 'English'}
              </button>
              <button
                onClick={() => setView(view === 'customer' ? 'admin' : 'customer')}
                className="px-4 py-2 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition-colors"
              >
                {view === 'customer' ? '🔐 Admin' : '👤 Customer'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {view === 'customer' ? (
        <>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
            <div className="absolute inset-0 opacity-20">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68fa66cba3b6614fcaa2a29b_1761240826300_fb698614.webp" 
                alt="Hero" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  {language === 'en' ? 'Skip the Wait, Book Your Spot' : 'Epuka Kusubiri, Chukua Nafasi Yako'}
                </h2>
                <p className="text-xl text-green-100">
                  {language === 'en' 
                    ? 'Get your queue ticket instantly and track your position in real-time' 
                    : 'Pata tiketi yako mara moja na ufuatilie nafasi yako wakati halisi'}
                </p>
                <div className="flex justify-center space-x-8 pt-6">
                  <div className="text-center">
                    <p className="text-5xl font-bold">{totalWaiting}</p>
                    <p className="text-green-100">{language === 'en' ? 'Waiting' : 'Wanasubiri'}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-5xl font-bold">{totalServing}</p>
                    <p className="text-green-100">{language === 'en' ? 'Serving' : 'Tunahudumia'}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                {language === 'en' ? 'Select Your Service' : 'Chagua Huduma Yako'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceCategories.map(service => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onClick={() => handleServiceClick(service)}
                    language={language}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Queue Board */}
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <QueueBoard tickets={tickets} language={language} />
            </div>
          </section>
        </>
      ) : (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <AdminPanel
              tickets={tickets}
              desks={desks}
              onCallNext={callNext}
              onCompleteTicket={completeTicket}
              onCancelTicket={cancelTicket}
            />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Safaricom</h3>
              <p className="text-gray-400">Better Together</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Call: 100 / 0722000000</p>
              <p className="text-gray-400">Email: care@safaricom.co.ke</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-gray-400">Mon-Fri: 8AM - 6PM</p>
              <p className="text-gray-400">Sat: 9AM - 4PM</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Location</h4>
              <p className="text-gray-400">Safaricom House</p>
              <p className="text-gray-400">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </footer>

      <TicketModal
        isOpen={showTicketModal}
        onClose={() => setShowTicketModal(false)}
        service={selectedService}
        onSubmit={handleTicketSubmit}
        language={language}
      />

      {generatedTicket && (
        <TicketDisplay
          ticket={generatedTicket}
          onClose={() => setGeneratedTicket(null)}
          language={language}
        />
      )}
    </div>
  );
}
