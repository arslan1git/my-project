"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-4">
                <Link href="/">Shop</Link>
                <Link href="/">On Sale</Link>
                <Link href="/">New Arrivals</Link>
                <Link href="/category">Brands</Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="text-xl font-bold">
            SHOP.CO
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/">Shop</Link>
            <Link href="/">On Sale</Link>
            <Link href="/">New Arrivals</Link>
            <Link href="/">Brands</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for products..."
              className="pl-9 w-[300px]"
            />
          </div>
          <Button variant="ghost" size="icon">
            <Link href="/cart">
            <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;