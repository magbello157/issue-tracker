import React from 'react';
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';

function NavBar() {
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
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
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