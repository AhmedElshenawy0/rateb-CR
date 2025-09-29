import { customersData } from "../dummyData";

export default function CustomersPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#202124]">العملاء</h1>
        <button className="bg-[#FF6B00] text-white py-2 px-6 rounded-md hover:opacity-90 transition-opacity">
          إضافة عميل جديد
        </button>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="ابحث عن عميل..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
        />
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-right text-sm font-bold text-gray-600 uppercase">
                الاسم
              </th>
              <th className="py-3 px-6 text-right text-sm font-bold text-gray-600 uppercase">
                رقم الهاتف
              </th>
              <th className="py-3 px-6 text-right text-sm font-bold text-gray-600 uppercase">
                إجمالي الطلبات
              </th>
              <th className="py-3 px-6 text-right text-sm font-bold text-gray-600 uppercase">
                آخر طلب
              </th>
              <th className="py-3 px-6 text-right text-sm font-bold text-gray-600 uppercase">
                إجراءات
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customersData.map((customer, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-4 px-6">{customer.name}</td>
                <td className="py-4 px-6">{customer.phone}</td>
                <td className="py-4 px-6">{customer.totalOrders}</td>
                <td className="py-4 px-6">{customer.lastOrder}</td>
                <td className="py-4 px-6">
                  <button className="bg-gray-600 text-white py-1 px-4 rounded-md hover:bg-gray-700 transition-colors">
                    عرض
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
