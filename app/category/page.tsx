"use client";
import Category from "@/components/sections/Category";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { ChevronRight } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import React, { useState } from "react";

type PriceRange = [number, number]; // Define a tuple type for the slider range.

function Page() {
  const [priceRange, setPriceRange] = useState<PriceRange>([50, 300]); // Default price range.
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // State to handle selected size

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      setPriceRange(value as PriceRange);
    }
  };

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "teal",
    "brown",
    "gray",
  ];

  const sizes = [
    "xx-small",
    "x-small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3x-Large",
    "4x-Large",
  ];

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="container gap-8 mx-auto px-4 py-6 lg:flex">
      {/* Filters Section - Hidden on Small Screens */}
      <aside className="hidden lg:block lg:w-1/4 rounded-lg p-4 bg-slate-100">
        {/* Header Section */}
        <div className="flex justify-between border-b pb-4 border-gray-500 items-center">
          <h1 className="text-xl font-bold">Filter</h1>
          <XMarkIcon className="h-6 w-6 cursor-pointer" />
        </div>

        {/* Categories Section */}
        <div className="flex flex-col border-b border-gray-500 py-6 gap-4">
          <div className="flex justify-between">
            <p>T-shirt</p>
            <ChevronRight />
          </div>
          <div className="flex justify-between">
            <p>Short</p>
            <ChevronRight />
          </div>
          <div className="flex justify-between">
            <p>Shirt</p>
            <ChevronRight />
          </div>
          <div className="flex justify-between">
            <p>Hoodie</p>
            <ChevronRight />
          </div>
          <div className="flex justify-between">
            <p>Jeans</p>
            <ChevronRight />
          </div>
        </div>

        {/* Price Range Slider Section */}
        <div className="mt-4 border-b border-gray-500 pb-4">
          <h3 className="font-semibold mb-2">Price</h3>
          <Slider
            range
            min={0}
            max={500}
            step={1}
            value={priceRange}
            onChange={handleSliderChange}
          />
          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <p>${priceRange[0]}</p> <p>${priceRange[1]}</p>
          </div>
        </div>

        {/* Color Options Section */}
        <div className="mt-6 border-b border-gray-500 pb-5">
          <h2 className="font-semibold mb-4">Color Options</h2>
          <div className="grid grid-cols-5 gap-4">
            {colors.map((color, index) => (
              <div
                key={index}
                className="h-10 w-10 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        {/* Size Options Section */}
        <div className="mt-6 border-b border-gray-500 pb-4">
          <h2 className="font-semibold mb-4">Size Options</h2>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(80px,_1fr))] gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`h-10 w-auto flex items-center justify-center rounded-full border px-2 cursor-pointer text-xs ${
                  selectedSize === size
                    ? "bg-gray-700 text-white"
                    : "bg-white text-gray-700 border-gray-500"
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Dress Style */}
        <div className="flex flex-col border-b border-gray-500 py-6 gap-4">
          <h3 className="font-semibold mb-2">Dress Style</h3>
          <div className="flex justify-between">
            <p>Casual</p>
            <ChevronRight />
          </div>
          <div className="flex justify-between">
            <p>Formal</p>
            <ChevronRight />
          </div>
          <div className="flex justify-between">
            <p>Party</p>
            <ChevronRight />
          </div>
          <div className="flex justify-between">
            <p>Gym</p>
            <ChevronRight />
          </div>
        </div>
      </aside>

      {/* Product Grid Section */}
      <Category />
    </div>
  );
}

export default Page;
