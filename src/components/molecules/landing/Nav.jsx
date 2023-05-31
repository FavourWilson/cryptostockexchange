"use client";
import Text from "@/components/atoms/Text";
import MobileNav from "./MobileNav";
import NavButtonGroup from "./NavButtonGroup";
import { Avatar, Dropdown } from "../lib";

const Nav = () => {
  const login = !!0;
  return (
    <>
      <header className="hidden lg:block bg-main-900 mx-auto max-w-7xl z-50">
        <div className="flex justify-between py-2 px-5 items-center border-b-2 border-gray-300">
          <div className="flex justify-between items-center">
            <div>
              <Text level={1} className={"text-white font-base capitalize italic"}>
                <span className="text-white font-bold uppercase">Crypto </span>
                Stock Exchange
              </Text>
            </div>
            <div className="flex justify-between items-center gap-2 pl-4">
             
              <div className="text-sm font-semibold border-r-2 text-white cursor-pointer hover:bg-main-800 border-white px-2">
                OPEN AN ACCOUNT
              </div>
              
              <div className="text-sm font-semibold px-2 text-white cursor-pointer hover:bg-main-800">LOG IN</div>
            </div>
          </div>
          <div>
            <form>
              <div className="flex">
                <div className="relative w-[250px]">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-1 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-2 border border-gray-300 focus:ring-main-500 focus:border-main-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-main-500"
                    placeholder="Search or get Quote..."
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 p-1.5 text-sm font-medium text-white bg-main-700 rounded-r-lg border border-main-700 hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-main-300 dark:bg-main-600 dark:hover:bg-main-700 dark:focus:ring-main-800"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
      </header>
    </>
  );
};

export default Nav;
