import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// === Icons ===
const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
);

const OrdersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    />
  </svg>
);

const CustomersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h7"
    />
  </svg>
);

const ReportsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

// === NavLink ===
const NavLink = ({ to, icon, children }) => {
  const location = useLocation();
  const isActive =
    location.pathname === to || (to === "/" && location.pathname === "/");
  const activeClass = "bg-[#FF6B00] text-white";
  const inactiveClass = "text-gray-300 hover:bg-gray-700 hover:text-white";
  return (
    <Link
      to={to}
      className={`flex items-center space-x-4 px-4 py-3 rounded-md transition-colors ${
        isActive ? activeClass : inactiveClass
      }`}
    >
      {icon}
      <span className="font-medium">{children}</span>
    </Link>
  );
};
const MenuToggleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
// === Sidebar ===
export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#202124] text-white flex flex-col fixed right-0">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold">الراتب</h2>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        <NavLink to="/" icon={<DashboardIcon />}>
          لوحة التحكم
        </NavLink>
        <NavLink to="/orders" icon={<OrdersIcon />}>
          الطلبات
        </NavLink>
        <NavLink to="/customers" icon={<CustomersIcon />}>
          العملاء
        </NavLink>
        <NavLink to="/menu" icon={<MenuIcon />}>
          المنيو
        </NavLink>
        <NavLink to="/reports" icon={<ReportsIcon />}>
          التقارير
        </NavLink>
      </nav>
    </aside>
  );
}

export const Header = () => {
  const [isOnline, setIsOnline] = useState(true);
  return (
    <header className="bg-white shadow-md p-4 flex justify-end items-center">
      <div className="flex items-center space-x-2">
        <span
          className={`text-sm font-medium ${
            isOnline ? "text-green-600" : "text-red-600"
          }`}
        >
          {isOnline ? "متصل (يقبل الطلبات)" : "غير متصل"}
        </span>
        <div
          onClick={() => setIsOnline(!isOnline)}
          className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${
            isOnline ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
              isOnline ? "-translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
      </div>
    </header>
  );
};
