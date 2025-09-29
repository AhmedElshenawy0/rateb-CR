import { Outlet } from "react-router-dom";
import Sidebar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function Layout() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // يحدث كل ثانية

    return () => clearInterval(timer); // تنظيف عند إزالة الكومبوننت
  }, []);
  return (
    <div className="flex" dir="rtl">
      <div className="flex justify-between items-center bg-[#202124] py-2 px-10 fixed top-0 right-0 w-full z-50">
        <div className="flex gap-4 items-center">
          <img
            src="/icon-7797704_640.png"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="text-white">
            <h3>علاء الشربيني</h3>
            <p>{time.toLocaleTimeString("ar-EG")}</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <p className="w-8 h-8 flex justify-center items-center rounded-full bg-amber-500 ">
              7
            </p>
            <p className="text-white">جديد</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-8 h-8 flex justify-center items-center rounded-full bg-amber-500">
              4
            </p>
            <p className="text-white">قيد التحضير</p>
          </div>
        </div>
      </div>
      <Sidebar />
      <main className="flex-1 pt-24 lg:pt-12 lg:mr-64 bg-gray-100 min-h-screen">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
