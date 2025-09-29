import { useState } from "react";
import { shiftHistoryData } from "../dummyData";

export default function FinancialsPage() {
  const [isShiftActive, setIsShiftActive] = useState(false);

  const ShiftInProgress = () => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-[#202124] mb-4">
            تفاصيل الوردية الحالية
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-600">
            <p>
              <strong>الكاشير:</strong> المدير
            </p>
            <p>
              <strong>وقت البدء:</strong> ١٠:٣٠ ص
            </p>
            <p>
              <strong>رصيد البداية:</strong> ٢٠٠.٠٠ ج.م
            </p>
            <p className="text-green-600">
              <strong>إجمالي مبيعات الكاش:</strong> ٨٥٤.٥٠ ج.م
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsShiftActive(false)}
          className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition-colors"
        >
          إغلاق الوردية
        </button>
      </div>
    </div>
  );

  const NoActiveShift = () => (
    <div className="text-center py-20 bg-white rounded-lg shadow-md mb-8">
      <p className="text-xl text-gray-500 mb-6">
        لا توجد وردية نشطة. افتح وردية جديدة لبدء المبيعات.
      </p>
      <button
        onClick={() => setIsShiftActive(true)}
        className="bg-[#FF6B00] text-white py-4 px-10 rounded-md hover:opacity-90 transition-opacity text-lg font-semibold"
      >
        فتح وردية جديدة
      </button>
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#202124] mb-8">
        المالية والورديات
      </h1>
      {isShiftActive ? <ShiftInProgress /> : <NoActiveShift />}

      <h2 className="text-2xl font-semibold text-[#202124] mb-4">
        سجل الورديات
      </h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-right text-sm font-bold text-gray-600 uppercase">
                رقم الوردية
              </th>
              <th className="py-3 px-6 text-right text-sm font-bold text-gray-600 uppercase">
                الكاشير
              </th>
              <th className="py-3 px-6 text-right text-sm font-bold text-gray-600 uppercase">
                وقت البدء
              </th>
              <th className="py-3 px-6 text-right text-sm font-bold text-gray-600 uppercase">
                وقت الانتهاء
              </th>
              <th className="py-3 px-6 text-right text-sm font-bold text-gray-600 uppercase">
                الفرق
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {shiftHistoryData.map((shift) => (
              <tr key={shift.id} className="hover:bg-gray-50">
                <td className="py-4 px-6">{shift.id}</td>
                <td className="py-4 px-6">{shift.cashier}</td>
                <td className="py-4 px-6">{shift.startTime}</td>
                <td className="py-4 px-6">{shift.endTime}</td>
                <td
                  className={`py-4 px-6 font-medium ${
                    shift.variance.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {shift.variance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
