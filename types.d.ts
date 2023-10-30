export type NavLinksType = {
  title: string;
  path: string;
};

export type Tab = 'Skills' | 'Education' | 'Certifications';

export type Tab_Data = {
  title: string;
  id: string;
  content: string[];
};

export type ProjectData = {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
};
