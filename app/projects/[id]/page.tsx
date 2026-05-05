import { projects } from "@/data/projects";
import ProjectClient from "./ProjectClient";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find(
    (p) => p.id.toLowerCase() === id.toLowerCase()
  );

  return <ProjectClient project={project} />;
}