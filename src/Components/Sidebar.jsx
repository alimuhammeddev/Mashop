import {
  FiUsers,
  FiBox,
  FiDollarSign,
  FiSettings,
} from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ active, setActive, isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 1, icon: <MdDashboard size={20} />, title: "Dashboard", path: "/dashboard" },
    { id: 2, icon: <HiOutlineClipboardList size={20} />, title: "Orders", path: "/orders" },
    { id: 3, icon: <FiBox size={20} />, title: "Products", path: "/products" },
    { id: 4, icon: <FiUsers size={20} />, title: "Customers", path: "/customers" },
    { id: 5, icon: <FiDollarSign size={20} />, title: "Analytics", path: "/analytics" },
    { id: 6, icon: <FiSettings size={20} />, title: "Settings", path: "/settings" },
  ];

  // Load active state from localStorage on mount
  useEffect(() => {
    const storedActive = localStorage.getItem("activeMenu");

    if (storedActive) {
      setActive(parseInt(storedActive, 10));
    } else {
      // Set Dashboard as default when logging in
      setActive(1);
      localStorage.setItem("activeMenu", 1);
    }
  }, [setActive]);

  // Update active state based on URL path (in case user refreshes)
  useEffect(() => {
    const currentItem = menuItems.find((item) => item.path === location.pathname);
    if (currentItem) {
      setActive(currentItem.id);
      localStorage.setItem("activeMenu", currentItem.id);
    }
  }, [location.pathname, setActive]);

  // Function to handle menu click
  const handleMenuClick = (id, path) => {
    setActive(id);
    localStorage.setItem("activeMenu", id);
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed inset-y-0 left-0 bg-gray-900 text-white w-64 p-5 transform transition-transform duration-300 z-40 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:relative md:h-screen flex flex-col`}
      >
        <h2 className="text-xl font-bold mb-6">Mashop</h2>

        <ul className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`flex items-center p-3 cursor-pointer rounded-lg ${
                active === item.id ? "bg-blue-500" : "hover:bg-gray-700"
              }`}
              onClick={() => handleMenuClick(item.id, item.path)}
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-400 text-sm text-center mt-auto">
          &copy; {new Date().getFullYear()} Mashop. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm text-center">
          Developed By Ali Muhammed S.
        </p>
      </div>
    </>
  );
};

export default Sidebar;