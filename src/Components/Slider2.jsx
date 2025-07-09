import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Slider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties = [
    {
      id: 1,
      title: "Green Valley",
      developer: "Eco Builders",
      price: "₹95.0 L - 1.8 Cr",
      priceLabel: "Price",
      type: "3-4 BHK Apartment",
      location: "Makarba, South Ahmedabad",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Royal Residency",
      developer: "Crown Developers",
      price: "₹75.0 L - 1.2 Cr",
      priceLabel: "Price",
      type: "2-3 BHK Apartment",
      location: "Gota, North Ahmedabad",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Skyline Heights",
      developer: "Premium Builders",
      price: "₹1.5 Cr - 2.1 Cr",
      priceLabel: "Price",
      type: "2-3 BHK Apartment",
      location: "Bopal, South West, Ahmedabad",
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      title: "The Taurus",
      developer: "Vantara Group",
      price: "₹2.0 Cr - 2.92 Cr",
      priceLabel: "Price",
      type: "4 BHK Apartment Penthouse",
      location: "Vaishno Devi Circle, Ahmedabad",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      title: "Shiv Vivanta",
      developer: "Rudra Enterprise",
      price: "₹89.0 L",
      priceLabel: "Price",
      type: "3 BHK Apartment",
      location: "Chandkheda, North West, Ahmedabad",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      title: "Valley Aparts",
      developer: "Eco Builders",
      price: "₹95.0 L - 1.8 Cr",
      priceLabel: "Price",
      type: "3-4 BHK Apartment",
      location: "Makarba, South Ahmedabad",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

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
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-delay="500"
      data-aos-easing="ease-in-sine"
      className="max-w-[90vw] h-1/2 mx-auto px-4 py-8 "
    >
      {/* Slider Container */}
      <div className="relative">
        {/* Main Slider */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {properties.map((property) => (
              <div key={property.id} className="w-1/2 flex-shrink-0 px-2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {property.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          by {property.developer}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                          {property.price}
                        </p>
                        <p className="text-xs text-gray-500">
                          {property.priceLabel}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                        {property.type}
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
  );
};

export default Slider2;
