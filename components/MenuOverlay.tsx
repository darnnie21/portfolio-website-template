import React from 'react';
import NavLink from './NavLink';
import { navLinksType } from '@/types';

type MenuOverlayProps = {
  links: navLinksType[];
};

const MenuOverlay: React.FC<MenuOverlayProps> = ({
  links,
}) => {
  return (
    <ul className='flex flex-col gap-2 py-4 items-end'>
      {links.map((link, index) => (
        <li
          key={index}
          className='text-2xl'
        >
          <NavLink
            href={link.path}
            title={link.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
