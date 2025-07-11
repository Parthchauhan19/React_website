import LocomotiveScroll from "locomotive-scroll";
import BackToTopButton from "./Components/BackToTopButton ";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";

// import About from "./Components/About";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <BackToTopButton />
      <div className="w-full min-h-screen text-2xl text-white bg-[#212121] ">
        <Home />
        <LoginPage />
      </div>
    </>
  );
};

export default App;
