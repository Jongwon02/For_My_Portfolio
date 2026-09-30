import Image from 'next/image';
import { siteConfig } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-white/70">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-white/20">
            <Image src="/thats_me.webp" alt="신종원 아이콘" fill sizes="32px" />
          </span>
          <span className="font-bold text-white">
            {siteConfig.name}{' '}
            <span className="font-medium text-white/50">
              {siteConfig.nameEn}
            </span>
          </span>
        </div>
        <p className="text-sm text-white/40">
          © {siteConfig.name}. Made with 💙 &amp; Next.js
        </p>
      </div>
    </footer>
  );
}
