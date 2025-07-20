import { BellDot } from "lucide-react";
import Notification from "../components/Notification";
import { useState } from "react";

function Nav() {
  const [openNotifications, setOpenNotifications] = useState<boolean>(false);
  return (
    <nav className="py-6 px-5 bg-white shadow-md w-full sticky top-0 left-0 z-10 flex justify-between items-center ">
      <p className="capitalize font-bold text-2xl">dashboard</p>
      <div className="relative">
        <button
          onClick={() => setOpenNotifications((prev) => !prev)}
          type="button"
          className="cursor-pointer transition-colors duration-200 hover:bg-red-500/30 flex gap-3 font-bold text-red-500 relative p-3 bg-red-300/30 rounded-full"
        >
          <span className="absolute -top-2 right-0 h-5 w-5 bg-red-500 rounded-full text-white flex justify-center items-center">
            3
          </span>
          <BellDot />
        </button>
        <Notification
          openNotifications={openNotifications}
          setOpenNotifications={setOpenNotifications}
        />
      </div>
    </nav>
  );
}

export default Nav;
