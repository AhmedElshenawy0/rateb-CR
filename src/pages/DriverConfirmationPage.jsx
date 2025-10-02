import { useState } from "react";
import { useParams } from "react-router-dom";

export default function DriverConfirmationPage() {
  const { orderId } = useParams();
  const [confirmed, setConfirmed] = useState(false);
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      dir="rtl"
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-center text-brand-orange mb-4">
          El Rateb
        </h1>
        {!confirmed ? (
          <>
            <p className="text-xl text-gray-700 my-8">
              تأكيد توصيل طلب رقم <strong>#{orderId}</strong>؟
            </p>
            <button
              onClick={() => setConfirmed(true)}
              className="w-full bg-[#FF6B00] text-white py-4 rounded-md hover:opacity-90 transition-opacity font-semibold text-lg"
            >
              نعم، تأكيد التوصيل
            </button>
          </>
        ) : (
          <p className="text-xl text-green-600 my-8 font-semibold">
            شكرًا لك! تم تأكيد التوصيل بنجاح.
          </p>
        )}
      </div>
    </div>
  );
}
