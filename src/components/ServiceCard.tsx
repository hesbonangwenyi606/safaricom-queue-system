import React from 'react';
import { ServiceCategory } from '../types/queue';

interface ServiceCardProps {
  service: ServiceCategory;
  onClick: () => void;
  language: 'en' | 'sw';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick, language }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-6 border-2 border-transparent hover:border-green-500 transform hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center overflow-hidden">
          <img src={service.icon} alt={service.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">
          {language === 'en' ? service.name : service.nameSwahili}
        </h3>
        <p className="text-sm text-gray-600">{service.description}</p>
        <div className="flex items-center justify-between w-full pt-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs text-gray-500">Queue</p>
            <p className="text-lg font-bold text-green-600">{service.currentQueue}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500">Avg Time</p>
            <p className="text-lg font-bold text-gray-900">{service.averageTime}m</p>
          </div>
        </div>
      </div>
    </div>
  );
};
