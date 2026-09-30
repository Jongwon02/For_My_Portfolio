import Image from 'next/image';
import Reveal from './Reveal';
import { siteConfig } from '@/lib/site';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="section-container grid items-center gap-12 md:grid-cols-[320px_1fr]">
        <Reveal className="flex justify-center">
          <div className="relative animate-floatSlow">
            <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-brand-100" />
            <div className="relative h-64 w-64 overflow-hidden rounded-3xl bg-surface shadow-card">
              <Image
                src="/images/kevin-about.webp"
                alt="신종원 프로필 캐릭터"
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <span className="text-sm font-bold uppercase tracking-widest text-brand-500">
            About Me
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            저는 이런 사람이에요 👀
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/70">
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-7 flex flex-wrap gap-2">
            {siteConfig.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600"
              >
                #{tag}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
