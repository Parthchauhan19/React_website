import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Inquirey from "./Footer/Inquirey";
import LocomotiveScroll from "locomotive-scroll";
import Slider2 from "./Components/Slider2";
import Fotlast from "./Footer/Fotlast";
import TeamSection from "./Components/TeamSection";
import { ToastContainer } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen text-2xl text-white bg-[#212121] ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Slider2 />
      <TeamSection />
      <Inquirey />
      <ToastContainer />
      <Fotlast />
    </div>
  );
};

export default App;
