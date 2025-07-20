import OverViewCard from "../components/overviewCard";

function OverView() {
  return (
    <div className="w-screen">
      <h1 className="text-2xl md:text-3xl font-bold">Overview</h1>
      <p className="text-black/60">
        Welcome back! Here's what's happening with your projects.
      </p>
      <OverViewCard />
    </div>
  );
}

export default OverView;
