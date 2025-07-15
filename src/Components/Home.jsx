import LandingPage from "../Components/LandingPage";
import Commercial from "../Components/Comercial";
import Inquirey from "../Components/Inquirey";
import LocomotiveScroll from "locomotive-scroll";
import Slider2 from "../Components/Slider2";
import TeamSection from "../Components/TeamSection";
import BackToTopButton from "../Components/BackToTopButton ";
import Rental from "../Components/Rental";
import PgColiving from "../Components/PgColiving";
import PgColivingRent from "../Components/PgColivingRent";
import Rental2 from "../Components/Rental2";
import Slogun from "../Components/Slogun";
import PlotCollection from "../Components/PlotCollection";
import News from "../Components/News";
import OurService from "../Components/OurService";
import Review from "./Review";
import { useLocation } from "react-router-dom";
// import About from "../Components/About";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const location = useLocation();
  return (
    <>
      <BackToTopButton />
      <div className="w-full min-h-screen text-2xl text-white bg-[#212121] ">
        <LandingPage />
        <Slogun />
        <Commercial />
        <Slider2 />
        <Rental />
        <Rental2 />
        <PgColiving />
        <PgColivingRent />
        <PlotCollection />
        <TeamSection />
        <News />
        <OurService />
        <Review />
        <Inquirey />
      </div>
    </>
  );
};

export default Home;
