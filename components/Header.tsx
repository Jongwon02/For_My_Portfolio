'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { navItems, siteConfig } from '@/lib/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 shadow-card backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2">
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white shadow-soft">
            <Image src="/thats_me.webp" alt="신종원 아이콘" fill sizes="40px" />
          </span>
          <span
            className={`text-lg font-extrabold tracking-tight ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
          >
            {siteConfig.name}
            <span className="ml-1 font-medium text-brand-400">
              {siteConfig.nameEn}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm font-semibold transition-colors hover:text-brand-500 ${
                  scrolled ? 'text-ink/70' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="pill-btn bg-brand-600 text-white hover:bg-brand-700"
            >
              연락하기
            </a>
          </li>
        </ul>

        <button
          aria-label="메뉴 열기"
          onClick={() => setMenuOpen((open) => !open)}
          className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
            scrolled ? 'text-ink' : 'text-white'
          }`}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <ul className="section-container flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-semibold text-ink/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
