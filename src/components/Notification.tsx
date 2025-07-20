import { useState, type Dispatch } from "react";
import type { notification } from "../interfaces/notification";

function Notification({
  openNotifications,
}: {
  openNotifications: boolean;
  setOpenNotifications: Dispatch<boolean>;
}) {
  const [messages] = useState<notification[]>([
    {
      title: "profile",
      message: "profile updates recentely",
      date: new Date("8-12-2020"),
    },
    {
      title: "project",
      message: "graduation project is done",
      date: new Date("8-13-2021"),
    },
    {
      title: "payment",
      message: "paymen recieved",
      date: new Date("8-15-2022"),
    },
  ]);
  return (
    <div
      className={`${
        openNotifications ? "scale-100" : "scale-0"
      } overflow-hidden transition-transform duration-300 min-w-fit min-h-fit bg-white text-black font-medium capitalize text-sm absolute top-12 right-5 shadow-md rounded-xl flex justify-between flex-col items-start  z-30`}
    >
      {messages &&
        messages.map((notification, idx) => (
          <div
            key={idx}
            className="cursor-pointer hover:bg-gray-400/20 p-4 transition-colors duration-200 w-full"
          >
            <div className="flex items-center gap-2">
              <p
                className={`py-3 text-nowrap  font-bold text-md text-blue-600`}
              >
                {notification.title}
              </p>
              <span className="text-nowrap">
                {notification.date.toDateString()}
              </span>
            </div>
            <p className="text-sm font-normal text-black/70 text-nowrap">
              {notification.message.length <= 20
                ? notification.message
                : notification.message.slice(0, 40) + "..."}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Notification;
