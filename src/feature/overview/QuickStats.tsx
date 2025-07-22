import type { QuickStatsType } from "../../interfaces/overview/QuickStats";

const QuickStats = () => {
  const quickStats: QuickStatsType[] = [
    {
      title: "Avg. Project Value",
      value: "$6,800",
    },
    {
      title: "Client Satisfaction",
      value: "98%",
    },
    {
      title: "On-time Delivery",
      value: "95%",
    },
    {
      title: "Active Clients",
      value: "8",
    },
  ];
  return (
    <div className="p-5 bg-white shadow-lg rounded-xl flex flex-col gap-4">
      <h3 className="text-xl font-semibold">Quick stats</h3>
      {quickStats.map((stat, idx: number) => (
        <div className="flex justify-between w-full" key={idx}>
          <p className="text-black/70 text-sm">{stat.title}</p>
          <span className="font-semibold ">{stat.value}</span>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
