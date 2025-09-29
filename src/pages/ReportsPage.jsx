export default function ReportsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#202124] mb-8">التقارير</h1>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
