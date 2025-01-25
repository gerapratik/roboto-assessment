"use client";
import { useState, useEffect } from "react";
import { FC } from "react";
import Image from "next/image";

import { Product } from "@/types";

interface ProductGridProps {
  heading: string;
  products: Product[];
  gridType: "lighting" | "stories" | "furniture";
}

const ProductGrid: FC<ProductGridProps> = ({ heading, products, gridType }) => {
  const [isMediumDevice, setIsMediumDevice] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMediumDevice(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const displayedProducts = isMediumDevice ? products.slice(0, 4) : products;

  return (
    <div className="w-full py-16 bg-[#E3E3E3]">
      <h2 className="text-center font-galaxie text-2xl mb-4">{heading}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-x-8 gap-y-16  mx-auto px-4">
        {displayedProducts.map((product, index) => (
          <div key={index} className="flex flex-col justify-between h-full">
            <div className="flex justify-center items-start w-full mb-6">
              <div
                className={`relative w-full ${
                  gridType === "furniture" ? "aspect-[0.7]" : "aspect-[1/1]"
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-galaxie text-lg">{product.title}</h3>
              <p className="font-galaxie text-gray-600 mt-1">
                {product.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
