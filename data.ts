import {
  NavLinksType,
  ProjectData,
  Tab_Data,
} from './types';

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

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description: 'Project 1 description',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Photography Portfolio Website',
    description: 'Project 2 description',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'E-commerce Application',
    description: 'Project 3 description',
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Food Ordering Application',
    description: 'Project 4 description',
    image: '/images/projects/4.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'React Firebase Template',
    description: 'Authentication and CRUD operations',
    image: '/images/projects/5.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Full-stack Roadmap',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
];

export enum ProjectTag {
  All = 'All',
  Web = 'Web',
  Mobile = 'Mobile',
}
