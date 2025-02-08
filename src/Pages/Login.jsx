import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000); // Simulating a 2-second delay before navigation
  };

  return (
    <section>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 lg:p-0 p-5">
        <div className="w-full max-w-md lg:p-8 p-5 space-y-6 bg-white shadow-lg rounded-xl">
          <div>
            <h1 className="text-center text-2xl">Welcome To Mashop</h1>
            <p className="text-center">Login to your account</p>
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