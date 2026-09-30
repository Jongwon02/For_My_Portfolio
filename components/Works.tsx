import Image from 'next/image';
import Reveal from './Reveal';
import { projects } from '@/lib/site';

export default function Works() {
  return (
    <section id="works" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="section-container">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-500">
            Works
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            이런 것들을 만들었어요 🛠️
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/60">
            대표적인 작업물이에요. 카드를 눌러 자세히 볼 수 있어요.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <a
                href={project.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-surface shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-brand-gradient">
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-600">
                    {project.category}
                  </span>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={180}
                    height={180}
                    className="max-h-40 w-auto object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-ink">
                    <span className="mr-1">{project.emoji}</span>
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 leading-relaxed text-ink/60">
                    {project.desc}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
