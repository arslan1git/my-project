"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Star, StarHalf } from "lucide-react";
import CardReview from "@/components/sections/CardReview";
const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Red");

  const handleIncrease = () => {
    if (quantity < 5) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };
  // Define the colors array with three color options
  const colors = ["#4F4631", "#314F3A", "#31344F"]; // Red, Blue, Green
  return (
    <>
      <section className="container mx-auto px-4 py-8 md:px-8 lg:px-12">
        {/* Main Section */}
        <div className="flex md:flex-row md:gap-8">
          {/* Thumbnails Section */}
          <div className="md:flex flex-col gap-2 md:w-[150px] md:h-[500px]">
            {["/Card1.png", "/Card2.png", "/Card3.png"].map((image, index) => (
              <div
                key={index}
                className="relative w-full h-[400px] md:h-1/3 cursor-pointer rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={image}
                  alt={`thumbnail ${index}`}
                  layout="fill"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Product Image */}
          <div className="relative flex-1 w-full md:w-1/2 h-96 md:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/Card2.png"
              alt="Main product"
              layout="fill"
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details Section */}
          <div className="w-full md:w-1/2 lg:max-w-xl mt-4 md:mt-0">
            {/* Product name */}
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>

            {/* Discount and Ratings */}
            <div className="flex items-start mt-4">
              {[...Array(4)].map((_, index) => (
                <Star key={index} className="text-yellow-400 w-5 h-5" />
              ))}

              {/* Render half star */}
              <StarHalf className="text-yellow-400 w-5 h-5" />

              <span className="text-center pl-3">(4.5)</span>
            </div>

            {/* Price */}
            <div className="flex flex-col border-b border[2px] pb-5 mt-4 gap-3 text-2xl font-semibold text-black">
              <div className="flex items-center gap-4">
                <span>$260</span>
                <span className="text-gray-500 line-through">$300</span>
                <span className="text-sm text-center p-2 bg-red-200 rounded-full font-medium text-red-500">
                  20% OFF
                </span>
              </div>

              <p className="text-sm text-gray-500">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>
            </div>

            {/* Dynamic Colors Section */}
            <div className="mt-4 border-b border[2px] pb-5">
              <h2 className="text-lg font-semibold mb-2">Select Color</h2>
              <div className="flex gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorSelect(color)}
                    className={`w-8 h-8 rounded-full`}
                    style={{
                      backgroundColor: color,
                      border:
                        selectedColor === color ? "3px solid black" : "none",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size Section */}
            <div className="mt-4 border-b border[2px] pb-5">
              <h2 className="text-base sm:text-lg font-semibold mb-2">
                Select Size
              </h2>
              <div className="flex flex-wrap gap-2">
                <button className="px-6 sm:px-8 py-2 text-sm sm:text-base border border-gray-500 hover:bg-black hover:text-white rounded-full">
                  Small
                </button>
                <button className="px-6 sm:px-8 py-2 text-sm sm:text-base border border-gray-500 hover:bg-black hover:text-white rounded-full">
                  Medium
                </button>
                <button className="px-6 sm:px-8 py-2 text-sm sm:text-base border border-gray-500 hover:bg-black hover:text-white rounded-full">
                  Large
                </button>
                <button className="px-6 sm:px-8 py-2 text-sm sm:text-base border border-gray-500 hover:bg-black hover:text-white rounded-full">
                  X-Large
                </button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex justify-center sm:flex-row items-center mt-4 gap-4 sm:gap-6">
              {/* Quantity Controls */}
              <div className="flex items-center gap-4 sm:gap-6 bg-gray-200 p-2 rounded-full shadow-sm">
                {/* Decrease Button */}
                <button
                  onClick={handleDecrease}
                  className={`w-8 h-8 flex items-center justify-center bg-transparent text-sm sm:text-base font-semibold  ${
                    quantity > 1 ? "text-black" : "cursor-not-allowed"
                  }`}
                  disabled={quantity <= 1}
                >
                  <Minus />
                </button>

                {/* Quantity Display */}
                <span className="text-lg sm:text-xl font-bold">{quantity}</span>

                {/* Increase Button */}
                <button
                  onClick={handleIncrease}
                  className={`w-8 h-8 flex items-center justify-center text-sm sm:text-base font-semibold bg-transparent ${
                    quantity < 5 ? "text-black" : "cursor-not-allowed"
                  }`}
                  disabled={quantity >= 5}
                >
                  <Plus />
                </button>
              </div>

              {/* Add to Cart Button */}
              <div className="w-full sm:w-auto">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 w-1/2 sm:w-40 px-6 py-3 text-sm sm:text-base font-semibold rounded-md shadow-md">
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-8 md:px-2 lg:px-12">
        <div className="flex justify-between items-center gap-6 mx-6">
          {/* Product Details */}
          <p className="text-lg sm:text-xl md:text-2xl text-center">
            Product Details
          </p>
          {/* Ratings & Review */}
          <p className="text-lg sm:text-xl md:text-2xl text-center underline">
            Ratings & Review
          </p>
          {/* FAQs */}
          <p className="text-lg sm:text-xl md:text-2xl text-center">FAQs</p>
        </div>

        <CardReview />
      </section>
    </>
  );
};

export default ProductDetail;
