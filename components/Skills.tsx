import Reveal from './Reveal';
import { strengths } from '@/lib/site';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="section-container">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-500">
            Strengths
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            제가 잘하고, 좋아하는 것들
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/60">
            일할 때 중요하게 생각하는 가치와 강점을 모아봤어요.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="group h-full rounded-3xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-2xl shadow-soft transition-transform group-hover:scale-110">
                  <span>{item.emoji}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/60">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
