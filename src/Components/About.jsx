import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  return (
    <div
      // data-aos="zoom-out-right"
      data-aos="fade-right"
      data-aos-offset="400"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
      className="w-full bg-[#212121]] px-6 md:px-20 py-12 md:py-20 rounded-tl-3xl rounded-tr-3xl text-zinc-100 transition-colors duration-300  "
    >
      <h1 className="font-medium capitalize text-[5vw] md:text-[2.5vw] leading-[6vw] md:leading-[3.5vw] tracking-tight transition-colors duration-300 ">
        At Ochi Reality, we don’t just find properties — we find homes. With a
        focus on trust, transparency, and personalized service, we help you make
        smart real estate decisions. Whether buying, selling, or investing,
        we’re here to make every step smooth, secure, and successful.
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-10 border-t border-[#946d12e9] pt-10 mt-16">
        <div className="md:w-1/2">
          <h1 className="text-[6vw] md:text-[2.5vw]  font-medium pb-6">
            Our Approach
          </h1>
          <button className="flex items-center gap-4 px-6 py-3 hover:text-zinc-100 bg-zinc-900 rounded-full text-white hover:bg-red-600 cursor-pointer transition duration-700 easy-in-out...">
            Read More
            <div className="w-3 h-3 rounded-full bg-zinc-100"></div>
          </button>
          <h1 className="text-[6vw] md:text-[2.5vw] capitalize font-medium pt-8  transition-colors duration-300 ">
            "We listen to your needs and understand your goals". "We offer
            honest advice and smart solutions". "We deliver results with trust,
            speed, and care."
          </h1>
        </div>

        <div className="md:w-1/2 h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden drop-shadow-[0_5px_15px_rgba(249,59,59,0.5)]">
          <img
            src="./images/maimg.webp"
            alt="Our Approach"
            className="w-full h-full object-coverd object-center transition duration-300 ease-in-out hover:scale-103 blur-sm hover:blur-none"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
