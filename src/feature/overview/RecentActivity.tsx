import { CheckCircle, DollarSign, File, MessageCircle } from "lucide-react";
import type { RecentActivities } from "../../interfaces/overview/RecentActivities";

const RecentActivity = () => {
  const RecentActivities: RecentActivities[] = [
    {
      icon: CheckCircle,
      color: "text-blue-500",
      title: "Completed wireframes for E-commerce project",
      time: "2 hours ago",
    },
    {
      icon: CheckCircle,
      color: "text-green-500",
      title: "Client approved Mobile App designs",
      time: "5 hours ago",
    },
    {
      icon: File,
      color: "text-purple-500",
      title: "Invoice sent to Creative Agency",
      time: "1 day ago",
    },
    {
      icon: MessageCircle,
      color: "text-orange-500",
      title: "New project inquiry from Local Business",
      time: "2 days ago",
    },
    {
      icon: DollarSign,
      color: "text-green-500",
      title: "Payment received from TechCorp",
      time: "3 days ago",
    },
  ];
  return (
    <div className="p-5 flex justify-between flex-col bg-white  rounded-xl w-full shadow-xl gap-4 lg:col-span-2">
      <h2 className="capitalize font-semibold text-lg">recent activity</h2>
      {RecentActivities.map((activity, idx: number) => (
        <div key={idx}>
          <div className="flex gap-3 items-center">
            <activity.icon className={`${activity.color} text-xs`} />
            <div className="flex flex-col gap-3">
              <p className="text-sm">{activity.title}</p>
              <span className="text-xs text-black/60">{activity.time}</span>
            </div>
          </div>
        </div>
      ))}
      <p className="text-center text-blue-700 cursor-pointer font-semibold">
        view all activities
      </p>
    </div>
  );
};

export default RecentActivity;
