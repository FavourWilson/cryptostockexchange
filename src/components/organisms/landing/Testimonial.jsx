"use client";
import { Scrollbar, Swiper, SwiperSlide } from "../../molecules/lib";
import "swiper/css";
import "swiper/css/scrollbar";

const Testimonial = () => {
  const getDeviceType = () => {
    let x;
    if (typeof window !== "undefined") {
      x = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
        window.navigator.userAgent
      )
        ? "Mobile"
        : "PC";
    }
    return x;
  };
  return (
    <>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Trusted by <span className="text-main-900">1M+</span> world class
              companies & treaders
            </h2>
          </div>
          {getDeviceType() === "Mobile" ? (
            <Swiper
              modules={[Scrollbar]}
              spaceBetween={15}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              className="mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 pb-5"
            >
              <SwiperSlide className="overflow-hidden bg-white rounded-md shadow-md">
                <div className="px-8 py-12">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      className="relative object-cover w-24 h-24 mx-auto rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                      alt=""
                    />
                    <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                      <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <blockquote className="mt-7">
                    <p className="text-lg text-black">
                      “I have been investing in cryptocurrencies for a long time, but this platform has taken my investment game to a whole new level. His advanced trading tools and accurate market predictions gave me an edge in the cryptocurrency market. Thanks to him, I was able to reach financial milestones I never thought possible.”
                    </p>
                  </blockquote>
                  <p className="text-base font-semibold tex-tblack mt-9">
                    Jenny Wilson
                  </p>
                  <p className="mt-1 text-base text-gray-600">
                    Project Manager at Microsoft
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="overflow-hidden bg-white rounded-md shadow-md">
                <div className="px-8 py-12">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      className="relative object-cover w-24 h-24 mx-auto rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg"
                      alt=""
                    />
                    <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                      <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <blockquote className="mt-7">
                    <p className="text-lg text-black">
                      “I am very satisfied with the results I got from this crypto investment platform. The simplicity of their interface combined with the wide variety of investment options made it easy for me to diversify my portfolio and maximize my profits. This is a solid platform with a lot of potential.”
                    </p>
                  </blockquote>
                  <p className="text-base font-semibold tex-tblack mt-9">
                    Robert Fox
                  </p>
                  <p className="mt-1 text-base text-gray-600">
                   New York
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="overflow-hidden bg-white rounded-md shadow-md">
                <div className="px-8 py-12">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      className="relative object-cover w-24 h-24 mx-auto rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
                      alt=""
                    />
                    <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                      <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <blockquote className="mt-7">
                    <p className="text-lg text-black">
                      “After joining this platform, I experienced positive results, even though I was skeptical about it at first. I have been able to make informed investment decisions because of the professionalism and market analysis of the team. I'm happy with my returns.”
                    </p>
                  </blockquote>
                  <p className="text-base font-semibold tex-tblack mt-9">
                    Kristin Watson
                  </p>
                  <p className="mt-1 text-base text-gray-600">
                    Australia
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          ) : (
            <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
              <div className="overflow-hidden bg-white rounded-md shadow-md">
                <div className="px-8 py-12">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      className="relative object-cover w-24 h-24 mx-auto rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                      alt=""
                    />
                    <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                      <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <blockquote className="mt-7">
                    <p className="text-lg text-black">
                                            “I am very satisfied with the results I got from this crypto investment platform. The simplicity of their interface combined with the wide variety of investment options made it easy for me to diversify my portfolio and maximize my profits. This is a solid platform with a lot of potential.”
                    </p>
                  </blockquote>
                  <p className="text-base font-semibold tex-tblack mt-9">
                    Jenny Wilson
                  </p>
                  <p className="mt-1 text-base text-gray-600">
                   Denmark
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-md shadow-md">
                <div className="px-8 py-12">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      className="relative object-cover w-24 h-24 mx-auto rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg"
                      alt=""
                    />
                    <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                      <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <blockquote className="mt-7">
                    <p className="text-lg text-black">
                                                “After joining this platform, I experienced positive results, even though I was skeptical about it at first. I have been able to make informed investment decisions because of the professionalism and market analysis of the team. I'm happy with my returns.”

                    </p>
                  </blockquote>
                  <p className="text-base font-semibold tex-tblack mt-9">
                    Robert Fox
                  </p>
                  <p className="mt-1 text-base text-gray-600">
                   New York
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-md shadow-md">
                <div className="px-8 py-12">
                  <div className="relative w-24 h-24 mx-auto">
                    <img
                      className="relative object-cover w-24 h-24 mx-auto rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
                      alt=""
                    />
                    <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                      <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <blockquote className="mt-7">
                    <p className="text-lg text-black">
                                           “After joining this platform, I experienced positive results, even though I was skeptical about it at first. I have been able to make informed investment decisions because of the professionalism and market analysis of the team. I'm happy with my returns.”

                    </p>
                  </blockquote>
                  <p className="text-base font-semibold tex-tblack mt-9">
                    Kristin Watson
                  </p>
                  <p className="mt-1 text-base text-gray-600">
                   Australia
                  </p>
                </div>
              </div>
            </div>
          )}
          <p
            className={`text-center text-gray-600 text-lg ${
              getDeviceType() === "Mobile" ? "mt-1" : "mt-8"
            }`}
          >
            <br className="inline-block lg:hidden" />
            <a
              href="#"
              title=""
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              View more
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
