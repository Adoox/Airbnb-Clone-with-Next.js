import Image from "next/image";
import React from "react";
import {
  AiOutlineSearch,
  AiOutlineMenuFold,
  AiOutlineUser,
} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* Left Side of the Header */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          alt="airbnb"
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle of the Header*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your serach"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600"
        />
        <AiOutlineSearch className="hidden md:inline-flex h-8 w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Right Side of the Header*/}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <BsGlobe className="h-8 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 px-2 rounded-full">
          <AiOutlineMenuFold className="h-8 cursor-pointer" />
          <AiOutlineUser className="h-8 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
