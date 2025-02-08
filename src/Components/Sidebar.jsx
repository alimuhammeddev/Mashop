import { FiUsers, FiBox, FiDollarSign, FiSettings, FiMenu } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import { useState } from "react";

const Sidebar = ({ active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, icon: <MdDashboard size={20} />, title: "Dashboard" },
    { id: 2, icon: <HiOutlineClipboardList size={20} />, title: "Orders" },
    { id: 3, icon: <FiBox size={20} />, title: "Products" },
    { id: 4, icon: <FiUsers size={20} />, title: "Customers" },
    { id: 5, icon: <FiDollarSign size={20} />, title: "Analytics" },
    { id: 6, icon: <FiSettings size={20} />, title: "Settings" },
  ];

  return (
    <>
      {!isOpen && (
        <button
          className="md:hidden p-3 fixed top-4 left-4 z-50 text-white rounded-full"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={20} />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed inset-y-0 left-0 bg-gray-900 text-white w-64 p-5 transform transition-transform duration-300 z-40 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:h-screen`}
      >
        <h2 className="text-xl font-bold mb-6">Mashop</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`flex items-center p-3 cursor-pointer rounded-lg ${
                active === item.id ? "bg-blue-500" : "hover:bg-gray-700"
              }`}
              onClick={() => {
                setActive(item.id);
                setIsOpen(false);
              }}
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
