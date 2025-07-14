import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PgColiving = () => {
  return (
    <>
      <div id="pg-coliving" className="bg-[#212121] min-h-screen">
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="mx-auto py-20"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-200 uppercase">
            Benefits of our{" "}
            <span className="text-red-600 text-4xl uppercase">
              PG / Co-Living
            </span>
          </h2>
          <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pt-8 pb-8 ml-80">
            <div className="text-center">
              <div className="w-36 h-36 bg-[#212121] flex items-center justify-center mx-auto">
                <div
                  style={{
                    backgroundImage: `url('./images/pgimg (3).png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-36 h-36  overflow-hidden mb-1 capitalize"
                ></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                Stress Free Search
              </h3>
              <p className="text-gray-400 text-sm">
                Real Property photos
                <br />
                And Transparent Pricing
              </p>
            </div>

            <div className="text-center">
              <div className="w-36 h-36 bg-[#212121] flex items-center justify-center mx-auto">
                <div
                  style={{
                    backgroundImage: `url('./images/pgimg (2).png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-36 h-36  overflow-hidden mb-1 capitalize"
                ></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                Find your Match
              </h3>
              <p className="text-gray-400 text-sm">
                Lots of options to choose from
                <br />
                (private, twin & multi-sharing)
              </p>
            </div>

            <div className="text-center">
              <div className="w-36 h-36 bg-[#212121] flex items-center justify-center mx-auto">
                <div
                  style={{
                    backgroundImage: `url('./images/pgimg (1).png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-36 h-36  overflow-hidden mb-1 capitalize"
                ></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                Bon appetite
              </h3>
              <p className="text-gray-400 text-sm">
                Info on meal type and
                <br />
                offerings to know what's
                <br />
                cooking
              </p>
            </div>

            <div className="text-center">
              <div className="w-36 h-36 bg-[#212121] flex items-center justify-center mx-auto">
                <div
                  style={{
                    backgroundImage: `url('./images/pgimg (4).png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-36 h-36  overflow-hidden mb-1 capitalize"
                ></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                Your Life, Your Rules
              </h3>
              <p className="text-gray-400 text-sm">
                Advance info on house
                <br />
                rules to live like you do
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="w-full bg-red-900 text-white py-8 px-6 rounded-lg mb-16"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 text-center gap-6 capitalize">
              <div>
                <div className="text-4xl font-bold mb-2">30k+</div>
                <div className="text-gray-300">Properties</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">40+</div>
                <div className="text-gray-300">Award Winner</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">35+</div>
                <div className="text-gray-300">Cities</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.5 Lakh+</div>
                <div className="text-gray-300">Monthly users</div>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="max-w-7xl mx-auto px-4 pt-10"
          >
            <div>
              <h2 className="text-3xl font-bold text-center mt-4 mb-12 text-gray-200 uppercase">
                Our handpicked <span className="text-red-600">Collections</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative group cursor-pointer">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="/images/secondpg (2).jpg"
                      alt="For Guys"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-opacity-40 flex items-end">
                      <div className="p-4">
                        <h3 className="text-white text-xl font-bold">
                          For boy&apos;s
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="relative group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="/images/secondpg (4).jpg"
                      alt="For Girls"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-opacity-40 flex items-end">
                      <div className="p-4">
                        <h3 className="text-white text-xl font-bold">
                          For Girl&apos;s
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="relative group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="/images/secondpg (3).jpg"
                      alt="Food Available"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0  bg-opacity-40 flex items-end">
                      <div className="p-4">
                        <h3 className="text-white text-xl font-bold">
                          Food Available
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="relative group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center"
                      alt="Private Room"
                      className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-opacity-40 flex items-end">
                      <div className="p-4">
                        <h3 className="text-white text-xl font-bold">
                          Private Room
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PgColiving;
