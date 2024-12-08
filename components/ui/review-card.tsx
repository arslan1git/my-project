import Image from "next/image";
import { Review } from "@/Types/review";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="rounded-lg border p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={review.image}
            alt={review.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{review.author}</h4>
          <div className="flex text-yellow-400">
            {Array.from({ length: review.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground">{review.comment}</p>
      <time className="mt-4 block text-sm text-muted-foreground">
        {new Date(review.date).toLocaleDateString()}
      </time>
    </div>
  );
}