"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="bg-black max-w-7xl rounded-xl text-white">
      <div className="container px-8 w-full flex py-12">
        <h2 className="text-3xl w-1/2 font-bold mb-4 pl-9 md:text-4xl">
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
  <Button type="submit" className="bg-white w-full rounded-full text-black hover:bg-white/90">
    Subscribe to Newsletter
  </Button>
  </div>
</form>

      </div>
    </section>
  );
}
