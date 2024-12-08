import { cardReviews } from "@/lib/data/reviews";
import { ReviewCard } from "@/components/ui/review-card";
import { SortDesc } from "lucide-react";
import { Button } from "../ui/button";

export default function CardReview() {
  return (
    <section className="container">
      <div className="text-center my-12">
      <div className="flex items-center justify-between">
  {/* All Reviews */}
  <div className="text-base sm:text-lg font-bold">
    All Reviews <span>(2,938)</span>
  </div>
  
  {/* Sort and Write a Review */}
  <div className="flex gap-2 items-center">
    <SortDesc className="mr-2 sm:block" />
    <span className="font-medium text-sm sm:text-base hidden sm:block">Sort by:</span>
    <select className="border border-gray-300 rounded-md px-2 py-1 text-sm sm:text-base hidden sm:block">
      <option value="newest">Latest</option>
      <option value="oldest">Oldest</option>
    </select>
    <Button className="rounded-full text-sm sm:text-base">Write a Review</Button>
  </div>
</div>

      </div>
      {/* Updated Grid to always show two ReviewCards per row */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {cardReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      <Button className="mt-8 flex mx-auto px-8 rounded-full bg-white text-black hover:text-white border">Load More</Button>
    </section>
  );
}
