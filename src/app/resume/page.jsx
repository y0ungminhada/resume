import {
  BulletList,
  PageHero,
  PageShell,
  Period,
  Section,
} from "../components";
import {
  education as aboutEducation,
  otherExperiences,
  skills as coreStrengths,
} from "../data";

const resume = {
  name: "박영민",
  title: "AppSec Engineer",
  contacts: [
    {
      label: "Email",
      value: "pym000526@gmail.com",
      href: "mailto:pym000526@gmail.com",
    },
    {
      label: "Phone",
      value: "010-4076-2540",
      href: "tel:01040762540",
    },
    {
      label: "GitHub",
      value: "@y0ungminhada",
      href: "https://github.com/y0ungminhada",
    },
    {
      label: "Blog",
      value: "velog.io/@omin_00",
      href: "https://velog.io/@omin_00/posts",
    },
  ],
  projects: [
    {
      period: "2026.01 - Present",
      title: "LumosV2",
      meta: "Security Automation System",
      description:
        "온체인 트랜잭션과 실행 트레이스를 기반으로 공격의 전체 라이프사이클(자금 조달 -> 공격 -> 수익화)을 재구성하고, 취약점 분석부터 PoC 생성 및 익스플로잇 검증까지 자동화하는 스마트컨트랙트 오딧 시스템",
      techStack: [
        "Python",
        "Solidity",
        "EVM Trace Analysis",
        "Decompiler",
        "Foundry",
      ],
    },
    {
      period: "2025.11 - 2025.12",
      title: "MemeXstar",
      meta: "SocialFi dApp",
      description:
        "온체인 활동과 소셜 데이터를 결합한 영향력 지표(Meme Index)를 설계하여 시빌 공격 및 보상 왜곡 문제를 해결하고, 스마트컨트랙트 보안 분석을 통해 안정성을 강화한 SocialFi 서비스",
      techStack: ["Solidity", "Slither", "Web3", "Data Modeling"],
    },
    {
      period: "2025.09",
      title: "Sui-treaming",
      meta: "Web3 Streaming Protocol",
      description:
        "zkLogin 기반으로 Web2 사용자의 Web3 온보딩을 지원하고, NFT 기반 구독 모델과 Walrus 저장소를 활용한 탈중앙 콘텐츠 접근 제어 구조를 구현한 스트리밍 프로토콜",
      techStack: ["Sui Move", "zkLogin", "Walrus", "Smart Contract"],
    },
    {
      period: "2025.02 - 2025.06",
      title: "ChainStalker",
      meta: "Perp DEX AML Detection System",
      description:
        "Perp DEX의 고레버리지·양방향 포지션 구조를 분석하여 자금세탁 탐지 시나리오를 정의하고, 온체인 데이터를 기반으로 의심 거래 탐지 및 크로스체인 추적을 수행하는 AML 시스템",
      techStack: [
        "Python",
        "On-chain Data Analysis",
        "Data Pipeline",
        "Visualization",
      ],
    },
  ],
  education: aboutEducation,
  otherExperiences,
  skills: coreStrengths,
  languages: [
    {
      title: "English",
      points: [
        "영어 기술 문서와 보안 리서치 자료를 읽고 프로젝트 학습에 활용합니다.",
      ],
    },
  ],
};

export const metadata = {
  title: "Resume - 박영민",
  description: "Security Engineer 박영민의 이력서입니다.",
};

