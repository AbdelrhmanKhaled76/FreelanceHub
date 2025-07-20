import { Folder, Layout, Menu, User } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

function Sidebar() {
  const [openSideBar, setOpenSideBar] = useState<boolean>(true);
  return (
    <aside
      className={`${
        openSideBar ? "w-72" : "w-20"
      } transition-all duration-200 bg-white shadow-md sticky top-0 left-0 overflow-hidden z-20`}
    >
      <div>
        <p
          tabIndex={-1}
          className="flex justify-between w-full font-bold text-lg cursor-pointer px-5 my-5"
          onClick={() => setOpenSideBar((prev) => !prev)}
        >
          {openSideBar ? "FreelanceHub" : ""}
          <Menu className={`${openSideBar ? "" : "mx-auto"}`} />
        </p>
        <hr className="text-black/10" />
        <NavLink
          to={"/"}
          className={({ isActive }: { isActive: boolean }): string =>
            `${
              isActive ? "bg-blue-400/20 text-blue-600 border-r-2" : ""
            }  px-3 py-2 rounded-xl flex gap-3 text-black/60 transition-colors duration-200 mx-5 my-3`
          }
        >
          <Layout />
          <span
            className={`${
              openSideBar ? "inline" : "hidden"
            } capitalize font-semibold`}
          >
            overview
          </span>
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }: { isActive: boolean }): string =>
            `${
              isActive ? "bg-blue-400/20 text-blue-600 border-r-2" : ""
            }  px-3 py-2 rounded-xl flex gap-3 text-black/60 transition-colors duration-200 mx-5 my-3`
          }
        >
          <Folder />
          <span
            className={`${
              openSideBar ? "inline" : "hidden"
            } capitalize font-semibold`}
          >
            projects
          </span>
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }: { isActive: boolean }): string =>
            `${
              isActive ? "bg-blue-400/20 text-blue-600 border-r-2" : ""
            }  px-3 py-2 rounded-xl flex gap-3 text-black/60 transition-colors duration-200 mx-5 my-3`
          }
        >
          <User />
          <span
            className={`${
              openSideBar ? "inline" : "hidden"
            } capitalize font-semibold`}
          >
            profile
          </span>
        </NavLink>
        <div className="pt-3 absolute bottom-0 left-0 my-3 border-t border-black/10 w-full">
          <div
            className={`${
              openSideBar ? "mx-3 gap-3" : "justify-center"
            }  flex items-center`}
          >
            <figure className="w-8 h-8 rounded-full bg-blue-500 text-white flex justify-center items-center uppercase font-semibold">
              jd
            </figure>
            <article className={openSideBar ? "block" : "hidden"}>
              <p className="font-semibold capitalize text-sm">john doe</p>
              <span className="capitalize text-black/60 text-xs ">
                freelancer
              </span>
            </article>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
