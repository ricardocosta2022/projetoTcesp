import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopbarHeader from "./TopbarHeader";

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <TopbarHeader />
        <Outlet />
      </div>
    </div>
  );
}
