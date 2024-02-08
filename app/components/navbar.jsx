"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navbarRef = useRef(null);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // close navbar and dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
<div>    
    <nav
      className=" bg-[#FFEFED] w-full z-20 top-0 left-0 relative  "
      ref={navbarRef}
    >
      <div className="container xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[800px] px-3  sm:px-6 lg:px-8 mx-auto  md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <Link href="">
              <Image
                src="/images/eatsumu logo.png"
                alt="Your Company"
                width={151}
                height={45}
              />
              
            </Link>
            
          </div>
          <button
            type="button"
            className="md:hidden relative inline-flex items-center justify-center rounded-md  p-2 text-gray-400  hover-text-white "
            onClick={toggleNavbar}
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`md:flex items-center ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col p-2 md:p-0 mt-4 gap-4 sm:gap-6 font-medium items-center   rounded-lg  md:flex-row md:space-x-2 md:mt-0">
            <li>
              <Link href="/" className="">
                How it’s Work
              </Link>
            </li>
            <li>
              <Link href="/l" className="">
                Login
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/">
                <button
                  type="button"
                  className="text-[#FFFFFF]  rounded-[30px] border bg-[#EF4D3C] border-solid w-[130px]  h-[47px] text-[16px] font-semibold font-atma" 
                >
                  Meal Planer
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav></div>
  )
}

export default Navbar
