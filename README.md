# 신종원 (Kevin) — Portfolio

배포본 <https://kevin-portfolio-21111.vercel.app> 을 편집 가능한 소스로 복원한 프로젝트입니다.
`next build` 결과 렌더링 HTML이 원본 배포와 100% 동일함을 확인했습니다.

## 실행하기

```bash
npm install     # 최초 1회
npm run dev     # http://localhost:3000
npm run build   # 배포용 빌드
```

## 기술 스택

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS 3
- Framer Motion (스크롤 등장 애니메이션)
- Pretendard 폰트 (jsDelivr CDN)

## 어디를 고치면 되나요?

### 1. 글/내용만 바꾸고 싶다면 → `lib/site.ts`

이 파일 하나에 사이트의 텍스트 데이터가 모여 있습니다.

| 항목 | 설명 |
| --- | --- |
| `siteConfig.name` / `nameEn` | 이름, 영문 이름 (헤더·히어로·푸터에 반영) |
| `siteConfig.role` | 히어로의 한 줄 소개 |
| `siteConfig.heroTagline` | 히어로 본문 문단 |
| `siteConfig.email` | Contact 버튼의 메일 주소 |
| `siteConfig.about` | About 섹션 문단 배열 (원소를 추가하면 문단이 늘어남) |
| `siteConfig.tags` | About 섹션의 `#해시태그` 목록 |
| `siteConfig.social` | GitHub / Instagram / Blog 링크 — `href`를 실제 주소로 바꾸세요 |
| `navItems` | 상단 메뉴 |
| `strengths` | Skills 섹션 카드 6개 (이모지 / 제목 / 설명) |
| `projects` | Works 섹션 프로젝트 카드 (지금은 예시 내용이라 실제 작업물로 교체하면 됩니다) |

### 2. 디자인·레이아웃을 바꾸고 싶다면 → `components/`

| 파일 | 담당 영역 |
| --- | --- |
| `Header.tsx` | 상단 고정 네비게이션 (스크롤 20px 넘으면 흰 배경으로 전환, 모바일 햄버거 메뉴) |
| `Hero.tsx` | 첫 화면 — 캐릭터 둥둥 애니메이션, 아래쪽 물결 SVG |
| `About.tsx` | 자기소개 + 해시태그 |
| `Skills.tsx` | 강점 카드 그리드 |
| `Works.tsx` | 작업물 카드 그리드 |
| `Contact.tsx` | 연락처 CTA 카드 |
| `Footer.tsx` | 하단 푸터 |
| `Reveal.tsx` | 스크롤 시 아래에서 떠오르는 등장 애니메이션 래퍼 |

### 3. 색상·그림자·애니메이션 → `tailwind.config.ts`

```
brand-50  #eef2ff      brand-500 #4b6ef5      ink          #1a1a2e
brand-100 #e0e7ff      brand-600 #3b5bff      surface      #f5f7ff
brand-400 #818cf8      brand-700 #3730a3      indigoPurple #7b61ff
```

- `bg-brand-gradient` — `linear-gradient(135deg, #4b6ef5, #5b6ef5 40%, #7b61ff)`
- `shadow-soft` / `shadow-card` — 커스텀 그림자
- `animate-float` (4s) / `animate-floatSlow` (6s) — 캐릭터가 위아래로 떠다니는 효과

### 4. 전역 스타일·폰트 → `app/globals.css`

`.section-container`(최대 폭 72rem 컨테이너), `.pill-btn`(알약 버튼) 유틸리티와 Pretendard 폰트가 여기 정의돼 있습니다.

### 5. 탭 제목·검색/공유 미리보기 → `app/layout.tsx`

`metadata`의 title, description, Open Graph, Twitter 카드 설정이 있습니다.
`og:image` / `twitter:image`가 예전 도메인(`kevin-portfolio.vercel.app`)을 가리키고 있으니 도메인이 바뀌면 함께 수정하세요.

### 6. 이미지 → `public/`

```
public/thats_me.webp            프로필 아이콘 (파비콘 겸용)
public/images/kevin-hero.webp   히어로 캐릭터
public/images/kevin-cart.webp   Contact 캐릭터
public/images/kevin-face.webp   Works 카드 이미지
```

같은 파일명으로 덮어쓰면 코드 수정 없이 이미지가 교체됩니다.

## 배포

```bash
npx vercel        # 미리보기 배포
npx vercel --prod # 프로덕션 배포
```

기존 `kevin-portfolio` 프로젝트에 이어서 배포하려면 첫 실행 시 해당 프로젝트를 선택하세요.
