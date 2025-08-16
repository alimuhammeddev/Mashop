import { useState } from "react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <section>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 lg:p-0 p-5">
        <div className="w-full max-w-md lg:p-8 p-5 space-y-6 bg-white shadow-lg rounded-xl">
          <div>
            <h1 className="text-center text-2xl">Welcome To Mashop</h1>
            <p className="text-center">Login to your merchant account</p>
          </div>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 mt-5 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Login"
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
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;