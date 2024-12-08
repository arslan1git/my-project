import { products } from "@/lib/data/products";
import { ProductCard } from "../ui/product-card";
import { Button } from "../ui/button";

export default function NewArrivals() {

  
    return (
      <section className="container border-b px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-center my-8">
          <h2 className="text-2xl font-bold md:text-5xl">NEW ARRIVALS</h2>
        </div>
        <div className="flex justify-end my-3">
          <a href="/shop" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center my-8">
          <Button className="px-16 py-5 border-[1px] hover:bg-blue-400 border-gray-400 bg-transparent text-black rounded-full">
            View All
          </Button>
        </div>
      </section>
    );
  }
  
