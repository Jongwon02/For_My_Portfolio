'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-gradient pt-28 pb-24 sm:pt-36 sm:pb-32"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-indigoPurple/40 blur-3xl" />

      <div className="section-container relative grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
            👋 Welcome to Kevin&apos;s Portfolio
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            안녕하세요,
            <br />
            <span className="text-white">{siteConfig.name}</span>
            <span className="text-brand-100">입니다.</span>
          </h1>
          <p className="mt-4 text-lg font-semibold text-brand-100">
            {siteConfig.role}
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/85">
            {siteConfig.heroTagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#works"
              className="pill-btn bg-white text-brand-600 shadow-soft hover:-translate-y-0.5 hover:shadow-lg"
            >
              작업 보기 →
            </a>
            <a
              href="#contact"
              className="pill-btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            >
              연락하기
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative h-72 w-72 sm:h-96 sm:w-96">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl" />
            <div className="animate-float">
              <Image
                src="/images/kevin-hero.webp"
                alt="케빈 캐릭터"
                width={420}
                height={420}
                priority
                className="relative drop-shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,40 C360,90 1080,-10 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
