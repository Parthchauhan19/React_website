import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pno, setPno] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  async function onSubmit(e) {
    e.preventDefault(); // prevent page reload
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Signup Data:");
    console.log("Username:", username);
    console.log("Phone:", pno);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  }

  return (
    <div id="signup" className="min-h-screen flex">
      <div className="flex-1 relative bg-gradient-to-br from-red-200 to-red-300 hidden lg:block">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="absolute top-8 left-8 flex items-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <span className="ml-3 text-white text-xl font-semibold">Ochi</span>
        </div>

        <div className="absolute bottom-16 left-8 right-8">
          <h1 className="text-white text-5xl font-bold mb-4 leading-tight capitalize">
            Find your sweet home
          </h1>
          <p className="text-white text-lg mb-2 capitalize">
            Schedule visit in just a few clicks
          </p>
          <p className="text-white text-lg capitalize">
            visits in just a few clicks
          </p>
        </div>
      </div>

      <div className="flex-1 bg-gray-50 flex items-center justify-center p-8 lg:max-w-md xl:max-w-lg">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome To Ochi !
            </h2>
            <p className="text-gray-600">Sign Up your account</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-2 py-1 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label
                htmlFor="pno"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Phone Number
              </label>
              <input
                type="tel"
                id="pno"
                value={pno}
                onChange={(e) => setPno(e.target.value)}
                className="w-full px-2 py-1 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-2 py-1 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Set Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-2 py-1 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-red-600 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 px-4 rounded-full font-medium hover:bg-red-700 transition-colors"
            >
              Sign Up
            </button>
          </form>

          <div className="space-y-3 mt-6">
            <button className="w-full flex items-center justify-center px-4 py-1 border text-gray-900 border-gray-300 rounded-full hover:bg-gray-50">
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center px-4 py-1 border text-gray-900 border-gray-300 rounded-full hover:bg-gray-50">
              Continue with Facebook
            </button>
          </div>

          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
            </span>
            <a
              href="#"
              className="text-sm text-red-600 hover:text-red-800 font-medium"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
