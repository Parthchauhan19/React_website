import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const OurService = () => {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const onSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8000/service", {
        phone,
      });

      toast.success(res.data.message || "Request submitted!");
      setPhone("");
      console.log("Request submitted!");
    } catch (err) {
      console.error(err);
      console.log("Request not submitted!");

      if (err.response?.status === 409) {
        toast.warn("number already requested.");
      } else {
        toast.error(
          err.response?.data?.message || "Submission failed. Try again."
        );
      }
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div id="ourservice" className="w-full overflow-hidden">
        <div className="relative w-full h-screen">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/bgVideo.a9a66694.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent z-10"></div>

          <div className="relative z-20 flex items-center h-full px-10 ml-[120px]">
            <div className="w-full max-w-xl text-white space-y-6">
              <h1
                data-aos="fade-up-right"
                data-aos-offset="300"
                data-aos-delay="500"
                data-aos-easing="ease-in-sine"
                className="text-6xl font-bold leading-tight"
              >
                Pay Deposit / Rent <br /> On Credit
              </h1>

              <div
                data-aos="fade-up-right"
                data-aos-offset="300"
                data-aos-delay="500"
                data-aos-easing="ease-in-sine"
                className="flex gap-3"
              >
                <input
                  type="tel"
                  placeholder="+91 Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-gray-700 rounded-lg px-4 py-3 text-white w-full bg-black/30 placeholder-gray-400"
                />
                <button
                  onClick={onSubmit}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg"
                >
                  Send
                </button>
              </div>

              <div
                data-aos="fade-up-right"
                data-aos-offset="300"
                data-aos-delay="500"
                data-aos-easing="ease-in-sine"
                className="bg-[#212121] p-4 rounded-xl inline-block mt-4"
              >
                <p className="text-sm mb-2 text-white">scan to Download</p>
                <img
                  src="/images/scan.jpg"
                  alt="QR Code"
                  className="w-28 h-28"
                />
              </div>

              <p
                data-aos="fade-up-right"
                data-aos-offset="300"
                data-aos-delay="500"
                data-aos-easing="ease-in-sine"
                className="text-m pt-4"
              >
                4.7 / 5 <span className="text-gray-500"> App Rating</span>{" "}
                &nbsp; | &nbsp; 5M+{" "}
                <span className="text-gray-500"> Transactions</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#212121] py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div
              data-aos="fade-up-left"
              data-aos-offset="300"
              data-aos-delay="1000"
              data-aos-easing="ease-in-sine"
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 capitalize">
                Why use Ochi <span className="text-red-600">?</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium capitalize">
                Secure, rewarding, and seamless rent payments!
              </p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="grid md:grid-cols-3 gap-8"
            >
              <FeatureCard
                title="Earn Rewards on Rent Payments"
                description="Get bank reward points, cashback, airmiles & brand offers every time you pay rent"
                iconPath="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
              <FeatureCard
                title="Low Convenience Fee"
                description="Enjoy secure rent payments with a nominal and affordable service fee"
                iconPath="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
              <FeatureCard
                title="Instant Rent Receipts & Payments"
                description="Pay rent online instantly and get auto-generated digital receipts for HRA claims"
                iconPath="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FeatureCard = ({ title, description, iconPath }) => (
  <div className="bg-gray-800 rounded-3xl p-8 border border-gray-800">
    <div className="mb-8">
      <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={iconPath}
          />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
    </div>
  </div>
);

export default OurService;
