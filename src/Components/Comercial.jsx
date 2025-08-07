import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { API_URL } from "../Server/Server";

const Commercial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    AOS.init();

    const fetchProperties = async () => {
      try {
        const res = await axios.get(`${API_URL}property/getAll`);
        console.log(res.data);

        setProperties(res.data);
      } catch (error) {
        let message = "Something went wrong while fetching properties.";

        if (axios.isAxiosError(error)) {
          if (error.response) {
            message =
              error.response.data?.message ||
              `Error: ${error.response.status} ${error.response.statusText}`;
          } else if (error.request) {
            message = "No response received from the server.";
          } else {
            message = error.message;
          }
        } else {
          message = error.message || message;
        }

        console.error("Error fetching properties:", message);
        alert(message);
      }
    };

    fetchProperties();
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
    <div
      id="commercial"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      className="max-w-[90vw] h-1/2 mx-auto px-4 py-8 pb-25 "
    >
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-zinc-100 mb-2 uppercase">
          Prominent Projects
          <span className="font-bold text-red-600"> To Explore</span>
        </h2>
        <p className="text-gray-400 capitalize">
          Best projects to look out for
        </p>
      </div>

      <div className="relative">
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {properties.map((property) => (
              <div
                key={property._id || property.id}
                className="w-1/2 flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={property.image}
                      alt={property.propertyTitle}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {property.propertyTitle}
                        </h3>
                        <p className="text-sm text-gray-500">
                          by {property.agent}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                          {property.price}
                        </p>
                        <p className="text-xs text-gray-500">Price</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                        {property.bedroom} BHK • {property.propertyType}
                      </p>
                      <p className="text-sm text-gray-500">
                        {property.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {properties.length > 1 && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Commercial;
