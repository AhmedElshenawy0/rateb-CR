import { ordersData } from "../dummyData";

const OrderCard = ({ order, status }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="font-bold text-lg text-[#202124]">{order.id}</span>
      <span className="text-gray-600">{order.price}</span>
    </div>
    <p className="text-gray-500 mb-4">{order.customer}</p>
    {status === "new" && (
      <div className="flex space-x-2">
        <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
          قبول
        </button>
        <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
          رفض
        </button>
      </div>
    )}
  </div>
);

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#202124] mb-8">إدارة الطلبات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-4 text-[#202124]">طلبات جديدة</h2>
          {ordersData.new.map((order) => (
            <OrderCard key={order.id} order={order} status="new" />
          ))}
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-4 text-[#202124]">قيد التحضير</h2>
          {ordersData.preparation.map((order) => (
            <OrderCard key={order.id} order={order} status="preparation" />
          ))}
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-4 text-[#202124]">خرج للتوصيل</h2>
          {ordersData.delivery.map((order) => (
            <OrderCard key={order.id} order={order} status="delivery" />
          ))}
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-4 text-[#202124]">مكتمل</h2>
          {ordersData.completed.map((order) => (
            <OrderCard key={order.id} order={order} status="completed" />
          ))}
        </div>
      </div>
    </div>
  );
}
