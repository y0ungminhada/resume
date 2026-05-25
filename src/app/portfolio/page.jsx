import { contact, profile, projects } from "../data";
import {
  ContactSection,
  PageHero,
  PageShell,
  PortfolioOverview,
} from "../components";

export const metadata = {
  title: "Portfolio",
  description: ".",
};

export default function PortfolioPage() {
  return (
    <PageShell>
      <PageHero
        title="Projects"
        description="최신 프로젝트부터 과거 프로젝트까지, 문제 정의와 구현 흐름, 결과를 함께 볼 수 있게 정리했습니다."
      />
      <section className="py-16">
        <PortfolioOverview projects={projects} />
      </section>
    </PageShell>
  );
}
