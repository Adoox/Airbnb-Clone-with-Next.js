import Image from "next/image";
import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineMenuFold,
  AiOutlineUser,
} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from "react-date-range";
import { dateRange, formatDateOptions } from "../types";
import { useRouter } from "next/router";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestsNumber, setGuestsNumber] = useState<number | string>(1);

  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (range: any) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };

  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toLocaleDateString("en-US", options),
        endDate: endDate.toLocaleDateString("en-US", options),
        numberOfGuests: guestsNumber,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* Left Side of the Header */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
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
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-xl font-bold flex-grow">Number of Guests</h2>
            <AiOutlineUser className="h-5" />
            <input
              type="number"
              value={guestsNumber}
              min={1}
              onChange={(event) => setGuestsNumber(event.target.value)}
              className="w-12 pl-2 outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-600 font-bold"
              onClick={() => setSearchInput("")}
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-red-400 font-bold"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
