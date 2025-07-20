import { DollarSign } from "lucide-react";

const OverViewCard = () => {
  return (
    <div className="p-5 bg-white shadow-sm w-fit flex justify-between items-center gap-10 rounded-xl transition-shadow hover:shadow-lg duration-200">
      <div className="flex justify-between gap-2 flex-col">
        <p className="font-semibold capitalize text-sm">total earnings</p>
        <h3 className="font-bold text-2xl">$12,000</h3>
        <span className="text-sm text-green-500">+12% from last month</span>
      </div>
      <DollarSign className="rounded w-12 h-12 p-3 text-2xl text-white bg-green-500" />
    </div>
  );
};

export default OverViewCard;
