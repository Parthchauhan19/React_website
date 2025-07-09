import { motion } from "framer-motion";
import "aos/dist/aos.css";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.8"
      className="w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-[#f93b3b] "
    >
      <div className="text border-t-2 border-b-2 h-[18vw] border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ easy: "linear", repeat: Infinity, duration: 4 }}
          className="text-[13vw] leading-none tracking-tighter font-['baki nakhavani link '] uppercase pt-10 -mb-[7vw]  font-semibold pr-18"
        >
          'Find' 'Buy' 'Live'
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ easy: "linear", repeat: Infinity, duration: 4 }}
          className="text-[13vw] leading-none tracking-tighter font-['baki nakhavani link '] uppercase pt-10 -mb-[7vw]  font-semibold pr-18"
        >
          'Find' 'Buy' 'Live'
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;

// 101 start tomorrow
//bg-[#df007bf1]
