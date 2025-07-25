import { Outlet } from "react-router";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

function MainLayout() {
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Nav />
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
