import { Static } from "@/assets/images";
import { Img } from "@/components/molecules/lib";

const FeaturesOne = () => {
  return (
    <>
      <section className="py-8 lg:mt-0 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl space-y-10">
          <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <Img src={Static.CTAs} />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Superior standards
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Secure and stable — because where you trade crypto matters.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <Img src={Static.CTAd} />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Crypto decoded
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Our focus on education helps bring clarity to crypto.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <Img src={Static.CTAc} />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Trade commission-free
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Buy and sell bitcoin and ethereum with $0 commissions.
              </p>
            </div>

            {/* <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-gray-100"
                  width="62"
                  height="64"
                  viewBox="0 0 62 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z"></path>
                </svg>
                <svg
                  className="absolute text-gray-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Light & Dark Version
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div> */}
          </div>

          <div className="max-w-4xl mx-auto flex justify-center">
            <a
              href="/"
              className="flex justify-center items-center px-10 w-2/4 py-4 font-semibold text-white transition-all duration-200 bg-main-900 rounded-full hover:bg-main-800 focus:bg-main-800"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesOne;
