import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const BackToTopButton = () => {
  const handleClick = () => {
    gsap.to(".back-to-top", {
      rotation: "+=180",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 1.2,
      ease: "power2.inOut",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="back-to-top fixed bottom-8 right-8 z-50 bg-red-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 rotate-[-45deg] animate-bounce"
      aria-label="Back to top"
    >
      <FaArrowUpLong />
    </button>
  );
};

export default BackToTopButton;
