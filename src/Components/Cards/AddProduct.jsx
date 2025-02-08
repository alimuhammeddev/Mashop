import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Card that triggers the popup */}
      <div
        className="bg-white p-10 flex items-center justify-center gap-2 shadow rounded-md cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <BiPlus className="text-3xl bg-blue-500 rounded-full text-white" />
        <h1>Add New Product</h1>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3">
          <div className="bg-white p-5 rounded-md shadow-md w-96 relative">
            {/* Cancel Button at the Top Right */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              <IoClose className="text-2xl" />
            </button>

            <h2 className="text-lg font-bold">Add New Product</h2>
            <p>Enter your product details here.</p>
            <div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-600">
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter product name"
                  required
                />
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-600">
                  Product Price
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter product price"
                  required
                />
              </div>
            </div>

            <div>
                <button className="bg-blue-600 text-white p-2 mt-5 flex mx-auto hover:bg-blue-500 duration-500 rounded-md">
                    Add Product
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
