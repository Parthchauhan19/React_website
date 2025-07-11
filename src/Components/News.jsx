import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsArticlesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const articles = [
    {
      id: 1,
      title:
        "Gujarat stamp duty 2025: How to pay online and what are the registration...",
      description:
        "Mentioned are details about stamp duty on property that is levied in Gujarat.",
      author: "Anuradha Ramamirtham",
      date: "Jan 2025",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Interest rate cuts boost affordability in H1 2025: Report",
      description:
        "While Mumbai at 48% is the least affordable city, Ahmedabad, Pune and Kolkata are the most affordable markets, the report said.",
      author: "Harini Balasubramanian",
      date: "Fab 2025",
      image:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title:
        "What is repo rate? How does it impact your home loan EMIs in 2025?",
      description:
        "Explained in this article is the inner working of the repo rate that impacts your home loan EMI.",
      author: "Anuradha Ramamirtham",
      date: "March 2025",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      title: "Real Estate Market Trends 2025: What Investors Should Know",
      description:
        "Latest trends and insights into the real estate market for investors and homebuyers.",
      author: "Priya Sharma",
      date: "Apr 2025",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      title: "Home Loan Processing: Complete Guide for First-Time Buyers",
      description:
        "Everything you need to know about home loan processing and documentation requirements.",
      author: "Rahul Mehta",
      date: "May 2025",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      title: "Property Investment Strategies for 2025: Expert Analysis",
      description:
        "Expert insights on property investment strategies and market opportunities in 2025.",
      author: "Kavya Patel",
      date: "Jun 2025",
      image:
        "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 7,
      title:
        "Ahemdabad Police Caught A Frauder Who Duped People By Selling Fake Plots",
      description:
        "They Sell Fack Plots to people and then run away with the money they get.",
      author: "jayesh Mehta",
      date: "July 2025",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const slides = [];
  for (let i = 0; i < articles.length; i += 3) {
    slides.push(articles.slice(i, i + 3));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-25 bg-[#212121] py-12 px-4 pb-25">
      <div className="max-w-7xl mx-auto">
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            News & <span className="text-red-600">Articles</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Read what's happening in Real Estate
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="relative overflow-hidden rounded-2xl"
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {slide.map((article) => (
                    <div key={article.id} className="group cursor-pointer">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {article.description}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="text-sm text-gray-500 font-medium">
                              {article.author}
                            </span>
                            <span className="text-sm text-gray-400">
                              {article.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-red-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArticlesSlider;
