"use client";
import { Scrollbar, Swiper, SwiperSlide } from "../../molecules/lib";
import "swiper/css";
import "swiper/css/scrollbar";

const Blog = () => {
    const getDeviceType = () => {
      let x
      if (typeof window !== "undefined") {
          x =
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
                  window.navigator.userAgent
              )
                  ? "Mobile"
                  : "PC";
      }
    return x;
  };
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Our blog news
            </h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
             Get Latest news update on what's trending on Crypto
            </p>
          </div>

          {getDeviceType() === "Mobile" ? (
            <Swiper
              modules={[Scrollbar]}
              spaceBetween={15}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              className="mt-8 md:mt-16 pb-5"
            >
              <SwiperSlide>
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Admin
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        16 May, 2023.
                      </p>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                  Crypto price: Market fears crackdown amid ‘legal threats’ to Coinbase
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500 dark:text-gray-400">
                Coinbase, a leading cryptocurrency exchange, has stated that it has received "legal threats" after asking US regulators for clearer bitcoin rules.

On Wednesday, the Securities and Exchange Commission issued a Wells notice to Coinbase, indicating that the SEC intends to initiate enforcement action for alleged violations of securities laws.


"It's not a formal charge or lawsuit, but it can lead to one," Coinbase explained in a blog post on Wednesday.

"Relax, Coinbase products and services continue to operate normally - today's news necessitates no changes to our current products or services."

One of the Coinbase products under review is its staking service, which allows consumers to earn rewards by allocating a portion or all of their crypto balance to cryptocurrencies such as Ethereum (ETH).
                </p>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Admin
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        16 May, 2023.
                      </p>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                  Bitcoin price resurgence revives ‘digital gold’ comparisons
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500 dark:text-gray-400">
                 Bitcoin's recent price recovery has cemented the cryptocurrency's reputation as "digital gold" among certain commentators, who think it acts as a safe-haven asset during times of geopolitical and economic crises. Despite turbulence in the financial and technology sectors, the world's largest cryptocurrency is up more than 10% in the previous week.

                </p>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Admin
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        16 May, 2023
                      </p>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                  FTX boss accused of $40m bribe attempt
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sam Bankman-Fried, the creator of FTX, has been accused of attempting to pay a $40 million (£32 million) bribe to Chinese officials in order to unfreeze $1 billion in cryptocurrency.

It means that the disgraced cryptocurrency CEO now faces 13 criminal charges related to the defunct cryptocurrency exchange, which was forced to file for bankruptcy in November 2022 after doubts about its finances prompted a flood of withdrawals.
Sam Bankman-Fried, the creator of FTX, has been accused of attempting to pay a $40 million (£32 million) bribe to Chinese officials in order to unfreeze $1 billion in cryptocurrency.

It means that the disgraced cryptocurrency CEO now faces 13 criminal charges related to the defunct cryptocurrency exchange, which was forced to file for bankruptcy in November 2022 after doubts about its finances prompted a flood of withdrawals.

                </p>
              </SwiperSlide>
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <div>
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Admin
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        16 May, 2023.
                      </p>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                     Crypto price: Market fears crackdown amid ‘legal threats’ to Coinbase

                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Coinbase, a leading cryptocurrency exchange, has stated that it has received "legal threats" after asking US regulators for clearer bitcoin rules.

On Wednesday, the Securities and Exchange Commission issued a Wells notice to Coinbase, indicating that the SEC intends to initiate enforcement action for alleged violations of securities laws.


"It's not a formal charge or lawsuit, but it can lead to one," Coinbase explained in a blog post on Wednesday.

"Relax, Coinbase products and services continue to operate normally - today's news necessitates no changes to our current products or services."

One of the Coinbase products under review is its staking service, which allows consumers to earn rewards by allocating a portion or all of their crypto balance to cryptocurrencies such as Ethereum (ETH).
                </p>
              </div>

              <div>
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Admin
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        16 May, 2023.
                      </p>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                   Bitcoin price resurgence revives ‘digital gold’ comparisons
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  Bitcoin's recent price recovery has cemented the cryptocurrency's reputation as "digital gold" among certain commentators, who think it acts as a safe-haven asset during times of geopolitical and economic crises. Despite turbulence in the financial and technology sectors, the world's largest cryptocurrency is up more than 10% in the previous week.

                </p>
              </div>

              <div>
                <div className="relative">
                  <img
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                    src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                    alt=""
                  />

                  <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                    <img
                      className="object-cover object-center w-10 h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      alt=""
                    />

                    <div className="mx-4">
                      <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Admin
                      </h1>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        16 May,2023
                      </p>
                    </div>
                  </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                  FTX boss accused of $40m bribe attempt
                </h1>

                <hr className="w-32 my-6 text-blue-500" />

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sam Bankman-Fried, the creator of FTX, has been accused of attempting to pay a $40 million (£32 million) bribe to Chinese officials in order to unfreeze $1 billion in cryptocurrency.

It means that the disgraced cryptocurrency CEO now faces 13 criminal charges related to the defunct cryptocurrency exchange, which was forced to file for bankruptcy in November 2022 after doubts about its finances prompted a flood of withdrawals.
Sam Bankman-Fried, the creator of FTX, has been accused of attempting to pay a $40 million (£32 million) bribe to Chinese officials in order to unfreeze $1 billion in cryptocurrency.

It means that the disgraced cryptocurrency CEO now faces 13 criminal charges related to the defunct cryptocurrency exchange, which was forced to file for bankruptcy in November 2022 after doubts about its finances prompted a flood of withdrawals.
                </p>
              </div>
            </div>
          )}
          <p className="text-center text-gray-600 text-lg mt-9">
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

export default Blog;
