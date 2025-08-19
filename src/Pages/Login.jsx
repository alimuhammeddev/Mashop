import { useState } from "react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // ✅ store errors
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ no errors → valid
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    setTimeout(() => {
      if (savedUser && savedUser.email === email && savedUser.password === password) {
        localStorage.setItem("isLoggedIn", true);
        navigate("/dashboard");
      } else {
        setErrors({ general: "Invalid email or password" });
      }
      setLoading(false);
    }, 1000);
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
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:outline-none ${
                  errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 mt-1 border rounded-lg focus:ring-1 focus:outline-none ${
                  errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-300"
                }`}
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}

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

          {/* OR + Social buttons */}
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