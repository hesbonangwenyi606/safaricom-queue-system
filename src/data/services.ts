import { ServiceCategory } from '../types/queue';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'sim-registration',
    name: 'SIM Registration',
    nameSwahili: 'Usajili wa SIM',
    description: 'New SIM card registration and activation',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68fa66cba3b6614fcaa2a29b_1761240827257_8f600084.webp',
    averageTime: 10,
    currentQueue: 5
  },
  {
    id: 'mpesa',
    name: 'M-Pesa Services',
    nameSwahili: 'Huduma za M-Pesa',
    description: 'M-Pesa registration, limits, and support',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68fa66cba3b6614fcaa2a29b_1761240827982_a396f902.webp',
    averageTime: 8,
    currentQueue: 8
  },
  {
    id: 'device-support',
    name: 'Device Support',
    nameSwahili: 'Msaada wa Simu',
    description: 'Phone repairs, troubleshooting, and upgrades',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68fa66cba3b6614fcaa2a29b_1761240828696_f4d6adf8.webp',
    averageTime: 15,
    currentQueue: 3
  },
  {
    id: 'business',
    name: 'Business Accounts',
    nameSwahili: 'Akaunti za Biashara',
    description: 'Corporate services and bulk registrations',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68fa66cba3b6614fcaa2a29b_1761240829422_37e67d37.webp',
    averageTime: 20,
    currentQueue: 2
  },
  {
    id: 'home-fiber',
    name: 'Home Fiber',
    nameSwahili: 'Intaneti ya Nyumbani',
    description: 'Home internet installation and support',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68fa66cba3b6614fcaa2a29b_1761240830331_53116e63.webp',
    averageTime: 12,
    currentQueue: 4
  },
  {
    id: 'postpaid',
    name: 'Postpaid Services',
    nameSwahili: 'Huduma za Postpaid',
    description: 'Bill payments and postpaid plans',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68fa66cba3b6614fcaa2a29b_1761240831103_b392aeb3.webp',
    averageTime: 7,
    currentQueue: 6
  },
  {
    id: 'support',
    name: 'General Support',
    nameSwahili: 'Msaada wa Jumla',
    description: 'General inquiries and assistance',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68fa66cba3b6614fcaa2a29b_1761240836158_313cccea.webp',
    averageTime: 10,
    currentQueue: 7
  },
  {
    id: 'upgrade',
    name: 'Account Upgrade',
    nameSwahili: 'Boresha Akaunti',
    description: 'Upgrade your account and services',
    icon: 'https://d64gsuwffb70l.cloudfront.net/68fa66cba3b6614fcaa2a29b_1761240836870_28710bee.webp',
    averageTime: 9,
    currentQueue: 4
  }
];
