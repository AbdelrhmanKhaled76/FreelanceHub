import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { ProjectStatus } from "../../interfaces/projectStatus";

const CircularChart = () => {
  const data: ProjectStatus[] = [
    {
      name: "completed",
      value: 2,
    },
    {
      name: "pending",
      value: 1,
    },
    {
      name: "In Review",
      value: 1,
    },
    {
      name: "In Progress",
      value: 2,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart
        className="p-5 bg-white rounded-xl shadow-md w-full"
      >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={["#0088FE", "#00C49F", "#FFBB28", "#6B7280"][index % 4]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CircularChart;
