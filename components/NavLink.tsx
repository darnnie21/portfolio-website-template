import Link from 'next/link';
import React from 'react';

type NavLinkProps = {
  href: string;
  title: string;
  styles?: string;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  title,
  styles,
}) => {
  return (
    <Link
      href={href}
      className={`${styles} block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
