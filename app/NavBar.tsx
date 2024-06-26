'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';
import classNames from 'classnames';

function NavBar() {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ label, href }) => (
          <Link
            key={href}
            className={classNames({
              'text-zinc-900': href === currentPath,
              'text-zinc-500': href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
            href={href}
          >
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