function TechStackList({ items }) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 text-base font-medium leading-7 text-zinc-700 sm:text-lg"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LanguageList({ languages }) {
  return (
    <div className="space-y-5">
      {languages.map((language) => (
        <article
          key={language.title}
          className="w-full border-l-4 border-sky-400 bg-white p-6 shadow-sm sm:p-8"
        >
          <h3 className="inline px-1 text-3xl font-black leading-tight text-zinc-950">
            {language.title}
          </h3>
          <ul className="mt-8 space-y-5 text-base leading-8 text-zinc-700 sm:text-lg">
            {language.points.map((point) => (
              <li
                key={point}
                className="relative pl-8 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:bg-sky-400"
              >
                {point}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default function ResumePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Resume"
        title={resume.name}
        subtitle={resume.title}
        compact
      />

      <Section
        title="Contact"
        description="프로젝트와 보안 리서치에 대해 이야기할 수 있습니다."
        className="py-10 sm:py-12"
      >
        <div className="grid gap-4 border-t border-zinc-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {resume.contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="border border-zinc-200 bg-white p-5 text-zinc-950 no-underline shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:text-sky-700 hover:shadow-lg hover:shadow-sky-100"
            >
              <span className="block text-sm font-black text-sky-700">
                {item.label}
              </span>
              <span className="mt-2 block break-words text-base font-bold">
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Section
        title="Projects"
        description="최근 프로젝트를 소개와 기술 스택 중심으로 정리했습니다."
      >
        <div className="overflow-hidden border-y border-zinc-200 bg-white/75">
          {resume.projects.map((project) => (
            <article
              key={`${project.period}-${project.title}`}
              className="group grid gap-8 border-b border-zinc-200 px-0 py-10 transition last:border-b-0 hover:bg-sky-50/60 sm:px-6 lg:grid-cols-[0.72fr_1.28fr]"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-sky-400 transition group-hover:scale-150" />
                  <p className="font-mono text-sm font-black text-sky-700">
                    {project.period}
                  </p>
                </div>
                <h3 className="mt-5 text-3xl font-black leading-tight text-zinc-950 sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-base font-bold text-zinc-600 sm:text-xl">
                  {project.meta}
                </p>
              </div>
              <div className="space-y-8">
                <div className="grid gap-3 sm:grid-cols-[7.5rem_1fr]">
                  <p className="text-sm font-black text-sky-700 sm:pt-1">
                    소개
                  </p>
                  <p className="text-base leading-8 text-zinc-700 sm:text-lg">
                    {project.description}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-[7.5rem_1fr]">
                  <p className="text-sm font-black text-sky-700 sm:pt-1">
                    Tech Stack
                  </p>
                  <TechStackList items={project.techStack} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Education"
        description="보안 학습과 실전 프로젝트 경험을 이어서 쌓고 있습니다."
      >
        <div className="overflow-hidden border-y border-zinc-200 bg-white/75">
          {resume.otherExperiences.map((item) => (
            <article
              key={item.title}
              className="grid gap-7 border-b border-zinc-200 px-0 py-10 last:border-b-0 sm:px-6 lg:grid-cols-[0.72fr_1.28fr]"
            >
              <div>
                <Period period={item.period} />
                <h3 className="mt-5 text-3xl font-black leading-tight text-zinc-950 sm:text-4xl">
                  {item.title}
                </h3>
              </div>
              <div className="space-y-4 text-base leading-8 text-zinc-700 sm:text-lg">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
          {resume.education.map((item) => (
            <article
              key={item.title}
              className="grid gap-7 border-b border-zinc-200 px-0 py-10 last:border-b-0 sm:px-6 lg:grid-cols-[0.72fr_1.28fr]"
            >
              <div>
                <Period period={item.period} />
                <h3 className="mt-5 text-3xl font-black leading-tight text-zinc-950 sm:text-4xl">
                  {item.title}
                </h3>
              </div>
              <p className="text-base leading-8 text-zinc-700 sm:text-lg">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Skills"
        description="보안 분석, 자동화, 커뮤니케이션을 하나의 작업 흐름으로 다룹니다."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {resume.skills.map((skill) => (
            <article
              key={skill.title}
              className="border-l-4 border-sky-400 bg-white p-6 shadow-sm"
            >
              <h3 className="text-2xl font-black text-zinc-950">
                {skill.title}
              </h3>
              <div className="mt-5">
                <BulletList items={skill.points} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Languages"
        description="업무와 학습에 활용할 수 있는 언어입니다."
      >
        <LanguageList languages={resume.languages} />
      </Section>
    </PageShell>
  );
}
