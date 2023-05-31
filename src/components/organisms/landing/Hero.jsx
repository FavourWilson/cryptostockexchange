import { Static } from "@/assets/images";
import Nav from "@/components/molecules/landing/Nav";
import { Img } from "@/components/molecules/lib";

const Hero = () => {
  return (
    <>
      <div className="bg-white">
        <section className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-7xl">
            {/* <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"> */}
            <div className="text-left bg-Hero-sm md:bg-Hero-md lg:bg-Hero-lg h-[550px] pt-12 lg:pt-0 lg:h-[400px] bg-cover bg-no-repeat bg-right-bottom px-[4%] lg:px-[3%]">
              <div className="flex flex-col justify-center lg:h-full lg:max-w-2xl">
                <h1 className="mt-2 text-3xl font-bold text-white lg:mt-1 xl:text-5xl capitalize">
                  Trade crypto
                </h1>
                <p className="mt-4 text-base text-white lg:mt-8 sm:text-lg">
                  Tap into the new crypto frontier with a trusted leader.
                  Introducing Crypto Stock Exchange, a breakthrough way to trade bitcoin
                  and ethereum in the same app where you trade stocks.
                </p>

                <div className="flex flex-col md:flex-row items-start lg:items-center justify-start gap-2 md:gap-10 mt-5 ">
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center px-4 py-2 font-semibold text-white transition-all duration-200 bg-main-900 rounded-full hover:bg-main-800 focus:bg-main-800"
                    role="button"
                  >
                    Open a Crypto Stock Exchange Account
                    <svg
                      className="w-6 h-6 ml-5 -mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>

                  <p className="text-white">
                    Already joined us?{" "}
                    <a
                      href="#"
                      title=""
                      className="text-white transition-all duration-200 hover:underline hover:text-main-900"
                    >
                      Log in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* <div>
                <Img className="w-full" src={Static.TradeS} alt="" width="300" height="300"/>
              </div> */}
            {/* </div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
