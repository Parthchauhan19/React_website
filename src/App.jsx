import LocomotiveScroll from "locomotive-scroll";
import BackToTopButton from "./Components/BackToTopButton ";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import Navbar from "./Components/Navbar";
import Folast from "./Components/Fotlast";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [_, setIsLoggrdIn] = useState(!!localStorage.getItem("token"));
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggrdIn(!!token);
  }, []);

  return (
    <>
      <BackToTopButton />
      <div className="w-full min-h-screen text-2xl text-white bg-[#212121] ">
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <Navbar />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>

        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <Folast />
        )}
      </div>
    </>
  );
};

export default App;
