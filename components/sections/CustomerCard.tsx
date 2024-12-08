"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { reviews } from "@/lib/data/reviews";
import { ReviewCard } from "../ui/review-card";

export default function CustomerReviews() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };
  return (
    <>
      <section className="container">
        <div className="text-center flex justify-around mb-12">
          <h2 className="text-2xl font-bold mb-4 md:text-5xl">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-5xl font-bold">4.9</span>
            <div className="text-left">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span className="text-2xl" key={i}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-muted-foreground">from 2,938 reviews</span>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
      <section className="bg-black max-w-7xl rounded-xl text-white">
        <div className="container px-8 w-full flex py-12">
          <h2 className="text-2xl w-1/2 font-bold mb-4 pl-9 md:text-3xl">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center w-1/2 gap-2"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-white/20 rounded-full text-black placeholder:text-black/60 pl-10 w-full"
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60" />
              </div>
              <Button
                type="submit"
                className="bg-white w-full rounded-full text-black hover:bg-white/90"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
