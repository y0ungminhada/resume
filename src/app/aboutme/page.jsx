import {
  contact,
  education,
  introductions,
  otherExperiences,
  profile,
  projects,
  skills,
} from "../data";
import {
  AboutProfile,
  ContactSection,
  IntroSection,
  PageHero,
  PageShell,
} from "../components";

export const metadata = {
  title: "About Me - 박영민",
  description: "Security Engineer 박영민의 자기소개, 역량, 교육 이력입니다.",
};

export default function AboutMePage() {
  return (
    <PageShell>
      <PageHero
        title="취약점을 시스템으로 바꾸는 사람"
        description="보안 분석 결과를 실제 동작하는 탐지와 자동화 시스템으로 구현하고, 학습한 내용을 팀과 생태계에 공유합니다."
        image={projects[3].coverImage}
        imageAlt={`${profile.name} security engineering visual`}
        keywords={profile.keywords}
      />
      <IntroSection introductions={introductions} />
      <AboutProfile
        skills={skills}
        education={education}
        otherExperiences={otherExperiences}
      />
      <ContactSection contact={contact} />
    </PageShell>
  );
}
