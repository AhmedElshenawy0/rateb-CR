import { useState } from "react";
import { branches, ordersData } from "../dummyData";

const OrderCard = ({ order, status, onCardClick }) => (
  <div
    onClick={() => onCardClick(order)}
    className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer hover:shadow-lg transition-shadow"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="font-bold text-lg text-[#202124]">{order.id}</span>
      <span className="text-gray-500 text-sm">{order.items} أصناف</span>
    </div>
    <p className="text-gray-600 mb-4">{order.customer}</p>
    {status === "new" && (
      <div className="flex space-x-2">
        <button
          onClick={(e) => e.stopPropagation()}
          className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
          قبول
        </button>
        <button
          onClick={(e) => e.stopPropagation()}
          className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
        >
          رفض
        </button>
      </div>
    )}
    {status === "delivery" && (
      <button
        onClick={(e) => e.stopPropagation()}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors text-sm"
      >
        إرسال رابط التأكيد للسائق
      </button>
    )}
  </div>
);

const OrderDetailsModal = ({ order, onClose }) => {
  if (!order) return null;
  const calculateDuration = (start, end) => {
    if (!start || !end) return "-";
    const startTime = parseInt(start.split(":")[1]);
    const endTime = parseInt(end.split(":")[1]);
    let diff = Math.abs(endTime - startTime);
    if (start.includes("11") && end.includes("12")) diff += 60;
    return `${diff} دقيقة`;
  };
  const timeline = order.details.timeline;
  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 border-b pb-3">
          <h2 className="text-2xl font-bold text-[#202124]">
            تفاصيل الطلب {order.id}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">بيانات العميل</h3>
          <p className="text-gray-700">
            <strong>الاسم:</strong> {order.customer}
          </p>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">الأصناف المطلوبة</h3>
          <ul className="list-disc list-inside bg-gray-50 p-3 rounded-md">
            {order.details.items.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">الجدول الزمني للطلب</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>وقت استلام الطلب:</span> <strong>{timeline.placed}</strong>
            </li>
            <li className="flex justify-between items-center">
              <span>وقت قبول الكاشير:</span>
              <div>
                {timeline.accepted && (
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">
                    المدة:{" "}
                    {calculateDuration(timeline.placed, timeline.accepted)}
                  </span>
                )}
                <strong>{timeline.accepted || "-"}</strong>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>وقت جاهزية التوصيل:</span>
              <div>
                {timeline.ready && (
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">
                    مدة التحضير:{" "}
                    {calculateDuration(timeline.accepted, timeline.ready)}
                  </span>
                )}
                <strong>{timeline.ready || "-"}</strong>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span>وقت التوصيل:</span>
              <div>
                {timeline.delivered && (
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">
                    مدة التوصيل:{" "}
                    {calculateDuration(timeline.ready, timeline.delivered)}
                  </span>
                )}
                <strong>{timeline.delivered || "-"}</strong>
              </div>
            </li>
            <li className="flex justify-between pt-3 border-t mt-3">
              <span className="font-bold">إجمالي وقت الطلب:</span>
              <strong className="text-brand-orange">
                {timeline.delivered
                  ? calculateDuration(timeline.placed, timeline.delivered)
                  : "-"}
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default function OrdersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleCardClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#202124]">إدارة الطلبات</h1>
        <div className="w-1/4">
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option>فلتر حسب الفرع</option>
            {branches.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-4 text-[#202124]">طلبات جديدة</h2>
          {ordersData.new.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              status="new"
              onCardClick={handleCardClick}
            />
          ))}
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-4 text-[#202124]">قيد التحضير</h2>
          {ordersData.preparation.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              status="preparation"
              onCardClick={handleCardClick}
            />
          ))}
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-4 text-[#202124]">خرج للتوصيل</h2>
          {ordersData.delivery.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              status="delivery"
              onCardClick={handleCardClick}
            />
          ))}
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-4 text-[#202124]">مكتمل</h2>
          {ordersData.completed.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              status="completed"
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <OrderDetailsModal order={selectedOrder} onClose={handleCloseModal} />
      )}
    </div>
  );
}
