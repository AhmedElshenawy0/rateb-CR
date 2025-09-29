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

const FinancialsIcon = () => (
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
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"
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
const NavLink = ({ to, icon, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const activeClass = "bg-[#FF6B00] text-white";
  const inactiveClass = "text-gray-300 hover:bg-gray-700 hover:text-white";

  return (
    <Link
      to={to}
      onClick={onClick}
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* زرار الهامبورجر يظهر بس في الموبايل */}
      <button
        className={`md:hidden fixed top-20  right-4 z-50 bg-[#202124] p-2 rounded-md text-white ${
          isOpen ? "hidden" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuToggleIcon />
      </button>

      {/* Sidebar */}
      <aside
        className={` pt-12 fixed top-0 right-0 h-screen w-64 bg-[#202124] text-white flex flex-col transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"} 
        md:translate-x-0`}
      >
        <div className="px-6 py-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold">الراتب</h2>
          {/* زر إغلاق يظهر فقط في الموبايل */}
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            ✖
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            icon={<DashboardIcon />}
          >
            لوحة التحكم
          </NavLink>
          <NavLink
            to="/orders"
            onClick={() => setIsOpen(false)}
            icon={<OrdersIcon />}
          >
            الطلبات
          </NavLink>
          <NavLink
            to="/customers"
            onClick={() => setIsOpen(false)}
            icon={<CustomersIcon />}
          >
            العملاء
          </NavLink>
          <NavLink
            to="/menu"
            onClick={() => setIsOpen(false)}
            icon={<MenuIcon />}
          >
            المنيو
          </NavLink>
          <NavLink
            to="/financials"
            onClick={() => setIsOpen(false)}
            icon={<FinancialsIcon />}
          >
            المالية
          </NavLink>
          <NavLink
            to="/reports"
            onClick={() => setIsOpen(false)}
            icon={<ReportsIcon />}
          >
            التقارير
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
