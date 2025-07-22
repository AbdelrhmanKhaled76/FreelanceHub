import type { ProjectSummary } from "../../interfaces/projects/projectSummary";

const Summary = () => {
  const projectsSummary: ProjectSummary[] = [
    {
      name: "total projects",
      value: 5,
      color: "text-blue-500",
    },
    {
      name: "completed",
      value: 1,
      color: "text-green-500",
    },
    {
      name: "in progress",
      value: 2,
      color: "text-orange-500",
    },
    {
      name: "total value",
      value: 34000,
      color: "text-gray-500",
    },
  ];
  return (
    <section className="w-full bg-white rounded-xl shadow-md p-5 my-5">
      <h2 className="capitalize font-semibold text-xl">project summary</h2>
      <div className="flex justify-between flex-col md:flex-row items-center gap-4">
        {projectsSummary.map((project, idx: number) => (
          <div className="flex flex-col gap-2 items-center p-5" key={idx}>
            <span className={`font-bold text-2xl ${project.color}`}>
              {project.value.toLocaleString()}
            </span>
            <span className="capitalize text-black/60 text-sm">
              {project.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Summary;
