export const kpiData = [
  { title: "مبيعات اليوم", value: "٥,٤٥٠ ج.م", icon: "sales" },
  { title: "طلبات جديدة", value: "١٢٥", icon: "orders" },
  { title: "عملاء جدد", value: "٣٢", icon: "customers" },
  { title: "إجمالي الدخل", value: "٢٥٠,٦٠٠ ج.م", icon: "revenue" },
];

export const ordersData = {
  new: [
    { id: "#٨٠٢٤", customer: "أحمد علي", price: "٤٥.٥٠ ج.م" },
    { id: "#٨٠٢٥", customer: "منى السيد", price: "٨٢.٠٠ ج.م" },
  ],
  preparation: [
    { id: "#٨٠٢٢", customer: "خالد محمود", price: "٢٢.٣٠ ج.م" },
    { id: "#٨٠٢٣", customer: "فاطمة محمد", price: "١٠٥.١٠ ج.م" },
  ],
  delivery: [{ id: "#٨٠٢٠", customer: "يوسف إبراهيم", price: "١٢.٠٠ ج.م" }],
  completed: [
    { id: "#٨٠١٨", customer: "سارة عبد الله", price: "٦٥.٢٠ ج.م" },
    { id: "#٨٠١٩", customer: "كريم حسن", price: "١٥٠.٠٠ ج.م" },
  ],
};

export const customersData = [
  {
    name: "أحمد علي",
    phone: "٠١٠٠١٢٣٤٥٦٧",
    totalOrders: 12,
    lastOrder: "٢٦-١٠-٢٠٢٣",
  },
  {
    name: "منى السيد",
    phone: "٠١٢٢٣٤٥٦٧٨٩",
    totalOrders: 8,
    lastOrder: "٢٥-١٠-٢٠٢٣",
  },
  {
    name: "خالد محمود",
    phone: "٠١١٣٤٥٦٧٨٩٠",
    totalOrders: 25,
    lastOrder: "٢٦-١٠-٢٠٢٣",
  },
  {
    name: "فاطمة محمد",
    phone: "٠١٥٤٥٦٧٨٩٠١",
    totalOrders: 5,
    lastOrder: "٢٤-١٠-٢٠٢٣",
  },
];

export const menuData = {
  مشويات: [
    {
      id: 1,
      name: "طبق كباب",
      price: "١٨٥.٠٠ ج.م",
      description: "تشكيلة لحوم مشوية مع أرز.",
      imageUrl: "https://placehold.co/300x200/FF6B00/FFFFFF?text=Grill",
      available: true,
    },
    {
      id: 2,
      name: "فراخ مشوية",
      price: "١٤٠.٠٠ ج.م",
      description: "صدور دجاج متبلة بالليمون والأعشاب.",
      imageUrl: "https://placehold.co/300x200/FF6B00/FFFFFF?text=Chicken",
      available: false,
    },
  ],
  مقبلات: [
    {
      id: 3,
      name: "حمص",
      price: "٦٠.٠٠ ج.م",
      description: "حمص كريمي مع خبز بيتا.",
      imageUrl: "https://placehold.co/300x200/FF6B00/FFFFFF?text=Hummus",
      available: true,
    },
    {
      id: 4,
      name: "فلافل",
      price: "٧٥.٠٠ ج.م",
      description: "كرات فلافل مقلية مقرمشة.",
      imageUrl: "https://placehold.co/300x200/FF6B00/FFFFFF?text=Falafel",
      available: true,
    },
  ],
  حلويات: [
    {
      id: 5,
      name: "بقلاوة",
      price: "٥٠.٠٠ ج.م",
      description: "معجنات حلوة بالمكسرات والعسل.",
      imageUrl: "https://placehold.co/300x200/FF6B00/FFFFFF?text=Baklava",
      available: true,
    },
  ],
};

export const shiftHistoryData = [
  {
    id: "S001",
    cashier: "المدير",
    startTime: "٢٦-١٠-٢٠٢٣ ٠٩:٠٠ ص",
    endTime: "٢٦-١٠-٢٠٢٣ ٠٥:٠٠ م",
    variance: "+٢.٥٠ ج.م",
  },
  {
    id: "S002",
    cashier: "چين دو",
    startTime: "٢٥-١٠-٢٠٢٣ ٠٩:٠٠ ص",
    endTime: "٢٥-١٠-٢٠٢٣ ٠٥:٠٠ م",
    variance: "-١.١٠ ج.م",
  },
];
