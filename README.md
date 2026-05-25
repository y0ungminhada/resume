# Resume

Next.js 기반 이력서 사이트입니다.

## Stack

- Frontend: Next.js, React
- Style: Tailwind CSS
- Animation: Framer Motion
- Deploy: Vercel

## Routes

- `/`: Resume home
- `/aboutme`: 자기소개, 역량, 교육, 기타 경험
- `/portfolio`: 최신순 프로젝트 포트폴리오
- `/portfolio/[slug]`: 개별 프로젝트 상세 페이지
- `/resume`: PDF 이력서 내용을 옮긴 웹 이력서

프로젝트 설명과 이미지는 `src/app/data.js`의 `projects` 배열에서 관리합니다. 각 프로젝트의 `media` 배열에 이미지를 추가하면 포트폴리오 목록과 상세 페이지에 함께 반영됩니다.

## Scripts

```bash
npm install
npm run dev
npm run build
```

Vercel에서는 Next.js 프로젝트로 자동 감지됩니다. 기본 빌드 명령은 `npm run build`입니다.
