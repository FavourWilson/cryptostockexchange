"use client"
import { useState } from "react";
import { Dropdown, Avatar } from "../lib";
import NavButtonGroup from "./NavButtonGroup";
import Text from "@/components/atoms/Text";

const MobileNav = ({ login }) => {
  const [isOpen, setIsOpen] = useState(!!0);

  const setOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="block bg-main-900 lg:hidden">
        <div className="flex md:order-2 px-3 py-2 w-full justify-between">
          <Dropdown
            arrowIcon={!!0}
            inline={!!1}
            label={
              login ? (
                <Avatar
                  alt="User avatar"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={!!1}
                />
              ) : (
                <button
                  type="button"
                  onClick={setOpen}
                  className="inline-flex p-2 text-black transition-all duration-200 bg-gray-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={`${
                        isOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"
                      }`}
                    ></path>
                  </svg>
                </button>
              )
            }
          >
            <div className="w-[350px] pl-[3%]">
              <div className="flex flex-col space-y-5 justify-center">
                 <Dropdown.Item>
                  <p className="font-semibold">Contact Us</p>
                </Dropdown.Item>
                <Dropdown.Item>
                  <p className="font-semibold">About Us</p>
                </Dropdown.Item>
               
                <Dropdown.Item>
                  <p className="font-semibold">Create Account</p>
                </Dropdown.Item>
               
              </div>
              <Dropdown.Divider />
              <Dropdown.Item>
                <NavButtonGroup state={login} />
              </Dropdown.Item>
            </div>
          </Dropdown>
          <Text level={1} className={"text-white font-base capitalize italic"}>
            <span className="text-white font-bold uppercase">Crypto</span>
            Stock Exchange
          </Text>
          <button type="button" className="text-white text-base">
            {" "}
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
