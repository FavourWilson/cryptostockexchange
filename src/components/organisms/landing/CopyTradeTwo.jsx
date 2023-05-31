import { Static } from "@/assets/images";
import { Media } from "@/assets/videos";
import { Img } from "@/components/molecules/lib";

const CopyTrade = () => {
  return (
    <>
      <section className="py-10 sm:py-16 lg:py-16">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
            <div className="relative md:order-2">
              <Img
                className="absolute top-6 -right-4 xl:-right-12"
                src={Static.dotted}
                alt=""
              />

              <div className="relative max-w-xs ml-auto">
                <div className="overflow-hidden aspect-w-3 aspect-h-4">
                  <Img
                    className="object-cover w-full h-full scale-100"
                    src={Static.CPG}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="md:order-1 lg:pl-16 lg:pr-10 md:pl-0 xl:pr-0">
              <h2 className="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-3xl text-center lg:text-left">
                How to start trading
              </h2>
              <p className="mt-4 text-base text-center lg:text-left py-2 lg:py-0 leading-relaxed text-gray-600">
                Open a Crypto Stock Exchange account in just minutes.
              </p>
              <p className="mt-4 text-base text-center lg:text-left py-2 lg:py-0 leading-relaxed text-gray-600">
                At the same time, we'll help you open an eligible betacapitals
                brokerage account — if you don't already have one—to fund your
                new crypto account.
              </p>
              <p className="mt-4 text-base text-center lg:text-left py-2 lg:py-0 leading-relaxed text-gray-600">
                Tell us how much crypto you want to buy or sell as a market or
                limit order.
              </p>

              <div className="w-full flex justify-center lg:justify-start">
                <a
                  href="#"
                  title="Get Started"
                  className=" mt-5 flex justify-center items-center px-10 w-full lg:w-2/4 py-4 font-semibold text-white transition-all duration-200 bg-main-900 rounded-full hover:bg-main-800 focus:bg-main-800"
                  role="button"
                >
                  Start Trading
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CopyTrade;
