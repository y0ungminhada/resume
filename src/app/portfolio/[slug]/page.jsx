import { notFound } from "next/navigation";
import { ProjectDetailView } from "../../components";
import { projects } from "../../data";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - 박영민 Portfolio`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
