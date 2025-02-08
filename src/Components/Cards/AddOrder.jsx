import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const AddOrder = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="bg-white p-10 flex items-center justify-center gap-2 shadow rounded-md cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <BiPlus className="text-3xl bg-blue-500 rounded-full text-white" />
        <h1>Add New Order</h1>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3">
          <div className="bg-white p-5 rounded-md shadow-md w-96 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              <IoClose className="text-2xl" />
            </button>

            <h2 className="text-lg font-bold mb-3">Add New Order</h2>
            <p>Enter your order details here.</p>

            <div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-600">
                  Order Type
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter type of order  "
                  required
                />
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-600">
                  Order ID
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter order ID"
                  required
                />
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-600">
                  Order Date
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter oder date"
                  required
                />
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-600">
                  Order Time
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter oder time"
                  required
                />
              </div>
            </div>

            <div>
              <button className="bg-blue-600 text-white p-2 mt-5 flex mx-auto hover:bg-blue-500 duration-500 rounded-md">
                Add Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddOrder;
