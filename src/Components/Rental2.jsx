import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Rental2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const properties = [
    {
      id: 1,
      OwnerName: "Praful patel",
      Rent: "₹89,000",
      RentLabel: "Rent",
      type: "3 BHK Apartment",
      area: "1500 sq.ft",
      location: "Chandkheda, North West, Ahmedabad",
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      OwnerName: "Shivam pancholi",
      Rent: "₹3,00,000",
      RentLabel: "Rent",
      type: "5 BHK Apartment",
      location: "gota, wasant-nagar, Ahmedabad",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      OwnerName: "Vinita Tiwari",
      Rent: "₹55,000",
      RentLabel: "Rent",
      type: "2 BHK Apartment",
      location: "iscon city, South West, Ahmedabad",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      OwnerName: "manish chavda",
      Rent: "₹40,000",
      RentLabel: "Rent",
      type: "2 BHK Apartment",
      location: "sola-road, South West, Ahmedabad",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      OwnerName: "rudra kumar",
      Rent: "₹35,000",
      RentLabel: "Rent",
      type: "2 BHK Apartment",
      location: "thaltej, South West, Ahmedabad",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      OwnerName: "parth chauhan",
      Rent: "₹1,89,000",
      RentLabel: "Rent",
      type: "4 BHK Apartment",
      location: "shindhubhavan, South West, Ahmedabad",
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
      data-aos="zoom-in"
      data-aos-duration="3000"
      data-aos-offset="300"
      className="max-w-[90vw] h-1/2 mx-auto pt-10 px-4 py-8 pb-25"
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
                  {/* Card Layout - Image Left, Content Right */}
                  <div className="flex h-90">
                    {/* Image Container - Left Side */}
                    <div className="relative overflow-hidden w-3/5 flex-shrink-0 h-90">
                      <img
                        src={property.image}
                        alt={property.OwnerName}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content - Right Side */}
                    <div className="flex-1 p-6 flex flex-col justify-between bg-gradient-to-r from-white to-gray-50">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-1xl font-bold text-gray-700 mb-1 capitalize group-hover:text-blue-600 transition-colors">
                              {property.OwnerName}
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
                                {property.Rent}
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

                      {/* Contact Button */}
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
  );
};

export default Rental2;
