import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { FiMenu, FiSearch } from "react-icons/fi";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar active={active} setActive={setActive} isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center z-10">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden md:hidden p-2 rounded-md bg-gray-200">
            <FiMenu size={24} />
          </button>
          <h1 className="text-xl lg:text-2xl font-bold">Welcome Back User!</h1>
          <div className="hidden lg:flex items-center border-2 px-3 py-1 lg:py-2 rounded-md bg-gray-100 w-full max-w-xs focus-within:ring-2 focus-within:ring-blue-300">
            <FiSearch size={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-full outline-none text-sm lg:text-base bg-transparent focus:ring-0 focus:outline-none"
            />
          </div>
        </header>
        
        <div id="scrollable-content" className="p-4 lg:p-6 overflow-auto flex-1">
          {children}
        </div>

      </div>
    </div>
  );
};

export default Layout;