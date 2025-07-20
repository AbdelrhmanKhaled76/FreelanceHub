import { CheckCircle, Clock, DollarSign, Folder } from "lucide-react";
import type { OverViewData } from "../interfaces/overviewData";
import OverViewCard from "../feature/overview/overviewCard";
import EarningCharts from "../feature/overview/EarningChart";
import CircularChart from "../feature/overview/circularChart";

function OverView() {
  const overviewData: OverViewData[] = [
    {
      title: "Total Earnings",
      quantity: "$12000",
      icon: DollarSign,
      compeltedFrom: "+12% from last month",
    },
    {
      title: "Total projects",
      quantity: "5",
      icon: Folder,
      compeltedFrom: "+2 new this month",
    },
    {
      title: "Completed Projects",
      quantity: "1",
      icon: CheckCircle,
      compeltedFrom: "2 completed this week",
    },
    {
      title: "Pending Tasks",
      quantity: "3",
      icon: Clock,
      compeltedFrom: "-1 from yesterday",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold">Overview</h1>
      <p className="text-black/60">
        Welcome back! Here's what's happening with your projects.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 py-5 w-full">
        {overviewData.map((data, idx) => (
          <OverViewCard data={data} key={idx} />
        ))}
      </section>
      <section className="grid lg:grid-cols-2 gap-5 w-full">
        <EarningCharts />
        <CircularChart />
      </section>
    </div>
  );
}

export default OverView;
