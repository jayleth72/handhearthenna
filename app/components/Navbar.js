'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Hand and Heart Body Art
        </Link>
        <div className="hidden md:flex">
          <Link href="/about" className="p-2">
            About
          </Link>
          <Link href="/services" className="p-2">
            Services
          </Link>
          <Link href="/blog" className="p-2">
            Blog
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/about" className="block p-2">
            About
          </Link>
          <Link href="/services" className="block p-2">
            Services
          </Link>
          <Link href="/blog" className="block p-2">
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
}
