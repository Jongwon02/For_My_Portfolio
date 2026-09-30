// ─────────────────────────────────────────────────────────────
//  이 파일만 고치면 사이트 내용 대부분을 바꿀 수 있어요.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: '신종원',
  nameEn: 'Kevin',
  role: '아이디어를 현실로 만드는 크리에이터',
  heroTagline:
    '만드는 걸 좋아하고, 디테일에 진심입니다. 작은 아이디어도 끝까지 다듬어 완성도 있는 결과로 만들어요.',
  email: 'sjw020722@gmail.com',
  about: [
    '안녕하세요! 저는 무언가를 기획하고 만드는 과정을 사랑하는 신종원입니다.',
    '새로운 걸 배우는 데 거리낌이 없고, 한번 시작하면 끝까지 파고드는 편이에요. 함께 일하는 사람들과 즐겁게 좋은 결과를 만드는 걸 가장 중요하게 생각합니다.',
  ],
  tags: ['꾸준함', '디테일', '협업', '실행력', '호기심'],
  social: [
    { label: 'GitHub', href: '#', emoji: '🐙' },
    { label: 'Instagram', href: '#', emoji: '📷' },
    { label: 'Blog', href: '#', emoji: '✍️' },
  ],
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

export const strengths = [
  {
    emoji: '💡',
    title: '아이디어',
    desc: '작은 관찰에서 문제를 발견하고, 실현 가능한 아이디어로 구체화합니다.',
  },
  {
    emoji: '🚀',
    title: '실행력',
    desc: '생각에서 멈추지 않고 빠르게 만들어보며 배우고 개선합니다.',
  },
  {
    emoji: '🧭',
    title: '방향성',
    desc: '무엇이 중요한지 기준을 세우고, 흔들림 없이 목표를 향해 나아갑니다.',
  },
  {
    emoji: '🤝',
    title: '협업',
    desc: '솔직하게 소통하고 함께하는 사람들과 시너지를 만듭니다.',
  },
  {
    emoji: '🔍',
    title: '디테일',
    desc: '마지막 1%까지 챙기며 완성도 있는 결과를 만듭니다.',
  },
  {
    emoji: '🌱',
    title: '성장',
    desc: '매일 조금씩, 꾸준히 배우며 어제보다 나아지려 노력합니다.',
  },
];

export const projects = [
  {
    emoji: '🚀',
    category: 'Web',
    title: '프로젝트 원 (Project One)',
    desc: '여기에 프로젝트 소개를 적어주세요. 어떤 문제를 어떻게 풀었는지 한두 문장으로 설명하면 좋아요.',
    tags: ['Next.js', 'TypeScript', 'UI/UX'],
    image: '/images/kevin-hero.webp',
    href: '#',
  },
  {
    emoji: '🎨',
    category: 'Design',
    title: '프로젝트 투 (Project Two)',
    desc: '브랜딩 · 디자인 관련 작업을 소개하는 자리입니다. 결과와 임팩트를 함께 적어보세요.',
    tags: ['Branding', 'Figma', 'Illustration'],
    image: '/images/kevin-cart.webp',
    href: '#',
  },
  {
    emoji: '💡',
    category: 'Product',
    title: '프로젝트 쓰리 (Project Three)',
    desc: '기획부터 배포까지 직접 만든 사이드 프로젝트를 소개해 보세요. 링크를 연결할 수 있어요.',
    tags: ['Product', 'Planning', 'Growth'],
    image: '/images/kevin-face.webp',
    href: '#',
  },
];
