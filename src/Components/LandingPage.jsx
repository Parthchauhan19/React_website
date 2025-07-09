import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

import "aos/dist/aos.css";

//we use aos for animations fade in or out also

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full h-screen bg-[#212121] pt-1 text-white"
    >
      {/* First Line with Red Block */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_30px_#d100b0] -rotate-[30deg]"></div>
      <div className="textstructure mt-52 px-6 md:px-16">
        <div className="masker">
          <Spline
            className="absolute top-[-10%] right-[-5%] h-[500px] lg:left-[35%] -z-10"
            scene="https://prod.spline.design/tLQMNgcq9gLWaW-e/scene.splinecode"
            // scene="https://prod.spline.design/fWKCfj1k-2OZEpzF/scene.splinecode"
          />
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="relative z-10 text-[5vw] leading-[6vw] tracking-tighter font-medium shine-text"
          >
            YOUR DREAM
          </h1>
        </div>
      </div>

      {/* Second Line */}
      <div className="textstructure px-6 md:px-24">
        <div className="masker">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex items-center gap-[1vw]"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1.2 }}
              transition={{
                ease: [0.76, 0, 0.24, 1],
                repeat: Infinity,
                duration: 1,
              }}
              className="origin-left bg-red-600 w-[3.5vw] h-[4vw] rounded-sm"
            ></motion.div>
            <h1
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-easing="ease-in-sine"
              className="text-[5vw] leading-[6vw] tracking-tighter font-medium shine-text"
            >
              TURN'S IN TO REALITY
            </h1>
          </div>
        </div>
      </div>

      {/* Third Line */}
      <div className="textstructure px-6 md:px-16">
        <div className="masker">
          <h1
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine"
            className="text-[5vw] leading-[6vw] tracking-tighter font-medium shine-text"
          >
            TRUST ON US
          </h1>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="border-t-[1px] border-zinc-800 mt-32 flex flex-col md:flex-row justify-between items-center py-5 px-6 uppercase gap-4 z-10"
      >
        {/* Taglines */}
        {[
          "For Your Safe And Secure Futures",
          "Your safe haven starts here",
        ].map((item, i) => (
          <p
            key={i}
            className="text-base font-medium tracking-tight leading-none cursor-pointer hover:text-red-600 transition-all duration-300 ease-in-out"
          >
            {item}
          </p>
        ))}

        {/* Contact Button Only */}
        <div className="start flex items-center gap-5">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="px-5 py-2 border-[1px] border-zinc-400 font-light rounded-full text-medium uppercase cursor-pointer 
              hover:border-red-600 hover:text-red-600 transition-all duration-300 ease-in-out"
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
