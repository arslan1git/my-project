import { ProductCard } from "../ui/product-card";
import { Button } from "../ui/button";
import { categoryCard } from "@/lib/data/products";
import React from "react";
import { SortDesc } from "lucide-react";
import Newsletter from "./Newsletter";

export default function Category() {
  return (
    <section className="container border-b px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Header Section */}
      <div className="flex items-center justify-between my-8">
        <h2 className="text-2xl font-bold md:text-4xl">Casual</h2>
        <div className="flex gap-2 items-center">
          <p className="text-sm sm:text-base text-gray-500">Showing 1-10 of 100 Products</p>
          <span className="font-medium text-sm sm:text-base hidden sm:block">Sort by:</span>
          <select className="border border-gray-300 rounded-md px-2 py-1 text-sm sm:text-base hidden sm:block">
            <option value="newest">Most Popular</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="grid grid-cols-2 border-b border-gray-500 pb-8 gap-4 md:grid-cols-3 lg:grid-cols-3">
        {categoryCard.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex flex-wrap justify-between items-center my-8 gap-2 md:gap-4">
        {/* Preview Button */}
        <Button className="px-4 sm:px-6 py-2 sm:py-3 border-[1px] hover:bg-black hover:text-white border-gray-400 bg-transparent text-black rounded-full">
          Preview
        </Button>

        {/* Responsive Pagination Buttons */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          <Button className="px-3 sm:px-4 py-2 sm:py-3 border-[1px] hover:bg-gray-400 border-gray-400 bg-transparent text-black text-xs sm:text-sm md:text-base lg:text-lg">
            1
          </Button>
          <Button className="px-3 sm:px-4 py-2 sm:py-3 border-[1px] hover:bg-gray-400 border-gray-400 bg-transparent text-black text-xs sm:text-sm md:text-base lg:text-lg">
            2
          </Button>
          <Button className="px-3 sm:px-4 py-2 sm:py-3 border-[1px] hover:bg-gray-400 border-gray-400 bg-transparent text-black text-xs sm:text-sm md:text-base lg:text-lg">
            3
          </Button>
          <Button className="px-3 sm:px-4 py-2 sm:py-3 border-[1px] hover:bg-gray-400 border-gray-400 bg-transparent text-black text-xs sm:text-sm md:text-base lg:text-lg">
            4
          </Button>
          <Button className="px-3 sm:px-4 py-2 sm:py-3 border-[1px] hover:bg-gray-400 border-gray-400 bg-transparent text-black text-xs sm:text-sm md:text-base lg:text-lg">
            5
          </Button>
        </div>

        {/* Next Button */}
        <Button className="px-4 sm:px-6 py-2 sm:py-3 border-[1px] hover:bg-black hover:text-white border-gray-400 bg-transparent text-black rounded-full">
          Next
        </Button>
      </div>
      <Newsletter />
    </section>
  );
}
