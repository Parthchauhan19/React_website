import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Rental = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [properties, setProperties] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    AOS.init();
    axios
      .get("http://localhost:8000/rental/getAll ")
      .then((res) => {
        setProperties(res.data);
      })
      .catch((err) => {
        console.error("Error fetching rentals:", err);
      });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + properties.length) % properties.length
    );
  };

  return (
    <>
      <div
        id="rental"
        data-aos="zoom-in"
        data-aos-duration="3000"
        data-aos-offset="300"
        className="max-w-[90vw] h-1/2 mx-auto pt-30 px-4 py-8 pb-15"
      >
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-zinc-100 mb-2 uppercase">
            rental's
            <span className="font-bold text-red-600"> Top Picks</span>
          </h2>
          <p className="text-gray-400 capitalize">
            explore top rental properties that suit your needs and budget
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {properties.map((property) => (
                <div key={property.id} className="w-1/2 flex-shrink-0 px-2">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex h-90">
                      <div className="relative overflow-hidden w-3/5 flex-shrink-0 h-90">
                        <img
                          src={property.image}
                          alt={property.ownerName}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="flex-1 p-6 flex flex-col justify-between bg-gradient-to-r from-white to-gray-50">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-1xl font-bold text-gray-700 mb-1 capitalize group-hover:text-blue-600 transition-colors">
                                {property.ownerName}
                              </h3>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <p className=" text-m font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                                {property.type}
                              </p>
                              <div className="text-right">
                                <p className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                                  {property.rent}
                                </p>
                                <p className="text-xs text-gray-500 font-medium">
                                  {property.RentLabel}
                                </p>
                              </div>
                            </div>
                            <p className="text-xl text-gray-600 leading-relaxed">
                              {property.area}
                            </p>
                            <p className="text-m text-gray-500 leading-relaxed">
                              {property.location}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4">
                          <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-lg">
                            Contact
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Rental;
