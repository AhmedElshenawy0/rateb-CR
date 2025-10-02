import { branches, performanceKpiData } from "../dummyData";

const TrendUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

const TrendDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 17l5-5m0 0l-5-5m5 5H6"
    />
  </svg>
);
const PerformanceKpiCard = ({ title, value, trend, trendDirection }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-sm text-gray-500 mb-2">{title}</p>
    <p className="text-3xl font-bold text-[#202124] mb-3">{value}</p>
    <div
      className={`flex items-center text-sm ${
        trendDirection === "up" ? "text-red-500" : "text-green-600"
      }`}
    >
      {trendDirection === "up" ? <TrendUpIcon /> : <TrendDownIcon />}
      <span className="mr-1">{trend}</span>
    </div>
  </div>
);

export default function ReportsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#202124] mb-8">تقارير الأداء</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-[#202124] mb-4">فلاتر</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              تاريخ البدء
            </label>
            <input
              type="date"
              id="startDate"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              تاريخ الانتهاء
            </label>
            <input
              type="date"
              id="endDate"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="branchFilter"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              الفرع
            </label>
            <select
              id="branchFilter"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option>كل الفروع</option>
              {branches.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="reportType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              نوع التقرير
            </label>
            <select
              id="reportType"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option>ملخص المبيعات</option>
              <option>نشاط العملاء</option>
              <option>أداء المنتجات</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {performanceKpiData.map((kpi, index) => (
          <PerformanceKpiCard key={index} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#202124] mb-4">
            اتجاه المبيعات
          </h3>
          <div className="h-64 bg-gray-100 flex items-center justify-center rounded-md">
            <p className="text-gray-500">[مكان الرسم البياني الخطي]</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-[#202124] mb-4">
            الأقسام الأكثر مبيعاً
          </h3>
          <div className="h-64 bg-gray-100 flex items-center justify-center rounded-md">
            <p className="text-gray-500">[مكان الرسم البياني الدائري]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
