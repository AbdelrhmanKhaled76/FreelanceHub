import type { OverViewData } from "../interfaces/overviewData";

const OverViewCard = ({ data }: { data: OverViewData }) => {
  const IconComponent = data.icon;
  const iconColoring = (data: { title: string }): string => {
    switch (data.title) {
      case "Total Earnings":
        return "bg-green-500";
      case "Total projects":
        return "bg-blue-500";
      case "Completed Projects":
        return "bg-purple-500";
      case "Pending Tasks":
        return "bg-orange-500";
      default:
        return "";
    }
  };
  return (
    <div className="p-5 bg-white shadow-sm  flex justify-between items-center gap-10 rounded-xl transition-shadow hover:shadow-lg duration-200 w-full">
      <div className="flex justify-between gap-2 flex-col">
        <p className="font-semibold capitalize text-sm">{data.title}</p>
        <h3 className="font-bold text-2xl">{data.quantity}</h3>
        <span className="text-sm text-green-500">{data.compeltedFrom}</span>
      </div>
      <IconComponent
        className={`rounded-xl w-12 h-12 p-3 text-2xl text-white ${iconColoring(
          data
        )}`}
      />
    </div>
  );
};

export default OverViewCard;
