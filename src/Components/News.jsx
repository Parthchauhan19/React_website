import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsArticlesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:8000/news/getAll");
        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await res.json();
        setArticles(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const slides = [];
  for (let i = 0; i < articles.length; i += 3) {
    slides.push(articles.slice(i, i + 3));
  }

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  if (loading) {
    return (
      <div className="min-h-25 bg-[#212121] py-12 px-4 pb-25 flex justify-center items-center">
        <p className="text-white text-xl">Loading news...</p>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="min-h-25 bg-[#212121] py-12 px-4 pb-25 flex justify-center items-center">
        <p className="text-white text-xl">No news articles found.</p>
      </div>
    );
  }

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                  {slide.map((article) => (
                    <div
                      key={article._id || article.id}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
                        <div className="relative h-48 overflow-hidden flex-shrink-0">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                              {article.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                              {article.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
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
