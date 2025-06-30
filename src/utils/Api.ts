import { Project, saraProjects } from "@/assets/Projects";

export default async function getProjects(): Promise<Project[]> {
  // Return Sara's projects instead of fetching from external API
  return Promise.resolve(saraProjects);
}
