import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import OverView from "./pages/OverView";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<OverView />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
