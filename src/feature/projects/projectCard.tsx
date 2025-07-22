import { Calendar, DollarSignIcon, User } from "lucide-react";
import type { Project } from "../../interfaces/projects/project";

const ProjectCard = ({ project }: { project: Project }) => {
  function getStateColor(state: string): string {
    switch (state) {
      case "in progress":
        return "text-blue-800 bg-blue-200";
      case "completed":
        return "text-green-800 bg-green-200";
      case "in review":
        return "text-yellow-800 bg-yellow-200";
      case "pending":
        return "text-gray-800 bg-gray-200";
      default:
        return "";
    }
  }
  return (
    <div className="p-5 bg-white transition-shadow duration-200 hover:shadow-xl shadow-md flex justify-between flex-col gap-4 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl">{project.title}</h3>
        <span
          className={`text-nowrap ${getStateColor(
            project.state.toLowerCase()
          )} rounded-2xl px-3 py-1 font-semibold text-xs flex justify-center items-center`}
        >
          {project.state}
        </span>
      </div>
      <div className="flex gap-2 text-black/60 items-center text-sm">
        <User className="w-4" />{" "}
        <span className="capitalize">{project.position}</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <p className="flex gap-2 text-black/60 items-center">
          <Calendar className="w-4" />{" "}
          <span>Due: {project.date.toDateString()}</span>
        </p>
        <p className="flex gap-2 text-black/60 items-center">
          <DollarSignIcon className="w-4" />{" "}
          <span>${project.salary.toLocaleString()}</span>
        </p>
      </div>
      <div className="flex justify-between items-center text-sm">
        <p className="text-black/60">Progress</p>
        <span className="font-semibold">{project.progress}%</span>
      </div>
      <div className="rounded-xl bg-gray-200 h-2 overflow-hidden flex">
        <span
          style={{ width: `${project.progress}%` }}
          className={`h-full bg-blue-500`}
        ></span>
      </div>
    </div>
  );
};

export default ProjectCard;
