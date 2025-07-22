import { PlusIcon } from "lucide-react";
import ProjectCard from "../feature/projects/projectCard";
import type { Project } from "../interfaces/projects/project";
import Summary from "../feature/projects/summary";

function Projects() {
  const Projects: Project[] = [
    {
      title: "E-commerce Website Redesign",
      date: new Date("8-10-2025"),
      position: "techcorp",
      progress: 65,
      salary: 8500,
      state: "in progress",
    },
    {
      title: "Mobile App UI/UX",
      date: new Date("1-20-2025"),
      position: "startup",
      progress: 100,
      salary: 12000,
      state: "completed",
    },
    {
      title: "Brand Identity Package",
      date: new Date("8-28-2025"),
      position: "creative agency",
      progress: 30,
      salary: 6500,
      state: "in progress",
    },
    {
      title: "WordPress Development",
      date: new Date("3-10-2025"),
      position: "local buisiness",
      progress: 0,
      salary: 4200,
      state: "in progress",
    },
    {
      title: "Logo Design",
      date: new Date("8-28-2020"),
      position: "tech startup",
      progress: 90,
      salary: 2800,
      state: "in review",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold capitalize">
            projects
          </h1>
          <p className="text-black/60">
            Manage and track all your client projects
          </p>
        </div>
        <button
          type="button"
          className="rounded-lg text-white bg-blue-700 px-3 py-2 flex gap-2 cursor-pointer transition-colors duration-200 hover:bg-blue-900"
        >
          <PlusIcon /> new project
        </button>
      </div>
      <div className="my-5 bg-white rounded-xl grid lg:grid-cols-2 xl:grid-cols-3 gap-5 p-5 shadow-md">
        {Projects.map((project, idx: number) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
      <Summary />
    </div>
  );
}

export default Projects;
