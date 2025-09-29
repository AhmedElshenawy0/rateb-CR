import { Outlet } from "react-router-dom";
import Sidebar from "./components/Navbar";

export default function Layout() {
  return (
    <div className="flex" dir="rtl">
      <Sidebar />
      <main className="flex-1 pt-12 lg:pt-0 lg:mr-64 bg-gray-100 min-h-screen">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
