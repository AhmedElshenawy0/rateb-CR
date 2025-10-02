import { createHashRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import CustomersPage from "./pages/CustomersPage";
import DashboardPage from "./pages/DashboardPage";
import DriverConfirmationPage from "./pages/DriverConfirmationPage";
import LoginPage from "./pages/LoginPage";
import MenuManagementPage from "./pages/MenuManegementPage";
import OrdersPage from "./pages/OrderPage";
import ReportsPage from "./pages/ReportsPage";

const router = createHashRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/complete/:orderId",
    element: <DriverConfirmationPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
      {
        path: "/customers",
        element: <CustomersPage />,
      },
      {
        path: "/menu",
        element: <MenuManagementPage />,
      },
      {
        path: "/reports",
        element: <ReportsPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
