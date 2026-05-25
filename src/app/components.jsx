"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function ZoomableImage({ src, alt, className }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className ?? ""} cursor-pointer`}
        onClick={() => setOpen(true)}
      />
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/85 p-6"
        >
          <img
            src={src}
            alt={alt}
            className="max-h-full max-w-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}

const navItems = [
  { href: "/", label: "Home" },
  // { href: "/aboutme", label: "About Me" },
  { href: "/resume", label: "Resume" },
  { href: "/portfolio", label: "Portfolio" },
];

const sectionMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function PageShell({ children }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-5 sm:px-7 lg:px-10">
      <SiteNav />
      {children}
    </main>
  );
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-3 z-20 mb-10 flex flex-wrap items-center justify-between gap-4 border border-zinc-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
      <Link
        href="/"
        className="text-base font-black text-zinc-950 no-underline"
      >
        omin
      </Link>
      <div className="flex flex-wrap gap-2">
        {navItems.map((item) => {
          const active = isActivePath(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "rounded-lg px-3 py-2 text-sm font-bold no-underline transition",
                active
                  ? "bg-sky-500 text-white shadow-sm shadow-sky-200"
                  : "text-zinc-600 hover:bg-sky-50 hover:text-sky-700",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function AccentDot() {
  return <span className="text-sky-500">.</span>;
}

export function Period({ period }) {
  return (
    <span className="text-sm font-bold text-sky-700">
      <time dateTime={period.start.dateTime}>{period.start.label}</time>
      {period.end ? (
        <>
          {" - "}
          <time dateTime={period.end.dateTime}>{period.end.label}</time>
        </>
      ) : null}
      {period.current ? " - 현재" : null}
      {period.note ? ` ${period.note}` : null}
    </span>
  );
}

export function LinkButton({ href, children, variant = "primary" }) {
  const className =
    variant === "secondary"
      ? "rounded-lg border border-sky-200 bg-white px-5 py-3 text-sm font-black text-zinc-950 no-underline transition hover:border-sky-500 hover:text-sky-700"
      : "rounded-lg bg-zinc-950 px-5 py-3 text-sm font-black text-white no-underline transition hover:bg-sky-600 hover:text-white";

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function ExternalButton({ href, children }) {
  return (
    <a
      href={href}
      className="rounded-lg border border-sky-200 bg-white px-5 py-3 text-sm font-black text-zinc-950 no-underline transition hover:border-sky-500 hover:text-sky-700"
    >
      {children}
    </a>
  );
}

export function Pill({ children }) {
  return (
    <span className="rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-bold text-sky-800">
      {children}
    </span>
  );
}

function HeroDescription({ description }) {
  if (!description) {
    return null;
  }

  if (Array.isArray(description)) {
    return (
      <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8 text-zinc-700 sm:text-xl">
        {description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    );
  }

  return (
    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 sm:text-xl">
      {description}
    </p>
  );
}

function HeroTitle({ title }) {
  if (Array.isArray(title)) {
    return (
      <h1 className="max-w-4xl text-5xl font-black leading-[1.05] text-zinc-950 sm:text-7xl">
        {title.map((line, index) => (
          <span key={line} className="block">
            {line}
            {index === title.length - 1 ? <AccentDot /> : null}
          </span>
        ))}
      </h1>
    );
  }

  return (
    <h1 className="max-w-4xl text-5xl font-black leading-[1.05] text-zinc-950 sm:text-7xl">
      {title}
      <AccentDot />
    </h1>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  subtitleClassName = "mt-4 text-2xl font-bold text-zinc-600",
  description,
  actions,
  image,
  imageAlt,
  imageVariant = "wide",
  keywords = [],
  compact = false,
}) {
  const heroClassName = compact
    ? "grid min-h-[35vh] items-center gap-10  py-12 "
    : "grid min-h-[70vh] items-center gap-10  py-14 md:grid-cols-[1.1fr_0.9fr]";

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={heroClassName}
    >
      <div>
        {eyebrow ? (
          <p className="mb-5 font-mono text-sm font-black text-sky-700">
            {eyebrow}
          </p>
        ) : null}
        <HeroTitle title={title} />
        {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}
        <HeroDescription description={description} />
        {keywords.length > 0 ? (
          <div className="mt-7 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <Pill key={keyword}>{keyword}</Pill>
            ))}
          </div>
        ) : null}
        {actions ? (
          <div className="mt-9 flex flex-wrap gap-3">{actions}</div>
        ) : null}
      </div>
      {image ? (
        imageVariant === "portrait" ? (
          <HeroPortrait image={image} imageAlt={imageAlt} />
        ) : (
          <div className="relative">
            <div className="absolute -left-4 top-4 hidden h-full w-full border border-sky-200 bg-sky-50 md:block" />
            <img
              src={image}
              alt={imageAlt}
              className="relative aspect-[4/3] w-full rounded-lg border border-zinc-200 object-cover shadow-xl shadow-sky-100"
            />
          </div>
        )
      ) : null}
    </motion.section>
  );
}

function HeroPortrait({ image, imageAlt }) {
  return (
    <div className="flex justify-center md:justify-end">
      <div className="relative w-full max-w-[26rem] sm:max-w-[30rem]">
        <div className="absolute inset-x-8 top-1/2 h-px bg-sky-200" />
        <div className="absolute inset-y-8 left-1/2 w-px bg-sky-200" />
        <div className="absolute -inset-4 rounded-full border border-sky-100" />
        <div className="absolute -inset-8 hidden rounded-full border border-sky-50 sm:block" />
        <div className="relative aspect-square rounded-full border border-sky-200 bg-white p-3 shadow-2xl shadow-sky-100">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full rounded-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = "py-16 sm:py-20",
}) {
  return (
    <motion.section
      variants={sectionMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      <div className="mb-10 max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 font-mono text-sm font-black text-sky-700">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-4xl font-black leading-tight text-zinc-950 sm:text-6xl">
          {title}
          <AccentDot />
        </h2>
        {description ? (
          <p className="mt-4 text-lg leading-8 text-zinc-700">{description}</p>
        ) : null}
      </div>
      {children}
    </motion.section>
  );
}

export function BulletList({ items }) {
  return (
    <ul className="space-y-3 text-base leading-8 text-zinc-700">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:bg-sky-400"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function IntroSection({ introductions }) {
  return (
    <Section
      title="보안을 시스템으로 만드는 방식"
      description="분석에서 끝나지 않고, 반복 가능한 탐지와 자동화 흐름으로 바꾸는 데 집중합니다."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {introductions.map((intro) => (
          <article
            key={intro.title}
            className="border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100"
          >
            <h3 className="text-2xl font-black leading-snug text-zinc-950">
              {intro.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-zinc-700">
              {intro.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function FeaturedProjects({ projects }) {
  return (
    <Section
      title="Featured Projects"
      description="최근 프로젝트를 제품 랜딩 페이지처럼 훑어볼 수 있게 정리했습니다."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

export function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group overflow-hidden border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100"
    >
      <Link href={`/portfolio/${project.slug}`} className="block no-underline">
        <img
          src={project.coverImage}
          alt={`${project.title} project visual`}
          className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <Period period={project.period} />
            {project.achievements?.[0] ? (
              <span className="rounded-lg bg-sky-50 px-3 py-1 text-xs font-black text-sky-800">
                {project.achievements[0]}
              </span>
            ) : null}
          </div>
          <h3 className="text-3xl font-black text-zinc-950">
            {project.title}
            <AccentDot />
          </h3>
          <p className="mt-2 font-bold text-zinc-600">{project.role}</p>
          <p className="mt-4 text-base leading-8 text-zinc-700">
            {project.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
          <p className="mt-6 font-black text-sky-700">View case study</p>
        </div>
      </Link>
    </motion.article>
  );
}

export function AboutProfile({ skills, education, otherExperiences }) {
  return (
    <>
      <Section
        title="Core Strength"
        description="보안 분석, 자동화, 커뮤니케이션을 하나의 작업 흐름으로 다룹니다."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((skill) => (
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
        title="Education"
        description="보안 학습과 실전 프로젝트 경험을 이어서 쌓고 있습니다."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.title}
              className="border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <Period period={item.period} />
              <h3 className="mt-3 text-2xl font-black text-zinc-950">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-zinc-700">
                {item.body}
              </p>
            </article>
          ))}
          {otherExperiences.map((item) => (
            <article
              key={item.title}
              className="border border-zinc-200 bg-sky-50 p-6 shadow-sm"
            >
              <Period period={item.period} />
              <h3 className="mt-3 text-2xl font-black text-zinc-950">
                {item.title}
              </h3>
              <div className="mt-4 space-y-4 text-base leading-8 text-zinc-700">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

export function ContactSection({ contact }) {
  return (
    <Section
      title="Contact"
      description="프로젝트, 보안 리서치, Web3 보안 자동화에 대해 이야기할 수 있습니다."
    >
      <div className="grid gap-4 border-t border-zinc-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {contact.map((item) => (
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
  );
}

export function PortfolioOverview({ projects }) {
  return (
    <div className="space-y-16">
      {projects.map((project, index) => (
        <ProjectCaseStudy key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}

export function ProjectCaseStudy({ project, index = 0 }) {
  return (
    <motion.article
      id={project.slug}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="scroll-mt-28 border-b border-zinc-200 pb-16"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Period period={project.period} />
          <h2 className="mt-4 text-4xl font-black leading-tight text-zinc-950 sm:text-5xl">
            {project.title}
            <AccentDot />
          </h2>
          <p className="mt-3 text-lg font-bold text-zinc-600">{project.role}</p>
          <p className="mt-5 text-lg leading-8 text-zinc-700">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
          <div className="mt-7">
            <LinkButton href={`/portfolio/${project.slug}`} variant="secondary">
              개별 페이지로 보기
            </LinkButton>
          </div>
        </div>
        <div className="space-y-8">
          <ProjectGallery project={project} />
          <ProjectDetailBlocks project={project} compact />
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectGallery({ project }) {
  if (!project.media?.length) {
    return null;
  }
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {project.media.map((image, index) => (
        <figure
          key={`${project.slug}-${image.src}`}
          className={index === 0 ? "md:col-span-2" : undefined}
        >
          <ZoomableImage
            src={image.src}
            alt={image.alt}
            className="aspect-[16/9] w-full rounded-lg border border-zinc-200 object-cover shadow-sm"
          />
          <figcaption className="mt-2 text-sm font-medium leading-6 text-zinc-500">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ProjectDetailBlocks({ project, compact = false }) {
  const { details } = project;

  return (
    <div className="space-y-8">
      <DetailBlock title="Overview" body={details.overview} />
      <DetailBlock title="Problem" body={details.problem} />
      <DetailBlock title="My Contribution">
        <BulletList items={details.contributions} />
      </DetailBlock>
      <div>
        <h3 className="mb-4 text-2xl font-black text-zinc-950">
          Implementation Details
          <AccentDot />
        </h3>
        {details.implementation[0]?.section ? (
          <div className="space-y-8">
            {details.implementation.map((section) => (
              <div key={section.section}>
                <h4 className="text-xl font-black text-zinc-950">
                  {section.section}
                </h4>
                {section.image ? (
                  <figure className="mt-4">
                    <ZoomableImage
                      src={section.image.src}
                      alt={section.image.alt}
                      className="w-full border border-zinc-200"
                    />
                    {section.image.caption ? (
                      <figcaption className="mt-2 text-sm text-zinc-500">
                        {section.image.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ) : null}
                {section.body ? (
                  <div className="mt-4 space-y-3">
                    {section.body.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="text-base leading-7 text-zinc-700"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                ) : null}
                {section.code ? (
                  <pre className="mt-4 overflow-x-auto rounded border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm leading-6 text-zinc-800">
                    {section.code}
                  </pre>
                ) : null}
                {section.items ? (
                  <div className="mt-4 space-y-5">
                    {section.items.map((item) => (
                      <div key={item.title}>
                        <h5 className="text-lg font-black text-zinc-950">
                          {item.title}
                        </h5>
                        <p className="mt-2 text-base leading-7 text-zinc-700">
                          {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
                {section.bodyAfter ? (
                  <div className="mt-4 space-y-3">
                    {section.bodyAfter.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="text-base leading-7 text-zinc-700"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                ) : null}
                {section.images?.length ? (
                  <div
                    className={`mt-4 grid gap-4 ${
                      section.images.length > 1 ? "md:grid-cols-2" : ""
                    }`}
                  >
                    {section.images.map((img) => (
                      <figure key={img.src}>
                        <ZoomableImage
                          src={img.src}
                          alt={img.alt}
                          className="w-full border border-zinc-200"
                        />
                        {img.caption ? (
                          <figcaption className="mt-2 text-sm text-zinc-500">
                            {img.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {details.implementation.map((item) => (
              <article
                key={item.title}
                className="border border-zinc-200 bg-white p-5"
              >
                <h4 className="text-lg font-black text-zinc-950">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
      <DetailBlock title="Tech Stack">
        <div className="flex flex-wrap gap-2">
          {details.techStack.map((item) => (
            <Pill key={item}>{item}</Pill>
          ))}
        </div>
        {details.techStackNote ? (
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            {details.techStackNote}
          </p>
        ) : null}
      </DetailBlock>
      <DetailBlock title="Result / Impact" body={details.result} />
      {!compact ? (
        <DetailBlock title="Retrospective" body={details.retrospective} />
      ) : null}
    </div>
  );
}

export function DetailBlock({ title, body, children }) {
  return (
    <section className="border-t border-zinc-200 pt-5">
      <h3 className="text-2xl font-black text-zinc-950">
        {title}
        <AccentDot />
      </h3>
      {body ? (
        <div className="mt-3 space-y-3">
          {body.split("\n\n").map((para, i) => (
            <p key={i} className="text-base leading-8 text-zinc-700">
              {para}
            </p>
          ))}
        </div>
      ) : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}

export function ProjectDetailView({ project }) {
  return (
    <PageShell>
      <div className="mb-8">
        <Link
          href="/portfolio"
          className="font-black text-sky-700 no-underline hover:text-sky-600"
        >
          Back to Portfolio
        </Link>
      </div>
      <PageHero
        title={project.title}
        description={project.summary}
        image={project.coverImage}
        imageAlt={`${project.title} visual`}
        keywords={project.tags}
      />
      {project.media?.length ? (
        <section className="py-16">
          <ProjectGallery project={project} />
        </section>
      ) : null}
      <section className="pb-20">
        <ProjectDetailBlocks project={project} />
      </section>
    </PageShell>
  );
}
