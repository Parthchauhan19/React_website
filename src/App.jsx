import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Commercial from "./Components/Comercial";
import Inquirey from "./Components/Inquirey";
import LocomotiveScroll from "locomotive-scroll";
import Slider2 from "./Components/Slider2";
import Fotlast from "./Components/Fotlast";
import TeamSection from "./Components/TeamSection";
import { ToastContainer } from "react-toastify";
import BackToTopButton from "./Components/BackToTopButton ";
import Rental from "./Components/Rental";
import PgColiving from "./Components/PgColiving";
import PgColivingRent from "./Components/PgColivingRent";
import Rental2 from "./Components/Rental2";
import Slogun from "./Components/Slogun";
// import About from "./Components/About";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <BackToTopButton />
      <div className="w-full min-h-screen text-2xl text-white bg-[#212121] ">
        <Navbar />
        <LandingPage />
        <Slogun />
        <Commercial />
        <Slider2 />
        <Rental />
        <Rental2 />
        <PgColiving />
        <PgColivingRent />
        <TeamSection />
        <Inquirey />
        <ToastContainer />
        <Fotlast />
      </div>
    </>
  );
};

export default App;
