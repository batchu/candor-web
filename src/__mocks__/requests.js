import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    companyUrl: '/static/images/companies/073.png',
    createdAt: 'today',
    request: 'Cancel flight itinerary HXCAA',
    company: 'Delta',
  },
  {
    id: uuid(),
    companyUrl: '/static/images/companies/005.png',
    createdAt: 'yesterday',
    request: 'Macbook battery replacement',
    company: 'Apple',
  },
  {
    id: uuid(),
    companyUrl: '/static/images/companies/012.png',
    createdAt: '5 days ago',
    request: 'Mobile plan Military discount',
    company: 'AT&T',
  },
  {
    id: uuid(),
    companyUrl: '/static/images/companies/033.png',
    createdAt: '5 days ago',
    request: 'Change shipping address for #301601',
    company: 'Home Depot',
  }
];
