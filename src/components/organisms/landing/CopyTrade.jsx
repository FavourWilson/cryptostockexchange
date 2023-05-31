import { Static } from "@/assets/images";
import { Media } from "@/assets/videos";
import { Img } from "@/components/molecules/lib";

const CopyTrade = () => {
  return (
    <>
      <section className="py-10sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
            <div className="relative md:order-1">
              <Img
                className="absolute top-6 -right-4 xl:-right-1"
                src={Static.dotted}
                alt=""
              />

              <div className="relative max-w-xs mx-auto lg:mr-auto">
                <div className="overflow-hidden aspect-w-3 aspect-h-4 rounded-lg p-3 bg-main-900">
                  <Img
                    className="object-cover w-full h-full scale-150"
                    src={Static.WIC}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="md:order-2 lg:pl-16 lg:pr-10 md:pl-0 xl:pr-0">
              <h2 className="text-2xl text-center lg:text-left  font-bold leading-tight text-black sm:text-3xl lg:text-3xl">
                What is crypto?
              </h2>
              <p className="mt-4 text-base text-center lg:text-left py-2 lg:py-0 leading-relaxed text-gray-600">
                Cryptocurrency is a digital form of currency that's transferred
                peer-to-peer through the internet. betacapitals is here to help you
                gain access to assets like bitcoin, the first and largest asset
                in the growing category, with expertise in security and reliable
                support. betacapitals Crypto℠ is your key to unlocking the potential
                of digital assets for your portfolio.
              </p>

              {/* <div className="w-full flex justify-center lg:justify-start">
                  <a
                    href="#"
                    title="Get Started"
                    className=" mt-5 flex justify-center items-center px-10 w-1/2 lg:w-2/4 py-4 font-semibold text-black transition-all duration-200 bg-main-900 rounded-full hover:bg-main-800 focus:bg-main-800"
                    role="button"
                  >
                    Start Investing
                  </a>
                </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CopyTrade;
