import { useState } from "react";
import { menuData } from "../dummyData";

const ProductCard = ({ product }) => {
  const [isAvailable, setIsAvailable] = useState(product.available);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-bold text-[#202124]">{product.name}</h4>
        <p className="text-sm text-gray-600 mb-2">{product.price}</p>
        <p className="text-xs text-gray-500 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <button className="text-sm bg-gray-200 text-gray-800 py-1 px-3 rounded-md hover:bg-gray-300">
            تعديل
          </button>
          <div className="flex items-center space-x-2">
            <span
              className={`text-sm font-medium ${
                isAvailable ? "text-green-600" : "text-red-600"
              }`}
            >
              {isAvailable ? "متاح" : "غير متاح"}
            </span>
            <div
              onClick={() => setIsAvailable(!isAvailable)}
              className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${
                isAvailable ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
                  isAvailable ? "-translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function MenuManagementPage() {
  const [selectedCategory, setSelectedCategory] = useState("مشويات");
  const categories = Object.keys(menuData);

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#202124] mb-8">إدارة المنيو</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* العمود الأيمن - الأقسام */}
        <div className="w-full md:w-1/4">
          <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md mb-4 hover:bg-gray-300">
            إضافة قسم جديد
          </button>
          <ul className="bg-white rounded-lg shadow-md p-4 space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`p-3 rounded-md cursor-pointer transition-colors font-medium ${
                  selectedCategory === category
                    ? "bg-[#FF6B00] text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        {/* العمود الأيسر - المنتجات */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-[#202124]">
              {selectedCategory}
            </h2>
            <button className="bg-[#FF6B00] text-white py-2 px-6 rounded-md hover:opacity-90 transition-opacity">
              إضافة منتج جديد
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData[selectedCategory].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
