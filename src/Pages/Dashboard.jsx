import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiShoppingBag, FiUsers, FiBox, FiDollarSign } from "react-icons/fi";
import AddProduct from "../Components/Cards/AddProduct";

const Dashboard = () => {
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
      <div className="flex-1 flex flex-col">
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
                    <th className="pb-2">Order Status</th>
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
            <div className="flex lg:flex-row flex-col lg:items-center justify-center mt-10 gap-5">
              <div>
                <AddProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
