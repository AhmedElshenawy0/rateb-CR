export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      dir="rtl"
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#202124] mb-2">
          الراتب
        </h1>
        <p className="text-center text-gray-500 mb-8">إدارة المطاعم</p>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 mb-2 text-right"
              htmlFor="email"
            >
              البريد الإلكتروني
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-right"
              type="email"
              id="email"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 mb-2 text-right"
              htmlFor="password"
            >
              كلمة المرور
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] text-right"
              type="password"
              id="password"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-[#FF6B00] text-white py-3 rounded-md hover:opacity-90 transition-opacity font-semibold">
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}
