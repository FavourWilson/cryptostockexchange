const Faqs = () => {
  return (
    <>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              FAQs
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Have questions? Please check out the frequently asked questions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {" "}
                  How to create an account?{" "}
                </span>

                <svg
                  className="w-6 h-6 text-gray-400 rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Creating an account on a crypto broker site usually involves providing your personal information, including your name, email address, and phone number. You may also need to provide a government-issued ID and proof of address. Once your account is created, you can fund it and start trading.{" "}
                 
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {" "}
                  How do I withdraw my funds?{" "}
                </span>

                <svg
                  className="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                 Withdrawing your funds from a crypto broker site usually involves specifying the amount and the destination wallet address. Some platforms may also require additional verification before allowing withdrawals.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
              <div className="">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">
                    {" "}
                    Is betacapitals a secure platform?{" "}
                  </span>

                  <svg
                    className="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                     Yes, betacapitals takes security seriously and employs various measures to protect user information and funds.
                  </p>
                </div>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {" "}
                  How can I start investing with betacapitals?{" "}
                </span>

                <svg
                  className="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                 To start investing with betacapitals, you need to create an account on the website. Once your account is set up, you can deposit funds and start investing in the available cryptocurrencies.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 text-base mt-9">
            Didn’t find the answer you are looking for?{" "}
            <br className="inline-block lg:hidden" />
            <a
              href="#"
              title=""
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Contact our support
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Faqs
