import Image from "next/image";
import React from "react";

import { exploreData } from "../types";

export default function SmallCard({ img, location, distance }: exploreData) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* Left side*/}
      <div className="relative h-16 w-16">
        <Image alt={location} src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right side */}
      <div>
        <h2>{location}</h2>
        <h1 className="text-gray-500">{distance}</h1>
      </div>
    </div>
  );
}
