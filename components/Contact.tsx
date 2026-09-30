import Image from 'next/image';
import Reveal from './Reveal';
import { siteConfig } from '@/lib/site';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-7 py-14 text-center shadow-soft sm:px-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-56 w-56 rounded-full bg-indigoPurple/40 blur-3xl" />

            <div className="relative mx-auto mb-6 h-24 w-24">
              <Image
                src="/images/kevin-cart.webp"
                alt="케빈 캐릭터"
                width={96}
                height={96}
                className="animate-floatSlow drop-shadow-xl"
              />
            </div>

            <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl">
              함께 이야기 나누고 싶다면?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-white/85">
              협업, 채용, 그 무엇이든 좋아요. 언제든 편하게 연락 주세요!
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="pill-btn relative mt-8 bg-white px-8 py-4 text-base text-brand-600 shadow-lg hover:-translate-y-0.5"
            >
              ✉️ {siteConfig.email}
            </a>

            <ul className="relative mt-8 flex justify-center gap-3">
              {siteConfig.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
                  >
                    <span>{item.emoji}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
