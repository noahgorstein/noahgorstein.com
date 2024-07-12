import { fetchStars } from "../helpers/github";
import GitHubRepoLink from "./GitHubRepoLink";
import React from "react";

type Project = {
  slug: any;
  title: string;
  description?: string;
  stars?: number;
};

type ProjectGridProps = {
  projects: Project[];
};

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
}: ProjectGridProps) => {
  const githubUsername = "noahgorstein";
  const [projectData, setProjectData] = React.useState<Project[]>([]);
  const compareStars = (a: Project, b: Project) => {
    return (b.stars ?? 0) - (a.stars ?? 0);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        projects.map(async (p) => {
          const stars = await fetchStars(`${githubUsername}/${p.title}`);
          return { ...p, stars };
        })
      );
      setProjectData(data.sort(compareStars));
    };
    fetchData();
  }, []);

  return (
    <section className="grid grid-cols-12">
      <div className="md:col-span-2"></div>
      <ul className="col-span-12 mt-4 flex flex-wrap items-stretch justify-between gap-8 md:col-span-8 md:grid-cols-3">
        {projectData.map((project) => (
          <li
            key={project.title}
            className="group flex basis-full flex-col gap-8 rounded-xl border-2 border-foreground px-4 py-4 transition-colors hover:border-emerald md:col-span-1 md:basis-[calc(50%-3rem)] lg:basis-[calc(33.33%-3rem)]"
          >
            <a
              className="flex flex-col gap-4"
              href={`/projects/${project.slug}`}
            >
              <span className="mt-4 text-lg font-bold decoration-2 underline-offset-4 group-hover:underline">
                {project.title}
              </span>
              <p className="text-sm group-hover:underline">
                {project.description}{" "}
              </p>
            </a>
            <GitHubRepoLink repo={project.title} stars={project.stars ?? 0} />
          </li>
        ))}
      </ul>
      <div className="md:col-span-2"></div>
    </section>
  );
};

export default ProjectGrid;
