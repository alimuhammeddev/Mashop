import { useState } from "react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); 
  const navigate = useNavigate();

  
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({}); 

    const formData = new FormData(e.target);
    const storeName = formData.get("storeName").trim();
    const email = formData.get("email").trim();
    const username = formData.get("username").trim();
    const password = formData.get("password").trim();

    let newErrors = {};

    
    if (!storeName) newErrors.storeName = "Store name is required";

    if (!isValidEmail(email)) newErrors.email = "Please enter a valid email";

    if (!username) newErrors.username = "Username is required";

    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    const user = { storeName, email, username, password };

    localStorage.setItem("user", JSON.stringify(user));

    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <section>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 lg:p-0 p-5">
        <div className="w-full max-w-md lg:p-8 p-5 space-y-6 bg-white shadow-lg rounded-xl">
          <div>
            <h1 className="text-center text-2xl">New To Mashop?</h1>
            <p className="text-center">Create an account</p>
          </div>

          <form className="space-y-4" onSubmit={handleSignUp}>
            {/* Store Name */}
            <div>
              <input
                type="text"
                name="storeName"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your store name"
              />
              {errors.storeName && (
                <p className="text-red-500 text-sm mt-1">{errors.storeName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Username */}
            <div>
              <input
                type="text"
                name="username"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your store username"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-4 mt-5 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <div>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-blue-500"></div>
              <span className="mx-4 text-blue-500 font-medium">OR</span>
              <div className="flex-grow border-t border-blue-500"></div>
            </div>
            <div className="flex justify-center gap-6">
              <button className="p-3 border border-blue-500 rounded-full hover:bg-gray-100 transition text-2xl">
                <FcGoogle />
              </button>
              <button className="p-3 border border-blue-500 rounded-full hover:bg-gray-100 transition text-blue-600 text-2xl">
                <FaFacebook />
              </button>
              <button className="p-3 border border-blue-500 rounded-full hover:bg-gray-100 transition text-black text-2xl">
                <FaApple />
              </button>
            </div>
          </div>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <a href="/" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;