import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const initialData = [
  { name: "Completed", value: 30, color: "#00C49F" },
  { name: "In Progress", value: 40, color: "#0088FE" },
  { name: "Pending", value: 20, color: "#888888" },
  { name: "In Review", value: 10, color: "#FFBB28" },
];

const ProjectStatusChart = () => {
  // keep track of which labels are active
  const [activeLabels, setActiveLabels] = useState(
    initialData.map((item) => item.name)
  );

  const handleLegendClick = (labelName: string) => {
    setActiveLabels((prev) =>
      prev.includes(labelName)
        ? prev.filter((name) => name !== labelName)
        : [...prev, labelName]
    );
  };

  // filter data based on active labels
  const filteredData = initialData.filter((item) =>
    activeLabels.includes(item.name)
  );

  return (
    <div className="text-center bg-white p-5 rounded-xl shadow-lg">
      <h4>Project Status</h4>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={filteredData}
            dataKey="value"
            nameKey="name"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={3}
            label
          >
            {filteredData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Custom legend below the chart */}
      <div className="flex justify-center flex-wrap mt-2">
        {initialData.map((item) => (
          <div
            key={item.name}
            onClick={() => handleLegendClick(item.name)}
            className="flex justify-center cursor-pointer mx-4 items-center"
          >
            <div
              style={{
                width: 12,
                height: 12,
                backgroundColor: item.color,
                marginRight: 5,
                borderRadius: "50%",
              }}
            />
            <span style={{ fontSize: 14 }}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStatusChart;
