import React, { useContext, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  async function login() {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials or server error");
      }

      const user = await response.json();
      setUser(user);
      saveUser(user);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    login();
  }

  return (
    <div className="bg-[#F4F4F4] flex flex-col md:flex-row min-h-screen md:space-x-7 space-y-7 md:space-y-0">
      <div className="flex flex-1 items-center justify-center">
        <img
          src="/loginImg.png"
          alt="Login illustration"
          className="w-full max-w-md"
        />
      </div>

      <div className="bg-white flex-1 md:px-7 flex flex-col p-7 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-6">Sign in</h3>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            value={userName}
            placeholder="mail@example.com"
            className="border-2 border-[#00000066] p-3 rounded-lg bg-transparent outline-none placeholder:text-slate-800"
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Password"
              className="border-2 border-[#00000066] p-3 rounded-lg pr-12 bg-transparent outline-none placeholder:text-slate-800 w-full"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={togglePassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <LuEyeOff /> : <LuEye />}
            </span>
          </div>

          <button
            type="submit"
            className={`px-6 py-3 font-medium text-lg bg-lime-500 rounded-lg text-white hover:bg-lime-400 ${
              loading ? "cursor-wait" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="flex flex-col items-center mt-6">
          <div className="text-center mb-4 border-b-2 border-[#00000066] pb-3">
            or sign in with
          </div>

          <div className="flex gap-4 mb-6">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-[#00000066] p-3 rounded-lg bg-white shadow-md hover:bg-gray-100"
            >
              <img src={google} alt="Google Icon" className="w-6" />
              Google
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-[#00000066] p-3 rounded-lg bg-white shadow-md hover:bg-gray-100"
            >
              <img src={facebook} alt="Facebook Icon" className="w-6" />
              Facebook
            </a>
          </div>

          <div className="mt-7 font-normal text-lg">
            Don't have an account?{" "}
            <a href="#signUp" className="text-blue-500">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
