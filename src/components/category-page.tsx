import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
interface CTA {
  label: string;
}

interface CategoryPageProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
  background?: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  title,
  description,
  image,
  primaryCTA,
  secondaryCTA,
  background,
}) => {
  return (
    <div style={{ background: background }}>
      <div className="max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-galaxie  text-gray-600">{title}</h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col justify-center items-center gap-2 ">
              <div>
                <button className="w-full px-8 py-1 border-2 border-gray-300 text-[#737373] hover:bg-gray-100  duration-200">
                  {primaryCTA?.label}
                </button>
              </div>
              <div>
                {secondaryCTA && (
                  <button className="w-full  px-8 py-1 border-2 border-gray-300 text-[#737373] hover:border-gray-400  duration-200">
                    {secondaryCTA.label}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full">
            <Image
              src={image}
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
