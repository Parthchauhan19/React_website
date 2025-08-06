import { motion } from "framer-motion";
import "aos/dist/aos.css";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full h-screen bg-[#212121] pt-1 text-white relative overflow-hidden"
    >
      <img
        src="/images/dailog.png"
        data-aos="fade-down"
        data-aos-offset="700"
        data-aos-duration="3000"
        className="absolute top-[12%] right-[20%] w-38 h-38 object-contain z-30 animate-bounce"
        alt="Dialog"
      />

      <div className="h-0 w-[40rem] absolute top-[15%]  right-[-10%] shadow-[0_0_900px_100px_#ff7e7e] -rotate-[30deg]"></div>

      <img
        src="/images/manBag.png"
        className="absolute top-[18%] right-[0%] lg:right-auto lg:left-[73%] h-[500px] z-10 max-w-[600px] object-contain"
        alt="ManBag"
      />

      <div className="textstructure max-w-[1400px] mx-8 mt-52 px-6 md:px-16">
        <div className="masker">
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

      <div className="textstructure max-w-[1400px] mx-10 px-6 md:px-24">
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

      <div className="textstructure max-w-[1400px] mx-8 px-6 md:px-16">
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

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="border-t-[1px] border-zinc-800 mt-32 flex flex-col md:flex-row justify-between items-center py-5 px-6 uppercase gap-4 z-999"
      >
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

        <div className="start flex items-center gap-5">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="px-5 py-2 border-[1px] border-zinc-400 font-light rounded-full text-medium uppercase cursor-pointer 
              hover:border-red-600 hover:text-red-600 transition-all duration-300 ease-in-out z-50"
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
