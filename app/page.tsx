import NewArrivals from "@/components/sections/NewArrival";
import TopSelling from "@/components/sections/TopSelling";
import DressStyle from "@/components/sections/DressStyle";
import CustomerReviews from "@/components/sections/CustomerCard";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-16 md:gap-24">
      <Hero />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <CustomerReviews />
      {/* <Newsletter /> */}
    </main>
  );
}
