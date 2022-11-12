import Image from "next/image";
import React from "react";
import { largeCardData } from "../types";

export default function LargeCard({
  img,
  title,
  description,
  buttonText,
}: largeCardData) {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          alt={title}
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-xl mt-5">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
