import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

import OrdersPage from "./pages/OrderPage";
import CustomersPage from "./pages/CustomersPage";
import ReportsPage from "./pages/ReportsPage";
import MenuManagementPage from "./pages/MenuManegementPage";
import FinancialsPage from "./pages/FinancialsPage";
import DashboardPage from "./pages/DashboardPage";
const router = createBrowserRouter([
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
  {
    element: <Layout />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/orders", element: <OrdersPage /> },
      { path: "/customers", element: <CustomersPage /> },
      { path: "/reports", element: <ReportsPage /> },
      { path: "/menu", element: <MenuManagementPage /> },
      { path: "/financials", element: <FinancialsPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
