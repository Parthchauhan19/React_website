import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PlotCard = ({ imageSrc, onClick }) => {
  return (
    <div
      className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer h-80 relative"
      onClick={onClick}
    >
      <img src={imageSrc} alt="Plot" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t to-transparent rounded-3xl"></div>
    </div>
  );
};

const PlotCollections = () => {
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const plots = [
    { imageSrc: "/images/Plots (4).jpg" },
    { imageSrc: "/images/Plots (2).jpg" },
    { imageSrc: "/images/Plots (1).jpg" },
    { imageSrc: "/images/Plots (3).jpg" },
  ];

  return (
    <>
      <div id="plot-card" className="min-h-25 bg-[#212121] p-8">
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="text-center mb-16 pt-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4 uppercase">
            Plot<span className="text-red-600"> Collection</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Exclusive Showcase of Our Premium Plot&apos;s
          </p>
        </div>

        
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {plots.map((plot, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 shadow-lg shadow-zinc-500/50 rounded-3xl bg-[#212121] ${
                  cardsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <PlotCard
                  imageSrc={plot.imageSrc}
                  onClick={() => alert("Plot Clicked!")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlotCollections;
