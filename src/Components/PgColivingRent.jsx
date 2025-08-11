import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PgColivingRent = () => {
  return (
    <div className="flex flex-col gap-16 p-15">
      <div className="flex flex-col md:flex-row-reverse items-center justify-center space-y-6 md:space-y-0 md:space-x-10 md:space-x-reverse pb-15 pt-25">
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-md relative"
        >
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Shantigram"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl font-semibold mb-6 uppercase">
            <span className="text-white font-semibold">
              Ochi Pg for <span className="text-blue-600">boy&apos;s</span>{" "}
            </span>
          </h2>
          <p className="text-gray-400 capitalize mb-6 text-2xl">
            Welcome to Ochi Reality, your one-stop platform for booking PGs with
            all the comforts of home. Whether you're a student, working
            professional, or traveler, we offer fully furnished accommodations
            with facilities like Wi-Fi, meals, housekeeping, laundry, security,
            and more — all in prime locations. Easy search, instant booking, and
            trusted service at your fingertips!
          </p>
          <a
            href="#inquiry"
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all duration-200"
          >
            Explore
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-md relative"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Metro PG"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl font-semibold mb-6 uppercase">
            <span className="text-white font-semibold">
              Ochi Pg for <span className="text-blue-600">girl&apos;s</span>
            </span>
          </h2>
          <p className="text-gray-400 capitalize mb-6 text-2xl">
            Welcome to Ochi Reality, your one-stop platform for booking PGs with
            all the comforts of home. Whether you're a student, working
            professional, or traveler, we offer fully furnished accommodations
            with facilities like Wi-Fi, meals, housekeeping, laundry, security,
            and more — all in prime locations. Easy search, instant booking, and
            trusted service at your fingertips!
          </p>
          <a
            href="#inquiry"
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all duration-200"
          >
            Explore
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center space-y-6 md:space-y-0 md:space-x-10 md:space-x-reverse">
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-md relative"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Citystay PG"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl font-semibold mb-6 uppercase">
            <span className="text-white font-semibold">
              ochi Hostel for{" "}
              <span className="text-blue-600">student&apos;s</span>
            </span>
          </h2>
          <p className="text-gray-400 capitalize mb-6 text-2xl">
            Welcome to Ochi Reality, your one-stop platform for booking PGs with
            all the comforts of home. Whether you're a student, working
            professional, or traveler, we offer fully furnished accommodations
            with facilities like Wi-Fi, meals, housekeeping, laundry, security,
            and more — all in prime locations. Easy search, instant booking, and
            trusted service at your fingertips!
          </p>
          <a
            href="#inquiry"
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all duration-200"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default PgColivingRent;
