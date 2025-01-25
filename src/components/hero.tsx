import React from "react";
import Image from "next/image";
import { HeroProps } from "@/types";

const Hero: React.FC<HeroProps> = ({ imageSrc }) => {
  return (
    <div className="px-4 sm:px-6 md:px-10">
      <div className=" mx-auto">
        <div className="relative w-full">
          <div className="w-[90vw] h-[86vh] md:w-full md:h-[92vh] md:aspect-square lg:max-h-[87vh] lg:aspect-[1.9] relative ">
            <div className="relative h-full w-full">
              <Image
                src={imageSrc}
                alt="Interior design showcase"
                fill
                priority
                sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 90vw,
                     1200px"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 sm:-bottom-8 w-full">
            <nav className="flex justify-center items-center space-x-2 sm:space-x-4">
              <a
                href="/fireplaces"
                className=" text-[#9C9C9D] hover:text-gray-800 transition-colors"
              >
                Fireplaces
              </a>
              <span className="text-[#9C9C9D]">|</span>
              <a
                href="/lighting"
                className=" text-[#9C9C9D] hover:text-gray-800 transition-colors"
              >
                Lighting
              </a>
              <span className="text-[#9C9C9D]">|</span>
              <a
                href="/furniture"
                className=" text-[#9C9C9D] hover:text-gray-800 transition-colors"
              >
                Furniture
              </a>
              <span className="text-[#9C9C9D]">|</span>
              <a
                href="/journal"
                className="  text-[#9C9C9D] hover:text-gray-800 transition-colors"
              >
                Journal
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
