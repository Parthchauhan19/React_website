import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CardReview({ name, feedback, date, title }) {
  return (
    <div className="bg-gray-800 shadow-md rounded-3xl p-6 ">
      <div className="flex mb-3 text-amber-500">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
            </svg>
          ))}
      </div>

      <h3 className="text-md font-semibold text-gray-200 mb-2">{title}</h3>
      <p className="text-base text-gray-300">{feedback}</p>
      <p className="text-md font-semibold text-gray-300 mt-4">{name}</p>
      <p className="text-sm text-gray-400">{date}</p>
    </div>
  );
}

function Review() {
  const CONTENTS = [
    {
      title: "Found my perfect home in no time!",
      name: "Parth Rajput",
      feedback:
        "The platform is super easy to navigate, and the property options are well-filtered. The support team was also very responsive and guided me throughout the process.",
      date: "15 February 2025",
    },
    {
      title: "Reliable and efficient service",
      name: "Nency Bhuva",
      feedback:
        "I was able to book a fully-furnished PG within minutes. The amenities listed were accurate, and the booking process was smooth and stress-free.",
      date: "28 April 2025",
    },
    {
      title: "Best site for quick rentals",
      name: "Arjun Desai",
      feedback:
        "This website made it so easy to find a rental that matched my budget and location. Great experience overall — would definitely recommend!",
      date: "10 May 2025",
    },
    {
      title: "Best to find Pg",
      name: "Arun Charola",
      feedback:
        "This website made it so easy to find a pg that matched my budget and location. i fully recommend!",
      date: "15 jun 2025",
    },
    {
      title: "Nice Prises of Plots",
      name: "Khushbu jani",
      feedback:
        "This website made it so easy to invest in property and plots that matched my budget and location. i highly recommend to use!",
      date: "6 july 2025",
    },
  ];

  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="py-20 px-8 mb-15 bg-[#212121]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-200">
            Our Customer&apos;s <span className="text-red-600">Opinion</span>
          </h2>
          <p className="mt-3 text-gray-500 text-lg max-w-xl mx-auto">
            From general feedback to detailed accounts, find out why our users
            love our product.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CONTENTS.map((review, index) => (
            <CardReview key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;
