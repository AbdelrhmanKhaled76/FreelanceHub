import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { EarningChartType } from "../../interfaces/overview/earningChart";
import { useState } from "react";

const EarningCharts = () => {
  const data: EarningChartType[] = [
    { salary: 8000, month: "Aug" },
    { salary: 12000, month: "Sep" },
    { salary: 9500, month: "Oct" },
    { salary: 15700, month: "Nov" },
    { salary: 11020, month: "Dec" },
    { salary: 13700, month: "Jan" },
  ];

  const [activeMonths, setActiveMonths] = useState<string[]>(
    data.map((d) => d.month)
  );

  const filteredData = data.map((d) =>
    activeMonths.includes(d.month) ? d : { ...d, salary: 0 }
  );

  return (
    <div className="bg-white p-5 rounded-xl shadow-md w-full h-full">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={filteredData} margin={{ top: 30 }}>
          <CartesianGrid stroke="#ccc" />
          <XAxis
            dataKey="month"
            tick={({ x, y, payload }) => {
              const month = payload.value;
              return (
                <text
                  x={x}
                  y={y + 15}
                  textAnchor="middle"
                  fill={activeMonths.includes(month) ? "#000" : "#aaa"}
                  className="cursor-pointer"
                  onClick={() => {
                    setActiveMonths((prev) =>
                      prev.includes(month)
                        ? prev.filter((m) => m !== month)
                        : [...prev, month]
                    );
                  }}
                >
                  {month}
                </text>
              );
            }}
          />
          <YAxis
            width="auto"
            dataKey="salary"
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Bar
            dataKey="salary"
            barSize={30}
            fill="#629BF8"
            radius={4}
            activeBar={false}
            onClick={(data) => {
              const month = data.payload.month;
              setActiveMonths((prev) =>
                prev.includes(month)
                  ? prev.filter((m) => m !== month)
                  : [...prev, month]
              );
            }}
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Label position={"top"} value={"Monthly Earnings"} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningCharts;
