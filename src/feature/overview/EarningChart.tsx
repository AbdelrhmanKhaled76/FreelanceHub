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
import type { EarningChartType } from "../../interfaces/earningChart";
import { useState } from "react";

const EarningCharts = () => {
  // salary , month
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
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={filteredData}
        className="bg-white p-5 rounded-xl shadow-md w-full "
        margin={{ top: 20 }}
        onClick={(data) => {
          const month = data.payload.month;
          setActiveMonths((prev) =>
            prev.includes(month)
              ? prev.filter((m) => m !== month)
              : [...prev, month]
          );
        }}
      >
        <XAxis
          dataKey="month"
          tick={(props) => {
            const { x, y, payload } = props;
            const month = payload.value;
            return (
              <text
                x={x}
                y={y + 15}
                textAnchor="middle"
                fill={activeMonths.includes(month) ? "#000" : "#aaa"}
                style={{ cursor: "pointer" }}
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
        <CartesianGrid stroke="#ccc" />
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
        />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Label position={"top"} value={"Monthly Earning"} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EarningCharts;
