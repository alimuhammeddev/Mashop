import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";

const Settings = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section>
      <h2 className="md:text-2xl font-semibold mb-6">Settings</h2>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-medium mb-4">Business Information</h3>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
              />
            </div>

            <h3 className="text-xl font-medium mt-6 mb-2">
              Business Profile Picture
            </h3>
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-32 h-32 border-4 border-blue-300 rounded-full overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600">
                <FiUpload />
                Upload Image
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <h3 className="text-xl font-medium mt-6 mb-2">Change Password</h3>
            <div className="space-y-2">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
              />
            </div>

            <div className="mb-6 mt-6">
              <h3 className="text-xl font-medium mb-2">Notifications</h3>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Enable email notifications</span>
              </label>
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex justify-center mx-auto">
              Save Changes
            </button>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-medium mb-2">Bank Account Details</h3>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Bank Name"
                className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Account Number"
                className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Account Holder Name"
                className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
              />
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded hover:bg-blue-600 flex justify-center mx-auto">
              Save Changes
            </button>
          </div>
        </div>

        <div className="flex justify-end items-center mt-6">
          <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-red-600">
            <BiLogOut className="text-lg" />
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
