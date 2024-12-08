import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Content Overlay */}
      <div className="relative z-10 px-6 py-12 text-white sm:px-12 sm:py-16 md:py-24 lg:py-32">
        <h1 className="text-3xl font-bold max-w-[450px] sm:text-4xl md:text-5xl lg:text-6xl">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>
        <p className="mt-4 text-sm max-w-full sm:max-w-[450px] md:max-w-[530px] lg:text-base">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button size="lg" className="mt-8 rounded-full">
          Shop Now
        </Button>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Hero.png" // Update the path if needed
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/10" />
      </div>

      {/* Brand Logos */}
      <div className="relative w-full bg-black">
        <div className="flex flex-wrap justify-center gap-4 py-4 sm:gap-8 sm:py-6 lg:gap-12 lg:py-8">
          {["Versace", "Zara", "Gucci", "Prada", "Calvin Klein"].map((brand) => (
            <span
              key={brand}
              className="text-lg font-semibold text-white sm:text-xl md:text-2xl lg:text-3xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
