import { NavLinksType, Tab_Data, } from './types';

export const navLinks: NavLinksType[] = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

export const TAB_DATA: Tab_Data[] = [
  {
    title: 'Skills',
    id: 'Skills',
    content: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Sequelize',
      'Javascript',
      'React',
      'Next.js',
    ],
  },
  {
    title: 'Education',
    id: 'Education',
    content: [
      'National Institute of Information Technology(NIIT)',
    ],
  },
  {
    title: 'Certification',
    id: 'Certifications',
    content: ['Software Developer'],
  },
];
