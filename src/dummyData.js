// --- بيانات وهمية ---
export const kpiData = [
  { title: "مبيعات اليوم", value: "٥,٤٥٠ ج.م", icon: "sales" },
  { title: "طلبات جديدة", value: "١٢٥", icon: "orders" },
  { title: "عملاء جدد", value: "٣٢", icon: "customers" },
  { title: "إجمالي الدخل", value: "٢٥٠,٦٠٠ ج.م", icon: "revenue" },
];

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
      description: "صدور دجاج متبلة.",
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
  ],
};

export const performanceKpiData = [
  {
    title: "متوسط وقت استجابة الكاشير",
    value: "1د 45ث",
    trend: "+5%",
    trendDirection: "up",
  },
  {
    title: "متوسط وقت تحضير المطبخ",
    value: "12د 30ث",
    trend: "-2%",
    trendDirection: "down",
  },
  {
    title: "متوسط وقت التوصيل",
    value: "25د 10ث",
    trend: "-8%",
    trendDirection: "down",
  },
  {
    title: "متوسط إجمالي وقت الطلب",
    value: "40د 05ث",
    trend: "+3%",
    trendDirection: "up",
  },
];

export const ordersData = {
  new: [
    {
      id: "#8024",
      customer: "أحمد علي",
      items: 3,
      details: {
        items: ["وجبة كباب", "حمص", "بيبسي"],
        timeline: {
          placed: "11:15 ص",
          accepted: "11:17 ص",
          ready: "11:32 ص",
          delivered: "11:55 ص",
        },
      },
    },
    {
      id: "#8025",
      customer: "منى السيد",
      items: 2,
      details: {
        items: ["فراخ مشوية", "سلطة"],
        timeline: {
          placed: "11:20 ص",
          accepted: null,
          ready: null,
          delivered: null,
        },
      },
    },
  ],
  preparation: [
    {
      id: "#8022",
      customer: "خالد محمود",
      items: 1,
      details: {
        items: ["طبق بقلاوة"],
        timeline: {
          placed: "11:10 ص",
          accepted: "11:11 ص",
          ready: null,
          delivered: null,
        },
      },
    },
  ],
  delivery: [
    {
      id: "#8020",
      customer: "يوسف إبراهيم",
      items: 4,
      details: {
        items: ["فلافل", "حمص", "سلطة", "ماء"],
        timeline: {
          placed: "11:00 ص",
          accepted: "11:02 ص",
          ready: "11:15 ص",
          delivered: null,
        },
      },
    },
  ],
  completed: [
    {
      id: "#8018",
      customer: "سارة عبد الله",
      items: 2,
      details: {
        items: ["وجبة كباب", "بيبسي"],
        timeline: {
          placed: "10:45 ص",
          accepted: "10:46 ص",
          ready: "11:05 ص",
          delivered: "11:30 ص",
        },
      },
    },
  ],
};

export const branches = ["فرع المعادي", "فرع التجمع الخامس", "فرع 6 أكتوبر"];
