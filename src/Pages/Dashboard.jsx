import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FiSearch,
  FiShoppingBag,
  FiUsers,
  FiBox,
  FiDollarSign,
  FiMenu,
} from "react-icons/fi";
import Sidebar from "../Components/Sidebar";
import AddProduct from "../Components/Cards/AddProduct";
import AddCustomer from "../Components/Cards/AddCustomer";
import AddOrder from "../Components/Cards/AddOrder";

const Dashboard = () => {
  const [active, setActive] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,000",
      icon: <FiDollarSign size={24} />,
      bg: "bg-green-500",
    },
    {
      title: "Total Orders",
      value: "1,245",
      icon: <FiShoppingBag size={24} />,
      bg: "bg-blue-500",
    },
    {
      title: "Total Customers",
      value: "850",
      icon: <FiUsers size={24} />,
      bg: "bg-yellow-500",
    },
    {
      title: "Total Products",
      value: "320",
      icon: <FiBox size={24} />,
      bg: "bg-red-500",
    },
  ];

  const orders = [
    {
      id: "#1234",
      customer: "Abdulrazaq Salihu",
      total: "$120.00",
      status: "Pending",
    },
    {
      id: "#1235",
      customer: "Aliyu Atiku",
      total: "$340.00",
      status: "Completed",
    },
    {
      id: "#1236",
      customer: "Ali Muhammed",
      total: "$90.00",
      status: "Shipped",
    },
  ];

  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        active={active}
        setActive={setActive}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-md bg-gray-200"
          >
            <FiMenu size={24} />
          </button>
          <h1 className="text-xl lg:text-2xl font-bold">Welcome Back Ruddy!</h1>
          <div className="hidden lg:flex items-center border-2 px-3 py-1 lg:py-2 rounded-md bg-gray-100 w-full max-w-xs focus-within:ring-2 focus-within:ring-blue-300">
            <FiSearch size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-full outline-none text-sm lg:text-base bg-transparent focus:ring-0 focus:outline-none"
            />
          </div>
        </header>

        <div className="p-4 lg:p-6 overflow-auto flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-4 lg:mb-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-white ${stat.bg} flex items-center`}
              >
                <div className="p-3 bg-white bg-opacity-20 rounded-full">
                  {stat.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm lg:text-base">{stat.title}</p>
                  <h3 className="text-lg lg:text-xl font-bold">{stat.value}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
              <h2 className="text-lg font-bold mb-4">Recent Orders</h2>
              <table className="w-full text-left min-w-[400px]">
                <thead>
                  <tr className="text-sm lg:text-base">
                    <th className="pb-2">Order ID</th>
                    <th className="pb-2">Customer</th>
                    <th className="pb-2">Total</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index} className="border-t text-sm lg:text-base">
                      <td className="py-2">{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.total}</td>
                      <td>{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-bold mb-4">Sales Analytics</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={salesData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#4F46E5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <div className="flex lg:flex-row flex-col lg:items-center justify-between mt-10 gap-5">
              <div>
                <AddProduct />
              </div>
              <div>
                <AddCustomer />
              </div>
              <div>
                <AddOrder />
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-colx items-center justify-between lg:mt-20 bg-gray-900 p-5 text-white">
          <div>
            <h1>Copyright 2025 Mashop....All Rights Reserved</h1>
          </div>
          <div>
            <h1>Developed and Designed By Ali Muhammed S.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
