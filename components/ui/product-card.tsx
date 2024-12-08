"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/Types/product";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href="card-detail" className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < product.rating ? "fill-current" : "stroke-current"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
